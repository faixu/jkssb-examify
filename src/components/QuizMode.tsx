import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Clock,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Zap,
  Target,
  Sparkles,
  HelpCircle,
  ClipboardCheck,
  ChevronDown,
  Check,
  BookOpen,
  Layers,
  ShieldCheck,
  Bookmark,
  Send,
  Bot,
  Award,
  AlertTriangle,
  Share2,
  Cloud,
  X,
  Calculator,
  Keyboard,
} from 'lucide-react';
import { CategoryId, Flashcard, UserStats } from '../types';
import { CATEGORIES, CATEGORY_QUESTION_COUNTS } from '../data/initialDecks';
import { recordStudyActivity } from '../utils/storage';
import {
  playCorrectSound,
  playWrongSound,
  fireConfetti,
  playStreakCelebration,
} from '../utils/audio';

interface QuizModeProps {
  cards: Flashcard[];
  userStats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  isDarkMode?: boolean;
  onNavigateToMock?: () => void;
  onNavigateToSpeed?: () => void;
  onNavigateToDrive?: () => void;
  onNavigateToCalculator?: () => void;
  onNavigateToTyping?: () => void;
}

const QUESTION_TIME_LIMIT = 25; // seconds per question in rapid drill

interface JKExamTarget {
  id: string;
  label: string;
  badge: string;
  defaultCategory: CategoryId | 'all';
}

const JK_EXAM_TARGETS: JKExamTarget[] = [
  { id: 'faa', label: 'JKSSB FAA', badge: '120 Marks', defaultCategory: 'all' },
  { id: 'patwari', label: 'Patwari & Revenue', badge: 'J&K Special', defaultCategory: 'history' },
  { id: 'nt', label: 'Naib Tehsildar', badge: 'GK & Law', defaultCategory: 'general' },
  { id: 'jkpsi', label: 'JKPSI (Sub-Inspector)', badge: 'High Yield', defaultCategory: 'polity' },
  { id: 'forester', label: 'JKSSB Forester', badge: 'Science & Env', defaultCategory: 'science' },
  { id: 'jkbank', label: 'J&K Bank Associate', badge: 'Quant & Econ', defaultCategory: 'economics' },
];

interface HyperLocalModule {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  categoryId: CategoryId;
  accent: string;
}

const HYPER_LOCAL_MODULES: HyperLocalModule[] = [
  {
    id: 'reorg-2019',
    title: 'J&K Reorganisation Act 2019',
    subtitle: 'Clause-by-clause MCQs: 103 Sections, 5 Schedules & Delimitation',
    tag: 'Most Asked',
    categoryId: 'polity',
    accent: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  },
  {
    id: 'jk-geo',
    title: 'J&K Geography & Hydro Projects',
    subtitle: 'Jhelum, Chenab, Lakes, Mountain Passes, Ramsar Sites & Dams',
    tag: 'High Weightage',
    categoryId: 'geography',
    accent: 'border-sky-500/40 bg-sky-500/10 text-sky-300',
  },
  {
    id: 'jk-history',
    title: 'J&K History, Culture & Economy',
    subtitle: 'Karkota, Utpala, Dogra Rule, Treaty of Amritsar & Heritage',
    tag: '30M GK Core',
    categoryId: 'history',
    accent: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
  },
  {
    id: 'jk-panchayat',
    title: 'Panchayati Raj Act 1989 & RTI',
    subtitle: 'Halqa Panchayat, BDC, DDC 3-Tier System & Governance Drills',
    tag: 'Special Drill',
    categoryId: 'general',
    accent: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
  },
];

const DAILY_LEADERBOARD = [
  { rank: 1, name: 'Aaqib R. (Srinagar)', exam: 'JKSSB FAA', score: '112.50 / 120', accuracy: '96%', streak: 19 },
  { rank: 2, name: 'Simran K. (Jammu)', exam: 'Naib Tehsildar', score: '109.75 / 120', accuracy: '94%', streak: 15 },
  { rank: 3, name: 'Zubair M. (Anantnag)', exam: 'JKSSB FAA', score: '107.25 / 120', accuracy: '92%', streak: 14 },
  { rank: 4, name: 'Rohan S. (Udhampur)', exam: 'JKPSI', score: '105.00 / 120', accuracy: '91%', streak: 11 },
  { rank: 5, name: 'Mehak F. (Baramulla)', exam: 'Patwari', score: '103.50 / 120', accuracy: '90%', streak: 12 },
  { rank: 6, name: 'Danish A. (Pulwama)', exam: 'JKSSB FAA', score: '101.25 / 120', accuracy: '89%', streak: 9 },
  { rank: 7, name: 'Nitish V. (Kathua)', exam: 'Forester', score: '99.75 / 120', accuracy: '88%', streak: 8 },
  { rank: 8, name: 'Suhail B. (Kupwara)', exam: 'Naib Tehsildar', score: '98.50 / 120', accuracy: '87%', streak: 10 },
  { rank: 9, name: 'Priya D. (Rajouri)', exam: 'J&K Bank', score: '97.00 / 120', accuracy: '86%', streak: 7 },
  { rank: 10, name: 'Tawseef H. (Budgam)', exam: 'JKSSB FAA', score: '95.75 / 120', accuracy: '85%', streak: 6 },
];

