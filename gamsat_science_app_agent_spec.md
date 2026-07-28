---
title: "GAMSAT Science Learning App — CLI Agent Build Specification"
version: "1.0"
status: "implementation-ready"
last_updated: "2026-07-28"
primary_audience: "Autonomous coding agent operating in a CLI environment"
product_scope: "GAMSAT Section 3 preparation: biomolecular biology, chemistry, physics, and cross-cutting scientific reasoning"
---

# GAMSAT Science Learning App — CLI Agent Build Specification

## 0. Agent mandate

You are the implementation agent for a web-first learning application that helps students prepare for the science component of the Graduate Medical School Admissions Test (GAMSAT), with particular emphasis on:

1. Biomolecular biology and biochemistry.
2. General, physical, and introductory organic chemistry.
3. Algebra-based physics.
4. Scientific reasoning across passages, graphs, tables, equations, and experimental scenarios.

Build a reasoning-first learning system rather than a digital textbook or generic flashcard app.

The product must teach the minimum prerequisite science needed to solve unfamiliar problems, then repeatedly require the learner to retrieve, apply, discriminate, and integrate that knowledge under progressively more realistic time pressure.

## 1. Core product thesis

The science component of GAMSAT is best treated as a **reasoning-under-time-pressure examination built on bounded prerequisite knowledge**.

The application must therefore optimise for five outcomes:

- **Conceptual sufficiency:** the learner knows the core scientific principles required to understand the stimulus.
- **Transfer:** the learner can apply familiar principles in unfamiliar contexts.
- **Representation fluency:** the learner can move between prose, equations, diagrams, graphs, tables, and mechanisms.
- **Decision efficiency:** the learner can identify the relevant information and avoid unnecessary calculation.
- **Endurance:** the learner can sustain accuracy and pacing over an extended timed session.

Do not optimise primarily for time spent reading notes, total flashcards reviewed, or superficial completion metrics.

## 2. Official-exam assumptions

Use these as configurable defaults, not hard-coded permanent truths:

- Science section length: approximately 75 multiple-choice questions.
- Approximate duration: 150 minutes.
- Approximate discipline weighting:
  - Biology: 40%.
  - Chemistry: 40%.
  - Physics: 20%.
- Scientific knowledge level:
  - Biology and chemistry: broadly first-year university level.
  - Physics: broadly senior-secondary/A-level level.
- Stimuli may contain:
  - Scientific prose.
  - Equations.
  - Graphs.
  - Tables.
  - Experimental designs.
  - Schematics and diagrams.
- The examination primarily rewards reasoning, interpretation, estimation, and application rather than encyclopaedic recall.
- Questions should be attempted strategically because there is ordinarily no advantage in leaving answerable items blank.

### 2.1 Verification rule

Before any public release, re-check the current ACER GAMSAT information booklet and preparation guidance. Store exam configuration in an editable `exam_config` table or versioned configuration file so timing, section length, interface rules, and discipline weighting can be updated without code changes.

## 3. Non-negotiable constraints

### 3.1 Copyright and item provenance

- Do not reproduce, paraphrase, scrape, memorise, or reverse-engineer official ACER questions.
- Do not import questions from piracy sites, recalled-question forums, commercial preparation packs, or unauthorised repositories.
- Generate only original items that are **isomorphic in reasoning demand**, not derivative in wording or scenario.
- Every item must have a provenance record containing:
  - Author or generator.
  - Creation date.
  - Scientific sources used.
  - Review history.
  - Similarity-screen status.
  - Publication status.

### 3.2 Score claims

- Do not claim to predict an official GAMSAT score exactly.
- Do not convert raw app percentages into official scaled scores unless a defensible externally validated model is later developed.
- Use language such as:
  - Readiness estimate.
  - Timed-performance band.
  - Domain mastery.
  - Pace stability.
  - Retention stability.

### 3.3 Scientific integrity

- Every explanation must be scientifically correct at the intended level.
- Every quantitative item must be independently recalculated.
- Every graph and table must be internally consistent.
- No question may rely on an unstated convention unless that convention is reasonable for the stated prerequisite level.
- Ambiguous distractors are defects, not acceptable difficulty.

### 3.4 AI limitations

- Generative AI may draft questions, explanations, and hints, but no AI-authored item may be published without automated checks and human subject-matter review.
- The AI tutor must not hallucinate exam rules, scientific facts, or official score conversions.
- The AI tutor must acknowledge uncertainty and route questionable content for review.

## 4. Target users

Support at least four learner profiles.

### 4.1 Non-science graduate

Needs explicit foundations, worked examples, low initial cognitive load, and gradual transition to passage-based reasoning.

### 4.2 Science graduate with uneven knowledge

Needs diagnostic identification of weak domains, rapid review, and high transfer practice.

### 4.3 Strong science learner with poor timing

Needs pacing, estimation, triage, and endurance training rather than extensive content teaching.

### 4.4 Repeat candidate

Needs error-pattern diagnosis, misconception repair, confidence calibration, and differentiated practice rather than repetition of a generic course.

## 5. Product principles

1. **Questions before notes:** most sessions should require retrieval or application within the first few minutes.
2. **Short teaching, long practice:** lessons should be concise and tightly linked to practice.
3. **Passages dominate:** passage-based multi-item sets should be the core assessment format.
4. **Foundations are conditional:** teach detailed background only when it improves performance on reasoning tasks.
5. **Difficulty is multidimensional:** difficulty must not be equated merely with harder arithmetic.
6. **Feedback diagnoses the reasoning error:** explanations must address why the chosen distractor was attractive.
7. **Mixed practice follows initial clarity:** begin with limited blocking, then interleave related concepts.
8. **Mastery includes speed and retention:** correct but slow or quickly forgotten knowledge is not exam-ready.
9. **The application must be useful without AI chat:** core pedagogy, scheduling, scoring, and feedback cannot depend entirely on an LLM.
10. **Content quality outranks content volume:** unreliable items damage learning and analytics.

## 6. MVP definition

The MVP must include:

- User accounts and onboarding.
- Target-exam date and weekly availability.
- Baseline diagnostic.
- Curriculum map.
- Short concept lessons.
- Worked examples.
- Discrete foundation drills.
- Passage-based question sets.
- Graph/table/diagram interpretation practice.
- Timed mini-tests.
- One full-length science-section simulation mode.
- Spaced-review flashcards.
- Error log.
- Weak-area dashboard.
- Response-time tracking.
- Confidence ratings.
- Tiered hints.
- Original-content authoring and review workflow.
- Basic adaptive session planning using deterministic rules.

