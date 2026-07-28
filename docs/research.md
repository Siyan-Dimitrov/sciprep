# Product and evidence research

Last reviewed: 28 July 2026

## Executive finding

The source specification has a strong product thesis: the useful opportunity is
not another large question bank or passive science textbook. It is a smaller,
high-trust system that identifies *why* a learner failed to reason through an
unfamiliar science problem, then assigns the next activity that repairs that
failure.

The specification's current "MVP" is closer to a complete commercial beta.
Content authoring and scientific review will be a larger constraint than
software development. The first release should therefore validate one complete
learning loop with a deliberately small, reviewable content set.

## Current official exam facts

The 2026 ACER information confirms that the relevant component is formally
called **Reasoning in Biological and Physical Sciences**. It currently has:

- 75 four-option multiple-choice questions in 150 minutes;
- an integrated 40% chemistry, 40% biology, and 20% physics distribution;
- text, mathematical, graphical, tabular, and diagrammatic stimuli;
- assumed background around first-year university biology and chemistry, and
  A-level/Leaving Certificate/Year 12 physics;
- no calculator, no negative marking, and equal value for each question; and
- an emphasis on applying prerequisite knowledge through interpretation,
  modelling, evidence evaluation, estimation, and selection of relevant data.

This supports the proposed reasoning-first approach. It also means exam length,
timing, weights, permitted tools, and interaction rules belong in versioned
configuration rather than UI constants.

Primary sources:

