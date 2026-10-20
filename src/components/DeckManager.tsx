import React, { useState, useMemo } from 'react';
import {
  Plus,
  Search,
  Filter,
  Trash2,
  Bookmark,
  Sparkles,
  BookOpen,
  Check,
  X,
  Cloud,
} from 'lucide-react';
import { CategoryId, Difficulty, Flashcard } from '../types';
import { CATEGORIES } from '../data/initialDecks';
import { saveCustomCards, loadCustomCards, toggleBookmark, loadBookmarks } from '../utils/storage';

interface DeckManagerProps {
  cards: Flashcard[];
  onRefreshCards: () => void;
  onNavigateToDrive?: () => void;
}

export const DeckManager: React.FC<DeckManagerProps> = ({
  cards,
  onRefreshCards,
  onNavigateToDrive,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');
  const [bookmarks, setBookmarks] = useState<string[]>(loadBookmarks());
  const [showCreateModal, setShowCreateModal] = useState(false);

  // New Card Form State
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newDistractor1, setNewDistractor1] = useState('');
  const [newDistractor2, setNewDistractor2] = useState('');
  const [newDistractor3, setNewDistractor3] = useState('');
  const [newExplanation, setNewExplanation] = useState('');
  const [newTip, setNewTip] = useState('');
  const [newCategory, setNewCategory] = useState<CategoryId>('accounting');
  const [newDifficulty, setNewDifficulty] = useState<Difficulty>('intermediate');

  const [visibleLimit, setVisibleLimit] = useState(30);

  const filteredCards = useMemo(() => {
    return cards.filter((c) => {
      if (selectedCategory !== 'all' && c.categoryId !== selectedCategory) return false;
      if (difficultyFilter !== 'all' && c.difficulty !== difficultyFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchQ = c.question.toLowerCase().includes(q);
        const matchA = c.answer.toLowerCase().includes(q);
        const matchE = c.explanation.toLowerCase().includes(q);
        if (!matchQ && !matchA && !matchE) return false;
      }
      return true;
    });
  }, [cards, selectedCategory, difficultyFilter, search]);

  // Reset pagination when filter or search changes
  React.useEffect(() => {
    setVisibleLimit(30);
  }, [search, selectedCategory, difficultyFilter]);

  const visibleCards = useMemo(() => {
    return filteredCards.slice(0, visibleLimit);
  }, [filteredCards, visibleLimit]);

  const handleCreateCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const options = [
      newAnswer.trim(),
      newDistractor1.trim() || 'Alternative choice A',
      newDistractor2.trim() || 'Alternative choice B',
      newDistractor3.trim() || 'Alternative choice C',
    ];

    const newCard: Flashcard = {
      id: `custom-${Date.now()}`,
      categoryId: newCategory,
      question: newQuestion.trim(),
      answer: newAnswer.trim(),
      options,
      explanation: newExplanation.trim() || 'User created custom card explanation.',
      tip: newTip.trim() || undefined,
      difficulty: newDifficulty,
      isCustom: true,
    };

    const existingCustom = loadCustomCards();
    const updated = [newCard, ...existingCustom];
    saveCustomCards(updated);
    onRefreshCards();

    // Reset form
    setNewQuestion('');
    setNewAnswer('');
    setNewDistractor1('');
    setNewDistractor2('');
    setNewDistractor3('');
    setNewExplanation('');
    setNewTip('');
    setShowCreateModal(false);
  };

  const handleDeleteCustomCard = (id: string) => {
    if (!confirm('Are you sure you want to delete this custom card?')) return;
    const existing = loadCustomCards();
    const filtered = existing.filter((c) => c.id !== id);
    saveCustomCards(filtered);
    onRefreshCards();
  };

  const handleToggleBookmark = (id: string) => {
    const next = toggleBookmark(id);
    setBookmarks(next);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Header & Add Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
            <span>Deck Explorer &amp; Card Creator</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Browse {cards.length} preloaded and custom flashcards across all syllabus sections.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
          {onNavigateToDrive && (
            <button
              onClick={onNavigateToDrive}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-500/10 active:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs shadow-sm transition cursor-pointer"
            >
              <Cloud className="w-4 h-4" />
              <span>Drive Sync</span>
            </button>
          )}

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create Card</span>
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search questions, answers, or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800/80 rounded-xl text-xs text-white placeholder-slate-500 border border-slate-700/80 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-800/80 text-slate-400 hover:text-white'
            }`}
          >
            All Categories ({cards.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = cards.filter((c) => c.categoryId === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition ${
                  isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Level filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Level:
          </span>
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-2.5 py-1 rounded-lg capitalize transition cursor-pointer ${
                difficultyFilter === diff
                  ? 'bg-slate-700 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-3">
        {filteredCards.length === 0 ? (
          <div className="text-center py-12 text-slate-500 bg-slate-900/40 rounded-2xl border border-slate-800">
            No cards found matching your query.
          </div>
        ) : (
          visibleCards.map((card) => {
            const isBookmarked = bookmarks.includes(card.id);
            const category = CATEGORIES.find((c) => c.id === card.categoryId);

            return (
              <div
                key={card.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1 pr-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${category?.bgLight || 'bg-slate-800 text-slate-300'}`}>
                      {category?.name || card.categoryId}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {card.difficulty}
                    </span>
                    {card.isCustom && (
                      <span className="text-[10px] font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                        Custom Card
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug">
                    {card.question}
                  </h3>

                  <p className="text-xs text-emerald-400 font-medium">
                    Answer: {card.answer}
                  </p>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {card.explanation}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => handleToggleBookmark(card.id)}
                    className={`p-2 rounded-xl transition cursor-pointer ${
                      isBookmarked
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                        : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                    title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                  </button>

                  {card.isCustom && (
                    <button
                      onClick={() => handleDeleteCustomCard(card.id)}
                      className="p-2 rounded-xl text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 transition cursor-pointer"
                      title="Delete custom card"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}

        {/* Load More Pagination Bar */}
        {visibleLimit < filteredCards.length && (
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <span>
              Showing <strong className="text-white">{visibleCards.length}</strong> of <strong className="text-white">{filteredCards.length}</strong> cards
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setVisibleLimit((prev) => prev + 30)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition cursor-pointer border border-slate-700"
              >
                Load 30 More
              </button>
              <button
                onClick={() => setVisibleLimit(filteredCards.length)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition cursor-pointer"
              >
                Show All ({filteredCards.length})
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal: Create Custom Card */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-6 shadow-2xl text-slate-100 relative my-auto sm:my-8 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Create Custom Flashcard</h2>
            </div>

            <form onSubmit={handleCreateCard} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Subject / Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as CategoryId)}
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Difficulty Level</label>
                <div className="flex gap-2">
                  {(['beginner', 'intermediate', 'advanced'] as const).map((diff) => (
                    <button
                      key={diff}
                      type="button"
                      onClick={() => setNewDifficulty(diff)}
                      className={`flex-1 py-1.5 rounded-xl font-bold capitalize transition cursor-pointer ${
                        newDifficulty === diff
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Question Prompt *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. What is the difference between microeconomics and macroeconomics?"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Correct Answer *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Micro studies individuals/firms; macro studies overall national economy"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-slate-300 font-semibold">
                  3 Distractor Options (for Quiz Mode)
                </label>
                <input
                  type="text"
                  placeholder="Distractor option 1"
                  value={newDistractor1}
                  onChange={(e) => setNewDistractor1(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500"
                />
                <input
                  type="text"
                  placeholder="Distractor option 2"
                  value={newDistractor2}
                  onChange={(e) => setNewDistractor2(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500"
                />
                <input
                  type="text"
                  placeholder="Distractor option 3"
                  value={newDistractor3}
                  onChange={(e) => setNewDistractor3(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Detailed Explanation</label>
                <textarea
                  rows={2}
                  placeholder="Explanation revealed on back of the card"
                  value={newExplanation}
                  onChange={(e) => setNewExplanation(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Mnemonic / Quick Formula Tip</label>
                <input
                  type="text"
                  placeholder="e.g. Micro = Tree, Macro = Forest"
                  value={newTip}
                  onChange={(e) => setNewTip(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Card</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