export const QuizMode: React.FC<QuizModeProps> = ({
  cards,
  userStats,
  onUpdateStats,
  selectedCategory,
  onSelectCategory,
  isDarkMode = false,
  onNavigateToMock,
  onNavigateToSpeed,
  onNavigateToDrive,
  onNavigateToCalculator,
  onNavigateToTyping,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const [questionCount, setQuestionCount] = useState<number>(10);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [highestCombo, setHighestCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Target exam pill & Official CBT mode toggle
  const [selectedExamTarget, setSelectedExamTarget] = useState<string>('faa');
  const [officialCbtMode, setOfficialCbtMode] = useState<boolean>(true);
  const [questionStates, setQuestionStates] = useState<Record<number, 'correct' | 'wrong' | 'review'>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [totalSecondsSpent, setTotalSecondsSpent] = useState<number>(0);
  const [wrongByCategory, setWrongByCategory] = useState<Record<string, number>>({});

  // Integrated AI Doubt Buster state per question
  const [aiDoubtExplanation, setAiDoubtExplanation] = useState<string | null>(null);
  const [isAiDoubtLoading, setIsAiDoubtLoading] = useState<boolean>(false);

  // Daily Leaderboard Modal & Save Score Sticky Prompt
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const [aspirantName, setAspirantName] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('flashmind_aspirant_name') || '';
  });
  const [isScoreSavedBannerDismissed, setIsScoreSavedBannerDismissed] = useState<boolean>(false);
  const [scoreSavedSuccess, setScoreSavedSuccess] = useState<boolean>(false);

  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const subjectDropdownRef = useRef<HTMLDivElement>(null);
  const quizArenaRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(e.target as Node)) {
        setIsSubjectDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Filter pool
  const pool = useMemo(() => {
    return cards.filter((c) => selectedCategory === 'all' || c.categoryId === selectedCategory);
  }, [cards, selectedCategory]);

  // Synchronous initial quiz selection so frame 0 renders immediately without a skeleton-to-content jump
  const [quizQuestions, setQuizQuestions] = useState<Flashcard[]>(() => {
    const initialPool = cards.filter((c) => selectedCategory === 'all' || c.categoryId === selectedCategory);
    return initialPool.slice(0, 10);
  });
  const activeSessionKeyRef = useRef<string>(`${selectedCategory}:10`);

  const startNewQuiz = useCallback(() => {
    const count = Math.min(questionCount, pool.length);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
    activeSessionKeyRef.current = `${selectedCategory}:${questionCount}`;
    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setIsTimerPaused(false);
    setScore(0);
    setCombo(0);
    setHighestCombo(0);
    setCorrectCount(0);
    setWrongCount(0);
    setQuestionStates({});
    setMarkedForReview({});
    setTotalSecondsSpent(0);
    setWrongByCategory({});
    setAiDoubtExplanation(null);
    setIsQuizComplete(false);
    setScoreSavedSuccess(false);
  }, [pool, questionCount, selectedCategory]);

  useEffect(() => {
    const targetKey = `${selectedCategory}:${questionCount}`;
    if (activeSessionKeyRef.current !== targetKey) {
      startNewQuiz();
      return;
    }

    setQuizQuestions((prev) => {
      if (prev.length >= questionCount || pool.length <= prev.length) {
        return prev;
      }
      const existingIds = new Set(prev.map((q) => q.id));
      const additional = pool
        .filter((q) => !existingIds.has(q.id))
        .slice(0, questionCount - prev.length);
      return additional.length > 0 ? [...prev, ...additional] : prev;
    });
  }, [selectedCategory, questionCount, pool, startNewQuiz]);

  const currentQuestion = quizQuestions[currentIndex];
  const currentQuestionId = currentQuestion?.id;

  // Deterministic option order per question ID so options never shift on background state updates
  const randomizedOptions = useMemo(() => {
    if (!currentQuestion) return [];
    return [...currentQuestion.options];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionId]);

  const handleSubmitAnswer = useCallback(
    (chosen: string) => {
      if (isSubmitted || !currentQuestion) return;

      const spentOnThisQ = Math.max(1, QUESTION_TIME_LIMIT - timeLeft);
      setTotalSecondsSpent((prev) => prev + spentOnThisQ);
      setSelectedOption(chosen);
      setIsSubmitted(true);
      setIsTimerPaused(true);
      setAiDoubtExplanation(null);

      const isCorrect = chosen === currentQuestion.answer;
      if (isCorrect) {
        playCorrectSound();
        const timeBonus = Math.max(1, Math.round(timeLeft * 1.5));
        const comboMultiplier = combo >= 4 ? 3 : combo >= 2 ? 2 : combo >= 1 ? 1.5 : 1;
        const pointsEarned = Math.round((100 + timeBonus) * comboMultiplier);

        const nextCombo = combo + 1;
        setCombo(nextCombo);
        setHighestCombo((prev) => Math.max(prev, nextCombo));
        setScore((prev) => prev + pointsEarned);
        setCorrectCount((prev) => prev + 1);
        setQuestionStates((prev) => ({ ...prev, [currentIndex]: 'correct' }));

        if (nextCombo === 3 || nextCombo === 5) {
          playStreakCelebration();
          fireConfetti();
        }

        const updated = recordStudyActivity(currentQuestion.categoryId, true, 20);
        onUpdateStats(updated);
      } else {
        playWrongSound();
        setCombo(0);
        setWrongCount((prev) => prev + 1);
        setQuestionStates((prev) => ({ ...prev, [currentIndex]: 'wrong' }));
        setWrongByCategory((prev) => ({
          ...prev,
          [currentQuestion.categoryId]: (prev[currentQuestion.categoryId] || 0) + 1,
        }));
        const updated = recordStudyActivity(currentQuestion.categoryId, false, 5);
        onUpdateStats(updated);
      }
    },
    [combo, currentIndex, currentQuestion, isSubmitted, onUpdateStats, timeLeft]
  );

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || isTimerPaused || isQuizComplete || !currentQuestion) return;

    if (timeLeft <= 0) {
      handleSubmitAnswer('__TIMEOUT__');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted, isTimerPaused, isQuizComplete, currentQuestion, handleSubmitAnswer]);

  const handleNextQuestion = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setTimeLeft(QUESTION_TIME_LIMIT);
      setIsTimerPaused(false);
      setAiDoubtExplanation(null);
    } else {
      setIsQuizComplete(true);
      playStreakCelebration();
      fireConfetti();
    }
  };

  const handleToggleMarkForReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  // One-click AI Doubt Buster: Explains WHY the wrong choices are incorrect
  const handleAskAiMentorDoubt = async () => {
    if (!currentQuestion || isAiDoubtLoading) return;
    setIsAiDoubtLoading(true);

    const wrongChoices = currentQuestion.options.filter((o) => o !== currentQuestion.answer);
    const fallbackBreakdown = [
      `✅ Correct Choice (${currentQuestion.answer}): ${currentQuestion.explanation}`,
      ...wrongChoices.map(
        (opt, i) =>
          `❌ Why "${opt}" is incorrect (Distractor #${i + 1}): This option does not satisfy the specific condition asked in "${currentQuestion.question.slice(
            0,
            70
          )}...". In JKSSB exams, this is a common trap to test exact syllabus precision.`
      ),
      currentQuestion.tip
        ? `💡 Exam Retention Hook: ${currentQuestion.tip}`
        : `💡 Negative Marking Tip: If you can eliminate at least 2 of the ${wrongChoices.length} distractors above, the +1.00 / -0.25 expected value is statistically in your favor.`,
    ].join('\n\n');

    try {
      const prompt = `Question: ${currentQuestion.question}
Options: ${currentQuestion.options.join(' | ')}
Correct Answer: ${currentQuestion.answer}
User Selected: ${selectedOption === '__TIMEOUT__' ? 'Timed Out' : selectedOption}
Base Explanation: ${currentQuestion.explanation}

In 3-4 crisp bullet points for a JKSSB aspirant, explain:
1. Why "${currentQuestion.answer}" is 100% correct.
2. Briefly why each of the other options (${wrongChoices.join(', ')}) is incorrect or a common exam trap.
3. A quick 1-line memory hook.`;

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', text: prompt }],
          systemInstruction:
            'You are a concise, student-friendly JKSSB AI Mentor. Explain why the correct option is right and why the wrong choices are incorrect in clear, plain bullet points.',
          model: 'gemini-3.1-flash-lite',
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.reply) {
          setAiDoubtExplanation(data.reply);
          setIsAiDoubtLoading(false);
          return;
        }
      }
      setAiDoubtExplanation(fallbackBreakdown);
    } catch {
      setAiDoubtExplanation(fallbackBreakdown);
    } finally {
      setIsAiDoubtLoading(false);
    }
  };

  const handleSaveAspirantProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aspirantName.trim()) return;
    try {
      localStorage.setItem('flashmind_aspirant_name', aspirantName.trim());
      setScoreSavedSuccess(true);
    } catch {
      setScoreSavedSuccess(true);
    }
  };

  // Official CBT Calculation (+1.00 per correct, -0.25 per wrong)
  const negativeDeduction = Number((wrongCount * 0.25).toFixed(2));
  const netOfficialMarks = Number((correctCount * 1 - negativeDeduction).toFixed(2));
  const answeredCount = correctCount + wrongCount;
  const accuracyPercent =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 100;
  const avgSecondsPerQuestion =
    answeredCount > 0 ? Math.max(1, Math.round(totalSecondsSpent / answeredCount)) : 0;

  const weakestCategoryName = useMemo(() => {
    const entries = Object.entries(wrongByCategory);
    if (entries.length === 0) return null;
    entries.sort((a, b) => b[1] - a[1]);
    const topWrongCatId = entries[0][0];
    return CATEGORIES.find((c) => c.id === topWrongCatId)?.name || 'General Awareness';
  }, [wrongByCategory]);

  const handleShareToTelegram = () => {
    const shareText = `🎯 FlashMind JKSSB CBT Drill Scorecard!\n✅ Correct: ${correctCount}/${quizQuestions.length} (+${correctCount.toFixed(
      2
    )})\n❌ Wrong (-0.25): -${negativeDeduction.toFixed(2)}\n🏆 Net Official Marks: ${netOfficialMarks} / ${
      quizQuestions.length
    }\n🔥 Accuracy: ${accuracyPercent}% | Streak: ${userStats.streak} Days\n\nPractice 7,750+ J&K Specific MCQs (0 Login): https://jkssb-mcq-quiz.ai.studio/`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      'https://jkssb-mcq-quiz.ai.studio/'
    )}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory);
  const getCategoryDisplayCount = (catId: CategoryId | 'all') => {
    const loadedCount =
      catId === 'all' ? cards.length : cards.filter((c) => c.categoryId === catId).length;
    return Math.max(CATEGORY_QUESTION_COUNTS[catId] || 0, loadedCount);
  };
  const activeCount = getCategoryDisplayCount(selectedCategory);
  const totalDisplayCount = getCategoryDisplayCount('all');

  if (!currentQuestion && !isQuizComplete) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 min-h-[640px]">
        <div className="mb-3 space-y-2 min-h-[96px]">
          <div className="h-12 w-full sm:w-[340px] rounded-2xl bg-slate-900/90 border border-slate-800 animate-pulse" />
          <div className="h-9 w-full rounded-2xl bg-slate-900/60 border border-slate-800/80 animate-pulse" />
        </div>
        <div className="w-full min-h-[380px] rounded-2xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between animate-pulse">
          <div className="h-5 w-48 bg-slate-800 rounded-lg" />
          <div className="space-y-2.5 my-4">
            <div className="h-6 w-3/4 bg-slate-800 rounded-lg" />
            <div className="h-6 w-1/2 bg-slate-800 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="h-11 bg-slate-800/80 rounded-xl" />
            <div className="h-11 bg-slate-800/80 rounded-xl" />
            <div className="h-11 bg-slate-800/80 rounded-xl" />
            <div className="h-11 bg-slate-800/80 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 min-h-[640px]">
      {/* 1. HIGH-CONVERTING HERO SECTION & HYPER-LOCAL J&K VALUE PROPOSITION */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border border-indigo-500/30 p-5 sm:p-6 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-56 h-56 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          {/* High-Visibility Trust & Hyper-Local Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-extrabold tracking-wide max-w-full">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate sm:whitespace-normal">
                100% Curated for J&amp;K Aspirants – Not Generic National GK
              </span>
            </div>

            <div className="inline-flex flex-wrap items-center gap-2 text-[11px] font-mono font-bold text-indigo-200 bg-white/5 border border-white/10 px-3 py-1 rounded-full shrink-0">
              <span>📚 {totalDisplayCount.toLocaleString()}+ Verified MCQs</span>
              <span className="text-emerald-400">•</span>
              <span>0 Login Required</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                Crack JKSSB FAA, Patwari, JKPSI &amp; Naib Tehsildar —{' '}
                <span className="text-emerald-400">Zero Login, Zero Paywalls.</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Jump straight into 10-Question Rapid Drills, Clause-by-Clause J&amp;K Reorganisation Act 2019 MCQs, or 120-Question Official CBT Mocks with real <span className="text-amber-300 font-semibold">-0.25 negative marking</span> and 1-click AI Doubt Busting.
              </p>
            </div>

            {/* Instant-Start CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setQuestionCount(10);
                  startNewQuiz();
                  quizArenaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="px-4 py-2.5 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-indigo-500/30 transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
              >
                <Zap className="w-4 h-4 fill-white shrink-0" />
                <span>Start 10-Q Rapid Drill</span>
              </button>

              {onNavigateToMock && (
                <button
                  type="button"
                  onClick={onNavigateToMock}
                  className="px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
                >
                  <ClipboardCheck className="w-4 h-4 shrink-0" />
                  <span>120Q Official CBT Mock</span>
                </button>
              )}
            </div>
          </div>

          {/* J&K Exam Category Target Pills */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
              Target Exam:
            </span>
            {JK_EXAM_TARGETS.map((exam) => {
              const isActive = selectedExamTarget === exam.id;
              return (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => {
                    setSelectedExamTarget(exam.id);
                    onSelectCategory(exam.defaultCategory);
                  }}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer inline-flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-white text-slate-950 border-white shadow-sm'
                      : 'bg-slate-900/70 text-slate-300 border-slate-700/80 hover:border-indigo-400 hover:text-white'
                  }`}
                >
                  <span>{exam.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded leading-none ${
                      isActive ? 'bg-indigo-100 text-indigo-900' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {exam.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 4 Hyper-Local J&K Quick-Start Cards (Our Unfair Advantage) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {HYPER_LOCAL_MODULES.map((mod) => {
              const isSelected = selectedCategory === mod.categoryId;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => {
                    onSelectCategory(mod.categoryId);
                    quizArenaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between min-w-0 ${
                    isSelected
                      ? 'bg-indigo-600/30 border-indigo-400 shadow-md'
                      : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border truncate ${mod.accent}`}
                      >
                        {mod.tag}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </div>
                    <div className="text-xs font-extrabold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {mod.title}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                    {mod.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. GAMIFIED RETENTION STRIP: Streak, Live Accuracy, CBT Net Marks & Daily Leaderboard */}
      <div
        className={`rounded-2xl border px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm ${
          isDarkMode
            ? 'bg-slate-900/90 border-slate-800 text-slate-200'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Daily Study Streak */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>🔥 {userStats.streak} Day Streak</span>
          </div>

          {/* Live Accuracy Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold">
            <Target className="w-3.5 h-3.5 text-emerald-500" />
            <span>🎯 {accuracyPercent}% Accuracy</span>
          </div>

          {/* Live Official CBT Negative Marking Tally */}
          {officialCbtMode && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono font-bold">
              <span>Net CBT Score:</span>
              <span className={netOfficialMarks >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}>
                {netOfficialMarks >= 0 ? `+${netOfficialMarks}` : netOfficialMarks}
              </span>
              <span className="text-[10px] opacity-75">(-0.25/wrong)</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onNavigateToCalculator && (
            <button
              type="button"
              onClick={onNavigateToCalculator}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-300 border border-sky-500/30 font-bold transition cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-sky-500" />
              <span>-0.25 Cutoff Calculator</span>
            </button>
          )}

          {onNavigateToTyping && (
            <button
              type="button"
              onClick={onNavigateToTyping}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-300 border border-teal-500/30 font-bold transition cursor-pointer"
            >
              <Keyboard className="w-3.5 h-3.5 text-teal-500" />
              <span>35 WPM Typing Test</span>
            </button>
          )}

          {onNavigateToSpeed && (
            <button
              type="button"
              onClick={onNavigateToSpeed}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30 font-bold transition cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-rose-500" />
              <span>Beat the Clock (60s)</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsLeaderboardOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 font-bold transition cursor-pointer"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Top 10 Leaderboard</span>
          </button>
        </div>
      </div>

      {/* 3. CONTROLS BAR: Subject Selector, Rapid Drill Selector (10 Qs, 25 Qs, Full CBT) & Official CBT Mode Toggle */}
      <div ref={quizArenaRef} className="space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-h-[48px]">
          {/* Custom Interactive Subject Dropdown */}
          <div ref={subjectDropdownRef} className="relative w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsSubjectDropdownOpen((prev) => !prev)}
              className="w-full sm:w-auto min-w-[260px] md:min-w-[320px] min-h-[48px] flex items-center justify-between gap-3 px-3.5 py-2 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/60 shadow-lg shadow-black/20 transition-all cursor-pointer group text-left"
              aria-expanded={isSubjectDropdownOpen}
              aria-haspopup="listbox"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-inner ${
                    selectedCategory === 'all'
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : activeCategoryMeta?.bgLight || 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {selectedCategory === 'all' ? (
                    <Layers className="w-4 h-4" />
                  ) : (
                    <BookOpen className="w-4 h-4" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 flex items-center gap-1.5 min-h-[16px]">
                    <span>Active Subject Deck</span>
                    {activeCategoryMeta?.marks && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                        {activeCategoryMeta.marks} Marks
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                    {selectedCategory === 'all' ? 'All Subjects Combined' : activeCategoryMeta?.name}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono tabular-nums min-w-[64px] text-center font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-lg border border-slate-700/60">
                  {activeCount} Qs
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-200 ${
                    isSubjectDropdownOpen ? 'rotate-180 text-indigo-400' : ''
                  }`}
                />
              </div>
            </button>

            {/* Dropdown Menu Modal */}
            {isSubjectDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full sm:w-[400px] max-h-[420px] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/90 shadow-2xl shadow-black/80 z-50 p-2 space-y-1">
                <div className="px-3 py-2 text-[11px] font-semibold text-slate-400 flex items-center justify-between border-b border-slate-800/80 mb-1">
                  <span>Select Subject to Quiz:</span>
                  <span className="text-[10px] text-indigo-400 font-mono font-bold">11 Decks Available</span>
                </div>

                {/* Option: All Subjects Combined */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('all');
                    setIsSubjectDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                      : 'hover:bg-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">All Subjects Combined</div>
                      <div
                        className={`text-[10px] ${
                          selectedCategory === 'all' ? 'text-indigo-200' : 'text-slate-400'
                        }`}
                      >
                        Complete syllabus question pool
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[11px] font-mono tabular-nums px-2 py-0.5 rounded-md ${
                        selectedCategory === 'all'
                          ? 'bg-indigo-700/60 text-white'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {totalDisplayCount} Qs
                    </span>
                    {selectedCategory === 'all' && <Check className="w-4 h-4 text-white" />}
                  </div>
                </button>

                {/* Subject Categories List */}
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = getCategoryDisplayCount(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setIsSubjectDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                          : 'hover:bg-slate-800/80 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white/20 text-white' : cat.bgLight
                          }`}
                        >
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{cat.name}</div>
                          <div className="flex items-center gap-2 mt-0.5">
                            {cat.marks && (
                              <span
                                className={`text-[9px] font-mono px-1.5 py-0.2 rounded border ${
                                  isSelected
                                    ? 'bg-white/20 text-white border-white/30'
                                    : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                                }`}
                              >
                                {cat.marks} Marks
                              </span>
                            )}
                            <span
                              className={`text-[10px] ${
                                isSelected ? 'text-indigo-200' : 'text-slate-400'
                              } truncate`}
                            >
                              {cat.syllabusRef}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`text-[11px] font-mono tabular-nums px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-indigo-700/60 text-white' : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {count} Qs
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick-Access Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs min-h-[34px]">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer font-mono tabular-nums ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              All ({totalDisplayCount})
            </button>
            {(['polity', 'geography', 'history', 'accounting', 'economics', 'cs', 'science'] as CategoryId[]).map(
              (catId) => {
                const cat = CATEGORIES.find((c) => c.id === catId);
                if (!cat) return null;
                const isSelected = selectedCategory === cat.id;
                const count = getCategoryDisplayCount(cat.id);
                const shortLabel =
                  cat.id === 'history'
                    ? 'J&K History'
                    : cat.id === 'polity'
                    ? 'J&K Reorg Act'
                    : cat.id === 'geography'
                    ? 'J&K Geo'
                    : cat.name.split(' ')[0];
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>{shortLabel}</span>
                    <span className="text-[10px] opacity-70 font-mono tabular-nums">({count})</span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Interactive Rapid Drill Selector + Official CBT Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 border border-slate-800 rounded-2xl px-3.5 py-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-300 mr-1">Rapid Drill Mode:</span>
            {[
              { count: 10, label: '10 Qs (Rapid)' },
              { count: 25, label: '25 Qs (Sprint)' },
              { count: 50, label: '50 Qs (Deep)' },
              { count: 100, label: '100 Qs' },
            ].map((item) => (
              <button
                key={item.count}
                type="button"
                onClick={() => setQuestionCount(item.count)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  questionCount === item.count
                    ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            {onNavigateToMock && (
              <button
                type="button"
                onClick={onNavigateToMock}
                className="px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 flex items-center gap-1 shadow-sm"
                title="Launch full 120-question, 120-minute CBT Mock Exam"
              >
                <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Full 120Q CBT (120m)</span>
              </button>
            )}
          </div>

          {/* Official CBT Mode Toggle (-0.25 Negative Marking & Palette) */}
          <button
            type="button"
            onClick={() => setOfficialCbtMode((prev) => !prev)}
            className={`px-3 py-1 rounded-xl text-[11px] font-extrabold border transition cursor-pointer flex items-center gap-1.5 ${
              officialCbtMode
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title="Toggle Official JKSSB CBT Negative Marking (-0.25) and Question Palette"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                officialCbtMode ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
              }`}
            />
            <span>Official CBT Mode (-0.25): {officialCbtMode ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {isQuizComplete ? (
        /* 4. POST-QUIZ PERFORMANCE SUMMARY MODAL & NON-INTRUSIVE STICKY SAVE PROMPT */
        <div className="space-y-4">
          <div
            className={`max-w-2xl mx-auto border rounded-3xl p-6 sm:p-8 text-center shadow-xl relative overflow-hidden ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
              <Trophy className="w-8 h-8 text-slate-950" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-extrabold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>JKSSB CBT Diagnostic Scorecard</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight mb-1">
              {aspirantName ? `Great Effort, ${aspirantName}!` : 'Rapid Drill Completed!'}
            </h2>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Official JKSSB Marking Breakdown (+1.00 Correct • -0.25 Negative Marking)
            </p>

            {/* 4-Column CBT Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div
                className={`p-3.5 rounded-2xl border text-center ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Net CBT Score</span>
                <span className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                  {netOfficialMarks} <span className="text-xs font-normal">/ {quizQuestions.length}</span>
                </span>
              </div>

              <div
                className={`p-3.5 rounded-2xl border text-center ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">
                  -0.25 Deduction
                </span>
                <span className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 font-mono">
                  -{negativeDeduction.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-500 block">({wrongCount} wrong)</span>
              </div>

              <div
                className={`p-3.5 rounded-2xl border text-center ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Accuracy Rate</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {accuracyPercent}%
                </span>
                <span className="text-[10px] text-slate-500 block">({correctCount} correct)</span>
              </div>

              <div
                className={`p-3.5 rounded-2xl border text-center ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Avg Speed / Q</span>
                <span className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">
                  {avgSecondsPerQuestion}s
                </span>
                <span className="text-[10px] text-slate-500 block">Max {highestCombo}x combo</span>
              </div>
            </div>

            {/* Weak-Topic Diagnostic Alert */}
            {weakestCategoryName && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left mb-5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-extrabold text-amber-700 dark:text-amber-300 block">
                    Priority Revision Topic Detected: {weakestCategoryName}
                  </span>
                  <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                    Most of your -0.25 negative deductions came from {weakestCategoryName}. Run a dedicated 10-Q drill on this deck to lock in 90%+ accuracy.
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons: Play Next Round & Share to Telegram */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={startNewQuiz}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Start Next {quizQuestions.length}-Q Drill</span>
              </button>

              <button
                type="button"
                onClick={handleShareToTelegram}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-sky-500/25 transition cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Scorecard to Telegram</span>
              </button>
            </div>
          </div>

          {/* Non-Intrusive "Save Your Score & Streak" Sticky Prompt (Appears ONLY post-quiz) */}
          {!isScoreSavedBannerDismissed && (
            <div className="max-w-2xl mx-auto rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/40 p-4 text-white shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Save Your {userStats.streak}-Day Streak &amp; CBT Rank (Zero OTP Required)</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {scoreSavedSuccess
                      ? `✅ Saved for ${aspirantName}! Your streak and CBT analytics are pinned to this device.`
                      : 'Enter your name to pin your scorecard to the J&K Aspirant Leaderboard or back up to Google Drive.'}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {!scoreSavedSuccess ? (
                    <form onSubmit={handleSaveAspirantProfile} className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={aspirantName}
                        onChange={(e) => setAspirantName(e.target.value)}
                        placeholder="Your Name & District..."
                        className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 w-40 sm:w-44"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition cursor-pointer"
                      >
                        Save
                      </button>
                    </form>
                  ) : (
                    onNavigateToDrive && (
                      <button
                        type="button"
                        onClick={onNavigateToDrive}
                        className="px-3 py-1.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <Cloud className="w-3.5 h-3.5" />
                        <span>Cloud Backup</span>
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => setIsScoreSavedBannerDismissed(true)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white transition cursor-pointer"
                    aria-label="Dismiss save prompt"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* 5. ACTIVE QUIZ ARENA + OFFICIAL CBT QUESTION PALETTE + AI DOUBT BUSTER */
        <div className="space-y-3">
          {/* Top Info Bar: Progress, Timer, Mark for Review, Score */}
          <div
            className={`rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 border shadow-sm flex items-center justify-between gap-2 sm:gap-4 flex-wrap ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            {/* Question Counter */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="p-1 rounded-lg bg-indigo-500/10 text-indigo-500">
                <Target className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold">
                Q{currentIndex + 1} <span className="text-slate-500 font-normal">/ {quizQuestions.length}</span>
              </span>
              {officialCbtMode && (
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  +1.00 / -0.25
                </span>
              )}
            </div>

            {/* Timer countdown */}
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-bold font-mono transition-colors ${
                  timeLeft <= 5
                    ? 'bg-rose-500/15 text-rose-600 border border-rose-500/30 animate-pulse'
                    : isDarkMode
                    ? 'bg-slate-800 text-slate-200 border border-slate-700'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <Clock className="w-3 h-3 text-slate-500" />
                <span>{timeLeft}s</span>
              </div>

              {/* Mark for Review (Purple CBT Button) */}
              {officialCbtMode && (
                <button
                  type="button"
                  onClick={handleToggleMarkForReview}
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                    markedForReview[currentIndex]
                      ? 'bg-purple-600 text-white border-purple-500'
                      : isDarkMode
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20'
                      : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                  }`}
                >
                  <Bookmark className="w-3 h-3" />
                  <span>{markedForReview[currentIndex] ? 'Marked (Review)' : 'Mark Review'}</span>
                </button>
              )}
            </div>

            {/* Streak Combo & Points */}
            <div className="flex items-center gap-2">
              {combo > 1 && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 text-[11px] font-bold animate-bounce">
                  <Flame className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{combo}x</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-xs font-extrabold text-indigo-500">
                <Zap className="w-3.5 h-3.5 fill-indigo-500" />
                <span>{score} pts</span>
              </div>
            </div>
          </div>

          {/* Official CBT Question Palette Strip (Green = Answered, Red = Wrong/Unanswered, Purple = Marked for Review) */}
          {officialCbtMode && (
            <div
              className={`rounded-xl px-3.5 py-2 border flex flex-wrap items-center justify-between gap-2 text-[11px] ${
                isDarkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
                <span className="font-bold text-slate-400 mr-1 shrink-0">CBT Palette:</span>
                {quizQuestions.map((q, idx) => {
                  const state = questionStates[idx];
                  const isReview = markedForReview[idx];
                  const isCurrent = idx === currentIndex;

                  let pillClass = isDarkMode
                    ? 'bg-slate-800 text-slate-400 border-slate-700'
                    : 'bg-white text-slate-600 border-slate-300';

                  if (isReview) {
                    pillClass = 'bg-purple-600 text-white border-purple-500 font-bold';
                  } else if (state === 'correct') {
                    pillClass = 'bg-emerald-600 text-white border-emerald-500 font-bold';
                  } else if (state === 'wrong') {
                    pillClass = 'bg-rose-600 text-white border-rose-500 font-bold';
                  }

                  return (
                    <span
                      key={q.id}
                      className={`w-6 h-6 rounded-lg text-[10px] font-mono flex items-center justify-center border shrink-0 transition ${pillClass} ${
                        isCurrent ? 'ring-2 ring-indigo-500 ring-offset-1' : ''
                      }`}
                      title={`Question ${idx + 1}`}
                    >
                      {idx + 1}
                    </span>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-3 text-[10px] font-semibold text-slate-500 shrink-0">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Answered
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500" /> Wrong (-0.25)
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-600" /> Review
                </span>
              </div>
            </div>
          )}

          {/* Question Box */}
          <div
            className={`border rounded-2xl p-4 sm:p-5 shadow-sm transition-colors ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                {CATEGORIES.find((c) => c.id === currentQuestion.categoryId)?.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 capitalize font-medium">
                {currentQuestion.difficulty} • +1.00 / -0.25 CBT
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold tracking-tight leading-snug mb-3.5">
              {currentQuestion.question}
            </h2>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {randomizedOptions.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentQuestion.answer;

                let optionStyle = isDarkMode
                  ? 'bg-slate-800/70 hover:bg-slate-800 text-slate-100 border-slate-700'
                  : 'bg-white hover:bg-[#F1F5F9] text-[#1E293B] border-[#E2E8F0]';

                if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-[#ECFDF5] border-[#10B981] text-[#065F46] font-bold shadow-sm';
                  } else if (isSelected) {
                    optionStyle = 'bg-[#FEF2F2] border-[#EF4444] text-[#991B1B] font-bold shadow-sm';
                  } else {
                    optionStyle = isDarkMode
                      ? 'opacity-45 border-slate-800 text-slate-500 bg-slate-900'
                      : 'opacity-45 border-[#E2E8F0] text-slate-500 bg-white';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handleSubmitAnswer(opt)}
                    className={`px-3 py-2 sm:px-3.5 sm:py-2.5 min-h-[44px] rounded-xl border text-left text-xs sm:text-[13px] font-medium transition-all active:scale-98 cursor-pointer flex items-center gap-2.5 ${optionStyle}`}
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-slate-200/80 dark:bg-slate-700 flex items-center justify-center text-[11px] font-bold shrink-0 text-slate-800 dark:text-slate-200">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug flex-1">{opt}</span>

                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 ml-auto" />
                    )}
                    {isSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 6. INTEGRATED EXPLANATION DRAWER & 1-CLICK "ASK AI MENTOR" DOUBT BUSTER */}
            {isSubmitted && (
              <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#C7D2FE] dark:border-indigo-500/30 text-xs text-[#1E1B4B] dark:text-indigo-100 space-y-3 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 font-extrabold text-[#312E81] dark:text-indigo-300 text-[11px] sm:text-xs">
                      <HelpCircle className="w-3.5 h-3.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                      <span>Verified Syllabus Explanation &amp; Context</span>
                    </div>
                    <p className="leading-relaxed text-[11px] sm:text-xs font-medium">
                      {currentQuestion.explanation}
                    </p>
                    {currentQuestion.tip && (
                      <div className="text-[11px] text-amber-900 dark:text-amber-200 flex items-center gap-1.5 font-semibold bg-amber-50 dark:bg-amber-500/10 p-2 rounded-xl border border-amber-200 dark:border-amber-500/30">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Exam Tip: {currentQuestion.tip}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons: Ask AI Mentor & Next Question */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handleAskAiMentorDoubt}
                      disabled={isAiDoubtLoading}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[40px] rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition cursor-pointer shadow-md shadow-purple-600/20"
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>
                        {isAiDoubtLoading
                          ? 'Analyzing Options...'
                          : aiDoubtExplanation
                          ? 'Refresh AI Breakdown'
                          : 'Ask AI Mentor (Why Others Wrong?)'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextQuestion}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 min-h-[40px] rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-xs transition cursor-pointer shadow-md shadow-indigo-500/20"
                    >
                      <span>{currentIndex + 1 < quizQuestions.length ? 'Next Question' : 'View CBT Scorecard'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Expandable AI Doubt Buster Option-by-Option Elimination Drawer */}
                {aiDoubtExplanation && (
                  <div className="pt-3 border-t border-indigo-200 dark:border-indigo-800/80">
                    <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-purple-300 dark:border-purple-500/40 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-purple-700 dark:text-purple-300">
                        <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                        <span>AI Mentor Option-by-Option Elimination Breakdown:</span>
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                        {aiDoubtExplanation}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 7. TRUST & SOCIAL PROOF BAR + TELEGRAM COMMUNITY PROMPT */}
      <div
        className={`rounded-2xl border p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
          isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100/80 border-slate-200 text-slate-700'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0">
            <Send className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-slate-900 dark:text-white">
              Over {totalDisplayCount.toLocaleString()}+ Verified J&amp;K Exam Questions • Updated Daily
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Join J&amp;K aspirants discussing daily JKSSB FAA, Patwari &amp; JKPSI PDFs and live mock ranks on our official Telegram channel.
            </p>
          </div>
        </div>

        <a
          href="https://t.me/flshmnd"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs whitespace-nowrap transition flex items-center gap-1.5 shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Join @flshmnd Telegram</span>
        </a>
      </div>

      {/* DAILY TOP 10 ASPIRANTS LEADERBOARD MODAL */}
      {isLeaderboardOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leaderboard-title"
        >
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 text-white p-5 sm:p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="leaderboard-title" className="text-base font-black text-white">
                    J&amp;K Daily Top 10 Aspirants
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Ranked by Official CBT Net Score (-0.25 negative marking applied)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsLeaderboardOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[340px] overflow-y-auto space-y-1.5 pr-1">
              {DAILY_LEADERBOARD.map((row) => (
                <div
                  key={row.rank}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-800/70 border border-slate-700/60 text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-6 h-6 rounded-lg font-mono font-black flex items-center justify-center text-[11px] shrink-0 ${
                        row.rank === 1
                          ? 'bg-amber-400 text-slate-950'
                          : row.rank === 2
                          ? 'bg-slate-300 text-slate-950'
                          : row.rank === 3
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      #{row.rank}
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-white truncate">{row.name}</div>
                      <div className="text-[10px] text-slate-400">
                        Target: {row.exam} • 🔥 {row.streak}d streak
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-mono font-extrabold text-emerald-400">{row.score}</div>
                    <div className="text-[10px] text-slate-400">🎯 {row.accuracy}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-indigo-200 block">
                  Your Live Session: {aspirantName || 'Guest Aspirant'}
                </span>
                <span className="text-[11px] text-slate-300">
                  Net CBT: {netOfficialMarks} pts • Accuracy: {accuracyPercent}% • Streak: 🔥 {userStats.streak}d
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsLeaderboardOpen(false)}
                className="px-3 py-1.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold cursor-pointer"
              >
                Keep Practicing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
