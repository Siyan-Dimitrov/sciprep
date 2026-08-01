# Biology and Integration — independent correctness audit

Scope: stages 10–14 only.

| Stage | File | Lessons |
| --- | --- | --- |
| 10 Cells, Membranes, Metabolism | `apps/web/lib/lessons/biology-cell.ts` | 4 |
| 11 Genetics and Gene Expression | `apps/web/lib/lessons/biology-genetics.ts` | 4 |
| 12 Signalling, Defence, Physiology | `apps/web/lib/lessons/biology-physiology.ts` | 3 |
| 13 Integration Studio | `apps/web/lib/lessons/foundations.ts` lines 2018–2329 | 1 |
| 14 Scientific Reasoning Studios | `apps/web/lib/lessons/reasoning-studios.ts`, `chart-literacy.ts` | 4 |

16 lessons, 31 worked examples, 79 practice checks. Every worked example was
recomputed in `node` from its own stated inputs. Every `correctIndex` was
re-derived independently. Toolkit, chemistry and physics stages were not
examined. `gamsat_practice_test_a.pdf` was not opened, read or referenced at
any point.

No lesson content was edited. Nothing was committed.

---

## 1. Summary verdict

**The arithmetic is sound and the answer keys are correct.** All 31 worked
examples reproduce from their stated inputs, and all 79 `correctIndex` values
are correctly keyed with no second defensible option and no unanswerable check.
The five specific claims the handoff calls out as "came out exact" were
re-derived from scratch and **all five genuinely reproduce** — none is
reverse-engineered. On the narrow question the handoff's section 4 asserts, the
authors' self-verification holds up.

**The defects are elsewhere.** They cluster in four places the arithmetic sweep
could not have caught:

1. **Prose that misstates a quantitative law** even where the numbers around it
   are right (drift scaling; a carrier-frequency comparison; a curve-geometry
   claim).
2. **Diagrams that contradict their own captions.** Two of the seven genetics
   figures disagree with the caption printed beneath them. No arithmetic check
   would find this, and the Android walk-through described in the handoff
   confirmed only that the diagrams *paint*, not that they agree with the text.
3. **Plausibility blocks whose reasoning does not follow.** Four "check your
   answer a second way" passages are non-sequiturs. This is the worst place in
   the course for a defect to sit, because the plausibility block is where the
   course teaches self-checking.
4. **Coverage.** Gas exchange is absent from the biology strand entirely, not —
   as the handoff states — relegated to check blocks. Cell-mediated immunity is
   absent from the immunology lesson.

There is also one cross-cutting **test-construction** flaw: in 60 of 79 checks
(76 per cent) the keyed option is the longest of the four.

Counts: **3 critical, 12 major, 27 minor.** Confidence in the strand is stated
in section 5.

---

## 2. Defects

Severity: **critical** = a false claim sits inside a keyed answer or explanation
that a learner will take away, or a check is mis-keyed. **major** = a wrong
number or claim in prose, a figure contradicting its caption, or a disclosure
missing where the text itself invites the calculation. **minor** = imprecision,
overclaim, internal inconsistency of style, latent hazard.

### Critical

| # | File / lesson / block | Line | What is wrong | What it should be |
| --- | --- | --- | --- | --- |
| C1 | `biology-genetics.ts` · `population_genetics` · `popg-check-transfer` | 1300 | Explanation states carrier women are "about 1 in 200 — **as common as affected men**". Affected men are `q` = 1/400; carrier women are `2pq` ≈ 1/200. Carriers are **twice** as common, not equally common. The error is not cosmetic: option index 3 is "1 in 160 000 women affected and about **1 in 400** carriers", so the explanation's own arithmetic gloss points a learner at a distractor. | "about 1 in 200 — twice as common as affected men, and roughly 800 times as common as affected women". (The "800 times" clause is correct: 0.0049875 / 6.25 × 10⁻⁶ = 798.) |
| C2 | `biology-genetics.ts` · `population_genetics` · `popg-assumptions` and `popg-check-assumption` | 1179, 1200 | "Drift shifts them at random, **by an amount that scales roughly as 1 ÷ (2N)**" (concept), repeated inside a keyed explanation as "its magnitude scales as 1 ÷ (2N)". The *variance* of the per-generation change is `pq/(2N)`; the *magnitude* scales as `1/√(2N)`. With the check's own N ≈ 40 the stated rule gives 0.0125 per generation against an actual SD of 0.056 — understated 4.5-fold, which is what makes the scenario's 0.5 → 0.85 drift over twenty generations plausible in the first place. | "…by an amount that scales roughly as 1 ÷ √(2N)". (`1/(2N)` is a real drift quantity — the per-generation rate of loss of heterozygosity — but it is not the size of the frequency shift.) |
| C3 | `reasoning-studios.ts` · `data_inference_studio` · `dis-layer-curves` + `dis-check-shift` | 479, 551, 553, 559 | The prompt defines curve V as "every value on it is 0.6 of the corresponding control value" and the keyed option (index 0) says "V indicates a change in **extent only**". Under the lesson's own operational definition of rate — initial slope over the first interval, line 504 — a uniform 0.6× rescaling gives an initial slope of 0.6 × 15 = 9, i.e. a rate change too. The lesson contradicts itself: the worked example's treatment S (line 490: 0, 29, 47, 50, 50, 50) deliberately preserves the initial slope while halving the plateau, and is *not* 0.5× the control. Source of the error is the concept sentence at 479, which calls a geometrically similar y-scaled curve one in which "every value is reached at the same time in relative terms". | Define V as "reaches a plateau 0.6 of the control's with the same initial slope", and reword 479 so the "rescaled" case is not described as geometric similarity. Note the key is still the best of the four options, so no learner is marked wrong — but the false geometric equivalence is what gets taught. |

