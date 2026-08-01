# Accessibility audit — learner interface

Audited 1 August 2026 against **WCAG 2.2 Level AA**.

Method: the static export at `apps/web/out` was served locally and driven in
Chromium. Findings below come from the live accessibility tree, computed styles,
geometry measured at 320 px and at 200 % text scale, and axe-core 4.x run over
`/today/`, `/course/`, `/progress/`, `/notebook/`, `/review/`, and three lesson
pages. Contrast ratios are computed from resolved token values with alpha
composited against the actual backdrop, not read off a palette. Where a claim is
about assistive-technology *behaviour* rather than markup it is labelled as such.

No app code, CSS, or content was changed.

---

## Verdict

**Not shippable as accessible in its current state.** Three barriers are severe
enough that a screen-reader user cannot complete a lesson, and a fourth means a
low-vision user cannot read the course map.

The uncomfortable part is that the app looks clean to tooling. axe-core reports
**one** rule violation across the whole learner interface (`color-contrast`), and
zero for images, names, roles, forms, or structure. Every one of the 64 diagrams
has `role="img"` and a non-empty `aria-label`, so every automated checker will
pass them. The three worst barriers in this report are all invisible to automated
testing, and two of them were introduced by changes that were correct on their own
terms.

What is genuinely good, and worth saying: `lang="en"` is set; the viewport meta is
`width=device-width, initial-scale=1` with no `user-scalable=no`; there is no
`outline: none` anywhere, so every focusable control has *some* focus indicator;
tab order matches visual order on both layouts; the desktop sidebar is
`display: none` at mobile width so there is no phantom duplicate navigation in the
tab sequence; there are no keyboard traps, no timed interactions, and no
autoplaying motion; both progress bars carry correct `role="progressbar"` with
live `aria-valuenow`; reflow at 320 px at default text size is clean — zero
horizontal overflow, zero clipped elements, across all 30 blocks of a lesson.

The problems are concentrated, not diffuse. Roughly six changes fix most of this.

### The three most serious barriers

1. **Advancing a block destroys keyboard focus and announces nothing** — the
   whole lesson player remounts on every Continue press.
2. **All 64 diagrams throw away their own alt text.** The `aria-label` outranks
   the `<title>`, `role="img"` prunes every label inside, and the caption that
   replaces them is commentary in ~56 of 64 cases and describes a *different
   diagram* in at least 8.
3. **The notation rewrite flattens exponents into ordinary digits** in the text
   that assistive technology reads: `10⁻³` → `10−3`, `10⁰` → `100`,
   `6.022 × 10²³` → `6.022 × 1023`. Correct markup; wrong result on the target
   platform.

---

## Genuine barriers

Ordered most severe first. "Experience" describes what a real user meets, not what
the spec says.

