import http from 'http';
import fs from 'fs';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { resolveRouteFromLocation, getCanonicalSEO, TOPIC_SEO_MAP } from './src/utils/seo';

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));

// Parse port from environment or CLI arguments (e.g. --port 3000)
let port = 3000;
const portArgIndex = process.argv.indexOf('--port');
if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
  port = parseInt(process.argv[portArgIndex + 1], 10) || 3000;
} else if (process.env.PORT) {
  port = parseInt(process.env.PORT, 10) || 3000;
}

// Server-side GoogleGenAI initialization with required telemetry User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/jk-special-gk</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/computer-fundamentals</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/general-science</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/accountancy</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/general-english</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/statistics</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/mathematics</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/economics</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/history</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/quizzes/current-affairs</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/mock-tests</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jkssb-mcq-quiz.ai.studio/flashcards</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injectRouteSEOIntoHtml(rawHtml: string, reqUrl: string): string {
  try {
    const parsedUrl = new URL(reqUrl, 'https://jkssb-mcq-quiz.ai.studio');
    const { mode, category } = resolveRouteFromLocation(parsedUrl.pathname, parsedUrl.search);
    const seo = getCanonicalSEO(mode, category);
    const topic = seo.topic;

    const safeTitle = escapeHtml(seo.title);
    const safeDesc = escapeHtml(seo.description);
    const safeCanonical = escapeHtml(seo.canonicalUrl);
    const safeH1 = escapeHtml(seo.h1);
    const safeIntro = escapeHtml(topic.intro);

    let html = rawHtml;

    // 1. Replace <title>
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);

    // 2. Replace <meta name="description">
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${safeDesc}" />`
    );

    // 3. Replace <link rel="canonical">
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${safeCanonical}" />`
    );

    // 4. Replace OpenGraph & Twitter title/description/url
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${safeTitle}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${safeDesc}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${safeCanonical}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${safeTitle}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${safeDesc}" />`
    );

    // 5. Build pre-rendered semantic HTML inside <div id="root"> for first-pass crawler visibility
    const syllabusItemsHtml = topic.syllabusTopics
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join('\n            ');

    const notesItemsHtml = topic.studyNotes
      .map((note) => `<li>${escapeHtml(note)}</li>`)
      .join('\n            ');

    const sampleQuestionsHtml = topic.sampleQuestions
      .map(
        (sq, idx) => `
          <div class="mt-4">
            <h3 class="font-semibold text-white">Q${idx + 1}. ${escapeHtml(sq.question)}</h3>
            <p class="text-sm text-emerald-400"><strong>Correct Answer:</strong> ${escapeHtml(sq.answer)}</p>
            <p class="text-xs text-slate-300"><strong>Explanation:</strong> ${escapeHtml(sq.explanation)}</p>
          </div>`
      )
      .join('\n');

    const navLinksHtml = Object.values(TOPIC_SEO_MAP)
      .filter((t) => t.categoryId !== 'all')
      .map(
        (t) =>
          `<li><a href="${escapeHtml(t.path)}">${escapeHtml(t.navAnchorText)}</a></li>`
      )
      .join('\n            ');

    const prerenderedRootContent = `<div id="root">
      <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        <header class="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 min-h-[105px] lg:min-h-[65px] flex items-center">
          <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div class="font-extrabold text-lg text-white tracking-tight">FlashMind JKSSB Prep</div>
          </div>
        </header>
        <section class="border-b border-slate-800/70 bg-slate-950 min-h-[132px] md:min-h-[92px] flex items-center">
          <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <h1 class="text-base sm:text-lg font-extrabold text-white tracking-tight line-clamp-1 min-h-[24px] sm:min-h-[28px]">${safeH1}</h1>
            <p class="text-xs text-slate-400 line-clamp-2 mt-0.5 max-w-3xl min-h-[32px]">${safeIntro}</p>
          </div>
        </section>
        <main class="flex-1 w-full pb-12">
          <div class="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 min-h-[720px]">
            <div class="mb-6 space-y-3 min-h-[104px]">
              <div class="h-[54px] w-full sm:w-[340px] rounded-2xl bg-slate-900/90 border border-slate-800"></div>
              <div class="h-[38px] w-full rounded-2xl bg-slate-900/60 border border-slate-800/80"></div>
            </div>
            <div class="w-full min-h-[480px] rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-8"></div>
          </div>
          <article class="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-800/80 space-y-8 text-slate-200">
            <section>
              <h2 class="text-sm sm:text-base font-extrabold text-white">Syllabus Covered (${escapeHtml(topic.marksWeightage)})</h2>
              <ul class="mt-2 list-disc pl-5 space-y-1 text-xs text-slate-300">
                ${syllabusItemsHtml}
              </ul>
            </section>
            <section>
              <h2 class="text-sm sm:text-base font-extrabold text-white">Key Study Notes &amp; Exam Highlights</h2>
              <ul class="mt-2 list-disc pl-5 space-y-1 text-xs text-slate-300">
                ${notesItemsHtml}
              </ul>
            </section>
            <section>
              <h2 class="text-sm sm:text-base font-extrabold text-white">Sample Solved JKSSB Questions &amp; Answer Key</h2>
              ${sampleQuestionsHtml}
            </section>
            <nav aria-label="JKSSB Subject Quizzes">
              <h2 class="text-sm sm:text-base font-extrabold text-white">Topic-Wise JKSSB Practice Quizzes</h2>
              <ul class="mt-2 space-y-1 text-xs text-indigo-400">
                ${navLinksHtml}
                <li><a href="/mock-tests">Start JKSSB 120-Question CBT Mock Tests</a></li>
                <li><a href="/flashcards">Open JKSSB Spaced Repetition Flashcards</a></li>
              </ul>
            </nav>
          </article>
        </main>
      </div>
    </div>`;

    html = html.replace(/<div id="root">[\s\S]*?<\/main>\s*<\/div>\s*<\/div>/i, prerenderedRootContent);

    return html;
  } catch (_e) {
    return rawHtml;
  }
}

