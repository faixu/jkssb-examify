import { Flashcard } from '../../types';

/**
 * Economics Practice Sets: Consumer Behavior, Demand Analysis, Curve Shifts,
 * Elasticity of Demand, Theory of Production, Isoquants & Isocost Producer Equilibrium
 * Transcribed from uploaded Economics PDFs
 */
export const ECONOMICS_DEMAND_PRODUCTION_PDF_QUESTIONS: Flashcard[] = [
  // =========================================================================
  // PART 1: Consumer Behavior & Equilibrium Practice Quiz (30 MCQs)
  // =========================================================================
  {
    id: 'econ-cb-pdf-1',
    categoryId: 'economics',
    question: 'Which of the following is a characteristic of the Ordinal Utility approach?',
    answer: 'Utility can be ranked in order of preference.',
    options: [
      'Utility is measured in quantitative units called utils.',
      'Utility can be ranked in order of preference.',
      'Marginal utility of money is assumed to be constant.',
      'It was primarily developed by Alfred Marshall.',
    ],
    explanation:
      'The ordinal approach (developed by J.R. Hicks and R.G.D. Allen) assumes consumers can rank bundles (1st, 2nd, etc.) in order of preference without assigning exact numerical values.',
    tip: 'Ordinal = Ranking preferences (Hicks & Allen); Cardinal = Measuring in utils (Marshall).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-2',
    categoryId: 'economics',
    question: 'The slope of an Indifference Curve is known as:',
    answer: 'Marginal Rate of Substitution (MRS)',
    options: [
      'Marginal Rate of Transformation (MRT)',
      'Marginal Rate of Substitution (MRS)',
      'Price Ratio',
      'Marginal Utility',
    ],
    explanation:
      'MRS measures the rate at which a consumer is willing to trade one good for another while maintaining the exact same level of satisfaction (utility).',
    tip: 'Slope of Indifference Curve = MRS = ΔY / ΔX = MUx / MUy.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-3',
    categoryId: 'economics',
    question:
      "What happens to the Budget Line if the consumer's income increases while prices remain constant?",
    answer: 'It shifts parallel to the right.',
    options: [
      'It rotates outwards on the X-axis.',
      'It shifts parallel to the left.',
      'It shifts parallel to the right.',
      'It becomes steeper.',
    ],
    explanation:
      'Higher money income allows the consumer to buy proportionally more of both goods while the relative price ratio (slope Px/Py) remains unchanged, shifting the budget line parallel to the right.',
    tip: 'Income change = Parallel shift of budget line; Price change = Rotation.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-4',
    categoryId: 'economics',
    question: 'An Indifference Curve is convex to the origin because of:',
    answer: 'Diminishing MRS',
    options: [
      'Increasing MRS',
      'Constant MRS',
      'Diminishing MRS',
      'The Law of Diminishing Returns',
    ],
    explanation:
      'As a consumer acquires more of Good X, their intensity of desire for X declines relative to Good Y, so they are willing to give up fewer and fewer units of Y for each additional unit of X (Diminishing MRS).',
    tip: 'Convexity of IC is strictly due to Diminishing Marginal Rate of Substitution (MRS).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-5',
    categoryId: 'economics',
    question: 'A consumer reaches equilibrium at a point where:',
    answer: 'The Budget Line is tangent to the highest possible Indifference Curve.',
    options: [
      'The Budget Line is above the Indifference Curve.',
      'The Budget Line is tangent to the highest possible Indifference Curve.',
      'Two Indifference Curves intersect.',
      'Marginal Utility is zero.',
    ],
    explanation:
      'Consumer equilibrium under the ordinal approach occurs where the budget line is tangent to the highest attainable indifference curve, so the slope of the IC (MRSxy) equals the slope of the budget line (Px/Py).',
    tip: 'Equilibrium condition: MRSxy = Px / Py (Tangency point).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-6',
    categoryId: 'economics',
    question:
      'Monotonic preference implies that between two bundles (5, 5) and (5, 6), the consumer will:',
    answer: 'Prefer bundle (5, 6).',
    options: [
      'Be indifferent between the two bundles.',
      'Prefer bundle (5, 5).',
      'Prefer bundle (5, 6).',
      'Prefer neither because they are too similar.',
    ],
    explanation:
      'Monotonic preferences ("more is better") state that since bundle (5, 6) contains more of at least one good and no less of the other good compared to (5, 5), it provides strictly higher utility.',
    tip: 'Monotonic preference = More of a good is always preferred.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-7',
    categoryId: 'economics',
    question:
      'If the price of Good X falls, while the price of Good Y and income remain the same, the budget line will:',
    answer: 'Rotate outwards on the X-axis.',
    options: [
      'Shift parallel to the right.',
      'Rotate outwards on the X-axis.',
      'Rotate inwards on the Y-axis.',
      'Remain unchanged.',
    ],
    explanation:
      'When Px falls, the consumer can purchase a larger maximum quantity of Good X (M/Px increases), while the Y-intercept (M/Py) remains fixed, causing the budget line to rotate outwards on the X-axis.',
    tip: 'Fall in Px increases X-intercept (M/Px) -> outward rotation on X-axis.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-8',
    categoryId: 'economics',
    question:
      'According to the Law of Diminishing Marginal Utility, as more units of a commodity are consumed, the extra satisfaction derived from each additional unit:',
    answer: 'Decreases',
    options: ['Increases', 'Stays the same', 'Decreases', 'Becomes infinite'],
    explanation:
      'Gossen’s First Law (Law of Diminishing Marginal Utility) states that as a consumer consumes successive units of a commodity continuously, the marginal utility derived from each additional unit diminishes.',
    tip: 'Each additional unit consumed adds less extra satisfaction (MU decreases).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-9',
    categoryId: 'economics',
    question: 'The Marginal Rate of Transformation (MRT) is associated with which curve?',
    answer: 'Production Possibility Frontier (PPF)',
    options: [
      'Indifference Curve',
      'Demand Curve',
      'Production Possibility Frontier (PPF)',
      'Budget Line',
    ],
    explanation:
      'Marginal Rate of Transformation (MRT) is the slope of the Production Possibility Frontier (PPF) and measures the opportunity cost—the amount of one good that must be sacrificed to produce one extra unit of another good.',
    tip: 'MRT = Slope of PPF; MRS = Slope of IC; MRTS = Slope of Isoquant.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-10',
    categoryId: 'economics',
    question: 'Which of the following is NOT a property of an Indifference Curve?',
    answer: 'They can intersect each other.',
    options: [
      'They are downward sloping.',
      'They can intersect each other.',
      'A higher IC represents a higher level of satisfaction.',
      'They are convex to the origin.',
    ],
    explanation:
      'Two indifference curves can never intersect each other because intersection would violate the axioms of transitivity and consistency of preferences.',
    tip: 'Indifference curves NEVER intersect.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-11',
    categoryId: 'economics',
    question:
      'If the Marginal Rate of Substitution (MRS) is greater than the price ratio (Px/Py), what should a rational consumer do to reach equilibrium?',
    answer: 'Consume more of Good X and less of Good Y.',
    options: [
      'Consume more of Good Y and less of Good X.',
      'Consume more of Good X and less of Good Y.',
      'Stop consuming both goods.',
      'Increase income to match the MRS.',
    ],
    explanation:
      'When MRS > Px/Py, the consumer’s subjective valuation of Good X exceeds its market opportunity cost. Consuming more X and less Y causes MRS to diminish until MRS = Px/Py.',
    tip: 'If MRS > Px/Py, buy more X and less Y until MRS falls to equal Px/Py.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-12',
    categoryId: 'economics',
    question:
      "What happens to the budget line if both prices (Px and Py) double and the consumer's income also doubles?",
    answer: 'The budget line remains unchanged.',
    options: [
      'The budget line shifts to the right.',
      'The budget line rotates outward.',
      'The budget line remains unchanged.',
      'The budget line shifts to the left.',
    ],
    explanation:
      'In the budget equation 2Px·X + 2Py·Y = 2M, dividing both sides by 2 yields the original equation Px·X + Py·Y = M. Real purchasing power, intercepts, and slope remain completely unchanged.',
    tip: 'Equal proportional change in income and all prices leaves the budget line unchanged.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-13',
    categoryId: 'economics',
    question:
      "Which assumption of Indifference Curve analysis ensures that ICs are 'downward sloping'?",
    answer: 'Monotonic Preferences',
    options: [
      'Diminishing MRS',
      'Monotonic Preferences',
      'Transitivity',
      'Cardinal measurability',
    ],
    explanation:
      'Monotonicity (non-satiety) implies more is better; therefore, to remain on the same utility level when consumption of one good increases, consumption of the other good must decrease, resulting in a negative (downward) slope.',
    tip: 'Monotonicity -> Downward slope; Transitivity -> Non-intersection; Diminishing MRS -> Convexity.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-14',
    categoryId: 'economics',
    question:
      'If the Budget Line is given by 20X + 10Y = 200, what is the maximum amount of Good Y the consumer can purchase?',
    answer: '20 units',
    options: ['10 units', '20 units', '200 units', '5 units'],
    explanation:
      'The maximum amount of Good Y (Y-intercept) is found by setting X = 0 in the budget equation: 10Y = 200 => Y = 200 / 10 = 20 units.',
    tip: 'Max Y = M / Py = 200 / 10 = 20 units.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-15',
    categoryId: 'economics',
    question: "What does a 'Corner Solution' imply in Indifference Curve analysis?",
    answer: 'The consumer spends all income on only one of the two goods.',
    options: [
      'The consumer is consuming equal amounts of both goods.',
      'The MRS is exactly equal to the price ratio.',
      'The consumer spends all income on only one of the two goods.',
      'The budget line has shifted to the origin.',
    ],
    explanation:
      'A corner solution occurs when highest utility is achieved at one of the axis intercepts of the budget line, meaning the consumer allocates 100% of income to one good and consumes zero of the other.',
    tip: 'Corner solution = zero consumption of one good (equilibrium lies on an axis).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-16',
    categoryId: 'economics',
    question: "Why can't an Indifference Curve be 'Concave to the Origin' for normal goods?",
    answer: 'Because it would imply an increasing Marginal Rate of Substitution.',
    options: [
      'Because it would imply an increasing Marginal Rate of Substitution.',
      'Because it would violate the law of demand.',
      'Because total utility would become negative.',
      'Because it would mean the consumer is irrational.',
    ],
    explanation:
      'A concave indifference curve implies an increasing MRS (willingness to sacrifice more and more Y as X increases), contradicting the preference for variety and leads to monomania/corner solutions.',
    tip: 'Concave IC = Increasing MRS; Convex IC = Diminishing MRS.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-17',
    categoryId: 'economics',
    question: "In the case of 'Perfect Substitutes', what is the shape of the Indifference Curve?",
    answer: 'A straight line',
    options: ['L-shaped', 'A straight line', 'Convex to the origin', 'Circular'],
    explanation:
      'When two goods are perfect substitutes, the consumer trades them at a constant rate regardless of quantity, so MRS is constant and the Indifference Curve is a downward-sloping straight line.',
    tip: 'Perfect Substitutes = Constant MRS = Straight-line IC.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-18',
    categoryId: 'economics',
    question:
      'If MUx/Px < MUy/Py, how will a consumer reach equilibrium in the Cardinal approach?',
    answer: 'Buy more of Good Y and less of Good X.',
    options: [
      'Buy more of Good X and less of Good Y.',
      'Buy more of Good Y and less of Good X.',
      'Increase the price of Good Y.',
      'Reduce total expenditure.',
    ],
    explanation:
      'Since a rupee spent on Good Y yields more marginal utility than a rupee spent on Good X, the consumer reallocates expenditure toward Y and away from X. Buying more Y lowers MUy and buying less X raises MUx until MUx/Px = MUy/Py.',
    tip: 'Buy more of the good that gives higher marginal utility per rupee (MU/P).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-19',
    categoryId: 'economics',
    question: "The 'Law of Equi-Marginal Utility' is the condition for equilibrium in which approach?",
    answer: 'Cardinal Approach',
    options: [
      'Ordinal Approach',
      'Cardinal Approach',
      'Production Theory',
      'Revealed Preference Theory',
    ],
    explanation:
      'Also known as Gossen’s Second Law, the Law of Equi-Marginal Utility (MUx/Px = MUy/Py = MUm) is the two-commodity consumer equilibrium condition under Alfred Marshall’s Cardinal Utility approach.',
    tip: 'Law of Equi-Marginal Utility = Cardinal Utility Approach (Gossen’s Second Law).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-20',
    categoryId: 'economics',
    question: 'What is the absolute slope of the budget line if Px = 50 and Py = 25?',
    answer: '2',
    options: ['0.5', '2', '75', '1.25'],
    explanation:
      'The magnitude of the slope of the budget line is the ratio of the price of the horizontal-axis good to the vertical-axis good: Px / Py = 50 / 25 = 2.',
    tip: 'Slope of Budget Line = Px / Py = 50 / 25 = 2.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-21',
    categoryId: 'economics',
    question: 'Which property of Indifference Curves is violated if they are allowed to intersect?',
    answer: 'Transitivity and Consistency',
    options: ['Convexity', 'Transitivity and Consistency', 'Non-satiety', 'Diminishing MRS'],
    explanation:
      'If two indifference curves intersect, the common point of intersection would simultaneously represent two distinct levels of satisfaction, violating transitivity of preferences.',
    tip: 'Intersecting ICs violate Transitivity and Consistency.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-22',
    categoryId: 'economics',
    question: 'In the budget constraint equation M = Px · X + Py · Y, what does M represent?',
    answer: 'Total Money Income',
    options: [
      'Marginal Utility',
      'Market Price',
      'Total Money Income',
      'Marginal Rate of Substitution',
    ],
    explanation:
      'In the standard budget constraint equation M = Px·X + Py·Y, M represents the fixed nominal money income (budget) available to the consumer.',
    tip: 'M = Total Money Income of the consumer.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-23',
    categoryId: 'economics',
    question:
      "If two goods are 'Perfect Complements' (like left and right shoes), the Indifference Curve will be:",
    answer: 'Right-angled (L-shaped)',
    options: [
      'A straight line',
      'Right-angled (L-shaped)',
      'Concave to the origin',
      'Parallel to the X-axis',
    ],
    explanation:
      'For perfect complements consumed in a fixed proportion, having extra units of one good without the matching complement adds zero utility (MRS = 0 or ∞), creating a right-angled (L-shaped) indifference curve.',
    tip: 'Perfect Complements = Right-angled (L-shaped) IC; Perfect Substitutes = Straight line.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-24',
    categoryId: 'economics',
    question: "What is the primary difference between a 'Shift' and a 'Rotation' of the budget line?",
    answer: 'Shifts are parallel movements; rotations change the slope.',
    options: [
      'Shifts are caused by price changes; rotations by income changes.',
      'Shifts are parallel movements; rotations change the slope.',
      'Shifts only happen in the Cardinal approach.',
      'There is no functional difference.',
    ],
    explanation:
      'A shift is a parallel movement of the entire budget line caused by a change in money income (constant slope), whereas a rotation changes the slope (Px/Py) due to a change in the relative price of one good.',
    tip: 'Shift = parallel (income change); Rotation = slope changes (price change).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-25',
    categoryId: 'economics',
    question: 'At the point of satiety, Marginal Utility (MU) is:',
    answer: 'Zero',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    explanation:
      'The point of satiety (full satisfaction) is the point where Total Utility (TU) reaches its maximum and an additional unit yields zero extra satisfaction (MU = 0).',
    tip: 'Point of Satiety: TU is Maximum and MU = 0.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-26',
    categoryId: 'economics',
    question: "Which of the following describes 'Giffen Goods' in the context of consumer theory?",
    answer: 'Inferior goods for which the income effect outweighs the substitution effect.',
    options: [
      'Goods that have a perfectly horizontal IC.',
      'Inferior goods for which the income effect outweighs the substitution effect.',
      'Luxury goods with high prestige value.',
      'Goods that are consumed in a fixed 1:1 ratio.',
    ],
    explanation:
      'Giffen goods are strongly inferior staple goods where the negative income effect is so large that it outweighs the positive substitution effect when price falls, causing quantity demanded to fall as price falls.',
    tip: 'All Giffen goods are inferior goods where Income Effect > Substitution Effect.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-27',
    categoryId: 'economics',
    question:
      'If a consumer is at a point on the budget line where the IC is steeper than the budget line, they should:',
    answer: 'Buy more of Good X.',
    options: [
      'Buy more of Good Y.',
      'Buy more of Good X.',
      'Do nothing, as they are already at equilibrium.',
      'Reduce consumption of both goods.',
    ],
    explanation:
      'A steeper indifference curve means the slope of the IC (MRSxy) is greater than the slope of the budget line (Px/Py). The consumer values X more than its market cost and should move down the budget line by buying more of Good X.',
    tip: 'Steeper IC means MRSxy > Px/Py -> Buy more X.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-cb-pdf-28',
    categoryId: 'economics',
    question: 'What is the economic meaning of the X-intercept of a budget line?',
    answer: 'The maximum quantity of Good X that can be bought with the total income.',
    options: [
      'The price of Good X.',
      'The maximum quantity of Good X that can be bought with the total income.',
      'The marginal utility of Good X.',
      'The point where MRS is zero.',
    ],
    explanation:
      'The X-intercept (M / Px) represents the bundle where the consumer spends 100% of total money income on Good X and buys zero units of Good Y.',
    tip: 'X-intercept = M / Px (maximum affordable units of X).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-cb-pdf-29',
    categoryId: 'economics',
    question: "Indifference curves for two 'Bads' (like pollution and garbage) would be:",
    answer: 'Downward sloping and concave to the origin.',
    options: [
      'Downward sloping and convex.',
      'Upward sloping.',
      'Downward sloping and concave to the origin.',
      'Vertical lines.',
    ],
    explanation:
      'For two economic bads, lower curves closer to the origin represent higher utility, and because consumers prefer a moderate mix over an extreme concentration of one bad, the curve is downward sloping and concave to the origin.',
    tip: 'Two Goods = Convex to origin; Two Bads = Concave to origin.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-cb-pdf-30',
    categoryId: 'economics',
    question: 'Total Utility (TU) starts decreasing when Marginal Utility (MU) becomes:',
    answer: 'Negative',
    options: ['Zero', 'Negative', 'Positive but decreasing', 'Greater than one'],
    explanation:
      'As long as MU is positive, TU rises. When MU = 0, TU is at its maximum. Once MU becomes negative, consuming an extra unit subtracts from total satisfaction and TU begins to fall.',
    tip: 'TU falls only when MU < 0 (Negative).',
    difficulty: 'beginner',
  },

  // =========================================================================
  // PART 2: Demand Analysis & Curve Shifts (Statement & Practice MCQs)
  // =========================================================================
  {
    id: 'econ-da-pdf-1',
    categoryId: 'economics',
    question:
      'Consider the following statements regarding the Law of Demand:\n1. It indicates a functional relationship where price is the independent variable and quantity demanded is the dependent variable.\n2. The law assumes that the consumer’s income and tastes remain constant.\nWhich of the statements given above is/are correct?',
    answer: 'Both 1 and 2',
    options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    explanation:
      'In the demand function Qd = f(P), price (P) is the independent variable and quantity demanded (Qd) is the dependent variable, holding non-price determinants like income and tastes constant (ceteris paribus).',
    tip: 'Qd = f(P): Price is independent, Quantity Demanded is dependent.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-da-pdf-2',
    categoryId: 'economics',
    question:
      'Which of the following scenarios would cause a rightward shift in the demand curve for a normal good?\n1. An increase in the price of a substitute good.\n2. A decrease in the price of a complementary good.\n3. A decrease in the consumer’s disposable income.\nSelect the correct answer using the codes below:',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2, and 3'],
    explanation:
      'Higher price of a substitute makes consumers switch to this good (shifting demand right), and cheaper complements increase joint demand (shifting demand right). A decrease in income reduces demand for a normal good (shifting it left).',
    tip: 'Rightward shift of normal good = Price of substitute ↑, Price of complement ↓, Income ↑.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-da-pdf-3',
    categoryId: 'economics',
    question:
      'Analysis of Curve Dynamics:\nStatement A: A movement along the demand curve is caused by a change in the price of the commodity itself.\nStatement B: A shift in the demand curve occurs due to changes in factors other than the price of the commodity.\nWhich of the following is true?',
    answer: 'Both statements are correct and related.',
    options: [
      'Statement A is correct, but B is incorrect.',
      'Statement B is correct, but A is incorrect.',
      'Both statements are correct and related.',
      'Both statements are incorrect.',
    ],
    explanation:
      'Own-price changes cause expansion or contraction (movement along the same demand curve), whereas changes in non-price determinants (income, tastes, related goods) shift the entire demand curve.',
    tip: 'Own price = Movement along curve; Non-price factors = Shift of curve.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-4',
    categoryId: 'economics',
    question: 'Which of the following causes a movement along the demand curve rather than a shift?',
    answer: 'A change in the price of the good itself',
    options: [
      'A change in consumer income',
      'A change in the price of the good itself',
      'A change in the price of substitutes',
      'A change in consumer tastes',
    ],
    explanation:
      'Only a change in the own price of the commodity causes a change in quantity demanded (expansion or contraction), represented as a movement along the existing demand curve.',
    tip: 'Change in own price = Movement along the demand curve.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-5',
    categoryId: 'economics',
    question: 'If the price of tea rises, the demand for coffee (a substitute) will likely:',
    answer: 'Shift to the right',
    options: ['Shift to the left', 'Remain unchanged', 'Shift to the right', 'Become vertical'],
    explanation:
      'Since tea and coffee are substitutes, a rise in the price of tea induces consumers to switch to coffee, increasing coffee demand at every price level and shifting its demand curve to the right.',
    tip: 'Substitutes have a positive cross-price relationship.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-6',
    categoryId: 'economics',
    question: "An 'increase in demand' is graphically represented by:",
    answer: 'A rightward shift of the curve',
    options: [
      'A downward movement along the curve',
      'An upward movement along the curve',
      'A leftward shift of the curve',
      'A rightward shift of the curve',
    ],
    explanation:
      'An increase in demand (due to favorable changes in non-price factors) means consumers buy a larger quantity at every given price, shifting the entire demand curve to the right.',
    tip: 'Increase in demand = Rightward shift; Expansion in demand = Downward movement.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-7',
    categoryId: 'economics',
    question: 'Which of the following would shift the demand curve for new cars to the left?',
    answer: 'An increase in the price of gasoline (a complement)',
    options: [
      'A decrease in the price of cars',
      'An increase in the price of gasoline (a complement)',
      'An increase in consumer income',
      'A successful ad campaign for cars',
    ],
    explanation:
      'Gasoline and cars are complementary goods. A rise in gasoline prices increases the cost of operating a car, reducing the demand for cars and shifting the car demand curve to the left.',
    tip: 'Rise in price of a complement shifts the demand curve to the left.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-8',
    categoryId: 'economics',
    question: 'The Law of Demand states that there is an inverse relationship between:',
    answer: 'Price and Quantity Demanded',
    options: [
      'Income and Demand',
      'Price and Quantity Demanded',
      'Price and Supply',
      'Tastes and Price',
    ],
    explanation:
      'Ceteris paribus, when the price of a commodity rises, its quantity demanded falls, and when price falls, quantity demanded rises.',
    tip: 'Law of Demand = Inverse relationship between Price and Quantity Demanded.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-9',
    categoryId: 'economics',
    question: "A good is considered 'inferior' if:",
    answer: 'Its demand falls when income rises',
    options: [
      'Its demand rises when income rises',
      'Its demand falls when income rises',
      'Its demand is unrelated to income',
      'It is of low quality',
    ],
    explanation:
      'In economics, an inferior good is defined by a negative income elasticity of demand (Ey < 0): as consumer income rises, consumers replace it with superior alternatives, causing its demand to fall.',
    tip: 'Inferior good: Income ↑ => Demand ↓ (Negative income effect).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-10',
    categoryId: 'economics',
    question:
      'If consumers expect the price of a good to rise sharply next month, what happens to current demand?',
    answer: 'Current demand shifts right',
    options: [
      'Current demand shifts left',
      'Current demand shifts right',
      'No change in current demand',
      'Quantity demanded falls',
    ],
    explanation:
      'Expectations of future price increases prompt consumers to purchase more in the present to avoid paying higher prices later, shifting current demand to the right.',
    tip: 'Expected future price rise -> Current demand increases (shifts right).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-11',
    categoryId: 'economics',
    question: 'Ceteris Paribus in demand analysis means:',
    answer: 'All other things remaining constant',
    options: [
      'Variable prices',
      'Market equilibrium',
      'All other things remaining constant',
      'Consumer irrationality',
    ],
    explanation:
      'Ceteris paribus is a Latin phrase meaning "other things being equal" or "all other things remaining constant", used to isolate the effect of price on quantity demanded.',
    tip: 'Ceteris Paribus = Other things remaining constant.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-12',
    categoryId: 'economics',
    question: 'The horizontal summation of individual demand curves results in:',
    answer: 'The market demand curve',
    options: [
      'The supply curve',
      'The market demand curve',
      'The marginal utility curve',
      'The average cost curve',
    ],
    explanation:
      'Summing the quantities demanded horizontally across all individual consumers at each price level yields the market demand curve for a private good.',
    tip: 'Market demand = Horizontal summation of individual demand curves.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-13',
    categoryId: 'economics',
    question:
      'What happens to the demand for bread if the price of butter (a complement) increases?',
    answer: 'Demand for bread decreases',
    options: [
      'Demand for bread increases',
      'Demand for bread decreases',
      'Demand for bread stays same',
      'Price of bread falls',
    ],
    explanation:
      'Bread and butter are complementary goods consumed jointly. An increase in the price of butter reduces quantity demanded of butter and shifts the demand for bread to the left (decreases).',
    tip: 'Price of complement ↑ => Demand for given good ↓.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-14',
    categoryId: 'economics',
    question: 'Complementary goods are those that are:',
    answer: 'Used together',
    options: [
      'Used in place of each other',
      'Used together',
      'Not related',
      'Giffen goods',
    ],
    explanation:
      'Complementary goods (such as car and petrol, or pen and ink) are consumed jointly to satisfy a particular want.',
    tip: 'Complements = used together; Substitutes = used in place of each other.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-15',
    categoryId: 'economics',
    question: 'Which of the following is an exception to the Law of Demand?',
    answer: 'Giffen goods',
    options: ['Normal goods', 'Inferior goods', 'Giffen goods', 'Public goods'],
    explanation:
      'Giffen goods violate the Law of Demand because their negative income effect is stronger than the substitution effect, resulting in an upward-sloping demand curve.',
    tip: 'Exceptions to Law of Demand: Giffen goods and Veblen (conspicuous) goods.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-16',
    categoryId: 'economics',
    question:
      'What happens to the demand curve when there is a decrease in the number of consumers?',
    answer: 'Shifts to the left',
    options: [
      'Shifts to the right',
      'Shifts to the left',
      'Movement upwards',
      'Movement downwards',
    ],
    explanation:
      'A smaller population or fewer buyers in the market reduces aggregate quantity demanded at every price, shifting the market demand curve to the left.',
    tip: 'Decrease in number of buyers -> Leftward shift of market demand.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-17',
    categoryId: 'economics',
    question: "The 'Income Effect' refers to the change in consumption resulting from a change in:",
    answer: 'Real income due to price change',
    options: ['Nominal income', 'Real income due to price change', 'Tax rates', 'Savings'],
    explanation:
      'In price theory, the income effect measures the change in quantity demanded resulting from the change in a consumer’s real purchasing power caused by a change in the price of a commodity.',
    tip: 'Price Effect = Substitution Effect + Income Effect (change in real purchasing power).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-da-pdf-18',
    categoryId: 'economics',
    question: 'Expansion of demand is caused by:',
    answer: 'Fall in price',
    options: ['Rise in price', 'Fall in price', 'Rise in income', 'Change in fashion'],
    explanation:
      'Expansion of demand (or extension of quantity demanded) is a downward movement along the same demand curve caused specifically by a fall in the own price of the commodity.',
    tip: 'Fall in own price = Expansion of demand; Rise in own price = Contraction of demand.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-19',
    categoryId: 'economics',
    question: 'Which factor does NOT shift the demand curve?',
    answer: 'Price of the product',
    options: ['Income', 'Tastes', 'Price of the product', 'Population'],
    explanation:
      'A change in the price of the product itself causes a movement along the demand curve, not a shift of the demand curve.',
    tip: 'Own price never shifts the demand curve.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-20',
    categoryId: 'economics',
    question: 'Veblen goods are often associated with:',
    answer: 'Status symbols',
    options: ['Basic necessities', 'Status symbols', 'Inferior quality', 'Free goods'],
    explanation:
      'Identified by Thorstein Veblen, Veblen goods (conspicuous consumption goods like diamonds and luxury cars) are bought as status symbols whose appeal rises as their price rises.',
    tip: 'Veblen Effect = Conspicuous consumption / Prestige status symbols.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-21',
    categoryId: 'economics',
    question: 'The slope of a typical demand curve is:',
    answer: 'Negative',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    explanation:
      'Because price and quantity demanded move in opposite directions under the Law of Demand, a typical demand curve slopes downward from left to right (negative slope).',
    tip: 'Inverse relationship = Negative slope (-ΔP / ΔQ).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-22',
    categoryId: 'economics',
    question: "A 'Change in Quantity Demanded' refers to:",
    answer: 'A movement along the curve',
    options: [
      'A shift in the curve',
      'A movement along the curve',
      'A change in income',
      'A change in taste',
    ],
    explanation:
      '"Change in Quantity Demanded" means expansion or contraction along the same demand curve due to an own-price change, whereas "Change in Demand" means a shift of the entire curve.',
    tip: 'Change in Quantity Demanded = Movement; Change in Demand = Shift.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-23',
    categoryId: 'economics',
    question: 'Demand for a necessity like salt is generally:',
    answer: 'Inelastic',
    options: ['Highly elastic', 'Inelastic', 'Perfectly elastic', 'Unitary elastic'],
    explanation:
      'Essential necessities like salt have no close substitutes and account for a tiny fraction of a household’s budget, making their demand highly inelastic.',
    tip: 'Necessities = Inelastic demand; Luxuries = Elastic demand.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-24',
    categoryId: 'economics',
    question:
      'If the price of a good increases from $10 to $12 and quantity demanded falls, this is:',
    answer: 'Contraction',
    options: ['Contraction', 'Expansion', 'Decrease in demand', 'Increase in demand'],
    explanation:
      'A decrease in quantity demanded caused by a rise in the own price of the good ($10 to $12) is an upward movement along the demand curve called Contraction of demand.',
    tip: 'Price ↑ and Qd ↓ = Contraction of demand.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-25',
    categoryId: 'economics',
    question: 'Which of these would cause a leftward shift in the demand for umbrellas?',
    answer: 'End of monsoon',
    options: [
      'Start of monsoon',
      'End of monsoon',
      'Decrease in price of umbrellas',
      'Increase in population',
    ],
    explanation:
      'An unfavorable seasonal/weather change (end of monsoon) reduces the need for umbrellas at every price, shifting the demand curve to the left.',
    tip: 'Unfavorable seasonal change shifts the demand curve leftward.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-26',
    categoryId: 'economics',
    question: 'A decrease in the price of a substitute good leads to:',
    answer: 'Leftward shift',
    options: ['Rightward shift', 'Leftward shift', 'Upward movement', 'Downward movement'],
    explanation:
      'When a substitute becomes cheaper, consumers switch toward the cheaper substitute, decreasing demand for the given good (leftward shift).',
    tip: 'Substitute price ↓ => Demand for given good shifts left.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-27',
    categoryId: 'economics',
    question: 'Substitution effect happens because consumers:',
    answer: 'Switch to cheaper alternatives',
    options: [
      'Have more money',
      'Switch to cheaper alternatives',
      'Like the brand more',
      'Follow trends',
    ],
    explanation:
      'The substitution effect reflects the tendency of rational consumers to substitute relatively cheaper goods for relatively dearer goods holding real utility constant.',
    tip: 'Substitution effect is always negative (price and quantity move in opposite directions).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-da-pdf-28',
    categoryId: 'economics',
    question: 'Effective demand requires desire, ability to pay, and:',
    answer: 'Willingness to spend',
    options: ['Supply', 'Willingness to spend', 'Government permission', 'Fixed price'],
    explanation:
      'In economics, mere desire is not demand. Effective demand requires three pillars: (1) Desire for the commodity, (2) Means/ability to purchase, and (3) Willingness to spend those means.',
    tip: 'Effective Demand = Desire + Ability to Pay + Willingness to Spend.',
    difficulty: 'beginner',
  },

  // =========================================================================
  // PART 3: Elasticity of Demand Practice Sets (20 MCQs)
  // =========================================================================
  {
    id: 'econ-ed-pdf-1',
    categoryId: 'economics',
    question:
      'When demand for a product remains unchanged regardless of a change in its price, it is called:',
    answer: 'Perfectly Inelastic Demand',
    options: [
      'Perfectly Elastic Demand',
      'Unitary Elastic Demand',
      'Perfectly Inelastic Demand',
      'Relatively Elastic Demand',
    ],
    explanation:
      'In Perfectly Inelastic Demand (Ed = 0), quantity demanded stays completely constant regardless of price hikes or drops (represented by a vertical demand curve), common in life-saving drugs.',
    tip: 'Ed = 0 -> Perfectly Inelastic Demand (Vertical line).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-2',
    categoryId: 'economics',
    question:
      'If an increase in the price of Tea leads to an increase in the demand for Coffee, what type of elasticity is this?',
    answer: 'Cross Elasticity',
    options: ['Income Elasticity', 'Cross Elasticity', 'Price Elasticity', 'Unitary Elasticity'],
    explanation:
      'Cross Elasticity of Demand (Ec) measures the responsiveness of quantity demanded of one good (Coffee) to a change in the price of a related good (Tea).',
    tip: 'Cross Elasticity = %ΔQx / %ΔPy.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-3',
    categoryId: 'economics',
    question:
      'The demand for luxury items like high-end smartphones or Air Conditioners is generally:',
    answer: 'Elastic',
    options: ['Inelastic', 'Elastic', 'Perfectly Inelastic', 'Zero Elasticity'],
    explanation:
      'Luxury goods have relatively elastic demand (Ed > 1) because consumers can easily postpone or forgo their purchase if prices rise.',
    tip: 'Luxury goods have Elastic Demand (Ed > 1).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-4',
    categoryId: 'economics',
    question: 'What is the shape of a Unitary Elastic demand curve?',
    answer: 'Rectangular Hyperbola',
    options: [
      'Horizontal Line',
      'Vertical Line',
      'Rectangular Hyperbola',
      'Steep Sloping Curve',
    ],
    explanation:
      'A demand curve with unitary elasticity (Ed = 1) at every point takes the shape of a Rectangular Hyperbola (P × Q = Constant), where total expenditure remains invariant to price changes.',
    tip: 'Rectangular Hyperbola = Unitary Elastic (Ed = 1) everywhere; Total Expenditure is constant.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-5',
    categoryId: 'economics',
    question: 'A product with a large number of close substitutes tends to have:',
    answer: 'More Elastic Demand',
    options: [
      'More Elastic Demand',
      'Less Elastic Demand',
      'Perfectly Inelastic Demand',
      'Unitary Elastic Demand',
    ],
    explanation:
      'When many close substitutes are available, even a small price increase prompts consumers to switch to competing brands, making demand highly price elastic.',
    tip: 'More substitutes = Higher price elasticity of demand.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-6',
    categoryId: 'economics',
    question:
      'Under the Geometric Method (Point Method), Elasticity of Demand on a linear demand curve is calculated as:',
    answer: 'Lower segment / Upper segment',
    options: [
      'Upper segment / Lower segment',
      'Lower segment / Upper segment',
      'Change in Price / Change in Demand',
      'Total Revenue / Price',
    ],
    explanation:
      'Under Alfred Marshall’s point/geometric method, price elasticity at any point on a straight-line demand curve is equal to Lower Segment ÷ Upper Segment.',
    tip: 'Point Elasticity = Lower Segment / Upper Segment.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ed-pdf-7',
    categoryId: 'economics',
    question: 'Cross elasticity for complementary goods (like Car and Petrol) is:',
    answer: 'Negative',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    explanation:
      'When the price of petrol rises, the demand for cars falls. Because the price of one good and the demand for its complement move in opposite directions, cross elasticity is negative.',
    tip: 'Cross Elasticity: Positive for Substitutes, Negative for Complements, Zero for Unrelated goods.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-8',
    categoryId: 'economics',
    question: 'How does the time period affect price elasticity of demand?',
    answer: 'Demand is more elastic in the long run',
    options: [
      'Demand is inelastic in the long run',
      'Demand is more elastic in the long run',
      'Time has no effect on elasticity',
      'Demand is highly elastic in the short run',
    ],
    explanation:
      'In the long run, consumers have more time to adjust consumption habits and discover or switch to substitutes, making demand more price elastic than in the short run.',
    tip: 'Longer time horizon = More elastic demand.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-9',
    categoryId: 'economics',
    question:
      'Under the Total Expenditure (Total Outlay) Method, if a fall in price leads to an increase in total expenditure, elasticity is:',
    answer: 'Ed > 1',
    options: ['Ed < 1', 'Ed = 1', 'Ed > 1', 'Ed = 0'],
    explanation:
      'Under Marshall’s Total Outlay Method, when price and total expenditure move in opposite directions (price falls -> total outlay increases), demand is elastic (Ed > 1).',
    tip: 'Inverse movement of Price and Total Outlay => Elastic (Ed > 1); Same direction => Inelastic (Ed < 1).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ed-pdf-10',
    categoryId: 'economics',
    question:
      'Statement: A 10% increase in price leads to a 25% decrease in quantity demanded.\nConclusion: The demand for this product is highly elastic.',
    answer: 'Both statement and conclusion are correct.',
    options: [
      'Both statement and conclusion are correct.',
      'Only the statement is correct.',
      'Only the conclusion is correct.',
      'Both statement and conclusion are incorrect.',
    ],
    explanation:
      'Since the percentage change in quantity demanded (25%) exceeds the percentage change in price (10%), |Ed| = 25% / 10% = 2.5 > 1, which indicates elastic demand.',
    tip: '|Ed| = %ΔQ / %ΔP = 25 / 10 = 2.5 (> 1, Elastic).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-11',
    categoryId: 'economics',
    question:
      'Statement: Essential life-saving medicines often have an elasticity of demand close to zero.\nConclusion: Consumers are less sensitive to price changes for necessary goods.',
    answer: 'The statement explains the conclusion correctly.',
    options: [
      'The statement explains the conclusion correctly.',
      'The statement and conclusion are unrelated.',
      'The conclusion is false.',
      'The statement is false.',
    ],
    explanation:
      'Life-saving medicines are indispensable necessities with no substitutes, so patients must purchase them regardless of price changes, yielding near-zero price sensitivity.',
    tip: 'Necessities have low price sensitivity (inelastic demand).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-ed-pdf-12',
    categoryId: 'economics',
    question:
      'Statement: If the demand curve is a rectangular hyperbola, elasticity is constant at all points.\nConclusion: The total expenditure on the good remains unchanged regardless of price changes.',
    answer: 'Both statement and conclusion are correct.',
    options: [
      'Both statement and conclusion are correct.',
      'The statement is correct, but the conclusion is false.',
      'The statement is incorrect.',
      'Both are incorrect.',
    ],
    explanation:
      'A rectangular hyperbola demand curve has constant unitary elasticity (Ed = 1) at every point, meaning any percentage change in price is exactly offset by an equal percentage change in quantity, keeping Total Expenditure (P × Q) constant.',
    tip: 'Rectangular hyperbola: Ed = 1 and Total Expenditure = Constant.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ed-pdf-13',
    categoryId: 'economics',
    question:
      'Statement: Income elasticity for "Giffen goods" is negative.\nConclusion: As income increases, the demand for Giffen goods falls.',
    answer: 'Both are correct.',
    options: [
      'Both are correct.',
      'Only the conclusion is correct.',
      'Giffen goods have positive income elasticity.',
      'Income does not affect Giffen goods.',
    ],
    explanation:
      'All Giffen goods are inferior goods, so their income elasticity of demand is negative (Ey < 0), meaning demand drops as consumer income rises.',
    tip: 'Giffen goods are a subset of inferior goods (Ey < 0).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ed-pdf-14',
    categoryId: 'economics',
    question:
      'Statement: The midpoint (arc) formula is used to calculate elasticity between two points.\nConclusion: This method gives the same elasticity value regardless of whether price increases or decreases.',
    answer: 'Both are correct.',
    options: [
      'Both are correct.',
      'The midpoint formula is only for increases.',
      'The conclusion is false.',
      'Both are incorrect.',
    ],
    explanation:
      'The arc elasticity midpoint formula uses the average of initial and final prices [(P1+P2)/2] and quantities [(Q1+Q2)/2] as the base, eliminating directional bias between price increases and decreases.',
    tip: 'Arc elasticity midpoint formula eliminates directional bias.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-ed-pdf-15',
    categoryId: 'economics',
    question:
      'Statement: If Ed > 1, a decrease in price will lead to an increase in total revenue.\nConclusion: The gain in revenue from selling more units outweighs the loss from the lower price.',
    answer: 'The conclusion correctly explains the result of the statement.',
    options: [
      'The conclusion correctly explains the result of the statement.',
      'The statement is false.',
      'Total revenue would decrease.',
      'The conclusion is unrelated to the statement.',
    ],
    explanation:
      'When demand is elastic (Ed > 1), a given percentage cut in price generates a larger percentage increase in quantity sold, so the volume gain outweighs the lower unit price and Total Revenue rises.',
    tip: 'When Ed > 1, lowering price increases Total Revenue.',
    difficulty: 'intermediate',
  },

  // =========================================================================
  // PART 4: Theory of Production, Isoquants & Isocost Equilibrium (22 MCQs)
  // =========================================================================
  {
    id: 'econ-prod-pdf-1',
    categoryId: 'economics',
    question:
      'When Average Product (AP) is equal to Marginal Product (MP), what is the status of AP?',
    answer: 'AP is at its maximum point',
    options: [
      'AP is falling',
      'AP is at its maximum point',
      'AP is zero',
      'AP is rising',
    ],
    explanation:
      'According to the relationship between Average Product (AP) and Marginal Product (MP), when MP > AP, AP rises; when MP = AP, AP reaches its maximum point; and when MP < AP, AP falls.',
    tip: 'MP curve always intersects AP curve at AP’s maximum point.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-2',
    categoryId: 'economics',
    question: 'Where does Stage 2 of the Law of Variable Proportions end?',
    answer: 'Where MP becomes zero',
    options: [
      'Where MP becomes zero',
      'Where MP becomes negative',
      'Where AP is zero',
      'Where TP begins to fall',
    ],
    explanation:
      'Stage 2 (Stage of Diminishing Returns) begins where AP is at its maximum (MP = AP) and ends at the point where Marginal Product becomes zero (MP = 0) and Total Product (TP) is at its maximum.',
    tip: 'Stage 2 ends where MP = 0 and TP is maximum.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-3',
    categoryId: 'economics',
    question:
      'If increasing all inputs by 20% results in a 30% increase in output, this is known as:',
    answer: 'Increasing Returns to Scale',
    options: [
      'Constant Returns to Scale',
      'Decreasing Returns to Scale',
      'Increasing Returns to Scale',
      'Negative Returns',
    ],
    explanation:
      'When a proportional increase in all inputs (20%) leads to a more than proportional increase in output (30%), the production function exhibits Increasing Returns to Scale (IRS).',
    tip: '%Δ Output > %Δ Inputs = Increasing Returns to Scale (IRS).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-4',
    categoryId: 'economics',
    question: 'What is the primary reason for Stage 3 (Negative Returns) in the Law of Variable Proportions?',
    answer: 'Over-utilization and overcrowding of fixed factors',
    options: [
      'Increased specialization',
      'Over-utilization and overcrowding of fixed factors',
      'Cheaper inputs',
      'Improved technology',
    ],
    explanation:
      'When excessive variable inputs (labor) are added to a fixed capacity in the short run, workers get in each other’s way and over-utilize fixed machinery, causing Marginal Product to turn negative and Total Product to decline.',
    tip: 'Stage 3 (Negative Returns) is caused by overcrowding of the fixed factor.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-5',
    categoryId: 'economics',
    question: 'What is the discrete formula for Marginal Product (MP)?',
    answer: 'MP = TPn - TPn-1',
    options: [
      'MP = TP / L',
      'MP = TPn - TPn-1',
      'MP = AP × L',
      'MP = sum of TP',
    ],
    explanation:
      'Marginal Product (MP) is the addition to Total Product (TP) resulting from employing one additional unit of the variable input: MPn = TPn - TPn-1 (or ΔTP / ΔL).',
    tip: 'MPn = TPn - TPn-1; AP = TP / L; TP = ∑MP.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-6',
    categoryId: 'economics',
    question: 'The Law of Variable Proportions is related to which time period?',
    answer: 'Short-run',
    options: ['Long-run', 'Short-run', 'Very Long-run', 'Market Period'],
    explanation:
      'The Law of Variable Proportions (Returns to a Factor) operates in the short run, where at least one factor of production (capital/land) is fixed while labor is variable. Returns to Scale operates in the long run.',
    tip: 'Short-run = Law of Variable Proportions; Long-run = Returns to Scale.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-7',
    categoryId: 'economics',
    question: "What happens at the 'Point of Inflexion' on the Total Product curve?",
    answer: 'MP is at its maximum',
    options: [
      'TP starts falling',
      'MP is at its maximum',
      'AP is zero',
      'MP is zero',
    ],
    explanation:
      'The Point of Inflexion is the point on the Total Product (TP) curve where curvature changes from concave upward (TP increasing at an increasing rate) to concave downward (TP increasing at a decreasing rate); at this exact point, Marginal Product (MP) reaches its peak.',
    tip: 'Point of Inflexion on TP curve = Maximum point of MP.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-pdf-8',
    categoryId: 'economics',
    question:
      'In which stage of the Law of Variable Proportions does a rational producer always prefer to operate?',
    answer: 'Stage 2',
    options: ['Stage 1', 'Stage 2', 'Stage 3', 'Any stage'],
    explanation:
      'A rational producer always operates in Stage 2 (Stage of Diminishing Returns), where both MP and AP of the variable and fixed factors are positive but declining, ensuring efficient utilization of inputs.',
    tip: 'Stage 2 is the only stage of rational production.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-9',
    categoryId: 'economics',
    question: 'In Returns to Scale, if all inputs are doubled and output also doubles, it is called:',
    answer: 'Constant Returns to Scale',
    options: [
      'Increasing Returns',
      'Constant Returns to Scale',
      'Variable Returns',
      'Negative Returns',
    ],
    explanation:
      'When all inputs and total output change by the exact same proportion (e.g., 100% increase in inputs yields a 100% increase in output), it is called Constant Returns to Scale (CRS).',
    tip: 'Equal percentage change in inputs and output = Constant Returns to Scale (CRS).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-10',
    categoryId: 'economics',
    question: 'Which of the following is an example of a fixed input in the short-run?',
    answer: 'Factory building rent',
    options: ['Raw material', 'Labor', 'Factory building rent', 'Electricity bill'],
    explanation:
      'Fixed inputs (such as factory buildings, plant lease, and heavy machinery) cannot be varied quickly in the short run, and their costs remain constant even when output is zero.',
    tip: 'Factory building rent is a fixed input/cost in the short run.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-11',
    categoryId: 'economics',
    question: 'What does an Isoquant (Equal Product Curve) represent in production theory?',
    answer: 'All combinations of two inputs (Labor and Capital) that yield the same level of total output',
    options: [
      'All combinations of two inputs (Labor and Capital) that yield the same level of total output',
      'All combinations of two inputs that can be bought for a given total cost',
      'The maximum profit a firm can earn in the short run',
      'The relationship between product price and quantity supplied',
    ],
    explanation:
      'Derived from "iso" (equal) and "quant" (quantity), an Isoquant (or Production Indifference Curve) shows all combinations of two factors (Labor L and Capital K) that produce an identical quantity of output.',
    tip: 'Isoquant = Equal Product Curve (producer’s equivalent of an Indifference Curve).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-pdf-12',
    categoryId: 'economics',
    question:
      'The slope of an Isoquant curve is measured by the Marginal Rate of Technical Substitution (MRTS_LK), which equals:',
    answer: 'ΔK / ΔL = MP_L / MP_K',
    options: [
      'ΔK / ΔL = MP_L / MP_K',
      'ΔL / ΔK = MP_K / MP_L',
      'w / r (ratio of factor prices)',
      'Total Cost / Total Output',
    ],
    explanation:
      'MRTS of Labor for Capital (MRTS_LK) is the rate at which Capital can be substituted by Labor while keeping total output constant: MRTS_LK = -ΔK / ΔL = MP_L / MP_K.',
    tip: 'Slope of Isoquant = MRTS_LK = MP_L / MP_K.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-pdf-13',
    categoryId: 'economics',
    question:
      'If two factors of production must be used in fixed proportions (e.g., one driver per truck), the Isoquant is:',
    answer: 'L-Shaped (Leontief Isoquant)',
    options: [
      'Linear (straight line)',
      'L-Shaped (Leontief Isoquant)',
      'Smoothly convex to the origin',
      'Upward sloping',
    ],
    explanation:
      'When inputs are perfect complements used in fixed proportions (zero substitutability), the isoquant is right-angled or L-shaped, known as a Leontief Isoquant.',
    tip: 'Fixed-proportion inputs = L-shaped (Leontief) Isoquant; Perfect substitute inputs = Linear Isoquant.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-pdf-14',
    categoryId: 'economics',
    question: 'What do "Ridge Lines" represent on an Isoquant map?',
    answer: 'The boundaries of the economic region of production where the Marginal Product of a factor becomes zero',
    options: [
      'The boundaries of the economic region of production where the Marginal Product of a factor becomes zero',
      'Lines connecting points of maximum total cost',
      'Lines showing constant returns to scale only',
      'The market supply schedule of the industry',
    ],
    explanation:
      'Upper and lower Ridge Lines connect the points on isoquants where the Marginal Product of Capital (MP_K = 0) or Labor (MP_L = 0) is zero. A rational producer operates strictly inside the ridge lines where both inputs have positive marginal products.',
    tip: 'Ridge lines enclose the rational economic region where MP_L > 0 and MP_K > 0.',
    difficulty: 'advanced',
  },
  {
    id: 'econ-prod-pdf-15',
    categoryId: 'economics',
    question:
      'In the Isocost equation TC = (w × L) + (r × K), where w is the wage rate of Labor (L) and r is the rental price of Capital (K), what is the slope of the Isocost line?',
    answer: '-w / r (ratio of factor prices)',
    options: [
      '-w / r (ratio of factor prices)',
      'MP_L / MP_K',
      'TC / w',
      '-r / TC',
    ],
    explanation:
      'An Isocost line represents all combinations of Labor and Capital a firm can purchase for a given total cost outlay TC. Rewriting K = (TC/r) - (w/r)L shows the slope is -w/r.',
    tip: 'Slope of Isocost line = -w / r (ratio of wage rate to rental rate of capital).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-pdf-16',
    categoryId: 'economics',
    question:
      'What are the necessary and sufficient conditions for Producer’s Equilibrium (Least Cost Combination of inputs)?',
    answer: 'MRTS_LK = w / r (or MP_L / w = MP_K / r) and the Isoquant is convex to the origin',
    options: [
      'MRTS_LK = w / r (or MP_L / w = MP_K / r) and the Isoquant is convex to the origin',
      'Isoquant intersects the Isocost line at the X-axis',
      'MP_L = 0 and MP_K = 0',
      'Total Cost exceeds Total Revenue',
    ],
    explanation:
      'Producer’s equilibrium (minimizing cost for a given output or maximizing output for a given cost) occurs where the Isoquant is tangent to the Isocost line (MRTS_LK = MP_L/MP_K = w/r) and the Isoquant is convex to the origin.',
    tip: 'Producer Equilibrium: MRTS_LK = MP_L / MP_K = w / r.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-pdf-17',
    categoryId: 'economics',
    question: 'In production theory, what is the "Expansion Path" of a firm?',
    answer: 'A curve connecting the least-cost producer equilibrium tangency points as the firm’s budget/scale increases',
    options: [
      'A curve connecting the least-cost producer equilibrium tangency points as the firm’s budget/scale increases',
      'A line showing how market price rises during inflation',
      'The downward portion of the Marginal Product curve',
      'A horizontal line representing fixed costs',
    ],
    explanation:
      'The Expansion Path (or Scale Line) is the locus of tangency points between Isoquants and parallel Isocost lines, showing how a firm expands output most cost-efficiently as its total budget grows while factor prices remain constant.',
    tip: 'Expansion Path connects least-cost equilibrium points across increasing output levels.',
    difficulty: 'intermediate',
  },

  // =========================================================================
  // PART 5: Theory of Production — Advanced Statement-Based Set (20 MCQs)
  // =========================================================================
  {
    id: 'econ-prod-stmt-pdf-1',
    categoryId: 'economics',
    question:
      'Consider the following statements about the Short-run Production Function:\n1. At least one factor of production is fixed.\n2. The scale of production remains constant.\n3. All inputs can be changed simultaneously.\nWhich of the above statements are correct?',
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1 and 3', '1, 2, and 3'],
    explanation:
      'In the short run, fixed factors like land and heavy machinery exist and the overall scale of production remains constant. Changing all inputs simultaneously is only possible in the long run.',
    tip: 'Short-run: at least one fixed factor & constant scale; Long-run: all inputs variable.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-2',
    categoryId: 'economics',
    question:
      'Which of the following are characteristics of Stage 1 (Increasing Returns)?\n1. Total Product increases at an increasing rate.\n2. Marginal Product is rising.\n3. Fixed factors are under-utilized.\nSelect the correct option:',
    answer: '1, 2, and 3',
    options: ['Only 1', 'Only 1 and 2', '1, 2, and 3', 'Only 2 and 3'],
    explanation:
      'In Stage 1 (Increasing Returns to a Factor), fixed factors are initially under-utilized; as more variable units are added, indivisible fixed factors are used more efficiently, leading to rising MP and TP increasing rapidly.',
    tip: 'Stage 1: Fixed factors are under-utilized, MP rises (up to point of inflexion), and TP rises rapidly.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-3',
    categoryId: 'economics',
    question:
      'Regarding the relationship between AP and MP, identify the correct statements:\n1. When MP > AP, AP rises.\n2. When MP = AP, AP is at its maximum.\n3. When MP < AP, AP falls.\nWhich of these are true?',
    answer: '1, 2, and 3',
    options: ['Only 1 and 2', '1, 2, and 3', 'Only 2 and 3', 'Only 1'],
    explanation:
      'These three statements define the mathematical interaction between average and marginal product curves: when the marginal value exceeds the average, it pulls the average up; when MP = AP, AP is at its peak; when MP < AP, it pulls the average down.',
    tip: 'MP > AP => AP rises; MP = AP => AP is maximum; MP < AP => AP falls.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-stmt-pdf-4',
    categoryId: 'economics',
    question:
      "Identify the correct statements regarding the 'Point of Inflexion':\n1. It marks the end of TP increasing at an increasing rate.\n2. At this point, Marginal Product (MP) is at its maximum.\n3. It marks the end of Stage 1.\nSelect the correct code:",
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1 and 3', '1, 2, and 3'],
    explanation:
      'The point of inflexion occurs within Stage 1, specifically where TP stops increasing at an increasing rate and MP reaches its peak. Stage 1 ends slightly later where AP reaches its maximum (AP = MP).',
    tip: 'Point of Inflexion = Peak of MP (inside Stage 1). End of Stage 1 = Peak of AP (where AP = MP).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-5',
    categoryId: 'economics',
    question:
      'Why does a rational producer operate in Stage 2?\n1. TP is still increasing.\n2. Both AP and MP are positive.\n3. Fixed factors are over-congested in this stage.\nWhich statements justify operating in Stage 2?',
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1', '1, 2, and 3'],
    explanation:
      'Stage 2 is the rational range of production where Total Product continues to rise toward its maximum and both AP and MP remain positive. Over-congestion of fixed factors belongs to Stage 3 (Negative Returns).',
    tip: 'In Stage 2, TP increases at a diminishing rate and both AP > 0 and MP ≥ 0.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-6',
    categoryId: 'economics',
    question:
      "Consider these statements about 'Returns to Scale':\n1. It is a long-run concept.\n2. All factors are variable and changed in the same proportion.\n3. It explains the Law of Variable Proportions.\nWhich are correct?",
    answer: 'Only 1 and 2',
    options: ['Only 1', 'Only 1 and 2', 'Only 2 and 3', '1, 2, and 3'],
    explanation:
      'Returns to Scale is a long-run concept in which all inputs are variable and altered in the same proportion. The Law of Variable Proportions is a separate short-run concept (Returns to a Factor).',
    tip: 'Returns to Scale = Long-run (all inputs changed proportionally).',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-stmt-pdf-7',
    categoryId: 'economics',
    question:
      "What causes 'Increasing Returns to Scale' (IRS)?\n1. Dimensional economies.\n2. Division of labor and specialization.\n3. High managerial coordination costs.\nWhich of the above are causes for IRS?",
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1 and 3', '1, 2, and 3'],
    explanation:
      'Internal economies of scale—such as technical/dimensional economies and division of labor with specialization—lead to Increasing Returns to Scale (IRS). High managerial coordination costs are diseconomies that lead to Decreasing Returns to Scale (DRS).',
    tip: 'Economies of scale -> IRS; Diseconomies of scale (coordination bottlenecks) -> DRS.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-8',
    categoryId: 'economics',
    question:
      'Identify correct statements about Stage 3 (Negative Returns):\n1. Total Product (TP) decreases.\n2. Marginal Product (MP) becomes negative.\n3. Average Product (AP) becomes negative.\nSelect the correct answer:',
    answer: 'Only 1 and 2',
    options: ['Only 1', 'Only 1 and 2', 'Only 2 and 3', '1, 2, and 3'],
    explanation:
      'In Stage 3, Total Product (TP) declines and Marginal Product (MP) is negative, but Average Product (AP = TP / L) always remains positive as long as total output is greater than zero.',
    tip: 'AP can never be zero or negative as long as TP > 0.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-9',
    categoryId: 'economics',
    question:
      "Which statements correctly describe Constant Returns to Scale (CRS)?\n1. Output increases in exactly the same proportion as inputs.\n2. It is also called 'Linear Homogeneous Production Function'.\n3. Internal economies perfectly balance internal diseconomies.\nWhich are true?",
    answer: '1, 2, and 3',
    options: ['Only 1 and 2', '1, 2, and 3', 'Only 2 and 3', 'Only 1'],
    explanation:
      'Constant Returns to Scale (CRS) represents a linear homogeneous production function of degree 1 where output increases in the exact same proportion as inputs, occurring when economies of scale are exactly offset by diseconomies of scale.',
    tip: 'CRS = Linear Homogeneous Production Function (degree 1).',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-10',
    categoryId: 'economics',
    question:
      "Consider the following about 'Factors of Production':\n1. Land is a passive factor.\n2. Capital is a 'produced' means of production.\n3. Entrepreneur is the risk-taker.\nWhich of these are correct?",
    answer: '1, 2, and 3',
    options: ['Only 1 and 3', '1, 2, and 3', 'Only 2 and 3', 'Only 3'],
    explanation:
      'In classical and modern economics: Land is a primary but passive factor, Capital is a man-made (produced) means of production, and the Entrepreneur is the organizer who bears non-insurable uncertainty and risk.',
    tip: 'Land = Passive gift of nature; Capital = Produced means of production; Entrepreneur = Risk-bearer.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-stmt-pdf-11',
    categoryId: 'economics',
    question:
      'Regarding Marginal Product (MP):\n1. It is the change in TP due to one unit change in variable input.\n2. It can be zero or negative.\n3. It is always equal to AP.\nWhich statements are correct?',
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1', '1, 2, and 3'],
    explanation:
      'Marginal Product (MP = ΔTP / ΔL) measures the rate of change of Total Product and can be positive, zero, or negative. It equals Average Product (AP) only at AP’s maximum point.',
    tip: 'MP can be positive, zero, or negative; MP = AP only at the peak of AP.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-stmt-pdf-12',
    categoryId: 'economics',
    question:
      "What happens in the 'Long Run'?\n1. There is no distinction between fixed and variable factors.\n2. A firm can change its technological setup.\n3. Supply is highly inelastic.\nSelect the correct statements:",
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1', '1, 2, and 3'],
    explanation:
      'In the long run, all factors of production are variable (no fixed factors exist) and firms can expand plant size or upgrade technology, making long-run supply highly elastic rather than inelastic.',
    tip: 'Long run: all inputs are variable and supply is elastic.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-stmt-pdf-13',
    categoryId: 'economics',
    question:
      'Causes of Decreasing Returns to Scale (DRS) include:\n1. Managerial difficulties in large organizations.\n2. Exhaustion of natural resources.\n3. Better specialization of labor.\nWhich are the actual causes?',
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1', '1, 2, and 3'],
    explanation:
      'Managerial coordination difficulties in oversized firms and exhaustion of natural resources cause Decreasing Returns to Scale (DRS), whereas specialization of labor promotes Increasing Returns to Scale (IRS).',
    tip: 'DRS is driven by managerial bottlenecks and resource exhaustion.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-14',
    categoryId: 'economics',
    question:
      'Consider these statements about the AP curve:\n1. It is Inverted U-shaped.\n2. It starts from the origin.\n3. It never touches the X-axis.\nWhich of these are correct?',
    answer: '1, 2, and 3',
    options: ['Only 1 and 2', '1, 2, and 3', 'Only 1 and 3', 'Only 1'],
    explanation:
      'The Average Product (AP) curve is inverted U-shaped, starts from the origin (when L = 0, TP = 0), and asymptotically approaches but never touches the X-axis because AP remains positive as long as production occurs.',
    tip: 'AP curve is inverted U-shaped and stays strictly above the X-axis for positive output.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-15',
    categoryId: 'economics',
    question:
      'Relationship between TP and MP includes:\n1. When TP increases at an increasing rate, MP rises.\n2. When TP increases at a decreasing rate, MP falls but remains positive.\n3. When TP is maximum, MP is zero.\nWhich are true?',
    answer: '1, 2, and 3',
    options: ['Only 1 and 2', '1, 2, and 3', 'Only 2 and 3', 'Only 3'],
    explanation:
      'Because MP is the slope of the TP curve: (1) TP rising at an increasing rate means MP is rising; (2) TP rising at a diminishing rate means MP is falling but positive; and (3) TP at its maximum means MP = 0.',
    tip: 'MP is the first derivative (slope) of the TP curve.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-stmt-pdf-16',
    categoryId: 'economics',
    question:
      "Which of the following are examples of 'Internal Economies'?\n1. Technical economies.\n2. Managerial economies.\n3. Better transport facilities in the locality.\nSelect the correct ones:",
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1 and 3', '1, 2, and 3'],
    explanation:
      'Internal economies arise from within the firm itself as its own scale of production expands (such as technical, managerial, marketing, and financial economies). Better public transport in the locality is an External Economy shared by all firms in the industry.',
    tip: 'Internal economies = Firm-specific; External economies = Industry/locality-wide.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-17',
    categoryId: 'economics',
    question:
      'Regarding the Law of Diminishing Returns, which statements are true?\n1. It assumes technology is constant.\n2. It assumes at least one factor is fixed.\n3. It applies only to agriculture.\nSelect the code:',
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1 and 3', '1, 2, and 3'],
    explanation:
      'The Law of Diminishing Returns assumes constant technology and at least one fixed factor in the short run. Although classical economists initially associated it with agriculture, modern economics recognizes its universal application across all production sectors.',
    tip: 'Law of Diminishing Returns applies universally across all industries, assuming constant technology.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-18',
    categoryId: 'economics',
    question:
      "What are 'Diseconomies of Scale'?\n1. Disadvantages of producing at a very large scale.\n2. Factors leading to an increase in per-unit cost.\n3. Factors leading to IRS.\nWhich of the above are correct?",
    answer: 'Only 1 and 2',
    options: ['Only 1', 'Only 1 and 2', 'Only 2 and 3', '1, 2, and 3'],
    explanation:
      'Diseconomies of scale are the cost disadvantages that arise when a firm grows beyond its optimum size, causing long-run average cost (per-unit cost) to rise and leading to Decreasing Returns to Scale (DRS).',
    tip: 'Diseconomies of scale increase Long-Run Average Cost (LRAC) and cause DRS.',
    difficulty: 'beginner',
  },
  {
    id: 'econ-prod-stmt-pdf-19',
    categoryId: 'economics',
    question:
      "In the context of production, 'Optimum Scale' means:\n1. Average cost is minimum.\n2. CRS is operating.\n3. Production is at its maximum absolute capacity.\nWhich statements define optimum scale?",
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1', '1, 2, and 3'],
    explanation:
      'Optimum scale of production refers to the most efficient plant size where Long-Run Average Cost (LRAC) is at its minimum and Constant Returns to Scale (CRS) is operating—not necessarily the maximum physical output capacity.',
    tip: 'Optimum Scale = Minimum point of Long-Run Average Cost (LRAC) curve under CRS.',
    difficulty: 'intermediate',
  },
  {
    id: 'econ-prod-stmt-pdf-20',
    categoryId: 'economics',
    question:
      "Identify characteristics of the 'Entrepreneur' as a factor:\n1. He coordinates other factors.\n2. He bears the risk of uncertainty.\n3. He gets a fixed salary.\nWhich are correct?",
    answer: 'Only 1 and 2',
    options: ['Only 1 and 2', 'Only 2 and 3', 'Only 1 and 3', '1, 2, and 3'],
    explanation:
      'An entrepreneur coordinates land, labor, and capital and bears non-insurable uncertainty for a residual reward (profit), whereas fixed salaries/wages are paid to hired labor.',
    tip: 'Entrepreneur earns Profit (residual/uncertain reward); Labor earns Wages/Salaries.',
    difficulty: 'beginner',
  },
];
