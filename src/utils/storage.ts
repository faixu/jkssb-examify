import { CardProgress, CategoryId, ConfidenceRating, Flashcard, UserStats, MockTestResult } from '../types';
import { INITIAL_FLASHCARDS } from '../data/initialDecks';

const STATS_KEY = 'flashmind_stats_v1';
const PROGRESS_KEY = 'flashmind_progress_v1';
const CUSTOM_CARDS_KEY = 'flashmind_custom_cards_v1';
const BOOKMARKS_KEY = 'flashmind_bookmarks_v1';
const MOCK_RESULTS_KEY = 'flashmind_mock_results_v1';

export function getTodayDateStr(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getYesterdayDateStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const defaultStats: UserStats = {
  xp: 0,
  streak: 0,
  longestStreak: 0,
  lastStudyDate: '',
  activeDays: [],
  totalCardsReviewed: 0,
  totalCorrect: 0,
  totalTimeMinutes: 0,
  categoryStats: {
    accounting: { reviewed: 0, correct: 0 },
    economics: { reviewed: 0, correct: 0 },
    statistics: { reviewed: 0, correct: 0 },
    grammar: { reviewed: 0, correct: 0 },
    science: { reviewed: 0, correct: 0 },
    cs: { reviewed: 0, correct: 0 },
    history: { reviewed: 0, correct: 0 },
    general: { reviewed: 0, correct: 0 },
    math: { reviewed: 0, correct: 0 },
    current_affairs: { reviewed: 0, correct: 0 },
  },
};

export function loadUserStats(): UserStats {
  if (typeof window === 'undefined') return defaultStats;
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return defaultStats;
    const parsed = JSON.parse(raw);
    return {
      ...defaultStats,
      ...parsed,
      categoryStats: {
        ...defaultStats.categoryStats,
        ...(parsed.categoryStats || {}),
      },
    };
  } catch {
    return defaultStats;
  }
}

export function saveUserStats(stats: UserStats) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save user stats', err);
  }
}

export function recordStudyActivity(
  categoryId: CategoryId,
  isCorrect: boolean,
  xpEarned: number = 10
): UserStats {
  const current = loadUserStats();
  const today = getTodayDateStr();
  const yesterday = getYesterdayDateStr();

  let newStreak = current.streak;
  if (!current.lastStudyDate) {
    newStreak = 1;
  } else if (current.lastStudyDate === today) {
    // Already studied today, keep streak
    newStreak = current.streak;
  } else if (current.lastStudyDate === yesterday) {
    // Consecutive day!
    newStreak = current.streak + 1;
  } else {
    // Streak broken, start fresh with 1
    newStreak = 1;
  }

  const activeDaysSet = new Set(current.activeDays || []);
  activeDaysSet.add(today);

  const prevCat = current.categoryStats[categoryId] || { reviewed: 0, correct: 0 };
  const updatedCat = {
    reviewed: prevCat.reviewed + 1,
    correct: prevCat.correct + (isCorrect ? 1 : 0),
  };

  const updated: UserStats = {
    ...current,
    xp: current.xp + xpEarned,
    streak: newStreak,
    longestStreak: Math.max(current.longestStreak || 0, newStreak),
    lastStudyDate: today,
    activeDays: Array.from(activeDaysSet).slice(-90), // keep last 90 days for heatmap
    totalCardsReviewed: current.totalCardsReviewed + 1,
    totalCorrect: current.totalCorrect + (isCorrect ? 1 : 0),
    categoryStats: {
      ...current.categoryStats,
      [categoryId]: updatedCat,
    },
  };

  saveUserStats(updated);
  return updated;
}

export function loadCardProgress(): Record<string, CardProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveCardProgressMap(map: Record<string, CardProgress>) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
  } catch (err) {
    console.error('Failed to save progress map', err);
  }
}

