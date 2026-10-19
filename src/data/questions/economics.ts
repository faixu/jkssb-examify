import { Flashcard } from '../../types';
import { ECONOMICS_PDF_100_QUESTIONS } from './economicsPdfQuestions';

export const ECONOMICS_QUESTIONS: Flashcard[] = [
  ...ECONOMICS_PDF_100_QUESTIONS,
  {
    "id": "econ-1",
    "categoryId": "economics",
    "question": "What economic concept describes the loss of potential gain from other alternatives when one alternative is chosen?",
    "answer": "Opportunity Cost",
    "options": [
      "Opportunity Cost",
      "Sunk Cost",
      "Marginal Cost",
      "Comparative Friction"
    ],
    "explanation": "Opportunity cost is the value of the next best alternative foregone when making a choice with scarce resources.",
    "tip": "There is no such thing as a free lunch (TANSTAAFL).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-2",
    "categoryId": "economics",
    "question": "If the Price Elasticity of Demand for a good is greater than 1 (|Ed| > 1), how is demand classified?",
    "answer": "Elastic",
    "options": [
      "Elastic",
      "Inelastic",
      "Unitary Elastic",
      "Perfectively Rigid"
    ],
    "explanation": "When |Ed| > 1, consumers are highly responsive to price changes; percentage change in quantity demanded exceeds percentage change in price.",
    "tip": "> 1 is Elastic; < 1 is Inelastic; = 1 is Unitary.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-3",
    "categoryId": "economics",
    "question": "What is the key mechanism of the \"Broken Window Fallacy\" identified by Frédéric Bastiat?",
    "answer": "Ignoring unseen opportunity costs caused by destruction",
    "options": [
      "Ignoring unseen opportunity costs caused by destruction",
      "Assuming windows increase property taxes",
      "Believing glass manufacturing has zero marginal cost",
      "Overestimating consumer savings in bank vaults"
    ],
    "explanation": "Destruction does not stimulate the economy; money spent repairing damage would otherwise have been spent on other productive goods or savings.",
    "tip": "Look for \"what is seen and what is not seen\".",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-4",
    "categoryId": "economics",
    "question": "What does the Phillips Curve illustrate in short-run macroeconomics?",
    "answer": "An inverse relationship between inflation and unemployment",
    "options": [
      "An inverse relationship between inflation and unemployment",
      "A positive relationship between tax rates and revenue",
      "The trade-off between domestic exports and import tariffs",
      "A correlation between interest rates and gold prices"
    ],
    "explanation": "A.W. Phillips showed that lower unemployment was associated with higher inflation in the short run, though stagflation challenged this in the long run.",
    "tip": "Short-run: Unemployment goes down -> Inflation goes up.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-5",
    "categoryId": "economics",
    "question": "What is a \"Nash Equilibrium\" in game theory?",
    "answer": "A state where no player can benefit by unilaterally changing strategy",
    "options": [
      "A state where no player can benefit by unilaterally changing strategy",
      "The outcome that produces maximum total profit for all participants",
      "A scenario where one player dominates all possible turns",
      "A zero-sum condition where all payouts equal zero"
    ],
    "explanation": "In a Nash equilibrium, each participant selects their optimal strategy given the choices of all other players, meaning no one has an incentive to deviate alone.",
    "tip": "No unilateral incentive to defect.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-6",
    "categoryId": "economics",
    "question": "What type of good is both non-excludable and non-rivalrous?",
    "answer": "Public Good",
    "options": [
      "Public Good",
      "Private Good",
      "Club Good",
      "Common Resource"
    ],
    "explanation": "Public goods (like national defense or lighthouses) cannot easily exclude non-payers, and one person's consumption does not reduce availability to others.",
    "tip": "Non-excludable + Non-rival = Public Good.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-7",
    "categoryId": "economics",
    "question": "When a central bank increases the reserve requirement for commercial banks, what happens to the money supply?",
    "answer": "Money supply contracts (decreases)",
    "options": [
      "Money supply contracts (decreases)",
      "Money supply expands (increases)",
      "Inflation spikes immediately",
      "Government bonds automatically mature"
    ],
    "explanation": "Banks must hold a higher fraction of deposits in reserve, reducing lending capacity and shrinking the money multiplier.",
    "tip": "Higher reserve ratio = Lower lending = Reduced money supply.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-8",
    "categoryId": "economics",
    "question": "What is the \"Ricardian Equivalence\" hypothesis?",
    "answer": "Deficit-financed tax cuts do not stimulate demand because consumers anticipate future taxes",
    "options": [
      "Deficit-financed tax cuts do not stimulate demand because consumers anticipate future taxes",
      "Higher tariffs always increase domestic employment permanently",
      "Free trade balances exchange rates instantaneously across borders",
      "Wages equal the exact marginal cost of capital goods"
    ],
    "explanation": "Formulated by David Ricardo and expanded by Robert Barro, rational forward-looking consumers save current tax windfalls to pay for future tax liabilities created by government debt.",
    "tip": "Borrowing today = Higher taxes tomorrow.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-9",
    "categoryId": "economics",
    "question": "What is the Law of Diminishing Marginal Utility?",
    "answer": "As consumption of a good increases, the additional satisfaction derived from each subsequent unit decreases",
    "options": [
      "As consumption of a good increases, the additional satisfaction derived from each subsequent unit decreases",
      "Total utility declines to zero when a consumer buys more than one good",
      "Prices automatically double as consumers purchase identical units",
      "Firms produce less output when market prices rise"
    ],
    "explanation": "The first slice of pizza provides great satisfaction, the second somewhat less, and by the tenth slice marginal utility may turn negative.",
    "tip": "Each additional unit yields less incremental satisfaction.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-10",
    "categoryId": "economics",
    "question": "What does the Law of Demand state, holding all other factors constant (ceteris paribus)?",
    "answer": "As price rises, quantity demanded falls; as price falls, quantity demanded rises",
    "options": [
      "As price rises, quantity demanded falls; as price falls, quantity demanded rises",
      "Higher prices always expand consumer purchasing power",
      "Quantity demanded changes proportionally with production costs",
      "Consumers always buy luxury goods when prices increase"
    ],
    "explanation": "An inverse relationship between price and quantity demanded exists because of the substitution effect and the income effect.",
    "tip": "Price up -> Quantity Demanded down (Downward sloping demand curve).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-11",
    "categoryId": "economics",
    "question": "What is a \"Veblen Good\"?",
    "answer": "A luxury good for which demand increases as price increases due to conspicuous consumption",
    "options": [
      "A luxury good for which demand increases as price increases due to conspicuous consumption",
      "An inferior staple food whose demand collapses in recessions",
      "A manufactured good whose marginal cost equals zero",
      "A public resource subject to overgrazing"
    ],
    "explanation": "Named after Thorstein Veblen, high prices confer social status and exclusivity, causing consumers to desire them more as prices rise.",
    "tip": "Veblen Good = High price signals luxury prestige (upward sloping demand).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-12",
    "categoryId": "economics",
    "question": "What is a \"Giffen Good\"?",
    "answer": "A low-income, non-luxury staple good whose demand increases when its price increases because of a strong negative income effect",
    "options": [
      "A low-income, non-luxury staple good whose demand increases when its price increases because of a strong negative income effect",
      "A patented software algorithm protected by antitrust law",
      "A foreign currency pegged to physical gold reserves",
      "A commercial airline ticket sold during peak holiday season"
    ],
    "explanation": "For a Giffen good (e.g. potatoes during famine), rising prices leave poor consumers unable to afford meat, forcing them to purchase even more potatoes.",
    "tip": "Giffen Good: Inferior good whose income effect overwhelms substitution effect.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-13",
    "categoryId": "economics",
    "question": "What are the four classical market structures in microeconomics?",
    "answer": "Perfect Competition, Monopolistic Competition, Oligopoly, and Monopoly",
    "options": [
      "Perfect Competition, Monopolistic Competition, Oligopoly, and Monopoly",
      "Capitalism, Socialism, Feudalism, and Mercantilism",
      "Primary, Secondary, Tertiary, and Quaternary Sectors",
      "Autarky, Free Trade, Customs Union, and Common Market"
    ],
    "explanation": "They differ by number of sellers, barriers to entry, degree of product differentiation, and firm pricing power.",
    "tip": "Structures: Perfect Comp -> Monopolistic Comp -> Oligopoly -> Monopoly.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-14",
    "categoryId": "economics",
    "question": "In a Perfectly Competitive market in long-run equilibrium, what is the economic profit of firms?",
    "answer": "Zero economic profit (Normal profit)",
    "options": [
      "Zero economic profit (Normal profit)",
      "Maximum monopoly rent",
      "Negative economic loss subsidized by taxpayers",
      "Equal to total fixed revenue"
    ],
    "explanation": "Free entry and exit ensure that if economic profits exist, new firms enter and drive prices down until Price = Marginal Cost = Minimum Average Total Cost.",
    "tip": "Long run perfect competition: Economic Profit = 0.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-15",
    "categoryId": "economics",
    "question": "What is a \"Natural Monopoly\"?",
    "answer": "An industry where economies of scale are so large that a single firm can supply the entire market at lowest average cost",
    "options": [
      "An industry where economies of scale are so large that a single firm can supply the entire market at lowest average cost",
      "A firm that owns 100% of physical national oil reserves",
      "A cartel formed by competing sovereign governments",
      "A company granted royal charter patents by Parliament"
    ],
    "explanation": "High fixed infrastructure costs (e.g. tap water grids, electricity distribution) mean duplication of networks by competitors would be wasteful and inefficient.",
    "tip": "Natural Monopoly = Declining ATC over entire relevant market range.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-16",
    "categoryId": "economics",
    "question": "What is \"Price Discrimination\"?",
    "answer": "Selling the same good or service to different buyers at different prices not reflecting cost differences",
    "options": [
      "Selling the same good or service to different buyers at different prices not reflecting cost differences",
      "Charging higher prices for products with higher production costs",
      "Selling goods below cost in foreign markets (dumping)",
      "Setting government ceiling prices on essential medicines"
    ],
    "explanation": "1st degree (perfect personalization), 2nd degree (bulk quantity discounts), 3rd degree (market segments like student discounts). Requires market power and arbitrage prevention.",
    "tip": "Different prices for different consumers for reasons other than costs.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-17",
    "categoryId": "economics",
    "question": "What is Deadweight Loss?",
    "answer": "The loss of total economic surplus (consumer + producer surplus) that occurs when a market is not in competitive equilibrium",
    "options": [
      "The loss of total economic surplus (consumer + producer surplus) that occurs when a market is not in competitive equilibrium",
      "The total depreciation of capital machinery during a recession",
      "The tax revenue collected by the government from tariff duties",
      "The cost of transporting cargo on international container ships"
    ],
    "explanation": "Caused by monopolies, taxes, price ceilings, price floors, or subsidies that prevent mutually beneficial voluntary transactions from occurring.",
    "tip": "Deadweight loss = Inefficiency / lost gains from trade.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-18",
    "categoryId": "economics",
    "question": "What is an \"Externality\" in welfare economics?",
    "answer": "A cost or benefit imposed on a third party who did not participate in the economic transaction",
    "options": [
      "A cost or benefit imposed on a third party who did not participate in the economic transaction",
      "A tax levied exclusively on exported goods",
      "The difference between nominal and real interest rates",
      "Foreign direct investment made by international conglomerates"
    ],
    "explanation": "Negative externalities (like industrial pollution) cause overproduction; positive externalities (like vaccinations or basic research) cause underproduction without intervention.",
    "tip": "Spillover impact on bystander third parties.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-19",
    "categoryId": "economics",
    "question": "What is a \"Pigouvian Tax\"?",
    "answer": "A tax levied on market activities that generate negative externalities, set equal to the marginal external damage",
    "options": [
      "A tax levied on market activities that generate negative externalities, set equal to the marginal external damage",
      "A lump-sum poll tax on every adult citizen regardless of income",
      "A progressive wealth tax on unrealized stock capital gains",
      "An import quota applied to foreign agricultural crops"
    ],
    "explanation": "Named after Arthur Pigou, it internalizes the externality so private marginal cost equals social marginal cost (e.g. carbon tax on greenhouse gas emissions).",
    "tip": "Pigouvian tax corrects negative externalities (e.g. carbon emissions tax).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-20",
    "categoryId": "economics",
    "question": "What does the \"Coase Theorem\" state regarding externalities?",
    "answer": "If property rights are well-defined and transaction costs are negligible, private bargaining can resolve externalities efficiently without government intervention",
    "options": [
      "If property rights are well-defined and transaction costs are negligible, private bargaining can resolve externalities efficiently without government intervention",
      "Government regulation is always superior to court litigation in nuisance disputes",
      "Polluting factories must be closed down by administrative decree",
      "Market prices automatically equalize across international borders"
    ],
    "explanation": "Formulated by Ronald Coase, the initial assignment of rights affects distribution of wealth, but the efficient economic allocation of resources will be achieved regardless.",
    "tip": "Coase: Clear property rights + zero transaction costs = Efficient bargaining.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-21",
    "categoryId": "economics",
    "question": "What is the \"Tragedy of the Commons\"?",
    "answer": "Individual users with open access to a common-pool resource deplete or spoil it through self-interested overuse",
    "options": [
      "Individual users with open access to a common-pool resource deplete or spoil it through self-interested overuse",
      "The collapse of municipal bond markets during economic depressions",
      "The bankruptcy of public railway lines operated by governments",
      "The displacement of small farmers by corporate supermarket chains"
    ],
    "explanation": "Common resources are rivalrous but non-excludable (e.g. oceanic fisheries, clean pastures), meaning individuals capture full personal benefit while sharing the degradation cost.",
    "tip": "Rivalrous + Non-excludable = Overexploitation (Tragedy of Commons).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-22",
    "categoryId": "economics",
    "question": "What is the difference between Gross Domestic Product (GDP) and Gross National Product (GNP)?",
    "answer": "GDP measures output produced within domestic borders; GNP measures output produced by permanent national residents globally",
    "options": [
      "GDP measures output produced within domestic borders; GNP measures output produced by permanent national residents globally",
      "GDP includes government debt, while GNP includes private corporate bonds",
      "GDP is adjusted for inflation, while GNP is always unadjusted nominal output",
      "GDP counts only exported goods, while GNP counts imported raw materials"
    ],
    "explanation": "GDP is location-based (within territorial borders). GNP (or GNI) is ownership-based (citizens and national firms wherever they operate).",
    "tip": "GDP = Domestic territory. GNP = National citizens/firms.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-23",
    "categoryId": "economics",
    "question": "What is the expenditure formula for calculating GDP?",
    "answer": "GDP = C + I + G + (X - M)",
    "options": [
      "GDP = C + I + G + (X - M)",
      "GDP = Wages + Rents + Interests + Profits",
      "GDP = Consumer Spending + Taxes - Imports",
      "GDP = Investment * Money Multiplier + Exports"
    ],
    "explanation": "C = Consumption, I = Gross Business Investment, G = Government Purchases, (X - M) = Net Exports (Exports minus Imports).",
    "tip": "GDP = Consumption + Investment + Government Spending + Net Exports.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-24",
    "categoryId": "economics",
    "question": "What is the difference between Nominal GDP and Real GDP?",
    "answer": "Real GDP is adjusted for changes in price levels (inflation), while Nominal GDP is valued at current market prices",
    "options": [
      "Real GDP is adjusted for changes in price levels (inflation), while Nominal GDP is valued at current market prices",
      "Nominal GDP excludes services, while Real GDP includes agriculture",
      "Real GDP is calculated exclusively in gold ounces",
      "Nominal GDP measures only government fiscal budget allocations"
    ],
    "explanation": "Real GDP reflects actual physical output growth by valuing goods at constant base-year prices, removing the distortive effect of price inflation.",
    "tip": "Real GDP = Output adjusted for inflation.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-25",
    "categoryId": "economics",
    "question": "How is the GDP Deflator calculated?",
    "answer": "(Nominal GDP / Real GDP) * 100",
    "options": [
      "(Nominal GDP / Real GDP) * 100",
      "(Real GDP / Nominal GDP) * 100",
      "(Consumer Price Index / Producer Price Index) * 100",
      "(Nominal GDP - Real GDP) / Total Population"
    ],
    "explanation": "The GDP deflator is a comprehensive price index reflecting the price level of all domestically produced final goods and services.",
    "tip": "GDP Deflator = (Nominal / Real) * 100.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-26",
    "categoryId": "economics",
    "question": "What is the Consumer Price Index (CPI)?",
    "answer": "A measure of the average change over time in prices paid by urban consumers for a fixed market basket of goods and services",
    "options": [
      "A measure of the average change over time in prices paid by urban consumers for a fixed market basket of goods and services",
      "The total wholesale price of raw capital machinery at ports of entry",
      "The average exchange rate of domestic currency against the IMF SDR basket",
      "The percentage of national income spent on public education"
    ],
    "explanation": "Calculated using a Laspeyres-style fixed weight basket of typical household expenditures, widely used for cost-of-living adjustments (COLA).",
    "tip": "CPI measures household basket inflation over time.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-27",
    "categoryId": "economics",
    "question": "What is \"Stagflation\"?",
    "answer": "A condition of slow economic growth, high unemployment, and high inflation occurring simultaneously",
    "options": [
      "A condition of slow economic growth, high unemployment, and high inflation occurring simultaneously",
      "A rapid economic boom accompanied by falling wholesale prices",
      "A state where government budgets have zero public debt",
      "A monetary regime where foreign currencies replace domestic banknotes"
    ],
    "explanation": "Stagflation (prominently seen during 1970s oil supply shocks) challenged traditional short-run Keynesian Phillips curve models.",
    "tip": "Stagflation = Stagnant growth + High Inflation + High Unemployment.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-28",
    "categoryId": "economics",
    "question": "What is \"Frictional Unemployment\"?",
    "answer": "Temporary unemployment that occurs when people are between jobs or searching for initial employment",
    "options": [
      "Temporary unemployment that occurs when people are between jobs or searching for initial employment",
      "Unemployment caused by long-term structural mismatch of skills",
      "Unemployment resulting from macroeconomic recession downturns",
      "Workers replaced permanently by robotic artificial intelligence"
    ],
    "explanation": "Frictional unemployment is natural and healthy in a dynamic economy as workers transition to jobs best matching their talents.",
    "tip": "Frictional = Time spent searching for or transitioning between jobs.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-29",
    "categoryId": "economics",
    "question": "What is \"Structural Unemployment\"?",
    "answer": "Unemployment caused by a fundamental mismatch between worker skills and employer job requirements",
    "options": [
      "Unemployment caused by a fundamental mismatch between worker skills and employer job requirements",
      "Temporary joblessness during routine seasonal weather changes",
      "Brief downtime when relocating to another metropolitan city",
      "Voluntary retirement of senior corporate executives"
    ],
    "explanation": "Arises from technological change, geographical relocation of industries, or trade shifts, requiring retraining or relocation.",
    "tip": "Structural = Skill obsolescence or technological shift.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-30",
    "categoryId": "economics",
    "question": "What is \"Cyclical Unemployment\"?",
    "answer": "Unemployment that rises during macroeconomic recessions and falls during expansions",
    "options": [
      "Unemployment that rises during macroeconomic recessions and falls during expansions",
      "The baseline rate of job search occurring at full employment",
      "Seasonal fluctuations in agricultural harvesting labor",
      "Workers striking during collective bargaining negotiations"
    ],
    "explanation": "Tied directly to the business cycle: deficient aggregate demand leads firms to lay off workers across industries.",
    "tip": "Cyclical = Caused by downturns in the business cycle.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-31",
    "categoryId": "economics",
    "question": "What constitutes the \"Natural Rate of Unemployment\" (NAIRU)?",
    "answer": "Frictional unemployment plus Structural unemployment (Cyclical unemployment equals zero)",
    "options": [
      "Frictional unemployment plus Structural unemployment (Cyclical unemployment equals zero)",
      "Zero total unemployment in the entire labor force",
      "The percentage of working age citizens receiving public pensions",
      "Unemployment strictly caused by foreign currency crises"
    ],
    "explanation": "The Non-Accelerating Inflation Rate of Unemployment (NAIRU) represents full employment: inflation remains stable without demand-pull pressures.",
    "tip": "Natural Rate = Frictional + Structural (0% Cyclical).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-32",
    "categoryId": "economics",
    "question": "What is the \"Quantity Theory of Money\" equation of exchange?",
    "answer": "M * V = P * Y",
    "options": [
      "M * V = P * Y",
      "M / V = P + Y",
      "M * P = V * Y",
      "Y = C + I + G + M"
    ],
    "explanation": "M = Money supply, V = Velocity of money, P = Price level, Y = Real GDP. Monetarists (Milton Friedman) argued that changes in M primarily drive P in the long run.",
    "tip": "MV = PY (Money * Velocity = Price * Real Output).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-33",
    "categoryId": "economics",
    "question": "What is \"Monetary Neutrality\" (Classical Dichotomy)?",
    "answer": "The proposition that changes in the money supply affect nominal variables (prices, wages) but not real variables (real GDP, employment) in the long run",
    "options": [
      "The proposition that changes in the money supply affect nominal variables (prices, wages) but not real variables (real GDP, employment) in the long run",
      "The theory that central banks should hold zero foreign exchange reserves",
      "The rule that tax rates must equal monetary growth rates",
      "The doctrine that commercial banks must never lend to private corporations"
    ],
    "explanation": "In the long run, money is like changing the scale on a measuring tape: doubling money doubles price tags, leaving real productive output unchanged.",
    "tip": "Money is neutral in the long run (affects prices, not real output).",
    "difficulty": "advanced"
  },
  {
    "id": "econ-34",
    "categoryId": "economics",
    "question": "What is the \"Fisher Effect\" equation relating nominal and real interest rates?",
    "answer": "Nominal Interest Rate = Real Interest Rate + Expected Inflation",
    "options": [
      "Nominal Interest Rate = Real Interest Rate + Expected Inflation",
      "Real Interest Rate = Nominal Interest Rate * Expected Inflation",
      "Nominal Interest Rate = Real Rate - Central Bank Discount Margin",
      "Expected Inflation = Nominal Interest Rate / Velocity of Money"
    ],
    "explanation": "Named after Irving Fisher, lenders demand higher nominal interest rates when expected inflation rises to preserve purchasing power.",
    "tip": "i = r + π (Nominal = Real + Inflation).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-35",
    "categoryId": "economics",
    "question": "What is \"Quantitative Easing\" (QE)?",
    "answer": "An unconventional monetary policy where a central bank purchases longer-term securities from the open market to lower long-term yields and expand liquidity",
    "options": [
      "An unconventional monetary policy where a central bank purchases longer-term securities from the open market to lower long-term yields and expand liquidity",
      "A law capping commercial mortgage interest rates at zero percent",
      "The direct distribution of gold bullion coins to retail bank depositors",
      "The minting of platinum currency tokens to pay national debts"
    ],
    "explanation": "Employed when short-term policy interest rates reach the zero lower bound (ZLB), expanding the central bank's balance sheet directly.",
    "tip": "QE = Central bank buying long-term assets to inject liquidity.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-36",
    "categoryId": "economics",
    "question": "What is a \"Liquidity Trap\"?",
    "answer": "A situation where interest rates are near zero and injections of cash by the central bank fail to stimulate borrowing and spending",
    "options": [
      "A situation where interest rates are near zero and injections of cash by the central bank fail to stimulate borrowing and spending",
      "A bank run where depositors withdraw physical cash faster than reserves permit",
      "A currency embargo blocking international wire transfers",
      "An investment portfolio consisting entirely of illiquid commercial real estate"
    ],
    "explanation": "John Maynard Keynes observed that when interest rates are extremely low, people expect rates to rise and hold cash rather than bonds, making monetary policy ineffective.",
    "tip": "Liquidity Trap = Rates near zero; monetary policy loses traction.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-37",
    "categoryId": "economics",
    "question": "What is the \"Crowding-Out Effect\" of fiscal policy?",
    "answer": "Government borrowing increases interest rates, which reduces private consumption and investment spending",
    "options": [
      "Government borrowing increases interest rates, which reduces private consumption and investment spending",
      "Foreign workers taking domestic construction jobs during a housing boom",
      "Subsidized state-owned enterprises eliminating all private retail shops",
      "Imports displacing domestic manufactured goods under free trade"
    ],
    "explanation": "When government finances deficits by selling bonds, it competes with private borrowers for loanable funds, pushing up real interest rates.",
    "tip": "Crowding out: Public deficit borrowing raises interest rates, suppressing private investment.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-38",
    "categoryId": "economics",
    "question": "What is the Keynesian Spending Multiplier formula (in a simple closed economy)?",
    "answer": "1 / (1 - MPC) or 1 / MPS",
    "options": [
      "1 / (1 - MPC) or 1 / MPS",
      "MPC / (1 + MPS)",
      "(1 - MPC) * Real GDP",
      "MPS / Disposable Income"
    ],
    "explanation": "MPC = Marginal Propensity to Consume. If MPC is 0.8, multiplier is 1 / (1 - 0.8) = 5: each dollar of initial government spending creates $5 of total GDP.",
    "tip": "Multiplier = 1 / (1 - MPC) = 1 / MPS.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-39",
    "categoryId": "economics",
    "question": "What is the \"Marginal Propensity to Consume\" (MPC)?",
    "answer": "The proportion of an aggregate raise in pay or disposable income that a consumer spends on goods and services rather than saving",
    "options": [
      "The proportion of an aggregate raise in pay or disposable income that a consumer spends on goods and services rather than saving",
      "The percentage of total household wealth stored in bank savings",
      "The tax rate paid on final marginal dollar of income",
      "The fraction of imported goods consumed by average households"
    ],
    "explanation": "MPC = ΔConsumption / ΔDisposable Income. The remainder is the Marginal Propensity to Save (MPS), such that MPC + MPS = 1.",
    "tip": "MPC + MPS = 1.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-40",
    "categoryId": "economics",
    "question": "What does the \"Laffer Curve\" postulate?",
    "answer": "There is an optimal tax rate between 0% and 100% that maximizes total government tax revenue",
    "options": [
      "There is an optimal tax rate between 0% and 100% that maximizes total government tax revenue",
      "Inflation rises linearly with the growth of national debt",
      "Unemployment is inversely related to educational attainment",
      "Tariffs always increase domestic manufacturing wages"
    ],
    "explanation": "At 0% tax rate revenue is zero; at 100% tax rate workers have no incentive to produce and revenue is also zero. Past the peak, lowering taxes can increase revenue.",
    "tip": "Laffer Curve shows relationship between tax rates and tax revenue.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-41",
    "categoryId": "economics",
    "question": "What is David Ricardo's Principle of \"Comparative Advantage\"?",
    "answer": "A country should specialize in producing goods for which it has the lowest opportunity cost, and trade for other goods",
    "options": [
      "A country should specialize in producing goods for which it has the lowest opportunity cost, and trade for other goods",
      "A country should produce only goods where it uses fewer absolute labor hours than any competitor",
      "A country should ban all imports to achieve complete autarkic self-sufficiency",
      "A country with the highest gold reserves dominates global currency exchanges"
    ],
    "explanation": "Even if country A is more productive in everything than country B (absolute advantage), mutually beneficial trade occurs when each specializes in their lower opportunity-cost product.",
    "tip": "Comparative advantage is driven by lower opportunity cost, NOT absolute cost.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-42",
    "categoryId": "economics",
    "question": "What does the Heckscher-Ohlin Model of international trade predict?",
    "answer": "A country will export goods that intensively use its relatively abundant factors of production, and import goods using scarce factors",
    "options": [
      "A country will export goods that intensively use its relatively abundant factors of production, and import goods using scarce factors",
      "Trade occurs exclusively between nations that share identical cultural borders",
      "Countries with trade surpluses always experience deflation",
      "Exchange rates appreciate whenever government tariffs are lowered"
    ],
    "explanation": "Capital-abundant countries export capital-intensive goods; labor-abundant countries export labor-intensive goods.",
    "tip": "Export goods intensive in your abundant factor; import scarce-factor goods.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-43",
    "categoryId": "economics",
    "question": "What was the \"Leontief Paradox\"?",
    "answer": "Wassily Leontief discovered that the capital-abundant US exported labor-intensive goods and imported capital-intensive goods, contradicting Heckscher-Ohlin",
    "options": [
      "Wassily Leontief discovered that the capital-abundant US exported labor-intensive goods and imported capital-intensive goods, contradicting Heckscher-Ohlin",
      "The finding that higher tariffs expanded total international trade volume",
      "The observation that socialist economies grew faster than free-market systems",
      "The discovery that inflation fell as money supplies expanded exponentially"
    ],
    "explanation": "Leontief explained this apparent paradox by noting that American labor was far more skilled and productive (higher human capital) than foreign labor.",
    "tip": "Leontief Paradox: US exported labor-intensive goods despite capital abundance.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-44",
    "categoryId": "economics",
    "question": "What is the \"Purchasing Power Parity\" (PPP) theory?",
    "answer": "Exchange rates between currencies are in equilibrium when their purchasing power is the same in each of the two countries",
    "options": [
      "Exchange rates between currencies are in equilibrium when their purchasing power is the same in each of the two countries",
      "All sovereign countries should adopt the US dollar as legal tender",
      "The market price of gold must be identical to national debt per capita",
      "Central banks must peg their discount rates to the price of crude oil"
    ],
    "explanation": "Based on the Law of One Price: in the absence of trade barriers, a standard basket of identical goods should cost the same price worldwide when converted to a single currency.",
    "tip": "PPP: Identical goods basket should cost the same across currencies.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-45",
    "categoryId": "economics",
    "question": "What is the \"Trilemma\" (Impossible Trinity) in open-economy macroeconomics?",
    "answer": "A country cannot simultaneously maintain fixed exchange rates, free capital mobility, and an independent monetary policy",
    "options": [
      "A country cannot simultaneously maintain fixed exchange rates, free capital mobility, and an independent monetary policy",
      "A country cannot have low taxes, high public spending, and zero debt",
      "A central bank cannot control gold prices, silver reserves, and stock dividends",
      "An economy cannot experience high growth, low unemployment, and free trade"
    ],
    "explanation": "A government can only choose two of the three. For instance, the Eurozone chose free capital flow and fixed exchange rates (shared currency), giving up national monetary policy.",
    "tip": "Impossible Trinity: Pick 2 of (Fixed FX, Free Capital, Independent Monetary Policy).",
    "difficulty": "advanced"
  },
  {
    "id": "econ-46",
    "categoryId": "economics",
    "question": "What is a \"Current Account Deficit\"?",
    "answer": "A condition where a nation's total spending on imports, foreign transfers, and income payments exceeds receipts from exports and foreign earnings",
    "options": [
      "A condition where a nation's total spending on imports, foreign transfers, and income payments exceeds receipts from exports and foreign earnings",
      "When national government tax revenues fall below annual expenditure",
      "When domestic commercial banks have insufficient vault cash for depositors",
      "When foreign central banks sell all holdings of sovereign government bonds"
    ],
    "explanation": "In the balance of payments, Current Account + Capital/Financial Account = 0. A current account deficit must be financed by a net capital inflow (selling assets or borrowing).",
    "tip": "Current Account Deficit = Nation is a net borrower from the world.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-47",
    "categoryId": "economics",
    "question": "What is the \"Gini Coefficient\"?",
    "answer": "A statistical measure of economic inequality ranging from 0 (perfect equality) to 1 (maximum inequality)",
    "options": [
      "A statistical measure of economic inequality ranging from 0 (perfect equality) to 1 (maximum inequality)",
      "The ratio of government debt to gross domestic product",
      "A metric measuring the elasticity of crude oil demand",
      "The percentage of agricultural output sold at wholesale markets"
    ],
    "explanation": "Derived from the Lorenz curve: Area between equality line and Lorenz curve divided by total area under the equality line. 0 = everyone earns same; 1 = one person earns everything.",
    "tip": "Gini: 0 = Perfect equality; 1 = Complete inequality.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-48",
    "categoryId": "economics",
    "question": "What does the \"Lorenz Curve\" illustrate?",
    "answer": "The graphical representation of income or wealth distribution across a population",
    "options": [
      "The graphical representation of income or wealth distribution across a population",
      "The trade-off between military spending and healthcare budgets",
      "The relationship between inflation and currency devaluation",
      "The production possibilities frontier under full employment"
    ],
    "explanation": "Plots cumulative percentage of population on horizontal axis versus cumulative percentage of total national income received on vertical axis.",
    "tip": "Lorenz Curve maps income distribution inequality.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-49",
    "categoryId": "economics",
    "question": "What is \"Adverse Selection\" in economics of information?",
    "answer": "Asymmetric information before a transaction occurs, leading to high-risk parties being more likely to participate",
    "options": [
      "Asymmetric information before a transaction occurs, leading to high-risk parties being more likely to participate",
      "A firm firing its most productive employees during a restructuring",
      "Consumers boycotting products due to political disagreements",
      "An investor selecting losing stocks by random chance"
    ],
    "explanation": "Described by George Akerlof's \"Market for Lemons\": buyers of used cars or health insurance cannot verify quality, driving out good cars/healthy individuals.",
    "tip": "Adverse Selection occurs BEFORE transaction (hidden characteristics / lemons).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-50",
    "categoryId": "economics",
    "question": "What is \"Moral Hazard\"?",
    "answer": "A lack of incentive to guard against risk where one party is protected from its consequences after a contract is signed",
    "options": [
      "A lack of incentive to guard against risk where one party is protected from its consequences after a contract is signed",
      "A company committing illegal financial accounting fraud",
      "The religious refusal to pay interest on commercial bank loans",
      "A consumer declining to purchase goods from tobacco manufacturers"
    ],
    "explanation": "Occurs AFTER a transaction: insured drivers take riskier roads, or \"too big to fail\" banks make reckless speculative bets expecting government bailouts.",
    "tip": "Moral Hazard occurs AFTER transaction (hidden action / risk shifting).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-51",
    "categoryId": "economics",
    "question": "What is the \"Principal-Agent Problem\"?",
    "answer": "Conflict in priorities between a person or group (the principal) and the representative authorized to act on their behalf (the agent)",
    "options": [
      "Conflict in priorities between a person or group (the principal) and the representative authorized to act on their behalf (the agent)",
      "Disputes between prime ministers and supreme court chief justices",
      "Arbitrage between domestic commercial banks and the central bank",
      "Competition between suppliers of physical raw materials"
    ],
    "explanation": "Classic example: corporate shareholders (principals) want long-term value, while executives (agents) may pursue short-term personal bonuses or empire building.",
    "tip": "Principal-Agent: Misaligned incentives between owner and manager.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-52",
    "categoryId": "economics",
    "question": "What is a \"Price Ceiling\"?",
    "answer": "A legally established maximum price that sellers may charge for a good or service",
    "options": [
      "A legally established maximum price that sellers may charge for a good or service",
      "A minimum price guaranteed to domestic agricultural producers",
      "The highest bid offered at an open bankruptcy auction",
      "The maximum tariff rate permitted under World Trade Organization rules"
    ],
    "explanation": "When set below market equilibrium price, a price ceiling causes quantity demanded to exceed quantity supplied, resulting in a shortage (e.g. rent control).",
    "tip": "Price ceiling BELOW equilibrium creates shortages.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-53",
    "categoryId": "economics",
    "question": "What is a \"Price Floor\"?",
    "answer": "A legally established minimum price that buyers must pay for a good or service",
    "options": [
      "A legally established minimum price that buyers must pay for a good or service",
      "The minimum allowable fee for international bank wire transfers",
      "The lowest wholesale price recorded during a financial panic",
      "A government subsidy paid to low-income consumer households"
    ],
    "explanation": "When set above market equilibrium price (e.g. minimum wage or agricultural price supports), it causes quantity supplied to exceed quantity demanded, creating a surplus.",
    "tip": "Price floor ABOVE equilibrium creates surpluses.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-54",
    "categoryId": "economics",
    "question": "What is \"Consumer Surplus\"?",
    "answer": "The difference between the maximum price a consumer is willing to pay and the actual market price paid",
    "options": [
      "The difference between the maximum price a consumer is willing to pay and the actual market price paid",
      "Excess goods left unsold on retail supermarket shelves",
      "The total income remaining after paying mandatory household taxes",
      "The bonus paid to shoppers who join supermarket loyalty programs"
    ],
    "explanation": "Graphically represented as the area under the demand curve and above the market price line up to the quantity purchased.",
    "tip": "Consumer Surplus = Willingness to pay - Price paid.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-55",
    "categoryId": "economics",
    "question": "What is \"Producer Surplus\"?",
    "answer": "The difference between the market price a producer receives and the minimum price they were willing to accept (marginal cost)",
    "options": [
      "The difference between the market price a producer receives and the minimum price they were willing to accept (marginal cost)",
      "The excess inventory stockpiled in industrial warehouses",
      "The total dividend paid to corporate preferred stockholders",
      "The profit margin guaranteed by government defense contracts"
    ],
    "explanation": "Graphically represented as the area above the supply (marginal cost) curve and below the market price line up to the quantity sold.",
    "tip": "Producer Surplus = Price received - Minimum acceptable price (Marginal Cost).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-56",
    "categoryId": "economics",
    "question": "What is \"Income Elasticity of Demand\" (YED) for an Inferior Good?",
    "answer": "Negative (YED < 0)",
    "options": [
      "Negative (YED < 0)",
      "Positive and greater than 1 (YED > 1)",
      "Equal to exactly zero",
      "Approaching positive infinity"
    ],
    "explanation": "For inferior goods (e.g. instant ramen, bus transit), as household consumer income rises, quantity demanded falls as people upgrade to superior alternatives.",
    "tip": "Inferior Good: YED < 0. Normal Good: YED > 0. Luxury: YED > 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-57",
    "categoryId": "economics",
    "question": "What is \"Cross-Price Elasticity of Demand\" (XED) for Substitute goods?",
    "answer": "Positive (XED > 0)",
    "options": [
      "Positive (XED > 0)",
      "Negative (XED < 0)",
      "Strictly zero",
      "Undefined"
    ],
    "explanation": "If tea and coffee are substitutes, an increase in the price of tea causes consumers to switch, increasing the quantity demanded of coffee.",
    "tip": "Substitutes: XED > 0. Complements: XED < 0.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-58",
    "categoryId": "economics",
    "question": "What is \"Cross-Price Elasticity of Demand\" (XED) for Complementary goods?",
    "answer": "Negative (XED < 0)",
    "options": [
      "Negative (XED < 0)",
      "Positive (XED > 0)",
      "Always equal to 1.0",
      "Infinite"
    ],
    "explanation": "If cars and gasoline are complements, an increase in gasoline prices reduces the quantity demanded for gas-guzzling automobiles.",
    "tip": "Complements: Price of A up -> Demand for B down (XED < 0).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-59",
    "categoryId": "economics",
    "question": "What is an \"Indifference Curve\"?",
    "answer": "A graph showing combinations of two goods that provide the consumer with equal total satisfaction (utility)",
    "options": [
      "A graph showing combinations of two goods that provide the consumer with equal total satisfaction (utility)",
      "The boundary between feasible and unfeasible national budget deficits",
      "The schedule of tax rates yielding identical federal revenue",
      "The profit boundary between monopoly and oligopoly markets"
    ],
    "explanation": "Indifference curves are downward-sloping, convex to the origin (reflecting diminishing marginal rates of substitution), and cannot intersect.",
    "tip": "Indifference curve = Constant utility level.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-60",
    "categoryId": "economics",
    "question": "What is the \"Marginal Rate of Substitution\" (MRS)?",
    "answer": "The rate at which a consumer is willing to give up one good in exchange for another while maintaining the same utility",
    "options": [
      "The rate at which a consumer is willing to give up one good in exchange for another while maintaining the same utility",
      "The exchange rate between domestic and foreign paper currencies",
      "The percentage change in output per unit of raw capital input",
      "The discount margin required by commercial mortgage underwriters"
    ],
    "explanation": "Graphically, MRS equals the slope of the indifference curve at any given point: MRS = MUx / MUy.",
    "tip": "MRS = Slope of Indifference Curve = Ratio of Marginal Utilities.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-61",
    "categoryId": "economics",
    "question": "Where is consumer equilibrium achieved with a budget constraint?",
    "answer": "At the point of tangency where the budget line touches the highest attainable indifference curve",
    "options": [
      "At the point of tangency where the budget line touches the highest attainable indifference curve",
      "Where the budget line intersects the vertical price axis",
      "At the origin where consumption of all commodities equals zero",
      "At the point where total household savings equal annual income"
    ],
    "explanation": "At tangency, MRS = Px / Py: the subjective valuation of trade equals the objective market price ratio.",
    "tip": "Consumer Equilibrium: MRS = Price Ratio (Indifference curve tangent to budget line).",
    "difficulty": "advanced"
  },
  {
    "id": "econ-62",
    "categoryId": "economics",
    "question": "What is an \"Isoquant\" in production theory?",
    "answer": "A curve showing all combinations of inputs (labor and capital) that yield the same total quantity of physical output",
    "options": [
      "A curve showing all combinations of inputs (labor and capital) that yield the same total quantity of physical output",
      "A line showing equal total financial accounting costs",
      "The frontier of optimal tax policies in developing economies",
      "The distribution of household wealth across demographic percentiles"
    ],
    "explanation": "Isoquants are to production theory what indifference curves are to consumer utility theory.",
    "tip": "Isoquant = Same physical production output.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-63",
    "categoryId": "economics",
    "question": "What is an \"Isocost\" line?",
    "answer": "A line displaying all combinations of labor and capital that can be purchased for a given total expenditure",
    "options": [
      "A line displaying all combinations of labor and capital that can be purchased for a given total expenditure",
      "A chart showing identical consumer satisfaction levels",
      "A boundary where marginal tax rates equal statutory thresholds",
      "A schedule of uniform wholesale retail prices"
    ],
    "explanation": "The firm minimizes cost for a target output where the isoquant is tangent to the lowest isocost line.",
    "tip": "Isocost = Firm budget line for inputs (Labor & Capital).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-64",
    "categoryId": "economics",
    "question": "What does \"Economies of Scale\" mean?",
    "answer": "Long-run average total cost decreases as the scale of production and output expands",
    "options": [
      "Long-run average total cost decreases as the scale of production and output expands",
      "Short-run fixed costs increase exponentially with added workers",
      "The legal monopoly power granted by municipal government franchises",
      "Higher wages paid to corporate managers as firms hire contractors"
    ],
    "explanation": "Driven by specialization of labor, bulk purchasing discounts, efficient high-volume machinery, and spreading fixed overhead over more units.",
    "tip": "Economies of scale: Output increases -> Long-run Average Total Cost falls.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-65",
    "categoryId": "economics",
    "question": "What does \"Diseconomies of Scale\" mean?",
    "answer": "Long-run average total cost increases as output continues to grow beyond optimal capacity",
    "options": [
      "Long-run average total cost increases as output continues to grow beyond optimal capacity",
      "A decline in national industrial output caused by economic depression",
      "The destruction of manufacturing plants during natural disasters",
      "Firms reducing worker wages due to international competitive pressures"
    ],
    "explanation": "Arises in giant organizations from communication bottlenecks, managerial bureaucracy, coordination friction, and worker alienation.",
    "tip": "Diseconomies of scale: Firm grows too large -> Average costs rise.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-66",
    "categoryId": "economics",
    "question": "What is \"Minimum Efficient Scale\" (MES)?",
    "answer": "The lowest level of output at which a firm can minimize its long-run average total cost",
    "options": [
      "The lowest level of output at which a firm can minimize its long-run average total cost",
      "The minimum capital investment required to incorporate a company",
      "The break-even point where economic profits equal total debt",
      "The legal floor on daily production output imposed by cartels"
    ],
    "explanation": "MES determines industry concentration: if MES is very large relative to market size, the industry naturally becomes an oligopoly or monopoly.",
    "tip": "MES = Output point where firm first achieves lowest long-run average cost.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-67",
    "categoryId": "economics",
    "question": "What is a \"Monopsony\"?",
    "answer": "A market structure with only one single buyer for a good, service, or factor of production (e.g. single employer in isolated town)",
    "options": [
      "A market structure with only one single buyer for a good, service, or factor of production (e.g. single employer in isolated town)",
      "A market with a single dominant seller of consumer electronics",
      "An international cartel that controls global shipping vessels",
      "A government agency with legal authority to issue sovereign bonds"
    ],
    "explanation": "A monopsonist has market power over sellers, allowing them to pay lower factor prices (e.g. lower wages) and purchase less than competitive equilibrium.",
    "tip": "Monopsony = Single Buyer. Monopoly = Single Seller.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-68",
    "categoryId": "economics",
    "question": "What is a \"Cartel\"?",
    "answer": "A formal collusive agreement among competing firms to coordinate prices, restrict output, and divide markets to earn monopoly profits",
    "options": [
      "A formal collusive agreement among competing firms to coordinate prices, restrict output, and divide markets to earn monopoly profits",
      "A non-profit union of retail manufacturing consumers",
      "A regulatory commission enforcing antitrust compliance",
      "A merger of two insolvent commercial savings banks"
    ],
    "explanation": "Cartels (e.g. OPEC) are inherently unstable because each individual member has a strong incentive to cheat by selling more at the agreed high price.",
    "tip": "Cartel = Formal collusive price-fixing oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-69",
    "categoryId": "economics",
    "question": "In the Cournot Duopoly Model, what do competing firms choose simultaneously?",
    "answer": "The quantity of output to produce, taking competitor quantity as given",
    "options": [
      "The quantity of output to produce, taking competitor quantity as given",
      "The retail selling price, taking competitor price as given",
      "The total advertising budget for television commercials",
      "The wage rate paid to assembly line factory workers"
    ],
    "explanation": "Cournot duopolists choose quantities simultaneously. Market price is determined by aggregate output. Equilibrium output is between monopoly and competition.",
    "tip": "Cournot = Compete on Quantity. Bertrand = Compete on Price.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-70",
    "categoryId": "economics",
    "question": "What is the \"Bertrand Paradox\"?",
    "answer": "With two identical firms competing simultaneously on price, price falls all the way to marginal cost, yielding competitive outcomes with only two firms",
    "options": [
      "With two identical firms competing simultaneously on price, price falls all the way to marginal cost, yielding competitive outcomes with only two firms",
      "Firms with higher advertising budgets earn lower gross revenues",
      "Monopolies always charge lower prices than competitive producers",
      "Consumer demand increases when market supplies contract to zero"
    ],
    "explanation": "Because products are identical and consumers buy from the cheaper seller, each firm undercuts the other until P = MC.",
    "tip": "Bertrand Duopoly: Intense price competition drives Price = Marginal Cost.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-71",
    "categoryId": "economics",
    "question": "What is the \"Stackelberg Model\" of oligopoly?",
    "answer": "A sequential game where a leader firm chooses its output first, and follower firms react to that decision",
    "options": [
      "A sequential game where a leader firm chooses its output first, and follower firms react to that decision",
      "A secret cartel agreement mediated by an independent arbitrator",
      "A market where the government fixes prices based on cost surveys",
      "A structure where firms merge into a single holding conglomerate"
    ],
    "explanation": "The first-mover leader enjoys a strategic advantage, producing larger output and earning higher profits than in simultaneous Cournot competition.",
    "tip": "Stackelberg = Leader-Follower sequential quantity game.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-72",
    "categoryId": "economics",
    "question": "What is a \"Dominant Strategy\" in game theory?",
    "answer": "A strategy that yields the highest payoff for a player regardless of what other players choose",
    "options": [
      "A strategy that yields the highest payoff for a player regardless of what other players choose",
      "A move that guarantees victory only if the opponent plays randomly",
      "An agreement where both players cooperate to share profits equally",
      "The strategy selected exclusively by the first player in a turn"
    ],
    "explanation": "In the classic Prisoner's Dilemma, confessing (defecting) is the strictly dominant strategy for both players, leading to a suboptimal equilibrium.",
    "tip": "Dominant Strategy = Best choice no matter what the opponent does.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-73",
    "categoryId": "economics",
    "question": "What is \"Pareto Efficiency\" (Pareto Optimality)?",
    "answer": "A state where resources are allocated such that it is impossible to make any individual better off without making at least one individual worse off",
    "options": [
      "A state where resources are allocated such that it is impossible to make any individual better off without making at least one individual worse off",
      "An economic condition where all citizens receive identical monthly incomes",
      "A society where every adult citizen owns equal acreage of land",
      "A government budget that produces zero national inflation"
    ],
    "explanation": "A Pareto improvement reallocates goods to benefit someone without harming anyone. When no further Pareto improvements are possible, the allocation is Pareto efficient.",
    "tip": "Pareto Efficient: Cannot help someone without hurting someone else.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-74",
    "categoryId": "economics",
    "question": "What does the First Fundamental Theorem of Welfare Economics establish?",
    "answer": "Under certain conditions (complete markets, perfect competition, no externalities), any competitive market equilibrium is Pareto efficient",
    "options": [
      "Under certain conditions (complete markets, perfect competition, no externalities), any competitive market equilibrium is Pareto efficient",
      "Competitive markets always ensure equal distribution of household wealth",
      "Government planning is mathematically necessary to eliminate deadweight loss",
      "Tariffs maximize international economic welfare for all trading nations"
    ],
    "explanation": "Provides formal mathematical validation for Adam Smith's \"invisible hand\": decentralized price mechanisms coordinate optimal resource allocation.",
    "tip": "1st Welfare Theorem: Competitive markets lead to Pareto efficiency.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-75",
    "categoryId": "economics",
    "question": "What does the Second Fundamental Theorem of Welfare Economics establish?",
    "answer": "Any Pareto efficient allocation can be achieved as a competitive equilibrium through appropriate initial lump-sum redistribution of endowments",
    "options": [
      "Any Pareto efficient allocation can be achieved as a competitive equilibrium through appropriate initial lump-sum redistribution of endowments",
      "Monopolies always generate higher social welfare than competitive firms",
      "Free markets eliminate all income inequality without government intervention",
      "Trade deficits cause persistent hyperinflation in developing countries"
    ],
    "explanation": "Separates equity from efficiency: society can achieve any desired equitable distribution via lump-sum transfers, then let markets handle efficient production.",
    "tip": "2nd Welfare Theorem: Separate redistribution from market efficiency.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-76",
    "categoryId": "economics",
    "question": "What is \"Rent-Seeking\"?",
    "answer": "Spending resources to capture economic gain or wealth transfers through political lobbying or regulation without creating new wealth",
    "options": [
      "Spending resources to capture economic gain or wealth transfers through political lobbying or regulation without creating new wealth",
      "A landlord charging market rental rates for residential apartments",
      "A tenant paying security deposits on commercial office leases",
      "A bank earning interest on collateralized business equipment loans"
    ],
    "explanation": "Coined by Anne Krueger and Gordon Tullock: resources spent on lobbying for subsidies, tariffs, or licensing restrictions destroy net social wealth.",
    "tip": "Rent-Seeking = Lobbying for artificial privilege; redistributes rather than creates wealth.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-77",
    "categoryId": "economics",
    "question": "What is the \"Solow-Swan Neoclassical Growth Model\"?",
    "answer": "A macroeconomic model explaining long-run economic growth through capital accumulation, labor force growth, and exogenous technological progress",
    "options": [
      "A macroeconomic model explaining long-run economic growth through capital accumulation, labor force growth, and exogenous technological progress",
      "A model arguing that currency devaluation is the sole driver of manufacturing",
      "A framework demonstrating that tariff barriers maximize technological innovation",
      "A formula linking central bank interest rates to fiscal budget surpluses"
    ],
    "explanation": "Capital accumulation encounters diminishing returns (steady state); sustained long-term growth in per-capita income can only be driven by technological progress (Total Factor Productivity).",
    "tip": "Solow Growth: Sustained long-run per-capita growth comes from technological progress.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-78",
    "categoryId": "economics",
    "question": "What is \"Total Factor Productivity\" (TFP) / Solow Residual?",
    "answer": "The portion of output growth not explained by measured growth in inputs of labor and capital, representing technological and efficiency gains",
    "options": [
      "The portion of output growth not explained by measured growth in inputs of labor and capital, representing technological and efficiency gains",
      "The total revenue earned by government-owned industrial enterprises",
      "The physical volume of goods transported through commercial seaports",
      "The ratio of agricultural exports to total manufactured goods"
    ],
    "explanation": "Calculated as the residual in growth accounting: Y = A * F(K, L), where A is Total Factor Productivity.",
    "tip": "Solow Residual = Growth due to technology and efficiency.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-79",
    "categoryId": "economics",
    "question": "What is \"Endogenous Growth Theory\" (Romer, Lucas)?",
    "answer": "Growth theory positing that economic growth is driven internally by investment in human capital, knowledge spillover, and R&D innovation",
    "options": [
      "Growth theory positing that economic growth is driven internally by investment in human capital, knowledge spillover, and R&D innovation",
      "Theory asserting that economic growth is purely determined by weather patterns",
      "Model arguing that government must own all manufacturing corporations",
      "Doctrine stating that fixed exchange rates guarantee sustained GDP expansion"
    ],
    "explanation": "Unlike the neoclassical Solow model where technology is exogenous \"manna from heaven,\" endogenous theory models ideas as non-rival goods with increasing returns.",
    "tip": "Endogenous Growth: Knowledge and innovation drive growth from within the model.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-80",
    "categoryId": "economics",
    "question": "What is \"Regulatory Capture\"?",
    "answer": "When a regulatory agency created to act in the public interest instead advances the commercial concerns of the special interest groups it dominates",
    "options": [
      "When a regulatory agency created to act in the public interest instead advances the commercial concerns of the special interest groups it dominates",
      "Police authorities confiscating contraband goods at customs borders",
      "A government seizing physical foreign assets during wartime",
      "The voluntary bankruptcy of private commercial utilities"
    ],
    "explanation": "Formulated by George Stigler (Public Choice school): regulated industries spend resources lobbying and staffing agencies to establish entry barriers.",
    "tip": "Regulatory capture = Regulators serve the industry they are supposed to police.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-81",
    "categoryId": "economics",
    "question": "What is the \"Arrow Impossibility Theorem\"?",
    "answer": "No ranked-voting electoral system can convert individual preferences into a community-wide ranking while satisfying all fair criteria simultaneously",
    "options": [
      "No ranked-voting electoral system can convert individual preferences into a community-wide ranking while satisfying all fair criteria simultaneously",
      "Free markets can never produce public goods under any pricing mechanism",
      "Monopolies can never be broken up through antitrust litigation",
      "International exchange rates can never remain stable without a gold peg"
    ],
    "explanation": "Kenneth Arrow proved that no voting system can simultaneously guarantee unrestricted domain, non-dictatorship, Pareto efficiency, and independence of irrelevant alternatives.",
    "tip": "Arrow's Theorem: No perfect democratic voting system exists mathematically.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-82",
    "categoryId": "economics",
    "question": "What is the \"Median Voter Theorem\" (Anthony Downs)?",
    "answer": "In a majority-rule voting system along a single policy dimension, candidates will converge to the position preferred by the median voter",
    "options": [
      "In a majority-rule voting system along a single policy dimension, candidates will converge to the position preferred by the median voter",
      "Voters always elect candidates who promise the highest marginal tax rates",
      "The wealthiest demographic group always determines election outcomes",
      "Voters with extreme ideological views form permanent majorities"
    ],
    "explanation": "To maximize votes in a two-candidate election, both political platforms move toward the center of the political spectrum.",
    "tip": "Median Voter Theorem: Candidates converge to the political center.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-83",
    "categoryId": "economics",
    "question": "What is \"Nudge Theory\" in behavioral economics (Thaler and Sunstein)?",
    "answer": "Using positive reinforcement and subtle indirect suggestions (choice architecture) to influence behavior without mandating or forbidding options",
    "options": [
      "Using positive reinforcement and subtle indirect suggestions (choice architecture) to influence behavior without mandating or forbidding options",
      "Imposing heavy criminal fines on citizens who fail to save for retirement",
      "Setting mandatory government quotas on consumer purchases",
      "Banning commercial advertisements during primetime television broadcasts"
    ],
    "explanation": "Examples include setting 401(k) retirement enrollment as the default option (opt-out rather than opt-in), dramatically increasing savings rates.",
    "tip": "Nudge: Subtle choice architecture alters behavior without coercive bans.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-84",
    "categoryId": "economics",
    "question": "What is \"Prospect Theory\" (Kahneman and Tversky)?",
    "answer": "People evaluate outcomes relative to a reference point and are \"loss averse\" (losses hurt roughly twice as much as equivalent gains satisfy)",
    "options": [
      "People evaluate outcomes relative to a reference point and are \"loss averse\" (losses hurt roughly twice as much as equivalent gains satisfy)",
      "Consumers always make mathematically optimal decisions across their lifetimes",
      "Stock market investors always purchase shares during economic panics",
      "Households value future consumption more than present consumption"
    ],
    "explanation": "Deviating from traditional expected utility theory, prospect theory features an S-shaped value function: steep for losses, flatter for gains.",
    "tip": "Loss aversion: Losses loom larger than corresponding gains.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-85",
    "categoryId": "economics",
    "question": "What is \"Hyperbolic Discounting\" in behavioral economics?",
    "answer": "A time-inconsistent preference where people strongly prefer smaller immediate payoffs over larger delayed payoffs, leading to procrastination",
    "options": [
      "A time-inconsistent preference where people strongly prefer smaller immediate payoffs over larger delayed payoffs, leading to procrastination",
      "A constant compound interest rate applied to long-term government debt",
      "The exponential depreciation of high-technology computer hardware",
      "The practice of banks discounting commercial promissory notes"
    ],
    "explanation": "Explains present-bias: choosing $100 today over $110 tomorrow, but choosing $110 in 31 days over $100 in 30 days.",
    "tip": "Hyperbolic discounting = Present bias and self-control procrastination.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-86",
    "categoryId": "economics",
    "question": "What is the \"Taylor Rule\" in monetary policy?",
    "answer": "A guideline linking central bank target interest rates to deviations of inflation from target and output from potential GDP",
    "options": [
      "A guideline linking central bank target interest rates to deviations of inflation from target and output from potential GDP",
      "A rule requiring central banks to hold gold reserves equal to 40% of currency in circulation",
      "A formula setting statutory minimum wage rates based on consumer price inflation",
      "A model predicting the exact timing of stock market crashes"
    ],
    "explanation": "Proposed by John Taylor: Nominal Rate = Real Equilibrium Rate + Inflation + 0.5(Inflation - Target) + 0.5(Output Gap).",
    "tip": "Taylor Rule sets target policy interest rate based on inflation and output gaps.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-87",
    "categoryId": "economics",
    "question": "What is the \"Yield Curve\"?",
    "answer": "A line plotting interest rates (yields) of bonds having equal credit quality but differing maturity dates",
    "options": [
      "A line plotting interest rates (yields) of bonds having equal credit quality but differing maturity dates",
      "The total agricultural crop harvest per square kilometer of farmland",
      "The relationship between corporate advertising expenses and net profit",
      "The graph of foreign exchange depreciation against gold prices"
    ],
    "explanation": "A normal yield curve slopes upward (longer maturities pay higher yields). An inverted yield curve (short rates higher than long rates) is a classic recession predictor.",
    "tip": "Yield Curve: Yield vs Maturity. Inverted curve signals recession.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-88",
    "categoryId": "economics",
    "question": "What causes an \"Inverted Yield Curve\"?",
    "answer": "Investors expect future economic weakness and central bank rate cuts, driving down long-term yields below short-term rates",
    "options": [
      "Investors expect future economic weakness and central bank rate cuts, driving down long-term yields below short-term rates",
      "Rapid acceleration of real GDP growth exceeding ten percent annually",
      "Massive foreign direct investment in domestic real estate",
      "Commercial banks refusing to accept consumer savings deposits"
    ],
    "explanation": "Every US recession over the last 50 years has been preceded by an inverted 10-year / 2-year or 10-year / 3-month Treasury yield curve.",
    "tip": "Inverted Yield Curve: Short-term rates > Long-term rates (precedes recessions).",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-89",
    "categoryId": "economics",
    "question": "What is \"Automatic Stabilizers\" in fiscal policy?",
    "answer": "Built-in fiscal mechanisms (like progressive income taxes and unemployment benefits) that automatically counter business cycle swings without new legislation",
    "options": [
      "Built-in fiscal mechanisms (like progressive income taxes and unemployment benefits) that automatically counter business cycle swings without new legislation",
      "Robotic algorithms executing automated high-frequency stock trades",
      "International treaties fixing commodity trade prices across borders",
      "Sovereign wealth funds purchasing commercial bank equities during panics"
    ],
    "explanation": "In recessions, tax collections automatically fall and unemployment payouts automatically rise, injecting demand into the economy without legislative delay.",
    "tip": "Automatic stabilizers cushion shocks without waiting for new laws.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-90",
    "categoryId": "economics",
    "question": "What is a \"Sovereign Debt Crisis\"?",
    "answer": "When a national government is unable or unwilling to pay back its sovereign debt obligations or refinance maturing debt",
    "options": [
      "When a national government is unable or unwilling to pay back its sovereign debt obligations or refinance maturing debt",
      "When commercial banks fail to balance daily clearing accounts",
      "When a city council runs a minor operational budget deficit",
      "When private homeowners default on residential subprime mortgages"
    ],
    "explanation": "Often accompanied by currency depreciation, capital flight, banking crises, and IMF intervention (e.g. Greece 2010, Argentina 2001).",
    "tip": "Sovereign crisis = National government default or debt restructuring.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-91",
    "categoryId": "economics",
    "question": "What is \"Dutch Disease\" in resource economics?",
    "answer": "When a natural resource boom drives up currency value, rendering other domestic export sectors (manufacturing, agriculture) uncompetitive",
    "options": [
      "When a natural resource boom drives up currency value, rendering other domestic export sectors (manufacturing, agriculture) uncompetitive",
      "An agricultural blight affecting flower bulb production in Northern Europe",
      "A banking crisis triggered by tulip speculation in Amsterdam",
      "A chronic deficit in municipal pension fund management"
    ],
    "explanation": "Coined after the Netherlands discovered North Sea natural gas: massive gas exports appreciated the guilder, devastating manufacturing exports.",
    "tip": "Dutch Disease: Resource boom appreciates currency, hurting manufacturing.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-92",
    "categoryId": "economics",
    "question": "What is the \"Resource Curse\" (Paradox of Plenty)?",
    "answer": "The paradox that countries with an abundance of natural resources often experience slower growth, more corruption, and worse institutions than resource-poor nations",
    "options": [
      "The paradox that countries with an abundance of natural resources often experience slower growth, more corruption, and worse institutions than resource-poor nations",
      "The depletion of non-renewable fossil fuels causing worldwide price spikes",
      "The environmental degradation associated with open-pit copper mining",
      "The refusal of sovereign nations to sell critical minerals to trading partners"
    ],
    "explanation": "Abundant natural resource windfalls encourage rent-seeking, patronage politics, and conflict over extraction revenues rather than wealth creation.",
    "tip": "Resource Curse: Resource wealth often breeds corruption and slow growth.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-93",
    "categoryId": "economics",
    "question": "What is the \"Houthakker-Magee Effect\" in international trade?",
    "answer": "The empirical finding that a country's income elasticity of demand for imports can differ systematically from foreign elasticity for its exports",
    "options": [
      "The empirical finding that a country's income elasticity of demand for imports can differ systematically from foreign elasticity for its exports",
      "The rule that export tariffs always cause domestic currency appreciation",
      "The theory that agricultural goods have unitary price elasticity",
      "The observation that shipping costs decline with ocean container sizes"
    ],
    "explanation": "If a country has a higher propensity to import foreign goods as it grows than foreigners have for its exports, it faces persistent trade deficit pressures.",
    "tip": "Houthakker-Magee: Asymmetry in income elasticities for imports vs exports.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-94",
    "categoryId": "economics",
    "question": "What is \"Hyman Minsky's Financial Instability Hypothesis\"?",
    "answer": "Prolonged periods of economic prosperity induce financial complacency, transitioning financing from Hedge to Speculative to Ponzi financing, leading to crisis",
    "options": [
      "Prolonged periods of economic prosperity induce financial complacency, transitioning financing from Hedge to Speculative to Ponzi financing, leading to crisis",
      "Central banks should never intervene in foreign currency markets",
      "Stock markets always follow a random walk with zero autocorrelation",
      "Government budget deficits always equal national private savings"
    ],
    "explanation": "\"Stability breeds instability\": when debts can only be serviced by borrowing more or asset price inflation, a sudden \"Minsky Moment\" triggers debt deflation.",
    "tip": "Minsky Moment: Stability breeds excessive debt, culminating in collapse.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-95",
    "categoryId": "economics",
    "question": "What is the \"Balassa-Samuelson Effect\"?",
    "answer": "Higher productivity growth in tradable goods sectors in developing nations leads to higher service wages and a higher overall price level (real exchange rate appreciation)",
    "options": [
      "Higher productivity growth in tradable goods sectors in developing nations leads to higher service wages and a higher overall price level (real exchange rate appreciation)",
      "Tariffs on industrial steel expand manufacturing employment permanently",
      "Agricultural subsidies reduce domestic consumer grocery prices",
      "Fixed exchange rates eliminate all domestic business cycle recessions"
    ],
    "explanation": "Explains why services (haircuts, restaurant meals) are much cheaper in low-income countries than in rich countries.",
    "tip": "Balassa-Samuelson: Tradable productivity pushes up non-tradable prices/wages.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-96",
    "categoryId": "economics",
    "question": "What is \"Schumpeterian Creative Destruction\"?",
    "answer": "The process of industrial mutation where technological innovation incessantly dismantles the old economic structure and creates a new one",
    "options": [
      "The process of industrial mutation where technological innovation incessantly dismantles the old economic structure and creates a new one",
      "The physical destruction of capital equipment during military warfare",
      "The bankruptcy of sovereign states resulting from hyperinflation",
      "The planned obsolescence engineered by monopolistic consumer durable manufacturers"
    ],
    "explanation": "Joseph Schumpeter argued that dynamic innovation (e.g. automobiles replacing horse carriages, digital cameras replacing film) is the prime engine of capitalist growth.",
    "tip": "Creative Destruction: Innovation replaces obsolete industries.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-97",
    "categoryId": "economics",
    "question": "What is \"Tariff Quota\" (Tariff-Rate Quota)?",
    "answer": "A trade policy combining tariffs and quotas where a specified quantity of goods enters at a low tariff, but imports above that volume face a much higher tariff",
    "options": [
      "A trade policy combining tariffs and quotas where a specified quantity of goods enters at a low tariff, but imports above that volume face a much higher tariff",
      "A complete embargo on all foreign manufactured goods",
      "A uniform tax levied on both domestic and imported goods",
      "A subsidy paid directly to domestic export producers"
    ],
    "explanation": "Frequently used in agricultural trade to protect domestic farmers while meeting international minimum market access commitments.",
    "tip": "Tariff-Rate Quota: Low tariff up to quota limit; high tariff thereafter.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-98",
    "categoryId": "economics",
    "question": "What is \"Currency Depreciation\" under a floating exchange rate system?",
    "answer": "A decrease in the market value of a currency relative to other currencies driven by market forces of supply and demand",
    "options": [
      "A decrease in the market value of a currency relative to other currencies driven by market forces of supply and demand",
      "An official government decree reducing the fixed par value of currency",
      "The physical wear and tear on paper banknotes in circulation",
      "The legal demonetization of high-denomination cash bills"
    ],
    "explanation": "Depreciation happens through market forces in floating regimes; \"Devaluation\" refers to a formal administrative decision by authorities in fixed regimes.",
    "tip": "Depreciation = Market floating decline. Devaluation = Official fixed peg cut.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-99",
    "categoryId": "economics",
    "question": "What is the \"J-Curve Effect\" in international trade following a currency depreciation?",
    "answer": "A country's trade balance initially deteriorates before improving, because import costs rise immediately while export volumes take time to respond",
    "options": [
      "A country's trade balance initially deteriorates before improving, because import costs rise immediately while export volumes take time to respond",
      "Economic growth decelerates before accelerating during industrialization",
      "Tax revenues spike immediately and then permanently collapse to zero",
      "Unemployment declines in urban centers while expanding in rural areas"
    ],
    "explanation": "In the short run, contracts are fixed (Marshall-Lerner condition not yet met); in the long run, buyers adjust, improving net exports.",
    "tip": "J-Curve: Trade deficit worsens briefly after currency drops, then improves.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-100",
    "categoryId": "economics",
    "question": "What is the \"Marshall-Lerner Condition\"?",
    "answer": "Currency depreciation will improve the trade balance only if the sum of price elasticities of demand for exports and imports is greater than 1 (|Ex| + |Em| > 1)",
    "options": [
      "Currency depreciation will improve the trade balance only if the sum of price elasticities of demand for exports and imports is greater than 1 (|Ex| + |Em| > 1)",
      "The federal budget deficit must be lower than national gold reserves",
      "The velocity of money must be mathematically constant across business cycles",
      "Real interest rates must exceed nominal inflation rates by at least 2%"
    ],
    "explanation": "If total elasticity is less than 1, the volume changes are insufficient to overcome the price change, worsening the trade deficit.",
    "tip": "Marshall-Lerner: |Ex| + |Em| > 1 for currency depreciation to fix trade balance.",
    "difficulty": "advanced"
  },
  {
    "id": "econ-101",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-102",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Price of X equals Price of Y",
      "Marginal Utility equals Total Utility",
      "Budget Line intersects the origin"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-103",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-104",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-105",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-106",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-107",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Vertical straight line parallel to price axis",
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-108",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-109",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-110",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)",
      "Net Indirect Taxes (NIT)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-111",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Net National Product at Factor Cost (NNP at FC)",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-112",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-113",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Stock market liquidity doubles immediately"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-114",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Total Exports minus Total Imports",
      "Fiscal Deficit minus Interest Payments",
      "Revenue Expenditure minus Revenue Receipts"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-115",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Current Account Deficit plus Trade Deficit"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-116",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)",
      "Green Revolution",
      "Nationalization of Commercial Banks"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-117",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "31 October 2019",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-118",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-119",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Utility equals Total Utility",
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-120",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-121",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "A 5% increase in quantity demanded",
      "No change in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-122",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-123",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Capital equipment manufactured by humans",
      "Fluctuations in agricultural market prices",
      "Entrepreneurial risk-taking abilities",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-124",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-125",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-126",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-127",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Depreciation (Consumption of Fixed Capital)",
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-128",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Net National Product at Factor Cost (NNP at FC)",
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-129",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-130",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-131",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-132",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Total Borrowings minus Forex Reserves",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-133",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-134",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "31 October 2019",
      "1 April 2015",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-135",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-136",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-137",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-138",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "A 5% increase in quantity demanded",
      "No change in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-139",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-140",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Fluctuations in agricultural market prices",
      "Entrepreneurial risk-taking abilities",
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-141",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-142",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-143",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage II (Stage of Diminishing Returns)",
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-144",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Factor Income from Abroad (NFIA)",
      "Subsidies paid by the government",
      "Net Indirect Taxes (NIT)",
      "Depreciation (Consumption of Fixed Capital)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-145",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Net National Product at Factor Cost (NNP at FC)",
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-146",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-147",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-148",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Exports minus Total Imports",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-149",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Total Borrowings minus Forex Reserves",
      "Revenue Deficit minus Capital Expenditure"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-150",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-151",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "1 January 2015",
      "15 August 2014",
      "31 October 2019"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-152",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-153",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility",
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-154",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income",
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-155",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-156",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-157",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Entrepreneurial risk-taking abilities",
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil",
      "Fluctuations in agricultural market prices"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-158",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-159",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-160",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-161",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-162",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Net National Product at Factor Cost (NNP at FC)",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-163",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-164",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Stock market liquidity doubles immediately",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-165",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts",
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-166",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Current Account Deficit plus Trade Deficit"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-167",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-168",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 January 2015",
      "15 August 2014",
      "1 April 2015",
      "31 October 2019"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-169",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-170",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-171",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because total utility remains constant at all prices",
      "Due to increasing marginal utility of income",
      "Because commodities are perfect substitutes",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-172",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-173",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-174",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Original and indestructible powers of the soil",
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-175",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-176",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-177",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-178",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Subsidies paid by the government",
      "Net Indirect Taxes (NIT)",
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-179",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Net National Product at Factor Cost (NNP at FC)",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-180",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-181",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-182",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-183",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Revenue Deficit minus Capital Expenditure",
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-184",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "Green Revolution",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-185",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 January 2015",
      "15 August 2014",
      "1 April 2015",
      "31 October 2019"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-186",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-187",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Budget Line intersects the origin",
      "Price of X equals Price of Y",
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-188",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-189",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-190",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-191",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Original and indestructible powers of the soil",
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-192",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Vertical straight line parallel to price axis",
      "Kinked at the prevailing price",
      "Downward sloping to the right",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-193",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-194",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-195",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-196",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-197",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-198",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Stock market liquidity doubles immediately"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-199",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-200",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-201",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "Green Revolution",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-202",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "31 October 2019",
      "1 April 2015",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-203",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-204",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Price of X equals Price of Y",
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Budget Line intersects the origin"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-205",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-206",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 5% increase in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-207",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-208",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Entrepreneurial risk-taking abilities",
      "Capital equipment manufactured by humans",
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-209",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
      "Vertical straight line parallel to price axis"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-210",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-211",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-212",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Depreciation (Consumption of Fixed Capital)",
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-213",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Net National Product at Factor Cost (NNP at FC)",
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-214",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-215",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-216",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Fiscal Deficit minus Interest Payments",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Exports minus Total Imports"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-217",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-218",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Nationalization of Commercial Banks",
      "Green Revolution",
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-219",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "31 October 2019",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-220",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-221",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Utility equals Total Utility",
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Budget Line intersects the origin"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-222",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Because total utility remains constant at all prices",
      "Because commodities are perfect substitutes",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-223",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "No change in quantity demanded",
      "A 5% increase in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-224",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-225",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Capital equipment manufactured by humans",
      "Fluctuations in agricultural market prices",
      "Entrepreneurial risk-taking abilities",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-226",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
      "Kinked at the prevailing price"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-227",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-228",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-229",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Depreciation (Consumption of Fixed Capital)",
      "Net Factor Income from Abroad (NFIA)",
      "Subsidies paid by the government"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-230",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Net National Product at Factor Cost (NNP at FC)",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-231",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-232",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Money supply increases sharply, boosting inflation"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-233",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts",
      "Fiscal Deficit minus Interest Payments"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-234",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Revenue Deficit minus Capital Expenditure",
      "Total Borrowings minus Forex Reserves"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-235",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)",
      "Nationalization of Commercial Banks"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-236",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "31 October 2019",
      "1 April 2015",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-237",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-238",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Utility equals Total Utility",
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-239",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-240",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "No change in quantity demanded",
      "A 5% increase in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-241",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-242",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil",
      "Entrepreneurial risk-taking abilities"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-243",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-244",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-245",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-246",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-247",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-248",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-249",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Stock market liquidity doubles immediately",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-250",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Total Exports minus Total Imports",
      "Fiscal Deficit minus Interest Payments"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-251",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Revenue Deficit minus Capital Expenditure",
      "Total Borrowings minus Forex Reserves",
      "Fiscal Deficit minus Interest Payments on previous loans"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-252",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)",
      "Nationalization of Commercial Banks",
      "Green Revolution"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-253",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "31 October 2019",
      "1 April 2015",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-254",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-255",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Budget Line intersects the origin",
      "Price of X equals Price of Y",
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-256",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because total utility remains constant at all prices",
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-257",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "A 5% increase in quantity demanded",
      "No change in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-258",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-259",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil",
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-260",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-261",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-262",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-263",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Subsidies paid by the government",
      "Net Indirect Taxes (NIT)",
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-264",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-265",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-266",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Money supply increases sharply, boosting inflation",
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-267",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-268",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Total Borrowings minus Forex Reserves"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-269",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-270",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 January 2015",
      "15 August 2014",
      "31 October 2019",
      "1 April 2015"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-271",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-272",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Utility equals Total Utility",
      "Budget Line intersects the origin",
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-273",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because total utility remains constant at all prices",
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-274",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "A 5% increase in quantity demanded",
      "No change in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-275",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-276",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Entrepreneurial risk-taking abilities",
      "Original and indestructible powers of the soil",
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-277",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-278",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-279",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-280",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-281",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-282",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-283",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Interest rates on loans fall to zero",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Money supply increases sharply, boosting inflation"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-284",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts",
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-285",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Revenue Deficit minus Capital Expenditure"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-286",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Nationalization of Commercial Banks",
      "First Five Year Plan",
      "Green Revolution",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-287",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "31 October 2019",
      "1 January 2015",
      "15 August 2014",
      "1 April 2015"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-288",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-289",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Price of X equals Price of Y",
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Budget Line intersects the origin"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-290",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-291",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-292",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-293",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-294",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Kinked at the prevailing price",
      "Downward sloping to the right",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-295",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-296",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-297",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government",
      "Net Indirect Taxes (NIT)",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-298",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-299",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-300",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Stock market liquidity doubles immediately",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-301",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Exports minus Total Imports",
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Revenue Expenditure minus Revenue Receipts"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-302",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Revenue Deficit minus Capital Expenditure",
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit",
      "Fiscal Deficit minus Interest Payments on previous loans"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-303",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-304",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "31 October 2019",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-305",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-306",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Budget Line intersects the origin",
      "Price of X equals Price of Y",
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-307",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Because total utility remains constant at all prices",
      "Because commodities are perfect substitutes",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-308",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 5% increase in quantity demanded",
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-309",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-310",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Entrepreneurial risk-taking abilities",
      "Capital equipment manufactured by humans",
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-311",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
      "Vertical straight line parallel to price axis"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-312",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-313",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-314",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Depreciation (Consumption of Fixed Capital)",
      "Net Factor Income from Abroad (NFIA)",
      "Subsidies paid by the government"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-315",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-316",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-317",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Money supply increases sharply, boosting inflation",
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-318",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Total Exports minus Total Imports",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Revenue Expenditure minus Revenue Receipts"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-319",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-320",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "Nationalization of Commercial Banks",
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-321",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "31 October 2019",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-322",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-323",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Utility equals Total Utility",
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-324",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because total utility remains constant at all prices",
      "Due to increasing marginal utility of income",
      "Because commodities are perfect substitutes"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-325",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 5% increase in quantity demanded",
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-326",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-327",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-328",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Vertical straight line parallel to price axis",
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-329",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-330",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)",
      "Stage IV"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-331",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-332",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-333",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-334",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-335",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Fiscal Deficit minus Interest Payments",
      "Total Exports minus Total Imports"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-336",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Total Borrowings minus Forex Reserves",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Revenue Deficit minus Capital Expenditure"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-337",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "Green Revolution",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-338",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 January 2015",
      "15 August 2014",
      "31 October 2019",
      "1 April 2015"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-339",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Adam Smith (Wealth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-340",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Marginal Utility equals Total Utility"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-341",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-342",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-343",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-344",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-345",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-346",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-347",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-348",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)",
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-349",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-350",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-351",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-352",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Exports minus Total Imports"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-353",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Revenue Deficit minus Capital Expenditure",
      "Current Account Deficit plus Trade Deficit",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Total Borrowings minus Forex Reserves"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-354",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Nationalization of Commercial Banks",
      "Green Revolution",
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-355",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 January 2015",
      "15 August 2014",
      "31 October 2019",
      "1 April 2015"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-356",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-357",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-358",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Due to increasing marginal utility of income"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-359",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-360",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-361",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil",
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-362",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
      "Vertical straight line parallel to price axis"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-363",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-364",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage II (Stage of Diminishing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-365",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government",
      "Depreciation (Consumption of Fixed Capital)",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-366",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-367",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-368",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Stock market liquidity doubles immediately",
      "Money supply increases sharply, boosting inflation",
      "Interest rates on loans fall to zero"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-369",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Exports minus Total Imports",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-370",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Current Account Deficit plus Trade Deficit"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-371",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "Green Revolution",
      "LPG Reforms (Liberalization, Privatization, and Globalization)",
      "Nationalization of Commercial Banks"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-372",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "1 January 2015",
      "15 August 2014",
      "31 October 2019"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-373",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-374",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility",
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-375",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-376",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "No change in quantity demanded",
      "A 5% increase in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-377",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-378",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Original and indestructible powers of the soil",
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-379",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Kinked at the prevailing price",
      "Downward sloping to the right",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-380",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-381",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-382",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government",
      "Net Indirect Taxes (NIT)",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-383",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-384",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-385",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-386",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Exports minus Total Imports",
      "Fiscal Deficit minus Interest Payments",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-387",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Total Borrowings minus Forex Reserves",
      "Revenue Deficit minus Capital Expenditure",
      "Current Account Deficit plus Trade Deficit"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-388",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)",
      "Green Revolution",
      "Nationalization of Commercial Banks"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-389",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "31 October 2019",
      "1 January 2015",
      "15 August 2014",
      "1 April 2015"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-390",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Adam Smith (Wealth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-391",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Utility equals Total Utility",
      "Budget Line intersects the origin",
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-392",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to increasing marginal utility of income",
      "Because total utility remains constant at all prices",
      "Because commodities are perfect substitutes",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-393",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 5% increase in quantity demanded",
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-394",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-395",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Entrepreneurial risk-taking abilities",
      "Original and indestructible powers of the soil",
      "Fluctuations in agricultural market prices",
      "Capital equipment manufactured by humans"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-396",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Kinked at the prevailing price",
      "Downward sloping to the right",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
      "Vertical straight line parallel to price axis"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-397",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-398",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage II (Stage of Diminishing Returns)",
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-399",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-400",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-401",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-402",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-403",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Revenue Expenditure minus Revenue Receipts",
      "Total Exports minus Total Imports",
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-404",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-405",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)",
      "Nationalization of Commercial Banks"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-406",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "31 October 2019",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-407",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-408",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Budget Line intersects the origin",
      "Price of X equals Price of Y"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-409",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-410",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-411",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-412",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil",
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-413",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-414",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-415",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-416",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government",
      "Net Indirect Taxes (NIT)",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-417",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-418",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-419",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Money supply increases sharply, boosting inflation",
      "Interest rates on loans fall to zero",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-420",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Exports minus Total Imports",
      "Fiscal Deficit minus Interest Payments",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-421",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Total Borrowings minus Forex Reserves",
      "Current Account Deficit plus Trade Deficit",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-422",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Nationalization of Commercial Banks",
      "Green Revolution",
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-423",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "31 October 2019",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-424",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-425",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Budget Line intersects the origin",
      "Price of X equals Price of Y",
      "Marginal Utility equals Total Utility"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-426",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Because total utility remains constant at all prices",
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-427",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-428",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-429",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil",
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-430",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-431",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)",
      "Monopoly profit maximization",
      "Perfect price discrimination"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-432",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-433",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)",
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-434",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-435",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-436",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-437",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Exports minus Total Imports",
      "Fiscal Deficit minus Interest Payments",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Revenue Expenditure minus Revenue Receipts"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-438",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Total Borrowings minus Forex Reserves",
      "Revenue Deficit minus Capital Expenditure"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-439",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Nationalization of Commercial Banks",
      "First Five Year Plan",
      "Green Revolution",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-440",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "31 October 2019",
      "1 April 2015",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-441",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-442",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility",
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-443",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because total utility remains constant at all prices"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-444",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 5% increase in quantity demanded",
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-445",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Inferior Goods",
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-446",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Fluctuations in agricultural market prices",
      "Entrepreneurial risk-taking abilities",
      "Capital equipment manufactured by humans",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-447",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Downward sloping to the right",
      "Kinked at the prevailing price",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-448",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-449",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-450",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government",
      "Depreciation (Consumption of Fixed Capital)",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-451",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Net National Product at Factor Cost (NNP at FC)",
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-452",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-453",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Money supply increases sharply, boosting inflation",
      "Interest rates on loans fall to zero",
      "Stock market liquidity doubles immediately"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-454",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Fiscal Deficit minus Interest Payments",
      "Total Exports minus Total Imports",
      "Revenue Expenditure minus Revenue Receipts"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-455",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Revenue Deficit minus Capital Expenditure",
      "Total Borrowings minus Forex Reserves",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Current Account Deficit plus Trade Deficit"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-456",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "First Five Year Plan",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-457",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 January 2015",
      "15 August 2014",
      "31 October 2019",
      "1 April 2015"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-458",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-459",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Price of X equals Price of Y",
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-460",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income",
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-461",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 5% increase in quantity demanded",
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-462",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-463",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil",
      "Entrepreneurial risk-taking abilities",
      "Capital equipment manufactured by humans"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-464",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Kinked at the prevailing price",
      "Downward sloping to the right",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-465",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Excessive advertising expenditures",
      "Price Rigidity (stickiness of prices)"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-466",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-467",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Depreciation (Consumption of Fixed Capital)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-468",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)",
      "Personal Disposable Income",
      "Net National Product at Factor Cost (NNP at FC)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-469",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Current deposits loaned to priority agricultural sectors",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-470",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-471",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Fiscal Deficit minus Interest Payments",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Receipts excluding Borrowings",
      "Total Exports minus Total Imports"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-472",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Total Borrowings minus Forex Reserves"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-473",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "First Five Year Plan",
      "Green Revolution",
      "Nationalization of Commercial Banks",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-474",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 April 2015",
      "31 October 2019",
      "1 January 2015",
      "15 August 2014"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-475",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Paul Samuelson (Growth Definition)",
      "Adam Smith (Wealth Definition)",
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-476",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Budget Line intersects the origin",
      "Marginal Utility equals Total Utility"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-477",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income",
      "Because total utility remains constant at all prices",
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-478",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 5% increase in quantity demanded",
      "No change in quantity demanded",
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-479",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Complementary Goods",
      "Luxury Goods",
      "Normal Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-480",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-481",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Kinked at the prevailing price",
      "Downward sloping to the right",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
      "Vertical straight line parallel to price axis"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-482",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-483",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage II (Stage of Diminishing Returns)",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-484",
    "categoryId": "economics",
    "question": "What is the difference between Gross National Product (GNP) and Gross Domestic Product (GDP)?",
    "answer": "Net Factor Income from Abroad (NFIA)",
    "options": [
      "Net Indirect Taxes (NIT)",
      "Subsidies paid by the government",
      "Net Factor Income from Abroad (NFIA)",
      "Depreciation (Consumption of Fixed Capital)"
    ],
    "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA). NFIA accounts for earnings of residents abroad minus non-residents domestically.",
    "tip": "GNP = GDP + NFIA.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-485",
    "categoryId": "economics",
    "question": "National Income of a country at factor cost is formally defined in national accounting as:",
    "answer": "Net National Product at Factor Cost (NNP at FC)",
    "options": [
      "Net National Product at Factor Cost (NNP at FC)",
      "Personal Disposable Income",
      "Gross Domestic Product at Market Price (GDP at MP)",
      "Gross National Product at Market Price (GNP at MP)"
    ],
    "explanation": "National Income = NNP at Factor Cost = GDP at MP - Depreciation + NFIA - Net Indirect Taxes.",
    "tip": "National Income = NNP at FC.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-486",
    "categoryId": "economics",
    "question": "The Cash Reserve Ratio (CRR) is the percentage of a bank's:",
    "answer": "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India",
    "options": [
      "Current deposits loaned to priority agricultural sectors",
      "Foreign exchange reserves held with commercial banks",
      "Total capital kept invested in government gold bonds",
      "Net Demand and Time Liabilities (NDTL) kept as cash reserves with the Reserve Bank of India"
    ],
    "explanation": "CRR mandates commercial banks to hold a specified fraction of their NDTL in liquid cash with the RBI.",
    "tip": "CRR = Percentage of NDTL deposited in cash with RBI.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-487",
    "categoryId": "economics",
    "question": "What happens to the money supply in the economy when the Reserve Bank of India INCREASES the Repo Rate?",
    "answer": "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
    "options": [
      "Stock market liquidity doubles immediately",
      "Commercial bank borrowing costs rise, reducing lending and contracting money supply",
      "Interest rates on loans fall to zero",
      "Money supply increases sharply, boosting inflation"
    ],
    "explanation": "A repo rate hike makes central bank borrowing costlier for commercial banks, curbing credit creation and controlling inflation.",
    "tip": "Repo Rate hike contracts credit & money supply.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-488",
    "categoryId": "economics",
    "question": "What is the \"Fiscal Deficit\" in the Union Budget of India?",
    "answer": "Total Expenditure minus Total Receipts excluding Borrowings",
    "options": [
      "Revenue Expenditure minus Revenue Receipts",
      "Fiscal Deficit minus Interest Payments",
      "Total Exports minus Total Imports",
      "Total Expenditure minus Total Receipts excluding Borrowings"
    ],
    "explanation": "Fiscal Deficit represents total borrowings required by the government: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts).",
    "tip": "Fiscal Deficit = Total Expenditure - Total Receipts (excl. borrowings).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-489",
    "categoryId": "economics",
    "question": "What is the \"Primary Deficit\"?",
    "answer": "Fiscal Deficit minus Interest Payments on previous loans",
    "options": [
      "Current Account Deficit plus Trade Deficit",
      "Fiscal Deficit minus Interest Payments on previous loans",
      "Revenue Deficit minus Capital Expenditure",
      "Total Borrowings minus Forex Reserves"
    ],
    "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates government borrowing requirements for current expenses excluding past debt service.",
    "tip": "Primary Deficit = Fiscal Deficit - Interest Payments.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-490",
    "categoryId": "economics",
    "question": "Which landmark economic reforms were launched in India in July 1991 under the New Economic Policy?",
    "answer": "LPG Reforms (Liberalization, Privatization, and Globalization)",
    "options": [
      "Green Revolution",
      "Nationalization of Commercial Banks",
      "First Five Year Plan",
      "LPG Reforms (Liberalization, Privatization, and Globalization)"
    ],
    "explanation": "The 1991 reforms dismantled the License Raj, opened foreign investment, reduced tariffs, and privatized state enterprises.",
    "tip": "1991 Reforms = Liberalization, Privatization, Globalization (LPG).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-491",
    "categoryId": "economics",
    "question": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on which historic date?",
    "answer": "1 January 2015",
    "options": [
      "1 January 2015",
      "15 August 2014",
      "1 April 2015",
      "31 October 2019"
    ],
    "explanation": "NITI Aayog was established by a Cabinet resolution on 1 January 2015 to serve as a policy think-tank promoting cooperative federalism.",
    "tip": "NITI Aayog established on 1 January 2015.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-492",
    "categoryId": "economics",
    "question": "Who defined economics as \"the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses\"?",
    "answer": "Lionel Robbins (Scarcity Definition)",
    "options": [
      "Alfred Marshall (Welfare Definition)",
      "Lionel Robbins (Scarcity Definition)",
      "Adam Smith (Wealth Definition)",
      "Paul Samuelson (Growth Definition)"
    ],
    "explanation": "Lionel Robbins proposed the Scarcity definition in 1932 in his essay \"Nature and Significance of Economic Science\".",
    "tip": "Robbins = Scarcity Definition (1932).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-493",
    "categoryId": "economics",
    "question": "What is the consumer's equilibrium condition under the Indifference Curve approach?",
    "answer": "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
    "options": [
      "Price of X equals Price of Y",
      "Marginal Rate of Substitution (MRSxy) equals Price Ratio (Px / Py)",
      "Marginal Utility equals Total Utility",
      "Budget Line intersects the origin"
    ],
    "explanation": "Equilibrium occurs at the point of tangency where slope of Indifference Curve (MRSxy) equals slope of Budget Line (Px/Py).",
    "tip": "Consumer Equilibrium: MRSxy = Px / Py.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-494",
    "categoryId": "economics",
    "question": "Why are Indifference Curves normally convex to the origin?",
    "answer": "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
    "options": [
      "Due to the operation of the Law of Diminishing Marginal Rate of Substitution (MRSxy)",
      "Because commodities are perfect substitutes",
      "Due to increasing marginal utility of income",
      "Because total utility remains constant at all prices"
    ],
    "explanation": "As a consumer acquires more of good X, they are willing to give up less of good Y, causing diminishing MRS and convexity.",
    "tip": "Diminishing MRS makes IC convex to origin.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-495",
    "categoryId": "economics",
    "question": "In a situation where Price Elasticity of Demand (|Ed|) is equal to 1 (Unitary Elasticity), a 10% increase in price will lead to:",
    "answer": "A 10% decrease in quantity demanded",
    "options": [
      "A 10% decrease in quantity demanded",
      "A 20% decrease in quantity demanded",
      "No change in quantity demanded",
      "A 5% increase in quantity demanded"
    ],
    "explanation": "Unitary elasticity means the percentage change in quantity demanded exactly matches the percentage change in price.",
    "tip": "|Ed| = 1: %ΔQ = %ΔP.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-496",
    "categoryId": "economics",
    "question": "Goods for which demand increases as consumer income decreases (negative income elasticity of demand) are termed:",
    "answer": "Inferior Goods",
    "options": [
      "Luxury Goods",
      "Normal Goods",
      "Complementary Goods",
      "Inferior Goods"
    ],
    "explanation": "Inferior goods have negative income elasticity; as consumers become wealthier, they substitute them for superior goods.",
    "tip": "Inferior Goods = Demand drops as Income rises.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-497",
    "categoryId": "economics",
    "question": "According to David Ricardo, \"Economic Rent\" is paid for the use of the:",
    "answer": "Original and indestructible powers of the soil",
    "options": [
      "Capital equipment manufactured by humans",
      "Entrepreneurial risk-taking abilities",
      "Fluctuations in agricultural market prices",
      "Original and indestructible powers of the soil"
    ],
    "explanation": "Ricardo defined rent as that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil.",
    "tip": "Ricardian Rent = Original & indestructible powers of soil.",
    "difficulty": "beginner"
  },
  {
    "id": "econ-498",
    "categoryId": "economics",
    "question": "Under Perfect Competition, the demand curve facing an individual firm is:",
    "answer": "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)",
    "options": [
      "Kinked at the prevailing price",
      "Downward sloping to the right",
      "Vertical straight line parallel to price axis",
      "Perfectively elastic (Horizontal straight line at market price, P = AR = MR)"
    ],
    "explanation": "An individual competitive firm is a price taker; it can sell any quantity at the market price, making demand infinitely elastic (horizontal).",
    "tip": "Perfect Competition = Horizontal demand curve (P = AR = MR).",
    "difficulty": "beginner"
  },
  {
    "id": "econ-499",
    "categoryId": "economics",
    "question": "The \"Kinked Demand Curve\" hypothesis in oligopoly markets was formulated by Paul Sweezy to explain:",
    "answer": "Price Rigidity (stickiness of prices)",
    "options": [
      "Monopoly profit maximization",
      "Perfect price discrimination",
      "Price Rigidity (stickiness of prices)",
      "Excessive advertising expenditures"
    ],
    "explanation": "Sweezy's model assumes competitors will match price cuts but ignore price increases, producing a kink in the demand curve and price rigidity.",
    "tip": "Kinked Demand Curve (Sweezy) = Price Rigidity in Oligopoly.",
    "difficulty": "intermediate"
  },
  {
    "id": "econ-500",
    "categoryId": "economics",
    "question": "In the Law of Variable Proportions (Short-Run Production), which stage is considered the \"Rational Stage\" where a producer operates?",
    "answer": "Stage II (Stage of Diminishing Returns)",
    "options": [
      "Stage IV",
      "Stage I (Stage of Increasing Returns)",
      "Stage III (Stage of Negative Returns)",
      "Stage II (Stage of Diminishing Returns)"
    ],
    "explanation": "In Stage II, both MP and AP are positive but declining, and total product reaches its maximum at the end of Stage II (MP = 0).",
    "tip": "Rational production occurs in Stage II.",
    "difficulty": "intermediate"
  }
];
