# Next session handoff

Last updated: 31 July 2026, after the notation-rendering fix and the Android
verification pass. Written on top of the earlier note from the same day covering
the biology strand and the correction pass.

This note exists so the next working session can start without re-deriving
context. It records what is built, what is missing, what is worth double-checking,
and the practical commands that were not obvious.

## 1. Where the course stands

The biology strand, the separation-techniques lesson, and the chart-literacy
studio all landed this session, and a correction pass ran over the older content.
Work since then has been rendering and UI only — no lesson was added, removed, or
restructured, so every figure in the table below is unchanged and was re-counted
rather than assumed.

| | Before | Added | Now |
| --- | --- | --- | --- |
| Stages | 12 | 3 | 15 |
| Lessons | 40 | 13 | 53 |
| Teaching blocks | 552 | 190 | 742 |
| Worked examples | 107 | 33 | 140 |
| Practice checks | 185 | 63 | 248 |
| Words of content | ~101,800 | ~32,900 | ~134,700 |
| Guided minutes | 1,205 | 470 | 1,675 |
| Diagram renderers | 33 | 28 | 61 |

Stages now run: 00 Science Toolkit · 01 Quantitative Reasoning Toolkit ·
02 Chemistry Foundations · 03 Atoms, Bonding, and Structure · 04 Energy, Rate,
and Equilibrium · 05 Acids, Bases, and Electron Transfer · 06 Organic and
Biological Chemistry · 07 Physics Foundations · 08 Forces, Energy, and Fluids ·
09 Thermal, Waves, Light, and Electricity · 10 Cells, Membranes, and Metabolism ·
11 Genetics and Gene Expression · 12 Signalling, Defence, and Physiology ·
13 Integration Studio · 14 Scientific Reasoning Studios.

`npm run check` is the full gate: lint, typecheck, 28 tests, content validation,
and a static build of all 53 lesson pages. The test count moved from 23 because
the notation guard described in section 2 adds five.

## 2. What was built this session

### The biology strand — stages 10 to 12

Eleven lessons, closing the gap that section 2 of the previous handoff called the
most important item. Biology is weighted 0.4 in
`content/exam-config/gamsat-2026-v1.json`, equal to chemistry and double physics,
and the course previously covered roughly half of it.

- 10.1 `lesson.biology.cell_structure` — organelles and the secretory pathway,
  built around how cisternal maturation and vesicular transport are told apart.
- 10.2 `lesson.biology.membranes_transport` — bilayer, diffusion, osmosis and
  tonicity, channels and carriers, primary and secondary active transport.
- 10.3 `lesson.biology.enzymes` — Michaelis-Menten, `Km` and `Vmax`,
  Lineweaver-Burk, competitive versus non-competitive inhibition.
- 10.4 `lesson.biology.metabolism` — glycolysis, link reaction, TCA, oxidative
  phosphorylation and chemiosmosis, fermentation, and pathway perturbation logic.
- 11.1 `lesson.biology.dna_expression` — replication, transcription, translation,
  the triplet code, reading frames, and mutation consequences.
- 11.2 `lesson.biology.mendelian_genetics` — genotype versus phenotype,
  dominance as a relationship, multiple alleles, penetrance, pedigrees.
- 11.3 `lesson.biology.meiosis_linkage` — reductional versus equational division,
  linkage, recombination frequency, three-point mapping, ordered tetrads.
- 11.4 `lesson.biology.population_genetics` — Hardy-Weinberg derived rather than
  asserted, its five assumptions, and its use as a null hypothesis.
- 12.1 `lesson.biology.cell_signalling` — receptor classes, second messengers,
  cascade amplification, dose-response curves, agonists and antagonists.
- 12.2 `lesson.biology.immunology` — innate and adaptive response, clonal
  selection, titre curves, antigenic variation.
- 12.3 `lesson.biology.physiology_systems` — homeostatic architecture, then
  thermoregulation, endocrine control, renal function, and gas exchange as
  instances of it.

### Two further gap-closing lessons