### Major

| # | File / lesson / block | Line | What is wrong | What it should be |
| --- | --- | --- | --- | --- |
| M1 | `biology-genetics.ts` · `mendelian_genetics` · `mend-visual-punnett` caption vs `components/concept-visual-genetics.tsx` | 398 vs renderer 206–213 | Caption reads "**Four cells** give the 1:2:1 genotype ratio of a heterozygous cross and, where one allele is dominant, the 3:1 phenotype ratio". The `punnett` renderer draws a **4 × 4 dihybrid** square, `AaBb × AaBb`, sixteen cells, tallied 9 : 3 : 3 : 1. There are no four cells on screen and no 1:2:1 anywhere in the figure. Compounded by `mend-worked-dihybrid` (line 424), which explicitly says its method "replaces a sixteen-cell square with two four-cell ones" — the lesson teaches away from the figure it shows. | Either render a monohybrid 2 × 2 square to match the caption and the surrounding prose, or rewrite the caption to describe the dihybrid square actually drawn. |
| M2 | `biology-genetics.ts` · `meiosis_linkage` · `meio-visual-map` caption vs renderer | 824 vs renderer 490–505 | Caption: "a locus **12** units from one marker and **7** from another on the far side sets the outer pair **19** apart. Measured directly, that outer pair returns **less than 19**." Diagram prints "12 cM", "**8 cM**", "A–C = **20 cM**" and the flat assertion "**12 + 8 = 20, so the distances add**". Three problems at once: the numbers disagree with the caption; they disagree with the worked example (12.0 + 7.0 = 19.0 against a measured 17.8); and the diagram's headline claim is the exact misconception the caption and worked example exist to correct. | Bring the figure to 12 / 7 / 19 and replace "so the distances add" with the map-additivity caveat, or drop the outer-span annotation. |
| M3 | `biology-genetics.ts` · `meiosis_linkage` · `meio-tetrad`, `meio-check-transfer`, renderer | 920, 932, renderer 462 | Second-division segregation is described *only* as "spores appear in **alternating blocks of two**". A linear octad has four second-division arrangements: two of pattern 2:2:2:2 and two of pattern **2:4:2** (e.g. `GGggggGG`). The 2:4:2 case is absent from the prose, absent from the check's data (340 + 160 = 500 exactly, so the data assert no 2:4:2 ascus exists), and absent from the renderer, whose `secondDivision` array is hard-coded `[T,T,F,F,T,T,F,F]`. A learner shown real Neurospora data would misclassify roughly half the second-division asci. The 16-map-unit answer is unaffected. | State both patterns; the defining feature is that the two alleles are not separated until MII, not that the blocks alternate. This is broader than the handoff's flag, which named only the diagram. |
| M4 | `biology-genetics.ts` · `meiosis_linkage` · `meio-worked-threepoint` | 832, 873 | The 1000-offspring three-point cross is presented as observed data ("Among 1000 offspring…") with no statement that it is constructed. Worse, the plausibility block asserts the constructed regularity as a validity rule: "The eight classes **must** fall into four reciprocal pairs of **equal size**, and they do: 408 and 408, 57 and 57, 32 and 32, 3 and 3." Reciprocal classes are equal *in expectation*; real data never show exact equality. A learner taught this as a "must" will reject valid data. Same for "The 1.2 centimorgan shortfall … is **exactly** twice the double-crossover frequency". | Label the data as constructed for clarity, and change "must fall into four reciprocal pairs of equal size" to "should fall into four reciprocal pairs of **approximately** equal size — here they are exactly equal because the figures are constructed". Confirms the handoff's own flag; the arithmetic itself is exact (verified, section 4). |
| M5 | `biology-physiology.ts` · `immunology` · `immu-worked-repertoire` | 506 | Plausibility is a numerical non-sequitur contradicted by the lesson's own figure. It says "an adult carries of order 10¹¹ B cells altogether, **so most possible specificities are absent** at any moment", against the 1.2 × 10⁹ specificities computed at line 493. 10¹¹ cells drawn from a 1.2 × 10⁹ library means every specificity is present ~80 times over — the opposite conclusion. The next clause ("the library is dense enough for some cell to bind any given epitope") is correct and inconsistent with the sentence it is attached to. | Either quote the realistic full repertoire (≫10¹¹ once junctional diversity is taken seriously) or reverse the inference to "so every available specificity is represented many times over". |
| M6 | `biology-physiology.ts` · `physiology_systems` · `phys-renal` | 931 (with 973) | "for glucose it is about 2 mmol per minute, and filtered glucose appears in urine only once plasma concentration is high enough for the filtered load to exceed it, which happens **near 10 mmol dm⁻³ in practice**." The sentence sets up the division and then gives a number the division does not produce: with the lesson's own GFR of 125 cm³ min⁻¹ (line 973), Tm ÷ GFR = 2 ÷ 0.125 = **16 mmol dm⁻³**. Both numbers are correct physiology; the gap is *splay* (nephron heterogeneity). "In practice" is not a disclosure — the discrepancy is never named. | Name splay explicitly, or move the threshold statement away from the Tm figure. Contrast M7, where the author *did* disclose but put the disclosure where nobody sees it. |
| M7 | `biology-physiology.ts` · `physiology_systems` · `phys-check-digestion` | 918–922, with `components/lesson-player.tsx:91` | Arithmetic verified: 3 × 10 × 20 = 600, × 0.60 m² = 360 m², `correctIndex: 3` correct. The disclosure that measurement gives ~30 m² **is present** — but it lives in the `misconception` string (line 922). `lesson-player.tsx` line 91 renders `misconception` **only when the learner answers wrongly**; a learner who answers correctly sees `explanation` alone (line 920), which asserts 360 m² with no caveat. The caveat is in the one field invisible to exactly the learners who will carry the number away. | Move the ~30 m² correction into the `explanation` string or the concept block. **This is a general lesson for the course**: any caveat placed in a `misconception` is hidden from correct answerers. |
| M8 | `biology-physiology.ts` · `physiology_systems` · `phys-worked-perturb` | 881, 901 | Patient B (free T₄ 31, TSH 0.02) is diagnosed as "an intact axis correctly suppressed by thyroid hormone **taken from outside the body**". Primary hyperthyroidism produces the identical pattern; the two are indistinguishable on this pair of results. The step's own reasoning is self-refuting: line 881 says "The loop **cannot distinguish** hormone made internally from hormone supplied externally, so an obedient result with a raised controlled variable points to an input from outside." If the loop cannot distinguish, neither can the reader. | "…points to an excess of the final hormone, whether from the gland itself or from an external source; these two are indistinguishable on this pair of results." |
| M9 | `biology-physiology.ts` · `physiology_systems` · whole lesson | 715–1077 | **Gas exchange is absent from the biology strand entirely.** Zero occurrences of `alveol`, `gas exchange`, `haemoglobin`, `lung` anywhere in the file; the single `oxygen` occurrence (line 1020) is the phrase "rather than by oxygen". No alveolar structure, no surface-area/diffusion-distance argument, no oxygen transport, no dissociation curve. It appears in neither the lesson `objectives` (725–732) nor `phys-summary` (1057–1064), whose own list is "temperature, glucose, water, salt, and acid-base". | Either add it or stop describing the biology gap as closed. Section 3 below records that this directly contradicts the handoff. |
| M10 | `biology-physiology.ts` · `immunology` · whole lesson | 359–712 | Zero occurrences of `T cell`, `MHC`, `helper`, `cytotoxic`, `antigen-presenting`. Cell-mediated immunity and MHC I vs II are missing from a lesson on immunology. Class switching (line 446) and affinity maturation (line 628) are both presented as things that simply happen; both require T-cell help. Antigenic drift and shift are correctly *described* at line 583 but never *named*, so a learner cannot map the content onto any external source using those terms. | Add the standard names at minimum; the T-cell gap is a scope decision. Not a broken promise — the objectives do not claim T cells — but it is a large hole. |
| M11 | `biology-cell.ts` · `cell_structure` · `cell-worked-pulsechase` | 231 | Plausibility's qualitative check is incoherent with its own experiment: "if L were genuinely stalled, the **cis-Golgi fraction** would grow steadily with chase time instead of rising and then falling as a wave." Step 1 (line 197) defines the stall as failure to enter a 60–80 nm ER-exit vesicle, i.e. a stall **in the ER**. If L stalled there the cis-Golgi fraction would stay near zero and flat, and the *reticulum* fraction would stay at 92 per cent. Only a stall at the cis-Golgi makes the sentence true, which contradicts step 1. | "…the reticulum fraction would stay near its starting 92 per cent instead of falling." |
| M12 | All five in-scope files · every `check` block | — | **In 60 of 79 checks (76 per cent) the keyed option is the longest of the four.** Mean keyed-option length 110 characters against 72 for distractors. Worst by file: `biology-physiology.ts` 14/15, `biology-cell.ts` 18/19. A learner can score well above chance on this material by picking the longest option without reading the stem — the same class of exploitable tell the handoff records fixing for answer-index skew, reintroduced on a different axis. Index distribution itself is fine (20 / 22 / 17 / 20). | Pad distractors with matched reasoning clauses, or move the reasoning out of the keyed option into the explanation. |

