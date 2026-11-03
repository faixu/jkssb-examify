import React, { useState, useEffect } from 'react';
import { CategoryId, StudyMode } from '../types';
import { TOPIC_SEO_MAP, TopicSEOConfig } from '../utils/seo';
import { TOPIC_SEO_DETAILS } from '../utils/seoDetails';
import {
  BookOpen,
  CheckCircle2,
  ArrowRight,
  FileText,
  Share2,
  Copy,
  Check,
  Code2,
  ExternalLink,
} from 'lucide-react';

interface SEOStudyGuideProps {
  currentMode: StudyMode;
  selectedCategory: CategoryId | 'all';
  currentSEO: {
    path: string;
    canonicalUrl: string;
    title: string;
    h1: string;
    description: string;
    topic: TopicSEOConfig;
  };
  onTopicLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, catId: CategoryId | 'all') => void;
  onMockLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const SEOStudyGuide: React.FC<SEOStudyGuideProps> = ({
  currentMode,
  selectedCategory,
  currentSEO,
  onTopicLinkClick,
  onMockLinkClick,
}) => {
  const [copiedSnippetType, setCopiedSnippetType] = useState<'url' | 'embed' | 'backlink' | null>(null);

  const activeTopicSEO = currentSEO.topic;
  const activeDetails = TOPIC_SEO_DETAILS[activeTopicSEO.categoryId] || TOPIC_SEO_DETAILS.all;

  // Enrich dynamic JSON-LD with sample Question & Answer schema (Google Practice Problems compliant)
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Reuse server-seo-schema if present, otherwise use dynamic-quiz-schema so there's never duplicate Quiz objects
    let targetSchemaEl = document.getElementById('server-seo-schema') as HTMLScriptElement | null;
    if (!targetSchemaEl) {
      targetSchemaEl = document.getElementById('dynamic-quiz-schema') as HTMLScriptElement | null;
    }
    if (!targetSchemaEl) {
      targetSchemaEl = document.createElement('script');
      targetSchemaEl.id = 'dynamic-quiz-schema';
      targetSchemaEl.type = 'application/ld+json';
      document.head.appendChild(targetSchemaEl);
    }

    const structuredSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          name: 'FlashMind Quiz & Flashcards',
          url: currentSEO.canonicalUrl,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          description: currentSEO.description,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
          },
        },
        {
          '@type': 'Course',
          name: currentSEO.h1,
          description: activeTopicSEO.intro,
          provider: {
            '@type': 'Organization',
            name: 'FlashMind Quiz & Flashcards',
            sameAs: 'https://jkssb-mcq-quiz.ai.studio/',
          },
        },
        {
          '@type': 'Quiz',
          name: currentSEO.h1,
          description: currentSEO.description,
          url: currentSEO.canonicalUrl,
          learningResourceType: 'Practice problem',
          typicalAgeRange: '18-35',
          educationalLevel: 'Competitive Examination',
          assesses: activeTopicSEO.shortName,
          educationalAlignment: {
            '@type': 'AlignmentObject',
            alignmentType: 'educationalSubject',
            targetName: activeTopicSEO.shortName,
          },
          hasPart: activeDetails.sampleQuestions.map((sq, qIdx) => {
            let nextPos = 2;
            const suggestedAnswers = sq.options
              .filter((opt) => opt !== sq.answer)
              .map((opt) => ({
                '@type': 'Answer',
                text: opt,
                position: nextPos++,
                encodingFormat: 'text/plain',
                comment: {
                  '@type': 'Comment',
                  text: `Incorrect choice. The correct answer is: ${sq.answer}. ${sq.explanation}`,
                },
              }));

            return {
              '@type': 'Question',
              name: `Question ${qIdx + 1}`,
              eduQuestionType: 'Multiple choice',
              text: sq.question,
              encodingFormat: 'text/plain',
              learningResourceType: 'Practice problem',
              typicalAgeRange: '18-35',
              educationalLevel: 'Intermediate',
              assesses: activeTopicSEO.shortName,
              comment: {
                '@type': 'Comment',
                text: sq.explanation,
              },
              acceptedAnswer: {
                '@type': 'Answer',
                text: sq.answer,
                position: 1,
                encodingFormat: 'text/plain',
                comment: {
                  '@type': 'Comment',
                  text: `Correct: ${sq.explanation}`,
                },
                answerExplanation: {
                  '@type': 'Comment',
                  text: sq.explanation,
                },
              },
              suggestedAnswer: suggestedAnswers,
            };
          }),
        },
      ],
    };
    targetSchemaEl.textContent = JSON.stringify(structuredSchema);
  }, [currentSEO, activeTopicSEO, activeDetails]);

  const shareUrlEncoded = encodeURIComponent(currentSEO.canonicalUrl);
  const shareTextEncoded = encodeURIComponent(
    `${currentSEO.h1} — Revise Smarter. Retain Longer. Score Higher. Practice free JKSSB FAA mock test online & 6,290+ solved MCQs:`
  );
  const embedIframeCode = `<iframe src="${currentSEO.canonicalUrl}" width="100%" height="680" style="border:1px solid #1e293b;border-radius:16px;" title="${currentSEO.title}" loading="lazy"></iframe>`;
  const backlinkHtmlCode = `<a href="${currentSEO.canonicalUrl}" target="_blank" rel="noopener">${currentSEO.h1} — Free JKSSB Practice Portal</a>`;

  const handleCopySnippet = (type: 'url' | 'embed' | 'backlink', text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
      setCopiedSnippetType(type);
      setTimeout(() => setCopiedSnippetType(null), 2500);
    }
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-800/80 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Syllabus Covered H2 */}
        <section className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <BookOpen className="w-4 h-4" />
            <h2 className="text-sm sm:text-base font-extrabold text-white">
              Syllabus Covered: {activeTopicSEO.shortName}
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Official JKSSB General Line, Graduate Level, FAA, Junior Assistant &amp; Patwari syllabus topics tested in this module:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            {activeDetails.syllabusTopics.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Study Notes & Exam Instructions H2 */}
        <section className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-3">
          <div className="flex items-center gap-2 text-amber-400">
            <FileText className="w-4 h-4" />
            <h2 className="text-sm sm:text-base font-extrabold text-white">
              Study Notes &amp; JKSSB Exam Instructions
            </h2>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {activeDetails.studyNotes.map((note, idx) => (
              <li key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 leading-relaxed">
                {note}
              </li>
            ))}
          </ul>
          <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-slate-300">
            <strong className="text-indigo-300">Exam Marking Scheme:</strong> Every correct MCQ awards{' '}
            <span className="text-emerald-400 font-semibold">+1.00 mark</span>, while each incorrect answer deducts{' '}
            <span className="text-rose-400 font-semibold">-0.25 marks</span> (1/4th negative marking). Unattempted questions carry zero penalty.
          </div>
        </section>
      </div>

      {/* Sample Solved Questions & Written Answer Key H2 */}
      <section className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-4">
        <div>
          <h2 className="text-sm sm:text-base font-extrabold text-white">
            Recent Solved Questions &amp; Answer Key ({activeTopicSEO.shortName})
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Review solved multiple-choice questions with detailed explanations for JKSSB exam preparation:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeDetails.sampleQuestions.map((sq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-white leading-snug">
                  Q{idx + 1}. {sq.question}
                </h3>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  {sq.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className={`px-2 py-1 rounded border ${
                        opt === sq.answer
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                <span className="font-bold text-emerald-400">Answer: {sq.answer}</span> — {sq.explanation}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Descriptive Anchor Links for All Topic Directories H2 */}
      <section className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3">
        <h2 className="text-sm sm:text-base font-extrabold text-white">
          Browse JKSSB Topic-Wise MCQ Quizzes &amp; Full Mock Tests
        </h2>
        <p className="text-xs text-slate-400">
          Select a dedicated JKSSB landing page below to launch targeted JKSSB account assistant practice questions or a full 120-question CBT mock test:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <a
            href="/jkssb-faa-mock-test"
            onClick={onMockLinkClick}
            className={`p-3 rounded-xl border text-left transition flex items-center justify-between gap-2 group ${
              currentMode === 'mock'
                ? 'bg-emerald-600/20 border-emerald-500 text-white'
                : 'bg-slate-950/70 border-emerald-500/40 text-slate-300 hover:border-emerald-400 hover:text-white'
            }`}
          >
            <div className="min-w-0">
              <div className="text-xs font-bold text-emerald-300 group-hover:text-emerald-200 truncate">
                Start JKSSB FAA Mock Test (120 Qs CBT)
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                120 Marks • 120 Mins • -0.25 Marking
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {Object.values(TOPIC_SEO_MAP).map((topicItem) => (
            <a
              key={topicItem.slug || 'all'}
              href={topicItem.path}
              onClick={(e) => onTopicLinkClick(e, topicItem.categoryId)}
              className={`p-3 rounded-xl border text-left transition flex items-center justify-between gap-2 group ${
                currentMode === 'quiz' && selectedCategory === topicItem.categoryId
                  ? 'bg-indigo-600/20 border-indigo-500 text-white'
                  : 'bg-slate-950/70 border-slate-800/90 text-slate-300 hover:border-indigo-500/50 hover:text-white'
              }`}
            >
              <div className="min-w-0">
                <div className="text-xs font-bold text-indigo-300 group-hover:text-indigo-200 truncate">
                  {topicItem.navAnchorText}
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">
                  {topicItem.marksWeightage}
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </section>

      {/* Community Sharing & Educational Partner Embeds (Authority & Backlinks) */}
      <section className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-indigo-950/20 to-slate-900/90 border border-slate-800/90 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-indigo-400">
              <Share2 className="w-4 h-4" />
              <h2 className="text-sm sm:text-base font-extrabold text-white">
                Share Free JKSSB Test Module &amp; Educator Embeds
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Share this free {activeTopicSEO.shortName} practice module with JKSSB study groups on Telegram, WhatsApp &amp; Reddit, or embed it on your educational blog:
            </p>
          </div>

          {/* 1-Click Community Share Links */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`https://api.whatsapp.com/send?text=${shareTextEncoded}%20${shareUrlEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={`https://t.me/share/url?url=${shareUrlEncoded}&text=${shareTextEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 text-sky-300 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>Telegram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${shareUrlEncoded}&title=${encodeURIComponent(currentSEO.h1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/40 text-orange-300 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>Reddit</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrlEncoded}&text=${shareTextEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>Post on X</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              type="button"
              onClick={() => handleCopySnippet('url', currentSEO.canonicalUrl)}
              className="px-3 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer min-h-[38px]"
            >
              {copiedSnippetType === 'url' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Direct URL</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Educator & Blogger Embed / Citation Snippets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                Embed Interactive Quiz Widget (For Study Blogs)
              </span>
              <button
                type="button"
                onClick={() => handleCopySnippet('embed', embedIframeCode)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-indigo-300 inline-flex items-center gap-1 cursor-pointer transition"
              >
                {copiedSnippetType === 'embed' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Embed</span>
                  </>
                )}
              </button>
            </div>
            <code className="block text-[10px] font-mono text-slate-400 bg-slate-900/90 p-2 rounded-lg border border-slate-800/80 truncate">
              {embedIframeCode}
            </code>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                HTML Resource Citation Link (For Educators &amp; Notes)
              </span>
              <button
                type="button"
                onClick={() => handleCopySnippet('backlink', backlinkHtmlCode)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-emerald-300 inline-flex items-center gap-1 cursor-pointer transition"
              >
                {copiedSnippetType === 'backlink' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy HTML Link</span>
                  </>
                )}
              </button>
            </div>
            <code className="block text-[10px] font-mono text-slate-400 bg-slate-900/90 p-2 rounded-lg border border-slate-800/80 truncate">
              {backlinkHtmlCode}
            </code>
          </div>
        </div>
      </section>
    </article>
  );
};
