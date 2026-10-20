import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Send,
  RotateCcw,
  Bot,
  User,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Settings2,
  Zap,
  Brain,
  Gauge,
  HelpCircle,
  BookOpen,
  Calculator,
  ChevronDown,
  Info,
  ShieldAlert,
} from 'lucide-react';
import { ChatMessage, ChatRolePreset } from '../types';
import { speakText, stopSpeaking } from '../utils/audio';

interface GeminiChatbotProps {
  onNavigateToMode?: (mode: string) => void;
}

interface RoleConfig {
  id: ChatRolePreset;
  title: string;
  shortDesc: string;
  defaultModel: 'gemini-3.8-flash' | 'gemini-3.1-flash-lite' | 'gemini-4-argon';
  icon: React.ElementType;
  color: string;
  badge: string;
  systemInstruction: string;
  suggestedPrompts: string[];
}

const ROLES: Record<ChatRolePreset, RoleConfig> = {
  mentor: {
    id: 'mentor',
    title: 'JKSSB FAA Exam Mentor',
    shortDesc: 'All-round guide for the 120-mark FAA syllabus and exam strategy.',
    defaultModel: 'gemini-3.8-flash',
    icon: Sparkles,
    color: 'from-indigo-500 to-purple-600',
    badge: 'General Tasks',
    systemInstruction: `You are an expert senior mentor for students preparing for the Jammu and Kashmir Services Selection Board (JKSSB) Finance Accounts Assistant (FAA) Examination (120 marks total).
Your role is to clearly explain syllabus topics across:
1. General Knowledge & J&K UT Special (30 Marks)
2. Accountancy & Book Keeping (30 Marks)
3. General English (10 Marks)
4. Statistics (10 Marks)
5. Mathematics (10 Marks)
6. General Economics (10 Marks)
7. General Science (10 Marks)
8. Knowledge of Computers (10 Marks)

Style & Tone:
- Enthusiastic, authoritative, encouraging, and structured.
- Use bullet points, bold key terms, and concise explanations.
- Point out common exam traps, negative marking caveats (-0.25), and quick memory mnemonics where helpful.`,
    suggestedPrompts: [
      'Explain the key differences between Trial Balance and Balance Sheet.',
      'What are the landmark provisions of J&K Reorganisation Act 2019?',
      'How to approach negative marking in the 120-question FAA exam?',
      'Summarize the functions of Primary vs Secondary data in Statistics.',
    ],
  },
  accounting: {
    id: 'accounting',
    title: 'Complex Problem Solver',
    shortDesc: 'Deep calculations, journal entries, balance sheets & math proofs.',
    defaultModel: 'gemini-4-argon',
    icon: Calculator,
    color: 'from-emerald-500 to-teal-700',
    badge: 'Complex Tasks',
    systemInstruction: `You are a specialized Chartered Accountant and Advanced Quantitative Problem Solver for the JKSSB FAA examination.
Your role is to solve complex numerical, mathematical, and accounting problems with exhaustive step-by-step clarity.

Expertise:
- Double entry journal entries, ledger balancing, and Bank Reconciliation Statements (BRS).
- Partnership accounts: profit sharing ratio changes, goodwill valuation, revaluation accounts, and dissolution.
- Cost accounting: break-even point (CVP analysis), margin of safety, and budgetary controls.
- Mathematics & Stats: permutations, combinations, binomial theorem, matrix determinants, and standard deviation calculations.

Style:
- Show every intermediate calculation step and formula explicitly.
- Provide balance sheet debit/credit formats when explaining accounts.`,
    suggestedPrompts: [
      'Walk me through a Bank Reconciliation Statement when starting with overdraft balance.',
      'Calculate the Break-Even Point: Fixed Cost = ₹50,000, Selling Price = ₹100, Variable Cost = ₹60.',
      'How do you calculate Goodwill using Super Profit method with an example?',
      'Solve: Find the number of permutations of the letters in "ACCOUNTANCY".',
    ],
  },
  mnemonics: {
    id: 'mnemonics',
    title: 'Rapid Revision & Mnemonic Coach',
    shortDesc: 'Ultra-fast memory aids, acronyms, and quick 1-sentence recaps.',
    defaultModel: 'gemini-3.1-flash-lite',
    icon: Zap,
    color: 'from-amber-500 to-rose-600',
    badge: 'Fast Responses',
    systemInstruction: `You are a high-speed memory and revision coach for JKSSB FAA candidates.
Your job is to provide rapid-fire answers, memorable mnemonics, catchy acronyms, and punchy 1-sentence summaries.

Style:
- Keep answers ultra-compact and lightning fast.
- Highlight memory hooks, formula rhymes, and acronyms (e.g., PEAR for accounting, VITAL for rivers).
- No filler greetings; get straight to the high-yield fact.`,
    suggestedPrompts: [
      'Give me an easy mnemonic for remembering Debit and Credit golden rules.',
      'Fast 1-line recap of Newton\'s 3 Laws of Motion with real examples.',
      'Catchy acronym to memorize components of Money Supply (M1, M2, M3, M4).',
      'Quick cheat sheet for indirect taxes subsumed into GST.',
    ],
  },
  gk: {
    id: 'gk',
    title: 'J&K UT & Current Affairs Expert',
    shortDesc: 'Deep dive into J&K geography, history, tourism, and 2026 events.',
    defaultModel: 'gemini-3.8-flash',
    icon: BookOpen,
    color: 'from-sky-500 to-blue-700',
    badge: 'General Tasks',
    systemInstruction: `You are an authority on Jammu & Kashmir UT history, geography, economy, culture, and National/UT Current Affairs (2026 updates).
Cover:
- Geography: Rivers (Jhelum, Chenab, Indus, Tawi), lakes (Dal, Wular, Mansabal, Pangong), climate zones, passes.
- History: Ancient dynasties, Dogra rulers, Treaty of Amritsar 1846, accession, and constitutional milestones.
- J&K Reorganisation Act 2019: Sections, schedules, assembly seats, Delimitation Commission allocations.
- Flagship Schemes: Namami Gange, PM VIKAS, PM SVANidhi, Amrit Bharat Stations, Ayushman Bharat PM-JAY.`,
    suggestedPrompts: [
      'What are the origin points and major tributaries of the Jhelum and Chenab rivers?',
      'Explain the key changes introduced by the J&K Delimitation Commission.',
      'What is PM VIKAS scheme and what was its previous name?',
      'List important Ramsar wetland sites in Jammu & Kashmir.',
    ],
  },
  custom: {
    id: 'custom',
    title: 'Custom AI Tutor',
    shortDesc: 'Tailor your own system instructions and preferred Gemini model.',
    defaultModel: 'gemini-3.8-flash',
    icon: Brain,
    color: 'from-pink-500 to-indigo-600',
    badge: 'Custom Persona',
    systemInstruction: 'You are a helpful and knowledgeable study assistant for the student.',
    suggestedPrompts: [
      'Quiz me with 3 challenging multiple-choice questions on Financial Auditing.',
      'Summarize the essential differences between microeconomics and macroeconomics.',
      'Explain how computer memory hierarchy works (Registers to Secondary Storage).',
      'What is the binomial theorem and how is it used in exams?',
    ],
  },
};