Do not make advanced IRT, Bayesian knowledge tracing, social features, or unlimited AI question generation prerequisites for the MVP.

## 7. Recommended MVP content volume

Use these as planning targets:

- 45–60 concise lessons.
- 60–80 worked examples.
- 60 original passage stimuli.
- 3–5 questions per passage.
- 240–300 passage-based MCQs.
- 120–180 discrete foundation questions.
- 250–400 atomic flashcards.
- 2 diagnostic forms.
- 6 timed mini-tests.
- 3 half-section tests.
- 1 full 75-question science simulation.

A smaller pilot is acceptable if content quality is high and the system is designed to scale.

## 8. Curriculum blueprint

Tag every content object to one or more knowledge components. The taxonomy must be exam-facing rather than organised only like a university textbook.

## 8.1 Cross-cutting scientific reasoning

These skills must be represented across all disciplines.

### P0: essential

- Proportional reasoning.
- Ratios and rates.
- Scientific notation.
- Unit conversion.
- Dimensional analysis.
- Algebraic rearrangement.
- Estimation and order-of-magnitude reasoning.
- Reading graph axes, scales, legends, error bars, and trends.
- Using slope and area conceptually.
- Reading tables efficiently.
- Distinguishing correlation from causation.
- Identifying independent, dependent, and controlled variables.
- Evaluating controls and confounders.
- Comparing models with data.
- Recognising direct and inverse relationships.
- Translating verbal descriptions into equations or diagrams.
- Eliminating options using bounds, signs, units, or limiting cases.

### P1: important

- Logarithmic scales.
- Uncertainty and measurement error.
- Interpolation and cautious extrapolation.
- Experimental validity and reliability.
- Multi-stage causal reasoning.
- Integrating information from two representations.
- Identifying assumptions.
- Selecting the simplest adequate model.

## 8.2 Biomolecular biology and biochemistry

### P0 topics

#### Chemistry of life

- Water, polarity, hydrogen bonding, hydrophobic interactions.
- pH, acids, bases, buffers.
- Functional groups relevant to biomolecules.
- Non-covalent interactions.

#### Biological macromolecules

- Protein structure and function.
- Amino-acid properties at a practical level.
- Carbohydrates and glycosidic linkage concepts.
- Lipids, phospholipids, membranes.
- DNA and RNA structure.

#### Membranes and transport

- Diffusion.
- Osmosis.
- Facilitated diffusion.
- Active transport.
- Electrochemical gradients.
- Membrane permeability.
- Tonicity relative to the cell.

#### Enzymes

- Activation energy.
- Enzyme-substrate interaction.
- Saturation.
- Competitive and non-competitive inhibition.
- Effects of temperature, pH, and concentration.
- Michaelis–Menten interpretation at a conceptual and simple quantitative level.
- Meaning of `Vmax` and `Km`.

#### Genetics and gene expression

- DNA replication.
- Transcription.
- Translation.
- Codons and reading frames.
- Mutation effects.
- Gene regulation.
- Mendelian probability.
- Genotype versus phenotype.
- Dominance, recessiveness, penetrance, and expression as distinct ideas.

#### Metabolism and bioenergetics

- ATP coupling.
- Oxidation and reduction in metabolism.
- Glycolysis, TCA cycle, oxidative phosphorylation at input/output and regulation level.
- Fermentation.
- Metabolic pathway perturbation.
- Energy balance and free-energy directionality.

#### Cell signalling and regulation

- Receptors.
- Second messengers.
- Phosphorylation cascades.
- Signal amplification.
- Feedback regulation.
- Agonists, antagonists, inhibitors.

#### Human physiology

- Homeostasis and negative feedback.
- Cardiovascular flow and pressure.
- Respiratory gas exchange.
- Renal filtration and concentration at a systems level.
- Acid-base physiology.
- Endocrine control.
- Digestion and absorption.
- Nervous-system signalling fundamentals.

#### Experimental biology

- Interpreting blots, assays, dose-response curves, growth curves, and enzyme data.
- Knockout, inhibition, overexpression, and mutation logic.
- Controls and normalisation.
- Predicting pathway consequences.

### P1 topics

- Cell cycle and apoptosis.
- Immunology fundamentals.
- Population genetics basics.
- Evolutionary reasoning.
- Photosynthesis basics.
- Receptor pharmacology basics.
- Basic epidemiological measures when embedded in biological data.

### P2 topics

Teach only when needed by a passage:

- Detailed taxonomy.
- Exhaustive anatomy.
- Memorisation of complete metabolic pathways.
- Advanced molecular techniques.
- Specialist immunology.

## 8.3 Chemistry

### P0 topics

#### Quantitative foundations

- Moles and molar mass.
- Concentration.
- Dilution.
- Stoichiometry.
- Limiting reagents.
- Percentage yield.
- Empirical and molecular formulae.

Core equations:

```text
n = m / M
c = n / V
C1V1 = C2V2
```

#### Atomic structure and periodicity

- Protons, neutrons, electrons.
- Isotopes.
- Electron configuration at a useful level.
- Effective nuclear charge.
- Atomic and ionic radius.
- Ionisation energy.
- Electronegativity.

#### Bonding and structure

- Ionic and covalent bonding.
- Polarity.
- Intermolecular forces.
- Molecular geometry.
- Resonance at an introductory level.
- Structure-property relationships.

#### Gases and solutions

- Ideal gas law.
- Partial pressure.
- Solubility.
- Concentration units.
- Colligative concepts where passage-supported.

Core equation:

```text
PV = nRT
```

#### Thermochemistry and thermodynamics

- Heat, temperature, and heat capacity.
- Enthalpy.
- Entropy.
- Gibbs free energy.
- Exothermic versus endothermic.
- Spontaneity versus rate.

Core equations:

```text
q = mcΔT
ΔG = ΔH - TΔS
ΔG° = -RT ln K
```

#### Kinetics

- Reaction rate.
- Rate laws at a practical level.
- Activation energy.
- Catalysts.
- Collision theory.
- Reading concentration-time and rate plots.

#### Equilibrium

- Dynamic equilibrium.
- Equilibrium constants.
- Reaction quotient.
- Le Châtelier reasoning.
- Coupled equilibria.

#### Acids, bases, and buffers

- Strong versus weak.
- Conjugate pairs.
- pH and pOH.
- `Ka`, `Kb`, and qualitative strength.
- Buffers.
- Titration curves.
- Henderson–Hasselbalch.

