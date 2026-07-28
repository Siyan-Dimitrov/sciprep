# Implementation plan

Status: proposed pilot plan  
Last updated: 28 July 2026

## Outcome

Build a responsive, accessible web application that helps a learner identify
the scientific model in an unfamiliar stimulus, act on the relevant
information, receive a diagnosis of their reasoning error, and practise the
right follow-up activity.

The first milestone is a working vertical slice with real persistence. It is
not a throwaway mock-up and it is not the full content-heavy commercial MVP
described in the source specification.

## Assumed pilot

Until product decisions are confirmed, implementation assumes:

- mixed-background adult learners preparing in the UK;
- desktop/tablet as the primary passage and test experience, with responsive
  mobile review;
- a private GitHub repository named `SciPrep`;
- repository-authored, schema-validated content as the pilot source of truth;
- PostgreSQL locally and in hosted environments;
- authored feedback and deterministic adaptation, with no required LLM;
- a private pilot before any paid or public launch; and
- one Next.js application containing learner and protected reviewer routes.

## Scope

### Pilot must have

- onboarding with target date, background, and weekly availability;
- a short screening diagnostic with confidence capture;
- a curriculum/evidence view that communicates uncertainty;
- one complete lesson, worked-example, and passage-question loop;
- original versioned content, provenance, review state, and schema validation;
- progressive authored hints and layered explanations;
- response, timing, option, confidence, and misconception events;
- deterministic mastery evidence and next-session recommendation;
- an error log and one mixed timed mini-test;
- keyboard-accessible, zoom-safe core flows; and
- automated unit, schema, accessibility, and end-to-end checks.

### Explicitly deferred

- full P0 curriculum coverage and hundreds of production items;
- a 75-question simulation until the smaller exam engine is reliable;
- a separate admin application;
- Redis, queues, and dedicated background workers;
- conversational AI and AI question generation;
- IRT, Bayesian knowledge tracing, CAT, and official-score prediction;
- complex gamification, study groups, and leaderboards; and
- public self-service authoring.

## Architecture

```text
apps/
  web/                    learner + reviewer route groups
packages/
  domain/                 scoring, mastery evidence, review states
  content-schema/         content and provenance schemas
  adaptive-engine/        deterministic recommendation rules
  exam-engine/            test assembly, timer, navigation, snapshots
  ui/                     shared accessible components and tokens
content/
  knowledge-components/
  lessons/
  passages/
  items/
  sources/
docs/
  decisions/
  content-authoring/
infrastructure/
  migrations/
```

Planned stack:

- Next.js, React, TypeScript, and Tailwind CSS;
- Zod for boundaries and content validation;
- PostgreSQL with Drizzle ORM and SQL migrations;
- Auth.js or an equivalent provider adapter after identity requirements are
  confirmed;
- Vitest for domain/schema tests and Playwright for critical user flows;
- Docker Compose for local PostgreSQL; and
- GitHub Actions for install, lint, type check, unit tests, content validation,
  accessibility checks, and an end-to-end smoke test.

Redis, object storage, and a worker are added only when measured workload or
deployment constraints require them.

## Sources of truth

- Git holds authored pilot content and review metadata.
- Only `approved` content can be materialised into the delivery database.
- Published content is immutable; corrections produce a new version.
- Every response references the exact item and passage versions shown.
- Test forms store their configuration and ordered item-version identifiers.
- Algorithms and exam rules have explicit versions.
- Attempts retain a display snapshot sufficient for later audit even if content
  is retired.

## Minimum domain model

The source specification's entity list is extended with:

- `exam_config_versions`;
- `algorithm_versions`;
- `roles`, `review_assignments`, and `review_decisions`;
- `content_provenance` and `content_asset_licences`;
- `audit_log`;
- `privacy_requests`;
- `item_display_snapshots`; and
- timing-quality fields for active time, wall time, pauses, and visibility loss.

The pilot does not need every final table on day one. Migrations will follow the
vertical slice and preserve forward-compatible identifiers.

## Delivery phases

### Phase 0 — research and foundation

