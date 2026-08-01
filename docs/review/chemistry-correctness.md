# Chemistry strand — independent correctness audit

Scope: stages 02–06 (Chemistry Foundations; Atoms, Bonding and Structure; Energy,
Rate and Equilibrium; Acids, Bases and Electron Transfer; Organic and Biological
Chemistry). Twenty lessons across six modules:

| Module | Lessons | Checks | Worked examples |
| --- | --- | --- | --- |
| `foundations.ts` (2.1, 2.2 only) | 2 | 9 | 6 |
| `chemistry-structure.ts` | 4 | 18 | 8 |
| `chemistry-reactions.ts` | 5 | 22 | 12 |
| `chemistry-aqueous.ts` | 3 | 15 | 7 |
| `organic-chemistry.ts` | 5 | 22 | 12 |
| `analytical-techniques.ts` (6.6) | 1 | 5 | 3 |
| **Total** | **20** | **91** | **48** |

Audit only. No lesson content was edited. Nothing was committed.

## Summary verdict

**The chemistry strand is in good shape.** No critical defect was found: there is
no worked example that produces a wrong answer, no `correctIndex` that points at a
wrong option, and no check with two defensible answers. Every one of the 91 checks
carries exactly four distinct options with an in-range index, and all 48 worked
examples reproduce their stated answers from their stated inputs.

Ten defects are recorded below — **4 major, 6 minor, 0 critical**. Every major
defect is a *prose* error in a concept paragraph or an explanation string, not a
numerical one, and in all four cases the surrounding lesson states the correct
version elsewhere, so each is a self-contradiction that a reader may or may not
catch. That pattern is worth noting: the arithmetic in this strand was clearly
verified carefully, and the residual risk sits in the sentences around it.

Verification performed:

- Every worked example recomputed from its own stated inputs.
- Every `correctIndex` re-derived, with all three distractors tested for being
  genuinely wrong.
- An automated pass over all six modules verified **122 inline arithmetic
  statements** and every pH/logarithm statement; all reproduce.
- A mechanical pass confirmed no duplicate options, no out-of-range index, and
  exactly four options in all 91 checks.
- Cross-file constant and bond-enthalpy consistency checked (C–H 413, C–C 348,
  O=O 498, O–H 464, H–H 436, Cl–Cl 243, H–Cl 432, C=O(CO₂) 805 kJ mol⁻¹; all
  standard, and consistent between `chemistry-reactions.ts` and
  `organic-chemistry.ts`). Standard electrode potentials, `F = 96 485 C mol⁻¹`,
  `Kw = 1.0 × 10⁻¹⁴`, `R = 8.31 J K⁻¹ mol⁻¹` and `N_A` all correct and
  consistently used.
- An exhaustive sweep for the positional-reference failure mode the handoff warns
  about (section 7 of `docs/next-session.md`).

`chemistry-aqueous.ts` (stage 05) and the two Chemistry Foundations lessons and
lesson 6.6 came through with **zero defects**. Given that stage 05 is the
sign-convention minefield (ΔG° = −nFE°, E°cell = E°cathode − E°anode, pH/pKa
logarithms), that is a genuinely good result.

## Defects