Core equations:

```text
pH = -log10[H3O+]
pH + pOH = 14  # only under the stated conventional conditions
pH = pKa + log10([A-] / [HA])
```

#### Redox and electrochemistry

- Oxidation states.
- Balancing redox changes.
- Galvanic and electrolytic concepts.
- Electron flow.
- Cell potential.
- Concentration effects where passage-supported.

#### Introductory organic chemistry

- Functional groups.
- Nucleophile/electrophile concepts.
- Acidity/basicity trends.
- Isomerism.
- Substitution, addition, elimination, oxidation, and reduction as pattern recognition.
- Biomolecule-relevant reactions.

### P1 topics

- Solubility product.
- Nernst equation.
- Spectroscopy interpretation when passage-supported.
- Simple mechanism reasoning.
- Polymer chemistry.
- Stereochemistry.

### P2 topics

- Memorisation of named reactions.
- Advanced synthesis planning.
- Detailed quantum chemistry.
- Specialist inorganic chemistry.

## 8.4 Physics

### P0 topics

#### Mathematical and measurement foundations

- Units.
- Prefixes.
- Significant figures.
- Vector versus scalar.
- Graphical interpretation.
- Estimation.

#### Kinematics

- Displacement, velocity, acceleration.
- Constant-acceleration equations.
- Motion graphs.

Core equations:

```text
v = u + at
s = ut + 1/2 at^2
v^2 = u^2 + 2as
```

#### Dynamics

- Newton's laws.
- Weight, normal force, friction, tension.
- Free-body diagrams.
- Circular motion as a net-force condition.

Core equation:

```text
F = ma
```

#### Work, energy, and power

- Work.
- Kinetic energy.
- Gravitational potential energy.
- Conservation of energy.
- Efficiency.
- Power.

Core equations:

```text
W = Fd cos(theta)
KE = 1/2 mv^2
GPE = mgh
Power = Energy / time
```

#### Momentum and impulse

- Momentum.
- Impulse.
- Conservation in simple collisions.

Core equations:

```text
p = mv
Impulse = Δp
```

#### Fluids

- Density.
- Pressure.
- Hydrostatic pressure.
- Buoyancy.
- Continuity and Bernoulli concepts where appropriate.

Core equations:

```text
rho = m / V
P = F / A
P = P0 + rho gh
```

#### Thermal physics

- Heat transfer.
- Specific heat.
- Phase change.
- Thermal expansion.
- Ideal gases.

#### Waves and sound

- Frequency.
- Wavelength.
- Wave speed.
- Amplitude and intensity.
- Interference.
- Resonance.
- Doppler effect when passage-supported.

Core equation:

```text
v = f lambda
```

#### Electricity and circuits

- Charge.
- Current.
- Potential difference.
- Resistance.
- Ohm's law.
- Series and parallel circuits.
- Electrical power and energy.
- Capacitor fundamentals when passage-supported.

Core equations:

```text
I = Q / t
V = IR
P = IV = I^2R = V^2 / R
```

#### Optics

- Reflection.
- Refraction.
- Basic lenses.
- Magnification.
- Ray interpretation.

### P1 topics

- Electrostatics.
- Magnetic fields and induction.
- Rotational mechanics.
- Simple harmonic motion.
- Radioactivity and half-life.
- Atomic-energy concepts.

### P2 topics

- Advanced electromagnetism.
- Relativity.
- Quantum mechanics beyond passage-contained reasoning.
- Detailed nuclear models.

## 9. Likely GAMSAT-style question archetypes

The application must train recurring reasoning forms rather than only topic recall.

## 9.1 Passage extraction

The learner identifies which details in a dense stimulus are relevant to the question.

Typical traps:

- Using an impressive but irrelevant datum.
- Assuming every number must be used.
- Importing outside knowledge when the passage defines a local model.

## 9.2 Graph interpretation

The learner reads direction, slope, area, threshold, plateau, logarithmic scale, error bar, or relative change.

Typical traps:

- Confusing absolute with percentage change.
- Ignoring axes or units.
- Reading correlation as mechanism.
- Extrapolating outside the displayed range.

## 9.3 Table synthesis

The learner combines two or more rows or columns to make an inference.

Typical traps:

- Comparing non-equivalent groups.
- Ignoring normalisation.
- Using the wrong denominator.

## 9.4 Mechanistic perturbation

The learner predicts the effect of inhibition, activation, mutation, removal, addition, or changed boundary conditions.

Typical traps:

- Reasoning in only one step.
- Ignoring feedback.
- Confusing direct and downstream effects.

## 9.5 Quantitative modelling

The learner selects or derives a relationship, substitutes values, and evaluates whether the answer is plausible.

Typical traps:

- Formula-first behaviour without modelling.
- Unit inconsistency.
- Sign error.
- Incorrect proportionality.
- Excess precision.

## 9.6 Limiting-case reasoning

The learner tests what happens when a variable approaches zero, becomes very large, reaches equilibrium, or saturates.

Typical traps:

- Treating equations as symbol manipulation only.
- Missing physical or biological bounds.

## 9.7 Experimental design

The learner identifies the appropriate control, variable, measurement, or conclusion.

Typical traps:

- Confusing technical replication with biological replication.
- Claiming causation from observational evidence.
- Ignoring a confounder.

## 9.8 Representation translation

The learner converts between verbal, graphical, tabular, algebraic, and diagrammatic forms.

Typical traps:

- Preserving the surface form rather than the underlying relationship.

## 9.9 Multi-domain integration

The learner combines, for example:

- Diffusion with partial pressure.
- Acid-base chemistry with physiology.
- Fluid mechanics with cardiovascular biology.
- Thermodynamics with metabolism.
- Electrochemistry with membrane potential.

Use cross-domain integration only after the component concepts have been introduced.

## 10. Difficulty model

Do not define difficulty solely by calculation length.

Represent difficulty using the following dimensions:

```yaml
difficulty_dimensions:
  prerequisite_depth: 1-5
  reasoning_steps: 1-5
  information_density: 1-5
  representation_count: 1-5
  distractor_similarity: 1-5
  algebraic_complexity: 1-5
  context_novelty: 1-5
  time_pressure_sensitivity: 1-5
```

### 10.1 Difficulty bands

#### Foundation

- One core concept.
- Familiar representation.
- One or two reasoning steps.
- Low distractor similarity.
- Usually untimed or lightly timed.

