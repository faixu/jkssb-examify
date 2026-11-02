import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  RotateCcw,
  Trophy,
  Filter,
  CheckCircle2,
  Award,
  Zap,
  ChevronDown,
  Check,
  BookOpen,
  Layers,
} from 'lucide-react';
import { CategoryId, ConfidenceRating, Difficulty, Flashcard, UserStats } from '../types';
import { CATEGORIES, CATEGORY_QUESTION_COUNTS } from '../data/initialDecks';
import { FlipCard } from './FlipCard';
import {
  recordStudyActivity,
  updateCardSpacedRepetition,
  toggleBookmark,
  loadBookmarks,
} from '../utils/storage';
import {
  playCorrectSound,
  playWrongSound,
  fireConfetti,
  playStreakCelebration,
} from '../utils/audio';

interface StudyFlipModeProps {
  cards: Flashcard[];
  userStats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
}

export const StudyFlipMode: React.FC<StudyFlipModeProps> = ({
  cards,
  userStats,
  onUpdateStats,
  selectedCategory,
  onSelectCategory,
}) => {
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>(loadBookmarks());
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionRatings, setSessionRatings] = useState<{ easy: number; good: number; hard: number; again: number }>({
    easy: 0,
    good: 0,
    hard: 0,
    again: 0,
  });

  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const subjectDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(e.target as Node)) {
        setIsSubjectDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Filter cards
  const filteredCards = useMemo(() => {
    return cards.filter((c) => {
      if (selectedCategory !== 'all' && c.categoryId !== selectedCategory) return false;
      if (difficultyFilter !== 'all' && c.difficulty !== difficultyFilter) return false;
      if (onlyBookmarks && !bookmarks.includes(c.id)) return false;
      return true;
    });
  }, [cards, selectedCategory, difficultyFilter, onlyBookmarks, bookmarks]);

  // Deck of active cards
  const [deck, setDeck] = useState<Flashcard[]>(filteredCards);

  useEffect(() => {
    setDeck(filteredCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
  }, [filteredCards]);

  const currentCard = deck[currentIndex];

  const handleShuffle = () => {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleRate = useCallback((rating: ConfidenceRating) => {
    if (!currentCard) return;

    // Spaced repetition & stats update
    updateCardSpacedRepetition(currentCard.id, rating);
    const isSuccess = rating === 'good' || rating === 'easy';
    const xpBonus = rating === 'easy' ? 20 : rating === 'good' ? 15 : rating === 'hard' ? 8 : 2;

    if (isSuccess) {
      playCorrectSound();
    } else {
      playWrongSound();
    }

    const updated = recordStudyActivity(currentCard.categoryId, isSuccess, xpBonus);
    onUpdateStats(updated);

    setSessionRatings((prev) => ({
      ...prev,
      [rating]: prev[rating] + 1,
    }));

    // If card was rated 'again', push to end of current study session to reinforce
    if (rating === 'again') {
      setDeck((prev) => [...prev, currentCard]);
    }

    // Advance to next
    if (currentIndex + 1 < deck.length) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setSessionCompleted(true);
      playStreakCelebration();
      fireConfetti();
    }
  }, [currentCard, currentIndex, deck.length, onUpdateStats]);

  const handleBookmarkToggle = () => {
    if (!currentCard) return;
    const next = toggleBookmark(currentCard.id);
    setBookmarks(next);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') handleRate('again');
        if (e.key === '2') handleRate('hard');
        if (e.key === '3') handleRate('good');
        if (e.key === '4') handleRate('easy');
      } else {
        if (e.key === 'ArrowRight' && currentIndex + 1 < deck.length) {
          setCurrentIndex((prev) => prev + 1);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentIndex, deck.length, handleRate]);

  const restartDeck = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
    setSessionRatings({ easy: 0, good: 0, hard: 0, again: 0 });
    setDeck(filteredCards);
  };

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory);
  const getCategoryDisplayCount = (catId: CategoryId | 'all') => {
    const loadedCount =
      catId === 'all' ? cards.length : cards.filter((c) => c.categoryId === catId).length;
    return Math.max(CATEGORY_QUESTION_COUNTS[catId] || 0, loadedCount);
  };
  const activeCount = getCategoryDisplayCount(selectedCategory);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 min-h-[720px]">
      {/* Category & Filters Header */}
      <div className="mb-6 space-y-4 min-h-[104px]">
        {/* Clean Subject Selection Dropdown & Quick Access */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Custom Interactive Subject Dropdown */}
          <div ref={subjectDropdownRef} className="relative w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsSubjectDropdownOpen((prev) => !prev)}
              className="w-full sm:w-auto min-w-[280px] md:min-w-[340px] flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-indigo-500/60 shadow-lg shadow-black/30 transition-all cursor-pointer group text-left"
              aria-expanded={isSubjectDropdownOpen}
              aria-haspopup="listbox"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-inner ${
                    selectedCategory === 'all'
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : activeCategoryMeta?.bgLight || 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {selectedCategory === 'all' ? (
                    <Layers className="w-4 h-4" />
                  ) : (
                    <BookOpen className="w-4 h-4" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 flex items-center gap-1.5">
                    <span>Subject Deck</span>
                    {activeCategoryMeta?.marks && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                        {activeCategoryMeta.marks} Marks
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                    {selectedCategory === 'all' ? 'All Subjects Combined' : activeCategoryMeta?.name}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-lg border border-slate-700/60">
                  {activeCount} Qs
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-200 ${
                    isSubjectDropdownOpen ? 'rotate-180 text-indigo-400' : ''
                  }`}
                />
              </div>
            </button>

            {/* Dropdown Menu Modal */}
            {isSubjectDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full sm:w-[400px] max-h-[420px] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/90 shadow-2xl shadow-black/80 z-50 p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-2 text-[11px] font-semibold text-slate-400 flex items-center justify-between border-b border-slate-800/80 mb-1">
                  <span>Select Subject to Study:</span>
                  <span className="text-[10px] text-indigo-400 font-mono font-bold">11 Decks Available</span>
                </div>

                {/* Option: All Subjects Combined */}
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('all');
                    setIsSubjectDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                      : 'hover:bg-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">All Subjects Combined</div>
                      <div
                        className={`text-[10px] ${
                          selectedCategory === 'all' ? 'text-indigo-200' : 'text-slate-400'
                        }`}
                      >
                        Complete syllabus question pool
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                        selectedCategory === 'all'
                          ? 'bg-indigo-700/60 text-white'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {cards.length} Qs
                    </span>
                    {selectedCategory === 'all' && <Check className="w-4 h-4 text-white" />}
                  </div>
                </button>

                {/* Subject Categories List */}
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = cards.filter((c) => c.categoryId === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setIsSubjectDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                          : 'hover:bg-slate-800/80 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white/20 text-white' : cat.bgLight
                          }`}
                        >
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{cat.name}</div>
                          <div className="flex items-center gap-2 mt-0.5">
                            {cat.marks && (
                              <span
                                className={`text-[9px] font-mono px-1.5 py-0.2 rounded border ${
                                  isSelected
                                    ? 'bg-white/20 text-white border-white/30'
                                    : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                                }`}
                              >
                                {cat.marks} Marks
                              </span>
                            )}
                            <span
                              className={`text-[10px] ${
                                isSelected ? 'text-indigo-200' : 'text-slate-400'
                              } truncate`}
                            >
                              {cat.syllabusRef}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-indigo-700/60 text-white' : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {count} Qs
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick-Access Pills for Fast Switching */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] font-semibold text-slate-400 shrink-0 hidden md:inline">
              Quick:
            </span>
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All ({cards.length})
            </button>
            {['cs', 'general', 'grammar', 'accounting', 'math'].map((catId) => {
              const cat = CATEGORIES.find((c) => c.id === catId);
              if (!cat) return null;
              const isSelected = selectedCategory === cat.id;
              const count = cards.filter((c) => c.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{cat.name.split(' ')[0]}</span>
                  <span className="text-[10px] opacity-70 font-mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sub-Filters: Difficulty + Bookmarks + Shuffle */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Level:
            </span>
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition cursor-pointer ${
                  difficultyFilter === diff
                    ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {diff}
              </button>
            ))}

            <button
              onClick={() => setOnlyBookmarks(!onlyBookmarks)}
              className={`ml-2 px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                onlyBookmarks
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Bookmarked</span>
              <span className="text-[10px] font-mono">({bookmarks.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffle}
              disabled={deck.length <= 1}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition disabled:opacity-40 cursor-pointer"
              title="Shuffle card order"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Shuffle</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Study Arena */}
      {deck.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 p-8 max-w-lg mx-auto">
          <Award className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No flashcards match these filters</h3>
          <p className="text-sm text-slate-400 mb-6">Try resetting filters or picking another category.</p>
          <button
            onClick={() => {
              setDifficultyFilter('all');
              setOnlyBookmarks(false);
              onSelectCategory('all');
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition cursor-pointer"
          >
            Show All Cards
          </button>
        </div>
      ) : sessionCompleted ? (
        /* Session Completed Screen */
        <div className="max-w-xl mx-auto bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
            <Trophy className="w-8 h-8 text-slate-950" />
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight mb-1">
            Session Completed!
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Awesome recall! Your spaced repetition intervals and streak have been updated.
          </p>

          {/* Stats Breakdown */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <span className="block text-xl font-black text-emerald-400">{sessionRatings.easy}</span>
              <span className="text-[11px] text-emerald-300 font-medium">Easy</span>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center">
              <span className="block text-xl font-black text-indigo-400">{sessionRatings.good}</span>
              <span className="text-[11px] text-indigo-300 font-medium">Good</span>
            </div>
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="block text-xl font-black text-amber-400">{sessionRatings.hard}</span>
              <span className="text-[11px] text-amber-300 font-medium">Hard</span>
            </div>
            <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center">
              <span className="block text-xl font-black text-rose-400">{sessionRatings.again}</span>
              <span className="text-[11px] text-rose-300 font-medium">Again</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-800 mb-6 flex items-center justify-between text-left">
            <div>
              <span className="text-xs text-slate-400 block">Current Daily Streak</span>
              <span className="text-lg font-bold text-amber-400 flex items-center gap-1.5">
                🔥 {userStats.streak} Days Running
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">XP Gained</span>
              <span className="text-lg font-bold text-indigo-400 flex items-center gap-1 justify-end">
                <Zap className="w-4 h-4 fill-indigo-400" />
                +{(sessionRatings.easy * 20) + (sessionRatings.good * 15) + (sessionRatings.hard * 8) + (sessionRatings.again * 2)} XP
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={restartDeck}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer shadow-lg shadow-indigo-600/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Study Again</span>
            </button>
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition cursor-pointer border border-slate-700"
            >
              <Shuffle className="w-4 h-4" />
              <span>Shuffle Deck</span>
            </button>
          </div>
        </div>
      ) : (
        /* Active Card View */
        <div className="space-y-6">
          {/* Card counter & Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                Card <strong className="text-white">{currentIndex + 1}</strong> of <strong className="text-white">{deck.length}</strong>
              </span>
              <span>{Math.round(((currentIndex + 1) / deck.length) * 100)}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 3D Flip Card */}
          <FlipCard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped((prev) => !prev)}
            isBookmarked={bookmarks.includes(currentCard.id)}
            onToggleBookmark={handleBookmarkToggle}
          />

          {/* Navigation & Spaced Repetition Rating Buttons */}
          <div className="space-y-4">
            {isFlipped ? (
              /* Spaced Repetition Confidence Buttons */
              <div className="max-w-2xl mx-auto">
                <p className="text-xs font-semibold text-slate-400 text-center mb-3">
                  How well did you recall this? (Keys 1 - 4)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    onClick={() => handleRate('again')}
                    className="p-3 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition flex flex-col items-center justify-center gap-1 group active:scale-95 cursor-pointer"
                  >
                    <span className="text-xs font-black group-hover:text-rose-200">1. Again</span>
                    <span className="text-[10px] text-rose-400/80">Review soon (1d)</span>
                  </button>

                  <button
                    onClick={() => handleRate('hard')}
                    className="p-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition flex flex-col items-center justify-center gap-1 group active:scale-95 cursor-pointer"
                  >
                    <span className="text-xs font-black group-hover:text-amber-200">2. Hard</span>
                    <span className="text-[10px] text-amber-400/80">Difficult recall</span>
                  </button>

                  <button
                    onClick={() => handleRate('good')}
                    className="p-3 rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition flex flex-col items-center justify-center gap-1 group active:scale-95 cursor-pointer"
                  >
                    <span className="text-xs font-black group-hover:text-indigo-200">3. Good</span>
                    <span className="text-[10px] text-indigo-400/80">Optimal recall</span>
                  </button>

                  <button
                    onClick={() => handleRate('easy')}
                    className="p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition flex flex-col items-center justify-center gap-1 group active:scale-95 cursor-pointer"
                  >
                    <span className="text-xs font-black group-hover:text-emerald-200">4. Easy</span>
                    <span className="text-[10px] text-emerald-400/80">Mastered (+20 XP)</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Flip Card Prompt & Prev/Next button */
              <div className="flex items-center justify-between max-w-2xl mx-auto gap-3">
                <button
                  onClick={() => {
                    if (currentIndex > 0) {
                      setIsFlipped(false);
                      setCurrentIndex((prev) => prev - 1);
                    }
                  }}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-30 transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <button
                  onClick={() => setIsFlipped(true)}
                  className="flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition active:scale-98 cursor-pointer text-center"
                >
                  Flip Card (Reveal Answer)
                </button>

                <button
                  onClick={() => {
                    if (currentIndex + 1 < deck.length) {
                      setIsFlipped(false);
                      setCurrentIndex((prev) => prev + 1);
                    }
                  }}
                  disabled={currentIndex + 1 >= deck.length}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-30 transition cursor-pointer"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
