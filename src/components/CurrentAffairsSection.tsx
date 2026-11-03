import React, { useState, useMemo, useEffect } from 'react';
import {
  CACategoryId,
  CurrentAffairsMCQ,
  CA_CATEGORIES,
  CA_TOPICS_BY_CATEGORY,
} from '../types/currentAffairs';
import { SAMPLE_CURRENT_AFFAIRS_MCQS } from '../data/currentAffairsData';
import {
  Globe,
  MapPin,
  Flag,
  ChevronDown,
  Filter,
  Search,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Bookmark,
  Calendar,
  Sparkles,
  BookOpen,
  Eye,
  EyeOff,
  Layers,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';

export const CurrentAffairsSection: React.FC = () => {
  // 1. Tier 1 State (Main Category)
  const [selectedCategory, setSelectedCategory] = useState<CACategoryId>('jammu_kashmir');

  // 2. Tier 2 State (Subcategory / Topic) - Defaults to 'all'
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  // Search keyword state
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Exam Tag filter ('all' or specific tag like 'JKSSB', 'UPSC', 'SSC')
  const [selectedExamTag, setSelectedExamTag] = useState<string>('all');

  // Loading state simulation when switching tier 1 or tier 2
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // User interactive answers state: Record<mcqId, selectedOptionIndex>
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  // Revealed answers state: Record<mcqId, boolean>
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Expanded explanations state: Record<mcqId, boolean>
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  // Bookmarked questions
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  // Show only bookmarked
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState<boolean>(false);

  // Available topics for currently selected Tier 1 category
  const availableTopics = useMemo(() => {
    return CA_TOPICS_BY_CATEGORY[selectedCategory] || [];
  }, [selectedCategory]);

  // Handle Tier 1 Dropdown change: MUST reset Tier 2 dropdown to 'all'
  const handleCategoryChange = (newCategory: CACategoryId) => {
    if (newCategory === selectedCategory) return;
    setIsLoading(true);
    setSelectedCategory(newCategory);
    setSelectedTopic('all'); // Crucial reset requirement
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  // Handle Tier 2 Dropdown change
  const handleTopicChange = (newTopic: string) => {
    setIsLoading(true);
    setSelectedTopic(newTopic);
    setTimeout(() => {
      setIsLoading(false);
    }, 180);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setIsLoading(true);
    setSelectedCategory('jammu_kashmir');
    setSelectedTopic('all');
    setSearchQuery('');
    setSelectedExamTag('all');
    setShowOnlyBookmarked(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  // Filtered MCQs
  const filteredMCQs = useMemo(() => {
    return SAMPLE_CURRENT_AFFAIRS_MCQS.filter((mcq) => {
      // 1. Category filter
      if (mcq.category !== selectedCategory) return false;

      // 2. Topic filter
      if (selectedTopic !== 'all' && mcq.topic !== selectedTopic) return false;

      // 3. Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuestion = mcq.question.toLowerCase().includes(query);
        const matchesExplanation = mcq.explanation.toLowerCase().includes(query);
        const matchesTopic = mcq.topic.toLowerCase().includes(query);
        const matchesOptions = mcq.options.some((opt) => opt.toLowerCase().includes(query));
        if (!matchesQuestion && !matchesExplanation && !matchesTopic && !matchesOptions) {
          return false;
        }
      }

      // 4. Exam tag filter
      if (selectedExamTag !== 'all' && !mcq.examTags.includes(selectedExamTag)) {
        return false;
      }

      // 5. Bookmarked filter
      if (showOnlyBookmarked && !bookmarkedIds.has(mcq.id)) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, selectedTopic, searchQuery, selectedExamTag, showOnlyBookmarked, bookmarkedIds]);

  // Handle Option Click
  const handleSelectOption = (mcqId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [mcqId]: optionIndex,
    }));
    // Auto-reveal explanation upon choosing
    setRevealedAnswers((prev) => ({
      ...prev,
      [mcqId]: true,
    }));
    setExpandedExplanations((prev) => ({
      ...prev,
      [mcqId]: true,
    }));
  };

  // Toggle Reveal Answer
  const toggleRevealAnswer = (mcqId: string) => {
    setRevealedAnswers((prev) => {
      const next = !prev[mcqId];
      if (next) {
        setExpandedExplanations((ePrev) => ({ ...ePrev, [mcqId]: true }));
      }
      return { ...prev, [mcqId]: next };
    });
  };

  // Toggle Explanation Accordion
  const toggleExplanation = (mcqId: string) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [mcqId]: !prev[mcqId],
    }));
  };

  // Toggle Bookmark
  const toggleBookmark = (mcqId: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(mcqId)) {
        next.delete(mcqId);
      } else {
        next.add(mcqId);
      }
      return next;
    });
  };

  const currentCategoryMeta = useMemo(() => {
    return CA_CATEGORIES.find((c) => c.id === selectedCategory) || CA_CATEGORIES[0];
  }, [selectedCategory]);

  // Overall category icon
  const renderCategoryIcon = (id: CACategoryId, className: string = 'w-4 h-4') => {
    switch (id) {
      case 'jammu_kashmir':
        return <MapPin className={className} />;
      case 'national':
        return <Flag className={className} />;
      case 'international':
        return <Globe className={className} />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Hero Banner with Chinar Branding */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 p-5 sm:p-7 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-amber-500/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Chinar Current Affairs Portal 2026</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              2-Tier Current Affairs <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-pink-400">MCQ Bank</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Targeted monthly MCQs covering J&amp;K UT governance, National flagship policies, ISRO/DRDO science &amp; technology, and International treaties for JKSSB, JKPSC, and UPSC exams.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-2 sm:gap-3 bg-slate-950/80 p-3 rounded-2xl border border-slate-800 shrink-0 self-start md:self-auto">
            <div className="text-center px-3 border-r border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Available</div>
              <div className="text-base sm:text-lg font-black text-indigo-400">{filteredMCQs.length} MCQs</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xs text-slate-400 font-medium">Attempted</div>
              <div className="text-base sm:text-lg font-black text-emerald-400">
                {Object.keys(userAnswers).filter((id) => filteredMCQs.some((m) => m.id === id)).length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2-Tier Dynamic Filtering Control Card */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 space-y-4 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
            <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
            <span>Multi-Tier Category &amp; Topic Filter</span>
          </div>

          {(selectedTopic !== 'all' || searchQuery || selectedExamTag !== 'all' || showOnlyBookmarked) && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition cursor-pointer font-medium"
              title="Reset all filters to default"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* 2-Tier Dropdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dropdown 1: Main Category (Tier 1) */}
          <div className="space-y-1.5">
            <label className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px]">1</span>
                Primary Category (Tier 1)
              </span>
              <span className="text-[10px] text-slate-400">3 Major Spheres</span>
            </label>

            <div className="relative">
              <select
                aria-label="Select Primary Current Affairs Category"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value as CACategoryId)}
                className="w-full appearance-none rounded-xl bg-slate-950 border border-slate-700/80 hover:border-indigo-500/60 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-3.5 py-3 pr-10 text-xs sm:text-sm font-semibold transition cursor-pointer shadow-inner"
              >
                {CA_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id} className="bg-slate-950 text-white py-2">
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              {renderCategoryIcon(selectedCategory, 'w-3 h-3 text-indigo-400 shrink-0')}
              <span className="truncate">{currentCategoryMeta.description}</span>
            </p>
          </div>

          {/* Dropdown 2: Dynamic Subcategory / Topic Menu (Tier 2) */}
          <div className="space-y-1.5">
            <label className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-sky-600 text-white text-[10px]">2</span>
                Subcategory / Specific Topic (Tier 2)
              </span>
              <span className="text-[10px] text-sky-400 font-mono font-medium">Dynamic Menu</span>
            </label>

            <div className="relative">
              <select
                aria-label="Select Current Affairs Topic or Subcategory"
                value={selectedTopic}
                onChange={(e) => handleTopicChange(e.target.value)}
                className="w-full appearance-none rounded-xl bg-slate-950 border border-slate-700/80 hover:border-sky-500/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-white px-3.5 py-3 pr-10 text-xs sm:text-sm font-semibold transition cursor-pointer shadow-inner"
              >
                <option value="all" className="bg-slate-950 text-indigo-300 font-bold py-2">
                  All Topics / Subcategories ({availableTopics.length} available)
                </option>
                {availableTopics.map((topic) => (
                  <option key={topic} value={topic} className="bg-slate-950 text-white py-2">
                    {topic}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              {selectedTopic === 'all'
                ? `Browsing all ${availableTopics.length} subcategories in ${currentCategoryMeta.shortName}`
                : `Focused on: ${selectedTopic}`}
            </p>
          </div>
        </div>

        {/* Secondary Filter Row: Search & Exam Tag pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          {/* Keyword Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scheme, bridge, summit, or key terms..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Exam Tag Quick Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 shrink-0">
            {['all', 'JKSSB', 'UPSC', 'SSC CGL', 'JKPSC'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedExamTag(tag)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                  selectedExamTag === tag
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tag === 'all' ? 'All Exams' : tag}
              </button>
            ))}

            {/* Bookmarks Toggle */}
            <button
              onClick={() => setShowOnlyBookmarked((prev) => !prev)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 whitespace-nowrap transition cursor-pointer border ${
                showOnlyBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm'
                  : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-amber-300 hover:bg-slate-800'
              }`}
              title="Show only bookmarked questions"
            >
              <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>Saved ({bookmarkedIds.size})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Results Status Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">
            {filteredMCQs.length} Question{filteredMCQs.length === 1 ? '' : 's'} Found
          </span>
          <span>•</span>
          <span className="capitalize">{currentCategoryMeta.name}</span>
          {selectedTopic !== 'all' && (
            <>
              <span>/</span>
              <span className="text-sky-300 font-medium truncate max-w-xs">{selectedTopic}</span>
            </>
          )}
        </div>

        {filteredMCQs.length > 0 && (
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-slate-500">Instant Recall Mode</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* Loading Skeleton Transition */}
      {isLoading ? (
        <div className="space-y-4 min-h-[420px] animate-pulse">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-3">
              <div className="h-4 bg-slate-800 rounded w-1/4" />
              <div className="h-6 bg-slate-800 rounded w-3/4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-slate-800/80 rounded-xl" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : filteredMCQs.length === 0 ? (
        /* Empty State */
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">No MCQs Match Your Current Filters</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              We couldn&apos;t find any questions under &quot;{selectedTopic}&quot; matching your search criteria.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition cursor-pointer"
          >
            Reset Filters &amp; View All
          </button>
        </div>
      ) : (
        /* MCQ List Container */
        <div className="space-y-5">
          {filteredMCQs.map((mcq, idx) => {
            const hasAnswered = userAnswers[mcq.id] !== undefined;
            const userAnswerIndex = userAnswers[mcq.id];
            const isRevealed = revealedAnswers[mcq.id];
            const isExplanationExpanded = expandedExplanations[mcq.id];
            const isCorrect = userAnswerIndex === mcq.correctOptionIndex;
            const isBookmarked = bookmarkedIds.has(mcq.id);

            return (
              <div
                key={mcq.id}
                className={`rounded-2xl border transition-all duration-200 bg-slate-900/95 overflow-hidden shadow-lg ${
                  hasAnswered
                    ? isCorrect
                      ? 'border-emerald-500/40 shadow-emerald-500/5'
                      : 'border-rose-500/40 shadow-rose-500/5'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Question Header: Badges & Bookmark */}
                <div className="p-4 sm:p-5 border-b border-slate-800/70 flex flex-wrap items-center justify-between gap-2 bg-slate-950/40">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
                      Q{idx + 1}
                    </span>

                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/70">
                      {mcq.topic}
                    </span>

                    {mcq.examTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3" />
                      {new Date(mcq.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>

                    <button
                      onClick={() => toggleBookmark(mcq.id)}
                      className={`p-1.5 rounded-lg border transition cursor-pointer ${
                        isBookmarked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800'
                      }`}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Question Body */}
                <div className="p-4 sm:p-5 space-y-4">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    {mcq.question}
                  </h3>

                  {/* 4 Interactive Options (A, B, C, D) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {mcq.options.map((option, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx); // 'A', 'B', 'C', 'D'
                      const isSelected = userAnswerIndex === optIdx;
                      const isThisCorrect = optIdx === mcq.correctOptionIndex;

                      // Style resolution
                      let optionClasses =
                        'relative flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition cursor-pointer select-none ';

                      if (isRevealed || hasAnswered) {
                        if (isThisCorrect) {
                          optionClasses +=
                            'bg-emerald-950/60 border-emerald-500 text-emerald-100 shadow-sm shadow-emerald-500/20';
                        } else if (isSelected) {
                          optionClasses +=
                            'bg-rose-950/60 border-rose-500 text-rose-100 shadow-sm shadow-rose-500/20';
                        } else {
                          optionClasses += 'bg-slate-950/50 border-slate-800/80 text-slate-400 opacity-75';
                        }
                      } else {
                        optionClasses +=
                          'bg-slate-950/80 hover:bg-slate-800 border-slate-800 hover:border-indigo-500/50 text-slate-200 active:scale-[0.99]';
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(mcq.id, optIdx)}
                          className={optionClasses}
                        >
                          <span
                            className={`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold font-mono shrink-0 transition ${
                              isRevealed || hasAnswered
                                ? isThisCorrect
                                ? 'bg-emerald-500 text-slate-950 font-black'
                                : isSelected
                                ? 'bg-rose-500 text-white font-black'
                                : 'bg-slate-800 text-slate-400'
                                : 'bg-slate-800 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white'
                            }`}
                          >
                            {letter}
                          </span>

                          <span className="flex-1 leading-snug">{option}</span>

                          {/* Status Icon */}
                          {(isRevealed || hasAnswered) && (
                            <span className="shrink-0">
                              {isThisCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : isSelected ? (
                                <XCircle className="w-4 h-4 text-rose-400" />
                              ) : null}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Action Bar (Reveal Answer & Toggle Explanation) */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                    <button
                      type="button"
                      onClick={() => toggleRevealAnswer(mcq.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer font-semibold"
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Hide Answer</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Reveal Answer</span>
                        </>
                      )}
                    </button>

                    {isRevealed && (
                      <button
                        type="button"
                        onClick={() => toggleExplanation(mcq.id)}
                        className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold transition cursor-pointer"
                      >
                        <span>{isExplanationExpanded ? 'Collapse Analysis' : 'Read Detailed Notes'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExplanationExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Collapsible Detailed Explanation Accordion */}
                  {isRevealed && isExplanationExpanded && (
                    <div className="mt-3 p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 space-y-2 animate-in fade-in duration-200">
                      <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Exam Explanation &amp; Key Takeaway</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {mcq.explanation}
                      </p>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 font-mono">
                        <span>Correct Choice: Option {String.fromCharCode(65 + mcq.correctOptionIndex)}</span>
                        <span>Official Syllabus Aligned</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
