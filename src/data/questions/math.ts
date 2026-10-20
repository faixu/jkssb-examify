import { Flashcard } from '../../types';

export const MATHEMATICS_QUESTIONS: Flashcard[] = [
  {
    "id": "math-1",
    "categoryId": "math",
    "question": "A sum of ₹10,000 is invested at 10% per annum simple interest for 3 years. What is the total interest earned?",
    "answer": "₹3,000",
    "options": [
      "₹3,000",
      "₹3,310",
      "₹2,500",
      "₹3,500"
    ],
    "explanation": "Simple Interest (SI) = (P × R × T) / 100 = (10,000 × 10 × 3) / 100 = ₹3,000.",
    "tip": "SI = (P × R × T) / 100",
    "difficulty": "beginner"
  },
  {
    "id": "math-2",
    "categoryId": "math",
    "question": "What is the compound interest on ₹8,000 at 5% per annum for 2 years, compounded annually?",
    "answer": "₹820",
    "options": [
      "₹820",
      "₹800",
      "₹840",
      "₹900"
    ],
    "explanation": "Amount A = P(1 + R/100)^T = 8,000 × (1.05)^2 = 8,000 × 1.1025 = ₹8,820. CI = A - P = 8,820 - 8,000 = ₹820.",
    "tip": "CI for 2 years = P × (R/100)^2 + 2 × SI_1",
    "difficulty": "beginner"
  },
  {
    "id": "math-3",
    "categoryId": "math",
    "question": "What is the formula for the difference between Compound Interest and Simple Interest for 2 years at rate R% per annum on Principal P?",
    "answer": "P × (R / 100)²",
    "options": [
      "P × (R / 100)²",
      "P × (R / 100)³",
      "2P × (R / 100)",
      "P × R × T / 100"
    ],
    "explanation": "The difference between CI and SI for 2 years is CI - SI = P(R/100)². For 3 years, it is P(R/100)² × (3 + R/100).",
    "tip": "Difference (2 years) = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-4",
    "categoryId": "math",
    "question": "If a sum doubles itself in 5 years at simple interest, what is the annual rate of interest?",
    "answer": "20%",
    "options": [
      "20%",
      "25%",
      "15%",
      "10%"
    ],
    "explanation": "When sum doubles, SI = Principal P. SI = (P × R × T)/100 => P = (P × R × 5)/100 => R = 100 / 5 = 20%.",
    "tip": "Rate for doubling under SI: R = 100 / T",
    "difficulty": "intermediate"
  },
  {
    "id": "math-5",
    "categoryId": "math",
    "question": "If interest is compounded half-yearly at an annual rate of R%, what rate and time period are used in the compound interest formula?",
    "answer": "Rate is R/2% and Time is 2n periods",
    "options": [
      "Rate is R/2% and Time is 2n periods",
      "Rate is 2R% and Time is n/2 periods",
      "Rate is R/4% and Time is 4n periods",
      "Rate is R% and Time is n periods"
    ],
    "explanation": "When compounding half-yearly, there are two conversion periods per year. Thus rate becomes R/2% and time becomes 2n half-years.",
    "tip": "Half-yearly: divide rate by 2, multiply time by 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-6",
    "categoryId": "math",
    "question": "At what rate percent per annum will ₹1,000 amount to ₹1,331 in 3 years compounded annually?",
    "answer": "10%",
    "options": [
      "10%",
      "11%",
      "12%",
      "8%"
    ],
    "explanation": "A/P = 1,331 / 1,000 = (11/10)³ = (1 + R/100)³. Therefore 1 + R/100 = 11/10 = 1.1 => R = 10%.",
    "tip": "(1.1)³ = 1.331",
    "difficulty": "intermediate"
  },
  {
    "id": "math-7",
    "categoryId": "math",
    "question": "A sum amounts to ₹2,420 in 2 years and ₹2,662 in 3 years at compound interest compounded annually. What is the rate of interest?",
    "answer": "10%",
    "options": [
      "10%",
      "12%",
      "8%",
      "15%"
    ],
    "explanation": "Interest for the 3rd year = 2,662 - 2,420 = ₹242 on a principal of ₹2,420. Rate = (242 / 2,420) × 100 = 10%.",
    "tip": "Rate = (Difference in amounts / Lower amount) × 100 for 1-year gap.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-8",
    "categoryId": "math",
    "question": "If a sum triples itself in 4 years at compound interest, in how many years will it become 9 times itself at the same rate?",
    "answer": "8 years",
    "options": [
      "8 years",
      "12 years",
      "16 years",
      "6 years"
    ],
    "explanation": "In 4 years, sum becomes 3^1. It becomes 9 times (3^2) in 4 × 2 = 8 years.",
    "tip": "If it becomes k times in t years, it becomes k^m times in m × t years under CI.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-9",
    "categoryId": "math",
    "question": "What is the present worth of ₹1,100 due 2 years hence at 5% simple interest per annum?",
    "answer": "₹1,000",
    "options": [
      "₹1,000",
      "₹990",
      "₹1,050",
      "₹950"
    ],
    "explanation": "Amount A = P + SI = P(1 + RT/100). 1,100 = P(1 + 5×2/100) = P(1.10) => P = 1,100 / 1.10 = ₹1,000.",
    "tip": "Present Worth = (100 × Amount) / (100 + R × T)",
    "difficulty": "intermediate"
  },
  {
    "id": "math-10",
    "categoryId": "math",
    "question": "The difference between CI and SI on ₹5,000 for 2 years is ₹72. What is the annual rate of interest?",
    "answer": "12%",
    "options": [
      "12%",
      "10%",
      "8%",
      "14%"
    ],
    "explanation": "CI - SI = P(R/100)² => 72 = 5,000(R/100)² => (R/100)² = 72 / 5,000 = 144 / 10,000 => R/100 = 12/100 => R = 12%.",
    "tip": "Difference = P × (R/100)²",
    "difficulty": "advanced"
  },
  {
    "id": "math-11",
    "categoryId": "math",
    "question": "What is the condition for a pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 to have a unique solution?",
    "answer": "a₁/a₂ ≠ b₁/b₂",
    "options": [
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁b₂ + a₂b₁ = 0"
    ],
    "explanation": "When the lines intersect at exactly one point, the ratio of coefficients of x and y must not be equal: a₁/a₂ ≠ b₁/b₂.",
    "tip": "Intersecting lines = Unique solution = a₁/a₂ ≠ b₁/b₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-12",
    "categoryId": "math",
    "question": "If a pair of linear equations has infinitely many solutions (coincident lines), which condition must hold?",
    "answer": "a₁/a₂ = b₁/b₂ = c₁/c₂",
    "options": [
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁a₂ + b₁b₂ = 0"
    ],
    "explanation": "Coincident lines represent the exact same line, meaning all coefficients and constants are strictly proportional: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "tip": "Coincident lines = Dependent consistent = all ratios equal.",
    "difficulty": "beginner"
  },
  {
    "id": "math-13",
    "categoryId": "math",
    "question": "What is the solution of the system: 2x + 3y = 11 and 2x - 4y = -24?",
    "answer": "x = -2, y = 5",
    "options": [
      "x = -2, y = 5",
      "x = 2, y = 3",
      "x = -1, y = 4",
      "x = 3, y = 5"
    ],
    "explanation": "Subtracting equation 2 from equation 1: 3y - (-4y) = 11 - (-24) => 7y = 35 => y = 5. Substituting into eq 1: 2x + 15 = 11 => 2x = -4 => x = -2.",
    "tip": "Elimination method subtracts matching terms.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-14",
    "categoryId": "math",
    "question": "For what value of k will the system of equations kx + 3y = k - 3 and 12x + ky = k have no solution?",
    "answer": "k = -6",
    "options": [
      "k = -6",
      "k = 6",
      "k = 0",
      "k = 12"
    ],
    "explanation": "For no solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂ => k/12 = 3/k => k² = 36 => k = ±6. If k = 6, 6/12 = 3/6 = 3/6 (infinitely many). For k = -6, -6/12 = 3/-6 ≠ (-9)/-6, so k = -6 gives no solution.",
    "tip": "Check the constant ratio to exclude infinitely many solutions.",
    "difficulty": "advanced"
  },
  {
    "id": "math-15",
    "categoryId": "math",
    "question": "If the sum of two numbers is 35 and their difference is 13, what are the two numbers?",
    "answer": "24 and 11",
    "options": [
      "24 and 11",
      "25 and 10",
      "26 and 9",
      "23 and 12"
    ],
    "explanation": "x + y = 35 and x - y = 13. Adding both: 2x = 48 => x = 24. Then y = 35 - 24 = 11.",
    "tip": "x = (Sum + Diff) / 2 and y = (Sum - Diff) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-16",
    "categoryId": "math",
    "question": "The lines representing the equations 3x + 2y - 4 = 0 and 6x + 4y - 12 = 0 are:",
    "answer": "Parallel lines (inconsistent)",
    "options": [
      "Parallel lines (inconsistent)",
      "Intersecting lines",
      "Coincident lines",
      "Perpendicular lines"
    ],
    "explanation": "a₁/a₂ = 3/6 = 1/2; b₁/b₂ = 2/4 = 1/2; c₁/c₂ = -4/-12 = 1/3. Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel and have no solution.",
    "tip": "Equal slopes but different intercepts = parallel lines.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-17",
    "categoryId": "math",
    "question": "What is the relationship between Permutations (ⁿPᵣ) and Combinations (ⁿCᵣ)?",
    "answer": "ⁿPᵣ = r! × ⁿCᵣ",
    "options": [
      "ⁿPᵣ = r! × ⁿCᵣ",
      "ⁿCᵣ = r! × ⁿPᵣ",
      "ⁿPᵣ = ⁿCᵣ / r!",
      "ⁿPᵣ = n! × ⁿCᵣ"
    ],
    "explanation": "Combinations select items without regard to order, while permutations arrange them. There are r! ways to arrange r selected items, so ⁿPᵣ = r! × ⁿCᵣ.",
    "tip": "Order matters in Permutation: P = r! × C.",
    "difficulty": "beginner"
  },
  {
    "id": "math-18",
    "categoryId": "math",
    "question": "What is the value of ⁸C₃?",
    "answer": "56",
    "options": [
      "56",
      "336",
      "28",
      "112"
    ],
    "explanation": "⁸C₃ = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = 56.",
    "tip": "ⁿCᵣ = n! / (r!(n - r)!)",
    "difficulty": "beginner"
  },
  {
    "id": "math-19",
    "categoryId": "math",
    "question": "In how many ways can 5 people be seated around a circular table?",
    "answer": "24",
    "options": [
      "24",
      "120",
      "60",
      "720"
    ],
    "explanation": "The number of circular permutations of n distinct objects is (n - 1)!. For 5 people: (5 - 1)! = 4! = 4 × 3 × 2 × 1 = 24.",
    "tip": "Circular permutation = (n - 1)!",
    "difficulty": "intermediate"
  },
  {
    "id": "math-20",
    "categoryId": "math",
    "question": "What is the total number of terms in the binomial expansion of (x + a)ⁿ where n is a positive integer?",
    "answer": "n + 1",
    "options": [
      "n + 1",
      "n",
      "2ⁿ",
      "n - 1"
    ],
    "explanation": "The binomial expansion of (x + a)ⁿ has terms starting from r = 0 up to r = n, giving exactly n + 1 terms.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-21",
    "categoryId": "math",
    "question": "What is the general term Tᵣ₊₁ in the binomial expansion of (x + y)ⁿ?",
    "answer": "ⁿCᵣ xⁿ⁻ʳ yʳ",
    "options": [
      "ⁿCᵣ xⁿ⁻ʳ yʳ",
      "ⁿCᵣ xʳ yⁿ⁻ʳ",
      "ⁿPᵣ xⁿ⁻ʳ yʳ",
      "(n! / r!) xⁿ⁻ʳ yʳ"
    ],
    "explanation": "The (r + 1)-th term in (x + y)ⁿ is given by the standard formula Tᵣ₊₁ = ⁿCᵣ xⁿ⁻ʳ yʳ.",
    "tip": "Tᵣ₊₁ = ⁿCᵣ · x^(n - r) · y^r",
    "difficulty": "intermediate"
  },
  {
    "id": "math-22",
    "categoryId": "math",
    "question": "What is the sum of all binomial coefficients in the expansion of (1 + x)ⁿ, i.e., ⁿC₀ + ⁿC₁ + ⁿC₂ + ... + ⁿCₙ?",
    "answer": "2ⁿ",
    "options": [
      "2ⁿ",
      "2ⁿ⁻¹",
      "n²",
      "2n"
    ],
    "explanation": "Setting x = 1 in (1 + x)ⁿ gives (1 + 1)ⁿ = 2ⁿ = ⁿC₀ + ⁿC₁ + ... + ⁿCₙ.",
    "tip": "Sum of binomial coefficients = 2ⁿ.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-23",
    "categoryId": "math",
    "question": "How many different 4-letter words (with or without meaning) can be formed using the letters of the word \"LOGARITHM\" if no letter is repeated?",
    "answer": "3,024",
    "options": [
      "3,024",
      "504",
      "362,880",
      "15,120"
    ],
    "explanation": "\"LOGARITHM\" contains 9 distinct letters. Forming a 4-letter word requires selecting and arranging 4 letters: ⁹P₄ = 9 × 8 × 7 × 6 = 3,024.",
    "tip": "⁹P₄ = 9 × 8 × 7 × 6",
    "difficulty": "intermediate"
  },
  {
    "id": "math-24",
    "categoryId": "math",
    "question": "In how many ways can a committee of 3 men and 2 women be chosen from 6 men and 4 women?",
    "answer": "120",
    "options": [
      "120",
      "60",
      "720",
      "210"
    ],
    "explanation": "Ways to choose men: ⁶C₃ = (6 × 5 × 4)/(3 × 2 × 1) = 20. Ways to choose women: ⁴C₂ = (4 × 3)/(2 × 1) = 6. Total = 20 × 6 = 120.",
    "tip": "Multiply combinations of independent groups: ⁶C₃ × ⁴C₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-25",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [sin(x) / x]?",
    "answer": "1",
    "options": [
      "1",
      "0",
      "∞",
      "Undefined"
    ],
    "explanation": "This is a fundamental trigonometric limit: as x approaches 0, (sin x)/x approaches 1 (where x is in radians).",
    "tip": "Standard limit: lim(x→0) sin(x)/x = 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-26",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁵ with respect to x?",
    "answer": "5x⁴",
    "options": [
      "5x⁴",
      "x⁴ / 5",
      "5x⁶",
      "4x⁵"
    ],
    "explanation": "Using the Power Rule of differentiation: d/dx (xⁿ) = n · xⁿ⁻¹. For x⁵, derivative is 5x⁴.",
    "tip": "Power Rule: bring power down, subtract 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-27",
    "categoryId": "math",
    "question": "What is the derivative of e³ˣ with respect to x?",
    "answer": "3e³ˣ",
    "options": [
      "3e³ˣ",
      "e³ˣ",
      "3xe³ˣ",
      "e³ˣ / 3"
    ],
    "explanation": "By the Chain Rule: d/dx [e^(kx)] = k · e^(kx). Therefore d/dx (e³ˣ) = 3e³ˣ.",
    "tip": "Derivative of e^(kx) is k · e^(kx).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-28",
    "categoryId": "math",
    "question": "What is the derivative of ln(x) for x > 0?",
    "answer": "1/x",
    "options": [
      "1/x",
      "eˣ",
      "x",
      "-1/x²"
    ],
    "explanation": "The derivative of the natural logarithm ln(x) is 1/x.",
    "tip": "d/dx [ln(x)] = 1/x.",
    "difficulty": "beginner"
  },
  {
    "id": "math-29",
    "categoryId": "math",
    "question": "What is the derivative of tan(x) with respect to x?",
    "answer": "sec²(x)",
    "options": [
      "sec²(x)",
      "cot(x)",
      "-sec²(x)",
      "sec(x) tan(x)"
    ],
    "explanation": "The standard derivative of tan(x) is sec²(x).",
    "tip": "d/dx tan(x) = sec²(x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-30",
    "categoryId": "math",
    "question": "According to L’Hôpital’s Rule, if lim f(x)/g(x) gives an indeterminate form 0/0 or ∞/∞, the limit equals:",
    "answer": "lim [f’(x) / g’(x)]",
    "options": [
      "lim [f’(x) / g’(x)]",
      "lim [f’(x) · g’(x)]",
      "lim [f(x) - g(x)]",
      "[lim f’(x)] / [lim g(x)]"
    ],
    "explanation": "L’Hôpital’s Rule states that under conditions yielding 0/0 or ∞/∞, lim f(x)/g(x) = lim f’(x)/g’(x), provided the limit exists.",
    "tip": "Differentiate numerator and denominator separately for 0/0.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-31",
    "categoryId": "math",
    "question": "What is the Product Rule for differentiating the product of two functions u(x) and v(x)?",
    "answer": "u · v’ + v · u’",
    "options": [
      "u · v’ + v · u’",
      "u’ · v’",
      "u · v’ - v · u’",
      "(u · v’ + v · u’) / v²"
    ],
    "explanation": "The Product Rule states that d/dx [u · v] = u · (dv/dx) + v · (du/dx).",
    "tip": "Product Rule: First × Deriv of Second + Second × Deriv of First.",
    "difficulty": "beginner"
  },
  {
    "id": "math-32",
    "categoryId": "math",
    "question": "What is the derivative of sin(2x) with respect to x?",
    "answer": "2 cos(2x)",
    "options": [
      "2 cos(2x)",
      "-2 cos(2x)",
      "cos(2x)",
      "2 sin(2x)"
    ],
    "explanation": "By Chain Rule: d/dx [sin(2x)] = cos(2x) · d/dx(2x) = 2 cos(2x).",
    "tip": "Chain Rule: outer derivative times inner derivative.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-33",
    "categoryId": "math",
    "question": "If a set A has n elements, how many subsets does its power set P(A) contain?",
    "answer": "2ⁿ",
    "options": [
      "2ⁿ",
      "2n",
      "n²",
      "n!"
    ],
    "explanation": "Every element in A can either be included or excluded from a subset (2 choices each). For n elements, there are 2 × 2 × ... × 2 = 2ⁿ subsets.",
    "tip": "Total subsets = 2ⁿ; Proper subsets = 2ⁿ - 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-34",
    "categoryId": "math",
    "question": "Which of the following represents De Morgan’s Law in Set Theory?",
    "answer": "(A ∪ B)’ = A’ ∩ B’",
    "options": [
      "(A ∪ B)’ = A’ ∩ B’",
      "(A ∪ B)’ = A’ ∪ B’",
      "(A ∩ B)’ = A’ ∩ B’",
      "A ∪ (B ∩ C) = A ∩ B"
    ],
    "explanation": "De Morgan’s Laws state: 1) (A ∪ B)’ = A’ ∩ B’, and 2) (A ∩ B)’ = A’ ∪ B’. Complement of union is intersection of complements.",
    "tip": "Union flips to intersection under complement.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-35",
    "categoryId": "math",
    "question": "If n(A) = 15, n(B) = 20, and n(A ∪ B) = 30, what is n(A ∩ B)?",
    "answer": "5",
    "options": [
      "5",
      "10",
      "15",
      "35"
    ],
    "explanation": "By the Principle of Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) => 30 = 15 + 20 - n(A ∩ B) => n(A ∩ B) = 35 - 30 = 5.",
    "tip": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
    "difficulty": "beginner"
  },
  {
    "id": "math-36",
    "categoryId": "math",
    "question": "What is the empty set (null set) denoted by?",
    "answer": "∅ or { }",
    "options": [
      "∅ or { }",
      "{0}",
      "{∅}",
      "U"
    ],
    "explanation": "An empty set contains no elements and is denoted by the symbol ∅ or { }. Note that {0} is a set containing the single element 0.",
    "tip": "{0} is NOT empty; it contains 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-37",
    "categoryId": "math",
    "question": "Two sets A and B are called disjoint sets if:",
    "answer": "A ∩ B = ∅",
    "options": [
      "A ∩ B = ∅",
      "A ∪ B = ∅",
      "A = B",
      "A ⊆ B"
    ],
    "explanation": "Disjoint sets share no common elements, meaning their intersection is the empty set: A ∩ B = ∅.",
    "tip": "Disjoint means zero overlap.",
    "difficulty": "beginner"
  },
  {
    "id": "math-38",
    "categoryId": "math",
    "question": "If set A = {1, 2, 3} and set B = {3, 4, 5}, what is the set difference A - B?",
    "answer": "{1, 2}",
    "options": [
      "{1, 2}",
      "{4, 5}",
      "{3}",
      "{1, 2, 4, 5}"
    ],
    "explanation": "A - B contains elements that belong to A but do NOT belong to B. Removing 3 from {1, 2, 3} leaves {1, 2}.",
    "tip": "A - B = Elements in A only.",
    "difficulty": "beginner"
  },
  {
    "id": "math-39",
    "categoryId": "math",
    "question": "A relation R on a set A is called an \"equivalence relation\" if it satisfies which three properties?",
    "answer": "Reflexive, Symmetric, and Transitive",
    "options": [
      "Reflexive, Symmetric, and Transitive",
      "Reflexive, Anti-symmetric, and Transitive",
      "Injective, Surjective, and Bijective",
      "Identity, Inverse, and Associative"
    ],
    "explanation": "An equivalence relation on set A must be: 1. Reflexive (aRa ∀a), 2. Symmetric (aRb => bRa), and 3. Transitive (aRb & bRc => aRc).",
    "tip": "R-S-T: Reflexive, Symmetric, Transitive = Equivalence.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-40",
    "categoryId": "math",
    "question": "A function f: A → B is called \"bijective\" (invertible) if it is:",
    "answer": "Both One-to-One (Injective) and Onto (Surjective)",
    "options": [
      "Both One-to-One (Injective) and Onto (Surjective)",
      "Only One-to-One (Injective)",
      "Only Onto (Surjective)",
      "Neither Injective nor Surjective"
    ],
    "explanation": "A bijection is both injective (distinct inputs yield distinct outputs) and surjective (every element in codomain is mapped). Only bijections possess two-sided inverse functions.",
    "tip": "Bijective = Injective + Surjective.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-41",
    "categoryId": "math",
    "question": "If f(x) = 2x + 3, what is the inverse function f⁻¹(x)?",
    "answer": "(x - 3) / 2",
    "options": [
      "(x - 3) / 2",
      "(x + 3) / 2",
      "2x - 3",
      "1 / (2x + 3)"
    ],
    "explanation": "Let y = 2x + 3. Solve for x: y - 3 = 2x => x = (y - 3) / 2. Replacing y with x gives f⁻¹(x) = (x - 3) / 2.",
    "tip": "Swap x and y, then solve for y.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-42",
    "categoryId": "math",
    "question": "If f(x) = x² and g(x) = x + 1, what is the composite function (f ∘ g)(x)?",
    "answer": "(x + 1)²",
    "options": [
      "(x + 1)²",
      "x² + 1",
      "x²(x + 1)",
      "x + x² + 1"
    ],
    "explanation": "(f ∘ g)(x) = f(g(x)) = f(x + 1) = (x + 1)² = x² + 2x + 1.",
    "tip": "(f ∘ g)(x) means plug g(x) into f.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-43",
    "categoryId": "math",
    "question": "What is the domain of the real-valued function f(x) = 1 / √(x - 4)?",
    "answer": "x > 4 or (4, ∞)",
    "options": [
      "x > 4 or (4, ∞)",
      "x ≥ 4 or [4, ∞)",
      "x < 4",
      "All real numbers"
    ],
    "explanation": "For the square root in the denominator to be defined and non-zero in real numbers, the radicand must be strictly positive: x - 4 > 0 => x > 4.",
    "tip": "Square root in denominator requires strictly > 0.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-44",
    "categoryId": "math",
    "question": "A square matrix A is called a \"symmetric matrix\" if:",
    "answer": "Aᵀ = A",
    "options": [
      "Aᵀ = A",
      "Aᵀ = -A",
      "|A| = 0",
      "A · Aᵀ = I"
    ],
    "explanation": "A matrix is symmetric if it equals its own transpose (Aᵀ = A). If Aᵀ = -A, it is skew-symmetric.",
    "tip": "Symmetric: Aᵀ = A; Skew-symmetric: Aᵀ = -A.",
    "difficulty": "beginner"
  },
  {
    "id": "math-45",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [3, 4], [2, 5] |?",
    "answer": "7",
    "options": [
      "7",
      "23",
      "-7",
      "15"
    ],
    "explanation": "For matrix [[a, b], [c, d]], determinant = ad - bc = (3 × 5) - (4 × 2) = 15 - 8 = 7.",
    "tip": "ad - bc for 2×2 matrix.",
    "difficulty": "beginner"
  },
  {
    "id": "math-46",
    "categoryId": "math",
    "question": "A square matrix A is said to be \"singular\" if and only if:",
    "answer": "|A| = 0",
    "options": [
      "|A| = 0",
      "|A| = 1",
      "|A| ≠ 0",
      "A = I"
    ],
    "explanation": "A singular matrix has a determinant of zero (|A| = 0), which means it does not possess a multiplicative inverse.",
    "tip": "Singular = Det is 0 = No inverse exists.",
    "difficulty": "beginner"
  },
  {
    "id": "math-47",
    "categoryId": "math",
    "question": "What is the formula for the inverse of an invertible matrix A?",
    "answer": "A⁻¹ = (1 / |A|) · adj(A)",
    "options": [
      "A⁻¹ = (1 / |A|) · adj(A)",
      "A⁻¹ = |A| · adj(A)",
      "A⁻¹ = adj(A)ᵀ",
      "A⁻¹ = 1 / A"
    ],
    "explanation": "The matrix inverse formula is A⁻¹ = (1 / |A|) · adj(A), where adj(A) is the adjoint (transpose of the cofactor matrix).",
    "tip": "Inverse = Adjoint divided by determinant.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-48",
    "categoryId": "math",
    "question": "If A and B are two square matrices of the same order, what is |AB| equal to?",
    "answer": "|A| · |B|",
    "options": [
      "|A| · |B|",
      "|A| + |B|",
      "|A| / |B|",
      "|A|² · |B|²"
    ],
    "explanation": "A fundamental property of determinants states that the determinant of a product equals the product of their determinants: |AB| = |A| · |B|.",
    "tip": "|AB| = |A| · |B|",
    "difficulty": "intermediate"
  },
  {
    "id": "math-49",
    "categoryId": "math",
    "question": "What is the value of the determinant of an identity matrix of order 3×3?",
    "answer": "1",
    "options": [
      "1",
      "0",
      "3",
      "9"
    ],
    "explanation": "The determinant of any identity matrix I of any order is always 1.",
    "tip": "Det(I) = 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-50",
    "categoryId": "math",
    "question": "If all diagonal elements of a skew-symmetric matrix are examined, they are always:",
    "answer": "All zero",
    "options": [
      "All zero",
      "All one",
      "All negative",
      "Any real number"
    ],
    "explanation": "For a skew-symmetric matrix, a_ij = -a_ji. When i = j, a_ii = -a_ii => 2 a_ii = 0 => a_ii = 0. All principal diagonal elements must be 0.",
    "tip": "Skew-symmetric diagonal is always strictly 0.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-51",
    "categoryId": "math",
    "question": "If two events A and B are mutually exclusive, what is P(A ∩ B)?",
    "answer": "0",
    "options": [
      "0",
      "1",
      "P(A) · P(B)",
      "P(A) + P(B)"
    ],
    "explanation": "Mutually exclusive events cannot occur simultaneously. Hence, their intersection has probability 0: P(A ∩ B) = 0.",
    "tip": "Mutually exclusive = Cannot happen together = P(A ∩ B) = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-52",
    "categoryId": "math",
    "question": "If two fair dice are thrown simultaneously, what is the probability of obtaining a sum equal to 7?",
    "answer": "1/6",
    "options": [
      "1/6",
      "7/36",
      "5/36",
      "1/12"
    ],
    "explanation": "Total outcomes = 6 × 6 = 36. Favorable outcomes for sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pairs. P = 6/36 = 1/6.",
    "tip": "Sum of 7 has 6 favorable outcomes out of 36.",
    "difficulty": "beginner"
  },
  {
    "id": "math-53",
    "categoryId": "math",
    "question": "If two events A and B are independent, which equation correctly defines P(A ∩ B)?",
    "answer": "P(A ∩ B) = P(A) · P(B)",
    "options": [
      "P(A ∩ B) = P(A) · P(B)",
      "P(A ∩ B) = P(A) + P(B)",
      "P(A ∩ B) = 0",
      "P(A ∩ B) = P(A) / P(B)"
    ],
    "explanation": "By definition of independence, the occurrence of one does not affect the probability of the other: P(A ∩ B) = P(A) · P(B).",
    "tip": "Independent: multiply individual probabilities.",
    "difficulty": "beginner"
  },
  {
    "id": "math-54",
    "categoryId": "math",
    "question": "What is the probability of drawing a Queen or a Spade from a standard deck of 52 playing cards?",
    "answer": "16/52 or 4/13",
    "options": [
      "16/52 or 4/13",
      "17/52",
      "13/52",
      "1/4"
    ],
    "explanation": "Queens = 4, Spades = 13, Queen of Spades = 1. By Addition Theorem: P(Q ∪ S) = P(Q) + P(S) - P(Q ∩ S) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13.",
    "tip": "Subtract overlap: 4 + 13 - 1 = 16.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-55",
    "categoryId": "math",
    "question": "What theorem provides a formula to find the posterior probability P(A|B) using prior probabilities and conditional likelihoods?",
    "answer": "Bayes’ Theorem",
    "options": [
      "Bayes’ Theorem",
      "Central Limit Theorem",
      "Chebyshev’s Theorem",
      "De Moivre’s Theorem"
    ],
    "explanation": "Bayes’ Theorem calculates reverse or posterior probability: P(A|B) = [P(B|A) · P(A)] / P(B).",
    "tip": "Bayes’ Theorem computes posterior probabilities.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-56",
    "categoryId": "math",
    "question": "A bag contains 5 red balls and 3 green balls. If 2 balls are drawn at random without replacement, what is the probability that both are red?",
    "answer": "5/14",
    "options": [
      "5/14",
      "25/64",
      "15/56",
      "5/8"
    ],
    "explanation": "First draw red: 5/8. Second draw red: 4/7. Probability = (5/8) × (4/7) = 20/56 = 5/14.",
    "tip": "Without replacement: reduce numerator and denominator by 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-57",
    "categoryId": "math",
    "question": "What is the distance between the two points A(1, 2) and B(4, 6) in the Cartesian plane?",
    "answer": "5 units",
    "options": [
      "5 units",
      "7 units",
      "√7 units",
      "25 units"
    ],
    "explanation": "Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5.",
    "tip": "3-4-5 Pythagorean right triangle distance.",
    "difficulty": "beginner"
  },
  {
    "id": "math-58",
    "categoryId": "math",
    "question": "What is the slope (m) of the line passing through points (2, 3) and (6, 11)?",
    "answer": "2",
    "options": [
      "2",
      "1/2",
      "4",
      "8"
    ],
    "explanation": "Slope m = (y₂ - y₁) / (x₂ - x₁) = (11 - 3) / (6 - 2) = 8 / 4 = 2.",
    "tip": "Slope = Rise / Run = (y₂ - y₁) / (x₂ - x₁).",
    "difficulty": "beginner"
  },
  {
    "id": "math-59",
    "categoryId": "math",
    "question": "What is the condition for two lines with slopes m₁ and m₂ to be perpendicular to each other?",
    "answer": "m₁ · m₂ = -1",
    "options": [
      "m₁ · m₂ = -1",
      "m₁ = m₂",
      "m₁ + m₂ = 0",
      "m₁ - m₂ = 1"
    ],
    "explanation": "Two non-vertical lines are perpendicular if and only if the product of their slopes is -1 (negative reciprocals): m₁ · m₂ = -1.",
    "tip": "Perpendicular slopes: m₁ · m₂ = -1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-60",
    "categoryId": "math",
    "question": "What is the distance of the 3D point P(x, y, z) from the origin (0, 0, 0)?",
    "answer": "√(x² + y² + z²)",
    "options": [
      "√(x² + y² + z²)",
      "x + y + z",
      "x² + y² + z²",
      "√(x² + y²)"
    ],
    "explanation": "In 3D coordinate geometry, distance from origin is d = √[(x - 0)² + (y - 0)² + (z - 0)²] = √(x² + y² + z²).",
    "tip": "3D distance from origin = √(x² + y² + z²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-61",
    "categoryId": "math",
    "question": "If l, m, n are the direction cosines of a directed line in 3D space, which identity must always hold?",
    "answer": "l² + m² + n² = 1",
    "options": [
      "l² + m² + n² = 1",
      "l + m + n = 1",
      "l² + m² + n² = 0",
      "l · m · n = 1"
    ],
    "explanation": "Direction cosines are l = cos α, m = cos β, n = cos γ. The fundamental property is cos²α + cos²β + cos²γ = l² + m² + n² = 1.",
    "tip": "Sum of squares of direction cosines = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-62",
    "categoryId": "math",
    "question": "What is the equation of the plane passing through the origin with normal vector n = (A, B, C)?",
    "answer": "Ax + By + Cz = 0",
    "options": [
      "Ax + By + Cz = 0",
      "Ax + By + Cz = 1",
      "x/A + y/B + z/C = 0",
      "A²x + B²y + C²z = 0"
    ],
    "explanation": "The standard equation of a plane is Ax + By + Cz + D = 0. When it passes through origin (0, 0, 0), D = 0, giving Ax + By + Cz = 0.",
    "tip": "Plane through origin has constant term 0.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-63",
    "categoryId": "math",
    "question": "What is the magnitude of the vector a = 3i + 4j + 12k?",
    "answer": "13",
    "options": [
      "13",
      "19",
      "144",
      "√19"
    ],
    "explanation": "|a| = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-64",
    "categoryId": "math",
    "question": "What is the scalar (dot) product of two perpendicular non-zero vectors a and b?",
    "answer": "0",
    "options": [
      "0",
      "1",
      "|a||b|",
      "-1"
    ],
    "explanation": "Dot product is a · b = |a||b| cos θ. When perpendicular, θ = 90°, and cos(90°) = 0, so a · b = 0.",
    "tip": "Perpendicular vectors: a · b = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-65",
    "categoryId": "math",
    "question": "What is the vector (cross) product of two collinear (parallel) vectors a and b?",
    "answer": "Zero vector 0",
    "options": [
      "Zero vector 0",
      "1",
      "|a||b|",
      "a · b"
    ],
    "explanation": "Cross product is |a × b| = |a||b| sin θ. When parallel, θ = 0° or 180°, and sin(0°) = 0, meaning a × b = 0.",
    "tip": "Parallel vectors: a × b = 0.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-66",
    "categoryId": "math",
    "question": "What is the unit vector in the direction of vector a?",
    "answer": "a / |a|",
    "options": [
      "a / |a|",
      "|a| · a",
      "a · a",
      "|a| / a"
    ],
    "explanation": "A unit vector has a magnitude of 1 and preserves direction: â = a / |a|.",
    "tip": "Unit vector = vector divided by its magnitude.",
    "difficulty": "beginner"
  },
  {
    "id": "math-67",
    "categoryId": "math",
    "question": "What is the value of i · (j × k)?",
    "answer": "1",
    "options": [
      "1",
      "0",
      "-1",
      "k"
    ],
    "explanation": "By right-hand cyclic rule, j × k = i. Then i · i = |i|² = 1. This represents the scalar triple product.",
    "tip": "i · (j × k) = i · i = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-68",
    "categoryId": "math",
    "question": "What is the scalar projection of vector a on vector b?",
    "answer": "(a · b) / |b|",
    "options": [
      "(a · b) / |b|",
      "(a · b) / |a|",
      "a · b",
      "|a × b| / |b|"
    ],
    "explanation": "Projection of a on b is |a| cos θ = (a · b) / |b| = a · b̂.",
    "tip": "Projection on b has |b| in the denominator.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-69",
    "categoryId": "math",
    "question": "If a = 2i + 3j + k and b = 3i - 2j, what is the dot product a · b?",
    "answer": "0 (they are perpendicular)",
    "options": [
      "0 (they are perpendicular)",
      "12",
      "6",
      "-6"
    ],
    "explanation": "a · b = (2 × 3) + (3 × -2) + (1 × 0) = 6 - 6 + 0 = 0. Therefore the vectors are perpendicular.",
    "tip": "Multiply matching components: a₁b₁ + a₂b₂ + a₃b₃.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-70",
    "categoryId": "math",
    "question": "Which vector operation is non-commutative, satisfying a × b = -(b × a)?",
    "answer": "Vector (cross) product",
    "options": [
      "Vector (cross) product",
      "Scalar (dot) product",
      "Vector addition",
      "Scalar multiplication"
    ],
    "explanation": "The cross product is anti-commutative: reversing the order of operands reverses the direction of the normal vector: a × b = -(b × a).",
    "tip": "Cross product reverses sign when flipped: a × b = -b × a.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-71",
    "categoryId": "math",
    "question": "What is the effective annual rate of interest corresponding to a nominal rate of 6% per annum compounded half-yearly?",
    "answer": "6.09%",
    "options": [
      "6.09%",
      "6.00%",
      "6.12%",
      "6.18%"
    ],
    "explanation": "Effective rate = (1 + r/2)² - 1 = (1 + 0.03)² - 1 = 1.0609 - 1 = 0.0609 = 6.09%.",
    "tip": "Effective rate = (1 + 0.03)² - 1 = 6.09%.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-72",
    "categoryId": "math",
    "question": "How many diagonals does a regular polygon with n sides possess?",
    "answer": "n(n - 3) / 2",
    "options": [
      "n(n - 3) / 2",
      "n(n - 1) / 2",
      "n(n - 2) / 2",
      "n² - 3n"
    ],
    "explanation": "Number of line segments connecting n vertices is ⁿC₂ = n(n - 1)/2. Subtracting the n perimeter sides yields: n(n - 1)/2 - n = n(n - 3)/2.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-73",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = cos(x) with respect to x?",
    "answer": "-sin(x)",
    "options": [
      "-sin(x)",
      "sin(x)",
      "-cos(x)",
      "sec(x)"
    ],
    "explanation": "The derivative of cos(x) is -sin(x).",
    "tip": "Trigonometric functions starting with \"co-\" have negative derivatives.",
    "difficulty": "beginner"
  },
  {
    "id": "math-74",
    "categoryId": "math",
    "question": "If the matrix A has order 2×3 and matrix B has order 3×4, what is the order of the product matrix AB?",
    "answer": "2×4",
    "options": [
      "2×4",
      "3×3",
      "2×3",
      "Matrix multiplication is undefined"
    ],
    "explanation": "Inner dimensions match (3 = 3), so product exists. The outer dimensions give the resulting order: 2×4.",
    "tip": "(m × p) × (p × n) = (m × n).",
    "difficulty": "beginner"
  },
  {
    "id": "math-75",
    "categoryId": "math",
    "question": "In how many ways can the letters of the word \"BANANA\" be arranged?",
    "answer": "60",
    "options": [
      "60",
      "120",
      "720",
      "20"
    ],
    "explanation": "Total letters = 6. Repeating letters: N appears 2 times, A appears 3 times. Permutations = 6! / (3! × 2!) = 720 / (6 × 2) = 720 / 12 = 60.",
    "tip": "Divide total factorial by factorials of identical elements.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-76",
    "categoryId": "math",
    "question": "What is the derivative of eˣ with respect to x?",
    "answer": "eˣ",
    "options": [
      "eˣ",
      "x eˣ⁻¹",
      "ln(x)",
      "1 / eˣ"
    ],
    "explanation": "The exponential function eˣ is its own derivative: d/dx(eˣ) = eˣ.",
    "tip": "eˣ is unique: derivative equals itself.",
    "difficulty": "beginner"
  },
  {
    "id": "math-77",
    "categoryId": "math",
    "question": "What is the limit lim (x → 2) [(x² - 4) / (x - 2)]?",
    "answer": "4",
    "options": [
      "4",
      "2",
      "0",
      "Undefined"
    ],
    "explanation": "Factor the numerator: (x - 2)(x + 2) / (x - 2) = x + 2. As x → 2, 2 + 2 = 4 (or via L’Hôpital: 2x / 1 = 4).",
    "tip": "Factor difference of squares: x² - 4 = (x-2)(x+2).",
    "difficulty": "beginner"
  },
  {
    "id": "math-78",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 5, what is the value of |2A|?",
    "answer": "40",
    "options": [
      "40",
      "10",
      "20",
      "80"
    ],
    "explanation": "For a matrix of order n, |kA| = kⁿ · |A|. Here n = 3, so |2A| = 2³ · |A| = 8 × 5 = 40.",
    "tip": "|kA| = kⁿ · |A| for n×n matrix.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-79",
    "categoryId": "math",
    "question": "What is the sum of integers from 1 to 100?",
    "answer": "5,050",
    "options": [
      "5,050",
      "5,000",
      "5,100",
      "10,100"
    ],
    "explanation": "Sum = n(n + 1)/2 = 100 × 101 / 2 = 50 × 101 = 5,050.",
    "tip": "Formula: n(n + 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-80",
    "categoryId": "math",
    "question": "What is the probability of getting at least one head when three unbiased coins are tossed together?",
    "answer": "7/8",
    "options": [
      "7/8",
      "1/8",
      "3/8",
      "1/2"
    ],
    "explanation": "Total outcomes = 2³ = 8. Only one outcome has no heads (TTT). P(at least one head) = 1 - P(no head) = 1 - 1/8 = 7/8.",
    "tip": "P(at least 1) = 1 - P(none).",
    "difficulty": "beginner"
  },
  {
    "id": "math-81",
    "categoryId": "math",
    "question": "If a vector has initial point P(2, 1, -1) and terminal point Q(4, 4, 5), what is the directed vector PQ?",
    "answer": "2i + 3j + 6k",
    "options": [
      "2i + 3j + 6k",
      "6i + 5j + 4k",
      "-2i - 3j - 6k",
      "2i + 4j + 5k"
    ],
    "explanation": "PQ = (x₂ - x₁)i + (y₂ - y₁)j + (z₂ - z₁)k = (4 - 2)i + (4 - 1)j + (5 - (-1))k = 2i + 3j + 6k.",
    "tip": "Vector PQ = Terminal coordinates minus Initial coordinates.",
    "difficulty": "beginner"
  },
  {
    "id": "math-82",
    "categoryId": "math",
    "question": "If a line makes angles 90°, 60°, and 30° with positive x, y, and z axes respectively, what are its direction cosines?",
    "answer": "0, 1/2, √3/2",
    "options": [
      "0, 1/2, √3/2",
      "1, 1/2, √3/2",
      "0, √3/2, 1/2",
      "0, 0, 1"
    ],
    "explanation": "l = cos 90° = 0; m = cos 60° = 1/2; n = cos 30° = √3/2. Note 0² + (1/2)² + (√3/2)² = 0 + 1/4 + 3/4 = 1.",
    "tip": "Direction cosines: cos α, cos β, cos γ.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-83",
    "categoryId": "math",
    "question": "In Cramer’s Rule for solving a system of linear equations, if the main determinant D ≠ 0, the system has:",
    "answer": "A unique solution",
    "options": [
      "A unique solution",
      "Infinitely many solutions",
      "No solution",
      "Trivial solution only"
    ],
    "explanation": "Cramer’s Rule states that if D = |A| ≠ 0, the system is consistent with a unique solution given by x = D_x / D, y = D_y / D, etc.",
    "tip": "D ≠ 0 guarantees a unique solution in Cramer’s Rule.",
    "difficulty": "beginner"
  },
  {
    "id": "math-84",
    "categoryId": "math",
    "question": "What is the derivative of 1/x with respect to x?",
    "answer": "-1/x²",
    "options": [
      "-1/x²",
      "ln(x)",
      "1/x²",
      "-ln(x)"
    ],
    "explanation": "1/x = x⁻¹. By Power Rule: d/dx(x⁻¹) = -1 · x⁻² = -1/x².",
    "tip": "d/dx (1/x) = -1/x².",
    "difficulty": "beginner"
  },
  {
    "id": "math-85",
    "categoryId": "math",
    "question": "What is the middle term in the expansion of (x + y)⁸?",
    "answer": "T₅ = 70x⁴y⁴",
    "options": [
      "T₅ = 70x⁴y⁴",
      "T₄ = 56x⁵y³",
      "T₆ = 56x³y⁵",
      "T₅ = 28x⁴y⁴"
    ],
    "explanation": "Since n = 8 (even), there is one middle term at (n/2 + 1) = (8/2 + 1) = 5th term. T₅ = ⁸C₄ x⁴ y⁴ = 70 x⁴ y⁴.",
    "tip": "Even power n has single middle term at (n/2 + 1).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-86",
    "categoryId": "math",
    "question": "If two sets A and B have 3 and 6 elements respectively, what is the minimum number of elements in A ∪ B?",
    "answer": "6",
    "options": [
      "6",
      "3",
      "9",
      "0"
    ],
    "explanation": "Union is minimized when set A is completely a subset of set B (A ⊆ B). In that case, A ∪ B = B, having 6 elements.",
    "tip": "Minimum union = max(n(A), n(B)).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-87",
    "categoryId": "math",
    "question": "What is the maximum number of elements in A ∪ B if n(A) = 3 and n(B) = 6?",
    "answer": "9",
    "options": [
      "9",
      "6",
      "18",
      "3"
    ],
    "explanation": "Union is maximized when A and B are completely disjoint (A ∩ B = ∅). Then n(A ∪ B) = 3 + 6 = 9.",
    "tip": "Maximum union = n(A) + n(B) when disjoint.",
    "difficulty": "beginner"
  },
  {
    "id": "math-88",
    "categoryId": "math",
    "question": "If a sum compounded annually at interest rate R doubles in 6 years, in how many years will it become 8 times itself?",
    "answer": "18 years",
    "options": [
      "18 years",
      "24 years",
      "12 years",
      "48 years"
    ],
    "explanation": "8 is 2³. Since it takes 6 years to double (2¹), it takes 6 × 3 = 18 years to become 8 times (2³).",
    "tip": "CI multiplies power: 2³ takes 3 × 6 = 18 years.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-89",
    "categoryId": "math",
    "question": "What is the value of ⁿP₀ for any non-negative integer n?",
    "answer": "1",
    "options": [
      "1",
      "0",
      "n",
      "n!"
    ],
    "explanation": "ⁿP₀ = n! / (n - 0)! = n! / n! = 1.",
    "tip": "ⁿP₀ = 1 and ⁿC₀ = 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-90",
    "categoryId": "math",
    "question": "What is the derivative of the constant function f(x) = c?",
    "answer": "0",
    "options": [
      "0",
      "c",
      "1",
      "Undefined"
    ],
    "explanation": "A constant does not change, so its rate of change (derivative) is always zero: d/dx(c) = 0.",
    "tip": "Derivative of any constant is 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-91",
    "categoryId": "math",
    "question": "What is the angle between two vectors a and b if a · b = |a × b|?",
    "answer": "45° or π/4",
    "options": [
      "45° or π/4",
      "90° or π/2",
      "0°",
      "60° or π/3"
    ],
    "explanation": "|a||b| cos θ = |a||b| sin θ => cos θ = sin θ => tan θ = 1 => θ = 45°.",
    "tip": "tan θ = 1 implies θ = 45°.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-92",
    "categoryId": "math",
    "question": "What is the sum of roots of the quadratic equation ax² + bx + c = 0?",
    "answer": "-b / a",
    "options": [
      "-b / a",
      "c / a",
      "b / a",
      "-c / a"
    ],
    "explanation": "By Vieta’s formulas, the sum of roots α + β = -b/a and the product of roots αβ = c/a.",
    "tip": "Sum of roots = -b/a; Product of roots = c/a.",
    "difficulty": "beginner"
  },
  {
    "id": "math-93",
    "categoryId": "math",
    "question": "What is the value of 0! (zero factorial)?",
    "answer": "1",
    "options": [
      "1",
      "0",
      "Undefined",
      "∞"
    ],
    "explanation": "By mathematical convention and definition (n! = n × (n - 1)! for n = 1 gives 1! = 1 × 0! => 0! = 1).",
    "tip": "0! is defined as 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-94",
    "categoryId": "math",
    "question": "If A is a symmetric matrix, what is (A - Aᵀ) equal to?",
    "answer": "Null matrix 0",
    "options": [
      "Null matrix 0",
      "2A",
      "Identity matrix I",
      "A²"
    ],
    "explanation": "For a symmetric matrix, Aᵀ = A. Therefore, A - Aᵀ = A - A = 0 (null matrix).",
    "tip": "A - Aᵀ = 0 when A is symmetric.",
    "difficulty": "beginner"
  },
  {
    "id": "math-95",
    "categoryId": "math",
    "question": "What is the slope of a line parallel to the x-axis?",
    "answer": "0",
    "options": [
      "0",
      "1",
      "Undefined (∞)",
      "-1"
    ],
    "explanation": "A horizontal line has zero vertical change (rise = 0). Thus slope m = 0 / run = 0.",
    "tip": "Horizontal line slope = 0; Vertical line slope = Undefined.",
    "difficulty": "beginner"
  },
  {
    "id": "math-96",
    "categoryId": "math",
    "question": "If P(A) = 0.6 and P(B) = 0.4 and A and B are independent, what is P(A ∪ B)?",
    "answer": "0.76",
    "options": [
      "0.76",
      "1.00",
      "0.24",
      "0.80"
    ],
    "explanation": "P(A ∩ B) = P(A) × P(B) = 0.6 × 0.4 = 0.24. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.6 + 0.4 - 0.24 = 0.76.",
    "tip": "P(A ∪ B) = P(A) + P(B) - P(A)P(B) for independent events.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-97",
    "categoryId": "math",
    "question": "What is the derivative of √(x) with respect to x?",
    "answer": "1 / (2√x)",
    "options": [
      "1 / (2√x)",
      "2√x",
      "1 / √x",
      "1 / (2x)"
    ],
    "explanation": "√(x) = x^(1/2). Derivative = (1/2) x^(-1/2) = 1 / (2√x).",
    "tip": "d/dx √x = 1 / (2√x).",
    "difficulty": "beginner"
  },
  {
    "id": "math-98",
    "categoryId": "math",
    "question": "What is the dot product of any vector a with the zero vector 0?",
    "answer": "0",
    "options": [
      "0",
      "|a|",
      "1",
      "Undefined"
    ],
    "explanation": "The scalar product of any vector with the zero vector is always the scalar 0.",
    "tip": "a · 0 = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-99",
    "categoryId": "math",
    "question": "What is the equation of the line passing through (0, 0) with slope m?",
    "answer": "y = mx",
    "options": [
      "y = mx",
      "y = mx + 1",
      "x = my",
      "y = -mx"
    ],
    "explanation": "Using slope-intercept form y = mx + c, since the line passes through origin, c = 0, so y = mx.",
    "tip": "Line through origin: y = mx.",
    "difficulty": "beginner"
  },
  {
    "id": "math-100",
    "categoryId": "math",
    "question": "If two vectors a and b are such that |a + b| = |a - b|, what is the relationship between vectors a and b?",
    "answer": "a and b are perpendicular (orthogonal)",
    "options": [
      "a and b are perpendicular (orthogonal)",
      "a and b are parallel",
      "|a| = |b|",
      "a = b"
    ],
    "explanation": "Squaring both sides: |a|² + |b|² + 2(a · b) = |a|² + |b|² - 2(a · b) => 4(a · b) = 0 => a · b = 0. Therefore, a and b are perpendicular.",
    "tip": "|a + b| = |a - b| means a · b = 0 (perpendicular vectors).",
    "difficulty": "advanced"
  },
  {
    "id": "math-101",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹11000 for 2 years at 10% per annum compounded annually?",
    "answer": "₹110",
    "options": [
      "₹95",
      "₹110",
      "₹135",
      "₹220"
    ],
    "explanation": "Difference = P × (R/100)² = 11000 × (10/100)² = ₹110.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-102",
    "categoryId": "math",
    "question": "A sum of ₹16000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹19200",
    "options": [
      "₹19200",
      "₹22400",
      "₹32000",
      "₹3200"
    ],
    "explanation": "SI = (P × R × T) / 100 = (16000 × 10 × 2) / 100 = ₹3200. Amount = Principal + SI = 16000 + 3200 = ₹19200.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-103",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "15%",
      "12.5%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-104",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-105",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-106",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "100",
      "20",
      "45",
      "90"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-107",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-108",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-109",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-110",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-111",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-112",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-113",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-114",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-115",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-116",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-117",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [4, 3], [1, 4] |?",
    "answer": "13",
    "options": [
      "8",
      "10",
      "13",
      "18"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (4 × 4) - (3 × 1) = 13.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-118",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "4",
      "12",
      "16",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-119",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "27",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-120",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "2",
      "-2",
      "1/2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-121",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "|a||b|",
      "0",
      "1",
      "-1"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-122",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "11",
      "49",
      "5",
      "7"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-123",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹33000 for 2 years at 8% per annum compounded annually?",
    "answer": "₹211.2",
    "options": [
      "₹196.2",
      "₹211.2",
      "₹236.2",
      "₹422.4"
    ],
    "explanation": "Difference = P × (R/100)² = 33000 × (8/100)² = ₹211.2.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-124",
    "categoryId": "math",
    "question": "A sum of ₹7000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹8400",
    "options": [
      "₹1400",
      "₹8400",
      "₹9800",
      "₹14000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (7000 × 10 × 2) / 100 = ₹1400. Amount = Principal + SI = 7000 + 1400 = ₹8400.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-125",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "12.5%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-126",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-127",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-128",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-129",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-130",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-131",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "10",
      "20",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-132",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-133",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-134",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "3 ln(x)",
      "1/(3x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-135",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "cos(2x)",
      "cos²(x)",
      "sin(2x)",
      "-sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-136",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-137",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-138",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "(a, a) ∈ R for all a ∈ A",
      "R is empty",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-139",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [6, 3], [1, 4] |?",
    "answer": "21",
    "options": [
      "10",
      "18",
      "21",
      "26"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (6 × 4) - (3 × 1) = 21.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-140",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "12",
      "16",
      "4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-141",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "27",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-142",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "2",
      "-2",
      "1/2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-143",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "|a||b|",
      "0",
      "1"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-144",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-145",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹55000 for 2 years at 6% per annum compounded annually?",
    "answer": "₹198",
    "options": [
      "₹183",
      "₹198",
      "₹223",
      "₹396"
    ],
    "explanation": "Difference = P × (R/100)² = 55000 × (6/100)² = ₹198.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-146",
    "categoryId": "math",
    "question": "A sum of ₹18000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹21600",
    "options": [
      "₹3600",
      "₹21600",
      "₹25200",
      "₹36000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (18000 × 10 × 2) / 100 = ₹3600. Amount = Principal + SI = 18000 + 3600 = ₹21600.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-147",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "12.5%",
      "8%",
      "10%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-148",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-149",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-150",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-151",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-152",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-153",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-154",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-155",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-156",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/(3x)",
      "1/x",
      "3/x",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-157",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "cos(2x)",
      "cos²(x)",
      "sin(2x)",
      "-sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-158",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-159",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-160",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-161",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [3, 3], [1, 4] |?",
    "answer": "9",
    "options": [
      "14",
      "6",
      "7",
      "9"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (3 × 4) - (3 × 1) = 9.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-162",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "4",
      "12",
      "16"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-163",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-164",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-2",
      "2",
      "-1/2",
      "1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-165",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-166",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-167",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹27000 for 2 years at 10% per annum compounded annually?",
    "answer": "₹270",
    "options": [
      "₹255",
      "₹270",
      "₹295",
      "₹540"
    ],
    "explanation": "Difference = P × (R/100)² = 27000 × (10/100)² = ₹270.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-168",
    "categoryId": "math",
    "question": "A sum of ₹9000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹10800",
    "options": [
      "₹1800",
      "₹10800",
      "₹12600",
      "₹18000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (9000 × 10 × 2) / 100 = ₹1800. Amount = Principal + SI = 9000 + 1800 = ₹10800.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-169",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "15%",
      "12.5%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-170",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-171",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-172",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-173",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-174",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-175",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-176",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-177",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-178",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/(3x)",
      "1/x",
      "3/x",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-179",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-180",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-181",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-182",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "(a, a) ∈ R for all a ∈ A",
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-183",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [5, 3], [1, 4] |?",
    "answer": "17",
    "options": [
      "14",
      "17",
      "22",
      "9"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (5 × 4) - (3 × 1) = 17.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-184",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "4",
      "12",
      "16"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-185",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "27",
      "1",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-186",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "2",
      "-1/2",
      "-2",
      "1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-187",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "0",
      "1",
      "-1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-188",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "11",
      "49",
      "5",
      "7"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-189",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹49000 for 2 years at 8% per annum compounded annually?",
    "answer": "₹313.6",
    "options": [
      "₹298.6",
      "₹313.6",
      "₹338.6",
      "₹627.2"
    ],
    "explanation": "Difference = P × (R/100)² = 49000 × (8/100)² = ₹313.6.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-190",
    "categoryId": "math",
    "question": "A sum of ₹20000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹24000",
    "options": [
      "₹4000",
      "₹24000",
      "₹28000",
      "₹40000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (20000 × 10 × 2) / 100 = ₹4000. Amount = Principal + SI = 20000 + 4000 = ₹24000.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-191",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "10%",
      "12.5%",
      "15%",
      "8%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-192",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-193",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁/a₂ ≠ b₁/b₂",
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-194",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-195",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-196",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-197",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "10",
      "20",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-198",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-199",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-200",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-201",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "cos(2x)",
      "cos²(x)",
      "sin(2x)",
      "-sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-202",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-203",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-204",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-205",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [2, 3], [1, 4] |?",
    "answer": "5",
    "options": [
      "2",
      "5",
      "6",
      "10"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (2 × 4) - (3 × 1) = 5.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-206",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "12",
      "16",
      "4",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-207",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-208",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-1/2",
      "1/2",
      "2",
      "-2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-209",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-210",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-211",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹21000 for 2 years at 6% per annum compounded annually?",
    "answer": "₹75.6",
    "options": [
      "₹60.599999999999994",
      "₹75.6",
      "₹100.6",
      "₹151.2"
    ],
    "explanation": "Difference = P × (R/100)² = 21000 × (6/100)² = ₹75.6.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-212",
    "categoryId": "math",
    "question": "A sum of ₹11000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹13200",
    "options": [
      "₹13200",
      "₹15400",
      "₹2200",
      "₹22000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (11000 × 10 × 2) / 100 = ₹2200. Amount = Principal + SI = 11000 + 2200 = ₹13200.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-213",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "12.5%",
      "8%",
      "10%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-214",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-215",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-216",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-217",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-218",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-219",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "10",
      "20",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-220",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "4x³ - 6x + 7",
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-221",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-222",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-223",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "cos(2x)",
      "cos²(x)",
      "sin(2x)",
      "-sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-224",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-225",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-226",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "(a, a) ∈ R for all a ∈ A",
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-227",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [4, 3], [1, 4] |?",
    "answer": "13",
    "options": [
      "10",
      "13",
      "18",
      "8"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (4 × 4) - (3 × 1) = 13.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-228",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "12",
      "16",
      "4",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-229",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-230",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-2",
      "2",
      "-1/2",
      "1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-231",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-232",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-233",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹43000 for 2 years at 10% per annum compounded annually?",
    "answer": "₹430",
    "options": [
      "₹415",
      "₹430",
      "₹455",
      "₹860"
    ],
    "explanation": "Difference = P × (R/100)² = 43000 × (10/100)² = ₹430.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-234",
    "categoryId": "math",
    "question": "A sum of ₹22000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹26400",
    "options": [
      "₹26400",
      "₹30800",
      "₹44000",
      "₹4400"
    ],
    "explanation": "SI = (P × R × T) / 100 = (22000 × 10 × 2) / 100 = ₹4400. Amount = Principal + SI = 22000 + 4400 = ₹26400.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-235",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "15%",
      "12.5%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-236",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-237",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-238",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "100",
      "20",
      "45",
      "90"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-239",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-240",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-241",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-242",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "4x³ - 6x + 7",
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-243",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-244",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-245",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-246",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-247",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-248",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "R is empty",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-249",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [6, 3], [1, 4] |?",
    "answer": "21",
    "options": [
      "10",
      "18",
      "21",
      "26"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (6 × 4) - (3 × 1) = 21.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-250",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "4",
      "12",
      "16"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-251",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "27",
      "1",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-252",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-1/2",
      "2",
      "-2",
      "1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-253",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "0",
      "1",
      "-1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-254",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "11",
      "49",
      "5",
      "7"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-255",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹15000 for 2 years at 8% per annum compounded annually?",
    "answer": "₹96",
    "options": [
      "₹81",
      "₹96",
      "₹121",
      "₹192"
    ],
    "explanation": "Difference = P × (R/100)² = 15000 × (8/100)² = ₹96.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-256",
    "categoryId": "math",
    "question": "A sum of ₹13000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹15600",
    "options": [
      "₹15600",
      "₹18200",
      "₹2600",
      "₹26000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (13000 × 10 × 2) / 100 = ₹2600. Amount = Principal + SI = 13000 + 2600 = ₹15600.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-257",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "12.5%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-258",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-259",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-260",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-261",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-262",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-263",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "10",
      "20",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-264",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "4x³ - 6x + 7",
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-265",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-266",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-267",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-268",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-269",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-270",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-271",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [3, 3], [1, 4] |?",
    "answer": "9",
    "options": [
      "6",
      "7",
      "9",
      "14"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (3 × 4) - (3 × 1) = 9.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-272",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "12",
      "16",
      "4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-273",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "27",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-274",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "2",
      "-2",
      "1/2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-275",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "|a||b|",
      "0",
      "1"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-276",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-277",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹37000 for 2 years at 6% per annum compounded annually?",
    "answer": "₹133.2",
    "options": [
      "₹133.2",
      "₹158.2",
      "₹266.4",
      "₹118.19999999999999"
    ],
    "explanation": "Difference = P × (R/100)² = 37000 × (6/100)² = ₹133.2.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-278",
    "categoryId": "math",
    "question": "A sum of ₹24000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹28800",
    "options": [
      "₹4800",
      "₹28800",
      "₹33600",
      "₹48000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (24000 × 10 × 2) / 100 = ₹4800. Amount = Principal + SI = 24000 + 4800 = ₹28800.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-279",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "12.5%",
      "8%",
      "10%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-280",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-281",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁/a₂ ≠ b₁/b₂",
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-282",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-283",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-284",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-285",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-286",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "4x³ - 6x + 7",
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-287",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-288",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "3 ln(x)",
      "1/(3x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-289",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-290",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-291",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-292",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "(a, a) ∈ R for all a ∈ A"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-293",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [5, 3], [1, 4] |?",
    "answer": "17",
    "options": [
      "14",
      "17",
      "22",
      "9"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (5 × 4) - (3 × 1) = 17.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-294",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "4",
      "12",
      "16"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-295",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-296",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-2",
      "2",
      "1/2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-297",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "|a||b|",
      "0",
      "1"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-298",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-299",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹59000 for 2 years at 10% per annum compounded annually?",
    "answer": "₹590",
    "options": [
      "₹575",
      "₹590",
      "₹615",
      "₹1180"
    ],
    "explanation": "Difference = P × (R/100)² = 59000 × (10/100)² = ₹590.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-300",
    "categoryId": "math",
    "question": "A sum of ₹15000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹18000",
    "options": [
      "₹18000",
      "₹21000",
      "₹3000",
      "₹30000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (15000 × 10 × 2) / 100 = ₹3000. Amount = Principal + SI = 15000 + 3000 = ₹18000.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-301",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "15%",
      "12.5%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-302",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-303",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-304",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "100",
      "20",
      "45",
      "90"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-305",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-306",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-307",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-308",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "4x³ - 6x + 7",
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-309",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-310",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/(3x)",
      "1/x",
      "3/x",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-311",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-312",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-313",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-314",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-315",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [2, 3], [1, 4] |?",
    "answer": "5",
    "options": [
      "2",
      "5",
      "6",
      "10"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (2 × 4) - (3 × 1) = 5.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-316",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "4",
      "12",
      "16",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-317",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "27",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-318",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-2",
      "1/2",
      "2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-319",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "0",
      "1",
      "-1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-320",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "11",
      "49",
      "5",
      "7"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-321",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹31000 for 2 years at 8% per annum compounded annually?",
    "answer": "₹198.4",
    "options": [
      "₹183.4",
      "₹198.4",
      "₹223.4",
      "₹396.8"
    ],
    "explanation": "Difference = P × (R/100)² = 31000 × (8/100)² = ₹198.4.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-322",
    "categoryId": "math",
    "question": "A sum of ₹6000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹7200",
    "options": [
      "₹1200",
      "₹7200",
      "₹8400",
      "₹12000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (6000 × 10 × 2) / 100 = ₹1200. Amount = Principal + SI = 6000 + 1200 = ₹7200.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-323",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "12.5%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-324",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-325",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁/a₂ ≠ b₁/b₂",
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-326",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-327",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-328",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-329",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "10",
      "20",
      "1",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-330",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "x³ - 3x",
      "12x² - 6",
      "4x³ - 6x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-331",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-332",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/(3x)",
      "1/x",
      "3/x",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-333",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-334",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-335",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-336",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "(a, a) ∈ R for all a ∈ A"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-337",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [4, 3], [1, 4] |?",
    "answer": "13",
    "options": [
      "8",
      "10",
      "13",
      "18"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (4 × 4) - (3 × 1) = 13.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-338",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "12",
      "16",
      "4",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-339",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-340",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "2",
      "-2",
      "1/2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-341",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-342",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-343",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹53000 for 2 years at 6% per annum compounded annually?",
    "answer": "₹190.8",
    "options": [
      "₹175.8",
      "₹190.8",
      "₹215.8",
      "₹381.6"
    ],
    "explanation": "Difference = P × (R/100)² = 53000 × (6/100)² = ₹190.8.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-344",
    "categoryId": "math",
    "question": "A sum of ₹17000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹20400",
    "options": [
      "₹3400",
      "₹20400",
      "₹23800",
      "₹34000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (17000 × 10 × 2) / 100 = ₹3400. Amount = Principal + SI = 17000 + 3400 = ₹20400.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-345",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "12.5%",
      "8%",
      "10%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-346",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-347",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-348",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-349",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-350",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-351",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-352",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "x³ - 3x",
      "4x³ - 6x + 7",
      "12x² - 6",
      "4x³ - 6x"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-353",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-354",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-355",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-356",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-357",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-358",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-359",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [6, 3], [1, 4] |?",
    "answer": "21",
    "options": [
      "10",
      "18",
      "21",
      "26"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (6 × 4) - (3 × 1) = 21.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-360",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "4",
      "12",
      "16"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-361",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-362",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-2",
      "2",
      "-1/2",
      "1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-363",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-364",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-365",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹25000 for 2 years at 10% per annum compounded annually?",
    "answer": "₹250",
    "options": [
      "₹235",
      "₹250",
      "₹275",
      "₹500"
    ],
    "explanation": "Difference = P × (R/100)² = 25000 × (10/100)² = ₹250.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-366",
    "categoryId": "math",
    "question": "A sum of ₹8000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹9600",
    "options": [
      "₹11200",
      "₹16000",
      "₹1600",
      "₹9600"
    ],
    "explanation": "SI = (P × R × T) / 100 = (8000 × 10 × 2) / 100 = ₹1600. Amount = Principal + SI = 8000 + 1600 = ₹9600.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-367",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "15%",
      "12.5%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-368",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-369",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-370",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-371",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-372",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-373",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-374",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-375",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-376",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-377",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-378",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-379",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-380",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "(a, a) ∈ R for all a ∈ A"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-381",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [3, 3], [1, 4] |?",
    "answer": "9",
    "options": [
      "14",
      "6",
      "7",
      "9"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (3 × 4) - (3 × 1) = 9.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-382",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "4",
      "12",
      "16"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-383",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "27",
      "1",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-384",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "2",
      "-1/2",
      "-2",
      "1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-385",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "0",
      "1",
      "-1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-386",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "11",
      "49",
      "5",
      "7"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-387",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹47000 for 2 years at 8% per annum compounded annually?",
    "answer": "₹300.8",
    "options": [
      "₹285.8",
      "₹300.8",
      "₹325.8",
      "₹601.6"
    ],
    "explanation": "Difference = P × (R/100)² = 47000 × (8/100)² = ₹300.8.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-388",
    "categoryId": "math",
    "question": "A sum of ₹19000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹22800",
    "options": [
      "₹22800",
      "₹26600",
      "₹38000",
      "₹3800"
    ],
    "explanation": "SI = (P × R × T) / 100 = (19000 × 10 × 2) / 100 = ₹3800. Amount = Principal + SI = 19000 + 3800 = ₹22800.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-389",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "12.5%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-390",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-391",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁/a₂ ≠ b₁/b₂",
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-392",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-393",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-394",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-395",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "10",
      "20",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-396",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-397",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-398",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-399",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-400",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-401",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-402",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-403",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [5, 3], [1, 4] |?",
    "answer": "17",
    "options": [
      "9",
      "14",
      "17",
      "22"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (5 × 4) - (3 × 1) = 17.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-404",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "12",
      "16",
      "4",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-405",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-406",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-1/2",
      "1/2",
      "2",
      "-2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-407",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-408",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "11",
      "49",
      "5",
      "7"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-409",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹19000 for 2 years at 6% per annum compounded annually?",
    "answer": "₹68.4",
    "options": [
      "₹136.8",
      "₹68.4",
      "₹93.4",
      "₹53.400000000000006"
    ],
    "explanation": "Difference = P × (R/100)² = 19000 × (6/100)² = ₹68.4.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-410",
    "categoryId": "math",
    "question": "A sum of ₹10000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹12000",
    "options": [
      "₹2000",
      "₹12000",
      "₹14000",
      "₹20000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (10000 × 10 × 2) / 100 = ₹2000. Amount = Principal + SI = 10000 + 2000 = ₹12000.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-411",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "12.5%",
      "8%",
      "10%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-412",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-413",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁/a₂ ≠ b₁/b₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-414",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-415",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-416",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-417",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "10",
      "20",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-418",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "4x³ - 6x + 7",
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-419",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-420",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "1/(3x)",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-421",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-422",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-423",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-424",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "(a, a) ∈ R for all a ∈ A",
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-425",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [2, 3], [1, 4] |?",
    "answer": "5",
    "options": [
      "10",
      "2",
      "5",
      "6"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (2 × 4) - (3 × 1) = 5.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-426",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "12",
      "16",
      "4",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-427",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-428",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-1/2",
      "-2",
      "1/2",
      "2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-429",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "|a||b|",
      "0",
      "1",
      "-1"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-430",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-431",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹41000 for 2 years at 10% per annum compounded annually?",
    "answer": "₹410",
    "options": [
      "₹395",
      "₹410",
      "₹435",
      "₹820"
    ],
    "explanation": "Difference = P × (R/100)² = 41000 × (10/100)² = ₹410.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-432",
    "categoryId": "math",
    "question": "A sum of ₹21000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹25200",
    "options": [
      "₹25200",
      "₹29400",
      "₹42000",
      "₹4200"
    ],
    "explanation": "SI = (P × R × T) / 100 = (21000 × 10 × 2) / 100 = ₹4200. Amount = Principal + SI = 21000 + 4200 = ₹25200.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-433",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "15%",
      "12.5%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-434",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-435",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-436",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "100",
      "20",
      "45",
      "90"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-437",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-438",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-439",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-440",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-441",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-442",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/x",
      "3/x",
      "3 ln(x)",
      "1/(3x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-443",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-444",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-445",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-446",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-447",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [4, 3], [1, 4] |?",
    "answer": "13",
    "options": [
      "8",
      "10",
      "13",
      "18"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (4 × 4) - (3 × 1) = 13.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-448",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "4",
      "12",
      "16",
      "1/4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-449",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "27",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-450",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-1/2",
      "2",
      "-2",
      "1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-451",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "|a||b|",
      "0",
      "1",
      "-1"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-452",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "11",
      "49",
      "5",
      "7"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-453",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹13000 for 2 years at 8% per annum compounded annually?",
    "answer": "₹83.2",
    "options": [
      "₹68.2",
      "₹83.2",
      "₹108.2",
      "₹166.4"
    ],
    "explanation": "Difference = P × (R/100)² = 13000 × (8/100)² = ₹83.2.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-454",
    "categoryId": "math",
    "question": "A sum of ₹12000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹14400",
    "options": [
      "₹2400",
      "₹14400",
      "₹16800",
      "₹24000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (12000 × 10 × 2) / 100 = ₹2400. Amount = Principal + SI = 12000 + 2400 = ₹14400.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-455",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "12.5%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-456",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-457",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-458",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-459",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "12",
      "15",
      "6",
      "9"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-460",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-461",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "10",
      "20",
      "5"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-462",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-463",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-464",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/(3x)",
      "1/x",
      "3/x",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-465",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-466",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-467",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-468",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "(a, a) ∈ R for all a ∈ A",
      "R is empty",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-469",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [6, 3], [1, 4] |?",
    "answer": "21",
    "options": [
      "10",
      "18",
      "21",
      "26"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (6 × 4) - (3 × 1) = 21.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-470",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "12",
      "16",
      "4"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-471",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "27",
      "3",
      "9"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-472",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "2",
      "-2",
      "1/2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-473",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-474",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-475",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹35000 for 2 years at 6% per annum compounded annually?",
    "answer": "₹126",
    "options": [
      "₹111",
      "₹126",
      "₹151",
      "₹252"
    ],
    "explanation": "Difference = P × (R/100)² = 35000 × (6/100)² = ₹126.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-476",
    "categoryId": "math",
    "question": "A sum of ₹23000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹27600",
    "options": [
      "₹4600",
      "₹27600",
      "₹32200",
      "₹46000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (23000 × 10 × 2) / 100 = ₹4600. Amount = Principal + SI = 23000 + 4600 = ₹27600.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-477",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "12.5%",
      "8%",
      "10%",
      "15%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-478",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-479",
    "categoryId": "math",
    "question": "For what condition do lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent parallel lines with NO solution?",
    "answer": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
    "options": [
      "a₁/a₂ ≠ b₁/b₂",
      "a₁a₂ + b₁b₂ = 0",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
    ],
    "explanation": "Parallel lines have identical slopes but different y-intercepts: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "tip": "No solution = Parallel lines = a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "difficulty": "beginner"
  },
  {
    "id": "math-480",
    "categoryId": "math",
    "question": "What is the value of ¹⁰C₂?",
    "answer": "45",
    "options": [
      "20",
      "45",
      "90",
      "100"
    ],
    "explanation": "¹⁰C₂ = (10 × 9) / (2 × 1) = 90 / 2 = 45.",
    "tip": "ⁿC₂ = n(n - 1) / 2.",
    "difficulty": "beginner"
  },
  {
    "id": "math-481",
    "categoryId": "math",
    "question": "How many diagonals can be drawn in a regular hexagon (6 sides)?",
    "answer": "9",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "explanation": "Diagonals = n(n - 3)/2. For a hexagon (n = 6): 6 × 3 / 2 = 9 diagonals.",
    "tip": "Diagonals in polygon = n(n - 3) / 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-482",
    "categoryId": "math",
    "question": "In the binomial expansion of (x + a)¹², what is the total number of terms?",
    "answer": "13",
    "options": [
      "11",
      "12",
      "13",
      "24"
    ],
    "explanation": "The total number of terms in (x + a)ⁿ is always n + 1. For n = 12, terms = 12 + 1 = 13.",
    "tip": "Total terms = Power + 1.",
    "difficulty": "beginner"
  },
  {
    "id": "math-483",
    "categoryId": "math",
    "question": "What is the coefficient of x³ in the expansion of (1 + x)⁵?",
    "answer": "10",
    "options": [
      "1",
      "5",
      "10",
      "20"
    ],
    "explanation": "The term is ⁵C₃ x³ = 10 x³. So the coefficient is 10.",
    "tip": "⁵C₃ = ⁵C₂ = (5 × 4) / 2 = 10.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-484",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = x⁴ - 3x² + 7 with respect to x?",
    "answer": "4x³ - 6x",
    "options": [
      "12x² - 6",
      "4x³ - 6x",
      "x³ - 3x",
      "4x³ - 6x + 7"
    ],
    "explanation": "Differentiating term by term: d/dx(x⁴) = 4x³, d/dx(-3x²) = -6x, d/dx(7) = 0. Result = 4x³ - 6x.",
    "tip": "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
    "difficulty": "beginner"
  },
  {
    "id": "math-485",
    "categoryId": "math",
    "question": "What is the value of lim (x → 0) [(eˣ - 1) / x]?",
    "answer": "1",
    "options": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "explanation": "By standard exponential limit (or L'Hôpital: derivative of eˣ is eˣ, e⁰ / 1 = 1).",
    "tip": "lim(x→0) (eˣ - 1)/x = 1.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-486",
    "categoryId": "math",
    "question": "What is the derivative of ln(3x) with respect to x?",
    "answer": "1/x",
    "options": [
      "1/(3x)",
      "1/x",
      "3/x",
      "3 ln(x)"
    ],
    "explanation": "ln(3x) = ln(3) + ln(x). Derivative of ln(3) is 0, derivative of ln(x) is 1/x (or by chain rule: (1/3x) · 3 = 1/x).",
    "tip": "d/dx ln(kx) = 1/x.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-487",
    "categoryId": "math",
    "question": "What is the derivative of f(x) = sin(x) · cos(x)?",
    "answer": "cos(2x)",
    "options": [
      "-sin(2x)",
      "cos(2x)",
      "cos²(x)",
      "sin(2x)"
    ],
    "explanation": "sin(x)cos(x) = (1/2) sin(2x). Derivative = (1/2)(2 cos(2x)) = cos(2x).",
    "tip": "d/dx [ (1/2) sin(2x) ] = cos(2x).",
    "difficulty": "intermediate"
  },
  {
    "id": "math-488",
    "categoryId": "math",
    "question": "If set A has 4 elements, how many non-empty proper subsets does A possess?",
    "answer": "14",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "explanation": "Total subsets = 2⁴ = 16. Proper subsets = 2⁴ - 1 = 15. Non-empty proper subsets = 16 - 2 = 14.",
    "tip": "Subsets = 2ⁿ; Proper subsets = 2ⁿ - 1; Non-empty proper = 2ⁿ - 2.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-489",
    "categoryId": "math",
    "question": "If n(A) = 25, n(B) = 35, and n(A ∩ B) = 10, what is n(A ∪ B)?",
    "answer": "50",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 25 + 35 - 10 = 50.",
    "tip": "Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).",
    "difficulty": "beginner"
  },
  {
    "id": "math-490",
    "categoryId": "math",
    "question": "A relation R on set A is called \"transitive\" if:",
    "answer": "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
    "options": [
      "R is empty",
      "Whenever (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
      "(a, a) ∈ R for all a ∈ A",
      "Whenever (a, b) ∈ R, then (b, a) ∈ R"
    ],
    "explanation": "Transitivity requires that if a is related to b and b is related to c, then a must be related to c.",
    "tip": "Transitive: aRb and bRc implies aRc.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-491",
    "categoryId": "math",
    "question": "What is the determinant of the 2×2 matrix | [3, 3], [1, 4] |?",
    "answer": "9",
    "options": [
      "14",
      "6",
      "7",
      "9"
    ],
    "explanation": "Determinant = (a × d) - (b × c) = (3 × 4) - (3 × 1) = 9.",
    "tip": "Det 2×2 = ad - bc.",
    "difficulty": "beginner"
  },
  {
    "id": "math-492",
    "categoryId": "math",
    "question": "If A is an invertible matrix of order 3×3 with |A| = 4, what is the determinant of its inverse |A⁻¹|?",
    "answer": "1/4",
    "options": [
      "1/4",
      "4",
      "12",
      "16"
    ],
    "explanation": "A fundamental property of determinants states that |A⁻¹| = 1 / |A| = 1/4.",
    "tip": "|A⁻¹| = 1 / |A|.",
    "difficulty": "beginner"
  },
  {
    "id": "math-493",
    "categoryId": "math",
    "question": "If A is a 3×3 matrix and |A| = 3, what is |adj(A)| equal to?",
    "answer": "9",
    "options": [
      "1",
      "3",
      "9",
      "27"
    ],
    "explanation": "For an n×n matrix, |adj(A)| = |A|ⁿ⁻¹. Here n = 3, so |adj(A)| = |A|² = 3² = 9.",
    "tip": "|adj(A)| = |A|ⁿ⁻¹.",
    "difficulty": "advanced"
  },
  {
    "id": "math-494",
    "categoryId": "math",
    "question": "What is the slope of the line perpendicular to the line 2x + 4y = 8?",
    "answer": "2",
    "options": [
      "-2",
      "2",
      "1/2",
      "-1/2"
    ],
    "explanation": "Slope of 2x + 4y = 8 is m₁ = -2/4 = -1/2. The perpendicular slope m₂ = -1 / m₁ = 2.",
    "tip": "Perpendicular slope: m₂ = -1 / m₁.",
    "difficulty": "intermediate"
  },
  {
    "id": "math-495",
    "categoryId": "math",
    "question": "If the angle between vectors a and b is 90°, what is their scalar dot product a · b?",
    "answer": "0",
    "options": [
      "-1",
      "0",
      "1",
      "|a||b|"
    ],
    "explanation": "a · b = |a||b| cos(90°) = 0.",
    "tip": "Perpendicular vectors have dot product = 0.",
    "difficulty": "beginner"
  },
  {
    "id": "math-496",
    "categoryId": "math",
    "question": "What is the magnitude of the 3D vector v = 2i - 3j + 6k?",
    "answer": "7",
    "options": [
      "5",
      "7",
      "11",
      "49"
    ],
    "explanation": "|v| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "tip": "|ai + bj + ck| = √(a² + b² + c²).",
    "difficulty": "beginner"
  },
  {
    "id": "math-497",
    "categoryId": "math",
    "question": "What is the difference between Compound Interest and Simple Interest on ₹57000 for 2 years at 10% per annum compounded annually?",
    "answer": "₹570",
    "options": [
      "₹555",
      "₹570",
      "₹595",
      "₹1140"
    ],
    "explanation": "Difference = P × (R/100)² = 57000 × (10/100)² = ₹570.",
    "tip": "Difference for 2 years = P(R/100)²",
    "difficulty": "intermediate"
  },
  {
    "id": "math-498",
    "categoryId": "math",
    "question": "A sum of ₹14000 is lent at simple interest of 10% per annum for 2 years. What is the total amount payable at maturity?",
    "answer": "₹16800",
    "options": [
      "₹2800",
      "₹16800",
      "₹19600",
      "₹28000"
    ],
    "explanation": "SI = (P × R × T) / 100 = (14000 × 10 × 2) / 100 = ₹2800. Amount = Principal + SI = 14000 + 2800 = ₹16800.",
    "tip": "Amount = Principal + Simple Interest.",
    "difficulty": "beginner"
  },
  {
    "id": "math-499",
    "categoryId": "math",
    "question": "If a sum of money doubles itself in 8 years at simple interest, what is the annual rate of interest?",
    "answer": "12.5%",
    "options": [
      "8%",
      "10%",
      "15%",
      "12.5%"
    ],
    "explanation": "When sum doubles, SI = P. P = (P × R × 8)/100 => R = 100 / 8 = 12.5%.",
    "tip": "Rate for doubling under SI: R = 100 / T.",
    "difficulty": "beginner"
  },
  {
    "id": "math-500",
    "categoryId": "math",
    "question": "The linear system 2x + ky = 7 and 4x + 6y = 14 has infinitely many solutions if k equals:",
    "answer": "3",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "explanation": "For coincident lines with infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/4 = k/6 = 7/14 => 1/2 = k/6 => k = 3.",
    "tip": "Infinite solutions require proportional coefficients: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "difficulty": "intermediate"
  }
];
