import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Trophy,
  AlertTriangle,
  BookmarkCheck,
  ChevronRight,
  Filter,
  Check,
  Pause,
  Play,
  FileCheck,
  BarChart2,
  Sparkles,
  BookOpen,
  Award,
  Flame,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { CategoryId, Flashcard, UserStats, MockTestResult, ActiveMockConfig } from '../types';
import { CATEGORIES } from '../data/initialDecks';
import { recordStudyActivity, saveMockTestResult, loadMockTestResults } from '../utils/storage';
import { playStreakCelebration, fireConfetti } from '../utils/audio';
import {
  FULL_MOCKS_META,
  TOTAL_MOCKS_COUNT,
  getQuestionsForFullMock,
  getQuestionsForSectionMock,
  FullMockMeta,
} from '../data/mockTests';

interface MockTestModeProps {
  cards: Flashcard[];
  userStats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  activeMockConfig?: ActiveMockConfig | null;
  onClearActiveMockConfig?: () => void;
}

const TOTAL_TEST_TIME = 120 * 60; // 120 minutes = 7200 seconds
const MARKS_PER_CORRECT = 1.0;
const NEGATIVE_MARK = 0.25;

type TestStatus = 'idle' | 'running' | 'paused' | 'submitted';
type QuestionStatus = 'unvisited' | 'answered' | 'review' | 'review_answered';

interface UserAnswerState {
  selectedOption: string | null;
  isMarkedForReview: boolean;
  timeSpentSeconds: number;
}

