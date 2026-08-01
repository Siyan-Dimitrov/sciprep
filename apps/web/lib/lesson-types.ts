export type Discipline =
  | "toolkit"
  | "chemistry"
  | "physics"
  | "biology"
  | "integrated";

export type ConceptBlock = {
  id: string;
  type: "concept";
  eyebrow: string;
  title: string;
  paragraphs: string[];
  callout?: string;
};

export type VisualName =
  | "unit_scale"
  | "powers"
  | "proportion"
  | "graph"
  | "particles"
  | "mole"
  | "motion"
  | "motion_graph"
  | "studio"
  | "log_scale"
  | "controls"
  | "method_loop"
  | "orbital"
  | "bonding"
  | "shape"
  | "intermolecular"
  | "bond_energy"
  | "rate_curve"
  | "wave_axes"
  | "energy_profile"
  | "equilibrium"
  | "titration"
  | "electrochemical"
  | "functional_groups"
  | "chirality"
  | "biomolecule"
  | "free_body"
  | "energy_bar"
  | "impulse"
  | "circular"
  | "fluid"
  | "phase_change"
  | "wave"
  | "optics"
  | "spectrum"
  | "circuit"
  | "chromatography"
  | "electrophoresis"
  | "centrifuge_gradient"
  | "organelle"
  | "vesicle_traffic"
  | "membrane_transport"
  | "osmosis"
  | "enzyme_kinetics"
  | "lineweaver"
  | "metabolic_map"
  | "chemiosmosis"
  | "dna_structure"
  | "central_dogma"
  | "punnett"
  | "pedigree"
  | "meiosis"
  | "linkage_map"
  | "allele_frequency"
  | "signal_cascade"
  | "dose_response"
  | "immune_response"
  | "antibody"
  | "feedback_loop"
  | "nephron"
  | "ternary"
  | "contour"
  | "radar"
  | "log_log";

export type VisualBlock = {
  id: string;
  type: "visual";
  eyebrow: string;
  title: string;
  introduction: string;
  visual: VisualName;
  caption: string;
};

export type WorkedBlock = {
  id: string;
  type: "worked";
  eyebrow: string;
  title: string;
  scenario: string;
  steps: Array<{
    label: string;
    decision: string;
    working: string;
  }>;
  answer: string;
  plausibility: string;
};

export type CheckBlock = {
  id: string;
  type: "check";
  eyebrow: string;
  title: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  misconception: string;
};

export type SummaryBlock = {
  id: string;
  type: "summary";
  eyebrow: string;
  title: string;
  points: string[];
  transferRule: string;
  nextLessonId?: string;
};

export type LessonBlock =
  | ConceptBlock
  | VisualBlock
  | WorkedBlock
  | CheckBlock
  | SummaryBlock;

export type Lesson = {
  id: string;
  slug: string;
  number: string;
  stageId: string;
  discipline: Discipline;
  title: string;
  summary: string;
  estimatedMinutes: number;
  reviewStatus: "unreviewed";
  objectives: string[];
  prerequisiteLessonIds: string[];
  blocks: LessonBlock[];
};

export type CourseStage = {
  id: string;
  number: string;
  title: string;
  discipline: Discipline;
  description: string;
  lessonIds: string[];
};