### Minor

| # | File / lesson / block | Line | What is wrong |
| --- | --- | --- | --- |
| m1 | `biology-genetics.ts` · `dna_expression` · `dna-worked-translate` | 270 | "5 of the **6** residues after methionine differ." There are five residues after methionine (Met-Thr-Glu-Cys-Trp-Lys → Met-Pro-Asn-Val-Gly-Ser). Should be "all five residues after methionine differ", or "5 of the 6 residues differ". |
| m2 | `biology-genetics.ts` · `dna_expression` · `dna-pairing` | 58 | "thousands of them act **in series**". Hydrogen bonds in a duplex act in parallel and cooperatively; "in series" implies the opposite mechanical picture. |
| m3 | `biology-genetics.ts` · `meiosis_linkage` · `meio-visual-division` caption | 704 | "Only at anaphase II do sister chromatids separate, at which point each becomes a chromosome in its own right and the count of chromosomes per cell **stays at n**." At anaphase II the cell transiently holds 2n chromosomes; it returns to n only after cytokinesis. Standard textbook looseness, but this caption's whole purpose is honest counting. |
| m4 | `biology-genetics.ts` · `population_genetics` · `popg-assumptions` callout | 1183 | "a heterozygote deficit with allele frequencies unchanged points at mating or sampling, **not at selection**". Viability selection against heterozygotes produces the same signature. Also, with a single sample there is no baseline against which p can be called "unchanged" — the deviations sum to zero because p was estimated from those counts, which the plausibility block (1251) states correctly but the callout then over-reads. |
| m5 | `biology-genetics.ts` · `population_genetics` · `popg-hwe` | 1101 | "Equilibrium is reached after a single generation of random mating, whatever genotype frequencies the population started from." True only for an autosomal locus with equal allele frequencies in the two sexes. The lesson then applies Hardy-Weinberg to an X-linked locus at `popg-check-transfer`, where convergence takes several generations. |
| m6 | `biology-cell.ts` · `metabolism` · `metab-yields` | 1104 | "something close to **10 protons drives 3 ATP in mammals**." The mammalian c-ring is c8 (≈2.7 H⁺/ATP); c10 is yeast and *E. coli*. The non-mammalian figure is attributed to mammals in the same clause that claims species variation. |
| m7 | `biology-cell.ts` · `membranes_transport` · `memb-permeability` | 365 | "of order **10⁻¹² cm s⁻¹ for sodium**". 10⁻¹² is the conventional figure for K⁺; Na⁺ across a pure bilayer is usually ~10⁻¹⁴. Hedged as an order-of-magnitude literature figure, and it weakens the lesson's own point. Worth checking against whichever reference the course standardises on. |
| m8 | `biology-cell.ts` · `membranes_transport` · `memb-worked-osmosis` | 426, with 398 | "Complete dissociation is assumed here; real solutions fall **a few per cent** short of it." True for NaCl (φ ≈ 0.93) but not for the CaCl₂ in this very problem (φ ≈ 0.86, ~14 per cent). The hedge also points the wrong way: real coefficients *widen* the imbalance rather than shrinking it. |
| m9 | `biology-cell.ts` · `membranes_transport` · `memb-osmosis` | 399 | "A 300 mmol dm⁻³ urea solution **is iso-osmotic** with a red cell", against 290 mosmol dm⁻³ stated at line 470 and the check's own "brief shrinkage while 300 outside faces 290 inside" (479). Should read "very nearly iso-osmotic". |
| m10 | `biology-cell.ts` · `enzymes` · `enz-conditions` | 879 vs 31 | "near pH **7.4** for most cytosolic enzymes", against "the cytosol around it is near pH **7.2**" at line 31 of the same file — the value the lysosome worked example computes from. |
| m11 | `biology-cell.ts` · `enzymes` · `enz-conditions` title, `enz-check-transfer` option 0 | 877, 894 | "An optimum is where two opposing effects **cross**". The maximum of a *product* of a rising and a falling function is not the intersection of the two. The callout at 884 states it correctly ("where the product of the two peaks") and the explanation at 901 says "being multiplied" — so the file contradicts itself, and the loose version is the one inside the keyed option. Line 894 also gives "more frequent and more energetic collisions" where 880 correctly gives the Arrhenius account. |
| m12 | `biology-cell.ts` · `metabolism` · `metab-worked-lesion` | 1152 | "B: carriers reduced upstream of the block, **NADH accumulating**." The stated substrate is succinate (1117), a Complex-II-linked substrate that bypasses Complex I; the direct consequence is accumulation of succinate and ubiquinol. |
| m13 | `biology-cell.ts` · `enzymes` · `enz-worked-inhibition` answer | 850 | "about 800 times smaller than the Km … **so J occupies the site far more readily than the substrate does**." Arithmetic right; the inference treats Km as a binding constant, which line 710 of the same lesson explicitly warns against. |
| m14 | `biology-cell.ts` · `membranes_transport` · `memb-worked-osmosis` plausibility | 462 | "290 × 2.58 = 747" gives 748.2 (the exact 290 × 2.5773 = 747.4 is what is quoted); and "40 mosmol dm⁻³ is **one seventh** of 290" is then divided by 7.25. Harmless, visible to a careful learner. |
| m15 | `biology-physiology.ts` · `cell_signalling` · `sig-cascade` | 91 | "which is how **caffeine** and related methylxanthines work: they inhibit the phosphodiesterase that destroys cAMP." Caffeine inhibits PDE only well above dietary concentrations; its dominant action at physiological doses is adenosine-receptor antagonism. Theophylline is the honest example. |
| m16 | `biology-physiology.ts` · `cell_signalling` · `sig-worked-amplify` | 100, 109 | Title says "six-stage cascade"; the scenario describes seven transitions, one of which (G protein → one cyclase, ×1) is silently dropped from a step labelled "Express **every** stage as a multiplying factor". Listing ×1 explicitly would reinforce the lesson's own point. |
| m17 | `biology-physiology.ts` · `cell_signalling` · `sig-worked-amplify` | 140 | "by a route **sharing no arithmetic** with the first". The log route consumes the same six factors under a monotone transform; log₁₀ 0.25 = −0.60 cannot be had without the 0.25. It is an independent *execution* check, not an independent route. |
| m18 | `biology-physiology.ts` · `immunology` · `immu-worked-secondary` | 632 | "**detectable** within 3 days rather than 7" — the secondary response was never below the detection limit (5 units at day 120). Step 601 handles it correctly as a twelvefold rise; the answer string reverts to the looser framing. |
| m19 | `biology-physiology.ts` · `cell_signalling` · `sig-receptors` | 59 | "IP₃ opens calcium channels on **internal stores**", then justifies the signal size by the ~10⁴ gradient to the **extracellular** level. The conclusion survives (ER lumenal Ca²⁺ is also ~10⁻³ mol dm⁻³) but the stated justification does not match the channel just described. |
| m20 | `reasoning-studios.ts` · `estimation_studio` · `est-check-hair` | 798 | "That is a few times the fingernail rate, which is consistent with hair needing cutting **rather more often than nails** per centimetre of visible change." The 4× factor is right; the everyday justification runs the other way (people trim nails more often). |
| m21 | `reasoning-studios.ts` · `estimation_studio` · `est-check-hair` | 800 | No single named slip produces option 0 (4 × 10⁻⁷ — it needs a month of 2.6 × 10⁴ s), while option 3 (3.8 × 10⁻¹⁰) is reachable by two of the named slips. One distractor unexplained, one explained twice, and "shifts it the other way" is true of only one of them. |
| m22 | `reasoning-studios.ts` · `estimation_studio` · `est-check-blood` | 876 | "25 × 10⁵ ≈ 3 × 10⁶ L, **which is 2600 m³**." 25 × 10⁵ L = 2500 m³ and 3 × 10⁶ L = 3000 m³; 2600 m³ is the unrounded 2.628 × 10⁶ L. The gloss does not follow from the number it is attached to, and 2.5 → 3 is aggressive in a one-significant-figure lesson. |
| m23 | `reasoning-studios.ts` · `estimation_studio` · `est-check-transfer` | 1007 | "**lands on** the 10¹ option". Dropping the ×6 gives 75 L; the 10¹ option is 40 L. Nearest, but 1.9× away. (The rest of that misconception is exact: 6 × 60 × 24 = 8640 L air/day, × 0.21 = 1814 L O₂, ÷ 4 = 454 L.) |
| m24 | `reasoning-studios.ts` · `estimation_studio` · `est-worked-breaths` | 857, 859 | Answer says "roughly 6 × 10⁸ … a few hundred million"; plausibility two lines later says "it is of order **10⁹**". Both defensible on a log scale, but the lesson's thesis is that the exponent *is* the answer. |
| m25 | `reasoning-studios.ts` · `data_inference_studio` · `dis-worked-timecourse` | 508–511 | The decision states "check that at least two consecutive readings agree before calling it a plateau"; the working then accepts R's single reading of 100 at 40 min. Conclusion correct, rule broken in the adjacent sentence. |
| m26 | `chart-literacy.ts` · `chart_literacy_studio` · `chart-check-radar` | 228, 220, 237 | Two things. (a) "Each axis runs from the lower to the higher of the two measured values" puts one preparation at radius 0 on every axis, so each polygon's area is an integer multiple of ½R² sin 60° and the achievable ratios are 6, 5, 4, 3, 2, 3/2, 4/3, 1 …; 1.4 is not among them, so the scenario cannot be drawn as described. (b) The single most important area distortion — **area is quadratic in the values**, so 1.4× area is only 1.18× on each axis — is never stated, though "State what the enclosed area of a radar chart does and does not support" is the lesson's own objective (line 19). |
| m27 | All in-scope files | see below | **Twelve surviving positional references** in `misconception` / `explanation` strings. Every one was checked against its own `options` array and **all twelve are currently correct** (1-indexed; `lesson-player.tsx:82` labels options A–D by index). They are nonetheless the failure mode the handoff's own section 7 warns about, and they break silently on any future reshuffle. `biology-cell.ts` 126, 248, 481, 700, 1004, 1094, 1196, 1213, 1215; `biology-physiology.ts` 81, 317, 336, 672, 1031; `chart-literacy.ts` 209, 239, 316, 335. Zero in `biology-genetics.ts`, `reasoning-studios.ts` and the stage-13 range of `foundations.ts`. The weakest mapping is `biology-cell.ts:126`, where the misconception describes the belief *behind* option 0 rather than what option 0 states. |

