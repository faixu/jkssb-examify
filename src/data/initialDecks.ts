import { CategoryId, CategoryMeta, Flashcard } from '../types';

export const CATEGORY_QUESTION_COUNTS: Record<CategoryId | 'all', number> = {
  all: 7756,
  general: 1227,
  accounting: 805,
  grammar: 1054,
  statistics: 518,
  math: 570,
  economics: 840,
  science: 510,
  cs: 1136,
  history: 796,
  current_affairs: 401,
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'general',
    name: 'General Knowledge (J&K UT Special)',
    marks: 30,
    syllabusRef: 'Section I - 30 Marks',
    description:
      'Physical & Political Divisions of the World & India, Indian Physiography, Current events & Central Government Schemes, Indian freedom struggle, rivers & lakes, climate & crops, demography, environment & biodiversity, J&K UT history, geography, economy, culture, tourism, and J&K Reorganisation Act 2019.',
    color: 'from-amber-500 to-orange-700',
    borderColor: 'border-amber-500',
    bgLight: 'bg-amber-500/10 text-amber-400',
    iconName: 'Globe',
    badge: '30 Marks',
  },
  {
    id: 'accounting',
    name: 'Accountancy & Book Keeping',
    marks: 30,
    syllabusRef: 'Section II - 30 Marks',
    description:
      'Introduction to accounting terms, accounting equation & journal, voucher approach, BRS, partnership accounts, ledger accounts, cash book, financial audit, internal control, internal check & internal audit (Companies Act Sec 138, SA 610, COSO), double entry, trial balance, trading & P&L accounts, balance sheet, social accounting & audit, single entry, PFMS, Indian financial management system, taxation (direct & GST), and budgetary control & cost accounting.',
    color: 'from-emerald-500 to-teal-700',
    borderColor: 'border-emerald-500',
    bgLight: 'bg-emerald-500/10 text-emerald-400',
    iconName: 'Calculator',
    badge: '30 Marks',
  },
  {
    id: 'grammar',
    name: 'General English',
    marks: 10,
    syllabusRef: 'Section III - 10 Marks',
    description:
      'Tenses, sentence rearrangement, narration, modals, articles, comprehension with blanks (phrases, pronouns, homonyms/homophones), clauses, synonyms & antonyms, idioms & phrases, prepositions, and active & passive voice.',
    color: 'from-blue-500 to-indigo-700',
    borderColor: 'border-blue-500',
    bgLight: 'bg-blue-500/10 text-blue-400',
    iconName: 'BookOpen',
    badge: '10 Marks',
  },
  {
    id: 'statistics',
    name: 'Statistics',
    marks: 10,
    syllabusRef: 'Section IV - 10 Marks',
    description:
      'Primary & secondary data collection methods, questionnaire preparation, tabulation & compilation, measures of central tendency, theory of probability, theory of attributes, index numbers (tests, WPI, CPI), demography & census, and vital statistics (fertility & mortality rates).',
    color: 'from-purple-500 to-violet-700',
    borderColor: 'border-purple-500',
    bgLight: 'bg-purple-500/10 text-purple-400',
    iconName: 'BarChart2',
    badge: '10 Marks',
  },
  {
    id: 'math',
    name: 'Mathematics',
    marks: 10,
    syllabusRef: 'Section V - 10 Marks',
    description:
      'Simple & compound interest, linear equations with two variables, permutations & combinations, binomial theorem, limits & derivatives, set theory, relations & functions, matrices & determinants, probability, 3D coordinate geometry, and vectors.',
    color: 'from-rose-500 to-pink-700',
    borderColor: 'border-rose-500',
    bgLight: 'bg-rose-500/10 text-rose-400',
    iconName: 'Sigma',
    badge: '10 Marks',
  },
  {
    id: 'economics',
    name: 'General Economics',
    marks: 10,
    syllabusRef: 'Section VI - 10 Marks',
    description:
      'Basic economic concepts, fiscal & monetary policy, consumer demand using indifference curves, demand analysis, factor pricing & Ricardian rent, pricing under various market forms, laws of production, economic growth, planning vs market economy, 1991 reforms, national income, and role of RBI.',
    color: 'from-sky-500 to-cyan-700',
    borderColor: 'border-sky-500',
    bgLight: 'bg-sky-500/10 text-sky-400',
    iconName: 'TrendingUp',
    badge: '10 Marks',
  },
  {
    id: 'science',
    name: 'General Science',
    marks: 10,
    syllabusRef: 'Section VII - 10 Marks',
    description:
      'Newton’s laws of motion, speed, velocity, mass & weight, electric current, power, energy & voltage, chemical equations, metals & non-metals, conventional & non-conventional energy sources, nutrition & respiration in plants, communicable & non-communicable diseases, vitamin deficiencies, ecosystem & food webs, environmental pollution, ozone layer, and greenhouse effect.',
    color: 'from-teal-500 to-emerald-700',
    borderColor: 'border-teal-500',
    bgLight: 'bg-teal-500/10 text-teal-400',
    iconName: 'Atom',
    badge: '10 Marks',
  },
  {
    id: 'cs',
    name: 'Knowledge of Computers',
    marks: 10,
    syllabusRef: 'Section VIII - 10 Marks',
    description:
      'Computer applications & components, CS fundamentals, open-source technologies, input & output devices, operating systems, MS Word, Excel, Access, PowerPoint, PDF, Internet & email, viruses & anti-virus, hardware, software, firmware & human-ware, and role of IT in governance.',
    color: 'from-indigo-500 to-blue-700',
    borderColor: 'border-indigo-500',
    bgLight: 'bg-indigo-500/10 text-indigo-400',
    iconName: 'Cpu',
    badge: '10 Marks',
  },
  {
    id: 'history',
    name: 'Jammu & Kashmir & Modern History',
    marks: 15,
    syllabusRef: 'J&K Ancient, Medieval, Dogra & Modern History',
    description:
      'Ancient Kashmir (Satisar, Nilamata Purana, Kalhana’s Rajatarangini, Karkota & Utpala dynasties), Medieval Kashmir (Shah Mir, Zain-ul-Abidin, Chaks, Mughals, Afghans, Sikhs), Modern Dogra Rule (Treaty of Amritsar, Gulab Singh to Hari Singh, Quit Kashmir, Accession, Article 370), and Indian Freedom Struggle.',
    color: 'from-yellow-600 to-amber-800',
    borderColor: 'border-amber-600',
    bgLight: 'bg-amber-600/10 text-amber-300',
    iconName: 'Landmark',
    badge: '650 Qs',
  },
  {
    id: 'current_affairs',
    name: 'Current Affairs (JKSSB Special)',
    marks: 20,
    syllabusRef: 'Current Events & JKSSB Special 2026',
    description:
      'Complete 15-chapter coverage: J&K and Ladakh, National Affairs & Polity, Economy, Banking & Finance, International Affairs, S&T, Environment & Ecology, Defence & Security, Awards & Honours, Sports, Reports & Indices, Appointments, Books & Authors, Important Days, and Key Personalities.',
    color: 'from-amber-500 to-rose-700',
    borderColor: 'border-amber-500',
    bgLight: 'bg-amber-500/10 text-amber-300',
    iconName: 'Newspaper',
    badge: '400+ Qs',
  },
];

