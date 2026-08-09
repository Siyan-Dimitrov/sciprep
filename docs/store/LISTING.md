# Google Play store listing copy

Draft for the SciPrep Android build. Everything inside a fenced block below is
the exact text to paste into Play Console. Text outside the fences is guidance
for whoever publishes and is not part of the listing.

All figures were counted from the source, not taken from `README.md`, which is
out of date (it still says "chemistry and physics" and "forty lessons across
twelve stages").

---

## 1. App name

Max 30 characters. Deliberately contains no trademarked exam name.

```app-name
SciPrep: Science Foundations
```

Rejected alternatives and why:

- `SciPrep GAMSAT Science` — a trademarked exam name in the app title is the
  single highest-risk placement on Play. Not used.
- `SciPrep Chemistry & Physics` — factually wrong since the biology strand
  landed; the course now covers biology too.

---

## 2. Short descriptions — three options

Max 80 characters each. Pick one. None mention GAMSAT: 80 characters cannot
carry a mention plus the non-affiliation disclaimer that a mention requires, and
an undisclaimed mention in the most prominent short field is the worst place to
take that risk.

Option A — plainest statement of subject and constraint:

```short-a
Offline chemistry, physics and biology course for adults new to science
```

Option B — leads with scale and the privacy property:

```short-b
53 science lessons. Fully offline, no account, progress stays on your device
```

Option C — leads with the learner it is written for:

```short-c
Learn science from first principles. No prior background assumed, no sign-in
```

---

## 3. Full description

Max 4000 characters. Play renders this as near-plain text, so the block below
uses only line breaks and simple dashes — no markdown headings, bold, or links.

```full-description
SciPrep is a self-paced science foundation course for adults with little or no recent science background. It teaches chemistry, physics and biology from first principles, alongside a quantitative reasoning toolkit covering the mathematics the sciences assume you already have.

The course is 53 lessons across 15 stages.

- Science Toolkit: measurement, quantities and units, scientific notation and powers of ten, ratios, rates and proportion, and reading tables, graphs and rates of change
- Quantitative Reasoning Toolkit: logarithms and log scales, proportional and limiting-case reasoning, experimental design
- Chemistry: particle models, the mole, atomic structure, bonding, molecular shape, intermolecular forces, stoichiometry, thermochemistry, entropy and free energy, kinetics, equilibrium, acids, bases and buffers, redox and electrochemistry, organic reactivity, separation techniques, biological macromolecules
- Physics: motion and motion graphs, forces, energy, momentum, circular motion, fluids, thermal physics and gases, waves, optics and spectroscopy, electric circuits
- Biology: cell structure, membranes and transport, enzymes, metabolism, DNA and gene expression, Mendelian genetics, meiosis and linkage, population genetics, cell signalling, immunology, physiology
- Integration studios: unfamiliar notation, experimental inference, estimation under incomplete information, chart literacy

HOW A LESSON WORKS

Each lesson is 12 to 15 short blocks in a fixed shape: concept, visual model, worked example, practice check, summary. You can stop at any block and pick the lesson up later from where you left it.

- 140 worked examples that narrate the decisions, the units, and how to check whether an answer is plausible
- 248 practice checks, each with feedback written against the particular misconception behind a wrong answer, not just a right or wrong mark
- 61 built-in diagram types drawing the graphs, structures and models in the app itself
- delayed retrieval: important ideas come back in short review sessions after a gap, rather than appearing once
- a notebook for your own working, and a per-lesson reset if you want to start a lesson again
- progress reported as broad, explainable labels tied to what you have covered and retained, not as a predicted exam score

OFFLINE AND PRIVATE

- the whole course is packaged in the app and works with no connection
- the app never contacts a server: everything it loads comes from the app itself
- no account, no sign-in, no cloud sync, no advertising
- your position, answers and notes are stored on your device and stay there
- nothing is collected and nothing is transmitted

WHAT THIS COURSE IS NOT

SciPrep teaches science only. It does not cover reasoning in humanities and social sciences, and it does not cover written communication, so it is not a complete preparation programme for any exam that tests those.

If you are working towards a graduate-entry medical admissions test such as the GAMSAT, this is a foundation course in the underlying science, not a substitute for that exam's own preparation materials, and not a guide to its format or timing.

SciPrep is an independent app. It is not affiliated with, endorsed by, sponsored by or authorised by ACER. GAMSAT is a trademark of the Australian Council for Educational Research, and is used here only to describe the kind of study this course is intended to support.

CONTENT STATUS

Every lesson in this release is labelled "unreviewed" inside the app, and that label is shown to you on the lesson. Calculations and answer keys have been checked by the authors, but the material has not yet had independent subject-matter review.

SciPrep does not promise a score, a pass, or an admission outcome. It sets out to teach the science clearly, and to be honest about what it has and has not been through.
```

---

## 4. Character counts

Measured with `node`, reading this file and extracting each fenced block by its
info string (see the command at the end of this section). Counts are of the
block contents with the trailing newline stripped.

| Field | Limit | Measured | Headroom |
| --- | --- | --- | --- |
| App name | 30 | 28 | 2 |
| Short description A | 80 | 71 | 9 |
| Short description B | 80 | 76 | 4 |
| Short description C | 80 | 76 | 4 |
| Full description | 4000 | 3809 | 191 |

Re-measure after any edit. Save this as `count.js` and run `node count.js`:

```javascript
const fs = require("fs");
const s = fs.readFileSync("docs/store/LISTING.md", "utf8");
const lim = {
  "app-name": 30,
  "short-a": 80,
  "short-b": 80,
  "short-c": 80,
  "full-description": 4000,
};
for (const [k, v] of Object.entries(lim)) {
  const m = new RegExp("^```" + k + "\\r?\\n([\\s\\S]*?)\\r?\\n```", "m").exec(s);
  const t = m[1];
  console.log(k.padEnd(18), String(t.length).padStart(5), "/", v, t.length <= v ? "ok" : "OVER");
}
```

---

## 5. Claims deliberately avoided

None of the following appear anywhere in the copy, and none should be added.

Outcome claims:

- no guarantee or suggestion of a score, score increase, percentile, pass,
  interview, or admission
- no "get into medicine", "boost your section 3 score", or similar
- no timing or difficulty equivalence with any real exam paper
- no success rate, conversion rate, or "students who used this" framing

Authority claims — every lesson is `reviewStatus: "unreviewed"` and the course
outline is `reviewState: "draft"`, so none of these can be made:

- not "expert-reviewed", "peer-reviewed", "quality assured", or "verified"
- not "accredited", "approved", "certified", or "official"
- not "written by doctors", "by academics", "by examiners", or "by tutors"
- no author credentials, institutional affiliation, or university branding
- the copy states the unreviewed status positively instead

Social proof:

- no user numbers, download counts, star ratings, or rankings
- no testimonials, quotes, reviews, or case studies
- no "most popular", "trusted by", "join thousands"

Features the app does not have, so not claimed:

- no video or audio lessons
- no community, forum, chat, or study group
- no tutor, mentor, or human support
- no adaptive AI, machine learning, or personalised algorithm — the review
  schedule is fixed-interval delayed retrieval, not adaptive
- no cloud sync, cross-device continuity, or account recovery
- no leaderboards, streaks, badges, or social features
- no glossary, no searchable reference section, no flashcard deck, no timed
  mock exam, and no question bank of exam-style papers
- no statistical inference content (there is none in the course)
- no printable or exportable material

Content-coverage claims:

- not "complete", "comprehensive", "everything you need", or "full syllabus"
- Sections 1 and 2 of the GAMSAT are stated as out of scope rather than
  quietly omitted

Privacy claims are stated only as far as they are true. A grep of `apps/web` for
`fetch(`, `XMLHttpRequest` and `axios` finds no application call, `localStorage`
appears only in `apps/web/components/learner-provider.tsx`, and the static export
in `apps/web/out` references no external host — the Google fonts are self-hosted
by `next/font`. The wording was deliberately softened from "makes no network
requests at all" to "never contacts a server", because the Next.js router does
issue same-origin requests for its own route payloads, which are files inside the
app package. Nothing leaves the device either way. If a future release adds any
outbound call — analytics, crash reporting, an update check — this paragraph and
the Data safety declaration must change before that release ships.

---

## 6. Legal and trademark risk

Is mentioning GAMSAT worth it?

On balance, yes — once, in the body of the full description, phrased as what the
course is not. The reasoning:

- The audience searches for it. A science foundation course aimed at
  graduate-entry medicine applicants that never names the exam is hard to find
  and, worse, is vague about who it is for.
- The mention is nominative: it identifies a third party's product in order to
  describe this app's relationship to it. That is the form of use least likely
  to be treated as infringement, and the sentence containing it is a disclaimer
  of scope, not a claim of association.
- The risk is concentrated in placement, not in mere presence. The dangerous
  placements are the app name, the icon, the short description, and the
  screenshots. All four are clear of it.

Risk controls applied:

- GAMSAT does not appear in the app name (30-character field), in any of the
  three short descriptions, or in the package id `com.sciprep.app`.
- It appears twice in the full description: once in the scope paragraph, once in
  the disclaimer that immediately follows it. Nothing separates them, so the
  claim and the disclaimer cannot be read apart.
- The disclaimer names ACER, states non-affiliation, non-endorsement,
  non-sponsorship and lack of authorisation, and attributes the trademark to
  ACER.
- No ACER logo, wordmark, colour scheme, or stylised GAMSAT lettering may appear
  in the icon, feature graphic, or screenshots. Any use of the word in a
  screenshot re-opens the risk this copy was written to close.
- The description does not describe the exam's structure, section weightings,
  question counts, or timing, which would suggest insider or licensed knowledge.

Residual risks to accept knowingly:

- ACER actively protects the GAMSAT mark. A takedown request under Play's
  intellectual-property process is possible even with correct nominative use;
  Google generally acts on complaints without adjudicating the merits. A
  GAMSAT-free variant of the full description should be kept ready. To produce
  it, delete the two paragraphs beginning "If you are working towards" and
  "SciPrep is an independent app", and substitute:

  "This is a foundation course in the underlying science. It is an independent
  app, is not affiliated with or endorsed by any examining body or admissions
  authority, and is not a substitute for any exam's own preparation materials."

- Play's Health and Medical and its Misrepresentation policies both bite on
  education apps that imply exam or career outcomes. The copy makes no outcome
  claim, which is the main defence.
- The app was renamed before first release, away from a working title that read
  as a university programme abbreviation. "SciPrep" makes no institutional
  reference and is descriptive of the subject. Being descriptive, it is also
  weak as a mark and may collide with existing ones, so it should still be
  trademark-cleared before launch. That check has not been done.
- The unreviewed content status is disclosed in the listing. It should also be
  visible before purchase if the app is ever paid, and the in-app label must not
  be removed while the listing says it is there.
- `gamsat_practice_test_a.pdf` sits untracked in the repository root and is not
  in `.gitignore`. It is purchased third-party material carrying personal data.
  Nothing from it informed this copy. It must not reach a build, a store asset,
  or a commit.

---

## 7. Graphics and screenshots in this folder

Every dimension below was read back from the written PNG with `sharp`, not
assumed. Regenerate with `node scripts/store-graphics.mjs` and
`node scripts/store-screenshots.mjs`; both scripts re-measure and exit non-zero
if anything falls outside the Play limits.

The Android launcher icons are generated from the same mark by
`node scripts/android-icons.mjs`, so the store icon and the on-device icon
cannot drift apart.

| File | Measured | Channels | Alpha |
| --- | --- | --- | --- |
| `icon-512.png` | 512 x 512 | 4 (32-bit) | present, fully opaque |
| `feature-graphic-1024x500.png` | 1024 x 500 | 3 | none |

The palette is taken verbatim from the `:root` custom properties in
`apps/web/app/globals.css` (`--moss-dark #15372c`, `--moss #285744`,
`--lime #d6f55f`, `--coral #ef785f`, `--paper #f4f1e8`, `--white #fffdf8`) and
the mark is the one in `apps/web/public/icon.svg`, redrawn full-bleed because
Play applies its own corner mask. Note that the Android launcher icons under
`android/app/src/main/res/mipmap-*/` are still the stock Capacitor artwork and
do not match this brand mark — worth fixing before release.

Screenshots. Phone shots are a 540 x 900 CSS viewport at device pixel ratio 2;
tablet shots are 1024 x 768 at ratio 2. Viewport captures, never full-page: a
full-page capture of these layouts is several thousand pixels tall and falls
outside the 9:16 floor.

| File | Measured | Ratio | Shows |
| --- | --- | --- | --- |
| `phone-1-today.png` | 1080 x 1800 | 0.6000 | Today screen: the resume card for lesson 3.4, its estimated 32 minutes, a Resume lesson button, and the line "Your position, notes, and checks stay on this device" |
| `phone-2-course-map.png` | 1080 x 1800 | 0.6000 | Course map: stage 00 Science Toolkit marked STAGE COMPLETE, three lesson rows with completion ticks, per-lesson minutes, and the UNREVIEWED label on each |
| `phone-3-lesson-diagram.png` | 1080 x 1800 | 0.6000 | Lesson 10.3 Enzymes and inhibition, block 2: the Michaelis-Menten saturation curve with Km, half-Vmax and the Vmax asymptote annotated, plus the paragraph that reads it |
| `phone-4-practice-check.png` | 1080 x 1800 | 0.6000 | A practice check in Motion graphs, answered: four options A to D, D selected and highlighted, and the "That model holds." feedback panel explaining why |
| `phone-5-progress.png` | 1080 x 1800 | 0.6000 | Progress, Evidence by stage: eight lessons each carrying a broad label — Review due or Independent — under the heading "Broad states, not false precision" |
| `tablet-1-course-map.png` | 2048 x 1536 | 1.3333 | Course map in the two-column layout: navigation rail with a 28% complete meter, and Science Toolkit lesson rows with descriptions and Revisit buttons |
| `tablet-2-lesson-diagram.png` | 2048 x 1536 | 1.3333 | The same enzyme kinetics lesson at tablet width: full diagram, caption, and navigation rail |
| `tablet-3-progress.png` | 2048 x 1536 | 1.3333 | Progress: 28% course completion, 30 independent checks, 1 note, and the start of the per-lesson evidence list |

Screenshot content notes for the reviewer:

- The seeded state is 15 of 53 lessons complete (28%), produced by writing the
  `sciprep.learner-progress.v1` key before first paint. It is a plausible
  mid-course state, not a claim about any real learner.
- No exam name, ACER wordmark, or stylised GAMSAT lettering appears in any
  graphic or screenshot, which is the condition section 6 depends on.
- The word UNREVIEWED is visible in three of the shots. That is deliberate and
  consistent with the CONTENT STATUS paragraph; do not retouch it out.
- "Private pilot" and "PRIVATE PILOT 28% complete" appear in the app chrome. If
  the build ships publicly rather than as a pilot, that string is in the app and
  the screenshots would need retaking after it changes.
