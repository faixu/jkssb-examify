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
  onNavigateToMock?: () => void;
}

const QUESTION_TIME_LIMIT = 25; // seconds

export const QuizMode: React.FC<QuizModeProps> = ({
  cards,
  userStats,
  onUpdateStats,
  selectedCategory,
  onSelectCategory,
  onNavigateToMock,
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
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const subjectDropdownRef = useRef<HTMLDivElement>(null);

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
    setIsQuizComplete(false);
  }, [pool, questionCount, selectedCategory]);

  useEffect(() => {
    const targetKey = `${selectedCategory}:${questionCount}`;
    if (activeSessionKeyRef.current !== targetKey) {
      // User switched category or quiz length -> start fresh quiz
      startNewQuiz();
      return;
    }

    // Background question chunks loaded for the current category:
    // Keep already-rendered questions (especially index 0 on screen!) completely untouched to guarantee 0 CLS,
    // and only top up remaining unseen slots up to questionCount.
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

  const handleSubmitAnswer = useCallback((chosen: string) => {
    if (isSubmitted || !currentQuestion) return;

    setSelectedOption(chosen);
    setIsSubmitted(true);
    setIsTimerPaused(true);

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

      if (nextCombo === 3 || nextCombo === 5) {
        playStreakCelebration();
        fireConfetti();
      }

      const updated = recordStudyActivity(currentQuestion.categoryId, true, 20);
      onUpdateStats(updated);
    } else {
      playWrongSound();
      setCombo(0);
      const updated = recordStudyActivity(currentQuestion.categoryId, false, 5);
      onUpdateStats(updated);
    }
  }, [combo, currentQuestion, isSubmitted, onUpdateStats, timeLeft]);

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
    } else {
      setIsQuizComplete(true);
      playStreakCelebration();
      fireConfetti();
    }
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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-5 min-h-[640px]">
      {/* Official JKSSB Mock Test Portal Hero Banner (jkssbmocktests.in inspired layout) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 border border-indigo-500/30 p-5 sm:p-6 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>JKSSB Online Test Series &amp; Practice Portal</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              JKSSB FAA, Accounts Assistant &amp; Exam Mock Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
              Practice 120-question timed mock tests with negative marking, subject-wise quizzes, and detailed explanations aligned with official J&amp;K recruitment syllabi.
            </p>
          </div>
          {onNavigateToMock && (
            <button
              onClick={onNavigateToMock}
              className="px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>Launch 120Q Full Mock Test</span>
            </button>
          )}
        </div>
      </div>

      {/* Controls Bar: Clean Subject Selection & Session Size (Reserved min-height prevents CLS) */}
      <div className="mb-3 space-y-2 min-h-[96px]">
        {/* Clean Subject Selection Dropdown & Quick Access */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-h-[48px]">
          {/* Custom Interactive Subject Dropdown */}
          <div ref={subjectDropdownRef} className="relative w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsSubjectDropdownOpen((prev) => !prev)}
              className="w-full sm:w-auto min-w-[260px] md:min-w-[320px] min-h-[48px] flex items-center justify-between gap-3 px-3.5 py-2 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-indigo-500/60 shadow-lg shadow-black/30 transition-all cursor-pointer group text-left"
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
                    <span>Quiz Subject</span>
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
              <div className="absolute left-0 mt-2 w-full sm:w-[400px] max-h-[420px] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/90 shadow-2xl shadow-black/80 z-50 p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 animate-in fade-in zoom-in-95 duration-150">
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

          {/* Quick-Access Pills for Fast Switching */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs min-h-[34px]">
            <span className="text-[11px] font-semibold text-slate-400 shrink-0 hidden md:inline">
              Quick:
            </span>
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer font-mono tabular-nums ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All ({totalDisplayCount})
            </button>
            {(['cs', 'general', 'history', 'accounting', 'grammar', 'math'] as CategoryId[]).map((catId) => {
              const cat = CATEGORIES.find((c) => c.id === catId);
              if (!cat) return null;
              const isSelected = selectedCategory === cat.id;
              const count = getCategoryDisplayCount(cat.id);
              const shortLabel = cat.id === 'history' ? 'J&K History' : cat.name.split(' ')[0];
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{shortLabel}</span>
                  <span className="text-[10px] opacity-70 font-mono tabular-nums">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Count Selection */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/60 border border-slate-800/80 rounded-2xl px-4 py-2">
          <span className="text-xs font-semibold text-slate-400">Quiz Length:</span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {[10, 25, 50, 100].map((num) => (
              <button
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  questionCount === num
                    ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {num} Qs
              </button>
            ))}
            {onNavigateToMock && (
              <button
                onClick={onNavigateToMock}
                className="px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 flex items-center gap-1 shadow-sm"
                title="Launch full 120-question, 120-minute CBT Mock Exam"
              >
                <ClipboardCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>120-Q Mock (120m)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {isQuizComplete ? (
        /* Quiz Complete Screen */
        <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
            <Trophy className="w-8 h-8 text-slate-950" />
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
            Quiz Completed!
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Here is your performance breakdown for this round.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-600 block mb-1">Total Score</span>
              <span className="text-2xl font-black text-indigo-600">{score}</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-600 block mb-1">Accuracy</span>
              <span className="text-2xl font-black text-emerald-600">
                {quizQuestions.length > 0 ? Math.round((correctCount / quizQuestions.length) * 100) : 0}%
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-600 block mb-1">Max Combo</span>
              <span className="text-2xl font-black text-amber-600">🔥 {highestCombo}x</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-xs text-indigo-900 font-medium">Daily Streak Active</span>
            </div>
            <span className="text-sm font-bold text-amber-600">🔥 {userStats.streak} Days</span>
          </div>

          <button
            onClick={startNewQuiz}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/35 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Next Round ({quizQuestions.length} Questions)</span>
          </button>
        </div>
      ) : (
        /* Active Quiz Arena */
        <div className="space-y-2.5 sm:space-y-3">
          {/* Top Info Bar: Progress, Timer, Combo, Score */}
          <div className="bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 border border-slate-200 shadow-sm flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
            {/* Question Counter */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="p-1 rounded-lg bg-indigo-50 text-indigo-600">
                <Target className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                Q{currentIndex + 1} <span className="text-slate-500 font-normal">/ {quizQuestions.length}</span>
              </span>
            </div>

            {/* Timer countdown */}
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-bold font-mono transition-colors ${
                timeLeft <= 5
                  ? 'bg-rose-50 text-rose-600 border border-rose-200 animate-pulse'
                  : 'bg-slate-100 text-slate-700 border border-slate-200'
              }`}>
                <Clock className="w-3 h-3 text-slate-500" />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Streak Combo */}
            <div className="flex items-center gap-2">
              {combo > 1 && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold animate-bounce">
                  <Flame className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{combo}x</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-xs font-extrabold text-indigo-600">
                <Zap className="w-3.5 h-3.5 fill-indigo-600" />
                <span>{score} pts</span>
              </div>
            </div>
          </div>

          {/* Question Box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2 sm:mb-2.5">
              <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {CATEGORIES.find((c) => c.id === currentQuestion.categoryId)?.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 capitalize font-medium">
                {currentQuestion.difficulty}
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug mb-3 sm:mb-3.5">
              {currentQuestion.question}
            </h2>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {randomizedOptions.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentQuestion.answer;

                let optionStyle = 'bg-white hover:bg-[#F1F5F9] text-[#1E293B] border-[#E2E8F0]';

                if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-[#ECFDF5] border-[#10B981] text-[#065F46] font-bold shadow-sm';
                  } else if (isSelected) {
                    optionStyle = 'bg-[#FEF2F2] border-[#EF4444] text-[#991B1B] font-bold shadow-sm';
                  } else {
                    optionStyle = 'opacity-40 border-[#E2E8F0] text-slate-500 bg-white';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handleSubmitAnswer(opt)}
                    className={`px-3 py-2 sm:px-3.5 sm:py-2.5 min-h-[42px] rounded-xl border text-left text-xs sm:text-[13px] font-medium transition-all active:scale-98 cursor-pointer flex items-center gap-2.5 ${optionStyle}`}
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-slate-100 flex items-center justify-center text-[11px] font-bold shrink-0 text-slate-700">
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

            {/* Post-submission explanation & Next Question */}
            {isSubmitted && (
              <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] text-xs text-[#1E1B4B] animate-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#312E81] text-[11px] sm:text-xs">
                    <HelpCircle className="w-3.5 h-3.5 shrink-0 text-indigo-600" />
                    <span>Explanation & Context</span>
                  </div>
                  <p className="leading-relaxed text-[#1E1B4B] text-[11px] sm:text-xs font-medium">
                    {currentQuestion.explanation}
                  </p>
                  {currentQuestion.tip && (
                    <div className="text-[11px] text-amber-900 flex items-center gap-1 font-semibold bg-amber-50 p-1.5 rounded-lg border border-amber-200">
                      <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>Tip: {currentQuestion.tip}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-end shrink-0">
                  <button
                    onClick={handleNextQuestion}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2.5 min-h-[40px] rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-xs transition cursor-pointer shadow-md shadow-indigo-500/20"
                  >
                    <span>{currentIndex + 1 < quizQuestions.length ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