- 6.6 `lesson.chemistry.separation_techniques` — chromatography and Rf,
  two-dimensional TLC, electrophoresis and pI, differential and density-gradient
  centrifugation, the Svedberg unit. Sits in the organic chemistry stage.
- 14.4 `lesson.integration.chart_literacy_studio` — a general orientation
  procedure for an unfamiliar encoding, then ternary diagrams, contour and
  isodose plots, radar charts, and log-log plots. The final lesson in the course.

### Correction pass over existing content

Every item flagged in section 4 of the previous handoff was investigated. Two
genuine errors were fixed, four clarity edits made, and four items examined and
deliberately left alone with reasons recorded. See section 5 below for what
remains.

### Answer-key rebalance

The `correctIndex` distribution across all 248 checks was measured and found to be
badly skewed — 59 / 113 / 60 / 16, with index 1 holding 46 per cent of correct
answers and index 3 only 6 per cent. The skew predated this session. It is now
exactly 62 / 62 / 62 / 62.

Only checks whose options carry no meaningful order were permuted; 72 checks with
numeric, sequential, or semantic ladders were left alone. Every permutation was
proved to preserve the correct answer string. Three `misconception` strings that
referred to a distractor by position would have been silently corrupted by the
reshuffle and were rewritten to name the claim instead. **If you ever reorder
options again, sweep for positional references first** — they are the failure
mode that does not announce itself.

`physics-waves-fields` separately had all 19 of its answers at index 0, which was
its own exploitable tell. It is now 5 / 4 / 5 / 5.

### Unicode superscripts and subscripts rendered as empty boxes on Android

The Unicode superscript and subscript characters used throughout the science
content painted as tofu — empty boxes — in the Android app.

The cause was established by measurement rather than inference. The body and
display faces are loaded through `next/font/google` (`DM_Sans` and `Newsreader`)
with `subsets: ["latin"]`, and neither those faces nor the Android system
fallbacks carry the whole Superscripts-and-Subscripts block. Coverage was partial
and arbitrary. A character-by-character probe rendered in the live WebView gave:

- Broken: ⁺ ⁻ ⁽ ⁾ ₀ ₁ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₖ ₘ ₙ ₚ ₛ
- Fine: ⁰ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁿ ₂ ₃ ₄ ₐ ₑ ₓ, and all Greek letters, arrows, and maths
  symbols

`⁻` alone occurs 1,366 times in the lesson data. The affected characters total
roughly 2,000 occurrences across the 92 distinct non-ASCII characters the course
uses. Worth knowing before trusting any of this: ₂ and ₃ rendered only because
Android fell back to Noto Serif Tamil, which happens to carry ₂₃₄ and nothing
else. Coverage that fragile is not something to build on.

The fix rewrites the characters into markup rather than shipping a webfont, so
rendering now depends only on ASCII glyphs that every font carries, on any
device, offline.

- `apps/web/lib/notation.ts` — a pure tokenizer splitting a string into plain,
  superscript, and subscript runs and mapping each character to its ASCII
  equivalent. Exports `tokenizeNotation`, `isPlain`, `OFFSET`.
- `apps/web/components/notation.tsx` — the React adapters. `notation(text)` emits
  `<sup>` and `<sub>` for HTML. `svgNotation(text)` emits `<tspan>` with a
  smaller font size and a relative `dy`; because `dy` accumulates along an SVG
  text element, each run emits the *delta* from the previous run's baseline, so a
  subscript immediately following a superscript lands where it should.
- `apps/web/components/concept-visual.tsx` — walks the rendered SVG tree once and
  rewrites every `<text>` and `<tspan>` label, which converts all 61 diagram
  renderers without editing any of them. `<title>` is skipped, being assistive
  text that is never painted. The walk requires calling
  `ConceptVisualBase({ block })` and `ExtendedVisual({ block })` as plain
  functions rather than as JSX elements, so that it sees host elements instead of
  stopping at a component boundary.
- `apps/web/components/lesson-player.tsx` — all sixteen lesson-body render sites
  now pass through `notation()`.
