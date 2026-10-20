import React, { useState, useRef, useEffect } from 'react';
import {
  Flame,
  Zap,
  Volume2,
  VolumeX,
  Layers,
  HelpCircle,
  Timer,
  BarChart3,
  BookMarked,
  Wifi,
  WifiOff,
  Cloud,
  ClipboardCheck,
  ChevronDown,
  BookOpen,
  ArrowRight,
  Clock,
  Award,
  Sparkles,
} from 'lucide-react';
import { StudyMode, ActiveMockConfig } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { getSoundEnabled, setSoundEnabled } from '../utils/audio';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { FULL_MOCKS_META } from '../data/mockTests';
import { CATEGORIES } from '../data/initialDecks';

interface HeaderProps {
  currentMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  onSelectMockTest?: (config: ActiveMockConfig) => void;
  streak: number;
  xp: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onSelectMockTest,
  streak,
  xp,
}) => {
  const [soundOn, setSoundOn] = useState(getSoundEnabled());
  const [isMockDropdownOpen, setIsMockDropdownOpen] = useState(false);
  const [dropdownTab, setDropdownTab] = useState<'full' | 'sections'>('full');
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
        setIsMockDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStartFullMock = (testNum: number) => {
    setIsMockDropdownOpen(false);
    setIsMobileMockOpen(false);
    if (onSelectMockTest) {
      onSelectMockTest({ type: 'full', testNumber: testNum, autoStart: true });
    } else {
      onSelectMode('mock');
    }
  };

  const handleStartSectionMock = (categoryId: string) => {
    setIsMockDropdownOpen(false);
    setIsMobileMockOpen(false);
    if (onSelectMockTest) {
      onSelectMockTest({ type: 'section', sectionId: categoryId as any, autoStart: true });
    } else {
      onSelectMode('mock');
    }
  };

  const handleGoToMockHub = () => {
    setIsMockDropdownOpen(false);
    setIsMobileMockOpen(false);
    if (onSelectMockTest) {
      onSelectMockTest({ type: 'full', testNumber: undefined, autoStart: false });
    }
    onSelectMode('mock');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Brand */}
          <div
            onClick={() => onSelectMode('flip')}
            className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-pink-500 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white fill-white" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-white tracking-tight">Flash<span className="text-indigo-400">Mind</span></span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">FAA 120M</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">Accounts Assistant (Finance) • 120 Marks Syllabus</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800/80">
            {/* Flashcards */}
            <button
              onClick={() => onSelectMode('flip')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                currentMode === 'flip'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flashcards</span>
            </button>

            {/* Quiz Game */}
            <button
              onClick={() => onSelectMode('quiz')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                currentMode === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Quiz Game</span>
            </button>

            {/* Mock Test (120 Qs) Dropdown Menu - NEXT TO QUIZ GAME */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMockDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                  currentMode === 'mock' || isMockDropdownOpen
                    ? 'bg-indigo-600 text-white border-indigo-400/50 shadow-sm shadow-indigo-600/40'
                    : 'text-slate-200 bg-slate-800/60 hover:text-white hover:bg-slate-800 border-slate-700/60'
                }`}
                title="JKSSB FAA 120 Questions / 120 Minutes Mock Test Series"
              >
                <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mock Test (120 Qs)</span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/25 text-emerald-300 border border-emerald-400/30">
                  5 Mocks
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMockDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu Panel */}
              {isMockDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[540px] rounded-2xl bg-slate-900/98 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
                  {/* Top Bar with Title and Tabs */}
                  <div className="px-4 py-3 bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
                          FAA 120-Q Mock Test Series
                        </h4>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          120 Mins · 120 Marks
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Authentic CBT format with negative marking (-0.25). 100% unique questions.
                      </p>
                    </div>
                  </div>

                  {/* Tabs: Full Syllabus vs Section-Wise */}
                  <div className="flex border-b border-slate-800 bg-slate-950/60 px-3 pt-2 gap-2">
                    <button
                      onClick={() => setDropdownTab('full')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-bold transition border-t border-x cursor-pointer ${
                        dropdownTab === 'full'
                          ? 'bg-slate-900 text-indigo-300 border-slate-700 -mb-px'
                          : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Full Syllabus Mocks (5 Tests)</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded font-mono">5</span>
                    </button>
                    <button
                      onClick={() => setDropdownTab('sections')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-bold transition border-t border-x cursor-pointer ${
                        dropdownTab === 'sections'
                          ? 'bg-slate-900 text-indigo-300 border-slate-700 -mb-px'
                          : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>Sectional 120-Q Mocks</span>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-1 rounded font-mono">10</span>
                    </button>
                  </div>

                  {/* Tab 1: 5 Full Syllabus Mocks */}
                  {dropdownTab === 'full' && (
                    <div className="p-3 max-h-[360px] overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700">
                      <div className="text-[11px] font-semibold text-slate-400 px-1 pb-1 flex items-center justify-between">
                        <span>Select a Mock Test (All 5 have 100% different questions):</span>
                        <span className="text-emerald-400 text-[10px]">Zero overlap</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {FULL_MOCKS_META.map((mock) => (
                          <div
                            key={mock.testNumber}
                            onClick={() => handleStartFullMock(mock.testNumber)}
                            className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-indigo-900/30 border border-slate-700/60 hover:border-indigo-500/50 transition cursor-pointer group flex flex-col justify-between"
                          >
                            <div className="flex items-start justify-between gap-1 mb-1">
                              <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition">
                                {mock.title}
                              </span>
                              <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded border ${mock.badgeColor}`}>
                                {mock.shortTitle}
                              </span>
                            </div>
                            <p className="text-[11px] font-medium text-slate-300 line-clamp-1">
                              {mock.subtitle}
                            </p>
                            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-700/50 text-[10px] text-slate-400">
                              <span className="flex items-center gap-1 font-mono">
                                <Clock className="w-3 h-3 text-amber-400" /> 120m · 120Q
                              </span>
                              <span className="text-indigo-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                                Start <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Sectional 120-Q Mocks */}
                  {dropdownTab === 'sections' && (
                    <div className="p-3 max-h-[360px] overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700">
                      <div className="text-[11px] font-semibold text-slate-400 px-1 pb-1">
                        Select a Subject for an Intensive 120-Question / 120-Minute Deep Drill:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {CATEGORIES.map((cat) => (
                          <div
                            key={cat.id}
                            onClick={() => handleStartSectionMock(cat.id)}
                            className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-indigo-900/30 border border-slate-700/60 hover:border-indigo-500/50 transition cursor-pointer group flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${cat.bgLight}`}>
                                {cat.badge}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">120 Qs</span>
                            </div>
                            <h5 className="text-xs font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                              {cat.name}
                            </h5>
                            <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-700/50 text-[10px]">
                              <span className="text-slate-400">120 Minutes</span>
                              <span className="text-indigo-400 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                                Drill <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dropdown Footer: Link to Full Mock Hub */}
                  <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">
                      Track your performance history & detailed scorecards
                    </span>
                    <button
                      onClick={handleGoToMockHub}
                      className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1"
                    >
                      <span>Open Mock Test Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Speed Rush */}
            <button
              onClick={() => onSelectMode('speed')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                currentMode === 'speed'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Timer className="w-3.5 h-3.5" />
              <span>Speed Rush</span>
            </button>

            {/* Progress & Streaks */}
            <button
              onClick={() => onSelectMode('stats')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                currentMode === 'stats'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Progress & Streaks</span>
            </button>

            {/* Deck Manager */}
            <button
              onClick={() => onSelectMode('decks')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                currentMode === 'decks'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>Deck Manager</span>
            </button>

            {/* Google Drive */}
            <button
              onClick={() => onSelectMode('drive')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                currentMode === 'drive'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Google Drive</span>
            </button>
          </nav>

          {/* Right Action Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Daily Streak Badge */}
            <div
              onClick={() => onSelectMode('stats')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold cursor-pointer hover:bg-amber-500/20 transition active:scale-95 shadow-sm"
              title={`${streak} day streak! Study daily to keep the flame alive.`}
            >
              <Flame className={`w-4 h-4 ${streak > 0 ? 'fill-amber-400 text-amber-500 animate-pulse' : 'text-slate-500'}`} />
              <span>{streak}d streak</span>
            </div>

            {/* Total XP Badge */}
            <div
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold shadow-sm"
              title="Experience points earned by testing yourself"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>{xp} XP</span>
            </div>

            {/* Online / Offline indicator */}
            <div
              className={`hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium border ${
                isOnline
                  ? 'bg-slate-900 text-emerald-400 border-slate-800'
                  : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              }`}
              title={isOnline ? 'Online (Ready to sync)' : 'Offline mode active'}
            >
              {isOnline ? <Wifi className="w-3 h-3 text-emerald-400" /> : <WifiOff className="w-3 h-3 text-amber-400" />}
              <span>{isOnline ? 'Ready' : 'Offline'}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition cursor-pointer"
              title={soundOn ? 'Sound FX On (click to mute)' : 'Sound FX Muted'}
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            {/* PWA Install Button */}
            <PWAInstallButton />
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1.5 scrollbar-none border-t border-slate-800/50">
          <button
            onClick={() => onSelectMode('flip')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
              currentMode === 'flip' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => onSelectMode('quiz')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
              currentMode === 'quiz' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Quiz Game</span>
          </button>

          {/* Mobile Mock Test Dropdown Trigger */}
          <button
            onClick={() => setIsMobileMockOpen((prev) => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer border ${
              currentMode === 'mock' || isMobileMockOpen
                ? 'bg-indigo-600 text-white border-indigo-400/50 shadow-sm'
                : 'text-emerald-300 bg-slate-900 border-emerald-500/30'
            }`}
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mock Test (120 Qs)</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isMobileMockOpen ? 'rotate-180' : ''}`} />
          </button>

          <button
            onClick={() => onSelectMode('speed')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
              currentMode === 'speed' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            <span>Speed Rush</span>
          </button>

          <button
            onClick={() => onSelectMode('stats')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
              currentMode === 'stats' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Progress</span>
          </button>

          <button
            onClick={() => onSelectMode('decks')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
              currentMode === 'decks' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Decks</span>
          </button>

          <button
            onClick={() => onSelectMode('drive')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
              currentMode === 'drive' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Drive</span>
          </button>
        </div>

        {/* Mobile Mock Test Selection Drawer/Accordion */}
        {isMobileMockOpen && (
          <div className="lg:hidden pb-3 pt-1 border-t border-slate-800 animate-in fade-in slide-in-from-top-1">
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" /> 10 Full Syllabus FAA Mock Tests
                </span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  120 Qs · 120m
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                10 Full Mock Tests with all different questions (1,200 unique questions total):
              </p>
              <div className="grid grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1">
                {FULL_MOCKS_META.map((mock) => (
                  <button
                    key={mock.testNumber}
                    onClick={() => handleStartFullMock(mock.testNumber)}
                    className="p-2 text-left rounded-xl bg-slate-800/80 hover:bg-indigo-900/40 border border-slate-700 hover:border-indigo-500 transition text-xs cursor-pointer"
                  >
                    <div className="font-bold text-white text-[11px]">{mock.title}</div>
                    <div className="text-[10px] text-slate-400 truncate">{mock.subtitle}</div>
                  </button>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={handleGoToMockHub}
                  className="w-full py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold text-center"
                >
                  View All Mocks & Sectional Drills
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
