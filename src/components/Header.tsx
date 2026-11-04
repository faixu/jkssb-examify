import React, { useState, useRef, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Layers,
  HelpCircle,
  Wifi,
  WifiOff,
  ClipboardCheck,
  ChevronDown,
  Sparkles,
  Globe,
  Flame,
  Target,
  Zap,
  Sun,
  Moon,
  Calculator,
  Keyboard,
} from 'lucide-react';
import { StudyMode, ActiveMockConfig } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { getSoundEnabled, setSoundEnabled } from '../utils/audio';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { MockDropdownPanel } from './MockDropdownPanel';

interface HeaderProps {
  currentMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  onSelectMockTest?: (config: ActiveMockConfig) => void;
  streak: number;
  xp: number;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onSelectMockTest,
  streak,
  xp,
  isDarkMode = false,
  onToggleDarkMode,
}) => {
  const [soundOn, setSoundOn] = useState(getSoundEnabled());
  const [isMobileMockOpen, setIsMobileMockOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isOnline = useOnlineStatus();

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMockOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStartFullMock = (testNum: number) => {
    setIsMobileMockOpen(false);
    if (onSelectMockTest) {
      onSelectMockTest({ type: 'full', testNumber: testNum, autoStart: true });
    } else {
      onSelectMode('mock');
    }
  };

  const handleStartSectionMock = (categoryId: string) => {
    setIsMobileMockOpen(false);
    if (onSelectMockTest) {
      onSelectMockTest({ type: 'section', sectionId: categoryId as any, autoStart: true });
    } else {
      onSelectMode('mock');
    }
  };

  const handleGoToMockHub = () => {
    setIsMobileMockOpen(false);
    if (onSelectMockTest) {
      onSelectMockTest({ type: 'full', testNumber: undefined, autoStart: false });
    }
    onSelectMode('mock');
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full max-w-full overflow-x-clip border-b backdrop-blur-md transition-colors ${
        isDarkMode
          ? 'border-slate-800 bg-slate-950/95 text-slate-100'
          : 'border-slate-200 bg-white/95 text-slate-900'
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between min-h-14 sm:h-16 gap-2 min-w-0 w-full">
          {/* Logo & Brand */}
          <div
            onClick={() => onSelectMode('quiz')}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group min-w-0 shrink-0"
          >
            <div className="relative flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/assets/aistudio/logo_flashmind_77da4392.png"
                alt="FlashMind Exam-Prep Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-contain shadow-md shadow-indigo-500/20 ring-1 ring-slate-200"
              />
              <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-extrabold text-base sm:text-lg tracking-tight leading-none ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Flash<span className="text-indigo-500">Mind</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                  J&amp;K EXAMIFY
                </span>
              </div>
              <p
                className={`hidden sm:block text-[10px] font-medium truncate ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                100% Curated for J&amp;K Aspirants • Zero Login Practice
              </p>
            </div>
          </div>

          {/* Right Action Badges & Gamified Retention Strip */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Daily Study Streak Badge */}
            <button
              onClick={() => onSelectMode('stats')}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-xl text-[11px] font-extrabold border transition cursor-pointer ${
                isDarkMode
                  ? 'bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500/25'
                  : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
              }`}
              title="Daily Active Study Streak"
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
              <span>{streak}d</span>
              <span className="hidden md:inline">Streak</span>
            </button>

            {/* XP / Accuracy Progress Badge */}
            <button
              onClick={() => onSelectMode('stats')}
              className={`hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-xl text-[11px] font-extrabold border transition cursor-pointer ${
                isDarkMode
                  ? 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/25'
                  : 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100'
              }`}
              title="Total Mastery Points & Accuracy Analytics"
            >
              <Target className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span>{xp} XP</span>
            </button>

            {/* Online / Offline indicator */}
            <div
              className={`hidden xl:flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap border ${
                isOnline
                  ? isDarkMode
                    ? 'bg-slate-900 text-emerald-400 border-slate-800'
                    : 'bg-slate-100 text-emerald-700 border-slate-200'
                  : 'bg-amber-500/10 text-amber-800 border-amber-500/30'
              }`}
              title={isOnline ? 'Online (Ready to sync)' : 'Offline mode active'}
            >
              {isOnline ? (
                <Wifi className="w-3 h-3 text-emerald-500 shrink-0" />
              ) : (
                <WifiOff className="w-3 h-3 text-amber-500 shrink-0" />
              )}
              <span>{isOnline ? 'Ready' : 'Offline'}</span>
            </div>

            {/* Instant Theme Toggle (Clean Light Mode / Athletic Dark Mode) */}
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className={`p-1.5 sm:p-2 rounded-xl border transition cursor-pointer shrink-0 flex items-center gap-1 ${
                  isDarkMode
                    ? 'bg-slate-900 text-amber-400 border-slate-800 hover:bg-slate-800'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
                title={isDarkMode ? 'Switch to Clean Light Mode' : 'Switch to Athletic Dark Mode'}
                aria-label="Toggle color theme"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            )}

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`p-1.5 sm:p-2 rounded-xl border transition cursor-pointer shrink-0 ${
                isDarkMode
                  ? 'text-slate-200 bg-slate-900 border-slate-800 hover:bg-slate-800'
                  : 'text-slate-700 bg-slate-100 border-slate-200 hover:bg-slate-200'
              }`}
              title={soundOn ? 'Sound FX On (click to mute)' : 'Sound FX Muted'}
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4 text-indigo-500" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* PWA Install Button */}
            <PWAInstallButton />
          </div>
        </div>

        {/* Navigation bar - stays in its dedicated row on all screen sizes */}
        <div
          className={`flex flex-wrap items-center py-1.5 gap-1 sm:gap-1.5 border-t w-full ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          {/* Quiz Game - 1st */}
          <button
            onClick={() => onSelectMode('quiz')}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              currentMode === 'quiz'
                ? 'bg-indigo-600 text-white shadow-sm'
                : isDarkMode
                ? 'text-slate-300 hover:text-white bg-slate-900 border border-slate-800'
                : 'text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Rapid Drills</span>
          </button>

          {/* Mock Test Dropdown Trigger - 2nd */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMobileMockOpen((prev) => !prev)}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                currentMode === 'mock' || isMobileMockOpen
                  ? 'bg-indigo-600 text-white border-indigo-500/50 shadow-sm'
                  : isDarkMode
                  ? 'text-emerald-300 bg-slate-900 border-emerald-500/40 hover:text-emerald-200'
                  : 'text-emerald-800 bg-slate-100 border-emerald-500/40 hover:text-emerald-950'
              }`}
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>120Q CBT Mock</span>
              <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${isMobileMockOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* 60s Beat the Clock / Rapid Fire - 3rd */}
          <button
            onClick={() => onSelectMode('speed')}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
              currentMode === 'speed'
                ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                : isDarkMode
                ? 'text-rose-300 bg-rose-500/10 border-rose-500/30 hover:text-rose-200'
                : 'text-rose-800 bg-rose-50 border-rose-200 hover:text-rose-950'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>60s Rapid Fire</span>
          </button>

          {/* Flashcards - 4th */}
          <button
            onClick={() => onSelectMode('flip')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              currentMode === 'flip'
                ? 'bg-indigo-600 text-white shadow-sm'
                : isDarkMode
                ? 'text-slate-300 hover:text-white bg-slate-900 border border-slate-800'
                : 'text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => onSelectMode('current_affairs')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
              currentMode === 'current_affairs'
                ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-white border-amber-400 shadow-sm'
                : isDarkMode
                ? 'text-amber-300 bg-amber-500/10 border-amber-500/30 hover:text-amber-200'
                : 'text-amber-800 bg-amber-500/10 border-amber-500/30 hover:text-amber-950'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Current Affairs</span>
          </button>

          <button
            onClick={() => onSelectMode('chat')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              currentMode === 'chat'
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-sm'
                : isDarkMode
                ? 'text-purple-300 hover:text-purple-200 bg-purple-500/10 border border-purple-500/30'
                : 'text-purple-800 hover:text-purple-950 bg-purple-50 border border-purple-500/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse shrink-0" />
            <span>AI Mentor</span>
          </button>

          {/* JKSSB Negative Marking & Cutoff Calculator */}
          <button
            onClick={() => onSelectMode('calculator')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
              currentMode === 'calculator'
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : isDarkMode
                ? 'text-sky-300 bg-sky-500/10 border-sky-500/30 hover:text-sky-200'
                : 'text-sky-800 bg-sky-50 border-sky-200 hover:text-sky-950'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-sky-500 shrink-0" />
            <span>-0.25 Calculator</span>
          </button>

          {/* JKSSB Junior Assistant 35 WPM Typing Speed Test */}
          <button
            onClick={() => onSelectMode('typing')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
              currentMode === 'typing'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : isDarkMode
                ? 'text-teal-300 bg-teal-500/10 border-teal-500/30 hover:text-teal-200'
                : 'text-teal-800 bg-teal-50 border-teal-200 hover:text-teal-950'
            }`}
          >
            <Keyboard className="w-3.5 h-3.5 text-teal-500 shrink-0" />
            <span>35 WPM Typing Test</span>
          </button>
        </div>

        {/* Mobile Mock Test Selection Drawer/Accordion */}
        {isMobileMockOpen && (
          <MockDropdownPanel
            variant="mobile"
            onStartFullMock={handleStartFullMock}
            onStartSectionMock={handleStartSectionMock}
            onGoToMockHub={handleGoToMockHub}
          />
        )}
      </div>
    </header>
  );
};

