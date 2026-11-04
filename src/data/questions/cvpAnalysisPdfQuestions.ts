import { Flashcard } from "../../types";

/**
 * 50 Comprehensive Cost-Volume-Profit (CVP) Analysis MCQs (Theory & Numericals)
 * + 25 CVP Analysis Practice Workbook Problems
 * Integrated into Accountancy & Book Keeping section
 */
export const CVP_ANALYSIS_50_MCQS: Flashcard[] = [
  {
    id: "cvp-50-1",
    categoryId: "accounting",
    question: "Which of the following is the fundamental formula for calculating the Break-Even Point (in units)?",
    answer: "Fixed Costs ÷ Contribution Margin per Unit",
    options: [
      "Fixed Costs ÷ Total Sales",
      "Fixed Costs ÷ Contribution Margin per Unit",
      "Variable Costs ÷ Contribution Margin per Unit",
      "Total Costs ÷ Profit"
    ],
    explanation: "Break-Even Point (in units) is calculated by dividing Total Fixed Costs by the Contribution Margin per Unit (Selling Price per unit minus Variable Cost per unit).",
    tip: "BEP (Units) = Fixed Costs ÷ Unit Contribution Margin.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-2",
    categoryId: "accounting",
    question: "Contribution margin is defined as:",
    answer: "Sales revenue minus variable costs",
    options: [
      "Sales revenue minus fixed costs",
      "Sales revenue minus total costs",
      "Sales revenue minus variable costs",
      "Fixed costs minus variable costs"
    ],
    explanation: "Contribution margin is the amount remaining from sales revenue after all variable expenses have been deducted, which contributes toward covering fixed costs and generating net profit.",
    tip: "Contribution = Sales - Variable Costs.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-3",
    categoryId: "accounting",
    question: "If selling price is Rs. 50, variable cost is Rs. 30, and fixed costs are Rs. 100,000, what is the break-even point in units?",
    answer: "5,000 units",
    options: [
      "2,000 units",
      "3,333 units",
      "5,000 units",
      "10,000 units"
    ],
    explanation: "Unit Contribution Margin = Rs. 50 - Rs. 30 = Rs. 20. Break-Even Point (units) = Rs. 100,000 ÷ Rs. 20 = 5,000 units.",
    tip: "100,000 ÷ (50 - 30) = 5,000 units.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-4",
    categoryId: "accounting",
    question: "The Profit/Volume (P/V) ratio indicates the relationship between:",
    answer: "Contribution and Sales",
    options: [
      "Contribution and Sales",
      "Profit and Fixed Costs",
      "Sales and Variable Costs",
      "Fixed Costs and Contribution"
    ],
    explanation: "The Profit/Volume (P/V) ratio, also called the Contribution Margin Ratio, expresses the relationship between Total Contribution and Total Sales revenue: (Contribution ÷ Sales) × 100.",
    tip: "P/V Ratio = (Contribution ÷ Sales) × 100.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-5",
    categoryId: "accounting",
    question: "If the P/V ratio is 40% and sales are Rs. 500,000, what is the total contribution?",
    answer: "Rs. 200,000",
    options: [
      "Rs. 100,000",
      "Rs. 200,000",
      "Rs. 300,000",
      "Rs. 500,000"
    ],
    explanation: "Total Contribution = Sales × P/V Ratio = Rs. 500,000 × 0.40 = Rs. 200,000.",
    tip: "Contribution = Sales × P/V Ratio.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-6",
    categoryId: "accounting",
    question: "Margin of Safety is best described as:",
    answer: "The difference between actual sales and break-even sales",
    options: [
      "The difference between actual sales and break-even sales",
      "The difference between total sales and total costs",
      "The difference between fixed costs and variable costs",
      "The ratio of fixed costs to contribution margin"
    ],
    explanation: "Margin of Safety is the excess of actual or budgeted sales over the break-even sales volume, indicating the amount by which sales can drop before losses are incurred.",
    tip: "Margin of Safety = Actual Sales - Break-Even Sales.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-7",
    categoryId: "accounting",
    question: "A company has actual sales of Rs. 800,000 and its break-even sales are Rs. 500,000. What is the Margin of Safety?",
    answer: "Rs. 300,000",
    options: [
      "Rs. 300,000",
      "Rs. 500,000",
      "Rs. 1,300,000",
      "37.5%"
    ],
    explanation: "Margin of Safety = Actual Sales - Break-Even Sales = Rs. 800,000 - Rs. 500,000 = Rs. 300,000.",
    tip: "800,000 - 500,000 = Rs. 300,000.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-8",
    categoryId: "accounting",
    question: "What happens to the break-even point if fixed costs increase, assuming all other factors remain constant?",
    answer: "It increases",
    options: [
      "It decreases",
      "It remains the same",
      "It increases",
      "It becomes negative"
    ],
    explanation: "Since Break-Even Point = Fixed Costs ÷ Contribution Margin per unit, an increase in fixed costs directly increases the number of units or revenue required to break even.",
    tip: "Higher Fixed Costs = Higher Break-Even Point.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-9",
    categoryId: "accounting",
    question: "If a firm's Margin of Safety is 20% and its actual sales are 50,000 units, what are the break-even sales in units?",
    answer: "40,000 units",
    options: [
      "10,000 units",
      "40,000 units",
      "50,000 units",
      "60,000 units"
    ],
    explanation: "Margin of Safety in units = 20% of 50,000 = 10,000 units. Break-Even Sales = Actual Sales - Margin of Safety = 50,000 - 10,000 = 40,000 units.",
    tip: "50,000 × (1 - 0.20) = 40,000 units.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-10",
    categoryId: "accounting",
    question: "At the break-even point, which of the following is true?",
    answer: "Total Contribution = Fixed Costs",
    options: [
      "Total Revenue = Variable Costs",
      "Total Contribution = Fixed Costs",
      "Total Profit = Margin of Safety",
      "Fixed Costs = Variable Costs"
    ],
    explanation: "At the break-even point, net profit is zero, which means Total Contribution (Sales - Variable Costs) exactly equals Total Fixed Costs.",
    tip: "At BEP: Profit = 0 and Total Contribution = Total Fixed Costs.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-11",
    categoryId: "accounting",
    question: "A firm desires a target profit of Rs. 50,000. Fixed costs are Rs. 150,000 and unit contribution margin is Rs. 20. How many units must be sold?",
    answer: "10,000 units",
    options: [
      "7,500 units",
      "10,000 units",
      "12,500 units",
      "15,000 units"
    ],
    explanation: "Required Sales (in units) = (Fixed Costs + Target Profit) ÷ Unit Contribution Margin = (150,000 + 50,000) ÷ 20 = 200,000 ÷ 20 = 10,000 units.",
    tip: "(150,000 + 50,000) ÷ 20 = 10,000 units.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-12",
    categoryId: "accounting",
    question: "Which of the following is NOT an assumption of CVP analysis?",
    answer: "Sales mix changes continuously",
    options: [
      "Costs can be accurately classified into fixed and variable",
      "Selling price per unit remains constant",
      "Sales mix changes continuously",
      "Volume is the only factor affecting costs"
    ],
    explanation: "CVP analysis assumes that in a multi-product firm, the sales mix remains constant over the relevant range. A continuously changing sales mix violates standard CVP assumptions.",
    tip: "CVP assumes constant selling price, constant unit variable cost, and constant sales mix.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-13",
    categoryId: "accounting",
    question: "In Year 1, a company's sales were Rs. 100,000 and profit was Rs. 10,000. In Year 2, sales increased to Rs. 150,000 and profit increased to Rs. 25,000. What is the P/V ratio?",
    answer: "30%",
    options: [
      "20%",
      "25%",
      "30%",
      "40%"
    ],
    explanation: "P/V Ratio = (Change in Profit ÷ Change in Sales) × 100 = [(25,000 - 10,000) ÷ (150,000 - 100,000)] × 100 = (15,000 ÷ 50,000) × 100 = 30%.",
    tip: "P/V Ratio = (Δ Profit ÷ Δ Sales) × 100.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-14",
    categoryId: "accounting",
    question: "Using the data from Question 13 (P/V Ratio = 30%, Year 1 Sales = 100,000, Profit = 10,000), what are the total fixed costs?",
    answer: "Rs. 20,000",
    options: [
      "Rs. 20,000",
      "Rs. 30,000",
      "Rs. 40,000",
      "Rs. 50,000"
    ],
    explanation: "Contribution = 100,000 × 0.30 = Rs. 30,000. Fixed Costs = Contribution - Profit = 30,000 - 10,000 = Rs. 20,000.",
    tip: "Fixed Costs = (Sales × P/V Ratio) - Profit.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-15",
    categoryId: "accounting",
    question: "The angle of incidence in a break-even chart represents:",
    answer: "The rate at which profits are earned after break-even",
    options: [
      "The rate of fixed cost absorption",
      "The rate at which profits are earned after break-even",
      "The proportion of variable costs to fixed costs",
      "The ratio of debt to equity"
    ],
    explanation: "The angle of incidence is the angle formed by the intersection of the total sales line and the total cost line at the break-even point. A wider angle indicates a higher rate of profit generation once fixed costs are covered.",
    tip: "Large angle of incidence = High rate of profit after break-even.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-16",
    categoryId: "accounting",
    question: "If a product's selling price is Rs. 200, P/V ratio is 25%, what is its variable cost per unit?",
    answer: "Rs. 150",
    options: [
      "Rs. 50",
      "Rs. 100",
      "Rs. 150",
      "Rs. 175"
    ],
    explanation: "Contribution per unit = Rs. 200 × 25% = Rs. 50. Variable Cost per unit = Selling Price - Contribution = 200 - 50 = Rs. 150.",
    tip: "Variable Cost = Selling Price × (1 - P/V Ratio).",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-17",
    categoryId: "accounting",
    question: "Operating leverage measures:",
    answer: "How sensitive profit is to a change in sales volume",
    options: [
      "How sensitive profit is to a change in sales volume",
      "How debt affects net income",
      "The ratio of fixed assets to current assets",
      "The time taken to break even"
    ],
    explanation: "Operating leverage measures the sensitivity of operating income (EBIT) to changes in sales volume due to the presence of fixed operating costs.",
    tip: "Operating leverage links sales volume changes to operating profit changes.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-18",
    categoryId: "accounting",
    question: "Total contribution is Rs. 300,000 and net operating income is Rs. 100,000. What is the Degree of Operating Leverage (DOL)?",
    answer: "3.0",
    options: [
      "0.33",
      "1.5",
      "2.0",
      "3.0"
    ],
    explanation: "DOL = Contribution ÷ Net Operating Income = 300,000 ÷ 100,000 = 3.0.",
    tip: "DOL = Total Contribution ÷ Operating Profit (EBIT).",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-19",
    categoryId: "accounting",
    question: "If Degree of Operating Leverage is 4, a 10% increase in sales will result in what percentage increase in net income?",
    answer: "40%",
    options: [
      "10%",
      "20%",
      "40%",
      "400%"
    ],
    explanation: "Percentage change in Net Operating Income = DOL × Percentage change in Sales = 4 × 10% = 40%.",
    tip: "% Δ Profit = DOL × % Δ Sales.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-20",
    categoryId: "accounting",
    question: "Which of the following correctly expresses Net Profit in terms of Margin of Safety and P/V Ratio?",
    answer: "Margin of Safety × P/V Ratio",
    options: [
      "Margin of Safety ÷ P/V Ratio",
      "Margin of Safety × P/V Ratio",
      "Margin of Safety - Fixed Costs",
      "Break-Even Sales × P/V Ratio"
    ],
    explanation: "Since all fixed costs are already recovered at the break-even point, any contribution earned on sales above break-even (Margin of Safety) goes directly toward Net Profit: Profit = Margin of Safety × P/V Ratio.",
    tip: "Profit = Margin of Safety × P/V Ratio.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-21",
    categoryId: "accounting",
    question: "A decrease in the selling price per unit will:",
    answer: "Increase the break-even point",
    options: [
      "Increase the P/V ratio",
      "Decrease the break-even point",
      "Increase the break-even point",
      "Have no effect on the margin of safety"
    ],
    explanation: "A lower selling price per unit reduces the contribution margin per unit, requiring more units to be sold to cover fixed costs, thereby increasing the break-even point.",
    tip: "Lower selling price -> Lower unit contribution -> Higher BEP.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-22",
    categoryId: "accounting",
    question: "If fixed costs are Rs. 120,000, variable costs are 60% of sales, what is the break-even revenue?",
    answer: "Rs. 300,000",
    options: [
      "Rs. 200,000",
      "Rs. 300,000",
      "Rs. 400,000",
      "Rs. 600,000"
    ],
    explanation: "P/V Ratio = 100% - 60% = 40%. Break-Even Revenue = Fixed Costs ÷ P/V Ratio = 120,000 ÷ 0.40 = Rs. 300,000.",
    tip: "P/V Ratio = 40%. BEP = 120,000 ÷ 0.40 = Rs. 300,000.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-23",
    categoryId: "accounting",
    question: "In a multi-product firm, the break-even point is calculated using:",
    answer: "Weighted average contribution margin",
    options: [
      "Highest contribution margin",
      "Lowest contribution margin",
      "Weighted average contribution margin",
      "Simple average contribution margin"
    ],
    explanation: "When a company sells multiple products, the composite break-even point is determined by dividing total fixed costs by the weighted average contribution margin based on the sales mix.",
    tip: "Multi-product BEP uses Weighted Average Contribution Margin.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-24",
    categoryId: "accounting",
    question: "What is the margin of safety if profit is Rs. 40,000 and the P/V ratio is 20%?",
    answer: "Rs. 200,000",
    options: [
      "Rs. 8,000",
      "Rs. 50,000",
      "Rs. 160,000",
      "Rs. 200,000"
    ],
    explanation: "Margin of Safety = Profit ÷ P/V Ratio = 40,000 ÷ 0.20 = Rs. 200,000.",
    tip: "MOS = Profit ÷ P/V Ratio.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-25",
    categoryId: "accounting",
    question: "Which cost changes proportionately with the level of activity?",
    answer: "Variable Cost",
    options: [
      "Fixed Cost",
      "Variable Cost",
      "Step Cost",
      "Sunk Cost"
    ],
    explanation: "Total variable cost changes in direct proportion to changes in production or sales volume, whereas variable cost per unit remains constant.",
    tip: "Total variable cost varies directly with activity volume.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-26",
    categoryId: "accounting",
    question: "If the Margin of Safety is high, it indicates that:",
    answer: "The company has a strong cushion against falling sales",
    options: [
      "The company is at a high risk of incurring losses",
      "A small drop in sales will lead to massive losses",
      "The company has a strong cushion against falling sales",
      "Fixed costs are extremely high"
    ],
    explanation: "A high Margin of Safety means actual sales are well above the break-even threshold, giving the firm a strong buffer against a downturn in sales before incurring losses.",
    tip: "High Margin of Safety = Strong buffer against sales drop.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-27",
    categoryId: "accounting",
    question: "Selling Price: Rs. 100. Variable Cost: Rs. 40. Fixed Cost: Rs. 180,000. Tax Rate: 40%. Calculate the units required for an after-tax profit of Rs. 60,000.",
    answer: "4,667 units",
    options: [
      "4,000 units",
      "4,667 units",
      "5,000 units",
      "6,000 units"
    ],
    explanation: "Pre-Tax Target Profit = After-Tax Profit ÷ (1 - Tax Rate) = 60,000 ÷ (1 - 0.40) = Rs. 100,000. Unit Contribution Margin = 100 - 40 = Rs. 60. Units Required = (180,000 + 100,000) ÷ 60 = 280,000 ÷ 60 = 4,667 units.",
    tip: "Convert after-tax profit to pre-tax profit first: 60,000 ÷ 0.60 = 100,000.",
    difficulty: "advanced"
  },
  {
    id: "cvp-50-28",
    categoryId: "accounting",
    question: "Which of the following formulas correctly calculates the Profit/Volume (P/V) ratio?",
    answer: "(Contribution ÷ Sales) × 100",
    options: [
      "(Sales - Fixed Costs) ÷ Sales",
      "(Contribution ÷ Sales) × 100",
      "(Fixed Costs ÷ Contribution) × 100",
      "(Profit ÷ Variable Costs) × 100"
    ],
    explanation: "The P/V Ratio is calculated as (Contribution ÷ Sales) × 100, or [(Sales - Variable Costs) ÷ Sales] × 100.",
    tip: "P/V Ratio = (Contribution ÷ Sales) × 100.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-29",
    categoryId: "accounting",
    question: "An increase in fixed costs will cause the Margin of Safety to (assuming sales remain constant):",
    answer: "Decrease",
    options: [
      "Increase",
      "Decrease",
      "Remain unchanged",
      "Cannot be determined"
    ],
    explanation: "An increase in fixed costs raises the break-even sales point. When actual sales remain constant and break-even sales rise, the Margin of Safety (Actual Sales - Break-Even Sales) decreases.",
    tip: "Higher Fixed Costs -> Higher BEP -> Lower Margin of Safety.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-30",
    categoryId: "accounting",
    question: "A company sells 10,000 units at Rs. 50 each. Variable costs are Rs. 30 per unit, and fixed costs are Rs. 150,000. What is the net profit?",
    answer: "Rs. 50,000",
    options: [
      "Rs. 50,000",
      "Rs. 100,000",
      "Rs. 150,000",
      "Rs. 200,000"
    ],
    explanation: "Contribution = 10,000 × (50 - 30) = 10,000 × 20 = Rs. 200,000. Net Profit = Contribution - Fixed Costs = 200,000 - 150,000 = Rs. 50,000.",
    tip: "Profit = Total Contribution - Fixed Costs.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-31",
    categoryId: "accounting",
    question: "What is the indifference point in CVP analysis?",
    answer: "The sales volume where profits of two alternatives are equal",
    options: [
      "The point where total sales equal total costs",
      "The sales volume where profits of two alternatives are equal",
      "The point where margin of safety is zero",
      "The volume where fixed costs equal variable costs"
    ],
    explanation: "The cost or profit indifference point is the level of activity (units or sales) at which two alternative cost structures or machines yield the exact same total cost or operating profit.",
    tip: "Indifference Point = Volume where two options give equal cost/profit.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-32",
    categoryId: "accounting",
    question: "Option A has Fixed Cost Rs. 50,000 & Variable Cost Rs. 10. Option B has Fixed Cost Rs. 80,000 & Variable Cost Rs. 5. What is the indifference point?",
    answer: "6,000 units",
    options: [
      "3,000 units",
      "4,000 units",
      "5,000 units",
      "6,000 units"
    ],
    explanation: "Indifference Point = Difference in Fixed Costs ÷ Difference in Variable Cost per unit = (80,000 - 50,000) ÷ (10 - 5) = 30,000 ÷ 5 = 6,000 units.",
    tip: "(80,000 - 50,000) ÷ (10 - 5) = 6,000 units.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-33",
    categoryId: "accounting",
    question: "If variable cost as a percentage of sales increases, the break-even point will:",
    answer: "Increase",
    options: [
      "Decrease",
      "Increase",
      "Stay the same",
      "Become zero"
    ],
    explanation: "If the variable cost ratio increases, the P/V ratio (100% - Variable Cost %) decreases. A lower P/V ratio increases the break-even point (Fixed Costs ÷ P/V Ratio).",
    tip: "Higher Variable Cost % -> Lower P/V Ratio -> Higher BEP.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-34",
    categoryId: "accounting",
    question: "The sum of the Variable Cost Ratio and the Profit/Volume (P/V) Ratio is always equal to:",
    answer: "100% (or 1)",
    options: [
      "50% (or 0.5)",
      "100% (or 1)",
      "Margin of Safety Ratio",
      "Break-Even Ratio"
    ],
    explanation: "Since Sales = Variable Costs + Contribution, dividing both sides by Sales shows that Variable Cost Ratio + P/V Ratio = 1 (or 100%).",
    tip: "P/V Ratio + Variable Cost Ratio = 100%.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-35",
    categoryId: "accounting",
    question: "Cost-Volume-Profit analysis is a technique primarily useful for:",
    answer: "Short-term profit planning and decision making",
    options: [
      "Long-term strategic planning",
      "Short-term profit planning and decision making",
      "Valuing inventory on the balance sheet",
      "Determining depreciation methods"
    ],
    explanation: "CVP analysis assumes fixed costs remain constant and cost behavior is linear within a relevant range, making it primarily a tool for short-term profit planning and operational decisions.",
    tip: "CVP is a short-run managerial decision-making tool.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-36",
    categoryId: "accounting",
    question: "Actual Sales Rs. 1,000,000. Margin of Safety is 40%. P/V ratio is 25%. What is the Profit?",
    answer: "Rs. 100,000",
    options: [
      "Rs. 100,000",
      "Rs. 150,000",
      "Rs. 200,000",
      "Rs. 400,000"
    ],
    explanation: "Margin of Safety (in Rs.) = Rs. 1,000,000 × 40% = Rs. 400,000. Profit = Margin of Safety × P/V Ratio = Rs. 400,000 × 25% = Rs. 100,000.",
    tip: "MOS = 400,000; Profit = 400,000 × 25% = Rs. 100,000.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-37",
    categoryId: "accounting",
    question: "If fixed costs decrease by 10% and unit selling price increases by 10%, what will happen to the break-even point?",
    answer: "It will definitely decrease",
    options: [
      "It will definitely increase",
      "It will definitely decrease",
      "It will remain unchanged",
      "It depends on variable costs"
    ],
    explanation: "Decreasing fixed costs lowers the numerator of the BEP formula, while increasing unit selling price increases the denominator (unit contribution margin). Both changes work in the same direction to definitely reduce the break-even point.",
    tip: "Lower FC + Higher SP = Definitely lower Break-Even Point.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-38",
    categoryId: "accounting",
    question: "Contribution margin can also be calculated as:",
    answer: "Fixed Costs + Net Profit",
    options: [
      "Fixed Costs + Net Profit",
      "Fixed Costs - Net Profit",
      "Variable Costs + Net Profit",
      "Sales - Fixed Costs"
    ],
    explanation: "Since Contribution - Fixed Costs = Net Profit, rearranging the equation gives Contribution = Fixed Costs + Net Profit (or Fixed Costs - Net Loss).",
    tip: "Contribution = Sales - Variable Costs = Fixed Costs + Profit.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-39",
    categoryId: "accounting",
    question: "A company sells Product A (CM = Rs. 10) and Product B (CM = Rs. 15) in a 2:3 ratio. What is the weighted average contribution margin?",
    answer: "Rs. 13.00",
    options: [
      "Rs. 12.00",
      "Rs. 12.50",
      "Rs. 13.00",
      "Rs. 14.50"
    ],
    explanation: "Weighted Average Contribution Margin = (10 × 2/5) + (15 × 3/5) = 4 + 9 = Rs. 13.00.",
    tip: "(10 × 0.4) + (15 × 0.6) = 4 + 9 = Rs. 13.00.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-40",
    categoryId: "accounting",
    question: "In a graphical representation of CVP analysis, the break-even point is where:",
    answer: "The total revenue line intersects the total cost line",
    options: [
      "The fixed cost line intersects the variable cost line",
      "The total revenue line intersects the total cost line",
      "The profit line intersects the fixed cost line",
      "The contribution margin line intersects the vertical axis"
    ],
    explanation: "On a traditional break-even chart, the break-even point is located at the intersection of the Total Revenue (Sales) line and the Total Cost line.",
    tip: "BEP on chart = Intersection of Total Revenue line and Total Cost line.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-41",
    categoryId: "accounting",
    question: "On a break-even chart, the vertical distance between the total sales line and the total cost line to the right of the break-even point represents:",
    answer: "Net Profit",
    options: [
      "Fixed Costs",
      "Margin of Safety in units",
      "Net Profit",
      "Variable Costs"
    ],
    explanation: "To the right of the break-even point, the total sales line lies above the total cost line; the vertical gap between them at any volume measures Net Profit.",
    tip: "Vertical gap past BEP = Profit; Horizontal gap past BEP = Margin of Safety.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-42",
    categoryId: "accounting",
    question: "A factory produces 5,000 units. Fixed costs are Rs. 100,000, variable costs are Rs. 150,000, and profit is Rs. 50,000. What is the selling price per unit?",
    answer: "Rs. 60",
    options: [
      "Rs. 40",
      "Rs. 50",
      "Rs. 60",
      "Rs. 70"
    ],
    explanation: "Total Revenue = Fixed Costs + Variable Costs + Profit = 100,000 + 150,000 + 50,000 = Rs. 300,000. Selling Price per unit = 300,000 ÷ 5,000 = Rs. 60.",
    tip: "Total Sales = FC + VC + Profit = 300,000; SP = 300,000 ÷ 5,000 = Rs. 60.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-43",
    categoryId: "accounting",
    question: "Which of the following describes \"Target Costing\" in relation to CVP?",
    answer: "Setting costs based on a desired profit and a competitive selling price",
    options: [
      "Setting costs based on a desired profit and a competitive selling price",
      "Determining profit after actual costs are calculated",
      "Increasing selling price to cover all fixed costs",
      "Ignoring variable costs to hit a target"
    ],
    explanation: "Target Costing starts with a market-determined competitive selling price and subtracts the desired profit margin to establish the maximum allowable target cost.",
    tip: "Target Cost = Competitive Market Price - Desired Profit Margin.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-44",
    categoryId: "accounting",
    question: "A company desires to reduce its break-even point. It should:",
    answer: "Increase selling price",
    options: [
      "Increase fixed costs",
      "Decrease selling price",
      "Increase variable cost per unit",
      "Increase selling price"
    ],
    explanation: "Increasing the selling price per unit increases the contribution margin per unit, which reduces the number of units needed to cover fixed costs (lowering the break-even point).",
    tip: "To lower BEP: reduce fixed costs, reduce unit variable cost, or increase selling price.",
    difficulty: "beginner"
  },
  {
    id: "cvp-50-45",
    categoryId: "accounting",
    question: "If the P/V ratio is 20% and fixed costs are Rs. 40,000, what sales volume is required to earn a profit of Rs. 20,000?",
    answer: "Rs. 300,000",
    options: [
      "Rs. 100,000",
      "Rs. 200,000",
      "Rs. 300,000",
      "Rs. 400,000"
    ],
    explanation: "Required Sales Revenue = (Fixed Costs + Target Profit) ÷ P/V Ratio = (40,000 + 20,000) ÷ 0.20 = 60,000 ÷ 0.20 = Rs. 300,000.",
    tip: "Required Sales = (40,000 + 20,000) ÷ 0.20 = Rs. 300,000.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-46",
    categoryId: "accounting",
    question: "The cash break-even point is calculated by:",
    answer: "Subtracting non-cash expenses (like depreciation) from total fixed costs, then dividing by unit contribution",
    options: [
      "Subtracting non-cash expenses (like depreciation) from total fixed costs, then dividing by unit contribution",
      "Adding non-cash expenses to total variable costs",
      "Ignoring all fixed costs",
      "Subtracting current liabilities from fixed costs"
    ],
    explanation: "Cash Break-Even Point shows the sales volume needed to cover immediate cash fixed commitments: (Total Fixed Costs - Non-Cash Fixed Costs like Depreciation) ÷ Contribution Margin per Unit.",
    tip: "Cash BEP = Cash Fixed Costs ÷ Unit Contribution Margin.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-47",
    categoryId: "accounting",
    question: "A company with high operating leverage:",
    answer: "Has high fixed costs and low variable costs",
    options: [
      "Has high variable costs and low fixed costs",
      "Has high fixed costs and low variable costs",
      "Is less risky during an economic downturn",
      "Cannot calculate a break-even point"
    ],
    explanation: "Firms with automated operations or high fixed costs relative to variable costs have high operating leverage, making their profits highly sensitive to changes in sales volume.",
    tip: "High Operating Leverage = High Fixed Costs & Low Variable Costs.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-48",
    categoryId: "accounting",
    question: "In CVP analysis, the Shut-Down Point is calculated by dividing:",
    answer: "Avoidable Fixed Costs by Contribution Margin per Unit (or P/V Ratio)",
    options: [
      "Total Fixed Costs by Total Variable Costs",
      "Avoidable Fixed Costs by Contribution Margin per Unit (or P/V Ratio)",
      "Sunk Costs by Contribution Margin per Unit",
      "Unavoidable Fixed Costs by Selling Price"
    ],
    explanation: "The shut-down point indicates the minimum sales volume below which a firm is better off temporarily closing operations, calculated as Avoidable Fixed Costs ÷ Unit Contribution Margin.",
    tip: "Shut-Down Point = Avoidable Fixed Costs ÷ Unit Contribution Margin.",
    difficulty: "advanced"
  },
  {
    id: "cvp-50-49",
    categoryId: "accounting",
    question: "Sales = Rs. 200,000. Profit = Rs. 20,000. Variable Costs = Rs. 140,000. What is the Margin of Safety?",
    answer: "Rs. 66,667",
    options: [
      "Rs. 33,333",
      "Rs. 66,667",
      "Rs. 100,000",
      "Rs. 133,333"
    ],
    explanation: "Contribution = 200,000 - 140,000 = Rs. 60,000. P/V Ratio = 60,000 ÷ 200,000 = 30%. Margin of Safety = Profit ÷ P/V Ratio = 20,000 ÷ 0.30 = Rs. 66,666.67 (Rs. 66,667).",
    tip: "Contribution = 60,000; P/V = 30%; MOS = 20,000 ÷ 0.30 = Rs. 66,667.",
    difficulty: "intermediate"
  },
  {
    id: "cvp-50-50",
    categoryId: "accounting",
    question: "An underlying limitation of CVP analysis is that it assumes:",
    answer: "Technology and production efficiency remain constant",
    options: [
      "Inventories change drastically from period to period",
      "Technology and production efficiency remain constant",
      "Costs cannot be separated into fixed and variable",
      "Prices change with the volume of production"
    ],
    explanation: "A key limitation of traditional CVP analysis is its static assumption that technology, production methods, efficiency, and price levels remain unchanged throughout the period.",
    tip: "CVP assumes constant technology, efficiency, and zero inventory changes.",
    difficulty: "intermediate"
  }
];