Also noted, below the threshold for a numbered entry: five checks leave one
distractor unrebutted — `chart-check-contour` option 2, `nns-check-encode`
"C7[3:1]", `studio-uncertainty-check` "Exactly 0.300000", `studio-check`, and
`phys-check-clearance` option C. Every other check in scope accounts for all
three distractors.

---

## 3. Judgement calls for a human to rule on

### 3.1 The handoff's own flagged items (section 5, "New, from this session")

Independent verdict on each, reached before consulting the author's reasoning.

**(a) `cell_structure` does not declare a winner between cisternal maturation
and vesicular transport.** *Agree with the author's decision.* The lesson is
built around how a model is tested, and the current consensus genuinely is that
both mechanisms operate for different cargo classes. Declaring a winner would
teach a fact at the cost of the method. One caveat: `cell-check-model`
(line 248) requires the learner to name an observation favouring vesicular
transport, which presupposes the models are live rivals — that framing and the
"both operate" framing sit slightly awkwardly together, but not enough to
change. **No action.**

**(b) The lysosome worked example omits the membrane-potential term.**
*Agree, and it is handled better than the author claims.* The omission is named
in step 5 (line 99–101), the answer says "at least 14.2 kJ", and the arithmetic
is exact both ways (verified, section 4). This is a model of how a hedged
estimate should be written; the *other* hedged figures in the strand (M6, M7)
should be brought up to this standard rather than this one being changed.
Separately: the step treats the lysosomal ΔΨ as lumen-positive, which is the
classical V-ATPase account, though several recent measurements report
lumen-negative resting potentials. Since the step names an omission rather than
claiming a value, this does not need changing. **No action.**

