import { Flashcard } from '../../types';

/**
 * Internal Control, Internal Check & Internal Audit: 50 High-Yield Exam MCQs
 * Complete Rationale & Statutory References (Companies Act 2013 Sec 138, 143(3)(i), 144, SA 610, COSO, ICQ)
 */
export const INTERNAL_CONTROL_AUDIT_PDF_50_QUESTIONS: Flashcard[] = [
  // Part 1: Conceptual Foundations & Inter-Relationships (Q1 – Q7)
  {
    id: 'ic-audit-pdf-1',
    categoryId: 'accounting',
    question:
      'An arrangement of staff duties where no single person handles a transaction from beginning to end without being checked by another is termed:',
    answer: 'Internal Check',
    options: ['Internal Audit', 'Internal Check', 'External Audit', 'Interim Audit'],
    explanation:
      'Internal check is an operational division of labor where the work of one employee is automatically and independently cross-verified by another in the normal sequence of operations.',
    tip: 'Division of duties with automatic cross-verification = Internal Check.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-2',
    categoryId: 'accounting',
    question:
      'Which among the following represents the correct hierarchical relationship among control systems?',
    answer: 'Internal Control includes both Internal Check & Internal Audit',
    options: [
      'Internal Check includes Internal Control',
      'Internal Audit includes Internal Control',
      'Internal Control includes both Internal Check & Internal Audit',
      'All three terms are strictly interchangeable',
    ],
    explanation:
      'Internal Control is the umbrella concept comprising financial and operational controls, within which Internal Check (workflow design) and Internal Audit (appraisal mechanism) exist as components.',
    tip: 'Internal Control is the widest umbrella (includes Internal Check + Internal Audit).',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-3',
    categoryId: 'accounting',
    question: 'The primary objective of an effective internal check system in an organization is to:',
    answer: 'Prevent and detect errors/frauds automatically',
    options: [
      'Frame company dividend policy',
      'Prevent and detect errors/frauds automatically',
      'Calculate income tax liability',
      'Replace the statutory external auditor',
    ],
    explanation:
      'Internal check aims to eliminate opportunities for theft and clerical error without collusion by dividing work at the initial operational stage.',
    tip: 'Internal check prevents and detects errors/frauds at the operational stage.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-4',
    categoryId: 'accounting',
    question: 'Internal control comprises which two broad dimensions of management control?',
    answer: 'Accounting controls and Administrative controls',
    options: [
      'Accounting controls and Administrative controls',
      'Vouching and Verification',
      'Interim audit and Annual audit',
      'Routine checking and Casting',
    ],
    explanation:
      'Internal Control is divided into internal accounting controls (safeguarding assets, reliable bookkeeping) and administrative controls (operational efficiency, management policy compliance).',
    tip: 'Internal Control = Accounting Controls + Administrative Controls.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-5',
    categoryId: 'accounting',
    question: 'For implementing an internal check system, an enterprise needs:',
    answer: 'No separate staff; work is reallocated among existing employees',
    options: [
      'A large dedicated team of chartered accountants',
      'Approval from the Ministry of Corporate Affairs',
      'No separate staff; work is reallocated among existing employees',
      'To purchase forensic audit software',
    ],
    explanation:
      'Internal check does not require a distinct department. It relies entirely on systematic allocation of routine duties among existing operational clerks.',
    tip: 'Internal check requires no separate staff—duties are rearranged among existing employees.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-6',
    categoryId: 'accounting',
    question: 'Which of the following is considered an inherent limitation of Internal Control?',
    answer: 'Management override and collusion among employees',
    options: [
      'Clerical posting speed',
      'Management override and collusion among employees',
      'Use of double entry bookkeeping',
      'Adherence to accounting standards',
    ],
    explanation:
      'Collusion between two or more staff members or executive override of controls can circumvent the best-designed internal control mechanisms.',
    tip: 'Collusion and management override are classic inherent limitations of internal control.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-7',
    categoryId: 'accounting',
    question: 'The person appointed as an internal auditor submits their report directly to:',
    answer: 'The Board of Directors or Audit Committee (Management)',
    options: [
      'The Shareholders at the Annual General Meeting',
      'The Board of Directors or Audit Committee (Management)',
      'The Registrar of Companies (RoC)',
      'The Statutory External Auditor',
    ],
    explanation:
      'Unlike a statutory auditor who reports to the shareholders, an internal auditor is appointed by management and submits their report directly to the Board of Directors or Audit Committee.',
    tip: 'Internal Auditor reports to Management (Board/Audit Committee); Statutory Auditor reports to Shareholders.',
    difficulty: 'beginner',
  },

  // Part 2: Internal Check Procedures & Applications (Q8 – Q15)
  {
    id: 'ic-audit-pdf-8',
    categoryId: 'accounting',
    question: 'In a sound internal check system for cash transactions, the cashier should:',
    answer: 'Never be permitted to post ledger entries',
    options: [
      "Have sole access to customers' personal ledgers",
      'Write up both cash book and journal vouchers',
      'Never be permitted to post ledger entries',
      'Approve cash discounts independently',
    ],
    explanation:
      'Segregation of duties mandates that the person handling physical cash must never maintain sales/debtor ledgers; otherwise, misappropriation (such as teeming and lading) can be concealed.',
    tip: 'Cashier (custody) must never post customer ledgers (recording).',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-9',
    categoryId: 'accounting',
    question:
      'The fraudulent practice of concealing a cash shortage by delaying the recording of subsequent receipts from other debtors is known as:',
    answer: 'Teeming and Lading (Lapping)',
    options: [
      'Window Dressing',
      'Teeming and Lading (Lapping)',
      'Casting Error',
      'Capitalization of revenue',
    ],
    explanation:
      'Teeming and lading involves pocketing money received from Debtor A, and covering it days later using the cash receipt from Debtor B. It occurs when cashier duties and debtor ledger maintenance are not segregated.',
    tip: 'Teeming and Lading (Lapping) = covering Debtor A shortage with Debtor B receipt.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-10',
    categoryId: 'accounting',
    question: 'In a well-structured internal check for wages, payroll sheets should be prepared by:',
    answer: 'A clerk entirely independent of the cashier who disburses payments',
    options: [
      'The factory supervisor alone',
      'A clerk entirely independent of the cashier who disburses payments',
      'The cashier who withdraws cash from the bank',
      'The statutory auditor',
    ],
    explanation:
      'To prevent the inclusion of dummy (ghost) workers, timekeeping, payroll compilation, and wage payment disbursement must be executed by distinct, independent individuals.',
    tip: 'Separate timekeeping, wage sheet preparation, and wage disbursement.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-11',
    categoryId: 'accounting',
    question:
      'The practice of preparing a Goods Received Note (GRN) at the warehouse gate when raw materials arrive serves as an essential internal check for:',
    answer: 'Purchases and Inventory verification',
    options: [
      'Sales returns',
      'Purchases and Inventory verification',
      'Fixed asset depreciation',
      'Bad debt write-offs',
    ],
    explanation:
      'A GRN prepared independently by the storekeeper confirms actual physical receipt, which is subsequently matched against the purchase order and supplier invoice prior to passing payment vouchers.',
    tip: 'GRN verifies actual physical receipt of purchased goods.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-12',
    categoryId: 'accounting',
    question:
      'What is the fundamental role of rotational job allocation (job rotation) in an internal check framework?',
    answer: 'To detect ongoing fraudulent activities initiated by employees',
    options: [
      'To save employee salaries',
      'To detect ongoing fraudulent activities initiated by employees',
      'To reduce tax liabilities',
      'To prepare consolidated annual returns',
    ],
    explanation:
      'Rotating clerks periodically prevents continuous manipulation of a ledger; a successor will quickly notice unrecorded items or systematic discrepancies left by their predecessor.',
    tip: 'Job rotation breaks continuous manipulation and exposes concealed frauds.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-13',
    categoryId: 'accounting',
    question:
      'In purchases internal check, the process of matching Purchase Order (PO), Goods Received Note (GRN), and Supplier Invoice is known as:',
    answer: 'Three-Way Matching',
    options: [
      'Two-Way Reconciliation',
      'Three-Way Matching',
      'Cut-off Procedure',
      'Substantive Casting',
    ],
    explanation:
      'The Three-Way Match is a cornerstone internal check ensuring the quantity and price ordered match what was received and billed before accounts payable processes payments.',
    tip: 'Three-Way Match = PO + GRN + Supplier Invoice.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-14',
    categoryId: 'accounting',
    question: "The existence of 'Ghost Workers' on a company's payroll is primarily caused by a failure in:",
    answer: 'Internal check over wage records and disbursement',
    options: [
      'Tax planning',
      'Internal check over wage records and disbursement',
      'Depreciation scheduling',
      'Valuation of goodwill',
    ],
    explanation:
      'Ghost workers are fictitious names entered on payroll rosters by dishonest supervisors to pocket uncollected wages—prevented only by robust internal checks on wage preparation.',
    tip: 'Ghost (dummy) workers indicate weak internal check over wages and payroll.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-15',
    categoryId: 'accounting',
    question: 'An internal check system is considered effective when:',
    answer: 'Work flows smoothly without delay while automatically creating cross-checks',
    options: [
      'It is expensive and slow',
      'Work flows smoothly without delay while automatically creating cross-checks',
      'Management interferes daily in clerical ledger postings',
      'Transactions are audited before execution by the High Court',
    ],
    explanation:
      'A good internal check system must be cost-effective and integrated into daily operations without causing administrative friction or business paralysis.',
    tip: 'Effective internal check is seamless, economical, and automatic.',
    difficulty: 'beginner',
  },

  // Part 3: Evaluation Tools, Flowcharts & Testing (Q16 – Q23)
  {
    id: 'ic-audit-pdf-16',
    categoryId: 'accounting',
    question:
      "Which of the following is an auditor's diagnostic tool containing structured questions answered with 'Yes', 'No', or 'N/A' to evaluate client controls?",
    answer: 'Internal Control Questionnaire (ICQ)',
    options: [
      'Audit Notebook',
      'Internal Control Questionnaire (ICQ)',
      'Audit Engagement Contract',
      'Management Representation Letter',
    ],
    explanation:
      "The Internal Control Questionnaire (ICQ) is a pre-printed comprehensive checklist designed so that a 'No' answer indicates a control deficiency requiring substantive audit testing.",
    tip: 'ICQ uses Yes / No / N/A questions to evaluate internal controls.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-17',
    categoryId: 'accounting',
    question: "In an Internal Control Questionnaire (ICQ), a 'No' answer typically signifies:",
    answer: 'A potential weakness or control deficiency in the system',
    options: [
      'Complete absence of fraud',
      'A potential weakness or control deficiency in the system',
      'That the audit should be abandoned',
      'Automatic qualification of the audit report',
    ],
    explanation:
      'An ICQ is drafted such that affirmative responses confirm controls are in place, whereas a negative response highlights a vulnerability or lack of internal safeguard.',
    tip: "'No' in an ICQ flags a control weakness/deficiency.",
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-18',
    categoryId: 'accounting',
    question: "What is a 'Walk-Through Test' in the context of internal control review?",
    answer: 'Tracing a few transactions through the entire accounting system from initiation to recording',
    options: [
      'Physically walking around the factory premises during lunch',
      'Tracing a few transactions through the entire accounting system from initiation to recording',
      'Checking 100% of the ledger postings',
      'Verifying the attendance register of security personnel',
    ],
    explanation:
      'Walk-through tests involve following one or two transactions end-to-end through every phase of the control cycle to confirm that documented controls function in practice.',
    tip: 'Walk-Through Test = tracing a transaction cradle-to-grave through the accounting system.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-19',
    categoryId: 'accounting',
    question:
      'A diagrammatic representation depicting the sequential movement of documents and operations across departments is known as a:',
    answer: 'Control Flowchart',
    options: ['Control Flowchart', 'Audit Memo', 'Trial Balance Map', 'Histogram'],
    explanation:
      'Systems flowcharts provide visual blueprints of documentation flows, approval stages, and control checkpoints across company divisions.',
    tip: 'Diagrammatic flow of documents across departments = Control Flowchart.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-20',
    categoryId: 'accounting',
    question:
      'If the auditor evaluates internal control and finds it to be exceptionally reliable and effective, the auditor will:',
    answer: 'Reduce the extent and depth of substantive testing',
    options: [
      'Refuse to issue an audit opinion',
      'Increase substantive testing and enlarge sample sizes',
      'Reduce the extent and depth of substantive testing',
      'Conduct 100% manual vouching',
    ],
    explanation:
      'Control risk is low when internal controls are robust; this allows the auditor to accept a higher detection risk and reduce substantive detailed sampling.',
    tip: 'Strong internal controls = low control risk = less substantive testing required.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-21',
    categoryId: 'accounting',
    question:
      "An auditor's written record that describes an internal control system in running prose paragraphs is known as a:",
    answer: 'Narrative Record',
    options: ['Narrative Record', 'Vouching Register', 'Balance Sheet Abstract', 'Chart of Accounts'],
    explanation:
      'A Narrative Record is an explanatory written description compiled by the auditor explaining client accounting systems, personnel duties, and authorization hierarchies.',
    tip: 'Prose description of controls = Narrative Record.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-22',
    categoryId: 'accounting',
    question: 'Testing of Controls (Compliance Testing) is primarily carried out to determine:',
    answer: 'The operational effectiveness of internal control policies throughout the period',
    options: [
      'The market value of equity shares',
      'The operational effectiveness of internal control policies throughout the period',
      'The mathematical correctness of loan amortizations',
      'The exact profit margin on exports',
    ],
    explanation:
      'Compliance tests/Tests of Controls evaluate whether internal controls were actually applied consistently and effectively as designed over the entire accounting period.',
    tip: 'Compliance Testing = Tests of Controls (checking operational effectiveness).',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-23',
    categoryId: 'accounting',
    question:
      'Which international framework defines Internal Control across five interrelated components (Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring)?',
    answer: 'COSO Framework',
    options: ['COSO Framework', 'Basel III Accord', 'Bretton Woods Agreement', 'GATT Framework'],
    explanation:
      'The Committee of Sponsoring Organizations of the Treadway Commission (COSO) model is the globally recognized gold standard for designing and evaluating internal controls.',
    tip: 'COSO = 5 components of Internal Control (CRIME: Control activities, Risk, Info, Monitoring, Environment).',
    difficulty: 'intermediate',
  },

  // Part 4: Internal Audit Mandates & Companies Act, 2013 (Q24 – Q31)
  {
    id: 'ic-audit-pdf-24',
    categoryId: 'accounting',
    question:
      'Which section of the Indian Companies Act, 2013 legally governs the appointment and provisions of an Internal Auditor?',
    answer: 'Section 138',
    options: ['Section 139', 'Section 148', 'Section 138', 'Section 143'],
    explanation:
      'Section 138 read with Rule 13 of the Companies (Accounts) Rules, 2014 sets out statutory mandates for internal audit in prescribed classes of companies. (Sec 139 covers external auditor appointment, Sec 148 covers cost audit).',
    tip: 'Companies Act 2013: Sec 138 = Internal Audit; Sec 139 = Statutory Auditor; Sec 148 = Cost Audit.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-25',
    categoryId: 'accounting',
    question:
      'As per Section 138 of the Companies Act, 2013, which of the following professionals can be appointed as an internal auditor?',
    answer:
      'Either a Chartered Accountant, Cost Accountant, or such other professional as decided by the Board',
    options: [
      'A Chartered Accountant (in practice or employment) only',
      'A Cost Accountant only',
      'Either a Chartered Accountant, Cost Accountant, or such other professional as decided by the Board',
      'A practicing Company Secretary exclusively',
    ],
    explanation:
      'The statute explicitly permits a CA, Cost Accountant (CMA), or any other qualified professional selected by the Board of Directors to be appointed as an Internal Auditor.',
    tip: 'Sec 138: Internal Auditor can be a CA, Cost Accountant, or any other professional decided by the Board.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-26',
    categoryId: 'accounting',
    question: 'Can an employee of the company be appointed as its Internal Auditor?',
    answer: 'Yes, an internal auditor may or may not be an employee of the company',
    options: [
      'No, strictly prohibited by the Companies Act',
      'Yes, an internal auditor may or may not be an employee of the company',
      'Only if the company has zero bank loans',
      'Only with prior approval from the Central Government',
    ],
    explanation:
      'Unlike a statutory auditor (who must be completely independent and cannot be an employee), an internal auditor may be an internal salaried executive or an outside practicing firm.',
    tip: 'Internal Auditor MAY be an employee; Statutory Auditor CANNOT be an employee.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-27',
    categoryId: 'accounting',
    question:
      'For which of the following classes of companies is the appointment of an internal auditor COMPULSORY under Section 138?',
    answer: 'Every listed company',
    options: [
      'Every listed company',
      'One Person Companies (OPC) only',
      'Small partnership firms',
      'Dormant companies',
    ],
    explanation:
      'Rule 13 mandates that every listed company must appoint an internal auditor without exception, alongside unlisted public/private companies meeting specified financial thresholds.',
    tip: 'Every listed company must mandatorily appoint an Internal Auditor under Sec 138.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-28',
    categoryId: 'accounting',
    question:
      'What is the paid-up share capital threshold for an unlisted public company to require a mandatory internal auditor under Section 138?',
    answer: '₹50 crore or more',
    options: ['₹10 crore or more', '₹25 crore or more', '₹50 crore or more', '₹100 crore or more'],
    explanation:
      'Unlisted public companies with paid-up capital of ₹50 crore or more during the preceding financial year are legally mandated to appoint an internal auditor.',
    tip: 'Unlisted Public Co. Paid-up Capital threshold for Internal Audit = ₹50 crore or more.',
    difficulty: 'advanced',
  },
  {
    id: 'ic-audit-pdf-29',
    categoryId: 'accounting',
    question:
      'What is the turnover threshold triggering mandatory internal audit for an unlisted public company?',
    answer: '₹200 crore or more',
    options: ['₹100 crore or more', '₹200 crore or more', '₹500 crore or more', '₹50 crore or more'],
    explanation:
      'Under Rule 13, an unlisted public company with turnover of ₹200 crore or more during the preceding financial year must institute an internal audit.',
    tip: 'Turnover threshold for mandatory Internal Audit (both Unlisted Public & Private Co.) = ₹200 crore or more.',
    difficulty: 'advanced',
  },
  {
    id: 'ic-audit-pdf-30',
    categoryId: 'accounting',
    question:
      'For a private limited company, what turnover threshold mandates the appointment of an internal auditor?',
    answer: '₹200 crore or more',
    options: ['₹50 crore', '₹100 crore', '₹200 crore or more', '₹500 crore'],
    explanation:
      'A private company must appoint an internal auditor if its turnover reaches ₹200 crore or more, OR if outstanding loans/borrowings from banks/PFIs exceed ₹100 crore.',
    tip: 'Private company Internal Audit triggers: Turnover ≥ ₹200 Cr OR Loans > ₹100 Cr.',
    difficulty: 'advanced',
  },
  {
    id: 'ic-audit-pdf-31',
    categoryId: 'accounting',
    question: 'The scope, functioning, and reporting periodicity of an internal auditor is determined by:',
    answer: 'The Audit Committee or Board of Directors of the company',
    options: [
      'The Institute of Chartered Accountants of India (ICAI)',
      'The Audit Committee or Board of Directors of the company',
      'The Reserve Bank of India',
      'The statutory external auditor',
    ],
    explanation:
      'Under Section 138(2), the Audit Committee or Board, in consultation with the Internal Auditor, establishes the internal audit scope, work program, and reporting calendar.',
    tip: 'Sec 138(2): Audit Committee / Board determines the scope and functioning of Internal Audit.',
    difficulty: 'intermediate',
  },

  // Part 5: Statutory Auditor vs. Internal Auditor & SA 610 (Q32 – Q39)
  {
    id: 'ic-audit-pdf-32',
    categoryId: 'accounting',
    question:
      "Which Standard on Auditing (SA) deals with 'Using the Work of Internal Auditors' by the external statutory auditor?",
    answer: 'SA 610',
    options: ['SA 210', 'SA 610', 'SA 700', 'SA 500'],
    explanation:
      "SA 610 establishes standards and guidance when external auditors evaluate and place reliance upon the work of an entity's internal audit function.",
    tip: 'SA 610 = Using the Work of Internal Auditors.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-33',
    categoryId: 'accounting',
    question:
      'If the statutory auditor relies upon the findings and working papers of the internal auditor:',
    answer: 'The statutory auditor remains solely and entirely responsible for the final audit opinion',
    options: [
      'The internal auditor becomes legally liable for the statutory report',
      'The statutory auditor remains solely and entirely responsible for the final audit opinion',
      'Both auditors sign the external report jointly',
      'The statutory audit fee is reduced by 50% by law',
    ],
    explanation:
      'SA 610 unequivocally affirms that external auditors maintain sole responsibility for the audit opinion expressed; they cannot delegate or shift responsibility to internal auditors.',
    tip: 'Under SA 610, the Statutory Auditor retains 100% sole responsibility for the audit opinion.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-34',
    categoryId: 'accounting',
    question:
      'Which of the following areas can NEVER be delegated by a statutory auditor to an internal auditor?',
    answer: 'Assessing risk of material misstatement and framing the final audit opinion',
    options: [
      'Checking depreciation schedules',
      'Assessing risk of material misstatement and framing the final audit opinion',
      'Observing physical count of raw materials',
      'Reviewing supplier payment vouchers',
    ],
    explanation:
      'Core judgmental responsibilities—such as evaluating going concern, assessing overall control risk, and writing the final opinion—must be performed exclusively by the statutory auditor.',
    tip: 'Core audit judgments and final opinion can never be delegated to internal auditors.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-35',
    categoryId: 'accounting',
    question:
      'Can a statutory auditor be appointed simultaneously as the internal auditor of the same company?',
    answer: 'No, strictly prohibited under Section 144 of the Companies Act, 2013',
    options: [
      'Yes, to save professional fees',
      'No, strictly prohibited under Section 144 of the Companies Act, 2013',
      'Yes, if approved by 75% of shareholders',
      'Yes, with prior sanction of the Company Law Tribunal',
    ],
    explanation:
      'Section 144 prohibits statutory auditors from providing non-audit services—including internal audit, accounting/bookkeeping, or investment advisory—to protect their independence.',
    tip: 'Section 144 bars a Statutory Auditor from acting as Internal Auditor of the same company.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-36',
    categoryId: 'accounting',
    question:
      'What is the fundamental difference in the legal status of Internal Audit versus Statutory Audit?',
    answer:
      'Statutory audit is governed by legislation and reports to shareholders; internal audit reports to management',
    options: [
      'Statutory audit is voluntary; internal audit is always mandatory',
      'Statutory audit is governed by legislation and reports to shareholders; internal audit reports to management',
      'Internal audit requires a court warrant',
      'Statutory audit only covers cash books',
    ],
    explanation:
      'Statutory audits derive their authority from legislation (Companies Act) to safeguard external shareholders, whereas internal audits serve executive management and internal controls.',
    tip: 'Statutory Audit -> Shareholders; Internal Audit -> Management.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-37',
    categoryId: 'accounting',
    question:
      "Before using the specific work of an internal auditor, the external auditor must assess the internal auditor's:",
    answer: 'Objectivity, technical competence, and due professional care',
    options: [
      'Political affiliations',
      'Objectivity, technical competence, and due professional care',
      'Personal net worth',
      'Relationship with individual shareholders',
    ],
    explanation:
      'SA 610 requires testing the organizational status, professional qualifications, systematic working methods, and independence of the internal audit personnel.',
    tip: 'SA 610 evaluation criteria: Objectivity, Technical Competence, and Due Professional Care.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-38',
    categoryId: 'accounting',
    question: 'Direct assistance from internal auditors can be used by statutory auditors EXCEPT for:',
    answer: 'Matters involving significant professional judgment or high assessed risk of fraud',
    options: [
      'Routine data collection',
      'Matters involving significant professional judgment or high assessed risk of fraud',
      'Verifying bank pay-in slips',
      'Re-performing simple arithmetical additions',
    ],
    explanation:
      'External auditors are barred from using internal auditors for direct assistance on high-risk assessments or subjective accounting estimates.',
    tip: 'No direct assistance allowed on high fraud risk or significant judgment matters.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-39',
    categoryId: 'accounting',
    question: 'An internal auditor is considered to lack objectivity if they:',
    answer: 'Audit an operational function which they previously managed or operated recently',
    options: [
      'Audit an operational function which they previously managed or operated recently',
      'Hold professional CA qualifications',
      'Follow international standards on auditing',
      'Submit reports directly to the audit committee',
    ],
    explanation:
      'A self-review threat arises when an internal auditor audits operational processes or ledger systems they previously managed or designed.',
    tip: 'Auditing your own recent work creates a self-review threat and impairs objectivity.',
    difficulty: 'intermediate',
  },

  // Part 6: Internal Financial Controls (IFC) & Operational Audits (Q40 – Q46)
  {
    id: 'ic-audit-pdf-40',
    categoryId: 'accounting',
    question:
      'Under Section 143(3)(i) of the Companies Act, 2013, the statutory auditor must report on whether the company has:',
    answer:
      'Adequate Internal Financial Controls (IFC) system in place and its operating effectiveness',
    options: [
      'Maximum retail price on its products',
      'Adequate Internal Financial Controls (IFC) system in place and its operating effectiveness',
      '100% export-oriented production units',
      'Distributed dividend above 20%',
    ],
    explanation:
      "Section 143(3)(i) requires statutory auditors to explicitly report on the adequacy and operating effectiveness of an entity's Internal Financial Controls over Financial Reporting (ICFR).",
    tip: 'Sec 143(3)(i) = Statutory Auditor report on adequacy & effectiveness of Internal Financial Controls (IFC).',
    difficulty: 'advanced',
  },
  {
    id: 'ic-audit-pdf-41',
    categoryId: 'accounting',
    question:
      'In an ERP/IT environment, which control ensures that only authorized personnel can enter or alter journal entries?',
    answer: 'Role-Based Access Control (RBAC) and Maker-Checker authorization',
    options: [
      'Fire insurance policy',
      'Role-Based Access Control (RBAC) and Maker-Checker authorization',
      'Daily petty cash replenishment',
      'Printing daily daybooks',
    ],
    explanation:
      'RBAC limits accounting system modifications to designated users, and maker-checker rules mandate that every entry input by one clerk requires approval by another before posting.',
    tip: 'ERP journal security = Role-Based Access Control (RBAC) + Maker-Checker principle.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-42',
    categoryId: 'accounting',
    question:
      'Segregation of Duties (SoD) as an internal control principle requires separating which three functions?',
    answer: 'Authorization, Custody of assets, and Recording/Bookkeeping',
    options: [
      'Planning, Pricing, and Packaging',
      'Authorization, Custody of assets, and Recording/Bookkeeping',
      'Buying, Selling, and Advertising',
      'Auditing, Tax filing, and Dividend distribution',
    ],
    explanation:
      'Classic control doctrine dictates separating: (1) Authorizing transactions, (2) Holding physical asset custody, and (3) Recording accounting entries to prevent concealed fraud.',
    tip: 'SoD Triad: Separate Authorization, Custody, and Recording (ACR).',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-43',
    categoryId: 'accounting',
    question:
      'An Operational Audit conducted by an internal audit department is primarily designed to assess:',
    answer: "The 3 E's: Economy, Efficiency, and Effectiveness of operations",
    options: [
      "The 3 E's: Economy, Efficiency, and Effectiveness of operations",
      'The mathematical casting of trial balance ledgers only',
      'Compliance with national highway speed limits',
      'Personal bank accounts of non-executive directors',
    ],
    explanation:
      'Operational auditing reviews overall performance to identify waste, improve operational efficiency, and meet organizational objectives (Economy, Efficiency, and Effectiveness).',
    tip: "Operational Audit = 3 E's (Economy, Efficiency, Effectiveness).",
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-44',
    categoryId: 'accounting',
    question:
      "Which of the following is an example of an 'Administrative Control' rather than an 'Accounting Control'?",
    answer: 'Employee biometric attendance tracking and annual performance appraisals',
    options: [
      'Dual bank signatures for cheques over ₹1,00,000',
      'Employee biometric attendance tracking and annual performance appraisals',
      'Reconciling monthly bank statements',
      'Verification of cash vouchers before ledger entry',
    ],
    explanation:
      'Biometrics and performance appraisals serve administrative management goals, whereas bank reconciliations and voucher authorizations relate directly to financial records.',
    tip: 'HR/operational efficiency rules = Administrative Control; financial record safeguards = Accounting Control.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-45',
    categoryId: 'accounting',
    question:
      'When an enterprise establishes an internal control system, the financial cost of implementing the control should:',
    answer:
      'Not exceed the expected financial benefit or loss protected (Cost-Benefit Principle)',
    options: [
      "Always exceed the company's net profit",
      'Not exceed the expected financial benefit or loss protected (Cost-Benefit Principle)',
      'Equal exactly 15% of annual gross sales',
      'Be ignored completely',
    ],
    explanation:
      'Internal controls must follow the economic principle of cost-benefit: controls should not be more expensive to run than the potential loss from the risk they mitigate.',
    tip: 'Cost of a control should never exceed the expected benefit/risk reduction.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-46',
    categoryId: 'accounting',
    question: 'A Management Audit conducted by an internal audit division evaluates:',
    answer: 'The quality, policies, and decision-making efficiency of the management team',
    options: [
      'The physical stamina of workers',
      'The quality, policies, and decision-making efficiency of the management team',
      'Statutory income tax filings only',
      'Machine depreciation rates',
    ],
    explanation:
      'A management audit appraises the effectiveness of management decisions, policies, resource allocation, and overall strategic stewardship.',
    tip: 'Management Audit evaluates management policies and decision-making effectiveness.',
    difficulty: 'beginner',
  },

  // Part 7: Advanced Case Scenarios & Exam Traps (Q47 – Q50)
  {
    id: 'ic-audit-pdf-47',
    categoryId: 'accounting',
    question:
      'If the storekeeper is also given the duty to maintain the stock ledger and place purchase orders, the internal check defect is:',
    answer:
      'Lack of segregation between custody of assets, record-keeping, and transaction authorization',
    options: [
      'Complete compliance with ISO 9001',
      'Lack of segregation between custody of assets, record-keeping, and transaction authorization',
      'Excessive operational division of labor',
      'Violation of GST invoice rules',
    ],
    explanation:
      'Allowing one individual to place orders, maintain ledgers, and hold physical stock creates severe fraud risk; stolen goods can be concealed by altering inventory sheets.',
    tip: 'Combining storekeeping (custody), stock ledger (recording), and POs (authorization) violates Segregation of Duties.',
    difficulty: 'intermediate',
  },
  {
    id: 'ic-audit-pdf-48',
    categoryId: 'accounting',
    question:
      'Surprise checks conducted by management on physical cash in the safe and raw material inventory are examples of:',
    answer: 'Internal control monitoring activities',
    options: [
      'Internal control monitoring activities',
      'External statutory auditing',
      'Routine journalizing',
      'Disclaimer of opinion',
    ],
    explanation:
      'Periodic surprise inspections verify that custody controls work as intended and act as a deterrent against misappropriation.',
    tip: 'Surprise physical cash/inventory counts = Internal Control Monitoring.',
    difficulty: 'beginner',
  },
  {
    id: 'ic-audit-pdf-49',
    categoryId: 'accounting',
    question:
      'Which of the following conditions mandates the appointment of an internal auditor for a private limited company under Rule 13 of Companies (Accounts) Rules, 2014?',
    answer:
      'Outstanding loans or borrowings from banks/PFIs exceeding ₹100 crore at any point during the preceding FY',
    options: [
      'Paid-up capital exceeding ₹10 crore',
      'Outstanding loans or borrowings from banks/PFIs exceeding ₹100 crore at any point during the preceding FY',
      'Net profit exceeding ₹1 crore',
      'Having more than 20 employees',
    ],
    explanation:
      'For private companies, internal audit is mandatory if: (1) Turnover is ₹200 crore or more, OR (2) Outstanding bank/PFI loans/borrowings exceed ₹100 crore at any point during the preceding year.',
    tip: 'Private Co. has NO paid-up capital criterion for Sec 138; only Turnover ≥ ₹200 Cr OR Loans > ₹100 Cr.',
    difficulty: 'advanced',
  },
  {
    id: 'ic-audit-pdf-50',
    categoryId: 'accounting',
    question:
      'Which phrase best summarizes the complementary relationship between the internal auditor and the statutory auditor?',
    answer:
      'The internal auditor works continuously for operational efficiency; the statutory auditor examines financial reliability for external stakeholders',
    options: [
      'The internal auditor is a servant; the statutory auditor is an enemy',
      'The internal auditor works continuously for operational efficiency; the statutory auditor examines financial reliability for external stakeholders',
      'The statutory auditor reports to the internal auditor',
      'Both auditors share identical criminal liabilities for tax evasion',
    ],
    explanation:
      'Internal auditors focus internally on ongoing operations, risk management, and compliance; external auditors review the completed statements to provide independent assurance to outside investors.',
    tip: 'Internal Auditor = continuous internal operational assurance; Statutory Auditor = independent external financial assurance.',
    difficulty: 'beginner',
  },
];
