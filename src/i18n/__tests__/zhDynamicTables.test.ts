import { afterEach, describe, expect, it } from 'vitest';
import { LOCALE_STORAGE_KEY, setLocale, translate } from '../index';
import { historyMessages } from '../../chronicle/history.messages';
import { quizMessages } from '../../chronicle/quiz.messages';
import { HISTORY_NOTES } from '../../chronicle/history';
import { QUIZ_QUESTIONS } from '../../chronicle/quiz';

/*
 * The Chronicle's dynamic tables keep their English copy in history.ts and
 * quiz.ts, and read translations from per-row catalogues built by
 * historyMessages()/quizMessages(): `chinese[row.id] ?? en`. That `?? en`
 * fallback happens at read time, outside defineMessages, so tsc's
 * every-English-key rule cannot see it: if the zh table loses a row, zh
 * silently renders English and every existing gate stays green. These tests
 * are the tripwire. Under zh, every rendered title, brief and prompt must
 * still contain a CJK character; a row that fell back to English fails.
 */
const hasCJK = (text: string): boolean => /[\u4e00-\u9fff]/.test(text);

afterEach(() => {
  setLocale('en');
  window.localStorage.removeItem(LOCALE_STORAGE_KEY);
});

describe('zh dynamic tables stay translated (The Chronicle)', () => {
  it('renders every history note title and brief in Chinese under zh', () => {
    // Guard against a vacuous pass if the note list itself were emptied.
    expect(HISTORY_NOTES.length).toBeGreaterThan(0);
    setLocale('zh');
    for (const row of HISTORY_NOTES) {
      const catalog = historyMessages(row);
      const title = translate(catalog, 'title');
      const brief = translate(catalog, 'brief');
      expect(hasCJK(title), `${row.id} title fell back to English: "${title}"`).toBe(true);
      expect(hasCJK(brief), `${row.id} brief fell back to English: "${brief}"`).toBe(true);
    }
  });

  it('renders every quiz prompt in Chinese under zh', () => {
    expect(QUIZ_QUESTIONS.length).toBeGreaterThan(0);
    setLocale('zh');
    for (const row of QUIZ_QUESTIONS) {
      const prompt = translate(quizMessages(row), 'prompt');
      expect(hasCJK(prompt), `${row.id} prompt fell back to English: "${prompt}"`).toBe(true);
    }
  });
});