export function updateCardSpacedRepetition(
  cardId: string,
  rating: ConfidenceRating
): CardProgress {
  const map = loadCardProgress();
  const prev: CardProgress = map[cardId] || {
    cardId,
    timesReviewed: 0,
    timesCorrect: 0,
    lastReviewed: new Date().toISOString(),
    nextReview: new Date().toISOString(),
    intervalDays: 1,
    easeFactor: 2.5,
    mastered: false,
  };

  let newInterval = prev.intervalDays;
  let newEase = prev.easeFactor;
  let isCorrect = true;
  let mastered = prev.mastered;

  switch (rating) {
    case 'again':
      newInterval = 1;
      newEase = Math.max(1.3, prev.easeFactor - 0.2);
      isCorrect = false;
      mastered = false;
      break;
    case 'hard':
      newInterval = Math.max(1, Math.round(prev.intervalDays * 1.2));
      newEase = Math.max(1.3, prev.easeFactor - 0.15);
      break;
    case 'good':
      newInterval = Math.round(prev.intervalDays * prev.easeFactor);
      if (prev.timesReviewed >= 2) mastered = true;
      break;
    case 'easy':
      newInterval = Math.round(prev.intervalDays * prev.easeFactor * 1.4);
      newEase = Math.min(3.0, prev.easeFactor + 0.15);
      mastered = true;
      break;
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + newInterval);

  const updated: CardProgress = {
    cardId,
    timesReviewed: prev.timesReviewed + 1,
    timesCorrect: prev.timesCorrect + (isCorrect ? 1 : 0),
    lastReviewed: new Date().toISOString(),
    nextReview: nextDate.toISOString(),
    intervalDays: newInterval,
    easeFactor: Number(newEase.toFixed(2)),
    mastered,
  };

  map[cardId] = updated;
  saveCardProgressMap(map);
  return updated;
}

export function loadCustomCards(): Flashcard[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_CARDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomCards(cards: Flashcard[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CUSTOM_CARDS_KEY, JSON.stringify(cards));
  } catch (err) {
    console.error('Failed to save custom cards', err);
  }
}

export function getAllCards(): Flashcard[] {
  const custom = loadCustomCards();
  return [...INITIAL_FLASHCARDS, ...custom];
}

export function loadBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(cardId: string): string[] {
  const current = loadBookmarks();
  const set = new Set(current);
  if (set.has(cardId)) {
    set.delete(cardId);
  } else {
    set.add(cardId);
  }
  const next = Array.from(set);
  if (typeof window !== 'undefined') {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
  }
  return next;
}

export function loadMockTestResults(): MockTestResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(MOCK_RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveMockTestResult(result: MockTestResult): MockTestResult[] {
  const current = loadMockTestResults();
  const next = [result, ...current.slice(0, 49)]; // keep latest 50 results
  if (typeof window !== 'undefined') {
    localStorage.setItem(MOCK_RESULTS_KEY, JSON.stringify(next));
  }
  return next;
}

export function exportStudyData(): string {
  const data = {
    stats: loadUserStats(),
    progress: loadCardProgress(),
    customCards: loadCustomCards(),
    bookmarks: loadBookmarks(),
    mockResults: loadMockTestResults(),
    exportedAt: new Date().toISOString(),
  };
  return JSON.stringify(data, null, 2);
}

export function importStudyData(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    if (data.stats) saveUserStats(data.stats);
    if (data.progress) saveCardProgressMap(data.progress);
    if (data.customCards) saveCustomCards(data.customCards);
    if (data.bookmarks && typeof window !== 'undefined') {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(data.bookmarks));
    }
    if (data.mockResults && typeof window !== 'undefined') {
      localStorage.setItem(MOCK_RESULTS_KEY, JSON.stringify(data.mockResults));
    }
    return true;
  } catch {
    return false;
  }
}

export function resetAllData() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STATS_KEY);
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(CUSTOM_CARDS_KEY);
    localStorage.removeItem(BOOKMARKS_KEY);
    localStorage.removeItem(MOCK_RESULTS_KEY);
  }
}
