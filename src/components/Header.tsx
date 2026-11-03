import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import {
  Zap,
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
} from 'lucide-react';
import { StudyMode, ActiveMockConfig } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { getSoundEnabled, setSoundEnabled } from '../utils/audio';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

const MockDropdownPanel = lazy(() =>
  import('./MockDropdownPanel').then((m) => ({ default: m.MockDropdownPanel }))
);

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
  streak: _streak,
  xp: _xp,
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
    <header className="sticky top-0 z-40 w-full max-w-full overflow-x-clip border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between min-h-14 sm:h-16 gap-2 min-w-0 w-full">
          {/* Logo & Brand */}
          <div
            onClick={() => onSelectMode('quiz')}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group min-w-0 shrink-0"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-pink-500 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-pink-500"></span>
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight leading-none">
                  Flash<span className="text-indigo-400">Mind</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                  JKSSB PREP
                </span>
              </div>
              <p className="hidden sm:block text-[10px] text-slate-400 font-medium truncate">
                Revise Smarter. Retain Longer. Score Higher.
              </p>
            </div>
          </div>

          {/* Right Action Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

            {/* Online / Offline indicator */}
            <div
              className={`hidden xl:flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap border ${
                isOnline
                  ? 'bg-slate-900 text-emerald-400 border-slate-800'
                  : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              }`}
              title={isOnline ? 'Online (Ready to sync)' : 'Offline mode active'}
            >
              {isOnline ? (
                <Wifi className="w-3 h-3 text-emerald-400 shrink-0" />
              ) : (
                <WifiOff className="w-3 h-3 text-amber-400 shrink-0" />
              )}
              <span>{isOnline ? 'Ready' : 'Offline'}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition cursor-pointer shrink-0"
              title={soundOn ? 'Sound FX On (click to mute)' : 'Sound FX Muted'}
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4 text-indigo-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* PWA Install Button */}
            <PWAInstallButton />
          </div>
        </div>

        {/* Navigation bar - stays in its dedicated row on all screen sizes */}
        <div className="flex flex-wrap items-center py-1.5 gap-1 sm:gap-1.5 border-t border-slate-800/50 w-full">
          {/* Quiz Game - 1st */}
          <button
            onClick={() => onSelectMode('quiz')}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              currentMode === 'quiz'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Quiz Game</span>
          </button>

          {/* Mock Test Dropdown Trigger - 2nd */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMobileMockOpen((prev) => !prev)}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                currentMode === 'mock' || isMobileMockOpen
                  ? 'bg-indigo-600 text-white border-indigo-400/50 shadow-sm'
                  : 'text-emerald-300 bg-slate-900 border-emerald-500/30 hover:text-white'
              }`}
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mock Test</span>
              <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${isMobileMockOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Flashcards - 3rd */}
          <button
            onClick={() => onSelectMode('flip')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              currentMode === 'flip'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
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
                : 'text-amber-300 bg-amber-500/10 border-amber-500/30 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Current Affairs</span>
          </button>

          <button
            onClick={() => onSelectMode('chat')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              currentMode === 'chat'
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-sm'
                : 'text-purple-300 hover:text-white bg-purple-950/40 border border-purple-500/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
            <span>AI Mentor</span>
          </button>
        </div>

        {/* Mobile Mock Test Selection Drawer/Accordion */}
        {isMobileMockOpen && (
          <Suspense fallback={null}>
            <MockDropdownPanel
              variant="mobile"
              onStartFullMock={handleStartFullMock}
              onStartSectionMock={handleStartSectionMock}
              onGoToMockHub={handleGoToMockHub}
            />
          </Suspense>
        )}
      </div>
    </header>
  );
};
