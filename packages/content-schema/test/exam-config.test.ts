import { describe, expect, it } from "vitest";

import { disciplineWeightsSchema, examConfigVersionSchema } from "../src/index.js";

const validConfig = {
  id: "exam.gamsat.2026.v1",
  schemaVersion: 1,
  status: "officially_verified",
  effectiveFrom: "2026-01-01",
  verifiedAt: "2026-07-28",
  sources: [
    {
      publisher: "ACER",
      label: "GAMSAT 2026 Information Booklet",
      url: "https://gamsat.acer.org/files/GAMSAT_Information_booklet.pdf",
    },
  ],
  section: {
    key: "biological_physical_sciences",
    displayName: "Reasoning in Biological and Physical Sciences",
    questionCount: 75,
    durationMinutes: 150,
    optionsPerQuestion: 4,
    disciplineWeights: {
      biology: 0.4,
      chemistry: 0.4,
      physics: 0.2,
    },
  },
  conditions: {
    calculatorPermitted: false,
    negativeMarking: false,
    equalQuestionValue: true,
    scratchMedium: ["paper", "erasable_whiteboard"],
  },
} as const;

describe("examConfigVersionSchema", () => {
  it("accepts the verified 2026 configuration shape", () => {
    expect(examConfigVersionSchema.safeParse(validConfig).success).toBe(true);
  });

  it("rejects discipline weights that do not total one", () => {
    const result = disciplineWeightsSchema.safeParse({
      biology: 0.4,
      chemistry: 0.4,
      physics: 0.4,
    });

    expect(result.success).toBe(false);
  });
});

