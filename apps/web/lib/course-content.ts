export type Discipline = "toolkit" | "chemistry" | "physics" | "integrated";

export type ConceptBlock = {
  id: string;
  type: "concept";
  eyebrow: string;
  title: string;
  paragraphs: string[];
  callout?: string;
};

export type VisualBlock = {
  id: string;
  type: "visual";
  eyebrow: string;
  title: string;
  introduction: string;
  visual:
    | "unit_scale"
    | "powers"
    | "proportion"
    | "graph"
    | "particles"
    | "mole"
    | "motion"
    | "motion_graph"
    | "studio";
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

const toolkitUnits: Lesson = {
  id: "lesson.toolkit.measurement_units",
  slug: "measurement-and-units",
  number: "0.1",
  stageId: "stage.science_toolkit",
  discipline: "toolkit",
  title: "Measurement, quantities, and units",
  summary:
    "Learn why a number needs a scientific meaning and how units reveal the kind of quantity being measured.",
  estimatedMinutes: 25,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish a physical quantity from its numerical value and unit.",
    "Convert between common metric prefixes without changing the quantity.",
    "Use units to check whether a calculation can be physically meaningful.",
  ],
  prerequisiteLessonIds: [],
  blocks: [
    {
      id: "units-purpose",
      type: "concept",
      eyebrow: "Start with meaning",
      title: "A number alone is not a measurement",
      paragraphs: [
        "Imagine being told that a table is “2 long.” The number is precise, but the statement is incomplete. Two metres, two centimetres, and two miles describe radically different objects.",
        "A physical quantity is what we are measuring—such as length, time, mass, or temperature. Its value combines a number with a unit. The quantity stays the same when we change units; only the numerical description changes.",
      ],
      callout: "quantity = numerical value × unit",
    },
    {
      id: "units-visual",
      type: "visual",
      eyebrow: "See the scale",
      title: "Prefixes resize the unit, not the object",
      introduction:
        "One metre contains one hundred centimetres and one thousand millimetres. A smaller unit needs a larger count to describe the same length.",
      visual: "unit_scale",
      caption:
        "The same line is 1 m, 100 cm, or 1000 mm. Multiplying the count compensates for dividing the unit.",
    },
    {
      id: "units-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Convert a cell diameter without guessing",
      scenario: "A cell has a diameter of 0.000012 m. Express this in micrometres (μm).",
      steps: [
        {
          label: "Define the relationship",
          decision: "A micrometre is one millionth of a metre.",
          working: "1 μm = 10⁻⁶ m",
        },
        {
          label: "Choose a conversion that cancels metres",
          decision: "Put metres in the denominator of the conversion factor.",
          working: "0.000012 m × (1 μm / 10⁻⁶ m)",
        },
        {
          label: "Calculate and keep the surviving unit",
          decision: "The metre units cancel, leaving micrometres.",
          working: "12 μm",
        },
      ],
      answer: "The cell diameter is 12 μm.",
      plausibility:
        "Cells are much smaller than a metre, so a count of several small micrometre units is sensible.",
    },
    {
      id: "units-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Use the unit relationship",
      prompt: "A wire is 2.5 m long. Which is the same length in centimetres?",
      options: ["0.025 cm", "25 cm", "250 cm", "2500 cm"],
      correctIndex: 2,
      explanation:
        "Each metre contains 100 centimetres, so 2.5 × 100 = 250 cm. The count grows because centimetres are smaller units.",
      misconception:
        "Dividing by 100 would be appropriate when converting centimetres into the larger metre unit, not the other way around.",
    },
    {
      id: "units-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "A measurement keeps its meaning across units",
      points: [
        "A quantity names what is measured; a value combines a number and unit.",
        "Smaller units require a larger numerical count for the same quantity.",
        "Conversion factors equal one, so they change the description rather than the physical quantity.",
        "Units can cancel algebraically and expose impossible calculations.",
      ],
      transferRule:
        "Before calculating, write the units. If the final unit does not match the quantity asked for, the setup needs repair.",
      nextLessonId: "lesson.toolkit.scientific_notation",
    },
  ],
};