| # | Location | WCAG 2.2 | Sev | What a real user experiences | Suggested fix |
|---|---|---|---|---|---|
| 1 | `apps/web/components/lesson-player.tsx:364` (`key={…-${initialBlockIndex}}`), driven by `:215-220` | 2.4.3 Focus Order (A); 4.1.3 Status Messages (AA) | **Critical** | Measured: pressing *Continue* moves `document.activeElement` from the button to `<body>`. The key on `ReadyLessonPlayer` includes the saved block index, which `setLessonPosition` changes, so React unmounts and remounts the entire player on every advance. A keyboard user is thrown back to the top of the tab ring after every block and must re-traverse the shell to reach the next control — 13 times for a 13-block lesson. A screen-reader user hears *nothing at all*: no route change, no live region, no focus move. The block silently swapped underneath them. | Do not key the player on the block index. Then, on advance, move focus programmatically to the new block heading (`tabindex="-1"` + `.focus()`), which both announces the new title and puts the keyboard where the content is. |
| 2 | `apps/web/components/lesson-player.tsx:364` (same remount) | 3.3.4 / data loss (not a strict AA SC) | **Critical** | Measured: text typed into the lesson notebook and not yet blurred is discarded when *Continue* is pressed. The `<textarea>` is uncontrolled (`defaultValue`, `onBlur` save, `lesson-player.tsx:172-178`) and is destroyed by the remount. A learner who types a note and taps Continue on a touch device — where blur is not guaranteed — loses the note with no warning. | Same fix as #1. Optionally save on `change` as well as `blur`. |
| 3 | `apps/web/components/concept-visual.tsx:58-62` and the four identical copies at `concept-visual-extended.tsx:44-48`, `concept-visual-biology.tsx:63-67`, `concept-visual-genetics.tsx:44-48`, `concept-visual-physiology.tsx:142-146`, `concept-visual-techniques.tsx:170-174` | 1.1.1 Non-text Content (A) | **Critical** | `aria-label` takes precedence over the SVG `<title>` in accessible-name computation. Verified in the live accessibility tree: for the `powers` diagram the exposed name is the caption, and the string *"A number line showing powers of ten from ten to the minus three to ten cubed"* appears **nowhere** in the tree. All 64 `<title>` elements are dead — 64 hand-written descriptions no screen-reader user will ever hear. The handoff's claim that `<title>` is "assistive text" is false; it is a mouse-hover tooltip and nothing else. | Remove `aria-label` from the shared `common` object and let the existing `<title>` become the name. That single deletion converts 64 dead strings into 64 live ones without editing a renderer. |
| 4 | Same `common` object; `role: "img"` | 1.1.1 (A) | **Critical** | `role="img"` has *presentational children*, so the entire SVG subtree is pruned. Every `<text>` label is lost. That is the diagram's content: `punnett` (`concept-visual-genetics.tsx:220-306`) loses all 16 genotype cells and the 9:3:3:1 ratio; `chemiosmosis` (`concept-visual-biology.tsx:533-607`) loses `O₂ + 4e⁻ + 4H⁺ → 2H₂O`, "ATP synthase", "H⁺ pumped out" and ~20 more; `ternary` (`concept-visual-techniques.tsx:480-521`) loses `A = 50 %`, `B = 30 %`, `C = 20 %`. Several diagrams carry a full teaching sentence found nowhere else in the lesson, e.g. `concept-visual-extended.tsx:868-870` "equal shaded areas mean equal impulse, so equal change in momentum". A blind learner gets one sentence in place of the diagram. | Add a `<desc>` per renderer carrying the reading of the diagram, referenced by `aria-describedby`, or add a visually-hidden text equivalent next to the figure. This needs authoring, not just plumbing. |
| 5 | Captions used as accessible names, e.g. `apps/web/lib/lessons/physics-waves-fields.ts:704`, `:844`, `:1046`; `physics-mechanics.ts:899`; `biology-genetics.ts:824` | 1.1.1 (A) | **Critical** | 76 visual blocks share 64 renderers, and 12 blocks reuse a renderer with a caption written for different content. Because the caption *is* the accessible name, these are **mislabelled images**, not merely weak ones. `lesson.physics.optics` / `spectrum` announces a radio-to-gamma electromagnetic spectrum; the renderer (`concept-visual-extended.tsx:1019-1055`) draws a UV-vis absorbance plot. `lesson.physics.fluids` / `fluid` announces equal pressure at equal depth; the renderer (`concept-visual-extended.tsx:902-926`) draws continuity through a narrowing pipe. `lesson.biology.meiosis_linkage` announces "12 + 7 = 19, measured value is less"; the renderer (`concept-visual-genetics.tsx:490-504`) draws "12 + 8 = 20, so the distances add". Sighted and non-sighted learners are told opposite things. Of 64 captions, roughly 8 stand alone as text equivalents. | Audit the 12 reused-renderer blocks first — those are factual errors visible to sighted users too. Then treat `<title>`/`<desc>` as the alt text and let the caption go back to being commentary. |
| 6 | `apps/web/lib/notation.ts:64-91`; `apps/web/components/notation.tsx:16-31` | 1.3.1 Info and Relationships (A) — see note | **Critical on Android** | The rewrite is semantically correct: Chromium exposes `<sup>` as `role=superscript` (confirmed in the tree). But the **text** the accessible name resolves to is flat. Measured from the running app: `"5.0 × 10−3 mol dm−3"`, `"The molar mass of H2O is 18.0 g mol−1"`, `"g ÷ (g mol−1) = mol"`, and inside the `powers` diagram the labels `10−3, 10−2, 10−1, 100, 101, 102, 103`. Note `10⁰` becomes the string `100`. Across the lesson source there are 3,713 superscript and 1,267 subscript characters; **343** put a digit directly after a digit (`10⁴`→`104`, `6.022 × 10²³`→`6.022 × 1023`) and 1,370 put a digit after a letter (`H₂O`→`H2O`, `Kₘ`→`Km`). Chemical formulae survive: "H2O" is heard as "H two O" and is fine. **Units and exponents do not**: "mol dm minus three" and "ten to the power zero" heard as "one hundred". TalkBack — the AT on the shipping platform — does not surface the superscript/subscript roles, so on Android there is no cue that anything was lost. | Do not revert the rewrite; the rendering fix is sound and the Unicode it replaced was no better for AT. Add an accessible text alternative on the shifted runs — e.g. wrap a superscript run with `aria-label="to the power of −3"`, or emit a visually-hidden "to the power" / "sub" span. This is the change that most needs a human decision, because it interacts with 4,980 authored characters. |
| 7 | `apps/web/app/globals.css:157` (`outline: 3px solid var(--coral)`) | 1.4.11 Non-text Contrast (AA) | **Serious** | Coral `#ef785f` against the surfaces it is actually drawn on: **2.75:1** on `.lesson-card` `#fffdf8`, **2.56:1** on the shell `#f7f5ee`, **2.47:1** on paper `#f4f1e8`, **2.28:1** on `.data-control` `#ece8dc`, **2.27:1** on the lime primary button `#d6f55f`. Threshold is 3:1. It clears 3:1 on exactly one backdrop, the moss-dark hero card (4.66:1). Every keyboard focus indicator in the app fails. Compounding it, only `.button` and `.nav a` have an authored `:focus-visible` rule — the check answer buttons, the notebook textarea, the sidebar links and the mobile bottom-nav links fall back to the UA default ring. | Darken the focus colour or use a two-tone ring (dark inner + light outer) so it works on every surface, and apply it with a `:focus-visible` selector that covers all interactive elements, not two class names. |
| 8 | `apps/web/components/lesson-player.tsx:88-93` (`role="status"` on a node created at the same moment as its content) | 4.1.3 Status Messages (AA) | **Serious** | The `.check-feedback` element does not exist in the DOM until the answer is clicked; it is inserted *with* its text, and `.check-hint` is removed in the same commit. A live region that is inserted rather than updated is announced inconsistently — commonly missed by NVDA, JAWS and TalkBack. Measured: `[role=status]` count on the page before answering is **0**. A screen-reader user taps an answer and, in the common case, hears nothing; the explanation and the misconception repair — the pedagogical core of the check — is silent. | Render an always-present empty `<div role="status">` and write the feedback text into it, or move focus to the feedback container on answer. |
| 9 | `apps/web/components/lesson-player.tsx:66-86`; `apps/web/app/learner.css:887-895` | 1.4.1 Use of Colour (A); 4.1.2 Name, Role, Value (A) | **Serious** | Which option was chosen and which was correct is carried **only** by `background` and `border-color`. There is no `aria-pressed`, no `aria-checked`, no `aria-invalid`, no icon, no text. Measured after answering wrongly: the correct button's only change is `class="correct"`. A screen-reader user navigating back over the four options after a wrong answer cannot tell which one was right. The two state borders are also only **1.26:1** apart from each other (`#799239` vs `#ef785f`), and the wrong-state border is **2.37:1** against its own fill. | Make the options a radio group (`role="radiogroup"` + `aria-checked`, or real radios), and add a text or shape marker — "correct answer" / "your answer" — alongside the colour. |
| 10 | `apps/web/app/learner.css:520-522`, `486-492`, `412-416`, `161-168`, `563-567`, `616-620`, `1177-1183`, `1234-1237`; `globals.css:219-226`, `468-474`, `500-504` | 1.4.3 Contrast (Minimum) (AA) | **Serious** | axe reports **118 contrast failures on `/course/` alone**, in four distinct pairs: `#ef785f` on `#fffdf8` = **2.75:1** (53 nodes, the "12 min · unreviewed" lesson metadata), `#999c94` on `#fffdf8` = **2.74:1** (49 nodes, `.locked-label` "Prerequisite first" — the *only* explanation of why a lesson cannot be opened), `#ef785f` on `#f7f5ee` = **2.55:1** at 24 px (15 nodes, stage numbers; fails even the 3:1 large-text threshold), and the same at 11 px bold for `.app-eyebrow`. `--coral` never reaches 4.5:1 on any light surface in the system; its best case is 2.75:1. On a phone in daylight this is the course map's entire secondary layer. | Stop using `--coral` as a text colour. A darkened variant around `#9d402f` — already in the system at `learner.css:1013` and `1345` — reaches 5.34:1 and 6.44:1. |
| 11 | `apps/web/app/learner.css:728-734` (`.visual-line.coral` vs `.visual-line.flat`), used together at `concept-visual.tsx:295-297`, `concept-visual-biology.tsx:417-419`, `concept-visual-genetics.tsx:607-610`, `concept-visual-physiology.tsx:280-282` | 1.4.1 (A); 1.4.11 (AA) | **Serious** | Chart series are separated by hue alone — identical stroke width 6, no dash pattern, no markers, no direct labels. Coral `#ef785f` against grey `#8a8f89` is **1.18:1**: in greyscale, or with a red-green deficiency, the two lines are the same line. Moss vs grey is 2.51:1, moss vs coral 2.96:1 — all three pairs below the 3:1 needed for adjacent graphical objects. `concept-visual-techniques.tsx:607-614` (`radar`) has a legend whose *only* key is a colour swatch. `concept-visual-genetics.tsx:513-534` (`linkage_map`) distinguishes the 4:4 from the 2:2:2:2 ascus pattern — the whole point of the panel — by two fill colours with no key anywhere. | Add a dash pattern or marker shape per series and label lines directly. |
| 12 | `apps/web/components/app-shell.tsx:34-38`, `:80-84` | 1.4.1 (A); 4.1.2 (A) | **Moderate** | The active navigation item is marked with `className="active"` and nothing else — measured: `aria-current` is absent from every nav link on both layouts. A screen-reader user has no way to know which section they are in. The visual cue is also weak: the sidebar active background is 1.31:1 against the sidebar, and the mobile active text colour is 1.63:1 against the inactive colour. | Add `aria-current="page"` to the active link in both navs. |
| 13 | `apps/web/components/app-shell.tsx:53-96` | 2.4.1 Bypass Blocks (A) | **Moderate** | No skip link. On desktop, six tab stops (brand + five nav links) precede the lesson content on every page. Measured first three focusables: brand, "Today", "Course". Mobile is better — two stops — because the bottom nav sits last in the DOM. | Add a "Skip to content" link as the first focusable element, targeting the `<main>`. |
| 14 | `apps/web/components/lesson-player.tsx:286`, `:335-343`, `:163-182` | 1.3.1 (A); 2.4.6 Headings and Labels (AA) | **Moderate** | Measured heading outline of a lesson page: **one heading total** — `h1` = the current *block* title. The lesson's own title appears nowhere as a heading (only inside the notebook's `aria-label`). The rail's "By the end" and "Private notebook" are `<span>` and `<strong>`, so heading navigation reaches neither. On a page carrying an objectives list, a diagram, a worked example and a notebook, heading navigation offers exactly one destination, and its text changes under the user on every advance. | Make the lesson title the `h1` and the block title an `h2`; promote the rail's two section labels to headings. |
| 15 | `apps/web/app/(learner)/review/page.tsx:82-93` | 2.4.3 (A); 4.1.3 (AA) | **Moderate** | "Reveal and record" injects `.review-reveal` above itself *and* disables itself in the same commit. Disabling the focused element blurs it to `<body>`, so focus is lost, and the revealed content is in no live region, so nothing is announced. The learner presses the button and, as far as assistive tech is concerned, nothing happens. | Keep the button enabled with changed text, or move focus to the revealed content; wrap the reveal in a status region. |
| 16 | `apps/web/app/learner.css:1417-1454`, `:1395`; measured at 320 px with root font-size 200 % | 1.4.4 Resize Text (AA); 1.4.10 Reflow (AA) | **Moderate** | At default text size, 320 px reflow is clean (0 overflowing elements across a whole lesson). At 200 % text on 320 px the layout mostly holds, but the fixed bottom navigation collapses: the five labels run together with no gaps and "Progress" is clipped at the right edge, `documentElement.scrollWidth` 311 vs `clientWidth` 305, producing a horizontal scrollbar. The `.pilot-pill` in the sticky header overlaps the brand. With the page scrolled to the bottom, the notebook `<textarea>` sits underneath the fixed nav despite the 92 px `padding-bottom`. This is the exact configuration the target user is in: adult, phone, system font scaled up. | Let the bottom nav wrap or drop labels below a threshold; make the bottom padding depend on the nav's measured height rather than a fixed 92 px. |
| 17 | `apps/web/app/learner.css:281`, `:580`, `:92` | 1.4.11 (AA) | **Moderate** | Progress-bar *fills* pass comfortably (6.16–6.85:1) but the *tracks* are 1.22:1, 1.23:1 and 1.54:1 against their surroundings. The unfilled remainder is invisible, so the proportion the bar exists to communicate cannot be read visually. The value is available to AT via `aria-valuenow`, so this is visual-only. | Darken the track by roughly one step. |
| 18 | `apps/web/app/learner.css:871`, `:1090`, `:1006`; `globals.css:171` | 1.4.11 (AA) | **Moderate** | Control boundaries drawn in `--line #d5d4c7` on `#fffdf8` score **1.47:1** — the check answer buttons, the notebook textarea, and the `.button.quiet` reset control, whose border is its only affordance. `.button.secondary` ("Previous") is 2.14:1. Threshold is 3:1. At low vision or in glare, the answer options do not read as buttons. | Darken `--line` for the borders that delimit controls; keep the light value for decorative rules. |
| 19 | `apps/web/app/globals.css:207`, `:362`, `:367`; `learner.css:289`, `:1328`, `:1038`; `globals.css:378-380` | 1.4.3 (AA) | **Moderate** | `--muted #66716c` is the most-used text colour in the codebase and sits at exactly **4.49:1** on `--paper`, one hundredth short. It also fails on every panel darker than paper: 4.14:1 on `.data-control` and `.lesson-objectives`, 4.11:1 on `.review-metric`, 4.03:1 on the coral-tinted course page. It passes on `#f7f5ee` (4.65) and `#fffdf8` (4.99). | Darken the token to roughly `#5c665f`. It fixes ~10 pairs at once and only improves the 15 that already pass. |
| 20 | `apps/web/app/learner.css:46-50` | 1.4.3 (AA) | **Minor** | Sidebar nav numbers `#778b82` on moss-dark at 12.5 px = **3.59:1**. | Lighten. |

