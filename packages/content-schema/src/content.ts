import { z } from "zod";

const contentIdSchema = z
  .string()
  .min(3)
  .regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*$/);

const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Expected an ISO date in YYYY-MM-DD format");

export const reviewStateSchema = z.enum([
  "draft",
  "scientific_review",
  "editorial_review",
  "copyright_review",
  "pilot",
  "approved",
  "published",
  "retired",
]);

export type ReviewState = z.infer<typeof reviewStateSchema>;

export const allowedReviewTransitions: Readonly<Record<ReviewState, readonly ReviewState[]>> = {
  draft: ["scientific_review"],
  scientific_review: ["draft", "editorial_review"],
  editorial_review: ["draft", "copyright_review"],
  copyright_review: ["draft", "pilot"],
  pilot: ["draft", "approved"],
  approved: ["published"],
  published: ["retired"],
  retired: [],
};

export function canTransitionReviewState(from: ReviewState, to: ReviewState): boolean {
  return allowedReviewTransitions[from].includes(to);
}

export const sourceRecordSchema = z.object({
  id: contentIdSchema,
  sourceType: z.enum([
    "official_exam_rule",
    "open_textbook",
    "peer_reviewed",
    "public_domain_data",
    "open_licensed_data",
    "original_observation",
  ]),
  title: z.string().min(1),
  author: z.string().min(1),
  url: z.url().optional(),
  licence: z.string().min(1),
  attribution: z.string().min(1),
  accessedAt: isoDateSchema.optional(),
});

export const provenanceSchema = z.object({
  createdBy: z.string().min(1),
  createdAt: isoDateSchema,
  generationMethod: z.enum(["human", "ai_assisted", "programmatic"]),
  sourceIds: z.array(contentIdSchema).min(1),
  independentCreationAttested: z.literal(true),
  similarityScreen: z.object({
    status: z.enum(["not_run", "passed", "flagged"]),
    checkedAt: isoDateSchema.optional(),
    methodVersion: z.string().min(1).optional(),
  }),
});

export const reviewDecisionSchema = z.object({
  state: reviewStateSchema,
  reviewerId: z.string().min(1),
  decidedAt: isoDateSchema,
  decision: z.enum(["submitted", "approved", "changes_requested", "retired"]),
  note: z.string().min(1),
});

export const difficultyDimensionsSchema = z.object({
  prerequisiteDepth: z.number().int().min(1).max(5),
  reasoningSteps: z.number().int().min(1).max(5),
  informationDensity: z.number().int().min(1).max(5),
  representationCount: z.number().int().min(1).max(5),
  distractorSimilarity: z.number().int().min(1).max(5),
  algebraicComplexity: z.number().int().min(1).max(5),
  contextNovelty: z.number().int().min(1).max(5),
  timePressureSensitivity: z.number().int().min(1).max(5),
});

export const knowledgeComponentSchema = z.object({
  id: contentIdSchema,
  name: z.string().min(1),
  discipline: z.enum(["cross_cutting", "biology", "chemistry", "physics"]),
  priority: z.enum(["P0", "P1", "P2"]),
  description: z.string().min(20),
  prerequisites: z.array(contentIdSchema),
  misconceptionCodes: z.array(contentIdSchema),
});

export type KnowledgeComponent = z.infer<typeof knowledgeComponentSchema>;

export const passageAssetSchema = z.object({
  type: z.enum(["diagram", "graph", "table", "image"]),
  src: z.string().startsWith("/"),
  alt: z.string().min(10),
  sourceId: contentIdSchema.optional(),
});

export const passageSchema = z.object({
  id: contentIdSchema,
  version: z.number().int().positive(),
  title: z.string().min(1),
  stimulusMarkdown: z.string().min(40),
  assets: z.array(passageAssetSchema),
  knowledgeComponentIds: z.array(contentIdSchema).min(1),
  reviewState: reviewStateSchema,
  provenance: provenanceSchema,
  reviewHistory: z.array(reviewDecisionSchema),
});

const optionSchema = z.object({
  id: z.string().regex(/^[A-H]$/),
  text: z.string().min(1),
});

export const itemSchema = z
  .object({
    id: contentIdSchema,
    version: z.number().int().positive(),
    passageId: contentIdSchema,
    passageVersion: z.number().int().positive(),
    stem: z.string().min(10),
    options: z.array(optionSchema).min(2).max(8),
    correctOptionId: z.string().regex(/^[A-H]$/),
    explanation: z.object({
      summary: z.string().min(10),
      reasoningSteps: z.array(z.string().min(1)).min(1),
      distractorDiagnoses: z.record(z.string(), z.string().min(1)),
      fasterMethod: z.string().min(1),
      transferRule: z.string().min(1),
    }),
    hints: z
      .array(
        z.object({
          level: z.number().int().min(1).max(4),
          text: z.string().min(1),
        }),
      )
      .min(1)
      .max(4),
    primaryKnowledgeComponentId: contentIdSchema,
    secondaryKnowledgeComponentIds: z.array(contentIdSchema),
    expectedTimeSeconds: z.object({
      minimum: z.number().int().positive(),
      maximum: z.number().int().positive(),
    }),
    difficulty: difficultyDimensionsSchema,
    distractorErrorCodes: z.record(z.string(), contentIdSchema),
    reviewState: reviewStateSchema,
    provenance: provenanceSchema,
    reviewHistory: z.array(reviewDecisionSchema),
  })
  .superRefine((item, context) => {
    const optionIds = item.options.map((option) => option.id);
    const uniqueOptionIds = new Set(optionIds);
    const optionTexts = item.options.map((option) => option.text.trim().toLocaleLowerCase());

    if (uniqueOptionIds.size !== optionIds.length) {
      context.addIssue({
        code: "custom",
        path: ["options"],
        message: "Option IDs must be unique",
      });
    }

    if (new Set(optionTexts).size !== optionTexts.length) {
      context.addIssue({
        code: "custom",
        path: ["options"],
        message: "Option text must be unique",
      });
    }

    if (!uniqueOptionIds.has(item.correctOptionId)) {
      context.addIssue({
        code: "custom",
        path: ["correctOptionId"],
        message: "Correct option must exist in options",
      });
    }

    if (item.expectedTimeSeconds.maximum < item.expectedTimeSeconds.minimum) {
      context.addIssue({
        code: "custom",
        path: ["expectedTimeSeconds"],
        message: "Maximum expected time cannot be less than minimum",
      });
    }

    const hintLevels = item.hints.map((hint) => hint.level);
    if (new Set(hintLevels).size !== hintLevels.length) {
      context.addIssue({
        code: "custom",
        path: ["hints"],
        message: "Hint levels must be unique",
      });
    }
  });

export function findKnowledgeGraphCycles(
  components: readonly KnowledgeComponent[],
): readonly string[][] {
  const byId = new Map(components.map((component) => [component.id, component]));
  const visited = new Set<string>();
  const active = new Set<string>();
  const path: string[] = [];
  const cycles: string[][] = [];

  const visit = (id: string): void => {
    if (active.has(id)) {
      const start = path.indexOf(id);
      cycles.push([...path.slice(start), id]);
      return;
    }

    if (visited.has(id)) {
      return;
    }

    visited.add(id);
    active.add(id);
    path.push(id);

    const component = byId.get(id);
    for (const prerequisiteId of component?.prerequisites ?? []) {
      if (byId.has(prerequisiteId)) {
        visit(prerequisiteId);
      }
    }

    path.pop();
    active.delete(id);
  };

  for (const component of components) {
    visit(component.id);
  }

  return cycles;
}

