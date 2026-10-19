import React, { useState } from 'react';
import {
  RotateCw,
  Volume2,
  Bookmark,
  Sparkles,
  Lightbulb,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { Flashcard } from '../types';
import { CATEGORIES } from '../data/initialDecks';
import { playFlipSound, speakText, stopSpeaking } from '../utils/audio';

interface FlipCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  card,
  isFlipped,
  onFlip,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [showTip, setShowTip] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const category = CATEGORIES.find((c) => c.id === card.categoryId) || CATEGORIES[0];

  const handleFlipClick = () => {
    playFlipSound();
    onFlip();
  };

  const handleSpeak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const success = speakText(text);
      if (!success) setIsSpeaking(false);
      setTimeout(() => setIsSpeaking(false), 4000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto perspective-1000 min-h-[360px] sm:min-h-[400px]">
      <div
        onClick={handleFlipClick}
        className={`relative w-full h-full min-h-[360px] sm:min-h-[400px] transition-transform duration-500 transform-style-3d cursor-pointer select-none ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ================= FRONT SIDE ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-slate-950/80 hover:border-indigo-500/50 transition-colors">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${category.bgLight} border border-indigo-500/20`}>
                {category.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-400 capitalize px-2 py-0.5 rounded-md bg-slate-800/80">
                {card.difficulty}
              </span>
            </div>

            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={(e) => handleSpeak(e, card.question)}
                className={`p-2 rounded-xl transition ${
                  isSpeaking ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800'
                }`}
                title="Read question aloud (Speech synthesis)"
              >
                <Volume2 className="w-4 h-4" />
              </button>

              <button
                onClick={onToggleBookmark}
                className={`p-2 rounded-xl transition ${
                  isBookmarked
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    : 'text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800'
                }`}
                title={isBookmarked ? 'Remove bookmark' : 'Bookmark card'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
              </button>
            </div>
          </div>

          {/* Question Center */}
          <div className="my-auto py-6 sm:py-8 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-4 border border-indigo-500/20">
              <HelpCircle className="w-3.5 h-3.5" />
              Question
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-relaxed max-w-xl mx-auto">
              {card.question}
            </h2>

            {/* Hint Box (Optional preview) */}
            {card.tip && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                {showTip ? (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 animate-fade-in">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{card.tip}</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowTip(true)}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Show hint</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Bottom Flip Prompt */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-500">
              <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Space</kbd> or</span>
              <span>Tap to flip</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-400 font-semibold group-hover:text-indigo-300">
              <span>Show Answer</span>
              <RotateCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-500" />
            </div>
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-b from-slate-900 to-indigo-950/40 border border-indigo-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-indigo-950/50">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-2 border-b border-indigo-500/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <CheckCircle className="w-3.5 h-3.5" />
                Correct Answer
              </span>
              <span className="text-xs text-slate-400 font-medium">{category.name}</span>
            </div>

            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={(e) => handleSpeak(e, `${card.answer}. ${card.explanation}`)}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition"
                title="Read answer aloud"
              >
                <Volume2 className="w-4 h-4 text-indigo-300" />
              </button>
            </div>
          </div>

          {/* Answer Body */}
          <div className="my-auto py-4 overflow-y-auto max-h-[240px] pr-1">
            <h3 className="text-xl sm:text-2xl font-black text-emerald-300 tracking-tight mb-3">
              {card.answer}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-3">
              {card.explanation}
            </p>

            {card.tip && (
              <div className="mt-3 p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Quick takeaway / Mnemonic:</span>
                  <span>{card.tip}</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Prompt */}
          <div className="flex items-center justify-between pt-4 border-t border-indigo-500/20 text-xs text-indigo-300">
            <span>Rate your recall below to schedule next review</span>
            <span className="flex items-center gap-1 hover:text-white">
              <span>Flip back</span>
              <RotateCw className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