- `apps/web/test/notation.test.ts` — fails if any lesson string, or any diagram
  source file, contains a risky character the tokenizer cannot rewrite. This is
  the guard against a future author reintroducing the bug. See the authoring
  constraint in section 7.

### Per-lesson reset

The Progress page already offered a global "Reset local progress". A narrower
reset now sits alongside it.

- `resetLesson(lessonId)` in `apps/web/components/learner-provider.tsx` clears
  that lesson's position, check answers, and review schedule. It deliberately
  keeps the learner's notebook notes, which are their own work rather than
  progress state.
- A "Reset this lesson" button and a "Reset everything" link through to the
  Progress page sit under the lesson controls in `lesson-player.tsx`, styled by
  `.lesson-reset-row` in `apps/web/app/learner.css`.
- Both resets are gated behind `window.confirm`.

### Android verification

The app was built and driven on the `Pixel_7_API_36` emulator. All 13 new lessons
were walked block by block over the DevTools protocol. All 28 new diagram
renderers paint: zero fall-throughs to the generic axes fallback, and zero
console errors. Section 8 records the operational gotchas that cost time.

## 3. What is still missing

The biology gap is closed. What remains is smaller and mostly editorial.

- **Sections 1 and 2 of the exam** (Reasoning in Humanities and Social Sciences,
  and the written task) remain out of scope by design — SciPrep is a science
  course. Worth stating explicitly to a learner so expectations are right.
- **No statistical inference anywhere in the course.** Flagged while writing
  population genetics: there is no chi-squared test, no significance testing, and
  `lesson.toolkit.proportional_reasoning` does not supply one. The
  Hardy-Weinberg lesson therefore judges departure from equilibrium against a √E
  sampling rule of thumb, labelled as such. If formal inference is ever added,
  revisit that block.
- **The course is still described as "chemistry and physics"** in `README.md`,
  `docs/course-blueprint.md`, `docs/implementation-plan.md`, the course page
  header, and the outline title `SciPrep Chemistry and Physics Foundations`. With
  eleven biology lessons this is now wrong. Renaming is a product decision that
  was deliberately not made unilaterally.

## 4. Content review status

**Every one of the 53 lessons carries `reviewStatus: "unreviewed"`** and the
course outline is `reviewState: "draft"`. Nothing has had subject-matter review.
`docs/course-blueprint.md` describes what a reviewer must verify.

The new content was verified for internal correctness by its authors: every
worked calculation recomputed and every `correctIndex` re-derived independently
rather than trusted. Notable checks that came out exact — the Na⁺/K⁺-ATPase K⁺
term derived two ways, plasma osmotic pressure landing on the standard 7.4 atm, a
three-point cross with interference 0.29, an exhaustive sweep of all 64 codons
confirming that no sense codon pair differs only at the second position, and a
cascade gain of 1.0 × 10⁹ cross-checked by summing logarithms.

That is a correctness sweep, not a pedagogical or editorial review.

## 5. Points a reviewer should look at

Carried forward, still open:

- Mean bond enthalpies in `lesson.chemistry.thermochemistry` are literature
  averages; the caveat is present and the values are internally consistent with
  `organic-chemistry.ts`.
- "Rate roughly doubles per 10 K" in `lesson.chemistry.kinetics` is a rule of
  thumb. It was reviewed and judged adequately hedged; the implied Eₐ for exact
  doubling over 298 to 308 K is 52.9 kJ mol⁻¹.
- The thalidomide example in `lesson.chemistry.isomerism` keeps its racemisation
  caveat. Reviewed and left: the caveat follows the teaching point rather than
  undercutting it.
- **Logarithms of dimensioned quantities.** House convention quotes `Ka` and `Kw`
  with units. The clause explaining that concentrations are divided by the
  standard 1 mol dm⁻³ is stated only for pH in `acids_bases`, and is never
  extended to `pKa = −log₁₀Ka` or `ΔG° = −RT ln K`. Never contradicted anywhere,
  but never extended either. A house-style decision.

New, from this session:

