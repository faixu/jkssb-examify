import React, { useState, useEffect, useCallback, useRef, Suspense, lazy } from 'react';
import { CategoryId, Flashcard, StudyMode, UserStats, CardProgress, ActiveMockConfig } from './types';
import { getAllCards, loadCardsForCategory, loadUserStats, loadCardProgress } from './utils/storage';
import {
  TOPIC_SEO_MAP,
  resolveRouteFromLocation,
  getCanonicalSEO,
} from './utils/seo';
import { Header } from './components/Header';
import { QuizMode } from './components/QuizMode';
import { OfflineIndicator } from './components/OfflineIndicator';
import { TelegramButton } from './components/TelegramButton';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import {
  Sparkles,
  ShieldCheck,
  Layers,
  HelpCircle,
  ClipboardCheck,
  BookMarked,
  BarChart3,
  Timer,
  Cloud,
  MoreHorizontal,
  X,
  Globe,
} from 'lucide-react';

// Code-split secondary mode views and below-the-fold study guide so initial index-*.js bundle stays ultra-compact
const StudyFlipMode = lazy(() =>
  import('./components/StudyFlipMode').then((m) => ({ default: m.StudyFlipMode }))
);
const MockTestMode = lazy(() =>
  import('./components/MockTestMode').then((m) => ({ default: m.MockTestMode }))
);
const SpeedRushMode = lazy(() =>
  import('./components/SpeedRushMode').then((m) => ({ default: m.SpeedRushMode }))
);
const StatsDashboard = lazy(() =>
  import('./components/StatsDashboard').then((m) => ({ default: m.StatsDashboard }))
);
const DeckManager = lazy(() =>
  import('./components/DeckManager').then((m) => ({ default: m.DeckManager }))
);
const GoogleDriveSync = lazy(() =>
  import('./components/GoogleDriveSync').then((m) => ({ default: m.GoogleDriveSync }))
);
const GeminiChatbot = lazy(() =>
  import('./components/GeminiChatbot').then((m) => ({ default: m.GeminiChatbot }))
);
const CurrentAffairsSection = lazy(() =>
  import('./components/CurrentAffairsSection').then((m) => ({ default: m.CurrentAffairsSection }))
);
const SEOStudyGuide = lazy(() =>
  import('./components/SEOStudyGuide').then((m) => ({ default: m.SEOStudyGuide }))
);

function ModeSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 min-h-[720px]">
      <div className="mb-6 space-y-3 min-h-[104px]">
        <div className="h-14 w-full sm:w-[340px] rounded-2xl bg-slate-900/90 border border-slate-800 animate-pulse" />
        <div className="h-10 w-full rounded-2xl bg-slate-900/60 border border-slate-800/80 animate-pulse" />
      </div>
      <div className="w-full min-h-[480px] rounded-3xl bg-slate-900/80 border border-slate-800 p-6 animate-pulse" />
    </div>
  );
}

