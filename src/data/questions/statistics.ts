import { Flashcard } from '../../types';

export const STATISTICS_QUESTIONS: Flashcard[] = [
  {
    id: 'stat-1',
    categoryId: 'statistics',
    question: 'Which measure of central tendency is least sensitive to extreme outliers?',
    answer: 'Median',
    options: ['Median', 'Mean', 'Mid-range', 'Standard Deviation'],
    explanation: 'The median is the 50th percentile rank; large or small outlier values at extreme ends do not alter the center rank value.',
    tip: 'Median = positional center, immune to skew from extreme values.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-2',
    categoryId: 'statistics',
    question: 'In a standard normal distribution (Z-distribution), what percentage of data falls within 2 standard deviations of the mean?',
    answer: 'Approximately 95.4%',
    options: ['Approximately 95.4%', 'Approximately 68.2%', 'Approximately 99.7%', 'Approximately 50.0%'],
    explanation: 'The Empirical Rule (68-95-99.7 rule) states that 68% falls within 1 SD, ~95.4% within 2 SDs, and ~99.7% within 3 SDs.',
    tip: '68% (1σ) -> 95% (2σ) -> 99.7% (3σ)',
    difficulty: 'beginner'
  },
  {
    id: 'stat-3',
    categoryId: 'statistics',
    question: 'What constitutes a "Type I Error" in hypothesis testing?',
    answer: 'Rejecting a true null hypothesis (False Positive)',
    options: ['Rejecting a true null hypothesis (False Positive)', 'Failing to reject a false null hypothesis (False Negative)', 'Selecting an unrepresentative sample size', 'Calculating an incorrect sample variance'],
    explanation: 'Type I error (denoted by alpha α) occurs when you conclude there is an effect or difference when in reality there is none (a false alarm).',
    tip: 'Type I = False Alarm (α); Type II = Missed Detection (β).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-4',
    categoryId: 'statistics',
    question: 'What does the Central Limit Theorem state about the sampling distribution of sample means?',
    answer: 'It approaches a normal distribution as sample size n grows large',
    options: ['It approaches a normal distribution as sample size n grows large', 'The sample variance converges to zero as n increases', 'The population distribution must be normal for sample means to be valid', 'The median equals the mode in all discrete distributions'],
    explanation: 'Regardless of the population distribution shape (skewed, uniform, bimodal), the distribution of sample means becomes approximately normal for sufficiently large n (typically n ≥ 30).',
    tip: 'CLT: Sums and means tend toward Gaussian normalcy as n ≥ 30.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-5',
    categoryId: 'statistics',
    question: 'What is the range of values for Pearson\'s correlation coefficient (r)?',
    answer: '-1.0 to +1.0',
    options: ['-1.0 to +1.0', '0.0 to 1.0', '-∞ to +∞', '-100% to 0%'],
    explanation: 'Pearson\'s r ranges from -1 (perfect negative linear correlation) through 0 (no linear correlation) to +1 (perfect positive linear correlation).',
    tip: 'Bound strictly between -1 and +1.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-6',
    categoryId: 'statistics',
    question: 'What is the relationship between Variance and Standard Deviation?',
    answer: 'Standard Deviation is the square root of Variance',
    options: ['Standard Deviation is the square root of Variance', 'Variance is the square root of Standard Deviation', 'Standard Deviation equals Variance divided by sample size n', 'Variance equals Standard Deviation multiplied by degrees of freedom'],
    explanation: 'Standard deviation (σ) is expressed in the same units as the original data, obtained by taking the square root of the variance (σ²).',
    tip: 'σ = √(Variance)',
    difficulty: 'beginner'
  },
  {
    id: 'stat-7',
    categoryId: 'statistics',
    question: 'What is Bayes\' Theorem used for?',
    answer: 'Updating the probability of a hypothesis given new evidence',
    options: ['Updating the probability of a hypothesis given new evidence', 'Determining whether a continuous distribution has finite variance', 'Transforming non-linear residuals into polynomial curves', 'Minimizing squared deviations in linear regression'],
    explanation: 'Bayes\' Theorem calculates posterior probability: P(A|B) = [P(B|A) * P(A)] / P(B), combining prior belief with empirical likelihood.',
    tip: 'Posterior ∝ Likelihood × Prior',
    difficulty: 'advanced'
  },
  {
    id: 'stat-8',
    categoryId: 'statistics',
    question: 'What does a p-value of 0.03 indicate when testing at significance level α = 0.05?',
    answer: 'Reject the null hypothesis (statistically significant at 5%)',
    options: ['Reject the null hypothesis (statistically significant at 5%)', 'Fail to reject the null hypothesis because p < α', 'There is a 3% probability that the null hypothesis is true', 'The sample correlation equals 0.03 exactly'],
    explanation: 'Since p (0.03) ≤ α (0.05), we reject the null hypothesis. Note that p-value is the probability of observing data at least as extreme assuming H0 is true, not the probability that H0 is true.',
    tip: 'If p is low, H0 must go!',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-9',
    categoryId: 'statistics',
    question: 'What is the "Mode" of a dataset?',
    answer: 'The value that appears most frequently in the data',
    options: ['The value that appears most frequently in the data', 'The arithmetic average of all data points', 'The exact middle value when sorted', 'The difference between maximum and minimum values'],
    explanation: 'A dataset can have no mode, one mode (unimodal), two modes (bimodal), or multiple modes.',
    tip: 'Mode = Most frequent value.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-10',
    categoryId: 'statistics',
    question: 'What constitutes a "Type II Error" in hypothesis testing?',
    answer: 'Failing to reject a false null hypothesis (False Negative)',
    options: ['Failing to reject a false null hypothesis (False Negative)', 'Rejecting a true null hypothesis (False Positive)', 'Calculating an incorrect standard deviation', 'Selecting a biased survey sample'],
    explanation: 'Type II error (denoted by beta β) occurs when an actual effect or difference exists, but the test fails to detect it.',
    tip: 'Type II = False Negative (β). Statistical Power = 1 - β.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-11',
    categoryId: 'statistics',
    question: 'What is Statistical Power (1 - β)?',
    answer: 'The probability of correctly rejecting the null hypothesis when it is false',
    options: ['The probability of correctly rejecting the null hypothesis when it is false', 'The significance level α of the statistical test', 'The confidence interval width divided by standard error', 'The proportion of variance explained by the regression line'],
    explanation: 'High statistical power (commonly targeted at 80% or 0.80) means a test has a strong ability to detect real effects if they exist.',
    tip: 'Power = 1 - β = Ability to detect a real effect.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-12',
    categoryId: 'statistics',
    question: 'In a right-skewed (positively skewed) distribution, what is the typical relationship between Mean, Median, and Mode?',
    answer: 'Mean > Median > Mode',
    options: ['Mean > Median > Mode', 'Mode > Median > Mean', 'Mean = Median = Mode', 'Median > Mean > Mode'],
    explanation: 'Extreme high values in the right tail pull the Mean to the right more than the Median, while the Mode remains at the distribution\'s peak.',
    tip: 'Right skew: Mean is pulled right toward the long tail (Mean > Median > Mode).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-13',
    categoryId: 'statistics',
    question: 'In a left-skewed (negatively skewed) distribution, what is the typical relationship between Mean, Median, and Mode?',
    answer: 'Mean < Median < Mode',
    options: ['Mean < Median < Mode', 'Mean > Median > Mode', 'Mean = Median = Mode', 'Mode < Median < Mean'],
    explanation: 'Extreme low values in the left tail drag the Mean down below the Median and Mode.',
    tip: 'Left skew: Mean is dragged left toward negative values (Mean < Median < Mode).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-14',
    categoryId: 'statistics',
    question: 'What is the Interquartile Range (IQR)?',
    answer: 'Q3 minus Q1 (the middle 50% spread of the data)',
    options: ['Q3 minus Q1 (the middle 50% spread of the data)', 'Maximum minus Minimum', 'Standard Deviation divided by Mean', 'Variance divided by Degrees of Freedom'],
    explanation: 'IQR = 75th percentile (Q3) minus 25th percentile (Q1). Like the median, IQR is a robust measure of dispersion resistant to outliers.',
    tip: 'IQR = Q3 - Q1 (contains middle 50% of observations).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-15',
    categoryId: 'statistics',
    question: 'Under Tukey\'s box plot rule, what defines a suspected outlier?',
    answer: 'A point below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR',
    options: ['A point below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR', 'Any point more than 1 standard deviation from the mean', 'Any data value that appears only once in the sample', 'The lowest 10% and highest 10% of observations'],
    explanation: 'Points falling outside the 1.5 * IQR "fences" are flagged as suspected outliers and plotted individually as dots on a box plot.',
    tip: 'Outlier fences: Q1 - 1.5*IQR and Q3 + 1.5*IQR.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-16',
    categoryId: 'statistics',
    question: 'What is the formula for the Z-score of a data value x?',
    answer: 'Z = (x - μ) / σ',
    options: ['Z = (x - μ) / σ', 'Z = (x - σ) / μ', 'Z = (x - μ) * σ', 'Z = (x - Median) / IQR'],
    explanation: 'Z-score measures how many standard deviations a raw score x is above or below the population mean μ.',
    tip: 'Z = (Value - Mean) / Standard Deviation.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-17',
    categoryId: 'statistics',
    question: 'What is the mean and standard deviation of the Standard Normal Distribution (Z)?',
    answer: 'Mean = 0, Standard Deviation = 1',
    options: ['Mean = 0, Standard Deviation = 1', 'Mean = 1, Standard Deviation = 0', 'Mean = 100, Standard Deviation = 15', 'Mean = 50, Standard Deviation = 10'],
    explanation: 'Standardizing any normal variable X ~ N(μ, σ²) using Z = (X - μ) / σ transforms it into Z ~ N(0, 1).',
    tip: 'Standard normal: μ = 0, σ = 1.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-18',
    categoryId: 'statistics',
    question: 'What is the Standard Error of the Mean (SEM)?',
    answer: 'σ / √n (or s / √n for a sample)',
    options: ['σ / √n (or s / √n for a sample)', 'σ * √n', 's² / n', '√s / n'],
    explanation: 'SEM measures the dispersion or variability of sample means around the true population mean across repeated samplings.',
    tip: 'SEM = Standard Deviation divided by square root of n.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-19',
    categoryId: 'statistics',
    question: 'Why do we divide by (n - 1) instead of n when calculating sample variance (Bessel\'s correction)?',
    answer: 'To make the sample variance an unbiased estimator of the population variance',
    options: ['To make the sample variance an unbiased estimator of the population variance', 'To adjust for non-normal skewness in small samples', 'Because the sample mean is always greater than population mean', 'To eliminate the possibility of calculating negative values'],
    explanation: 'Dividing by n systematically underestimates population variance because deviations are measured from the sample mean rather than the true population mean.',
    tip: 'Bessel\'s correction: (n - 1) removes bias from sample variance.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-20',
    categoryId: 'statistics',
    question: 'When should a Student\'s t-distribution be used instead of a Z-distribution for testing sample means?',
    answer: 'When the population standard deviation σ is unknown and estimated by the sample standard deviation s',
    options: ['When the population standard deviation σ is unknown and estimated by the sample standard deviation s', 'Only when sample size n exceeds 1,000 observations', 'When testing categorical binary proportions', 'When the underlying population is known to be uniformly distributed'],
    explanation: 'William Sealy Gosset ("Student") derived the t-distribution to account for extra uncertainty introduced by estimating σ with sample s.',
    tip: 'Unknown population σ -> Use t-distribution with df = n - 1.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-21',
    categoryId: 'statistics',
    question: 'How does the shape of a Student\'s t-distribution change as sample size (degrees of freedom) increases?',
    answer: 'Its tails become thinner and it converges to the Standard Normal Z-distribution',
    options: ['Its tails become thinner and it converges to the Standard Normal Z-distribution', 'It becomes skewed to the right with thicker tails', 'Its peak flattens into a rectangular uniform distribution', 'Its variance expands toward infinity'],
    explanation: 'For small df, t has fatter tails (higher probability of extreme values); as df approaches infinity, t becomes identical to Z.',
    tip: 'As n -> ∞, t-distribution converges to Z-distribution.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-22',
    categoryId: 'statistics',
    question: 'What is the Coefficient of Determination (R²)?',
    answer: 'The proportion of variance in the dependent variable explained by the independent variable(s)',
    options: ['The proportion of variance in the dependent variable explained by the independent variable(s)', 'The slope of the linear regression line divided by the intercept', 'The probability that the true population correlation equals zero', 'The ratio of standard error to sample size'],
    explanation: 'In simple linear regression, R² is literally the square of Pearson\'s r (ranging from 0 to 1). R² = 0.85 means 85% of variability is accounted for.',
    tip: 'R² = Proportion of variance explained by model (0 to 1).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-23',
    categoryId: 'statistics',
    question: 'What is the key danger of interpreting high correlation as causation?',
    answer: 'Correlation does not imply causation due to potential confounding variables and reverse causality',
    options: ['Correlation does not imply causation due to potential confounding variables and reverse causality', 'Correlation is mathematically invalid for sample sizes under 500', 'Correlation coefficients cannot be calculated for continuous variables', 'Correlations are always distorted by the central limit theorem'],
    explanation: 'Ice cream sales and shark attacks correlate strongly because both spike in summer (confounding temperature variable), not because ice cream causes attacks.',
    tip: 'Correlation ≠ Causation (lurking/confounding variables may drive both).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-24',
    categoryId: 'statistics',
    question: 'What is Simpson\'s Paradox?',
    answer: 'A trend that appears in several different groups of data disappears or reverses when the groups are combined',
    options: ['A trend that appears in several different groups of data disappears or reverses when the groups are combined', 'A regression line that passes through zero with negative slope', 'When sample standard deviation is larger than sample range', 'When probability of an event exceeds 1.0 in multi-stage trials'],
    explanation: 'Occurs when an unconsidered confounding variable affects subgroup proportions (e.g. UC Berkeley 1973 admissions gender bias paradox).',
    tip: 'Simpson\'s Paradox: Aggregating data reverses the apparent group trend.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-25',
    categoryId: 'statistics',
    question: 'What are the two key parameters that define a Binomial Distribution B(n, p)?',
    answer: 'Number of independent trials (n) and probability of success on each trial (p)',
    options: ['Number of independent trials (n) and probability of success on each trial (p)', 'Mean (μ) and standard deviation (σ)', 'Degrees of freedom and significance level', 'Rate parameter (λ) and scale parameter (k)'],
    explanation: 'A binomial distribution models the number of successes in n independent Bernoulli trials with constant probability p.',
    tip: 'Binomial: n trials, constant p success rate.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-26',
    categoryId: 'statistics',
    question: 'What is the Mean and Variance of a Binomial Distribution B(n, p)?',
    answer: 'Mean = n*p, Variance = n*p*(1 - p)',
    options: ['Mean = n*p, Variance = n*p*(1 - p)', 'Mean = n / p, Variance = n * p²', 'Mean = p, Variance = p * (1 - p)', 'Mean = n * (1 - p), Variance = n * p'],
    explanation: 'For n = 100 coin flips with p = 0.5: Mean = 50, Variance = 100 * 0.5 * 0.5 = 25 (Standard Deviation = 5).',
    tip: 'Mean = np; Variance = np(1-p).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-27',
    categoryId: 'statistics',
    question: 'When is a Poisson Distribution appropriate to model random events?',
    answer: 'When counting occurrences of rare events in a fixed interval of time or space with a known average rate λ',
    options: ['When counting occurrences of rare events in a fixed interval of time or space with a known average rate λ', 'When measuring continuous body heights across a population', 'When comparing two categorical variables in a contingency table', 'When predicting binary election outcomes with two candidates'],
    explanation: 'Examples: number of emergency calls per hour, website visits per minute, or flaws per meter of fabric. Events occur independently.',
    tip: 'Poisson: Counts of events over a fixed interval (Mean = Variance = λ).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-28',
    categoryId: 'statistics',
    question: 'What unique property characterizes the Mean and Variance of a Poisson Distribution?',
    answer: 'The Mean equals the Variance (both equal λ)',
    options: ['The Mean equals the Variance (both equal λ)', 'The Variance is the square of the Mean', 'The Mean is always 1 while Variance is λ', 'The Variance is strictly half of the Mean'],
    explanation: 'In a Poisson distribution with parameter λ: E[X] = λ and Var(X) = λ.',
    tip: 'Poisson property: Mean = Variance = λ.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-29',
    categoryId: 'statistics',
    question: 'What does a Chi-Square (χ²) Test of Independence assess?',
    answer: 'Whether two categorical variables are significantly associated or independent in a contingency table',
    options: ['Whether two categorical variables are significantly associated or independent in a contingency table', 'Whether the means of three or more continuous groups are equal', 'Whether a linear regression slope is statistically greater than 1', 'Whether a sample variance equals a known population variance'],
    explanation: 'Compares observed cell frequencies (O) against expected frequencies (E) under the null hypothesis of independence: χ² = Σ [(O - E)² / E].',
    tip: 'Chi-Square Independence: Tests association between two categorical variables.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-30',
    categoryId: 'statistics',
    question: 'How are degrees of freedom calculated for a Chi-Square test of independence in an r × c contingency table?',
    answer: '(r - 1) * (c - 1)',
    options: ['(r - 1) * (c - 1)', '(r * c) - 1', 'n - r - c', '(r + c) - 2'],
    explanation: 'r = number of rows, c = number of columns. For a 3x4 table, df = (3 - 1) * (4 - 1) = 2 * 3 = 6.',
    tip: 'df = (rows - 1) * (cols - 1).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-31',
    categoryId: 'statistics',
    question: 'What is the purpose of One-Way Analysis of Variance (ANOVA)?',
    answer: 'To determine whether there are statistically significant differences between the means of three or more independent groups',
    options: ['To determine whether there are statistically significant differences between the means of three or more independent groups', 'To measure linear association between two continuous variables', 'To test whether sample medians come from identical skewed distributions', 'To predict future values in a seasonal time-series model'],
    explanation: 'ANOVA avoids the inflated Type I error rate that would occur if you conducted multiple pairwise two-sample t-tests.',
    tip: 'One-Way ANOVA: Compares means of 3+ groups using F-test.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-32',
    categoryId: 'statistics',
    question: 'What is the F-statistic in ANOVA?',
    answer: 'The ratio of Between-Group Variance (treatment effect) to Within-Group Variance (error)',
    options: ['The ratio of Between-Group Variance (treatment effect) to Within-Group Variance (error)', 'The ratio of sample size to total degrees of freedom', 'The difference between maximum and minimum group means', 'The square of the Pearson correlation coefficient'],
    explanation: 'F = MS_between / MS_within. If treatment differences are real, F will be substantially greater than 1.0.',
    tip: 'F = Between-group variance / Within-group variance.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-33',
    categoryId: 'statistics',
    question: 'What is the Bonferroni Correction used for?',
    answer: 'Adjusting significance threshold α to control family-wise error rate when conducting multiple hypothesis tests',
    options: ['Adjusting significance threshold α to control family-wise error rate when conducting multiple hypothesis tests', 'Normalizing skewed financial distributions prior to regression', 'Imputing missing data in longitudinal clinical trials', 'Correcting for seasonal autocorrelation in econometrics'],
    explanation: 'If running k comparisons, divide α by k (e.g. α_adjusted = 0.05 / 10 = 0.005) to prevent false discoveries.',
    tip: 'Bonferroni: α_new = α / number of tests (controls family-wise error).',
    difficulty: 'advanced'
  },
  {
    id: 'stat-34',
    categoryId: 'statistics',
    question: 'What is the False Discovery Rate (FDR) / Benjamini-Hochberg procedure?',
    answer: 'A method to control the expected proportion of false positives among all declared significant results',
    options: ['A method to control the expected proportion of false positives among all declared significant results', 'A procedure to detect fraudulent bank transactions in real time', 'A test for heteroscedasticity in Ordinary Least Squares residuals', 'A technique for estimating sample size requirements in pilot studies'],
    explanation: 'FDR is less conservative than Bonferroni, making it ideal for high-throughput testing (e.g. genomics with 20,000 genes tested simultaneously).',
    tip: 'FDR: Controls proportion of false rejections among significant results.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-35',
    categoryId: 'statistics',
    question: 'What does a 95% Confidence Interval for a population mean actually mean?',
    answer: 'If we took many samples and constructed 95% CIs, 95% of those intervals would contain the true population parameter',
    options: ['If we took many samples and constructed 95% CIs, 95% of those intervals would contain the true population parameter', 'There is a 95% probability that the true population mean lies inside this specific interval', '95% of the raw data points in the sample fall inside the interval', 'The true population mean changes values 5% of the time'],
    explanation: 'In frequentist statistics, the population parameter is fixed. The interval is the random variable; 95% refers to the long-run coverage rate of the procedure.',
    tip: 'Frequentist CI: 95% of constructed intervals from repeated samples capture true parameter.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-36',
    categoryId: 'statistics',
    question: 'In Bayesian statistics, what is a "Credible Interval"?',
    answer: 'An interval within which an unobserved parameter has a specified subjective probability (e.g. 95%) of falling, given the data and prior',
    options: ['An interval within which an unobserved parameter has a specified subjective probability (e.g. 95%) of falling, given the data and prior', 'A confidence interval that passes independent auditor review', 'The range of values excluding all detected outliers', 'The margin of error in presidential polling surveys'],
    explanation: 'Unlike frequentist CIs, Bayesian credible intervals treat the parameter as a random variable with a posterior distribution, allowing direct probability statements.',
    tip: 'Credible Interval: 95% probability that parameter is in this interval (Bayesian).',
    difficulty: 'advanced'
  },
  {
    id: 'stat-37',
    categoryId: 'statistics',
    question: 'What is a "Conjugate Prior" in Bayesian inference?',
    answer: 'A prior distribution that, when combined with the likelihood function, results in a posterior distribution in the same probability family',
    options: ['A prior distribution that, when combined with the likelihood function, results in a posterior distribution in the same probability family', 'A prior distribution whose mean is identically zero', 'A uniform distribution assigning equal probability to all states', 'A prior distribution derived from historical census data'],
    explanation: 'Classic example: Beta prior with Binomial likelihood yields Beta posterior; Normal prior with Normal likelihood yields Normal posterior.',
    tip: 'Conjugate: Prior and Posterior belong to the same distribution family.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-38',
    categoryId: 'statistics',
    question: 'What is Ordinary Least Squares (OLS) regression designed to minimize?',
    answer: 'The sum of the squared vertical differences (residuals) between observed points and the fitted line',
    options: ['The sum of the squared vertical differences (residuals) between observed points and the fitted line', 'The sum of absolute horizontal distances between points', 'The total number of independent variables included in the model', 'The variance of the independent variable X'],
    explanation: 'OLS minimizes SSE = Σ(y_i - ŷ_i)². Squaring penalizes large deviations and ensures positive mathematical summation.',
    tip: 'OLS minimizes Sum of Squared Residuals (SSE).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-39',
    categoryId: 'statistics',
    question: 'What is "Heteroscedasticity" in linear regression?',
    answer: 'When the variance of the residuals is not constant across all levels of the independent variable',
    options: ['When the variance of the residuals is not constant across all levels of the independent variable', 'When independent variables are perfectly collinear with each other', 'When regression errors follow a non-linear sinusoidal pattern', 'When the intercept of the regression line equals zero'],
    explanation: 'Violates OLS assumption of homoscedasticity (equal spread). While estimates remain unbiased, standard errors are invalid, corrupting hypothesis tests.',
    tip: 'Heteroscedasticity = Non-constant residual variance (fan/cone shape).',
    difficulty: 'advanced'
  },
  {
    id: 'stat-40',
    categoryId: 'statistics',
    question: 'What is "Multicollinearity" in multiple regression?',
    answer: 'High correlation between two or more independent (predictor) variables in the model',
    options: ['High correlation between two or more independent (predictor) variables in the model', 'Correlation between the dependent variable and the error term', 'Non-linear curvature between input X and output Y', 'When residuals exhibit positive autocorrelation over time'],
    explanation: 'Multicollinearity inflates standard errors of coefficients, making it hard to identify individual predictor effects (measured via VIF > 5 or 10).',
    tip: 'Multicollinearity: Predictors are redundant and correlate with each other.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-41',
    categoryId: 'statistics',
    question: 'What is the Variance Inflation Factor (VIF)?',
    answer: 'A diagnostic metric measuring how much the variance of an estimated regression coefficient is inflated by multicollinearity',
    options: ['A diagnostic metric measuring how much the variance of an estimated regression coefficient is inflated by multicollinearity', 'The ratio of sample variance to population variance', 'The percentage increase in sample standard deviation as n grows', 'The multiplier applied to confidence intervals for small samples'],
    explanation: 'VIF = 1 / (1 - R²_j). A VIF > 5 or 10 indicates severe multicollinearity requiring variable removal or regularization.',
    tip: 'VIF = 1 / (1 - R²). VIF > 5-10 indicates problematic collinearity.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-42',
    categoryId: 'statistics',
    question: 'What is the Durbin-Watson statistic used to detect in regression analysis?',
    answer: 'Autocorrelation (serial correlation) in the residuals of a time-series regression',
    options: ['Autocorrelation (serial correlation) in the residuals of a time-series regression', 'Multicollinearity between independent regressors', 'Departure of error terms from normal distribution shape', 'The presence of high-leverage influential outlier points'],
    explanation: 'Values range from 0 to 4. A value near 2 indicates no autocorrelation; values < 2 indicate positive autocorrelation; > 2 indicate negative.',
    tip: 'Durbin-Watson ≈ 2 means no autocorrelation.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-43',
    categoryId: 'statistics',
    question: 'What is the difference between Ridge Regression (L2) and Lasso Regression (L1)?',
    answer: 'Lasso can shrink coefficients to exactly zero (feature selection), while Ridge shrinks them close to zero but keeps all variables',
    options: ['Lasso can shrink coefficients to exactly zero (feature selection), while Ridge shrinks them close to zero but keeps all variables', 'Ridge uses absolute values of weights, while Lasso uses squared weights', 'Ridge is only for logistic regression, while Lasso is for linear models', 'Lasso increases model variance, while Ridge eliminates bias completely'],
    explanation: 'Lasso adds penalty λΣ|β_j| (L1 norm), forcing non-essential weights to 0. Ridge adds λΣβ_j² (L2 norm), which handles collinearity smoothly.',
    tip: 'L1 (Lasso) = Feature selection (exact zeros). L2 (Ridge) = Shrinks weights.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-44',
    categoryId: 'statistics',
    question: 'What is Logistic Regression used for?',
    answer: 'Modeling the probability of a categorical (usually binary) dependent variable based on one or more predictors',
    options: ['Modeling the probability of a categorical (usually binary) dependent variable based on one or more predictors', 'Fitting exponential curves to continuous laboratory test results', 'Calculating non-linear inventory replenishment cycles', 'Estimating the median of multi-modal continuous distributions'],
    explanation: 'Uses the logit (log-odds) link function: ln(p / (1 - p)) = β0 + β1*X, transforming linear outputs into bounded probabilities between 0 and 1.',
    tip: 'Logistic Regression models binary probabilities via logit link.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-45',
    categoryId: 'statistics',
    question: 'What is an "Odds Ratio" (OR)?',
    answer: 'The ratio of the odds of an outcome occurring in an exposed group to the odds of it occurring in an unexposed group',
    options: ['The ratio of the odds of an outcome occurring in an exposed group to the odds of it occurring in an unexposed group', 'The raw probability of success divided by sample size', 'The standard deviation of an exponential distribution', 'The slope of a continuous polynomial trendline'],
    explanation: 'OR = 1 indicates exposure does not affect odds; OR > 1 indicates higher odds with exposure (e.g. smoking and lung disease); OR < 1 indicates protective effect.',
    tip: 'Odds Ratio = (Odds in exposed) / (Odds in unexposed).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-46',
    categoryId: 'statistics',
    question: 'What is the "Confusion Matrix" in classification evaluation?',
    answer: 'A table summarizing performance by displaying True Positives, False Positives, True Negatives, and False Negatives',
    options: ['A table summarizing performance by displaying True Positives, False Positives, True Negatives, and False Negatives', 'A correlation matrix containing severe collinear errors', 'A grid used to track missing data patterns in surveys', 'A mathematical proof showing that Bayes theorem is inconsistent'],
    explanation: 'Foundation for computing Accuracy, Sensitivity (Recall), Specificity, and Precision.',
    tip: 'Confusion matrix: TP, FP, TN, FN.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-47',
    categoryId: 'statistics',
    question: 'How is Sensitivity (Recall / True Positive Rate) calculated?',
    answer: 'True Positives / (True Positives + False Negatives)',
    options: ['True Positives / (True Positives + False Negatives)', 'True Positives / (True Positives + False Positives)', 'True Negatives / (True Negatives + False Positives)', '(True Positives + True Negatives) / Total'],
    explanation: 'Measures the proportion of actual positive cases that the model correctly identified (crucial in medical cancer screening).',
    tip: 'Sensitivity = TP / (TP + FN) = True Positive Rate.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-48',
    categoryId: 'statistics',
    question: 'How is Precision (Positive Predictive Value) calculated?',
    answer: 'True Positives / (True Positives + False Positives)',
    options: ['True Positives / (True Positives + False Positives)', 'True Positives / (True Positives + False Negatives)', 'True Negatives / (True Negatives + False Negatives)', 'False Positives / Total Sample Size'],
    explanation: 'Of all instances the model predicted as positive, what fraction were genuinely positive (crucial in spam filtering).',
    tip: 'Precision = TP / (TP + FP).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-49',
    categoryId: 'statistics',
    question: 'What is the F1-Score?',
    answer: 'The harmonic mean of Precision and Recall: 2 * (Precision * Recall) / (Precision + Recall)',
    options: ['The harmonic mean of Precision and Recall: 2 * (Precision * Recall) / (Precision + Recall)', 'The simple arithmetic average of Accuracy and Specificity', 'The square root of Pearson correlation multiplied by sample size', 'The ratio of false positives to true negatives'],
    explanation: 'Gives equal balance to Precision and Recall; preferred over raw accuracy when classes are heavily imbalanced (e.g. credit card fraud).',
    tip: 'F1 = Harmonic mean of Precision and Recall.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-50',
    categoryId: 'statistics',
    question: 'What does the Area Under the ROC Curve (AUC-ROC) measure?',
    answer: 'The ability of a classifier to distinguish between positive and negative classes across all classification thresholds',
    options: ['The ability of a classifier to distinguish between positive and negative classes across all classification thresholds', 'The area of confidence intervals plotted around sample means', 'The total explained variance in polynomial regression models', 'The probability that sample data is normally distributed'],
    explanation: 'AUC = 0.5 represents random guessing; AUC = 1.0 represents a perfect classifier.',
    tip: 'AUC: 0.5 = coin flip, 1.0 = perfect model discrimination.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-51',
    categoryId: 'statistics',
    question: 'What is "Stratified Random Sampling"?',
    answer: 'Dividing the population into non-overlapping subgroups (strata) and taking a random sample from each stratum proportionally',
    options: ['Dividing the population into non-overlapping subgroups (strata) and taking a random sample from each stratum proportionally', 'Sampling whoever happens to walk past a shopping mall doorway', 'Selecting entire geographic clusters while ignoring other clusters', 'Selecting every 10th name from an alphabetical telephone book'],
    explanation: 'Ensures that key sub-populations (e.g. ethnic groups, age brackets) are represented accurately with lower sampling error.',
    tip: 'Stratified: Divide into strata (layers), then sample randomly from each.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-52',
    categoryId: 'statistics',
    question: 'What is "Cluster Sampling"?',
    answer: 'Dividing population into naturally occurring clusters, randomly selecting a sample of clusters, and surveying all members within chosen clusters',
    options: ['Dividing population into naturally occurring clusters, randomly selecting a sample of clusters, and surveying all members within chosen clusters', 'Sampling respondents based on voluntary online opt-in polls', 'Testing only subjects with identical socioeconomic demographic profiles', 'Pairing experimental subjects with identical twins for control'],
    explanation: 'Cost-effective for geographically dispersed populations (e.g. randomly selecting 20 schools out of 500, then surveying all students in those 20 schools).',
    tip: 'Cluster: Randomly pick whole clusters and test everyone inside.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-53',
    categoryId: 'statistics',
    question: 'What is "Selection Bias"?',
    answer: 'Systematic error introduced when the sample selected is not representative of the target population',
    options: ['Systematic error introduced when the sample selected is not representative of the target population', 'The mathematical difference between sample mean and median', 'Error caused by rounding numbers to two decimal places', 'Random fluctuations in measurement instruments during experiments'],
    explanation: 'Classic example: 1936 Literary Digest poll predicted Landon defeating Roosevelt because the sample was drawn from telephone and car registration lists (wealthy voters).',
    tip: 'Selection bias = Non-representative sample corrupts generalizability.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-54',
    categoryId: 'statistics',
    question: 'What is "Survivorship Bias"?',
    answer: 'Focusing on successful people or things that passed a selection process while overlooking those that failed to make it past',
    options: ['Focusing on successful people or things that passed a selection process while overlooking those that failed to make it past', 'Calculating life expectancy tables using historical parish records', 'A sampling method used exclusively in mortality medical studies', 'Overestimating the variance of long-lived corporate bonds'],
    explanation: 'Abraham Wald famously pointed out in WWII that returning bombers were shot in wings, so armor should be added to engines where missing planes were hit.',
    tip: 'Survivorship bias: Looking only at survivors skews the true picture.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-55',
    categoryId: 'statistics',
    question: 'What is a "Non-Parametric" statistical test?',
    answer: 'A distribution-free test that does not assume the data follows a specific parametric probability distribution (e.g. normal)',
    options: ['A distribution-free test that does not assume the data follows a specific parametric probability distribution (e.g. normal)', 'A test that requires parameters like population mean and variance to be known', 'A test executed without setting any null hypothesis', 'A test restricted to datasets containing fewer than 10 points'],
    explanation: 'Non-parametric tests (Mann-Whitney U, Wilcoxon signed-rank, Kruskal-Wallis) operate on ranks rather than raw values, making them robust to skewness and outliers.',
    tip: 'Non-parametric = Distribution-free; tests ranks instead of parametric parameters.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-56',
    categoryId: 'statistics',
    question: 'What is the non-parametric equivalent of the independent two-sample t-test?',
    answer: 'Mann-Whitney U Test (Wilcoxon Rank-Sum Test)',
    options: ['Mann-Whitney U Test (Wilcoxon Rank-Sum Test)', 'Kruskal-Wallis Test', 'Friedman Test', 'Chi-Square Goodness-of-Fit Test'],
    explanation: 'Evaluates whether the distribution of ranks differs between two independent groups without assuming normality.',
    tip: 'Mann-Whitney U = Non-parametric alternative to independent 2-sample t-test.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-57',
    categoryId: 'statistics',
    question: 'What is the non-parametric equivalent of the paired t-test?',
    answer: 'Wilcoxon Signed-Rank Test',
    options: ['Wilcoxon Signed-Rank Test', 'Mann-Whitney U Test', 'Kruskal-Wallis Test', 'Spearman Rank Correlation'],
    explanation: 'Tests whether median differences between paired observations (e.g. before-and-after measurements) are significantly different from zero.',
    tip: 'Wilcoxon Signed-Rank = Non-parametric alternative to paired t-test.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-58',
    categoryId: 'statistics',
    question: 'What is the non-parametric equivalent of One-Way ANOVA?',
    answer: 'Kruskal-Wallis Test',
    options: ['Kruskal-Wallis Test', 'Wilcoxon Signed-Rank Test', 'Friedman Test', 'Durbin-Watson Test'],
    explanation: 'Compares the medians of three or more independent groups using ranked data when normality assumptions fail.',
    tip: 'Kruskal-Wallis = Non-parametric 1-way ANOVA (3+ groups).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-59',
    categoryId: 'statistics',
    question: 'What does Spearman\'s Rank Correlation (ρ) measure?',
    answer: 'The strength and direction of monotonic association between two ranked variables',
    options: ['The strength and direction of monotonic association between two ranked variables', 'The exact linear relationship between two normally distributed variables', 'The ratio of between-group to within-group sample variance', 'The proportion of binary classification errors'],
    explanation: 'Unlike Pearson\'s r (linear), Spearman\'s ρ detects any monotonic relationship (curved but consistently increasing/decreasing) and is unaffected by outliers.',
    tip: 'Spearman = Monotonic relationship on ranked data.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-60',
    categoryId: 'statistics',
    question: 'What is the "Law of Large Numbers" (LLN)?',
    answer: 'As sample size increases, the sample average converges closer and closer to the true expected value of the population',
    options: ['As sample size increases, the sample average converges closer and closer to the true expected value of the population', 'Larger numbers in a dataset have higher standard deviations', 'Sampling distributions always become uniform as n exceeds 10,000', 'The probability of rolling sixes decreases with more die rolls'],
    explanation: 'Guarantees that casino games and insurance underwriting are profitable in the aggregate, despite short-term random volatility.',
    tip: 'LLN: Sample mean converges to true expected value as n grows.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-61',
    categoryId: 'statistics',
    question: 'What is the "Gambler\'s Fallacy"?',
    answer: 'The erroneous belief that past independent events influence the probability of future independent events (e.g. "red is due")',
    options: ['The erroneous belief that past independent events influence the probability of future independent events (e.g. "red is due")', 'Betting all capital on a single high-variance trade', 'Assuming a casino roulette wheel is biased without statistical proof', 'Underestimating the impact of inflation on cash holdings'],
    explanation: 'A fair coin has no memory: after flipping 10 heads in a row, the probability of heads on the 11th flip remains exactly 0.5.',
    tip: 'Gambler\'s Fallacy: Independent events have no memory.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-62',
    categoryId: 'statistics',
    question: 'What is the definition of "Conditional Probability" P(A|B)?',
    answer: 'P(A ∩ B) / P(B)',
    options: ['P(A ∩ B) / P(B)', 'P(A) * P(B)', 'P(A ∪ B) - P(B)', 'P(B) / P(A)'],
    explanation: 'The probability of event A occurring given that event B is already known to have occurred, provided P(B) > 0.',
    tip: 'P(A|B) = P(A and B) / P(B).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-63',
    categoryId: 'statistics',
    question: 'What is the mathematical condition for two events A and B to be statistically independent?',
    answer: 'P(A ∩ B) = P(A) * P(B) [or P(A|B) = P(A)]',
    options: ['P(A ∩ B) = P(A) * P(B) [or P(A|B) = P(A)]', 'P(A ∪ B) = P(A) + P(B)', 'P(A ∩ B) = 0', 'P(A|B) = P(B|A)'],
    explanation: 'Independence means the occurrence of event B provides zero information about the likelihood of event A.',
    tip: 'Independent: P(A and B) = P(A) * P(B).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-64',
    categoryId: 'statistics',
    question: 'What does "Mutually Exclusive" (Disjoint) events mean?',
    answer: 'Events that cannot happen at the same time: P(A ∩ B) = 0',
    options: ['Events that cannot happen at the same time: P(A ∩ B) = 0', 'Events where P(A and B) = P(A) * P(B)', 'Events that always occur in chronological sequence', 'Events that share identical conditional probabilities'],
    explanation: 'A coin flip showing heads and tails simultaneously is mutually exclusive; rolling an even number and rolling a prime number is not mutually exclusive (the number 2 is both).',
    tip: 'Mutually exclusive: Cannot both occur (Intersection = 0).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-65',
    categoryId: 'statistics',
    question: 'What is the formula for the Addition Rule of Probability for any two events A and B?',
    answer: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
    options: ['P(A ∪ B) = P(A) + P(B) - P(A ∩ B)', 'P(A ∪ B) = P(A) * P(B)', 'P(A ∪ B) = [P(A) + P(B)] / 2', 'P(A ∪ B) = P(A) - P(B) + P(A ∩ B)'],
    explanation: 'Subtracting P(A ∩ B) prevents double-counting the overlap region where both events occur simultaneously.',
    tip: 'P(A or B) = P(A) + P(B) - P(A and B).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-66',
    categoryId: 'statistics',
    question: 'What is the "Geometric Distribution"?',
    answer: 'A discrete distribution modeling the number of Bernoulli trials needed to get the first success',
    options: ['A discrete distribution modeling the number of Bernoulli trials needed to get the first success', 'A continuous distribution modeling spatial distances between cities', 'A distribution measuring the volume of geometric polyhedra', 'A model of multiple categorical outcomes in survey polls'],
    explanation: 'Probability of first success on trial k: P(X = k) = (1 - p)^(k - 1) * p. Expected value is 1 / p.',
    tip: 'Geometric: Number of trials until the FIRST success.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-67',
    categoryId: 'statistics',
    question: 'What is the "Negative Binomial Distribution"?',
    answer: 'A discrete distribution modeling the number of trials required to achieve a specified number of successes (r)',
    options: ['A discrete distribution modeling the number of trials required to achieve a specified number of successes (r)', 'A distribution that produces negative probability values', 'A binomial test conducted on negative correlation metrics', 'A continuous model of radio decay emission intervals'],
    explanation: 'Generalizes the geometric distribution (which is just negative binomial with r = 1). Also widely used to model overdispersed count data.',
    tip: 'Negative Binomial: Number of trials until r successes.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-68',
    categoryId: 'statistics',
    question: 'What is the "Hypergeometric Distribution"?',
    answer: 'A distribution modeling successes in n draws from a finite population WITHOUT replacement',
    options: ['A distribution modeling successes in n draws from a finite population WITHOUT replacement', 'A binomial distribution with infinite sample size', 'A distribution describing geometric shapes in 4-dimensional space', 'A continuous model for extreme financial stock market crashes'],
    explanation: 'Unlike the Binomial distribution (sampling with replacement, constant p), trials in hypergeometric sampling are dependent because the composition changes with each draw.',
    tip: 'Hypergeometric = Sampling WITHOUT replacement from a finite population.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-69',
    categoryId: 'statistics',
    question: 'What is the "Exponential Distribution"?',
    answer: 'A continuous probability distribution modeling the time elapsed between Poisson point process events',
    options: ['A continuous probability distribution modeling the time elapsed between Poisson point process events', 'A distribution that models exponential population growth over centuries', 'A discrete distribution measuring the count of successes in a game', 'A symmetric bell-shaped distribution with infinite variance'],
    explanation: 'PDF is f(x) = λe^(-λx). Mean is 1 / λ. Famous for possessing the "memoryless" property.',
    tip: 'Exponential: Time BETWEEN events in a Poisson process.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-70',
    categoryId: 'statistics',
    question: 'What is the "Memoryless Property" of the exponential distribution?',
    answer: 'The probability that an event occurs in the next t units of time is independent of how much time has already passed: P(X > s + t | X > s) = P(X > t)',
    options: ['The probability that an event occurs in the next t units of time is independent of how much time has already passed: P(X > s + t | X > s) = P(X > t)', 'The distribution cannot be saved in digital computer memory storage', 'Past sample sizes do not affect the calculated degrees of freedom', 'The variance of the distribution is completely erased after 100 trials'],
    explanation: 'If a light bulb has an exponential lifetime, an old bulb that has survived 500 hours is just as likely to survive the next 10 hours as a brand new bulb.',
    tip: 'Memoryless: How long you have waited does not change future wait time.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-71',
    categoryId: 'statistics',
    question: 'What is "Kurtosis"?',
    answer: 'A measure of the "tailedness" and propensity for extreme outliers in a probability distribution relative to a normal distribution',
    options: ['A measure of the "tailedness" and propensity for extreme outliers in a probability distribution relative to a normal distribution', 'The degree of horizontal asymmetry or tilt in a curve', 'The distance between the sample mean and the median rank', 'The ratio of standard error to degrees of freedom'],
    explanation: 'Mesokurtic = normal (kurtosis = 3, excess kurtosis = 0). Leptokurtic (>0) = fat tails and high outlier risk. Platykurtic (<0) = thin tails.',
    tip: 'Kurtosis = Measure of tail heaviness and outlier likelihood.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-72',
    categoryId: 'statistics',
    question: 'What does a "Leptokurtic" distribution exhibit?',
    answer: 'Heavy/fat tails and a higher probability of extreme outlier events compared to a normal distribution (excess kurtosis > 0)',
    options: ['Heavy/fat tails and a higher probability of extreme outlier events compared to a normal distribution (excess kurtosis > 0)', 'Thin tails and a flat plateau with zero probability of outliers', 'A single flat line assigning equal probability to all real numbers', 'A skewed distribution that never takes values above zero'],
    explanation: 'Financial asset returns are notoriously leptokurtic: market crashes and spikes occur far more frequently than predicted by standard Gaussian bells.',
    tip: 'Leptokurtic = Fat tails = High black-swan outlier risk.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-73',
    categoryId: 'statistics',
    question: 'What is "Skewness"?',
    answer: 'A measure of the asymmetry of the probability distribution of a real-valued random variable about its mean',
    options: ['A measure of the asymmetry of the probability distribution of a real-valued random variable about its mean', 'The total spread of data between minimum and maximum', 'The number of modes present in a multimodal histogram', 'The correlation between independent regression variables'],
    explanation: 'Skewness = 0 for perfectly symmetric curves (like the normal distribution). Positive skew has a long right tail; negative skew has a long left tail.',
    tip: 'Skewness measures asymmetry around the mean.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-74',
    categoryId: 'statistics',
    question: 'What is Chebyshev\'s Inequality?',
    answer: 'For any distribution with finite variance, the proportion of values within k standard deviations of the mean is at least 1 - (1 / k²)',
    options: ['For any distribution with finite variance, the proportion of values within k standard deviations of the mean is at least 1 - (1 / k²)', 'Sample means are guaranteed to equal population medians for k ≥ 3', 'Variance increases proportionally with the square root of sample size', 'The maximum value in any finite dataset cannot exceed k times the mean'],
    explanation: 'Applies to ANY distribution regardless of shape: for k = 2, at least 1 - 1/4 = 75% of data must fall within 2 standard deviations.',
    tip: 'Chebyshev: At least 1 - 1/k² of data lies within k standard deviations.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-75',
    categoryId: 'statistics',
    question: 'What is "Bootstrapping" in modern statistics?',
    answer: 'A resampling technique that estimates the sampling distribution of an estimator by repeatedly sampling with replacement from the observed data',
    options: ['A resampling technique that estimates the sampling distribution of an estimator by repeatedly sampling with replacement from the observed data', 'A linear regression method that eliminates all negative coefficients', 'A technique for writing computer code without external software libraries', 'An algorithm that forces sample standard deviation to equal 1.0'],
    explanation: 'Introduced by Bradley Efron, bootstrapping allows computation of confidence intervals and standard errors without requiring strict parametric distribution assumptions.',
    tip: 'Bootstrapping: Resample WITH replacement from your sample data.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-76',
    categoryId: 'statistics',
    question: 'What is "Jackknife" resampling?',
    answer: 'A leave-one-out resampling technique used to estimate bias and variance of an estimator',
    options: ['A leave-one-out resampling technique used to estimate bias and variance of an estimator', 'A method of randomly removing 50% of survey responses', 'A test for autocorrelation in time-series residuals', 'An iterative clustering algorithm for unlabelled datasets'],
    explanation: 'Computes the statistic repeatedly leaving out each single observation one at a time (n subsets of size n - 1).',
    tip: 'Jackknife = Leave-one-out cross-calculation.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-77',
    categoryId: 'statistics',
    question: 'What is "K-Fold Cross-Validation"?',
    answer: 'Partitioning dataset into k equal subsets, training the model on k - 1 folds, and testing on the remaining fold, repeating k times',
    options: ['Partitioning dataset into k equal subsets, training the model on k - 1 folds, and testing on the remaining fold, repeating k times', 'Running linear regression k times with increasing penalty weights', 'Grouping continuous observations into k categorical bins', 'Testing whether k independent sample variances are statistically equal'],
    explanation: 'Provides an accurate estimate of out-of-sample generalization error and guards against overfitting.',
    tip: 'K-Fold: Train on k-1, test on 1, rotate k times.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-78',
    categoryId: 'statistics',
    question: 'What is the "Bias-Variance Tradeoff" in statistical learning?',
    answer: 'Simple models have high bias and underfit; complex models have high variance and overfit; optimal error balances both',
    options: ['Simple models have high bias and underfit; complex models have high variance and overfit; optimal error balances both', 'Increasing sample size increases both bias and variance exponentially', 'Models with zero bias automatically achieve zero prediction variance', 'Variance only applies to continuous data while bias applies to counts'],
    explanation: 'Total Expected Error = Bias² + Variance + Irreducible Error. Minimizing test error requires finding the sweet spot in model complexity.',
    tip: 'Underfitting = High Bias. Overfitting = High Variance.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-79',
    categoryId: 'statistics',
    question: 'What is "Overfitting"?',
    answer: 'When a model learns the random noise and idiosyncrasies in the training data rather than the underlying generalizable relationship',
    options: ['When a model learns the random noise and idiosyncrasies in the training data rather than the underlying generalizable relationship', 'When a statistical test fails to reject a false null hypothesis', 'When an independent variable has a correlation coefficient of zero', 'When the sample size is too large for computer memory to process'],
    explanation: 'Overfit models perform phenomenally on training data (high R², low training error) but fail poorly on unseen test data.',
    tip: 'Overfitting: Memorizes training noise; fails on new data.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-80',
    categoryId: 'statistics',
    question: 'What is "Underfitting"?',
    answer: 'When a model is too simple to capture the underlying structure of the data (high training error and high test error)',
    options: ['When a model is too simple to capture the underlying structure of the data (high training error and high test error)', 'When a regression line passes through all points with R² = 1.0', 'When a sample has fewer than five degrees of freedom', 'When test errors are significantly lower than training errors'],
    explanation: 'Fitting a straight line to quadratic curved data is classic underfitting: excessive bias prevents the model from learning the pattern.',
    tip: 'Underfitting: Model too simple (high bias).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-81',
    categoryId: 'statistics',
    question: 'What does the Shapiro-Wilk Test evaluate?',
    answer: 'Whether a sample comes from a normally distributed population',
    options: ['Whether a sample comes from a normally distributed population', 'Whether two continuous variances are equal (homoscedasticity)', 'Whether a linear regression intercept differs from zero', 'Whether time-series data is stationary'],
    explanation: 'One of the most powerful and widely used formal tests for normality. A p-value < 0.05 rejects the null hypothesis of normality.',
    tip: 'Shapiro-Wilk = Tests for normality.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-82',
    categoryId: 'statistics',
    question: 'What does Levene\'s Test evaluate?',
    answer: 'The equality of variances (homogeneity of variance) across two or more groups',
    options: ['The equality of variances (homogeneity of variance) across two or more groups', 'The equality of medians in non-parametric data', 'The presence of autocorrelation in regression residuals', 'The significance of interaction effects in factorial ANOVA'],
    explanation: 'Essential check prior to running standard independent t-tests or ANOVA. Less sensitive to departures from normality than Bartlett\'s test.',
    tip: 'Levene\'s test checks equality of group variances.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-83',
    categoryId: 'statistics',
    question: 'What is Welch\'s t-test?',
    answer: 'An adaptation of the two-sample t-test that does not assume equal population variances',
    options: ['An adaptation of the two-sample t-test that does not assume equal population variances', 'A t-test conducted on ranked non-parametric data', 'A test comparing three or more paired dependent samples', 'A test restricted strictly to sample sizes under n = 10'],
    explanation: 'Also known as the unequal variances t-test: adjusts degrees of freedom using the Welch-Satterthwaite equation, recommended as the default 2-sample test.',
    tip: 'Welch\'s t-test = 2-sample t-test without assuming equal variances.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-84',
    categoryId: 'statistics',
    question: 'What is Cohen\'s d?',
    answer: 'A standardized effect size measure representing the difference between two means divided by the pooled standard deviation',
    options: ['A standardized effect size measure representing the difference between two means divided by the pooled standard deviation', 'The critical cutoff value for rejecting the null hypothesis in a z-test', 'The probability of committing a Type I error in pilot research', 'The ratio of explained sum of squares to total sum of squares'],
    explanation: 'Indicates the practical magnitude of an effect independent of sample size: small (d ≈ 0.2), medium (d ≈ 0.5), large (d ≈ 0.8).',
    tip: 'Cohen\'s d = Effect size (Difference in means / Pooled SD).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-85',
    categoryId: 'statistics',
    question: 'Why is reporting Effect Size essential in addition to p-values?',
    answer: 'With large sample sizes, trivial and clinically meaningless differences can become statistically significant (p < 0.05)',
    options: ['With large sample sizes, trivial and clinically meaningless differences can become statistically significant (p < 0.05)', 'Effect sizes are required to prove that p-values are mathematically positive', 'Effect sizes eliminate the need to collect random samples', 'Standard errors cannot be calculated without effect size metrics'],
    explanation: 'A drug lowering systolic blood pressure by 0.1 mmHg can achieve p < 0.001 with 1,000,000 patients, but has negligible effect size and clinical utility.',
    tip: 'Statistical significance (p-value) ≠ Practical significance (effect size).',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-86',
    categoryId: 'statistics',
    question: 'What is "p-hacking" (Data Dredging)?',
    answer: 'Misuse of data analysis to search through many comparisons until something achieves statistical significance (p < 0.05)',
    options: ['Misuse of data analysis to search through many comparisons until something achieves statistical significance (p < 0.05)', 'Writing computer scripts to decrypt encrypted databases', 'Calculating variance using population parameters instead of sample statistics', 'Rounding p-values to two decimal places in academic journals'],
    explanation: 'Techniques include trying multiple covariate controls, dropping inconvenient conditions, or stopping data collection once p < 0.05, creating false positive crises.',
    tip: 'p-hacking: Manipulating data analysis to artificially produce p < 0.05.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-87',
    categoryId: 'statistics',
    question: 'What is a "Q-Q Plot" (Quantile-Quantile Plot)?',
    answer: 'A graphical scatterplot comparing the empirical quantiles of sample data against theoretical quantiles of a normal distribution',
    options: ['A graphical scatterplot comparing the empirical quantiles of sample data against theoretical quantiles of a normal distribution', 'A plot of independent variables against dependent variables in time series', 'A chart showing the cumulative sum of squares across ANOVA models', 'A graph displaying the correlation between two independent predictors'],
    explanation: 'If sample data is normally distributed, points fall in a straight diagonal line. Deviations show skewness or heavy/thin tails.',
    tip: 'Q-Q Plot: Straight diagonal line confirms normal distribution.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-88',
    categoryId: 'statistics',
    question: 'What is a "Bimodal Distribution"?',
    answer: 'A probability distribution that has two distinct local peaks (modes)',
    options: ['A probability distribution that has two distinct local peaks (modes)', 'A distribution that takes only binary boolean values (0 or 1)', 'A curve whose mean is twice as large as its standard deviation', 'A dataset with two independent continuous predictor variables'],
    explanation: 'Often indicates that the sample combines two distinct sub-populations (e.g. height distribution combining adult men and women).',
    tip: 'Bimodal: Two distinct peaks in the frequency distribution.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-89',
    categoryId: 'statistics',
    question: 'What is the "Uniform Distribution"?',
    answer: 'A distribution where all outcomes across a specified interval have equal probability',
    options: ['A distribution where all outcomes across a specified interval have equal probability', 'A distribution that exhibits a single sharp central peak at zero', 'A curve where variance increases exponentially over time', 'A discrete distribution where probability doubles with each trial'],
    explanation: 'Continuous Uniform U(a, b) has constant PDF f(x) = 1 / (b - a). Rolling a fair 6-sided die is a discrete uniform distribution.',
    tip: 'Uniform: Flat line (equal probability across entire range).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-90',
    categoryId: 'statistics',
    question: 'What is the "Weibull Distribution" commonly used for in engineering?',
    answer: 'Reliability analysis, material breaking strength, and equipment failure lifetime modeling',
    options: ['Reliability analysis, material breaking strength, and equipment failure lifetime modeling', 'Predicting the winner of multi-candidate political elections', 'Estimating consumer price inflation in macroeconomic models', 'Calculating Pearson correlation coefficients between ranked variables'],
    explanation: 'Its shape parameter allows it to model increasing failure rates (wear-out aging), constant failure rates, or decreasing failure rates (infant mortality).',
    tip: 'Weibull: Industrial equipment reliability and failure-rate modeling.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-91',
    categoryId: 'statistics',
    question: 'What is "Principal Component Analysis" (PCA)?',
    answer: 'An unsupervised dimensionality reduction technique that transforms correlated variables into linearly uncorrelated orthogonal components',
    options: ['An unsupervised dimensionality reduction technique that transforms correlated variables into linearly uncorrelated orthogonal components', 'A supervised classification model predicting binary medical diagnoses', 'A hypothesis test comparing three or more population medians', 'A method for calculating weighted average interest rates on bonds'],
    explanation: 'Projects high-dimensional data onto axes of maximum variance (eigenvectors of the covariance matrix), preserving maximum information in fewer variables.',
    tip: 'PCA: Unsupervised dimensionality reduction maximizing variance.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-92',
    categoryId: 'statistics',
    question: 'What does an Eigenvalue represent in Principal Component Analysis (PCA)?',
    answer: 'The amount of variance explained by the corresponding principal component eigenvector',
    options: ['The amount of variance explained by the corresponding principal component eigenvector', 'The probability that a data point is an erroneous outlier', 'The number of degrees of freedom remaining after regression', 'The correlation coefficient between the first and last variable'],
    explanation: 'Components with eigenvalues > 1.0 (Kaiser criterion) explain more variance than a single standardized original variable.',
    tip: 'In PCA, Eigenvalue = Variance explained by that component axis.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-93',
    categoryId: 'statistics',
    question: 'What is a "Markov Chain"?',
    answer: 'A stochastic process where the probability of transitioning to the next state depends only on the current state (memoryless property)',
    options: ['A stochastic process where the probability of transitioning to the next state depends only on the current state (memoryless property)', 'A linear sequence of regression tests applied to medical trials', 'A chain of commercial banks sharing common reserve vaults', 'A hierarchical tree of nested corporate subsidiary accounts'],
    explanation: 'Formally: P(X_{t+1} = j | X_t = i, X_{t-1}, ..., X_0) = P(X_{t+1} = j | X_t = i). Foundation for PageRank, speech recognition, and MCMC algorithms.',
    tip: 'Markov Property: The future depends ONLY on the present, not past history.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-94',
    categoryId: 'statistics',
    question: 'What is Markov Chain Monte Carlo (MCMC)?',
    answer: 'A class of algorithms for sampling from complex probability distributions by constructing a Markov chain with the target stationary distribution',
    options: ['A class of algorithms for sampling from complex probability distributions by constructing a Markov chain with the target stationary distribution', 'A casino gambling strategy for roulette wheels', 'A deterministic formula for solving quadratic equations', 'A method for verifying that census surveys have zero missing values'],
    explanation: 'Algorithms like Metropolis-Hastings and Gibbs sampling allow Bayesian statisticians to sample high-dimensional posterior distributions intractable by integration.',
    tip: 'MCMC: Generates samples from complex posterior distributions in Bayesian statistics.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-95',
    categoryId: 'statistics',
    question: 'What is the "Monte Carlo Simulation" method?',
    answer: 'Using repeated random sampling and computational iterations to estimate the numerical probability of complex deterministic or stochastic outcomes',
    options: ['Using repeated random sampling and computational iterations to estimate the numerical probability of complex deterministic or stochastic outcomes', 'Testing whether two sample means are identical using Student\'s t-distribution', 'A formal legal audit of casino lottery ticket ticket sales', 'A closed-form analytical integration of normal bell curves'],
    explanation: 'Simulates thousands or millions of scenarios with random inputs to assess risk, portfolio outcomes, or physics particle interactions.',
    tip: 'Monte Carlo: Simulate thousands of random trials to estimate probabilities.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-96',
    categoryId: 'statistics',
    question: 'What is the "Poisson Rate Parameter" λ (Lambda)?',
    answer: 'The expected average number of event occurrences per designated unit interval of time or space',
    options: ['The expected average number of event occurrences per designated unit interval of time or space', 'The proportion of explained variance in multiple regression', 'The probability of committing a Type II false negative error', 'The critical cutoff value in a two-tailed z-test'],
    explanation: 'If a bank drive-thru receives 12 cars per hour on average, λ = 12 (or λ = 2 cars per 10-minute window).',
    tip: 'λ (Lambda) = Average event rate per unit interval.',
    difficulty: 'beginner'
  },
  {
    id: 'stat-97',
    categoryId: 'statistics',
    question: 'What is the "Standard Error of the Estimate" (s_e) in regression?',
    answer: 'A measure of the typical distance between the observed data points and the regression line',
    options: ['A measure of the typical distance between the observed data points and the regression line', 'The difference between the sample mean and the sample median', 'The slope of the line divided by sample size n', 'The correlation coefficient squared and rounded to two decimal places'],
    explanation: 'Calculated as s_e = √(SSE / (n - 2)). It measures the standard deviation of the residuals in the same units as the dependent variable Y.',
    tip: 'Standard Error of Estimate = Standard deviation of regression residuals.',
    difficulty: 'intermediate'
  },
  {
    id: 'stat-98',
    categoryId: 'statistics',
    question: 'What is "Cook\'s Distance" used for in regression analysis?',
    answer: 'To identify highly influential data points that exert disproportionate leverage on the fitted regression line',
    options: ['To identify highly influential data points that exert disproportionate leverage on the fitted regression line', 'To test for autocorrelation in time-series residuals', 'To calculate the non-linear curvature of polynomial terms', 'To determine whether error terms are homoscedastic'],
    explanation: 'A point with Cook\'s Distance D > 0.5 or 1.0 substantially alters regression coefficients if removed, warranting close investigation.',
    tip: 'Cook\'s Distance identifies influential outliers that distort regression lines.',
    difficulty: 'advanced'
  },
  {
    id: 'stat-99',
    categoryId: 'statistics',
    question: 'What is the difference between a One-Tailed and Two-Tailed hypothesis test?',
    answer: 'A one-tailed test evaluates for an effect in a single specific direction; a two-tailed test evaluates for an effect in either direction',
    options: ['A one-tailed test evaluates for an effect in a single specific direction; a two-tailed test evaluates for an effect in either direction', 'A one-tailed test has half the sample size of a two-tailed test', 'A two-tailed test can only be performed on categorical data', 'One-tailed tests never produce Type I errors'],
    explanation: 'H1: μ > 50 (one-tailed right). H1: μ ≠ 50 (two-tailed). Two-tailed tests split significance α into both tails (e.g. 0.025 each for α = 0.05).',
    tip: 'Two-tailed: checks for differences in BOTH directions (≠). One-tailed: directional (> or <).',
    difficulty: 'beginner'
  },
  {
    id: 'stat-100',
    categoryId: 'statistics',
    question: 'What does the "Berkson\'s Fallacy" (Berkson\'s Paradox) describe?',
    answer: 'A spurious negative correlation between two independent traits caused by conditioned selection bias in hospital or specialty populations',
    options: ['A spurious negative correlation between two independent traits caused by conditioned selection bias in hospital or specialty populations', 'The mathematical equality of mean and median in all continuous distributions', 'The finding that larger sample sizes always increase standard errors', 'The illusion that random noise follows a deterministic polynomial wave'],
    explanation: 'If hospital admission requires either severe illness A or severe illness B, hospitalized patients will show an artificial negative correlation between A and B.',
    tip: 'Berkson\'s Paradox: Conditioning on a common consequence creates negative bias.',
    difficulty: 'advanced'
  }
];
