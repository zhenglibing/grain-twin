/**
 * zh smoke test: open the dev server with ?lang=zh in a HEADED Chrome
 * (SwiftShader headless cannot finish scene prep), wait out the loading
 * cover, screenshot, and report whether shell strings render in Chinese.
 * Screenshots go to the OS temp dir and are never committed.
 *
 * Adaptations from the original brief (documented for reviewers):
 * 1. The brief's cleared-check matched the English cover heading
 *    ("WARMING UP THE ROLLERS"), but under ?lang=zh the cover is translated
 *    ("正在预热磨辊"), so the check passed instantly while the cover was still
 *    up. The check now waits for the cover dialog element itself to leave
 *    the DOM, which is locale-independent.
 * 2. On a device the app judges slow, the cover latches and waits for a
 *    human choice instead of auto-clearing. When the app offers its own
 *    "open loaded scene" button (zh: 打开已加载的场景) the world is fully
 *    prepared, so the driver clicks that button to proceed.
 * 3. The '语言' probe is probed as '简体中文' instead: the language control
 *    in the Settings panel labels each locale in its own language
 *    (LOCALE_LABELS), so 简体中文 is the actual visible zh label, and 语言
 *    exists nowhere as visible text (the switcher's aria-label is not
 *    translated and aria-labels never reach innerText). Like 语言, it only
 *    renders inside the Settings panel, so the driver clicks the 设置 dock
 *    button first and waits for the panel before probing.
 */
import os from 'node:os';
import path from 'node:path';
import { acquireCaptureLock } from './lib/capture-lock.mjs';

const URL = process.env.SMOKE_URL || 'http://127.0.0.1:3000/?lang=zh';
const MAX_WAIT_MS = 150000;

const lock = await acquireCaptureLock('zh-smoke');
try {
  const puppeteer = (await import('puppeteer')).default;
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--window-size=1920,1080'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    const pageErrors = [];
    page.on('pageerror', (e) => pageErrors.push(String(e).slice(0, 300)));

    console.log('navigating to', URL);
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 180000 });

    const started = Date.now();
    let cleared = false;
    let forcedOpen = false;
    while (Date.now() - started < MAX_WAIT_MS) {
      const state = await page.evaluate(() => {
        const cover = document.querySelector('div[role="dialog"][aria-modal="true"]');
        if (!cover) return { cleared: true };
        const buttons = Array.from(cover.querySelectorAll('button'));
        const openScene = buttons.find((b) => {
          const label = (b.textContent || '').trim();
          return (
            label.includes('打开已加载的场景') ||
            label.includes('Open loaded scene') ||
            label.includes('Abrir a cena carregada')
          );
        });
        if (openScene) openScene.click();
        return { cleared: false, offered: Boolean(openScene) };
      });
      if (state.cleared) {
        cleared = true;
        break;
      }
      forcedOpen = forcedOpen || Boolean(state.offered);
      await new Promise((r) => setTimeout(r, 5000));
    }
    console.log(
      'loading cleared:',
      cleared,
      'after',
      Math.round((Date.now() - started) / 1000),
      's',
      '(forced open via app button:',
      forcedOpen,
      ')'
    );
    await new Promise((r) => setTimeout(r, 8000));

    // The language control only renders inside the Settings panel, which is
    // closed by default. Click the 设置 dock button so the panel is on screen
    // before probing; without it the probe fails on a hidden string, not a
    // missing translation.
    const openedSettings = await page.evaluate(() => {
      const candidates = Array.from(document.querySelectorAll('button, [role="button"]'));
      const byExact = candidates.find((el) => (el.textContent || '').trim() === '设置');
      const target = byExact ?? candidates.find((el) => (el.textContent || '').includes('设置'));
      if (!target) return false;
      target.click();
      return true;
    });
    console.log('opened settings panel:', openedSettings);
    await new Promise((r) => setTimeout(r, 2000));

    const text = await page.evaluate(() => document.body.innerText || '');
    const probes = ['概览', '生产', '安全', '设置', '简体中文'];
    const missing = probes.filter((p) => !text.includes(p));
    const out = path.join(os.tmpdir(), `millos-zh-smoke-${Date.now()}.png`);
    await page.screenshot({ path: out });

    console.log('probes missing:', JSON.stringify(missing));
    console.log('pageErrors:', JSON.stringify(pageErrors.slice(0, 10)));
    console.log('screenshot:', out);
    process.exitCode = missing.length === 0 && pageErrors.length === 0 && cleared ? 0 : 1;
  } finally {
    await browser.close();
  }
} finally {
  await lock.release();
}