- **`lesson.biology.cell_structure` does not declare a winner** between cisternal
  maturation and vesicular transport; it says both operate and narrows what each
  explains. Deliberate, since the lesson teaches how a model is tested, but it is
  the intellectual centrepiece and deserves a view.
- **The lysosome worked example omits the membrane-potential term** by design and
  says so in its final step, presenting 14.2 kJ mol⁻¹ as a floor.
- **`lesson.biology.physiology_systems` carries four required topics in checks
  rather than concept blocks** — gas exchange, respiratory control by CO₂, the
  bicarbonate link, and digestion. Consistent with teaching the architecture and
  making each system an instance, but a judgement call.
- **Two figures are deliberately hedged against naive calculation**: the
  intestinal surface area computes to 360 m² from the model's own factors against
  a measured order of 30 m², and the renal glucose threshold is given as near
  10 mmol dm⁻³ rather than the 16 that Tm ÷ GFR returns. Both say so in the text.
- **Three-point cross data are constructed, not sampled** — reciprocal pairs are
  exactly equal and the double-crossover shortfall is exactly twice the DCO
  frequency, so the data are cleaner than real data would be.
- **`linkage_map` shows only the 2:2:2:2 second-division ascus pattern.** The
  equally valid 2:4:2 arrangement is absent, which could imply only one MII
  pattern exists.
- **`vesicle_traffic` cannot show cisternae *becoming* the next compartment.** A
  still diagram carries the maturation model in its note more than in its
  geometry. Look at this one on the rendered page.

## 6. Repository hygiene — read before committing

`gamsat_practice_test_a.pdf` still sits **untracked in the repository root and is
not covered by `.gitignore`**. It is a purchased ACER practice paper carrying a
personal watermark (a name, date of birth, and email address). The independence
policy in `README.md` states that official, purchased, leaked, or recalled GAMSAT
material must never be added to the repository or used as source material.

Recommended: move it outside the working tree, or add it to `.gitignore`, before
any `git add -A`. No question, passage, or data set from it has been copied,
adapted, or paraphrased into the course. All scenarios in the new lessons are
original constructions.

A `.playwright-mcp/` directory of console logs and page snapshots was written to
the repository root by a browser session during this work and has been removed.
It is also not in `.gitignore`, and will reappear if the MCP browser is used from
the repository root again.

Nothing has been committed. `git status` shows the whole expansion, both
sessions' worth, as uncommitted modifications and new files.

## 7. How the content system works

Read this before authoring new lessons.

### Layout

- `apps/web/lib/lesson-types.ts` — the `Lesson`, block, and `VisualName` types.
- `apps/web/lib/lessons/*.ts` — one module per course stage, pure data, each
  exporting a `Lesson[]`. Fourteen modules today.
- `apps/web/lib/course-content.ts` — imports those modules, builds the ordered
  `pilotLessons` array and `courseStages`, and re-exports the types so existing
  import sites keep working.
- `apps/web/components/concept-visual.tsx` — the original nine diagram branches;
  anything else delegates to `concept-visual-extended.tsx`, which holds 24 more
  and then chains to `concept-visual-biology.tsx`, `-genetics`, `-physiology`,
  and `-techniques` before falling back to generic axes. Each chained renderer
  returns `null` for a name it does not own. `concept-visual.tsx` also walks the
  finished SVG tree and rewrites every label through `svgNotation`.
- `apps/web/lib/notation.ts` and `apps/web/components/notation.tsx` — the
  superscript and subscript rewrite described in section 2.
- `apps/web/test/course-content.test.ts` — structural invariants.
- `apps/web/test/notation.test.ts` — the notation guard.

### Adding a stage

1. Write `apps/web/lib/lessons/<stage>.ts` exporting a `Lesson[]`.
2. Import it in `course-content.ts`, spread it into `pilotLessons` in
   pedagogical order, and add a `courseStages` entry. Stage `lessonIds` are
   derived by filtering on `stageId`, so they stay in sync automatically.
