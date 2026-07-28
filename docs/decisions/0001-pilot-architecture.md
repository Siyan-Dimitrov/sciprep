# ADR 0001: Use a modular monolith for the pilot

Date: 28 July 2026  
Status: proposed

## Context

The product specification recommends a monorepo with separate learner and admin
applications, shared packages, a worker, Redis, object storage, and a possible
psychometrics service. The pilot must first prove a single learning loop and a
safe content workflow. It does not yet have the traffic, team boundaries, or
asynchronous workload that justify separate deployable services.

## Decision

Use a TypeScript monorepo with one Next.js application and separate domain
packages. Learner and reviewer experiences will be route groups in the same
application. PostgreSQL is the only required stateful local service.

Keep scoring, content state transitions, mastery evidence, adaptive rules, and
test assembly outside React components. Define their boundaries so a worker,
admin application, or psychometrics service can be extracted later without
changing the learner-facing contracts.

Pilot content is versioned in Git and validated before materialisation into the
database. Attempts reference immutable content versions and retain an audit
snapshot.

## Consequences

Benefits:

- one deployment and one authentication boundary;
- faster end-to-end development and testing;
- deterministic domain logic remains independently testable;
- content review can use pull requests before an editor is justified; and
- fewer operational dependencies during the private pilot.

Trade-offs:

- learner and reviewer releases are initially coupled;
- Git-first authoring is unsuitable for non-technical content teams;
- background processing runs in-process or through deployment-native jobs; and
- module boundaries require discipline because they are not enforced by
  separate services.

## Extraction triggers

Add a dedicated worker when jobs need retries, durable queues, or exceed request
runtime limits. Add a separate admin application when reviewer release cadence,
permissions, or team ownership diverge. Add object storage when assets can no
longer be efficiently versioned with content. Add psychometric services only
after calibrated data and model governance exist.