**(c) `physiology_systems` carries four required topics in checks rather than
concept blocks.** *Disagree — the situation is worse than described.* Taking
them one at a time: **gas exchange is not in a check either; it is absent from
the file entirely** (M9). **Respiratory control by CO₂** and **the bicarbonate
link** exist only in `phys-check-respiratory` plus one clause at line 747.
**Digestion** exists only as `phys-check-digestion`, an arithmetic drill. On the
narrow question the author asks — *are the checks answerable?* — yes, both are:
`phys-check-respiratory` hands the learner the regulation statement, the
equilibrium and the Henderson-Hasselbalch form in its own prompt, and
`phys-check-digestion` supplies every number. But none of these topics appears
in the lesson `objectives` or in `phys-summary`, so nothing survives review. My
view: this is a curriculum-design defect, not a correctness one, and the gas
exchange finding should be treated as a correction to the handoff rather than as
a judgement call. **Action needed.**

**(d) Two figures deliberately hedged against naive calculation.** *Split
verdict.* The **intestinal surface area** (360 m² from the model against ~30 m²
measured) is disclosed — but in the `misconception` field, which
`lesson-player.tsx:91` shows only to learners who answer *wrongly* (M7). The
disclosure needs moving, not writing. The **renal glucose threshold** (10 vs the
16 that Tm ÷ GFR returns) is *not* disclosed at all (M6); "in practice" is not a
statement that the arithmetic the sentence invites gives a different answer, and
the mechanism (splay) is never named. My view: (d) is currently one solved
problem filed in the wrong place and one unsolved problem. **Action needed on
both.**