const STORAGE_KEY = 'flashmind_gemini_chat_messages_v1';

export const GeminiChatbot: React.FC<GeminiChatbotProps> = () => {
  const [selectedRole, setSelectedRole] = useState<ChatRolePreset>('mentor');
  const [selectedModel, setSelectedModel] = useState<'gemini-3.8-flash' | 'gemini-3.1-flash-lite' | 'gemini-4-argon'>('gemini-3.8-flash');
  const [customInstruction, setCustomInstruction] = useState<string>(ROLES.custom.systemInstruction);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        id: 'welcome-msg',
        role: 'model',
        text: 'Hello! I am your **Gemini AI Exam Tutor** for the **JKSSB FAA (Finance Accounts Assistant)** exam. Ask me about any topic across the 120-mark syllabus, request step-by-step problem breakdowns, or ask for fast mnemonics!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'gemini-3.8-flash',
      },
    ];
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Save conversation to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // storage full or disabled
    }
  }, [messages]);

  // Sync default model when switching role
  const handleSelectRole = (roleKey: ChatRolePreset) => {
    setSelectedRole(roleKey);
    setSelectedModel(ROLES[roleKey].defaultModel);
  };

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const currentRoleConfig = ROLES[selectedRole];
  const activeSystemInstruction = selectedRole === 'custom' ? customInstruction : currentRoleConfig.systemInstruction;

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    setInputPrompt('');
    setErrorMessage(null);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setIsLoading(true);

    try {
      // Format payload for backend server.ts route
      // We pass the full conversation history for multi-turn chat
      const payloadMessages = nextHistory.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: payloadMessages,
          systemInstruction: activeSystemInstruction,
          model: selectedModel,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Server responded with status ${res.status}`);
      }

      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.reply || 'No response returned from Gemini.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.model || selectedModel,
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorText = err.message || 'Failed to get a response from Gemini. Please check your internet connection or try again.';
      setErrorMessage(errorText);

      const errorReply: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: `⚠️ **Unable to complete response:** ${errorText}\n\n*Tip: You can switch models to "gemini-3.1-flash-lite" (Fast) or retry your question.*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearHistory = () => {
    if (!confirm('Are you sure you want to clear this chat history?')) return;
    stopSpeaking();
    const welcome: ChatMessage = {
      id: `welcome-${Date.now()}`,
      role: 'model',
      text: 'Chat history cleared. How can I assist your JKSSB FAA exam preparation today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: selectedModel,
    };
    setMessages([welcome]);
    setErrorMessage(null);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if (speakingId === id) {
      stopSpeaking();
      setSpeakingId(null);
    } else {
      stopSpeaking();
      setSpeakingId(id);
      const cleanText = text.replace(/[*#`_]/g, '');
      const started = speakText(cleanText);
      if (!started) setSpeakingId(null);
    }
  };

  const RoleIcon = currentRoleConfig.icon;

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)]">
      {/* Top Banner: Role & Model Selector Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 sm:p-4 mb-3 shadow-xl flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${currentRoleConfig.color} text-white shadow-md shadow-indigo-500/20 shrink-0`}>
            <RoleIcon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-extrabold text-sm sm:text-base text-white tracking-tight truncate">
                {currentRoleConfig.title}
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                {selectedModel}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate max-w-md">
              {currentRoleConfig.shortDesc}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Role Preset Selector Button */}
          <button
            onClick={() => setShowConfigModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition cursor-pointer active:scale-95"
            title="Configure Chatbot Role & Gemini Model"
          >
            <Settings2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Role &amp; Model</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {/* Clear Chat Button */}
          <button
            onClick={handleClearHistory}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition cursor-pointer active:scale-95"
            title="Clear conversation history"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Role Selection Pills Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none shrink-0">
        {(Object.keys(ROLES) as ChatRolePreset[]).map((key) => {
          const role = ROLES[key];
          const isSelected = selectedRole === key;
          const Icon = role.icon;
          return (
            <button
              key={key}
              onClick={() => handleSelectRole(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{role.title.split(' ')[0]} {role.title.split(' ')[1] || ''}</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                role.defaultModel === 'gemini-4-argon'
                  ? 'bg-purple-500/30 text-purple-200'
                  : role.defaultModel === 'gemini-3.1-flash-lite'
                  ? 'bg-amber-500/30 text-amber-200'
                  : 'bg-slate-800 text-slate-300'
              }`}>
                {role.defaultModel.replace('gemini-', '')}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Chat Thread (Scrollable) */}
      <div className="flex-1 bg-slate-900/80 border border-slate-800 rounded-3xl p-3 sm:p-5 overflow-y-auto space-y-4 shadow-inner scrollbar-thin">
        {messages.map((m) => {
          const isUser = m.role === 'user';
          return (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 sm:gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                  isUser
                    ? 'bg-indigo-600 text-white'
                    : m.isError
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    : 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble Container */}
              <div className={`max-w-[85%] sm:max-w-[78%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                {/* Bubble */}
                <div
                  className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-indigo-600 text-white rounded-tr-sm shadow-md shadow-indigo-600/20'
                      : m.isError
                      ? 'bg-rose-950/40 border border-rose-500/30 text-rose-200 rounded-tl-sm'
                      : 'bg-slate-800/90 border border-slate-700/80 text-slate-100 rounded-tl-sm shadow-md'
                  }`}
                >
                  {/* Formatted Text Content */}
                  <div className="whitespace-pre-wrap break-words space-y-1">
                    {m.text}
                  </div>

                  {/* Model badge and timestamp */}
                  <div
                    className={`flex items-center gap-2 mt-2 pt-1.5 border-t text-[10px] ${
                      isUser
                        ? 'border-indigo-500/40 text-indigo-200'
                        : 'border-slate-700/60 text-slate-400'
                    }`}
                  >
                    <span>{m.timestamp}</span>
                    {m.modelUsed && !isUser && (
                      <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-slate-900/60 text-indigo-300 border border-slate-700/60">
                        {m.modelUsed}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions for Assistant replies */}
                {!isUser && !m.isError && (
                  <div className="flex items-center gap-1 mt-1 text-slate-400">
                    <button
                      onClick={() => handleCopy(m.id, m.text)}
                      className="p-1 hover:text-white transition cursor-pointer"
                      title="Copy text"
                    >
                      {copiedId === m.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleSpeak(m.id, m.text)}
                      className="p-1 hover:text-white transition cursor-pointer"
                      title={speakingId === m.id ? 'Stop reading' : 'Read aloud'}
                    >
                      {speakingId === m.id ? (
                        <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Loading Spinner Indicator */}
        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 animate-pulse">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 rounded-tl-sm flex items-center gap-2 text-xs text-slate-300">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-slate-400">
                Thinking with {selectedModel}...
              </span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Suggested Starter Prompts Bar (when few messages) */}
      {messages.length <= 3 && !isLoading && (
        <div className="my-2 shrink-0">
          <div className="text-[11px] font-semibold text-slate-400 mb-1 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-indigo-400" />
            <span>Suggested prompts for {currentRoleConfig.title}:</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {currentRoleConfig.suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700/80 text-[11px] whitespace-nowrap transition cursor-pointer active:scale-95"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Message Input Form */}
      <div className="mt-2 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-center bg-slate-900 border border-slate-700/80 rounded-2xl p-1.5 focus-within:border-indigo-500 shadow-xl"
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask ${currentRoleConfig.title} anything about FAA syllabus...`}
            className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 px-3 py-2 resize-none focus:outline-none max-h-28 scrollbar-thin"
          />

          <button
            type="submit"
            disabled={!inputPrompt.trim() || isLoading}
            className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-md shadow-indigo-600/30 transition cursor-pointer active:scale-95 shrink-0 ml-1"
            title="Send message (Enter)"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <div className="flex items-center justify-between px-2 pt-1 text-[10px] text-slate-500">
          <span>Press Enter to send, Shift+Enter for new line</span>
          <span>Powered by Gemini API</span>
        </div>
      </div>

      {/* Role & Model Configuration Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-2xl text-slate-100 space-y-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-indigo-400" />
                <h3 className="font-extrabold text-base text-white">Chatbot Role &amp; Model Settings</h3>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Model Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                Gemini Model Selection (Per Request Specifications):
              </label>
              <div className="grid grid-cols-1 gap-2">
                {/* 1. gemini-3.8-flash */}
                <button
                  type="button"
                  onClick={() => setSelectedModel('gemini-3.8-flash')}
                  className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer ${
                    selectedModel === 'gemini-3.8-flash'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white">gemini-3.8-flash</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/30 text-indigo-300 font-mono">
                        General Tasks (Recommended)
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Balanced, comprehensive, and high-fidelity reasoning for standard syllabus explanations.
                    </p>
                  </div>
                </button>

                {/* 2. gemini-3.1-flash-lite */}
                <button
                  type="button"
                  onClick={() => setSelectedModel('gemini-3.1-flash-lite')}
                  className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer ${
                    selectedModel === 'gemini-3.1-flash-lite'
                      ? 'bg-amber-500/20 border-amber-500 text-white'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white">gemini-3.1-flash-lite</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-300 font-mono">
                        Fast Responses
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Low latency and high throughput for quick mnemonics, definitions, and flashcard recall.
                    </p>
                  </div>
                </button>

                {/* 3. gemini-4-argon */}
                <button
                  type="button"
                  onClick={() => setSelectedModel('gemini-4-argon')}
                  className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition cursor-pointer ${
                    selectedModel === 'gemini-4-argon'
                      ? 'bg-purple-600/20 border-purple-500 text-white'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white">gemini-4-argon</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-300 font-mono">
                        Complex Tasks
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Deepest reasoning for complex mathematical derivations, multi-step accounting, and statistical theory.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Role Preset System Instruction Preview */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                Active System Instruction (Role Persona):
              </label>
              {selectedRole === 'custom' ? (
                <textarea
                  rows={4}
                  value={customInstruction}
                  onChange={(e) => setCustomInstruction(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white font-mono focus:outline-none focus:border-indigo-500"
                  placeholder="Enter custom instructions for how Gemini should roleplay..."
                />
              ) : (
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-36 overflow-y-auto">
                  {currentRoleConfig.systemInstruction}
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition cursor-pointer"
              >
                Apply &amp; Continue Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