#### Applied

- Unfamiliar context.
- Two to three reasoning steps.
- Graph, table, or simple equation integration.
- Plausible misconception-based distractors.

#### Advanced

- High information density.
- Multiple representations.
- Three or more dependent reasoning steps.
- Close distractors.
- Requires modelling, estimation, or elimination under realistic timing.

Hard questions must remain solvable from the stated prerequisites and stimulus.

## 11. Question-authoring standard

## 11.1 Passage structure

A passage should normally contain:

- 120–450 words, depending on difficulty.
- One coherent scientific scenario.
- At least one information-bearing representation where appropriate.
- Three to five linked MCQs.
- Enough information to answer the questions without obscure specialist knowledge.
- Original names, values, diagrams, and contexts.

## 11.2 MCQ structure

Every item must have:

- One clearly best answer.
- Four answer options by default.
- A concise stem.
- Options that are grammatically parallel where feasible.
- No dependence on trick wording such as double negatives unless the skill being tested requires it.
- An explanation for the correct answer.
- An explanation for each distractor.
- A primary knowledge-component tag.
- Secondary tags where required.
- An expected response-time range.
- A difficulty profile.

## 11.3 Distractor taxonomy

Use distractors generated from identifiable error processes:

- Unit-conversion error.
- Sign error.
- Decimal or order-of-magnitude error.
- Direct-versus-inverse proportionality reversal.
- Wrong denominator.
- Axis misread.
- Slope-versus-value confusion.
- Equilibrium-equals-equal-concentration misconception.
- Dominant-means-common misconception.
- Current-is-used-up misconception.
- Velocity-versus-acceleration confusion.
- Pressure-versus-force confusion.
- Spontaneity-versus-rate confusion.
- Competitive-versus-non-competitive inhibition confusion.
- Upstream-versus-downstream causal reversal.
- Correlation-versus-causation error.
- Correct intermediate result followed by wrong conclusion.
- Correct principle applied to the wrong system boundary.

Every distractor should be traceable to at least one misconception or procedural error.

## 11.4 Item-quality checklist

An item cannot be published unless all are true:

- [ ] The stimulus is original.
- [ ] The scientific facts are correct.
- [ ] All numerical values are internally consistent.
- [ ] The correct answer has been independently solved.
- [ ] Exactly one option is best under the stated assumptions.
- [ ] Distractors are plausible but not defensible as equally correct.
- [ ] The item tests the tagged skill.
- [ ] Required outside knowledge does not exceed the prerequisite tags.
- [ ] Units and significant figures are appropriate.
- [ ] The explanation addresses the reasoning process.
- [ ] Accessibility text exists for diagrams.
- [ ] The item passed similarity screening.
- [ ] The item passed SME review.
- [ ] The item passed editorial review.

## 12. Content data model

Store lessons, concepts, questions, passages, hints, explanations, and source records as structured content rather than opaque HTML.

### 12.1 Example knowledge-component schema

```json
{
  "id": "chem.acid_base.buffers.henderson_hasselbalch",
  "name": "Henderson-Hasselbalch reasoning",
  "discipline": "chemistry",
  "priority": "P0",
  "description": "Predict and calculate buffer behaviour using acid/base ratio reasoning.",
  "prerequisites": [
    "chem.acid_base.pH_log_scale",
    "chem.equilibrium.weak_acids",
    "cross.quantitative.ratios"
  ],
  "misconceptions": [
    "buffers_keep_pH_perfectly_constant",
    "pH_changes_linearly_with_hydrogen_ion_concentration"
  ],
  "mastery_policy": {
    "minimum_attempts": 8,
    "minimum_mixed_accuracy": 0.8,
    "minimum_timed_accuracy": 0.7,
    "maximum_hint_rate": 0.2
  }
}
```

### 12.2 Example passage schema

```json
{
  "id": "passage_bio_enzyme_001",
  "title": "Temperature-dependent enzyme assay",
  "discipline_mix": ["biomolecular", "chemistry"],
  "stimulus_markdown": "...",
  "assets": [
    {
      "type": "graph",
      "src": "/content/assets/enzyme_001.svg",
      "alt": "Reaction rate against temperature for wild-type and mutant enzyme"
    }
  ],
  "knowledge_components": [
    "bio.enzymes.temperature_effects",
    "cross.graphs.curve_interpretation"
  ],
  "source_records": ["src_openstax_biology_ch06"],
  "author": "content_team",
  "review_status": "approved",
  "version": 3
}
```

### 12.3 Example item schema

```json
{
  "id": "item_bio_enzyme_001_q1",
  "passage_id": "passage_bio_enzyme_001",
  "stem": "Which conclusion is best supported by the data?",
  "options": [
    {"id": "A", "text": "..."},
    {"id": "B", "text": "..."},
    {"id": "C", "text": "..."},
    {"id": "D", "text": "..."}
  ],
  "correct_option": "C",
  "explanation": {
    "summary": "...",
    "reasoning_steps": ["...", "..."],
    "why_others_are_wrong": {
      "A": "...",
      "B": "...",
      "D": "..."
    },
    "faster_method": "..."
  },
  "hints": [
    {"level": 1, "text": "Identify what differs between the two curves."},
    {"level": 2, "text": "Compare both peak position and maximum rate."},
    {"level": 3, "text": "..."}
  ],
  "primary_kc": "bio.enzymes.temperature_effects",
  "secondary_kcs": ["cross.graphs.curve_interpretation"],
  "cognitive_skills": ["data_interpretation", "inference"],
  "difficulty": {
    "band": "applied",
    "reasoning_steps": 2,
    "information_density": 2,
    "distractor_similarity": 3,
    "context_novelty": 2
  },
  "expected_time_seconds": 105,
  "distractor_error_codes": {
    "A": "reads_single_point_only",
    "B": "confuses_optimum_with_maximum_rate",
    "D": "causal_overclaim"
  },
  "review": {
    "scientific": "approved",
    "editorial": "approved",
    "copyright": "approved"
  },
  "version": 2
}
```

## 13. Lesson design

Lessons must be concise, active, and assessment-linked.

### 13.1 Lesson template