const scientificNotation: Lesson = {
  id: "lesson.toolkit.scientific_notation",
  slug: "scientific-notation",
  number: "0.2",
  stageId: "stage.science_toolkit",
  discipline: "toolkit",
  title: "Powers of ten and scientific notation",
  summary:
    "Make very large and very small quantities readable, comparable, and easier to calculate with.",
  estimatedMinutes: 25,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret positive and negative powers of ten.",
    "Write values in standard scientific notation.",
    "Estimate the scale of a calculation before computing it.",
  ],
  prerequisiteLessonIds: ["lesson.toolkit.measurement_units"],
  blocks: [
    {
      id: "powers-purpose",
      type: "concept",
      eyebrow: "A compact language for scale",
      title: "The exponent tells you how the decimal point moves",
      paragraphs: [
        "Science moves between enormous and tiny scales: planetary distances, molecule counts, cell diameters, and reaction times. Long strings of zeros hide the important information and invite errors.",
        "Scientific notation separates a value into a coefficient between 1 and 10 and a power of ten. In 3.2 × 10⁵, the exponent 5 means multiply by 100,000. In 3.2 × 10⁻⁵, it means divide by 100,000.",
      ],
      callout: "coefficient × 10ᵉˣᵖᵒⁿᵉⁿᵗ",
    },
    {
      id: "powers-visual",
      type: "visual",
      eyebrow: "Move across scale",
      title: "Every exponent step changes scale by ten",
      introduction:
        "Moving one place to the right on a power-of-ten scale multiplies by ten; moving left divides by ten.",
      visual: "powers",
      caption:
        "Negative exponents describe values between zero and one. They do not make the value negative.",
    },
    {
      id: "powers-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compare two microscopic lengths",
      scenario: "A bacterium is 2 × 10⁻⁶ m long and a virus is 5 × 10⁻⁸ m long. How many times longer is the bacterium?",
      steps: [
        {
          label: "Form the ratio",
          decision: "“How many times” asks for the larger length divided by the smaller.",
          working: "(2 × 10⁻⁶) / (5 × 10⁻⁸)",
        },
        {
          label: "Separate coefficients and powers",
          decision: "Divide coefficients and subtract exponents.",
          working: "(2 / 5) × 10⁽⁻⁶⁻⁽⁻⁸⁾⁾ = 0.4 × 10²",
        },
        {
          label: "Return to standard form",
          decision: "0.4 × 100 is 40.",
          working: "40",
        },
      ],
      answer: "The bacterium is 40 times longer than the virus.",
      plausibility:
        "The exponent gap is two powers of ten, suggesting a factor near 100; the smaller coefficient reduces that to 40.",
    },
    {
      id: "powers-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Read the exponent",
      prompt: "Which ordinary decimal equals 6.3 × 10⁻⁴?",
      options: ["6300", "0.063", "0.00063", "0.000063"],
      correctIndex: 2,
      explanation:
        "A power of −4 moves the decimal point four places left: 6.3 becomes 0.00063.",
      misconception:
        "A negative exponent makes the magnitude small, not the sign negative.",
    },
    {
      id: "powers-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Exponents carry scale",
      points: [
        "Scientific notation uses a coefficient from 1 up to 10 and a power of ten.",
        "Positive exponents describe large scales; negative exponents describe small positive scales.",
        "When multiplying powers of ten, add exponents; when dividing, subtract them.",
        "Estimate the exponent before calculating to catch decimal errors.",
      ],
      transferRule:
        "Treat the coefficient and exponent as separate pieces, then ask whether the resulting scale fits the situation.",
      nextLessonId: "lesson.toolkit.ratios_rates",
    },
  ],
};

