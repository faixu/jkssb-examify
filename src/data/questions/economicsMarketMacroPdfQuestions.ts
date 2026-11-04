import { Flashcard } from '../../types';

/**
 * Economics Practice Sets: Market Structures, Forms of Market (50 Basic + 20 Statement-Based + 50 Advanced MCQs),
 * Famous Economists & Their Contributions, National Income Accounting (30 Exam MCQs),
 * and 20 Macroeconomic & Monetary Numericals (CA Hardik Manchanda Set)
 */
export const ECONOMICS_MARKET_MACRO_PDF_QUESTIONS: Flashcard[] = [
  // =========================================================================
  // PART 1: Market and Forms of Market — Core MCQs (Q1 – Q50)
  // =========================================================================
  {
    id: 'econ-mkt-pdf-1',
    categoryId: 'economics',
    question: "In economics, a 'Market' refers to:",
    answer: 'A system or arrangement where buyers and sellers interact.',
    options: [
      'A specific geographical location or building.',
      'A system or arrangement where buyers and sellers interact.',
      'A place where only essential goods are sold.',
      'A shop owned by a single person.',
    ],
    explanation:
      'In economics, a market is not restricted to a physical place; it is any institutional system or arrangement that enables buyers and sellers to communicate and exchange goods or services.',
    tip: 'Economic market = Any arrangement for buyer-seller interaction (physical or digital).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-2',
    categoryId: 'economics',
    question: 'Which of the following is NOT a necessary component of a market?',
    answer: 'A fixed geographical boundary.',
    options: [
      'Buyers and Sellers.',
      'A commodity or service.',
      'A fixed geographical boundary.',
      'Interaction between demand and supply.',
    ],
    explanation:
      'In the modern era of e-commerce and global trade, a market does not require a fixed physical or geographical boundary.',
    tip: 'Physical location is NOT required for an economic market.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-3',
    categoryId: 'economics',
    question: "On the basis of 'Area', markets can be classified into:",
    answer: 'Local, Regional, National, and International.',
    options: [
      'Local, Regional, National, and International.',
      'Very Short Period, Short Period, and Long Period.',
      'Perfect and Imperfect.',
      'Wholesale and Retail.',
    ],
    explanation:
      'Area-based classification categorizes markets by geographical reach: Local, Regional, National, and International. Time-based classification was introduced by Alfred Marshall.',
    tip: 'Area = Local/Regional/National/International; Time = Very Short/Short/Long.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-4',
    categoryId: 'economics',
    question:
      'Which market structure is characterized by a "Large number of buyers and sellers selling homogeneous products"?',
    answer: 'Perfect Competition',
    options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopolistic Competition'],
    explanation:
      'Perfect Competition features a very large number of buyers and sellers dealing in identical (homogeneous) products with free entry and exit.',
    tip: 'Many sellers + Homogeneous product = Perfect Competition.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-5',
    categoryId: 'economics',
    question: 'In a perfectly competitive market, a firm is a:',
    answer: 'Price Taker',
    options: ['Price Maker', 'Price Taker', 'Price Discriminator', 'Price Leader'],
    explanation:
      'Because products are identical and each firm produces a negligible fraction of industry output, an individual firm must accept the market-determined equilibrium price (Price Taker).',
    tip: 'Perfect Competition: Industry is Price Maker; Firm is Price Taker.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-6',
    categoryId: 'economics',
    question: 'The demand curve for a firm under perfect competition is:',
    answer: 'Perfectly Elastic (Horizontal)',
    options: [
      'Downward sloping',
      'Upward sloping',
      'Perfectly Elastic (Horizontal)',
      'Perfectly Inelastic (Vertical)',
    ],
    explanation:
      'A perfectly competitive firm can sell any quantity at the prevailing market price, so its demand (AR) curve is a horizontal straight line parallel to the X-axis (Ed = ∞).',
    tip: 'Perfectly competitive firm demand curve: Horizontal line (P = AR = MR, Ed = ∞).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-7',
    categoryId: 'economics',
    question: 'Under perfect competition, the conditions for firm profit-maximizing equilibrium are:',
    answer: 'MR = MC and MC must cut MR from below',
    options: [
      'MR > MC',
      'MR < MC',
      'MR = MC and MC must cut MR from below',
      'AR = AC',
    ],
    explanation:
      'The first-order condition for profit maximization is MR = MC, and the second-order stability condition requires the MC curve to be rising (cutting MR from below).',
    tip: 'Equilibrium: (1) MR = MC, and (2) MC cuts MR from below.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-8',
    categoryId: 'economics',
    question: 'In the long run, a perfectly competitive firm earns only:',
    answer: 'Normal Profits',
    options: ['Abnormal Profits', 'Sub-normal Profits', 'Normal Profits', 'Super-normal Profits'],
    explanation:
      'Due to free entry and exit of firms in the long run, any short-run super-normal profit attracts new entrants (increasing supply and lowering price) until P = Minimum LAC (Normal Profit).',
    tip: 'Free entry and exit guarantee only Normal Profits in the long run.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-9',
    categoryId: 'economics',
    question: 'Which of the following is a feature of Perfect Competition?',
    answer: 'Perfect Knowledge',
    options: [
      'Product Differentiation',
      'Selling Costs',
      'Perfect Knowledge',
      'Barriers to Entry',
    ],
    explanation:
      'Under Perfect Competition, buyers and sellers have perfect knowledge (information) about market prices, product quality, and technology, ensuring a uniform price across the market.',
    tip: 'Perfect knowledge of market conditions is a core assumption of Perfect Competition.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-10',
    categoryId: 'economics',
    question: 'A market structure with a single seller and no close substitutes is called:',
    answer: 'Monopoly',
    options: ['Duopoly', 'Monopoly', 'Monopsony', 'Oligopoly'],
    explanation:
      'Monopoly ("mono" = single, "poly" = seller) is a market structure where a single firm is the sole producer of a product with no close substitutes.',
    tip: 'Single seller + No close substitutes = Monopoly.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-11',
    categoryId: 'economics',
    question: 'A monopolist is a:',
    answer: 'Price Maker',
    options: ['Price Taker', 'Price Maker', 'Quantity Taker', 'None of the above'],
    explanation:
      'Because the monopolist constitutes the entire industry, the firm has substantial market power to set the price of its product (though it cannot set both price and quantity independently of demand).',
    tip: 'Monopolist = Price Maker (Firm and Industry are one and the same).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-12',
    categoryId: 'economics',
    question: 'The demand curve of a Monopoly firm is:',
    answer: 'Downward sloping and less elastic',
    options: [
      'Horizontal',
      'Upward sloping',
      'Downward sloping and less elastic',
      'Downward sloping and highly elastic',
    ],
    explanation:
      'To sell additional units, a monopolist must lower the price, so the demand (AR) curve slopes downward; because there are no close substitutes, it is relatively steep (less elastic) than under monopolistic competition.',
    tip: 'Monopoly demand curve = Downward sloping and relatively steep (less elastic).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-13',
    categoryId: 'economics',
    question: 'Price Discrimination is a characteristic feature of:',
    answer: 'Monopoly',
    options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'Oligopoly'],
    explanation:
      'A monopolist can practice price discrimination—charging different prices to different buyers or in different markets for the same product not justified by cost differences.',
    tip: 'Price discrimination is a hallmark of Monopoly.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-14',
    categoryId: 'economics',
    question: 'What is the relationship between AR and MR in a Monopoly?',
    answer: 'AR > MR',
    options: ['AR = MR', 'AR < MR', 'AR > MR', 'AR = 0'],
    explanation:
      'Because a monopolist faces a downward-sloping demand (AR) curve and must reduce the price on all units to sell an extra unit, Marginal Revenue (MR) falls twice as fast and always lies below Average Revenue (AR > MR).',
    tip: 'In Imperfect Competition (Monopoly/Monopolistic), AR > MR.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-15',
    categoryId: 'economics',
    question: 'Which of the following is a reason for the existence of Monopoly?',
    answer: 'All of the above',
    options: [
      'Patent Rights',
      'Control over raw materials',
      'Government Licensing',
      'All of the above',
    ],
    explanation:
      'Monopolies arise due to strong barriers to entry including exclusive patent/copyright laws, ownership of strategic raw materials, government charters/licensing, and natural economies of scale.',
    tip: 'Patents, resource control, and licensing all create monopoly barriers.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-16',
    categoryId: 'economics',
    question: 'The theory of Monopolistic Competition was developed by:',
    answer: 'E.H. Chamberlin',
    options: ['Adam Smith', 'E.H. Chamberlin', 'Joan Robinson', 'Alfred Marshall'],
    explanation:
      'Edward Hastings Chamberlin developed the theory of Monopolistic Competition in his 1933 book "The Theory of Monopolistic Competition" (while Joan Robinson published "The Economics of Imperfect Competition" in 1933).',
    tip: 'Monopolistic Competition = E.H. Chamberlin (1933).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-17',
    categoryId: 'economics',
    question: 'The most important distinguishing feature of Monopolistic Competition is:',
    answer: 'Product Differentiation',
    options: ['Homogeneous Product', 'Product Differentiation', 'Single Seller', 'Interdependence'],
    explanation:
      'Under Monopolistic Competition, many sellers offer products that are close substitutes but differentiated by brand name, packaging, quality, design, or customer service.',
    tip: 'Monopolistic Competition = Many sellers + Product Differentiation.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-18',
    categoryId: 'economics',
    question: 'Selling Costs (Advertising and Marketing) are essential in which market?',
    answer: 'Monopolistic Competition',
    options: [
      'Perfect Competition',
      'Monopoly',
      'Monopolistic Competition',
      'None of the above',
    ],
    explanation:
      'Because firms sell differentiated close substitutes under Monopolistic Competition, persuasive advertising and selling costs are essential to build brand loyalty and shift demand.',
    tip: 'Selling costs are a signature feature of Monopolistic Competition.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-19',
    categoryId: 'economics',
    question: 'The demand curve for a firm under Monopolistic Competition is:',
    answer: 'More elastic than Monopoly',
    options: [
      'More elastic than Monopoly',
      'Less elastic than Monopoly',
      'Perfectly Inelastic',
      'Horizontal',
    ],
    explanation:
      'Because many close substitutes exist in Monopolistic Competition, consumers are much more responsive to price changes, making the firm’s demand curve flatter (more elastic) than a Monopoly’s demand curve.',
    tip: 'Monopolistic Competition AR curve is flatter (more elastic) than Monopoly AR curve.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-20',
    categoryId: 'economics',
    question: 'In Monopolistic Competition, firms can earn super-normal profits only in the:',
    answer: 'Short run',
    options: ['Long run', 'Short run', 'Both A and B', 'Never'],
    explanation:
      'In the short run, a monopolistically competitive firm can earn super-normal profits, normal profits, or losses. In the long run, free entry of new brands erodes super-normal profits until firms earn only normal profits (P = LAC).',
    tip: 'Monopolistic Competition: Super-normal profit in Short Run only; Normal profit in Long Run.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-21',
    categoryId: 'economics',
    question: 'A market dominated by a "few large sellers" is known as:',
    answer: 'Oligopoly',
    options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopsony'],
    explanation:
      'Oligopoly ("oligi" = few, "polein" = to sell) is a market structure where a small number of large firms (typically 3 to 10) control the vast majority of market share.',
    tip: 'Competition among the few = Oligopoly.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-22',
    categoryId: 'economics',
    question: '"Mutual Interdependence" between firms in price and output decisions is the main feature of:',
    answer: 'Oligopoly',
    options: ['Monopoly', 'Monopolistic Competition', 'Oligopoly', 'Perfect Competition'],
    explanation:
      'Because there are only a few large rivals in an Oligopoly, any change in price, output, or advertising by one firm provokes immediate strategic counter-moves from competitors.',
    tip: 'Strategic interdependence = Defining feature of Oligopoly.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-23',
    categoryId: 'economics',
    question: 'Paul Sweezy’s Kinked Demand Curve theory explains:',
    answer: 'Price Rigidity',
    options: ['Price Flexibility', 'Price Rigidity', 'Price Leadership', 'Collusion'],
    explanation:
      'Developed by Paul M. Sweezy (1939), the Kinked Demand Curve model explains why prices in non-collusive oligopolies tend to remain rigid/sticky at the prevailing price level.',
    tip: 'Kinked Demand Curve (Paul Sweezy) = Price Rigidity in Oligopoly.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-24',
    categoryId: 'economics',
    question: 'A Cartel (such as OPEC) is an example of:',
    answer: 'Collusive Oligopoly',
    options: [
      'Pure Oligopoly',
      'Collusive Oligopoly',
      'Non-collusive Oligopoly',
      'Perfect Competition',
    ],
    explanation:
      'When oligopolistic firms formally agree to fix prices and restrict output quotas to maximize joint profits like a monopoly, they form a Cartel (Collusive/Cooperative Oligopoly).',
    tip: 'Cartel (e.g., OPEC) = Collusive Oligopoly.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-25',
    categoryId: 'economics',
    question: 'When exactly two firms dominate a market, it is called:',
    answer: 'Duopoly',
    options: ['Monopoly', 'Duopoly', 'Oligopoly', 'Monopolistic Competition'],
    explanation:
      'Duopoly is a special two-firm case of oligopoly where two sellers control the entire market supply.',
    tip: 'Two sellers = Duopoly (special case of Oligopoly).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-26',
    categoryId: 'economics',
    question: 'Marginal Revenue (MR) is defined as:',
    answer: 'Change in TR / Change in Quantity',
    options: [
      'Total Revenue / Total Quantity',
      'Change in TR / Change in Quantity',
      'Price × Quantity',
      'Average Revenue + Price',
    ],
    explanation:
      'Marginal Revenue is the rate of change of Total Revenue with respect to quantity sold: MR = ΔTR / ΔQ (or TRn - TRn-1).',
    tip: 'MR = ΔTR / ΔQ; AR = TR / Q = Price.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-27',
    categoryId: 'economics',
    question: 'If Marginal Revenue (MR) is positive, then Total Revenue (TR):',
    answer: 'Increases',
    options: ['Falls', 'Is constant', 'Increases', 'Is zero'],
    explanation:
      'As long as each additional unit sold adds a positive amount to revenue (MR > 0), Total Revenue (TR) continues to increase.',
    tip: 'MR > 0 => TR rises; MR = 0 => TR is maximum; MR < 0 => TR falls.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-28',
    categoryId: 'economics',
    question: 'When Marginal Revenue (MR) is Zero, Total Revenue (TR) is:',
    answer: 'Maximum',
    options: ['Zero', 'Minimum', 'Maximum', 'Negative'],
    explanation:
      'Total Revenue reaches its maximum point at the output level where Marginal Revenue equals zero (MR = 0) and price elasticity of demand is unitary (|Ed| = 1).',
    tip: 'When MR = 0, TR is at its Maximum.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-29',
    categoryId: 'economics',
    question: 'Average Revenue (AR) is always equal to:',
    answer: 'Price',
    options: ['Marginal Revenue', 'Total Cost', 'Price', 'Incremental Revenue'],
    explanation:
      'Since Total Revenue (TR) = Price (P) × Quantity (Q), Average Revenue is AR = TR / Q = (P × Q) / Q = Price across all market structures.',
    tip: 'AR = TR / Q = Price in every market form.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-30',
    categoryId: 'economics',
    question: 'If the price of a commodity is ₹10 and 5 units are sold, the Total Revenue (TR) is:',
    answer: '₹50',
    options: ['₹2', '₹50', '₹15', '₹0.5'],
    explanation: 'Total Revenue (TR) = Price × Quantity = ₹10 × 5 = ₹50.',
    tip: 'TR = P × Q = 10 × 5 = ₹50.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-31',
    categoryId: 'economics',
    question: 'Equilibrium price in a competitive market is determined by the intersection of:',
    answer: 'Market Demand and Market Supply',
    options: [
      'Total Utility and Total Cost',
      'Market Demand and Market Supply',
      'AR and AC',
      'Fixed Cost and Variable Cost',
    ],
    explanation:
      'Alfred Marshall compared market demand and market supply to the two blades of a pair of scissors; their intersection determines the market-clearing equilibrium price and quantity.',
    tip: 'Market Equilibrium occurs where Market Demand = Market Supply.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-32',
    categoryId: 'economics',
    question: 'An increase in market demand, keeping supply constant, leads to:',
    answer: 'Rise in price',
    options: ['Fall in price', 'Rise in price', 'No change in price', 'Fall in quantity'],
    explanation:
      'A rightward shift in the market demand curve along an upward-sloping supply curve creates excess demand at the old price, bidding up both equilibrium price and equilibrium quantity.',
    tip: 'Demand ↑ (Supply constant) => Equilibrium Price ↑ and Quantity ↑.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-33',
    categoryId: 'economics',
    question: 'A Government Price Ceiling (maximum legal price) is usually imposed on:',
    answer: 'Essential goods',
    options: ['Luxury goods', 'Essential goods', 'Capital goods', 'Imported goods'],
    explanation:
      'A binding Price Ceiling is set below the market equilibrium price on essential goods (like foodgrains, life-saving medicines, or rent control) to make them affordable for vulnerable consumers.',
    tip: 'Price Ceiling = Set BELOW equilibrium price to protect consumers on essential goods.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-34',
    categoryId: 'economics',
    question: 'A Floor Price (such as Minimum Support Price - MSP) is fixed by the government:',
    answer: 'Above the equilibrium price',
    options: [
      'Below the equilibrium price',
      'Above the equilibrium price',
      'At the equilibrium price',
      'By the consumers',
    ],
    explanation:
      'A binding Price Floor (such as agricultural MSP or minimum wage laws) is set above the equilibrium market price to guarantee producers/workers a minimum remunerative return.',
    tip: 'Price Floor (MSP) = Set ABOVE equilibrium price to protect producers/farmers.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-35',
    categoryId: 'economics',
    question: 'Which market structure has no "Unique Supply Curve"?',
    answer: 'Both Monopoly and Monopolistic Competition',
    options: [
      'Perfect Competition',
      'Monopoly only',
      'Monopolistic Competition only',
      'Both Monopoly and Monopolistic Competition',
    ],
    explanation:
      'Under imperfect competition (Monopoly and Monopolistic Competition), output and price decisions depend simultaneously on marginal cost and the elasticity/slope of demand, so there is no unique one-to-one relation between price and quantity supplied.',
    tip: 'Firms with market power (Monopoly/Monopolistic) do NOT have a unique supply curve.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-pdf-36',
    categoryId: 'economics',
    question: "A 'Natural Monopoly' arises primarily due to:",
    answer: 'Huge economies of scale (constantly declining Average Costs)',
    options: [
      'Government legislation',
      'Huge economies of scale (constantly declining Average Costs)',
      'Small market size',
      'Use of local technology',
    ],
    explanation:
      'A Natural Monopoly (such as railways, electricity grids, or municipal water pipelines) occurs when economies of scale are so vast that a single firm can supply the entire market at a lower average cost than two or more competing firms.',
    tip: 'Natural Monopoly = Subadditive costs / Constantly declining Long-Run Average Cost (LAC).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-pdf-37',
    categoryId: 'economics',
    question: 'Which market structure is also known as "Group Equilibrium" in economic theory?',
    answer: 'Monopolistic Competition',
    options: ['Monopoly', 'Monopolistic Competition', 'Duopoly', 'Perfect Competition'],
    explanation:
      'E.H. Chamberlin coined the term "Group" instead of "Industry" for Monopolistic Competition because firms produce differentiated products rather than a single homogeneous commodity.',
    tip: 'Chamberlin’s "Group Equilibrium" = Monopolistic Competition.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-pdf-38',
    categoryId: 'economics',
    question: 'A market where there is only ONE buyer and many sellers is called:',
    answer: 'Monopsony',
    options: ['Monopoly', 'Monopsony', 'Oligopoly', 'Perfect Competition'],
    explanation:
      'Monopsony is a market condition heavily weighted on the demand side where a single buyer (e.g., defence procurement or a single company town employer) faces many sellers.',
    tip: 'Single Seller = Monopoly; Single Buyer = Monopsony; Single Buyer + Single Seller = Bilateral Monopoly.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-pdf-39',
    categoryId: 'economics',
    question: '"Homogeneous products" are sold in:',
    answer: 'Both Perfect Competition and Pure Oligopoly',
    options: [
      'Perfect Competition only',
      'Pure Oligopoly only',
      'Both Perfect Competition and Pure Oligopoly',
      'Monopolistic Competition',
    ],
    explanation:
      'Homogeneous (identical) products are sold both in Perfect Competition and in Pure (Undifferentiated) Oligopoly industries such as cement, steel, aluminum, and crude oil.',
    tip: 'Pure Oligopoly (steel, cement, oil) also sells homogeneous products.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-pdf-40',
    categoryId: 'economics',
    question: '"Price Leadership" is a characteristic feature of:',
    answer: 'Non-collusive Oligopoly',
    options: [
      'Collusive Oligopoly',
      'Non-collusive Oligopoly',
      'Monopoly',
      'Perfect Competition',
    ],
    explanation:
      'In an oligopoly without formal cartel agreements, tacit coordination often occurs through Price Leadership (dominant firm, barometric, or low-cost firm sets the price and others follow).',
    tip: 'Price Leadership = Tacit coordination in Oligopoly.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-pdf-41',
    categoryId: 'economics',
    question: 'In the very short period (Market Period), the supply of a commodity is:',
    answer: 'Perfectly Inelastic',
    options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary Elastic', 'Highly Elastic'],
    explanation:
      'In Alfred Marshall’s Market Period (very short period), production cannot be increased at all because all factors are fixed, so supply is limited to existing stock and the supply curve is vertical (Perfectly Inelastic, Es = 0).',
    tip: 'Very short period (Market Period) supply = Perfectly Inelastic (Vertical).',
    difficulty: 'beginner',
  },

  // =========================================================================
  // PART 2: Statement-Based & Advanced Market Structures MCQs
  // =========================================================================
  {
    id: 'econ-mkt-adv-1',
    categoryId: 'economics',
    question:
      'Regarding the Kinked Demand Curve Theory:\nI. It explains price rigidity in an Oligopoly.\nII. The upper portion of the curve (above prevailing price) is highly elastic.\nIII. The lower portion of the curve (below prevailing price) is relatively inelastic.\nWhich of the statements given above are correct?',
    answer: 'I, II, and III',
    options: ['I and II only', 'I and III only', 'II and III only', 'I, II, and III'],
    explanation:
      'In Sweezy’s model, rivals ignore price increases (making the upper segment highly elastic) but match price cuts (making the lower segment inelastic), creating a kink at the prevailing price and a vertical gap in MR.',
    tip: 'Kinked Demand: Upper part = Elastic; Lower part = Inelastic; MR has a vertical discontinuity.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-2',
    categoryId: 'economics',
    question:
      'Examine the statements on Price Discrimination:\nI. It is practiced under Monopoly.\nII. It involves charging different prices from different consumers for the same product.\nIII. The sub-markets must be separable so resale is not possible.\nIV. Price elasticity of demand must be different in different sub-markets.\nWhich are correct?',
    answer: 'All of the above (I, II, III, and IV)',
    options: [
      'I and II only',
      'II, III, and IV only',
      'I, III, and IV only',
      'All of the above (I, II, III, and IV)',
    ],
    explanation:
      'Successful third-degree price discrimination requires monopoly power, market segmentation (no arbitrage/resale), and differing price elasticities across sub-markets so MR1 = MR2 = MC.',
    tip: 'Price discrimination requires Monopoly power + Market separation + Different elasticities.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-3',
    categoryId: 'economics',
    question: "A perfectly competitive firm's short-run supply curve is the:",
    answer: 'Rising part of its MC curve above the Average Variable Cost (AVC).',
    options: [
      'Rising part of its Marginal Cost (MC) curve.',
      'Rising part of its MC curve above the Average Variable Cost (AVC).',
      'Rising part of its MC curve above the Average Total Cost (ATC).',
      'The entire Marginal Revenue (MR) curve.',
    ],
    explanation:
      'In the short run, a competitive firm sets P = MC provided price covers at least Average Variable Cost (P ≥ Minimum AVC). Below minimum AVC, the firm shuts down. In the long run, it is the rising MC curve above Minimum LAC.',
    tip: 'Short-run supply curve = Rising MC above Min AVC; Long-run supply curve = Rising LMC above Min LAC.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-4',
    categoryId: 'economics',
    question: 'The Lerner Index of Monopoly Power is calculated as:',
    answer: '(P - MC) / P',
    options: ['(P - MC) / P', '(MC - P) / P', 'P / (P - MC)', '1 / e (where e is positive)'],
    explanation:
      'Abba Lerner’s Index L = (P - MC) / P = 1 / |Ed| measures a firm’s degree of monopoly markup power. Under perfect competition P = MC so L = 0; higher L (between 0 and 1) indicates greater monopoly power.',
    tip: 'Lerner Index L = (P - MC) / P = 1 / |Ed|.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-mkt-adv-5',
    categoryId: 'economics',
    question:
      'If the inverse demand curve of a monopolist is P = 100 - 2Q, what is the Marginal Revenue (MR) curve?',
    answer: 'MR = 100 - 4Q',
    options: ['MR = 100 - 2Q', 'MR = 50 - Q', 'MR = 100 - 4Q', 'MR = 200 - 4Q'],
    explanation:
      'Total Revenue TR = P × Q = (100 - 2Q)Q = 100Q - 2Q². Differentiating with respect to Q gives MR = d(TR)/dQ = 100 - 4Q. A linear inverse demand curve P = a - bQ always has MR = a - 2bQ (same intercept, twice the slope).',
    tip: 'If P = a - bQ, then MR = a - 2bQ.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-6',
    categoryId: 'economics',
    question: 'Deadweight Loss occurs in a monopoly because:',
    answer: 'The price is higher than the marginal cost (P > MC).',
    options: [
      'The monopolist earns super-normal profits.',
      'The price is higher than the marginal cost (P > MC).',
      'The monopolist produces where MR = MC.',
      'The consumer surplus is zero.',
    ],
    explanation:
      'Because a monopolist restricts output to where MR = MC and charges P > MC, output is below the socially optimal competitive level (where P = MC), creating a Deadweight Welfare Loss.',
    tip: 'Monopoly Deadweight Loss arises because P > MC (allocative inefficiency).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-7',
    categoryId: 'economics',
    question:
      'Under Third-Degree Price Discrimination, the monopolist will charge a higher price in the sub-market where:',
    answer: 'Demand is less elastic (inelastic).',
    options: [
      'Demand is more elastic.',
      'Demand is less elastic (inelastic).',
      'Demand is unitary elastic.',
      'The number of buyers is larger.',
    ],
    explanation:
      'From MR = P(1 - 1/|e|), equating MR across two markets gives P1(1 - 1/|e1|) = P2(1 - 1/|e2|). Therefore, the market with lower price elasticity (more inelastic demand) is charged a higher price.',
    tip: 'Inelastic sub-market pays a higher price; Elastic sub-market pays a lower price.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-8',
    categoryId: 'economics',
    question: 'Which condition represents the "Shut-down point" for a firm in the short run?',
    answer: 'P = Minimum AVC (or P < AVC leads to shutdown)',
    options: ['TR < TC', 'AR < AC', 'P = Minimum AVC (or P < AVC leads to shutdown)', 'MR < MC'],
    explanation:
      'In the short run, fixed costs are sunk. A firm continues operating at a loss as long as Price covers Average Variable Cost (P ≥ AVC). If P falls below minimum AVC, the firm shuts down immediately to limit losses to TFC.',
    tip: 'Short-run Shut-down Point: Price = Minimum AVC.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-mkt-adv-9',
    categoryId: 'economics',
    question:
      'What is the relationship between Price Elasticity of Demand (|e|) and the optimal Mark-up (P - MC)/P?',
    answer: 'Higher the elasticity |e|, lower the mark-up.',
    options: [
      'Higher the elasticity |e|, higher the mark-up.',
      'Higher the elasticity |e|, lower the mark-up.',
      'Mark-up is independent of elasticity |e|.',
      'Mark-up is equal to elasticity |e|.',
    ],
    explanation:
      'Since (P - MC)/P = 1/|e|, the optimal price mark-up over marginal cost is inversely proportional to the price elasticity of demand.',
    tip: 'Mark-up is inversely proportional to |Ed|.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-10',
    categoryId: 'economics',
    question: '"Excess Capacity" is a characteristic of which market structure in the long run?',
    answer: 'Monopolistic Competition',
    options: [
      'Perfect Competition',
      'Monopoly',
      'Monopolistic Competition',
      'None of the above',
    ],
    explanation:
      'In the long run under Monopolistic Competition, the downward-sloping demand curve is tangent to the U-shaped LAC curve to the left of its minimum point. The difference between ideal output (at min LAC) and actual output is Excess Capacity.',
    tip: 'Long-run Excess Capacity = Ideal Output (Min LAC) minus Actual Output in Monopolistic Competition.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-11',
    categoryId: 'economics',
    question: 'Under the Cournot Model of Duopoly/Oligopoly, firms compete by:',
    answer: 'Choosing the quantity of output simultaneously.',
    options: [
      'Setting prices simultaneously.',
      'Choosing the quantity of output simultaneously.',
      'Dividing the market geographically.',
      'Advertising only.',
    ],
    explanation:
      'In Augustin Cournot’s (1838) model, duopolists compete by choosing their output quantities simultaneously, each assuming the rival will keep its quantity constant.',
    tip: 'Cournot = Quantity competition; Bertrand = Price competition; Stackelberg = Leader-Follower quantity model.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-mkt-adv-12',
    categoryId: 'economics',
    question: 'In the Stackelberg Model of Oligopoly, the "Leader" firm:',
    answer: "Moves first and chooses its output quantity by anticipating the follower's reaction.",
    options: [
      'Sets the price first.',
      "Moves first and chooses its output quantity by anticipating the follower's reaction.",
      'Always earns less profit than the follower.',
      'Is the smaller firm.',
    ],
    explanation:
      'Stackelberg’s model is a sequential quantity-setting game where the dominant Leader commits to an output quantity first, incorporating the Follower’s Cournot reaction function.',
    tip: 'Stackelberg = Sequential first-mover Leader and second-mover Follower.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-mkt-adv-13',
    categoryId: 'economics',
    question: 'Under the Bertrand Model of Oligopoly, firms compete on:',
    answer: 'Price',
    options: ['Quantity', 'Price', 'Location', 'Quality'],
    explanation:
      'Joseph Bertrand (1883) modeled oligopolists competing by setting prices simultaneously, assuming rivals keep their prices constant. With homogeneous goods, Bertrand competition drives price down to marginal cost (P = MC).',
    tip: 'Bertrand Model = Price competition among oligopolists.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-mkt-adv-14',
    categoryId: 'economics',
    question: 'Which market structure guarantees "Allocative Efficiency" (P = MC) in equilibrium?',
    answer: 'Perfect Competition',
    options: ['Monopoly', 'Monopolistic Competition', 'Perfect Competition', 'Oligopoly'],
    explanation:
      'Allocative efficiency occurs when resources are allocated such that Price equals Marginal Cost (P = MC), maximizing total social surplus—guaranteed in Perfect Competition.',
    tip: 'Perfect Competition achieves both Allocative Efficiency (P = MC) and Productive Efficiency (P = Min LAC).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-15',
    categoryId: 'economics',
    question:
      'If Marginal Revenue (MR) is ₹10 and the Price Elasticity of Demand (|e|) is 2, what is the Price (AR)?',
    answer: '₹20',
    options: ['₹5', '₹20', '₹15', '₹10'],
    explanation:
      'Using the Amoroso-Robinson formula MR = P × (1 - 1/|e|): 10 = P × (1 - 1/2) => 10 = 0.5P => P = ₹20.',
    tip: 'Formula: MR = AR × (1 - 1/e) => 10 = AR × 0.5 => AR = ₹20.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-16',
    categoryId: 'economics',
    question:
      "If a monopolist's Marginal Cost is zero (MC = 0), the profit-maximizing equilibrium will occur where price elasticity of demand is:",
    answer: 'e = 1 (Unitary Elastic)',
    options: ['e = 0', 'e = 1 (Unitary Elastic)', 'e > 1', 'e = ∞'],
    explanation:
      'At profit maximization, MR = MC. Since MC = 0, MR must equal 0. From MR = P(1 - 1/|e|), MR = 0 when |e| = 1 (the midpoint of a linear demand curve where Total Revenue is maximized).',
    tip: 'When MC = 0, profit maximization coincides with Revenue Maximization (MR = 0, |e| = 1).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-17',
    categoryId: 'economics',
    question: 'In a market where there is only ONE buyer and ONE seller, it is called:',
    answer: 'Bilateral Monopoly',
    options: ['Duopoly', 'Bilateral Monopoly', 'Monopsony', 'Monopoly'],
    explanation:
      'A Bilateral Monopoly exists when a single seller (monopolist) faces a single buyer (monopsonist), so price and quantity are determined by bargaining power.',
    tip: 'One seller + One buyer = Bilateral Monopoly.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-18',
    categoryId: 'economics',
    question:
      'The condition for the long-run equilibrium of a perfectly competitive firm is:',
    answer: 'P = AR = MR = LMC = Minimum LAC',
    options: [
      'P = AR = MR = LMC = Minimum LAC',
      'P = MR = SMC only',
      'P = AVC',
      'P = TR',
    ],
    explanation:
      'In the long run under Perfect Competition, free entry and exit force price to the minimum point of the Long-Run Average Cost curve: P = AR = MR = SMC = LMC = SAC = Minimum LAC.',
    tip: 'Long-run competitive equilibrium: P = LMC = Minimum LAC.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-19',
    categoryId: 'economics',
    question:
      'If a monopolist is operating in the inelastic portion of its demand curve (|e| < 1), Marginal Revenue (MR) will be:',
    answer: 'Negative',
    options: ['Positive', 'Zero', 'Negative', 'Infinite'],
    explanation:
      'From MR = P(1 - 1/|e|), whenever |e| < 1, (1 - 1/|e|) is negative, so MR < 0. Consequently, a profit-maximizing monopolist (since MC ≥ 0) never operates in the inelastic portion of its demand curve.',
    tip: 'When |e| < 1, MR is negative. A monopolist always operates where |e| ≥ 1.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-mkt-adv-20',
    categoryId: 'economics',
    question: 'The demand for a factor of production (such as labor or machinery) is a:',
    answer: 'Derived demand',
    options: ['Direct demand', 'Derived demand', 'Joint demand', 'Autonomous demand'],
    explanation:
      'Factors of production are not demanded for direct personal consumption; they are demanded because of the consumer demand for the final goods and services they help produce (Derived Demand).',
    tip: 'Demand for factors of production is always a Derived Demand.',
    difficulty: 'beginner',
  },

  // =========================================================================
  // PART 3: Famous Economists & Their Contributions (PDF Table - 20 MCQs)
  // =========================================================================
  {
    id: 'econ-thinker-pdf-1',
    categoryId: 'economics',
    question:
      'Who defined Economics as a "Science of Wealth", authored "An Inquiry into the Nature and Causes of the Wealth of Nations" (1776), and propounded the Theory of Absolute Advantage?',
    answer: 'Adam Smith',
    options: ['Adam Smith', 'Alfred Marshall', 'Lionel Robbins', 'David Ricardo'],
    explanation:
      'Adam Smith, the Father of Economics, gave the Wealth Definition in his 1776 classic "The Wealth of Nations", championed laissez-faire capitalism, and formulated the Theory of Absolute Advantage in international trade.',
    tip: 'Adam Smith (1776) = Wealth Definition + Absolute Advantage + Laissez-faire.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-thinker-pdf-2',
    categoryId: 'economics',
    question:
      'Which economist gave the "Welfare Definition" of economics in "Principles of Economics" (1890) and introduced the concept of Consumer Surplus and Time Element in markets?',
    answer: 'Alfred Marshall',
    options: ['Lionel Robbins', 'Alfred Marshall', 'Paul A. Samuelson', 'A.C. Pigou'],
    explanation:
      'Alfred Marshall defined economics as a study of mankind in the ordinary business of life (material welfare definition) in "Principles of Economics" (1890), developing Consumer Surplus, Elasticity of Demand, and Time-Period Market Classification.',
    tip: 'Alfred Marshall = Welfare Definition + Principles of Economics + Consumer Surplus.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-thinker-pdf-3',
    categoryId: 'economics',
    question:
      'Who formulated the "Scarcity Definition" of economics ("unlimited wants and scarce means having alternative uses") in his 1932 book "An Essay on the Nature and Significance of Economic Science"?',
    answer: 'Lionel Robbins',
    options: ['Paul A. Samuelson', 'Lionel Robbins', 'J.M. Keynes', 'Adam Smith'],
    explanation:
      'Lionel Robbins defined economics as the science which studies human behavior as a relationship between ends (unlimited wants) and scarce means which have alternative uses, asserting that economics is neutral between ends.',
    tip: 'Lionel Robbins = Scarcity Definition + "Nature and Significance of Economic Science".',
    difficulty: 'beginner',
  },
  {
    id: 'econ-thinker-pdf-4',
    categoryId: 'economics',
    question:
      'Which Nobel Laureate gave the "Growth-Oriented Definition" of economics and formalized the modern theory of "Collective Consumption Goods" (Public Goods)?',
    answer: 'Paul A. Samuelson',
    options: ['Paul A. Samuelson', 'Milton Friedman', 'Joel Dean', 'Simon Kuznets'],
    explanation:
      'Paul A. Samuelson provided the dynamic growth-oriented definition of economics and formalized the theory of Public Goods (Collective Consumption Goods) and Revealed Preference.',
    tip: 'Paul Samuelson = Growth Definition + Revealed Preference + Public Goods.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-5',
    categoryId: 'economics',
    question:
      'Who defined Business (Managerial) Economics as "the use of economic analysis in the formulation of business policies"?',
    answer: 'Joel Dean',
    options: ['Joel Dean', 'Frank Knight', 'Joseph Schumpeter', 'George Stigler'],
    explanation:
      'Joel Dean, author of "Managerial Economics" (1951), defined Business Economics as the application of economic analysis to formulate business policies.',
    tip: 'Joel Dean = Father of Business / Managerial Economics.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-6',
    categoryId: 'economics',
    question:
      'Which economists explained the Law of Demand in terms of Substitution Effect and Income Effect using the Ordinal Indifference Curve approach?',
    answer: 'J.R. Hicks & R.G.D. Allen',
    options: [
      'J.R. Hicks & R.G.D. Allen',
      'Alfred Marshall & A.C. Pigou',
      'Paul Douglas & C.W. Cobb',
      'Eli Heckscher & Bertil Ohlin',
    ],
    explanation:
      'J.R. Hicks and R.G.D. Allen pioneered the Ordinal Utility (Indifference Curve) approach in 1934 and decomposed the Price Effect into the Substitution Effect and Income Effect.',
    tip: 'Hicks & Allen = Ordinal Indifference Curve Approach + Price Effect decomposition.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-thinker-pdf-7',
    categoryId: 'economics',
    question:
      'Who propounded the Uncertainty-Bearing Theory of Profit, stating that "Profit is the reward for bearing non-insurable uncertainties"?',
    answer: 'Frank H. Knight',
    options: ['Joseph Schumpeter', 'Frank H. Knight', 'J.B. Clark', 'F.B. Hawley'],
    explanation:
      'In "Risk, Uncertainty and Profit" (1921), Frank H. Knight distinguished between measurable insurable risk and unmeasurable non-insurable uncertainty, defining pure economic profit as the reward for bearing uncertainty.',
    tip: 'Frank Knight = "Profit is the reward of uncertainties".',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-8',
    categoryId: 'economics',
    question:
      'Which economist stated that the true function of an entrepreneur is to introduce "Innovation" and that business trade cycles are the result of waves of innovation?',
    answer: 'Joseph A. Schumpeter',
    options: ['Joseph A. Schumpeter', 'R.G. Hawtrey', 'Nicholas Kaldor', 'A.C. Pigou'],
    explanation:
      'Joseph Schumpeter developed the Innovation Theory of Profit and Trade Cycles, arguing that economic development and business cycles are driven by entrepreneurial innovations ("creative destruction").',
    tip: 'Schumpeter = Innovation Theory of Entrepreneur & Trade Cycles.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-9',
    categoryId: 'economics',
    question:
      'Match the Business Cycle theories with their respective economists:\n1. Purely Monetary Phenomenon — R.G. Hawtrey\n2. Waves of Optimism and Pessimism — A.C. Pigou\n3. Cobweb Theory — Nicholas Kaldor\nWhich of the above pairs are correctly matched?',
    answer: '1, 2, and 3',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2, and 3'],
    explanation:
      'R.G. Hawtrey held that the trade cycle is a purely monetary phenomenon; A.C. Pigou attributed cycles to psychological waves of business optimism and pessimism (and also classified the 3 Degrees of Price Discrimination); Nicholas Kaldor propounded the Cobweb Theory of agricultural price fluctuations.',
    tip: 'Hawtrey = Monetary cycle; Pigou = Optimism/Pessimism + 3 Degrees of Price Discrimination; Kaldor = Cobweb Theory.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-10',
    categoryId: 'economics',
    question:
      'Who introduced the concept of the "Demonstration Effect" in consumer behavior and relative income consumption theory?',
    answer: 'James Duesenberry',
    options: ['Thorstein Veblen', 'James Duesenberry', 'Sir Robert Giffen', 'Milton Friedman'],
    explanation:
      'James Duesenberry (1949) introduced the Demonstration Effect (and Relative Income Hypothesis), explaining how individuals imitate the consumption patterns of their neighbors or higher-income reference groups.',
    tip: 'James Duesenberry = Demonstration Effect; Thorstein Veblen = Conspicuous Consumption (Veblen Effect).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-11',
    categoryId: 'economics',
    question:
      'Which public finance economist introduced the term "Fiscal Federalism" and the 3-Branch Taxonomy of government functions (Allocation, Distribution, and Stabilization)?',
    answer: 'Richard Musgrave',
    options: ['Richard Musgrave', 'J.M. Keynes', 'George Akerlof', 'Irving Fisher'],
    explanation:
      'In "The Theory of Public Finance" (1959), Richard A. Musgrave classified the economic role of government into three branches—Resource Allocation, Income Redistribution, and Macroeconomic Stabilization—and coined the term Fiscal Federalism.',
    tip: 'Richard Musgrave = 3 Branches (Allocation, Distribution, Stabilization) + Fiscal Federalism.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-12',
    categoryId: 'economics',
    question:
      'Who authored "The Market for Lemons" explaining how asymmetric information leads to adverse selection in markets?',
    answer: 'George Akerlof',
    options: ['George Akerlof', 'Paul Krugman', 'George Stigler', 'Milton Friedman'],
    explanation:
      'George Akerlof (1970) analyzed the "Lemon Problem" in used-car markets, demonstrating how asymmetric information between buyers and sellers drives high-quality goods out of the market (adverse selection).',
    tip: 'George Akerlof = Lemon Problem (Asymmetric Information).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-thinker-pdf-13',
    categoryId: 'economics',
    question:
      'Which economists are associated with the following Money Demand theories?\n1. Quantity Theory of Money (MV = PT) — Irving Fisher\n2. Inventory Theoretic Approach to Transaction Demand — Baumol & Tobin\n3. Modern Quantity / Asset Price Theory of Demand for Money — Milton Friedman',
    answer: 'All three (1, 2, and 3) are correctly matched',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 only',
      'All three (1, 2, and 3) are correctly matched',
    ],
    explanation:
      'Irving Fisher formulated the Transaction Equation of Exchange (MV = PT); William Baumol and James Tobin developed the Square-Root Inventory Theoretic model of cash management; and Milton Friedman restated the Quantity Theory as an Asset Demand for Money.',
    tip: 'Fisher = MV=PT; Baumol-Tobin = Inventory Approach; Friedman = Asset/Permanent Income Money Demand.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-thinker-pdf-14',
    categoryId: 'economics',
    question:
      'Match the International Trade theories with their propounders:\n1. Theory of Comparative Advantage & Land as "Indestructible and Permanent" — David Ricardo\n2. Factor Endowment (Modern) Theory of Trade — Eli Heckscher & Bertil Ohlin\n3. New International Trade Theory (Economies of Scale) — Paul Krugman',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'David Ricardo gave the Theory of Comparative Cost Advantage (1817) and defined Rent as payment for the original and indestructible powers of the soil; Heckscher & Ohlin developed the Factor Endowment Theory; and Paul Krugman pioneered New Trade Theory.',
    tip: 'Absolute = Adam Smith; Comparative = Ricardo; Factor Endowment = Heckscher-Ohlin; New Trade = Krugman.',
    difficulty: 'intermediate',
  },

  // =========================================================================
  // PART 4: National Income Accounting — 30 Exam MCQs with Rationales
  // =========================================================================
  {
    id: 'econ-ni-pdf-1',
    categoryId: 'economics',
    question:
      "In the context of Indian national income accounting, which aggregate is formally recognized as 'National Income'?",
    answer: 'NNP at Factor Cost (NNP_FC)',
    options: [
      'GDP at Market Price',
      'NNP at Factor Cost (NNP_FC)',
      'GNP at Factor Cost',
      'NDP at Basic Prices',
    ],
    explanation:
      'Net National Product at Factor Cost (NNP_FC) measures the net factor income earned by normal residents of a country, free from depreciation and distortionary indirect taxes.',
    tip: 'National Income = NNP at Factor Cost (NNP_FC).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-2',
    categoryId: 'economics',
    question:
      'Which transition equation correctly converts Net Domestic Product at Factor Cost (NDP_FC) into Net National Product at Market Price (NNP_MP)?',
    answer: 'NDP_FC + NFIA + NIT',
    options: [
      'NDP_FC + NFIA - NIT',
      'NDP_FC + NFIA + NIT',
      'NDP_FC - Depreciation + NFIA',
      'NDP_FC + Depreciation + NIT',
    ],
    explanation:
      'Domestic becomes National by adding Net Factor Income from Abroad (+ NFIA), and Factor Cost becomes Market Price by adding Net Indirect Taxes (+ NIT, where NIT = Indirect Taxes - Subsidies).',
    tip: 'Domestic + NFIA = National; Factor Cost + NIT = Market Price.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-3',
    categoryId: 'economics',
    question:
      'In India, which organization is officially responsible for compiling and releasing annual National Accounts Statistics (NAS)?',
    answer: 'National Statistical Office (NSO, MoSPI)',
    options: [
      'Reserve Bank of India (RBI)',
      'NITI Aayog',
      'National Statistical Office (NSO, MoSPI)',
      'Department of Economic Affairs',
    ],
    explanation:
      'The National Statistical Office (NSO), formed by merging CSO and NSSO under the Ministry of Statistics and Programme Implementation (MoSPI), compiles and publishes India’s National Accounts Statistics.',
    tip: 'NSO under MoSPI compiles India’s National Income & GDP statistics.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-4',
    categoryId: 'economics',
    question:
      'When Gross Domestic Product (GDP) is calculated using the Expenditure Method, which of the following is excluded?',
    answer: 'Expenditure on intermediate goods',
    options: [
      'Private final consumption expenditure',
      'Government final consumption expenditure',
      'Expenditure on intermediate goods',
      'Net exports (Exports - Imports)',
    ],
    explanation:
      'Intermediate purchases are strictly excluded in the Expenditure Method to avoid the problem of double counting; only final consumption (C + G), gross investment (I), and net exports (X - M) are included.',
    tip: 'Intermediate goods are always excluded from GDP to prevent double counting.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-5',
    categoryId: 'economics',
    question: 'Which of the following items is INCLUDED while computing National Income?',
    answer: 'Brokerage earned on ancestral property sale',
    options: [
      'Sale proceeds of secondhand cars',
      'Brokerage earned on ancestral property sale',
      'Financial transfer payments',
      'Windfall lottery winnings',
    ],
    explanation:
      'While the sale value of secondhand assets or existing property is excluded (as it was counted when originally produced), commission or brokerage earned by agents represents a current productive service and is included in National Income.',
    tip: 'Secondhand asset value = Excluded; Brokerage/commission on sale = Included.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-6',
    categoryId: 'economics',
    question:
      'If Gross National Product at Market Price (GNP_MP) exceeds Gross Domestic Product at Market Price (GDP_MP), what does it signify?',
    answer: 'Net Factor Income from Abroad (NFIA) is positive',
    options: [
      'Net Factor Income from Abroad (NFIA) is positive',
      'Net Factor Income from Abroad (NFIA) is negative',
      'Depreciation exceeds Net Indirect Taxes',
      'Net exports of merchandise are negative',
    ],
    explanation:
      'Since GNP = GDP + NFIA, GNP > GDP implies that Net Factor Income from Abroad (NFIA) is positive—domestic residents earned more factor income from abroad than non-residents earned domestically.',
    tip: 'GNP > GDP <=> NFIA > 0.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-7',
    categoryId: 'economics',
    question: 'What is the primary conceptual difference between Nominal GDP and Real GDP?',
    answer: 'Adjustment for changes in general price level (Inflation)',
    options: [
      'Deduction of consumption of fixed capital',
      'Adjustment for changes in general price level (Inflation)',
      'Inclusion of overseas factor earnings',
      'Subtraction of environmental degradation costs',
    ],
    explanation:
      'Nominal GDP values output at current prevailing market prices, whereas Real GDP values output at constant base-year prices to isolate genuine physical volume growth from inflation.',
    tip: 'Real GDP = Inflation-adjusted GDP at constant base-year prices.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-8',
    categoryId: 'economics',
    question:
      'Personal Disposable Income (PDI) is derived from Personal Income (PI) by deducting which of the following?',
    answer: 'Direct personal taxes & miscellaneous government administrative fees/fines',
    options: [
      'Direct personal taxes & miscellaneous government administrative fees/fines',
      'Undistributed corporate profits',
      'Corporate income taxes',
      'Social security contributions by employers',
    ],
    explanation:
      'Personal Disposable Income (PDI) = Personal Income (PI) - Direct Personal Taxes (income tax) - Miscellaneous Administrative Receipts (fees, fines) of government departments.',
    tip: 'PDI = Personal Income - Direct Personal Taxes - Misc. Govt Fees/Fines.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-9',
    categoryId: 'economics',
    question:
      'Why is the Value Added Method also referred to as the Product Method in National Income accounting?',
    answer: 'Calculates net output contribution by deducting intermediate consumption',
    options: [
      'Sums aggregate gross turnover across firms',
      'Calculates net output contribution by deducting intermediate consumption',
      'Measures only finished consumer merchandise',
      'Tracks household shopping expenditures',
    ],
    explanation:
      'Value Added = Value of Output (Sales + ΔStock) - Intermediate Consumption. Summing gross value added across all primary, secondary, and tertiary sectors measures net product contribution without double counting.',
    tip: 'GVA_MP = Value of Output - Intermediate Consumption.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-10',
    categoryId: 'economics',
    question: 'Who made the first scientific estimate of National Income in India (for 1931–32)?',
    answer: 'Dr. V.K.R.V. Rao',
    options: [
      'Dadabhai Naoroji',
      'Dr. V.K.R.V. Rao',
      'Prof. P.C. Mahalanobis',
      'R.C. Dutt',
    ],
    explanation:
      'Dadabhai Naoroji prepared the first historical estimate of India’s national income for 1867–68, while Dr. V.K.R.V. Rao made the first scientific estimate for 1931–32 in his book "The National Income of British India".',
    tip: 'First Estimate (1867-68) = Dadabhai Naoroji; First Scientific Estimate (1931-32) = Dr. V.K.R.V. Rao.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-11',
    categoryId: 'economics',
    question: 'Which of the following formulas correctly defines the GDP Deflator?',
    answer: '(Nominal GDP / Real GDP) × 100',
    options: [
      '(Real GDP / Nominal GDP) × 100',
      '(Nominal GDP / Real GDP) × 100',
      '(Nominal GDP / GNP) × 100',
      '(GNP / GDP) × 100',
    ],
    explanation:
      'The GDP Deflator (Implicit Price Deflator) is a comprehensive price index covering all domestically produced goods and services, defined as (Nominal GDP ÷ Real GDP) × 100.',
    tip: 'GDP Deflator = (Nominal GDP / Real GDP) × 100.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-12',
    categoryId: 'economics',
    question:
      'Under the System of National Accounts (SNA) adopted by India in 2015, how is Gross Value Added (GVA) at Basic Prices calculated from GVA at Factor Cost?',
    answer: 'GVA_FC + Production Taxes - Production Subsidies',
    options: [
      'GVA_FC + Production Taxes - Production Subsidies',
      'GVA_FC + Product Taxes - Product Subsidies',
      'GVA_FC + Net Exports - Depreciation',
      'GVA_FC + Import Duties - Export Subsidies',
    ],
    explanation:
      'GVA at Basic Prices = GVA at Factor Cost + Net Production Taxes (Production Taxes like land revenue/stamp duty minus Production Subsidies). Adding Net Product Taxes (GST, customs, excise minus product subsidies) to GVA at Basic Prices yields GDP at Market Prices.',
    tip: 'GVA_Basic = GVA_FC + Net Production Taxes; GDP_MP = GVA_Basic + Net Product Taxes.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-ni-pdf-13',
    categoryId: 'economics',
    question:
      "Why is 'Mixed Income of the Self-Employed' categorized separately under the Income Method in India?",
    answer: 'Labor and capital income cannot be separated in unincorporated enterprises',
    options: [
      'Earned exclusively in agricultural exports',
      'Labor and capital income cannot be separated in unincorporated enterprises',
      'It is completely tax-exempt under IT rules',
      'It represents non-monetized barter income',
    ],
    explanation:
      'In household farms, sole proprietorships, and informal enterprises, self-employed workers use their own labor, land, and capital, making it impossible to separate wages, rent, interest, and profit.',
    tip: 'Income Method: NDP_FC = Compensation of Employees + Operating Surplus + Mixed Income of Self-Employed.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-14',
    categoryId: 'economics',
    question:
      "Which of the following is considered a unilateral 'Transfer Payment' and therefore excluded from National Income?",
    answer: 'Old-age pensions paid by the government',
    options: [
      'Employee festival bonus',
      'Old-age pensions paid by the government',
      'Retirement pension earned through service',
      'Overtime wages paid to industrial workers',
    ],
    explanation:
      'Old-age social security pensions, unemployment allowances, and scholarships are unilateral transfer payments without any quid pro quo service. Retirement pensions of employees are deferred wages for past service and ARE included.',
    tip: 'Old-age pension = Transfer payment (Excluded); Retirement pension = Deferred wage (Included).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-15',
    categoryId: 'economics',
    question:
      'In 1949, the Government of India appointed the first official National Income Committee. Who served as its Chairman?',
    answer: 'Prof. P.C. Mahalanobis',
    options: [
      'Dr. V.K.R.V. Rao',
      'Dr. D.R. Gadgil',
      'Prof. P.C. Mahalanobis',
      'C.D. Deshmukh',
    ],
    explanation:
      'Appointed in August 1949, the National Income Committee was chaired by Prof. P.C. Mahalanobis with Dr. D.R. Gadgil and Dr. V.K.R.V. Rao as members.',
    tip: '1949 National Income Committee: Chairman = P.C. Mahalanobis; Members = Gadgil & V.K.R.V. Rao.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-16',
    categoryId: 'economics',
    question: "What is the economic definition of 'Gross Fixed Capital Formation' (GFCF)?",
    answer: 'Net additions to fixed assets like machinery, plant, and infrastructure',
    options: [
      'Net additions to fixed assets like machinery, plant, and infrastructure',
      'Total secondary market equity purchases',
      'Household gold reserve accumulation',
      'Net forex accumulation by central banks',
    ],
    explanation:
      'Gross Fixed Capital Formation (GFCF) measures expenditure on additions to fixed productive assets (machinery, equipment, factory buildings, residential construction, and infrastructure).',
    tip: 'GDC (Gross Domestic Capital Formation) = GFCF + Change in Stock (Inventory) + Net Acquisition of Valuables.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-17',
    categoryId: 'economics',
    question:
      "In his seminal work 'Poverty and Un-British Rule in India', what was Dadabhai Naoroji's per capita income estimate for British India in 1867–68?",
    answer: '₹20 per annum',
    options: [
      '₹2 per annum',
      '₹20 per annum',
      '₹49 per annum',
      '₹120 per annum',
    ],
    explanation:
      'Dadabhai Naoroji estimated the total National Income of British India at ₹340 crore for a population of 17 crore in 1867–68, yielding a per capita income of ₹20 per annum (while Dr. V.K.R.V. Rao estimated ₹62 for 1931–32).',
    tip: 'Dadabhai Naoroji (1867–68) per capita income estimate = ₹20 per annum.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-18',
    categoryId: 'economics',
    question: "Which of the following is the defining concept behind 'Green GDP'?",
    answer: 'GDP adjusted for resource depletion & environmental degradation',
    options: [
      'GDP generated solely by agriculture',
      'GDP adjusted for resource depletion & environmental degradation',
      'Value of renewable energy output',
      'GDP excluding manufacturing emissions',
    ],
    explanation:
      'Green GDP subtracts the monetary cost of natural resource depletion and environmental degradation/pollution from conventional GDP to measure environmentally sustainable economic growth.',
    tip: 'Green GDP = Conventional GDP - Environmental Degradation & Resource Depletion.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-19',
    categoryId: 'economics',
    question: "In the Income Method, which three sub-components comprise 'Operating Surplus'?",
    answer: 'Rent (and Royalty), Interest, and Profits',
    options: [
      'Wages, Salaries, and Royalties',
      'Rent (and Royalty), Interest, and Profits',
      'Subsidies, Exports, and Dividends',
      'Direct Taxes, Indirect Taxes, and Fines',
    ],
    explanation:
      'Operating Surplus is income from property (Rent, Royalty, Interest) and entrepreneurship (Profits = Corporate Tax + Dividends + Undistributed Retained Earnings).',
    tip: 'Operating Surplus = Rent + Royalty + Interest + Profit.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-20',
    categoryId: 'economics',
    question:
      "How is 'Change in Inventories' (Change in Stock) measured in National Income accounting?",
    answer: 'Closing Stock minus Opening Stock',
    options: [
      'Opening Stock plus Total Sales',
      'Closing Stock minus Opening Stock',
      'Total Goods Produced during the year',
      'Closing Stock plus Depreciation',
    ],
    explanation:
      'Change in Stock (ΔStock / Inventory Investment) = Closing Stock - Opening Stock of finished goods, semi-finished work-in-progress, and raw materials.',
    tip: 'Change in Stock = Closing Stock - Opening Stock.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-21',
    categoryId: 'economics',
    question:
      'In national income accounting, how are the services of owner-occupied residential houses treated?',
    answer: 'Included through imputed rental valuation',
    options: [
      'Excluded completely as non-monetized activity',
      'Included through imputed rental valuation',
      'Included only upon property resale',
      'Subtracted as housing consumption cost',
    ],
    explanation:
      'Homeowners provide housing services to themselves; therefore, the imputed rent of owner-occupied houses (estimated at prevailing market rental rates) is included in National Income.',
    tip: 'Imputed rent of owner-occupied houses is INCLUDED in National Income.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-22',
    categoryId: 'economics',
    question:
      'In Indian National Accounts Statistics, what base year was adopted in January 2015 for calculating Real GDP at constant prices?',
    answer: '2011–12',
    options: ['2004–05', '2011–12', '2017–18', '2020–21'],
    explanation:
      'In January 2015, MoSPI revised the base year for India’s National Accounts from 2004–05 to 2011–12 and aligned headline growth reporting with GVA at Basic Prices and GDP at Market Prices.',
    tip: 'National Accounts base year revised in 2015 = 2011–12.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ni-pdf-23',
    categoryId: 'economics',
    question: 'What is the formula to arrive at Net National Disposable Income (NNDI)?',
    answer: 'NNP_MP + Net Current Transfers from the Rest of the World',
    options: [
      'GDP_FC - Depreciation - Direct Taxes',
      'NNP_MP + Net Current Transfers from the Rest of the World',
      'GNP_MP - NFIA + Production Taxes',
      'NDP_FC + Subsidies - Corporate Profit',
    ],
    explanation:
      'Net National Disposable Income (NNDI) = NNP at Market Price (NNP_MP) + Net Current Transfers from the Rest of the World (remittances, gifts, grants). For Gross National Disposable Income (GNDI), Depreciation is added.',
    tip: 'NNDI = NNP_MP + Net Current Transfers from Rest of World.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ni-pdf-24',
    categoryId: 'economics',
    question:
      'If an open economy operates with a trade deficit (M > X) and the government runs a balanced budget (G = T), what must be true about domestic savings (S) and domestic investment (I)?',
    answer: 'Domestic Investment exceeds Domestic Saving (I > S)',
    options: [
      'Domestic Saving must exceed Investment (S > I)',
      'Domestic Investment exceeds Domestic Saving (I > S)',
      'S and I must both equal zero',
      'Private savings must equal exports',
    ],
    explanation:
      'From the macroeconomic identity (S - I) + (T - G) = (X - M), when the government budget is balanced (T = G), S - I = X - M. A trade deficit (X - M < 0) implies S - I < 0, so Domestic Investment exceeds Domestic Saving (I > S), financed by net capital inflows.',
    tip: 'With T = G and Trade Deficit (X < M), Investment exceeds Domestic Saving (I > S).',
    difficulty: 'advanced',
  },
  {
    id: 'econ-ni-pdf-25',
    categoryId: 'economics',
    question:
      "Which of the following correctly describes the difference between 'Product Tax' and 'Production Tax' in Indian National Accounts?",
    answer: 'Product taxes are levied per unit of volume (GST, excise); Production taxes are independent of volume (land revenue, stamp duty)',
    options: [
      'Product taxes are levied per unit of volume (GST, excise); Production taxes are independent of volume (land revenue, stamp duty)',
      'Production taxes are included in Factor Cost; Product taxes are excluded',
      'Product taxes apply only to imports; Production taxes apply only to services',
      'Both are identical and represent corporate profit taxes',
    ],
    explanation:
      'Production taxes/subsidies (land revenue, stamp and registration fees, profession tax) are paid in relation to production and are independent of the volume of actual output. Product taxes/subsidies (GST, excise duty, customs duty) are paid per unit of product produced or transacted.',
    tip: 'Production tax = Independent of output volume; Product tax = Per-unit of output volume.',
    difficulty: 'advanced',
  },

  // =========================================================================
  // PART 5: 20 Most Important Numerical Questions (National Income, Multiplier & Money Supply)
  // =========================================================================
  {
    id: 'econ-num-pdf-1',
    categoryId: 'economics',
    question:
      'Find the value of NDP at FC (NDP_FC) from the following data:\n• GNP at MP = ₹60,000\n• Depreciation = ₹4,000\n• Net Factor Income from Abroad (NFIA) = ₹3,200\n• Net Indirect Taxes (NIT) = ₹6,000',
    answer: '₹46,800',
    options: ['₹46,800', '₹64,000', '₹61,080', 'None of these'],
    explanation:
      'NDP_FC = GNP_MP - Depreciation - NFIA - NIT = 60,000 - 4,000 - 3,200 - 6,000 = ₹46,800.',
    tip: 'NDP_FC = GNP_MP - Dep - NFIA - NIT = 60,000 - 13,200 = ₹46,800.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-2',
    categoryId: 'economics',
    question:
      'Calculate Personal Income from the following data:\n• Private Income = ₹50,000\n• Undistributed Corporate Profits (Retained Earnings) = ₹10,000\n• Corporate Profit Taxes = ₹2,500',
    answer: '₹37,500',
    options: ['₹37,500', '₹48,000', '₹34,000', '₹40,000'],
    explanation:
      'Personal Income = Private Income - Corporate Profit Taxes - Undistributed Corporate Profits (Retained Earnings) = 50,000 - 2,500 - 10,000 = ₹37,500.',
    tip: 'Personal Income = Private Income - Corporate Tax - Retained Earnings.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-3',
    categoryId: 'economics',
    question:
      'Consider the following data (in ₹ Crores):\n• Compensation of Employees = 1,200\n• Operating Surplus = 2,400\n• Consumption of Fixed Capital (Depreciation) = 480\n• Mixed Income of Self-Employed = 1,320\n• Net Indirect Tax (NIT) = 540\n• Rent = 660, Profit = 960\n• Net Factor Income from Abroad (NFIA) = 60\nWhich of the following is INCORRECT?',
    answer: 'NNP at FC = 5,940 Crores',
    options: [
      'GDP at MP = 5,940 Crores',
      'GNP at MP = 6,000 Crores',
      'NNP at MP = 5,520 Crores',
      'NNP at FC = 5,940 Crores',
    ],
    explanation:
      'By Income Method, NDP_FC = Compensation of Employees (1,200) + Operating Surplus (2,400, which already includes Rent & Profit) + Mixed Income (1,320) = 4,920. Then GDP_MP = NDP_FC + Dep (480) + NIT (540) = 5,940; GNP_MP = 5,940 + NFIA (60) = 6,000; NNP_MP = 6,000 - Dep (480) = 5,520; and NNP_FC = NDP_FC (4,920) + NFIA (60) = 4,980 Crores (not 5,940).',
    tip: 'Rent & Profit are already inside Operating Surplus! NNP_FC = 4,920 + 60 = 4,980.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-4',
    categoryId: 'economics',
    question:
      'Calculate Net Value Added at Market Price (NVA_MP / NDP_MP) from the following data:\n• Sales = ₹20,00,000\n• Closing Stock = ₹40,000; Opening Stock = ₹10,000\n• Indirect Taxes = ₹1,00,000\n• Depreciation = ₹60,000\n• Intermediate Consumption = ₹3,20,000\n• Purchase of Raw Material = ₹1,35,000; Rent = ₹25,000',
    answer: '₹16,50,000',
    options: ['₹16,30,000', '₹16,50,000', '₹16,80,000', '₹16,90,000'],
    explanation:
      'Value of Output = Sales + (Closing Stock - Opening Stock) = 20,00,000 + (40,000 - 10,000) = ₹20,30,000. GVA_MP = Value of Output - Intermediate Consumption (Purchase of raw material is already included in Intermediate Consumption) = 20,30,000 - 3,20,000 = ₹17,10,000. Net Value Added at MP (NVA_MP) = GVA_MP - Depreciation = 17,10,000 - 60,000 = ₹16,50,000.',
    tip: 'NVA_MP = (Sales + ΔStock) - Intermediate Consumption - Depreciation.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-5',
    categoryId: 'economics',
    question:
      'Calculate National Income (NNP_FC) from the following information:\n• NDP at Market Price = 77,000\n• Net Factor Income from Abroad (NFIA) = (-) 700\n• Depreciation = 1,700\n• Subsidies = 6,600\n• Indirect Taxes = 7,700',
    answer: '75,200',
    options: ['75,000', '75,200', '75,400', '75,500'],
    explanation:
      'Net Indirect Taxes (NIT) = Indirect Taxes - Subsidies = 7,700 - 6,600 = 1,100. National Income (NNP_FC) = NDP_MP + NFIA - NIT = 77,000 + (-700) - 1,100 = 75,200.',
    tip: 'NNP_FC = NDP_MP + NFIA - (Indirect Taxes - Subsidies) = 77,000 - 700 - 1,100 = 75,200.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-6',
    categoryId: 'economics',
    question:
      'What will be the National Income (NNP_FC) using the Expenditure Method?\n• Private Final Consumption Expenditure = 25,000\n• Government Final Consumption Expenditure = 12,000\n• Net Domestic Capital Formation = 6,500\n• Net Exports = 5,000\n• Net Factor Income from Abroad (NFIA) = 1,000\n• Net Indirect Taxes (NIT) = 1,500',
    answer: '₹48,000',
    options: ['₹49,500', '₹48,000', '₹47,000', '₹45,500'],
    explanation:
      'Since Net Domestic Capital Formation is given (already net of depreciation), summing C + G + Net Investment + NX directly gives NDP_MP = 25,000 + 12,000 + 6,500 + 5,000 = ₹48,500. Then NNP_FC = NDP_MP + NFIA - NIT = 48,500 + 1,000 - 1,500 = ₹48,000.',
    tip: 'With Net Domestic Capital Formation, C + G + NDCF + NX gives NDP_MP directly!',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-7',
    categoryId: 'economics',
    question:
      'Calculate National Income (NNP_FC) by Value Added Method:\n• Sales = 1,050; Opening Stock = 750; Closing Stock = 600\n• Intermediate Consumption = 525\n• Net Factor Income from Abroad (NFIA) = 45\n• Depreciation = 225\n• Excise Tax = 165; Subsidies = 75',
    answer: '105',
    options: ['900', '375', '105', 'None of these'],
    explanation:
      'Value of Output = Sales + (Closing Stock - Opening Stock) = 1,050 + (600 - 750) = 1,050 - 150 = 900. GDP_MP (GVA_MP) = 900 - Intermediate Consumption (525) = 375. NIT = Excise Tax - Subsidies = 165 - 75 = 90. NNP_FC = GDP_MP - Depreciation + NFIA - NIT = 375 - 225 + 45 - 90 = 105.',
    tip: 'Value of Output = 1050 - 150 = 900; GDP_MP = 375; NNP_FC = 375 - 225 + 45 - 90 = 105.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-8',
    categoryId: 'economics',
    question:
      'Find the value of NNP_FC (by Expenditure Method) from the following data (in ₹ Crores):\n• Private Final Consumption Expenditure = 67\n• Gross Domestic Fixed Capital Formation = 1,575\n• Change in Stock = 135; Net Acquisition of Valuables = 45\n• Net Import = 90\n• Subsidy = 450 (Indirect Tax = 0)\n• Factor Income Paid to Abroad = 90\n• Depreciation = 135',
    answer: '₹1,957 Crores',
    options: ['₹1,957 Crores', '₹1,507 Crores', '₹1,462 Crores', 'None of these'],
    explanation:
      'Gross Domestic Capital Formation (I) = Fixed Capital Formation (1,575) + Change in Stock (135) + Net Acquisition of Valuables (45) = 1,755. Since Net Import = 90, Net Exports = -90. GDP_MP = C (67) + I (1,755) + NX (-90) = 1,732. Here NFIA = -90 and NIT = 0 - 450 = -450. Therefore, NNP_FC = GDP_MP - Dep + NFIA - NIT = 1,732 - 135 - 90 - (-450) = 1,507 + 450 = ₹1,957 Crores.',
    tip: 'Subtracting negative NIT (-450) adds +450 of subsidies to Factor Cost!',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-9',
    categoryId: 'economics',
    question:
      'Consider the following data relating to a two-sector economy in equilibrium:\n• Autonomous Consumption (a) = 500\n• Marginal Propensity to Save (MPS) = 0.3\n• Investment Expenditure (I) = 1,000\nWhat is the equilibrium level of National Income (Y)?',
    answer: '5,000',
    options: ['1,500', '5,000', '150', '5,650'],
    explanation:
      'At equilibrium, Saving equals Investment (S = I), where S = -a + MPS × Y. Thus, 1,000 = -500 + 0.3Y => 0.3Y = 1,500 => Y = 1,500 / 0.3 = 5,000.',
    tip: 'Y = (a + I) / MPS = (500 + 1,000) / 0.3 = 5,000.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-10',
    categoryId: 'economics',
    question:
      'An increase in investment by ₹1,000 Crores leads to an increase in national income by ₹2,500 Crores. What is the Marginal Propensity to Consume (MPC)?',
    answer: '0.6',
    options: ['2.5', '0.6', '0.4', 'None of these'],
    explanation:
      'Investment Multiplier k = ΔY / ΔI = 2,500 / 1,000 = 2.5. Since k = 1 / MPS, we have 2.5 = 1 / MPS => MPS = 1 / 2.5 = 0.4. Therefore, MPC = 1 - MPS = 1 - 0.4 = 0.6.',
    tip: 'k = ΔY/ΔI = 2.5; MPS = 1/k = 0.4; MPC = 1 - 0.4 = 0.6.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-11',
    categoryId: 'economics',
    question:
      'Consider the following three-sector economy:\n• Consumption function: C = 50 + 0.8Yd\n• Lump-sum Tax (T) = 100\n• Investment (I) = 250 Crores\n• Government Expenditure (G) = 100 Crores\nWhat is the equilibrium level of National Income (Y)?',
    answer: '1,600',
    options: ['1,200', '1,400', '1,600', 'None of these'],
    explanation:
      'Disposable income Yd = Y - T = Y - 100. Thus C = 50 + 0.8(Y - 100) = 50 + 0.8Y - 80 = -30 + 0.8Y. At equilibrium, Y = C + I + G => Y = (-30 + 0.8Y) + 250 + 100 => 0.2Y = 320 => Y = 1,600.',
    tip: 'Y = [a - bT + I + G] / (1 - b) = [50 - 80 + 250 + 100] / 0.2 = 320 / 0.2 = 1,600.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-12',
    categoryId: 'economics',
    question:
      'Given the structural model of a three-sector economy:\n• C = 40 + 0.8Yd\n• I = 80\n• G = T = 40\n• Government Transfer Payments (TR) = 15\nWhat is the equilibrium level of income (Y)?',
    answer: '700',
    options: ['700', '610', '175', 'None of these'],
    explanation:
      'Disposable income Yd = Y - T + TR = Y - 40 + 15 = Y - 25. Substituting into C: C = 40 + 0.8(Y - 25) = 40 + 0.8Y - 20 = 20 + 0.8Y. Since Y = C + I + G => Y = 20 + 0.8Y + 80 + 40 => 0.2Y = 140 => Y = 700.',
    tip: 'Yd = Y - T + TR = Y - 25; 0.2Y = 140 => Y = 700.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-13',
    categoryId: 'economics',
    question:
      'In an open economy model with C = 60 + 0.9Yd, I = 10, and Import function M = 10 + 0.05Y, what is the value of the Foreign Trade Multiplier?',
    answer: '6.66',
    options: ['0.98', '3.97', '6.66', 'None of these'],
    explanation:
      'Here MPC (b) = 0.9 and Marginal Propensity to Import (m) = 0.05. The open-economy Foreign Trade Multiplier is k_f = 1 / (1 - b + m) = 1 / (1 - 0.9 + 0.05) = 1 / 0.15 = 6.667.',
    tip: 'Foreign Trade Multiplier = 1 / (1 - MPC + MPM) = 1 / (1 - 0.9 + 0.05) = 1 / 0.15 = 6.66.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-14',
    categoryId: 'economics',
    question:
      'Calculate "Currency with the Public" from the following monetary data:\n• Notes in Circulation = ₹43,22,288\n• Circulation of Rupee Coins = ₹26,422\n• Circulation of Small Coins = ₹2,345\n• Cash on Hand with Banks = ₹12,345',
    answer: '₹43,38,710',
    options: ['₹43,38,710', '₹43,51,055', '₹43,63,400', 'None of the above'],
    explanation:
      'Currency with the Public = Notes in Circulation + Circulation of Rupee Coins + Circulation of Small Coins - Cash on Hand with Banks = 43,22,288 + 26,422 + 2,345 - 12,345 = 43,51,055 - 12,345 = ₹43,38,710.',
    tip: 'Currency with Public = Total Currency in Circulation minus Cash on Hand with Banks.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-15',
    categoryId: 'economics',
    question:
      'If Required Reserve Ratio (r) = 0.20, Excess Reserve Ratio (e) = 0.10, and Currency-Deposit Ratio (c) = 0.30, calculate the Money Multiplier (m):',
    answer: '2.17',
    options: ['2.17', '2.00', '1.67', 'None of the above'],
    explanation:
      'Using the behavioural Money Multiplier formula m = (1 + c) / (c + r + e): m = (1 + 0.30) / (0.30 + 0.20 + 0.10) = 1.30 / 0.60 = 2.167 ≈ 2.17.',
    tip: 'Money Multiplier m = (1 + c) / (c + r + e) = 1.3 / 0.6 = 2.17.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-16',
    categoryId: 'economics',
    question:
      'Calculate the Money Multiplier if:\n• Required Reserve Ratio (r) = 10% (0.10)\n• Currency with Public = ₹500 Crores\n• Demand Deposits = ₹800 Crores\n• Excess Reserves = ₹4 Crores',
    answer: '2.22',
    options: ['2.08', '2.22', '1.99', 'None of the above'],
    explanation:
      'First compute the ratios relative to Deposits (D = 800): Currency-Deposit ratio c = C / D = 500 / 800 = 0.625; Excess-Reserve ratio e = ER / D = 4 / 800 = 0.005; Required Reserve ratio r = 0.10. Money Multiplier m = (1 + c) / (r + c + e) = (1 + 0.625) / (0.10 + 0.625 + 0.005) = 1.625 / 0.73 = 2.226 ≈ 2.22.',
    tip: 'c = 500/800 = 0.625, e = 4/800 = 0.005; m = 1.625 / 0.73 = 2.22.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-17',
    categoryId: 'economics',
    question:
      'Calculate Narrow Money (M1) from the following RBI monetary aggregates data:\n• Currency with the public = ₹10,000 Crore\n• Demand deposits with the banking system = ₹12,000 Crore\n• Time deposits with the banking system = ₹11,000 Crore\n• Other deposits with RBI = ₹8,000 Crore\n• Demand deposits of Post Office savings banks = ₹2,000 Crore',
    answer: '₹30,000 Crore',
    options: ['₹42,000 Crore', '₹44,000 Crore', '₹30,000 Crore', '₹22,000 Crore'],
    explanation:
      'Narrow Money (M1) = Currency with the Public (CU) + Demand Deposits with Commercial/Cooperative Banks (DD) + Other Deposits with RBI (OD) = 10,000 + 12,000 + 8,000 = ₹30,000 Crore. (Time deposits are part of M3, and Post Office deposits are part of M2/M4).',
    tip: 'M1 = CU + DD + OD = 10,000 + 12,000 + 8,000 = ₹30,000 Crore.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-num-pdf-18',
    categoryId: 'economics',
    question:
      'From the following data (in ₹ Crores), estimate National Income (NNP_FC) and Personal Income:\n• Net National Product at Market Price (NNP_MP) = 1,891\n• Indirect Taxes = 175; Subsidies = 30\n• Income from property & entrepreneurship accruing to Govt. administrative departments = 45\n• Saving of non-departmental public enterprises = 10\n• Interest on National Debt = 15\n• Current transfers from Government = 35; Current transfers from Rest of World = 20\n• Saving of private corporate sector (Retained Earnings) = 25; Corporate Profit Tax = 25',
    answer: 'National Income = ₹1,746 Cr; Personal Income = ₹1,711 Cr',
    options: [
      'National Income = ₹1,746 Cr; Personal Income = ₹1,711 Cr',
      'National Income = ₹1,746 Cr; Personal Income = ₹1,761 Cr',
      'National Income = ₹1,891 Cr; Personal Income = ₹1,711 Cr',
      'National Income = ₹1,691 Cr; Personal Income = ₹1,650 Cr',
    ],
    explanation:
      '1) NIT = 175 - 30 = 145. National Income (NNP_FC) = NNP_MP - NIT = 1,891 - 145 = ₹1,746 Cr.\n2) Private Income = NNP_FC - Govt Property Income (45) - Non-dept Enterprise Saving (10) + National Debt Interest (15) + Govt Transfers (35) + ROW Transfers (20) = 1,746 - 55 + 70 = ₹1,761 Cr.\n3) Personal Income = Private Income - Corporate Profit Tax (25) - Retained Earnings (25) = 1,761 - 50 = ₹1,711 Cr.',
    tip: 'NNP_FC = 1,746 -> Private Income = 1,761 -> Personal Income = 1,711.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-19',
    categoryId: 'economics',
    question:
      'From the following data (in ₹ Crores), calculate Personal Income (PI) and Personal Disposable Income (PDI):\n• NDP at Factor Cost (NDP_FC) = 14,900; Net Factor Income from Abroad (NFIA) = 80\n• Income from domestic product accruing to government = 150\n• Interest on National Debt = 170; Transfer payment by government = 60; Net private donation from abroad = 30\n• Taxes on corporate profits = 222; Undistributed profits of corporations = 105\n• Direct personal taxes = 100; Indirect taxes = 335; Subsidies = 262',
    answer: 'Personal Income = ₹14,763 Cr; Disposable Personal Income = ₹14,663 Cr',
    options: [
      'Personal Income = ₹14,763 Cr; Disposable Personal Income = ₹14,663 Cr',
      'Personal Income = ₹14,980 Cr; Disposable Personal Income = ₹14,880 Cr',
      'Personal Income = ₹14,663 Cr; Disposable Personal Income = ₹14,563 Cr',
      'Personal Income = ₹15,053 Cr; Disposable Personal Income = ₹14,763 Cr',
    ],
    explanation:
      '1) National Income (NNP_FC) = NDP_FC + NFIA = 14,900 + 80 = 14,980 Cr.\n2) Private Income = 14,980 - Govt Domestic Income (150) + National Debt Interest (170) + Govt Transfers (60) + Foreign Private Donations (30) = 15,090 Cr.\n3) Personal Income (PI) = Private Income - Corporate Profit Tax (222) - Undistributed Corporate Profits (105) = 15,090 - 327 = ₹14,763 Cr.\n4) Disposable Personal Income (PDI) = PI - Direct Personal Taxes (100) = 14,763 - 100 = ₹14,663 Cr.',
    tip: 'NNP_FC = 14,980; Private Income = 15,090; PI = 14,763; PDI = 14,663.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-num-pdf-20',
    categoryId: 'economics',
    question:
      'For a 3-sector closed economy with proportional income tax, the following data is given:\n• Consumption: C = 75 + 0.5(Y - T)\n• Investment: I = 80\n• Total Tax function: T = 25 + 0.1Y\n• Government Expenditure: G = 100\nFind (a) the equilibrium income (Y) and (b) the value of the tax-adjusted expenditure multiplier:',
    answer: 'Equilibrium Income Y = 440.91; Multiplier = 1.82',
    options: [
      'Equilibrium Income Y = 440.91; Multiplier = 1.82',
      'Equilibrium Income Y = 485.00; Multiplier = 2.00',
      'Equilibrium Income Y = 400.00; Multiplier = 1.67',
      'Equilibrium Income Y = 510.50; Multiplier = 2.22',
    ],
    explanation:
      '1) Substitute T = 25 + 0.1Y into C: C = 75 + 0.5(Y - 25 - 0.1Y) = 75 + 0.5Y - 12.5 - 0.05Y = 62.5 + 0.45Y.\n2) Equilibrium Y = C + I + G => Y = 62.5 + 0.45Y + 80 + 100 => Y - 0.45Y = 242.5 => 0.55Y = 242.5 => Y = 242.5 / 0.55 = 440.91.\n3) 3-Sector Multiplier with proportional tax rate t = 0.1 and MPC b = 0.5 is k = 1 / [1 - b(1 - t)] = 1 / [1 - 0.5(0.9)] = 1 / (1 - 0.45) = 1 / 0.55 = 1.818 ≈ 1.82.',
    tip: '3-Sector Proportional Tax Multiplier = 1 / [1 - b(1 - t)] = 1 / 0.55 = 1.82; Y = 242.5 / 0.55 = 440.91.',
    difficulty: 'advanced',
  },
];
