import React, { useState, useEffect, useCallback } from 'react';
import { CategoryId, Flashcard, StudyMode, UserStats, CardProgress, ActiveMockConfig } from './types';
import { getAllCards, loadUserStats, loadCardProgress } from './utils/storage';
import { Header } from './components/Header';
import { StudyFlipMode } from './components/StudyFlipMode';
import { QuizMode } from './components/QuizMode';
import { MockTestMode } from './components/MockTestMode';
import { SpeedRushMode } from './components/SpeedRushMode';
import { StatsDashboard } from './components/StatsDashboard';
import { DeckManager } from './components/DeckManager';
import { GoogleDriveSync } from './components/GoogleDriveSync';
import { OfflineIndicator } from './components/OfflineIndicator';
import { GeminiChatbot } from './components/GeminiChatbot';
import { CATEGORIES } from './data/initialDecks';
import {
  Sparkles,
  ShieldCheck,
  Wifi,
  Layers,
  HelpCircle,
  ClipboardCheck,
  BookMarked,
  BarChart3,
  Timer,
  Cloud,
  MoreHorizontal,
  X,
} from 'lucide-react';

export default function App() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats());
  const [cardProgress, setCardProgress] = useState<Record<string, CardProgress>>({});
  const [currentMode, setCurrentMode] = useState<StudyMode>('flip');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [activeMockConfig, setActiveMockConfig] = useState<ActiveMockConfig | null>(null);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  const refreshAllData = useCallback(() => {
    setCards(getAllCards());
    setUserStats(loadUserStats());
    setCardProgress(loadCardProgress());
  }, []);

  useEffect(() => {
    refreshAllData();
  }, [refreshAllData]);

  const handleUpdateStats = (newStats: UserStats) => {
    setUserStats(newStats);
    setCardProgress(loadCardProgress());
  };

  const handleSelectMockTest = (config: ActiveMockConfig) => {
    setActiveMockConfig(config);
    setCurrentMode('mock');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky App Header */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          if (mode !== 'mock') {
            setActiveMockConfig(null);
          }
          setCurrentMode(mode);
        }}
        onSelectMockTest={handleSelectMockTest}
        streak={userStats.streak}
        xp={userStats.xp}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-24 sm:pb-16">
        {currentMode === 'flip' && (
          <StudyFlipMode
            cards={cards}
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {currentMode === 'quiz' && (
          <QuizMode
            cards={cards}
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onNavigateToMock={() => {
              setActiveMockConfig(null);
              setCurrentMode('mock');
            }}
          />
        )}

        {currentMode === 'mock' && (
          <MockTestMode
            cards={cards}
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            activeMockConfig={activeMockConfig}
            onClearActiveMockConfig={() => setActiveMockConfig(null)}
          />
        )}

        {currentMode === 'speed' && (
          <SpeedRushMode
            cards={cards}
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {currentMode === 'stats' && (
          <StatsDashboard
            userStats={userStats}
            cardProgress={cardProgress}
            totalCardsCount={cards.length}
            onRefreshData={refreshAllData}
            onNavigateToDrive={() => setCurrentMode('drive')}
          />
        )}

        {currentMode === 'decks' && (
          <DeckManager
            cards={cards}
            onRefreshCards={refreshAllData}
            onNavigateToDrive={() => setCurrentMode('drive')}
          />
        )}

        {currentMode === 'drive' && (
          <GoogleDriveSync
            cards={cards}
            onRefreshAllData={refreshAllData}
          />
        )}

        {currentMode === 'chat' && (
          <GeminiChatbot
            onNavigateToMode={(mode) => setCurrentMode(mode as StudyMode)}
          />
        )}
      </main>

      {/* Offline Status Float Indicator */}
      <OfflineIndicator />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">FlashMind Quiz &amp; Flashcards</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Offline PWA Enabled
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-center text-[11px] text-slate-400">
            {CATEGORIES.map((c, i) => (
              <span key={c.id} className="flex items-center">
                <button
                  onClick={() => {
                    setSelectedCategory(c.id);
                    setCurrentMode('flip');
                  }}
                  className="hover:text-indigo-400 transition cursor-pointer"
                >
                  {c.name}
                </button>
                {i < CATEGORIES.length - 1 && <span className="mx-1 text-slate-600">·</span>}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 pb-safe shadow-2xl">
        <div className="grid grid-cols-5 items-center h-14 px-1">
          {/* Flashcards */}
          <button
            onClick={() => {
              setActiveMockConfig(null);
              setCurrentMode('flip');
              setIsMobileMoreOpen(false);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 h-full rounded-xl transition cursor-pointer active:scale-95 ${
              currentMode === 'flip' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className={`w-4 h-4 ${currentMode === 'flip' ? 'text-indigo-400' : 'text-slate-400'}`} />
            <span className="text-[10px] leading-tight">Cards</span>
          </button>

          {/* Quiz */}
          <button
            onClick={() => {
              setActiveMockConfig(null);
              setCurrentMode('quiz');
              setIsMobileMoreOpen(false);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 h-full rounded-xl transition cursor-pointer active:scale-95 ${
              currentMode === 'quiz' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className={`w-4 h-4 ${currentMode === 'quiz' ? 'text-indigo-400' : 'text-slate-400'}`} />
            <span className="text-[10px] leading-tight">Quiz</span>
          </button>

          {/* Mock Test 120Q */}
          <button
            onClick={() => {
              setCurrentMode('mock');
              setIsMobileMoreOpen(false);
            }}
            className={`relative flex flex-col items-center justify-center gap-0.5 h-full rounded-xl transition cursor-pointer active:scale-95 ${
              currentMode === 'mock' ? 'text-emerald-300 font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <div className="relative">
              <ClipboardCheck className={`w-4 h-4 ${currentMode === 'mock' ? 'text-emerald-400' : 'text-emerald-400/80'}`} />
              <span className="absolute -top-1 -right-2 px-1 py-0.1 text-[8px] font-black rounded bg-emerald-500 text-slate-950 leading-none">
                120Q
              </span>
            </div>
            <span className="text-[10px] leading-tight">Mock Test</span>
          </button>

          {/* Decks */}
          <button
            onClick={() => {
              setActiveMockConfig(null);
              setCurrentMode('decks');
              setIsMobileMoreOpen(false);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 h-full rounded-xl transition cursor-pointer active:scale-95 ${
              currentMode === 'decks' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookMarked className={`w-4 h-4 ${currentMode === 'decks' ? 'text-indigo-400' : 'text-slate-400'}`} />
            <span className="text-[10px] leading-tight">Decks</span>
          </button>

          {/* More menu (Stats, Speed Rush, Drive) */}
          <button
            onClick={() => setIsMobileMoreOpen((prev) => !prev)}
            className={`flex flex-col items-center justify-center gap-0.5 h-full rounded-xl transition cursor-pointer active:scale-95 ${
              isMobileMoreOpen || currentMode === 'stats' || currentMode === 'speed' || currentMode === 'drive'
                ? 'text-indigo-400 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MoreHorizontal className="w-4 h-4" />
            <span className="text-[10px] leading-tight">More</span>
          </button>
        </div>
      </nav>

      {/* Mobile "More" Drawer */}
      {isMobileMoreOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 animate-in fade-in">
          <div className="w-full bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 shadow-2xl space-y-4 pb-safe animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-extrabold text-white">More Study Options</h3>
              </div>
              <button
                onClick={() => setIsMobileMoreOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Progress & Streaks */}
              <button
                onClick={() => {
                  setCurrentMode('stats');
                  setIsMobileMoreOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  currentMode === 'stats'
                    ? 'bg-indigo-600/20 border-indigo-500 text-white'
                    : 'bg-slate-800/80 border-slate-750 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Progress</div>
                  <div className="text-[10px] text-slate-400">Streaks &amp; Mastery</div>
                </div>
              </button>

              {/* Speed Rush */}
              <button
                onClick={() => {
                  setCurrentMode('speed');
                  setIsMobileMoreOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  currentMode === 'speed'
                    ? 'bg-indigo-600/20 border-indigo-500 text-white'
                    : 'bg-slate-800/80 border-slate-750 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <Timer className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Speed Rush</div>
                  <div className="text-[10px] text-slate-400">60s Rapid Recall</div>
                </div>
              </button>

              {/* Google Drive */}
              <button
                onClick={() => {
                  setCurrentMode('drive');
                  setIsMobileMoreOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  currentMode === 'drive'
                    ? 'bg-indigo-600/20 border-indigo-500 text-white'
                    : 'bg-slate-800/80 border-slate-750 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Cloud className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Google Drive</div>
                  <div className="text-[10px] text-slate-400">Backup &amp; Sync</div>
                </div>
              </button>

              {/* AI Doubt Solver / Mentor */}
              <button
                onClick={() => {
                  setCurrentMode('chat');
                  setIsMobileMoreOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer col-span-2 ${
                  currentMode === 'chat'
                    ? 'bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 border-purple-400 text-white shadow-lg'
                    : 'bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border-purple-500/30 text-purple-200 hover:bg-purple-900/40'
                }`}
              >
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">AI Doubt Solver &amp; Mentor</span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-200 border border-purple-400/40">
                      Gemini
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">
                    Step-by-step FAA numericals, accountancy concepts &amp; mnemonics
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
