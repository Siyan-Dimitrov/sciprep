# Correctness audit — toolkit and physics strands

Scope: stages 00 Science Toolkit, 01 Quantitative Reasoning Toolkit, 07 Physics
Foundations, 08 Forces, Energy and Fluids, 09 Thermal, Waves, Light and
Electricity. Seventeen lessons across four modules:

- `apps/web/lib/lessons/foundations.ts` — lines 3–975 (stage 00, four lessons)
  and lines 1499–2015 (stage 07, two lessons). Lines 977–1498 are chemistry and
  line 2017 onward is the integration studio; both are out of scope.
- `apps/web/lib/lessons/toolkit-advanced.ts` — stage 01, three lessons.
- `apps/web/lib/lessons/physics-mechanics.ts` — stage 08, four lessons.
- `apps/web/lib/lessons/physics-waves-fields.ts` — stage 09, four lessons.

This is a report only. No lesson content was edited and nothing was committed.

## Summary verdict

**The strand is in strong shape. No defect found is severe.**

- **49 worked examples** were recomputed from their own stated inputs. Every one
  reproduces its printed answer. Unit algebra, dimensional consistency and the
  internal cross-checks (the "plausibility" strings) are sound throughout. The
  arithmetic was re-run in `node` rather than checked by eye.
- **78 practice checks** had their `correctIndex` re-derived independently. All
  78 are correct, and in every case the other three options are genuinely wrong
  rather than merely worse. No check was found with two defensible answers.
- **Six defects** are recorded below: **0 high, 1 medium, 5 low.** None changes
  an answer key and none makes a worked example wrong. All six are in
  explanatory or contextual prose.
- **The three positional distractor references the handoff warned about all
  resolve correctly** against the current option order (see D6). They are a
  latent hazard, not a live error.
- **No part of this strand silently assumes statistical inference.** Neither
  does any downstream studio, on a targeted search — see "Verified clean".

Counts in scope: 17 lessons, 49 worked examples, 78 checks.

## Defects

| File:line | Lesson | Block | What is wrong | What it should be | Severity |
| --- | --- | --- | --- | --- | --- |
| `physics-mechanics.ts:674` | `physics.momentum_circular` | `momentum-impulse-check` | The misconception says "Cushioning changes neither the momentum change nor the impulse; both are set before touchdown." The distractor it refutes (line 667) names *the impulse the ground must supply*, and that impulse is not fixed. Taking up as positive, ∫N dt = mv + mgΔt, so extending Δt **increases** the ground's impulse. For a 60 kg gymnast landing at 5 m s⁻¹, a stiff 0.05 s landing needs 329 N s from the ground and a soft 0.30 s landing needs 477 N s — a 45% increase, not "unchanged". Only the *net* impulse is fixed at Δp. | Restrict the claim to the net impulse, or say the ground's impulse rises slightly while the force still falls roughly as 1/Δt. The answer key is unaffected: option 2 is still wrong, because the ground's impulse increases rather than decreases. | Medium |
| `toolkit-advanced.ts:123` | `toolkit.logarithms` | `log-check-laws` | "stopping at 2.0 leaves the answer a hundred times too small". The correct value is 100 and the erroneous one is 2.0, a factor of **50**, not 100. | "fifty times too small", or drop the factor and say the logarithm has not been undone. | Low |
| `toolkit-advanced.ts:32` | `toolkit.logarithms` | `log-purpose` | "Hydrogen ion concentrations **in living systems** run from about 10⁻¹ to 10⁻¹⁴ mol L⁻¹." That is the range of the pH scale, not of living systems. The alkaline end of biology stops near pH 8 for body fluids (pH ~12 in a few insect guts); nothing living sits at pH 14. | Either drop "in living systems" and present it as the range of the pH scale, or narrow the stated range. Same sentence: sound intensities the ear handles "comfortably" spanning twelve orders of magnitude reaches the pain threshold at the top. | Low |
| `physics-waves-fields.ts:1054` | `physics.electricity` | `elec-ohm` | "A 1.5 V cell supplies 1.5 J of energy to every coulomb it pushes **through the external circuit**." E.m.f. is the energy per coulomb supplied to the *complete* circuit; with internal resistance the external circuit receives less than the e.m.f. per coulomb. The preceding clause gets this right ("as it drives charge round the circuit"), so the block contradicts itself in two consecutive sentences. | "round the complete circuit". Harmless while every source in the course has negligible internal resistance, but it is the wrong definition to install. | Low |
| `physics-waves-fields.ts:113` | `physics.thermal` | `heat-check-capacity` | Distractor at index 3 reads "…because oil is denser than water". Olive oil is about 910 kg m⁻³ and water 1000 kg m⁻³, so the clause asserts a false fact, and no explanation or misconception string corrects it. | Replace the reason clause, or correct it in the explanation. The option is correctly keyed as wrong; the risk is a learner absorbing the density claim. | Low |
| `toolkit-advanced.ts:501`, `:518`, `:710` | `toolkit.proportional_reasoning`, `toolkit.experimental_design` | `prop-check-units`, `prop-check-limiting`, `exp-check-controls` | Three `explanation`/`misconception` strings still name distractors by position ("the first candidate", "the fourth", "the third", "the first option"). **All three were checked and all resolve correctly** against the current option order. They are the failure mode section 2 of the handoff describes: they will corrupt silently if options are ever permuted. | Name the claim rather than the position, as the three rewritten strings elsewhere now do. Latent, not live. | Low |

