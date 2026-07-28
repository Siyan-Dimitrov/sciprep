import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative, resolve, sep } from "node:path";

import { z } from "zod";

import { examConfigVersionSchema } from "./exam-config.js";
import {
  findKnowledgeGraphCycles,
  knowledgeComponentSchema,
  type KnowledgeComponent,
} from "./content.js";

type ValidationTarget =
  | { kind: "exam_config"; path: string }
  | { kind: "knowledge_components"; path: string };

async function listJsonFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? listJsonFiles(path) : [path];
    }),
  );

  return files.flat().filter((path) => extname(path) === ".json");
}

function classify(contentRoot: string, path: string): ValidationTarget | undefined {
  const [directory] = relative(contentRoot, path).split(sep);

  if (directory === "exam-config") {
    return { kind: "exam_config", path };
  }

  if (directory === "knowledge-components") {
    return { kind: "knowledge_components", path };
  }

  return undefined;
}

function formatIssues(error: z.ZodError): string {
  return error.issues
    .map((issue) => `  - ${issue.path.join(".") || "<root>"}: ${issue.message}`)
    .join("\n");
}

async function main(): Promise<void> {
  const contentRoot = resolve(process.argv[2] ?? "../../content");
  const files = await listJsonFiles(contentRoot);
  const targets = files
    .map((path) => classify(contentRoot, path))
    .filter((target): target is ValidationTarget => target !== undefined);

  const components: KnowledgeComponent[] = [];
  const failures: string[] = [];

  for (const target of targets) {
    const raw = JSON.parse(await readFile(target.path, "utf8")) as unknown;
    const schema =
      target.kind === "exam_config"
        ? examConfigVersionSchema
        : z.array(knowledgeComponentSchema);
    const result = schema.safeParse(raw);

    if (!result.success) {
      failures.push(
        `${relative(contentRoot, target.path)}:\n${formatIssues(result.error)}`,
      );
      continue;
    }

    if (target.kind === "knowledge_components") {
      components.push(...(result.data as KnowledgeComponent[]));
    }
  }

  const duplicateIds = components
    .map((component) => component.id)
    .filter((id, index, ids) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    failures.push(`Duplicate knowledge-component IDs: ${[...new Set(duplicateIds)].join(", ")}`);
  }

  const knownIds = new Set(components.map((component) => component.id));
  const missingPrerequisites = components.flatMap((component) =>
    component.prerequisites
      .filter((prerequisiteId) => !knownIds.has(prerequisiteId))
      .map((prerequisiteId) => `${component.id} -> ${prerequisiteId}`),
  );
  if (missingPrerequisites.length > 0) {
    failures.push(`Missing prerequisites:\n  - ${missingPrerequisites.join("\n  - ")}`);
  }

  const cycles = findKnowledgeGraphCycles(components);
  if (cycles.length > 0) {
    failures.push(
      `Circular prerequisites:\n  - ${cycles.map((cycle) => cycle.join(" -> ")).join("\n  - ")}`,
    );
  }

  if (failures.length > 0) {
    console.error(`Content validation failed:\n\n${failures.join("\n\n")}`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `Validated ${targets.length} content files and ${components.length} knowledge components.`,
  );
}

await main();

