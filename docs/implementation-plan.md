# Implementation plan

Status: confirmed course-first private-pilot direction
Last updated: 28 July 2026

## Outcome

Build a responsive, accessible chemistry and physics foundation course for
adults with little or no recent science background. It should provide the
structure, explanation, guided practice, continuity, and cumulative depth of a
well-taught introductory university course in an app format.

The course prepares learners for later GAMSAT scientific reasoning, but it is
not organised as a question bank. Questions support predictions, guided
practice, retrieval, and assessment. Teaching and conceptual development are
the main experience.

## Confirmed product decisions

- Release: private pilot.
- Primary learner: non-science adult.
- Initial subjects: chemistry and physics, supported by scientific mathematics.
- Content workflow: Git-first is acceptable for the pilot.
- Conversational AI: deferred.
- GitHub owner: `Siyan-Dimitrov`.
- Repository: private `SciPrep`.
- Product architecture: one modular web application rather than separate
  learner and admin deployments.

## Pilot principles

- Assume no recent science but do not simplify the learner's intelligence.
- Teach prerequisites at the point they become useful.
- Use concrete and visual models before formal notation.
- Narrate reasoning choices in worked examples.
- Make units, graphs, assumptions, and plausibility part of every calculation.
- Permit prerequisite repair without trapping learners in endless remediation.
- Track independent and delayed evidence, not reading time alone.
- Label scientific-review state clearly.
- Add GAMSAT-style transfer only after the relevant concepts are taught.

## Pilot scope

### Course experience

- onboarding that captures background, available study time, and target date;
- a course map showing terms, modules, prerequisites, progress, and workload;
- a resumable lesson player;
- visual and interactive explanation blocks;
- worked examples with progressive reasoning disclosure;
- guided completion activities and independent checks;
- contextual glossary, quantities, units, and equation reference;
- personal notebook entries attached to lessons;
- delayed review and misconception repair;
- broad evidence states with an explainable next lesson; and
- a cross-subject studio combining graphs, units, chemistry, and physics.

### Initial content

- Science Toolkit:
  - measurement, quantities, and units;
  - powers of ten and scientific notation;
  - ratios, proportions, and rates;
  - tables, coordinate graphs, and change.
- Chemistry:
  - matter and particle models;
  - the mole as a counting unit.
- Physics:
  - describing motion;
  - motion graphs.
- One cumulative graph and measurement studio.

See [the course blueprint](course-blueprint.md) for the full proposed sequence.

### Explicitly deferred

- a large standalone question bank;
- the full 75-question simulation;
- detailed response-time and endurance coaching;
- conversational AI and automatic item generation;
- IRT, CAT, and Bayesian knowledge tracing;
- a separate non-technical authoring application;
- Redis, background queues, and dedicated services;
- public payments or subscriptions; and
- claims that course progress predicts an official scaled score.

## App structure

```text
apps/
  web/
    app/
      (marketing)/
      (learner)/
        today/
        course/
        learn/[lessonId]/
        studios/
        review/
        notebook/
        reference/
        progress/
      (reviewer)/
packages/
  content-schema/       versioned course and provenance contracts
  course-engine/        ordering, prerequisites, completion, resume
  learning-engine/      evidence, review scheduling, recommendations
  interactive-models/   reusable graphs, quantities, and simulations
  ui/                   accessible components and design tokens
content/
  courses/
  modules/
  lessons/
  studios/
  sources/
infrastructure/
  migrations/
```

Planned stack:

- Next.js, React, TypeScript, and Tailwind CSS;
- Zod for content and API boundary validation;
- PostgreSQL with Drizzle ORM and SQL migrations;
- authentication selected when the private-pilot access model is confirmed;
- Vitest for domain/content tests and Playwright for learner flows;
- Docker Compose for local PostgreSQL; and
- GitHub Actions for lint, type check, tests, content validation, production
  audit, accessibility, and a browser smoke test.

## Course content model

```text
Course
  -> Term
    -> Module
      -> Lesson
        -> LessonBlock
          - purpose
          - prediction
          - explanation
          - visual_model
          - worked_example
          - guided_practice
          - independent_check
          - summary
          - next_connection
    -> Studio
```

Each lesson version records:

- objectives and prerequisites;
- estimated active time;
- vocabulary and quantities introduced;
- content blocks and accessible alternatives;
- worked-example calculations and validation method;
- misconception warnings;
- review and provenance records;
- independent-check evidence mappings; and
- links to later lessons that reuse the model.

Git is the source of truth for pilot content. Approved versions are
materialised into the database. Learner progress always references the exact
version studied, while corrections produce new immutable versions.

## Minimum learner data model

- `users` and `learner_profiles`;
- `course_enrolments`;
- `course_versions`, `term_versions`, `module_versions`, and `lesson_versions`;
- `lesson_block_versions`;
- `lesson_progress` and resumable block position;
- `learning_attempts` and `checkpoint_responses`;
- `knowledge_components` and prerequisite edges;
- `evidence_events` and `concept_evidence_states`;
- `review_schedule`;
- `notebook_entries`;
- `glossary_terms`, `quantities`, `units`, and `equations`;
- `content_sources`, `content_provenance`, and asset licences;
- `review_assignments` and `review_decisions`;
- `algorithm_versions`, `audit_log`, and `privacy_requests`; and
- `exam_config_versions` for later exam-linked experiences.