---

## Polish — not barriers

| Location | Note |
|---|---|
| `lesson-player.tsx:126-130`; `concept-visual.tsx:58-62` | The caption is announced twice: once as the image's accessible name, once as the `<p class="visual-caption">` immediately after. There is no `<figure>`/`<figcaption>`, so it is duplicated but not *associated*. Fixing finding #3 removes the duplication as a side effect. |
| `concept-visual.tsx:60`; 11 of 76 captions | The `aria-label` receives the **raw** caption, so the very Unicode codepoints the notation module exists to avoid (`H₃O⁺`, `EC₅₀`, `10⁻⁹`, `Eₐ`) go straight into the spoken name. `withNotation` rewrites `<text>`/`<tspan>` children and cannot reach a prop. |
| `lesson-player.tsx:219`, `:238` | `window.scrollTo({ behavior: "smooth" })` is unconditional. An explicit `behavior: "smooth"` overrides the `prefers-reduced-motion` block at `globals.css:722-725`, which only resets the CSS `scroll-behavior`. Read the media query in JS before choosing the behaviour. WCAG 2.3.3 is AAA, so this is not an AA failure. |
| `learner.css:1068-1073` | `.lesson-objectives li::before { content: "•" }` is announced by Chromium as part of the list-item text, so each objective in an already-marked-up `<ul>` reads "bullet Identify conjugate…". The bullet glyph is also coral at 2.28:1. |
| `app/(learner)/course/page.tsx:100-108` | 53 links reading "Start" / "Resume" / "Revisit". Context in the list item satisfies 2.4.4, but a links-list or rotor pass on the course map is unusable. Add visually-hidden lesson titles. WCAG 2.4.9 is AAA. |
| `lesson-player.tsx:245`, `:330` | Measured at 390 px: "← Course map" is 83×17 px and "Reset everything" is 105×20 px, both under the 24×24 px of WCAG 2.5.8. Both have ≥24 px clearance from the nearest target (38 px and 34 px), so the *spacing exception* applies and they technically pass. For an adult on a phone they are still small. |
| `lesson-player.tsx:311-318`; `learner.css:991-994` | The *Continue* button is `disabled` until a check is answered. Disabled controls are exempt from 1.4.3, but at `opacity: 0.4` its label is 2.45:1 against its own fill — practically unreadable at the exact moment the learner is looking for the way forward. Disabled controls also take no focus, so a keyboard user tabbing forward finds nothing and gets no notification when it becomes enabled. |
| `lesson-player.tsx:66-86` | The answer options stay enabled after answering, and re-clicking re-records the result — a learner who answers wrongly can click the (now green) correct option and have it recorded as correct. Not accessibility, but it is on this path. |
| `concept-visual*.tsx` (all) | Nothing in the diagrams is focusable or operable: zero `tabIndex`, `onClick`, `<animate>`, or `<a>`. No keyboard-trap or focus-order exposure from the diagram layer. |
| `learner-provider.tsx:45-62` | The only timer in the app is a hydration deferral. There are no time limits, so WCAG 2.2.1 does not apply. |
| `app/learner.css:591` + `:1638-1640` | The one CSS transition in the learner interface (progress-bar width) *is* correctly disabled under `prefers-reduced-motion`. No `@keyframes` anywhere. |