export function isValidFlashcard(c: Flashcard | null | undefined): boolean {
  if (!c) return false;
  if (!c.question || !c.question.trim()) return false;
  if (!c.answer || !c.answer.trim()) return false;
  if (!Array.isArray(c.options) || c.options.length < 2) return false;
  if (c.options.some((opt) => !opt || !opt.trim())) return false;
  return true;
}

/**
 * Lightweight starter deck (20 representative questions across all 10 categories)
 * bundled in the initial chunk so the first paint has immediate interactive questions
 * with zero layout shift while the full category chunks load asynchronously on demand.
 */
export const STARTER_FLASHCARDS: Flashcard[] = [
  {
    id: 'starter-general-1',
    categoryId: 'general',
    question: 'When did the Jammu and Kashmir Reorganisation Act, 2019 officially come into force?',
    answer: '31 October 2019',
    options: ['5 August 2019', '9 August 2019', '31 October 2019', '26 January 2020'],
    explanation:
      'The J&K Reorganisation Act, 2019 received Presidential assent on 9 August 2019 and came into force on 31 October 2019 (National Unity Day).',
    tip: 'Assent: Aug 9; Effective: Oct 31, 2019.',
    difficulty: 'beginner',
  },
  {
    id: 'starter-general-2',
    categoryId: 'general',
    question: 'Which lake in Jammu and Kashmir is the largest freshwater lake in India?',
    answer: 'Wular Lake',
    options: ['Dal Lake', 'Wular Lake', 'Mansbal Lake', 'Pangong Tso'],
    explanation:
      'Wular Lake in Bandipora district is the largest freshwater lake in India, fed by the Jhelum River.',
    difficulty: 'beginner',
  },
  {
    id: 'starter-cs-1',
    categoryId: 'cs',
    question: 'Which type of computer memory is volatile and loses its contents when power is turned off?',
    answer: 'RAM',
    options: ['ROM', 'EEPROM', 'RAM', 'Flash Memory'],
    explanation: 'Random Access Memory (RAM) is volatile primary memory used by the CPU for active programs.',
    difficulty: 'beginner',
  },
  {
    id: 'starter-cs-2',
    categoryId: 'cs',
    question: 'In MS Excel, which shortcut key inserts a new blank worksheet into a workbook?',
    answer: 'Shift + F11',
    options: ['Shift + F11', 'Ctrl + N', 'Alt + F1', 'Ctrl + W'],
    explanation: 'Shift + F11 inserts a new worksheet, whereas Ctrl + N opens a new workbook.',
    difficulty: 'intermediate',
  },
  {
    id: 'starter-science-1',
    categoryId: 'science',
    question: 'Deficiency of which vitamin causes Night Blindness (Nyctalopia)?',
    answer: 'Vitamin A',
    options: ['Vitamin A', 'Vitamin B1', 'Vitamin C', 'Vitamin D'],
    explanation: 'Vitamin A (Retinol) is required for rhodopsin synthesis in retinal rod cells.',
    difficulty: 'beginner',
  },
  {
    id: 'starter-science-2',
    categoryId: 'science',
    question: 'Which international treaty was signed in 1987 to phase out ozone-depleting CFCs?',
    answer: 'Montreal Protocol',
    options: ['Kyoto Protocol', 'Montreal Protocol', 'Paris Agreement', 'Stockholm Convention'],
    explanation: 'The Montreal Protocol (1987) protects the stratospheric ozone layer by phasing out CFCs.',
    difficulty: 'intermediate',
  },
  {
    id: 'starter-accounting-1',
    categoryId: 'accounting',
    question: 'According to the Accounting Equation, Assets equal:',
    answer: 'Liabilities + Capital',
    options: ['Liabilities + Capital', 'Liabilities - Capital', 'Capital - Liabilities', 'Revenue - Expenses'],
    explanation: 'The fundamental accounting equation states Assets = Liabilities + Owner’s Equity (Capital).',
    difficulty: 'beginner',
  },
  {
    id: 'starter-accounting-2',
    categoryId: 'accounting',
    question: 'Which Constitutional Amendment Act introduced Goods and Services Tax (GST) in India?',
    answer: '101st Amendment Act',
    options: ['100th Amendment Act', '101st Amendment Act', '102nd Amendment Act', '103rd Amendment Act'],
    explanation: 'The 101st Constitutional Amendment Act, 2016 introduced GST in India from 1 July 2017.',
    difficulty: 'intermediate',
  },
  {
    id: 'starter-grammar-1',
    categoryId: 'grammar',
    question: 'Fill in the blank with the correct preposition: "He is senior _____ me by two years."',
    answer: 'to',
    options: ['than', 'to', 'from', 'over'],
    explanation: 'Latin comparatives ending in -ior (senior, junior, superior, inferior, prior) take "to".',
    difficulty: 'beginner',
  },
  {
    id: 'starter-statistics-1',
    categoryId: 'statistics',
    question: 'Which index number satisfies both the Time Reversal Test and Factor Reversal Test?',
    answer: 'Fisher’s Ideal Index',
    options: ['Laspeyres Index', 'Paasche Index', 'Fisher’s Ideal Index', 'Bowley’s Index'],
    explanation: 'Fisher’s Ideal Index is the geometric mean of Laspeyres and Paasche indices and satisfies both tests.',
    difficulty: 'intermediate',
  },
  {
    id: 'starter-math-1',
    categoryId: 'math',
    question: 'If a finite set A has 4 elements, how many subsets does its power set P(A) contain?',
    answer: '16',
    options: ['8', '12', '16', '32'],
    explanation: 'A set with n elements has 2^n subsets in its power set. Here 2^4 = 16.',
    difficulty: 'beginner',
  },
  {
    id: 'starter-economics-1',
    categoryId: 'economics',
    question: 'Which national income aggregate is officially termed "National Income" of a country?',
    answer: 'NNP at Factor Cost',
    options: ['GDP at Market Price', 'GNP at Factor Cost', 'NNP at Factor Cost', 'NNP at Market Price'],
    explanation: 'Net National Product at Factor Cost (NNP_FC) is the official National Income.',
    difficulty: 'intermediate',
  },
  {
    id: 'starter-history-1',
    categoryId: 'history',
    question: 'In which session did the Indian National Congress adopt the "Purna Swaraj" resolution?',
    answer: 'Lahore Session, 1929',
    options: ['Calcutta Session, 1928', 'Lahore Session, 1929', 'Karachi Session, 1931', 'Surat Session, 1907'],
    explanation: 'Presided over by Jawaharlal Nehru in December 1929, the Lahore Session declared Purna Swaraj.',
    difficulty: 'beginner',
  },
  {
    id: 'starter-ca-1',
    categoryId: 'current_affairs',
    question: 'Over which river is the world’s highest railway arch bridge (359 m) constructed in Reasi district of J&K?',
    answer: 'Chenab River',
    options: ['Jhelum River', 'Chenab River', 'Tawi River', 'Ravi River'],
    explanation: 'The Chenab Rail Bridge in Reasi stands 359 meters above the Chenab riverbed on the USBRL line.',
    difficulty: 'beginner',
  },
];

