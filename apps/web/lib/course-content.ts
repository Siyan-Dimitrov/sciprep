import { analyticalTechniquesLessons } from "@/lib/lessons/analytical-techniques";
import { biologyCellLessons } from "@/lib/lessons/biology-cell";
import { biologyGeneticsLessons } from "@/lib/lessons/biology-genetics";
import { biologyPhysiologyLessons } from "@/lib/lessons/biology-physiology";
import { chartLiteracyLessons } from "@/lib/lessons/chart-literacy";
import { chemistryAqueousLessons } from "@/lib/lessons/chemistry-aqueous";
import { chemistryReactionsLessons } from "@/lib/lessons/chemistry-reactions";
import { chemistryStructureLessons } from "@/lib/lessons/chemistry-structure";
import {
  chemistryFoundationLessons,
  integrationStudioLessons,
  physicsFoundationLessons,
  scienceToolkitLessons,
} from "@/lib/lessons/foundations";
import { organicChemistryLessons } from "@/lib/lessons/organic-chemistry";
import { physicsMechanicsLessons } from "@/lib/lessons/physics-mechanics";
import { physicsWavesFieldsLessons } from "@/lib/lessons/physics-waves-fields";
import { reasoningStudiosLessons } from "@/lib/lessons/reasoning-studios";
import { toolkitAdvancedLessons } from "@/lib/lessons/toolkit-advanced";
import type { CourseStage, Lesson } from "@/lib/lesson-types";

export type {
  CheckBlock,
  ConceptBlock,
  CourseStage,
  Discipline,
  Lesson,
  LessonBlock,
  SummaryBlock,
  VisualBlock,
  VisualName,
  WorkedBlock,
} from "@/lib/lesson-types";

function lessonsForStage(stageId: string): Lesson[] {
  return pilotLessons.filter((lesson) => lesson.stageId === stageId);
}

export const pilotLessons: Lesson[] = [
  ...scienceToolkitLessons,
  ...toolkitAdvancedLessons,
  ...chemistryFoundationLessons,
  ...chemistryStructureLessons,
  ...chemistryReactionsLessons,
  ...chemistryAqueousLessons,
  ...organicChemistryLessons,
  ...analyticalTechniquesLessons,
  ...physicsFoundationLessons,
  ...physicsMechanicsLessons,
  ...physicsWavesFieldsLessons,
  ...biologyCellLessons,
  ...biologyGeneticsLessons,
  ...biologyPhysiologyLessons,
  ...integrationStudioLessons,
  ...reasoningStudiosLessons,
  ...chartLiteracyLessons,
];

export const lessonsById = new Map(pilotLessons.map((lesson) => [lesson.id, lesson]));
export const lessonsBySlug = new Map(
  pilotLessons.map((lesson) => [lesson.slug, lesson]),
);

