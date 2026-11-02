import { CategoryId, StudyMode } from '../types';

export interface SampleQuestionSEO {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface TopicSEOConfig {
  categoryId: CategoryId | 'all';
  slug: string;
  path: string;
  navAnchorText: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  intro: string;
  marksWeightage: string;
  syllabusTopics: string[];
  studyNotes: string[];
  sampleQuestions: SampleQuestionSEO[];
}

export const TOPIC_SEO_MAP: Record<CategoryId | 'all', TopicSEOConfig> = {
  all: {
    categoryId: 'all',
    slug: 'all-subjects',
    path: '/',
    navAnchorText: 'Start Complete JKSSB All-Subject Quiz',
    shortName: 'All JKSSB Subjects',
    title: 'JKSSB MCQ Practice Quiz | Mock Tests & General Knowledge Prep',
    description:
      'Practice free JKSSB multiple-choice quizzes covering General Knowledge, J&K History, Reasoning, Computer Fundamentals, and General Line exams with instant answers.',
    h1: 'JKSSB MCQ Practice Quiz & General Line Exam Preparation Portal',
    subtitle: '6,290+ Solved MCQs, 5 Full 120-Minute CBT Mock Tests & Topic-Wise Study Notes',
    intro:
      'Prepare for Jammu and Kashmir Services Selection Board (JKSSB) General Line, Graduate Level, Finance Accounts Assistant (FAA), Junior Assistant, Patwari, and Constable examinations with instant answer explanations and negative marking simulation.',
    marksWeightage: '120 Marks Complete Syllabus',
    syllabusTopics: [
      'General Knowledge with Special Reference to J&K UT (History, Geography, Economy & Reorganisation Act 2019)',
      'Computer Fundamentals, MS Office, Operating Systems & Internet Applications',
      'General Science (Physics, Chemistry, Biology, Ecology & Environmental Science)',
      'Accountancy, Book Keeping, Taxation (GST), PFMS & Financial Audit',
      'General English Grammar, Comprehension, Narration & Active/Passive Voice',
      'Mathematics, Statistics, Data Tabulation, CPI/WPI Index Numbers & Probability',
      'General Economics, Fiscal/Monetary Policy, RBI & National Income',
      'Current Affairs of Jammu & Kashmir, National Polity & Sports (2025–2026)',
    ],
    studyNotes: [
      'JKSSB OMR & CBT exams carry 120 multiple-choice questions for 120 marks with a 0.25 mark penalty for each wrong answer.',
      'The J&K Reorganisation Act, 2019 received Presidential assent on 9 August 2019 and came into effect on 31 October 2019, reorganizing the state into two Union Territories: Jammu & Kashmir (with a Legislature) and Ladakh (without a Legislature).',
      'Focusing on high-weightage sections like J&K General Awareness, Computer Applications, and General Science builds a strong core across all JKSSB General Line exams.',
    ],
    sampleQuestions: [
      {
        question: 'When did the Jammu and Kashmir Reorganisation Act, 2019 come into effect?',
        options: ['5 August 2019', '9 August 2019', '31 October 2019', '26 January 2020'],
        answer: '31 October 2019',
        explanation:
          'The J&K Reorganisation Bill was passed in August 2019, received Presidential assent on 9 August 2019, and officially came into force on 31 October 2019 (National Unity Day).',
      },
      {
        question: 'Which lake in Jammu and Kashmir is the largest freshwater lake in India?',
        options: ['Dal Lake', 'Wular Lake', 'Mansbal Lake', 'Pangong Tso'],
        answer: 'Wular Lake',
        explanation:
          'Wular Lake in Bandipora district is the largest freshwater lake in India, fed by the Jhelum River and formed by tectonic activity.',
      },
      {
        question: 'In MS Excel, which shortcut key is used to insert a new worksheet in a workbook?',
        options: ['Shift + F11', 'Ctrl + N', 'Alt + F1', 'Ctrl + F11'],
        answer: 'Shift + F11',
        explanation:
          'Pressing Shift + F11 immediately inserts a new blank worksheet into the current Excel workbook, whereas Ctrl + N opens a new workbook.',
      },
    ],
  },
  general: {
    categoryId: 'general',
    slug: 'jk-special-gk',
    path: '/quizzes/jk-special-gk',
    navAnchorText: 'Start J&K Geography & GK Quiz',
    shortName: 'J&K Special GK',
    title: 'JKSSB J&K GK Quiz: Practice Questions & Answers',
    description:
      'Test your knowledge with targeted JKSSB GK MCQs on Jammu and Kashmir geography, historical timelines, J&K Reorganisation Act 2019, rivers, lakes, and economy.',
    h1: 'JKSSB General Knowledge (J&K UT Special) Practice Test',
    subtitle: 'Jammu & Kashmir History, Geography, Rivers, Lakes, Culture & Reorganisation Act 2019',
    intro:
      'Master the highest-scoring section in all JKSSB General Line exams. This module covers J&K physical divisions, hydro-electric projects, drainage systems, folk dances, tourist destinations, and constitutional provisions.',
    marksWeightage: '20–30 Marks in JKSSB Exams',
    syllabusTopics: [
      'History, Economy, and Culture of Jammu & Kashmir UT',
      'Geography: Rivers (Jhelum, Chenab, Indus, Ravi, Tawi), Lakes, Glaciers & Mountain Passes',
      'J&K Reorganisation Act, 2019 (Sections, Schedules, Legislative Assembly & UT Administration)',
      'Important Hydroelectric Power Projects (Baglihar, Salal, Dul Hasti, Kishanganga, Ratle)',
      'Flora, Fauna, National Parks (Dachigam, Hemis, Kishtwar, Kazinag) & Wildlife Sanctuaries',
      'Centrally Sponsored Schemes, Demography, Census 2011 & Important Tourist Destinations',
    ],
    studyNotes: [
      'Dachigam National Park in Srinagar is famous for the endangered Hangul (Kashmir Stag), the UT animal of Jammu & Kashmir.',
      'The Chenab River (ancient name Asikni) originates from the confluence of Chandra and Bhaga rivers at Tandi in Lahaul and Spiti (Himachal Pradesh) and hosts major projects like Salal, Baglihar, Dul Hasti, Ratle, and Pakal Dul.',
      'Under Section 14 of the J&K Reorganisation Act 2019 (following delimitation), the J&K Legislative Assembly has 90 territorial constituencies (43 in Jammu and 47 in Kashmir).',
    ],
    sampleQuestions: [
      {
        question: 'What was the ancient Sanskrit name of the Jhelum River mentioned in the Rigveda and Rajatarangini?',
        options: ['Asikni', 'Vitasta', 'Parushni', 'Vipasha'],
        answer: 'Vitasta',
        explanation:
          'The Jhelum River was known as Vitasta in ancient Sanskrit texts and Hydaspes to the ancient Greeks. It originates from Verinag Spring in Anantnag.',
      },
      {
        question: 'Which Schedule of the J&K Reorganisation Act, 2019 lists the Central Laws made applicable to the Union Territory of Jammu & Kashmir?',
        options: ['Third Schedule', 'Fourth Schedule', 'Fifth Schedule', 'First Schedule'],
        answer: 'Fifth Schedule',
        explanation:
          'The Fifth Schedule of the J&K Reorganisation Act, 2019 contains the tables of Central Laws made applicable and state laws repealed or retained in the UT of J&K.',
      },
      {
        question: 'Who authored the famous historical chronicle of Kashmir, "Rajatarangini", in 1148–1150 CE?',
        options: ['Kalhana', 'Bilhana', 'Jonaraja', 'Abul Fazl'],
        answer: 'Kalhana',
        explanation:
          'Pandit Kalhana wrote Rajatarangini ("River of Kings") in Sanskrit verse during the reign of King Jayasimha of the Lohara dynasty.',
      },
    ],
  },
  cs: {
    categoryId: 'cs',
    slug: 'computer-fundamentals',
    path: '/quizzes/computer-fundamentals',
    navAnchorText: 'Start Computer Fundamentals Quiz',
    shortName: 'Computer Fundamentals',
    title: 'JKSSB Computer Fundamentals Quiz: Practice Questions & Answers',
    description:
      'Practice JKSSB Computer Applications MCQs on Hardware, Software, Operating Systems, MS Word, Excel, PowerPoint, Internet, Cybersecurity, and E-Governance.',
    h1: 'JKSSB Computer Fundamentals & Information Technology Practice Test',
    subtitle: 'Hardware, Software, Operating Systems, MS Office Shortcuts, Networking & IT in Governance',
    intro:
      'Computer Awareness is a decisive section across JKSSB Junior Assistant, Patwari, FAA, and Graduate Level exams. Practice high-yield questions on CPU architecture, memory hierarchy, MS Office shortcuts, and cybersecurity.',
    marksWeightage: '15–30 Marks in JKSSB Exams',
    syllabusTopics: [
      'Introduction to Computer Architecture, Generations of Computers & CPU Components (ALU, CU, Registers)',
      'Input & Output Devices, Printers (Impact vs Non-Impact), Scanners & Pointing Devices',
      'Memory Hierarchy: Cache, RAM (SRAM/DRAM), ROM (PROM, EPROM, EEPROM) & Secondary Storage',
      'System Software vs Application Software, Open Source Technologies & Operating Systems',
      'MS Office Suite: MS Word, MS Excel Formulas & Shortcuts, MS PowerPoint & MS Access DBMS',
      'Computer Networks (LAN, MAN, WAN, OSI Model), Internet Protocols (TCP/IP, HTTP, DNS), Viruses & Antivirus',
    ],
    studyNotes: [
      'Cache memory (L1/L2/L3) is built using SRAM (Static RAM) and sits between the CPU registers and main RAM to minimize memory access latency.',
      'First Generation computers (1940–1956) used Vacuum Tubes; Second Generation used Transistors; Third Generation used Integrated Circuits (ICs); Fourth Generation introduced Microprocessors (VLSI).',
      'In MS Word, Ctrl + J justifies text, Ctrl + K inserts a hyperlink, F7 runs spell check, and Shift + F7 opens the Thesaurus.',
    ],
    sampleQuestions: [
      {
        question: 'Which type of memory is volatile and loses its stored contents when power is turned off?',
        options: ['ROM', 'EEPROM', 'RAM', 'Flash Memory'],
        answer: 'RAM',
        explanation:
          'Random Access Memory (RAM) is volatile read/write memory that requires continuous electric power to retain data.',
      },
      {
        question: 'Which protocol is responsible for translating human-readable domain names into IP addresses?',
        options: ['DHCP', 'FTP', 'DNS', 'SMTP'],
        answer: 'DNS',
        explanation:
          'Domain Name System (DNS) acts as the phonebook of the Internet, resolving domain names like google.com into numerical IP addresses.',
      },
      {
        question: 'Which generation of computers introduced Integrated Circuits (ICs) invented by Jack Kilby?',
        options: ['First Generation', 'Second Generation', 'Third Generation', 'Fourth Generation'],
        answer: 'Third Generation',
        explanation:
          'Third Generation computers (1964–1971) replaced discrete transistors with Integrated Circuits (ICs) on silicon chips.',
      },
    ],
  },
  science: {
    categoryId: 'science',
    slug: 'general-science',
    path: '/quizzes/general-science',
    navAnchorText: 'Start General Science Quiz',
    shortName: 'General Science',
    title: 'JKSSB General Science Quiz: Practice Questions & Answers',
    description:
      'Practice JKSSB General Science MCQs covering Physics, Chemistry, Biology, Vitamins & Diseases, Ecosystems, Ozone Layer, and Renewable Energy.',
    h1: 'JKSSB General Science & Environmental Ecology Practice Test',
    subtitle: 'Physics Laws, Chemical Reactions, Human Nutrition, Vitamins, Diseases & Biodiversity',
    intro:
      'Strengthen your General Science score with targeted NCERT-aligned MCQs covering everyday physics, chemical equations, metals and non-metals, plant and human biology, vitamin deficiency diseases, and ecology.',
    marksWeightage: '10–15 Marks in JKSSB Exams',
    syllabusTopics: [
      'Physics: Newton’s Laws of Motion, Gravitation, Work, Energy, Power & Ohm’s Law (V = IR)',
      'Chemistry: Chemical Equations, Acids, Bases & Salts, Metals & Non-Metals, Alloys & Carbon Compounds',
      'Biology: Nutrition, Respiration & Transportation in Plants and Animals',
      'Health & Hygiene: Communicable vs Non-Communicable Diseases, Vitamins & Deficiency Disorders',
      'Energy Resources: Conventional vs Non-Conventional (Solar, Wind, Geothermal, Nuclear) Energy',
      'Environment: Ecosystems, Food Chains, 10% Energy Law, Ozone Depletion & Greenhouse Gases',
    ],
    studyNotes: [
      'Fat-soluble vitamins are Vitamins A, D, E, and K (stored in the liver and adipose tissue), while Water-soluble vitamins are Vitamin B-complex and Vitamin C.',
      'Lindeman’s 10% Law states that only about 10% of energy is transferred from one trophic level to the next in an ecological food chain.',
      'Electric power is given by P = VI = I²R = V²/R, and commercial electrical energy is measured in kilowatt-hours (1 kWh = 3.6 × 10⁶ Joules).',
    ],
    sampleQuestions: [
      {
        question: 'Deficiency of which vitamin causes Night Blindness (Nyctalopia)?',
        options: ['Vitamin A (Retinol)', 'Vitamin B1 (Thiamine)', 'Vitamin C (Ascorbic Acid)', 'Vitamin D (Calciferol)'],
        answer: 'Vitamin A (Retinol)',
        explanation:
          'Vitamin A (Retinol) is essential for synthesizing rhodopsin in the rod cells of the retina; its deficiency causes Night Blindness and Xerophthalmia.',
      },
      {
        question: 'Which international protocol was signed in 1987 to phase out Ozone Depleting Substances (CFCs)?',
        options: ['Kyoto Protocol', 'Montreal Protocol', 'Paris Agreement', 'Basel Convention'],
        answer: 'Montreal Protocol',
        explanation:
          'The Montreal Protocol on Substances that Deplete the Ozone Layer was signed on 16 September 1987 to phase out chlorofluorocarbons (CFCs).',
      },
    ],
  },
  accounting: {
    categoryId: 'accounting',
    slug: 'accountancy',
    path: '/quizzes/accountancy',
    navAnchorText: 'Start Accountancy & Book Keeping Quiz',
    shortName: 'Accountancy',
    title: 'JKSSB Accountancy & Book Keeping Quiz: Practice MCQs & Answers',
    description:
      'Practice JKSSB Accountancy MCQs on Double Entry System, Golden Rules, Journal, Ledger, BRS, Trial Balance, Partnership, GST, and PFMS.',
    h1: 'JKSSB Accountancy & Book Keeping Practice Test',
    subtitle: 'Accounting Equation, BRS, Partnership, Trial Balance, Final Accounts, GST & PFMS',
    intro:
      'Comprehensive MCQ practice for JKSSB Finance Accounts Assistant (FAA) and Audit exams covering fundamental accounting principles, bank reconciliation, partnership ratios, cost accounting, and Public Financial Management System (PFMS).',
    marksWeightage: '30 Marks (FAA & Finance Exams)',
    syllabusTopics: [
      'Accounting Concepts, Conventions, Accounting Equation (Assets = Liabilities + Capital) & Voucher Approach',
      'Double Entry System, Golden Rules of Accounting, Journalizing, Ledger Posting & Cash Book',
      'Bank Reconciliation Statement (BRS), Trial Balance & Rectification of Errors',
      'Trading Account, Profit & Loss Account, Balance Sheet & Depreciation Accounting',
      'Partnership Accounts: Admission, Retirement, Death & Profit-Sharing Ratios',
      'Public Financial Management System (PFMS), Direct & Indirect Taxes (GST), Social Accounting & Audit',
    ],
    studyNotes: [
      'Golden Rules of Accounting: Personal Account -> Debit the Receiver, Credit the Giver; Real Account -> Debit what comes in, Credit what goes out; Nominal Account -> Debit all expenses/losses, Credit all incomes/gains.',
      'Goods and Services Tax (GST) was introduced in India via the 101st Constitutional Amendment Act, 2016 and implemented on 1 July 2017.',
    ],
    sampleQuestions: [
      {
        question: 'According to the Accounting Equation, if Assets are ₹5,00,000 and Liabilities are ₹1,80,000, what is the Owner’s Capital?',
        options: ['₹6,80,000', '₹3,20,000', '₹5,00,000', '₹1,80,000'],
        answer: '₹3,20,000',
        explanation:
          'Using Capital = Assets − Liabilities: ₹5,00,000 − ₹1,80,000 = ₹3,20,000.',
      },
      {
        question: 'Which Constitutional Amendment Act introduced the Goods and Services Tax (GST) in India?',
        options: ['100th Amendment Act', '101st Amendment Act', '102nd Amendment Act', '103rd Amendment Act'],
        answer: '101st Amendment Act',
        explanation:
          'The 101st Constitutional Amendment Act, 2016 inserted Articles 246A, 269A, and 279A (GST Council) into the Indian Constitution.',
      },
    ],
  },
  grammar: {
    categoryId: 'grammar',
    slug: 'general-english',
    path: '/quizzes/general-english',
    navAnchorText: 'Start General English & Grammar Quiz',
    shortName: 'General English',
    title: 'JKSSB General English & Grammar Quiz: Practice Questions & Answers',
    description:
      'Practice JKSSB General English MCQs on Tenses, Articles, Prepositions, Active & Passive Voice, Direct/Indirect Narration, Synonyms, Antonyms, and Idioms.',
    h1: 'JKSSB General English & Grammar Practice Test',
    subtitle: 'Tenses, Active/Passive Voice, Narration, Prepositions, Articles, Idioms & Vocabulary',
    intro:
      'Boost your accuracy in the General English section required in every JKSSB exam. Practice rule-based questions on verb tenses, voice transformation, reported speech, clauses, and high-frequency vocabulary.',
    marksWeightage: '10–20 Marks in JKSSB Exams',
    syllabusTopics: [
      'Tenses, Subject-Verb Agreement & Conditional Sentences',
      'Active and Passive Voice Transformation Rules',
      'Direct and Indirect Speech (Narration)',
      'Articles (A, An, The), Determiners, Modals & Prepositions',
      'Clauses (Noun, Adjective, Adverb Clauses) & Sentence Rearrangement (Para Jumbles)',
      'Synonyms, Antonyms, Homophones, One-Word Substitutions & Idioms/Phrases',
    ],
    studyNotes: [
      'When converting Direct Speech to Indirect Speech, universal truths and habitual facts remain in the Present Tense even if the reporting verb is in the Past Tense.',
      'Use "an" before words that begin with a vowel sound (e.g., "an honest man", "an hour", "an MLA") and "a" before words beginning with a consonant sound (e.g., "a university", "a European").',
    ],
    sampleQuestions: [
      {
        question: 'Choose the correct passive voice of: "The committee is reviewing the new syllabus."',
        options: [
          'The new syllabus was being reviewed by the committee.',
          'The new syllabus is being reviewed by the committee.',
          'The new syllabus has been reviewed by the committee.',
          'The new syllabus is reviewed by the committee.',
        ],
        answer: 'The new syllabus is being reviewed by the committee.',
        explanation:
          'Present Continuous Active (is/am/are + V-ing) converts to Passive using (is/am/are + being + V3).',
      },
      {
        question: 'Fill in the blank with the appropriate preposition: "He is senior _____ me by three years."',
        options: ['than', 'to', 'from', 'over'],
        answer: 'to',
        explanation:
          'Latin comparative adjectives ending in -ior (senior, junior, superior, inferior, prior, prefer) always take the preposition "to" instead of "than".',
      },
    ],
  },
  statistics: {
    categoryId: 'statistics',
    slug: 'statistics',
    path: '/quizzes/statistics',
    navAnchorText: 'Start Statistics & Demography Quiz',
    shortName: 'Statistics',
    title: 'JKSSB Statistics & Data Analysis Quiz: Practice Questions & Answers',
    description:
      'Practice JKSSB Statistics MCQs on Primary & Secondary Data, Central Tendency (Mean, Median, Mode), Probability, Index Numbers (Laspeyres, Paasche, Fisher), and Demography.',
    h1: 'JKSSB Statistics, Index Numbers & Demography Practice Test',
    subtitle: 'Data Collection, Central Tendency, Probability, CPI/WPI Index Numbers & Vital Statistics',
    intro:
      'Master statistical formulas and conceptual MCQs for JKSSB Finance, Statistical Assistant, and Graduate Level exams, including Fisher’s Ideal Index, vital fertility rates, and census demography.',
    marksWeightage: '10 Marks in JKSSB Exams',
    syllabusTopics: [
      'Primary and Secondary Data Collection Methods & Questionnaire Design',
      'Classification, Tabulation & Frequency Distribution of Data',
      'Measures of Central Tendency: Arithmetic Mean, Geometric Mean, Harmonic Mean, Median & Mode',
      'Theory of Probability, Permutations & Theory of Attributes',
      'Index Numbers: Laspeyres, Paasche, Fisher’s Ideal Index, Time & Factor Reversal Tests, WPI & CPI',
      'Demography, Census 2011 & Vital Statistics (CBR, CDR, GFR, TFR, IMR)',
    ],
    studyNotes: [
      'For any positive dataset, Arithmetic Mean (AM) ≥ Geometric Mean (GM) ≥ Harmonic Mean (HM), and for two numbers, GM² = AM × HM.',
      'Fisher’s Ideal Index Number is the geometric mean of Laspeyres and Paasche index numbers and satisfies both the Time Reversal Test and Factor Reversal Test.',
    ],
    sampleQuestions: [
      {
        question: 'Which index number satisfies both the Time Reversal Test and the Factor Reversal Test?',
        options: ['Laspeyres Index', 'Paasche Index', 'Fisher’s Ideal Index', 'Marshall-Edgeworth Index'],
        answer: 'Fisher’s Ideal Index',
        explanation:
          'Irving Fisher’s Index is the geometric mean of Laspeyres and Paasche indices and uniquely satisfies both Time Reversal and Factor Reversal tests.',
      },
    ],
  },
  math: {
    categoryId: 'math',
    slug: 'mathematics',
    path: '/quizzes/mathematics',
    navAnchorText: 'Start Mathematics & Aptitude Quiz',
    shortName: 'Mathematics',
    title: 'JKSSB Mathematics & Quantitative Aptitude Quiz: Practice MCQs',
    description:
      'Practice JKSSB Mathematics MCQs covering Simple & Compound Interest, Linear Equations, Matrices & Determinants, Set Theory, Permutations, Limits, and Probability.',
    h1: 'JKSSB Mathematics & Quantitative Aptitude Practice Test',
    subtitle: 'Interest, Linear Equations, Set Theory, Matrices, Permutations, Limits & Derivatives',
    intro:
      'Step-by-step quantitative and applied mathematics problems tailored for JKSSB exams, with shortcut formulas and clear explanations.',
    marksWeightage: '10–15 Marks in JKSSB Exams',
    syllabusTopics: [
      'Simple Interest, Compound Interest, Percentage & Profit/Loss',
      'Linear Equations in Two Variables, Ratio & Proportion',
      'Set Theory, Relations and Functions',
      'Permutations, Combinations & Binomial Theorem',
      'Matrices and Determinants (Singular Matrix, Inverse, Transpose)',
      'Limits, Continuity, Derivatives & 3D Coordinate Geometry / Vectors',
    ],
    studyNotes: [
      'If a set A has n elements, then its Power Set P(A) contains 2ⁿ subsets, and the number of proper subsets is 2ⁿ − 1.',
      'The difference between Compound Interest and Simple Interest on principal P for 2 years at rate R% per annum is P × (R / 100)².',
    ],
    sampleQuestions: [
      {
        question: 'If a set A has 4 elements, how many elements does its power set P(A) contain?',
        options: ['8', '12', '16', '32'],
        answer: '16',
        explanation:
          'The number of elements in the power set of a set with n elements is 2ⁿ. Here, 2⁴ = 16.',
      },
    ],
  },
  economics: {
    categoryId: 'economics',
    slug: 'economics',
    path: '/quizzes/economics',
    navAnchorText: 'Start General Economics Quiz',
    shortName: 'General Economics',
    title: 'JKSSB General Economics Quiz: Practice Questions & Answers',
    description:
      'Practice JKSSB Economics MCQs on Demand & Elasticity, Indifference Curves, National Income (GDP, GNP), Fiscal & Monetary Policy, RBI, and 1991 Economic Reforms.',
    h1: 'JKSSB General Economics & Indian Economy Practice Test',
    subtitle: 'Microeconomics, National Income, RBI Monetary Policy, Fiscal Policy & LPG Reforms 1991',
    intro:
      'Prepare for the Economics section of JKSSB exams with conceptual questions on consumer equilibrium, market structures, inflation control, repo rate, and Indian economic planning.',
    marksWeightage: '10 Marks in JKSSB Exams',
    syllabusTopics: [
      'Introduction to Microeconomics, Demand Analysis & Elasticity of Demand',
      'Consumer Equilibrium using Utility & Indifference Curve Analysis',
      'Laws of Production, Cost Curves & Pricing under Perfect Competition, Monopoly & Oligopoly',
      'Concept of Factor Pricing & Ricardian Theory of Rent',
      'National Income Aggregates (GDP, GNP, NNP at Market Price and Factor Cost)',
      'Fiscal Policy, Monetary Policy, Role of RBI & 1991 Economic Reforms (LPG)',
    ],
    studyNotes: [
      'Indifference curves slope downward from left to right, are convex to the origin due to Diminishing Marginal Rate of Substitution (MRS), and two indifference curves can never intersect.',
      'Net National Product at Factor Cost (NNP_FC) is officially known as the National Income of a country.',
    ],
    sampleQuestions: [
      {
        question: 'Which aggregate represents the official "National Income" of India?',
        options: [
          'GDP at Market Price',
          'GNP at Factor Cost',
          'NNP at Factor Cost',
          'NNP at Market Price',
        ],
        answer: 'NNP at Factor Cost',
        explanation:
          'Net National Product at Factor Cost (NNP at FC) measures the net value of goods and services produced by normal residents after deducting depreciation and net indirect taxes.',
      },
    ],
  },
  history: {
    categoryId: 'history',
    slug: 'history',
    path: '/quizzes/history',
    navAnchorText: 'Start Modern History & Freedom Struggle Quiz',
    shortName: 'Modern History',
    title: 'JKSSB Modern History & Indian Freedom Struggle Quiz: Practice MCQs',
    description:
      'Practice JKSSB History MCQs on the Revolt of 1857, Indian National Congress Sessions, Gandhian Movements, Socio-Religious Reforms, and Governor-Generals.',
    h1: 'JKSSB Modern Indian History & Freedom Movement Practice Test',
    subtitle: 'Revolt of 1857, INC Sessions, Gandhian Era, Social Reformers & Constitutional Milestones',
    intro:
      'High-yield Modern History MCQs covering the Indian National Movement (1857–1947), major acts, revolutionary organizations, and historical events frequently asked in JKSSB exams.',
    marksWeightage: '5–10 Marks in JKSSB Exams',
    syllabusTopics: [
      'Advent of Europeans & British Expansion in India',
      'Revolt of 1857: Leaders, Centers & Causes',
      'Socio-Religious Reform Movements (Brahmo Samaj, Arya Samaj, Aligarh & Ramakrishna Mission)',
      'Formation of Indian National Congress (1885), Moderates vs Extremists & Partition of Bengal (1905)',
      'Gandhian Mass Movements: Non-Cooperation (1920), Civil Disobedience (1930) & Quit India (1942)',
      'Subhas Chandra Bose, INA, Cabinet Mission & Indian Independence Act 1947',
    ],
    studyNotes: [
      'The Indian National Congress was founded in December 1885 by A.O. Hume, with W.C. Bonnerjee presiding over the first session in Bombay attended by 72 delegates.',
      'The Quit India Resolution was passed on 8 August 1942 at Gowalia Tank Maidan in Bombay, where Mahatma Gandhi gave the call "Do or Die".',
    ],
    sampleQuestions: [
      {
        question: 'In which session did the Indian National Congress pass the "Purna Swaraj" (Complete Independence) resolution?',
        options: ['Calcutta Session, 1928', 'Lahore Session, 1929', 'Karachi Session, 1931', 'Surat Session, 1907'],
        answer: 'Lahore Session, 1929',
        explanation:
          'Presided over by Jawaharlal Nehru in December 1929 on the banks of the Ravi River, the Lahore Session declared Purna Swaraj as the goal of the Congress.',
      },
    ],
  },
  current_affairs: {
    categoryId: 'current_affairs',
    slug: 'current-affairs',
    path: '/quizzes/current-affairs',
    navAnchorText: 'Start J&K & National Current Affairs Quiz',
    shortName: 'Current Affairs',
    title: 'JKSSB Current Affairs & J&K Special Quiz: Practice MCQs',
    description:
      'Practice latest JKSSB Current Affairs MCQs on Jammu & Kashmir development projects, GI Tags, National Schemes, Sports, Awards, Defence, and Global Summits.',
    h1: 'JKSSB Current Affairs (J&K UT & National Events) Practice Test',
    subtitle: 'J&K Infrastructure Projects, GI Tags, Government Schemes, Awards, Indices & Sports',
    intro:
      'Stay updated with 400+ curated Current Affairs MCQs covering Jammu & Kashmir GI-tagged products, Chenab Rail Bridge, Zojila & Z-Morh tunnels, Union Budget highlights, and national honors.',
    marksWeightage: '10–15 Marks in JKSSB Exams',
    syllabusTopics: [
      'Jammu & Kashmir Current Affairs, Infrastructure Tunnels, Bridges & GI Tags (Basohli Pashmina, Bhaderwah Rajmash, Ramban Sulai Honey)',
      'Central & UT Government Welfare Schemes (HADDP, PM-KISAN, Mission Youth J&K)',
      'National & International Summits (G20, BRICS, COP, ASEAN)',
      'Science, Space Missions (ISRO Chandrayaan-3, Aditya-L1, Gaganyaan) & Defence Exercises',
      'National Sports Awards, Olympic/Asian Games Medals, Padma Awards & Global Rankings',
    ],
    studyNotes: [
      'The Chenab Rail Bridge in Reasi district of J&K is the world’s highest railway arch bridge, standing 359 meters above the riverbed on the Udhampur-Srinagar-Baramulla Rail Link (USBRL).',
      'Recent GI tags from Jammu & Kashmir include Basohli Painting, Bhaderwah Rajmash, Ramban Sulai Honey, Kaladi of Udhampur, and Kishtwar Saffron.',
    ],
    sampleQuestions: [
      {
        question: 'Over which river is the world’s highest railway arch bridge (359 m high) constructed in Reasi district of Jammu & Kashmir?',
        options: ['Jhelum River', 'Chenab River', 'Tawi River', 'Ravi River'],
        answer: 'Chenab River',
        explanation:
          'The Chenab Rail Bridge (359 meters above the riverbed, 1,315 meters long) connects Bakkal and Kauri in Reasi district as part of the USBRL project.',
      },
    ],
  },
};

export interface ModeSEOConfig {
  mode: StudyMode;
  path: string;
  title: string;
  description: string;
  h1: string;
}

export const MODE_SEO_MAP: Record<StudyMode, ModeSEOConfig> = {
  quiz: {
    mode: 'quiz',
    path: '/',
    title: 'JKSSB MCQ Practice Quiz | Mock Tests & General Knowledge Prep',
    description:
      'Practice free JKSSB multiple-choice quizzes covering General Knowledge, J&K History, Reasoning, Computer Fundamentals, and General Line exams with instant answers.',
    h1: 'JKSSB MCQ Practice Quiz & General Line Exam Preparation Portal',
  },
  mock: {
    mode: 'mock',
    path: '/mock-tests',
    title: 'JKSSB 120-Marks CBT Mock Tests | Free Online Exam Simulator',
    description:
      'Attempt 5 full-length 120-question, 120-minute JKSSB CBT mock tests and 10 sectional subject drills with official -0.25 negative marking and instant rank analysis.',
    h1: 'JKSSB Full-Length 120-Question CBT Mock Test Series',
  },
  flip: {
    mode: 'flip',
    path: '/flashcards',
    title: 'JKSSB Revision Flashcards | Spaced Repetition Study Deck',
    description:
      'Revise 6,290+ JKSSB concepts, formulas, and one-liners using active recall flashcards and SM-2 spaced repetition across all 10 exam subjects.',
    h1: 'JKSSB Active Recall Flashcards & Spaced Repetition Deck',
  },
  speed: {
    mode: 'speed',
    path: '/speed-rush',
    title: 'JKSSB 60-Second Speed Rush Quiz | Rapid Recall Challenge',
    description:
      'Test your speed and accuracy under exam time pressure with the 60-second JKSSB Speed Rush rapid-fire MCQ challenge.',
    h1: 'JKSSB 60-Second Speed Rush MCQ Challenge',
  },
  stats: {
    mode: 'stats',
    path: '/progress',
    title: 'JKSSB Study Progress, Accuracy & Streak Analytics | FlashMind',
    description:
      'Track your subject-wise JKSSB accuracy, daily study streak, mastered flashcards, and mock test score history.',
    h1: 'JKSSB Exam Preparation Analytics & Mastery Tracker',
  },
  decks: {
    mode: 'decks',
    path: '/decks',
    title: 'JKSSB Question Bank & Custom Deck Manager | 6,290+ MCQs',
    description:
      'Browse, search, and customize 6,290+ JKSSB multiple-choice questions and flashcards across J&K GK, Computer Science, General Science, and Accountancy.',
    h1: 'JKSSB Question Bank & Deck Manager',
  },
  drive: {
    mode: 'drive',
    path: '/cloud-sync',
    title: 'Cloud Backup & Google Drive Sync | FlashMind JKSSB Prep',
    description:
      'Backup and synchronize your JKSSB study progress, streaks, and custom question decks with Google Drive.',
    h1: 'JKSSB Study Progress Cloud Backup & Sync',
  },
  chat: {
    mode: 'chat',
    path: '/ai-mentor',
    title: 'JKSSB AI Exam Mentor & Doubt Solver | Step-by-Step Explanations',
    description:
      'Get instant step-by-step explanations, mnemonics, and exam tips for JKSSB General Knowledge, Accountancy, Mathematics, and Computer Science.',
    h1: 'JKSSB AI Exam Mentor & Instant Doubt Solver',
  },
};

export function resolveRouteFromLocation(pathname: string, search: string): {
  mode: StudyMode;
  category: CategoryId | 'all';
} {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  const params = new URLSearchParams(search);

  // Check clean URL paths first: /quizzes/<slug>
  if (cleanPath.startsWith('/quizzes/')) {
    const slug = cleanPath.replace('/quizzes/', '').toLowerCase();
    const matchedTopic = Object.values(TOPIC_SEO_MAP).find((t) => t.slug === slug);
    if (matchedTopic) {
      return { mode: 'quiz', category: matchedTopic.categoryId };
    }
  }

  // Check clean mode paths
  for (const modeConfig of Object.values(MODE_SEO_MAP)) {
    if (modeConfig.path !== '/' && cleanPath === modeConfig.path) {
      return { mode: modeConfig.mode, category: 'all' };
    }
  }

  // Fallback to query params (?subject=... or ?mode=...)
  const subjectParam = params.get('subject') as CategoryId | null;
  if (subjectParam && subjectParam in TOPIC_SEO_MAP) {
    return { mode: 'quiz', category: subjectParam };
  }

  const modeParam = params.get('mode') as StudyMode | null;
  if (modeParam && modeParam in MODE_SEO_MAP) {
    return { mode: modeParam, category: 'all' };
  }

  return { mode: 'quiz', category: 'all' };
}

export function getCanonicalSEO(mode: StudyMode, category: CategoryId | 'all') {
  const baseUrl = 'https://jkssb-mcq-quiz.ai.studio';
  if (mode === 'quiz') {
    const topic = TOPIC_SEO_MAP[category] || TOPIC_SEO_MAP.all;
    return {
      title: topic.title,
      description: topic.description,
      h1: topic.h1,
      path: topic.path,
      canonicalUrl: `${baseUrl}${topic.path}`,
      topic,
    };
  }

  const modeMeta = MODE_SEO_MAP[mode] || MODE_SEO_MAP.quiz;
  return {
    title: modeMeta.title,
    description: modeMeta.description,
    h1: modeMeta.h1,
    path: modeMeta.path,
    canonicalUrl: `${baseUrl}${modeMeta.path}`,
    topic: TOPIC_SEO_MAP[category] || TOPIC_SEO_MAP.all,
  };
}
