import { Flashcard } from '../../types';

export const ACCOUNTING_QUESTIONS: Flashcard[] = [
  {
    id: 'acc-1',
    categoryId: 'accounting',
    question: 'What is the fundamental accounting equation?',
    answer: 'Assets = Liabilities + Equity',
    options: ['Assets = Liabilities + Equity', 'Assets = Revenue - Expenses', 'Equity = Assets + Liabilities', 'Net Income = Assets - Liabilities'],
    explanation: 'The balance sheet is based on this core relationship: resources owned by the business (Assets) must equal claims against them by creditors (Liabilities) and owners (Equity).',
    tip: 'Remember: A = L + E',
    difficulty: 'beginner'
  },
  {
    id: 'acc-2',
    categoryId: 'accounting',
    question: 'Under double-entry bookkeeping, what effect does a debit have on an Asset account?',
    answer: 'Increases the Asset balance',
    options: ['Increases the Asset balance', 'Decreases the Asset balance', 'Has no effect on balance', 'Transfers it to liabilities'],
    explanation: 'Debit (Dr.) increases assets and expenses, while Credit (Cr.) increases liabilities, equity, and revenues.',
    tip: 'DEAD CLIC: Debits increase Expenses, Assets, Drawings. Credits increase Liabilities, Income, Capital.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-3',
    categoryId: 'accounting',
    question: 'Which accounting principle states that revenue should be recognized when earned, regardless of when cash is received?',
    answer: 'Revenue Recognition Principle (Accrual Accounting)',
    options: ['Revenue Recognition Principle (Accrual Accounting)', 'Cash Basis Convention', 'Historical Cost Principle', 'Conservatism Principle'],
    explanation: 'Under accrual accounting (ASC 606 / IFRS 15), revenues are recognized when performance obligations are satisfied, not when cash changes hands.',
    tip: 'Accrual = Economic activity over cash timing',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-4',
    categoryId: 'accounting',
    question: 'What is the purpose of recording Depreciation on fixed assets?',
    answer: 'To systematically allocate asset cost over its useful life',
    options: ['To systematically allocate asset cost over its useful life', 'To reflect current resale liquidation value', 'To accumulate cash for buying replacement equipment', 'To eliminate taxes completely'],
    explanation: 'Depreciation satisfies the Matching Principle by allocating the acquisition cost of an asset to the periods benefiting from its use, rather than measuring market fair value.',
    tip: 'Allocation of historical cost, not valuation.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-5',
    categoryId: 'accounting',
    question: 'How is the Quick Ratio (Acid-Test) calculated?',
    answer: '(Cash + Marketable Securities + Receivables) / Current Liabilities',
    options: ['(Cash + Marketable Securities + Receivables) / Current Liabilities', 'Total Assets / Total Liabilities', 'Current Assets / Current Liabilities', '(Gross Profit - Operating Expenses) / Current Debt'],
    explanation: 'The Quick Ratio excludes inventory and prepaid items from current assets because inventory cannot be converted into cash immediately without discount.',
    tip: 'Quick excludes Inventory & Prepaid expenses from Current Assets.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-6',
    categoryId: 'accounting',
    question: 'What type of account is "Allowance for Doubtful Accounts"?',
    answer: 'Contra-Asset Account',
    options: ['Contra-Asset Account', 'Current Liability Account', 'Operating Expense Account', 'Owner Equity Reserve'],
    explanation: 'It reduces Accounts Receivable to its estimated net realizable value on the balance sheet, having a normal credit balance opposite to standard assets.',
    tip: 'Contra accounts offset the balance of their paired parent account.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-7',
    categoryId: 'accounting',
    question: 'On the Statement of Cash Flows, where does interest paid typically get categorized under US GAAP?',
    answer: 'Operating Activities',
    options: ['Operating Activities', 'Financing Activities', 'Investing Activities', 'Supplemental Non-Cash Schedule'],
    explanation: 'Under US GAAP, interest received and interest paid are categorized as operating cash flows because they flow into Net Income, whereas IFRS allows operating or financing.',
    tip: 'US GAAP: Interest paid/received belongs in Operating Activities.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-8',
    categoryId: 'accounting',
    question: 'What is Goodwill in corporate accounting?',
    answer: 'Purchase price paid above the fair value of net identifiable assets',
    options: ['Purchase price paid above the fair value of net identifiable assets', 'Estimated total value of employee satisfaction', 'Total accumulated marketing expenditure over 10 years', 'Excess cash retained in offshore bank accounts'],
    explanation: 'Goodwill is an intangible asset recorded when acquiring another company for a price higher than the fair market value of its identifiable net assets (tangible & intangible minus liabilities).',
    tip: 'Goodwill = Acquisition Price - Fair Value of Net Assets',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-9',
    categoryId: 'accounting',
    question: 'What is the normal balance of an expense account?',
    answer: 'Debit balance',
    options: ['Debit balance', 'Credit balance', 'Zero balance', 'Contra-equity balance'],
    explanation: 'Expenses decrease equity, and decreases to equity are recorded as debits. Therefore, expense accounts carry normal debit balances.',
    tip: 'Expenses and Assets carry normal Debit balances.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-10',
    categoryId: 'accounting',
    question: 'Which financial statement reports a company\'s financial performance over a specific period of time?',
    answer: 'Income Statement (Statement of Profit and Loss)',
    options: ['Income Statement (Statement of Profit and Loss)', 'Balance Sheet', 'Statement of Financial Position', 'Trial Balance'],
    explanation: 'The Income Statement reflects revenues, expenses, gains, and losses over an interval of time (e.g. month, quarter, or year). The balance sheet is a snapshot at a single moment.',
    tip: 'Income Statement = Film over time; Balance Sheet = Snapshot in time.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-11',
    categoryId: 'accounting',
    question: 'What is Working Capital?',
    answer: 'Current Assets minus Current Liabilities',
    options: ['Current Assets minus Current Liabilities', 'Total Assets minus Total Debt', 'Cash plus Inventory', 'Retained Earnings minus Dividends'],
    explanation: 'Working capital measures short-term liquidity and operational efficiency: Current Assets - Current Liabilities.',
    tip: 'Working Capital = CA - CL',
    difficulty: 'beginner'
  },
  {
    id: 'acc-12',
    categoryId: 'accounting',
    question: 'Which inventory costing method assumes the most recently purchased goods are sold first?',
    answer: 'LIFO (Last-In, First-Out)',
    options: ['LIFO (Last-In, First-Out)', 'FIFO (First-In, First-Out)', 'Weighted Average Cost', 'Specific Identification'],
    explanation: 'LIFO allocates the latest costs to Cost of Goods Sold. During inflation, LIFO yields higher COGS and lower taxable income (prohibited under IFRS, permitted under US GAAP).',
    tip: 'LIFO: Latest In, First Out (matches current revenues with current costs).',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-13',
    categoryId: 'accounting',
    question: 'What is the primary difference between US GAAP and IFRS regarding LIFO inventory valuation?',
    answer: 'IFRS prohibits LIFO, while US GAAP permits it under the LIFO conformity rule',
    options: ['IFRS prohibits LIFO, while US GAAP permits it under the LIFO conformity rule', 'US GAAP strictly forbids LIFO for public companies', 'Both frameworks require LIFO for tax consistency', 'IFRS mandates LIFO for agricultural goods'],
    explanation: 'IAS 2 explicitly bans LIFO because the flow of costs rarely matches the physical flow of goods. US GAAP permits LIFO provided the entity also uses it for tax reporting.',
    tip: 'IFRS bans LIFO completely.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-14',
    categoryId: 'accounting',
    question: 'What is an unearned (deferred) revenue?',
    answer: 'A liability recorded when cash is received before goods or services are delivered',
    options: ['A liability recorded when cash is received before goods or services are delivered', 'An asset representing future cash inflows', 'A component of common stockholders\' equity', 'An expense incurred but not yet settled in cash'],
    explanation: 'Because the company owes performance obligations to the customer in the future, unearned revenue is classified as a liability until earned.',
    tip: 'Cash received before work done = Liability.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-15',
    categoryId: 'accounting',
    question: 'What does the Matching Principle mandate?',
    answer: 'Expenses incurred to generate revenues must be recognized in the same period as those revenues',
    options: ['Expenses incurred to generate revenues must be recognized in the same period as those revenues', 'Cash receipts must match cash disbursements in the general ledger', 'Debits must equal credits in every transaction', 'Asset valuations must match tax returns'],
    explanation: 'The matching principle pairs effort (expenses) with accomplishment (revenues) in the accounting period in which both occur.',
    tip: 'Match expenses to the revenues they helped produce.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-16',
    categoryId: 'accounting',
    question: 'What is the straight-line depreciation formula for an asset?',
    answer: '(Cost - Salvage Value) / Useful Life',
    options: ['(Cost - Salvage Value) / Useful Life', 'Cost / Useful Life', '(Cost + Salvage Value) * Depreciation Rate', 'Book Value * 2 / Useful Life'],
    explanation: 'Straight-line spreads the depreciable base (Cost minus expected salvage/residual value) evenly across the asset\'s estimated operating life.',
    tip: 'Depreciable Base = Cost - Salvage. Divide by years.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-17',
    categoryId: 'accounting',
    question: 'What is Retained Earnings?',
    answer: 'Cumulative net income since inception minus cumulative dividends distributed',
    options: ['Cumulative net income since inception minus cumulative dividends distributed', 'Cash stored in commercial bank accounts', 'Total common stock par value issued', 'Gross profit minus operating overhead'],
    explanation: 'Retained earnings represents the portion of cumulative company earnings reinvested in the business rather than paid out as shareholder dividends.',
    tip: 'Ending RE = Beginning RE + Net Income - Dividends.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-18',
    categoryId: 'accounting',
    question: 'How is Gross Profit calculated?',
    answer: 'Net Revenue minus Cost of Goods Sold (COGS)',
    options: ['Net Revenue minus Cost of Goods Sold (COGS)', 'Net Revenue minus Total Operating Expenses', 'Operating Income minus Taxes', 'EBITDA minus Depreciation'],
    explanation: 'Gross Profit reflects the margin generated on core products before selling, general, and administrative (SG&A) expenses.',
    tip: 'Gross Profit = Sales - COGS.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-19',
    categoryId: 'accounting',
    question: 'What type of account is Accumulated Depreciation?',
    answer: 'Contra-Asset Account',
    options: ['Contra-Asset Account', 'Fixed Asset Account', 'Expense Account', 'Current Liability Account'],
    explanation: 'Accumulated Depreciation offsets the historical cost of Property, Plant & Equipment (PP&E) on the balance sheet, carrying a credit balance.',
    tip: 'Contra-asset reduces carrying book value of PP&E.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-20',
    categoryId: 'accounting',
    question: 'What does a Trial Balance verify?',
    answer: 'That total debit balances equal total credit balances in the general ledger',
    options: ['That total debit balances equal total credit balances in the general ledger', 'That no fraudulent transactions occurred during the period', 'That net income matches cash flows from operations', 'That all inventory counts are physically accurate'],
    explanation: 'A trial balance tests mathematical equality of debits and credits, but does not prove transactions were recorded in the correct accounts or not omitted.',
    tip: 'Trial balance checks Debits = Credits arithmetic.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-21',
    categoryId: 'accounting',
    question: 'What is a Prepaid Expense classified as on the balance sheet?',
    answer: 'Current Asset',
    options: ['Current Asset', 'Operating Expense', 'Current Liability', 'Contra-Revenue'],
    explanation: 'Prepaid expenses (e.g. prepaid rent or insurance) represent future economic benefits already paid for in cash that have not yet expired.',
    tip: 'Prepaid = Future benefit owned = Asset.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-22',
    categoryId: 'accounting',
    question: 'What is the formula for the Current Ratio?',
    answer: 'Current Assets / Current Liabilities',
    options: ['Current Assets / Current Liabilities', 'Quick Assets / Total Debt', 'Cash / Total Liabilities', 'Net Income / Current Assets'],
    explanation: 'The current ratio tests liquidity: ability of short-term resources to satisfy obligations due within one operating cycle or one year.',
    tip: 'Current Ratio = CA / CL.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-23',
    categoryId: 'accounting',
    question: 'What is the Debt-to-Equity Ratio formula?',
    answer: 'Total Liabilities / Total Shareholders\' Equity',
    options: ['Total Liabilities / Total Shareholders\' Equity', 'Long-term Debt / Total Assets', 'Current Liabilities / EBITDA', 'Total Assets / Net Worth'],
    explanation: 'Measures financial leverage and capital structure by comparing creditor financing against owner equity financing.',
    tip: 'Debt to Equity = Liabilities / Equity.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-24',
    categoryId: 'accounting',
    question: 'What are Accrued Expenses?',
    answer: 'Expenses incurred during the period for which cash has not yet been paid',
    options: ['Expenses incurred during the period for which cash has not yet been paid', 'Payments made in advance of receiving services', 'Non-cash amortizations of goodwill', 'Taxes refunded by government authorities'],
    explanation: 'Examples include accrued interest or accrued payroll: the expense is recognized on the income statement with an accrued liability on the balance sheet.',
    tip: 'Incurred now, paid later = Accrued Expense (Liability).',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-25',
    categoryId: 'accounting',
    question: 'Under US GAAP, what is the accounting treatment for Research and Development (R&D) costs for internal projects?',
    answer: 'Expensed immediately as incurred in almost all cases',
    options: ['Expensed immediately as incurred in almost all cases', 'Capitalized as an intangible asset and amortized over 20 years', 'Recorded in Other Comprehensive Income until commercial launch', 'Deducted directly from retained earnings as a dividend'],
    explanation: 'US GAAP requires internal R&D costs to be expensed immediately due to high uncertainty of future economic benefits (unlike IFRS, which allows capitalization of development costs meeting criteria).',
    tip: 'US GAAP expenses R&D immediately.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-26',
    categoryId: 'accounting',
    question: 'Under IFRS (IAS 38), when can Development costs be capitalized?',
    answer: 'When technical feasibility, intent to complete, and ability to generate future economic benefits are proven',
    options: ['When technical feasibility, intent to complete, and ability to generate future economic benefits are proven', 'Whenever management forecasts positive net income', 'Only if approved by independent tax auditors', 'Never under any circumstances'],
    explanation: 'IFRS distinguishes research (always expensed) from development (capitalized if 6 specific criteria including technical and commercial feasibility are demonstrated).',
    tip: 'Research = Expense; Development = Capitalize if feasible (IFRS).',
    difficulty: 'advanced'
  },
  {
    id: 'acc-27',
    categoryId: 'accounting',
    question: 'What does EBITDA stand for?',
    answer: 'Earnings Before Interest, Taxes, Depreciation, and Amortization',
    options: ['Earnings Before Interest, Taxes, Depreciation, and Amortization', 'Equity Base In Total Debt Assets', 'Earnings Before Inflation, Taxes, Dividends, and Assets', 'Economic Balance In Total Dividend Accounting'],
    explanation: 'EBITDA is a widely used proxy for operating cash profitability that strips out capital structure, tax regimes, and non-cash depreciation policies.',
    tip: 'EBITDA = Operating profit before non-cash and financial charges.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-28',
    categoryId: 'accounting',
    question: 'What is Treasury Stock?',
    answer: 'A corporation\'s own shares that were issued and subsequently reacquired',
    options: ['A corporation\'s own shares that were issued and subsequently reacquired', 'Bonds issued by the federal Department of Treasury', 'Stock authorized but never issued to investors', 'Preferred stock held by corporate officers'],
    explanation: 'Treasury stock reduces total stockholders\' equity (a contra-equity account) and carries no voting or dividend rights.',
    tip: 'Treasury Stock = Contra-Equity account (reacquired company stock).',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-29',
    categoryId: 'accounting',
    question: 'How is Cost of Goods Sold (COGS) calculated under a periodic inventory system?',
    answer: 'Beginning Inventory + Purchases - Ending Inventory',
    options: ['Beginning Inventory + Purchases - Ending Inventory', 'Purchases + Ending Inventory - Beginning Inventory', 'Sales Revenue - Gross Margin - Freight', 'Beginning Inventory * Markup Percentage'],
    explanation: 'Goods Available for Sale = Beginning Inventory + Purchases. What is not left in Ending Inventory is presumed sold: COGS = Goods Available - Ending Inventory.',
    tip: 'BI + Purchases - EI = COGS.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-30',
    categoryId: 'accounting',
    question: 'What is the effect on the financial statements when a company pays a cash dividend previously declared?',
    answer: 'Decreases Cash and decreases Dividends Payable (Liabilities)',
    options: ['Decreases Cash and decreases Dividends Payable (Liabilities)', 'Decreases Net Income on the Income Statement', 'Increases Retained Earnings and decreases Cash', 'Decreases Cash and decreases Common Stock'],
    explanation: 'When declared, Dividends Payable is credited and Retained Earnings is debited. When paid, Dividends Payable is debited and Cash is credited; Net Income is unaffected.',
    tip: 'Payment settles the liability; Retained Earnings was reduced at declaration.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-31',
    categoryId: 'accounting',
    question: 'What does the Conservatism Principle dictate in financial accounting?',
    answer: 'Anticipate no gains, but provide for all probable and measurable losses',
    options: ['Anticipate no gains, but provide for all probable and measurable losses', 'Always choose the method that maximizes net income', 'Never write down inventory below historical cost', 'Record revenues as early as contract negotiations begin'],
    explanation: 'When uncertainty exists, accounting conservatism selects the solution least likely to overstate assets and income or understate liabilities and expenses.',
    tip: 'Never overstate assets/revenue; promptly record foreseeable losses.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-32',
    categoryId: 'accounting',
    question: 'What is the Lower of Cost or Market (LCM) / Net Realizable Value (NRV) rule for inventory?',
    answer: 'Inventory must be written down if its recoverable net realizable value falls below cost',
    options: ['Inventory must be written down if its recoverable net realizable value falls below cost', 'Inventory must be revalued upward whenever market prices rise', 'Inventory must always be recorded at replacement wholesale price', 'Inventory write-downs are forbidden until units are physically discarded'],
    explanation: 'If inventory utility or selling price declines below its recorded historical cost, a loss is recognized immediately by writing down inventory to net realizable value.',
    tip: 'Lower of Cost or NRV prevents asset overstatement.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-33',
    categoryId: 'accounting',
    question: 'What is Net Realizable Value (NRV)?',
    answer: 'Estimated selling price in ordinary course of business minus estimated completion and selling costs',
    options: ['Estimated selling price in ordinary course of business minus estimated completion and selling costs', 'Historical acquisition invoice cost adjusted for CPI inflation', 'Current replacement wholesale supplier catalog price', 'Liquidation auction price in forced bankruptcy'],
    explanation: 'NRV represents the net amount of cash an entity expects to realize from the sale or disposal of an asset after deducting completion and selling expenses.',
    tip: 'NRV = Selling Price - Costs to Complete & Sell.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-34',
    categoryId: 'accounting',
    question: 'In the indirect method of preparing the operating cash flow statement, why is depreciation added back to Net Income?',
    answer: 'Because depreciation is a non-cash expense that reduced Net Income',
    options: ['Because depreciation is a non-cash expense that reduced Net Income', 'Because depreciation generates actual cash inflows from tax shields', 'Because depreciation increases working capital balances', 'Because fixed assets were sold for a capital gain'],
    explanation: 'Depreciation was deducted to determine net income, but no cash left the bank account during that recording. Thus, it must be added back to convert net income into operating cash flow.',
    tip: 'Add back non-cash expenses like depreciation and amortization.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-35',
    categoryId: 'accounting',
    question: 'What is the effect of an increase in Accounts Receivable on operating cash flow under the indirect method?',
    answer: 'Subtracted from Net Income',
    options: ['Subtracted from Net Income', 'Added to Net Income', 'Recorded in Investing Cash Flows', 'No effect on cash flow statement'],
    explanation: 'An increase in Accounts Receivable means revenues were recorded on the income statement that have not yet been collected in cash; hence deducted.',
    tip: 'Asset increase = Cash outflow/deduction. Liability increase = Cash inflow/addition.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-36',
    categoryId: 'accounting',
    question: 'What is the effect of an increase in Accounts Payable on operating cash flow under the indirect method?',
    answer: 'Added to Net Income',
    options: ['Added to Net Income', 'Subtracted from Net Income', 'Included in Financing Cash Flows', 'Deducted as a non-operating loss'],
    explanation: 'An increase in Accounts Payable means expenses were recorded on the income statement that have not yet been paid in cash; cash was preserved, so it is added back.',
    tip: 'Increase in liability = Cash preserved = Added back.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-37',
    categoryId: 'accounting',
    question: 'How is Days Sales Outstanding (DSO) calculated?',
    answer: '(Accounts Receivable / Total Credit Sales) * 365',
    options: ['(Accounts Receivable / Total Credit Sales) * 365', '(Inventory / COGS) * 365', 'Credit Sales / Current Assets', 'Net Income / Average Receivables'],
    explanation: 'DSO measures the average number of days it takes for a company to collect payment after a sale has been made on credit.',
    tip: 'DSO = Average collection period for receivables in days.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-38',
    categoryId: 'accounting',
    question: 'What is Inventory Turnover?',
    answer: 'Cost of Goods Sold / Average Inventory',
    options: ['Cost of Goods Sold / Average Inventory', 'Net Sales / Ending Inventory', 'Gross Profit / Inventory', 'Purchases / Accounts Payable'],
    explanation: 'Inventory Turnover indicates how many times a company\'s inventory is sold and replaced over an accounting period.',
    tip: 'Inventory Turnover = COGS / Average Inventory.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-39',
    categoryId: 'accounting',
    question: 'What is the Days Sales of Inventory (DSI) / Days in Inventory formula?',
    answer: '(Average Inventory / COGS) * 365',
    options: ['(Average Inventory / COGS) * 365', '(COGS / Net Revenue) * 100', '365 / Receivables Turnover', '(Cash / Current Liabilities) * 365'],
    explanation: 'Measures how many days on average inventory sits in warehouse before being sold.',
    tip: 'DSI = 365 / Inventory Turnover.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-40',
    categoryId: 'accounting',
    question: 'What is the Cash Conversion Cycle (CCC)?',
    answer: 'Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) - Days Payables Outstanding (DPO)',
    options: ['Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) - Days Payables Outstanding (DPO)', 'DIO - DSO + DPO', 'DSO + DPO - DIO', 'Operating Cycle / Current Ratio'],
    explanation: 'CCC measures the time in days required to convert investments in inventory and other operational resources into cash flows from sales.',
    tip: 'CCC = DIO + DSO - DPO.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-41',
    categoryId: 'accounting',
    question: 'What is a Bond Premium?',
    answer: 'When a bond is issued for a price above its stated par (face) value',
    options: ['When a bond is issued for a price above its stated par (face) value', 'When coupon rate is lower than market yield', 'The bonus paid to bond underwriters upon issuance', 'Penalty paid for early debt retirement'],
    explanation: 'A bond sells at a premium when its coupon rate exceeds the prevailing market interest rate for similar risk bonds.',
    tip: 'Coupon > Market Rate = Premium. Coupon < Market Rate = Discount.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-42',
    categoryId: 'accounting',
    question: 'What is the effective-interest method of bond amortization?',
    answer: 'Allocating bond discount or premium using the market interest rate multiplied by carrying value',
    options: ['Allocating bond discount or premium using the market interest rate multiplied by carrying value', 'Dividing total discount by number of coupon periods equally', 'Deducting discount immediately as interest expense on issue date', 'Multiplying face value by coupon rate'],
    explanation: 'The effective-interest method produces a constant periodic interest rate equal to the market rate at issuance, required by both GAAP and IFRS.',
    tip: 'Interest Expense = Carrying Value * Market Rate at issuance.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-43',
    categoryId: 'accounting',
    question: 'Under ASC 842 / IFRS 16, what must lessees record on the balance sheet for virtually all leases?',
    answer: 'A Right-of-Use (ROU) Asset and a Lease Liability',
    options: ['A Right-of-Use (ROU) Asset and a Lease Liability', 'Only off-balance-sheet footnote commitments', 'Goodwill and Deferred Rent Revenue', 'Accounts Payable and Prepaid Rent'],
    explanation: 'Modern lease standards eliminate off-balance-sheet operating lease accounting by requiring lessees to recognize ROU assets and lease obligations for terms over 12 months.',
    tip: 'All leases over 12 months go on balance sheet: ROU Asset & Lease Liability.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-44',
    categoryId: 'accounting',
    question: 'What is Capital Expenditure (CapEx)?',
    answer: 'Funds used by an enterprise to acquire, upgrade, or extend the useful life of physical fixed assets',
    options: ['Funds used by an enterprise to acquire, upgrade, or extend the useful life of physical fixed assets', 'Daily operating disbursements for utilities and office supplies', 'Dividends distributed to preferred stockholders', 'Interest paid on short-term bank credit facilities'],
    explanation: 'CapEx is capitalized on the balance sheet as PP&E and depreciated over time, rather than expensed immediately like operational expenses (OpEx).',
    tip: 'CapEx = Long-term investments in physical assets (Balance Sheet).',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-45',
    categoryId: 'accounting',
    question: 'How is Free Cash Flow (FCF) to the firm commonly calculated from operating cash flow?',
    answer: 'Cash Flow from Operations (CFO) minus Capital Expenditures (CapEx)',
    options: ['Cash Flow from Operations (CFO) minus Capital Expenditures (CapEx)', 'Net Income plus Dividends', 'EBITDA minus Interest Expense', 'Revenue minus Total Liabilities'],
    explanation: 'Free cash flow represents the cash generated by operational activities remaining after paying for capital expenditures required to maintain or expand asset base.',
    tip: 'FCF = Cash Flow from Operations - CapEx.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-46',
    categoryId: 'accounting',
    question: 'What is a Contingent Liability?',
    answer: 'A potential liability that depends on the future outcome of an uncertain past event',
    options: ['A potential liability that depends on the future outcome of an uncertain past event', 'A liability that is legally binding and paid weekly', 'An obligation owed exclusively to the national treasury', 'A debt backed by gold bullion in escrow'],
    explanation: 'Examples include pending lawsuits or warranties. If probable and reasonably estimable, it must be accrued on the balance sheet; if reasonably possible, disclosed in notes.',
    tip: 'Accrue if Probable & Estimable; disclose if Reasonably Possible.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-47',
    categoryId: 'accounting',
    question: 'When should a contingent liability be accrued as an expense and liability under US GAAP?',
    answer: 'When the loss is both probable and the amount can be reasonably estimated',
    options: ['When the loss is both probable and the amount can be reasonably estimated', 'When the loss is remote but exceeds materiality thresholds', 'Only after a final legal court verdict has been delivered', 'Whenever a claimant files an initial formal lawsuit'],
    explanation: 'Under ASC 450, if a loss is probable (>70-80% likelihood) and estimable, recognize the liability; otherwise disclose in footnotes.',
    tip: 'Probable + Estimable = Record on Balance Sheet.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-48',
    categoryId: 'accounting',
    question: 'What is the difference between Job-Order Costing and Process Costing in managerial accounting?',
    answer: 'Job-order is used for unique custom products; process costing is used for continuous mass-produced homogeneous units',
    options: ['Job-order is used for unique custom products; process costing is used for continuous mass-produced homogeneous units', 'Job-order applies only to government contracts', 'Process costing tracks costs per individual customer order', 'Job-order excludes manufacturing overhead'],
    explanation: 'Job-order costing assigns costs to specific identifiable jobs or batches (e.g. custom yachts). Process costing averages costs over continuous uniform output (e.g. oil refining).',
    tip: 'Job-Order = Custom/Unique. Process = Continuous/Mass uniform.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-49',
    categoryId: 'accounting',
    question: 'What are the three product cost components included in Manufacturing Inventory under GAAP?',
    answer: 'Direct Materials, Direct Labor, and Manufacturing Overhead',
    options: ['Direct Materials, Direct Labor, and Manufacturing Overhead', 'Direct Materials, Advertising, and CEO Salary', 'Direct Labor, Shipping, and Legal Retainers', 'Cost of Goods Sold, Depreciation, and Interest Expense'],
    explanation: 'Under absorption costing, direct materials, direct labor, and all factory overhead (variable and fixed) attach to inventory and become COGS when units are sold.',
    tip: 'Product Costs = DM + DL + MOH.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-50',
    categoryId: 'accounting',
    question: 'What is a Period Cost?',
    answer: 'Non-manufacturing costs expensed on the income statement in the period incurred (e.g. SG&A)',
    options: ['Non-manufacturing costs expensed on the income statement in the period incurred (e.g. SG&A)', 'Costs attached to unsold warehouse inventory', 'Costs amortized over a 10-year depreciation cycle', 'Factory machine lubricants and assembly worker wages'],
    explanation: 'Period costs are selling, general, and administrative expenses not directly tied to production of inventory; they are expensed immediately as time passes.',
    tip: 'Period Costs = SG&A expensed in the current period.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-51',
    categoryId: 'accounting',
    question: 'What is the Contribution Margin formula?',
    answer: 'Sales Revenue minus Total Variable Costs',
    options: ['Sales Revenue minus Total Variable Costs', 'Gross Profit minus Fixed Factory Overhead', 'Net Income plus Income Taxes', 'Total Assets minus Variable Liabilities'],
    explanation: 'Contribution margin shows how much revenue remains after covering variable costs to contribute toward covering fixed expenses and generating operating profit.',
    tip: 'Contribution Margin = Revenue - Variable Costs.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-52',
    categoryId: 'accounting',
    question: 'How is the Break-Even Point in units calculated?',
    answer: 'Total Fixed Costs / Contribution Margin per Unit',
    options: ['Total Fixed Costs / Contribution Margin per Unit', 'Total Fixed Costs / Selling Price per Unit', 'Total Variable Costs / Profit Margin', 'Operating Expenses / Current Ratio'],
    explanation: 'At break-even, total revenues equal total costs (Operating Income = 0). Fixed Costs divided by CM per unit gives the exact sales volume needed.',
    tip: 'Break-Even Units = Fixed Costs / CM per unit.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-53',
    categoryId: 'accounting',
    question: 'What is Operating Leverage?',
    answer: 'The degree to which a firm incurs fixed costs versus variable costs in its cost structure',
    options: ['The degree to which a firm incurs fixed costs versus variable costs in its cost structure', 'The ratio of long-term debt to equity capital', 'The percentage of cash stored in foreign subsidiaries', 'The number of bank credit facilities in active use'],
    explanation: 'Higher fixed costs create high operating leverage: small percentage changes in sales revenue lead to large percentage magnification in operating income.',
    tip: 'High Fixed Costs = High Operating Leverage = High profit volatility.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-54',
    categoryId: 'accounting',
    question: 'What is an unqualified (clean) audit opinion?',
    answer: 'Auditor confirms financial statements are presented fairly in all material respects in accordance with GAAP',
    options: ['Auditor confirms financial statements are presented fairly in all material respects in accordance with GAAP', 'Auditor identifies widespread material misstatements and fraud', 'Auditor declines to express an opinion due to scope limitations', 'Auditor determines the company has no liabilities'],
    explanation: 'An unqualified opinion is the best audit outcome: the statements are free from material misstatements and conform to the applicable accounting framework.',
    tip: 'Unqualified = Clean bill of financial health.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-55',
    categoryId: 'accounting',
    question: 'What is an Adverse audit opinion?',
    answer: 'Auditor states financial statements are materially misstated and do not conform to GAAP/IFRS',
    options: ['Auditor states financial statements are materially misstated and do not conform to GAAP/IFRS', 'Auditor confirms statements are fully compliant with minor clerical typos', 'Auditor was unable to access inventory records in foreign branches', 'Auditor agrees with management changes in accounting estimates'],
    explanation: 'An adverse opinion is issued when misstatements are both material and pervasive, warning that the financial statements as a whole cannot be relied upon.',
    tip: 'Adverse = Pervasive material misstatements (unreliable statements).',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-56',
    categoryId: 'accounting',
    question: 'What is a Disclaimer of Opinion in auditing?',
    answer: 'Auditor is unable to obtain sufficient audit evidence and does not express an opinion',
    options: ['Auditor is unable to obtain sufficient audit evidence and does not express an opinion', 'Auditor verifies all accounts but disagrees with executive salaries', 'Auditor confirms the entity is insolvent under chapter 7 bankruptcy', 'Auditor files charges with the SEC on illegal insider trading'],
    explanation: 'Issued when scope limitations prevent the auditor from completing audit procedures or when auditor independence is impaired.',
    tip: 'Disclaimer = Scope limitation; cannot form an opinion.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-57',
    categoryId: 'accounting',
    question: 'What is the purpose of the Sarbanes-Oxley Act (SOX) Section 404?',
    answer: 'Requires management and auditors to assess and report on internal controls over financial reporting',
    options: ['Requires management and auditors to assess and report on internal controls over financial reporting', 'Caps corporate executive compensation at 50 times median worker pay', 'Eliminates all dual-class voting shares on public exchanges', 'Requires public companies to file quarterly tax returns with IRS'],
    explanation: 'SOX 404 mandates rigorous documentation, testing, and independent attestation of internal controls over financial reporting (ICFR) to prevent corporate fraud.',
    tip: 'SOX 404 = Internal Controls over Financial Reporting.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-58',
    categoryId: 'accounting',
    question: 'What does Return on Equity (ROE) measure?',
    answer: 'Net Income / Average Shareholders\' Equity',
    options: ['Net Income / Average Shareholders\' Equity', 'Operating Income / Total Assets', 'Gross Profit / Common Stock Par Value', 'Dividends / Market Capitalization'],
    explanation: 'ROE measures how efficiently management generates profits from the capital provided by shareholders.',
    tip: 'ROE = Net Income / Equity.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-59',
    categoryId: 'accounting',
    question: 'In the DuPont Analysis, what are the three decomposed components of ROE?',
    answer: 'Net Profit Margin * Asset Turnover * Equity Multiplier',
    options: ['Net Profit Margin * Asset Turnover * Equity Multiplier', 'Gross Margin * Current Ratio * Debt Ratio', 'EBITDA Margin * P/E Ratio * Dividend Yield', 'Operating Margin * Inventory Turnover * Quick Ratio'],
    explanation: 'DuPont breaks ROE into operating efficiency (Net Margin), asset use efficiency (Asset Turnover), and financial leverage (Equity Multiplier = Assets/Equity).',
    tip: 'DuPont ROE = Margin * Turnover * Leverage.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-60',
    categoryId: 'accounting',
    question: 'How is Basic Earnings Per Share (EPS) calculated?',
    answer: '(Net Income - Preferred Dividends) / Weighted Average Common Shares Outstanding',
    options: ['(Net Income - Preferred Dividends) / Weighted Average Common Shares Outstanding', 'Net Income / Authorized Common Shares', 'Operating Income / Fully Diluted Options', 'Gross Profit / Year-End Outstanding Shares'],
    explanation: 'Preferred dividends are subtracted because they are paid before common shareholders receive earnings claims. The denominator is weighted average common shares.',
    tip: 'EPS = (Net Income - Preferred Dividends) / Weighted Avg Shares.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-61',
    categoryId: 'accounting',
    question: 'What does Diluted EPS account for that Basic EPS does not?',
    answer: 'The potential conversion of dilutive securities (convertible bonds, options, warrants)',
    options: ['The potential conversion of dilutive securities (convertible bonds, options, warrants)', 'Future inflation and currency devaluations', 'Shares repurchased into treasury during the quarter', 'Dividend taxes withheld for international investors'],
    explanation: 'Diluted EPS shows worst-case scenario EPS assuming all in-the-money options, warrants, and convertible debt were exercised into common shares.',
    tip: 'Diluted EPS incorporates convertible securities and stock options.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-62',
    categoryId: 'accounting',
    question: 'What is comprehensive income?',
    answer: 'Net income plus Other Comprehensive Income (OCI) items like unrealized gains on AFS securities and foreign currency translation',
    options: ['Net income plus Other Comprehensive Income (OCI) items like unrealized gains on AFS securities and foreign currency translation', 'Gross revenue minus cost of goods sold and income taxes', 'Cash flow from operations plus cash flow from financing', 'Taxable income reported on IRS corporate tax forms'],
    explanation: 'Comprehensive income includes all changes in equity during a period except those resulting from investments by and distributions to owners.',
    tip: 'Comprehensive Income = Net Income + OCI.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-63',
    categoryId: 'accounting',
    question: 'Where is Accumulated Other Comprehensive Income (AOCI) presented?',
    answer: 'In the Stockholders\' Equity section of the Balance Sheet',
    options: ['In the Stockholders\' Equity section of the Balance Sheet', 'On the Income Statement below operating expenses', 'In the Operating Cash Flow schedule', 'In the Current Liabilities section'],
    explanation: 'AOCI accumulates unrealized non-owner gains and losses (pension adjustments, FX translation, hedging gains) on the balance sheet within equity.',
    tip: 'AOCI resides in Balance Sheet Equity.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-64',
    categoryId: 'accounting',
    question: 'What is a Deferred Tax Asset (DTA)?',
    answer: 'An asset resulting from temporary timing differences where taxes paid exceed tax expense on financial statements',
    options: ['An asset resulting from temporary timing differences where taxes paid exceed tax expense on financial statements', 'Taxes owed to the government payable in future fiscal years', 'Penalties assessed by tax authorities on audit disputes', 'Tax-exempt interest earned on municipal government bonds'],
    explanation: 'DTAs represent future tax deductions (e.g. warranty reserves deducted for GAAP now, but only deductible for tax when paid later).',
    tip: 'DTA = Paid tax now; will save taxes in future.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-65',
    categoryId: 'accounting',
    question: 'What is a Deferred Tax Liability (DTL)?',
    answer: 'A future tax obligation arising because financial income exceeds taxable income due to temporary differences (e.g. accelerated tax depreciation)',
    options: ['A future tax obligation arising because financial income exceeds taxable income due to temporary differences (e.g. accelerated tax depreciation)', 'Delinquent property tax liens filed by municipalities', 'Unearned revenue collected from international clients', 'Sales tax collected at point of retail checkout'],
    explanation: 'DTLs occur when tax laws allow faster deductions (like MACRS depreciation) than GAAP straight-line, postponing tax payments to future years.',
    tip: 'DTL = Paid less tax today; must pay more tax in future.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-66',
    categoryId: 'accounting',
    question: 'When is a Valuation Allowance required against a Deferred Tax Asset under US GAAP?',
    answer: 'When it is "more likely than not" (>50% probability) that some or all of the DTA will not be realized',
    options: ['When it is "more likely than not" (>50% probability) that some or all of the DTA will not be realized', 'Whenever the entity reports a net loss in any single operating quarter', 'Only when bankruptcy petitions are formally accepted by courts', 'When statutory corporate tax rates increase by more than 5%'],
    explanation: 'A contra-asset valuation allowance reduces the carrying amount of the DTA to the amount expected to be realized from future taxable profits.',
    tip: 'Valuation allowance applies if >50% chance DTA cannot be realized.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-67',
    categoryId: 'accounting',
    question: 'What is an impairment loss on a long-lived tangible asset?',
    answer: 'The amount by which the asset\'s carrying book value exceeds its fair value',
    options: ['The amount by which the asset\'s carrying book value exceeds its fair value', 'The normal annual straight-line depreciation allocation', 'The difference between historical cost and insured value', 'The loss suffered when disposing of scrap metal'],
    explanation: 'Under US GAAP, if undiscounted future cash flows are less than carrying value (Step 1 test), impairment loss is measured as Carrying Value minus Fair Value (Step 2).',
    tip: 'Impairment = Carrying Value - Fair Value (when unrecoverable).',
    difficulty: 'advanced'
  },
  {
    id: 'acc-68',
    categoryId: 'accounting',
    question: 'Can an impairment loss on long-lived tangible assets be reversed under US GAAP?',
    answer: 'No, US GAAP prohibits reversals of impairment losses for assets held for use',
    options: ['No, US GAAP prohibits reversals of impairment losses for assets held for use', 'Yes, whenever fair value recovers within 3 fiscal years', 'Yes, up to original historical cost less depreciation', 'Only if approved by independent auditing committee'],
    explanation: 'US GAAP sets a new cost basis once an asset is impaired; reversals are prohibited. (In contrast, IFRS allows reversals if estimates improve, except for goodwill).',
    tip: 'US GAAP never reverses impairments on PP&E; IFRS permits it.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-69',
    categoryId: 'accounting',
    question: 'Can Goodwill impairment be reversed under IFRS or US GAAP?',
    answer: 'No, neither US GAAP nor IFRS ever permits the reversal of goodwill impairment',
    options: ['No, neither US GAAP nor IFRS ever permits the reversal of goodwill impairment', 'Yes, both allow reversal if economic conditions rebound', 'Only IFRS permits goodwill impairment reversal up to original cost', 'US GAAP permits reversal upon subsequent corporate restructuring'],
    explanation: 'Both frameworks strictly prohibit reversing goodwill impairments because any subsequent increase is considered internally generated goodwill, which cannot be capitalized.',
    tip: 'Goodwill impairment is permanently irreversible under both GAAP and IFRS.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-70',
    categoryId: 'accounting',
    question: 'How are Available-for-Sale (AFS) debt securities accounted for under US GAAP?',
    answer: 'Reported at fair value, with unrealized gains/losses recorded in Other Comprehensive Income (OCI)',
    options: ['Reported at fair value, with unrealized gains/losses recorded in Other Comprehensive Income (OCI)', 'Reported at amortized cost on balance sheet', 'Reported at fair value with all unrealized changes in Net Income', 'Carried at lower of cost or net realizable value'],
    explanation: 'AFS debt securities are held at fair market value; fluctuations bypass the income statement and accumulate in OCI until realized upon sale.',
    tip: 'AFS Securities = Fair Value on Balance Sheet; Unrealized gains in OCI.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-71',
    categoryId: 'accounting',
    question: 'How are Trading securities accounted for?',
    answer: 'Reported at fair value, with unrealized gains and losses included in Net Income',
    options: ['Reported at fair value, with unrealized gains and losses included in Net Income', 'Reported at historical acquisition cost until sold', 'Unrealized gains deferred in Retained Earnings', 'Reported at face value minus unamortized discounts'],
    explanation: 'Trading securities are purchased with the intent of selling in the near term for short-term profit; value changes hit Net Income immediately.',
    tip: 'Trading Securities = Fair value with unrealized gains/losses in Net Income.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-72',
    categoryId: 'accounting',
    question: 'How are Held-to-Maturity (HTM) debt securities valued on the balance sheet?',
    answer: 'At amortized cost (less any expected credit losses)',
    options: ['At amortized cost (less any expected credit losses)', 'At marked-to-market fair value with changes in OCI', 'At current replacement market value', 'At undiscounted future redemption price'],
    explanation: 'If management has the positive intent and ability to hold bonds until maturity date, fair value changes are ignored; bonds are carried at amortized cost.',
    tip: 'Held-to-Maturity = Amortized Cost.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-73',
    categoryId: 'accounting',
    question: 'What is the Equity Method of accounting for investments in common stock?',
    answer: 'Used when an investor exerts significant influence (typically 20% to 50% voting stock)',
    options: ['Used when an investor exerts significant influence (typically 20% to 50% voting stock)', 'Used when investor owns over 50% and consolidates subsidiaries', 'Used for passive portfolio investments holding under 2% stock', 'Used exclusively for non-profit charitable trusts'],
    explanation: 'Under the equity method, investment is recorded at cost, adjusted upward for the investor\'s share of investee earnings, and downward for dividends received.',
    tip: '20% - 50% Ownership = Significant Influence = Equity Method.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-74',
    categoryId: 'accounting',
    question: 'Under the Equity Method, how do dividends received from the investee affect the investor\'s books?',
    answer: 'Increases Cash and reduces the Investment in Investee account balance',
    options: ['Increases Cash and reduces the Investment in Investee account balance', 'Recorded as Dividend Revenue on the Income Statement', 'Credited directly to Retained Earnings', 'Recorded as an unrealized gain in OCI'],
    explanation: 'Because investor recognized their share of investee income as it was earned, receipt of dividends is treated as a return of investment capital, not revenue.',
    tip: 'Equity Method: Dividends reduce the Investment asset account.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-75',
    categoryId: 'accounting',
    question: 'What is a Non-Controlling Interest (Minority Interest)?',
    answer: 'The portion of subsidiary equity not owned by the parent company in consolidated statements',
    options: ['The portion of subsidiary equity not owned by the parent company in consolidated statements', 'Debt obligations held by minority-owned commercial lenders', 'Common stock issued with zero voting rights in board elections', 'Pre-IPO shares reserved for independent contractors'],
    explanation: 'When parent owns >50% but <100%, 100% of subsidiary assets/liabilities are consolidated, and third-party equity is recognized as Non-Controlling Interest.',
    tip: 'Non-Controlling Interest = Outside ownership percentage in consolidated subsidiary.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-76',
    categoryId: 'accounting',
    question: 'What is a Bank Reconciliation?',
    answer: 'Process of matching bank statement balance with internal cash ledger balance to resolve differences',
    options: ['Process of matching bank statement balance with internal cash ledger balance to resolve differences', 'Annual physical audit of cash vault safety boxes', 'Calculation of weighted average interest on credit lines', 'Transfer of delinquent accounts to debt collection agencies'],
    explanation: 'Reconciles timing items: deposits in transit, outstanding checks, bank service fees, interest earned, and error corrections.',
    tip: 'Reconciles Bank Balance vs Book Balance.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-77',
    categoryId: 'accounting',
    question: 'In a bank reconciliation, how are Outstanding Checks treated?',
    answer: 'Deducted from the Bank Statement balance',
    options: ['Deducted from the Bank Statement balance', 'Added to the Company Book balance', 'Deducted from the Company Book balance', 'Added to the Bank Statement balance'],
    explanation: 'The company already recorded check issuance in its books, but the bank has not yet processed clearance; hence subtracted from bank balance.',
    tip: 'Outstanding checks = Subtract from Bank Statement side.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-78',
    categoryId: 'accounting',
    question: 'In a bank reconciliation, how are Deposits in Transit treated?',
    answer: 'Added to the Bank Statement balance',
    options: ['Added to the Bank Statement balance', 'Subtracted from Company Book balance', 'Added to Company Book balance', 'Recorded as a bank service fee'],
    explanation: 'Cash received and recorded on company books that has not yet reached or posted to the bank statement; added to bank statement balance.',
    tip: 'Deposits in transit = Add to Bank Statement side.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-79',
    categoryId: 'accounting',
    question: 'What is Petty Cash?',
    answer: 'A small accessible reserve of physical currency kept on hand for minor incidental disbursements',
    options: ['A small accessible reserve of physical currency kept on hand for minor incidental disbursements', 'Short-term certificates of deposit maturing within 90 days', 'Foreign currency held at airport exchange kiosks', 'Customer checks returned for insufficient funds (NSF)'],
    explanation: 'Operated under an imprest system: replenished periodically with receipts documented to charge specific expense accounts.',
    tip: 'Petty cash = Small physical fund for minor day-to-day office expenses.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-80',
    categoryId: 'accounting',
    question: 'What are Cash Equivalents?',
    answer: 'Short-term, highly liquid investments readily convertible to known cash amounts with original maturity ≤ 90 days',
    options: ['Short-term, highly liquid investments readily convertible to known cash amounts with original maturity ≤ 90 days', 'Accounts receivable expected to be collected within 6 months', 'Inventory items easily sold at standard markup', 'Common stock shares traded on public exchanges'],
    explanation: 'Examples include 3-month Treasury bills, commercial paper, and money market funds carrying negligible risk of price changes.',
    tip: 'Cash Equivalents: Maturity ≤ 3 months (90 days) from purchase date.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-81',
    categoryId: 'accounting',
    question: 'What is the Five-Step Model for Revenue Recognition under ASC 606 / IFRS 15?',
    answer: 'Identify Contract, Identify Performance Obligations, Determine Price, Allocate Price, Recognize Revenue when satisfied',
    options: ['Identify Contract, Identify Performance Obligations, Determine Price, Allocate Price, Recognize Revenue when satisfied', 'Send Invoice, Ship Goods, Receive Payment, Deposit Check, Record Margin', 'Sign Agreement, Complete Manufacturing, Issue Warranty, File Taxes, Pay Sales Commission', 'Inspect Quality, Estimate Salvage, Debit Accounts Receivable, Credit Cash, Audit Returns'],
    explanation: 'The standard 5 steps: 1. Identify contract; 2. Identify obligations; 3. Determine transaction price; 4. Allocate price to obligations; 5. Recognize as performance satisfied.',
    tip: '5 Steps: Contract -> Obligations -> Price -> Allocation -> Recognition.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-82',
    categoryId: 'accounting',
    question: 'What is a Bill-and-Hold arrangement in revenue recognition?',
    answer: 'Contract where seller bills customer but retains physical possession of goods until later delivery',
    options: ['Contract where seller bills customer but retains physical possession of goods until later delivery', 'Lease where tenant holds real estate without rent payment', 'Consignment agreement where wholesaler holds retailer inventory', 'Supply contract billed after customer consumes goods on site'],
    explanation: 'Strict criteria must be met under ASC 606 to recognize revenue before delivery: customer requested, goods identified and ready, seller cannot use goods.',
    tip: 'Bill-and-hold: strict criteria required to recognize revenue before shipment.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-83',
    categoryId: 'accounting',
    question: 'What is Zero-Based Budgeting (ZBB)?',
    answer: 'Budgeting method where all expenses must be justified from zero for each new period, rather than adjusting prior year',
    options: ['Budgeting method where all expenses must be justified from zero for each new period, rather than adjusting prior year', 'A budget where operating profits are forced to equal zero', 'Budgeting exclusively for businesses with zero outstanding debt', 'Setting capital expenditure plans based solely on cash at bank'],
    explanation: 'Unlike incremental budgeting, ZBB assumes zero baseline; every department must demonstrate cost-benefit for each line item.',
    tip: 'ZBB = Start from zero every year; justify every dollar.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-84',
    categoryId: 'accounting',
    question: 'What is Standard Costing in cost accounting?',
    answer: 'Assigning predetermined expected costs to direct materials, labor, and overhead, then analyzing variances',
    options: ['Assigning predetermined expected costs to direct materials, labor, and overhead, then analyzing variances', 'Tracking actual invoice receipts without budget benchmarks', 'The pricing formula used to bill retail customers', 'The legally mandated tax accounting method for exports'],
    explanation: 'Standard costing establishes benchmarks. Differences between actual costs and standard costs are isolated into price/rate and quantity/efficiency variances.',
    tip: 'Standard Costing = Predetermined benchmarks compared to actuals via variances.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-85',
    categoryId: 'accounting',
    question: 'What does a Favorable Variance mean in cost accounting?',
    answer: 'Actual costs were lower than budgeted standard costs (or actual revenues exceeded budget)',
    options: ['Actual costs were lower than budgeted standard costs (or actual revenues exceeded budget)', 'The auditor approved all accounting estimates without qualification', 'Manufacturing overhead was zero for the fiscal year', 'Taxes paid were identical to taxes accrued'],
    explanation: 'A favorable cost variance increases operating income relative to expectations (e.g. paying less per pound of raw material).',
    tip: 'Favorable = Actual cost < Budget cost (increases profit).',
    difficulty: 'beginner'
  },
  {
    id: 'acc-86',
    categoryId: 'accounting',
    question: 'What does an Unfavorable Direct Labor Rate Variance indicate?',
    answer: 'The company paid higher hourly wage rates than the predetermined standard rate',
    options: ['The company paid higher hourly wage rates than the predetermined standard rate', 'Workers used more hours than allowed for production output', 'Factory machines broke down causing labor idle time', 'Overtime hours were billed at standard regular rates'],
    explanation: 'Rate Variance = Actual Hours * (Actual Rate - Standard Rate). If actual rate > standard rate, variance is unfavorable.',
    tip: 'Rate Variance = Price paid per hour vs Standard hourly rate.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-87',
    categoryId: 'accounting',
    question: 'What does an Unfavorable Direct Labor Efficiency Variance indicate?',
    answer: 'Workers took more labor hours than standard allowed for the actual units produced',
    options: ['Workers took more labor hours than standard allowed for the actual units produced', 'Workers were paid less per hour than union agreement benchmarks', 'Factory utility electric rates increased unexpectedly', 'Defective materials were returned to suppliers for refunds'],
    explanation: 'Efficiency Variance = Standard Rate * (Actual Hours - Standard Hours Allowed). Excess hours spent lead to unfavorable efficiency.',
    tip: 'Efficiency Variance = Hours consumed vs Standard hours allowed.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-88',
    categoryId: 'accounting',
    question: 'What is Activity-Based Costing (ABC)?',
    answer: 'Costing methodology that assigns overhead to specific activities, then allocates costs to products based on activity consumption',
    options: ['Costing methodology that assigns overhead to specific activities, then allocates costs to products based on activity consumption', 'Allocating all factory overhead solely based on direct labor hours', 'Recording revenue whenever physical manufacturing activity occurs', 'Writing off all fixed assets immediately upon acquisition'],
    explanation: 'ABC replaces arbitrary single-driver allocation with multiple cost pools and cost drivers (e.g. machine setups, purchase orders, inspections) for accurate product costing.',
    tip: 'ABC identifies cost drivers and assigns overhead based on activity usage.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-89',
    categoryId: 'accounting',
    question: 'What is Transfer Pricing?',
    answer: 'The price charged when one division or subsidiary sells goods or services to another division within the same corporation',
    options: ['The price charged when one division or subsidiary sells goods or services to another division within the same corporation', 'The fee paid to wire funds between different retail banks', 'The exchange rate used when converting euro revenues into dollars', 'Discount granted to retail customers when paying within 10 days'],
    explanation: 'Crucial for multinational tax optimization and divisional performance evaluation; tax authorities require "arm\'s-length" pricing.',
    tip: 'Transfer pricing = Internal transaction price between related business units.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-90',
    categoryId: 'accounting',
    question: 'What is the "Arm\'s-Length Principle" in international transfer pricing?',
    answer: 'Intercompany transaction prices must match prices negotiated by unrelated third parties under comparable conditions',
    options: ['Intercompany transaction prices must match prices negotiated by unrelated third parties under comparable conditions', 'Corporate executives cannot sit on audit committees', 'Subsidiaries must maintain separate physical bank vault locks', 'Sales contracts must be signed in person with written ink'],
    explanation: 'OECD and IRS guidelines mandate arm\'s-length pricing to ensure profits are not artificially shifted to low-tax jurisdictions.',
    tip: 'Arm\'s-length = Price as if dealing with an independent external party.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-91',
    categoryId: 'accounting',
    question: 'What is Sunk Cost?',
    answer: 'A cost already incurred that cannot be recovered and is irrelevant to future economic decisions',
    options: ['A cost already incurred that cannot be recovered and is irrelevant to future economic decisions', 'The estimated residual scrap value of deep ocean oil rigs', 'Depreciation expense on cargo shipping vessels', 'Uncollected credit sales written off to doubtful accounts'],
    explanation: 'Because sunk costs cannot be altered by any present or future decision, rational economic actors ignore them when evaluating alternatives.',
    tip: 'Sunk costs cannot be changed; ignore them in decision-making.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-92',
    categoryId: 'accounting',
    question: 'What are Opportunity Costs in managerial accounting decisions?',
    answer: 'The potential benefits given up by selecting one alternative course of action over another',
    options: ['The potential benefits given up by selecting one alternative course of action over another', 'Direct labor bonuses paid to staff on overtime shifts', 'Brokerage commissions incurred when buying commercial land', 'Legal expenses incurred when patenting proprietary technology'],
    explanation: 'Though not recorded in general ledger double-entry journal entries, opportunity costs are critical for capital budgeting and special order analysis.',
    tip: 'Opportunity cost = Foregone benefit of the next best choice.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-93',
    categoryId: 'accounting',
    question: 'What is Net Present Value (NPV) in capital budgeting?',
    answer: 'The present value of expected cash inflows minus the present value of cash outflows discounted at required rate of return',
    options: ['The present value of expected cash inflows minus the present value of cash outflows discounted at required rate of return', 'Total undiscounted lifetime accounting profits minus initial cost', 'Net Income divided by initial capital expenditure', 'The time in years needed to recoup initial investment cash'],
    explanation: 'NPV > 0 indicates a project is expected to generate returns higher than the cost of capital, adding economic value to the enterprise.',
    tip: 'NPV = PV of inflows - PV of outflows. Accept if NPV > 0.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-94',
    categoryId: 'accounting',
    question: 'What is the Internal Rate of Return (IRR)?',
    answer: 'The discount rate that makes the Net Present Value (NPV) of all cash flows from a project equal to zero',
    options: ['The discount rate that makes the Net Present Value (NPV) of all cash flows from a project equal to zero', 'The annual dividend yield guaranteed by corporate bylaws', 'The inflation rate published by the central monetary bank', 'The statutory tax rate applicable to corporate profits'],
    explanation: 'If IRR exceeds the firm\'s required hurdle rate (WACC), the project is acceptable because its return surpasses funding costs.',
    tip: 'IRR is the discount rate where NPV = 0.',
    difficulty: 'intermediate'
  },
  {
    id: 'acc-95',
    categoryId: 'accounting',
    question: 'What is the Payback Period method in capital budgeting?',
    answer: 'The time required for an investment project to recover its initial cash outlay from operational cash inflows',
    options: ['The time required for an investment project to recover its initial cash outlay from operational cash inflows', 'The time until a long-term corporate bond reaches full maturity', 'The average days accounts payable take to be settled', 'The period required for an auditor to issue certification'],
    explanation: 'Simple liquidity metric, though criticized for ignoring time value of money and cash flows generated after the payback cutoff point.',
    tip: 'Payback Period = Years to break even on initial cash investment.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-96',
    categoryId: 'accounting',
    question: 'What is Weighted Average Cost of Capital (WACC)?',
    answer: 'Average rate of return a company must pay to all its security holders (debt and equity) weighted by market value proportions',
    options: ['Average rate of return a company must pay to all its security holders (debt and equity) weighted by market value proportions', 'Average cost of raw materials in inventory weighted by unit volume', 'The statutory corporate tax rate adjusted for municipal credits', 'Average bank loan interest rate across all domestic branches'],
    explanation: 'WACC serves as the minimum hurdle discount rate for evaluating new investments: WACC = (E/V * Re) + (D/V * Rd * (1 - Tax Rate)).',
    tip: 'WACC = Blended cost of capital for debt and equity financing.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-97',
    categoryId: 'accounting',
    question: 'Why is debt financing multiplied by (1 - Tax Rate) in the WACC formula?',
    answer: 'Because interest expense on debt is tax-deductible, creating an interest tax shield',
    options: ['Because interest expense on debt is tax-deductible, creating an interest tax shield', 'Because dividend payments to stockholders receive a 100% tax credit', 'Because corporate bonds are exempt from state income taxes', 'Because debt holders are entitled to vote on corporate tax returns'],
    explanation: 'Tax laws allow companies to deduct interest expense before calculating taxable income, lowering effective cost of borrowing: After-tax Rd = Rd * (1 - T).',
    tip: 'Interest is tax-deductible; dividends are not.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-98',
    categoryId: 'accounting',
    question: 'What is the Going Concern Assumption?',
    answer: 'Assumption that the entity will remain in business and operational for the foreseeable future (at least 12 months)',
    options: ['Assumption that the entity will remain in business and operational for the foreseeable future (at least 12 months)', 'Assumption that the company will liquidate all assets within 90 days', 'Rule requiring companies to maintain zero long-term liabilities', 'Principle that all transactions must be settled immediately in cash'],
    explanation: 'Allows assets to be recorded at historical cost rather than liquidation values. If going concern is in doubt, auditors must issue an explanatory paragraph.',
    tip: 'Going concern assumes company will operate indefinitely.',
    difficulty: 'beginner'
  },
  {
    id: 'acc-99',
    categoryId: 'accounting',
    question: 'What is a Subsequent Event in financial statement auditing (ASC 855)?',
    answer: 'An event occurring between the balance sheet date and the date financial statements are issued',
    options: ['An event occurring between the balance sheet date and the date financial statements are issued', 'Transactions recorded after the statute of limitations expires', 'Any expense approved by the board of directors in executive session', 'Share repurchases executed during open market trading hours'],
    explanation: 'Type I events provide condition evidence existing at balance sheet date (requires adjustment). Type II events represent new conditions (requires footnote disclosure).',
    tip: 'Subsequent events occur between balance sheet date and report issue date.',
    difficulty: 'advanced'
  },
  {
    id: 'acc-100',
    categoryId: 'accounting',
    question: 'What is Forensic Accounting?',
    answer: 'Specialty practice integrating accounting, auditing, and investigative skills for legal disputes and fraud examination',
    options: ['Specialty practice integrating accounting, auditing, and investigative skills for legal disputes and fraud examination', 'Calculating physical biological decay of hospital medical supplies', 'Filing standard quarterly corporate payroll taxes', 'Automated robotic processing of vendor invoices in enterprise ERP systems'],
    explanation: 'Forensic accountants investigate embezzlement, money laundering, asset concealment, bankruptcy fraud, and serve as expert witnesses in courtroom litigation.',
    tip: 'Forensic Accounting = Investigative accounting for legal disputes and fraud.',
    difficulty: 'intermediate'
  }
];
