import { describe, expect, it } from "vitest";

import { courseStages, pilotLessons } from "../lib/course-content";

const allBlocks = pilotLessons.flatMap((lesson) =>
  lesson.blocks.map((block) => ({ lessonId: lesson.id, block })),
);

describe("course content structure", () => {
  it("keeps lesson ids, slugs, and numbers unique", () => {
    const ids = pilotLessons.map((lesson) => lesson.id);
    const slugs = pilotLessons.map((lesson) => lesson.slug);
    const numbers = pilotLessons.map((lesson) => lesson.number);

    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(numbers).size).toBe(numbers.length);
  });

  it("keeps every block id unique across the whole course", () => {
    const blockIds = allBlocks.map(({ block }) => block.id);
    const seen = new Set<string>();
    const duplicates = blockIds.filter((id) => {
      if (seen.has(id)) {
        return true;
      }
      seen.add(id);
      return false;
    });

    expect(duplicates).toEqual([]);
  });

  it("opens every lesson with teaching and closes it with a summary", () => {
    for (const lesson of pilotLessons) {
      expect(lesson.blocks[0]?.type).toBe("concept");
      expect(lesson.blocks[lesson.blocks.length - 1]?.type).toBe("summary");
    }
  });

  it("gives every lesson a visual model, a worked example, and independent checks", () => {
    for (const lesson of pilotLessons) {
      const types = lesson.blocks.map((block) => block.type);
      expect(types).toContain("visual");
      expect(types).toContain("worked");
      expect(types.filter((type) => type === "check").length).toBeGreaterThanOrEqual(2);
    }
  });

  it("gives every check exactly four distinct options and a valid answer index", () => {
    for (const { lessonId, block } of allBlocks) {
      if (block.type !== "check") {
        continue;
      }

      expect(block.options, `${lessonId}/${block.id}`).toHaveLength(4);
      expect(new Set(block.options).size, `${lessonId}/${block.id}`).toBe(4);
      expect(block.correctIndex, `${lessonId}/${block.id}`).toBeGreaterThanOrEqual(0);
      expect(block.correctIndex, `${lessonId}/${block.id}`).toBeLessThan(4);
    }
  });

  it("avoids duplicate strings that React uses as keys", () => {
    for (const { lessonId, block } of allBlocks) {
      const label = `${lessonId}/${block.id}`;

      if (block.type === "concept") {
        expect(new Set(block.paragraphs).size, label).toBe(block.paragraphs.length);
      }
      if (block.type === "worked") {
        const labels = block.steps.map((step) => step.label);
        expect(new Set(labels).size, label).toBe(labels.length);
      }
      if (block.type === "summary") {
        expect(new Set(block.points).size, label).toBe(block.points.length);
      }
    }
  });

  it("resolves every prerequisite and forward link to a real lesson", () => {
    const ids = new Set(pilotLessons.map((lesson) => lesson.id));

    for (const lesson of pilotLessons) {
      for (const prerequisiteId of lesson.prerequisiteLessonIds) {
        expect(ids, `${lesson.id} prerequisite`).toContain(prerequisiteId);
      }

      const summary = lesson.blocks[lesson.blocks.length - 1];
      if (summary?.type === "summary" && summary.nextLessonId) {
        expect(ids, `${lesson.id} next link`).toContain(summary.nextLessonId);
      }
    }
  });

  it("orders lessons so that no lesson precedes its own prerequisite", () => {
    const position = new Map(pilotLessons.map((lesson, index) => [lesson.id, index]));

    for (const lesson of pilotLessons) {
      for (const prerequisiteId of lesson.prerequisiteLessonIds) {
        expect(
          position.get(prerequisiteId)!,
          `${lesson.id} after ${prerequisiteId}`,
        ).toBeLessThan(position.get(lesson.id)!);
      }
    }
  });

  it("reaches every lesson from exactly one course stage", () => {
    const staged = courseStages.flatMap((stage) => stage.lessonIds);

    expect(new Set(staged).size).toBe(staged.length);
    expect([...staged].sort()).toEqual([...pilotLessons.map((lesson) => lesson.id)].sort());

    for (const stage of courseStages) {
      expect(stage.lessonIds.length, stage.id).toBeGreaterThan(0);
    }
  });
});