const ratiosRates: Lesson = {
  id: "lesson.toolkit.ratios_rates",
  slug: "ratios-rates-and-proportion",
  number: "0.3",
  stageId: "stage.science_toolkit",
  discipline: "toolkit",
  title: "Ratios, proportions, and rates",
  summary:
    "Describe how quantities compare and how one changes relative to another.",
  estimatedMinutes: 30,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret a ratio as a comparison using a defined denominator.",
    "Recognise direct and inverse proportional relationships.",
    "Build and use a rate with meaningful units.",
  ],
  prerequisiteLessonIds: ["lesson.toolkit.measurement_units"],
  blocks: [
    {
      id: "ratios-purpose",
      type: "concept",
      eyebrow: "Relationships, not isolated numbers",
      title: "A ratio answers “compared with what?”",
      paragraphs: [
        "A concentration, speed, density, and reaction rate are all comparisons. The denominator defines the basis of the comparison: amount per volume, distance per time, mass per volume, or change per time.",
        "In direct proportion, doubling the input doubles the output when everything else is fixed. In inverse proportion, doubling the input halves the output. Naming what stays fixed is part of the model.",
      ],
      callout: "rate = change in one quantity / change in another",
    },
    {
      id: "ratios-visual",
      type: "visual",
      eyebrow: "Compare patterns",
      title: "Direct and inverse relationships behave differently",
      introduction:
        "A direct relationship grows with its input. An inverse relationship falls because the same total is shared across more of the denominator.",
      visual: "proportion",
      caption:
        "Always define the system boundary: proportional reasoning only holds while other relevant quantities remain constant.",
    },
    {
      id: "ratios-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Build speed from its definition",
      scenario: "A cyclist travels 1500 m in 100 s at constant speed. Find the speed.",
      steps: [
        {
          label: "Identify the comparison",
          decision: "Speed compares distance travelled with time taken.",
          working: "speed = distance / time",
        },
        {
          label: "Substitute with units",
          decision: "Keep metres above seconds so the result is metres per second.",
          working: "speed = 1500 m / 100 s",
        },
        {
          label: "Calculate",
          decision: "Divide both the number and the unit description.",
          working: "speed = 15 m s⁻¹",
        },
      ],
      answer: "The cyclist’s speed is 15 m s⁻¹.",
      plausibility:
        "At 15 metres each second, 100 seconds would cover 1500 metres, so the result reconstructs the scenario.",
    },
    {
      id: "ratios-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Reason before calculating",
      prompt:
        "A fixed amount of medicine is distributed evenly through twice the volume. What happens to its concentration?",
      options: ["It doubles", "It halves", "It stays constant", "It becomes zero"],
      correctIndex: 1,
      explanation:
        "Concentration is amount divided by volume. With amount fixed, doubling the denominator halves the concentration.",
      misconception:
        "The total amount of medicine stays constant, but concentration describes amount per unit volume.",
    },
    {
      id: "ratios-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "The denominator defines the comparison",
      points: [
        "Ratios compare quantities; their order and denominator matter.",
        "Rates are ratios describing change, often with compound units.",
        "Direct proportion preserves a constant output/input ratio.",
        "Inverse proportion preserves a constant product when other variables are fixed.",
      ],
      transferRule:
        "Say the relationship in words and predict the direction of change before inserting numbers.",
      nextLessonId: "lesson.toolkit.graphs_change",
    },
  ],
};

