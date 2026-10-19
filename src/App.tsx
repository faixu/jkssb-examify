import React, { useState, useEffect, useCallback } from 'react';
import { CategoryId, Flashcard, StudyMode, UserStats, CardProgress } from './types';
import { getAllCards, loadUserStats, loadCardProgress } from './utils/storage';
import { Header } from './components/Header';
import { StudyFlipMode } from './components/StudyFlipMode';
import { QuizMode } from './components/QuizMode';
import { SpeedRushMode } from './components/SpeedRushMode';
import { StatsDashboard } from './components/StatsDashboard';
import { DeckManager } from './components/DeckManager';
import { OfflineIndicator } from './components/OfflineIndicator';
import { CATEGORIES } from './data/initialDecks';
import { Sparkles, ShieldCheck, Wifi } from 'lucide-react';

export default function App() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats());
  const [cardProgress, setCardProgress] = useState<Record<string, CardProgress>>({});
  const [currentMode, setCurrentMode] = useState<StudyMode>('flip');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky App Header */}
      <Header
        currentMode={currentMode}
        onSelectMode={setCurrentMode}
        streak={userStats.streak}
        xp={userStats.xp}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16">
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
          />
        )}

        {currentMode === 'decks' && (
          <DeckManager
            cards={cards}
            onRefreshCards={refreshAllData}
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
    </div>
  );
}
