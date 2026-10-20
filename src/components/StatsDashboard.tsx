import React, { useMemo } from 'react';
import {
  Flame,
  Award,
  Zap,
  TrendingUp,
  Download,
  Upload,
  Calendar,
  AlertCircle,
  Clock,
  Target,
  Cloud,
} from 'lucide-react';
import { CardProgress, CategoryId, UserStats } from '../types';
import { CATEGORIES } from '../data/initialDecks';
import { exportStudyData, importStudyData } from '../utils/storage';

interface StatsDashboardProps {
  userStats: UserStats;
  cardProgress: Record<string, CardProgress>;
  totalCardsCount: number;
  onRefreshData: () => void;
  onNavigateToDrive?: () => void;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  userStats,
  cardProgress,
  totalCardsCount,
  onRefreshData,
  onNavigateToDrive,
}) => {
  // Mastery level calculation
  const masteredCount = useMemo(() => {
    return Object.values(cardProgress).filter((p) => p.mastered).length;
  }, [cardProgress]);

  const overallAccuracy = useMemo(() => {
    if (!userStats.totalCardsReviewed) return 0;
    return Math.round((userStats.totalCorrect / userStats.totalCardsReviewed) * 100);
  }, [userStats]);

  // Rank title
  const rank = useMemo(() => {
    if (userStats.xp >= 2000) return { title: 'Grandmaster Scholar', level: 5, color: 'text-amber-400', badge: 'bg-amber-500/10 border-amber-500/30' };
    if (userStats.xp >= 1000) return { title: 'Master of Knowledge', level: 4, color: 'text-purple-400', badge: 'bg-purple-500/10 border-purple-500/30' };
    if (userStats.xp >= 500) return { title: 'Senior Scholar', level: 3, color: 'text-indigo-400', badge: 'bg-indigo-500/10 border-indigo-500/30' };
    if (userStats.xp >= 150) return { title: 'Apprentice Learner', level: 2, color: 'text-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/30' };
    return { title: 'Novice Explorer', level: 1, color: 'text-slate-300', badge: 'bg-slate-800 border-slate-700' };
  }, [userStats.xp]);

  // Last 28 days for streak calendar heatmap
  const calendarDays = useMemo(() => {
    const days: { dateStr: string; label: string; active: boolean; isToday: boolean }[] = [];
    const today = new Date();
    const activeSet = new Set(userStats.activeDays || []);

    for (let i = 27; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;

      days.push({
        dateStr,
        label: `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
        active: activeSet.has(dateStr),
        isToday: i === 0,
      });
    }
    return days;
  }, [userStats.activeDays]);

  // Strongest and Weakest category
  const { strongestCat, weakestCat } = useMemo(() => {
    const list = CATEGORIES.map((cat) => {
      const s = userStats.categoryStats[cat.id] || { reviewed: 0, correct: 0 };
      const acc = s.reviewed > 0 ? (s.correct / s.reviewed) * 100 : 0;
      return { cat, reviewed: s.reviewed, acc };
    }).filter((item) => item.reviewed > 0);

    if (list.length === 0) return { strongestCat: null, weakestCat: null };
    list.sort((a, b) => b.acc - a.acc);
    return {
      strongestCat: list[0],
      weakestCat: list.length > 1 ? list[list.length - 1] : null,
    };
  }, [userStats.categoryStats]);

  const handleExport = () => {
    const jsonStr = exportStudyData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flashmind-study-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importStudyData(content);
        if (success) {
          onRefreshData();
          alert('Study data successfully restored!');
        } else {
          alert('Failed to parse backup file. Please verify format.');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Top Banner: Rank & Motivational Streak */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${rank.badge} ${rank.color}`}>
                Rank Level {rank.level}: {rank.title}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Learning Mastery & Daily Streaks
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Consistent daily recall drives lifelong memory retention. Keep your daily streak active to unlock higher mastery.
            </p>
          </div>

          {/* Daily Streak Highlight Pill */}
          <div className="flex items-center gap-4 bg-slate-900/90 border border-amber-500/30 p-4 rounded-2xl shadow-lg shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shadow-md shadow-amber-500/30">
              <Flame className="w-7 h-7 text-slate-950 fill-slate-950 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 block">Daily Streak</span>
              <span className="text-2xl font-black text-amber-400 leading-none">
                {userStats.streak} {userStats.streak === 1 ? 'Day' : 'Days'}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Record: {userStats.longestStreak} days
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Total XP</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Zap className="w-4 h-4 fill-indigo-400" />
            </div>
          </div>
          <span className="text-2xl font-black text-white">{userStats.xp}</span>
          <span className="text-[11px] text-indigo-400/80 block mt-1">+10 to +20 per review</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Overall Accuracy</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <span className="text-2xl font-black text-emerald-400">{overallAccuracy}%</span>
          <span className="text-[11px] text-slate-400 block mt-1">{userStats.totalCorrect} / {userStats.totalCardsReviewed} correct</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Cards Mastered</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <span className="text-2xl font-black text-purple-400">{masteredCount}</span>
          <span className="text-[11px] text-slate-400 block mt-1">{totalCardsCount} total in decks</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Active Study Days</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <span className="text-2xl font-black text-amber-400">{userStats.activeDays?.length || 0}</span>
          <span className="text-[11px] text-slate-400 block mt-1">Days with practice</span>
        </div>
      </div>

      {/* Daily Streak Activity Heatmap (Last 28 Days) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <span>Study Streak Heatmap (Last 4 Weeks)</span>
            </h3>
            <p className="text-xs text-slate-400">
              Each square represents a day. Light up green by answering at least 1 card daily.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
            <span>Missed</span>
            <span className="w-3 h-3 rounded bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            <span>Studied</span>
          </div>
        </div>

        {/* 28 Day Grid */}
        <div className="grid grid-cols-7 gap-2 sm:gap-3">
          {calendarDays.map((d, idx) => (
            <div
              key={idx}
              className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all ${
                d.active
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-sm shadow-emerald-500/10'
                  : 'bg-slate-800/40 border-slate-800 text-slate-500'
              } ${d.isToday ? 'ring-2 ring-indigo-500' : ''}`}
              title={`${d.label}: ${d.active ? 'Studied!' : 'No practice recorded'}`}
            >
              <span className="block text-[10px] font-semibold uppercase opacity-75">
                {d.label.split(' ')[0]}
              </span>
              <span className="block text-xs sm:text-sm font-extrabold text-white mt-0.5">
                {d.label.split(' ')[1]}
              </span>
              <div className="mt-1 flex justify-center">
                {d.active ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Accuracy & Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              <span>Category Accuracy & Mastery</span>
            </h3>
            <p className="text-xs text-slate-400">
              Track your performance across all 8 disciplines to identify focus areas.
            </p>
          </div>

          {strongestCat && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
              <Award className="w-3.5 h-3.5" />
              <span>Strongest: {strongestCat.cat.name} ({Math.round(strongestCat.acc)}%)</span>
            </div>
          )}
        </div>

        {/* Category Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => {
            const stats = userStats.categoryStats[cat.id] || { reviewed: 0, correct: 0 };
            const accuracy = stats.reviewed > 0 ? Math.round((stats.correct / stats.reviewed) * 100) : 0;

            return (
              <div
                key={cat.id}
                className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${cat.color}`} />
                    <span>{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-normal text-[11px]">
                      {stats.reviewed} reviewed
                    </span>
                    <span className={accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-slate-400'}>
                      {accuracy}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-500`}
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Offline Data Backup & Restore */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Offline Data Backup & Restore</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Save your streaks, custom cards, and mastery history locally to JSON, or migrate across devices.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          {onNavigateToDrive && (
            <button
              onClick={onNavigateToDrive}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition cursor-pointer"
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Google Drive Cloud Sync</span>
            </button>
          )}

          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Backup</span>
          </button>

          <label className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 transition cursor-pointer">
            <Upload className="w-3.5 h-3.5" />
            <span>Restore JSON</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