**(e) Three-point cross data are constructed, not sampled.** *Agree, and it is
load-bearing.* Beyond the missing label, the plausibility block converts the
constructed regularity into a stated rule — "the eight classes **must** fall
into four reciprocal pairs of **equal size**" (M4). That sentence is false about
real data and is the one a learner will carry into a real cross. The arithmetic
itself is exact (12.0 / 7.0 cM, direct outer 17.8, c.o.c. 6/8.4 = 0.714,
interference 0.286 → 0.29; all re-derived). **Action needed on the wording, not
the numbers.**

**(f) `linkage_map` shows only the 2:2:2:2 second-division pattern.** *Agree,
and the problem is not confined to the diagram.* The renderer's hard-coded
`secondDivision` array is only the visible symptom; the concept prose at line
920 and the check data at line 932 carry the same omission (M3). Fixing the
diagram alone would leave the misconception intact. Separately, and not flagged
by the author, **this diagram also disagrees with its own caption on the map
distances** — 12 / 8 / 20 in the figure against 12 / 7 / 19 in the caption — and
asserts "so the distances add" without the qualification the surrounding lesson
exists to teach (M2). Of everything in the strand, this figure is the one I
would fix first. **Action needed.**

**(g) `vesicle_traffic` cannot show cisternae *becoming* the next
compartment.** *Agree.* The renderer draws two static side-by-side panels with
notes beneath. The maturation model's defining claim — that a compartment
changes identity over time — is carried entirely in the note text. My view: this
is a genuine limitation of a still diagram and the honest fix is either a
small-multiple strip showing the same cisterna at three times, or an explicit
caption sentence saying the geometry cannot show maturation and the note must
carry it. Low priority relative to (f). **Optional.**

### 3.2 Further calls raised by this audit

- **`biology-cell.ts:490`** — "a fifth to a third of resting energy consumption
  **in neural tissue**" for the Na⁺/K⁺-ATPase. 20–30 per cent is the usual
  whole-body figure; neurons are commonly quoted at 50–70 per cent. Hedged as
  approximate, so not wrong, but it is the least defensible pairing. Suggest "a
  fifth to a third of a typical cell's ATP budget, and more than half in neural
  tissue".
- **`biology-cell.ts:1036–1050`** — the yield example prices ATP at
  +30.5 kJ mol⁻¹ (standard) while three other blocks use ~50 kJ mol⁻¹
  (cellular). Both are correctly labelled and mixing them would be wrong, but a
  learner may not notice the switch. Suggest one clause noting the 32–34 per
  cent figure is a standard-state one.