- [ACER 2026 Information Booklet](https://gamsat.acer.org/files/GAMSAT_Information_booklet.pdf)
- [ACER preparation guidance](https://gamsat.acer.org/preparation)
- [ACER test-day guidance](https://gamsat.acer.org/test-day)

## Learning design

The proposed learning loop is directionally consistent with established
learning research:

- Retrieval should appear early and recur after delays; rereading alone should
  not drive progression.
- Spacing is suitable for equations, units, distinctions, misconceptions, and
  short causal links. Rich passage reasoning should not be reduced to
  flashcards.
- New procedures should begin with worked examples and faded support before
  independent, timed transfer.
- Interleaving should follow initial clarity and force method selection across
  changing contexts.
- Learning-mode feedback should identify the reasoning error and correct false
  alternatives; exam-mode feedback should wait until the block ends.
- Confidence is useful as calibration evidence, but it must not be interpreted
  as mastery on its own.

Product implication: authored hints, distractor diagnoses, evidence counts, and
delayed re-testing are core features. A conversational AI tutor is optional and
should not be in the critical path.

### Evidence and boundaries

- Retrieval practice has repeatedly outperformed repeated study on delayed
  tests. A large classroom meta-analysis reported a medium overall benefit, but
  classic findings often concern memory for prose or facts; far transfer is not
  automatic. The app must retrieve the reasoning operation itself and retest it
  in varied contexts, not assume that flashcards create transfer.
- Distributed practice is robust in aggregate and the useful gap depends on the
  desired retention interval. Results across authentic STEM courses are more
  mixed, so the pilot scheduler should be deterministic, versioned, and
  evaluated rather than marketed as scientifically optimal.
- Interleaving has an overall benefit with substantial domain variation. It is
  most useful when learners must discriminate between confusable methods.
  Initial examples should remain blocked long enough for a novice to recognise
  the model.
- Worked examples and faded completion problems benefit novices, especially
  when steps explain *why* a method applies. Guidance can become redundant for
  advanced learners, and far transfer is less reliable than near transfer.
- Multiple-choice distractors can reinforce misinformation. Corrective feedback
  should therefore explain the selected distractor. Confidence should be
  captured after commitment and before feedback, using a small categorical
  scale; it should influence prioritisation but never override performance.
- IRT and computerised adaptive testing require calibrated items and validation
  for the intended interpretation. Bayesian knowledge tracing also depends
  heavily on correct skill tags and simplifying assumptions. Broad,
  explainable rules are more defensible for the pilot.

Selected sources:

- [Roediger & Karpicke (2006), test-enhanced learning](https://doi.org/10.1111/j.1467-9280.2006.01693.x)
- [Karpicke & Blunt (2011), retrieval and meaningful learning](https://doi.org/10.1126/science.1199327)
- [Yang et al. (2021), classroom retrieval meta-analysis](https://doi.org/10.1037/bul0000309)
- [Cepeda et al. (2006), distributed-practice review](https://doi.org/10.1037/0033-2909.132.3.354)
- [Brunmair & Richter (2019), interleaving meta-analysis](https://doi.org/10.1037/bul0000209)
- [Atkinson et al. (2000), worked-example review](https://doi.org/10.3102/00346543070002181)
- [Butler & Roediger (2008), MCQ feedback and misinformation](https://doi.org/10.3758/MC.36.3.604)
- [Fleming (2024), metacognition and confidence review](https://doi.org/10.1146/annurev-psych-022423-032425)
- [Ma et al. (2014), intelligent tutoring systems meta-analysis](https://doi.org/10.1037/a0037123)
- [AERA/APA/NCME Standards for Educational and Psychological Testing](https://www.testingstandards.net/uploads/7/6/6/4/76643089/standards_2014edition.pdf)

## Market snapshot and product wedge

Current providers already advertise very large banks:

- [Medify](https://medify.co/gamsat) advertises 7,000+ questions, mocks,
  timed/untimed sessions, analytics, and explanations.
- [GradReady](https://gradready.com.au/gamsat-preparation-courses/online-comprehensive)
  advertises 7,000+ MCQs, tracking, adjustable difficulty, and 15 exams.
- [Fraser's Essentials](https://www.frasersmedical.com/courses/gamsat-essentials)
  presents a skills-filtered bank, analytics, diagnostics, and AI-supported
  guidance.
- [Gold Standard](https://www.gamsat-prep.com/gamsat-preparation-course-online/)
  advertises 4,000+ questions, digital tests, and a large video library.
- [ACER official preparation](https://gamsat.acer.org/preparation) offers
  authentic full-length practice and a replica test application.

Provider-published counts, prices, and efficacy claims have not been
independently verified.

The defensible wedge is:

1. high-trust original content with visible provenance and review state;
2. diagnosis across prerequisite, representation, model selection, units,
   distractor susceptibility, timing, and confidence;
3. the same reasoning skill practised across different scientific contexts;
4. progressive authored hints and explicit reasoning checkpoints;
5. transparent, evidence-based readiness indicators rather than a claimed
   official score conversion; and
6. a focused study path that is less overwhelming than a volume-first bank.

## Copyright, trademark, and content integrity

ACER explicitly limits its preparation materials to personal use and prohibits
copying, redistribution, and uploading them to third-party software, including
AI assessment services. The application must reject official or recalled
questions and must not use purchased ACER material for generation, similarity
checking, or evaluation.

Every externally informed content object should record source URL, author,
licence, required attribution, transformation record, contributor attestation,
and review history. Scientific facts are usable; protected expression, figures,
distinctive selection, and presentation are not automatically reusable.

The product needs an original name and visual system, a clear statement that it
is independent of ACER, and professional trademark/IP review before commercial
launch.

Sources:

- [ACER preparation-material copyright terms](https://gamsat.acer.org/preparation-material-copyright)
- [ACER 2026 legal notice](https://gamsat.acer.org/legal-notice)
- [UK copyright overview](https://www.gov.uk/copyright)
- [UK copyright exceptions](https://www.gov.uk/guidance/exceptions-to-copyright)
- [UK trade mark guidance](https://www.gov.uk/using-somebody-elses-intellectual-property/trade-marks)

This is product-risk research, not legal advice.

## Main specification risks to resolve

1. **Pilot versus MVP:** the source asks for accounts, a full curriculum, a
   diagnostic, several practice engines, a 75-question simulation, scheduling,
   analytics, and an admin workflow at once. These need separate release gates.
2. **Diagnostic precision:** a small initial diagnostic can screen and prioritise
   but cannot reliably identify every fine-grained weakness. Show evidence
   counts and uncertainty, then update the profile during normal use.
3. **Mastery precision:** the proposed weighted formula lacks defined windows,
   missing-data behaviour, time normalisation, decay, and calibration. Treat it
   as a versioned heuristic and do not expose false decimal precision.
4. **Content source of truth:** choose whether reviewed Git content or an admin
   database is canonical. The pilot will use versioned repository content, with
   database materialisation for delivery and immutable attempt snapshots.
5. **Operational review:** scientific, editorial, and copyright review require
   named people and a correction/recall process. Software cannot replace this.
6. **Timing validity:** tab changes, accessibility tools, interruptions, pauses,
   and outliers can distort response-time analytics. Record both wall and active
   time and label low-quality timing evidence.
7. **AI scope:** authored explanations and deterministic hints should ship first.
   AI can later add grounded coaching, never publish items autonomously.

## Recommended pilot content

- 3 concise lessons and 3 worked examples;
- 3 original passages with 12 linked questions;
- 12 to 20 screening diagnostic questions;
- 1 discrete reasoning drill;
- 1 mixed 20 to 30 minute mini-test;
- tiered hints, distractor diagnoses, confidence capture, and an error log; and
- a thin curriculum strand that crosses biology, chemistry, physics, and
  representation reasoning.

The pilot should prove that learners understand and trust the diagnosis and
that reviewers can safely publish, version, and correct an item. Full P0
coverage and a full-length simulation follow only after this loop is reliable.
