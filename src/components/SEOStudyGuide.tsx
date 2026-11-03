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
  const embedIframeCode = `<iframe src="${currentSEO.canonicalUrl}" width="100%" height="680" style="border:1px solid #e2e8f0;border-radius:16px;" title="${currentSEO.title}" loading="lazy"></iframe>`;
  const backlinkHtmlCode = `<a href="${currentSEO.canonicalUrl}" target="_blank" rel="noopener">${currentSEO.h1} — Free JKSSB Practice Portal</a>`;

  const handleCopySnippet = (type: 'url' | 'embed' | 'backlink', text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
      setCopiedSnippetType(type);
      setTimeout(() => setCopiedSnippetType(null), 2500);
    }
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-200 space-y-8 text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Syllabus Covered H2 */}
        <section className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-indigo-600">
            <BookOpen className="w-4 h-4" />
            <h2 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
              Syllabus Covered: {activeTopicSEO.shortName}
            </h2>
          </div>
          <p className="text-xs text-[#475569]">
            Official JKSSB General Line, Graduate Level, FAA, Junior Assistant &amp; Patwari syllabus topics tested in this module:
          </p>
          <ul className="space-y-2 text-xs text-[#1E293B]">
            {activeDetails.syllabusTopics.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Study Notes & Exam Instructions H2 */}
        <section className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-600">
            <FileText className="w-4 h-4" />
            <h2 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
              Study Notes &amp; JKSSB Exam Instructions
            </h2>
          </div>
          <ul className="space-y-2.5 text-xs text-[#1E293B]">
            {activeDetails.studyNotes.map((note, idx) => (
              <li key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 leading-relaxed text-[#334155]">
                {note}
              </li>
            ))}
          </ul>
          <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-[11px] text-[#312E81]">
            <strong className="text-indigo-700">Exam Marking Scheme:</strong> Every correct MCQ awards{' '}
            <span className="text-emerald-700 font-semibold">+1.00 mark</span>, while each incorrect answer deducts{' '}
            <span className="text-rose-700 font-semibold">-0.25 marks</span> (1/4th negative marking). Unattempted questions carry zero penalty.
          </div>
        </section>
      </div>

      {/* Sample Solved Questions & Written Answer Key H2 */}
      <section className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
        <div>
          <h2 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
            Recent Solved Questions &amp; Answer Key ({activeTopicSEO.shortName})
          </h2>
          <p className="text-xs text-[#475569] mt-0.5">
            Review solved multiple-choice questions with detailed explanations for JKSSB exam preparation:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeDetails.sampleQuestions.map((sq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 shadow-xs"
            >
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-[#0F172A] leading-snug">
                  Q{idx + 1}. {sq.question}
                </h3>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  {sq.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className={`px-2 py-1 rounded border ${
                        opt === sq.answer
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] text-[#334155]">
                <span className="font-bold text-emerald-700">Answer: {sq.answer}</span> — {sq.explanation}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Descriptive Anchor Links for All Topic Directories H2 */}
      <section className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-3">
        <h2 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
          Browse JKSSB Topic-Wise MCQ Quizzes &amp; Full Mock Tests
        </h2>
        <p className="text-xs text-[#475569]">
          Select a dedicated JKSSB landing page below to launch targeted JKSSB account assistant practice questions or a full 120-question CBT mock test:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <a
            href="/jkssb-faa-mock-test"
            onClick={onMockLinkClick}
            className={`p-3 rounded-xl border text-left transition flex items-center justify-between gap-2 group ${
              currentMode === 'mock'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-slate-50 border-emerald-300 text-slate-800 hover:border-emerald-500 hover:bg-slate-100'
            }`}
          >
            <div className="min-w-0">
              <div className={`text-xs font-bold truncate ${currentMode === 'mock' ? 'text-white' : 'text-emerald-800'}`}>
                Start JKSSB FAA Mock Test (120 Qs CBT)
              </div>
              <div className={`text-[10px] truncate mt-0.5 ${currentMode === 'mock' ? 'text-emerald-100' : 'text-[#475569]'}`}>
                120 Marks • 120 Mins • -0.25 Marking
              </div>
            </div>
            <ArrowRight className={`w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform ${currentMode === 'mock' ? 'text-white' : 'text-emerald-600'}`} />
          </a>

          {Object.values(TOPIC_SEO_MAP).map((topicItem) => (
            <a
              key={topicItem.slug || 'all'}
              href={topicItem.path}
              onClick={(e) => onTopicLinkClick(e, topicItem.categoryId)}
              className={`p-3 rounded-xl border text-left transition flex items-center justify-between gap-2 group ${
                currentMode === 'quiz' && selectedCategory === topicItem.categoryId
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-400 hover:bg-slate-100'
              }`}
            >
              <div className="min-w-0">
                <div className={`text-xs font-bold truncate ${currentMode === 'quiz' && selectedCategory === topicItem.categoryId ? 'text-white' : 'text-indigo-700'}`}>
                  {topicItem.navAnchorText}
                </div>
                <div className={`text-[10px] truncate mt-0.5 ${currentMode === 'quiz' && selectedCategory === topicItem.categoryId ? 'text-indigo-100' : 'text-[#475569]'}`}>
                  {topicItem.marksWeightage}
                </div>
              </div>
              <ArrowRight className={`w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform ${currentMode === 'quiz' && selectedCategory === topicItem.categoryId ? 'text-white' : 'text-indigo-600'}`} />
            </a>
          ))}
        </div>
      </section>

      {/* Community Sharing & Educational Partner Embeds */}
      <section className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-indigo-600">
              <Share2 className="w-4 h-4" />
              <h2 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                Share Free JKSSB Test Module &amp; Educator Embeds
              </h2>
            </div>
            <p className="text-xs text-[#475569] mt-0.5">
              Share this free {activeTopicSEO.shortName} practice module with JKSSB study groups on Telegram, WhatsApp &amp; Reddit, or embed it on your educational blog:
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`https://api.whatsapp.com/send?text=${shareTextEncoded}%20${shareUrlEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>WhatsApp</span>
              <ExternalLink className="w-3 h-3 text-emerald-600" />
            </a>
            <a
              href={`https://t.me/share/url?url=${shareUrlEncoded}&text=${shareTextEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>Telegram</span>
              <ExternalLink className="w-3 h-3 text-sky-600" />
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${shareUrlEncoded}&title=${encodeURIComponent(currentSEO.h1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>Reddit</span>
              <ExternalLink className="w-3 h-3 text-orange-600" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrlEncoded}&text=${shareTextEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold inline-flex items-center gap-1.5 transition min-h-[38px]"
            >
              <span>Post on X</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
            <button
              type="button"
              onClick={() => handleCopySnippet('url', currentSEO.canonicalUrl)}
              className="px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer min-h-[38px]"
            >
              {copiedSnippetType === 'url' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Copy Direct URL</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-[#0F172A] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                Embed Interactive Quiz Widget (For Study Blogs)
              </span>
              <button
                type="button"
                onClick={() => handleCopySnippet('embed', embedIframeCode)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-[11px] font-semibold text-indigo-700 inline-flex items-center gap-1 cursor-pointer transition"
              >
                {copiedSnippetType === 'embed' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-indigo-600" />
                    <span>Copy Embed</span>
                  </>
                )}
              </button>
            </div>
            <code className="block text-[10px] font-mono text-[#475569] bg-white p-2 rounded-lg border border-slate-200 truncate">
              {embedIframeCode}
            </code>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-[#0F172A] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                HTML Resource Citation Link (For Educators &amp; Notes)
              </span>
              <button
                type="button"
                onClick={() => handleCopySnippet('backlink', backlinkHtmlCode)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-[11px] font-semibold text-emerald-700 inline-flex items-center gap-1 cursor-pointer transition"
              >
                {copiedSnippetType === 'backlink' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-emerald-600" />
                    <span>Copy HTML Link</span>
                  </>
                )}
              </button>
            </div>
            <code className="block text-[10px] font-mono text-[#475569] bg-white p-2 rounded-lg border border-slate-200 truncate">
              {backlinkHtmlCode}
            </code>
          </div>
        </div>
      </section>
    </article>
  );
};
