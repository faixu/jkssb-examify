import { Flashcard } from '../../types';

export const ACCOUNTING_QUESTIONS: Flashcard[] = [
  {
    "id": "acc-1",
    "categoryId": "accounting",
    "question": "What is the fundamental accounting equation under double-entry bookkeeping?",
    "answer": "Assets = Liabilities + Equity (Capital)",
    "options": [
      "Assets = Liabilities + Equity (Capital)",
      "Assets = Revenue - Expenses",
      "Equity = Assets + Liabilities",
      "Capital = Assets + Revenue"
    ],
    "explanation": "The balance sheet equation reflects that total economic resources owned (Assets) are financed by outside creditors (Liabilities) and owner capital (Equity).",
    "tip": "Fundamental equation: Assets = Liabilities + Capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-2",
    "categoryId": "accounting",
    "question": "Under double-entry bookkeeping, what is the effect of a Debit entry on an Asset account and an Expense account?",
    "answer": "Increases both Asset and Expense balances",
    "options": [
      "Increases both Asset and Expense balances",
      "Decreases Asset and increases Expense",
      "Decreases both Asset and Expense balances",
      "Increases Liabilities and reduces Capital"
    ],
    "explanation": "Debits increase Assets, Expenses, and Drawings. Credits increase Liabilities, Incomes/Revenues, and Capital.",
    "tip": "DEAD CLIC: Debits increase Expenses, Assets, Drawings.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-3",
    "categoryId": "accounting",
    "question": "Which accounting concept assumes that an enterprise will continue its business operations for the foreseeable future without the intention of liquidation?",
    "answer": "Going Concern Concept",
    "options": [
      "Going Concern Concept",
      "Money Measurement Concept",
      "Accounting Period Concept",
      "Business Entity Concept"
    ],
    "explanation": "Going concern assumes an indefinite operational life, allowing assets to be recorded at historical cost rather than forced liquidation value.",
    "tip": "Going concern assumes the business will operate indefinitely.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-4",
    "categoryId": "accounting",
    "question": "According to the Business Entity Concept, the personal transactions of the business owner are:",
    "answer": "Treated as completely separate from the financial transactions of the enterprise",
    "options": [
      "Treated as completely separate from the financial transactions of the enterprise",
      "Combined directly into company operating expenses",
      "Recorded only if the business incurs a net loss",
      "Exempt from all internal financial audits"
    ],
    "explanation": "Under the Business Entity Concept, a firm is treated as a separate legal and accounting entity distinct from its proprietors, which is why proprietor capital is shown as a liability.",
    "tip": "Business Entity Concept separates business finances from owner personal affairs.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-5",
    "categoryId": "accounting",
    "question": "Which accounting principle requires revenues and their associated direct expenses to be recognized in the same accounting period?",
    "answer": "Matching Principle",
    "options": [
      "Matching Principle",
      "Cost Principle",
      "Realization Principle",
      "Materiality Convention"
    ],
    "explanation": "The Matching Principle dictates that expenses incurred to generate revenue must be matched against that revenue in the income statement of the same period.",
    "tip": "Matching Principle: Match expenses with the revenue they generate.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-6",
    "categoryId": "accounting",
    "question": "What is the journal entry to record cash invested by the proprietor to start a new business?",
    "answer": "Debit Cash Account, Credit Capital Account",
    "options": [
      "Debit Cash Account, Credit Capital Account",
      "Debit Capital Account, Credit Cash Account",
      "Debit Drawings Account, Credit Cash Account",
      "Debit Bank Account, Credit Loan Account"
    ],
    "explanation": "Cash (an asset) increases, so it is debited. Owner's equity (Capital) increases, so it is credited.",
    "tip": "Capital brought in: Dr. Cash, Cr. Capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-7",
    "categoryId": "accounting",
    "question": "Goods purchased on credit from a vendor named \"Rohan\" are recorded in the journal by:",
    "answer": "Debit Purchases Account, Credit Rohan’s Account",
    "options": [
      "Debit Purchases Account, Credit Rohan’s Account",
      "Debit Rohan’s Account, Credit Purchases Account",
      "Debit Cash Account, Credit Rohan’s Account",
      "Debit Sales Account, Credit Purchases Account"
    ],
    "explanation": "Purchases (an expense/trading asset) increases, so Purchases A/c is debited. Creditor liability increases, so Rohan’s personal account is credited.",
    "tip": "Credit purchase: Dr. Purchases, Cr. Creditor.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-8",
    "categoryId": "accounting",
    "question": "When the proprietor withdraws cash from the business for personal domestic use, the journal entry is:",
    "answer": "Debit Drawings Account, Credit Cash Account",
    "options": [
      "Debit Drawings Account, Credit Cash Account",
      "Debit Cash Account, Credit Drawings Account",
      "Debit Capital Account, Credit Bank Account",
      "Debit Salary Expense, Credit Cash Account"
    ],
    "explanation": "Drawings reduce owner’s equity and carry a debit balance. Cash asset decreases and is credited.",
    "tip": "Personal cash withdrawal: Dr. Drawings, Cr. Cash.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-9",
    "categoryId": "accounting",
    "question": "A Compound Journal Entry is defined as an entry that:",
    "answer": "Involves more than one debit and/or more than one credit account simultaneously",
    "options": [
      "Involves more than one debit and/or more than one credit account simultaneously",
      "Is recorded across two consecutive accounting years",
      "Corrects an error of principle in prior ledgers",
      "Involves only non-cash barter trade transactions"
    ],
    "explanation": "A compound entry records multiple debits or credits in a single transaction (e.g., Cash Dr. 950, Discount Allowed Dr. 50, to Debtor Cr. 1,000).",
    "tip": "Compound entry has multiple debits or credits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-10",
    "categoryId": "accounting",
    "question": "The brief explanatory narration written below every journal entry is known as:",
    "answer": "Narration",
    "options": [
      "Narration",
      "Folio Index",
      "Posting Stamp",
      "Voucher Number"
    ],
    "explanation": "The Narration provides a concise summary and description of the transaction immediately beneath the debits and credits in the journal.",
    "tip": "Narration explains the journal transaction.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-11",
    "categoryId": "accounting",
    "question": "In the Voucher System of accounting, which document serves as written authorization for cash or cheque disbursements?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Credit Voucher (Receipt Voucher)",
      "Transfer Voucher",
      "Petty Cash Voucher"
    ],
    "explanation": "Debit Vouchers record cash and bank payments, showing the accounts to be debited and signatures of authorizing officials.",
    "tip": "Payment = Debit Voucher; Receipt = Credit Voucher.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-12",
    "categoryId": "accounting",
    "question": "What is a \"Supporting Voucher\" in financial bookkeeping?",
    "answer": "Original external documentary evidence like cash memos, bills, or receipts attached to support a voucher",
    "options": [
      "Original external documentary evidence like cash memos, bills, or receipts attached to support a voucher",
      "A duplicate copy sent to the commercial tax department",
      "A promissory note signed by the bank manager",
      "An internal note authorizing petty cash overdraws"
    ],
    "explanation": "Supporting vouchers are original primary documents (supplier invoices, railway receipts, counterfoils) verifying the validity of the transaction.",
    "tip": "Supporting Voucher = Source document (invoice/bill) attached to internal voucher.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-13",
    "categoryId": "accounting",
    "question": "Non-cash accounting transactions like depreciation, credit sales of fixed assets, and bad debt write-offs are recorded using:",
    "answer": "Transfer Voucher (Journal Voucher)",
    "options": [
      "Transfer Voucher (Journal Voucher)",
      "Payment Voucher",
      "Receipt Voucher",
      "Petty Cash Voucher"
    ],
    "explanation": "Transfer vouchers document transactions that do not involve cash or bank receipts/payments.",
    "tip": "Transfer Voucher = Non-cash and adjustment entries.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-14",
    "categoryId": "accounting",
    "question": "What is the primary objective of preparing a Bank Reconciliation Statement (BRS)?",
    "answer": "To reconcile and explain differences between the Cash Book bank balance and the Bank Pass Book balance",
    "options": [
      "To reconcile and explain differences between the Cash Book bank balance and the Bank Pass Book balance",
      "To calculate the firm's quarterly corporate income tax liability",
      "To balance customer accounts in the sales ledger",
      "To verify physical cash in the office strong room"
    ],
    "explanation": "BRS reconciles the differences between the customer's bank column of the Cash Book and the bank's statement/Pass Book due to timing differences and errors.",
    "tip": "BRS reconciles Cash Book with Bank Pass Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-15",
    "categoryId": "accounting",
    "question": "When cheques are issued to suppliers but not yet presented for payment, how is this item reconciled when starting from Cash Book balance?",
    "answer": "Added to Cash Book balance",
    "options": [
      "Added to Cash Book balance",
      "Deducted from Cash Book balance",
      "Multiplied by bank interest rate",
      "Ignored completely"
    ],
    "explanation": "The Cash Book balance was reduced upon issuing the cheque. Since the bank has not deducted it yet, adding it reconciles to the higher Pass Book balance.",
    "tip": "Cheques issued but not presented = ADD to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-16",
    "categoryId": "accounting",
    "question": "Bank charges debited by the bank in the Pass Book but not yet recorded in the Cash Book should be:",
    "answer": "Deducted from Cash Book balance",
    "options": [
      "Deducted from Cash Book balance",
      "Added to Cash Book balance",
      "Credited to partner equity",
      "Entered in the sales journal"
    ],
    "explanation": "Bank charges decrease the Pass Book balance. To reconcile from Cash Book, bank charges must be subtracted from Cash Book balance.",
    "tip": "Bank charges = Deduct from Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-17",
    "categoryId": "accounting",
    "question": "An \"unfavourable\" or \"overdraft\" balance in the Bank Pass Book is represented as a:",
    "answer": "Debit balance in Pass Book",
    "options": [
      "Debit balance in Pass Book",
      "Credit balance in Pass Book",
      "Zero balance in Pass Book",
      "Favourable asset balance"
    ],
    "explanation": "For the bank, an overdraft is a loan (an asset to the bank), so it reflects as a Debit balance in the Pass Book.",
    "tip": "Pass Book Debit = Overdraft (liability of customer).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-18",
    "categoryId": "accounting",
    "question": "Which financial ratio measures the ability of a firm to meet short-term obligations using its most liquid quick assets without relying on inventory?",
    "answer": "Quick Ratio (Acid-Test Ratio)",
    "options": [
      "Quick Ratio (Acid-Test Ratio)",
      "Current Ratio",
      "Debt-Equity Ratio",
      "Gross Profit Ratio"
    ],
    "explanation": "Quick Ratio = (Current Assets - Inventory - Prepaid Expenses) / Current Liabilities. It measures immediate liquidity.",
    "tip": "Quick Ratio excludes Inventory and Prepaid expenses.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-19",
    "categoryId": "accounting",
    "question": "What is the formula for calculating Net Working Capital?",
    "answer": "Current Assets minus Current Liabilities",
    "options": [
      "Current Assets minus Current Liabilities",
      "Total Assets minus Total Liabilities",
      "Fixed Assets minus Long-term Debt",
      "Cash plus Marketable Securities"
    ],
    "explanation": "Working Capital = Current Assets - Current Liabilities. A positive net working capital indicates financial health to cover short-term debt.",
    "tip": "Working Capital = CA - CL.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-20",
    "categoryId": "accounting",
    "question": "Under the Indian Partnership Act, 1932, if the partnership deed is silent, what is the rule regarding interest on partner's capital?",
    "answer": "No interest on capital is allowed",
    "options": [
      "No interest on capital is allowed",
      "6% per annum is allowed",
      "12% per annum is allowed",
      "Allowed at the bank prime lending rate"
    ],
    "explanation": "Section 13(c) provides that in the absence of an agreement, no interest on capital is payable to any partner.",
    "tip": "No deed = NO interest on capital; partner loan gets 6%.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-21",
    "categoryId": "accounting",
    "question": "In the absence of a partnership deed, what rate of interest is payable on an advance/loan given by a partner to the partnership firm?",
    "answer": "6% per annum",
    "options": [
      "6% per annum",
      "10% per annum",
      "12% per annum",
      "Zero percent"
    ],
    "explanation": "Section 13(d) of the Indian Partnership Act, 1932 awards 6% p.a. interest on advances made by a partner beyond agreed capital.",
    "tip": "Interest on partner loan without deed = 6% per annum.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-22",
    "categoryId": "accounting",
    "question": "Under the \"Fixed Capital Method\" of partnership, which account is maintained to record drawings, interest on capital, and share of profit?",
    "answer": "Partner's Current Account",
    "options": [
      "Partner's Current Account",
      "Partner's Capital Account",
      "Trading Account",
      "P&L Suspense Account"
    ],
    "explanation": "When capitals are fixed, the Capital Account stays constant, while recurring transactions are posted to the Current Account.",
    "tip": "Fixed capital system = Capital Account + Current Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-23",
    "categoryId": "accounting",
    "question": "What is the formula for calculating the \"Sacrificing Ratio\" upon the admission of a new partner into a partnership firm?",
    "answer": "Old Ratio minus New Ratio",
    "options": [
      "Old Ratio minus New Ratio",
      "New Ratio minus Old Ratio",
      "Old Ratio plus Gaining Ratio",
      "Capital Ratio multiplied by New Ratio"
    ],
    "explanation": "Sacrificing Ratio = Old Profit Share - New Profit Share. Existing partners sacrifice profit share to accommodate the incoming partner.",
    "tip": "Sacrificing Ratio = Old Share - New Share.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-24",
    "categoryId": "accounting",
    "question": "In the Super Profit method of partnership goodwill valuation, \"Super Profit\" is defined as:",
    "answer": "Average Maintainable Profit minus Normal Profit on Capital Employed",
    "options": [
      "Average Maintainable Profit minus Normal Profit on Capital Employed",
      "Total Sales minus Total Purchases",
      "Net Profit divided by Number of Partners",
      "Gross Profit minus Operating Overheads"
    ],
    "explanation": "Super Profit is the excess of actual average profit over normal expected return: Super Profit = Actual Profit - Normal Profit.",
    "tip": "Super Profit = Actual Average Profit - Normal Profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-25",
    "categoryId": "accounting",
    "question": "What is the principal book of accounts that contains all permanent asset, liability, capital, revenue, and expense accounts called?",
    "answer": "Ledger",
    "options": [
      "Ledger",
      "Journal",
      "Trial Balance",
      "Cash Book"
    ],
    "explanation": "The Ledger is the \"Principal Book\" of accounts where classified and summarized information from journals is posted.",
    "tip": "Journal = Book of Original Entry; Ledger = Principal Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-26",
    "categoryId": "accounting",
    "question": "In a ledger account, what does the column \"J.F.\" stand for?",
    "answer": "Journal Folio",
    "options": [
      "Journal Folio",
      "Journal File",
      "Judicial Form",
      "Joint Finance"
    ],
    "explanation": "J.F. stands for Journal Folio, referencing the specific page number of the journal where the original entry was recorded.",
    "tip": "J.F. in ledger = Journal Folio; L.F. in journal = Ledger Folio.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-27",
    "categoryId": "accounting",
    "question": "If the total of the debit side of an account exceeds the total of the credit side, the account is said to have a:",
    "answer": "Debit Balance",
    "options": [
      "Debit Balance",
      "Credit Balance",
      "Zero Balance",
      "Overdraft Balance"
    ],
    "explanation": "When Debit Total > Credit Total, the excess represents a Debit Balance, carried down on the credit side as \"By Balance c/d\".",
    "tip": "Debit > Credit = Debit Balance.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-28",
    "categoryId": "accounting",
    "question": "A transaction that affects both the Cash column and Bank column of the Cash Book at the same time is known as a:",
    "answer": "Contra Entry",
    "options": [
      "Contra Entry",
      "Compound Entry",
      "Adjusting Entry",
      "Transfer Entry"
    ],
    "explanation": "A Contra Entry records internal movement between Cash and Bank (e.g. depositing cash into bank), marked with \"C\" in L.F.",
    "tip": "Contra Entry (C): Cash to Bank or Bank to Cash.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-29",
    "categoryId": "accounting",
    "question": "Under the \"Imprest System\" of petty cash, what amount is reimbursed to the petty cashier at the end of each period?",
    "answer": "The exact amount spent during that period",
    "options": [
      "The exact amount spent during that period",
      "The fixed starting float amount",
      "Half of the remaining balance",
      "A random estimated bonus"
    ],
    "explanation": "In the imprest system, the petty cashier is reimbursed the exact sum expended on vouchers to restore the original float.",
    "tip": "Imprest system restores the original float by reimbursing total expenses spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-30",
    "categoryId": "accounting",
    "question": "Which auditing technique is known as the \"Backbone\" or \"Soul\" of auditing, verifying documentary proof for recorded book entries?",
    "answer": "Vouching",
    "options": [
      "Vouching",
      "Verification",
      "Valuation",
      "Depreciation calculation"
    ],
    "explanation": "Vouching is the auditor’s examination of vouchers, invoices, and receipts to authenticate that transactions are valid and authorized.",
    "tip": "Vouching is the essence of auditing.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-31",
    "categoryId": "accounting",
    "question": "What is the key difference between \"Vouching\" and \"Verification\" in financial audit?",
    "answer": "Vouching examines transactions in books; Verification inspects the existence and title of balance sheet assets/liabilities",
    "options": [
      "Vouching examines transactions in books; Verification inspects the existence and title of balance sheet assets/liabilities",
      "Vouching is done by tax officers, while verification is internal",
      "Verification applies only to petty cash entries",
      "There is no distinction between the two terms"
    ],
    "explanation": "Vouching establishes that transactions recorded in journals occurred. Verification confirms that assets and liabilities on the balance sheet truly exist and belong to the firm.",
    "tip": "Vouching tests transactions; Verification confirms balance sheet assets.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-32",
    "categoryId": "accounting",
    "question": "Who is recognized as the \"Father of Modern Accounting\" for publishing the first systematic treatise on Double Entry Bookkeeping in Venice in 1494?",
    "answer": "Luca Pacioli",
    "options": [
      "Luca Pacioli",
      "Adam Smith",
      "Alfred Marshall",
      "Arthur Pigou"
    ],
    "explanation": "Fra Luca Pacioli, an Italian mathematician and Franciscan friar, published \"Summa de Arithmetica\" in 1494, describing the double-entry bookkeeping system.",
    "tip": "Luca Pacioli = Father of Double Entry Bookkeeping (1494).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-33",
    "categoryId": "accounting",
    "question": "According to the Golden Rules of Accounting, what is the rule for \"Real Accounts\" (tangible and intangible assets)?",
    "answer": "Debit what comes in, Credit what goes out",
    "options": [
      "Debit what comes in, Credit what goes out",
      "Debit the receiver, Credit the giver",
      "Debit all expenses and losses, Credit all incomes and gains",
      "Debit liabilities, Credit assets"
    ],
    "explanation": "Real Accounts: Debit what comes in, Credit what goes out. Personal Accounts: Debit receiver, Credit giver. Nominal Accounts: Debit expenses, Credit gains.",
    "tip": "Real Accounts: Dr what comes in, Cr what goes out.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-34",
    "categoryId": "accounting",
    "question": "What is the primary purpose of preparing a Trial Balance?",
    "answer": "To check the arithmetical accuracy of ledger postings",
    "options": [
      "To check the arithmetical accuracy of ledger postings",
      "To calculate net taxable profit of the business",
      "To provide certified valuation of corporate assets",
      "To determine dividend distributions for stockholders"
    ],
    "explanation": "A Trial Balance lists debit and credit balances of all ledger accounts to prove arithmetical equality in double entry.",
    "tip": "Trial Balance verifies arithmetical accuracy of ledger accounts.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-35",
    "categoryId": "accounting",
    "question": "Treating the purchase of an office building as a routine \"Repairs and Maintenance\" expense is an example of which error?",
    "answer": "Error of Principle",
    "options": [
      "Error of Principle",
      "Error of Omission",
      "Error of Commission",
      "Compensating Error"
    ],
    "explanation": "An Error of Principle violates accounting fundamentals by misclassifying capital expenditure as revenue expenditure (or vice versa).",
    "tip": "Capital vs Revenue confusion = Error of Principle.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-36",
    "categoryId": "accounting",
    "question": "Which of the following errors will NOT cause the Trial Balance totals to disagree?",
    "answer": "Complete omission of a transaction from the books",
    "options": [
      "Complete omission of a transaction from the books",
      "Posting an entry to the wrong side of an account",
      "Wrong footing (totaling) of a subsidiary book",
      "Entering ₹500 on debit side and ₹50 on credit side"
    ],
    "explanation": "If a transaction is completely omitted from both debit and credit sides, the equality of trial balance totals is maintained.",
    "tip": "Errors of omission, principle, and compensating errors do not disrupt trial balance equality.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-37",
    "categoryId": "accounting",
    "question": "When the debit and credit totals of a Trial Balance do not tally, the temporary difference is posted to which account?",
    "answer": "Suspense Account",
    "options": [
      "Suspense Account",
      "Capital Account",
      "P&L Adjustment Account",
      "Contingency Reserve"
    ],
    "explanation": "A Suspense Account is opened to balance the trial balance temporarily while the bookkeeper traces and rectifies errors.",
    "tip": "Difference in trial balance goes to Suspense Account.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-38",
    "categoryId": "accounting",
    "question": "What is the balancing figure of a Trading Account?",
    "answer": "Gross Profit or Gross Loss",
    "options": [
      "Gross Profit or Gross Loss",
      "Net Profit or Net Loss",
      "Operating Cash Flow",
      "Retained Earnings"
    ],
    "explanation": "The Trading Account matches sales and closing stock against opening stock, purchases, and direct factory expenses to determine Gross Profit/Loss.",
    "tip": "Trading Account reveals Gross Profit/Loss.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-39",
    "categoryId": "accounting",
    "question": "What is the formula to calculate \"Cost of Goods Sold\" (COGS)?",
    "answer": "Opening Stock + Net Purchases + Direct Expenses - Closing Stock",
    "options": [
      "Opening Stock + Net Purchases + Direct Expenses - Closing Stock",
      "Gross Sales minus Net Profit",
      "Total Purchases + Indirect Expenses - Closing Stock",
      "Gross Profit plus Operating Overheads"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses (factory wages, carriage inwards, freight) - Closing Stock.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-40",
    "categoryId": "accounting",
    "question": "Which of the following expenses is debited to the Profit and Loss Account (and NOT the Trading Account)?",
    "answer": "Office Rent and Salaries",
    "options": [
      "Office Rent and Salaries",
      "Factory Wages",
      "Carriage Inwards",
      "Freight and Clearing Charges on Purchases"
    ],
    "explanation": "Direct factory expenses are debited to the Trading Account. Indirect administrative and selling expenses (like office rent, staff salaries) go to Profit & Loss.",
    "tip": "Direct expenses = Trading A/c; Indirect expenses = P&L A/c.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-41",
    "categoryId": "accounting",
    "question": "The arrangement of assets and liabilities on a Balance Sheet in the order of liquidity or permanence is known as:",
    "answer": "Marshalling of the Balance Sheet",
    "options": [
      "Marshalling of the Balance Sheet",
      "Balancing of Ledger",
      "Consolidation",
      "Vouching"
    ],
    "explanation": "Marshalling is the systematic grouping and sequencing of assets and liabilities: Order of Liquidity (cash first) or Order of Permanence (land/buildings first).",
    "tip": "Marshalling = Arranging Balance Sheet in order of permanence or liquidity.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-42",
    "categoryId": "accounting",
    "question": "What is the primary objective of \"Social Accounting\"?",
    "answer": "To measure and report the socio-economic and environmental impacts of an enterprise on the community",
    "options": [
      "To measure and report the socio-economic and environmental impacts of an enterprise on the community",
      "To calculate payroll contributions for social welfare pensions",
      "To audit public social media advertising campaigns",
      "To track trade transactions between municipal cooperatives"
    ],
    "explanation": "Social Accounting evaluates corporate social responsibility (CSR), pollution control, community development, and employee welfare alongside financial profit.",
    "tip": "Social Accounting evaluates corporate contribution and impact on society.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-43",
    "categoryId": "accounting",
    "question": "What is a \"Social Audit\"?",
    "answer": "An independent appraisal of how well an enterprise is discharging its social obligations and ethical goals",
    "options": [
      "An independent appraisal of how well an enterprise is discharging its social obligations and ethical goals",
      "A routine inspection conducted by commercial tax inspectors",
      "An annual audit of shareholder voting rights",
      "Checking mathematical totals of petty cash registers"
    ],
    "explanation": "A social audit assesses an organization's social performance, community welfare activities, fair trade practices, and ethical behavior.",
    "tip": "Social audit assesses ethics, community benefit, and social responsibility.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-44",
    "categoryId": "accounting",
    "question": "In single-entry bookkeeping (accounting from incomplete records), how is net profit determined using the Statement of Affairs method?",
    "answer": "Closing Capital + Drawings - Fresh Capital Introduced - Opening Capital",
    "options": [
      "Closing Capital + Drawings - Fresh Capital Introduced - Opening Capital",
      "Total Sales minus Total Purchases",
      "Total Assets minus Total Liabilities",
      "Opening Capital plus Current Assets"
    ],
    "explanation": "Under the Statement of Affairs method: Net Profit = (Closing Capital + Drawings) - (Opening Capital + Additional Capital introduced).",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Additional Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-45",
    "categoryId": "accounting",
    "question": "What is the primary role of the Public Financial Management System (PFMS), managed by the Controller General of Accounts (CGA), Ministry of Finance?",
    "answer": "A web-based transaction system for real-time tracking of public fund releases and Direct Benefit Transfer (DBT)",
    "options": [
      "A web-based transaction system for real-time tracking of public fund releases and Direct Benefit Transfer (DBT)",
      "A personal budgeting portal for individual taxpayers",
      "A software used exclusively by private commercial banks to trade equities",
      "An automated customs clearance app at international airports"
    ],
    "explanation": "PFMS tracks end-to-end flow of funds under government welfare schemes, ensuring transparency, preventing fund parking, and processing DBT transfers.",
    "tip": "PFMS tracks scheme funds & processes DBT payments directly to beneficiaries.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-46",
    "categoryId": "accounting",
    "question": "Which module of PFMS is used by implementing agencies at the district and block levels to manage scheme expenditures and fund transfers?",
    "answer": "EAT Module (Expenditure, Advance, and Transfer)",
    "options": [
      "EAT Module (Expenditure, Advance, and Transfer)",
      "GST Module",
      "CASH Module",
      "AUDIT Module"
    ],
    "explanation": "The EAT module of PFMS allows implementing agencies to disburse scheme payments and report real-time fund utilization.",
    "tip": "EAT module = Expenditure, Advance, Transfer.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-47",
    "categoryId": "accounting",
    "question": "Under which Article of the Constitution of India is the \"Consolidated Fund of India\" established?",
    "answer": "Article 266(1)",
    "options": [
      "Article 266(1)",
      "Article 267(1)",
      "Article 280",
      "Article 112"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund of India into which all government revenues, loans, and loan repayments are deposited. No funds can be withdrawn without parliamentary sanction.",
    "tip": "Consolidated Fund = Article 266(1); Contingency Fund = Article 267(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-48",
    "categoryId": "accounting",
    "question": "The \"Contingency Fund of India\" (Article 267) is held at the disposal of which constitutional authority to meet urgent unforeseen expenditures pending parliamentary approval?",
    "answer": "The President of India (administered by Finance Secretary)",
    "options": [
      "The President of India (administered by Finance Secretary)",
      "The Comptroller and Auditor General (CAG)",
      "The Governor of Reserve Bank of India",
      "The Speaker of the Lok Sabha"
    ],
    "explanation": "The Contingency Fund of India (corpus ₹30,000 crore) is placed at the disposal of the President of India to meet unforeseen expenditures.",
    "tip": "Contingency Fund is held by the President of India.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-49",
    "categoryId": "accounting",
    "question": "Transactions related to Provident Funds, small savings, and judicial deposits where the government acts merely as a custodian or banker flow into which fund?",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Public Account of India (Article 266(2))",
      "Consolidated Fund of India",
      "Contingency Fund of India",
      "National Investment Fund"
    ],
    "explanation": "Article 266(2) governs the Public Account of India. Disbursements do not require legislative appropriation.",
    "tip": "Public Account (Art 266(2)): Government acts as custodian/banker.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-50",
    "categoryId": "accounting",
    "question": "Under Article 148 of the Constitution of India, who acts as the supreme guardian of the public purse and auditor of government accounts?",
    "answer": "Comptroller and Auditor General of India (CAG)",
    "options": [
      "Comptroller and Auditor General of India (CAG)",
      "Finance Commission Chairman",
      "NITI Aayog CEO",
      "Governor of RBI"
    ],
    "explanation": "The CAG audits all receipts and expenditures of the Government of India and the States, submitting audit reports to the President or Governor under Article 151.",
    "tip": "CAG (Article 148) is the Supreme Audit Institution of India.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-51",
    "categoryId": "accounting",
    "question": "Under the Indian Income Tax Act, 1961, what is the twelve-month financial period in which income is EARNED called?",
    "answer": "Previous Year",
    "options": [
      "Previous Year",
      "Assessment Year",
      "Calendar Year",
      "Accounting Cycle"
    ],
    "explanation": "Income is earned during the \"Previous Year\" (1 April to 31 March) and evaluated/assessed to tax in the immediately following \"Assessment Year\".",
    "tip": "Income earned in Previous Year; evaluated/taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-52",
    "categoryId": "accounting",
    "question": "What is Tax Deducted at Source (TDS) under the Income Tax Act?",
    "answer": "A mechanism where tax is deducted at source by the payer at the time of making specified payments and remitted to the government",
    "options": [
      "A mechanism where tax is deducted at source by the payer at the time of making specified payments and remitted to the government",
      "A voluntary lump-sum surcharge paid by senior citizens",
      "A custom tariff levied on imported electronics",
      "A fine imposed for filing tax returns after the deadline"
    ],
    "explanation": "TDS ensures regular collection of tax at the source of income generation (salaries, interest, professional fees, contractor payments).",
    "tip": "TDS = Tax deducted at source of payment.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-53",
    "categoryId": "accounting",
    "question": "Under the Goods and Services Tax (GST) in India, which tax is levied on an INTER-STATE supply of goods or services?",
    "answer": "Integrated GST (IGST)",
    "options": [
      "Integrated GST (IGST)",
      "Central GST (CGST)",
      "State GST (SGST)",
      "Union Territory GST (UTGST)"
    ],
    "explanation": "Inter-state supplies are subject to Integrated GST (IGST), levied and collected by the Centre and shared with the consuming State.",
    "tip": "Inter-state supply = IGST; Intra-state supply = CGST + SGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-54",
    "categoryId": "accounting",
    "question": "What is \"Input Tax Credit\" (ITC) under the GST framework?",
    "answer": "Credit claimed for GST paid on business purchases to offset GST liability on sales, eliminating tax cascading",
    "options": [
      "Credit claimed for GST paid on business purchases to offset GST liability on sales, eliminating tax cascading",
      "A cash subsidy transferred into corporate bank accounts",
      "An exemption from paying corporate tax on exported goods",
      "A loan granted by state industrial development boards"
    ],
    "explanation": "ITC allows registered taxpayers to deduct tax paid on procurement of inputs/services from tax payable on outward supplies, preventing tax on tax.",
    "tip": "ITC prevents cascading (tax on tax) by crediting input taxes.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-55",
    "categoryId": "accounting",
    "question": "Under which Article of the Constitution of India was the \"GST Council\" established?",
    "answer": "Article 279A",
    "options": [
      "Article 279A",
      "Article 246A",
      "Article 269A",
      "Article 280"
    ],
    "explanation": "Article 279A, inserted by the 101st Constitutional Amendment Act, established the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-56",
    "categoryId": "accounting",
    "question": "What is \"Zero-Based Budgeting\" (ZBB)?",
    "answer": "A budgeting technique where every expenditure must be justified from a zero base for each new budget cycle",
    "options": [
      "A budgeting technique where every expenditure must be justified from a zero base for each new budget cycle",
      "A budget that maintains zero debt on corporate balance sheets",
      "Adjusting prior year actuals upward by the rate of inflation",
      "A budget prepared strictly for non-operational holding entities"
    ],
    "explanation": "Unlike traditional incremental budgeting, ZBB assumes a clean slate (zero baseline); every departmental activity must prove its necessity.",
    "tip": "ZBB = Start from zero every year; justify all expenses.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-57",
    "categoryId": "accounting",
    "question": "What is a \"Flexible Budget\" in cost accounting?",
    "answer": "A budget designed to adjust and recalculate figures based on different levels of operational activity attained",
    "options": [
      "A budget designed to adjust and recalculate figures based on different levels of operational activity attained",
      "A budget fixed in stone for five consecutive years",
      "A forecast that tracks only discretionary marketing costs",
      "A budget where staff salaries are negotiable every month"
    ],
    "explanation": "Flexible budgets dynamically change for different activity levels, separating fixed and variable costs for realistic variance analysis.",
    "tip": "Flexible budget adjusts with output volume.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-58",
    "categoryId": "accounting",
    "question": "In Cost Accounting, what are the three basic elements of cost?",
    "answer": "Material, Labour, and Expenses",
    "options": [
      "Material, Labour, and Expenses",
      "Capital, Debt, and Equity",
      "Assets, Liabilities, and Reserves",
      "Production, Sales, and Profit"
    ],
    "explanation": "All costs are classified into three primary elements: Materials, Labour, and Expenses (each subdivided into direct and indirect).",
    "tip": "Three elements of cost = Material, Labour, Expenses.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-59",
    "categoryId": "accounting",
    "question": "What constitutes \"Prime Cost\" on a Cost Sheet?",
    "answer": "Direct Materials + Direct Labour + Direct Expenses",
    "options": [
      "Direct Materials + Direct Labour + Direct Expenses",
      "Prime Cost + Factory Overheads",
      "Works Cost + Office Overheads",
      "Total Cost + Profit Margin"
    ],
    "explanation": "Prime Cost represents the direct aggregate manufacturing costs: Direct Material + Direct Labour + Direct Chargeable Expenses.",
    "tip": "Prime Cost = Direct Materials + Direct Labour + Direct Expenses.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-60",
    "categoryId": "accounting",
    "question": "In cost accounting, \"Works Cost\" (Factory Cost) is calculated as:",
    "answer": "Prime Cost + Factory (Works) Overheads",
    "options": [
      "Prime Cost + Factory (Works) Overheads",
      "Works Cost + Administrative Overheads",
      "Direct Materials + Gross Profit",
      "Total Sales minus Indirect Costs"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads (power, factory rent, indirect labor, supervisor salary).",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-61",
    "categoryId": "accounting",
    "question": "What are \"Ind AS\" (Indian Accounting Standards)?",
    "answer": "Indian Accounting Standards converged with International Financial Reporting Standards (IFRS)",
    "options": [
      "Indian Accounting Standards converged with International Financial Reporting Standards (IFRS)",
      "Strict US GAAP rules enforced on municipal panchayats",
      "Cash-basis accounting standards for rural cooperatives",
      "Historical single-entry accounting guidelines"
    ],
    "explanation": "Ind AS are standards formulated by the ICAI and notified by the MCA, converged with IFRS to enable global comparability of Indian corporate financial reports.",
    "tip": "Ind AS = Indian Accounting Standards converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-62",
    "categoryId": "accounting",
    "question": "What is the discipline of \"Human Resource Accounting\" (HRA)?",
    "answer": "The measurement and reporting of the costs and economic value of human capital in an enterprise",
    "options": [
      "The measurement and reporting of the costs and economic value of human capital in an enterprise",
      "Calculating daily payroll deductions for employee cafeteria meals",
      "Filing medical insurance claims with labor tribunals",
      "Conducting police verification of newly hired staff"
    ],
    "explanation": "HRA values human resources as organizational assets, tracking investment in recruitment, training, development, and their future economic contribution.",
    "tip": "HRA measures and values organizational human capital.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-63",
    "categoryId": "accounting",
    "question": "What is Forensic Accounting?",
    "answer": "An investigative accounting discipline that integrates accounting, auditing, and legal skills to investigate fraud and financial crimes",
    "options": [
      "An investigative accounting discipline that integrates accounting, auditing, and legal skills to investigate fraud and financial crimes",
      "Routine preparation of corporate monthly cash flow statements",
      "Auditing the physical deterioration of hospital buildings",
      "Calculating standard unit costs for plastic manufacturing"
    ],
    "explanation": "Forensic accountants investigate embezzlement, money laundering, asset tracing, and bankruptcy fraud, often presenting evidence as expert witnesses in courts.",
    "tip": "Forensic Accounting = Investigative accounting for fraud and legal disputes.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-64",
    "categoryId": "accounting",
    "question": "In a Computerized Accounting System (CAS), what is the \"Audit Trail\" feature mandated by the Ministry of Corporate Affairs?",
    "answer": "An automated log that tracks and records every change, edit, and deletion of accounting transactions with timestamp and user details",
    "options": [
      "An automated log that tracks and records every change, edit, and deletion of accounting transactions with timestamp and user details",
      "A feature that automatically clears transaction history every 30 days",
      "An algorithm that predicts future equity dividend yields",
      "A module for sending automated text receipts to customers"
    ],
    "explanation": "An audit trail maintains an immutable record of all modifications to prevent retrospective manipulation of accounts.",
    "tip": "Audit Trail logs every transaction alteration with user and time stamp.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-65",
    "categoryId": "accounting",
    "question": "Environmental (Green) Accounting refers to:",
    "answer": "Accounting for the environmental costs, pollution abatement expenditures, and natural resource depletion of business operations",
    "options": [
      "Accounting for the environmental costs, pollution abatement expenditures, and natural resource depletion of business operations",
      "Printing accounting ledgers exclusively on recycled paper",
      "Calculating municipal agricultural property tax exemptions",
      "Recording sales of organic agricultural seeds"
    ],
    "explanation": "Green Accounting incorporates environmental conservation costs, carbon footprints, and natural resource consumption into corporate evaluation.",
    "tip": "Green Accounting accounts for environmental impact and sustainability.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-66",
    "categoryId": "accounting",
    "question": "What is the depreciation method where a constant percentage is applied to the declining book value of the asset each year?",
    "answer": "Written Down Value (Diminishing Balance) Method",
    "options": [
      "Written Down Value (Diminishing Balance) Method",
      "Straight Line Method",
      "Annuity Method",
      "Sinking Fund Method"
    ],
    "explanation": "Under WDV, depreciation is calculated on the reducing book value, resulting in higher depreciation in initial years and decreasing amounts in later years.",
    "tip": "WDV applies fixed rate on decreasing book value.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-67",
    "categoryId": "accounting",
    "question": "Under the Straight Line Method (SLM), what is the annual depreciation formula for an asset with Cost C, Scrap Value S, and Useful Life N years?",
    "answer": "(C - S) / N",
    "options": [
      "(C - S) / N",
      "(C + S) / N",
      "C × N / S",
      "(C - S) × N"
    ],
    "explanation": "Straight Line Depreciation = (Cost of Asset - Estimated Salvage Value) / Estimated Useful Life in years.",
    "tip": "SLM Depreciation = (Cost - Scrap) / Life.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-68",
    "categoryId": "accounting",
    "question": "Which reserve is created out of capital profits (like profit on sale of fixed assets or premium on shares) and cannot be distributed as cash dividends?",
    "answer": "Capital Reserve",
    "options": [
      "Capital Reserve",
      "Revenue Reserve",
      "General Reserve",
      "Dividend Equalization Reserve"
    ],
    "explanation": "Capital Reserves are created from non-operational capital gains to absorb future capital losses or issue bonus shares, not for cash dividend distribution.",
    "tip": "Capital Reserves cannot be distributed as cash dividends.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-69",
    "categoryId": "accounting",
    "question": "A provision differs from a reserve in that a provision is:",
    "answer": "A charge against profit to meet a known liability of uncertain amount",
    "options": [
      "A charge against profit to meet a known liability of uncertain amount",
      "An appropriation of profit to strengthen the financial position",
      "Created only when the business makes excessive profits",
      "Freely available for dividend distribution to shareholders"
    ],
    "explanation": "A provision (e.g. provision for doubtful debts) is a charge against revenue created whether or not there is profit. A reserve is an appropriation of divisible profit.",
    "tip": "Provision = Charge against profit; Reserve = Appropriation of profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-70",
    "categoryId": "accounting",
    "question": "When shares are forfeited by a company due to non-payment of call money, the \"Share Capital Account\" is debited with:",
    "answer": "Called-up amount on forfeited shares",
    "options": [
      "Called-up amount on forfeited shares",
      "Paid-up amount on shares",
      "Face value of shares",
      "Uncalled amount on shares"
    ],
    "explanation": "Upon forfeiture, Share Capital A/c is debited with the amount called up to date. The amount already received is credited to the Share Forfeiture Account.",
    "tip": "Share Capital is debited with Called-up amount on forfeiture.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-71",
    "categoryId": "accounting",
    "question": "The balance remaining in the \"Share Forfeiture Account\" after the reissue of forfeited shares is transferred to:",
    "answer": "Capital Reserve Account",
    "options": [
      "Capital Reserve Account",
      "General Reserve Account",
      "P&L Account",
      "Goodwill Account"
    ],
    "explanation": "The profit on reissue of forfeited shares represents a capital profit and is transferred to the Capital Reserve Account.",
    "tip": "Gain on reissue of forfeited shares goes to Capital Reserve.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-72",
    "categoryId": "accounting",
    "question": "Debentures that are convertible into equity shares after a stated period of time are called:",
    "answer": "Convertible Debentures",
    "options": [
      "Convertible Debentures",
      "Redeemable Debentures",
      "Bearer Debentures",
      "Perpetual Debentures"
    ],
    "explanation": "Convertible debentures grant holders the option or mandate to convert debt holdings into equity shares according to predetermined terms.",
    "tip": "Convertible debentures can be converted into equity shares.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-73",
    "categoryId": "accounting",
    "question": "Under AS 3 / Ind AS 7, which cash flow method begins with Net Profit before tax and adjusts for non-cash items and working capital changes?",
    "answer": "Indirect Method",
    "options": [
      "Indirect Method",
      "Direct Method",
      "Comparative Method",
      "Ratio Analysis Method"
    ],
    "explanation": "The Indirect Method starts with Net Profit/Loss and adds back non-cash expenses (depreciation) and adjusts for changes in current assets and liabilities.",
    "tip": "Indirect cash flow method adjusts Net Income for non-cash items and working capital.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-74",
    "categoryId": "accounting",
    "question": "What is the Debt-Equity Ratio of a firm having Equity Share Capital ₹4,00,000, Reserves ₹1,00,000, and Long-Term Debentures ₹2,50,000?",
    "answer": "0.5 : 1",
    "options": [
      "0.5 : 1",
      "0.625 : 1",
      "2 : 1",
      "1 : 1"
    ],
    "explanation": "Debt = ₹2,50,000. Total Equity (Net Worth) = Share Capital + Reserves = 4,00,000 + 1,00,000 = ₹5,00,000. Debt-Equity Ratio = 2,50,000 / 5,00,000 = 0.5 : 1.",
    "tip": "Debt to Equity = Long-term Debt / Net Worth.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-75",
    "categoryId": "accounting",
    "question": "What is the Break-Even Point (BEP) in units if Fixed Costs are ₹50,000, Selling Price is ₹20 per unit, and Variable Cost is ₹10 per unit?",
    "answer": "5,000 units",
    "options": [
      "5,000 units",
      "2,500 units",
      "10,000 units",
      "50,000 units"
    ],
    "explanation": "Contribution per unit = Selling Price - Variable Cost = 20 - 10 = ₹10. BEP (units) = Fixed Costs / Contribution per unit = 50,000 / 10 = 5,000 units.",
    "tip": "BEP in units = Fixed Costs / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-76",
    "categoryId": "accounting",
    "question": "What does the \"P/V Ratio\" (Profit-Volume Ratio) represent in marginal costing?",
    "answer": "(Contribution / Sales) × 100",
    "options": [
      "(Contribution / Sales) × 100",
      "(Profit / Fixed Cost) × 100",
      "(Variable Cost / Sales) × 100",
      "(Sales / Net Profit) × 100"
    ],
    "explanation": "The P/V ratio indicates the rate at which contribution is earned per rupee of sales: P/V Ratio = (Contribution / Sales) × 100.",
    "tip": "P/V Ratio = (Contribution / Sales) × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-77",
    "categoryId": "accounting",
    "question": "Margin of Safety in marginal costing is defined as the excess of:",
    "answer": "Actual Sales over Break-Even Sales",
    "options": [
      "Actual Sales over Break-Even Sales",
      "Total Assets over Total Liabilities",
      "Budgeted Profit over Actual Profit",
      "Current Assets over Quick Assets"
    ],
    "explanation": "Margin of Safety represents the buffer zone of sales above the break-even point: Margin of Safety = Actual Sales - Break-Even Sales.",
    "tip": "Margin of Safety = Actual Sales - Break-Even Sales.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-78",
    "categoryId": "accounting",
    "question": "In standard costing, what is the formula for \"Material Price Variance\" (MPV)?",
    "answer": "Actual Quantity × (Standard Price - Actual Price)",
    "options": [
      "Actual Quantity × (Standard Price - Actual Price)",
      "Standard Price × (Standard Quantity - Actual Quantity)",
      "Actual Price × (Standard Quantity - Actual Quantity)",
      "Standard Quantity × (Standard Price + Actual Price)"
    ],
    "explanation": "Material Price Variance (MPV) = AQ × (SP - AP). If SP > AP, the variance is favorable.",
    "tip": "MPV = AQ × (SP - AP).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-79",
    "categoryId": "accounting",
    "question": "In standard costing, what is the formula for \"Material Usage (Quantity) Variance\" (MUV)?",
    "answer": "Standard Price × (Standard Quantity - Actual Quantity)",
    "options": [
      "Standard Price × (Standard Quantity - Actual Quantity)",
      "Actual Price × (Standard Quantity - Actual Quantity)",
      "Actual Quantity × (Standard Price - Actual Price)",
      "(SP - AP) × (SQ - AQ)"
    ],
    "explanation": "Material Usage Variance measures efficiency: MUV = SP × (SQ - AQ).",
    "tip": "MUV = SP × (SQ - AQ).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-80",
    "categoryId": "accounting",
    "question": "Which accounting standard issued by the ICAI deals with \"Valuation of Inventories\"?",
    "answer": "AS 2 (and Ind AS 2)",
    "options": [
      "AS 2 (and Ind AS 2)",
      "AS 10",
      "AS 3",
      "AS 9"
    ],
    "explanation": "AS 2 prescribes that inventories should be valued at the lower of historical cost or net realizable value (NRV).",
    "tip": "AS 2 = Valuation of Inventories.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-81",
    "categoryId": "accounting",
    "question": "Which accounting standard issued by the ICAI governs the preparation of the \"Cash Flow Statement\"?",
    "answer": "AS 3 (and Ind AS 7)",
    "options": [
      "AS 3 (and Ind AS 7)",
      "AS 6",
      "AS 11",
      "AS 14"
    ],
    "explanation": "AS 3 requires entities to report cash flows during the period categorized into Operating, Investing, and Financing activities.",
    "tip": "AS 3 = Cash Flow Statements.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-82",
    "categoryId": "accounting",
    "question": "Which accounting standard governs \"Property, Plant and Equipment\" (PPE) under the Ind AS framework?",
    "answer": "Ind AS 16 (AS 10)",
    "options": [
      "Ind AS 16 (AS 10)",
      "Ind AS 115",
      "Ind AS 38",
      "Ind AS 109"
    ],
    "explanation": "Ind AS 16 outlines criteria for initial recognition, depreciation models, and revaluation of tangible fixed assets (PPE).",
    "tip": "Ind AS 16 = Property, Plant and Equipment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-83",
    "categoryId": "accounting",
    "question": "What is the rule for recognizing an intangible asset under Ind AS 38 / AS 26?",
    "answer": "It must be identifiable, controlled by the entity, and generate probable future economic benefits with measurable cost",
    "options": [
      "It must be identifiable, controlled by the entity, and generate probable future economic benefits with measurable cost",
      "It must have physical substance and visible shape",
      "It can only be recognized if purchased from foreign vendors",
      "It must be completely written off in the year of acquisition"
    ],
    "explanation": "An intangible asset is recognized if it is identifiable, controlled by the entity, capable of yielding future benefits, and reliably measurable.",
    "tip": "Ind AS 38 Intangible: Identifiable, controlled, future benefits, measurable cost.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-84",
    "categoryId": "accounting",
    "question": "Internally generated goodwill should be:",
    "answer": "Not recognized as an asset in the books of accounts",
    "options": [
      "Not recognized as an asset in the books of accounts",
      "Recorded at the owner’s subjective valuation",
      "Credited directly to the General Reserve",
      "Debited to Capital Account and amortized over 5 years"
    ],
    "explanation": "Under AS 26 and Ind AS 38, internally generated goodwill is not recognized because no cash transaction occurred to measure its cost reliably; only purchased goodwill is recorded.",
    "tip": "Only purchased goodwill is recognized; internally generated goodwill is not.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-85",
    "categoryId": "accounting",
    "question": "What does \"Window Dressing\" refer to in financial reporting?",
    "answer": "Manipulating financial accounts to present a more favorable financial position than actual reality",
    "options": [
      "Manipulating financial accounts to present a more favorable financial position than actual reality",
      "Decorating retail store displays to attract walk-in buyers",
      "Designing balance sheet charts in colorful presentation software",
      "Cleaning office windows to pass hygiene compliance inspections"
    ],
    "explanation": "Window dressing is an unethical practice of misrepresenting balances (e.g. postponing recorded expenses or recognizing early sales) to inflate profits.",
    "tip": "Window dressing = Fraudulent distortion to make financial position look better.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-86",
    "categoryId": "accounting",
    "question": "What is \"Secret Reserve\"?",
    "answer": "A reserve whose existence is concealed and not disclosed on the face of the balance sheet",
    "options": [
      "A reserve whose existence is concealed and not disclosed on the face of the balance sheet",
      "An emergency cash reserve kept in the bank locker",
      "A reserve created exclusively for tax evasion",
      "A fund created by charitable non-profit trusts"
    ],
    "explanation": "Secret reserves are created by understating assets (excessive depreciation, writing off good debts) or overstating liabilities, violating the full disclosure principle.",
    "tip": "Secret reserves conceal true financial strength; prohibited for public companies.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-87",
    "categoryId": "accounting",
    "question": "Which method of inventory valuation is recommended during periods of RISING prices (inflation) to report lower taxable profits?",
    "answer": "LIFO (Last-In, First-Out)",
    "options": [
      "LIFO (Last-In, First-Out)",
      "FIFO (First-In, First-Out)",
      "Weighted Average Cost",
      "Highest-In, First-Out"
    ],
    "explanation": "Under LIFO, the highest recent purchase costs are charged to Cost of Goods Sold, leading to lower net income and lower income tax liability.",
    "tip": "LIFO in inflation = Higher COGS, Lower Tax.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-88",
    "categoryId": "accounting",
    "question": "Why is LIFO prohibited under Indian Accounting Standards (Ind AS 2) and IFRS?",
    "answer": "Because remaining inventory on the balance sheet reflects outdated historical costs rather than current market values",
    "options": [
      "Because remaining inventory on the balance sheet reflects outdated historical costs rather than current market values",
      "Because it produces excessive tax revenue for the state",
      "Because inventory units cannot physically be moved in that order",
      "Because it is only allowed for service sector companies"
    ],
    "explanation": "Ind AS 2 permits only FIFO or Weighted Average Cost methods because LIFO distorts balance sheet inventory valuation with ancient prices.",
    "tip": "Ind AS 2 prohibits LIFO; allows FIFO and Weighted Average.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-89",
    "categoryId": "accounting",
    "question": "When raw materials are purchased for ₹1,00,000 subject to 18% GST (9% CGST + 9% SGST), the journal entry for the buyer is:",
    "answer": "Dr. Purchases ₹1,00,000, Dr. Input CGST ₹9,000, Dr. Input SGST ₹9,000, Cr. Creditor ₹1,18,000",
    "options": [
      "Dr. Purchases ₹1,00,000, Dr. Input CGST ₹9,000, Dr. Input SGST ₹9,000, Cr. Creditor ₹1,18,000",
      "Dr. Purchases ₹1,18,000, Cr. Creditor ₹1,18,000",
      "Dr. Purchases ₹1,00,000, Cr. GST Expense ₹18,000, Cr. Cash ₹1,18,000",
      "Dr. Input IGST ₹18,000, Cr. Purchases ₹18,000"
    ],
    "explanation": "Purchases is debited at net cost (₹1,00,000). The GST paid is an asset (Input Tax Credit) debited to Input CGST (₹9,000) and Input SGST (₹9,000). Total liability to creditor is ₹1,18,000.",
    "tip": "GST on purchase: Dr. Purchases, Dr. Input CGST & SGST, Cr. Creditor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-90",
    "categoryId": "accounting",
    "question": "When goods are sold for ₹2,00,000 subject to 12% IGST (inter-state sale), the output tax is credited to which account?",
    "answer": "Output IGST Account (₹24,000)",
    "options": [
      "Output IGST Account (₹24,000)",
      "Output CGST Account",
      "Sales Account",
      "P&L Account"
    ],
    "explanation": "GST collected on sales is a liability payable to the government and is credited to Output IGST (₹24,000).",
    "tip": "GST on sales is credited as Output Tax liability.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-91",
    "categoryId": "accounting",
    "question": "What is the full form of GSTR-1 in the Indian GST filing system?",
    "answer": "Monthly/quarterly return containing details of outward supplies (sales) of goods and services",
    "options": [
      "Monthly/quarterly return containing details of outward supplies (sales) of goods and services",
      "Annual summary tax return for registered dealers",
      "Application for cancellation of GST registration",
      "Certificate for tax deducted at source by government bodies"
    ],
    "explanation": "GSTR-1 is the monthly or quarterly return of outward supplies (sales) filed by normal registered taxpayers in India.",
    "tip": "GSTR-1 = Outward supplies (Sales); GSTR-3B = Summary return & tax payment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-92",
    "categoryId": "accounting",
    "question": "In financial auditing, the document that contains detailed written audit plans, time allocations, and specific verification steps to be executed by audit assistants is called:",
    "answer": "Audit Programme",
    "options": [
      "Audit Programme",
      "Audit Memorandum",
      "Audit Report",
      "Voucher Register"
    ],
    "explanation": "An Audit Programme is a structured written plan outlining the procedures and scope of work to guide the audit team.",
    "tip": "Audit Programme = Detailed step-by-step audit plan.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-93",
    "categoryId": "accounting",
    "question": "The working papers containing notes, extracts, trial balances, and audit findings prepared by an auditor during an audit engagement are the property of:",
    "answer": "The Auditor",
    "options": [
      "The Auditor",
      "The Client Company",
      "The Registrar of Companies (ROC)",
      "The Income Tax Department"
    ],
    "explanation": "Under standard auditing guidelines (SA 230), audit working papers are the confidential property of the independent auditor.",
    "tip": "Audit working papers belong to the auditor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-94",
    "categoryId": "accounting",
    "question": "What is an \"Unqualified Audit Report\" (Clean Report)?",
    "answer": "A report where the auditor expresses an opinion that financial statements present a true and fair view in all material respects",
    "options": [
      "A report where the auditor expresses an opinion that financial statements present a true and fair view in all material respects",
      "A report stating the auditor lacks professional qualifications",
      "A report issued when fraud is uncovered in every department",
      "An incomplete draft submitted before final verification"
    ],
    "explanation": "A Clean or Unqualified Report means the auditor is satisfied that accounts comply with statutory requirements and reflect a true and fair view.",
    "tip": "Unqualified / Clean Report = Auditor is satisfied with true and fair view.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-95",
    "categoryId": "accounting",
    "question": "When an auditor encounters substantial misstatements or scope limitations that are both material and pervasive, the auditor must issue a:",
    "answer": "Adverse Opinion (or Disclaimer of Opinion)",
    "options": [
      "Adverse Opinion (or Disclaimer of Opinion)",
      "Unqualified Clean Opinion",
      "Supplementary Footnote",
      "Notice of Disregard"
    ],
    "explanation": "If misstatements are material and pervasive, an Adverse Opinion is issued stating statements do not present a true and fair view. If unable to obtain evidence, a Disclaimer is issued.",
    "tip": "Pervasive material misstatements = Adverse Opinion.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-96",
    "categoryId": "accounting",
    "question": "In Public Financial Management, what is the \"Single Nodal Agency\" (SNA) model introduced by the Ministry of Finance?",
    "answer": "A mechanism where each State designates a single nodal agency and bank account for each Centrally Sponsored Scheme to eliminate fund idle parking",
    "options": [
      "A mechanism where each State designates a single nodal agency and bank account for each Centrally Sponsored Scheme to eliminate fund idle parking",
      "A single foreign commercial bank authorized to disburse all external loans",
      "A unified income tax filing portal for individual state employees",
      "A software for printing government treasury receipt tokens"
    ],
    "explanation": "The SNA model ensures that scheme funds from the Centre flow into one designated bank account per state, providing just-in-time funding and zero idle balances.",
    "tip": "SNA model tracks Centrally Sponsored Scheme funds in a single nodal account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-97",
    "categoryId": "accounting",
    "question": "The Treasury Rules governing government cash transactions, challans, and bills in Jammu & Kashmir are codified under the:",
    "answer": "J&K Financial Code and Treasury Code",
    "options": [
      "J&K Financial Code and Treasury Code",
      "Companies Act 2013",
      "SEBI Regulations",
      "Banking Regulation Act"
    ],
    "explanation": "Government receipts, disbursements, treasury bills, and accounts in J&K are regulated by the J&K Financial Code, Book of Financial Powers, and Treasury Rules.",
    "tip": "Government accounts in J&K follow the Financial Code and Treasury Rules.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-98",
    "categoryId": "accounting",
    "question": "What is a \"Challan\" in government accounting?",
    "answer": "A prescribed printed voucher used for depositing cash or cheques into the government treasury or authorized bank",
    "options": [
      "A prescribed printed voucher used for depositing cash or cheques into the government treasury or authorized bank",
      "A penalty notice issued for traffic speeding offenses",
      "An internal purchase order issued to stationary suppliers",
      "A receipt signed by the district election officer"
    ],
    "explanation": "A Treasury Challan is the official document through which taxes, fees, and government dues are paid into the Consolidated Fund or Public Account.",
    "tip": "Challan = Treasury deposit slip for government receipts.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-99",
    "categoryId": "accounting",
    "question": "Under Section 80C of the Income Tax Act, 1961, what is the maximum aggregate deduction limit available to an individual in a financial year?",
    "answer": "₹1,50,000",
    "options": [
      "₹1,50,000",
      "₹1,00,000",
      "₹2,00,000",
      "₹2,50,000"
    ],
    "explanation": "Section 80C provides tax deductions up to ₹1.5 lakh for eligible investments (PPF, EPF, ELSS mutual funds, Life Insurance premium, NSC, tuition fees).",
    "tip": "Section 80C deduction limit = ₹1,50,000.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-100",
    "categoryId": "accounting",
    "question": "What is the Permanent Account Number (PAN) issued by the Indian Income Tax Department?",
    "answer": "A 10-digit alphanumeric unique identifier issued under Section 139A",
    "options": [
      "A 10-digit alphanumeric unique identifier issued under Section 139A",
      "A 12-digit biometric Aadhaar number",
      "An 8-digit digital signature certificate",
      "A 15-digit Goods and Services Tax Identification Number (GSTIN)"
    ],
    "explanation": "PAN is a 10-character alphanumeric identity (e.g. ABCDE1234F) issued to all tax-paying entities in India.",
    "tip": "PAN = 10-digit alphanumeric code; GSTIN = 15-digit code.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-101",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹6050 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Receipt Voucher",
      "Transfer Voucher",
      "Credit Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-102",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Cash deposits into the bank current account",
      "Non-cash transactions and year-end adjusting entries",
      "Direct cash sales over the counter",
      "Cash withdrawals by the proprietor for personal use"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-103",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Primary Journal Voucher",
      "Contra Voucher",
      "Supporting Voucher",
      "Petty Cash Cheque"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-104",
    "categoryId": "accounting",
    "question": "A cheque of ₹7520 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹7520 to the Cash Book balance",
    "options": [
      "Ignore the entry until month end",
      "Multiply the balance by bank rate",
      "Deduct ₹7520 from the Cash Book balance",
      "Add ₹7520 to the Cash Book balance"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-105",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹4950 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹4950 higher than Cash Book balance",
    "options": [
      "Cash Book reflects an overdraft",
      "Cash Book balance is ₹4950 higher than Pass Book balance",
      "Pass Book balance is ₹4950 higher than Cash Book balance",
      "Both balances remain identical"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-106",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "An overdraft owed by the customer to the bank",
      "An error in the trial balance",
      "A dishonored cheque",
      "A favourable deposit balance belonging to the customer"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-107",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Added to the overdraft balance",
      "Posted to Suspense Account",
      "Ignored completely",
      "Deducted from the overdraft balance"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-108",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹66000 and ₹32000 as capital without any partnership deed. If the firm earns a profit of ₹33000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Divided equally between X and Y",
      "In the ratio of 66000:32000",
      "70% to X and 30% to Y",
      "Retained as capital reserves without distribution"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-109",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "An appropriation of profits (debited to P&L Appropriation Account)",
      "A charge against profits (debited to Profit & Loss Account)",
      "A transfer to General Reserve",
      "A capital receipt credited to partner equity"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-110",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Drawings and Interest on Drawings",
      "Interest on Capital and Share of Profit",
      "Purchase of office equipment",
      "Share of Net Loss"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-111",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "Sacrificing Ratio",
      "Capital Ratio",
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-112",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Journal Proper",
      "Cash Book",
      "Trial Balance",
      "Ledger"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-113",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹6300 has total expenses of ₹3540. How much is reimbursed?",
    "answer": "Exactly ₹3540",
    "options": [
      "Exactly ₹3540",
      "₹3000",
      "₹6300",
      "Zero until next year"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-114",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Ledger Folio column",
      "Bank column",
      "Cash column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-115",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To maintain daily petty cash registers for the client",
      "To determine the market share price of company stock",
      "To report whether financial statements give a true and fair view of the state of affairs",
      "To guarantee complete recovery of bad debts"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-116",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Vendor identity, payment receipt, and check counterfoil",
      "Existence, Ownership/Title, and Proper Valuation",
      "Daily physical counting, insurance status, and resale broker",
      "Purchase price, invoice number, and delivery date"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-117",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "Minor arithmetical errors are detected in petty cash",
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
      "The internal audit team was appointed by the board",
      "The company earns record high operating profits"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-118",
    "categoryId": "accounting",
    "question": "An amount of ₹1850 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Error of Partial Omission",
      "Error of Complete Omission",
      "Compensating Error",
      "Error of Principle"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-119",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition",
      "Posting ₹450 as ₹540 in the same ledger account"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-120",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹500, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Directly to Capital Account",
      "Credit side of the Suspense Account",
      "Debit side of the Suspense Account",
      "Trading Account Gross Profit"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-121",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹10500, Purchases ₹51000, Direct Expenses ₹9200, Closing Stock ₹21300.",
    "answer": "₹49400",
    "options": [
      "₹44400",
      "₹49400",
      "₹54400",
      "₹59400"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 10500 + 51000 + 9200 - 21300 = ₹49400.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-122",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Debit side of Trading Account",
      "Balance sheet Current Assets",
      "Credit side of Trading Account",
      "Debit side of Profit and Loss Account"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-123",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Land and Buildings (Fixed Assets)",
      "Marketable Securities",
      "Sundry Debtors",
      "Cash in Hand"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-124",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹62000, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹17000",
    "options": [
      "₹10000",
      "₹17000",
      "₹25000",
      "₹5000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-125",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Statement of Affairs",
      "Income Statement",
      "Balance Sheet",
      "Trial Balance"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-126",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Accuracy of income tax deductions under Section 80C",
      "Physical wear and tear of computing hardware",
      "Stock market dividend yields of public enterprises"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-127",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
      "Governor, Reserve Bank of India",
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-128",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "National Disaster Response Fund",
      "Public Account of India",
      "Contingency Fund of India",
      "Consolidated Fund of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-129",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The President of India",
      "The Prime Minister of India",
      "The Comptroller and Auditor General",
      "The Speaker of the Lok Sabha"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-130",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Public Account of India (Article 266(2))",
      "Contingency Fund of India",
      "Consolidated Fund of India",
      "Prime Minister Relief Fund"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-131",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Prime Minister directly",
      "The Chief Justice of India"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-132",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Assessment Year",
      "Base Year",
      "Calendar Year",
      "Previous Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-133",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "Customs Duty and Excise",
      "CGST and SGST (or UTGST)",
      "Service Tax and VAT",
      "IGST only"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-134",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 246A",
      "Article 269A",
      "Article 279A",
      "Article 280"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-135",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To eliminate customs tariffs on foreign imports",
      "To provide direct cash subsidies to manufacturers",
      "To exempt luxury services from corporate tax",
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-136",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Investments in Public Provident Fund (PPF)",
      "Medical insurance premium paid for self, family, and parents",
      "Repayment of housing loan principal",
      "Interest on higher education loans"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-137",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹97000 and Factory Overheads are ₹28500. What is the Works Cost?",
    "answer": "₹125500",
    "options": [
      "₹125500",
      "₹150000",
      "₹60000",
      "₹97000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-138",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Zero-Based Budget",
      "Master Budget",
      "Fixed Budget",
      "Flexible Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-139",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "10,000 units",
      "20,000 units",
      "2,000 units",
      "5,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-140",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-141",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "International Financial Reporting Standards (IFRS)",
      "United Nations System of National Accounts",
      "Basel III Banking Norms",
      "US Generally Accepted Accounting Principles (US GAAP)"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-142",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Cost Accounting",
      "Inflation Accounting",
      "Social Accounting",
      "Forensic Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-143",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Automatically delete audit records after 90 days",
      "Send quarterly tax summaries to the central registry",
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Block all credit sales to customers"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-144",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹8200 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Transfer Voucher",
      "Receipt Voucher",
      "Credit Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-145",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Non-cash transactions and year-end adjusting entries",
      "Cash deposits into the bank current account",
      "Cash withdrawals by the proprietor for personal use",
      "Direct cash sales over the counter"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-146",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Supporting Voucher",
      "Primary Journal Voucher",
      "Contra Voucher",
      "Petty Cash Cheque"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-147",
    "categoryId": "accounting",
    "question": "A cheque of ₹5110 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹5110 to the Cash Book balance",
    "options": [
      "Ignore the entry until month end",
      "Multiply the balance by bank rate",
      "Add ₹5110 to the Cash Book balance",
      "Deduct ₹5110 from the Cash Book balance"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-148",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹2820 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹2820 higher than Cash Book balance",
    "options": [
      "Cash Book balance is ₹2820 higher than Pass Book balance",
      "Pass Book balance is ₹2820 higher than Cash Book balance",
      "Both balances remain identical",
      "Cash Book reflects an overdraft"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-149",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "A favourable deposit balance belonging to the customer",
      "A dishonored cheque",
      "An error in the trial balance",
      "An overdraft owed by the customer to the bank"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-150",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Deducted from the overdraft balance",
      "Ignored completely",
      "Added to the overdraft balance",
      "Posted to Suspense Account"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-151",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹52000 and ₹56500 as capital without any partnership deed. If the firm earns a profit of ₹26000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Divided equally between X and Y",
      "70% to X and 30% to Y",
      "In the ratio of 52000:56500",
      "Retained as capital reserves without distribution"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-152",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "A charge against profits (debited to Profit & Loss Account)",
      "A capital receipt credited to partner equity",
      "An appropriation of profits (debited to P&L Appropriation Account)",
      "A transfer to General Reserve"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-153",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Drawings and Interest on Drawings",
      "Interest on Capital and Share of Profit",
      "Share of Net Loss",
      "Purchase of office equipment"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-154",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "Sacrificing Ratio",
      "Capital Ratio",
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-155",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Trial Balance",
      "Journal Proper",
      "Cash Book",
      "Ledger"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-156",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹5600 has total expenses of ₹4480. How much is reimbursed?",
    "answer": "Exactly ₹4480",
    "options": [
      "Zero until next year",
      "Exactly ₹4480",
      "₹3000",
      "₹5600"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-157",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Ledger Folio column",
      "Bank column",
      "Cash column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-158",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To report whether financial statements give a true and fair view of the state of affairs",
      "To maintain daily petty cash registers for the client",
      "To determine the market share price of company stock",
      "To guarantee complete recovery of bad debts"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-159",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Purchase price, invoice number, and delivery date",
      "Vendor identity, payment receipt, and check counterfoil",
      "Daily physical counting, insurance status, and resale broker",
      "Existence, Ownership/Title, and Proper Valuation"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-160",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
      "Minor arithmetical errors are detected in petty cash",
      "The internal audit team was appointed by the board",
      "The company earns record high operating profits"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-161",
    "categoryId": "accounting",
    "question": "An amount of ₹1075 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Error of Partial Omission",
      "Compensating Error",
      "Error of Principle",
      "Error of Complete Omission"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-162",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "Posting ₹450 as ₹540 in the same ledger account",
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-163",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹650, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Credit side of the Suspense Account",
      "Debit side of the Suspense Account",
      "Directly to Capital Account",
      "Trading Account Gross Profit"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-164",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹12000, Purchases ₹54000, Direct Expenses ₹7800, Closing Stock ₹19200.",
    "answer": "₹54600",
    "options": [
      "₹49600",
      "₹54600",
      "₹59600",
      "₹64600"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 12000 + 54000 + 7800 - 19200 = ₹54600.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-165",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Debit side of Profit and Loss Account",
      "Balance sheet Current Assets",
      "Debit side of Trading Account",
      "Credit side of Trading Account"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-166",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Land and Buildings (Fixed Assets)",
      "Cash in Hand",
      "Sundry Debtors",
      "Marketable Securities"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-167",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹83500, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹38500",
    "options": [
      "₹10000",
      "₹25000",
      "₹38500",
      "₹5000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-168",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Income Statement",
      "Statement of Affairs",
      "Balance Sheet",
      "Trial Balance"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-169",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Accuracy of income tax deductions under Section 80C",
      "Stock market dividend yields of public enterprises",
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Physical wear and tear of computing hardware"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-170",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)",
      "Governor, Reserve Bank of India"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-171",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "Consolidated Fund of India",
      "Contingency Fund of India",
      "Public Account of India",
      "National Disaster Response Fund"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-172",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The Speaker of the Lok Sabha",
      "The President of India",
      "The Comptroller and Auditor General",
      "The Prime Minister of India"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-173",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Public Account of India (Article 266(2))",
      "Consolidated Fund of India",
      "Prime Minister Relief Fund",
      "Contingency Fund of India"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-174",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Chief Justice of India",
      "The Prime Minister directly"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-175",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Assessment Year",
      "Base Year",
      "Calendar Year",
      "Previous Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-176",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "CGST and SGST (or UTGST)",
      "Customs Duty and Excise",
      "IGST only",
      "Service Tax and VAT"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-177",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 280",
      "Article 246A",
      "Article 269A",
      "Article 279A"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-178",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
      "To provide direct cash subsidies to manufacturers",
      "To exempt luxury services from corporate tax",
      "To eliminate customs tariffs on foreign imports"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-179",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Repayment of housing loan principal",
      "Interest on higher education loans",
      "Medical insurance premium paid for self, family, and parents",
      "Investments in Public Provident Fund (PPF)"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-180",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹100000 and Factory Overheads are ₹20000. What is the Works Cost?",
    "answer": "₹120000",
    "options": [
      "₹100000",
      "₹120000",
      "₹150000",
      "₹60000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-181",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Zero-Based Budget",
      "Flexible Budget",
      "Master Budget",
      "Fixed Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-182",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "2,000 units",
      "5,000 units",
      "10,000 units",
      "20,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-183",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-184",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "US Generally Accepted Accounting Principles (US GAAP)",
      "United Nations System of National Accounts",
      "Basel III Banking Norms",
      "International Financial Reporting Standards (IFRS)"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-185",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Forensic Accounting",
      "Cost Accounting",
      "Inflation Accounting",
      "Social Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-186",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Send quarterly tax summaries to the central registry",
      "Automatically delete audit records after 90 days",
      "Block all credit sales to customers"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-187",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹1350 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Receipt Voucher",
      "Transfer Voucher",
      "Credit Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-188",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Direct cash sales over the counter",
      "Non-cash transactions and year-end adjusting entries",
      "Cash withdrawals by the proprietor for personal use",
      "Cash deposits into the bank current account"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-189",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Contra Voucher",
      "Petty Cash Cheque",
      "Primary Journal Voucher",
      "Supporting Voucher"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-190",
    "categoryId": "accounting",
    "question": "A cheque of ₹2700 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹2700 to the Cash Book balance",
    "options": [
      "Multiply the balance by bank rate",
      "Ignore the entry until month end",
      "Deduct ₹2700 from the Cash Book balance",
      "Add ₹2700 to the Cash Book balance"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-191",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹6690 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹6690 higher than Cash Book balance",
    "options": [
      "Cash Book balance is ₹6690 higher than Pass Book balance",
      "Pass Book balance is ₹6690 higher than Cash Book balance",
      "Both balances remain identical",
      "Cash Book reflects an overdraft"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-192",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "An overdraft owed by the customer to the bank",
      "An error in the trial balance",
      "A dishonored cheque",
      "A favourable deposit balance belonging to the customer"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-193",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Deducted from the overdraft balance",
      "Ignored completely",
      "Posted to Suspense Account",
      "Added to the overdraft balance"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-194",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹88000 and ₹41000 as capital without any partnership deed. If the firm earns a profit of ₹44000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Retained as capital reserves without distribution",
      "In the ratio of 88000:41000",
      "70% to X and 30% to Y",
      "Divided equally between X and Y"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-195",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "A charge against profits (debited to Profit & Loss Account)",
      "An appropriation of profits (debited to P&L Appropriation Account)",
      "A transfer to General Reserve",
      "A capital receipt credited to partner equity"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-196",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Purchase of office equipment",
      "Share of Net Loss",
      "Drawings and Interest on Drawings",
      "Interest on Capital and Share of Profit"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-197",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "Sacrificing Ratio",
      "Capital Ratio",
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-198",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Journal Proper",
      "Ledger",
      "Trial Balance",
      "Cash Book"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-199",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹9900 has total expenses of ₹2920. How much is reimbursed?",
    "answer": "Exactly ₹2920",
    "options": [
      "Zero until next year",
      "Exactly ₹2920",
      "₹3000",
      "₹9900"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-200",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Ledger Folio column",
      "Bank column",
      "Cash column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-201",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To report whether financial statements give a true and fair view of the state of affairs",
      "To maintain daily petty cash registers for the client",
      "To determine the market share price of company stock",
      "To guarantee complete recovery of bad debts"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-202",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Purchase price, invoice number, and delivery date",
      "Existence, Ownership/Title, and Proper Valuation",
      "Daily physical counting, insurance status, and resale broker",
      "Vendor identity, payment receipt, and check counterfoil"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-203",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "The company earns record high operating profits",
      "The internal audit team was appointed by the board",
      "Minor arithmetical errors are detected in petty cash",
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-204",
    "categoryId": "accounting",
    "question": "An amount of ₹4300 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Compensating Error",
      "Error of Principle",
      "Error of Complete Omission",
      "Error of Partial Omission"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-205",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Posting ₹450 as ₹540 in the same ledger account",
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-206",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹800, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Debit side of the Suspense Account",
      "Credit side of the Suspense Account",
      "Directly to Capital Account",
      "Trading Account Gross Profit"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-207",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹13500, Purchases ₹57000, Direct Expenses ₹6400, Closing Stock ₹17100.",
    "answer": "₹59800",
    "options": [
      "₹54800",
      "₹59800",
      "₹64800",
      "₹69800"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 13500 + 57000 + 6400 - 17100 = ₹59800.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-208",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Credit side of Trading Account",
      "Debit side of Trading Account",
      "Debit side of Profit and Loss Account",
      "Balance sheet Current Assets"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-209",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Marketable Securities",
      "Cash in Hand",
      "Sundry Debtors",
      "Land and Buildings (Fixed Assets)"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-210",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹75000, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹30000",
    "options": [
      "₹5000",
      "₹10000",
      "₹25000",
      "₹30000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-211",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Income Statement",
      "Statement of Affairs",
      "Balance Sheet",
      "Trial Balance"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-212",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Accuracy of income tax deductions under Section 80C",
      "Stock market dividend yields of public enterprises",
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Physical wear and tear of computing hardware"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-213",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
      "Governor, Reserve Bank of India",
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-214",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "National Disaster Response Fund",
      "Contingency Fund of India",
      "Public Account of India",
      "Consolidated Fund of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-215",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The Comptroller and Auditor General",
      "The President of India",
      "The Prime Minister of India",
      "The Speaker of the Lok Sabha"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-216",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Consolidated Fund of India",
      "Prime Minister Relief Fund",
      "Public Account of India (Article 266(2))",
      "Contingency Fund of India"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-217",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Chief Justice of India",
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Prime Minister directly"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-218",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Calendar Year",
      "Previous Year",
      "Assessment Year",
      "Base Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-219",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "CGST and SGST (or UTGST)",
      "Service Tax and VAT",
      "Customs Duty and Excise",
      "IGST only"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-220",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 246A",
      "Article 269A",
      "Article 279A",
      "Article 280"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-221",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
      "To provide direct cash subsidies to manufacturers",
      "To eliminate customs tariffs on foreign imports",
      "To exempt luxury services from corporate tax"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-222",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Interest on higher education loans",
      "Repayment of housing loan principal",
      "Investments in Public Provident Fund (PPF)",
      "Medical insurance premium paid for self, family, and parents"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-223",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹103000 and Factory Overheads are ₹26500. What is the Works Cost?",
    "answer": "₹129500",
    "options": [
      "₹60000",
      "₹103000",
      "₹129500",
      "₹150000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-224",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Flexible Budget",
      "Master Budget",
      "Zero-Based Budget",
      "Fixed Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-225",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "2,000 units",
      "5,000 units",
      "10,000 units",
      "20,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-226",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-227",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "International Financial Reporting Standards (IFRS)",
      "Basel III Banking Norms",
      "US Generally Accepted Accounting Principles (US GAAP)",
      "United Nations System of National Accounts"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-228",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Inflation Accounting",
      "Cost Accounting",
      "Social Accounting",
      "Forensic Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-229",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Send quarterly tax summaries to the central registry",
      "Automatically delete audit records after 90 days",
      "Block all credit sales to customers"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-230",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹3500 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Receipt Voucher",
      "Credit Voucher",
      "Transfer Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-231",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Cash deposits into the bank current account",
      "Cash withdrawals by the proprietor for personal use",
      "Non-cash transactions and year-end adjusting entries",
      "Direct cash sales over the counter"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-232",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Primary Journal Voucher",
      "Supporting Voucher",
      "Petty Cash Cheque",
      "Contra Voucher"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-233",
    "categoryId": "accounting",
    "question": "A cheque of ₹8290 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹8290 to the Cash Book balance",
    "options": [
      "Add ₹8290 to the Cash Book balance",
      "Deduct ₹8290 from the Cash Book balance",
      "Ignore the entry until month end",
      "Multiply the balance by bank rate"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-234",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹4560 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹4560 higher than Cash Book balance",
    "options": [
      "Cash Book balance is ₹4560 higher than Pass Book balance",
      "Pass Book balance is ₹4560 higher than Cash Book balance",
      "Cash Book reflects an overdraft",
      "Both balances remain identical"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-235",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "A favourable deposit balance belonging to the customer",
      "An overdraft owed by the customer to the bank",
      "An error in the trial balance",
      "A dishonored cheque"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-236",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Added to the overdraft balance",
      "Deducted from the overdraft balance",
      "Posted to Suspense Account",
      "Ignored completely"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-237",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹74000 and ₹65500 as capital without any partnership deed. If the firm earns a profit of ₹37000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Divided equally between X and Y",
      "70% to X and 30% to Y",
      "In the ratio of 74000:65500",
      "Retained as capital reserves without distribution"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-238",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "An appropriation of profits (debited to P&L Appropriation Account)",
      "A charge against profits (debited to Profit & Loss Account)",
      "A capital receipt credited to partner equity",
      "A transfer to General Reserve"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-239",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Interest on Capital and Share of Profit",
      "Purchase of office equipment",
      "Drawings and Interest on Drawings",
      "Share of Net Loss"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-240",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "Capital Ratio",
      "Sacrificing Ratio",
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-241",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Journal Proper",
      "Cash Book",
      "Ledger",
      "Trial Balance"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-242",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹9200 has total expenses of ₹3860. How much is reimbursed?",
    "answer": "Exactly ₹3860",
    "options": [
      "Zero until next year",
      "Exactly ₹3860",
      "₹3000",
      "₹9200"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-243",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Bank column",
      "Cash column",
      "Ledger Folio column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-244",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To report whether financial statements give a true and fair view of the state of affairs",
      "To determine the market share price of company stock",
      "To maintain daily petty cash registers for the client",
      "To guarantee complete recovery of bad debts"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-245",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Purchase price, invoice number, and delivery date",
      "Existence, Ownership/Title, and Proper Valuation",
      "Daily physical counting, insurance status, and resale broker",
      "Vendor identity, payment receipt, and check counterfoil"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-246",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
      "Minor arithmetical errors are detected in petty cash",
      "The internal audit team was appointed by the board",
      "The company earns record high operating profits"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-247",
    "categoryId": "accounting",
    "question": "An amount of ₹3525 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Error of Complete Omission",
      "Error of Partial Omission",
      "Compensating Error",
      "Error of Principle"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-248",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Posting ₹450 as ₹540 in the same ledger account",
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-249",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹950, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Debit side of the Suspense Account",
      "Credit side of the Suspense Account",
      "Directly to Capital Account",
      "Trading Account Gross Profit"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-250",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹15000, Purchases ₹60000, Direct Expenses ₹5000, Closing Stock ₹15000.",
    "answer": "₹65000",
    "options": [
      "₹60000",
      "₹65000",
      "₹70000",
      "₹75000"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 15000 + 60000 + 5000 - 15000 = ₹65000.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-251",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Debit side of Trading Account",
      "Debit side of Profit and Loss Account",
      "Credit side of Trading Account",
      "Balance sheet Current Assets"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-252",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Land and Buildings (Fixed Assets)",
      "Marketable Securities",
      "Sundry Debtors",
      "Cash in Hand"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-253",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹66500, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹21500",
    "options": [
      "₹5000",
      "₹10000",
      "₹21500",
      "₹25000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-254",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Balance Sheet",
      "Trial Balance",
      "Income Statement",
      "Statement of Affairs"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-255",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Accuracy of income tax deductions under Section 80C",
      "Physical wear and tear of computing hardware",
      "Stock market dividend yields of public enterprises"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-256",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)",
      "Governor, Reserve Bank of India",
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-257",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "Contingency Fund of India",
      "National Disaster Response Fund",
      "Consolidated Fund of India",
      "Public Account of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-258",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The Comptroller and Auditor General",
      "The Prime Minister of India",
      "The Speaker of the Lok Sabha",
      "The President of India"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-259",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Contingency Fund of India",
      "Public Account of India (Article 266(2))",
      "Consolidated Fund of India",
      "Prime Minister Relief Fund"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-260",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Chief Justice of India",
      "The Prime Minister directly"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-261",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Assessment Year",
      "Calendar Year",
      "Previous Year",
      "Base Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-262",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "Customs Duty and Excise",
      "CGST and SGST (or UTGST)",
      "IGST only",
      "Service Tax and VAT"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-263",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 246A",
      "Article 269A",
      "Article 279A",
      "Article 280"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-264",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To eliminate customs tariffs on foreign imports",
      "To exempt luxury services from corporate tax",
      "To provide direct cash subsidies to manufacturers",
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-265",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Investments in Public Provident Fund (PPF)",
      "Medical insurance premium paid for self, family, and parents",
      "Interest on higher education loans",
      "Repayment of housing loan principal"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-266",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹106000 and Factory Overheads are ₹33000. What is the Works Cost?",
    "answer": "₹139000",
    "options": [
      "₹106000",
      "₹139000",
      "₹150000",
      "₹60000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-267",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Flexible Budget",
      "Master Budget",
      "Fixed Budget",
      "Zero-Based Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-268",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "10,000 units",
      "20,000 units",
      "2,000 units",
      "5,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-269",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-270",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "International Financial Reporting Standards (IFRS)",
      "United Nations System of National Accounts",
      "US Generally Accepted Accounting Principles (US GAAP)",
      "Basel III Banking Norms"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-271",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Social Accounting",
      "Forensic Accounting",
      "Inflation Accounting",
      "Cost Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-272",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Automatically delete audit records after 90 days",
      "Block all credit sales to customers",
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Send quarterly tax summaries to the central registry"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-273",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹5650 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Receipt Voucher",
      "Transfer Voucher",
      "Credit Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-274",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Non-cash transactions and year-end adjusting entries",
      "Cash withdrawals by the proprietor for personal use",
      "Direct cash sales over the counter",
      "Cash deposits into the bank current account"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-275",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Petty Cash Cheque",
      "Primary Journal Voucher",
      "Supporting Voucher",
      "Contra Voucher"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-276",
    "categoryId": "accounting",
    "question": "A cheque of ₹5880 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹5880 to the Cash Book balance",
    "options": [
      "Ignore the entry until month end",
      "Deduct ₹5880 from the Cash Book balance",
      "Multiply the balance by bank rate",
      "Add ₹5880 to the Cash Book balance"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-277",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹2430 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹2430 higher than Cash Book balance",
    "options": [
      "Both balances remain identical",
      "Cash Book reflects an overdraft",
      "Cash Book balance is ₹2430 higher than Pass Book balance",
      "Pass Book balance is ₹2430 higher than Cash Book balance"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-278",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "A favourable deposit balance belonging to the customer",
      "An error in the trial balance",
      "A dishonored cheque",
      "An overdraft owed by the customer to the bank"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-279",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Added to the overdraft balance",
      "Posted to Suspense Account",
      "Deducted from the overdraft balance",
      "Ignored completely"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-280",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹60000 and ₹50000 as capital without any partnership deed. If the firm earns a profit of ₹30000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "In the ratio of 60000:50000",
      "70% to X and 30% to Y",
      "Divided equally between X and Y",
      "Retained as capital reserves without distribution"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-281",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "An appropriation of profits (debited to P&L Appropriation Account)",
      "A capital receipt credited to partner equity",
      "A charge against profits (debited to Profit & Loss Account)",
      "A transfer to General Reserve"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-282",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Purchase of office equipment",
      "Share of Net Loss",
      "Drawings and Interest on Drawings",
      "Interest on Capital and Share of Profit"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-283",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio",
      "Capital Ratio",
      "Sacrificing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-284",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Cash Book",
      "Ledger",
      "Trial Balance",
      "Journal Proper"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-285",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹8500 has total expenses of ₹2300. How much is reimbursed?",
    "answer": "Exactly ₹2300",
    "options": [
      "Zero until next year",
      "₹3000",
      "₹8500",
      "Exactly ₹2300"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-286",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Ledger Folio column",
      "Bank column",
      "Cash column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-287",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To maintain daily petty cash registers for the client",
      "To determine the market share price of company stock",
      "To guarantee complete recovery of bad debts",
      "To report whether financial statements give a true and fair view of the state of affairs"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-288",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Purchase price, invoice number, and delivery date",
      "Vendor identity, payment receipt, and check counterfoil",
      "Existence, Ownership/Title, and Proper Valuation",
      "Daily physical counting, insurance status, and resale broker"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-289",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
      "The company earns record high operating profits",
      "Minor arithmetical errors are detected in petty cash",
      "The internal audit team was appointed by the board"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-290",
    "categoryId": "accounting",
    "question": "An amount of ₹2750 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Error of Partial Omission",
      "Compensating Error",
      "Error of Principle",
      "Error of Complete Omission"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-291",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition",
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Posting ₹450 as ₹540 in the same ledger account"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-292",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹1100, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Credit side of the Suspense Account",
      "Debit side of the Suspense Account",
      "Trading Account Gross Profit",
      "Directly to Capital Account"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-293",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹16500, Purchases ₹63000, Direct Expenses ₹13600, Closing Stock ₹27900.",
    "answer": "₹65200",
    "options": [
      "₹60200",
      "₹65200",
      "₹70200",
      "₹75200"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 16500 + 63000 + 13600 - 27900 = ₹65200.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-294",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Balance sheet Current Assets",
      "Debit side of Trading Account",
      "Credit side of Trading Account",
      "Debit side of Profit and Loss Account"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-295",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Cash in Hand",
      "Marketable Securities",
      "Sundry Debtors",
      "Land and Buildings (Fixed Assets)"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-296",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹88000, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹43000",
    "options": [
      "₹10000",
      "₹25000",
      "₹43000",
      "₹5000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-297",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Trial Balance",
      "Statement of Affairs"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-298",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Stock market dividend yields of public enterprises",
      "Physical wear and tear of computing hardware",
      "Accuracy of income tax deductions under Section 80C"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-299",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)",
      "Governor, Reserve Bank of India"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-300",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "National Disaster Response Fund",
      "Consolidated Fund of India",
      "Public Account of India",
      "Contingency Fund of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-301",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The Comptroller and Auditor General",
      "The Prime Minister of India",
      "The Speaker of the Lok Sabha",
      "The President of India"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-302",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Consolidated Fund of India",
      "Prime Minister Relief Fund",
      "Contingency Fund of India",
      "Public Account of India (Article 266(2))"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-303",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Chief Justice of India",
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Prime Minister directly"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-304",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Assessment Year",
      "Base Year",
      "Calendar Year",
      "Previous Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-305",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "Customs Duty and Excise",
      "CGST and SGST (or UTGST)",
      "IGST only",
      "Service Tax and VAT"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-306",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 246A",
      "Article 269A",
      "Article 279A",
      "Article 280"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-307",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
      "To eliminate customs tariffs on foreign imports",
      "To provide direct cash subsidies to manufacturers",
      "To exempt luxury services from corporate tax"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-308",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Medical insurance premium paid for self, family, and parents",
      "Repayment of housing loan principal",
      "Investments in Public Provident Fund (PPF)",
      "Interest on higher education loans"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-309",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹109000 and Factory Overheads are ₹24500. What is the Works Cost?",
    "answer": "₹133500",
    "options": [
      "₹109000",
      "₹133500",
      "₹150000",
      "₹60000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-310",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Zero-Based Budget",
      "Flexible Budget",
      "Master Budget",
      "Fixed Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-311",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "10,000 units",
      "20,000 units",
      "2,000 units",
      "5,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-312",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-313",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "International Financial Reporting Standards (IFRS)",
      "United Nations System of National Accounts",
      "US Generally Accepted Accounting Principles (US GAAP)",
      "Basel III Banking Norms"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-314",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Forensic Accounting",
      "Social Accounting",
      "Inflation Accounting",
      "Cost Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-315",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Automatically delete audit records after 90 days",
      "Block all credit sales to customers",
      "Send quarterly tax summaries to the central registry"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-316",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹7800 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Credit Voucher",
      "Receipt Voucher",
      "Transfer Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-317",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Cash withdrawals by the proprietor for personal use",
      "Non-cash transactions and year-end adjusting entries",
      "Cash deposits into the bank current account",
      "Direct cash sales over the counter"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-318",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Petty Cash Cheque",
      "Supporting Voucher",
      "Contra Voucher",
      "Primary Journal Voucher"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-319",
    "categoryId": "accounting",
    "question": "A cheque of ₹3470 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹3470 to the Cash Book balance",
    "options": [
      "Multiply the balance by bank rate",
      "Ignore the entry until month end",
      "Deduct ₹3470 from the Cash Book balance",
      "Add ₹3470 to the Cash Book balance"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-320",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹6300 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹6300 higher than Cash Book balance",
    "options": [
      "Cash Book reflects an overdraft",
      "Cash Book balance is ₹6300 higher than Pass Book balance",
      "Pass Book balance is ₹6300 higher than Cash Book balance",
      "Both balances remain identical"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-321",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "An overdraft owed by the customer to the bank",
      "An error in the trial balance",
      "A dishonored cheque",
      "A favourable deposit balance belonging to the customer"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-322",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Posted to Suspense Account",
      "Added to the overdraft balance",
      "Deducted from the overdraft balance",
      "Ignored completely"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-323",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹96000 and ₹34500 as capital without any partnership deed. If the firm earns a profit of ₹48000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Divided equally between X and Y",
      "Retained as capital reserves without distribution",
      "70% to X and 30% to Y",
      "In the ratio of 96000:34500"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-324",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "A charge against profits (debited to Profit & Loss Account)",
      "A transfer to General Reserve",
      "A capital receipt credited to partner equity",
      "An appropriation of profits (debited to P&L Appropriation Account)"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-325",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Purchase of office equipment",
      "Interest on Capital and Share of Profit",
      "Share of Net Loss",
      "Drawings and Interest on Drawings"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-326",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio",
      "Sacrificing Ratio",
      "Capital Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-327",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Trial Balance",
      "Journal Proper",
      "Ledger",
      "Cash Book"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-328",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹7800 has total expenses of ₹3240. How much is reimbursed?",
    "answer": "Exactly ₹3240",
    "options": [
      "Zero until next year",
      "Exactly ₹3240",
      "₹3000",
      "₹7800"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-329",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Ledger Folio column",
      "Bank column",
      "Cash column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-330",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To determine the market share price of company stock",
      "To maintain daily petty cash registers for the client",
      "To guarantee complete recovery of bad debts",
      "To report whether financial statements give a true and fair view of the state of affairs"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-331",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Purchase price, invoice number, and delivery date",
      "Vendor identity, payment receipt, and check counterfoil",
      "Existence, Ownership/Title, and Proper Valuation",
      "Daily physical counting, insurance status, and resale broker"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-332",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
      "The company earns record high operating profits",
      "The internal audit team was appointed by the board",
      "Minor arithmetical errors are detected in petty cash"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-333",
    "categoryId": "accounting",
    "question": "An amount of ₹1975 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Error of Partial Omission",
      "Compensating Error",
      "Error of Principle",
      "Error of Complete Omission"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-334",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Posting ₹450 as ₹540 in the same ledger account",
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-335",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹1250, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Trading Account Gross Profit",
      "Directly to Capital Account",
      "Debit side of the Suspense Account",
      "Credit side of the Suspense Account"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-336",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹18000, Purchases ₹66000, Direct Expenses ₹12200, Closing Stock ₹25800.",
    "answer": "₹70400",
    "options": [
      "₹65400",
      "₹70400",
      "₹75400",
      "₹80400"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 18000 + 66000 + 12200 - 25800 = ₹70400.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-337",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Credit side of Trading Account",
      "Balance sheet Current Assets",
      "Debit side of Profit and Loss Account",
      "Debit side of Trading Account"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-338",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Marketable Securities",
      "Cash in Hand",
      "Land and Buildings (Fixed Assets)",
      "Sundry Debtors"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-339",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹79500, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹34500",
    "options": [
      "₹10000",
      "₹25000",
      "₹34500",
      "₹5000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-340",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Trial Balance",
      "Statement of Affairs"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-341",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Stock market dividend yields of public enterprises",
      "Physical wear and tear of computing hardware",
      "Accuracy of income tax deductions under Section 80C",
      "Social impact, ethical governance, community benefit, and scheme delivery"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-342",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)",
      "Governor, Reserve Bank of India",
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-343",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "National Disaster Response Fund",
      "Public Account of India",
      "Contingency Fund of India",
      "Consolidated Fund of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-344",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The Speaker of the Lok Sabha",
      "The Prime Minister of India",
      "The President of India",
      "The Comptroller and Auditor General"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-345",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Public Account of India (Article 266(2))",
      "Consolidated Fund of India",
      "Prime Minister Relief Fund",
      "Contingency Fund of India"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-346",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Chief Justice of India",
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Prime Minister directly"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-347",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Base Year",
      "Assessment Year",
      "Calendar Year",
      "Previous Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-348",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "Service Tax and VAT",
      "CGST and SGST (or UTGST)",
      "IGST only",
      "Customs Duty and Excise"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-349",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 280",
      "Article 246A",
      "Article 269A",
      "Article 279A"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-350",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
      "To provide direct cash subsidies to manufacturers",
      "To eliminate customs tariffs on foreign imports",
      "To exempt luxury services from corporate tax"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-351",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Investments in Public Provident Fund (PPF)",
      "Interest on higher education loans",
      "Repayment of housing loan principal",
      "Medical insurance premium paid for self, family, and parents"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-352",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹112000 and Factory Overheads are ₹31000. What is the Works Cost?",
    "answer": "₹143000",
    "options": [
      "₹60000",
      "₹112000",
      "₹143000",
      "₹150000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-353",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Zero-Based Budget",
      "Flexible Budget",
      "Master Budget",
      "Fixed Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-354",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "10,000 units",
      "2,000 units",
      "20,000 units",
      "5,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-355",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-356",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "US Generally Accepted Accounting Principles (US GAAP)",
      "United Nations System of National Accounts",
      "International Financial Reporting Standards (IFRS)",
      "Basel III Banking Norms"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-357",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Social Accounting",
      "Inflation Accounting",
      "Cost Accounting",
      "Forensic Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-358",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Send quarterly tax summaries to the central registry",
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Block all credit sales to customers",
      "Automatically delete audit records after 90 days"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-359",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹9950 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Transfer Voucher",
      "Receipt Voucher",
      "Credit Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-360",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Cash deposits into the bank current account",
      "Direct cash sales over the counter",
      "Cash withdrawals by the proprietor for personal use",
      "Non-cash transactions and year-end adjusting entries"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-361",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Primary Journal Voucher",
      "Supporting Voucher",
      "Contra Voucher",
      "Petty Cash Cheque"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-362",
    "categoryId": "accounting",
    "question": "A cheque of ₹9060 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹9060 to the Cash Book balance",
    "options": [
      "Add ₹9060 to the Cash Book balance",
      "Ignore the entry until month end",
      "Deduct ₹9060 from the Cash Book balance",
      "Multiply the balance by bank rate"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-363",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹4170 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹4170 higher than Cash Book balance",
    "options": [
      "Cash Book reflects an overdraft",
      "Cash Book balance is ₹4170 higher than Pass Book balance",
      "Pass Book balance is ₹4170 higher than Cash Book balance",
      "Both balances remain identical"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-364",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "An overdraft owed by the customer to the bank",
      "A favourable deposit balance belonging to the customer",
      "A dishonored cheque",
      "An error in the trial balance"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-365",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Deducted from the overdraft balance",
      "Posted to Suspense Account",
      "Ignored completely",
      "Added to the overdraft balance"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-366",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹82000 and ₹59000 as capital without any partnership deed. If the firm earns a profit of ₹41000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Retained as capital reserves without distribution",
      "Divided equally between X and Y",
      "70% to X and 30% to Y",
      "In the ratio of 82000:59000"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-367",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "A capital receipt credited to partner equity",
      "A charge against profits (debited to Profit & Loss Account)",
      "A transfer to General Reserve",
      "An appropriation of profits (debited to P&L Appropriation Account)"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-368",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Purchase of office equipment",
      "Interest on Capital and Share of Profit",
      "Share of Net Loss",
      "Drawings and Interest on Drawings"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-369",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio",
      "Sacrificing Ratio",
      "Capital Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-370",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Journal Proper",
      "Cash Book",
      "Ledger",
      "Trial Balance"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-371",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹7100 has total expenses of ₹4180. How much is reimbursed?",
    "answer": "Exactly ₹4180",
    "options": [
      "Zero until next year",
      "₹3000",
      "₹7100",
      "Exactly ₹4180"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-372",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Ledger Folio column",
      "Bank column",
      "Cash column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-373",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To report whether financial statements give a true and fair view of the state of affairs",
      "To determine the market share price of company stock",
      "To maintain daily petty cash registers for the client",
      "To guarantee complete recovery of bad debts"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-374",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Daily physical counting, insurance status, and resale broker",
      "Existence, Ownership/Title, and Proper Valuation",
      "Purchase price, invoice number, and delivery date",
      "Vendor identity, payment receipt, and check counterfoil"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-375",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "Minor arithmetical errors are detected in petty cash",
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
      "The company earns record high operating profits",
      "The internal audit team was appointed by the board"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-376",
    "categoryId": "accounting",
    "question": "An amount of ₹1200 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Error of Partial Omission",
      "Error of Complete Omission",
      "Compensating Error",
      "Error of Principle"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-377",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition",
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Posting ₹450 as ₹540 in the same ledger account"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-378",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹1400, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Debit side of the Suspense Account",
      "Credit side of the Suspense Account",
      "Trading Account Gross Profit",
      "Directly to Capital Account"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-379",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹19500, Purchases ₹69000, Direct Expenses ₹10800, Closing Stock ₹23700.",
    "answer": "₹75600",
    "options": [
      "₹70600",
      "₹75600",
      "₹80600",
      "₹85600"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 19500 + 69000 + 10800 - 23700 = ₹75600.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-380",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Debit side of Profit and Loss Account",
      "Debit side of Trading Account",
      "Balance sheet Current Assets",
      "Credit side of Trading Account"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-381",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Land and Buildings (Fixed Assets)",
      "Sundry Debtors",
      "Cash in Hand",
      "Marketable Securities"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-382",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹71000, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹26000",
    "options": [
      "₹10000",
      "₹25000",
      "₹26000",
      "₹5000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-383",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Balance Sheet",
      "Trial Balance",
      "Income Statement",
      "Statement of Affairs"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-384",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Stock market dividend yields of public enterprises",
      "Accuracy of income tax deductions under Section 80C",
      "Physical wear and tear of computing hardware"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-385",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
      "Governor, Reserve Bank of India",
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-386",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "National Disaster Response Fund",
      "Contingency Fund of India",
      "Consolidated Fund of India",
      "Public Account of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-387",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The Comptroller and Auditor General",
      "The Speaker of the Lok Sabha",
      "The Prime Minister of India",
      "The President of India"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-388",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Public Account of India (Article 266(2))",
      "Contingency Fund of India",
      "Consolidated Fund of India",
      "Prime Minister Relief Fund"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-389",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Chief Justice of India",
      "The Prime Minister directly"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-390",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Calendar Year",
      "Previous Year",
      "Assessment Year",
      "Base Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-391",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "CGST and SGST (or UTGST)",
      "IGST only",
      "Service Tax and VAT",
      "Customs Duty and Excise"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-392",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 246A",
      "Article 269A",
      "Article 279A",
      "Article 280"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-393",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To eliminate customs tariffs on foreign imports",
      "To exempt luxury services from corporate tax",
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
      "To provide direct cash subsidies to manufacturers"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-394",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Medical insurance premium paid for self, family, and parents",
      "Investments in Public Provident Fund (PPF)",
      "Repayment of housing loan principal",
      "Interest on higher education loans"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-395",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹115000 and Factory Overheads are ₹22500. What is the Works Cost?",
    "answer": "₹137500",
    "options": [
      "₹115000",
      "₹137500",
      "₹150000",
      "₹60000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-396",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Zero-Based Budget",
      "Flexible Budget",
      "Fixed Budget",
      "Master Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-397",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "2,000 units",
      "5,000 units",
      "10,000 units",
      "20,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-398",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-399",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "International Financial Reporting Standards (IFRS)",
      "United Nations System of National Accounts",
      "US Generally Accepted Accounting Principles (US GAAP)",
      "Basel III Banking Norms"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-400",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Cost Accounting",
      "Forensic Accounting",
      "Inflation Accounting",
      "Social Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-401",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Send quarterly tax summaries to the central registry",
      "Automatically delete audit records after 90 days",
      "Block all credit sales to customers"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-402",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹3100 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Credit Voucher",
      "Transfer Voucher",
      "Receipt Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-403",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Non-cash transactions and year-end adjusting entries",
      "Cash withdrawals by the proprietor for personal use",
      "Direct cash sales over the counter",
      "Cash deposits into the bank current account"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-404",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Primary Journal Voucher",
      "Supporting Voucher",
      "Contra Voucher",
      "Petty Cash Cheque"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-405",
    "categoryId": "accounting",
    "question": "A cheque of ₹6650 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹6650 to the Cash Book balance",
    "options": [
      "Add ₹6650 to the Cash Book balance",
      "Multiply the balance by bank rate",
      "Ignore the entry until month end",
      "Deduct ₹6650 from the Cash Book balance"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-406",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹2040 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹2040 higher than Cash Book balance",
    "options": [
      "Both balances remain identical",
      "Cash Book balance is ₹2040 higher than Pass Book balance",
      "Pass Book balance is ₹2040 higher than Cash Book balance",
      "Cash Book reflects an overdraft"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-407",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "A favourable deposit balance belonging to the customer",
      "An error in the trial balance",
      "An overdraft owed by the customer to the bank",
      "A dishonored cheque"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-408",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Deducted from the overdraft balance",
      "Added to the overdraft balance",
      "Posted to Suspense Account",
      "Ignored completely"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-409",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹68000 and ₹43500 as capital without any partnership deed. If the firm earns a profit of ₹34000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "In the ratio of 68000:43500",
      "Retained as capital reserves without distribution",
      "Divided equally between X and Y",
      "70% to X and 30% to Y"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-410",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "A charge against profits (debited to Profit & Loss Account)",
      "A capital receipt credited to partner equity",
      "A transfer to General Reserve",
      "An appropriation of profits (debited to P&L Appropriation Account)"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-411",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Drawings and Interest on Drawings",
      "Interest on Capital and Share of Profit",
      "Share of Net Loss",
      "Purchase of office equipment"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-412",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio",
      "Capital Ratio",
      "Sacrificing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-413",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Journal Proper",
      "Trial Balance",
      "Cash Book",
      "Ledger"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-414",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹6400 has total expenses of ₹2620. How much is reimbursed?",
    "answer": "Exactly ₹2620",
    "options": [
      "Zero until next year",
      "Exactly ₹2620",
      "₹3000",
      "₹6400"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-415",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Ledger Folio column",
      "Bank column",
      "Cash column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-416",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To report whether financial statements give a true and fair view of the state of affairs",
      "To guarantee complete recovery of bad debts",
      "To maintain daily petty cash registers for the client",
      "To determine the market share price of company stock"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-417",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Existence, Ownership/Title, and Proper Valuation",
      "Purchase price, invoice number, and delivery date",
      "Vendor identity, payment receipt, and check counterfoil",
      "Daily physical counting, insurance status, and resale broker"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-418",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
      "The internal audit team was appointed by the board",
      "Minor arithmetical errors are detected in petty cash",
      "The company earns record high operating profits"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-419",
    "categoryId": "accounting",
    "question": "An amount of ₹4425 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Error of Complete Omission",
      "Error of Partial Omission",
      "Compensating Error",
      "Error of Principle"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-420",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Posting ₹450 as ₹540 in the same ledger account",
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-421",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹1550, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Trading Account Gross Profit",
      "Directly to Capital Account",
      "Credit side of the Suspense Account",
      "Debit side of the Suspense Account"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-422",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹21000, Purchases ₹72000, Direct Expenses ₹9400, Closing Stock ₹21600.",
    "answer": "₹80800",
    "options": [
      "₹75800",
      "₹80800",
      "₹85800",
      "₹90800"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 21000 + 72000 + 9400 - 21600 = ₹80800.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-423",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Balance sheet Current Assets",
      "Debit side of Trading Account",
      "Debit side of Profit and Loss Account",
      "Credit side of Trading Account"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-424",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Land and Buildings (Fixed Assets)",
      "Marketable Securities",
      "Sundry Debtors",
      "Cash in Hand"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-425",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹62500, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹17500",
    "options": [
      "₹10000",
      "₹17500",
      "₹25000",
      "₹5000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-426",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Statement of Affairs",
      "Trial Balance"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-427",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Physical wear and tear of computing hardware",
      "Accuracy of income tax deductions under Section 80C",
      "Stock market dividend yields of public enterprises"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-428",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)",
      "Governor, Reserve Bank of India"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-429",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "National Disaster Response Fund",
      "Public Account of India",
      "Consolidated Fund of India",
      "Contingency Fund of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-430",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The Speaker of the Lok Sabha",
      "The Comptroller and Auditor General",
      "The Prime Minister of India",
      "The President of India"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-431",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Consolidated Fund of India",
      "Prime Minister Relief Fund",
      "Contingency Fund of India",
      "Public Account of India (Article 266(2))"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-432",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Chief Justice of India",
      "The Prime Minister directly",
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-433",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Assessment Year",
      "Base Year",
      "Calendar Year",
      "Previous Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-434",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "Customs Duty and Excise",
      "Service Tax and VAT",
      "CGST and SGST (or UTGST)",
      "IGST only"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-435",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 246A",
      "Article 269A",
      "Article 279A",
      "Article 280"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-436",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
      "To eliminate customs tariffs on foreign imports",
      "To provide direct cash subsidies to manufacturers",
      "To exempt luxury services from corporate tax"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-437",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Investments in Public Provident Fund (PPF)",
      "Interest on higher education loans",
      "Repayment of housing loan principal",
      "Medical insurance premium paid for self, family, and parents"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-438",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹118000 and Factory Overheads are ₹29000. What is the Works Cost?",
    "answer": "₹147000",
    "options": [
      "₹60000",
      "₹118000",
      "₹147000",
      "₹150000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-439",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Master Budget",
      "Zero-Based Budget",
      "Fixed Budget",
      "Flexible Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-440",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "10,000 units",
      "20,000 units",
      "2,000 units",
      "5,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-441",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-442",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "US Generally Accepted Accounting Principles (US GAAP)",
      "United Nations System of National Accounts",
      "Basel III Banking Norms",
      "International Financial Reporting Standards (IFRS)"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-443",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Cost Accounting",
      "Inflation Accounting",
      "Social Accounting",
      "Forensic Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-444",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Send quarterly tax summaries to the central registry",
      "Block all credit sales to customers",
      "Automatically delete audit records after 90 days"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-445",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹5250 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Receipt Voucher",
      "Credit Voucher",
      "Transfer Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-446",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Non-cash transactions and year-end adjusting entries",
      "Cash deposits into the bank current account",
      "Cash withdrawals by the proprietor for personal use",
      "Direct cash sales over the counter"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-447",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Petty Cash Cheque",
      "Supporting Voucher",
      "Primary Journal Voucher",
      "Contra Voucher"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-448",
    "categoryId": "accounting",
    "question": "A cheque of ₹4240 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹4240 to the Cash Book balance",
    "options": [
      "Deduct ₹4240 from the Cash Book balance",
      "Multiply the balance by bank rate",
      "Ignore the entry until month end",
      "Add ₹4240 to the Cash Book balance"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-449",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹5910 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹5910 higher than Cash Book balance",
    "options": [
      "Both balances remain identical",
      "Cash Book reflects an overdraft",
      "Cash Book balance is ₹5910 higher than Pass Book balance",
      "Pass Book balance is ₹5910 higher than Cash Book balance"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-450",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "A favourable deposit balance belonging to the customer",
      "An overdraft owed by the customer to the bank",
      "An error in the trial balance",
      "A dishonored cheque"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-451",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Deducted from the overdraft balance",
      "Ignored completely",
      "Posted to Suspense Account",
      "Added to the overdraft balance"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-452",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹54000 and ₹68000 as capital without any partnership deed. If the firm earns a profit of ₹27000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Divided equally between X and Y",
      "Retained as capital reserves without distribution",
      "70% to X and 30% to Y",
      "In the ratio of 54000:68000"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-453",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "A charge against profits (debited to Profit & Loss Account)",
      "A capital receipt credited to partner equity",
      "An appropriation of profits (debited to P&L Appropriation Account)",
      "A transfer to General Reserve"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-454",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Purchase of office equipment",
      "Interest on Capital and Share of Profit",
      "Share of Net Loss",
      "Drawings and Interest on Drawings"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-455",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio",
      "Capital Ratio",
      "Sacrificing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-456",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Cash Book",
      "Trial Balance",
      "Journal Proper",
      "Ledger"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-457",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹5700 has total expenses of ₹3560. How much is reimbursed?",
    "answer": "Exactly ₹3560",
    "options": [
      "Zero until next year",
      "Exactly ₹3560",
      "₹3000",
      "₹5700"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-458",
    "categoryId": "accounting",
    "question": "Which column of a Three-Column Cash Book is totaled but NEVER balanced?",
    "answer": "Discount columns (Discount Allowed and Discount Received)",
    "options": [
      "Discount columns (Discount Allowed and Discount Received)",
      "Bank column",
      "Cash column",
      "Ledger Folio column"
    ],
    "explanation": "Discount columns are totaled and transferred directly to Discount Allowed A/c (debit) and Discount Received A/c (credit).",
    "tip": "Discount columns are totaled, not balanced.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-459",
    "categoryId": "accounting",
    "question": "What is the primary duty of an independent statutory auditor under the Companies Act?",
    "answer": "To report whether financial statements give a true and fair view of the state of affairs",
    "options": [
      "To determine the market share price of company stock",
      "To report whether financial statements give a true and fair view of the state of affairs",
      "To guarantee complete recovery of bad debts",
      "To maintain daily petty cash registers for the client"
    ],
    "explanation": "The auditor provides an objective professional opinion on the truth and fairness of financial statements.",
    "tip": "Auditor reports a \"True and Fair View\".",
    "difficulty": "beginner"
  },
  {
    "id": "acc-460",
    "categoryId": "accounting",
    "question": "Verification of an asset involves confirming which three essential aspects?",
    "answer": "Existence, Ownership/Title, and Proper Valuation",
    "options": [
      "Daily physical counting, insurance status, and resale broker",
      "Existence, Ownership/Title, and Proper Valuation",
      "Purchase price, invoice number, and delivery date",
      "Vendor identity, payment receipt, and check counterfoil"
    ],
    "explanation": "Verification checks existence, ownership/title, lack of encumbrance, and correct valuation on the balance sheet.",
    "tip": "Verification = Existence + Ownership + Valuation.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-461",
    "categoryId": "accounting",
    "question": "An auditor issues a \"Disclaimer of Opinion\" when:",
    "answer": "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation",
    "options": [
      "The company earns record high operating profits",
      "The internal audit team was appointed by the board",
      "Minor arithmetical errors are detected in petty cash",
      "The auditor is unable to obtain sufficient appropriate audit evidence due to severe scope limitation"
    ],
    "explanation": "A disclaimer is issued when scope limitations prevent forming an opinion on financial statements as a whole.",
    "tip": "Disclaimer = Scope limitation prevents forming an opinion.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-462",
    "categoryId": "accounting",
    "question": "An amount of ₹3650 received from debtor \"Mr. A\" was correctly entered in Cash Book but omitted from Mr. A's ledger. What type of error is this?",
    "answer": "Error of Partial Omission",
    "options": [
      "Compensating Error",
      "Error of Principle",
      "Error of Complete Omission",
      "Error of Partial Omission"
    ],
    "explanation": "Omission from only one ledger account creates an error of partial omission, causing the trial balance to disagree.",
    "tip": "Partial omission causes trial balance disagreement.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-463",
    "categoryId": "accounting",
    "question": "Which of the following errors is classified as a \"Compensating Error\"?",
    "answer": "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
    "options": [
      "An over-debit of ₹500 in one account offset by an over-credit of ₹500 in an unrelated account",
      "Failing to record a sales transaction in both books",
      "Treating factory plant repairs as plant acquisition",
      "Posting ₹450 as ₹540 in the same ledger account"
    ],
    "explanation": "Compensating errors occur when two independent mistakes neutralize each other so trial balance totals still balance.",
    "tip": "Compensating errors offset each other.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-464",
    "categoryId": "accounting",
    "question": "If total debits in the trial balance exceed total credits by ₹1700, where is the difference temporarily posted?",
    "answer": "Credit side of the Suspense Account",
    "options": [
      "Credit side of the Suspense Account",
      "Trading Account Gross Profit",
      "Debit side of the Suspense Account",
      "Directly to Capital Account"
    ],
    "explanation": "To balance the trial balance, the shortage on the credit side is posted to the credit of Suspense Account.",
    "tip": "Shortage on credit side = Credit Suspense Account.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-465",
    "categoryId": "accounting",
    "question": "Calculate Cost of Goods Sold (COGS): Opening Stock ₹22500, Purchases ₹75000, Direct Expenses ₹8000, Closing Stock ₹19500.",
    "answer": "₹86000",
    "options": [
      "₹81000",
      "₹86000",
      "₹91000",
      "₹96000"
    ],
    "explanation": "COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock = 22500 + 75000 + 8000 - 19500 = ₹86000.",
    "tip": "COGS = Opening Stock + Purchases + Direct Expenses - Closing Stock.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-466",
    "categoryId": "accounting",
    "question": "Carriage Outwards (freight on sales to customers) is recorded in which account?",
    "answer": "Debit side of Profit and Loss Account",
    "options": [
      "Debit side of Profit and Loss Account",
      "Credit side of Trading Account",
      "Debit side of Trading Account",
      "Balance sheet Current Assets"
    ],
    "explanation": "Carriage Outward is an indirect selling and distribution expense, debited to Profit and Loss Account (Carriage Inward goes to Trading).",
    "tip": "Carriage Inward = Trading; Carriage Outward = P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-467",
    "categoryId": "accounting",
    "question": "In marshalling a balance sheet under the \"Order of Permanence\", which asset is presented first?",
    "answer": "Land and Buildings (Fixed Assets)",
    "options": [
      "Marketable Securities",
      "Cash in Hand",
      "Land and Buildings (Fixed Assets)",
      "Sundry Debtors"
    ],
    "explanation": "Order of permanence places the most permanent fixed assets (Land/Buildings) first and liquid assets (Cash) last.",
    "tip": "Order of Permanence = Fixed assets first.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-468",
    "categoryId": "accounting",
    "question": "In single-entry accounting, if Closing Capital is ₹84000, Drawings ₹10000, Fresh Capital ₹5000, and Opening Capital ₹50000, what is Net Profit?",
    "answer": "₹39000",
    "options": [
      "₹10000",
      "₹25000",
      "₹39000",
      "₹5000"
    ],
    "explanation": "Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital.",
    "tip": "Profit = (Closing Capital + Drawings) - (Opening Capital + Fresh Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-469",
    "categoryId": "accounting",
    "question": "The statement prepared in single-entry bookkeeping to determine capital at the beginning or end of the year is called:",
    "answer": "Statement of Affairs",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Statement of Affairs",
      "Trial Balance"
    ],
    "explanation": "A Statement of Affairs lists assets and liabilities from incomplete records to calculate capital as a balancing figure.",
    "tip": "Statement of Affairs = Single-entry equivalent of Balance Sheet.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-470",
    "categoryId": "accounting",
    "question": "What does \"Social Audit\" assess in public governance and corporate operations?",
    "answer": "Social impact, ethical governance, community benefit, and scheme delivery",
    "options": [
      "Social impact, ethical governance, community benefit, and scheme delivery",
      "Accuracy of income tax deductions under Section 80C",
      "Physical wear and tear of computing hardware",
      "Stock market dividend yields of public enterprises"
    ],
    "explanation": "Social audit evaluates an organization's performance in meeting social responsibility, public welfare, and community commitments.",
    "tip": "Social Audit = Impact on society & public welfare.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-471",
    "categoryId": "accounting",
    "question": "The Public Financial Management System (PFMS) operates under the administrative control of which authority?",
    "answer": "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
    "options": [
      "Controller General of Accounts (CGA), Department of Expenditure, Ministry of Finance",
      "Governor, Reserve Bank of India",
      "Chairman, Central Board of Direct Taxes (CBDT)",
      "Comptroller and Auditor General of India (CAG)"
    ],
    "explanation": "PFMS is developed and implemented by the Office of Controller General of Accounts (CGA), Ministry of Finance.",
    "tip": "PFMS is managed by CGA, Ministry of Finance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-472",
    "categoryId": "accounting",
    "question": "Which constitutional fund under Article 266(1) receives all government revenues, loans raised, and loan recoveries?",
    "answer": "Consolidated Fund of India",
    "options": [
      "National Disaster Response Fund",
      "Contingency Fund of India",
      "Public Account of India",
      "Consolidated Fund of India"
    ],
    "explanation": "Article 266(1) establishes the Consolidated Fund. No money can be appropriated from it except by law enacted by Parliament.",
    "tip": "Consolidated Fund = Article 266(1).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-473",
    "categoryId": "accounting",
    "question": "Under Article 267 of the Indian Constitution, the Contingency Fund of India is held at the disposal of:",
    "answer": "The President of India",
    "options": [
      "The President of India",
      "The Speaker of the Lok Sabha",
      "The Prime Minister of India",
      "The Comptroller and Auditor General"
    ],
    "explanation": "The Contingency Fund is held by the President to meet unforeseen urgent expenses pending legislative sanction.",
    "tip": "Contingency Fund = President of India (Article 267).",
    "difficulty": "beginner"
  },
  {
    "id": "acc-474",
    "categoryId": "accounting",
    "question": "Public moneys held by the government as banker/custodian (like Provident Funds and judicial deposits) are credited to:",
    "answer": "Public Account of India (Article 266(2))",
    "options": [
      "Consolidated Fund of India",
      "Prime Minister Relief Fund",
      "Contingency Fund of India",
      "Public Account of India (Article 266(2))"
    ],
    "explanation": "Article 266(2) governs the Public Account where government acts as a trustee or banker.",
    "tip": "Public Account = Article 266(2).",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-475",
    "categoryId": "accounting",
    "question": "The audit reports of the Comptroller and Auditor General (CAG) relating to the accounts of the Union are submitted under Article 151 to:",
    "answer": "The President of India (who causes them to be laid before Parliament)",
    "options": [
      "The Chief Justice of India",
      "The Central Vigilance Commissioner",
      "The President of India (who causes them to be laid before Parliament)",
      "The Prime Minister directly"
    ],
    "explanation": "Under Article 151(1), CAG reports on Union accounts are submitted to the President, who lays them before both Houses of Parliament.",
    "tip": "CAG reports go to the President / Governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-476",
    "categoryId": "accounting",
    "question": "Under the Income Tax Act, 1961, what is the term for the financial year immediately following the Previous Year in which income is assessed?",
    "answer": "Assessment Year",
    "options": [
      "Assessment Year",
      "Base Year",
      "Calendar Year",
      "Previous Year"
    ],
    "explanation": "Income earned during the Previous Year is assessed and taxed during the Assessment Year.",
    "tip": "Income earned in Previous Year; taxed in Assessment Year.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-477",
    "categoryId": "accounting",
    "question": "On an intra-state supply of goods within Jammu and Kashmir, which components of GST are levied?",
    "answer": "CGST and SGST (or UTGST)",
    "options": [
      "Customs Duty and Excise",
      "CGST and SGST (or UTGST)",
      "IGST only",
      "Service Tax and VAT"
    ],
    "explanation": "Intra-state transactions attract Central GST (CGST) and State/UT GST (SGST/UTGST) in equal proportions.",
    "tip": "Intra-state = CGST + SGST; Inter-state = IGST.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-478",
    "categoryId": "accounting",
    "question": "The GST Council is a constitutional body established under which Article of the Constitution of India?",
    "answer": "Article 279A",
    "options": [
      "Article 280",
      "Article 246A",
      "Article 269A",
      "Article 279A"
    ],
    "explanation": "Article 279A, added by the 101st Amendment, establishes the GST Council chaired by the Union Finance Minister.",
    "tip": "GST Council = Article 279A.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-479",
    "categoryId": "accounting",
    "question": "What is the purpose of Input Tax Credit (ITC) under GST law?",
    "answer": "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
    "options": [
      "To prevent the cascading effect of taxation (tax on tax) across the supply chain",
      "To exempt luxury services from corporate tax",
      "To eliminate customs tariffs on foreign imports",
      "To provide direct cash subsidies to manufacturers"
    ],
    "explanation": "ITC allows offsetting taxes paid on inputs against taxes due on output supplies, ensuring tax is levied only on value addition.",
    "tip": "ITC eliminates tax cascading.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-480",
    "categoryId": "accounting",
    "question": "Under Section 80D of the Income Tax Act, 1961, deductions are allowed for:",
    "answer": "Medical insurance premium paid for self, family, and parents",
    "options": [
      "Medical insurance premium paid for self, family, and parents",
      "Interest on higher education loans",
      "Investments in Public Provident Fund (PPF)",
      "Repayment of housing loan principal"
    ],
    "explanation": "Section 80D provides tax relief on health insurance premiums paid for self, spouse, children, and senior citizen parents.",
    "tip": "Section 80D = Health insurance deductions.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-481",
    "categoryId": "accounting",
    "question": "In a manufacturing firm, Prime Cost is ₹81000 and Factory Overheads are ₹20500. What is the Works Cost?",
    "answer": "₹101500",
    "options": [
      "₹101500",
      "₹150000",
      "₹60000",
      "₹81000"
    ],
    "explanation": "Works Cost (Factory Cost) = Prime Cost + Factory Overheads.",
    "tip": "Works Cost = Prime Cost + Factory Overheads.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-482",
    "categoryId": "accounting",
    "question": "A budget that is designed to remain unchanged regardless of the volume of output actually produced is called a:",
    "answer": "Fixed Budget",
    "options": [
      "Flexible Budget",
      "Zero-Based Budget",
      "Fixed Budget",
      "Master Budget"
    ],
    "explanation": "A fixed budget is prepared for a single predetermined level of operational activity.",
    "tip": "Fixed budget does not adjust for volume.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-483",
    "categoryId": "accounting",
    "question": "In marginal costing, if Selling Price is ₹50, Variable Cost is ₹30, and Fixed Costs are ₹100000, what is the Break-Even Point in units?",
    "answer": "5,000 units",
    "options": [
      "2,000 units",
      "5,000 units",
      "10,000 units",
      "20,000 units"
    ],
    "explanation": "Contribution = SP - VC = 50 - 30 = ₹20. BEP (units) = Fixed Costs / Contribution per unit = 100,000 / 20 = 5,000 units.",
    "tip": "BEP = Fixed Cost / Contribution per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-484",
    "categoryId": "accounting",
    "question": "What is the P/V ratio if sales are ₹200000 and contribution is ₹80000?",
    "answer": "40%",
    "options": [
      "25%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "P/V Ratio = (Contribution / Sales) × 100 = (80,000 / 200,000) × 100 = 40%.",
    "tip": "P/V ratio = Contribution / Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-485",
    "categoryId": "accounting",
    "question": "Indian Accounting Standards (Ind AS) are formulated by the ICAI and converged with:",
    "answer": "International Financial Reporting Standards (IFRS)",
    "options": [
      "International Financial Reporting Standards (IFRS)",
      "US Generally Accepted Accounting Principles (US GAAP)",
      "United Nations System of National Accounts",
      "Basel III Banking Norms"
    ],
    "explanation": "Ind AS standards are converged with IFRS, enabling global comparability of Indian corporate statements.",
    "tip": "Ind AS is converged with IFRS.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-486",
    "categoryId": "accounting",
    "question": "The investigative discipline that examines financial evidence for embezzlement, bribery, and court litigation is:",
    "answer": "Forensic Accounting",
    "options": [
      "Forensic Accounting",
      "Cost Accounting",
      "Inflation Accounting",
      "Social Accounting"
    ],
    "explanation": "Forensic accounting combines accounting, auditing, and investigative legal skills to detect fraud and support prosecution.",
    "tip": "Forensic Accounting = Investigative accounting for fraud.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-487",
    "categoryId": "accounting",
    "question": "Under MCA rules for computerized accounting software, an \"Audit Trail\" feature must:",
    "answer": "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
    "options": [
      "Record an immutable log of every edit, alteration, and deletion with date, time, and user ID",
      "Automatically delete audit records after 90 days",
      "Send quarterly tax summaries to the central registry",
      "Block all credit sales to customers"
    ],
    "explanation": "The audit trail mandate ensures traceability of all accounting entries to prevent retrospective fraud and tampering.",
    "tip": "Audit Trail tracks all transaction modifications.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-488",
    "categoryId": "accounting",
    "question": "Which voucher is prepared when cash of ₹7400 is paid for office electricity expense?",
    "answer": "Debit Voucher (Payment Voucher)",
    "options": [
      "Debit Voucher (Payment Voucher)",
      "Credit Voucher",
      "Transfer Voucher",
      "Receipt Voucher"
    ],
    "explanation": "Payment vouchers (Debit Vouchers) are prepared to record cash or cheque disbursements with supporting bills.",
    "tip": "Debit Voucher = Cash outflow.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-489",
    "categoryId": "accounting",
    "question": "A journal voucher (Transfer Voucher) is primarily used to record which type of transaction?",
    "answer": "Non-cash transactions and year-end adjusting entries",
    "options": [
      "Cash withdrawals by the proprietor for personal use",
      "Cash deposits into the bank current account",
      "Direct cash sales over the counter",
      "Non-cash transactions and year-end adjusting entries"
    ],
    "explanation": "Transfer vouchers document credit sales/purchases of assets, depreciation, rectification, and non-cash adjustments.",
    "tip": "Transfer Voucher = Non-cash adjustment.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-490",
    "categoryId": "accounting",
    "question": "In a voucher system, an external source document like an invoice from supplier \"M/s ABC\" is termed as:",
    "answer": "Supporting Voucher",
    "options": [
      "Petty Cash Cheque",
      "Contra Voucher",
      "Supporting Voucher",
      "Primary Journal Voucher"
    ],
    "explanation": "Supporting vouchers are third-party documentary evidences (invoices, receipts, challans) attached to internal vouchers.",
    "tip": "Supporting voucher = External source evidence.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-491",
    "categoryId": "accounting",
    "question": "A cheque of ₹9830 deposited into the bank was credited by the bank but not entered in the Cash Book. To reconcile starting from Cash Book balance, we must:",
    "answer": "Add ₹9830 to the Cash Book balance",
    "options": [
      "Add ₹9830 to the Cash Book balance",
      "Multiply the balance by bank rate",
      "Deduct ₹9830 from the Cash Book balance",
      "Ignore the entry until month end"
    ],
    "explanation": "Because the bank credited the account, the Pass Book increased. To reach the Pass Book starting from Cash Book, add the amount.",
    "tip": "Direct bank credits: Add to Cash Book balance.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-492",
    "categoryId": "accounting",
    "question": "A customer directly deposited ₹3780 into the firm's bank account, which was recorded in Pass Book only. What is the effect on Cash Book vs Pass Book?",
    "answer": "Pass Book balance is ₹3780 higher than Cash Book balance",
    "options": [
      "Cash Book balance is ₹3780 higher than Pass Book balance",
      "Pass Book balance is ₹3780 higher than Cash Book balance",
      "Cash Book reflects an overdraft",
      "Both balances remain identical"
    ],
    "explanation": "Direct deposit by customer increases Pass Book immediately while Cash Book remains unadjusted.",
    "tip": "Direct deposit increases Pass Book over Cash Book.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-493",
    "categoryId": "accounting",
    "question": "What does a credit balance as per the Bank Pass Book signify?",
    "answer": "A favourable deposit balance belonging to the customer",
    "options": [
      "A favourable deposit balance belonging to the customer",
      "An error in the trial balance",
      "A dishonored cheque",
      "An overdraft owed by the customer to the bank"
    ],
    "explanation": "From the bank's perspective, customer deposits are a liability (credit). Hence, Pass Book credit = Favourable deposit.",
    "tip": "Pass Book Credit = Favourable balance; Debit = Overdraft.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-494",
    "categoryId": "accounting",
    "question": "When starting BRS with \"Overdraft as per Pass Book\", cheques issued but not presented should be:",
    "answer": "Deducted from the overdraft balance",
    "options": [
      "Posted to Suspense Account",
      "Ignored completely",
      "Deducted from the overdraft balance",
      "Added to the overdraft balance"
    ],
    "explanation": "Cheques issued but not presented decrease the overdraft as per Cash Book. Thus, deduct from Pass Book overdraft to reach Cash Book.",
    "tip": "Reverse normal rule when starting with Overdraft as per Pass Book.",
    "difficulty": "advanced"
  },
  {
    "id": "acc-495",
    "categoryId": "accounting",
    "question": "Partners X and Y contribute ₹90000 and ₹52500 as capital without any partnership deed. If the firm earns a profit of ₹45000, how is it divided?",
    "answer": "Divided equally between X and Y",
    "options": [
      "Retained as capital reserves without distribution",
      "Divided equally between X and Y",
      "In the ratio of 90000:52500",
      "70% to X and 30% to Y"
    ],
    "explanation": "Section 13(b) of the Partnership Act 1932 states that without a partnership deed, profits must be shared equally.",
    "tip": "No deed = Equal profit sharing regardless of capital.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-496",
    "categoryId": "accounting",
    "question": "In a partnership, interest on a partner's loan is considered as:",
    "answer": "A charge against profits (debited to Profit & Loss Account)",
    "options": [
      "A capital receipt credited to partner equity",
      "A charge against profits (debited to Profit & Loss Account)",
      "An appropriation of profits (debited to P&L Appropriation Account)",
      "A transfer to General Reserve"
    ],
    "explanation": "Interest on partner loan is a business expense payable regardless of profit or loss, so it is debited to P&L Account.",
    "tip": "Partner loan interest = Charge against profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-497",
    "categoryId": "accounting",
    "question": "Under the Fluctuating Capital method of partnership accounting, which of the following is credited to Partner's Capital Account?",
    "answer": "Interest on Capital and Share of Profit",
    "options": [
      "Drawings and Interest on Drawings",
      "Purchase of office equipment",
      "Share of Net Loss",
      "Interest on Capital and Share of Profit"
    ],
    "explanation": "Items that increase the partner's claim (capital introduced, interest on capital, salary, profit share) are credited.",
    "tip": "Partner Capital Credit: Additions, Interest on Capital, Profits.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-498",
    "categoryId": "accounting",
    "question": "When a new partner brings premium for goodwill in cash upon admission, it is shared by old partners in their:",
    "answer": "Sacrificing Ratio",
    "options": [
      "New Profit Sharing Ratio",
      "Old Profit Sharing Ratio",
      "Capital Ratio",
      "Sacrificing Ratio"
    ],
    "explanation": "Goodwill premium compensates old partners for the portion of profit share sacrificed, so it is credited in the sacrificing ratio.",
    "tip": "Goodwill premium credited in Sacrificing Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "acc-499",
    "categoryId": "accounting",
    "question": "In which book of account are nominal accounts closed at the end of the financial year by transferring to Trading and P&L Account?",
    "answer": "Ledger",
    "options": [
      "Journal Proper",
      "Ledger",
      "Trial Balance",
      "Cash Book"
    ],
    "explanation": "All nominal accounts (revenues and expenses) in the ledger are closed at year-end by transfer to Trading/P&L.",
    "tip": "Nominal accounts close into Trading & P&L.",
    "difficulty": "beginner"
  },
  {
    "id": "acc-500",
    "categoryId": "accounting",
    "question": "A Petty Cash Book maintained under the Imprest System with a float of ₹5000 has total expenses of ₹2000. How much is reimbursed?",
    "answer": "Exactly ₹2000",
    "options": [
      "Zero until next year",
      "Exactly ₹2000",
      "₹3000",
      "₹5000"
    ],
    "explanation": "The imprest system reimburses the exact sum spent to restore the float to its original fixed amount.",
    "tip": "Imprest system reimbursement = Amount actually spent.",
    "difficulty": "beginner"
  }
];
