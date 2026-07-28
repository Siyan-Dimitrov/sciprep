import { z } from "zod";

const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Expected an ISO date in YYYY-MM-DD format");

const sourceLinkSchema = z.object({
  publisher: z.string().min(1),
  label: z.string().min(1),
  url: z.url(),
});

export const disciplineWeightsSchema = z
  .object({
    biology: z.number().min(0).max(1),
    chemistry: z.number().min(0).max(1),
    physics: z.number().min(0).max(1),
  })
  .superRefine((weights, context) => {
    const total = weights.biology + weights.chemistry + weights.physics;

    if (Math.abs(total - 1) > Number.EPSILON * 10) {
      context.addIssue({
        code: "custom",
        message: `Discipline weights must total 1; received ${total}`,
      });
    }
  });

export const examConfigVersionSchema = z.object({
  id: z.string().regex(/^exam\.[a-z0-9._-]+$/),
  schemaVersion: z.literal(1),
  status: z.enum(["draft", "officially_verified", "superseded"]),
  effectiveFrom: isoDateSchema,
  verifiedAt: isoDateSchema,
  sources: z.array(sourceLinkSchema).min(1),
  section: z.object({
    key: z.literal("biological_physical_sciences"),
    displayName: z.string().min(1),
    questionCount: z.number().int().positive(),
    durationMinutes: z.number().int().positive(),
    optionsPerQuestion: z.number().int().min(2).max(8),
    disciplineWeights: disciplineWeightsSchema,
  }),
  conditions: z.object({
    calculatorPermitted: z.boolean(),
    negativeMarking: z.boolean(),
    equalQuestionValue: z.boolean(),
    scratchMedium: z.array(z.enum(["paper", "erasable_whiteboard"])).min(1),
  }),
});

export type ExamConfigVersion = z.infer<typeof examConfigVersionSchema>;