// In-memory cache of dynamically loaded category question arrays
const categoryCache = new Map<CategoryId, Flashcard[]>();
const inFlightPromises = new Map<CategoryId, Promise<Flashcard[]>>();
let allLoaded = false;
let allLoadingPromise: Promise<Flashcard[]> | null = null;

/**
 * Dynamically imports a single category's question bank on demand.
 * Each import() maps to a dedicated Rollup chunk so the main bundle stays tiny.
 */
export async function loadCategoryQuestions(categoryId: CategoryId): Promise<Flashcard[]> {
  const cached = categoryCache.get(categoryId);
  if (cached) return cached;

  const existingPromise = inFlightPromises.get(categoryId);
  if (existingPromise) return existingPromise;

  const loadPromise = (async () => {
    let raw: Flashcard[] = [];
    switch (categoryId) {
      case 'general': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/general'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.GENERAL_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'general'),
        ];
        break;
      }
      case 'accounting': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/accounting'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.ACCOUNTING_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'accounting'),
        ];
        break;
      }
      case 'grammar': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/grammar'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.GRAMMAR_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'grammar'),
        ];
        break;
      }
      case 'statistics': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/statistics'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.STATISTICS_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'statistics'),
        ];
        break;
      }
      case 'math': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/math'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.MATHEMATICS_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'math'),
        ];
        break;
      }
      case 'economics': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/economics'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.ECONOMICS_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'economics'),
        ];
        break;
      }
      case 'science': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/science'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.SCIENCE_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'science'),
        ];
        break;
      }
      case 'cs': {
        const [mod, mockMod] = await Promise.all([
          import('./questions/cs'),
          import('./questions/jkssbFaaFullMockPdfQuestions'),
        ]);
        raw = [
          ...mod.CS_QUESTIONS,
          ...mockMod.JKSSB_FAA_PDF_MOCK_QUESTIONS.filter((q) => q.categoryId === 'cs'),
        ];
        break;
      }
      case 'history': {
        const mod = await import('./questions/history');
        raw = mod.HISTORY_QUESTIONS;
        break;
      }
      case 'current_affairs': {
        const mod = await import('./questions/currentAffairs');
        raw = mod.CURRENT_AFFAIRS_QUESTIONS;
        break;
      }
    }

    const valid = raw.filter(isValidFlashcard);
    categoryCache.set(categoryId, valid);
    inFlightPromises.delete(categoryId);
    return valid;
  })();

  inFlightPromises.set(categoryId, loadPromise);
  return loadPromise;
}