const graphsChange: Lesson = {
  id: "lesson.toolkit.graphs_change",
  slug: "graphs-and-change",
  number: "0.4",
  stageId: "stage.science_toolkit",
  discipline: "toolkit",
  title: "Tables, graphs, and change",
  summary:
    "Read axes, identify patterns, and distinguish a value from the rate at which it changes.",
  estimatedMinutes: 35,
  reviewStatus: "unreviewed",
  objectives: [
    "Read graph axes, scales, units, and plotted values accurately.",
    "Interpret slope as change in vertical quantity per change in horizontal quantity.",
    "Distinguish interpolation from unsupported extrapolation.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.scientific_notation",
    "lesson.toolkit.ratios_rates",
  ],
  blocks: [
    {
      id: "graphs-purpose",
      type: "concept",
      eyebrow: "A picture of a relationship",
      title: "A graph is a coordinate system, not decoration",
      paragraphs: [
        "Every point connects a horizontal value to a vertical value. Before reading the shape, identify both quantities, their units, and whether either axis uses an unusual or logarithmic scale.",
        "Slope describes how quickly the vertical quantity changes as the horizontal quantity changes. A high point is not necessarily a steep point, and a steep line is not necessarily a large value.",
      ],
      callout: "slope = change in y / change in x",
    },
    {
      id: "graphs-visual",
      type: "visual",
      eyebrow: "Read the shape",
      title: "Value and slope answer different questions",
      introduction:
        "A rising line has positive slope, a flat line has zero slope, and a falling line has negative slope.",
      visual: "graph",
      caption:
        "Estimate slope using two well-separated points on the trend, keeping the axis units attached.",
    },
    {
      id: "graphs-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Calculate a temperature trend",
      scenario: "A sample warms from 20 °C at 0 min to 50 °C at 6 min. Find its average warming rate.",
      steps: [
        {
          label: "Identify axes",
          decision: "Temperature is changing vertically as time passes horizontally.",
          working: "rate = change in temperature / change in time",
        },
        {
          label: "Find both changes",
          decision: "Subtract final minus initial for each quantity.",
          working: "ΔT = 50 − 20 = 30 °C; Δt = 6 − 0 = 6 min",
        },
        {
          label: "Form the slope",
          decision: "Divide the vertical change by horizontal change.",
          working: "rate = 30 °C / 6 min = 5 °C min⁻¹",
        },
      ],
      answer: "The average warming rate is 5 °C per minute.",
      plausibility:
        "Six intervals of 5 °C produce the observed 30 °C rise.",
    },
    {
      id: "graphs-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Separate height from change",
      prompt: "On a concentration–time graph, what does a horizontal section mean?",
      options: [
        "The concentration is zero",
        "Time has stopped",
        "The concentration is not changing with time",
        "The concentration is decreasing rapidly",
      ],
      correctIndex: 2,
      explanation:
        "A horizontal line has zero slope, so concentration has a constant value over that time interval. The value need not be zero.",
      misconception:
        "Zero slope means zero rate of change, not necessarily zero vertical value.",
    },
    {
      id: "graphs-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Read axes before shapes",
      points: [
        "A point pairs one x value with one y value.",
        "Slope measures change in y per change in x and carries compound units.",
        "Horizontal means constant; it does not automatically mean zero.",
        "Interpolation stays within observed data; extrapolation extends beyond it and needs caution.",
      ],
      transferRule:
        "State the axis quantities and units aloud before interpreting any trend, slope, plateau, or area.",
      nextLessonId: "lesson.chemistry.particle_models",
    },
  ],
};

const particleModels: Lesson = {
  id: "lesson.chemistry.particle_models",
  slug: "particle-models",
  number: "1.1",
  stageId: "stage.chemistry_foundations",
  discipline: "chemistry",
  title: "Matter and particle models",
  summary:
    "Use particles, spacing, motion, and attraction to explain observable properties of matter.",
  estimatedMinutes: 30,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish macroscopic observations from particle-level explanations.",
    "Use particle spacing and motion to compare solids, liquids, and gases.",
    "Explain a change of state without changing chemical identity.",
  ],
  prerequisiteLessonIds: ["lesson.toolkit.measurement_units"],
  blocks: [
    {
      id: "particles-purpose",
      type: "concept",
      eyebrow: "Two levels of description",
      title: "Chemistry explains what we see using what we cannot see",
      paragraphs: [
        "At the macroscopic level, we observe shape, volume, pressure, colour, or temperature. At the particle level, we model tiny entities moving and interacting.",
        "A good particle model connects the levels without inventing properties. Individual particles are not themselves “hot” or “expanded”; temperature relates to the distribution of particle energy, while expansion changes average spacing.",
      ],
      callout: "observation → particle model → testable prediction",
    },
    {
      id: "particles-visual",
      type: "visual",
      eyebrow: "See the states",
      title: "Spacing and freedom of motion shape behaviour",
      introduction:
        "Solid particles remain near fixed positions, liquid particles rearrange while staying close, and gas particles move widely through the container.",
      visual: "particles",
      caption:
        "The particles do not grow when matter expands; their average separation changes.",
    },
    {
      id: "particles-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Explain gas compression",
      scenario: "Air in a sealed syringe occupies less volume when the plunger is pushed inward.",
      steps: [
        {
          label: "Define the system",
          decision: "The sealed syringe keeps the same number of gas particles.",
          working: "particle number is constant",
        },
        {
          label: "Connect volume to spacing",
          decision: "Gas particles have large empty spaces between them.",
          working: "smaller container → smaller average separation",
        },
        {
          label: "Preserve particle identity",
          decision: "Compression changes arrangement, not the size or type of particle.",
          working: "same particles in less volume",
        },
      ],
      answer: "The gas compresses because the same particles can occupy smaller average separations.",
      plausibility:
        "Solids are much harder to compress because their particles are already closely packed.",
    },
    {
      id: "particles-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Use the particle model",
      prompt: "When liquid water evaporates, which statement is best?",
      options: [
        "Water particles become air particles",
        "Water particles grow larger",
        "Water particles separate and move more freely",
        "Water particles disappear",
      ],
      correctIndex: 2,
      explanation:
        "Evaporation is a physical change: water molecules remain water molecules while their spacing and motion change.",
      misconception:
        "A change of state does not create a new chemical substance.",
    },
    {
      id: "particles-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Explain observations with particles and interactions",
      points: [
        "Macroscopic properties and microscopic models are different levels of description.",
        "State depends on particle arrangement, motion, and interactions.",
        "Physical changes preserve chemical identity.",
        "Models are useful when they generate predictions that observations can test.",
      ],
      transferRule:
        "When explaining a bulk change, track particle number, identity, spacing, motion, and interaction separately.",
      nextLessonId: "lesson.chemistry.mole",
    },
  ],
};