```markdown
# Lesson title

## Why this matters in GAMSAT-style reasoning

One paragraph linking the concept to common passage or question forms.

## Learning objectives

- Objective 1.
- Objective 2.
- Objective 3.

## Prerequisites

- Knowledge component A.
- Knowledge component B.

## Core model

250–600 words, diagrams where useful, and no unnecessary textbook detail.

## Worked example

A fully explained example showing:

1. How to identify the model.
2. How to select relevant information.
3. How to solve.
4. How to check plausibility.
5. How to solve faster under time pressure.

## Misconceptions

- Misconception 1 and correction.
- Misconception 2 and correction.
- Misconception 3 and correction.

## Retrieval checks

Three to five short questions.

## Exit rule

Define the accuracy or evidence required to unlock the next linked activity.
```

### 13.2 Worked-example fading

For multi-step chemistry and physics:

1. Fully worked example.
2. Completion problem with the final step omitted.
3. Completion problem with multiple steps omitted.
4. Independent untimed item.
5. Independent timed item.
6. Mixed passage transfer item.

For biological mechanisms:

1. Annotated pathway.
2. Guided perturbation prediction.
3. Partially labelled pathway.
4. Independent perturbation item.
5. Multi-step passage item.

## 14. Explanation framework

Every item explanation should contain the following layers.

### Layer 1: answer

State the correct option and one-sentence reason.

### Layer 2: reasoning path

Show the smallest complete chain of reasoning.

### Layer 3: distractor diagnosis

Explain why each incorrect option is attractive and why it fails.

### Layer 4: faster route

Show any unit, sign, bound, proportion, or elimination shortcut.

### Layer 5: transfer rule

End with a generalisable principle, not merely a restatement of the answer.

Example transfer rule:

> When a relationship is inverse, doubling the denominator halves the output only if all other variables remain constant.

Avoid explanations that merely repeat the question or provide unexplained algebra.

## 15. Hint system

Use progressive hints that preserve productive struggle.

### Hint level 1: orient

Identify the relevant concept or representation.

### Hint level 2: select

Indicate the relationship, control, equation, or comparison needed.

### Hint level 3: advance

Provide the next reasoning step without revealing the answer.

### Hint level 4: solve

Show the complete solution.

Record hint level used. A correct answer after a level-4 hint must not count as independent mastery.

## 16. Evidence-based learning engine

Implement the following techniques explicitly.

## 16.1 Retrieval practice

- Require frequent low-stakes recall.
- End every lesson with retrieval questions.
- Resurface previously learned material without showing notes first.
- Include occasional free-response prompts even if official practice is MCQ-based.

## 16.2 Spaced practice

Use spaced repetition for:

- Equations.
- Units.
- Definitions.
- Conceptual distinctions.
- Common misconception corrections.
- Short causal links.

Do not reduce rich passage reasoning to flashcards.

MVP scheduling may begin with a deterministic or SM-2-like scheduler. Design the interface so FSRS or another memory model can replace it later.

## 16.3 Interleaving

- Block new material briefly during first exposure.
- Mix related problem types once the learner demonstrates basic discrimination.
- Interleave across chemistry, physics, and biology in later phases.
- Ensure mixed sets require the learner to choose a method, not merely execute a recently named method.

## 16.4 Self-explanation

Use short prompts such as:

- Why is option B tempting?
- Which assumption makes this equation valid?
- What would change if the relationship were inverse?
- Which variable is controlled?
- What is the quickest reason this answer cannot be correct?

## 16.5 Feedback

- Provide immediate feedback in learning mode.
- In exam mode, delay feedback until the block ends.
- Always correct false distractors because unsupported MCQ exposure can reinforce incorrect alternatives.

## 16.6 Desirable difficulty

Introduce challenge through retrieval delay, mixing, and unfamiliar contexts, not through ambiguity or missing information.

## 17. Adaptive learning logic

## 17.1 MVP adaptive system

Use deterministic rules based on:

- Recent accuracy by knowledge component.
- Timed accuracy.
- Median response time.
- Hint dependence.
- Confidence calibration.
- Retention failures.
- Repeated misconception codes.
- Prerequisite graph.
- Time remaining until the user's target date.

### 17.1.1 Initial mastery heuristic

Use this only as a transparent MVP default:

```text
mastery_score =
    0.45 * recent_mixed_accuracy
  + 0.20 * retention_score
  + 0.15 * speed_score
  + 0.10 * confidence_calibration_score
  + 0.10 * independence_score
```

All components should be normalised to `[0, 1]`.

Do not label a knowledge component mastered until minimum evidence requirements are met.

### 17.1.2 Suggested status bands

```text
0.00–0.39  = critical gap
0.40–0.59  = developing
0.60–0.74  = functional
0.75–0.87  = strong
0.88–1.00  = stable
```

These are product defaults, not official score equivalents.

## 17.2 Session-planning algorithm

For each planned session:

1. Reserve 20–30% for due spaced reviews.
2. Reserve 30–40% for the highest-priority weak prerequisite or domain.
3. Reserve 20–30% for mixed passage practice.
4. Reserve 10–20% for timed work or error-log repair.
5. Increase timed and mixed proportions as the exam date approaches.
6. Avoid assigning only the learner's weakest area for many consecutive sessions.
7. Insert previously mastered material to test retention.

Pseudo-code:

```python
def build_session(user, minutes):
    due_reviews = select_due_reviews(user, budget=0.25 * minutes)
    weak_kcs = rank_weak_components(
        user,
        priority_weight=True,
        prerequisite_weight=True,
        recurrence_weight=True,
    )
    concept_block = choose_lesson_or_drill(weak_kcs, budget=0.30 * minutes)
    mixed_passage = choose_mixed_passage_set(
        user,
        target_difficulty=estimate_challenge_level(user),
        budget=0.30 * minutes,
    )
    timed_or_repair = choose_timed_or_error_repair(
        user,
        exam_proximity_weight=True,
        budget=0.15 * minutes,
    )
    return sequence_for_cognitive_load(
        due_reviews,
        concept_block,
        mixed_passage,
        timed_or_repair,
    )
```

## 17.3 Later psychometric upgrades

Add only after sufficient calibrated data:

- Item Response Theory for difficulty and discrimination.
- Computerised adaptive testing for diagnostic efficiency.
- Bayesian Knowledge Tracing for component-level learning state.
- More sophisticated forgetting models for review timing.
- Contextual recommendation models for next-best activity.

Keep psychometric models interpretable and versioned.

## 18. Practice modes

## 18.1 Learn mode

- Untimed or gently timed.
- Immediate feedback.
- Hints available.
- Worked solutions available.
- Best for acquisition and misconception repair.

## 18.2 Drill mode

- Short sets by topic or skill.
- Optional time target.
- Feedback after each item or after the set.
- Best for fluency and discrimination.