export const MockTestMode: React.FC<MockTestModeProps> = ({
  cards,
  userStats,
  onUpdateStats,
  activeMockConfig,
  onClearActiveMockConfig,
}) => {
  // Test Setup Config
  const [selectedSection, setSelectedSection] = useState<CategoryId | 'all'>('all');
  const [currentTestNumber, setCurrentTestNumber] = useState<number | null>(1);
  const [currentTestTitle, setCurrentTestTitle] = useState('FAA Mock Test 01 • Official Blueprint Baseline');
  const [testQuestions, setTestQuestions] = useState<Flashcard[]>([]);
  const [testStatus, setTestStatus] = useState<TestStatus>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tab on the idle dashboard: 'full' | 'sections' | 'history'
  const [hubTab, setHubTab] = useState<'full' | 'sections' | 'history'>('full');

  // User state map: question index -> answer state
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerState>>({});

  // Timer: 120 minutes = 7200s
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_TEST_TIME);

  // Review & Scorecard state
  const [testResult, setTestResult] = useState<MockTestResult | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct' | 'unattempted' | 'review'>('all');
  const [paletteFilterSection, setPaletteFilterSection] = useState<CategoryId | 'all'>('all');
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [savedResults, setSavedResults] = useState<MockTestResult[]>([]);

  // Load previous mock test results
  useEffect(() => {
    setSavedResults(loadMockTestResults());
  }, []);

  // Handler to start Full Syllabus Mock Test (1 to 10)
  const handleStartFullMock = useCallback((testNum: number) => {
    const meta = FULL_MOCKS_META.find((m) => m.testNumber === testNum) || FULL_MOCKS_META[0];
    const questions = getQuestionsForFullMock(cards, testNum);
    if (questions.length === 0) return;

    setCurrentTestNumber(testNum);
    setCurrentTestTitle(`${meta.title} • ${meta.subtitle}`);
    setSelectedSection('all');
    setTestQuestions(questions);
    setCurrentIndex(0);
    setUserAnswers({});
    setSecondsLeft(TOTAL_TEST_TIME);
    setTestStatus('running');
    setTestResult(null);
    setShowSubmitModal(false);
    setPaletteFilterSection('all');
  }, [cards]);

  // Handler to start Sectional 120-Q Mock Test
  const handleStartSectionMock = useCallback((catId: CategoryId) => {
    const catMeta = CATEGORIES.find((c) => c.id === catId);
    const questions = getQuestionsForSectionMock(cards, catId);
    if (questions.length === 0) return;

    setCurrentTestNumber(null);
    setCurrentTestTitle(`${catMeta?.name || catId} 120-Q Intensive Mock`);
    setSelectedSection(catId);
    setTestQuestions(questions);
    setCurrentIndex(0);
    setUserAnswers({});
    setSecondsLeft(TOTAL_TEST_TIME);
    setTestStatus('running');
    setTestResult(null);
    setShowSubmitModal(false);
    setPaletteFilterSection('all');
  }, [cards]);

  // React to external activeMockConfig triggers from Header or navigation
  useEffect(() => {
    if (!activeMockConfig) return;

    if (activeMockConfig.type === 'full') {
      if (activeMockConfig.testNumber && activeMockConfig.autoStart) {
        handleStartFullMock(activeMockConfig.testNumber);
      } else if (activeMockConfig.testNumber) {
        setHubTab('full');
        setCurrentTestNumber(activeMockConfig.testNumber);
      } else {
        setHubTab('full');
        setTestStatus('idle');
      }
    } else if (activeMockConfig.type === 'section') {
      if (activeMockConfig.sectionId && activeMockConfig.autoStart) {
        handleStartSectionMock(activeMockConfig.sectionId as CategoryId);
      } else {
        setHubTab('sections');
        setTestStatus('idle');
      }
    }

    if (onClearActiveMockConfig) {
      onClearActiveMockConfig();
    }
  }, [activeMockConfig, handleStartFullMock, handleStartSectionMock, onClearActiveMockConfig]);

  // Timer ticker
  useEffect(() => {
    if (testStatus !== 'running') return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTestFinal();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStatus]);

  // Format seconds to HH:MM:SS
  const formatTime = (totalSeconds: number): string => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const currentQuestion = testQuestions[currentIndex];
  const currentAnswerState = userAnswers[currentIndex] || {
    selectedOption: null,
    isMarkedForReview: false,
    timeSpentSeconds: 0,
  };

  // Handle option select
  const handleSelectOption = (option: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: {
        ...(prev[currentIndex] || { isMarkedForReview: false, timeSpentSeconds: 0 }),
        selectedOption: option,
      },
    }));
  };

  // Clear current response
  const handleClearResponse = () => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: {
        ...(prev[currentIndex] || { timeSpentSeconds: 0 }),
        selectedOption: null,
        isMarkedForReview: false,
      },
    }));
  };

  // Toggle Mark for Review
  const handleToggleReview = () => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: {
        ...(prev[currentIndex] || { selectedOption: null, timeSpentSeconds: 0 }),
        isMarkedForReview: !prev[currentIndex]?.isMarkedForReview,
      },
    }));
    // Auto advance if not at end
    if (currentIndex < testQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Get status of question at index
  const getQuestionStatus = (idx: number): QuestionStatus => {
    const ans = userAnswers[idx];
    if (!ans) return 'unvisited';
    if (ans.isMarkedForReview && ans.selectedOption) return 'review_answered';
    if (ans.isMarkedForReview) return 'review';
    if (ans.selectedOption) return 'answered';
    return 'unvisited';
  };

  // Counts of answered, review, unattempted
  const testStats = useMemo(() => {
    let answered = 0;
    let review = 0;
    let unattempted = 0;

    for (let i = 0; i < testQuestions.length; i++) {
      const state = userAnswers[i];
      if (state?.selectedOption) {
        answered++;
      } else {
        unattempted++;
      }
      if (state?.isMarkedForReview) {
        review++;
      }
    }

    return {
      answered,
      review,
      unattempted,
      total: testQuestions.length,
    };
  }, [testQuestions.length, userAnswers]);

  // Submit test and calculate comprehensive score & breakdowns
  const handleSubmitTestFinal = () => {
    const timeTaken = TOTAL_TEST_TIME - secondsLeft;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    const breakdownMap: Record<
      CategoryId,
      { total: number; correct: number; incorrect: number; unattempted: number; score: number }
    > = {} as any;

    CATEGORIES.forEach((cat) => {
      breakdownMap[cat.id] = { total: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 };
    });

    testQuestions.forEach((q, idx) => {
      const cat = q.categoryId;
      if (!breakdownMap[cat]) {
        breakdownMap[cat] = { total: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 };
      }
      breakdownMap[cat].total += 1;

      const userAns = userAnswers[idx]?.selectedOption;
      if (!userAns) {
        unattempted++;
        breakdownMap[cat].unattempted += 1;
      } else if (userAns === q.answer) {
        correct++;
        breakdownMap[cat].correct += 1;
        breakdownMap[cat].score += MARKS_PER_CORRECT;
      } else {
        incorrect++;
        breakdownMap[cat].incorrect += 1;
        breakdownMap[cat].score -= NEGATIVE_MARK;
      }
    });

    const negativeDeduction = incorrect * NEGATIVE_MARK;
    const rawScore = correct * MARKS_PER_CORRECT - negativeDeduction;
    const finalScore = Math.max(0, Math.round(rawScore * 100) / 100);
    const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 1000) / 10 : 0;

    const sectionBreakdown = Object.entries(breakdownMap)
      .filter(([_, data]) => data.total > 0)
      .map(([catId, data]) => {
        const catMeta = CATEGORIES.find((c) => c.id === catId);
        return {
          sectionId: catId as CategoryId,
          sectionName: catMeta ? catMeta.name : catId,
          total: data.total,
          correct: data.correct,
          incorrect: data.incorrect,
          unattempted: data.unattempted,
          score: Math.round(data.score * 100) / 100,
        };
      });

    const result: MockTestResult = {
      id: `mock-${Date.now()}`,
      title: currentTestTitle,
      sectionId: selectedSection,
      testNumber: currentTestNumber || undefined,
      date: new Date().toISOString(),
      totalQuestions: testQuestions.length,
      timeTakenSeconds: timeTaken,
      totalTimeSeconds: TOTAL_TEST_TIME,
      score: finalScore,
      maxMarks: testQuestions.length * MARKS_PER_CORRECT,
      correctCount: correct,
      incorrectCount: incorrect,
      unattemptedCount: unattempted,
      accuracy,
      negativeDeduction,
      sectionBreakdown,
    };

    // Save result to storage
    const updatedHistory = saveMockTestResult(result);
    setSavedResults(updatedHistory);
    setTestResult(result);
    setTestStatus('submitted');
    setShowSubmitModal(false);

    // Audio & celebratory confetti
    playStreakCelebration();
    fireConfetti();

    // Award XP based on score
    const xpEarned = Math.round(finalScore * 10);
    if (xpEarned > 0) {
      const updatedStats = recordStudyActivity(
        selectedSection === 'all' ? 'accounting' : selectedSection,
        true,
        xpEarned
      );
      onUpdateStats(updatedStats);
    }
  };

  // Filtered review questions
  const filteredReviewIndices = useMemo(() => {
    if (!testResult) return [];
    return testQuestions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q, idx }) => {
        const userAns = userAnswers[idx]?.selectedOption;
        const isMarked = userAnswers[idx]?.isMarkedForReview;
        const isCorrect = userAns === q.answer;

        if (reviewFilter === 'all') return true;
        if (reviewFilter === 'correct') return userAns && isCorrect;
        if (reviewFilter === 'incorrect') return userAns && !isCorrect;
        if (reviewFilter === 'unattempted') return !userAns;
        if (reviewFilter === 'review') return isMarked;
        return true;
      })
      .map((item) => item.idx);
  }, [testResult, testQuestions, userAnswers, reviewFilter]);

  // Question indices visible in palette
  const visiblePaletteIndices = useMemo(() => {
    if (paletteFilterSection === 'all') {
      return Array.from({ length: testQuestions.length }, (_, i) => i);
    }
    return testQuestions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => q.categoryId === paletteFilterSection)
      .map(({ idx }) => idx);
  }, [testQuestions, paletteFilterSection]);

  // Helper to find best score for a specific mock test number
  const getBestScoreForMock = (testNum: number) => {
    const attempts = savedResults.filter((r) => r.testNumber === testNum);
    if (attempts.length === 0) return null;
    return Math.max(...attempts.map((r) => r.score));
  };

  // -------------------------------------------------------------
  // VIEW 1: PORTAL / SELECTION DASHBOARD (10 FULL MOCKS + SECTIONALS)
  // -------------------------------------------------------------
  if (testStatus === 'idle') {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 animate-fade-in">
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900/70 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>JKSSB Official FAA CBT Simulator • 5 Full Syllabus Mocks</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                120 Questions · 120 Minutes CBT Series
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Practice with <strong>5 Full Syllabus Mock Exams</strong> created strictly to the official JKSSB Finance Accounts Assistant (FAA) blueprint. Every mock contains <strong>120 all-different questions</strong> (600 unique questions in total) with strict 120-minute countdown, -0.25 negative marking, and real-time CBT palette.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-200">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  120 Minutes (2.0 Hrs)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-200">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                  120 MCQs · 120 Marks
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  +1.00 / -0.25 Negative Marking
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-xs font-bold text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Zero Question Overlap
                </span>
              </div>
            </div>

            {/* Quick launch Mock 01 CTA */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col gap-2.5">
              <button
                onClick={() => handleStartFullMock(1)}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-indigo-600/40 transition-all hover:scale-102 active:scale-98 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Launch Mock Test 01</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <p className="text-[11px] text-center text-slate-400 font-mono">
                Full Blueprint (30 GK + 30 Acc + 60 Other)
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation: 5 Full Syllabus Mocks vs Sectional Drills vs Past Results */}
        <div className="flex border-b border-slate-800 gap-2 sm:gap-4 overflow-x-auto pb-px">
          <button
            onClick={() => setHubTab('full')}
            className={`flex items-center gap-2 px-4 py-3 rounded-t-xl font-bold text-sm transition cursor-pointer border-b-2 ${
              hubTab === 'full'
                ? 'border-indigo-500 text-white bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>5 Full Syllabus FAA Mock Tests</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
              5
            </span>
          </button>

          <button
            onClick={() => setHubTab('sections')}
            className={`flex items-center gap-2 px-4 py-3 rounded-t-xl font-bold text-sm transition cursor-pointer border-b-2 ${
              hubTab === 'sections'
                ? 'border-indigo-500 text-white bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Section-Wise 120-Q Intensive Mocks</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
              9
            </span>
          </button>

          <button
            onClick={() => setHubTab('history')}
            className={`flex items-center gap-2 px-4 py-3 rounded-t-xl font-bold text-sm transition cursor-pointer border-b-2 ${
              hubTab === 'history'
                ? 'border-indigo-500 text-white bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Past Test History & Scorecards</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
              {savedResults.length}
            </span>
          </button>
        </div>

        {/* TAB 1: 10 FULL SYLLABUS MOCK TESTS */}
        {hubTab === 'full' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span>5 Complete FAA Mock Tests (100% Unique Questions)</span>
                </h2>
                <p className="text-xs text-slate-400">
                  Every test has 120 distinct questions matching the official FAA pattern: 30 GK (J&K Special) + 30 Accountancy + 10 English + 10 Statistics + 10 Math + 10 Economics + 10 Science + 10 Computers.
                </p>
              </div>
              <span className="text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-center">
                600 Total Unique Questions
              </span>
            </div>

            {/* Grid of 5 Full Mocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FULL_MOCKS_META.map((mock) => {
                const bestScore = getBestScoreForMock(mock.testNumber);
                const hasAttempted = bestScore !== null;

                return (
                  <div
                    key={mock.testNumber}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/60 transition-all group flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-black px-2 py-0.5 rounded-lg border ${mock.badgeColor}`}>
                            {mock.shortTitle}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                            {mock.difficulty}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> 120m · 120 Qs
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-base font-extrabold text-white group-hover:text-indigo-300 transition">
                        {mock.title}: {mock.subtitle}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {mock.description}
                      </p>

                      {/* Question Pattern Breakdown Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-amber-300">30 GK</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-emerald-300">30 Acc</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-blue-300">10 Eng</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-purple-300">10 Stat</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-rose-300">10 Math</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-sky-300">10 Econ</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-teal-300">10 Sci</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/90 text-indigo-300">10 CS</span>
                      </div>
                    </div>

                    {/* Bottom Action & Best Score */}
                    <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                      <div>
                        {hasAttempted ? (
                          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                            <Trophy className="w-3.5 h-3.5 text-amber-400" />
                            Best: {bestScore} / 120
                          </span>
                        ) : (
                          <span className="text-[11px] font-medium text-slate-500">
                            Not attempted yet
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleStartFullMock(mock.testNumber)}
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition cursor-pointer flex items-center gap-1.5 group-hover:translate-x-0.5"
                      >
                        <span>{hasAttempted ? 'Retake Exam' : 'Start 120m Exam'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: SECTION-WISE 120-Q MOCKS */}
        {hubTab === 'sections' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Section-Wise 120-Question Intensive Mocks</span>
              </h2>
              <p className="text-xs text-slate-400">
                Drill deep into any individual syllabus section with a dedicated 120-question, 120-minute CBT mock.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATEGORIES.map((cat) => {
                const count = cards.filter((c) => c.categoryId === cat.id).length;
                return (
                  <div
                    key={cat.id}
                    onClick={() => handleStartSectionMock(cat.id)}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${cat.bgLight}`}>
                          {cat.badge}
                        </span>
                        <span className="text-xs font-mono font-semibold text-slate-400">
                          120 Qs · 120m
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-medium">
                        Pool: {count} questions
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
                        Take Mock <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: PAST RESULTS & SCORECARDS */}
        {hubTab === 'history' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>Your Mock Test Attempt History</span>
              </h2>
              <p className="text-xs text-slate-400">
                Review your scores, net marks after negative deductions, time taken, and official question solutions.
              </p>
            </div>

            {savedResults.length === 0 ? (
              <div className="p-8 text-center bg-slate-900 rounded-3xl border border-slate-800 space-y-3">
                <FileCheck className="w-10 h-10 text-slate-600 mx-auto" />
                <h3 className="text-sm font-bold text-white">No Mock Tests Attempted Yet</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Take any of the 5 Full Syllabus Mocks above to benchmark your score under official CBT conditions!
                </p>
                <button
                  onClick={() => handleStartFullMock(1)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition cursor-pointer"
                >
                  Start Mock Test 01
                </button>
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/80">
                {savedResults.map((res) => {
                  const dateStr = new Date(res.date).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  });
                  const minutesTaken = Math.round(res.timeTakenSeconds / 60);

                  return (
                    <div
                      key={res.id}
                      className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-850/50 transition"
                    >
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm text-white">{res.title}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                            {res.totalQuestions} Questions
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">
                          {dateStr} · Time taken: {minutesTaken} mins out of 120m
                        </span>
                      </div>

                      <div className="flex items-center gap-4 sm:gap-6 self-end sm:self-center">
                        <div className="text-right">
                          <span className="text-xs text-slate-400 block">Net Marks</span>
                          <span className="text-base font-black text-indigo-400">
                            {res.score} <span className="text-xs font-normal text-slate-500">/ {res.maxMarks}</span>
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="text-xs text-slate-400 block">Accuracy</span>
                          <span className="text-base font-bold text-emerald-400">
                            {res.accuracy}%
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            setTestResult(res);
                            setTestStatus('submitted');
                          }}
                          className="px-3.5 py-1.5 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-xs font-bold text-white transition cursor-pointer"
                        >
                          Review Solutions
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: ACTIVE 120-MINUTE CBT EXAM ENGINE
  // -------------------------------------------------------------
  if (testStatus === 'running' || testStatus === 'paused') {
    const isPaused = testStatus === 'paused';
    const isTimeUrgent = secondsLeft < 900; // < 15 mins
    const isTimeCritical = secondsLeft < 300; // < 5 mins

    // Current category metadata
    const activeCat = CATEGORIES.find((c) => c.id === currentQuestion?.categoryId);

    return (
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
        {/* Sticky CBT Control Header */}
        <div className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-2.5 sm:p-4 shadow-xl space-y-2">
          {/* Row 1: Title / Badge + Timer + Pause + Submit */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="p-1.5 sm:p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xs sm:text-sm text-white truncate max-w-[130px] sm:max-w-xs">
                    {currentTestTitle.split('•')[0].trim()}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono shrink-0">
                    120Q
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Pause / Resume */}
              <button
                onClick={() => setTestStatus(isPaused ? 'running' : 'paused')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 active:bg-slate-700 text-xs font-medium text-slate-300 transition cursor-pointer"
                title={isPaused ? 'Resume exam' : 'Pause exam'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
                <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
              </button>

              {/* Countdown Display */}
              <div
                className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-black border transition-all ${
                  isTimeCritical
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                    : isTimeUrgent
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-cyan-300 border-slate-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{formatTime(secondsLeft)}</span>
              </div>

              {/* Submit Button */}
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Row 2: Status pill and Mobile Palette Drawer Trigger */}
          <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-800/80 text-[11px] sm:text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span>Q <strong className="text-white">{currentIndex + 1}</strong>/120</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">{testStats.answered} Ans</span>
              <span>•</span>
              <span className="text-purple-400 font-semibold">{testStats.review} Rev</span>
            </div>

            {/* Mobile Question Palette button */}
            <button
              onClick={() => setIsMobilePaletteOpen(true)}
              className="lg:hidden flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600/30 active:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold cursor-pointer transition active:scale-95"
            >
              <Layers className="w-3 h-3 text-indigo-400" />
              <span>Palette (120)</span>
            </button>
          </div>
        </div>

        {/* If Paused overlay */}
        {isPaused ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-4 max-w-lg mx-auto my-12 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Pause className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-white">Exam Paused</h2>
            <p className="text-xs text-slate-400">
              The 120-minute timer has been paused. Questions are hidden while the test is paused to preserve exam integrity.
            </p>
            <button
              onClick={() => setTestStatus('running')}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer shadow-lg shadow-emerald-600/30"
            >
              Resume Test ({formatTime(secondsLeft)} Left)
            </button>
          </div>
        ) : (
          /* Main 2-Column Exam Interface */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 8 Cols: Current Question Panel */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                {/* Question Info Bar */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-xs border border-indigo-500/30">
                      Question {currentIndex + 1} of {testQuestions.length}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold ${activeCat?.bgLight}`}>
                      {activeCat?.name || currentQuestion?.categoryId}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-semibold">
                      +{MARKS_PER_CORRECT.toFixed(2)}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-mono font-semibold">
                      -{NEGATIVE_MARK.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Question Text */}
                <h2 className="text-base sm:text-xl font-bold text-white tracking-tight leading-relaxed">
                  {currentQuestion?.question}
                </h2>

                {/* Multiple Choice Options */}
                <div className="space-y-3 pt-2">
                  {currentQuestion?.options.map((opt, optIdx) => {
                    const isSelected = currentAnswerState.selectedOption === opt;
                    const letter = String.fromCharCode(65 + optIdx);

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(opt)}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/20 font-medium'
                            : 'bg-slate-850/60 hover:bg-slate-800 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="pt-0.5 leading-snug flex-1">{opt}</span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Action Controls Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    {/* Mark for review */}
                    <button
                      onClick={handleToggleReview}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        currentAnswerState.isMarkedForReview
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                          : 'bg-slate-800 hover:bg-slate-700 text-purple-300'
                      }`}
                    >
                      <BookmarkCheck className="w-3.5 h-3.5" />
                      <span>{currentAnswerState.isMarkedForReview ? 'Review Flagged' : 'Mark for Review'}</span>
                    </button>

                    {/* Clear selection */}
                    {currentAnswerState.selectedOption && (
                      <button
                        onClick={handleClearResponse}
                        className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-medium transition cursor-pointer"
                      >
                        Clear Response
                      </button>
                    )}
                  </div>

                  {/* Previous / Next buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentIndex === 0}
                      onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-200 transition cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>

                    {currentIndex < testQuestions.length - 1 ? (
                      <button
                        onClick={() => setCurrentIndex((prev) => prev + 1)}
                        className="flex items-center gap-1 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition cursor-pointer shadow-md shadow-indigo-600/30"
                      >
                        <span>Save & Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowSubmitModal(true)}
                        className="flex items-center gap-1 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition cursor-pointer shadow-md shadow-emerald-600/30"
                      >
                        <span>Submit Exam</span>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: CBT Question Palette (1 to 120 Grid) - Desktop */}
            <div className="hidden lg:block lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4 sticky top-36">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Question Palette ({testQuestions.length})
                </h3>
                <span className="text-[11px] text-slate-500">Click to jump</span>
              </div>

              {/* Status Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span>Answered ({testStats.answered})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-purple-500" />
                  <span>Review ({testStats.review})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span>Unanswered ({testStats.unattempted})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 ring-2 ring-indigo-400/50" />
                  <span>Current Question</span>
                </div>
              </div>

              {/* Section Filter Pills (if Full Exam) */}
              {selectedSection === 'all' && (
                <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800/60 pt-3">
                  <button
                    onClick={() => setPaletteFilterSection('all')}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap cursor-pointer transition ${
                      paletteFilterSection === 'all'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    All (120)
                  </button>
                  {CATEGORIES.map((cat) => {
                    const hasQuestions = testQuestions.some((q) => q.categoryId === cat.id);
                    if (!hasQuestions) return null;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setPaletteFilterSection(cat.id)}
                        className={`px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap cursor-pointer transition ${
                          paletteFilterSection === cat.id
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {cat.name.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 120 Grid */}
              <div className="max-h-96 overflow-y-auto pr-1 scrollbar-thin">
                <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-6 gap-2">
                  {visiblePaletteIndices.map((idx) => {
                    const status = getQuestionStatus(idx);
                    const isCurrent = idx === currentIndex;

                    let btnStyle = 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border-slate-750';
                    if (status === 'answered') {
                      btnStyle = 'bg-emerald-600 text-white font-bold border-emerald-500';
                    } else if (status === 'review_answered') {
                      btnStyle = 'bg-purple-600 text-white font-bold border-purple-400 ring-1 ring-emerald-400';
                    } else if (status === 'review') {
                      btnStyle = 'bg-purple-600 text-white font-bold border-purple-500';
                    }

                    if (isCurrent) {
                      btnStyle += ' ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-full aspect-square rounded-xl text-xs font-mono border flex items-center justify-center transition-all cursor-pointer ${btnStyle}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Submit CTA */}
              <button
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Submit Mock Test
              </button>
            </div>
          </div>
        )}

        {/* Mobile Slide-Up Question Palette Drawer */}
        {isMobilePaletteOpen && !isPaused && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4">
            <div className="w-full sm:max-w-lg bg-slate-900 border border-slate-700 rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl max-h-[85vh] flex flex-col space-y-4 animate-in slide-in-from-bottom duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Question Palette ({testQuestions.length})
                  </h3>
                </div>
                <button
                  onClick={() => setIsMobilePaletteOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Status Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span>Answered ({testStats.answered})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-purple-500" />
                  <span>Review ({testStats.review})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span>Unanswered ({testStats.unattempted})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 ring-2 ring-indigo-400/50" />
                  <span>Current Question</span>
                </div>
              </div>

              {/* Section Filter Pills */}
              {selectedSection === 'all' && (
                <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800 pt-2 shrink-0">
                  <button
                    onClick={() => setPaletteFilterSection('all')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap cursor-pointer transition ${
                      paletteFilterSection === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    All (120)
                  </button>
                  {CATEGORIES.map((cat) => {
                    const hasQuestions = testQuestions.some((q) => q.categoryId === cat.id);
                    if (!hasQuestions) return null;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setPaletteFilterSection(cat.id)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap cursor-pointer transition ${
                          paletteFilterSection === cat.id ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {cat.name.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Grid of 120 Questions */}
              <div className="overflow-y-auto flex-1 pr-1 max-h-72">
                <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                  {visiblePaletteIndices.map((idx) => {
                    const status = getQuestionStatus(idx);
                    const isCurrent = idx === currentIndex;

                    let btnStyle = 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border-slate-750';
                    if (status === 'answered') {
                      btnStyle = 'bg-emerald-600 text-white font-bold border-emerald-500';
                    } else if (status === 'review_answered') {
                      btnStyle = 'bg-purple-600 text-white font-bold border-purple-400 ring-1 ring-emerald-400';
                    } else if (status === 'review') {
                      btnStyle = 'bg-purple-600 text-white font-bold border-purple-500';
                    }

                    if (isCurrent) {
                      btnStyle += ' ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setIsMobilePaletteOpen(false);
                        }}
                        className={`h-9 rounded-xl flex items-center justify-center text-xs font-mono transition border cursor-pointer active:scale-95 ${btnStyle}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Close Button at bottom */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => setIsMobilePaletteOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 active:bg-slate-700 text-slate-200 text-xs font-bold text-center cursor-pointer"
                >
                  Close &amp; Return to Question {currentIndex + 1}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Floating Action Button to quickly jump to palette anytime */}
        {!isPaused && (
          <button
            onClick={() => setIsMobilePaletteOpen(true)}
            className="lg:hidden fixed bottom-6 right-4 z-40 flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-indigo-600 active:bg-indigo-700 text-white font-bold text-xs shadow-2xl shadow-indigo-600/50 border border-indigo-400/40 cursor-pointer active:scale-95"
            title="Open Question Palette (120 Questions)"
          >
            <Layers className="w-4 h-4" />
            <span>Palette ({testStats.answered}/120)</span>
          </button>
        )}

        {/* Confirmation Modal Before Submission */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 animate-scale-in">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Submit Exam Confirmation</h3>
                <p className="text-xs text-slate-400">
                  Are you ready to submit your exam? You cannot modify your answers after final submission.
                </p>
              </div>

              {/* Summary Stats Table */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-800/80 rounded-2xl text-center border border-slate-700">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Answered</span>
                  <span className="text-lg font-black text-emerald-400">{testStats.answered}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Review</span>
                  <span className="text-lg font-black text-purple-400">{testStats.review}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Unanswered</span>
                  <span className="text-lg font-black text-rose-400">{testStats.unattempted}</span>
                </div>
              </div>

              <div className="text-center text-xs text-slate-400">
                Time Remaining: <strong className="text-cyan-400 font-mono">{formatTime(secondsLeft)}</strong>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition cursor-pointer"
                >
                  Return to Test
                </button>
                <button
                  onClick={handleSubmitTestFinal}
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition cursor-pointer"
                >
                  Confirm & Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: POST-SUBMISSION SCORECARD & COMPREHENSIVE SOLUTIONS
  // -------------------------------------------------------------
  if (testStatus === 'submitted' && testResult) {
    const isPassingScore = testResult.score >= 70;
    const timeSpentMins = Math.round(testResult.timeTakenSeconds / 60);

    return (
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 animate-fade-in">
        {/* Scorecard Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold border border-emerald-500/20">
                <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                <span>Test Completed & Evaluated</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {testResult.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Time taken: <strong className="text-slate-200">{timeSpentMins} minutes</strong> out of 120 minutes · {testResult.totalQuestions} Questions
              </p>
            </div>

            {/* Score Pill Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-500/40 text-center shadow-xl shrink-0 min-w-56">
              <span className="text-xs text-indigo-300 font-semibold uppercase tracking-wider block mb-1">
                Net Score
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {testResult.score}
              </div>
              <span className="text-xs text-slate-400 font-mono block mt-1">
                out of {testResult.maxMarks} Marks
              </span>
              <div className="mt-3 pt-3 border-t border-indigo-500/20 text-[11px] text-amber-300 font-medium">
                {isPassingScore ? '🎉 Strong Qualifying Score' : '📚 Good Practice Attempt'}
              </div>
            </div>
          </div>

          {/* Quick Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800">
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
              <span className="text-[11px] text-slate-400 block">Accuracy</span>
              <span className="text-xl font-black text-emerald-400">{testResult.accuracy}%</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
              <span className="text-[11px] text-slate-400 block">Correct (+1.00)</span>
              <span className="text-xl font-black text-emerald-400">{testResult.correctCount}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
              <span className="text-[11px] text-slate-400 block">Incorrect (-0.25)</span>
              <span className="text-xl font-black text-rose-400">{testResult.incorrectCount}</span>
              <span className="text-[9px] text-rose-400/80 font-mono">-{testResult.negativeDeduction.toFixed(2)} M</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
              <span className="text-[11px] text-slate-400 block">Unattempted (0.0)</span>
              <span className="text-xl font-black text-slate-400">{testResult.unattemptedCount}</span>
            </div>
          </div>
        </div>

        {/* Section Breakdown Table */}
        {testResult.sectionBreakdown.length > 1 && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-indigo-400" />
              <span>Section-Wise Performance Breakdown</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3 font-semibold">Section</th>
                    <th className="pb-3 font-semibold text-center">Questions</th>
                    <th className="pb-3 font-semibold text-center">Correct</th>
                    <th className="pb-3 font-semibold text-center">Incorrect</th>
                    <th className="pb-3 font-semibold text-center">Unattempted</th>
                    <th className="pb-3 font-semibold text-right">Net Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {testResult.sectionBreakdown.map((sec) => (
                    <tr key={sec.sectionId} className="hover:bg-slate-800/30">
                      <td className="py-3 text-slate-200">{sec.sectionName}</td>
                      <td className="py-3 text-center text-slate-400">{sec.total}</td>
                      <td className="py-3 text-center text-emerald-400 font-bold">{sec.correct}</td>
                      <td className="py-3 text-center text-rose-400">{sec.incorrect}</td>
                      <td className="py-3 text-center text-slate-500">{sec.unattempted}</td>
                      <td className="py-3 text-right font-black text-indigo-300">
                        {sec.score.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Question Solutions & Explanations Review */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-400" />
                <span>Question Review with Official Explanations</span>
              </h2>
              <p className="text-xs text-slate-400">
                Detailed step-by-step solutions, key rules, and memory mnemonics for every question.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {(
                [
                  { id: 'all', label: `All (${testQuestions.length})` },
                  { id: 'incorrect', label: `Incorrect (${testResult.incorrectCount})` },
                  { id: 'unattempted', label: `Unattempted (${testResult.unattemptedCount})` },
                  { id: 'correct', label: `Correct (${testResult.correctCount})` },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setReviewFilter(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    reviewFilter === f.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            {filteredReviewIndices.map((qIdx) => {
              const q = testQuestions[qIdx];
              const ansState = userAnswers[qIdx];
              const userAns = ansState?.selectedOption;
              const isCorrect = userAns === q.answer;
              const cat = CATEGORIES.find((c) => c.id === q.categoryId);

              let statusBadge = (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">
                  Unattempted (0.00)
                </span>
              );

              if (userAns) {
                if (isCorrect) {
                  statusBadge = (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Correct (+1.00)
                    </span>
                  );
                } else {
                  statusBadge = (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> Incorrect (-0.25)
                    </span>
                  );
                }
              }

              return (
                <div
                  key={qIdx}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-md space-y-4"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">
                        Q{qIdx + 1}.
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${cat?.bgLight}`}>
                        {cat?.name || q.categoryId}
                      </span>
                      {ansState?.isMarkedForReview && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                          Marked for Review
                        </span>
                      )}
                    </div>
                    {statusBadge}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    {q.question}
                  </h3>

                  {/* Options review */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = opt === q.answer;
                      const isOptionSelected = opt === userAns;

                      let style = 'bg-slate-850/60 text-slate-400 border-slate-800';
                      if (isOptionCorrect) {
                        style = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-200 font-bold';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        style = 'bg-rose-500/15 border-rose-500/50 text-rose-300 font-semibold';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border flex items-start gap-2.5 ${style}`}
                        >
                          <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-slate-800 shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="leading-snug pt-0.5 flex-1">{opt}</span>
                          {isOptionCorrect && (
                            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                          {isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation box */}
                  <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-indigo-300 text-[11px] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explanation</span>
                    </div>
                    <p className="leading-relaxed text-slate-200">
                      {q.explanation}
                    </p>
                    {q.tip && (
                      <div className="text-[11px] text-amber-300/90 pt-1 flex items-center gap-1 font-medium">
                        <strong>Tip:</strong> {q.tip}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              if (currentTestNumber) {
                handleStartFullMock(currentTestNumber);
              } else if (selectedSection !== 'all') {
                handleStartSectionMock(selectedSection);
              } else {
                handleStartFullMock(1);
              }
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake This Exam</span>
          </button>

          <button
            onClick={() => {
              setTestStatus('idle');
              setTestResult(null);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition cursor-pointer"
          >
            Back to Mock Test Portal (Choose from 10 Mocks)
          </button>
        </div>
      </div>
    );
  }

  return null;
};