const mole: Lesson = {
  id: "lesson.chemistry.mole",
  slug: "the-mole",
  number: "1.2",
  stageId: "stage.chemistry_foundations",
  discipline: "chemistry",
  title: "The mole as a counting unit",
  summary:
    "Connect invisible particle counts to measurable laboratory masses using chemical amount.",
  estimatedMinutes: 35,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret the mole as a fixed count of entities.",
    "Use molar mass to connect mass and chemical amount.",
    "Keep substance identity and units explicit in mole calculations.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.scientific_notation",
    "lesson.toolkit.ratios_rates",
    "lesson.chemistry.particle_models",
  ],
  blocks: [
    {
      id: "mole-purpose",
      type: "concept",
      eyebrow: "Counting the uncountable",
      title: "A mole is a counting word, like a dozen",
      paragraphs: [
        "Atoms and molecules are too small to count one at a time in the laboratory. Chemists use the mole: exactly 6.02214076 × 10²³ specified entities.",
        "Molar mass tells us the mass of one mole. Its unit, grams per mole, is a bridge: mass can be divided by grams per mole to obtain moles.",
      ],
      callout: "chemical amount n = mass m / molar mass M",
    },
    {
      id: "mole-visual",
      type: "visual",
      eyebrow: "Bridge scales",
      title: "Molar mass links the balance to particles",
      introduction:
        "A laboratory balance measures grams. Molar mass converts that macroscopic measurement into chemical amount and, if needed, particle count.",
      visual: "mole",
      caption:
        "Always specify the entity: one mole of oxygen atoms is not the same collection as one mole of O₂ molecules.",
    },
    {
      id: "mole-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find moles from mass",
      scenario: "A sample contains 9.0 g of water. The molar mass of H₂O is 18.0 g mol⁻¹. Find the chemical amount.",
      steps: [
        {
          label: "Choose the bridge",
          decision: "Mass and molar mass are given, so use n = m / M.",
          working: "n = 9.0 g / 18.0 g mol⁻¹",
        },
        {
          label: "Check the units",
          decision: "Dividing by grams per mole leaves moles.",
          working: "g ÷ (g mol⁻¹) = mol",
        },
        {
          label: "Calculate",
          decision: "The sample mass is half the mass of one mole.",
          working: "n = 0.50 mol",
        },
      ],
      answer: "The sample contains 0.50 mol of H₂O molecules.",
      plausibility:
        "One mole would weigh 18.0 g, so a 9.0 g sample should contain half a mole.",
    },
    {
      id: "mole-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Reason with molar mass",
      prompt: "How many moles are in 20 g of a substance with molar mass 40 g mol⁻¹?",
      options: ["0.5 mol", "2 mol", "20 mol", "800 mol"],
      correctIndex: 0,
      explanation:
        "n = m / M = 20 g / 40 g mol⁻¹ = 0.5 mol. The mass is half of the one-mole mass.",
      misconception:
        "Multiplying mass by molar mass produces incompatible units and an implausibly large result.",
    },
    {
      id: "mole-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "The mole connects count, amount, and mass",
      points: [
        "One mole is an exact fixed number of specified entities.",
        "Molar mass is the mass per mole of a substance.",
        "Dividing mass by molar mass gives chemical amount.",
        "Units and entity labels prevent many mole-calculation errors.",
      ],
      transferRule:
        "Ask which bridge connects the given measurement to the requested quantity, then make its units cancel.",
      nextLessonId: "lesson.physics.describing_motion",
    },
  ],
};

