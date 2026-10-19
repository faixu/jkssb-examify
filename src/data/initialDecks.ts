import { CategoryMeta, Flashcard } from '../types';
import { ACCOUNTING_QUESTIONS } from './questions/accounting';
import { ECONOMICS_QUESTIONS } from './questions/economics';
import { STATISTICS_QUESTIONS } from './questions/statistics';
import { GRAMMAR_QUESTIONS } from './questions/grammar';
import { SCIENCE_QUESTIONS } from './questions/science';
import { CS_QUESTIONS } from './questions/cs';
import { HISTORY_QUESTIONS } from './questions/history';
import { GENERAL_QUESTIONS } from './questions/general';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Financial statements, debits & credits, GAAP, balance sheets, and cost accounting.',
    color: 'from-emerald-500 to-teal-700',
    borderColor: 'border-emerald-500',
    bgLight: 'bg-emerald-500/10 text-emerald-400',
    iconName: 'Calculator',
    badge: 'Finance',
  },
  {
    id: 'economics',
    name: 'Economics',
    description: 'Micro & macro principles, market elasticity, fiscal policy, GDP, and inflation.',
    color: 'from-blue-500 to-indigo-700',
    borderColor: 'border-blue-500',
    bgLight: 'bg-blue-500/10 text-blue-400',
    iconName: 'TrendingUp',
    badge: 'Markets',
  },
  {
    id: 'statistics',
    name: 'Statistics',
    description: 'Probability distributions, p-values, hypothesis testing, variance, and regression.',
    color: 'from-purple-500 to-violet-700',
    borderColor: 'border-purple-500',
    bgLight: 'bg-purple-500/10 text-purple-400',
    iconName: 'BarChart2',
    badge: 'Analytics',
  },
  {
    id: 'grammar',
    name: 'English Grammar',
    description: 'Subject-verb agreement, subjunctive mood, dangling modifiers, and syntax rules.',
    color: 'from-amber-500 to-orange-700',
    borderColor: 'border-amber-500',
    bgLight: 'bg-amber-500/10 text-amber-400',
    iconName: 'BookOpen',
    badge: 'Language',
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Core concepts in physics, chemistry, biology, thermodynamics, and cellular genetics.',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500',
    bgLight: 'bg-cyan-500/10 text-cyan-400',
    iconName: 'Atom',
    badge: 'STEM',
  },
  {
    id: 'cs',
    name: 'Computer Science',
    description: 'Data structures, Big O algorithms, memory, OS processes, and networking protocols.',
    color: 'from-rose-500 to-pink-700',
    borderColor: 'border-rose-500',
    bgLight: 'bg-rose-500/10 text-rose-400',
    iconName: 'Cpu',
    badge: 'Tech',
  },
  {
    id: 'history',
    name: 'Modern History',
    description: 'Major revolutions, world treaties, the Cold War, decolonization, and global milestones.',
    color: 'from-yellow-600 to-amber-800',
    borderColor: 'border-amber-600',
    bgLight: 'bg-amber-600/10 text-amber-300',
    iconName: 'Landmark',
    badge: 'History',
  },
  {
    id: 'general',
    name: 'General Knowledge',
    description: 'Global geography, world achievements, astronomy landmarks, and cultural trivia.',
    color: 'from-fuchsia-500 to-purple-800',
    borderColor: 'border-fuchsia-500',
    bgLight: 'bg-fuchsia-500/10 text-fuchsia-400',
    iconName: 'Globe',
    badge: 'Trivia',
  },
];

export const INITIAL_FLASHCARDS: Flashcard[] = [
  ...ACCOUNTING_QUESTIONS,
  ...ECONOMICS_QUESTIONS,
  ...STATISTICS_QUESTIONS,
  ...GRAMMAR_QUESTIONS,
  ...SCIENCE_QUESTIONS,
  ...CS_QUESTIONS,
  ...HISTORY_QUESTIONS,
  ...GENERAL_QUESTIONS,
];
