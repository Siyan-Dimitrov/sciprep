import { describe, expect, it } from "vitest";

import {
  getLesson,
  getLessonBySlug,
  pilotLessons,
  prerequisitesAreComplete,
} from "../lib/course-content";
import {
  completionPercentage,
  emptyProgress,
  evidenceLabel,
  nextReviewDate,
  type LearnerProgress,
} from "../lib/progress";

describe("course prerequisites", () => {
  it("unlocks the first lesson without prior completion", () => {
    const lesson = getLesson("lesson.toolkit.measurement_units");
    expect(lesson).toBeDefined();
    expect(prerequisitesAreComplete(lesson!, [])).toBe(true);
  });

  it("keeps a dependent lesson locked until every prerequisite is complete", () => {
    const lesson = getLesson("lesson.toolkit.graphs_change");
    expect(lesson).toBeDefined();
    expect(
      prerequisitesAreComplete(lesson!, ["lesson.toolkit.scientific_notation"]),
    ).toBe(false);
    expect(
      prerequisitesAreComplete(lesson!, [
        "lesson.toolkit.scientific_notation",
        "lesson.toolkit.ratios_rates",
      ]),
    ).toBe(true);
  });

  it("gives every native lesson route a unique extension-safe slug", () => {
    const slugs = pilotLessons.map((lesson) => lesson.slug);

    expect(new Set(slugs).size).toBe(pilotLessons.length);
    for (const lesson of pilotLessons) {
      expect(lesson.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(getLessonBySlug(lesson.slug)?.id).toBe(lesson.id);
    }
  });
});

describe("learner evidence", () => {
  it("reports completion across the pilot", () => {
    const progress: LearnerProgress = {
      ...emptyProgress,
      lessonVisits: {
        "lesson.one": {
          blockIndex: 4,
          lastVisitedAt: "2026-07-28T12:00:00.000Z",
          completedAt: "2026-07-28T12:00:00.000Z",
        },
        "lesson.two": {
          blockIndex: 2,
          lastVisitedAt: "2026-07-28T12:00:00.000Z",
        },
      },
    };

    expect(completionPercentage(progress, 4)).toBe(25);
  });

  it("distinguishes introduced, independent, and review-due evidence", () => {
    const now = Date.parse("2026-07-30T12:00:00.000Z");
    const progress: LearnerProgress = {
      ...emptyProgress,
      lessonVisits: {
        introduced: {
          blockIndex: 1,
          lastVisitedAt: "2026-07-28T12:00:00.000Z",
        },
        independent: {
          blockIndex: 4,
          lastVisitedAt: "2026-07-28T12:00:00.000Z",
          completedAt: "2026-07-28T12:00:00.000Z",
        },
        due: {
          blockIndex: 4,
          lastVisitedAt: "2026-07-28T12:00:00.000Z",
          completedAt: "2026-07-28T12:00:00.000Z",
        },
      },
      checkResults: {
        independent: {
          check: {
            correct: true,
            attempts: 1,
            answeredAt: "2026-07-28T12:00:00.000Z",
          },
        },
      },
      reviews: {
        independent: {
          dueAt: "2026-08-01T12:00:00.000Z",
          intervalDays: 3,
        },
        due: {
          dueAt: "2026-07-29T12:00:00.000Z",
          intervalDays: 1,
        },
      },
    };

    expect(evidenceLabel(progress, "introduced", now)).toBe("Introduced");
    expect(evidenceLabel(progress, "independent", now)).toBe("Independent");
    expect(evidenceLabel(progress, "due", now)).toBe("Review due");
  });

  it("advances review dates deterministically", () => {
    expect(nextReviewDate(new Date("2026-07-28T00:00:00.000Z"), 3)).toBe(
      "2026-07-31T00:00:00.000Z",
    );
  });
});