- confirm pilot audience, content reviewers, branding, hosting, and privacy
  jurisdiction;
- establish repository, CI, workspace, design tokens, and local database;
- add exam configuration and content/provenance schemas;
- seed a small knowledge-component graph; and
- implement validation for schema, references, review state, provenance,
  options, alt text, and graph cycles.

Exit: clean install plus lint, type check, unit tests, and content validation.

### Phase 1 — end-to-end learning loop

- lesson and worked-example rendering;
- persistent passage and linked-item interface;
- response timing, confidence, hints, and option submission;
- layered feedback and distractor diagnosis;
- mastery-evidence update and a transparent next recommendation; and
- one fully original, clearly review-labelled deterministic content set.

Exit: a learner can finish the loop and the exact content version, response
events, and recommendation can be reproduced in tests.

### Phase 2 — screening and planning

- onboarding and target date;
- 12 to 20 item screening diagnostic;
- evidence-aware profile with no official score implication;
- study-session planner; and
- error-log repair queue.

Exit: a new user receives a specific, explainable first plan with visible
evidence limits.

### Phase 3 — timed mini-test and pilot readiness

- deterministic mixed-test assembly;
- timer, navigator, flag/return, unanswered state, and end-only feedback;
- pace and first/last-third analysis;
- reviewer workflow through validated pull requests;
- data export/deletion baseline; and
- accessibility, security, and content-quality review.

Exit: private pilot release with reviewed content and critical end-to-end tests.

### Later product phases

Expand P0 coverage, content analytics, an authoring UI, spaced-review breadth,
and full-length simulation in that order. Introduce psychometrics only after
sample size, anchor-item design, and validation justify it. Introduce a grounded
AI tutor only after approved-content retrieval, privacy, evaluation, and
escalation policies exist.

## Mastery evidence v0

The pilot will not display a precise universal mastery percentage. For each
knowledge component it will retain:

- independent correct/incorrect attempts;
- hinted correct attempts by highest hint level;
- timed and untimed attempts;
- confidence/outcome calibration counts;
- recency and delayed retrieval evidence;
- response-time quality and expected-time band; and
- recurring misconception codes.

A versioned rule maps sufficient evidence to broad states:
`insufficient evidence`, `priority gap`, `developing`, `functional`, and
`stable`. Recommendations must expose their top reasons, for example:
"Unit conversion is prioritised because two independent attempts were
incorrect, including one high-confidence error, and it is a prerequisite for
the next chemistry passage."

## Quality and safety gates

- no official, purchased, leaked, recalled, or close-paraphrase item content;
- no content can move directly from draft to published;
- every item has exactly one best answer, distractor rationales, expected
  timing, provenance, and an accessible representation;
- numerical questions are deterministically recomputable where feasible;
- user-facing Markdown, mathematics, and SVG are sanitised;
- no official scaled-score estimate or guaranteed-outcome marketing;
- analytics explanations, export, deletion, and retention are designed before
  public release; and
- exam configuration is rechecked against ACER before each release.

## Initial commit sequence

1. `document product research and pilot plan`
2. `scaffold the web workspace and quality gates`
3. `add content schemas and exam configuration`
4. `seed the pilot knowledge graph`
5. `build and test the first learning vertical slice`

Each commit should pass the checks that exist at that point. Pushes will follow
each coherent commit once the GitHub session and remote are available.

## Decisions needed from the product owner

1. Is the immediate target a private learner pilot, public free beta, or paid
   launch, and is there a target date?
2. Which learner profile is the primary pilot user?
3. Who will author and independently review biology, chemistry, and physics
   content? Is any already-reviewed original item bank available?
4. Is the reduced pilot content acceptable, or is full P0 coverage required
   before any user trial?
5. Is conversational AI required in the first release?
6. Should content remain Git-first for the pilot, or is a non-technical admin
   editor an immediate requirement?
7. What hosting budget/provider constraints exist, and are users adults only?
8. May the repository be private under `Siyan-Dimitrov/SciPrep`, with feature
   branches and draft pull requests?

