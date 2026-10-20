import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Timer,
  Zap,
  Flame,
  RotateCcw,
  Trophy,
  CheckCircle2,
  XCircle,
  Play,
} from 'lucide-react';
import { Flashcard, UserStats } from '../types';
import { recordStudyActivity } from '../utils/storage';
import {
  playCorrectSound,
  playWrongSound,
  fireConfetti,
  playStreakCelebration,
} from '../utils/audio';

interface SpeedRushModeProps {
  cards: Flashcard[];
  userStats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

const RUSH_DURATION = 60; // 60 seconds

export const SpeedRushMode: React.FC<SpeedRushModeProps> = ({
  cards,
  userStats,
  onUpdateStats,
}) => {
  const [gameState, setGameState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [timeLeft, setTimeLeft] = useState(RUSH_DURATION);
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    if (typeof window === 'undefined') return 0;
    const val = localStorage.getItem('flashmind_rush_high_score');
    return val ? parseInt(val, 10) : 0;
  });

  const startRush = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    setCombo(0);
    setMaxCombo(0);
    setTimeLeft(RUSH_DURATION);
    setGameState('running');
  };

  const currentCard = deck[index % (deck.length || 1)];

  // Randomized 4 choices
  const randomizedOptions = useMemo(() => {
    if (!currentCard) return [];
    return [...currentCard.options].sort(() => Math.random() - 0.5);
  }, [currentCard]);

  const handlePickAnswer = (picked: string) => {
    if (gameState !== 'running' || !currentCard) return;

    const isCorrect = picked === currentCard.answer;
    if (isCorrect) {
      playCorrectSound();
      const nextCombo = combo + 1;
      setCorrect((c) => c + 1);
      setCombo(nextCombo);
      setMaxCombo((m) => Math.max(m, nextCombo));

      if (nextCombo === 5 || nextCombo === 10) {
        fireConfetti();
        playStreakCelebration();
      }

      const updated = recordStudyActivity(currentCard.categoryId, true, 15);
      onUpdateStats(updated);
    } else {
      playWrongSound();
      setWrong((w) => w + 1);
      setCombo(0);

      const updated = recordStudyActivity(currentCard.categoryId, false, 2);
      onUpdateStats(updated);
    }

    setIndex((i) => i + 1);
  };

  const finishRush = useCallback(() => {
    setGameState('finished');
    playStreakCelebration();
    fireConfetti();
    if (correct > highScore) {
      setHighScore(correct);
      localStorage.setItem('flashmind_rush_high_score', String(correct));
    }
  }, [correct, highScore]);

  // Timer loop
  useEffect(() => {
    if (gameState !== 'running') return;

    if (timeLeft <= 0) {
      finishRush();
      return;
    }

    const t = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(t);
  }, [gameState, timeLeft, finishRush]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {gameState === 'idle' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center max-w-xl mx-auto shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-500/30">
            <Timer className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-2">
            60-Second Speed Rush
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Test how many quick questions you can answer before the clock runs out! Build rapid recall and earn bonus XP.
          </p>

          <div className="flex items-center justify-center gap-6 mb-8 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-indigo-400" />
              <span>60 Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Personal Best: {highScore}</span>
            </div>
          </div>

          <button
            onClick={startRush}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-indigo-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-extrabold text-base shadow-xl shadow-rose-600/30 transition active:scale-98 cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Start Speed Rush</span>
          </button>
        </div>
      )}

      {gameState === 'running' && currentCard && (
        <div className="space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between bg-slate-900 rounded-2xl p-4 border border-slate-800">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold font-mono ${
              timeLeft <= 10 ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse' : 'bg-slate-800 text-slate-200'
            }`}>
              <Timer className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>

            <div className="flex items-center gap-4">
              {combo > 1 && (
                <div className="flex items-center gap-1 text-xs font-bold text-amber-400 animate-bounce">
                  <Flame className="w-4 h-4 fill-amber-400" />
                  <span>{combo}x Combo</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {correct}
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <XCircle className="w-3.5 h-3.5" /> {wrong}
                </span>
              </div>
            </div>
          </div>

          {/* Question Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-8 shadow-xl text-center">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3 sm:mb-4 capitalize">
              {currentCard.categoryId}
            </span>

            <h3 className="text-base sm:text-2xl font-extrabold text-white tracking-tight mb-5 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              {currentCard.question}
            </h3>

            {/* Quick 4 Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {randomizedOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePickAnswer(opt)}
                  className="p-3.5 sm:p-4 rounded-2xl bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-200 border border-slate-700/80 text-xs sm:text-sm font-semibold transition active:scale-95 cursor-pointer text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {gameState === 'finished' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center max-w-xl mx-auto shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
            <Trophy className="w-8 h-8 text-slate-950" />
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight mb-1">
            Time's Up!
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Spectacular speed! Check your final sprint score below.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <span className="text-xs text-emerald-300 block mb-1">Correct</span>
              <span className="text-2xl font-black text-emerald-400">{correct}</span>
            </div>
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center">
              <span className="text-xs text-rose-300 block mb-1">Mistakes</span>
              <span className="text-2xl font-black text-rose-400">{wrong}</span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-xs text-amber-300 block mb-1">Best Combo</span>
              <span className="text-2xl font-black text-amber-400">🔥 {maxCombo}x</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-800 mb-6 flex items-center justify-between text-xs">
            <span className="text-slate-400">All-Time Rush High Score:</span>
            <span className="font-extrabold text-amber-400 text-sm">{highScore} correct</span>
          </div>

          <button
            onClick={startRush}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Another Rush</span>
          </button>
        </div>
      )}
    </div>
  );
};
