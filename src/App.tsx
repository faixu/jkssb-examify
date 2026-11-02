import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { CategoryId, Flashcard, StudyMode, UserStats, CardProgress, ActiveMockConfig } from './types';
import { getAllCards, loadCardsForCategory, loadUserStats, loadCardProgress } from './utils/storage';
import { loadCategoryQuestions } from './data/initialDecks';
import {
  TOPIC_SEO_MAP,
  resolveRouteFromLocation,
  getCanonicalSEO,
} from './utils/seo';
import { Header } from './components/Header';
import { QuizMode } from './components/QuizMode';
import { OfflineIndicator } from './components/OfflineIndicator';
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
  BookOpen,
  CheckCircle2,
  ArrowRight,
  FileText,
} from 'lucide-react';

// Code-split secondary mode views so initial index-*.js bundle only contains Header + QuizMode
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

  const refreshAllData = useCallback(() => {
    setCards(getAllCards());
    setUserStats(loadUserStats());
    setCardProgress(loadCardProgress());
  }, []);

  // Dynamically load question chunks on demand based on selected category or mode
  useEffect(() => {
    let cancelled = false;

    async function loadActiveQuestions() {
      if (selectedCategory !== 'all') {
        // Load only the selected subject module immediately
        const updated = await loadCardsForCategory(selectedCategory);
        if (!cancelled) setCards(updated);
      } else if (currentMode === 'mock' || currentMode === 'decks') {
        // Full Mock Hub or Deck Manager needs all categories
        const updated = await loadCardsForCategory('all');
        if (!cancelled) setCards(updated);
      } else {
        // On initial 'all' view, load the high-weightage J&K GK module first to keep TBT near 0ms,
        // then load remaining categories during idle time
        await loadCategoryQuestions('general');
        if (!cancelled) setCards(getAllCards());

        const idleTimer = setTimeout(async () => {
          const allUpdated = await loadCardsForCategory('all');
          if (!cancelled) setCards(allUpdated);
        }, 1200);

        return () => clearTimeout(idleTimer);
      }
    }

    loadActiveQuestions().catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [selectedCategory, currentMode]);

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

  // Synchronize clean URL, <title>, <meta name="description">, <link rel="canonical">, and JSON-LD Quiz schema
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

    let dynamicSchemaEl = document.getElementById('dynamic-quiz-schema') as HTMLScriptElement | null;
    if (!dynamicSchemaEl) {
      dynamicSchemaEl = document.createElement('script');
      dynamicSchemaEl.id = 'dynamic-quiz-schema';
      dynamicSchemaEl.type = 'application/ld+json';
      document.head.appendChild(dynamicSchemaEl);
    }

    const quizSchema = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: seo.h1,
      description: seo.description,
      url: seo.canonicalUrl,
      educationalAlignment: {
        '@type': 'AlignmentObject',
        alignmentType: 'educationalSubject',
        targetName: seo.topic.shortName,
      },
      hasPart: seo.topic.sampleQuestions.map((sq) => ({
        '@type': 'Question',
        eduQuestionType: 'Multiple choice',
        text: sq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: sq.answer,
          comment: {
            '@type': 'Comment',
            text: sq.explanation,
          },
        },
      })),
    };
    dynamicSchemaEl.textContent = JSON.stringify(quizSchema);
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

  const currentSEO = getCanonicalSEO(currentMode, selectedCategory);
  const activeTopicSEO = currentSEO.topic;

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

      {/* Semantic H1 & Topic Breadcrumb Header Banner (Reserved min-height prevents CLS) */}
      <section className="border-b border-slate-800/70 bg-gradient-to-r from-slate-950 via-indigo-950/25 to-slate-950 min-h-[132px] md:min-h-[92px] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-indigo-400 min-h-[20px]">
              <a
                href="/"
                onClick={(e) => handleTopicLinkClick(e, 'all')}
                className="hover:underline shrink-0"
              >
                JKSSB Quiz Portal
              </a>
              <span className="text-slate-600 shrink-0">/</span>
              <span className="text-slate-300 truncate">
                {currentMode === 'quiz' ? activeTopicSEO.shortName : currentSEO.title.split('|')[0].trim()}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold shrink-0">
                {activeTopicSEO.marksWeightage}
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-extrabold text-white tracking-tight mt-0.5 line-clamp-1 min-h-[24px] sm:min-h-[28px]">
              {currentSEO.h1}
            </h1>
            <p className="text-xs text-slate-400 line-clamp-2 mt-0.5 max-w-3xl min-h-[32px]">
              {activeTopicSEO.intro}
            </p>
          </div>

          {/* Quick Crawlable Anchor Links for Top JKSSB Subjects */}
          <nav aria-label="Popular JKSSB Quiz Topics" className="flex items-center gap-1.5 flex-wrap shrink-0">
            <a
              href="/quizzes/jk-special-gk"
              onClick={(e) => handleTopicLinkClick(e, 'general')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${
                currentMode === 'quiz' && selectedCategory === 'general'
                  ? 'bg-indigo-600 text-white border-indigo-400'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-indigo-500/50 hover:text-white'
              }`}
            >
              J&amp;K GK Quiz
            </a>
            <a
              href="/quizzes/computer-fundamentals"
              onClick={(e) => handleTopicLinkClick(e, 'cs')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${
                currentMode === 'quiz' && selectedCategory === 'cs'
                  ? 'bg-indigo-600 text-white border-indigo-400'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-indigo-500/50 hover:text-white'
              }`}
            >
              Computer Quiz
            </a>
            <a
              href="/quizzes/general-science"
              onClick={(e) => handleTopicLinkClick(e, 'science')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${
                currentMode === 'quiz' && selectedCategory === 'science'
                  ? 'bg-indigo-600 text-white border-indigo-400'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-indigo-500/50 hover:text-white'
              }`}
            >
              Science Quiz
            </a>
            <a
              href="/quizzes/accountancy"
              onClick={(e) => handleTopicLinkClick(e, 'accounting')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${
                currentMode === 'quiz' && selectedCategory === 'accounting'
                  ? 'bg-indigo-600 text-white border-indigo-400'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-indigo-500/50 hover:text-white'
              }`}
            >
              Accountancy Quiz
            </a>
          </nav>
        </div>
      </section>

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
          </Suspense>
        )}

        {/* On-Page Structured Study Guide, Syllabus & Sample Answer Key (Indexable Content) */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-800/80 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Syllabus Covered H2 */}
            <section className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                <BookOpen className="w-4 h-4" />
                <h2 className="text-sm sm:text-base font-extrabold text-white">
                  Syllabus Covered: {activeTopicSEO.shortName}
                </h2>
              </div>
              <p className="text-xs text-slate-400">
                Official JKSSB General Line, Graduate Level, FAA, Junior Assistant &amp; Patwari syllabus topics tested in this module:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeTopicSEO.syllabusTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Study Notes & Exam Instructions H2 */}
            <section className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <FileText className="w-4 h-4" />
                <h2 className="text-sm sm:text-base font-extrabold text-white">
                  Study Notes &amp; JKSSB Exam Instructions
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {activeTopicSEO.studyNotes.map((note, idx) => (
                  <li key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
              <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-slate-300">
                <strong className="text-indigo-300">Exam Marking Scheme:</strong> Every correct MCQ awards{' '}
                <span className="text-emerald-400 font-semibold">+1.00 mark</span>, while each incorrect answer deducts{' '}
                <span className="text-rose-400 font-semibold">-0.25 marks</span> (1/4th negative marking). Unattempted questions carry zero penalty.
              </div>
            </section>
          </div>

          {/* Sample Solved Questions & Written Answer Key H2 */}
          <section className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-4">
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-white">
                Recent Solved Questions &amp; Answer Key ({activeTopicSEO.shortName})
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Review solved multiple-choice questions with detailed explanations for JKSSB exam preparation:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeTopicSEO.sampleQuestions.map((sq, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-white leading-snug">
                      Q{idx + 1}. {sq.question}
                    </h3>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                      {sq.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`px-2 py-1 rounded border ${
                            opt === sq.answer
                              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          {String.fromCharCode(65 + oIdx)}. {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                    <span className="font-bold text-emerald-400">Answer: {sq.answer}</span> — {sq.explanation}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Descriptive Anchor Links for All Topic Directories H2 */}
          <section className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3">
            <h2 className="text-sm sm:text-base font-extrabold text-white">
              Browse JKSSB Topic-Wise MCQ Quizzes by Subject
            </h2>
            <p className="text-xs text-slate-400">
              Select a subject directory below to launch targeted JKSSB practice questions with instant answer verification:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {Object.values(TOPIC_SEO_MAP).map((topicItem) => (
                <a
                  key={topicItem.slug}
                  href={topicItem.path}
                  onClick={(e) => handleTopicLinkClick(e, topicItem.categoryId)}
                  className={`p-3 rounded-xl border text-left transition flex items-center justify-between gap-2 group ${
                    currentMode === 'quiz' && selectedCategory === topicItem.categoryId
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-950/70 border-slate-800/90 text-slate-300 hover:border-indigo-500/50 hover:text-white'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-indigo-300 group-hover:text-indigo-200 truncate">
                      {topicItem.navAnchorText}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate mt-0.5">
                      {topicItem.marksWeightage}
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>

      {/* Offline Status Float Indicator */}
      <OfflineIndicator />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 pb-20 md:pb-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">FlashMind JKSSB Quiz &amp; Mock Test Portal</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Offline PWA Enabled
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center text-[11px] text-slate-400">
            {Object.values(TOPIC_SEO_MAP)
              .filter((t) => t.categoryId !== 'all')
              .map((t, i, arr) => (
                <span key={t.slug} className="flex items-center">
                  <a
                    href={t.path}
                    onClick={(e) => handleTopicLinkClick(e, t.categoryId)}
                    className="hover:text-indigo-400 transition cursor-pointer"
                  >
                    {t.shortName} Quiz
                  </a>
                  {i < arr.length - 1 && <span className="mx-1.5 text-slate-700">·</span>}
                </span>
              ))}
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
