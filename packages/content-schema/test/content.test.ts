import { describe, expect, it } from "vitest";

import {
  canTransitionReviewState,
  findKnowledgeGraphCycles,
  type KnowledgeComponent,
} from "../src/index.js";

const component = (
  id: string,
  prerequisites: readonly string[],
): KnowledgeComponent => ({
  id,
  name: id,
  discipline: "cross_cutting",
  priority: "P0",
  description: `A sufficiently detailed description for ${id}.`,
  prerequisites: [...prerequisites],
  misconceptionCodes: [],
});

describe("review workflow", () => {
  it("prevents a draft from bypassing required review", () => {
    expect(canTransitionReviewState("draft", "scientific_review")).toBe(true);
    expect(canTransitionReviewState("draft", "published")).toBe(false);
  });
});

describe("knowledge-component graph", () => {
  it("returns no cycles for an acyclic prerequisite graph", () => {
    const graph = [
      component("cross.units", []),
      component("cross.dimensional_analysis", ["cross.units"]),
    ];

    expect(findKnowledgeGraphCycles(graph)).toEqual([]);
  });

  it("reports a circular prerequisite path", () => {
    const graph = [
      component("cross.ratios", ["cross.rates"]),
      component("cross.rates", ["cross.ratios"]),
    ];

    expect(findKnowledgeGraphCycles(graph)).toEqual([
      ["cross.ratios", "cross.rates", "cross.ratios"],
    ]);
  });
});

