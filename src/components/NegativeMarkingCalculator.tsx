import React, { useState, useMemo } from 'react';
import {
  Calculator,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Trophy,
  Percent,
  Target,
  AlertTriangle,
  Share2,
  RotateCcw,
  Sparkles,
  ClipboardCheck,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';

interface NegativeMarkingCalculatorProps {
  isDarkMode?: boolean;
  onNavigateToMock?: () => void;
  onNavigateToQuiz?: () => void;
}

interface ExamPreset {
  id: string;
  name: string;
  badge: string;
  totalQuestions: number;
  marksPerCorrect: number;
  negativePerWrong: number;
  description: string;
}

const EXAM_PRESETS: ExamPreset[] = [
  {
    id: 'faa-patwari',
    name: 'JKSSB FAA / Patwari / Naib Tehsildar',
    badge: '120 Marks (-0.25)',
    totalQuestions: 120,
    marksPerCorrect: 1,
    negativePerWrong: 0.25,
    description: 'Official 120-Question CBT pattern (+1.00 for correct, -0.25 for each wrong answer).',
  },
  {
    id: 'jkpsi',
    name: 'JKPSI (Police Sub-Inspector)',
    badge: '150 Marks (-0.3125)',
    totalQuestions: 120,
    marksPerCorrect: 1.25,
    negativePerWrong: 0.3125,
    description: '120 Questions for 150 Marks (+1.25 for correct, 25% negative penalty = -0.3125).',
  },
  {
    id: 'jr-assistant',
    name: 'JKSSB Junior Assistant (Written CBT)',
    badge: '80 Marks (-0.25)',
    totalQuestions: 80,
    marksPerCorrect: 1,
    negativePerWrong: 0.25,
    description: '80-Question CBT written stage (+1.00 for correct, -0.25 for wrong) + 35 WPM Skill Test.',
  },
  {
    id: 'forester-vlw',
    name: 'JKSSB Forester / Panchayat Sec (VLW)',
    badge: '100/120 Marks (-0.25)',
    totalQuestions: 100,
    marksPerCorrect: 1,
    negativePerWrong: 0.25,
    description: '100-Question standard JKSSB pattern (+1.00 for correct, -0.25 negative marking).',
  },
];

interface CategoryCutoffBand {
  category: string;
  code: string;
  minPct: number;
  maxPct: number;
}

const CATEGORY_CUTOFF_BANDS: CategoryCutoffBand[] = [
  { category: 'Open Merit', code: 'OM', minPct: 74, maxPct: 79 },
  { category: 'Resident of Backward Area', code: 'RBA', minPct: 69, maxPct: 74 },
  { category: 'Economically Weaker Section', code: 'EWS', minPct: 67, maxPct: 72 },
  { category: 'Other Backward Classes / ALC-IB', code: 'OBC / ALC', minPct: 65, maxPct: 70 },
  { category: 'Scheduled Caste', code: 'SC', minPct: 63, maxPct: 68 },
  { category: 'Scheduled Tribe', code: 'ST', minPct: 60, maxPct: 66 },
];

export const NegativeMarkingCalculator: React.FC<NegativeMarkingCalculatorProps> = ({
  isDarkMode = false,
  onNavigateToMock,
  onNavigateToQuiz,
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('faa-patwari');
  const [totalQuestions, setTotalQuestions] = useState<number>(120);
  const [marksPerCorrect, setMarksPerCorrect] = useState<number>(1);
  const [negativePerWrong, setNegativePerWrong] = useState<number>(0.25);

  const [correctCount, setCorrectCount] = useState<number>(88);
  const [wrongCount, setWrongCount] = useState<number>(16);
  const [selectedCategoryCode, setSelectedCategoryCode] = useState<string>('OM');

  const handleSelectPreset = (preset: ExamPreset) => {
    setSelectedPresetId(preset.id);
    setTotalQuestions(preset.totalQuestions);
    setMarksPerCorrect(preset.marksPerCorrect);
    setNegativePerWrong(preset.negativePerWrong);

    // Scale current correct/wrong proportionally so values stay valid
    const defaultCorrect = Math.round(preset.totalQuestions * 0.72);
    const defaultWrong = Math.round(preset.totalQuestions * 0.13);
    setCorrectCount(defaultCorrect);
    setWrongCount(defaultWrong);
  };

  const handleTotalQuestionsChange = (val: number) => {
    const clampedTotal = Math.max(10, Math.min(200, val || 10));
    setTotalQuestions(clampedTotal);
    if (correctCount + wrongCount > clampedTotal) {
      const nextCorrect = Math.min(correctCount, clampedTotal);
      const nextWrong = Math.max(0, clampedTotal - nextCorrect);
      setCorrectCount(nextCorrect);
      setWrongCount(nextWrong);
    }
  };

  const handleCorrectChange = (val: number) => {
    const clamped = Math.max(0, Math.min(totalQuestions, val || 0));
    setCorrectCount(clamped);
    if (clamped + wrongCount > totalQuestions) {
      setWrongCount(Math.max(0, totalQuestions - clamped));
    }
  };

  const handleWrongChange = (val: number) => {
    const maxAllowedWrong = Math.max(0, totalQuestions - correctCount);
    const clamped = Math.max(0, Math.min(maxAllowedWrong, val || 0));
    setWrongCount(clamped);
  };

  const handleReset = () => {
    const preset = EXAM_PRESETS.find((p) => p.id === selectedPresetId) || EXAM_PRESETS[0];
    handleSelectPreset(preset);
  };

  // Calculations
  const attemptedCount = correctCount + wrongCount;
  const unattemptedCount = Math.max(0, totalQuestions - attemptedCount);
  const maxMarks = Number((totalQuestions * marksPerCorrect).toFixed(2));
  const rawPositiveScore = Number((correctCount * marksPerCorrect).toFixed(2));
  const negativeDeduction = Number((wrongCount * negativePerWrong).toFixed(2));
  const netFinalScore = Number((rawPositiveScore - negativeDeduction).toFixed(2));
  const netPercentage =
    maxMarks > 0 ? Number(Math.max(0, (netFinalScore / maxMarks) * 100).toFixed(2)) : 0;
  const accuracyRate =
    attemptedCount > 0 ? Number(((correctCount / attemptedCount) * 100).toFixed(1)) : 0;

  // Cutoff comparison for selected category
  const activeCutoffBand = useMemo(() => {
    return (
      CATEGORY_CUTOFF_BANDS.find((c) => c.code === selectedCategoryCode) ||
      CATEGORY_CUTOFF_BANDS[0]
    );
  }, [selectedCategoryCode]);

  const safeMinScore = Number(((activeCutoffBand.minPct / 100) * maxMarks).toFixed(1));
  const safeMaxScore = Number(((activeCutoffBand.maxPct / 100) * maxMarks).toFixed(1));

  const cutoffVerdict = useMemo(() => {
    if (netPercentage >= activeCutoffBand.minPct) {
      return {
        status: 'SAFE ZONE (High Selection Probability)',
        color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/40',
        message: `Your net score of ${netFinalScore}/${maxMarks} (${netPercentage}%) meets or exceeds the expected ${activeCutoffBand.code} safe cutoff range (${safeMinScore}–${safeMaxScore}).`,
      };
    }
    if (netPercentage >= activeCutoffBand.minPct - 6) {
      return {
        status: 'BORDERLINE / TIE-BREAKER ZONE',
        color: 'text-amber-300 bg-amber-500/15 border-amber-500/40',
        message: `You are within ${(activeCutoffBand.minPct - netPercentage).toFixed(
          1
        )}% of the expected ${activeCutoffBand.code} safe cutoff (${safeMinScore}–${safeMaxScore}). Reducing 6–8 negative errors will push you into the safe list!`,
      };
    }
    return {
      status: 'NEEDS REVISION (Below Expected Cutoff)',
      color: 'text-rose-300 bg-rose-500/15 border-rose-500/40',
      message: `Target at least ${safeMinScore}+ marks (${activeCutoffBand.minPct}%) for ${activeCutoffBand.code}. Focus on high-weightage J&K GK (30M) and reducing blind guesses.`,
    };
  }, [activeCutoffBand, maxMarks, netFinalScore, netPercentage, safeMaxScore, safeMinScore]);

  const handleShareCalculation = () => {
    const text = `🧮 JKSSB Negative Marking & Cutoff Calculation (FlashMind):\n• Total Questions: ${totalQuestions}\n• Attempted: ${attemptedCount} (✅ ${correctCount} Correct | ❌ ${wrongCount} Wrong)\n• Raw Marks: +${rawPositiveScore}\n• Negative Penalty (-${negativePerWrong}): -${negativeDeduction}\n🏆 Net Official Score: ${netFinalScore} / ${maxMarks} (${netPercentage}%)\n🎯 Accuracy: ${accuracyRate}% | Category (${selectedCategoryCode}): ${cutoffVerdict.status}\n\nCalculate your JKSSB score free: https://jkssb-mcq-quiz.ai.studio/jkssb-negative-marking-calculator`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      'https://jkssb-mcq-quiz.ai.studio/jkssb-negative-marking-calculator'
    )}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-6">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border border-indigo-500/30 p-5 sm:p-6 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-extrabold">
              <Calculator className="w-3.5 h-3.5 text-indigo-400" />
              <span>Official JKSSB OMR &amp; CBT Score Utility</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              JKSSB Negative Marking (-0.25) &amp; Cutoff Calculator
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Enter your Total Questions, Correct Answers, and Incorrect Attempts to instantly compute your raw marks, exact <span className="text-rose-300 font-semibold">-0.25 negative deduction</span>, net percentage, and category-wise safe cutoff standing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            {onNavigateToMock && (
              <button
                type="button"
                onClick={onNavigateToMock}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/25 transition cursor-pointer"
              >
                <ClipboardCheck className="w-4 h-4" />
                <span>Test in 120Q CBT Simulator</span>
              </button>
            )}
          </div>
        </div>

        {/* Exam Pattern Presets */}
        <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Exam Pattern:
          </span>
          {EXAM_PRESETS.map((preset) => {
            const isActive = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectPreset(preset)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer inline-flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-white text-slate-950 border-white shadow-sm'
                    : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-indigo-400 hover:text-white'
                }`}
              >
                <span>{preset.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded leading-none ${
                    isActive ? 'bg-indigo-100 text-indigo-900' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {preset.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Calculator Grid: Left = Inputs & Sliders, Right = Live Net Score & Cutoff Predictor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Interactive Inputs (7 cols) */}
        <div
          className={`lg:col-span-7 rounded-3xl border p-5 sm:p-6 space-y-5 shadow-sm ${
            isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">1. Enter Your Exam Attempts</h2>
              <p className="text-xs text-slate-500">
                Use the sliders or type exact numbers from your OMR response sheet
              </p>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
              Attempted: {attemptedCount} / {totalQuestions}
            </span>
          </div>

          {/* Input 1: Total Questions & Marking Scheme */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div
              className={`p-3 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                Total Questions
              </label>
              <input
                type="number"
                min={10}
                max={200}
                value={totalQuestions}
                onChange={(e) => handleTotalQuestionsChange( Number(e.target.value))}
                className={`w-full text-lg font-black font-mono rounded-xl px-2.5 py-1 border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div
              className={`p-3 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                Marks / Correct (+)
              </label>
              <select
                value={marksPerCorrect}
                onChange={(e) => setMarksPerCorrect(Number(e.target.value))}
                className={`w-full text-sm font-black font-mono rounded-xl px-2.5 py-1.5 border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-700 text-emerald-400'
                    : 'bg-white border-slate-300 text-emerald-700'
                }`}
              >
                <option value={1}>+1.00 Mark</option>
                <option value={1.25}>+1.25 Marks (JKPSI)</option>
                <option value={2}>+2.00 Marks (JKPSC)</option>
              </select>
            </div>

            <div
              className={`p-3 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                Negative Penalty (-)
              </label>
              <select
                value={negativePerWrong}
                onChange={(e) => setNegativePerWrong(Number(e.target.value))}
                className={`w-full text-sm font-black font-mono rounded-xl px-2.5 py-1.5 border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-700 text-rose-400'
                    : 'bg-white border-slate-300 text-rose-700'
                }`}
              >
                <option value={0.25}>-0.25 (1/4 Official JKSSB)</option>
                <option value={0.3125}>-0.3125 (1/4 of 1.25 JKPSI)</option>
                <option value={0.33}>-0.33 (1/3 Penalty)</option>
                <option value={0.5}>-0.50 (1/2 Penalty)</option>
                <option value={0}>0.00 (No Negative Marking)</option>
              </select>
            </div>
          </div>

          {/* Input 2: Correct Answers Slider + Box */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <span className="text-sm font-extrabold text-emerald-800 dark:text-emerald-300 block">
                    Correct Answers
                  </span>
                  <span className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                    Each adds +{marksPerCorrect} mark(s) = +{rawPositiveScore} Raw Score
                  </span>
                </div>
              </div>
              <input
                type="number"
                min={0}
                max={totalQuestions}
                value={correctCount}
                onChange={(e) => handleCorrectChange(Number(e.target.value))}
                className="w-20 text-center text-lg font-black font-mono rounded-xl py-1 px-2 bg-white dark:bg-slate-900 border border-emerald-500/50 text-emerald-700 dark:text-emerald-300"
              />
            </div>
            <input
              type="range"
              min={0}
              max={totalQuestions}
              value={correctCount}
              onChange={(e) => handleCorrectChange(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Input 3: Incorrect Answers Slider + Box */}
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                <div>
                  <span className="text-sm font-extrabold text-rose-800 dark:text-rose-300 block">
                    Incorrect Answers (Negative Penalty)
                  </span>
                  <span className="text-[11px] text-rose-700/80 dark:text-rose-400/80">
                    Each deducts -{negativePerWrong} mark(s) = -{negativeDeduction.toFixed(2)} Deducted
                  </span>
                </div>
              </div>
              <input
                type="number"
                min={0}
                max={Math.max(0, totalQuestions - correctCount)}
                value={wrongCount}
                onChange={(e) => handleWrongChange(Number(e.target.value))}
                className="w-20 text-center text-lg font-black font-mono rounded-xl py-1 px-2 bg-white dark:bg-slate-900 border border-rose-500/50 text-rose-700 dark:text-rose-300"
              />
            </div>
            <input
              type="range"
              min={0}
              max={Math.max(0, totalQuestions - correctCount)}
              value={wrongCount}
              onChange={(e) => handleWrongChange(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          {/* Unattempted Questions Summary Bar */}
          <div
            className={`px-4 py-3 rounded-2xl border flex items-center justify-between text-xs ${
              isDarkMode ? 'bg-slate-800/70 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <MinusCircle className="w-4 h-4 text-slate-400" />
              <span>Unattempted / Skipped Questions (0.00 penalty):</span>
            </div>
            <span className="font-mono font-extrabold text-sm">{unattemptedCount} Qs</span>
          </div>
        </div>

        {/* Right Column: Instant Net Score Breakdown & Category Cutoff Predictor (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 sm:p-6 text-white shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                2. Official Net Scorecard
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Formula: ({correctCount}×{marksPerCorrect}) − ({wrongCount}×{negativePerWrong})
              </span>
            </div>

            {/* Big Net Score Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600/30 via-slate-900 to-emerald-600/20 border border-indigo-500/40 text-center space-y-1">
              <span className="text-xs font-bold text-indigo-200 uppercase tracking-wider block">
                Final Net Official Marks
              </span>
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                {netFinalScore}{' '}
                <span className="text-lg sm:text-xl font-bold text-slate-400">/ {maxMarks}</span>
              </div>
              <div className="pt-1 flex items-center justify-center gap-3 text-xs font-bold">
                <span className="text-emerald-400">📊 {netPercentage}% Score</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-300">🎯 {accuracyRate}% Accuracy</span>
              </div>
            </div>

            {/* 3-Box Breakdown: Raw Score, Deducted Marks, Percentage */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                <span className="text-[10px] text-slate-400 font-semibold block">Raw Score</span>
                <span className="text-base sm:text-lg font-black font-mono text-emerald-400">
                  +{rawPositiveScore}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                <span className="text-[10px] text-slate-400 font-semibold block">Deducted (-0.25)</span>
                <span className="text-base sm:text-lg font-black font-mono text-rose-400">
                  -{negativeDeduction.toFixed(2)}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                <span className="text-[10px] text-slate-400 font-semibold block">Net %</span>
                <span className="text-base sm:text-lg font-black font-mono text-indigo-300">
                  {netPercentage}%
                </span>
              </div>
            </div>

            {/* Category Cutoff Selector & Live Verdict */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">Select Your J&amp;K Category:</span>
                <div className="flex items-center gap-1 flex-wrap">
                  {CATEGORY_CUTOFF_BANDS.map((cat) => (
                    <button
                      key={cat.code}
                      type="button"
                      onClick={() => setSelectedCategoryCode(cat.code)}
                      className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                        selectedCategoryCode === cat.code
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat.code}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`p-3.5 rounded-2xl border text-xs space-y-1 ${cutoffVerdict.color}`}>
                <div className="font-black flex items-center justify-between">
                  <span>{cutoffVerdict.status}</span>
                  <span className="font-mono">
                    Safe Target: {safeMinScore}–{safeMaxScore}
                  </span>
                </div>
                <p className="text-[11px] opacity-90 leading-relaxed">{cutoffVerdict.message}</p>
              </div>
            </div>

            {/* Share to Telegram CTA */}
            <button
              type="button"
              onClick={handleShareCalculation}
              className="w-full py-3 px-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Score Calculation to Telegram</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category-Wise Safe Cutoff Table & Mathematical Negative Marking Strategy */}
      <div
        className={`rounded-3xl border p-5 sm:p-6 space-y-4 ${
          isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-extrabold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Expected JKSSB Category-Wise Safe Score Matrix (Out of {maxMarks} Marks)</span>
            </h3>
            <p className="text-xs text-slate-500">
              Based on recent JKSSB OMR/CBT normalization and merit lists across J&amp;K districts
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {CATEGORY_CUTOFF_BANDS.map((band) => {
            const minScore = ((band.minPct / 100) * maxMarks).toFixed(1);
            const maxScore = ((band.maxPct / 100) * maxMarks).toFixed(1);
            const isQualifying = netPercentage >= band.minPct;
            return (
              <div
                key={band.code}
                className={`p-3 rounded-2xl border text-center transition ${
                  selectedCategoryCode === band.code
                    ? 'ring-2 ring-indigo-500 bg-indigo-500/10 border-indigo-500/40'
                    : isDarkMode
                    ? 'bg-slate-800/70 border-slate-700'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-xs font-black text-indigo-500 block">{band.code}</span>
                <span className="text-[10px] text-slate-500 block truncate mb-1">{band.category}</span>
                <span className="text-sm font-black font-mono block">
                  {minScore} – {maxScore}
                </span>
                <span
                  className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isQualifying
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                  }`}
                >
                  {isQualifying ? '✓ Above Safe Min' : 'Below Safe Min'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Pro Tip on 50-50 Elimination Strategy */}
        <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-start gap-3 text-xs">
          <Sparkles className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-extrabold text-indigo-700 dark:text-indigo-300 block">
              The 2-Option Elimination Rule for -0.25 Negative Marking:
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              In a `-0.25` exam, if you eliminate <strong>2 wrong options</strong> on 8 doubtful questions and make an educated 50/50 choice, statistically 4 will be right (`+4.00`) and 4 will be wrong (`-1.00`), yielding a <strong>net gain of +3.00 marks</strong>! Never guess blindly across all 4 options, but always attempt when narrowed down to 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
