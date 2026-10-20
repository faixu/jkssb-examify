import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
} from 'lucide-react';
import { CategoryId, Flashcard, UserStats } from '../types';
import { CATEGORIES } from '../data/initialDecks';
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
  const [quizQuestions, setQuizQuestions] = useState<Flashcard[]>([]);
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

  // Filter pool
  const pool = useMemo(() => {
    return cards.filter((c) => selectedCategory === 'all' || c.categoryId === selectedCategory);
  }, [cards, selectedCategory]);

  const startNewQuiz = useCallback(() => {
    const count = Math.min(questionCount, pool.length);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
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
  }, [pool, questionCount]);

  useEffect(() => {
    startNewQuiz();
  }, [startNewQuiz]);

  const currentQuestion = quizQuestions[currentIndex];

  // Options shuffled once per question
  const randomizedOptions = useMemo(() => {
    if (!currentQuestion) return [];
    return [...currentQuestion.options].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

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

  if (!currentQuestion && !isQuizComplete) {
    return (
      <div className="text-center py-20 text-slate-400">
        <p>No questions available for this category.</p>
        <button
          onClick={() => onSelectCategory('all')}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
        >
          Select All Categories
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Controls Bar: Category Selection & Session Size */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Subjects ({cards.length})
          </button>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cards.filter((c) => c.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.name}</span>
                {cat.marks && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                    {cat.marks}M
                  </span>
                )}
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
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
        <div className="max-w-xl mx-auto bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
            <Trophy className="w-8 h-8 text-slate-950" />
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight mb-1">
            Quiz Completed!
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Here is your performance breakdown for this round.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
              <span className="text-xs text-slate-400 block mb-1">Total Score</span>
              <span className="text-2xl font-black text-indigo-400">{score}</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
              <span className="text-xs text-slate-400 block mb-1">Accuracy</span>
              <span className="text-2xl font-black text-emerald-400">
                {quizQuestions.length > 0 ? Math.round((correctCount / quizQuestions.length) * 100) : 0}%
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
              <span className="text-xs text-slate-400 block mb-1">Max Combo</span>
              <span className="text-2xl font-black text-amber-400">🔥 {highestCombo}x</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-xs text-indigo-200 font-medium">Daily Streak Active</span>
            </div>
            <span className="text-sm font-bold text-amber-400">🔥 {userStats.streak} Days</span>
          </div>

          <button
            onClick={startNewQuiz}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Next Round ({quizQuestions.length} Questions)</span>
          </button>
        </div>
      ) : (
        /* Active Quiz Arena */
        <div className="space-y-6">
          {/* Top Info Bar: Progress, Timer, Combo, Score */}
          <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex items-center justify-between gap-4">
            {/* Question Counter */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-300">
                Q{currentIndex + 1} <span className="text-slate-500 font-normal">/ {quizQuestions.length}</span>
              </span>
            </div>

            {/* Timer countdown */}
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold font-mono transition-colors ${
                timeLeft <= 5
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse'
                  : 'bg-slate-800 text-slate-300 border border-slate-700'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Streak Combo */}
            <div className="flex items-center gap-2">
              {combo > 1 && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold animate-bounce">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{combo}x Combo!</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-indigo-400">
                <Zap className="w-4 h-4 fill-indigo-400" />
                <span>{score} pts</span>
              </div>
            </div>
          </div>

          {/* Question Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {CATEGORIES.find((c) => c.id === currentQuestion.categoryId)?.name}
              </span>
              <span className="text-xs text-slate-400 capitalize">
                {currentQuestion.difficulty}
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug mb-6">
              {currentQuestion.question}
            </h2>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {randomizedOptions.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentQuestion.answer;

                let optionStyle = 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-750 hover:border-indigo-500/40';

                if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-500/20 text-emerald-200 border-emerald-500 shadow-md shadow-emerald-500/20 font-bold';
                  } else if (isSelected) {
                    optionStyle = 'bg-rose-500/20 text-rose-200 border-rose-500 shadow-md shadow-rose-500/20 font-bold';
                  } else {
                    optionStyle = 'opacity-40 border-slate-800 text-slate-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handleSubmitAnswer(opt)}
                    className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all active:scale-98 cursor-pointer flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-700/60 flex items-center justify-center text-xs font-bold shrink-0 text-slate-300">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug pt-0.5">{opt}</span>

                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-auto mt-0.5" />
                    )}
                    {isSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-auto mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Post-submission explanation */}
            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-slate-300 animate-fade-in space-y-2">
                <div className="flex items-center gap-2 font-bold text-indigo-300">
                  <HelpCircle className="w-4 h-4" />
                  <span>Explanation & Context</span>
                </div>
                <p className="leading-relaxed text-slate-200">
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.tip && (
                  <div className="text-[11px] text-amber-300/90 pt-1 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Tip: {currentQuestion.tip}</span>
                  </div>
                )}

                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer shadow-md shadow-indigo-600/30"
                  >
                    <span>{currentIndex + 1 < quizQuestions.length ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
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
