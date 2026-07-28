# SciPrep

SciPrep is an independent, app-based foundation course in chemistry and physics
for adults with little or no recent science background.

The product is designed to help learners:

- build scientific and mathematical foundations without assumed knowledge;
- understand chemistry and physics through visual models and worked examples;
- practise each idea through guided interactions before working independently;
- connect equations, units, graphs, experiments, and physical meaning; and
- progress from foundation learning to unfamiliar GAMSAT-style applications.

This project is at the research and foundation stage. The first delivery target
is a small but complete course-learning loop:

```text
course map -> concept lesson -> visual model -> worked example
  -> guided practice -> independent check -> review schedule
```

See:

- [Product and evidence research](docs/research.md)
- [Course curriculum blueprint](docs/course-blueprint.md)
- [Implementation plan](docs/implementation-plan.md)
- [Architecture decision record](docs/decisions/0001-pilot-architecture.md)
- [Original build specification](gamsat_science_app_agent_spec.md)

## Local development

Prerequisites: Node.js 22+ and npm 10+.

```bash
npm install
npm run dev
```

Quality gates:

```bash
npm run check
npm run audit:prod
```

## Independence and content policy

SciPrep is not affiliated with, endorsed by, or authorised by ACER. Official,
purchased, leaked, or recalled GAMSAT questions must never be added to the
repository, pasted into an AI service, or used as source material. Pilot content
must be original, attributable, versioned, and clearly marked as unreviewed until
it completes the required review process.
