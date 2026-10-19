export type CategoryId =
  | 'accounting'
  | 'general'
  | 'grammar'
  | 'statistics'
  | 'math'
  | 'economics'
  | 'science'
  | 'cs'
  | 'history';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Flashcard {
  id: string;
  categoryId: CategoryId;
  question: string;
  answer: string;
  options: string[]; // 4 options for quiz mode (one matches answer)
  explanation: string;
  tip?: string; // Mnemonic or quick formula
  difficulty: Difficulty;
  isCustom?: boolean;
}

export type ConfidenceRating = 'again' | 'hard' | 'good' | 'easy';

export interface CardProgress {
  cardId: string;
  timesReviewed: number;
  timesCorrect: number;
  lastReviewed: string; // ISO string
  nextReview: string;   // ISO string
  intervalDays: number;
  easeFactor: number;
  mastered: boolean;
}

export interface UserStats {
  xp: number;
  streak: number;
  longestStreak: number;
  lastStudyDate: string; // YYYY-MM-DD
  activeDays: string[];   // Array of YYYY-MM-DD
  totalCardsReviewed: number;
  totalCorrect: number;
  totalTimeMinutes: number;
  categoryStats: Record<CategoryId, { reviewed: number; correct: number }>;
}

export type StudyMode = 'flip' | 'quiz' | 'speed' | 'stats' | 'decks';

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  marks?: number;
  syllabusRef?: string;
  description: string;
  color: string;
  borderColor: string;
  bgLight: string;
  iconName: string;
  badge: string;
}