// API health endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Google Search Console HTML verification file route
app.get('/google272431db41c0e72c.html', (_req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/html; charset=utf-8')
    .set('Cache-Control', 'public, max-age=3600')
    .send('google-site-verification: google272431db41c0e72c.html\n');
});

// Search Engine Crawlers: robots.txt
app.get('/robots.txt', (req, res) => {
  const host = req.get('x-forwarded-host') || req.get('host') || 'jkssb-mcq-quiz.ai.studio';
  const baseUrl = host.includes('localhost') ? 'https://jkssb-mcq-quiz.ai.studio' : `https://${host}`;
  res
    .status(200)
    .set('Content-Type', 'text/plain; charset=utf-8')
    .set('X-Content-Type-Options', 'nosniff')
    .set('Cache-Control', 'public, max-age=3600')
    .send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
});

// Search Engine Crawlers: sitemap.xml (strictly XML, dynamically matched to verified host)
app.get(['/sitemap.xml', '/sitemap'], (req, res) => {
  const host = req.get('x-forwarded-host') || req.get('host') || 'jkssb-mcq-quiz.ai.studio';
  const baseUrl = host.includes('localhost') ? 'https://jkssb-mcq-quiz.ai.studio' : `https://${host}`;
  const xml = SITEMAP_XML.replace(/https:\/\/jkssb-mcq-quiz\.ai\.studio/g, baseUrl).trim();
  res
    .status(200)
    .set('Content-Type', 'application/xml; charset=utf-8')
    .set('X-Content-Type-Options', 'nosniff')
    .set('Cache-Control', 'public, max-age=3600')
    .send(xml);
});