| # | File:line | Lesson | Block | What is wrong | What it should be | Severity |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `apps/web/lib/lessons/chemistry-structure.ts:922` | `lesson.chemistry.intermolecular_forces` | `imf-hbond` | "Boiling points normally **fall** with molar mass within a family, yet H₂O boils at 100 °C against H₂S at −60 °C…". The trend is inverted. It also destroys the paragraph's own logic: if boiling points normally fell with mass, water out-boiling H₂S would be *expected*, not the anomaly being introduced. Contradicts line 881 in the same lesson ("boiling points should rise down the group"). | "Boiling points normally **rise** with molar mass within a family…" | **Major** |
| 2 | `apps/web/lib/lessons/chemistry-reactions.ts:1375` | `lesson.chemistry.equilibrium` | `eqm-application` | "In respiring tissue the oxygen partial pressure is low, **Q falls below K**, and the equilibrium shifts left". For Hb + 4O₂ ⇌ Hb(O₂)₄, Q = [Hb(O₂)₄] ÷ ([Hb][O₂]⁴); lowering [O₂] shrinks the denominator, so Q *rises above* K. As written the sentence states Q < K and then draws the reverse-direction conclusion — internally contradictory. Contradicts the rule stated at line 1273 and the correct parallel CO₂ reasoning at line 1396. | "…the oxygen partial pressure is low, **Q rises above K**, and the equilibrium shifts left". Load-bearing: the lesson's `transferRule` (line 1414) is precisely "evaluate what it does to Q". | **Major** |
| 3 | `apps/web/lib/lessons/organic-chemistry.ts:1166` | `lesson.chemistry.reaction_mechanisms` | `mech-check-transfer` | Explanation: "The departing **amine** is also a much stronger base than an **alkoxide**". Inverted and category-mismatched. A neutral amine (conjugate acid pKa ≈ 10.7) is a *weaker* base than an alkoxide (conjugate acid pKa ≈ 16). The option this explanation defends (line 1159) makes the correct comparison — amine vs **alcohol**. | Either "the departing **amide anion** is a much stronger base than an alkoxide" or "the departing amine is a much stronger base than an **alcohol**". The `correctIndex`, the electrophilicity argument, and all three distractors are sound. | **Major** |
| 4 | `apps/web/lib/lessons/organic-chemistry.ts:1429` | `lesson.chemistry.biomolecules` | `bio-carbs` | "Human digestive enzymes hydrolyse α-1,4 links but not β-1,4, so starch is a food and cellulose is dietary fibre." False as a general rule, and contradicted one paragraph earlier (line 1428), which correctly states "lactose is galactose joined **β-1,4** to glucose" — a bond humans hydrolyse with lactase. | Scope it to glucose–glucose linkages: "Human digestive enzymes hydrolyse the α-1,4 links of starch but not the β-1,4 links between glucose units in cellulose." | **Major** |
| 5 | `apps/web/lib/lessons/chemistry-structure.ts:45` | `lesson.chemistry.atomic_structure` | `atom-visual` | "**Each** shell divides into subshells labelled s, p, and d." False for n = 1 (only 1s) and n = 2 (2s, 2p), and incomplete for n ≥ 4. Contradicted 74 lines later at line 119, which states the correct version. | "Shells divide into subshells labelled s, p, and d, with shell 1 holding only s and shell 2 only s and p." | Minor |
| 6 | `apps/web/lib/lessons/chemistry-structure.ts:921` | `lesson.chemistry.intermolecular_forces` | `imf-hbond` | "At 10 to 40 kJ mol⁻¹ it [the hydrogen bond] is **the strongest intermolecular force**." False under the lesson's own taxonomy: line 996 says ion–dipole "is the strongest interaction a neutral molecule can offer", and the `transferRule` at line 1073 lists ion–dipole inside the same force inventory. Ion–dipole is stronger. | Scope the claim: "the strongest force **between neutral molecules**". Common textbook phrasing, but here it contradicts two other statements in the same lesson. | Minor |
| 7 | `apps/web/lib/lessons/chemistry-reactions.ts:159`, restated at `:163` | `lesson.chemistry.stoichiometry` | `stoi-worked-limiting` | "(24.0 g ÷ 26.7 g) × 100 = **89.9 %**". The theoretical yield is 0.200 × 133.3 = 26.66 g, so 24.0 ÷ 26.66 = **90.0 %** to 3 s.f. The printed value is a rounding-chain artefact of substituting the already-rounded 26.7 g, and is inconsistent with the file's own practice at line 381, where the calorimetry example deliberately carries the unrounded intermediate. | 90.0 % in both the working and the `answer` string. | Minor |
| 8 | `apps/web/lib/lessons/organic-chemistry.ts:397` | `lesson.chemistry.isomerism` | `iso-worked-ez` | `plausibility`: "Whenever a doubly bonded carbon has no pair of identical substituents, only E/Z is defined." Misstated rule. But-2-ene's C2 carries CH₃ and H — not identical — yet cis/trans is perfectly well defined for it. Self-contradictory with step 4 of the same worked example (line 391), which *does* apply cis/trans to this molecule and returns "trans". | cis/trans becomes undefined when the two alkene carbons share **no common reference substituent**, not whenever a single carbon's two substituents differ. | Minor |
| 9 | `apps/web/lib/lessons/organic-chemistry.ts:424` | `lesson.chemistry.isomerism` | conformations concept | "That barrier is **small compared with thermal energy at 298 K**, so ethane spins through **millions** of rotations per second." The 12 kJ mol⁻¹ barrier is ≈ 4.8 × RT (2.48 kJ mol⁻¹) — not small relative to thermal energy. Eyring gives ≈ 5 × 10¹⁰ rotations s⁻¹, ~10⁵× more than "millions". The conclusion (inseparable) is unaffected. Contrast line 445, where cyclohexane's "roughly a hundred thousand times per second" computes to 1.8 × 10⁵ s⁻¹ exactly. | "That barrier is crossed readily at 298 K, so ethane rotates some 10¹⁰ times per second…" | Minor |
| 10 | `chemistry-reactions.ts:693`, `chemistry-reactions.ts:1336`, `organic-chemistry.ts:1036`, `organic-chemistry.ts:1106`, `organic-chemistry.ts:1168` | 5 lessons | 5 check blocks | Five surviving **positional references to options** in `misconception` strings: "The first two options are negative", "Option 4 … option 3", "Option one", "Option three", "Option two". All five currently map to the right options (1-indexed), so nothing is broken *today*. But the player renders options as **letters** — `apps/web/components/lesson-player.tsx:82` emits `String.fromCharCode(65 + index)`, i.e. A, B, C, D — so a learner reading "Option three" sees no option so labelled. These are also exactly the silent-breakage hazard `docs/next-session.md` §7 warns about. | Name the claim rather than the position, as the other 77 `misconception` strings in the strand already do. | Minor |