export default function App() {
  const initialRoute =
    typeof window !== 'undefined'
      ? resolveRouteFromLocation(window.location.pathname, window.location.search)
      : { mode: 'quiz' as StudyMode, category: 'all' as CategoryId | 'all' };

  // Initialize synchronously with starter flashcards so frame 0 renders with 0 CLS
  const [cards, setCards] = useState<Flashcard[]>(() => getAllCards());
  const [userStats, setUserStats] = useState<UserStats>(() => loadUserStats());
  const [cardProgress, setCardProgress] = useState<Record<string, CardProgress>>(() => loadCardProgress());
  const [currentMode, setCurrentMode] = useState<StudyMode>(initialRoute.mode);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialRoute.category);
  const [activeMockConfig, setActiveMockConfig] = useState<ActiveMockConfig | null>(null);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [shouldRenderStudyGuide, setShouldRenderStudyGuide] = useState(false);
  const studyGuideSentinelRef = useRef<HTMLDivElement>(null);

  const refreshAllData = useCallback(() => {
    setCards(getAllCards());
    setUserStats(loadUserStats());
    setCardProgress(loadCardProgress());
  }, []);

  // Track first user interaction so passive mobile loads use STARTER_FLASHCARDS with zero heavy chunk downloads
  useEffect(() => {
    if (hasUserInteracted) return;
    const markInteracted = () => {
      setHasUserInteracted(true);
    };
    window.addEventListener('pointerdown', markInteracted, { passive: true, once: true });
    window.addEventListener('keydown', markInteracted, { passive: true, once: true });
    window.addEventListener('touchstart', markInteracted, { passive: true, once: true });
    return () => {
      window.removeEventListener('pointerdown', markInteracted);
      window.removeEventListener('keydown', markInteracted);
      window.removeEventListener('touchstart', markInteracted);
    };
  }, [hasUserInteracted]);

  // Mount below-the-fold SEOStudyGuide chunk only when scrolled near viewport or on user interaction
  useEffect(() => {
    if (shouldRenderStudyGuide) return;
    const onScrollOrInteract = () => setShouldRenderStudyGuide(true);
    window.addEventListener('scroll', onScrollOrInteract, { passive: true, once: true });

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined' && studyGuideSentinelRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setShouldRenderStudyGuide(true);
            observer?.disconnect();
          }
        },
        { rootMargin: '250px' }
      );
      observer.observe(studyGuideSentinelRef.current);
    }

    return () => {
      window.removeEventListener('scroll', onScrollOrInteract);
      observer?.disconnect();
    };
  }, [shouldRenderStudyGuide]);

  // Dynamically load only the active category's question chunk after user interaction or explicit category change
  useEffect(() => {
    let cancelled = false;

    async function loadActiveQuestions() {
      if (currentMode === 'decks') {
        const updated = await loadCardsForCategory('all');
        if (!cancelled) setCards(updated);
        return;
      }
      if (!hasUserInteracted) {
        return;
      }
      const targetCat: CategoryId = selectedCategory === 'all' ? 'general' : selectedCategory;
      const updated = await loadCardsForCategory(targetCat);
      if (!cancelled) setCards(updated);
    }

    loadActiveQuestions().catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [selectedCategory, currentMode, hasUserInteracted]);

  // Listen for browser back/forward navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = resolveRouteFromLocation(window.location.pathname, window.location.search);
      setCurrentMode(nextRoute.mode);
      setSelectedCategory(nextRoute.category);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize clean URL, <title>, <meta name="description">, and <link rel="canonical">
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seo = getCanonicalSEO(currentMode, selectedCategory);

    document.title = seo.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', seo.description);
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', seo.canonicalUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seo.canonicalUrl);

    if (window.location.pathname !== seo.path) {
      window.history.pushState({ mode: currentMode, category: selectedCategory }, '', seo.path);
    }
  }, [currentMode, selectedCategory]);

  const handleUpdateStats = (newStats: UserStats) => {
    setUserStats(newStats);
    setCardProgress(loadCardProgress());
  };

  const handleSelectMockTest = (config: ActiveMockConfig) => {
    setActiveMockConfig(config);
    setCurrentMode('mock');
  };

  const handleTopicLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, catId: CategoryId | 'all') => {
    e.preventDefault();
    setSelectedCategory(catId);
    setCurrentMode('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMockLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveMockConfig(null);
    setCurrentMode('mock');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentSEO = getCanonicalSEO(currentMode, selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white">
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
      <main className="flex-1 w-full pb-12">
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

        {currentMode !== 'quiz' && (
          <Suspense fallback={<ModeSkeleton />}>
            {currentMode === 'flip' && (
              <StudyFlipMode
                cards={cards}
                userStats={userStats}
                onUpdateStats={handleUpdateStats}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
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

            {currentMode === 'current_affairs' && (
              <CurrentAffairsSection />
            )}
          </Suspense>
        )}

        {/* Lazy-loaded On-Page Structured Study Guide, Syllabus, Sample Answer Key & Share/Embed Widget */}
        <div ref={studyGuideSentinelRef} className="w-full">
          {shouldRenderStudyGuide ? (
            <Suspense fallback={<div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 min-h-[420px]" />}>
              <SEOStudyGuide
                currentMode={currentMode}
                selectedCategory={selectedCategory}
                currentSEO={currentSEO}
                onTopicLinkClick={handleTopicLinkClick}
                onMockLinkClick={handleMockLinkClick}
              />
            </Suspense>
          ) : (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 min-h-[420px]" />
          )}
        </div>
      </main>

      {/* Offline Status Float Indicator */}
      <OfflineIndicator />

      {/* Join Telegram Channel Floating Button on Below Right Corner */}
      <TelegramButton />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 pb-20 md:pb-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <img
              src="/assets/aistudio/logo_flashmind_77da4392.png"
              alt="FlashMind Exam-Prep Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-md object-contain ring-1 ring-slate-800 shrink-0"
            />
            <span className="font-bold text-slate-400">FlashMind JKSSB Quiz &amp; Mock Test Portal</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Offline PWA Enabled
            </span>
            <span className="text-slate-600">•</span>
            <a
              href="https://t.me/flshmnd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold transition"
              title="Join our official Telegram Channel @flshmnd"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>Telegram @flshmnd</span>
            </a>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center text-[11px] text-slate-400">
            <span className="flex items-center">
              <a
                href="/jkssb-faa-mock-test"
                onClick={handleMockLinkClick}
                className="hover:text-emerald-400 text-emerald-300/90 font-semibold transition cursor-pointer"
              >
                JKSSB FAA Mock Test
              </a>
              <span className="mx-1.5 text-slate-700">·</span>
            </span>
            {Object.values(TOPIC_SEO_MAP)
              .filter((t) => t.categoryId !== 'all')
              .map((t) => (
                <span key={t.slug} className="flex items-center">
                  <a
                    href={t.path}
                    onClick={(e) => handleTopicLinkClick(e, t.categoryId)}
                    className="hover:text-indigo-400 transition cursor-pointer"
                  >
                    {t.shortName} Quiz
                  </a>
                  <span className="mx-1.5 text-slate-700">·</span>
                </span>
              ))}
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition cursor-pointer underline underline-offset-2"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 pb-safe shadow-2xl">
        <div className="grid grid-cols-5 items-center h-14 px-1">
          {/* Quiz - 1st */}
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

          {/* Mock Test 120Q - 2nd */}
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

          {/* Flashcards - 3rd */}
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
                    Step-by-step JKSSB numericals, concepts &amp; mnemonics
                  </div>
                </div>
              </button>

              {/* Chinar Current Affairs (2-Tier Dynamic MCQ Bank) */}
              <button
                onClick={() => {
                  setCurrentMode('current_affairs');
                  setIsMobileMoreOpen(false);
                }}
                className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer col-span-2 ${
                  currentMode === 'current_affairs'
                    ? 'bg-gradient-to-r from-amber-600/30 via-orange-600/30 to-indigo-600/30 border-amber-400 text-white shadow-lg'
                    : 'bg-gradient-to-r from-amber-950/40 to-slate-900 border-amber-500/30 text-amber-200 hover:bg-amber-900/40'
                }`}
              >
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
                  <Globe className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">Chinar Current Affairs</span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-200 border border-amber-400/40">
                      2-Tier MCQs
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">
                    J&amp;K UT, National &amp; International multi-tier dropdown question bank
                  </div>
                </div>
              </button>

              {/* Official Telegram Channel */}
              <a
                href="https://t.me/flshmnd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMoreOpen(false)}
                className="p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer col-span-2 bg-gradient-to-r from-sky-950/40 to-blue-950/40 border-sky-500/30 text-sky-200 hover:bg-sky-900/40 active:scale-[0.99]"
              >
                <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">Join Telegram Channel</span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-sky-500/30 text-sky-200 border border-sky-400/40">
                      @flshmnd
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">
                    Daily JKSSB study updates, MCQs &amp; PDF notes
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </div>
  );
}
