import { z } from "zod";

import {
  difficultyDimensionsSchema,
  provenanceSchema,
  reviewDecisionSchema,
  reviewStateSchema,
} from "./content.js";

const contentIdSchema = z
  .string()
  .min(3)
  .regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*$/);

const blockBaseSchema = z.object({
  id: contentIdSchema,
});

const accessibleAssetSchema = z.object({
  src: z.string().startsWith("/"),
  alt: z.string().min(10),
  longDescription: z.string().min(20),
});

const practiceResponseSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("single_choice"),
    options: z.array(z.string().min(1)).min(2).max(8),
    correctOptionIndex: z.number().int().nonnegative(),
  }),
  z.object({
    kind: z.literal("numeric"),
    answer: z.number(),
    tolerance: z.number().nonnegative(),
    unit: z.string().min(1).optional(),
  }),
  z.object({
    kind: z.literal("short_text"),
    exampleAnswer: z.string().min(1),
    selfAssessmentPrompts: z.array(z.string().min(1)).min(1),
  }),
]);

export const lessonBlockSchema = z.discriminatedUnion("type", [
  blockBaseSchema.extend({
    type: z.literal("purpose"),
    heading: z.string().min(1),
    markdown: z.string().min(20),
  }),
  blockBaseSchema.extend({
    type: z.literal("prediction"),
    prompt: z.string().min(10),
    response: practiceResponseSchema,
    feedbackMarkdown: z.string().min(20),
    graded: z.literal(false),
  }),
  blockBaseSchema.extend({
    type: z.literal("explanation"),
    heading: z.string().min(1),
    markdown: z.string().min(40),
    glossaryTermIds: z.array(contentIdSchema),
  }),
  blockBaseSchema.extend({
    type: z.literal("visual_model"),
    title: z.string().min(1),
    introduction: z.string().min(20),
    asset: accessibleAssetSchema,
    interactionDescription: z.string().min(20).optional(),
  }),
  blockBaseSchema.extend({
    type: z.literal("worked_example"),
    prompt: z.string().min(10),
    steps: z
      .array(
        z.object({
          decision: z.string().min(10),
          working: z.string().min(1),
          unitNote: z.string().min(1).optional(),
        }),
      )
      .min(2),
    answer: z.string().min(1),
    plausibilityCheck: z.string().min(10),
    validatorId: contentIdSchema.optional(),
  }),
  blockBaseSchema.extend({
    type: z.literal("guided_practice"),
    prompt: z.string().min(10),
    response: practiceResponseSchema,
    scaffolds: z.array(z.string().min(1)).min(1).max(4),
    solutionMarkdown: z.string().min(20),
    evidenceKnowledgeComponentIds: z.array(contentIdSchema).min(1),
  }),
  blockBaseSchema.extend({
    type: z.literal("independent_check"),
    prompt: z.string().min(10),
    response: practiceResponseSchema,
    feedbackMarkdown: z.string().min(20),
    evidenceKnowledgeComponentIds: z.array(contentIdSchema).min(1),
    difficulty: difficultyDimensionsSchema,
  }),
  blockBaseSchema.extend({
    type: z.literal("summary"),
    keyPoints: z.array(z.string().min(10)).min(2).max(6),
    misconception: z.object({
      code: contentIdSchema,
      correction: z.string().min(20),
    }),
    transferRule: z.string().min(20),
  }),
  blockBaseSchema.extend({
    type: z.literal("next_connection"),
    lessonId: contentIdSchema,
    markdown: z.string().min(20),
  }),
]);

export type LessonBlock = z.infer<typeof lessonBlockSchema>;

