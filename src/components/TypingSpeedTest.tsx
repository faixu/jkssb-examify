import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Keyboard,
  Clock,
  Target,
  Zap,
  RotateCcw,
  Trophy,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Share2,
  ShieldCheck,
  Lock,
  Unlock,
  FileText,
  Sparkles,
} from 'lucide-react';

interface TypingSpeedTestProps {
  isDarkMode?: boolean;
}

interface OfficialPassage {
  id: string;
  title: string;
  category: string;
  difficulty: 'Standard' | 'Official Exam' | 'Numeric & Orders';
  text: string;
}

const OFFICIAL_PASSAGES: OfficialPassage[] = [
  {
    id: 'secretariat-order',
    title: 'Passage 1: J&K Civil Secretariat Administrative Order',
    category: 'Official Correspondence',
    difficulty: 'Official Exam',
    text: `In exercise of the powers conferred under the Jammu and Kashmir Civil Services Regulations, the Administrative Department hereby directs all Drawing and Disbursing Officers across all twenty districts of the Union Territory to ensure timely reconciliation of monthly expenditure statements. Every Junior Assistant posted in the district treasury and secretariat sections shall maintain an updated digital register of files received, processed, and dispatched through the electronic office portal. Strict adherence to procedural transparency, punctuality, and accuracy in drafting official communications is mandatory for efficient public service delivery. Any discrepancy noticed in the service books or pension cases of retiring employees must be rectified within fifteen working days without fail.`,
  },
  {
    id: 'reorg-act-2019',
    title: 'Passage 2: J&K Reorganisation Act 2019 & Governance',
    category: 'Constitutional Framework',
    difficulty: 'Official Exam',
    text: `The Jammu and Kashmir Reorganisation Act of 2019 reorganized the erstwhile state into two distinct Union Territories, namely the Union Territory of Jammu and Kashmir with a Legislative Assembly and the Union Territory of Ladakh without a legislature. Comprising one hundred and three sections and five comprehensive schedules, the legislation outlines the allocation of parliamentary seats, delimitation of assembly constituencies, and the applicability of central laws. Under the fifth schedule, over one hundred andacentral enactments were extended to ensure administrative uniformity, social justice, and accelerated economic development for residents across both regions.`,
  },
  {
    id: 'pfms-treasury',
    title: 'Passage 3: Public Financial Management System (PFMS) & Audit',
    category: 'Finance & Accounts',
    difficulty: 'Official Exam',
    text: `The Public Financial Management System has transformed government accounting by establishing a real-time electronic fund tracking mechanism from the central treasury down to the last implementing agency. Before generating any payment advice, the dealing assistant must verify that the expenditure sanction is duly approved by the competent authority and that sufficient budget allocation exists under the relevant head of account. Bank reconciliation statements and internal audit inspections safeguard public revenue against irregular withdrawals, double payments, and clerical omissions in financial ledgers.`,
  },
  {
    id: 'jk-geography-hydro',
    title: 'Passage 4: Rivers, Passes & Hydropower Projects of J&K',
    category: 'J&K Geography',
    difficulty: 'Standard',
    text: `Jammu and Kashmir possesses immense hydroelectric potential primarily harnessed across the Chenab, Jhelum, and Indus river basins. Major run-of-the-river projects such as Baglihar, Dul Hasti, Salal, Ratle, Pakal Dul, and Kishanganga play a vital role in meeting regional energy demands. The Pir Panjal and Greater Himalayan mountain ranges feature strategic passes including Banihal, Zojila, Sinthan, and Razdan, which connect remote valleys during harsh winter months through modern all-weather tunnels and engineered national highways.`,
  },
  {
    id: 'panchayati-raj',
    title: 'Passage 5: Grassroots Democracy & Halqa Panchayats',
    category: 'Governance & RTI',
    difficulty: 'Standard',
    text: `Empowering local self-government institutions through the three-tier Panchayati Raj system has strengthened participatory planning across rural villages of Jammu and Kashmir. The Halqa Panchayat, Block Development Council, and District Development Council work in close coordination to implement flagship welfare schemes, rural employment guarantees, and sanitation drives. Regular social audits and proactive disclosure of development grants under the Right to Information framework ensure that public funds directly benefit grassroots citizens.`,
  },
  {
    id: 'digital-jk-it',
    title: 'Passage 6: Digital J&K & E-Governance Transformation',
    category: 'Computer & IT',
    difficulty: 'Standard',
    text: `Modern office automation requires every clerical and ministerial staff member to demonstrate high proficiency in word processing, spreadsheet management, and secure electronic mail correspondence. With the rapid adoption of online citizen portals, domicile certificates, revenue extracts, and scholarship disbursements are now processed digitally without requiring physical visits to government offices. Maintaining strong keyboard speed with at least ninety percent accuracy ensures zero backlog in high-volume public grievance cells.`,
  },
  {
    id: 'numeric-order-drill',
    title: 'Passage 7: Official Notification & Numeric Order Drill',
    category: 'High-Accuracy Drill',
    difficulty: 'Numeric & Orders',
    text: `Pursuant to Government Order No. 418-JK(GAD) of 2026 dated 14th November, the Services Selection Board has notified 1,240 vacancies for the post of Junior Assistant across 18 departments. Candidates must achieve a minimum net typing speed of 35 words per minute with 90% accuracy during the computer skill test. Out of 100 total marks, 80 marks are allocated to the written examination and 20 marks are proportionally awarded based on the candidate's qualified typing speed.`,
  },
];

