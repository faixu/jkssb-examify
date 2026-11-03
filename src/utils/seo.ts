import { CategoryId, StudyMode } from '../types';

export interface SampleQuestionSEO {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface TopicSEOConfig {
  slug: string;
  legacySlug?: string;
  categoryId: CategoryId | 'all';
  path: string;
  title: string;
  h1: string;
  description: string;
  shortName: string;
  navAnchorText: string;
  marksWeightage: string;
  intro: string;
}

export const SITE_ORIGIN = 'https://jkssb-mcq-quiz.ai.studio';

export const TOPIC_SEO_MAP: Record<CategoryId | 'all', TopicSEOConfig> = {
  all: {
    slug: '',
    categoryId: 'all',
    path: '/',
    title: 'JKSSB Exams Free Mock Test & MCQ Quiz 2026 | FlashMind',
    h1: 'JKSSB FAA Mock Test Online Free & Account Assistant Practice Questions',
    description:
      'Revise Smarter. Retain Longer. Score Higher. Practice free JKSSB FAA mock tests, 6,290+ solved MCQs & 120-Q CBT exams. Start free test now!',
    shortName: 'All JKSSB Subjects',
    navAnchorText: 'Explore All JKSSB MCQ Practice Quizzes',
    marksWeightage: '120 Marks Full Syllabus',
    intro:
      'Revise Smarter. Retain Longer. Score Higher. Attempt a JKSSB FAA mock test online free and master 6,290+ solved JKSSB account assistant practice questions in our interactive JKSSB mock test 120 questions CBT simulator covering J&K Special GK, Accountancy, Computer Applications, Science, English, Statistics, Mathematics, and Economics.',
  },
  general: {
    slug: 'jkssb-general-knowledge-quiz',
    legacySlug: 'jk-special-gk',
    categoryId: 'general',
    path: '/jkssb-general-knowledge-quiz',
    title: 'JKSSB General Knowledge Quiz | Free J&K GK Practice MCQs',
    h1: 'JKSSB General Knowledge Quiz: J&K GK Practice Questions & Answers',
    description:
      'Practice J&K History, Geography & Reorganization Act 2019 in our JKSSB General Knowledge Quiz with instant answers. Start free GK practice now!',
    shortName: 'J&K Special GK',
    navAnchorText: 'Start J&K General Knowledge Quiz',
    marksWeightage: '30 Marks Weightage',
    intro:
      'Master the highest-scoring 30-mark section with our JKSSB General Knowledge Quiz and JKSSB account assistant practice questions. Practice 1,284+ solved MCQs on Jammu & Kashmir History, Physiography, Rivers, Lakes, Ramsar Wetlands, Hydropower Projects, and the J&K Reorganization Act 2019, or switch to a JKSSB FAA mock test online free.',
  },
  cs: {
    slug: 'jkssb-computer-applications-mcq',
    legacySlug: 'computer-fundamentals',
    categoryId: 'cs',
    path: '/jkssb-computer-applications-mcq',
    title: 'JKSSB Computer Applications MCQ | Free Online Practice',
    h1: 'JKSSB Computer Applications MCQ: Fundamentals & MS Office Quiz',
    description:
      'Solve 1,210+ JKSSB Computer Applications MCQ questions on MS Office, OS, DBMS, Networking & shortcuts with answers. Start free computer quiz now!',
    shortName: 'Computer Applications',
    navAnchorText: 'Start JKSSB Computer Applications MCQ Quiz',
    marksWeightage: '30 Marks Weightage',
    intro:
      'Prepare for the 30-mark IT section with 1,210+ solved JKSSB Computer Applications MCQ questions and JKSSB account assistant practice questions. Master Computer Generations, CPU Architecture, Input/Output Devices, MS Word, Excel, PowerPoint, Operating Systems, DBMS, and Cyber Security, or take a JKSSB FAA mock test online free.',
  },
  science: {
    slug: 'jkssb-general-science-quiz',
    legacySlug: 'general-science',
    categoryId: 'science',
    path: '/jkssb-general-science-quiz',
    title: 'JKSSB General Science Quiz | Free Physics & Bio MCQs',
    h1: 'JKSSB General Science Quiz: Physics, Chemistry & Biology MCQs',
    description:
      'Practice 1,004+ JKSSB General Science Quiz MCQs on Physics, Chemistry, Vitamins, Diseases & Ecology with answers. Start free science quiz now!',
    shortName: 'General Science',
    navAnchorText: 'Start JKSSB General Science Quiz',
    marksWeightage: '10–15 Marks Weightage',
    intro:
      'Test your scientific concepts with 1,004+ solved JKSSB General Science Quiz questions and JKSSB account assistant practice questions. Covers Newton’s Laws, Optics, Electricity, Chemical Reactions, Metals & Non-Metals, Human Nutrition, Vitamins, Communicable Diseases, and Environmental Ecology alongside our JKSSB FAA mock test online free.',
  },
  accounting: {
    slug: 'jkssb-accountancy-mock-test',
    legacySlug: 'accountancy',
    categoryId: 'accounting',
    path: '/jkssb-accountancy-mock-test',
    title: 'JKSSB Account Assistant Practice Questions | Accountancy',
    h1: 'JKSSB Account Assistant Practice Questions & Accountancy Mock Test',
    description:
      'Master JKSSB account assistant practice questions on Bookkeeping, Journal, Ledger, BRS, GST & Auditing with explanations. Start free mock test now!',
    shortName: 'Accountancy',
    navAnchorText: 'Start JKSSB Accountancy Mock Test',
    marksWeightage: '30 Marks Weightage',
    intro:
      'Ace the core 30-mark Finance section with 815+ high-yield JKSSB account assistant practice questions and our JKSSB FAA mock test online free. Practice Double Entry Bookkeeping, Accounting Equations, Journal, Ledger, Trial Balance, Bank Reconciliation Statement (BRS), Partnership Accounts, GST, and Public Financial Management System (PFMS) in our JKSSB mock test 120 questions CBT.',
  },
  grammar: {
    slug: 'jkssb-general-english-quiz',
    legacySlug: 'general-english',
    categoryId: 'grammar',
    path: '/jkssb-general-english-quiz',
    title: 'JKSSB General English Quiz | Free Grammar Practice MCQs',
    h1: 'JKSSB General English Quiz: Grammar, Voice & Vocabulary MCQs',
    description:
      'Practice 433+ JKSSB General English Quiz MCQs on Tenses, Articles, Prepositions, Active/Passive Voice & Idioms. Start free English quiz now!',
    shortName: 'General English',
    navAnchorText: 'Start JKSSB General English Quiz',
    marksWeightage: '10 Marks Weightage',
    intro:
      'Boost your accuracy in the 10-mark English section with 433+ JKSSB General English Quiz MCQs and JKSSB account assistant practice questions. Practice Tenses, Articles, Prepositions, Active & Passive Voice, Direct & Indirect Narration, Clauses, Synonyms, Antonyms, Idioms & Phrases, and Error Spotting alongside our JKSSB FAA mock test online free.',
  },
  statistics: {
    slug: 'jkssb-statistics-quiz',
    legacySlug: 'statistics',
    categoryId: 'statistics',
    path: '/jkssb-statistics-quiz',
    title: 'JKSSB Statistics Quiz | Data & Probability Practice MCQs',
    h1: 'JKSSB Statistics Quiz: Data Analysis, Index Numbers & Vital Stats',
    description:
      'Practice 372+ JKSSB Statistics Quiz MCQs on Central Tendency, Correlation, Index Numbers & Vital Statistics. Start free statistics quiz now!',
    shortName: 'Statistics',
    navAnchorText: 'Start JKSSB Statistics Quiz',
    marksWeightage: '10 Marks Weightage',
    intro:
      'Master all statistical concepts and numerical formulas with 372+ solved JKSSB Statistics Quiz questions and JKSSB account assistant practice questions. Covers Primary & Secondary Data, Measures of Central Tendency, Dispersion, Skewness, Correlation, Price Index Numbers, and Demography/Vital Statistics for your JKSSB FAA mock test online free.',
  },
  math: {
    slug: 'jkssb-mathematics-quiz',
    legacySlug: 'mathematics',
    categoryId: 'math',
    path: '/jkssb-mathematics-quiz',
    title: 'JKSSB Mathematics Quiz | Quantitative Aptitude Free MCQs',
    h1: 'JKSSB Mathematics Quiz: Quantitative Aptitude & Reasoning MCQs',
    description:
      'Practice 305+ JKSSB Mathematics Quiz MCQs on Simple/Compound Interest, Linear Equations, Sets & Probability. Start free math practice now!',
    shortName: 'Mathematics',
    navAnchorText: 'Start JKSSB Mathematics Quiz',
    marksWeightage: '10 Marks Weightage',
    intro:
      'Sharpen your calculation speed with 305+ step-by-step solved JKSSB Mathematics Quiz questions and JKSSB account assistant practice questions. Practice Simple & Compound Interest, Linear Equations, Permutations & Combinations, Binomial Theorem, Set Theory, Relations & Functions, Coordinate Geometry, Vectors, and Probability for your JKSSB mock test 120 questions CBT.',
  },
  economics: {
    slug: 'jkssb-economics-quiz',
    legacySlug: 'economics',
    categoryId: 'economics',
    path: '/jkssb-economics-quiz',
    title: 'JKSSB General Economics Quiz | Fiscal & RBI Practice MCQs',
    h1: 'JKSSB General Economics Quiz: National Income & RBI Policy MCQs',
    description:
      'Practice 467+ JKSSB General Economics Quiz MCQs on GDP, RBI Monetary Policy, Fiscal Deficit & Planning. Start free economics quiz now!',
    shortName: 'Economics',
    navAnchorText: 'Start JKSSB Economics Quiz',
    marksWeightage: '10 Marks Weightage',
    intro:
      'Master microeconomics and Indian macroeconomics with 467+ solved JKSSB General Economics Quiz questions and JKSSB account assistant practice questions. Covers Theory of Consumer Demand, Laws of Production, Market Structures, National Income Accounting (GDP, GNP, NNP), RBI Monetary Policy, Fiscal Policy, and Economic Reforms (1991) for your JKSSB FAA mock test online free.',
  },
  history: {
    slug: 'jkssb-modern-history-quiz',
    legacySlug: 'history',
    categoryId: 'history',
    path: '/jkssb-modern-history-quiz',
    title: 'JKSSB Modern History Quiz | Indian Freedom Struggle MCQs',
    h1: 'JKSSB Modern History Quiz: Indian Freedom Struggle MCQs & Answers',
    description:
      'Practice 216+ JKSSB Modern History Quiz MCQs on Revolt of 1857, INC Sessions, Gandhian Movements & Viceroys. Start free history quiz now!',
    shortName: 'Modern History',
    navAnchorText: 'Start JKSSB Modern History Quiz',
    marksWeightage: 'High-Yield GK Section',
    intro:
      'Revise India’s struggle for independence with 216+ curated JKSSB Modern History Quiz questions and JKSSB account assistant practice questions. Covers the Revolt of 1857, Socio-Religious Reform Movements, Indian National Congress Sessions, Swadeshi Movement, Non-Cooperation, Civil Disobedience, Quit India Movement, and Cabinet Mission.',
  },
  current_affairs: {
    slug: 'jkssb-current-affairs-quiz',
    legacySlug: 'current-affairs',
    categoryId: 'current_affairs',
    path: '/jkssb-current-affairs-quiz',
    title: 'JKSSB Current Affairs Quiz | J&K & National Practice MCQs',
    h1: 'JKSSB Current Affairs Quiz: J&K UT Schemes, GI Tags & National Events',
    description:
      'Practice 190+ JKSSB Current Affairs Quiz MCQs on J&K GI Tags, Chenab Rail Bridge, Schemes & Sports. Start free current affairs quiz now!',
    shortName: 'Current Affairs',
    navAnchorText: 'Start JKSSB Current Affairs Quiz',
    marksWeightage: 'High-Yield GK Section',
    intro:
      'Stay updated with 190+ JKSSB Current Affairs Quiz MCQs covering Jammu & Kashmir UT infrastructure projects (Chenab Rail Bridge, Zojila Tunnel, USBRL), GI-tagged products of J&K (Basohli Pashmina, Bhaderwah Rajmash, Ramban Sulai Honey, Kashmir Saffron), National Schemes, ISRO Missions, and Sports Awards.',
  },
};

export const MODE_SEO_MAP: Record<Exclude<StudyMode, 'quiz'>, { path: string; legacyPaths?: string[]; title: string; h1: string; description: string }> = {
  mock: {
    path: '/jkssb-faa-mock-test',
    legacyPaths: ['/mock-tests'],
    title: 'JKSSB FAA Mock Test Online Free | 120 Questions CBT',
    h1: 'JKSSB FAA Mock Test Online Free: 120 Questions CBT Exam Simulator',
    description:
      'Attempt a JKSSB FAA mock test online free with our JKSSB mock test 120 questions CBT simulator and -0.25 marking. Start your free exam now!',
  },
  flip: {
    path: '/flashcards',
    title: 'JKSSB Flashcards Online Free | Spaced Repetition Decks',
    h1: 'JKSSB Spaced Repetition Flashcards & Active Recall Study Decks',
    description:
      'Revise 6,290+ JKSSB account assistant practice questions using 5-box Leitner spaced repetition flashcards. Start free flashcard review now!',
  },
  speed: {
    path: '/speed-rush',
    title: 'JKSSB Speed Rush 60s Quiz | Rapid Recall Practice MCQs',
    h1: 'JKSSB Speed Rush 60-Second Rapid Recall Quiz Challenge',
    description:
      'Test your reflex speed on JKSSB General Knowledge, Computer & Science MCQs in our 60-second Speed Rush challenge. Play free rapid quiz now!',
  },
  stats: {
    path: '/study-progress',
    title: 'JKSSB Study Progress & Analytics | Mock Test Scorecard',
    h1: 'JKSSB Exam Preparation Analytics & Mastery Progress Tracker',
    description:
      'Track your JKSSB FAA mock test online free accuracy, subject-wise mastery, daily study streaks & Leitner box progress. View your stats now!',
  },
  decks: {
    path: '/custom-decks',
    title: 'JKSSB Custom Question Decks | Create & Practice MCQs',
    h1: 'JKSSB Custom Question Bank & Study Deck Manager',
    description:
      'Create, import, export, and organize custom JKSSB account assistant practice questions and flashcard decks. Manage your study decks now!',
  },
  drive: {
    path: '/cloud-backup',
    title: 'JKSSB Cloud Backup & Sync | Save Mock Test Progress',
    h1: 'JKSSB Study Progress Cloud Backup & Google Drive Sync',
    description:
      'Back up and synchronize your JKSSB mock test scores, streaks, and custom question decks across devices with Google Drive. Sync your data now!',
  },
  chat: {
    path: '/ai-mentor',
    title: 'JKSSB AI Doubt Solver | Instant MCQ Explanations',
    h1: 'JKSSB AI Doubt Solver & Step-by-Step Exam Mentor',
    description:
      'Get instant step-by-step explanations for JKSSB Accountancy, Mathematics, Statistics & J&K GK questions. Ask your exam doubt free now!',
  },
  current_affairs: {
    path: '/current-affairs',
    title: 'Chinar Current Affairs MCQ Bank | J&K, National & Global MCQs',
    h1: 'Chinar Current Affairs 2-Tier MCQ Bank (J&K, India & World)',
    description:
      'Practice 2-tier filtered Current Affairs MCQs for JKSSB, JKPSC & UPSC covering J&K UT Schemes, Infrastructure, National Policies, ISRO, and Global Summits.',
  },
};

export function resolveRouteFromLocation(pathname: string, search: string): { mode: StudyMode; category: CategoryId | 'all' } {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  const params = new URLSearchParams(search);
  const queryTopic = params.get('topic') as CategoryId | null;

  if (cleanPath === '/jkssb-faa-mock-test' || cleanPath === '/mock-tests') {
    return { mode: 'mock', category: 'all' };
  }
  if (cleanPath === '/flashcards') {
    return { mode: 'flip', category: 'all' };
  }
  if (cleanPath === '/speed-rush') {
    return { mode: 'speed', category: 'all' };
  }
  if (cleanPath === '/study-progress') {
    return { mode: 'stats', category: 'all' };
  }
  if (cleanPath === '/custom-decks') {
    return { mode: 'decks', category: 'all' };
  }
  if (cleanPath === '/cloud-backup') {
    return { mode: 'drive', category: 'all' };
  }
  if (cleanPath === '/ai-mentor') {
    return { mode: 'chat', category: 'all' };
  }
  if (cleanPath === '/current-affairs') {
    return { mode: 'current_affairs', category: 'current_affairs' };
  }

  // Match canonical top-level topic landing pages (/jkssb-general-knowledge-quiz, /jkssb-accountancy-mock-test, etc.)
  const rootSlug = cleanPath.replace(/^\//, '');
  for (const config of Object.values(TOPIC_SEO_MAP)) {
    if (config.categoryId !== 'all' && (config.slug === rootSlug || config.legacySlug === rootSlug)) {
      return { mode: 'quiz', category: config.categoryId };
    }
  }

  // Match legacy /quizzes/<slug> routes for full backward compatibility
  if (cleanPath.startsWith('/quizzes/')) {
    const slug = cleanPath.replace('/quizzes/', '').trim();
    for (const config of Object.values(TOPIC_SEO_MAP)) {
      if (config.slug === slug || config.legacySlug === slug || config.categoryId === slug) {
        return { mode: 'quiz', category: config.categoryId };
      }
    }
  }

  if (queryTopic && queryTopic in TOPIC_SEO_MAP) {
    return { mode: 'quiz', category: queryTopic };
  }

  return { mode: 'quiz', category: 'all' };
}

export function getCanonicalSEO(mode: StudyMode, category: CategoryId | 'all') {
  if (mode !== 'quiz') {
    const modeConfig = MODE_SEO_MAP[mode];
    const baseTopic = TOPIC_SEO_MAP[category] || TOPIC_SEO_MAP.all;
    return {
      path: modeConfig.path,
      canonicalUrl: `${SITE_ORIGIN}${modeConfig.path}`,
      title: modeConfig.title,
      h1: modeConfig.h1,
      description: modeConfig.description,
      topic: baseTopic,
    };
  }

  const topic = TOPIC_SEO_MAP[category] || TOPIC_SEO_MAP.all;
  return {
    path: topic.path,
    canonicalUrl: `${SITE_ORIGIN}${topic.path}`,
    title: topic.title,
    h1: topic.h1,
    description: topic.description,
    topic,
  };
}