## 18.3 Passage mode

- One original stimulus with three to five items.
- Timed and untimed variants.
- Best for transfer and representation integration.

## 18.4 Mixed mini-test

- 10–30 questions.
- Cross-discipline mix.
- Feedback at the end.
- Pacing and confidence captured.

## 18.5 Full science simulation

- Configurable to current official length and timing.
- No hints.
- No instructional interruption.
- Navigation should mirror the current official computer-delivered constraints as closely as legally and practically appropriate.
- Feedback and analytics shown only after completion.

## 18.6 Error-log repair

Create targeted sessions from:

- Repeated misconception codes.
- Slow correct answers.
- High-confidence errors.
- Low-confidence correct answers.
- Retention failures.
- Skipped questions.

## 18.7 Formula and distinction review

A mobile-friendly queue for equations, units, definitions, and conceptual contrasts.

## 19. Diagnostic design

The baseline diagnostic must distinguish:

- Missing prerequisite knowledge.
- Weak representation interpretation.
- Weak quantitative fluency.
- Poor strategy selection.
- Excessive response time.
- Overconfidence.

### 19.1 Diagnostic composition

Use a balanced set containing:

- Discrete foundation questions.
- Short graph/table items.
- Passage sets.
- At least one item from each P0 topic cluster.
- A range of difficulty.
- Confidence rating after each item or block.

### 19.2 Diagnostic output

Produce:

- Domain mastery map.
- Cross-cutting skill map.
- Speed profile.
- Confidence calibration profile.
- Highest-priority prerequisite gaps.
- Suggested weekly plan.
- Explicit statement that this is not an official score prediction.

## 20. Analytics requirements

Track event-level data rather than only aggregate scores.

### 20.1 Required learner metrics

- Accuracy by discipline.
- Accuracy by knowledge component.
- Accuracy by cognitive skill.
- Passage-set accuracy.
- Timed versus untimed accuracy.
- Median and distribution of response times.
- Hint usage.
- Confidence calibration.
- Distractor selection frequency.
- Misconception recurrence.
- Retention after delay.
- First-third versus final-third performance in timed tests.
- Skip and return behaviour.
- Accuracy after revisiting an item.

### 20.2 Readiness dashboard

Display:

- Strongest and weakest components.
- Due reviews.
- Pace trend.
- Retention trend.
- Endurance decay.
- Most persistent misconception.
- Recommended next session.

Avoid vanity dashboards dominated by total questions answered.

### 20.3 Content-quality analytics

For each item, track:

- Facility or proportion correct.
- Median response time.
- Option-selection distribution.
- Discrimination estimate when sample size permits.
- Omission rate.
- Review reports.
- Performance by learner level.
- Unexpected subgroup differences.

Flag items with:

- Extremely high or low facility without intended reason.
- Two distractors behaving as equally defensible.
- Negative discrimination.
- Abnormally long response times.
- High complaint rate.

## 21. AI tutor behaviour

The tutor is a Socratic coach and diagnostic explainer, not an answer dispenser.

### 21.1 Tutor priorities

1. Determine what the learner misunderstood.
2. Ask one targeted question when useful.
3. Give the smallest hint that enables progress.
4. Explain the reasoning model.
5. Connect the error to a generalisable rule.
6. Recommend one appropriate follow-up activity.

### 21.2 Tutor response policy

The tutor should:

- Distinguish facts from assumptions.
- Use the app's approved content and sources.
- Cite or name the relevant lesson when possible.
- Avoid unnecessary jargon.
- Use equations with units.
- Check limiting cases and plausibility.
- Explain why distractors fail.
- Refuse to reproduce recalled official questions.
- State when an answer depends on a convention.

The tutor should not:

- Invent official exam rules.
- Guarantee score improvement.
- Generate an endless stream of unreviewed mock questions.
- Give the full solution immediately when the learner requests a hint.
- Shame the learner for errors or slow progress.

### 21.3 Tutor prompt skeleton

```text
You are a GAMSAT science reasoning tutor.
Use only approved curriculum content and the current item context.
Your goal is to diagnose the learner's reasoning error and help them complete the next step.
Do not reproduce official or recalled ACER questions.
Do not claim an official score prediction.
When solving quantitative problems:
1. define the system,
2. identify the governing relationship,
3. preserve units,
4. estimate the expected scale,
5. compute,
6. check plausibility.
When analysing biology or chemistry mechanisms:
1. identify the direct effect,
2. trace downstream consequences,
3. consider feedback and system boundaries.
Use the minimum hint level requested.
```

## 22. Gamification and motivation

Use motivation support carefully.

Recommended:

- Weekly commitment selection.
- Visible competence progression.
- Mastery maps.
- Optional streaks with grace days.
- Milestones tied to meaningful achievement.
- Personal-best pacing indicators.
- Optional study groups.

Avoid:

- Aggressive leaderboards as the default.
- Rewarding raw question volume over deliberate review.
- Punitive streak loss.
- Random badges unrelated to learning.
- Artificial urgency or manipulative notifications.

Design for autonomy, competence, and sustainable study behaviour.

## 23. Accessibility and UX

### 23.1 Web-first responsive design

Prioritise desktop and tablet for:

- Long passages.
- Graphs and diagrams.
- Timed simulations.
- Side-by-side stimulus and question layout.

Support mobile for:

- Flashcards.
- Error review.
- Short drills.
- Study planning.

### 23.2 Accessibility requirements

- WCAG 2.2 AA target.
- Keyboard navigation.
- Screen-reader labels.
- Alt text for every meaningful image.
- Text alternatives for graphs where feasible.
- Colour must not be the only information channel.
- Zoom-safe layouts.
- Adjustable text size.
- Reduced-motion mode.
- Dyslexia-friendly display option without presenting it as a medical treatment.

### 23.3 Exam interface

Provide:

- Question navigator.
- Flag-for-review function.
- Visible timer.
- Stimulus persistence across linked items.
- Scratchpad or note function if compatible with current exam conditions.
- Clear indication of unanswered items.

Make all exam-interface details configurable after checking current ACER rules.

## 24. Recommended technical architecture

Use a modular monorepo.

