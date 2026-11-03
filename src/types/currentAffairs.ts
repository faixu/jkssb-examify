export type CACategoryId = 'jammu_kashmir' | 'national' | 'international';

export interface CurrentAffairsCategory {
  id: CACategoryId;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  badgeColor: string;
}

export interface CurrentAffairsMCQ {
  id: string;
  category: CACategoryId;
  topic: string;
  date: string; // ISO format (YYYY-MM-DD)
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  examTags: string[];
}

export const CA_CATEGORIES: CurrentAffairsCategory[] = [
  {
    id: 'jammu_kashmir',
    name: 'Jammu & Kashmir Current Affairs',
    shortName: 'J&K Current Affairs',
    description: 'UT Schemes, LG Orders, Infrastructure, GI Tags & Cultural Events',
    iconName: 'MapPin',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
  {
    id: 'national',
    name: 'National Current Affairs (India)',
    shortName: 'National (India)',
    description: 'Central Schemes, Economy, ISRO/DRDO, Summits & Sports',
    iconName: 'Flag',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
  {
    id: 'international',
    name: 'International Current Affairs',
    shortName: 'International',
    description: 'Global Summits (G20/BRICS/UN), Treaties, Indices & World Events',
    iconName: 'Globe',
    badgeColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  },
];

export const CA_TOPICS_BY_CATEGORY: Record<CACategoryId, string[]> = {
  jammu_kashmir: [
    'J&K Government Schemes & Policies',
    'Infrastructure, Rail & Tunnel Projects',
    'J&K Economy, Agriculture & Horticulture',
    'Appointments, LG Announcements & Administrative Orders',
    'Culture, Tourism, GI Tags & Festivals',
    'Environment, Lakes, Rivers & Wildlife',
    'J&K Sports & Regional Awards',
  ],
  national: [
    'Central Government Schemes & Portal Launches',
    'Indian Economy, Banking & RBI Guidelines',
    'Science, Defence, Space & Technology (ISRO/DRDO)',
    'National Summits, Reports & Indexes',
    'National Sports & Major Championships',
    'Books, Authors & Civilian Awards',
    'National Environment & Climate Initiatives',
  ],
  international: [
    'Bilateral Summits & Global Groupings (G20, SCO, BRICS, UN)',
    'International Treaties, MOUs & Trade Pacts',
    'Global Indices & Reports',
    'International Defence Exercises & Conflicts',
    'Global Science, Tech & Energy Transitions',
    'International Awards & World Figures',
  ],
};