export const CVP_ANALYSIS_PDF_PRACTICE_QUESTIONS: Flashcard[] = [
  ...CVP_ANALYSIS_50_MCQS,
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
    "explanation": "Unit Contribution Margin = Rs. 100 - 60 = Rs. 40. Total Fixed Costs = Rs. 1,50,000. Required Units = (1,50,000 + 50,000) ÷ 40 = 2,00,000 ÷ 40 = 5,000 units.",
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
    "question": "A company has fixed costs of Rs. 1,00,000. The selling price per unit is Rs. 50 and the variable cost per unit is Rs. 30. What is the break-even point in units?",
    "answer": "5,000 units",
    "options": [
      "3,000 units",
      "4,000 units",
      "5,000 units",
      "6,000 units"
    ],
    "explanation": "BEP (units) = Fixed Costs ÷ Unit CM = Rs. 1,00,000 ÷ (Rs. 50 - Rs. 30) = Rs. 1,00,000 ÷ Rs. 20 = 5,000 units.",
    "tip": "BEP in units = Fixed Costs ÷ (SP - VC).",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-2",
    "categoryId": "accounting",
    "question": "If a business has a Selling Price of Rs. 100, Variable Cost of Rs. 60 per unit, and Fixed Costs of Rs. 80,000, what is the Break-Even Point in sales value?",
    "answer": "Rs. 2,00,000",
    "options": [
      "Rs. 1,50,000",
      "Rs. 1,80,000",
      "Rs. 2,00,000",
      "Rs. 2,40,000"
    ],
    "explanation": "P/V Ratio = (100 - 60) ÷ 100 = 40%. BEP (Sales Value) = Fixed Costs ÷ P/V Ratio = Rs. 80,000 ÷ 0.40 = Rs. 2,00,000.",
    "tip": "BEP in Value = Fixed Costs ÷ P/V Ratio.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-3",
    "categoryId": "accounting",
    "question": "Total sales are Rs. 5,00,000 and total variable costs are Rs. 3,00,000. What is the Profit/Volume (P/V) ratio?",
    "answer": "40%",
    "options": [
      "30%",
      "40%",
      "50%",
      "60%"
    ],
    "explanation": "Total Contribution = Sales - Variable Costs = Rs. 5,00,000 - Rs. 3,00,000 = Rs. 2,00,000. P/V Ratio = (Contribution ÷ Sales) × 100 = (2,00,000 ÷ 5,00,000) × 100 = 40%.",
    "tip": "P/V ratio is also known as Contribution Margin Ratio.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-4",
    "categoryId": "accounting",
    "question": "A company's actual sales are Rs. 5,00,000 and its break-even sales are Rs. 3,00,000. What is the Margin of Safety (MoS)?",
    "answer": "Rs. 2,00,000",
    "options": [
      "Rs. 1,50,000",
      "Rs. 2,00,000",
      "Rs. 2,50,000",
      "Rs. 3,00,000"
    ],
    "explanation": "Margin of Safety = Actual Sales - Break-Even Sales = Rs. 5,00,000 - Rs. 3,00,000 = Rs. 2,00,000.",
    "tip": "Margin of safety measures cushion of sales above break-even.",
    "difficulty": "beginner"
  },
  {
    "id": "cvp-p2-5",
    "categoryId": "accounting",
    "question": "At a break-even point of 10,000 units, the selling price is Rs. 20 and the variable cost is Rs. 12 per unit. What are the total fixed costs?",
    "answer": "Rs. 80,000",
    "options": [
      "Rs. 60,000",
      "Rs. 80,000",
      "Rs. 1,00,000",
      "Rs. 1,20,000"
    ],
    "explanation": "Contribution Margin per unit = Rs. 20 - Rs. 12 = Rs. 8. Fixed Costs = BEP (units) × Unit CM = 10,000 × Rs. 8 = Rs. 80,000.",
    "tip": "At BEP, Total Fixed Costs equal Total Contribution.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-6",
    "categoryId": "accounting",
    "question": "If a company has total sales of Rs. 1,000,000, a Profit/Volume (P/V) ratio of 25%, and fixed costs of Rs. 150,000, what is the net profit?",
    "answer": "Rs. 100,000",
    "options": [
      "Rs. 80,000",
      "Rs. 100,000",
      "Rs. 120,000",
      "Rs. 150,000"
    ],
    "explanation": "Total Contribution = Sales × P/V Ratio = Rs. 1,000,000 × 25% = Rs. 250,000. Net Profit = Contribution - Fixed Costs = Rs. 250,000 - Rs. 150,000 = Rs. 100,000.",
    "tip": "Profit = (Sales × P/V Ratio) - Fixed Costs.",
    "difficulty": "intermediate"
  },
  {
    "id": "cvp-p2-7",
    "categoryId": "accounting",
    "question": "A firm desires a target profit of Rs. 50,000. Its fixed costs are Rs. 150,000 and the contribution margin per unit is Rs. 25. How many units must be sold?",
    "answer": "8,000 units",
    "options": [
      "6,000 units",
      "7,500 units",
      "8,000 units",
      "9,000 units"
    ],
    "explanation": "Target Units = (Fixed Costs + Target Profit) ÷ Unit CM = (Rs. 150,000 + Rs. 50,000) ÷ Rs. 25 = Rs. 200,000 ÷ Rs. 25 = 8,000 units.",
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