```text
gamsat-app/
  apps/
    web/                  # Next.js web application
    admin/                # Content authoring and review interface
  packages/
    ui/                   # Shared design system
    domain/               # Core entities and business rules
    content-schema/       # Zod/JSON schemas for content validation
    analytics/            # Event definitions and reporting logic
    adaptive-engine/      # Rule-based recommendation engine
    exam-engine/          # Timing, navigation, test assembly
    ai-guardrails/        # Tutor prompts, grounding, output validation
  services/
    worker/               # Background jobs and content processing
    psychometrics/        # Optional Python service added later
  content/
    lessons/
    passages/
    questions/
    flashcards/
    sources/
  infrastructure/
    docker/
    migrations/
    monitoring/
  docs/
    architecture/
    content-authoring/
    validation/
```

### 24.1 Suggested stack

Use the following unless the repository already dictates alternatives:

- Front end: Next.js, React, TypeScript.
- Styling: Tailwind CSS or an equivalent token-based system.
- Validation: Zod.
- Database: PostgreSQL.
- ORM: Prisma or Drizzle.
- Authentication: Auth.js, Clerk, Supabase Auth, or equivalent.
- Queue/background jobs: Redis with BullMQ, or managed equivalent.
- Content: versioned JSON/MDX validated against schemas.
- Object storage: S3-compatible storage for diagrams and exports.
- Testing: Vitest/Jest, Playwright, and schema-validation tests.
- Observability: structured logs, error tracking, and product analytics.
- Local development: Docker Compose.
- CI: lint, type check, unit tests, schema validation, accessibility checks, and end-to-end smoke tests.

### 24.2 Architectural principles

- Content must be versioned independently from application releases.
- Every learner attempt must reference the exact item version shown.
- Scoring logic must be deterministic and testable.
- LLM calls must be non-critical enhancements, not single points of failure.
- User-facing scientific content must be recoverable without relying on a live model response.
- Adaptive recommendations must be explainable.
- Exam simulations must be reproducible from a saved test blueprint.

## 25. Core database entities

At minimum implement:

- `users`
- `user_profiles`
- `exam_targets`
- `study_plans`
- `knowledge_components`
- `knowledge_component_edges`
- `lessons`
- `passages`
- `items`
- `item_options`
- `item_versions`
- `content_sources`
- `content_reviews`
- `flashcards`
- `practice_sessions`
- `test_forms`
- `test_form_items`
- `attempts`
- `responses`
- `hints_used`
- `confidence_ratings`
- `mastery_estimates`
- `review_schedule`
- `misconception_events`
- `analytics_events`
- `content_flags`

## 26. API requirements

Provide typed APIs or server actions for:

- Onboarding and diagnostic creation.
- Curriculum retrieval.
- Lesson progress.
- Practice-set assembly.
- Passage and item retrieval.
- Response submission.
- Hint retrieval.
- Explanation retrieval.
- Confidence submission.
- Mastery recalculation.
- Review queue generation.
- Timed-test lifecycle.
- Analytics dashboard.
- Content authoring.
- Review and publication workflow.

Responses must include content-version identifiers.

## 27. Content authoring workflow

Implement a state machine:

```text
draft
  -> scientific_review
  -> editorial_review
  -> copyright_review
  -> pilot
  -> approved
  -> published
  -> retired
```

Do not allow direct publication from `draft`.

### 27.1 Required reviewer roles

- Author.
- Scientific reviewer.
- Editorial reviewer.
- Content administrator.
- Optional psychometric reviewer after pilot data exist.

### 27.2 Automated validation

Before review, automatically check:

- JSON/schema validity.
- Missing explanations.
- Duplicate option text.
- Correct option exists.
- Units format.
- Broken asset references.
- Missing alt text.
- Invalid knowledge-component IDs.
- Circular prerequisite dependencies.
- Numerical recomputation where a machine-checkable solution exists.
- Text similarity against the internal item bank.

## 28. Testing strategy

## 28.1 Unit tests

Test:

- Scoring.
- Mastery calculations.
- Review scheduling.
- Test assembly.
- Timing logic.
- Prerequisite traversal.
- Content schema validation.
- Option shuffling while preserving correctness.

## 28.2 Property-based tests

Use where useful for:

- Unit conversions.
- Equation-generated items.
- Numeric tolerance.
- Randomised option order.
- Test-form reproducibility.

## 28.3 End-to-end tests

Cover:

- Sign-up to diagnostic.
- Lesson completion.
- Passage attempt.
- Hint use.
- Review scheduling.
- Timed mini-test.
- Full simulation save and resume policy.
- Dashboard update.
- Admin authoring and publication.

## 28.4 Content tests

- Validate every content file in CI.
- Recalculate numeric answers.
- Render every graph and diagram.
- Confirm all question links and source records.
- Run accessibility checks on representative items.

## 29. Privacy, security, and ethics

- Collect only data required for learning and product operation.
- Provide transparent explanations of analytics and adaptation.
- Allow users to export and delete their data.
- Separate identifying data from research/psychometric datasets where possible.
- Do not infer protected characteristics for recommendation or scoring.
- Monitor item performance for unexplained subgroup bias when adequate data exist.
- Treat confidence and performance data as sensitive educational data.
- Rate-limit AI and question-generation endpoints.
- Validate and sanitise Markdown, LaTeX, SVG, and uploaded assets.
- Keep secrets outside the repository.
- Maintain audit logs for published-content changes.

## 30. Implementation phases

## Phase 0: repository and foundations

Deliver:

- Monorepo.
- Local Docker environment.
- Database and migrations.
- CI pipeline.
- Design tokens and base UI.
- Content schemas.
- Seed knowledge-component taxonomy.

Acceptance criteria:

- `npm install` or equivalent succeeds.
- `docker compose up` starts required local services.
- Type checking, linting, tests, and content validation pass.

## Phase 1: onboarding and diagnostic

Deliver:

- Authentication.
- Exam target and weekly-time input.
- Diagnostic test engine.
- Confidence capture.
- Initial mastery map.
- Initial study-plan generation.

Acceptance criteria:

- A new user can complete onboarding and receive a transparent readiness profile.
- No official score prediction is displayed.

## Phase 2: curriculum and lesson engine

Deliver:

- Curriculum map.
- Lesson pages.
- Worked examples.
- Retrieval checks.
- Prerequisite unlocking.

Acceptance criteria:

- Lesson completion updates mastery evidence.
- Content renders safely and accessibly.

## Phase 3: passage and question engine

Deliver:

- Passage sets.
- Graph/table assets.
- Tiered hints.
- Explanations.
- Error-code capture.
- Item versioning.

Acceptance criteria:

- Responses, time, confidence, hints, and selected distractor are all stored.
- Correctness is reproducible for the exact item version.