export const courseStages: CourseStage[] = [
  {
    id: "stage.science_toolkit",
    number: "00",
    title: "Science Toolkit",
    discipline: "toolkit",
    description:
      "Build the quantities, mathematical relationships, and representations used across both subjects.",
    lessonIds: lessonsForStage("stage.science_toolkit").map((lesson) => lesson.id),
  },
  {
    id: "stage.toolkit_advanced",
    number: "01",
    title: "Quantitative Reasoning Toolkit",
    discipline: "toolkit",
    description:
      "Handle logarithmic scales, scaling arguments, and experimental evidence before meeting them inside chemistry and physics.",
    lessonIds: lessonsForStage("stage.toolkit_advanced").map((lesson) => lesson.id),
  },
  {
    id: "stage.chemistry_foundations",
    number: "02",
    title: "Chemistry Foundations",
    discipline: "chemistry",
    description:
      "Connect visible matter to particle models, chemical amount, and measurable laboratory quantities.",
    lessonIds: lessonsForStage("stage.chemistry_foundations").map((lesson) => lesson.id),
  },
  {
    id: "stage.chemistry_structure",
    number: "03",
    title: "Atoms, Bonding, and Structure",
    discipline: "chemistry",
    description:
      "Explain periodic trends, bonding, molecular shape, and physical properties from electron behaviour.",
    lessonIds: lessonsForStage("stage.chemistry_structure").map((lesson) => lesson.id),
  },
  {
    id: "stage.chemistry_reactions",
    number: "04",
    title: "Energy, Rate, and Equilibrium",
    discipline: "chemistry",
    description:
      "Decide whether a reaction releases energy, whether it will happen, how fast it goes, and where it stops.",
    lessonIds: lessonsForStage("stage.chemistry_reactions").map((lesson) => lesson.id),
  },
  {
    id: "stage.chemistry_aqueous",
    number: "05",
    title: "Acids, Bases, and Electron Transfer",
    discipline: "chemistry",
    description:
      "Work quantitatively with pH, buffering, titration curves, and the electrochemistry behind redox systems.",
    lessonIds: lessonsForStage("stage.chemistry_aqueous").map((lesson) => lesson.id),
  },
  {
    id: "stage.organic_chemistry",
    number: "06",
    title: "Organic and Biological Chemistry",
    discipline: "chemistry",
    description:
      "Read organic structures, predict reactivity from electron distribution, and carry both into biological molecules.",
    lessonIds: lessonsForStage("stage.organic_chemistry").map((lesson) => lesson.id),
  },
  {
    id: "stage.physics_foundations",
    number: "07",
    title: "Physics Foundations",
    discipline: "physics",
    description:
      "Describe motion precisely and move between physical stories, quantities, and graphs.",
    lessonIds: lessonsForStage("stage.physics_foundations").map((lesson) => lesson.id),
  },
  {
    id: "stage.physics_mechanics",
    number: "08",
    title: "Forces, Energy, and Fluids",
    discipline: "physics",
    description:
      "Explain why motion changes, account for energy through a process, and reason about pressure and flow.",
    lessonIds: lessonsForStage("stage.physics_mechanics").map((lesson) => lesson.id),
  },
  {
    id: "stage.physics_waves_fields",
    number: "09",
    title: "Thermal, Waves, Light, and Electricity",
    discipline: "physics",
    description:
      "Model heat, gases, waves, optical instruments, spectroscopy, and circuits with a shared set of relationships.",
    lessonIds: lessonsForStage("stage.physics_waves_fields").map((lesson) => lesson.id),
  },
  {
    id: "stage.biology_cell",
    number: "10",
    title: "Cells, Membranes, and Metabolism",
    discipline: "biology",
    description:
      "Treat the cell as a set of compartments, work out what crosses their membranes, and follow the energy that keeps them running.",
    lessonIds: lessonsForStage("stage.biology_cell").map((lesson) => lesson.id),
  },
  {
    id: "stage.biology_genetics",
    number: "11",
    title: "Genetics and Gene Expression",
    discipline: "biology",
    description:
      "Read information from sequence to phenotype, and reason about how it is copied, recombined, and distributed through a population.",
    lessonIds: lessonsForStage("stage.biology_genetics").map((lesson) => lesson.id),
  },
  {
    id: "stage.biology_physiology",
    number: "12",
    title: "Signalling, Defence, and Physiology",
    discipline: "biology",
    description:
      "Follow information and regulation through a body, from a single receptor to whole-system homeostasis.",
    lessonIds: lessonsForStage("stage.biology_physiology").map((lesson) => lesson.id),
  },
  {
    id: "stage.integration",
    number: "13",
    title: "Integration Studio",
    discipline: "integrated",
    description:
      "Choose and connect models without being told which equation or representation to use.",
    lessonIds: lessonsForStage("stage.integration").map((lesson) => lesson.id),
  },
  {
    id: "stage.reasoning_studios",
    number: "14",
    title: "Scientific Reasoning Studios",
    discipline: "integrated",
    description:
      "Extract a working model from unfamiliar notation, data, and estimates under realistic constraints.",
    lessonIds: lessonsForStage("stage.reasoning_studios").map((lesson) => lesson.id),
  },
];

export function getLesson(lessonId: string): Lesson | undefined {
  return lessonsById.get(lessonId);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessonsBySlug.get(slug);
}

export function getNextLesson(lessonId: string): Lesson | undefined {
  const index = pilotLessons.findIndex((lesson) => lesson.id === lessonId);
  return index >= 0 ? pilotLessons[index + 1] : undefined;
}

export function prerequisitesAreComplete(
  lesson: Lesson,
  completedLessonIds: readonly string[],
): boolean {
  return lesson.prerequisiteLessonIds.every((id) => completedLessonIds.includes(id));
}