- **`biology-physiology.ts:292`** — `sig-check-antagonist` option 3 ("M is a
  partial agonist and N is an inverse agonist"). With receptor reserve a partial
  agonist co-applied with a full agonist does depress Emax, so an advanced
  learner could argue for it. My view: not a defect — M is never described as
  producing any response of its own, and the classical
  EC₅₀-unchanged / Emax-reduced signature is unambiguous.
- **`biology-physiology.ts:413`** — epitope given as "fifteen to twenty amino
  acids of surface". Many texts say 5–8 residues for linear epitopes; the
  structural antibody footprint really is ~15–22. Defensible and arguably
  better, since the passage is about conformational patches — but it will look
  wrong against some sources.
- **`biology-physiology.ts:215`** — the Km ↔ EC₅₀ analogy. A good transfer hook,
  but EC₅₀ is not a binding constant, and the amplification the same lesson
  teaches (line 90) creates receptor reserve and decouples EC₅₀ from Kd. Keep
  the analogy; do not call it wrong.
- **`biology-physiology.ts:822`** — `phys-worked-thermo` plausibility invokes
  clinical agreement ("exertional heat illness develops in tens of minutes") for
  a 42 °C figure derived under an explicit zero-heat-loss idealisation. The
  answer string (820) hedges correctly with "Without heat loss"; the plausibility
  flatters the model. Suggest softening.
- **`biology-genetics.ts:331`** — `dna-check-transfer` option 3 says the
  substitution "certainly chang[es] an amino acid in gene B". The exhaustive
  codon sweep (section 4) confirms no two *sense* codons differing only at
  position 2 share an amino acid — but seven sense codons (UUA, UUG, UCA, UCG,
  UGG) can become a **stop** via a second-position change, which truncates rather
  than substitutes. Pedantic, and the keyed option is still the only defensible
  one; worth a human deciding whether "certainly changing the amino acid
  specified" is worth the extra precision.
- **`biology-genetics.ts:609`** — `mend-check-pedigree` asks which mode the
  unaffected son "**alone** definitively excludes". X-linked recessive is
  independently excluded by the affected daughter of an unaffected father, so the
  item can be answered without the reasoning it is designed to test. Answer
  unchanged; item design slightly weaker than intended.
- **`reasoning-studios.ts:150`** — `nns-worked-formula` uses `C6[2:1,2:1,5:2]`,
  whose main chain is 6 while the molecule's longest chain is 7. Legal under the
  notation as defined at that point, and line 138 explicitly warns that one
  molecule has several legal strings — but `nns-check-stem-rule` (209) then adds
  a longest-chain rule that retroactively makes the worked example look
  non-compliant. Suggest a string whose main chain is genuinely longest.
- **`reasoning-studios.ts:948`** — `est-check-limiting` says the surviving
  expression "sends Q to infinity, which is the sensible limit". Strictly,
  Poiseuille's law is derived under a viscous no-slip assumption and fails as
  η → 0; the divergence is a model breakdown, not a prediction. Standard for a
  limiting-case lesson; the pedagogical point is correct. Not a defect.
- **Cross-cutting: what `misconception` is for.** M7 exposed that
  `lesson-player.tsx:88–93` shows `misconception` only on a wrong answer.
  Everywhere in the strand, `misconception` is used as teaching prose — often the
  most careful prose in the block. Whether that is the intended contract is a
  product decision, but it should be a conscious one, and no caveat that a
  learner must see should live there.

---

## 4. The five "came out exact" claims — independently re-derived

Each was recomputed from the lesson's own stated inputs without reference to the
stated result. **All five reproduce.**

**Na⁺/K⁺-ATPase, and specifically the K⁺ term** (`biology-cell.ts:497–544`).
RT = 8.314 × 310 = 2577.34 J mol⁻¹. Na⁺ export (in → out): chemical
RT ln(145/12) = +6422 J; electrical (+1)F(0 − (−0.070)) = +6754 J; total
+13 176 J — both terms correctly positive, Na⁺ being uphill chemically *and*
electrically. K⁺ import (out → in): chemical RT ln(140/4) = +9163 J; electrical
(+1)F(−0.070 − 0) = **−6754 J**; total **+2409 J**. Sign convention, charge,
direction and ion assignment all correct: K⁺ is uphill chemically and downhill
electrically into a negative interior, exactly as the step states. Cycle at 3:2
stoichiometry: 3(13 176) + 2(2409) = **44 347 J = 44.35 kJ per mol ATP**;
44.35 / 50 = 0.887. **Independent cross-check of the K⁺ term by a different
route:** E_K = (RT/F) ln(4/140) = **−94.97 mV**, which is 25.0 mV from −70 mV;
F × 0.025 = **2412 J**, matching the 2409 J obtained by summing two terms.
Verdict: exact, and the K⁺ term survives an independent derivation.

**Plasma osmotic pressure at 7.4 atm** (`biology-cell.ts:462`).
290 mol m⁻³ × 8.314 × 310 = **747 429 Pa = 747.4 kPa = 7.377 atm**. The stated
osmolarity and temperature really do produce the figure; it is not
reverse-engineered. The scaling factor quoted as 2.58 is
8.314 × 310 / 1000 = 2.5773 (see m14). Verdict: exact.

**Three-point cross with interference 0.29**
(`biology-genetics.ts:832–873`). Counts sum to 1000. Rarest class (3 + 3)
differs from the parental class only at the eye marker, fixing the order
bristle – eye – vein. RF(bristle–eye) = (57+57+3+3)/1000 = **0.120**;
RF(eye–vein) = (32+32+3+3)/1000 = **0.070**; direct outer =
(57+57+32+32)/1000 = **0.178** against 0.190, a shortfall of **0.012** = twice
the DCO frequency of 0.006. Expected DCO = 0.120 × 0.070 = **0.0084** =
8.4 per 1000; c.o.c. = 6 / 8.4 = **0.714**; interference = **0.2857 → 0.29**.
Verdict: exact. (The data are constructed — see M4.)

**Exhaustive sweep of all 64 codons** (`biology-genetics.ts:223, 331`). I built
the standard code table independently and swept all 64 × 3 second-position
substitutions. Result: **zero pairs of sense codons differ only at position 2
and encode the same amino acid.** Codons-per-amino-acid distribution recovers the
standard 6/6/6/4/4/4/4/3/2×9/1/1 pattern. The claim's wording — "No **amino
acid** in the standard code is specified by two codons differing only at the
second position" — is exactly right, and is right *because* it says amino acid:
UAA and UGA are both stops and differ only at position 2, so a looser wording
would have been false. Verdict: exact, and carefully worded. One residual edge
case noted in section 3.2.

**Cascade gain of 1.0 × 10⁹** (`biology-physiology.ts:97–141`). Stage factors
taken from the scenario prose (line 102): ×10, ×1, ×10³, ×0.25 (4 cAMP per PKA),
×20, ×20, ×10³. Product = **1 000 000 000 exactly**. It is exact because
0.25 × 20 × 20 = 100 = 10² precisely. Log cross-check: 1 + 3 − 0.60206 + 1.30103
+ 1.30103 + 3 = **9.000000**. Amount: 10⁹ / 6.02 × 10²³ = 1.661 × 10⁻¹⁵ mol =
**1.7 fmol**. Verdict: exact. (The "sharing no arithmetic" claim about the log
route is an overclaim — m17 — but the number is right.)

Also re-derived and confirmed, on the author's other quantitative set-pieces:
the lysosome floor (2.303 × 8.314 × 310 × 2.4 = **14 245 J**, and ~625 free
protons in a 6.545 × 10⁻²⁰ m³ lumen); the bacterial proton-motive force
(−5935 − 13 508 = **−19 442 J mol⁻¹**, ÷ F = **−201.5 mV**); the
Michaelis-Menten and competitive-inhibition data sets, which are exactly
v = 60[S]/(2+[S]) and v = 60[S]/(6+[S]) at every tabulated point, with
Ki = 2.5 µmol dm⁻³; the intestinal 360 m²; Tm ÷ GFR = 16 mmol dm⁻³;
GFR = 12.5 × 10 = 125 cm³ min⁻¹ and 180 dm³ d⁻¹; creatinine clearance
100 cm³ min⁻¹; the hyperventilation pH shift 7.394 → 7.641; the antibody
repertoire 40 × 25 × 6 × 40 × 5 → 1.2 × 10⁶ → 1.2 × 10⁹ from 116 segments; the
ternary-diagram closure to exactly 100.00 per cent; the Poiseuille log-log
exponent n = 4 with k = 30.72; and the half-life worked example, where
k / 2.303 = 0.1505 and log₁₀64 / 12 = 0.1505 agree to four figures.

---

## 5. Confidence

**High** on arithmetic and answer keys. Every worked example and every check in
scope was recomputed from stated inputs in `node` rather than read back from the
text, and every `correctIndex` was re-derived before the key was looked at. 79
of 79 checks resolved; none is mis-keyed, none is unanswerable, and none has a
second defensible option. I would be surprised by a further numerical error in
this strand.

**High** on the positional-reference sweep. `lesson-player.tsx:82` was inspected
rather than assumed, so the A–D / 1-indexed mapping is established; all twelve
surviving references were checked against their own option arrays.

**Moderate** on a handful of literature values where textbooks disagree with
each other and I am relying on recall rather than a source I opened —
specifically m6 (mammalian c-ring), m7 (Na⁺ bilayer permeability), and the
neural-tissue ATP share in section 3.2. These should be checked against
whichever reference the course standardises on.

**Moderate** on the diagram audit. I inspected the seven genetics renderers and
`vesicle_traffic` against their captions and found two mismatches (M1, M2), but
I did not render any of them and I did not systematically audit the renderers for
the other twelve in-scope lessons. **Given a 2-in-8 mismatch rate in the sample I
did check, a full caption-versus-renderer sweep across all 61 diagram renderers
is the single highest-yield remaining task.** The Android walk-through recorded
in the handoff confirmed only that diagrams paint, which is a different property.

**Not checked:** whether these lessons' prerequisites actually teach what they
assume; whether the course outline JSON agrees with the app for these stages;
reading level, `estimatedMinutes`, and prose-scale conformance; and anything
outside stages 10–14.

Overall: **the biology and integration strand is numerically trustworthy and
conceptually about 95 per cent sound.** The three critical defects are all
single-sentence fixes. The most concerning finding is not any individual error
but the pattern behind M1, M2, M5, M8 and M11 — the places where the content
fails are the places where prose *reasons about* a number rather than computing
one, and those are exactly the places the authors' self-verification pass was
not designed to catch.