3. Give each summary block a `nextLessonId` equal to the id of the lesson that
   actually follows in `pilotLessons`. Mismatches here are easy to introduce when
   a new stage is inserted between two existing ones. Inserting biology required
   repairing two such links.
4. Add any new `VisualName` to the union **and** a matching renderer branch.
   A missing branch silently falls through to the generic axes.
5. Regenerate `content/course-outlines/sciprep-foundations-v1.json` so its lesson
   list, prerequisites, and `estimatedMinutes` match the app. These two
   representations are not linked by any code. They were verified in exact
   agreement at the end of this session.
6. If the new stage introduces a discipline, add it to `Discipline` in
   `lesson-types.ts` **and** to the stage discipline enum in
   `packages/content-schema/src/course.ts`, which will otherwise reject the
   outline.
7. Run `npm run check`.

### Ordering constraint

The test suite enforces that no lesson precedes its own prerequisite. This is why
biology sits after physics rather than after organic chemistry as originally
planned: `membranes_transport` depends on the membrane potential taught in
`lesson.physics.electricity`, and `physiology_systems` on `physics.fluids` and
`physics.thermal`.

### Authoring quality bar

12 to 15 blocks in the order concept → visual → concept → worked → check →
concept → worked → check → check → transfer check → summary; British and IUPAC
spellings; proper typographic characters rather than ASCII fallbacks; no markdown
syntax inside strings, since the renderer prints them as-is; exactly four distinct
options per check with a verified `correctIndex`; distractors that encode real
misconceptions; and every calculation checked rather than asserted.

**Calibrated prose scale** — measure before you write. House practice is a median
of about 80 words per concept paragraph (range 65 to 110) and 2,900 to 3,750
words per lesson. Content written this session runs 3,800 to 4,700 words per
lesson, roughly 10 to 25 per cent above the previous maximum, because the
authoring spec gave a paragraph target of 120 to 200 words that did not match the
existing files. Three authors independently flagged the inconsistency. If
uniformity matters, the new lessons could each lose 300 to 600 words from check
explanations without touching a verified number.

Four non-obvious constraints:

- **Superscripts and subscripts must be known to the tokenizer.** Content may
  keep using Unicode superscripts and subscripts — they read well in the source
  and nothing about them is deprecated — but they are not painted as themselves
  on a device. Every one is rewritten into `<sup>`/`<sub>` with ASCII characters,
  so **any new character must be present in the maps in
  `apps/web/lib/notation.ts`**, in diagram labels as well as in lesson strings.
  `apps/web/test/notation.test.ts` fails if it is not. Add the character to the
  map rather than working around the test; an unmapped character is one that
  renders as an empty box on a device.
- **React key collisions.** The renderer uses the strings themselves as keys
  (`key={paragraph}`, `key={option}`, `key={point}`, `key={step.label}`), so those
  must be distinct within a block. The test suite enforces this.
- **Block ids must be globally unique.** Prefix every id with a short lesson tag.
- **Positional references in prose.** Some `explanation` and `misconception`
  strings name a distractor as "the first option" or "the last option". These
  break silently if options are ever reordered. Prefer naming the claim.

### Diagram constraints

- `viewBox` is `0 0 640 280` for every diagram. Nothing may overflow.
- The stylesheet owns all colour; no `fill` or `stroke` colour attributes.
- Available classes are `visual-axis`, `visual-tick`, `visual-label`,
  `visual-large-label`, `visual-line`, `visual-guide`, `visual-fill`,
  `visual-fill-alt`, `visual-card`, `visual-marker`, `visual-arrow`,
  `visual-particle`, `visual-motion`, `visual-block`, `visual-container`, plus
  the modifiers `active`, `coral`, `flat`, and `reverse`.
- **`visual-arrow` has `marker-end: none`**, so it renders as a headless bar.
  `concept-visual-biology.tsx` defines a local `Arrow` helper that draws the
  shaft plus two barbs of the same class; `concept-visual-physiology.tsx` uses
  the same helper. Reuse it rather than hand-rolling polygons.
