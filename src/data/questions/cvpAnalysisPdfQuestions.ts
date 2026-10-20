import { Flashcard } from "../../types";

/**
 * 25 CVP Analysis Practice Problems & Formulas
 * Directly transcribed from CVP Analysis Practice Workbook PDF
 */
export const CVP_ANALYSIS_PDF_PRACTICE_QUESTIONS: Flashcard[] = [
  {
    "id": "cvp-p1-1",
    "categoryId": "accounting",
    "question": "From the following information, find out the number of units that must be sold to earn a profit of Rs. 1,00,000 per year: Sales price: Rs. 40/unit; Variable manufacturing costs: Rs. 15/unit; Variable selling costs: Rs. 5/unit; Fixed factory overheads: Rs. 4,00,000; Fixed selling costs: Rs. 1,00,000.",
    "answer": "30,000 units",
    "options": [
      "25,000 units",
      "30,000 units",
      "35,000 units",
      "40,000 units"
    ],
    "explanation": "Unit Contribution Margin = Rs. 40 - (15 + 5) = Rs. 20. Total Fixed Costs = Rs. 4,00,000 + 1,00,000 = Rs. 5,00,000. Target Sales (units) = (Total Fixed Costs + Target Profit) ÷ Unit CM = (5,00,000 + 1,00,000) ÷ 20 = 6,00,000 ÷ 20 = 30,000 units.",
    "tip": "Formula: Required Units = (Fixed Costs + Target Profit) ÷ Contribution Margin per unit.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p1-2",
    "categoryId": "accounting",
    "question": "A company wants to achieve a target profit of Rs. 2,50,000. Calculate the required sales volume in units using: Sales price: Rs. 60/unit; Variable manufacturing: Rs. 20/unit; Variable selling: Rs. 10/unit; Fixed factory overheads: Rs. 3,50,000; Fixed selling costs: Rs. 1,50,000.",
    "answer": "25,000 units",
    "options": [
      "15,000 units",
      "20,000 units",
      "25,000 units",
      "30,000 units"
    ],
    "explanation": "Contribution Margin = Rs. 60 - 30 = Rs. 30. Total Fixed Costs = Rs. 3,50,000 + 1,50,000 = Rs. 5,00,000. Required Units = (5,00,000 + 2,50,000) ÷ 30 = 7,50,000 ÷ 30 = 25,000 units.",
    "tip": "Always sum all variable components (production + selling) before finding Unit CM.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p1-3",
    "categoryId": "accounting",
    "question": "Determine the number of units to be sold to earn a profit of Rs. 50,000 per year: Sales price: Rs. 100/unit; Variable costs: Rs. 40 (Mfg) + Rs. 20 (Selling) = Rs. 60/unit; Fixed costs: Rs. 1,00,000 (Factory) + Rs. 50,000 (Selling) = Rs. 1,50,000.",
    "answer": "5,000 units",
    "options": [
      "4,000 units",
      "5,000 units",
      "6,000 units",
      "7,500 units"
    ],
    "explanation": "Unit Contribution Margin = Rs. 100 - 60 = Rs. 40. Total Fixed Costs = Rs. 1,50,000. Required Units = (1,50,000 + 50,000) ÷ 40 = 2,00,000 ÷ 40 = 5,00,000 units.",
    "tip": "Required Units = (1,50,000 + 50,000) ÷ 40 = 5,000 units.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p1-4",
    "categoryId": "accounting",
    "question": "Find out the number of units that must be sold to earn a profit of Rs. 3,00,000 per year: Sales price: Rs. 20/unit; Total Variable costs: Rs. 10/unit; Total Fixed costs: Rs. 6,00,000.",
    "answer": "90,000 units",
    "options": [
      "80,000 units",
      "85,000 units",
      "90,000 units",
      "95,000 units"
    ],
    "explanation": "Unit CM = Rs. 20 - 10 = Rs. 10. Required Units = (6,00,000 + 3,00,000) ÷ 10 = 9,00,000 ÷ 10 = 90,000 units.",
    "tip": "Fixed cost + Target Profit = Total required contribution.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p1-5",
    "categoryId": "accounting",
    "question": "Calculate the target sales in units required to earn a profit of Rs. 1,20,000: Sales price: Rs. 80/unit; Total Variable costs: Rs. 40/unit; Total Fixed costs: Rs. 2,80,000.",
    "answer": "10,000 units",
    "options": [
      "8,000 units",
      "10,000 units",
      "12,000 units",
      "14,000 units"
    ],
    "explanation": "Unit CM = Rs. 80 - 40 = Rs. 40. Required Units = (2,80,000 + 1,20,000) ÷ 40 = 4,00,000 ÷ 40 = 10,000 units.",
    "tip": "Contribution margin per unit is denominator when finding units.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-1",
    "categoryId": "accounting",
    "question": "A company has fixed costs of 00,000. The selling price per unit is 0 and the variable cost per unit is 0. What is the break-even point in units?",
    "answer": "5,000 units",
    "options": [
      "3,000 units",
      "4,000 units",
      "5,000 units",
      "6,000 units"
    ],
    "explanation": "BEP (units) = Fixed Costs ÷ Unit CM = 100,000 ÷ (50 - 30) = 100,000 ÷ 20 = 5,000 units.",
    "tip": "BEP in units = Fixed Costs ÷ (SP - VC).",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-2",
    "categoryId": "accounting",
    "question": "If a business has a Selling Price of 00, Variable Cost of 0 per unit, and Fixed Costs of 0,000, what is the Break-Even Point in sales value?",
    "answer": "00,000",
    "options": [
      "50,000",
      "80,000",
      "00,000",
      "40,000"
    ],
    "explanation": "P/V Ratio = (100 - 60) ÷ 100 = 40%. BEP (Sales Value) = Fixed Costs ÷ P/V Ratio = 80,000 ÷ 0.40 = 00,000.",
    "tip": "BEP in Value = Fixed Costs ÷ P/V Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-3",
    "categoryId": "accounting",
    "question": "Total sales are 00,000 and total variable costs are 00,000. What is the Profit/Volume (P/V) ratio?",
    "answer": "40%",
    "options": [
      "30%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "Total Contribution = Sales - Variable Costs = 00,000 - 00,000 = 00,000. P/V Ratio = (Contribution ÷ Sales) × 100 = (200,000 ÷ 500,000) × 100 = 40%.",
    "tip": "P/V ratio is also known as Contribution Margin Ratio.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-4",
    "categoryId": "accounting",
    "question": "A company's actual sales are 00,000 and its break-even sales are 00,000. What is the Margin of Safety (MoS)?",
    "answer": "00,000",
    "options": [
      "50,000",
      "00,000",
      "50,000",
      "00,000"
    ],
    "explanation": "Margin of Safety = Actual Sales - Break-Even Sales = 00,000 - 00,000 = 00,000.",
    "tip": "Margin of safety measures cushion of sales above break-even.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-5",
    "categoryId": "accounting",
    "question": "At a break-even point of 10,000 units, the selling price is 0 and the variable cost is 2 per unit. What are the total fixed costs?",
    "answer": "0,000",
    "options": [
      "0,000",
      "0,000",
      "00,000",
      "20,000"
    ],
    "explanation": "Contribution Margin per unit = 0 - 2 = . Fixed Costs = BEP (units) × Unit CM = 10,000 ×  = 0,000.",
    "tip": "At BEP, Total Fixed Costs equal Total Contribution.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-6",
    "categoryId": "accounting",
    "question": "If a company has total sales of ,000,000, a Profit/Volume (P/V) ratio of 25%, and fixed costs of 50,000, what is the net profit?",
    "answer": "00,000",
    "options": [
      "0,000",
      "00,000",
      "20,000",
      "50,000"
    ],
    "explanation": "Total Contribution = Sales × P/V Ratio = ,000,000 × 25% = 50,000. Net Profit = Contribution - Fixed Costs = 50,000 - 50,000 = 00,000.",
    "tip": "Profit = (Sales × P/V Ratio) - Fixed Costs.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-7",
    "categoryId": "accounting",
    "question": "A firm desires a target profit of 0,000. Its fixed costs are 50,000 and the contribution margin per unit is 5. How many units must be sold?",
    "answer": "8,000 units",
    "options": [
      "6,000 units",
      "7,500 units",
      "8,000 units",
      "9,000 units"
    ],
    "explanation": "Target Units = (Fixed Costs + Target Profit) ÷ Unit CM = (50,000 + 0,000) ÷ 5 = 00,000 ÷ 5 = 8,000 units.",
    "tip": "Target units = Total desired contribution ÷ CM per unit.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-8",
    "categoryId": "accounting",
    "question": "What happens to the break-even point if the variable cost per unit increases, assuming the selling price and total fixed costs remain constant?",
    "answer": "It increases",
    "options": [
      "It decreases",
      "It increases",
      "It remains unchanged",
      "It becomes negative"
    ],
    "explanation": "Higher variable cost per unit reduces unit contribution margin. Since BEP = Fixed Costs ÷ Unit CM, a lower denominator produces a higher break-even point in units.",
    "tip": "Inverse relationship: Lower CM per unit yields higher break-even volume.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-9",
    "categoryId": "accounting",
    "question": "A company has a Margin of Safety of 20% and actual sales of 50,000 units. What is the break-even point in units?",
    "answer": "40,000 units",
    "options": [
      "30,000 units",
      "35,000 units",
      "40,000 units",
      "45,000 units"
    ],
    "explanation": "BEP Ratio = 100% - Margin of Safety % = 100% - 20% = 80%. Break-even point in units = 50,000 × 80% = 40,000 units.",
    "tip": "BEP % + Margin of Safety % = 100% of Sales.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-10",
    "categoryId": "accounting",
    "question": "When Margin of Safety is high, it indicates that the company is:",
    "answer": "Operating substantially above break-even with low risk of incurring a loss",
    "options": [
      "Operating substantially above break-even with low risk of incurring a loss",
      "In imminent danger of bankruptcy",
      "Experiencing high variable costs and zero contribution",
      "Unable to cover its fixed costs"
    ],
    "explanation": "A high Margin of Safety implies the business can endure a significant drop in sales before hitting the break-even threshold and suffering financial losses.",
    "tip": "Higher Margin of Safety = Lower business operational risk.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p3-1",
    "categoryId": "accounting",
    "question": "A company reports sales of Rs. 1,00,000 and profit of Rs. 10,000 in Year 1. In Year 2, sales increased to Rs. 1,50,000 and profit increased to Rs. 20,000. What is the Profit/Volume (P/V) ratio?",
    "answer": "20%",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "explanation": "P/V Ratio = (Change in Profit ÷ Change in Sales) × 100 = [(20,000 - 10,000) ÷ (1,50,000 - 1,00,000)] × 100 = (10,000 ÷ 50,000) × 100 = 20%.",
    "tip": "When data of two periods is given: P/V Ratio = Δ Profit ÷ Δ Sales.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p3-2",
    "categoryId": "accounting",
    "question": "A firm has actual sales of Rs. 5,00,000 and its break-even sales are Rs. 4,00,000. What is the Margin of Safety percentage?",
    "answer": "20%",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "explanation": "Margin of Safety = Actual Sales - Break-Even Sales = 5,00,000 - 4,00,000 = Rs. 1,00,000. Margin of Safety % = (MoS ÷ Actual Sales) × 100 = (1,00,000 ÷ 5,00,000) × 100 = 20%.",
    "tip": "MoS % = (Actual Sales - BEP Sales) ÷ Actual Sales × 100.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p3-3",
    "categoryId": "accounting",
    "question": "If a company has a P/V Ratio of 25%, Actual Sales of Rs. 6,00,000, and a Margin of Safety of Rs. 2,00,000, what are the total Fixed Costs?",
    "answer": "Rs. 1,00,000",
    "options": [
      "Rs. 80,000",
      "Rs. 1,00,000",
      "Rs. 1,20,000",
      "Rs. 1,50,000"
    ],
    "explanation": "Break-Even Sales = Actual Sales - Margin of Safety = 6,00,000 - 2,00,000 = Rs. 4,00,000. Total Fixed Costs = Break-Even Sales × P/V Ratio = 4,00,000 × 25% = Rs. 1,00,000.",
    "tip": "Fixed Costs = BEP Sales × P/V Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p3-4",
    "categoryId": "accounting",
    "question": "A product currently sells for Rs. 50 with a variable cost of Rs. 30. Total fixed costs are Rs. 1,00,000. If fixed costs increase by 20% and the variable cost per unit decreases by Rs. 5, what is the new break-even point in units?",
    "answer": "4,800 units",
    "options": [
      "4,200 units",
      "4,500 units",
      "4,800 units",
      "5,000 units"
    ],
    "explanation": "New Fixed Costs = 1,00,000 + 20% = Rs. 1,20,000. New Variable Cost = Rs. 30 - 5 = Rs. 25. New Contribution Margin = Rs. 50 - 25 = Rs. 25. New BEP = 1,20,000 ÷ 25 = 4,800 units.",
    "tip": "Compute new revised FC and revised unit CM separately.",
    "difficulty": "advanced"
  },
  {
    "id": "cvp-p3-5",
    "categoryId": "accounting",
    "question": "AimFit Gym sells two products: Memberships (CM Rs. 10) and Diet Plans (CM Rs. 20). The sales mix is 60% Memberships and 40% Diet Plans. If total fixed costs are Rs. 70,000, how many Diet Plans must be sold to break even?",
    "answer": "2,000 units",
    "options": [
      "1,500 units",
      "2,000 units",
      "2,500 units",
      "3,000 units"
    ],
    "explanation": "Weighted Average CM = (10 × 0.60) + (20 × 0.40) = 6 + 8 = Rs. 14. Total BEP (units) = 70,000 ÷ 14 = 5,000 composite units. Diet Plans sold = 5,000 × 40% = 2,000 units.",
    "tip": "Multiply composite BEP by product sales mix percentage.",
    "difficulty": "advanced"
  },
  {
    "id": "cvp-p3-6",
    "categoryId": "accounting",
    "question": "A company has selling price Rs. 40, variable cost Rs. 24, and fixed costs Rs. 1,60,000. The income tax rate is 40%. How many units must be sold to achieve a target AFTER-TAX profit of Rs. 48,000?",
    "answer": "15,000 units",
    "options": [
      "12,000 units",
      "14,000 units",
      "15,000 units",
      "18,000 units"
    ],
    "explanation": "Pre-Tax Target Profit = After-Tax Profit ÷ (1 - Tax Rate) = 48,000 ÷ (1 - 0.40) = 48,000 ÷ 0.60 = Rs. 80,000. Unit CM = 40 - 24 = Rs. 16. Required Units = (Fixed Costs + Pre-Tax Target Profit) ÷ Unit CM = (1,60,000 + 80,000) ÷ 16 = 2,40,000 ÷ 16 = 15,000 units.",
    "tip": "Pre-tax profit = Desired profit ÷ (1 - t).",
    "difficulty": "advanced"
  },
  {
    "id": "cvp-p3-7",
    "categoryId": "accounting",
    "question": "A company is considering two production machines: Machine A has fixed costs of Rs. 50,000 and variable cost of Rs. 10/unit; Machine B has fixed costs of Rs. 80,000 and variable cost of Rs. 5/unit. At what sales volume will total costs of both machines be identical (the cost indifference point)?",
    "answer": "6,000 units",
    "options": [
      "4,500 units",
      "5,000 units",
      "6,000 units",
      "7,000 units"
    ],
    "explanation": "Set Total Costs equal: 50,000 + 10X = 80,000 + 5X -> 5X = 30,000 -> X = 6,000 units. At 6,000 units, both machines incur exactly Rs. 1,10,000 in total cost.",
    "tip": "Cost Indifference Point = Difference in Fixed Costs ÷ Difference in Variable Cost per unit.",
    "difficulty": "advanced"
  },
  {
    "id": "cvp-p3-8",
    "categoryId": "accounting",
    "question": "A business has total Fixed Costs of Rs. 1,20,000 and a P/V ratio of 30%. What will be the net profit if total sales reach Rs. 6,00,000?",
    "answer": "Rs. 60,000",
    "options": [
      "Rs. 40,000",
      "Rs. 50,000",
      "Rs. 60,000",
      "Rs. 80,000"
    ],
    "explanation": "Total Contribution Margin = Sales × P/V Ratio = 6,00,000 × 30% = Rs. 1,80,000. Net Profit = Total Contribution - Fixed Costs = 1,80,000 - 1,20,000 = Rs. 60,000.",
    "tip": "Contribution - Fixed Costs = Profit.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p3-9",
    "categoryId": "accounting",
    "question": "If a company has a Total Contribution Margin of Rs. 2,00,000 and a Net Profit of Rs. 50,000, what is its Degree of Operating Leverage (DOL)?",
    "answer": "4.0",
    "options": [
      "2.5",
      "3.0",
      "4.0",
      "5.0"
    ],
    "explanation": "Degree of Operating Leverage (DOL) = Total Contribution Margin ÷ Operating Profit = 2,00,000 ÷ 50,000 = 4.0. This indicates that a 10% increase in sales volume will result in a 40% increase in operating profit.",
    "tip": "DOL = Contribution ÷ Profit (or % Δ EBIT ÷ % Δ Sales).",
    "difficulty": "advanced"
  },
  {
    "id": "cvp-p3-10",
    "categoryId": "accounting",
    "question": "If a product has a P/V ratio of 40% and its selling price is Rs. 150 per unit, what is the variable cost per unit?",
    "answer": "Rs. 90",
    "options": [
      "Rs. 60",
      "Rs. 75",
      "Rs. 90",
      "Rs. 100"
    ],
    "explanation": "Contribution Margin = Selling Price × P/V Ratio = 150 × 40% = Rs. 60. Variable Cost = Selling Price - Contribution Margin = 150 - 60 = Rs. 90.",
    "tip": "Variable Cost Ratio = 100% - P/V Ratio = 60%. Rs. 150 × 60% = Rs. 90.",
    "difficulty": "beginner"
  }
];