const describingMotion: Lesson = {
  id: "lesson.physics.describing_motion",
  slug: "describing-motion",
  number: "2.1",
  stageId: "stage.physics_foundations",
  discipline: "physics",
  title: "Describing motion",
  summary:
    "Describe where an object is, how its position changes, and why direction matters.",
  estimatedMinutes: 30,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish distance from displacement.",
    "Distinguish speed from velocity.",
    "Use a sign convention to represent one-dimensional direction.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.measurement_units",
    "lesson.toolkit.ratios_rates",
  ],
  blocks: [
    {
      id: "motion-purpose",
      type: "concept",
      eyebrow: "Choose a reference",
      title: "Motion is a change of position relative to something",
      paragraphs: [
        "Position only has meaning after choosing an origin and a positive direction. A sign convention turns direction into algebra: for example, east may be positive and west negative.",
        "Distance counts the total path length and has no direction. Displacement compares final position with initial position. Speed uses distance; velocity uses displacement and includes direction.",
      ],
      callout: "displacement = final position − initial position",
    },
    {
      id: "motion-visual",
      type: "visual",
      eyebrow: "Follow the path",
      title: "Path length and net change are different",
      introduction:
        "Walking away from the origin and then returning increases distance while reducing the final displacement.",
      visual: "motion",
      caption:
        "A round trip can have substantial distance but zero displacement because the final and initial positions match.",
    },
    {
      id: "motion-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Separate distance and displacement",
      scenario: "A walker moves 30 m east, then 10 m west. Take east as positive.",
      steps: [
        {
          label: "Calculate distance",
          decision: "Distance adds path lengths without direction.",
          working: "distance = 30 m + 10 m = 40 m",
        },
        {
          label: "Represent directions",
          decision: "East is positive and west is negative.",
          working: "displacement = +30 m + (−10 m)",
        },
        {
          label: "Find net change",
          decision: "The walker finishes east of the starting point.",
          working: "displacement = +20 m",
        },
      ],
      answer: "Distance is 40 m; displacement is 20 m east.",
      plausibility:
        "The net displacement is smaller than the travelled path because part of the route was retraced.",
    },
    {
      id: "motion-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Track the final position",
      prompt: "A runner completes one full lap and stops at the starting line. What is the displacement?",
      options: ["One lap", "Half a lap", "Zero", "It depends on speed"],
      correctIndex: 2,
      explanation:
        "Displacement is final position minus initial position. They are the same, so displacement is zero even though distance is one lap.",
      misconception:
        "Distance records the travelled path; displacement records only the net change of position.",
    },
    {
      id: "motion-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Define the reference frame before the motion",
      points: [
        "Position is measured relative to an origin and sign convention.",
        "Distance is total path length; displacement is net position change.",
        "Speed is scalar; velocity includes direction.",
        "A negative velocity indicates direction, not necessarily slowing down.",
      ],
      transferRule:
        "Draw a one-dimensional axis and mark initial and final positions before selecting a motion equation.",
      nextLessonId: "lesson.physics.motion_graphs",
    },
  ],
};