- Render and screenshot new diagrams before declaring them done. Every diagram
  agent this session found real clipping or collision defects that way, and none
  were visible by inspection.

### Known architectural wart

`packages/content-schema` defines a rich nine-block `lessonSchema` with
provenance, knowledge components, and difficulty axes. **Nothing uses it.** The
CLI validates only `content/course-outlines/` and `content/exam-config/`, and the
app renders a simpler five-block model from TypeScript literals. Reconciling the
two is a real decision that has now been deferred three times, and the biology
strand has roughly doubled the content that would need migrating.

## 8. Commands that were not obvious

```bash
# Full quality gate: lint, typecheck, tests, content validation, static build
npm run check

# Android build — BOTH env vars are required; the Gradle build fails with
# "SDK location not found" without ANDROID_HOME, and there is no local.properties
npx cap sync android
cd android
ANDROID_HOME="$LOCALAPPDATA/Android/Sdk" \
  JAVA_HOME="C:/Program Files/Android/Android Studio/jbr" \
  ./gradlew.bat assembleDebug

# Emulator — adb is not on PATH
ADB="$LOCALAPPDATA/Android/Sdk/platform-tools/adb.exe"
"$LOCALAPPDATA/Android/Sdk/emulator/emulator.exe" -list-avds
"$LOCALAPPDATA/Android/Sdk/emulator/emulator.exe" -avd Pixel_7_API_36
"$ADB" devices                          # note the serial; see below
"$ADB" -s <serial> install -r app/build/outputs/apk/debug/sciprep-debug.apk
"$ADB" -s <serial> shell am start -n com.sciprep.app/.MainActivity
```

Three things about `adb` that cost real time:

- It is not on `PATH`. It lives at
  `$LOCALAPPDATA/Android/Sdk/platform-tools/adb.exe`.
- Git Bash rewrites any argument that looks like a POSIX path, so `/sdcard/...`
  arrives at the device as a Windows path. Drive `adb` from PowerShell for
  anything involving a device path.
- A second, unrelated emulator may already be attached. Always pass
  `-s <serial>` rather than relying on there being one device.

### Driving the app's WebView for testing

Lessons are locked behind prerequisites, so a new lesson deep in the course
cannot be reached by tapping. Debug builds expose the WebView over the Chrome
DevTools protocol, which makes it straightforward to open any lesson, step
through its blocks, answer checks, and confirm diagrams render:

```bash
PID=$(adb shell pidof com.sciprep.app)
adb forward tcp:9222 localabstract:webview_devtools_remote_$PID
curl -s http://127.0.0.1:9222/json      # find the page target's webSocketDebuggerUrl
```

Node 22 has a global `WebSocket`, so a short script can send `Page.navigate` and
`Runtime.evaluate` with no dependencies. Two gotchas: navigate to the explicit
`/learn/<slug>/index.html` rather than the directory URL, because the directory
form falls back to the root page and `NativeEntryRouter` then redirects to
`/today`; and clear `localStorage` first, or the lesson resumes at its saved
block rather than starting at block 1.

One more, found while walking the 13 new lessons: the forward control is
`.button.primary:not([disabled])`. Selecting buttons by text containing "next"
traps the walker on a check option containing the phrase "sit next to one
another".

## 9. Suggested order of work next session

1. Move or ignore the practice-test PDF, then commit. Two sessions of work is
   now uncommitted, and the notation fix touches enough files that leaving it
   uncommitted alongside everything else is getting expensive.
2. Decide the naming question in section 3 — the course is no longer "chemistry
   and physics".
3. Decide the `content-schema` question in section 7.
4. Decide whether to compress the new lessons to house prose scale (section 7).
5. Begin subject-matter review of all 53 lessons, starting with section 5.

Done since the last note, so no longer on this list: seeing the 28 new diagrams
in situ inside a lesson rather than only as individual screenshots. They were
walked on the emulator and all of them paint. What that pass did *not* settle is
whether each diagram teaches what it should — the open questions in section 5
about `linkage_map` and `vesicle_traffic` are judgements about the geometry, not
about whether it renders, and they stand.