// LLM Discovery: /llms.txt and /llms-full.txt (Markdown with required H1 header and links)
app.get(['/llms.txt', '/llms-full.txt'], (req, res) => {
  const rawHost = req.get('x-forwarded-host') || req.get('host') || 'jkssb-mcq-quiz.ai.studio';
  const cleanHost = rawHost.split(':')[0] || 'jkssb-mcq-quiz.ai.studio';
  const baseUrl = rawHost.includes('localhost') ? 'https://jkssb-mcq-quiz.ai.studio' : `https://${cleanHost}`;

  const llmsMarkdown = `# FlashMind JKSSB MCQ Practice Quiz & Mock Tests

> Free interactive JKSSB exam preparation platform featuring 6,296+ topic-wise multiple-choice questions (MCQs), full-length 120-question OMR mock exams with negative marking, and spaced-repetition flashcards for Jammu and Kashmir Services Selection Board (JKSSB) aspirants.

FlashMind provides syllabus-aligned practice tests and instant detailed explanations for JKSSB General Line, Finance Account Assistant (FAA), Panchayat Secretary (VLW), Sub-Inspector, Junior Assistant, and Patwari examinations.

## JKSSB Subject-Wise MCQ Quizzes

- [JKSSB J&K Special GK Quiz (History, Geography & Reorganization Act 2019)](${baseUrl}/quizzes/jk-special-gk): 1,284 practice MCQs covering Jammu & Kashmir history, physiography, rivers, lakes, climate, art, culture, and the J&K Reorganization Act 2019.
- [JKSSB Computer Fundamentals & Applications Quiz](${baseUrl}/quizzes/computer-fundamentals): 1,210 practice MCQs covering computer hardware, operating systems, MS Word, MS Excel, MS PowerPoint, DBMS, networking, and cybersecurity.
- [JKSSB General Science & Environment Quiz](${baseUrl}/quizzes/general-science): 1,004 practice MCQs covering physics, chemistry, biology, human nutrition, ecosystems, biodiversity, and environmental ecology.
- [JKSSB Accountancy & Bookkeeping Quiz](${baseUrl}/quizzes/accountancy): 815 practice MCQs covering double-entry bookkeeping, journal entries, ledger, trial balance, BRS, partnership accounts, GST, and auditing.
- [JKSSB Indian Economy & Fiscal Policy Quiz](${baseUrl}/quizzes/economics): 467 practice MCQs covering national income, RBI monetary policy, fiscal policy, inflation, five-year plans, and economic reforms.
- [JKSSB General English & Comprehension Quiz](${baseUrl}/quizzes/general-english): 433 practice MCQs covering tenses, articles, prepositions, active/passive voice, direct/indirect speech, synonyms, antonyms, and idioms.
- [JKSSB Statistics & Probability Quiz](${baseUrl}/quizzes/statistics): 372 practice MCQs covering primary and secondary data collection, central tendency, dispersion, correlation, index numbers, and vital statistics.
- [JKSSB Quantitative Aptitude & Mathematics Quiz](${baseUrl}/quizzes/mathematics): 305 practice MCQs covering percentage, ratio, profit and loss, simple and compound interest, linear equations, and mensuration.
- [JKSSB Modern History & Freedom Struggle Quiz](${baseUrl}/quizzes/history): 216 practice MCQs covering Indian National Movement, social reforms, Revolt of 1857, and constitutional developments.
- [JKSSB Current Affairs & General Knowledge Quiz](${baseUrl}/quizzes/current-affairs): 190 practice MCQs covering J&K UT developments, national schemes, international organizations, sports, and awards.

## Exam Modes & Study Tools

- [JKSSB MCQ Practice Hub (All Subjects)](${baseUrl}/): Main interactive quiz dashboard with instant answer explanations, progress tracking, and custom topic filtering.
- [JKSSB Full-Length 120-Question Mock Tests](${baseUrl}/mock-tests): Timed 120-minute OMR-style mock exams with 0.25 negative marking, section-wise score analytics, and detailed solutions.
- [JKSSB Active Recall Flashcards](${baseUrl}/flashcards): Interactive flip-card study decks for rapid revision of J&K GK, Computer shortcuts, Accountancy formulas, and Science facts.

## Discovery & Machine-Readable Resources

- [XML Sitemap](${baseUrl}/sitemap.xml): Complete list of indexable JKSSB subject quiz URLs and study modes.
- [Agentic Resource Discovery (ARD) Manifest](${baseUrl}/.well-known/ard.json): Machine-readable ARD specification manifest for AI agents and registries.
- [Robots Exclusion Policy](${baseUrl}/robots.txt): Crawler directives allowing full indexing of all public educational content.
`;

  res
    .status(200)
    .set('Content-Type', 'text/markdown; charset=utf-8')
    .set('Access-Control-Allow-Origin', '*')
    .set('X-Content-Type-Options', 'nosniff')
    .set('Cache-Control', 'public, max-age=3600')
    .send(llmsMarkdown);
});