## Lesson learning loop

```text
resume context
  -> purpose and prediction
  -> visual/concrete model
  -> short teaching sequence
  -> narrated worked example
  -> guided completion
  -> independent check
  -> summary and learner note
  -> delayed review
  -> next lesson or prerequisite repair
```

The app should remember the learner's block position, completed interactions,
notes, hint use, and independent-check evidence. It must distinguish lesson
exposure from demonstrated understanding.

## Evidence model v0

Do not display a false-precision mastery percentage. For each concept, record:

- lesson exposure;
- guided success;
- independent success;
- number and level of hints;
- representation used: verbal, diagram, graph, table, or equation;
- delayed-retrieval outcome;
- recurring misconception code; and
- prerequisite evidence.

A versioned rule produces:

- `not_started`;
- `introduced`;
- `practising`;
- `independent`;
- `retained`; or
- `repair_recommended`.

Recommendations show a plain-language reason. Example:

> Revisit ratios before concentration because the last two guided examples
> needed denominator hints, and concentration depends on that relationship.

## Delivery phases

### Phase 0 — foundation and course contracts

- revise product documents around the course-first direction;
- maintain the repository, quality gates, and versioned exam configuration;
- add schemas for courses, modules, lessons, blocks, worked examples, studios,
  and review state;
- seed the complete curriculum map and the private-pilot subset; and
- add validation for prerequisites, references, units, equations, accessibility,
  provenance, and review state.

Exit: the curriculum validates as one acyclic, referentially complete course.

### Phase 1 — course shell and first lesson

- course map;
- lesson player with block navigation and resume state;
- content rendering for purpose, explanation, diagram, worked example, and
  summary;
- prediction and guided-completion interactions;
- notebook and glossary;
- one complete Science Toolkit lesson; and
- browser tests for keyboard navigation, resuming, and completing a lesson.

Exit: a learner can finish and resume a coherent lesson, with exposure and
independent evidence stored separately.

### Phase 2 — Science Toolkit pilot

- first four toolkit lessons;
- graph and quantity interactions;
- delayed review queue;
- broad concept-evidence states;
- prerequisite repair and next-lesson recommendations; and
- cumulative graph and measurement studio.

Exit: a non-science learner can complete the toolkit slice and apply it to a new
graph without being shown the method name first.

### Phase 3 — chemistry and physics strands

- particle model and mole lessons;
- describing motion and motion-graph lessons;
- reusable equation, unit, graph, and worked-example components;
- end-of-module assessment; and
- content review and correction workflow.

Exit: the learner can move between a physical description, a representation,
and a simple calculation in both subjects.

### Phase 4 — private-pilot readiness

- onboarding, invitation-only authentication, and learner progress;
- accessibility and mobile/tablet review;
- privacy export/deletion baseline;
- content-quality reporting;
- pilot analytics limited to learning and usability decisions; and
- independent scientific review of pilot lessons and calculations.

Exit: invited non-science learners can complete the pilot safely, and their
feedback can guide the next curriculum expansion.

### Later

Expand the chemistry and physics sequence, add organic/biochemical connections,
then build scientific integration studios. Exam-like passages, timing, and
simulation follow the foundation course. A grounded tutor can be considered
later, after approved-content retrieval, privacy, evaluation, and cost policies
exist.

## Quality gates

- every equation names quantities and units;
- every calculation has a deterministic recomputation or independent check;
- every graph and interactive model has an accessible alternative;
- every lesson declares prerequisites and does not silently exceed them;
- every scientific analogy states its limitations;
- every independent check maps to stated objectives;
- no lesson can move directly from draft to published;
- unreviewed private content is visibly labelled;
- no official, purchased, leaked, recalled, or close-paraphrase exam material;
- no claimed official score conversion or guaranteed outcome; and
- learner data collection remains minimal and explainable.

## Repository workflow

Completed local commits before the working private-pilot build:

1. `bbfc222 document product research and pilot plan`
2. `0724864 scaffold web workspace and quality gates`
3. `af5e156 add content schemas and exam configuration`

4. `65e6ffb reframe the pilot as a structured science course`
5. `165da8c add course outline and curriculum preview`

The current working implementation adds all nine pilot experiences, the
course/lesson/review/notebook/progress loop, on-device persistence, responsive
navigation, static export, and Android packaging with Capacitor.

At the product owner's request, GitHub creation and pushing are deferred. The
eventual target remains the private `Siyan-Dimitrov/SciPrep` repository.

## Remaining product questions

These are not blockers for the next foundation work:

1. Is there a target date for inviting the first private learner?
2. Should the programme be presented as one integrated course or two visible
   courses, "Chemistry Foundations" and "Physics Foundations," sharing the
   Science Toolkit?
3. Will the private pilot be used only by the product owner initially, or by a
   small group of invited learners?
4. What hosting budget or preferred provider should guide deployment?
5. Who could later review pilot chemistry and physics content for scientific
   correctness?