const motionGraphs: Lesson = {
  id: "lesson.physics.motion_graphs",
  slug: "motion-graphs",
  number: "2.2",
  stageId: "stage.physics_foundations",
  discipline: "physics",
  title: "Motion graphs",
  summary:
    "Translate motion stories into position–time and velocity–time graphs.",
  estimatedMinutes: 35,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret slope on a position–time graph as velocity.",
    "Interpret area under a velocity–time graph as displacement.",
    "Avoid treating a graph as a literal picture of the path.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.graphs_change",
    "lesson.physics.describing_motion",
  ],
  blocks: [
    {
      id: "motion-graphs-purpose",
      type: "concept",
      eyebrow: "Represent motion",
      title: "The same movement produces different graph stories",
      paragraphs: [
        "On a position–time graph, height tells position and slope tells velocity. A straight rising line means constant positive velocity; a horizontal line means stationary.",
        "On a velocity–time graph, height tells velocity. The area between the line and time axis accumulates displacement. Always identify the graph type before interpreting its shape.",
      ],
      callout: "position–time slope = velocity",
    },
    {
      id: "motion-graphs-visual",
      type: "visual",
      eyebrow: "Translate the shape",
      title: "A line on a graph is not the object's physical path",
      introduction:
        "A rising position–time line means position increases steadily. The object need not be travelling uphill.",
      visual: "motion_graph",
      caption:
        "Read what each axis measures; the line describes a relationship between those quantities.",
    },
    {
      id: "motion-graphs-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find velocity from position–time slope",
      scenario: "Position increases uniformly from 5 m at 0 s to 29 m at 6 s.",
      steps: [
        {
          label: "Identify the graph relationship",
          decision: "Velocity is the slope of position against time.",
          working: "v = Δposition / Δtime",
        },
        {
          label: "Calculate changes",
          decision: "Use final minus initial values.",
          working: "Δx = 29 − 5 = 24 m; Δt = 6 − 0 = 6 s",
        },
        {
          label: "Form the slope",
          decision: "Divide vertical change by horizontal change.",
          working: "v = 24 m / 6 s = 4 m s⁻¹",
        },
      ],
      answer: "The constant velocity is +4 m s⁻¹.",
      plausibility:
        "At 4 metres each second for 6 seconds, position changes by 24 metres as shown.",
    },
    {
      id: "motion-graphs-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Read slope, not height",
      prompt: "What does a horizontal line on a position–time graph mean?",
      options: [
        "Constant positive velocity",
        "The object is stationary",
        "Constant acceleration",
        "The object is at position zero",
      ],
      correctIndex: 1,
      explanation:
        "Horizontal position means the position is not changing as time passes, so velocity—the slope—is zero.",
      misconception:
        "The line may be above position zero; horizontal refers to zero change, not necessarily zero position.",
    },
    {
      id: "motion-graphs-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Graph meaning comes from the axes",
      points: [
        "Position–time height is position; its slope is velocity.",
        "Velocity–time height is velocity; its area is displacement.",
        "Horizontal has different meanings on different graph types.",
        "A graph line represents quantities, not the shape of the physical route.",
      ],
      transferRule:
        "Name the axes, then translate height, slope, and area separately before answering a motion question.",
      nextLessonId: "lesson.integration.graph_measurement_studio",
    },
  ],
};