// Agentic Resource Discovery Manifest (/.well-known/ard.json) conforming to ARD specification
app.get('/.well-known/ard.json', (req, res) => {
  const rawHost = req.get('x-forwarded-host') || req.get('host') || 'jkssb-mcq-quiz.ai.studio';
  const cleanHost = rawHost.includes('localhost')
    ? 'jkssb-mcq-quiz.ai.studio'
    : rawHost.split(':')[0].replace(/[^a-zA-Z0-9.-]/g, '');
  const baseUrl = `https://${cleanHost}`;

  res
    .status(200)
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('Access-Control-Allow-Origin', '*')
    .set('X-Content-Type-Options', 'nosniff')
    .set('Cache-Control', 'public, max-age=3600')
    .json({
      $schema: 'https://ard-spec.org/schemas/v1/ard-manifest.schema.json',
      version: '1.0.0',
      entries: [
        {
          identifier: `urn:air:${cleanHost}:education:jkssb-mcq-quiz-portal`,
          displayName: 'FlashMind JKSSB MCQ Practice Quiz & Mock Tests',
          type: 'text/html',
          description:
            'Free interactive JKSSB multiple-choice question (MCQ) practice portal with 6,296+ topic-wise questions, instant explanations, full-length 120-question mock tests, and flashcards covering J&K GK, Computer Applications, General Science, Accountancy, Economics, English, Statistics, Mathematics, and Reasoning.',
          url: `${baseUrl}/`,
          capabilities: [
            'mcq-quiz',
            'mock-tests',
            'flashcards',
            'instant-explanations',
            'exam-preparation',
          ],
          tags: [
            'jkssb',
            'jammu-and-kashmir',
            'general-knowledge',
            'accountancy',
            'computer-fundamentals',
            'mock-test',
            'mcq',
          ],
          representativeQueries: [
            'Practice free JKSSB multiple-choice questions on J&K History, Geography, and Reorganization Act 2019',
            'Take a full-length 120-question JKSSB Finance Account Assistant (FAA) or General Line mock test',
            'Study JKSSB Computer Applications, Accountancy, Statistics, and General Science MCQs with explanations',
          ],
          version: '1.0.0',
          updatedAt: '2026-04-20T00:00:00Z',
          trustManifest: {
            identity: baseUrl,
            llmsTxt: `${baseUrl}/llms.txt`,
            sitemap: `${baseUrl}/sitemap.xml`,
          },
        },
        {
          identifier: `urn:air:${cleanHost}:quiz:jk-special-gk`,
          displayName: 'JKSSB J&K Special GK MCQ Practice Quiz',
          type: 'text/html',
          description:
            '1,284 targeted JKSSB MCQs on Jammu & Kashmir History, Geography, Rivers, Lakes, Culture, Economy, and J&K Reorganization Act 2019 with detailed explanations.',
          url: `${baseUrl}/quizzes/jk-special-gk`,
          capabilities: ['mcq-quiz', 'topic-filtering', 'instant-explanations'],
          tags: ['jkssb', 'jk-gk', 'jammu-and-kashmir-history', 'reorganization-act-2019'],
          representativeQueries: [
            'JKSSB J&K Reorganization Act 2019 practice MCQs with answers',
            'Jammu and Kashmir rivers, lakes, and mountain passes quiz for JKSSB exams',
          ],
          version: '1.0.0',
          updatedAt: '2026-04-20T00:00:00Z',
          trustManifest: {
            identity: baseUrl,
          },
        },
        {
          identifier: `urn:air:${cleanHost}:quiz:mock-tests`,
          displayName: 'JKSSB Full-Length 120-Question OMR Mock Tests',
          type: 'text/html',
          description:
            'Full-length 120-question timed JKSSB mock examinations with 0.25 negative marking, section-wise score breakdown, and answer explanations.',
          url: `${baseUrl}/mock-tests`,
          capabilities: ['mock-tests', 'timed-exam', 'negative-marking-analytics'],
          tags: ['jkssb', 'mock-test', 'faa', 'vlw', 'general-line'],
          representativeQueries: [
            'Attempt a free 120-question JKSSB full-length mock test online',
            'JKSSB exam simulator with 0.25 negative marking and sectional cutoff analysis',
          ],
          version: '1.0.0',
          updatedAt: '2026-04-20T00:00:00Z',
          trustManifest: {
            identity: baseUrl,
          },
        },
      ],
    });
});