## Judgement calls for a human to rule on

1. **Bernoulli and Poiseuille are both applied to blood two blocks apart with no
   reconciliation** — `physics-mechanics.ts:1090` (inviscid, "where the speed is
   higher the pressure is lower"), `:1101` (viscous, flow ∝ r⁴), then
   `fluids-continuity-check` at `:1110` (blood speeds up ×4 through a narrowing)
   and `fluids-radius-check` at `:1124` (blood flow falls to 1/16 through a
   narrowing). Both are correct: the first fixes the volume flow, the second
   fixes the pressure difference, and each stem states its own assumption. But
   they describe mutually exclusive regimes — Bernoulli assumes negligible
   viscosity, Poiseuille is entirely a viscosity result — and a learner meeting
   them within two blocks, both about a narrowed vessel, has been given no way
   to see why the two answers do not conflict. This is the single most
   consequential pedagogical decision in my strand. One sentence naming which
   question each answers would settle it.
2. **"This trade-off explains lift on an aircraft wing"** (`:1090`). Defensible
   as written — it does not commit the equal-transit-time fallacy — but
   attributing lift to Bernoulli unqualified is a contested textbook
   simplification. A house decision.
3. **Four topics are taught inside blocks whose titles announce something else,
   and none of the four is assessed.** Resonance sits in paragraph 1 of a block
   titled "Intensity thins out with distance" (`physics-waves-fields.ts:556`),
   although resonance is named in the lesson title and appears in no objective.
   The Doppler effect gets one sentence at `:558`, absent from objectives and
   summary. Capacitance is introduced in paragraph 3 of a block titled "Power
   has three forms" (`:1223`). The wording ladder "consistent with / supports /
   proves" is paragraph 3 of a block about random versus systematic error
   (`toolkit-advanced.ts:799`), although it is a stated objective. Content is
   correct in all four; discoverability is the issue.
4. **The trial worked example never mentions chance** —
   `toolkit-advanced.ts:760`. Step 5 declares a causal claim defensible on the
   strength of randomisation and blinding alone. The confounding block at
   `:718` correctly lists four rival explanations including "the association
   arose by chance in this particular sample", and that fourth one is then never
   picked up. As it happens 30/100 against 45/100 is conventionally significant
   (χ² ≈ 4.9, p ≈ 0.03), so the example survives; the reasoning move is simply
   absent. Consistent with the course teaching no inference — section 3 of the
   handoff — but this is the block where its absence is most visible.
5. **No propagation of uncertainty anywhere in the strand.** The only treatment
   is half-the-range at `foundations.ts:150`, and no physics worked example
   quotes an uncertainty. Fine as a scope decision; worth stating explicitly
   somewhere if learners are meant to notice.
6. **`forces-incline-check` stipulates a crate that does not move as a ramp goes
   from 30° to 60°** (`physics-mechanics.ts:169`). That needs μₛ ≥ tan 60° ≈
   1.73, which few real surface pairs reach. The stipulation is explicit and the
   question is about resolving components, so nothing is wrong — but the scenario
   quietly asserts something a physically alert learner would query.
7. **A 30° banked public road** (`physics-mechanics.ts:773`). Internally
   consistent and the design speed of 66 km h⁻¹ is sensible, but real highway
   superelevation rarely exceeds about 7°; 30° is racetrack geometry. The
   plausibility note vouches for the speed, not for the bank angle.
8. **"Imaging cannot resolve structures much smaller than about a wavelength"**
   (`physics-waves-fields.ts:420`). The diffraction ideal. Clinical axial
   resolution is roughly half the spatial pulse length, typically about two
   wavelengths, so the stated limit is optimistic by around a factor of two. The
   teaching point — higher frequency resolves finer — is unaffected.
9. **"Damage depends on the energy delivered per photon, not on the number of
   photons arriving"** (`physics-waves-fields.ts:691`). Whether a bond can break
   depends on photon energy; how much damage occurs depends on dose as well. The
   lesson's own check states it precisely at `:761` ("only photon energy
   determines whether a given transition or bond rupture is possible"); the
   concept block overreaches relative to its own check.
10. **Spring formula, pendulum conclusion** (`physics-waves-fields.ts:361`).
    "The period of a mass on a spring, T = 2π√(m/k), depends only on the mass and
    the stiffness… This is why a pendulum clock keeps time as its swing decays."
    The pendulum's period is not the formula quoted, and its amplitude
    independence holds only under the small-angle approximation — which the
    lesson does state one paragraph earlier. Correct on a careful reading,
    loose on a fast one.
11. **Significant figures carry a guard digit in places.**
    `physics-mechanics.ts:223` reports 771 N from an acceleration given to two
    significant figures (770 N would be defensible); `:143` and `:149` quote
    42.5 N from a 5.0 kg mass. Consistent enough to look deliberate, and never
    misleading. Worth a house rule rather than case-by-case edits.

## Verified clean

Recorded so the next reviewer does not repeat the work.

- Every `correctIndex` in all 78 checks re-derived: correct, with all three
  distractors genuinely wrong. Distractors encode real errors and several are
  reverse-engineered from the specific slip they punish (sin instead of cos at
  `physics-mechanics.ts:395`; grams instead of kilograms at
  `physics-waves-fields.ts:311`; dividing by dry-gas pressure at `:292`).
- Every worked answer recomputed from its own inputs and every one reproduces
  the printed value, exactly or to the stated rounding. The ones worth trusting
  most, because two independent routes agree inside the example itself —
  `energy-two-ways-worked` (forces and energy both give 9.905 m s⁻¹),
  `log-worked-decay` (repeated halving and e⁻ᵏᵗ both give 0.750 mg L⁻¹),
  `fluids-hydraulic-worked` (60 J in, 60 J out), `elec-worked-network` (branch
  currents sum to 2.0 A and the two p.d.s to 18.0 V).
- Constants: g = 9.81, R = 8.31 J K⁻¹ mol⁻¹, c = 3.00 × 10⁸ m s⁻¹,
  h = 6.63 × 10⁻³⁴ J s, e = 1.60 × 10⁻¹⁹ C, I₀ = 1.0 × 10⁻¹² W m⁻²,
  c_water = 4180 J kg⁻¹ K⁻¹, L_fus = 3.34 × 10⁵, L_vap = 2.26 × 10⁶,
  n_water = 1.33, membrane capacitance 1.0 × 10⁻² F m⁻². All standard and all
  used consistently. Molar volumes at 273 K and 298 K reproduce 22.4 and
  24.4 dm³ from the quoted R. Alveolar partial pressures sum to 101.3 kPa and
  match standard physiology.
- Domains of validity are stated where they matter: ideal gas
  (`physics-waves-fields.ts:211`), ohmic (`:1055`), Bernoulli's inviscid
  assumption (`physics-mechanics.ts:1090`), laminar flow (`:1101`),
  Beer–Lambert's dilute non-scattering assumption
  (`physics-waves-fields.ts:922`), small-angle SHM (`:360`), thin lens (`:852`).
- Sign and direction conventions are handled carefully and consistently:
  negative acceleration is explicitly separated from slowing
  (`foundations.ts:1672`), braking sign depends on the chosen positive direction
  (`:1744`), signed versus absolute area on a velocity–time graph (`:1923`),
  vector momentum (`physics-mechanics.ts:594`), conventional current against
  electron drift (`physics-waves-fields.ts:1033`), real-is-positive lens
  convention (`:852`).
- Third-law treatment (`physics-mechanics.ts:189`) and centripetal-force-as-a-role
  treatment (`:752`) are both unusually careful and free of the standard errors.
- All `nextLessonId` links inside the strand and at both boundaries are intact:
  `analytical-techniques.ts:367` → `physics.describing_motion`,
  `foundations.ts:972` → `toolkit.logarithms`, `foundations.ts:2012` →
  `physics.forces_newton`, `physics-waves-fields.ts:1320` →
  `biology.cell_structure`.
- Statistical inference: a search of all four in-scope modules for
  significance, p-values, confidence intervals, standard error, standard
  deviation and chi-squared returns nothing that assumes them. A targeted search
  of `reasoning-studios.ts` and `chart-literacy.ts` (stage 14, another
  reviewer's scope) turns up three mentions, none of which requires a formal
  test. `toolkit.proportional_reasoning` supplies no inference, and nothing in
  this strand needs it to.