const integrationStudio: Lesson = {
  id: "lesson.integration.graph_measurement_studio",
  slug: "graph-and-measurement-studio",
  number: "3.1",
  stageId: "stage.integration",
  discipline: "integrated",
  title: "Graph and measurement studio",
  summary:
    "Combine units, ratios, particles, motion, and graphs in a short investigation.",
  estimatedMinutes: 45,
  reviewStatus: "unreviewed",
  objectives: [
    "Select useful quantities and units from an experimental description.",
    "Interpret a graph without being told which formula to use.",
    "Explain one pattern at both observable and model levels.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.mole",
    "lesson.physics.motion_graphs",
  ],
  blocks: [
    {
      id: "studio-purpose",
      type: "concept",
      eyebrow: "Integration studio",
      title: "Choose the model instead of being given it",
      paragraphs: [
        "A cart releases measured drops into a tray as it moves. The drop spacing records how far the cart travels during equal time intervals.",
        "You will use scale, ratios, a particle-style representation, and motion graphs to determine what the pattern says. The goal is not to recall a named formula but to connect representations.",
      ],
      callout: "equal time intervals + changing spacing → changing speed",
    },
    {
      id: "studio-visual",
      type: "visual",
      eyebrow: "Inspect the evidence",
      title: "A trail can function like a graph",
      introduction:
        "Each mark represents the cart's position after the same time interval. Increasing gaps mean more distance is covered per interval.",
      visual: "studio",
      caption:
        "A representation does not need axes to encode a relationship; first determine what each feature stands for.",
    },
    {
      id: "studio-worked",
      type: "worked",
      eyebrow: "Worked investigation",
      title: "Convert a trail into a rate",
      scenario:
        "Two consecutive marks are 6.0 cm apart and the timer interval is 0.20 s. Estimate the average speed over that interval.",
      steps: [
        {
          label: "Choose consistent units",
          decision: "Convert centimetres to metres for SI speed.",
          working: "6.0 cm = 0.060 m",
        },
        {
          label: "Define the comparison",
          decision: "Average speed is distance covered per time interval.",
          working: "speed = 0.060 m / 0.20 s",
        },
        {
          label: "Calculate and interpret",
          decision: "The unit is metres per second.",
          working: "speed = 0.30 m s⁻¹",
        },
      ],
      answer: "The average speed over the interval is 0.30 m s⁻¹.",
      plausibility:
        "At 0.30 m s⁻¹ for 0.20 s, the cart travels 0.060 m, matching the observed gap.",
    },
    {
      id: "studio-check",
      type: "check",
      eyebrow: "Independent interpretation",
      title: "Translate the pattern",
      prompt:
        "The distances between successive equal-time marks become smaller. Which conclusion is best supported?",
      options: [
        "The cart's mass is decreasing",
        "The cart is slowing down",
        "Time is moving more slowly",
        "The marks are particles becoming smaller",
      ],
      correctIndex: 1,
      explanation:
        "Smaller distances during the same time interval mean a smaller distance/time ratio, so speed is decreasing.",
      misconception:
        "The marks represent sampled positions; their visual size is not the physical size of the cart or a particle.",
    },
    {
      id: "studio-summary",
      type: "summary",
      eyebrow: "Studio complete",
      title: "Representations share an underlying relationship",
      points: [
        "Define what each mark, axis, symbol, and unit represents.",
        "Equal intervals allow direct comparison of changing distances or amounts.",
        "Unit conversion should preserve the physical quantity.",
        "A useful model explains the pattern and predicts what another representation should show.",
      ],
      transferRule:
        "When a context is unfamiliar, inventory the quantities and representations, then look for a relationship you already understand.",
    },
  ],
};

export const pilotLessons: Lesson[] = [
  toolkitUnits,
  scientificNotation,
  ratiosRates,
  graphsChange,
  particleModels,
  mole,
  describingMotion,
  motionGraphs,
  integrationStudio,
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
    lessonIds: [
      toolkitUnits.id,
      scientificNotation.id,
      ratiosRates.id,
      graphsChange.id,
    ],
  },
  {
    id: "stage.chemistry_foundations",
    number: "01",
    title: "Chemistry Foundations",
    discipline: "chemistry",
    description:
      "Connect visible matter to particle models, chemical amount, and measurable laboratory quantities.",
    lessonIds: [particleModels.id, mole.id],
  },
  {
    id: "stage.physics_foundations",
    number: "02",
    title: "Physics Foundations",
    discipline: "physics",
    description:
      "Describe motion precisely and move between physical stories, quantities, and graphs.",
    lessonIds: [describingMotion.id, motionGraphs.id],
  },
  {
    id: "stage.integration",
    number: "03",
    title: "Integration Studio",
    discipline: "integrated",
    description:
      "Choose and connect models without being told which equation or representation to use.",
    lessonIds: [integrationStudio.id],
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