## Phase 4: spaced review and adaptive sessions

Deliver:

- Flashcard queue.
- Review scheduling.
- Rule-based session planner.
- Weak-area recommendations.

Acceptance criteria:

- Due reviews appear predictably.
- Recommended sessions reflect weakness, prerequisite priority, and exam proximity.

## Phase 5: timed assessments and simulations

Deliver:

- Mini-tests.
- Half-section tests.
- Full configurable simulation.
- Flag/return navigation.
- Post-test analysis.

Acceptance criteria:

- Timing and submission are reliable.
- Feedback is hidden until the configured end point.
- Endurance metrics are calculated.

## Phase 6: analytics and error repair

Deliver:

- Learner dashboard.
- Error log.
- Misconception recurrence report.
- Pace and retention trends.
- Targeted repair sessions.

Acceptance criteria:

- The dashboard recommends a specific next action rather than merely displaying scores.

## Phase 7: authoring and review interface

Deliver:

- Content editor.
- Preview.
- Review state machine.
- Version history.
- Source and provenance records.
- Publication controls.

Acceptance criteria:

- No draft can bypass required review states.
- Published content can be traced to author, sources, reviews, and version.

## Phase 8: beta hardening

Deliver:

- Accessibility audit.
- Security review.
- Performance optimisation.
- Item-analysis dashboard.
- Content flags and correction workflow.
- Beta telemetry.

Acceptance criteria:

- Critical flows pass end-to-end tests.
- All published MVP items have completed review records.

## 31. Definition of done for the MVP

The MVP is complete only when:

- [ ] Users can create accounts and set exam targets.
- [ ] Users can complete a diagnostic.
- [ ] Users receive a personalised but explainable study plan.
- [ ] The curriculum covers all P0 knowledge components.
- [ ] Lessons contain retrieval practice and worked examples.
- [ ] Passage-based items are the dominant assessment format.
- [ ] Users can take timed mixed tests and a full simulation.
- [ ] The system tracks accuracy, time, confidence, hints, and misconception codes.
- [ ] Spaced review works.
- [ ] Error-log repair sessions work.
- [ ] Content is versioned and traceable.
- [ ] No official or recalled questions are included.
- [ ] No exact official-score prediction is presented.
- [ ] Core functionality works without live LLM access.
- [ ] CI validates code, schemas, and content.
- [ ] Accessibility requirements are met for core flows.
- [ ] Privacy and deletion controls are implemented.

## 32. Agent operating instructions

When executing this specification:

1. Inspect the existing repository before choosing libraries.
2. Create or update `docs/implementation-plan.md` before major changes.
3. Work phase by phase.
4. Prefer small, testable commits.
5. Keep domain logic outside UI components.
6. Add migrations rather than editing production schema manually.
7. Validate all content through schemas.
8. Do not insert placeholder science content into production fixtures unless clearly marked.
9. Use deterministic sample content for automated tests.
10. Record assumptions in `docs/decisions/` as architecture decision records.
11. Add tests with every domain-level feature.
12. Do not silently change scoring, mastery, or scheduling algorithms.
13. Version algorithm changes and document their learner-facing impact.
14. Stop and flag any request to use official, leaked, or recalled GAMSAT questions.
15. Treat the current ACER rules as external configuration that must be re-verified before launch.

## 33. First CLI tasks

Execute in this order unless the repository already contains equivalent work:

```text
1. Initialise or inspect the monorepo.
2. Create the domain taxonomy and content schemas.
3. Create PostgreSQL schema and migrations.
4. Seed P0 knowledge components and prerequisite edges.
5. Build a content validator CLI.
6. Add one complete vertical slice:
   lesson -> worked example -> passage -> questions -> response -> feedback -> mastery update.
7. Add automated tests for the vertical slice.
8. Build onboarding and a small diagnostic.
9. Build the rule-based session planner.
10. Add timed mini-test mode.
11. Add the error log and learner dashboard.
12. Add authoring and review workflow.
13. Expand content only after the vertical slice is stable.
```

## 34. Suggested repository commands

Adapt to the chosen package manager.

```bash
# Install dependencies
pnpm install

# Start local services
docker compose up -d

# Run database migrations
pnpm db:migrate

# Seed taxonomy and test content
pnpm db:seed

# Validate structured learning content
pnpm content:validate

# Run unit tests
pnpm test

# Run end-to-end tests
pnpm test:e2e

# Run all quality gates
pnpm check

# Start development server
pnpm dev
```

## 35. Source hierarchy

Use sources in this order:

1. Official ACER/GAMSAT documents for exam format and rules.
2. Standard introductory textbooks for scientific scope and canonical explanations.
3. Peer-reviewed learning-science research for pedagogy.
4. Psychometric literature for adaptivity and assessment.
5. Commercial preparation products only for market comparison, never as scientific or official authority.

## 36. Core reference set

Verify access and current versions before relying on any source.

### Official GAMSAT sources

- ACER GAMSAT information booklet: https://gamsat.acer.org/files/GAMSAT_Information_booklet.pdf
- ACER preparation guidance: https://gamsat.acer.org/preparation
- ACER results information: https://gamsat.acer.org/results

### Open science textbooks

- OpenStax Biology 2e: https://openstax.org/details/books/biology-2e
- OpenStax Chemistry 2e: https://openstax.org/details/books/chemistry-2e
- OpenStax College Physics 2e: https://openstax.org/details/books/college-physics-2e

### Learning science

- Dunlosky et al., effective learning techniques.
- Roediger and Karpicke, test-enhanced learning.
- Cepeda et al., distributed practice.
- Karpicke and Blunt, retrieval practice versus concept mapping.
- Butler and Roediger, feedback and multiple-choice learning.
- Worked-example and cognitive-load research by Sweller, van Gog, and colleagues.

### Psychometrics

- Item Response Theory.
- Computerised adaptive testing.
- Bayesian Knowledge Tracing.
- SM-2 and later spaced-repetition models.

## 37. Final product criterion

The application succeeds when a learner becomes better at identifying the scientific model hidden inside an unfamiliar stimulus, selecting the relevant information, reasoning efficiently, and sustaining that performance under realistic time pressure.

The product fails if it becomes primarily:

- A large passive note repository.
- A trivia memorisation app.
- An unreviewed AI question generator.
- A superficial streak-and-badge system.
- An unofficial score-prediction service.

Build less content than a textbook, but make every learning object serve transfer, retrieval, feedback, or exam performance.