---

## What automated tooling reported, for the record

axe-core 4.x, tags `wcag2a wcag2aa wcag21a wcag21aa wcag22aa`:

| Page | Violations |
|---|---|
| `/course/` | 118 nodes, 1 rule (`color-contrast`) |
| `/progress/` | 3 nodes, 1 rule (`color-contrast`) |
| `/learn/the-mole/` | 2 nodes, 1 rule (`color-contrast`) |

No violations for `image-alt`, `svg-img-alt`, `aria-*`, `label`, `heading-order`,
`region`, `link-name`, `button-name`, or `tabindex` on any page. Findings 1–6, 8,
9, 12–16 and 20 are all outside what automated testing detects. Treat a clean axe
run on this codebase as evidence of nothing.

---

## Suggested order of work

1. Drop `aria-label` from the shared `common` object — findings #3, and the
   duplicate-announcement polish item. One deletion, 64 diagrams fixed.
2. Remove `initialBlockIndex` from the player's `key` and add focus management on
   block change — findings #1, #2, and most of #14's practical impact.
3. Repoint `--coral` as a text colour and re-tune the focus ring — findings #7,
   #10, and part of #11.
4. Make the check a radio group with a persistent status region — findings #8, #9.
5. Fix the 12 mismatched captions — finding #5. These are wrong for sighted users
   too.
6. Decide the notation question — finding #6. This one needs a human: it touches
   4,980 authored characters and the rendering fix it would build on is correct.