export const lessonSchema = z
  .object({
    id: contentIdSchema,
    version: z.number().int().positive(),
    title: z.string().min(1),
    summary: z.string().min(30),
    estimatedMinutes: z.number().int().min(5).max(90),
    objectives: z
      .array(
        z.object({
          id: contentIdSchema,
          statement: z.string().min(15),
          knowledgeComponentIds: z.array(contentIdSchema).min(1),
        }),
      )
      .min(1),
    prerequisiteLessonIds: z.array(contentIdSchema),
    glossaryTermIds: z.array(contentIdSchema),
    quantityIds: z.array(contentIdSchema),
    blocks: z.array(lessonBlockSchema).min(5),
    reviewState: reviewStateSchema,
    provenance: provenanceSchema,
    reviewHistory: z.array(reviewDecisionSchema),
  })
  .superRefine((lesson, context) => {
    const blockIds = lesson.blocks.map((block) => block.id);
    if (new Set(blockIds).size !== blockIds.length) {
      context.addIssue({
        code: "custom",
        path: ["blocks"],
        message: "Lesson block IDs must be unique",
      });
    }

    const blockTypes = new Set(lesson.blocks.map((block) => block.type));
    const requiredTypes: LessonBlock["type"][] = [
      "purpose",
      "explanation",
      "worked_example",
      "independent_check",
      "summary",
    ];

    for (const requiredType of requiredTypes) {
      if (!blockTypes.has(requiredType)) {
        context.addIssue({
          code: "custom",
          path: ["blocks"],
          message: `Lesson requires a ${requiredType} block`,
        });
      }
    }
  });

const outlineLessonSchema = z.object({
  id: contentIdSchema,
  order: z.number().int().positive(),
  title: z.string().min(1),
  estimatedMinutes: z.number().int().min(5).max(90),
  deliveryStatus: z.enum(["planned", "draft", "pilot_ready", "published"]),
  prerequisiteLessonIds: z.array(contentIdSchema),
});

const outlineModuleSchema = z.object({
  id: contentIdSchema,
  order: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().min(20),
  lessons: z.array(outlineLessonSchema).min(1),
});

const outlineStageSchema = z.object({
  id: contentIdSchema,
  order: z.number().int().nonnegative(),
  title: z.string().min(1),
  discipline: z.enum(["cross_cutting", "chemistry", "physics", "integrated"]),
  description: z.string().min(20),
  modules: z.array(outlineModuleSchema).min(1),
});

export const courseOutlineSchema = z
  .object({
    id: contentIdSchema,
    version: z.number().int().positive(),
    title: z.string().min(1),
    audience: z.string().min(20),
    description: z.string().min(40),
    release: z.enum(["private_pilot", "private_beta", "public"]),
    stages: z.array(outlineStageSchema).min(1),
    reviewState: reviewStateSchema,
    provenance: provenanceSchema,
    reviewHistory: z.array(reviewDecisionSchema),
  })
  .superRefine((course, context) => {
    const stages = course.stages;
    const modules = stages.flatMap((stage) => stage.modules);
    const lessons = modules.flatMap((module) => module.lessons);

    const idGroups = [
      ["stage", stages.map((stage) => stage.id)],
      ["module", modules.map((module) => module.id)],
      ["lesson", lessons.map((lesson) => lesson.id)],
    ] as const;

    for (const [label, ids] of idGroups) {
      if (new Set(ids).size !== ids.length) {
        context.addIssue({
          code: "custom",
          path: ["stages"],
          message: `Course ${label} IDs must be unique`,
        });
      }
    }

    const lessonIds = new Set(lessons.map((lesson) => lesson.id));
    for (const lesson of lessons) {
      for (const prerequisiteId of lesson.prerequisiteLessonIds) {
        if (!lessonIds.has(prerequisiteId)) {
          context.addIssue({
            code: "custom",
            path: ["stages"],
            message: `${lesson.id} references missing prerequisite ${prerequisiteId}`,
          });
        }
      }
    }

    const prerequisitesByLesson = new Map(
      lessons.map((lesson) => [lesson.id, lesson.prerequisiteLessonIds]),
    );
    const visited = new Set<string>();
    const active = new Set<string>();

    const visit = (lessonId: string): boolean => {
      if (active.has(lessonId)) {
        return true;
      }
      if (visited.has(lessonId)) {
        return false;
      }

      visited.add(lessonId);
      active.add(lessonId);
      const hasCycle = (prerequisitesByLesson.get(lessonId) ?? []).some(visit);
      active.delete(lessonId);
      return hasCycle;
    };

    if (lessons.some((lesson) => visit(lesson.id))) {
      context.addIssue({
        code: "custom",
        path: ["stages"],
        message: "Course lesson prerequisites must be acyclic",
      });
    }
  });

export type CourseOutline = z.infer<typeof courseOutlineSchema>;
export type Lesson = z.infer<typeof lessonSchema>;