## Judgement calls

Defensible as written; a human should rule.

1. `chemistry-reactions.ts:774` vs `:1203` — stage 04 uses ΔG° = −RT ln K, which strictly requires a dimensionless K, while lesson 4.5 insists Kc carries units ("quote them unless the powers cancel"). Each is standard UK convention alone; together they are internally inconsistent. This is the house-style item already open in `docs/next-session.md` §5, now with a concrete pair of lines attached to it.
2. `chemistry-structure.ts:638` — `shape-check-h2s` attributes H₂S's sub-tetrahedral angle solely to lone-pair compression. The conclusion ("below 109.5°") is right, but the real angle is 92°, driven mainly by reduced s–p mixing in heavier central atoms. Defensible intro-level simplification; flagged because the lesson is careful about hybridisation limits elsewhere (line 648).
3. `chemistry-structure.ts:237` — "down a group added shells reverse **every** trend". True for the three trends named in the same clause (radius, IE, electronegativity), but not for electron affinity, which the lesson itself lists as a trend at line 189 (F vs Cl is the standard counter-example). Consider scoping.
4. `chemistry-reactions.ts:631` — "S = k_B ln W … and the unit is J K⁻¹ mol⁻¹". Boltzmann's relation gives J K⁻¹ per system; the molar unit needs R = N_A k_B. Universally written this way in teaching text.
5. `chemistry-reactions.ts:1020` — "the rate law reflects only the slowest step of the mechanism". True for a simple rate-determining step, incomplete where a pre-equilibrium precedes it. Standard simplification.
6. `chemistry-reactions.ts:1375` — separate from defect 2: haemoglobin's O₂ binding is cooperative and sigmoid, not the single-step equilibrium the block summarises. Explicitly flagged as a summary, and standard at this level, but the Bohr effect is discussed in the next paragraph and a half-sentence caveat may be wanted.
7. `chemistry-aqueous.ts:33` — "Every acid-base reaction is a single transfer of H⁺ from a donor to an acceptor." Stated universally in a paragraph explicitly framing Brønsted-Lowry; Lewis acid-base chemistry is never mentioned in the stage. A one-clause hedge ("on this definition") would make it exact.
8. `chemistry-aqueous.ts:408` — buffer capacity "usually defined" as the amount needed to shift pH by one unit. The standard definition is differential (β = dn/d(pH)); the one-unit form is a common teaching proxy but "usually defined" overstates its status. Same line: "Two buffers made at the same ratio have the same pH **however dilute** they are" sits in mild tension with the correct warning at line 340.
9. `chemistry-aqueous.ts:542` — "The equivalence pH depends on the concentration and on Kb **as well as** on the acid's strength" implies an independence that does not exist, since Kb = Kw/Ka. The conclusion drawn is correct.
10. `organic-chemistry.ts:1244` — "Basic side chains, on lysine, arginine, and **histidine** … are typically positively charged." Histidine's imidazolium pKa is ≈ 6.0, so it is mostly *un*protonated at pH 7.4. Standard textbook classification, but this lesson insists on pH-vs-pKa reasoning everywhere else.
11. `organic-chemistry.ts:1087` — "an alkene in which both routes give equally substituted cations, such as **but-2-ene**, indeed gives no strong preference." But-2-ene is symmetric, so both protonation routes give the identical product; the claim is vacuous as a test of Markovnikov. A non-symmetric test case would carry the argument.
12. `organic-chemistry.ts:1348` — check titled "Interpret an enzyme activity against temperature graph", but check blocks are prose-only and no graph is rendered; the prompt describes the curve in words. Separately, the block id is `bio-check-saturation` while its content is temperature/denaturation, and the Vmax/Kₘ material in the preceding concept block is never checked.
13. `analytical-techniques.ts:59` — "Rf lies **strictly** between 0 and 1". Idealised: an unretained solute co-runs with the front and is routinely reported as Rf = 1.0 in practice. The reasoning given (a solute cannot outrun the solvent carrying it) is sound.
14. `chemistry-aqueous.ts:852` — "ΔG° = −nFE° = +2 × 96 485 × 0.51". The equality chain elides the substitution E° = −0.51 V, so a student reading left to right sees "−nFE°" become "+nF|E°|" with no intermediate step. Arithmetic and answer are correct; presentation only.

## Residual risk

- Coverage is complete at the level claimed: all 91 checks were enumerated by id
  and each keyed answer confirmed, all 48 worked examples recomputed, and all 122
  inline arithmetic statements machine-verified. An initial pass under-counted the
  checks in `chemistry-reactions.ts` (22, not 17) and `chemistry-aqueous.ts` (15,
  not 13); those two files were re-enumerated block by block and every keyed
  answer confirmed, so that gap is closed.
- This audit covers correctness, not pedagogy, sequencing, or prose quality, and
  it does not cover the rendered page — diagram content was not reviewed. The
  ordering and quantity of `correctIndex` values across the strand was likewise
  not re-audited; the answer-key rebalance described in `docs/next-session.md` §2
  was taken as given.