app.get('/.well-known/*', (_req, res) => {
  res.status(404).set('Content-Type', 'application/json; charset=utf-8').json({ error: 'Not Found' });
});

// Multi-turn Gemini Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, systemInstruction, model } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required and must not be empty.' });
    }

    const allowedModels = ['gemini-4-argon', 'gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    const chosenModel = allowedModels.includes(model) ? model : 'gemini-3.8-flash';

    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text || '' }],
    }));

    const config: Record<string, any> = {};
    if (systemInstruction && typeof systemInstruction === 'string') {
      config.systemInstruction = systemInstruction.trim();
    }

    let responseText = '';
    let usedModel = chosenModel;
    let lastError: any = null;

    const candidateModels = [chosenModel];
    if (chosenModel !== 'gemini-3.8-flash') {
      candidateModels.push('gemini-3.8-flash');
    }
    if (chosenModel !== 'gemini-3.1-flash-lite') {
      candidateModels.push('gemini-3.1-flash-lite');
    }

    for (const modelToTry of candidateModels) {
      let attempts = 0;
      while (attempts < 2) {
        try {
          const response = await ai.models.generateContent({
            model: modelToTry,
            contents,
            config,
          });

          responseText = response.text || '';
          usedModel = modelToTry;
          break;
        } catch (err: any) {
          lastError = err;
          attempts++;
          if (attempts < 2) {
            await new Promise((r) => setTimeout(r, 800));
          }
        }
      }
      if (responseText) break;
    }

    if (!responseText) {
      const errorMsg = lastError?.message || 'Gemini model is temporarily busy. Please try again in a moment.';
      return res.status(503).json({ error: errorMsg, details: lastError?.status });
    }

    return res.json({
      reply: responseText,
      model: usedModel,
    });
  } catch (err: any) {
    console.error('Server error in /api/chat:', err);
    return res.status(500).json({ error: err.message || 'Internal server error while communicating with Gemini.' });
  }
});

// Mounting Vite in development or serving static build in production
async function startServer() {
  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const isHmrEnabled = process.env.ENABLE_HMR === 'true';
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: isHmrEnabled ? { server: httpServer } : false,
        watch: isHmrEnabled ? {} : null,
      },
      appType: 'custom',
    });

    // Intercept /@vite/client in development to neutralize HMR WebSocket transport
    app.use((req, res, next) => {
      if (req.url && req.url.startsWith('/@vite/client')) {
        const origEnd = res.end.bind(res);
        const chunks: Buffer[] = [];

        res.write = function (chunk: any) {
          if (chunk) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          return true;
        } as any;

        res.end = function (chunk: any, ...args: any[]) {
          if (chunk) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          let body = Buffer.concat(chunks).toString('utf-8');

          body = body.replace(
            'const createWebSocketModuleRunnerTransport = (options) => {',
            'const createWebSocketModuleRunnerTransport = (options) => ({ connect: async () => {}, disconnect: async () => {}, send: () => {} }); const _unused_wsTransport = (options) => {'
          );

          res.setHeader('content-length', Buffer.byteLength(body));
          return origEnd(body, ...args);
        } as any;
      }
      next();
    });

    app.use(vite.middlewares);

    // Pre-render route-specific SEO tags & semantic HTML for all page navigations in dev
    app.use('*', async (req, res, next) => {
      try {
        const url = req.originalUrl || '/';
        const indexPath = path.resolve(process.cwd(), 'index.html');
        let template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const finalHtml = injectRouteSEOIntoHtml(template, url);
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
      } catch (e) {
        next(e);
      }
    });
  } else {
    app.use(express.static('dist', { index: false }));
    app.get('*', (req, res) => {
      const distIndexPath = path.resolve(process.cwd(), 'dist/index.html');
      if (fs.existsSync(distIndexPath)) {
        const rawHtml = fs.readFileSync(distIndexPath, 'utf-8');
        const finalHtml = injectRouteSEOIntoHtml(rawHtml, req.originalUrl || '/');
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).send(finalHtml);
      } else {
        res.sendFile('dist/index.html', { root: '.' });
      }
    });
  }

  httpServer.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port} (mode: ${process.env.NODE_ENV || 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
