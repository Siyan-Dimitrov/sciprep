// Regenerates the Google Play listing screenshots into docs/store/screenshots/.
//
//   node scripts/store-screenshots.mjs
//
// It serves the existing static export in apps/web/out on a local port and
// drives it with Playwright. It never runs a build and never touches Android.
//
// PREREQUISITE: `playwright-core` is not a dependency of this repo (Playwright
// is not part of the test setup, and adding it would change the lockfile). Run
// it from a throwaway directory that has it, e.g.
//
//   mkdir %TEMP%\shots && cd %TEMP%\shots && npm i playwright-core
//   node --experimental-default-type=module C:\...\scripts\store-screenshots.mjs
//
// or simply `npm i -D playwright-core` in this repo first if that is acceptable.
// The Chromium build must match playwright-core's expected revision; the ones
// under %LOCALAPPDATA%\ms-playwright are reused automatically.
//
// PLAY REQUIREMENTS ENFORCED BELOW:
//   - each side between 320 and 3840 px
//   - aspect ratio between 9:16 (0.5625) and 16:9 (1.7778)
// A full-page capture of a phone layout is far taller than 16:9 and would be
// rejected, so every shot is a VIEWPORT capture at a deliberately chosen size:
//   phone   540x900 css  @2 = 1080x1800  (ratio 0.6000)
//   tablet 1024x768 css  @2 = 2048x1536  (ratio 1.3333)
//
// Lessons are gated behind prerequisites, so progress is seeded straight into
// localStorage (key sciprep.learner-progress.v1, see apps/web/lib/progress.ts)
// before the first paint. Nothing is written to the developer's own storage.

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { mkdir } from "node:fs/promises";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(repoRoot, "apps", "web", "out");
const OUT = path.join(repoRoot, "docs", "store", "screenshots");
const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;
const KEY = "sciprep.learner-progress.v1";

const sharp = (await import(pathToFileURL(path.join(repoRoot, "node_modules/sharp/dist/index.mjs")).href))
  .default;

let chromium;
try {
  ({ chromium } = await import("playwright-core"));
} catch {
  console.error("playwright-core is not resolvable. See the header of this file.");
  process.exit(1);
}

// --- static server ---------------------------------------------------------
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(SITE, url);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!fs.existsSync(file) && fs.existsSync(file + ".html")) file += ".html";
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 " + url);
    return;
  }
  res.writeHead(200, { "content-type": TYPES[path.extname(file)] ?? "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(PORT, r));

// --- seeded progress -------------------------------------------------------
const DONE = [
  "lesson.toolkit.measurement_units",
  "lesson.toolkit.scientific_notation",
  "lesson.toolkit.ratios_rates",
  "lesson.toolkit.graphs_change",
  "lesson.toolkit.logarithms",
  "lesson.toolkit.proportional_reasoning",
  "lesson.toolkit.experimental_design",
  "lesson.chemistry.particle_models",
  "lesson.chemistry.mole",
  "lesson.chemistry.stoichiometry",
  "lesson.chemistry.atomic_structure",
  "lesson.chemistry.bonding",
  "lesson.chemistry.molecular_shape",
  "lesson.physics.describing_motion",
  "lesson.physics.motion_graphs",
];

function seed() {
  const now = Date.now();
  const day = 86_400_000;
  const p = { version: 1, lessonVisits: {}, checkResults: {}, notes: {}, reviews: {} };
  DONE.forEach((id, i) => {
    const at = new Date(now - (DONE.length - i) * day * 1.4).toISOString();
    p.lessonVisits[id] = { blockIndex: Number.MAX_SAFE_INTEGER, lastVisitedAt: at, completedAt: at };
    p.checkResults[id] = {
      [`${id}.c1`]: { correct: true, attempts: 1, answeredAt: at },
      [`${id}.c2`]: { correct: true, attempts: 2, answeredAt: at },
    };
    // the first three read as "Review due", the rest as "Independent"
    const due = i < 3 ? now - day * (3 - i) : now + day * (i - 2) * 1.5;
    p.reviews[id] = { dueAt: new Date(due).toISOString(), intervalDays: i < 3 ? 4 : 7 };
  });
  const at = new Date(now - 3_600_000).toISOString();
  p.lessonVisits["lesson.chemistry.intermolecular_forces"] = { blockIndex: 4, lastVisitedAt: at };
  p.notes["lesson.chemistry.mole"] =
    "A mole is just a counting word, like a dozen. It only feels strange because the number is huge.";
  return p;
}

// --- driving ---------------------------------------------------------------
const browser = await chromium.launch();

async function newPage(width, height, deviceScaleFactor) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor,
    colorScheme: "light",
    reducedMotion: "reduce",
  });
  await context.addInitScript(([k, v]) => window.localStorage.setItem(k, v), [
    KEY,
    JSON.stringify(seed()),
  ]);
  return context.newPage();
}

async function settle(page) {
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
}

