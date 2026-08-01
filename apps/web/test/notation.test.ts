import { readFileSync, readdirSync } from "node:fs";

import { describe, expect, it } from "vitest";

import { courseStages, pilotLessons } from "../lib/course-content";
import { isPlain, tokenizeNotation } from "../lib/notation";

/**
 * Several Unicode superscript and subscript codepoints are absent from the
 * display and body faces and from the Android system fallbacks, so they paint
 * as empty boxes. `notation()` rewrites them into <sup>/<sub> with ASCII
 * characters. These tests fail if content or a diagram introduces a character
 * the rewrite does not know about, which would render as a box on a device.
 */

// Superscripts and Subscripts block, plus the Latin-1 and modifier-letter
// superscripts used in the course.
const RISKY = /[⁰-₟²³¹ˣᵃᵇᵉᵏᵒᵖᵗᵣ]/u;

function stringsIn(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(stringsIn);
  if (value && typeof value === "object") return Object.values(value).flatMap(stringsIn);
  return [];
}

describe("scientific notation rewriting", () => {
  it("splits a mixed string into plain, superscript, and subscript runs", () => {
    expect(tokenizeNotation("mol dm⁻³")).toEqual([
      { kind: "text", value: "mol dm" },
      { kind: "sup", value: "−3" },
    ]);
    expect(tokenizeNotation("H₂O")).toEqual([
      { kind: "text", value: "H" },
      { kind: "sub", value: "2" },
      { kind: "text", value: "O" },
    ]);
  });

  it("keeps a subscript run adjacent to a superscript run separate", () => {
    expect(tokenizeNotation("Kₘ⁻¹")).toEqual([
      { kind: "text", value: "K" },
      { kind: "sub", value: "m" },
      { kind: "sup", value: "−1" },
    ]);
  });

  it("leaves text without notation untouched", () => {
    expect(isPlain("a plain sentence with × and ° and Δ")).toBe(true);
    expect(isPlain("10⁻³")).toBe(false);
  });

  it("rewrites every risky character in every lesson and stage string", () => {
    const offenders = new Map<string, string>();

    for (const source of [...pilotLessons, ...courseStages]) {
      for (const text of stringsIn(source)) {
        if (!RISKY.test(text)) continue;
        const rewritten = tokenizeNotation(text)
          .map((token) => token.value)
          .join("");
        const leftover = rewritten.match(RISKY);
        if (leftover) {
          offenders.set(leftover[0], `${source.id}: ${text.slice(0, 60)}`);
        }
      }
    }

    expect(Object.fromEntries(offenders)).toEqual({});
  });

  /**
   * Lesson and stage strings are also rendered outside the lesson player — on
   * the course map, today, review, notebook, and progress pages. Of those, only
   * the review page's transfer rule passes through `notation()`; the rest paint
   * the raw string, which is safe only while those particular fields stay free
   * of superscripts and subscripts. This pins that assumption, so authoring
   * "10⁻³" into a lesson title fails here rather than painting boxes on an
   * Android device.
   *
   * `lesson.objectives` and block titles are deliberately excluded. Both carry
   * notation, and both are now rendered through `notation()` by the lesson
   * player, so they are covered by the tokenizer test above instead.
   */
  it("keeps fields rendered without notation() free of notation", () => {
    const offenders: string[] = [];
    const check = (id: string, fields: Record<string, string>) => {
      for (const [field, text] of Object.entries(fields)) {
        // Either condition is disqualifying: a character the tokenizer would
        // have rewritten, or one from the risky blocks that it would not.
        if (!isPlain(text) || RISKY.test(text)) {
          offenders.push(`${id}.${field}: ${text}`);
        }
      }
    };

    for (const lesson of pilotLessons) {
      check(lesson.id, {
        title: lesson.title,
        summary: lesson.summary,
        number: lesson.number,
      });
    }

    for (const stage of courseStages) {
      check(stage.id, {
        title: stage.title,
        description: stage.description,
        number: stage.number,
      });
    }

    expect(offenders).toEqual([]);
  });

  it("rewrites every risky character used in a diagram label", () => {
    const dir = new URL("../components/", import.meta.url);
    const offenders = new Map<string, string>();

    for (const file of readdirSync(dir).filter((name) => name.startsWith("concept-visual"))) {
      const source = readFileSync(new URL(file, dir), "utf8");
      for (const character of source) {
        if (!RISKY.test(character)) continue;
        const rewritten = tokenizeNotation(character)
          .map((token) => token.value)
          .join("");
        if (RISKY.test(rewritten)) {
          offenders.set(character, file);
        }
      }
    }

    expect(Object.fromEntries(offenders)).toEqual({});
  });
});
