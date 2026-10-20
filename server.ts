import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

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

// API health endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Multi-turn Gemini Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, systemInstruction, model } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required and must not be empty.' });
    }

    // Supported models per brief: gemini-4-argon (complex), gemini-3.8-flash (general), gemini-3.1-flash-lite (fast)
    const allowedModels = ['gemini-4-argon', 'gemini-3.8-flash', 'gemini-3.1-flash-lite'];
    const chosenModel = allowedModels.includes(model) ? model : 'gemini-3.8-flash';

    // Format message history for @google/genai contents
    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text || '' }],
    }));

    const config: Record<string, any> = {};
    if (systemInstruction && typeof systemInstruction === 'string') {
      config.systemInstruction = systemInstruction.trim();
    }

    // Attempt generation with retry / fallback logic for resilience
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
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port, host: '0.0.0.0' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port} (mode: ${process.env.NODE_ENV || 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
