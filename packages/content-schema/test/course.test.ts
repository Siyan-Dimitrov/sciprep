import { describe, expect, it } from "vitest";

import { courseOutlineSchema } from "../src/index.js";

const outline = {
  id: "course.sciprep.foundations",
  version: 1,
  title: "SciPrep Chemistry and Physics Foundations",
  audience: "Adults with little or no recent science background.",
  description:
    "A structured foundation course that builds chemistry and physics through models and guided application.",
  release: "private_pilot",
  stages: [
    {
      id: "stage.toolkit",
      order: 0,
      title: "Science Toolkit",
      discipline: "cross_cutting",
      description: "The quantities, mathematics, and representations used across science.",
      modules: [
        {
          id: "module.measurement",
          order: 1,
          title: "Measurement and relationships",
          description: "Learn to describe scientific quantities and how they change.",
          lessons: [
            {
              id: "lesson.units",
              order: 1,
              title: "Measurement, quantities, and units",
              estimatedMinutes: 25,
              deliveryStatus: "draft",
              prerequisiteLessonIds: [],
            },
            {
              id: "lesson.ratios",
              order: 2,
              title: "Ratios and rates",
              estimatedMinutes: 30,
              deliveryStatus: "planned",
              prerequisiteLessonIds: ["lesson.units"],
            },
          ],
        },
      ],
    },
  ],
  reviewState: "draft",
  provenance: {
    createdBy: "sciprep.product",
    createdAt: "2026-07-28",
    generationMethod: "ai_assisted",
    sourceIds: ["src.acer.2026.booklet"],
    independentCreationAttested: true,
    similarityScreen: {
      status: "not_run",
    },
  },
  reviewHistory: [],
} as const;

describe("courseOutlineSchema", () => {
  it("accepts an acyclic course outline", () => {
    expect(courseOutlineSchema.safeParse(outline).success).toBe(true);
  });

  it("rejects a missing lesson prerequisite", () => {
    const invalid = structuredClone(outline);
    invalid.stages[0].modules[0].lessons[1].prerequisiteLessonIds = [
      "lesson.missing",
    ];

    expect(courseOutlineSchema.safeParse(invalid).success).toBe(false);
  });

  it("rejects a circular lesson path", () => {
    const invalid = structuredClone(outline);
    invalid.stages[0].modules[0].lessons[0].prerequisiteLessonIds = [
      "lesson.ratios",
    ];

    expect(courseOutlineSchema.safeParse(invalid).success).toBe(false);
  });
});

