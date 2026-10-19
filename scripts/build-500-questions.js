import fs from 'fs';
import path from 'path';

// This script generates 500 questions per section based strictly on the JKSSB Accounts Assistant (Finance) syllabus.
// It keeps the existing curated 100 questions in each section and adds 400 high-yield syllabus questions.

const questionsDir = path.resolve('src/data/questions');

function parseExistingCards(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  // Extract between '[' and '];'
  const startIdx = content.indexOf('[');
  const endIdx = content.lastIndexOf(']');
  if (startIdx === -1 || endIdx === -1) return [];
  
  // Quick eval or parse
  try {
    // Convert exported TS array to valid JS
    const arrayStr = content.substring(startIdx, endIdx + 1);
    // Use Function to safely evaluate array of objects
    const cards = new Function(`return ${arrayStr}`)();
    return Array.isArray(cards) ? cards : [];
  } catch (err) {
    console.error('Failed to parse existing cards from', filePath, err.message);
    return [];
  }
}

console.log('Building 500 questions per section...');