/**
 * Dynamically loads all categories in parallel when needed (e.g. Mock Test Hub or Deck Manager)
 */
export async function loadAllCategoryQuestions(): Promise<Flashcard[]> {
  if (allLoaded) {
    return getCachedFlashcards();
  }
  if (allLoadingPromise) {
    return allLoadingPromise;
  }

  const allCategoryIds: CategoryId[] = CATEGORIES.map((c) => c.id);
  allLoadingPromise = Promise.all(allCategoryIds.map((id) => loadCategoryQuestions(id))).then(() => {
    allLoaded = true;
    allLoadingPromise = null;
    return getCachedFlashcards();
  });

  return allLoadingPromise;
}

/**
 * Returns currently cached flashcards synchronously.
 * For any category not yet dynamically fetched, includes its starter flashcards
 * so synchronous callers always have valid questions immediately.
 */
export function getCachedFlashcards(): Flashcard[] {
  if (categoryCache.size === 0) {
    return STARTER_FLASHCARDS;
  }

  const result: Flashcard[] = [];
  for (const cat of CATEGORIES) {
    const cached = categoryCache.get(cat.id);
    if (cached && cached.length > 0) {
      result.push(...cached);
    } else {
      result.push(...STARTER_FLASHCARDS.filter((s) => s.categoryId === cat.id));
    }
  }
  return result;
}

export function isCategoryLoaded(categoryId: CategoryId | 'all'): boolean {
  if (categoryId === 'all') return allLoaded;
  return categoryCache.has(categoryId);
}

// Backwards-compatible export for any synchronous consumers
export const INITIAL_FLASHCARDS: Flashcard[] = STARTER_FLASHCARDS;
