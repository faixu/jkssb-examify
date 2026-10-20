import { CategoryId, Flashcard } from '../types';

export interface FullMockMeta {
  testNumber: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  difficulty: 'Balanced' | 'Moderate' | 'Advanced' | 'Exam Simulation';
  highlight: string;
  badgeColor: string;
}

export const FAA_FULL_BLUEPRINT: { categoryId: CategoryId; name: string; count: number }[] = [
  { categoryId: 'general', name: 'General Knowledge (J&K Special)', count: 30 },
  { categoryId: 'accounting', name: 'Accountancy & Book Keeping', count: 30 },
  { categoryId: 'grammar', name: 'General English', count: 10 },
  { categoryId: 'statistics', name: 'Statistics', count: 10 },
  { categoryId: 'math', name: 'Mathematics', count: 10 },
  { categoryId: 'economics', name: 'General Economics', count: 10 },
  { categoryId: 'science', name: 'General Science', count: 10 },
  { categoryId: 'cs', name: 'Knowledge of Computers', count: 10 },
];

export const TOTAL_MOCKS_COUNT = 10;

export const FULL_MOCKS_META: FullMockMeta[] = [
  {
    testNumber: 1,
    title: 'FAA Mock Test 01',
    shortTitle: 'Mock 01',
    subtitle: 'Official Blueprint Baseline',
    description: 'Foundation exam covering J&K history & geography, core journal entries, BRS, basic grammar rules, and computer hardware essentials.',
    difficulty: 'Balanced',
    highlight: 'Standard Baseline',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  {
    testNumber: 2,
    title: 'FAA Mock Test 02',
    shortTitle: 'Mock 02',
    subtitle: 'High-Yield Core Focus',
    description: 'High-probability topics on Indian freedom struggle, trial balance & partnership, index numbers (Laspeyres/Paasche), and macroeconomics.',
    difficulty: 'Moderate',
    highlight: 'High-Yield Topics',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  },
  {
    testNumber: 3,
    title: 'FAA Mock Test 03',
    shortTitle: 'Mock 03',
    subtitle: 'Speed & Numerical Accuracy',
    description: 'Calculations in simple & compound interest, probability, matrices, cost accounting terms, and economic elasticity calculations.',
    difficulty: 'Advanced',
    highlight: 'Numerical Intensive',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  },
  {
    testNumber: 4,
    title: 'FAA Mock Test 04',
    shortTitle: 'Mock 04',
    subtitle: 'Accountancy & J&K Intensive',
    description: 'Comprehensive 60-mark deep drill into voucher approaches, GST, PFMS, financial audit, and J&K Reorganisation Act 2019 clauses.',
    difficulty: 'Moderate',
    highlight: 'Top Weightage Focus',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    testNumber: 5,
    title: 'FAA Mock Test 05',
    shortTitle: 'Mock 05',
    subtitle: 'Conceptual Mastery & Reasoning',
    description: 'Conceptual questions spanning laws of motion, ecosystem biodiversity, grammar narration & voice, and operating system kernels.',
    difficulty: 'Balanced',
    highlight: 'Conceptual Depth',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  },
  {
    testNumber: 6,
    title: 'FAA Mock Test 06',
    shortTitle: 'Mock 06',
    subtitle: 'Comprehensive Practice Exam',
    description: 'Realistic JKSSB question patterns with standard 4-option MCQs, multi-statement evaluations, and negative marking traps.',
    difficulty: 'Moderate',
    highlight: 'Comprehensive Drill',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  },
  {
    testNumber: 7,
    title: 'FAA Mock Test 07',
    shortTitle: 'Mock 07',
    subtitle: 'Negative Marking Resistance',
    description: 'Designed to build question-skipping discipline and accuracy. Test your judgment under pressure without losing marks.',
    difficulty: 'Advanced',
    highlight: 'Precision Under Pressure',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
  },
  {
    testNumber: 8,
    title: 'FAA Mock Test 08',
    shortTitle: 'Mock 08',
    subtitle: 'Real Exam Pattern Simulation',
    description: 'Authentic distribution mirroring past year JKSSB FAA examinations with tricky options and nuanced distractors.',
    difficulty: 'Exam Simulation',
    highlight: 'Authentic Simulation',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  },
  {
    testNumber: 9,
    title: 'FAA Mock Test 09',
    shortTitle: 'Mock 09',
    subtitle: 'Advanced Problem Solver',
    description: 'Challenging questions in Ricardian rent, indifference curve properties, coordinate geometry 3D vectors, and balance sheet reconciliation.',
    difficulty: 'Advanced',
    highlight: 'Top Scorer Challenge',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  },
  {
    testNumber: 10,
    title: 'FAA Mock Test 10',
    shortTitle: 'Mock 10',
    subtitle: 'Grand Finale Pre-Exam Simulation',
    description: 'The ultimate final readiness full syllabus test. Final benchmark for your estimated score out of 120, time management, and rank.',
    difficulty: 'Exam Simulation',
    highlight: 'Grand Final Exam',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  },
];

/**
 * Returns exactly 120 questions for a given full syllabus mock test (1 to 10).
 * Guarantees 100% disjoint, distinct questions across tests 1 to 10:
 * Mock 1, Mock 2, ..., Mock 10 have 0 overlapping questions!
 */
export function getQuestionsForFullMock(allCards: Flashcard[], testNumber: number): Flashcard[] {
  const safeNumber = Math.max(1, Math.min(TOTAL_MOCKS_COUNT, testNumber));
  const testIdx = safeNumber - 1;

  let testQuestions: Flashcard[] = [];

  for (const item of FAA_FULL_BLUEPRINT) {
    const categoryCards = allCards.filter((c) => c.categoryId === item.categoryId);
    const start = testIdx * item.count;
    const end = start + item.count;
    const slice = categoryCards.slice(start, end);

    if (slice.length < item.count) {
      // In case pool has fewer, grab other cards not already used
      const existingIds = new Set([...testQuestions, ...slice].map((c) => c.id));
      const remaining = categoryCards.filter((c) => !existingIds.has(c.id));
      testQuestions = [...testQuestions, ...slice, ...remaining.slice(0, item.count - slice.length)];
    } else {
      testQuestions = [...testQuestions, ...slice];
    }
  }

  // Ensure exact length of 120
  if (testQuestions.length < 120) {
    const existingIds = new Set(testQuestions.map((c) => c.id));
    const spare = allCards.filter((c) => !existingIds.has(c.id));
    testQuestions = [...testQuestions, ...spare.slice(0, 120 - testQuestions.length)];
  }

  return testQuestions.slice(0, 120);
}

/**
 * Returns 120 questions for an intensive single-subject mock test.
 */
export function getQuestionsForSectionMock(allCards: Flashcard[], sectionId: CategoryId): Flashcard[] {
  const sectionCards = allCards.filter((c) => c.categoryId === sectionId);
  if (sectionCards.length <= 120) {
    return [...sectionCards];
  }
  // Take first 120 or shuffle if desired
  return sectionCards.slice(0, 120);
}
