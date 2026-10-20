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

export type StudyMode = 'flip' | 'quiz' | 'mock' | 'speed' | 'stats' | 'decks' | 'drive';

export interface ActiveMockConfig {
  type: 'full' | 'section';
  testNumber?: number; // 1 to 10 for full syllabus tests
  sectionId?: CategoryId | 'all';
  autoStart?: boolean;
}

export interface MockTestResult {
  id: string;
  title: string;
  sectionId: CategoryId | 'all';
  testNumber?: number;
  date: string;
  totalQuestions: number;
  timeTakenSeconds: number;
  totalTimeSeconds: number;
  score: number;
  maxMarks: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  accuracy: number;
  negativeDeduction: number;
  sectionBreakdown: {
    sectionId: CategoryId;
    sectionName: string;
    total: number;
    correct: number;
    incorrect: number;
    unattempted: number;
    score: number;
  }[];
}

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
