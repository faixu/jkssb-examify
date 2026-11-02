import { CategoryId, Flashcard } from '../types';
import { isValidFlashcard, loadAllCategoryQuestions, loadCategoryQuestions } from './initialDecks';

export interface FullMockMeta {
  testNumber: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  difficulty: 'Balanced' | 'Moderate' | 'Advanced' | 'Exam Simulation';
  highlight: string;
  badgeColor: string;
  pdfPath?: string;
  timeMinutes?: number;
  totalMarks?: number;
  questionCount?: number;
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

export const TOTAL_MOCKS_COUNT = 8;

export const FULL_MOCKS_META: FullMockMeta[] = [
  {
    testNumber: 1,
    title: 'JKSSB Accounts Assistant (Finance) — 120-MCQ Official Mock Exam',
    shortTitle: 'FAA PDF Mock',
    subtitle: 'Full-Length 120-MCQ Paper from Uploaded PDF',
    description:
      'Exact 120-question official mock examination transcribed from the JKSSB Accounts Assistant (Finance) PDF. Covers all 8 syllabus sections with official answer keys and step-by-step explanatory notes.',
    difficulty: 'Exam Simulation',
    highlight: 'Official FAA Paper',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    pdfPath: '/assets/aistudio/JKSSB_Accounts_Assistant__Finance__120-MCQ_Mock_Exam.md_5271e456.pdf',
    timeMinutes: 120,
    totalMarks: 120,
    questionCount: 120,
  },
  {
    testNumber: 2,
    title: 'JKSSB Data Entry Operator (DEO) — 120-MCQ Official Paper 2025',
    shortTitle: 'DEO 2025 Paper',
    subtitle: 'Series A Complete 120-Question Examination',
    description:
      'Authentic 120-question exam transcribed from the official JKSSB Data Entry Operator OMR Examination 2025 (Series A). Covers J&K Special, General English, Mental Ability, Quantitative Math, Statistics, and Computer Science.',
    difficulty: 'Exam Simulation',
    highlight: 'DEO 2025 Series A',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    pdfPath: '/assets/aistudio/QP_Series-A_Data_entry_operator_24a3eaae.pdf',
    timeMinutes: 120,
    totalMarks: 120,
    questionCount: 120,
  },
  {
    testNumber: 3,
    title: 'JKSSB Junior Assistant — 80-MCQ Official Paper 2024',
    shortTitle: 'JA 2024 Paper',
    subtitle: 'Series A Complete 80-Question Examination (25-08-2024)',
    description:
      'Authentic 80-question exam transcribed from the official JKSSB Junior Assistant OMR Examination (25-08-2024, Series A). Covers General English, J&K UT Special, Computer Science/IT, Mental Ability & Mathematics.',
    difficulty: 'Exam Simulation',
    highlight: 'JA 2024 Series A',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    pdfPath: '/assets/aistudio/SET-A_JUNIOR_ASSISTANT_25-08-2024_a969da07.pdf',
    timeMinutes: 80,
    totalMarks: 80,
    questionCount: 80,
  },
  {
    testNumber: 4,
    title: 'FAA Mock Test 02',
    shortTitle: 'Mock 02',
    subtitle: 'Official Blueprint Baseline',
    description:
      'Foundation exam covering J&K history & geography, core journal entries, BRS, basic grammar rules, and computer hardware essentials.',
    difficulty: 'Balanced',
    highlight: 'Standard Baseline',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    timeMinutes: 120,
    totalMarks: 120,
    questionCount: 120,
  },
  {
    testNumber: 5,
    title: 'FAA Mock Test 03',
    shortTitle: 'Mock 03',
    subtitle: 'High-Yield Core Focus',
    description:
      'High-probability topics on Indian freedom struggle, trial balance & partnership, index numbers (Laspeyres/Paasche), and macroeconomics.',
    difficulty: 'Moderate',
    highlight: 'High-Yield Topics',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    timeMinutes: 120,
    totalMarks: 120,
    questionCount: 120,
  },
  {
    testNumber: 6,
    title: 'FAA Mock Test 04',
    shortTitle: 'Mock 04',
    subtitle: 'Speed & Numerical Accuracy',
    description:
      'Calculations in simple & compound interest, probability, matrices, cost accounting terms, and economic elasticity calculations.',
    difficulty: 'Advanced',
    highlight: 'Numerical Intensive',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    timeMinutes: 120,
    totalMarks: 120,
    questionCount: 120,
  },
  {
    testNumber: 7,
    title: 'FAA Mock Test 05',
    shortTitle: 'Mock 05',
    subtitle: 'Accountancy & J&K Intensive',
    description:
      'Comprehensive 60-mark deep drill into voucher approaches, GST, PFMS, financial audit, and J&K Reorganisation Act 2019 clauses.',
    difficulty: 'Moderate',
    highlight: 'Top Weightage Focus',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    timeMinutes: 120,
    totalMarks: 120,
    questionCount: 120,
  },
  {
    testNumber: 8,
    title: 'FAA Mock Test 06',
    shortTitle: 'Mock 06',
    subtitle: 'Conceptual Mastery & Reasoning',
    description:
      'Conceptual questions spanning laws of motion, ecosystem biodiversity, grammar narration & voice, and operating system kernels.',
    difficulty: 'Balanced',
    highlight: 'Conceptual Depth',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    timeMinutes: 120,
    totalMarks: 120,
    questionCount: 120,
  },
];

// Cached PDF mock question sets loaded via dynamic import()
let cachedFaaPdfQuestions: Flashcard[] | null = null;
let cachedDeoPdfQuestions: Flashcard[] | null = null;
let cachedJaPdfQuestions: Flashcard[] | null = null;

export async function preloadMockPdfQuestions(): Promise<void> {
  const [faaMod, deoMod, jaMod] = await Promise.all([
    import('./questions/jkssbFaaFullMockPdfQuestions'),
    import('./questions/jkssbDeo2025PdfQuestions'),
    import('./questions/jkssbJuniorAssistant2024PdfQuestions'),
    loadAllCategoryQuestions(),
  ]);
  cachedFaaPdfQuestions = faaMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter(isValidFlashcard);
  cachedDeoPdfQuestions = deoMod.JKSSB_DEO_2025_PDF_QUESTIONS.filter(isValidFlashcard);
  cachedJaPdfQuestions = jaMod.JKSSB_JA_2024_PDF_QUESTIONS.filter(isValidFlashcard);
}

/**
 * Async loader for Full Mock Test questions (dynamically imports the required question bank on demand)
 */
export async function loadQuestionsForFullMockAsync(
  allCards: Flashcard[],
  testNumber: number
): Promise<Flashcard[]> {
  if (testNumber === 1) {
    if (!cachedFaaPdfQuestions) {
      const mod = await import('./questions/jkssbFaaFullMockPdfQuestions');
      cachedFaaPdfQuestions = mod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter(isValidFlashcard);
    }
    if (cachedFaaPdfQuestions.length >= 120) {
      return cachedFaaPdfQuestions.slice(0, 120);
    }
  }

  if (testNumber === 2) {
    if (!cachedDeoPdfQuestions) {
      const mod = await import('./questions/jkssbDeo2025PdfQuestions');
      cachedDeoPdfQuestions = mod.JKSSB_DEO_2025_PDF_QUESTIONS.filter(isValidFlashcard);
    }
    if (cachedDeoPdfQuestions.length >= 120) {
      return cachedDeoPdfQuestions.slice(0, 120);
    }
  }

  if (testNumber === 3) {
    if (!cachedJaPdfQuestions) {
      const mod = await import('./questions/jkssbJuniorAssistant2024PdfQuestions');
      cachedJaPdfQuestions = mod.JKSSB_JA_2024_PDF_QUESTIONS.filter(isValidFlashcard);
    }
    if (cachedJaPdfQuestions.length >= 80) {
      return cachedJaPdfQuestions.slice(0, 80);
    }
  }

  const fullPool = allCards.length > 200 ? allCards : await loadAllCategoryQuestions();
  return getQuestionsForFullMock(fullPool, testNumber);
}

export async function loadQuestionsForSectionMockAsync(
  allCards: Flashcard[],
  sectionId: CategoryId
): Promise<Flashcard[]> {
  const sectionCards = await loadCategoryQuestions(sectionId);
  const merged = sectionCards.length > 0 ? sectionCards : allCards;
  return getQuestionsForSectionMock(merged, sectionId);
}

/**
 * Synchronous getter for Full Syllabus Mock Test (uses cached PDF sets or full pool).
 */
export function getQuestionsForFullMock(allCards: Flashcard[], testNumber: number): Flashcard[] {
  if (testNumber === 1 && cachedFaaPdfQuestions && cachedFaaPdfQuestions.length >= 120) {
    return cachedFaaPdfQuestions.slice(0, 120);
  }

  if (testNumber === 2 && cachedDeoPdfQuestions && cachedDeoPdfQuestions.length >= 120) {
    return cachedDeoPdfQuestions.slice(0, 120);
  }

  if (testNumber === 3 && cachedJaPdfQuestions && cachedJaPdfQuestions.length >= 80) {
    return cachedJaPdfQuestions.slice(0, 80);
  }

  const sanitizedCards = allCards.filter(isValidFlashcard);
  const safeNumber = Math.max(1, Math.min(TOTAL_MOCKS_COUNT, testNumber));
  const testIdx = Math.max(0, safeNumber - 4);

  let testQuestions: Flashcard[] = [];

  for (const item of FAA_FULL_BLUEPRINT) {
    const categoryCards = sanitizedCards.filter((c) => c.categoryId === item.categoryId);
    const start = testIdx * item.count;
    const end = start + item.count;
    const slice = categoryCards.slice(start, end);

    if (slice.length < item.count) {
      const existingIds = new Set([...testQuestions, ...slice].map((c) => c.id));
      const remaining = categoryCards.filter((c) => !existingIds.has(c.id));
      testQuestions = [...testQuestions, ...slice, ...remaining.slice(0, item.count - slice.length)];
    } else {
      testQuestions = [...testQuestions, ...slice];
    }
  }

  if (testQuestions.length < 120) {
    const existingIds = new Set(testQuestions.map((c) => c.id));
    const spare = sanitizedCards.filter((c) => !existingIds.has(c.id));
    testQuestions = [...testQuestions, ...spare.slice(0, 120 - testQuestions.length)];
  }

  return testQuestions.filter(isValidFlashcard).slice(0, 120);
}

export function getQuestionsForSectionMock(allCards: Flashcard[], sectionId: CategoryId): Flashcard[] {
  const sectionCards = allCards.filter(isValidFlashcard).filter((c) => c.categoryId === sectionId);
  const examCards = sectionCards.filter(
    (c) =>
      c.id.startsWith('msoffice-') ||
      c.id.startsWith('jkssb-ja-') ||
      c.id.startsWith('jkssb-deo-') ||
      c.id.startsWith('jkssb-pdf-mock-')
  );
  const otherCards = sectionCards.filter(
    (c) =>
      !c.id.startsWith('msoffice-') &&
      !c.id.startsWith('jkssb-ja-') &&
      !c.id.startsWith('jkssb-deo-') &&
      !c.id.startsWith('jkssb-pdf-mock-')
  );
  const combined = [...examCards, ...otherCards];
  if (combined.length <= 120) {
    return combined;
  }
  return combined.slice(0, 120);
}
