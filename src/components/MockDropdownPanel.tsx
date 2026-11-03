import React, { useState } from 'react';
import { Award, Sparkles, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { FULL_MOCKS_META } from '../data/mockTests';
import { CATEGORIES } from '../data/initialDecks';

interface MockDropdownPanelProps {
  variant: 'desktop' | 'mobile';
  onStartFullMock: (testNum: number) => void;
  onStartSectionMock: (categoryId: string) => void;
  onGoToMockHub: () => void;
}

export const MockDropdownPanel: React.FC<MockDropdownPanelProps> = ({
  variant,
  onStartFullMock,
  onStartSectionMock,
  onGoToMockHub,
}) => {
  const [dropdownTab, setDropdownTab] = useState<'full' | 'sections'>('full');

  if (variant === 'mobile') {
    return (
      <div className="lg:hidden pb-3 pt-1 border-t border-slate-800 animate-in fade-in slide-in-from-top-1">
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-700/80 space-y-2.5 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> {FULL_MOCKS_META.length} Full Syllabus Mock Tests
            </span>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              Official Blueprints
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            {FULL_MOCKS_META.length} Full Mock Tests featuring authentic papers and comprehensive syllabus simulations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
            {FULL_MOCKS_META.map((mock) => (
              <button
                key={mock.testNumber}
                onClick={() => onStartFullMock(mock.testNumber)}
                className="p-2.5 text-left rounded-xl bg-slate-800/80 active:bg-indigo-900/40 border border-slate-700 active:border-indigo-500 transition text-xs cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="font-bold text-white text-[11px] line-clamp-1">{mock.title}</div>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded border shrink-0 ${mock.badgeColor}`}>
                    {mock.shortTitle}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{mock.subtitle}</div>
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={onGoToMockHub}
              className="w-full py-2 rounded-xl bg-indigo-600 active:bg-indigo-700 text-white text-xs font-bold text-center shadow-md shadow-indigo-600/30 transition cursor-pointer"
            >
              View All {FULL_MOCKS_META.length} Full Mocks &amp; 10 Sectional Drills
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-0 mt-2 w-[540px] rounded-2xl bg-slate-900/98 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
      {/* Top Bar with Title and Tabs */}
      <div className="px-4 py-3 bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              FAA 120-Q Mock Test Series
            </h4>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              120 Mins · 120 Marks
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Authentic CBT format with negative marking (-0.25). 100% unique questions.
          </p>
        </div>
      </div>

      {/* Tabs: Full Syllabus vs Section-Wise */}
      <div className="flex border-b border-slate-800 bg-slate-950/60 px-3 pt-2 gap-2">
        <button
          onClick={() => setDropdownTab('full')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-bold transition border-t border-x cursor-pointer ${
            dropdownTab === 'full'
              ? 'bg-slate-900 text-indigo-300 border-slate-700 -mb-px'
              : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Full Syllabus Mocks ({FULL_MOCKS_META.length} Tests)</span>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded font-mono">
            {FULL_MOCKS_META.length}
          </span>
        </button>
        <button
          onClick={() => setDropdownTab('sections')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-bold transition border-t border-x cursor-pointer ${
            dropdownTab === 'sections'
              ? 'bg-slate-900 text-indigo-300 border-slate-700 -mb-px'
              : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span>Sectional 120-Q Mocks</span>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-1 rounded font-mono">10</span>
        </button>
      </div>

      {/* Tab 1: Full Syllabus Mocks */}
      {dropdownTab === 'full' && (
        <div className="p-3 max-h-[360px] overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700">
          <div className="text-[11px] font-semibold text-slate-400 px-1 pb-1 flex items-center justify-between">
            <span>Select a Mock Test ({FULL_MOCKS_META.length} Authentic &amp; Syllabus Papers):</span>
            <span className="text-emerald-400 text-[10px]">Official Blueprints</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {FULL_MOCKS_META.map((mock) => (
              <div
                key={mock.testNumber}
                onClick={() => onStartFullMock(mock.testNumber)}
                className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-indigo-900/30 border border-slate-700/60 hover:border-indigo-500/50 transition cursor-pointer group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                    {mock.title}
                  </span>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded border shrink-0 ${mock.badgeColor}`}>
                    {mock.shortTitle}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-300 line-clamp-1">{mock.subtitle}</p>
                <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-700/50 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-amber-400" /> {mock.timeMinutes || 120}m · {mock.questionCount || 120}Q
                  </span>
                  <span className="text-indigo-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Start <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Sectional 120-Q Mocks */}
      {dropdownTab === 'sections' && (
        <div className="p-3 max-h-[360px] overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700">
          <div className="text-[11px] font-semibold text-slate-400 px-1 pb-1">
            Select a Subject for an Intensive 120-Question / 120-Minute Deep Drill:
          </div>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onStartSectionMock(cat.id)}
                className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-indigo-900/30 border border-slate-700/60 hover:border-indigo-500/50 transition cursor-pointer group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${cat.bgLight}`}>
                    {cat.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">120 Qs</span>
                </div>
                <h5 className="text-xs font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                  {cat.name}
                </h5>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-700/50 text-[10px]">
                  <span className="text-slate-400">120 Minutes</span>
                  <span className="text-indigo-400 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Drill <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dropdown Footer: Link to Full Mock Hub */}
      <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px]">
          Track your performance history &amp; detailed scorecards
        </span>
        <button
          onClick={onGoToMockHub}
          className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1"
        >
          <span>Open Mock Test Hub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