const DURATION_OPTIONS = [
  { seconds: 60, label: '1 Min (Warmup)' },
  { seconds: 180, label: '3 Min (Sprint)' },
  { seconds: 300, label: '5 Min (Standard)' },
  { seconds: 600, label: '10 Min (Official JKSSB)' },
];

export const TypingSpeedTest: React.FC<TypingSpeedTestProps> = ({ isDarkMode = false }) => {
  const [selectedPassageId, setSelectedPassageId] = useState<string>(OFFICIAL_PASSAGES[0].id);
  const [durationSeconds, setDurationSeconds] = useState<number>(60);
  const [strictNoBackspace, setStrictNoBackspace] = useState<boolean>(false);

  const [typedText, setTypedText] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [backspaceCount, setBackspaceCount] = useState<number>(0);

  const [bestWpm, setBestWpm] = useState<number>(() => {
    if (typeof window === 'undefined') return 0;
    return Number(localStorage.getItem('flashmind_best_typing_wpm') || 0);
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const activePassage = useMemo(() => {
    return OFFICIAL_PASSAGES.find((p) => p.id === selectedPassageId) || OFFICIAL_PASSAGES[0];
  }, [selectedPassageId]);

  // Repeat passage text if user types fast during 5 or 10 min tests so they never run out of words
  const targetText = useMemo(() => {
    return `${activePassage.text} ${activePassage.text}`;
  }, [activePassage]);

  const handleReset = useCallback(
    (newDuration?: number, newPassageId?: string) => {
      const dur = newDuration ?? durationSeconds;
      if (newDuration !== undefined) setDurationSeconds(newDuration);
      if (newPassageId !== undefined) setSelectedPassageId(newPassageId);
      setTypedText('');
      setIsRunning(false);
      setIsFinished(false);
      setTimeLeft(dur);
      setBackspaceCount(0);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 30);
    },
    [durationSeconds]
  );

  // Timer effect
  useEffect(() => {
    if (!isRunning || isFinished) return;
    if (timeLeft <= 0) {
      setIsRunning(false);
      setIsFinished(true);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isFinished, timeLeft]);

  // Real-time WPM, Accuracy & JKSSB Marks calculation
  const metrics = useMemo(() => {
    const elapsedSeconds = Math.max(1, durationSeconds - timeLeft);
    const elapsedMinutes = elapsedSeconds / 60;

    const totalTypedChars = typedText.length;
    let correctChars = 0;
    let errorChars = 0;

    for (let i = 0; i < totalTypedChars; i++) {
      if (typedText[i] === targetText[i]) {
        correctChars++;
      } else {
        errorChars++;
      }
    }

    // Standard 5 characters = 1 word
    const grossWords = totalTypedChars / 5;
    const errorWords = errorChars / 5;
    const grossWpm = isRunning || isFinished ? Math.round(grossWords / elapsedMinutes) : 0;
    const netWpm =
      isRunning || isFinished ? Math.max(0, Math.round((grossWords - errorWords) / elapsedMinutes)) : 0;
    const accuracy =
      totalTypedChars > 0 ? Number(((correctChars / totalTypedChars) * 100).toFixed(1)) : 100;
    const cpm = isRunning || isFinished ? Math.round(totalTypedChars / elapsedMinutes) : 0;

    // JKSSB Junior Assistant Qualification Check: >= 35 Net WPM AND >= 90% Accuracy
    const isQualified = netWpm >= 35 && accuracy >= 90;

    // Estimated pro-rata marks out of 20 (35 WPM = ~10/20 qualifying baseline, 50+ WPM = 15-20/20)
    const estimatedSkillMarks = isQualified
      ? Math.min(20, Number(((netWpm / 60) * 20).toFixed(2)))
      : 0;

    return {
      totalTypedChars,
      correctChars,
      errorChars,
      grossWpm,
      netWpm,
      accuracy,
      cpm,
      isQualified,
      estimatedSkillMarks,
    };
  }, [durationSeconds, timeLeft, typedText, targetText, isRunning, isFinished]);

  // Update personal best WPM on completion
  useEffect(() => {
    if (isFinished && metrics.netWpm > bestWpm && metrics.accuracy >= 90) {
      setBestWpm(metrics.netWpm);
      try {
        localStorage.setItem('flashmind_best_typing_wpm', String(metrics.netWpm));
      } catch {
        // ignore
      }
    }
  }, [isFinished, metrics.netWpm, metrics.accuracy, bestWpm]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isFinished) return;
    if (e.key === 'Backspace') {
      setBackspaceCount((prev) => prev + 1);
      if (strictNoBackspace) {
        e.preventDefault();
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isFinished) return;
    const val = e.target.value;
    if (!isRunning && val.length > 0) {
      setIsRunning(true);
    }
    if (val.length <= targetText.length) {
      setTypedText(val);
    }
  };

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const handleShareScorecard = () => {
    const statusText = metrics.isQualified
      ? '✅ QUALIFIED (≥35 WPM & ≥90% Accuracy)'
      : '⚡ In Training (Target: 35 WPM)';
    const shareMsg = `⌨️ JKSSB Junior Assistant Typing Test Result (FlashMind):\n• Net Speed: ${metrics.netWpm} WPM (Gross: ${metrics.grossWpm} WPM)\n• Accuracy: ${metrics.accuracy}%\n• Keystrokes: ${metrics.totalTypedChars} chars (${metrics.cpm} CPM)\n• Status: ${statusText}\n\nPractice the 35 WPM JKSSB Typing Test free: https://jkssb-mcq-quiz.ai.studio/jkssb-typing-test`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      'https://jkssb-mcq-quiz.ai.studio/jkssb-typing-test'
    )}&text=${encodeURIComponent(shareMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border border-indigo-500/30 p-5 sm:p-6 text-white shadow-xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold">
              <Keyboard className="w-3.5 h-3.5 text-emerald-400" />
              <span>JKSSB Junior Assistant Stage-1 Skill Test Simulator</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              Official 35 WPM Typing Speed Test (90% Accuracy Standard)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Qualify the mandatory JKSSB Junior Assistant &amp; Computer Operator skill test. Practice on official Secretariat, Reorganisation Act, and PFMS passages with live <span className="text-emerald-400 font-semibold">35 WPM &amp; 90% accuracy</span> telemetry.
            </p>
          </div>

          {/* Personal Best & Reset */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <div className="px-3.5 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">
                  Personal Best (≥90% Acc)
                </span>
                <span className="font-mono font-black text-amber-300 text-sm">
                  {bestWpm > 0 ? `${bestWpm} WPM` : 'Not set yet'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleReset()}
              className="px-4 py-2.5 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-indigo-500/25 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restart Test</span>
            </button>
          </div>
        </div>

        {/* Passage Selector & Duration Controls */}
        <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Passage Dropdown */}
          <div className="flex items-center gap-2 w-full lg:w-auto lg:flex-1 min-w-0">
            <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
            <select
              value={selectedPassageId}
              onChange={(e) => handleReset(durationSeconds, e.target.value)}
              className="w-full min-w-0 truncate bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-indigo-400 cursor-pointer"
            >
              {OFFICIAL_PASSAGES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} ({p.category})
                </option>
              ))}
            </select>
          </div>

          {/* Duration & Strict Backspace Toggle */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {DURATION_OPTIONS.map((opt) => (
              <button
                key={opt.seconds}
                type="button"
                onClick={() => handleReset(opt.seconds, selectedPassageId)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  durationSeconds === opt.seconds
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-300 border border-slate-700 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setStrictNoBackspace((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border inline-flex items-center gap-1.5 whitespace-nowrap transition cursor-pointer ${
                strictNoBackspace
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title="Lock Backspace key for strict accuracy training"
            >
              {strictNoBackspace ? <Lock className="w-3.5 h-3.5 shrink-0" /> : <Unlock className="w-3.5 h-3.5 shrink-0" />}
              <span>Backspace: {strictNoBackspace ? 'Locked' : 'Allowed'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Live Telemetry Strip: Net WPM, Accuracy %, Timer, Errors & Qualification Status */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {/* Net WPM (Target: 35+) */}
        <div
          className={`p-3.5 rounded-2xl border text-center ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase block">
            Net Speed (Target ≥35)
          </span>
          <div
            className={`text-2xl sm:text-3xl font-black font-mono mt-0.5 ${
              metrics.netWpm >= 35
                ? 'text-emerald-500'
                : metrics.netWpm >= 28
                ? 'text-amber-500'
                : 'text-indigo-500'
            }`}
          >
            {metrics.netWpm} <span className="text-xs font-bold">WPM</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Gross: {metrics.grossWpm} WPM</span>
        </div>

        {/* Accuracy % (Target: 90%+) */}
        <div
          className={`p-3.5 rounded-2xl border text-center ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase block">
            Accuracy (Target ≥90%)
          </span>
          <div
            className={`text-2xl sm:text-3xl font-black font-mono mt-0.5 ${
              metrics.accuracy >= 90 ? 'text-emerald-500' : 'text-rose-500'
            }`}
          >
            {metrics.accuracy}%
          </div>
          <span className="text-[10px] text-slate-400 font-mono">
            {metrics.errorChars} Errors • {backspaceCount} Backspaces
          </span>
        </div>

        {/* Countdown Timer */}
        <div
          className={`p-3.5 rounded-2xl border text-center ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase block">Time Remaining</span>
          <div
            className={`text-2xl sm:text-3xl font-black font-mono mt-0.5 ${
              timeLeft <= 15 && isRunning ? 'text-rose-500 animate-pulse' : 'text-amber-500'
            }`}
          >
            {formatTime(timeLeft)}
          </div>
          <span className="text-[10px] text-slate-400">
            {isRunning ? 'Timer Running...' : isFinished ? 'Time Up!' : 'Starts on 1st keystroke'}
          </span>
        </div>

        {/* Keystrokes & CPM */}
        <div
          className={`p-3.5 rounded-2xl border text-center ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase block">Keystrokes</span>
          <div className="text-2xl sm:text-3xl font-black font-mono mt-0.5 text-sky-500">
            {metrics.totalTypedChars}
          </div>
          <span className="text-[10px] text-slate-400 font-mono">{metrics.cpm} Keystrokes/min</span>
        </div>

        {/* Live JKSSB Qualification Indicator */}
        <div
          className={`col-span-2 sm:col-span-1 p-3.5 rounded-2xl border text-center flex flex-col justify-center ${
            metrics.isQualified
              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-300'
              : isDarkMode
              ? 'bg-slate-900 border-slate-800 text-slate-400'
              : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}
        >
          <span className="text-[10px] font-extrabold uppercase tracking-wider block">
            JKSSB Standard
          </span>
          <span className="text-xs sm:text-sm font-black mt-0.5 block">
            {metrics.isQualified ? '✅ QUALIFYING PACE' : '🎯 Need 35 WPM / 90%'}
          </span>
          <span className="text-[10px] font-mono mt-0.5 block">
            Est. Skill Score: {metrics.estimatedSkillMarks} / 20
          </span>
        </div>
      </div>

      {/* Main Typing Arena */}
      <div
        className={`rounded-3xl border p-5 sm:p-6 space-y-4 shadow-sm ${
          isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Reference Passage Display with Character-by-Character Highlighting */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-bold">
              Official Passage: <strong className="text-indigo-500">{activePassage.title}</strong>
            </span>
            <span className="font-mono text-[11px]">
              绿色 = Correct • 红色 = Typo • Blue Cursor = Next Key
            </span>
          </div>

          <div
            onClick={() => textareaRef.current?.focus()}
            className={`p-4 sm:p-5 rounded-2xl border font-mono text-sm sm:text-base leading-relaxed max-h-[210px] overflow-y-auto select-none cursor-text ${
              isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {targetText.slice(0, Math.max(420, typedText.length + 220)).split('').map((char, idx) => {
              let charStyle = isDarkMode ? 'text-slate-400' : 'text-slate-600';

              if (idx < typedText.length) {
                if (typedText[idx] === char) {
                  charStyle = 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-bold';
                } else {
                  charStyle = 'text-white bg-rose-600 rounded px-0.5 font-bold';
                }
              } else if (idx === typedText.length) {
                charStyle =
                  'bg-indigo-600 text-white rounded px-0.5 font-bold underline decoration-2 animate-pulse';
              }

              return (
                <span key={idx} className={charStyle}>
                  {char}
                </span>
              );
            })}
          </div>
        </div>

        {/* Typing Input Box */}
        <div className="space-y-2">
          <textarea
            ref={textareaRef}
            rows={4}
            value={typedText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isFinished}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            placeholder="Click here and start typing the official passage above... (The timer starts automatically on your first keystroke)"
            className={`w-full rounded-2xl border p-4 font-mono text-sm sm:text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
              isDarkMode
                ? 'bg-slate-950 border-slate-700 text-white placeholder:text-slate-500'
                : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
            }`}
          />
        </div>

        {/* End-of-Test Official JKSSB Qualification Scorecard */}
        {isFinished && (
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/40 text-white space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    metrics.isQualified
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-amber-500 text-slate-950'
                  }`}
                >
                  {metrics.isQualified ? (
                    <CheckCircle2 className="w-7 h-7" />
                  ) : (
                    <AlertTriangle className="w-7 h-7" />
                  )}
                </div>
                <div>
                  <span
                    className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                      metrics.isQualified
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}
                  >
                    {metrics.isQualified
                      ? 'QUALIFIED — Meets JKSSB 35 WPM & 90% Accuracy Norms'
                      : 'NOT QUALIFIED YET — Target 35+ WPM & 90%+ Accuracy'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black mt-1">
                    Net Speed: {metrics.netWpm} WPM • Accuracy: {metrics.accuracy}%
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleReset()}
                  className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
                <button
                  type="button"
                  onClick={handleShareScorecard}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Result</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Gross Speed</span>
                <span className="text-base font-black font-mono text-white">{metrics.grossWpm} WPM</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Character Errors</span>
                <span className="text-base font-black font-mono text-rose-400">{metrics.errorChars}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Backspaces Used</span>
                <span className="text-base font-black font-mono text-amber-300">{backspaceCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Est. Skill Marks</span>
                <span className="text-base font-black font-mono text-emerald-400">
                  {metrics.estimatedSkillMarks} / 20
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* JKSSB Junior Assistant Typing Rules & Strategy Card */}
      <div
        className={`rounded-2xl border p-4 sm:p-5 text-xs space-y-2 ${
          isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100/90 border-slate-200 text-slate-700'
        }`}
      >
        <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span>Official JKSSB Junior Assistant Skill Test Evaluation Rules:</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
          <li>
            <strong>Minimum Qualifying Threshold:</strong> Candidates must achieve at least <strong>35 Words Per Minute (WPM)</strong> net speed with a minimum of <strong>90% accuracy</strong>; candidates falling below either threshold are declared disqualified.
          </li>
          <li>
            <strong>5-Keystroke Word Standard:</strong> Every 5 keystrokes (including spaces and punctuation) count as 1 standard word.
          </li>
          <li>
            <strong>20-Mark Weightage Formula:</strong> In the 100-mark Junior Assistant selection criteria (80 Marks Written CBT + 20 Marks Typing Test), marks out of 20 are awarded proportionally to your qualified net speed.
          </li>
        </ul>
      </div>
    </div>
  );
};
