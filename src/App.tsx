import React, { useState, useEffect, useCallback } from 'react';
import { CategoryId, Flashcard, StudyMode, UserStats, CardProgress, ActiveMockConfig } from './types';
import { getAllCards, loadCardsForCategory, loadUserStats, loadCardProgress } from './utils/storage';
import {
  TOPIC_SEO_MAP,
  resolveRouteFromLocation,
  getCanonicalSEO,
} from './utils/seo';
import { Header } from './components/Header';
import { QuizMode } from './components/QuizMode';
import { StudyFlipMode } from './components/StudyFlipMode';
import { MockTestMode } from './components/MockTestMode';
import { SpeedRushMode } from './components/SpeedRushMode';
import { StatsDashboard } from './components/StatsDashboard';
import { DeckManager } from './components/DeckManager';
import { GoogleDriveSync } from './components/GoogleDriveSync';
import { GeminiChatbot } from './components/GeminiChatbot';
import { CurrentAffairsSection } from './components/CurrentAffairsSection';
import { SEOStudyGuide } from './components/SEOStudyGuide';
import { OfflineIndicator } from './components/OfflineIndicator';
import { TelegramButton } from './components/TelegramButton';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsAndConditionsModal } from './components/TermsAndConditionsModal';
import { ContactUsModal } from './components/ContactUsModal';
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
  Mail,
  Phone,
  ChevronRight,
  Home,
} from 'lucide-react';

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
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

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

      {/* Semantic Breadcrumb Navigation Bar with Schema.org Microdata */}
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-slate-100/90 border-b border-slate-200/80 text-xs text-slate-600"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 py-2 flex items-center justify-between gap-2 overflow-x-auto whitespace-nowrap">
          <ol
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1"
            >
              <a
                itemProp="item"
                href="/"
                onClick={(e) => handleTopicLinkClick(e, 'all')}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-indigo-600 font-medium transition"
              >
                <Home className="w-3.5 h-3.5 text-slate-500" />
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>

            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />

            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1"
            >
              <a
                itemProp="item"
                href={currentMode === 'mock' ? '/jkssb-faa-mock-test' : '/'}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentMode(currentMode);
                }}
                className="text-slate-700 hover:text-indigo-600 font-medium transition"
              >
                <span itemProp="name">
                  {currentMode === 'quiz'
                    ? 'Interactive MCQ Quiz'
                    : currentMode === 'mock'
                    ? '120Q Full-Length Mock Tests'
                    : currentMode === 'flip'
                    ? 'Active Recall Flashcards'
                    : currentMode === 'speed'
                    ? '60s Speed Rush'
                    : currentMode === 'current_affairs'
                    ? 'Chinar Current Affairs'
                    : currentMode === 'stats'
                    ? 'Progress & Analytics'
                    : currentMode === 'decks'
                    ? 'Question Bank Decks'
                    : currentMode === 'drive'
                    ? 'Cloud Backup & Sync'
                    : 'AI Doubt Solver'}
                </span>
              </a>
              <meta itemProp="position" content="2" />
            </li>

            {(currentMode === 'quiz' || currentMode === 'flip') && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  aria-current="page"
                  className="font-semibold text-indigo-700"
                >
                  <span itemProp="name">
                    {TOPIC_SEO_MAP[selectedCategory]?.shortName || 'All Subjects'}
                  </span>
                  <meta itemProp="position" content="3" />
                </li>
              </>
            )}
          </ol>

          <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-500">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hover:text-slate-900 transition cursor-pointer"
            >
              Help &amp; Support
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="mailto:flust786@gmail.com"
              className="hover:text-indigo-600 transition font-medium"
            >
              flust786@gmail.com
            </a>
          </div>
        </div>
      </nav>

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

        {/* On-Page Structured Study Guide, Syllabus, Sample Answer Key & Share/Embed Widget */}
        <div className="w-full">
          <SEOStudyGuide
            currentMode={currentMode}
            selectedCategory={selectedCategory}
            currentSEO={currentSEO}
            onTopicLinkClick={handleTopicLinkClick}
            onMockLinkClick={handleMockLinkClick}
          />
        </div>
      </main>

      {/* Offline Status Float Indicator */}
      <OfflineIndicator />

      {/* Join Telegram Channel Floating Button on Below Right Corner */}
      <TelegramButton />

      {/* 4-Column Semantic Footer Blueprint */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 pt-12 pb-24 md:pb-10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
            {/* Column 1: About & Direct Contact */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/aistudio/logo_flashmind_77da4392.png"
                  alt="FlashMind Exam-Prep Logo"
                  className="w-7 h-7 rounded-lg object-contain ring-1 ring-slate-800 shrink-0"
                />
                <span className="font-bold text-sm text-white tracking-tight">
                  FlashMind JKSSB Portal
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                Comprehensive exam-preparation platform featuring 7,750+ syllabus-aligned MCQs, full-length 120Q OMR mock tests, active recall flashcards, and detailed explanations for JKSSB, JKPSC, and competitive aspirants.
              </p>
              <div className="space-y-1.5 pt-1 text-slate-300">
                <a
                  href="mailto:flust786@gmail.com"
                  className="flex items-center gap-2 hover:text-indigo-400 transition"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>flust786@gmail.com</span>
                </a>
                <a
                  href="tel:+916006580370"
                  className="flex items-center gap-2 hover:text-emerald-400 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91 6006580370</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links & Study Modes */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Quick Links &amp; Study Modes
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    onClick={(e) => handleTopicLinkClick(e, 'all')}
                    className="hover:text-white transition cursor-pointer"
                  >
                    Interactive MCQ Practice Quiz
                  </a>
                </li>
                <li>
                  <a
                    href="/jkssb-faa-mock-test"
                    onClick={handleMockLinkClick}
                    className="hover:text-emerald-400 text-emerald-300/90 font-medium transition cursor-pointer"
                  >
                    JKSSB 120Q Full-Length Mock Test
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentMode('flip');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Spaced-Repetition Flashcards
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentMode('current_affairs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Chinar Current Affairs (J&amp;K &amp; National)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentMode('speed');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    60-Second Speed Rush Mode
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentMode('stats');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Performance Analytics &amp; Mastery
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Core Subject Categories */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Core Subject Categories
              </h3>
              <ul className="grid grid-cols-1 gap-1.5">
                {Object.values(TOPIC_SEO_MAP)
                  .filter((t) => t.categoryId !== 'all')
                  .map((t) => (
                    <li key={t.slug}>
                      <a
                        href={t.path}
                        onClick={(e) => handleTopicLinkClick(e, t.categoryId)}
                        className="hover:text-indigo-400 transition cursor-pointer"
                      >
                        {t.shortName} MCQs
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Column 4: Legal, Policies & Community */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Legal, Policies &amp; Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="text-slate-300 hover:text-indigo-400 font-medium transition cursor-pointer text-left"
                  >
                    Privacy Policy (AdSense &amp; Cookies)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsTermsModalOpen(true)}
                    className="text-slate-300 hover:text-amber-400 font-medium transition cursor-pointer text-left"
                  >
                    Terms &amp; Conditions (Terms of Service)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-slate-300 hover:text-emerald-400 font-medium transition cursor-pointer text-left"
                  >
                    Contact Us &amp; Support Desk
                  </button>
                </li>
                <li className="pt-1">
                  <a
                    href="https://t.me/flshmnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold transition"
                  >
                    <span>Official Telegram: @flshmnd</span>
                  </a>
                </li>
                <li className="flex items-center gap-1.5 text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Offline-First PWA Ready</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Compliance Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} FlashMind &ndash; JKSSB Mock Test &amp; MCQ Quiz Portal. All rights reserved.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-slate-300 transition cursor-pointer"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">·</span>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="hover:text-slate-300 transition cursor-pointer"
              >
                Terms of Service
              </button>
              <span aria-hidden="true">·</span>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="hover:text-slate-300 transition cursor-pointer"
              >
                Contact Support
              </button>
            </div>
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

      {/* Privacy Policy, Terms and Conditions & Contact Us Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsAndConditionsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
      <ContactUsModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