/** Scrolls so `selector`'s top sits `gap` css px below the sticky mobile header. */
async function frameTop(page, selector, gap = 24) {
  await page.evaluate(
    ([sel, g]) => {
      const el = document.querySelector(sel);
      if (!el) throw new Error("no element " + sel);
      const header = document.querySelector(".mobile-app-header");
      const headerH =
        header && getComputedStyle(header).display !== "none" ? header.offsetHeight : 0;
      window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerH - g));
    },
    [selector, gap],
  );
  await page.waitForTimeout(350);
}

/** Scrolls so `selector`'s bottom sits `gap` css px above the bottom nav. */
async function frameBottom(page, selector, gap = 20) {
  await page.evaluate(
    ([sel, g]) => {
      const el = document.querySelector(sel);
      if (!el) throw new Error("no element " + sel);
      const nav = document.querySelector(".mobile-bottom-nav");
      const navH = nav && getComputedStyle(nav).display !== "none" ? nav.offsetHeight : 0;
      const bottom = el.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo(0, Math.max(0, bottom - (window.innerHeight - navH - g)));
    },
    [selector, gap],
  );
  await page.waitForTimeout(350);
}

async function answerCorrectly(page) {
  const options = page.locator(".check-options button");
  const n = await options.count();
  for (let i = 0; i < n; i++) {
    await options.nth(i).click();
    await page.waitForTimeout(120);
    if (await page.locator(".check-feedback.correct").count()) return i;
  }
  throw new Error("no correct option found");
}

// The forward control is `.button.primary:not([disabled])`; selecting by text
// traps on check options containing the phrase "next to one another".
async function advance(page, steps) {
  for (let i = 0; i < steps; i++) {
    if (await page.locator(".knowledge-check").count()) await answerCorrectly(page);
    await page.locator(".lesson-controls .button.primary:not([disabled])").first().click();
    await page.waitForTimeout(220);
  }
}

async function advanceUntilCheck(page, max = 14) {
  for (let i = 0; i < max; i++) {
    if (await page.locator(".knowledge-check").count()) return i;
    await page.locator(".lesson-controls .button.primary:not([disabled])").first().click();
    await page.waitForTimeout(220);
  }
  throw new Error("no check block found");
}

const shots = [];
async function shoot(page, name) {
  const file = path.join(OUT, name + ".png");
  await page.screenshot({ path: file }); // viewport capture, never fullPage
  const m = await sharp(file).metadata();
  shots.push({
    file: name + ".png",
    width: m.width,
    height: m.height,
    ratio: +(m.width / m.height).toFixed(4),
  });
}

await mkdir(OUT, { recursive: true });

// ---------- phone: 1080x1800 ----------
{
  const page = await newPage(540, 900, 2);

  await page.goto(BASE + "/today/");
  await settle(page);
  await frameBottom(page, ".next-lesson-card", 18);
  await shoot(page, "phone-1-today");

  await page.goto(BASE + "/course/");
  await settle(page);
  await frameTop(page, ".course-app-stage", 22);
  await shoot(page, "phone-2-course-map");

  await page.goto(BASE + "/learn/enzymes-and-inhibition/");
  await settle(page);
  await advance(page, 1);
  await frameTop(page, ".block-eyebrow", 30);
  await shoot(page, "phone-3-lesson-diagram");

  await page.goto(BASE + "/learn/motion-graphs/");
  await settle(page);
  await advanceUntilCheck(page);
  await answerCorrectly(page);
  await page.waitForTimeout(250);
  await frameTop(page, ".check-prompt", 30);
  await shoot(page, "phone-4-practice-check");

  await page.goto(BASE + "/progress/");
  await settle(page);
  await frameTop(page, ".evidence-section", 22);
  await shoot(page, "phone-5-progress");

  await page.context().close();
}

// ---------- tablet: 2048x1536 ----------
{
  const page = await newPage(1024, 768, 2);

  await page.goto(BASE + "/course/");
  await settle(page);
  await frameTop(page, ".course-app-stage", 44);
  await shoot(page, "tablet-1-course-map");

  await page.goto(BASE + "/learn/enzymes-and-inhibition/");
  await settle(page);
  await advance(page, 1);
  await frameTop(page, ".block-eyebrow", 40);
  await shoot(page, "tablet-2-lesson-diagram");

  await page.goto(BASE + "/progress/");
  await settle(page);
  await shoot(page, "tablet-3-progress");

  await page.context().close();
}

await browser.close();
server.close();

// ---------- verify against real metadata ----------
const MIN = 320;
const MAX = 3840;
const LO = 0.5625; // 9:16
const HI = 1.7778; // 16:9
let bad = 0;
for (const s of shots) {
  const errs = [];
  for (const side of [s.width, s.height]) {
    if (side < MIN || side > MAX) errs.push(`side ${side} outside ${MIN}-${MAX}`);
  }
  if (s.ratio < LO || s.ratio > HI) errs.push(`ratio ${s.ratio} outside ${LO}-${HI}`);
  s.ok = errs.length ? errs.join("; ") : "PASS";
  if (errs.length) bad++;
}
console.table(shots);
console.log(bad ? `FAILED: ${bad} screenshot(s)` : "OK: every screenshot is within Play limits.");
if (bad) process.exitCode = 1;
