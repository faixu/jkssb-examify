import { CategoryId } from '../types';
import { SampleQuestionSEO } from './seo';

export interface TopicSEODetails {
  syllabusTopics: string[];
  studyNotes: string[];
  sampleQuestions: SampleQuestionSEO[];
}

export const TOPIC_SEO_DETAILS: Record<CategoryId | 'all', TopicSEODetails> = {
  all: {
    syllabusTopics: [
      'General Knowledge with Special Reference to J&K UT (30 Marks) — History, Geography, Economy, Culture & J&K Reorganization Act 2019',
      'Accountancy and Book Keeping (30 Marks) — Double Entry System, Journal, Ledger, Trial Balance, BRS, Partnership, GST & Auditing',
      'Computer Applications & Fundamentals (30 Marks) — Hardware, Software, MS Office, Operating Systems, DBMS & Networking',
      'General Science, General English, Statistics, Mathematics & Economics (30 Marks Combined) — NCERT Standard Conceptual & Numerical MCQs',
    ],
    studyNotes: [
      'JKSSB CBT & OMR Exam Pattern: 120 multiple-choice questions carrying 1 mark each (120 minutes duration) with 0.25 negative marking for wrong answers.',
      'High-Yield Focus: The J&K Reorganisation Act 2019 (comprising 14 Parts, 103 Sections, and 5 Schedules), major rivers and hydroelectric projects of J&K, fundamental accounting principles, and essential computer applications form key components of core syllabus questions in JKSSB exams.',
      'Active Recall Strategy: Alternate between topic-wise MCQ practice and 5-box Leitner spaced repetition flashcards to lock in factual dates, articles, and formulas.',
    ],
    sampleQuestions: [
      {
        question: 'Which Part of the Indian Constitution is dealt with in Section 13 of the J&K Reorganization Act, 2019 (mirroring Article 239A)?',
        options: ['Part VI', 'Part VIII', 'Part IX', 'Part XI'],
        answer: 'Part VIII',
        explanation: 'Section 13 of the J&K Reorganization Act, 2019 states that the provisions contained in article 239A (in Part VIII - The Union Territories) applicable to Puducherry shall also apply to the Union Territory of Jammu and Kashmir.',
      },
      {
        question: 'Under the Golden Rules of Accounting, what is the rule for a Nominal Account?',
        options: [
          'Debit the receiver, Credit the giver',
          'Debit what comes in, Credit what goes out',
          'Debit all expenses and losses, Credit all incomes and gains',
          'Debit assets, Credit liabilities',
        ],
        answer: 'Debit all expenses and losses, Credit all incomes and gains',
        explanation: 'Nominal accounts relate to expenses, losses, incomes, and gains. Therefore, all expenses and losses are debited and all incomes and gains are credited.',
      },
      {
        question: 'Which shortcut key is used in MS Excel to insert a new worksheet into a workbook?',
        options: ['Shift + F11', 'Ctrl + N', 'Alt + F1', 'Ctrl + F11'],
        answer: 'Shift + F11',
        explanation: 'Pressing Shift + F11 in Microsoft Excel immediately inserts a new blank worksheet into the active workbook.',
      },
    ],
  },
  general: {
    syllabusTopics: [
      'J&K Reorganization Act, 2019: 14 Parts, 103 Sections, 5 Schedules, Unicameral Legislature & Lieutenant Governor powers',
      'Physiography & Drainage of J&K: Jhelum, Chenab, Indus, Ravi, Tawi rivers, Wular, Dal, Mansar & Surinsar lakes, Mountain Passes & Glaciers',
      'History & Heritage of Jammu & Kashmir: Karkota, Utpala & Lohara dynasties, Shah Mir & Chak rulers, Dogra Rule (1846–1947) & Martand Sun Temple',
      'Flora, Fauna, National Parks (Dachigam, Kishtwar, Kazinag), Ramsar Sites (Hokersar, Hygam, Shallabugh), Saffron GI Tag & Tourist Destinations',
    ],
    studyNotes: [
      'J&K Reorganization Act 2019 received Presidential assent on 9 August 2019 and came into effect on 31 October 2019 (National Unity Day).',
      'Hydropower on Chenab River: Ratle (850 MW), Dul Hasti (390 MW), Baglihar (900 MW), Salal (690 MW), Pakal Dul (1000 MW), and Kiru (624 MW).',
      'J&K now has 5 Ramsar Wetland Sites: Wular Lake, Hokersar Wetland, Surinsar-Mansar Lakes, Hygam Wetland, and Shallabugh Wetland.',
    ],
    sampleQuestions: [
      {
        question: 'How many Parts, Sections, and Schedules are there in the Jammu and Kashmir Reorganization Act, 2019?',
        options: [
          '12 Parts, 95 Sections, 4 Schedules',
          '14 Parts, 103 Sections, 5 Schedules',
          '15 Parts, 110 Sections, 6 Schedules',
          '10 Parts, 88 Sections, 5 Schedules',
        ],
        answer: '14 Parts, 103 Sections, 5 Schedules',
        explanation: 'The Jammu and Kashmir Reorganization Act, 2019 consists of 14 Parts, 103 Sections, and 5 Schedules.',
      },
      {
        question: 'Who built the world-famous Martand Sun Temple in Anantnag district of Jammu and Kashmir in the 8th century CE?',
        options: ['Avantivarman', 'Lalitaditya Muktapida', 'Zain-ul-Abidin', 'Gulab Singh'],
        answer: 'Lalitaditya Muktapida',
        explanation: 'Lalitaditya Muktapida of the Karkota dynasty built the Martand Sun Temple near Anantnag in the 8th century CE.',
      },
      {
        question: 'Which hydroelectric power project of 850 MW capacity is constructed on the Chenab River in Kishtwar district?',
        options: ['Uri-II Project', 'Ratle Hydroelectric Project', 'Lower Jhelum Project', 'Kangan Power Project'],
        answer: 'Ratle Hydroelectric Project',
        explanation: 'The 850 MW Ratle Hydroelectric Project is a run-of-the-river project located on the Chenab River in Kishtwar district of J&K.',
      },
    ],
  },
  cs: {
    syllabusTopics: [
      'Basic Computer Fundamentals: Generations of Computers (1st to 5th), CPU (ALU, CU, Registers), Primary & Secondary Memory Hierarchy (Cache, RAM, ROM, SSD)',
      'Input & Output Devices: Mechanical vs Optical Scanners (MICR, OMR, OCR, Barcode), Impact vs Non-Impact Printers, Plotters & Monitors',
      'MS Office Suite: MS Word shortcuts & formatting, MS Excel formulas & cell referencing, MS PowerPoint views & transitions, MS Access DBMS',
      'Internet, Networking & Cyber Security: OSI 7-Layer Model, TCP/IP, HTTP/HTTPS, DNS, Firewalls, Malware (Virus, Worm, Trojan, Ransomware) & IT Act 2000',
    ],
    studyNotes: [
      'Memory Speed Hierarchy (Fastest to Slowest): CPU Registers > L1/L2/L3 Cache (SRAM) > Main Memory (DRAM) > Solid State Drive (SSD) > Hard Disk Drive (HDD).',
      'Open Systems Interconnection (OSI) 7 Layers (Bottom to Top): Physical, Data Link, Network, Transport, Session, Presentation, Application.',
      'Common JKSSB Shortcut Keys: F2 (Edit cell in Excel), F5 (Slide Show from start in PowerPoint / Go To), F7 (Spell Check), Ctrl+K (Insert Hyperlink), Ctrl+M (New Slide in PPT).',
    ],
    sampleQuestions: [
      {
        question: 'Which type of memory is used to build CPU Cache memory because of its extremely fast access time and no need for refreshing?',
        options: ['DRAM (Dynamic RAM)', 'SRAM (Static RAM)', 'EEPROM', 'Flash Memory'],
        answer: 'SRAM (Static RAM)',
        explanation: 'Static RAM (SRAM) uses flip-flop circuits, does not need periodic refreshing like DRAM, and is much faster, making it ideal for CPU cache (L1, L2, L3).',
      },
      {
        question: 'At which layer of the OSI Model do Routers operate to forward data packets using IP addresses?',
        options: ['Data Link Layer (Layer 2)', 'Network Layer (Layer 3)', 'Transport Layer (Layer 4)', 'Session Layer (Layer 5)'],
        answer: 'Network Layer (Layer 3)',
        explanation: 'Routers operate at the Network Layer (Layer 3) of the OSI model, using logical addresses (IP addresses) to determine the best path for packet forwarding.',
      },
      {
        question: 'In MS PowerPoint, which shortcut key starts the presentation from the CURRENT slide instead of the first slide?',
        options: ['F5', 'Shift + F5', 'Ctrl + F5', 'Alt + F5'],
        answer: 'Shift + F5',
        explanation: 'F5 starts the presentation from the very first slide, whereas Shift + F5 starts the slide show from the currently selected slide.',
      },
    ],
  },
  science: {
    syllabusTopics: [
      'Physics: Mechanics, Newton’s Laws of Motion, Work, Power & Energy, Light (Reflection, Refraction, Lenses), Ohm’s Law, Electric Current & Conventional/Non-Conventional Sources of Energy',
      'Chemistry: Atomic Structure, Chemical Bonding, Acids, Bases & Salts (pH Scale), Metals & Non-Metals, Carbon & its Compounds, Everyday Chemistry',
      'Biology & Life Processes: Nutrition, Respiration, Transportation & Excretion in Humans and Plants, Vitamins & Deficiency Diseases, Vaccines & Immunity',
      'Environment, Ecology & Biodiversity: Ecosystem Trophic Levels, 10% Energy Law, Food Chains, Ozone Depletion, Greenhouse Gases, Montreal & Kyoto Protocols',
    ],
    studyNotes: [
      'Vitamins Classification: Water-soluble vitamins are Vitamin B-complex and Vitamin C; Fat-soluble vitamins are Vitamins A, D, E, and K.',
      'Lindeman’s 10% Law of Energy Transfer: Only 10% of organic energy is transferred from one trophic level to the next higher trophic level in a food chain.',
      'Lens & Mirror Formula: Mirror formula is 1/f = 1/v + 1/u, whereas Lens formula is 1/f = 1/v - 1/u. Power of a lens P = 1/f (in meters), measured in Dioptres (D).',
    ],
    sampleQuestions: [
      {
        question: 'Deficiency of which vitamin leads to defective blood clotting (hemorrhage) in humans?',
        options: ['Vitamin A (Retinol)', 'Vitamin C (Ascorbic Acid)', 'Vitamin K (Phylloquinone)', 'Vitamin D (Calciferol)'],
        answer: 'Vitamin K (Phylloquinone)',
        explanation: 'Vitamin K is essential for the synthesis of prothrombin and blood clotting factors in the liver. Its deficiency causes delayed blood clotting.',
      },
      {
        question: 'Which phenomenon of light is responsible for the twinkling of stars in the night sky?',
        options: ['Total Internal Reflection', 'Atmospheric Refraction', 'Dispersion of Light', 'Tyndall Effect'],
        answer: 'Atmospheric Refraction',
        explanation: 'Starlight undergoes continuous refraction as it passes through atmospheric layers of varying optical densities, causing the apparent position and brightness of stars to fluctuate.',
      },
      {
        question: 'Which international treaty was signed in 1987 to phase out Ozone Depleting Substances (ODS) like Chlorofluorocarbons (CFCs)?',
        options: ['Kyoto Protocol', 'Montreal Protocol', 'Paris Agreement', 'Ramsar Convention'],
        answer: 'Montreal Protocol',
        explanation: 'The Montreal Protocol (1987) is a landmark global treaty designed to protect the stratospheric ozone layer by phasing out CFCs and halons.',
      },
    ],
  },
  accounting: {
    syllabusTopics: [
      'Accounting Concepts & Conventions: Business Entity, Money Measurement, Going Concern, Dual Aspect, Matching Principle & Accounting Equation (Assets = Liabilities + Capital)',
      'Book Keeping & Financial Statements: Voucher Approach, Journalizing, Ledger Posting, Cash Book, Trial Balance, Trading Account, Profit & Loss Account & Balance Sheet',
      'Bank Reconciliation Statement (BRS), Partnership Accounts (Goodwill, Admission, Retirement, Sacrificing & Gaining Ratio), Cost Accounting & Financial Audit',
      'Taxation & Public Finance: Goods and Services Tax (CGST, SGST, IGST), Income Tax Basics, Double Entry System in Government Accounting & PFMS',
    ],
    studyNotes: [
      'Accounting Equation: Assets = Liabilities + Owner’s Equity (Capital). Every transaction affects at least two accounts equally.',
      'Bank Reconciliation Statement (BRS): Prepared by a business customer to reconcile the difference between the Bank Column of the Cash Book and the Bank Pass Book.',
      'Sacrificing Ratio = Old Ratio - New Ratio (used on admission of a new partner to distribute goodwill premium).',
    ],
    sampleQuestions: [
      {
        question: 'If Total Assets of a business are ₹8,50,000 and External Liabilities are ₹3,20,000, what is the amount of Owner’s Capital?',
        options: ['₹11,70,000', '₹5,30,000', '₹3,20,000', '₹4,25,000'],
        answer: '₹5,30,000',
        explanation: 'By the Accounting Equation: Capital = Assets - Liabilities = ₹8,50,000 - ₹3,20,000 = ₹5,30,000.',
      },
      {
        question: 'When starting with a Debit Balance (favorable balance) as per the Cash Book in a BRS, how are "Cheques issued but not yet presented for payment" treated?',
        options: [
          'Deducted from Cash Book balance',
          'Added to Cash Book balance',
          'Ignored completely',
          'Multiplied by two',
        ],
        answer: 'Added to Cash Book balance',
        explanation: 'When cheques are issued, the Cash Book balance is immediately reduced, but the Pass Book balance remains higher until the cheque is presented. To reach the Pass Book balance, the amount is added back.',
      },
      {
        question: 'Which constitutional amendment introduced the Goods and Services Tax (GST) in India?',
        options: ['100th Amendment Act', '101st Amendment Act, 2016', '102nd Amendment Act', '103rd Amendment Act'],
        answer: '101st Amendment Act, 2016',
        explanation: 'The 101st Constitutional Amendment Act, 2016 paved the way for the rollout of GST across India on 1 July 2017.',
      },
    ],
  },
  grammar: {
    syllabusTopics: [
      'Core Grammar: Tenses, Rearranging of Jumbled Sentences, Narration (Direct & Indirect Speech), Modals & Articles (A, An, The)',
      'Voice & Clauses: Active to Passive Voice transformation, Subordinate Clauses (Noun, Adjective, Adverb Clauses) & Punctuation',
      'Vocabulary & Usage: Synonyms, Antonyms, Homonyms/Homophones, Pairs of Words, Idioms & Phrases, Uses of Prepositions',
      'Comprehension & Editing: Reading Comprehension passages, Cloze test, Spellings & Spotting Grammatical Errors',
    ],
    studyNotes: [
      'Active to Passive Voice Rule: The object of the active verb becomes the subject of the passive verb, and the main verb always takes the Past Participle (V3) form preceded by an appropriate form of "be".',
      'Conditional Clauses: Type 1 (If + Present Simple -> will + V1), Type 2 (If + Past Simple -> would + V1), Type 3 (If + Past Perfect [had + V3] -> would have + V3).',
      'Subject-Verb Agreement: Words joined to a singular subject by "with", "as well as", "along with", or "in addition to" take a singular verb.',
    ],
    sampleQuestions: [
      {
        question: 'Choose the correct Passive Voice form of: "The committee has approved the new financial proposal."',
        options: [
          'The new financial proposal was approved by the committee.',
          'The new financial proposal has been approved by the committee.',
          'The new financial proposal had been approved by the committee.',
          'The new financial proposal is being approved by the committee.',
        ],
        answer: 'The new financial proposal has been approved by the committee.',
        explanation: 'Present Perfect Active (has/have + V3) changes into Present Perfect Passive (has/have + been + V3).',
      },
      {
        question: 'Fill in the blank with the correct preposition: "He is senior _____ me by five years in the department."',
        options: ['than', 'to', 'from', 'over'],
        answer: 'to',
        explanation: 'Latin comparative adjectives ending in -ior (senior, junior, superior, inferior, prior) always take the preposition "to" instead of "than".',
      },
      {
        question: 'What is the meaning of the idiom "To burn the midnight oil"?',
        options: [
          'To waste expensive resources',
          'To work or study late into the night',
          'To create a sudden controversy',
          'To destroy old records',
        ],
        answer: 'To work or study late into the night',
        explanation: '"To burn the midnight oil" means to read, study, or work diligently late into the night.',
      },
    ],
  },
  statistics: {
    syllabusTopics: [
      'Data Collection & Tabulation: Primary vs Secondary Data, Questionnaire design, Classification & Tabulation of Data, Frequency Distributions',
      'Measures of Central Tendency & Dispersion: Arithmetic Mean, Median, Mode, Geometric Mean, Harmonic Mean, Standard Deviation & Coefficient of Variation',
      'Correlation, Regression & Index Numbers: Karl Pearson’s Coefficient, Spearman’s Rank Correlation, Laspeyres, Paasche & Fisher’s Ideal Index Number',
      'Demography & Vital Statistics: Census of India 2011 (National & J&K UT), Crude Birth Rate (CBR), Crude Death Rate (CDR), Infant Mortality Rate (IMR) & Net Reproduction Rate (NRR)',
    ],
    studyNotes: [
      'Empirical Relationship between Mean, Median, and Mode for moderately skewed distributions: Mode = 3 Median - 2 Mean.',
      'Fisher’s Ideal Index Number is the Geometric Mean of Laspeyres and Paasche Index Numbers (F = √(L × P)) and satisfies both the Time Reversal Test and Factor Reversal Test.',
      'Inequality of Means: For any set of positive distinct observations, Arithmetic Mean (AM) ≥ Geometric Mean (GM) ≥ Harmonic Mean (HM), and GM² = AM × HM for two numbers.',
    ],
    sampleQuestions: [
      {
        question: 'In a moderately asymmetrical distribution, if the Arithmetic Mean is 25 and the Median is 23, what is the value of the Mode?',
        options: ['19', '21', '24', '17'],
        answer: '19',
        explanation: 'Using Karl Pearson’s empirical formula: Mode = 3(Median) - 2(Mean) = 3(23) - 2(25) = 69 - 50 = 19.',
      },
      {
        question: 'Which index number satisfies both the Time Reversal Test and the Factor Reversal Test?',
        options: [
          'Laspeyres Index Number',
          'Paasche Index Number',
          'Fisher’s Ideal Index Number',
          'Bowley’s Index Number',
        ],
        answer: 'Fisher’s Ideal Index Number',
        explanation: 'Irving Fisher’s Ideal Index Number (geometric mean of Laspeyres and Paasche indices) satisfies both Time Reversal and Factor Reversal tests.',
      },
      {
        question: 'If Net Reproduction Rate (NRR) of a population is exactly equal to 1.0, what does it indicate?',
        options: [
          'Population is rapidly declining',
          'Population is at exact replacement level (stationary trend)',
          'Population is doubling every decade',
          'Birth rate is zero',
        ],
        answer: 'Population is at exact replacement level (stationary trend)',
        explanation: 'An NRR of 1 indicates that each generation of mothers is having exactly enough daughters to replace themselves in the population.',
      },
    ],
  },
  math: {
    syllabusTopics: [
      'Commercial Arithmetic: Simple Interest, Compound Interest, Percentage, Ratio & Proportion, Profit & Loss, Time & Work',
      'Algebra & Combinatorics: Linear Equations in Two Variables, Permutations & Combinations, Binomial Theorem, Arithmetic & Geometric Progressions',
      'Set Theory, Relations & Functions: Union, Intersection, Complement, De Morgan’s Laws, Domain, Co-domain & Range, Types of Relations (Reflexive, Symmetric, Transitive)',
      'Calculus, Coordinate Geometry, Vectors & Probability: Limits & Derivatives, Distance & Section Formulas, Dot & Cross Product of Vectors, Conditional Probability & Bayes’ Theorem',
    ],
    studyNotes: [
      'Difference between Compound Interest (CI) and Simple Interest (SI) for 2 years on Principal P at rate R% p.a. is: CI - SI = P × (R / 100)².',
      'Number of subsets of a finite set containing n elements is 2ⁿ, and the number of proper subsets is 2ⁿ - 1.',
      'For two mutually exclusive events A and B, P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B). For independent events, P(A ∩ B) = P(A) × P(B).',
    ],
    sampleQuestions: [
      {
        question: 'What is the difference between Compound Interest and Simple Interest on ₹10,000 for 2 years at 10% per annum compounded annually?',
        options: ['₹50', '₹100', '₹200', '₹150'],
        answer: '₹100',
        explanation: 'For 2 years, CI - SI = P(R/100)² = 10,000 × (10/100)² = 10,000 × (1/100) = ₹100.',
      },
      {
        question: 'If a finite set A contains 5 elements, how many elements are there in its Power Set P(A)?',
        options: ['10', '25', '32', '64'],
        answer: '32',
        explanation: 'If set A has n elements, its power set P(A) contains 2ⁿ elements. Here 2⁵ = 32.',
      },
      {
        question: 'In how many distinct ways can the letters of the word "LEADER" be arranged?',
        options: ['720', '360', '180', '120'],
        answer: '360',
        explanation: '"LEADER" has 6 letters in total with the letter "E" repeated twice. Number of arrangements = 6! / 2! = 720 / 2 = 360.',
      },
    ],
  },
  economics: {
    syllabusTopics: [
      'Introduction to Microeconomics: Central Problems of an Economy, Production Possibility Frontier (PPF), Utility Analysis, Indifference Curves & Elasticity of Demand',
      'Production, Cost & Market Structures: Law of Variable Proportions, Returns to Scale, Perfect Competition, Monopoly, Monopolistic Competition & Oligopoly',
      'Macroeconomics & National Income: Circular Flow of Income, GDP, GNP, NNP at Market Price & Factor Cost, Keynesian Multiplier & Consumption Function',
      'Money, Banking, Fiscal Policy & Indian Economy: RBI Quantitative & Qualitative Tools (Repo, Reverse Repo, CRR, SLR), Fiscal & Primary Deficit, Five-Year Plans, NITI Aayog & LPG Reforms 1991',
    ],
    studyNotes: [
      'National Income Identity: NNP at Factor Cost (National Income) = GDP at Market Price - Depreciation + Net Factor Income from Abroad (NFIA) - Net Indirect Taxes (Indirect Taxes - Subsidies).',
      'Fiscal Deficit = Total Expenditure - Total Receipts excluding Borrowings. Primary Deficit = Fiscal Deficit - Interest Payments.',
      'RBI Monetary Policy Tools: To curb inflation (reduce money supply), the RBI increases the Repo Rate, Cash Reserve Ratio (CRR), and Statutory Liquidity Ratio (SLR).',
    ],
    sampleQuestions: [
      {
        question: 'Which aggregate of national income is officially referred to as the "National Income" of a country?',
        options: [
          'GDP at Market Price',
          'GNP at Market Price',
          'NNP at Factor Cost',
          'NDP at Market Price',
        ],
        answer: 'NNP at Factor Cost',
        explanation: 'Net National Product at Factor Cost (NNP_FC) represents the sum total of factor incomes earned by normal residents of a country during an accounting year.',
      },
      {
        question: 'How is "Primary Deficit" calculated in the Union Budget?',
        options: [
          'Revenue Expenditure minus Revenue Receipts',
          'Fiscal Deficit minus Interest Payments',
          'Total Expenditure minus Total Receipts',
          'Capital Expenditure minus Capital Receipts',
        ],
        answer: 'Fiscal Deficit minus Interest Payments',
        explanation: 'Primary Deficit = Fiscal Deficit - Interest Payments on previous borrowings. It shows the borrowing requirement of the government excluding interest obligations.',
      },
      {
        question: 'In which market structure is there a single seller producing a unique product with no close substitutes and high barriers to entry?',
        options: ['Perfect Competition', 'Monopolistic Competition', 'Pure Monopoly', 'Oligopoly'],
        answer: 'Pure Monopoly',
        explanation: 'A pure monopoly is characterized by a single seller, no close substitutes, price-maker power, and strong barriers to entry.',
      },
    ],
  },
  history: {
    syllabusTopics: [
      'Advent of Europeans & British Expansion: Battle of Plassey (1757), Battle of Buxar (1764), Subsidiary Alliance, Doctrine of Lapse & Revolt of 1857',
      'Socio-Religious Reform Movements: Brahmo Samaj, Arya Samaj, Ramakrishna Mission, Aligarh Movement, Satya Shodhak Samaj & Press/Education Acts',
      'Indian National Movement (1885–1919): Formation of INC, Moderates vs Extremists, Partition of Bengal (1905), Surat Split (1907), Home Rule League & Lucknow Pact (1916)',
      'Gandhian Era & Independence (1919–1947): Champaran, Rowlatt Act, Non-Cooperation, Lahore Session (Purna Swaraj 1929), Dandi March (1930), Quit India (1942) & Indian Independence Act 1947',
    ],
    studyNotes: [
      'Important INC Sessions: 1885 Bombay (W.C. Bonnerjee, 1st President), 1907 Surat (Rash Behari Ghosh), 1916 Lucknow (A.C. Majumdar), 1924 Belgaum (Mahatma Gandhi), 1929 Lahore (Jawaharlal Nehru - Purna Swaraj).',
      'Revolt of 1857 Leaders: Delhi (Bahadur Shah II & Bakht Khan), Kanpur (Nana Saheb & Tantia Tope), Lucknow (Begum Hazrat Mahal), Jhansi (Rani Lakshmibai), Bihar (Kunwar Singh).',
      'Governor-Generals/Viceroys: Lord Dalhousie (Doctrine of Lapse, Railways 1853), Lord Canning (First Viceroy 1858), Lord Curzon (Partition of Bengal 1905), Lord Mountbatten (Last Viceroy).',
    ],
    sampleQuestions: [
      {
        question: 'In which session did the Indian National Congress pass the historic "Purna Swaraj" (Complete Independence) resolution?',
        options: ['Calcutta Session, 1928', 'Lahore Session, 1929', 'Karachi Session, 1931', 'Tripuri Session, 1939'],
        answer: 'Lahore Session, 1929',
        explanation: 'Presided over by Jawaharlal Nehru in December 1929, the Lahore Session of the INC passed the Purna Swaraj resolution and declared 26 January 1930 as Independence Day.',
      },
      {
        question: 'Who founded the "Satya Shodhak Samaj" in 1873 in Maharashtra to champion social equality and education?',
        options: ['Raja Ram Mohan Roy', 'Swami Dayananda Saraswati', 'Jyotirao Phule', 'Atmaram Pandurang'],
        answer: 'Jyotirao Phule',
        explanation: 'Mahatma Jyotirao Phule founded the Satya Shodhak Samaj (Truth-Seekers’ Society) in Pune in 1873.',
      },
      {
        question: 'Which movement was launched by Mahatma Gandhi on 8 August 1942 at the Gowalia Tank Maidan in Bombay with the call "Do or Die"?',
        options: [
          'Non-Cooperation Movement',
          'Civil Disobedience Movement',
          'Quit India Movement',
          'Individual Satyagraha',
        ],
        answer: 'Quit India Movement',
        explanation: 'The Quit India Movement (Bharat Chodo Andolan) was launched on 8 August 1942, where Mahatma Gandhi gave the famous mantra "Do or Die" (Karo ya Maro).',
      },
    ],
  },
  current_affairs: {
    syllabusTopics: [
      'J&K UT GI Tags & Handicrafts: Kashmir Saffron, Basohli Painting, Basohli Pashmina, Bhaderwah Rajmash, Ramban Sulai Honey, Mushqbudji Rice, Kaladi & Kani Shawl',
      'J&K Infrastructure & Hydropower: World’s Highest Railway Arch Bridge on Chenab (359m), Anji Khad Cable-Stayed Bridge, Zojila & Z-Morh Tunnels, Ratle & Pakal Dul Projects',
      'National & International Affairs: G20 Summit, Bharat Ratna & Padma Awards, ISRO Space Missions (Chandrayaan-3, Aditya-L1), Defence Exercises & Global Indices',
      'Sports, Welfare Schemes & Economy: Olympic & Asian Games Medalists, PM-KISAN, Ayushman Bharat Sehat Scheme (J&K) & Union/UT Budget Highlights',
    ],
    studyNotes: [
      'Recent J&K Geographical Indication (GI) Tags: Basohli Painting (Kathua), Bhaderwah Rajmash (Doda), Ramban Sulai Honey, Anantnag Mushqbudji Rice, Udhampur Kaladi, and Kishtwar Saffron.',
      'Chenab Rail Bridge (Reasi district): World’s highest railway bridge standing at 359 meters above the riverbed (35 meters taller than the Eiffel Tower), part of the USBRL project.',
      'Anji Khad Bridge: India’s first cable-stayed railway bridge located in Reasi district connecting Katra and Reasi.',
    ],
    sampleQuestions: [
      {
        question: 'The famous "Mushqbudji Rice", which recently received the Geographical Indication (GI) tag, is predominantly cultivated in which district of J&K?',
        options: ['Kathua', 'Anantnag', 'Poonch', 'Samba'],
        answer: 'Anantnag',
        explanation: 'Mushqbudji is a short, bold, aromatic rice variety grown in the higher reaches of Anantnag district (especially Sagam area) in South Kashmir.',
      },
      {
        question: 'What is the height of the world’s highest railway arch bridge constructed over the Chenab River in Reasi district of Jammu & Kashmir?',
        options: ['285 meters', '324 meters', '359 meters', '410 meters'],
        answer: '359 meters',
        explanation: 'The Chenab Rail Bridge stands 359 meters (1,178 feet) above the riverbed in Reasi district, making it the world’s highest railway arch bridge.',
      },
      {
        question: 'Famous "Basohli Paintings", the first independent GI-tagged art product from the Jammu region, belongs to which district?',
        options: ['Doda', 'Udhampur', 'Kathua', 'Rajouri'],
        answer: 'Kathua',
        explanation: 'Basohli Painting is a renowned miniature painting style from Basohli town in Kathua district of Jammu and Kashmir.',
      },
    ],
  },
};
