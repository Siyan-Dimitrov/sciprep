import type { Lesson } from "@/lib/lesson-types";

const forcesNewton: Lesson = {
  id: "lesson.physics.forces_newton",
  slug: "forces-and-newtons-laws",
  number: "8.1",
  stageId: "stage.physics_mechanics",
  discipline: "physics",
  title: "Forces, free-body diagrams, and Newton's laws",
  summary:
    "Model interactions as forces on a free-body diagram, then use Newton's three laws to predict whether a body stays in equilibrium or accelerates, on flat ground, on slopes, and in lifts.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Draw a free-body diagram for a single body, labelling every force with its agent.",
    "Distinguish mass from weight and explain why weight depends on local gravitational field strength.",
    "Apply ΣF = ma along chosen axes, including resolving weight into components on an incline.",
    "Explain why the two forces of a Newton's third-law pair can never cancel.",
    "Decide from a description of motion whether the net force on a body is zero.",
  ],
  prerequisiteLessonIds: ["lesson.physics.motion_graphs"],
  blocks: [
    {
      id: "forces-purpose",
      type: "concept",
      eyebrow: "Name the interaction",
      title: "A force is a push or pull between two bodies, and it has direction",
      paragraphs: [
        "A force is an interaction between two bodies: one body pushes or pulls the other. Every force therefore has an agent, the body exerting it, and it acts on exactly one body. Forces are vectors — they have magnitude and direction, and they add like displacements rather than like plain numbers. Two forces of 30 N and 40 N can combine to give anything from 10 N to 70 N depending on their directions. The unit of force is the newton, N: one newton is the force that gives a 1 kg mass an acceleration of 1 m s⁻².",
        "Mass and weight are different quantities. Mass, in kilograms, measures how much matter a body contains and how strongly it resists changes in velocity; it is the same everywhere. Weight is a force — the gravitational pull of a planet on the body — calculated as W = mg, where g is the local gravitational field strength, 9.81 N kg⁻¹ near the Earth's surface. A 10 kg case weighs about 98 N on Earth but only about 16 N on the Moon, where g ≈ 1.62 N kg⁻¹. Its mass is 10 kg in both places.",
      ],
      callout: "W = mg — weight is a force in newtons; mass in kilograms is unchanged by location.",
    },
    {
      id: "forces-visual",
      type: "visual",
      eyebrow: "Isolate one body",
      title: "A free-body diagram shows every force acting on a single body",
      introduction:
        "Drawing forces is a disciplined procedure: choose one body, strip away everything else, and draw only the forces acting on that body.",
      visual: "free_body",
      caption:
        "Each arrow is one force on the chosen body, labelled with its agent — the pull of the Earth, the push of the floor, the pull of the rope. Forces the body exerts on other things never appear on its own diagram.",
    },
    {
      id: "forces-laws-concept",
      type: "concept",
      eyebrow: "From forces to motion",
      title: "Zero net force means constant velocity; a net force means acceleration",
      paragraphs: [
        "Newton's first law states that a body keeps a constant velocity — including the special case of remaining at rest — unless a net force acts on it. Equilibrium means the vector sum of all forces is zero, written ΣF = 0. This does not require the body to be stationary: a train cruising at a steady 50 m s⁻¹ in a straight line is in equilibrium just as surely as a parked one. No force is needed to keep something moving; forces are needed to change its motion.",
        "Newton's second law makes the connection quantitative: ΣF = ma. The net force, found by adding all forces as vectors, equals mass multiplied by acceleration, and the acceleration points in the same direction as the net force. Because the law is a vector statement, the practical method is to choose two perpendicular axes, resolve every force along them, and apply ΣF = ma separately on each axis. On a flat surface the natural axes are horizontal and vertical; on a slope it is usually easier to take axes along and perpendicular to the surface.",
      ],
      callout: "ΣF = ma, applied one axis at a time.",
    },
    {
      id: "forces-friction-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the acceleration of a dragged crate",
      scenario:
        "A 12 kg crate is dragged across a horizontal floor by a horizontal force of 60 N. The coefficient of kinetic friction between crate and floor is 0.30. Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Resolve the vertical axis",
          decision:
            "The crate does not accelerate vertically, so the vertical forces must balance, which fixes the normal force.",
          working: "N = mg = 12 × 9.81 = 117.7 N",
        },
        {
          label: "Calculate the friction force",
          decision:
            "The crate is sliding, so kinetic friction applies, proportional to the normal force and opposing the motion.",
          working: "f = μN = 0.30 × 117.7 = 35.3 N",
        },
        {
          label: "Form the net horizontal force",
          decision:
            "Only the applied force and friction act horizontally; they point in opposite directions.",
          working: "ΣF = 60 − 35.3 = 24.7 N in the direction of the pull",
        },
        {
          label: "Apply Newton's second law",
          decision: "Acceleration is the net force divided by the mass.",
          working: "a = ΣF / m = 24.7 / 12 = 2.1 m s⁻²",
        },
      ],
      answer:
        "The crate accelerates at about 2.1 m s⁻² in the direction of the applied force.",
      plausibility:
        "Friction removes just over half of the 60 N pull, so the acceleration should be well below the 5 m s⁻² a frictionless 12 kg crate would receive — and 2.1 m s⁻² is.",
    },
    {
      id: "forces-equilibrium-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Read the friction from the motion",
      prompt:
        "A worker pushes a trolley with a constant horizontal force of 50 N and the trolley moves in a straight line at a steady 1.5 m s⁻¹. What is the friction force on the trolley?",
      options: [
        "50 N, opposing the motion",
        "Zero, because the trolley is moving",
        "More than 50 N, because friction always wins eventually",
        "Less than 50 N, because the trolley keeps moving forward",
      ],
      correctIndex: 0,
      explanation:
        "Constant velocity means equilibrium: ΣF = 0. The only horizontal forces are the 50 N push and friction, so friction must be exactly 50 N in the opposite direction.",
      misconception:
        "Motion at constant velocity does not require a net forward force. If friction were less than 50 N the trolley would be accelerating, not moving steadily.",
    },
    {
      id: "forces-surfaces-concept",
      type: "concept",
      eyebrow: "Forces from surfaces",
      title: "The normal force adjusts to circumstances — it is not always mg",
      paragraphs: [
        "The normal force is the push of a surface on a body, perpendicular to the surface. It is a response force: the surface supplies whatever force is needed to stop the body sinking through it, up to the point where the surface breaks. On level ground with no other vertical forces, that happens to equal mg, but press down on the body and the normal force grows; stand in an accelerating lift and it changes again. Tension is the analogous pull transmitted along a taut rope or string, directed along the rope away from the body.",
        "Friction acts parallel to a surface and opposes sliding. Static friction acts when there is no sliding: it matches the applied force exactly, up to a maximum of about μₛN, which is why a heavy box refuses to budge and then suddenly gives. Once sliding starts, kinetic friction takes over with a roughly constant magnitude f = μₖN, where μₖ is usually a little smaller than μₛ. Both coefficients depend on the pair of surfaces, and both scale with the normal force, not with the weight as such.",
        "On a slope at angle θ, the tidy move is to tilt the axes. Weight mg then splits into a component mg sinθ pointing down the slope and a component mg cosθ pressing perpendicular into the slope. The perpendicular balance gives N = mg cosθ for a body with no other perpendicular forces — smaller than mg, because the surface only has to oppose part of the weight.",
      ],
      callout: "On an incline: mg sinθ acts along the slope; mg cosθ acts into it, so N = mg cosθ.",
    },
    {
      id: "forces-incline-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Resolve the weight on a frictionless slope",
      scenario:
        "A 5.0 kg trolley is released from rest on a frictionless ramp inclined at 30° to the horizontal. Find the normal force and the trolley's acceleration. Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Choose axes along and perpendicular to the slope",
          decision:
            "The trolley accelerates along the surface, so tilted axes leave only one force — the weight — needing resolution.",
          working: "W = mg = 5.0 × 9.81 = 49.1 N",
        },
        {
          label: "Resolve the weight into components",
          decision:
            "The along-slope part drives the motion; the perpendicular part is what the surface must oppose.",
          working:
            "along slope: mg sinθ = 49.1 × sin 30° = 24.5 N; into slope: mg cosθ = 49.1 × cos 30° = 42.5 N",
        },
        {
          label: "Balance the perpendicular axis",
          decision:
            "There is no acceleration perpendicular to the surface, so the normal force equals the perpendicular weight component.",
          working: "N = mg cosθ = 42.5 N",
        },
        {
          label: "Apply ΣF = ma along the slope",
          decision:
            "With no friction, the along-slope weight component is the entire net force.",
          working: "a = mg sinθ / m = g sinθ = 9.81 × 0.500 = 4.9 m s⁻²",
        },
      ],
      answer:
        "The normal force is 42.5 N and the trolley accelerates down the slope at 4.9 m s⁻².",
      plausibility:
        "The acceleration must sit between zero (a flat surface) and 9.81 m s⁻² (a vertical drop); at 30° a value of about half of g is exactly what sin 30° = 0.5 predicts, and the mass cancels as expected.",
    },
    {
      id: "forces-incline-check",
      type: "check",
      eyebrow: "Shift the representation",
      title: "Track both components as the slope steepens",
      prompt:
        "A crate rests on a ramp. The ramp angle is increased from 30° to 60° without the crate moving. How do the along-slope component of the weight and the normal force change?",
      options: [
        "Both increase, because the weight stays the same",
        "Neither changes, because mass and g are unchanged",
        "The along-slope component decreases and the normal force increases",
        "The along-slope component increases and the normal force decreases",
      ],
      correctIndex: 3,
      explanation:
        "The along-slope component is mg sinθ, which grows as θ rises; the perpendicular component is mg cosθ, which shrinks, and the normal force matches it. The total weight is unchanged, but its split between the two axes shifts.",
      misconception:
        "A constant weight does not mean constant components. Resolving redistributes the same vector between the axes as the angle changes.",
    },
    {
      id: "forces-third-law-concept",
      type: "concept",
      eyebrow: "Paired interactions",
      title: "Third-law partners act on different bodies, so they never cancel",
      paragraphs: [
        "Newton's third law says that forces come in pairs: if body A exerts a force on body B, then B exerts a force on A that is equal in magnitude, opposite in direction, and of the same type. The Earth pulls a falling apple down with a gravitational force; the apple pulls the Earth up with an equally large gravitational force. The Earth's enormous mass means its resulting acceleration is immeasurably small, but the force is genuinely there.",
        "The crucial point is that the two partner forces act on different bodies. They therefore never appear together on one free-body diagram and can never cancel each other. When a book rests on a table, the table's upward normal force on the book and the book's weight do balance — but they are not a third-law pair. They act on the same body, they are different types of force (a contact push and a gravitational pull), and they are only equal because the book happens to be in equilibrium. The true partner of the table's push on the book is the book's push on the table; the true partner of the Earth's pull on the book is the book's pull on the Earth.",
      ],
      callout: "Third-law partners: same magnitude, opposite direction, same type, different bodies.",
    },
    {
      id: "forces-lift-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Explain apparent weight in an accelerating lift",
      scenario:
        "A 70.0 kg person stands on bathroom scales in a lift. The scales read the normal force they exert. Find the reading when the lift accelerates upward at 1.2 m s⁻², and compare it with the person's true weight. Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Draw the free-body diagram of the person",
          decision:
            "Only two forces act on the person: the Earth's pull downward and the scales' normal force upward.",
          working: "forces: N upward, W = mg = 70.0 × 9.81 = 686.7 N downward",
        },
        {
          label: "Apply ΣF = ma with upward positive",
          decision:
            "The person accelerates with the lift, so the net force must point upward — the normal force must exceed the weight.",
          working: "N − mg = ma",
        },
        {
          label: "Solve for the normal force",
          decision:
            "Rearranging gives the scale reading, since scales display the normal force between person and platform.",
          working: "N = m(g + a) = 70.0 × (9.81 + 1.2) = 70.0 × 11.01 = 770.7 N",
        },
        {
          label: "Compare with the true weight",
          decision:
            "The true weight depends only on m and g, not on the lift's motion.",
          working: "reading ≈ 771 N against a true weight of ≈ 687 N — about 12% heavier",
        },
      ],
      answer:
        "The scales read about 771 N, exceeding the true weight of about 687 N; the person feels heavier while the lift accelerates upward.",
      plausibility:
        "The extra force ma = 70.0 × 1.2 = 84 N is exactly the surplus needed to accelerate 70 kg at 1.2 m s⁻², and 687 + 84 = 771 N checks out. In a lift moving at constant velocity the reading would return to 687 N.",
    },
    {
      id: "forces-pair-check",
      type: "check",
      eyebrow: "Identify the partner",
      title: "Find the true third-law pair",
      prompt:
        "A book rests on a table. Which force is the Newton's third-law partner of the Earth's gravitational pull on the book?",
      options: [
        "The normal force of the table on the book",
        "The book's gravitational pull on the Earth",
        "The book's push down on the table",
        "There is no partner, because the book is in equilibrium",
      ],
      correctIndex: 1,
      explanation:
        "A third-law partner must be the same type of force with the roles of the two bodies swapped. The partner of the Earth pulling the book gravitationally is the book pulling the Earth gravitationally. The table's normal force merely happens to balance the weight because the book is in equilibrium.",
      misconception:
        "Forces that balance on one body are not third-law pairs. Partners act on different bodies and exist whether or not anything is in equilibrium.",
    },
    {
      id: "forces-transfer-check",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Judge the net force from the described motion",
      prompt:
        "A parachutist of weight 750 N descends vertically at a steady 5.0 m s⁻¹ with the canopy open. What is the net force on the parachutist?",
      options: [
        "750 N downward, because they are falling",
        "A small net downward force, needed to keep them moving down",
        "A net upward force, because the drag must exceed the weight",
        "Zero, because the velocity is constant",
      ],
      correctIndex: 3,
      explanation:
        "Steady velocity — in any direction, including downward — means equilibrium, so ΣF = 0. The upward drag on the canopy must therefore equal the 750 N weight exactly. Motion does not require a net force; changing motion does.",
      misconception:
        "Moving downward does not imply a downward net force. If drag exceeded the weight the parachutist would be slowing, not descending steadily.",
    },
    {
      id: "forces-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Isolate the body, add the forces, then ask what the motion demands",
      points: [
        "A force is a directed interaction with an agent; weight W = mg is a force, while mass is location-independent.",
        "A free-body diagram shows only the forces acting on one chosen body, each labelled with its agent.",
        "ΣF = 0 means constant velocity, not necessarily rest; ΣF = ma is applied one axis at a time.",
        "The normal force is a response that adjusts to the situation, and friction obeys f = μN against sliding.",
        "On a slope, weight resolves into mg sinθ along the surface and mg cosθ into it.",
        "Third-law partners are equal, opposite, the same type, and act on different bodies, so they never cancel.",
      ],
      transferRule:
        "Before any calculation, name the body, draw its free-body diagram, and use the described motion to decide whether the forces must balance.",
      nextLessonId: "lesson.physics.work_energy",
    },
  ],
};

const workEnergy: Lesson = {
  id: "lesson.physics.work_energy",
  slug: "work-energy-and-power",
  number: "8.2",
  stageId: "stage.physics_mechanics",
  discipline: "physics",
  title: "Work, energy, power, and efficiency",
  summary:
    "Track work, kinetic and potential energy, power, and efficiency so that energy accounting solves motion problems that force analysis makes laborious, from braking cars to climbing stairs.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "Calculate the work done by a force using W = Fd cosθ and identify forces that do no work.",
    "Apply the work–energy theorem to connect net work with changes in kinetic energy.",
    "Use conservation of mechanical energy, and account for losses to thermal energy when it fails.",
    "Explain why kinetic energy scales with the square of speed and apply this to braking distances.",
    "Calculate power as W/t or Fv and use efficiency to relate useful output to total input.",
  ],
  prerequisiteLessonIds: ["lesson.physics.forces_newton"],
  blocks: [
    {
      id: "energy-purpose",
      type: "concept",
      eyebrow: "Define work precisely",
      title: "Work is done only by the force component along the displacement",
      paragraphs: [
        "In physics, work has a narrow meaning: a force does work when the body it acts on moves, and only the component of the force along the displacement counts. For a constant force of magnitude F acting at angle θ to a displacement of magnitude d, the work is W = Fd cosθ. The unit is the joule, J: one joule is the work done by a 1 N force acting through 1 m along its own direction. Work is a scalar — it has no direction — but it can be negative, which happens when the force component opposes the motion, as friction's does.",
        "The cosθ factor has a sharp consequence: a force perpendicular to the displacement does no work at all, because cos 90° = 0. A waiter carrying a tray horizontally at steady height does no work on the tray with the vertical supporting force, however tiring the task feels — the effort is physiological, not mechanical. Likewise the normal force on a sliding crate and the tension on a whirling conker do no work, because each stays perpendicular to the motion. Work measures energy transferred to or from a body, which is why these perpendicular forces leave the body's speed unchanged.",
      ],
      callout: "W = Fd cosθ — perpendicular forces (θ = 90°) transfer no energy.",
    },
    {
      id: "energy-visual",
      type: "visual",
      eyebrow: "Account for energy",
      title: "Energy moves between stores while the total is conserved",
      introduction:
        "Picture each form of energy as a bar in a chart: as a body moves, the bars trade height while their sum stays fixed.",
      visual: "energy_bar",
      caption:
        "At the top of a fall the energy is entirely gravitational potential; at the bottom it is entirely kinetic; halfway down it is shared. The two bars trade height while the total stays fixed, which is what conservation of mechanical energy means.",
    },
    {
      id: "energy-kinetic-concept",
      type: "concept",
      eyebrow: "The moving store",
      title: "Net work changes kinetic energy, which grows with the square of speed",
      paragraphs: [
        "A moving body carries kinetic energy Eₖ = ½mv². This is not an arbitrary formula; it follows from the laws of motion. For a body of mass m accelerated from speed u to speed v by a constant net force F over distance s, kinematics gives v² = u² + 2as. Multiply through by ½m: ½mv² = ½mu² + mas. Since F = ma, the term mas is Fs, the net work done. So W_net = ½mv² − ½mu²: the net work on a body equals its change in kinetic energy. This result, the work–energy theorem, holds whatever mixture of forces produces the net work.",
        "The v² makes kinetic energy grow steeply with speed. Doubling a car's speed quadruples its kinetic energy, so the brakes — which remove energy at a roughly fixed force, and therefore a fixed number of joules per metre — need four times the distance to bring it to rest. Tripling the speed demands nine times the distance. This scaling, not reaction time, is why modest speed differences produce dramatic differences in stopping distance, and it appears wherever energy and speed meet: wind loading on structures and drag losses climb steeply with speed for related reasons.",
      ],
      callout: "W_net = ΔEₖ = ½mv² − ½mu²; kinetic energy scales as v².",
    },
    {
      id: "energy-work-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Use work to find a final speed",
      scenario:
        "An 18 kg sledge, initially at rest on frictionless ice, is pulled by a constant horizontal force of 60 N over a distance of 12 m. Find the work done and the sledge's final speed.",
      steps: [
        {
          label: "Calculate the work done by the force",
          decision:
            "The force is parallel to the displacement, so θ = 0 and cosθ = 1.",
          working: "W = Fd cosθ = 60 × 12 × 1 = 720 J",
        },
        {
          label: "Identify the net work",
          decision:
            "Weight and the normal force are perpendicular to the motion and do no work, and there is no friction, so the 720 J is the net work.",
          working: "W_net = 720 J",
        },
        {
          label: "Apply the work–energy theorem",
          decision:
            "Starting from rest, the entire net work becomes kinetic energy.",
          working: "½mv² = 720 J, so v² = 2 × 720 / 18 = 80 m² s⁻²",
        },
        {
          label: "Solve for the speed",
          decision: "Take the positive square root, since speed is a magnitude.",
          working: "v = √80 = 8.9 m s⁻¹",
        },
      ],
      answer: "The force does 720 J of work and the sledge reaches about 8.9 m s⁻¹.",
      plausibility:
        "Cross-check with forces: a = 60/18 = 3.33 m s⁻², and v² = 2as = 2 × 3.33 × 12 = 80 m² s⁻² — the same answer by a longer route.",
    },
    {
      id: "energy-angle-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Keep only the useful component",
      prompt:
        "A gardener pulls a roller 5.0 m across level ground with a 100 N force directed at 60° above the horizontal. How much work does the pulling force do?",
      options: [
        "500 J",
        "433 J",
        "250 J",
        "Zero, because part of the force is vertical",
      ],
      correctIndex: 2,
      explanation:
        "Only the horizontal component moves with the displacement: W = Fd cosθ = 100 × 5.0 × cos 60° = 100 × 5.0 × 0.50 = 250 J.",
      misconception:
        "Using the full 100 N ignores the angle, and 433 J comes from wrongly using sin 60°. The component along the motion, F cosθ, is what does work.",
    },
    {
      id: "energy-conservation-concept",
      type: "concept",
      eyebrow: "The stored forms",
      title: "Mechanical energy is conserved only while no friction-like force acts",
      paragraphs: [
        "Lifting a body of mass m through height h at steady speed requires work mgh against gravity, and that energy is stored: the body's gravitational potential energy near the Earth's surface is Eₚ = mgh. The reference level for h is a free choice — the floor, the bench, sea level — because only changes in height ever enter a calculation. Choosing a convenient zero is bookkeeping, not physics. A stretched or compressed spring stores elastic potential energy Eₑ = ½kx², where k is the spring constant in N m⁻¹ and x the extension or compression from natural length.",
        "When the only forces doing work are gravity and spring forces, the sum of kinetic and potential energy — the mechanical energy — is constant. A pendulum trades height for speed and back again with the total fixed. This conservation fails whenever a non-conservative force such as friction or air resistance does work: mechanical energy then decreases. The energy is not destroyed; it appears as thermal energy in the rubbing surfaces and surrounding air, raising their temperature slightly. Total energy is always conserved. The practical skill is to write the energy account: initial stores plus work in equals final stores plus energy dissipated.",
      ],
      callout: "½mv² + mgh = constant, provided only conservative forces do work.",
    },
    {
      id: "energy-two-ways-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Solve one problem two ways: forces versus energy",
      scenario:
        "A 2.0 kg toboggan starts from rest and slides down a frictionless slope inclined at 30°, descending a vertical height of 5.0 m. Find its speed at the bottom, first with forces and kinematics, then with energy conservation. Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Method 1 — find the acceleration from the forces",
          decision:
            "On a frictionless incline the net force is the along-slope weight component, so a = g sinθ.",
          working: "a = 9.81 × sin 30° = 4.905 m s⁻²",
        },
        {
          label: "Method 1 — find the distance and apply kinematics",
          decision:
            "The slope length follows from trigonometry, and v² = u² + 2as connects it to the final speed.",
          working:
            "s = h / sin 30° = 5.0 / 0.50 = 10 m; v² = 0 + 2 × 4.905 × 10 = 98.1 m² s⁻²; v = 9.9 m s⁻¹",
        },
        {
          label: "Method 2 — write the energy account",
          decision:
            "No friction acts, so gravitational potential energy converts entirely into kinetic energy, and the slope's angle and length never enter.",
          working: "mgh = ½mv², so v = √(2gh) = √(2 × 9.81 × 5.0) = √98.1 = 9.9 m s⁻¹",
        },
        {
          label: "Compare the two routes",
          decision:
            "Both give the same speed, but the energy method skipped the angle, the slope length, and the acceleration entirely.",
          working:
            "the mass cancels in both methods, and any frictionless path dropping 5.0 m — steep, shallow, or curved — gives the same 9.9 m s⁻¹",
        },
      ],
      answer:
        "The toboggan reaches about 9.9 m s⁻¹ by either method; energy conservation gets there without any details of the path.",
      plausibility:
        "√(2gh) for a 5 m drop should match free fall through 5 m, and it does; a result near 10 m s⁻¹ for a 5 m descent is familiar from everyday falls.",
    },
    {
      id: "energy-dissipation-check",
      type: "check",
      eyebrow: "Apply the accounting",
      title: "Find the missing joules",
      prompt:
        "A 0.50 kg ball is dropped from 4.0 m. Using g = 9.81 m s⁻², its potential energy loss is 19.6 J, yet it arrives at the ground with only 16.0 J of kinetic energy. What happened to the other 3.6 J?",
      options: [
        "It was destroyed, because falls are never perfectly efficient",
        "It became thermal energy in the air and ball through air resistance",
        "It remains stored as potential energy in the ball",
        "Nothing is missing — the figures must contain a measurement error",
      ],
      correctIndex: 1,
      explanation:
        "Air resistance is a non-conservative force that did negative work on the ball. Mechanical energy fell by 3.6 J, and that energy now exists as thermal energy — slightly warmer air and ball. The total energy is unchanged.",
      misconception:
        "Energy is never destroyed. When mechanical energy drops, the balance has been transferred to another store, almost always thermal.",
    },
    {
      id: "energy-power-concept",
      type: "concept",
      eyebrow: "Rate and yield",
      title: "Power measures how fast energy is transferred; efficiency, how usefully",
      paragraphs: [
        "Two machines can do the same work while differing enormously in how long they take. Power is the rate of doing work or transferring energy: P = W/t, measured in watts, where 1 W = 1 J s⁻¹. For a force F pushing a body that moves at speed v along the force's direction, the work in time t is Fvt, so the power delivered is P = Fv. This form explains why a car needs most of its engine power at motorway speeds: the drag force to be matched grows with speed, and the power is that force multiplied by the speed again.",
        "Real machines and real muscles never convert all their energy input into the intended output. Efficiency is the fraction that ends up useful: efficiency = useful output / total input, quoted as a decimal or percentage. A filament lamp may be 5% efficient at producing light; skeletal muscle is roughly 20–25% efficient at producing mechanical work. The remainder is not lost from the universe — it leaves as thermal energy, which is why hard exercise makes you hot and why engines need cooling systems. An efficiency above 1 would create energy and is impossible.",
      ],
      callout: "P = W/t = Fv; efficiency = useful output ÷ total input, always less than 1.",
    },
    {
      id: "energy-power-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Estimate the power of a stair climb",
      scenario:
        "A 65 kg person runs up a flight of stairs, gaining 3.0 m of height in 4.0 s. Estimate their useful mechanical power, and the metabolic power required if muscles are about 20% efficient. Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Calculate the useful work done",
          decision:
            "The useful output is the gain in gravitational potential energy; horizontal motion at roughly steady speed adds no kinetic energy.",
          working: "W = mgh = 65 × 9.81 × 3.0 = 1.9 × 10³ J",
        },
        {
          label: "Divide by the time taken",
          decision: "Power is work per unit time.",
          working: "P = W / t = 1913 / 4.0 ≈ 480 W",
        },
        {
          label: "Account for muscle efficiency",
          decision:
            "Only about a fifth of metabolic energy becomes mechanical work, so the body must supply the output divided by the efficiency.",
          working: "P_metabolic = 480 / 0.20 = 2.4 × 10³ W",
        },
        {
          label: "Interpret the difference",
          decision:
            "The gap between input and useful output must appear as another energy form.",
          working: "about 1.9 kW is released as heat in the muscles — hence the sweating",
        },
      ],
      answer:
        "The climb delivers roughly 480 W of useful mechanical power, demanding a metabolic power of about 2.4 kW.",
      plausibility:
        "Sustained human output is a few hundred watts at best — trained cyclists hold around 300–400 W — so 480 W for a brief sprint up stairs is high but believable, and only for seconds.",
    },
    {
      id: "energy-braking-check",
      type: "check",
      eyebrow: "Use the scaling",
      title: "Predict the braking distance from the speed",
      prompt:
        "On a test track a car travelling at 15 m s⁻¹ brakes to rest in 12 m. Assuming the same maximum braking force, what braking distance should be recorded from 30 m s⁻¹?",
      options: ["24 m", "36 m", "48 m", "96 m"],
      correctIndex: 2,
      explanation:
        "The brakes remove energy at a fixed force, so the distance satisfies Fd = ½mv² and d scales with v². Doubling the speed quadruples the kinetic energy, so the distance becomes 4 × 12 = 48 m.",
      misconception:
        "24 m assumes distance grows in proportion to speed. Kinetic energy, and hence braking distance at fixed force, grows with the square of speed.",
    },
    {
      id: "energy-transfer-check",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Separate useful power from metabolic power",
      prompt:
        "A cyclist rides at a constant 8.0 m s⁻¹ on level ground against total resistive forces of 25 N. Their muscles are about 25% efficient. Which pair of values is correct?",
      options: [
        "Useful output 200 W; metabolic input 800 W",
        "Useful output 200 W; metabolic input 50 W",
        "Useful output 800 W; metabolic input 200 W",
        "Useful output zero, because the speed is constant",
      ],
      correctIndex: 0,
      explanation:
        "At constant velocity the propulsive force equals the 25 N of resistance, so useful power is P = Fv = 25 × 8.0 = 200 W. At 25% efficiency the metabolic input is 200 / 0.25 = 800 W, the rest leaving as heat.",
      misconception:
        "Constant speed does not mean zero work: the cyclist continuously does work against resistance. And efficiency divides the output to give the input — multiplying gives the absurd result of an input smaller than the output.",
    },
    {
      id: "energy-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Write the energy account before reaching for kinematics",
      points: [
        "Work is W = Fd cosθ in joules; forces perpendicular to the motion do no work.",
        "The net work on a body equals its change in kinetic energy, ½mv² − ½mu².",
        "Potential energy mgh depends only on height changes; the reference level is a free choice.",
        "Mechanical energy is conserved without friction; with friction the shortfall appears as thermal energy.",
        "Kinetic energy scales as v², so doubling speed quadruples braking distance at fixed force.",
        "Power is W/t or Fv in watts, and efficiency is useful output over total input.",
      ],
      transferRule:
        "List the energy stores at the start and end, set the totals equal, and let any shortfall name the dissipative force — the path details usually never matter.",
      nextLessonId: "lesson.physics.momentum_circular",
    },
  ],
};

const momentumCircular: Lesson = {
  id: "lesson.physics.momentum_circular",
  slug: "momentum-and-circular-motion",
  number: "8.3",
  stageId: "stage.physics_mechanics",
  discipline: "physics",
  title: "Momentum, impulse, and circular motion",
  summary:
    "Use momentum conservation and impulse to analyse collisions and cushioning, then explain circular motion by identifying which real force plays the centripetal role.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Calculate momentum as a vector and impulse as FΔt = Δp.",
    "Explain why extending a collision time reduces the force for the same momentum change.",
    "Apply conservation of momentum to one-dimensional collisions, distinguishing elastic from inelastic.",
    "Explain why uniform circular motion involves acceleration and calculate a = v²/r and F = mv²/r.",
    "Identify the real force supplying the centripetal role in banked and circling systems.",
  ],
  prerequisiteLessonIds: ["lesson.physics.work_energy"],
  blocks: [
    {
      id: "momentum-purpose",
      type: "concept",
      eyebrow: "Quantity of motion",
      title: "Momentum combines mass and velocity into one vector",
      paragraphs: [
        "Momentum is defined as p = mv: the product of a body's mass and its velocity, with units of kg m s⁻¹. Because velocity is a vector, momentum is too — a 1000 kg car moving east at 20 m s⁻¹ has a different momentum from the same car moving west at the same speed, and in one-dimensional problems the difference is carried by a sign. A bowling ball rolled slowly can carry the same momentum as a rifle bullet, because a large mass at low speed and a small mass at high speed can multiply to the same value.",
        "Momentum earns its place because of what happens when bodies interact. Newton's second law can be rewritten in terms of momentum: the net force on a body equals the rate of change of its momentum, ΣF = Δp/Δt. In fact this is closer to Newton's original statement than ΣF = ma. Written this way, the law immediately raises two questions that organise this lesson: what does a force acting for a time do to momentum, and what happens to the total momentum when two bodies exert third-law paired forces on each other?",
      ],
      callout: "p = mv, a vector in kg m s⁻¹; ΣF = Δp/Δt.",
    },
    {
      id: "momentum-visual",
      type: "visual",
      eyebrow: "Read the area",
      title: "On a force–time graph, area is impulse",
      introduction:
        "A collision force rises and falls over milliseconds; plotting force against time turns that history into a readable shape.",
      visual: "impulse",
      caption:
        "The area under a force–time curve is the impulse, equal to the momentum change. The same area can be a tall narrow spike — a large brief force — or a low broad hump: a gentler force applied for longer.",
    },
    {
      id: "momentum-impulse-concept",
      type: "concept",
      eyebrow: "Force times time",
      title: "Stretching the collision time shrinks the force",
      paragraphs: [
        "Rearranging ΣF = Δp/Δt gives the impulse relation: FΔt = Δp, for a constant (or average) force F acting for a time Δt. The product FΔt is called impulse, symbol J, with units N s — identical to kg m s⁻¹, as it must be if impulse equals a momentum change. The relation says that a given change of momentum can be bought with any combination of force and time whose product is right: a huge force for an instant, or a modest force sustained for longer.",
        "This trade-off is the physics of every cushioning technology. When a moving body must be brought to rest, its momentum change Δp is fixed by its mass and initial velocity — nothing can alter that. What design can alter is Δt. An airbag, a crumple zone, a gymnast bending their knees on landing, and the padded sole of a running shoe all extend the stopping time, and since F = Δp/Δt, a longer Δt directly means a smaller average force on bones, organs, and vehicle occupants. The impulse is identical either way; the damage is not, because damage depends on force.",
      ],
      callout: "J = FΔt = Δp — fixed momentum change, so longer stopping time means smaller force.",
    },
    {
      id: "momentum-airbag-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compare stopping forces with and without an airbag",
      scenario:
        "In a crash, a 70 kg occupant moving at 15 m s⁻¹ must be brought to rest. Against a rigid dashboard the stopping time is about 0.050 s; with an airbag it is about 0.30 s. Find the average force in each case.",
      steps: [
        {
          label: "Calculate the momentum change",
          decision:
            "The momentum change is fixed by the mass and the velocities, regardless of how the stopping happens.",
          working: "Δp = mΔv = 70 × (15 − 0) = 1050 kg m s⁻¹",
        },
        {
          label: "Find the force for the rigid stop",
          decision: "Average force is the momentum change divided by the stopping time.",
          working: "F = Δp / Δt = 1050 / 0.050 = 21 000 N = 21 kN",
        },
        {
          label: "Find the force with the airbag",
          decision: "The same momentum change is spread over six times the duration.",
          working: "F = 1050 / 0.30 = 3500 N = 3.5 kN",
        },
        {
          label: "Compare the outcomes",
          decision:
            "The ratio of forces must be the inverse of the ratio of times, since the impulse is the same.",
          working: "21 kN / 3.5 kN = 6, matching 0.30 s / 0.050 s = 6",
        },
      ],
      answer:
        "The rigid stop exerts about 21 kN on the occupant; the airbag reduces this to about 3.5 kN — a six-fold reduction from a six-fold longer stopping time.",
      plausibility:
        "21 kN is roughly thirty times the occupant's body weight, consistent with severe injury; 3.5 kN is about five times body weight, which the skeleton can far better withstand. Both forces multiply by their times to the same 1050 N s.",
    },
    {
      id: "momentum-impulse-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Explain the bent knees",
      prompt:
        "A gymnast lands from the same height twice: once with stiff legs, once bending the knees deeply. Why is the force on the gymnast smaller in the second landing?",
      options: [
        "Bending the knees reduces the momentum change during the landing",
        "The same momentum change happens over a longer time, so the average force is smaller",
        "Bending the knees reduces the impulse the ground must supply",
        "The gymnast weighs less while the knees are bending",
      ],
      correctIndex: 1,
      explanation:
        "Arriving from the same height fixes the landing momentum, so Δp — and therefore the impulse — is identical in both landings. Bending the knees stretches Δt, and F = Δp/Δt falls in proportion.",
      misconception:
        "Cushioning changes neither the momentum change nor the impulse; both are set before touchdown. What it changes is the time, and through it the force.",
    },
    {
      id: "momentum-conservation-concept",
      type: "concept",
      eyebrow: "The interaction rule",
      title: "In an isolated system, total momentum cannot change",
      paragraphs: [
        "When two bodies collide, each exerts a force on the other, and by Newton's third law those forces are equal in magnitude, opposite in direction, and act for exactly the same time. The impulses on the two bodies are therefore equal and opposite, so whatever momentum one body gains, the other loses. The total momentum of the pair is unchanged. This is the principle of conservation of momentum: in a system free of external forces — an isolated system — the total momentum before an interaction equals the total momentum after it. Being a vector statement, it respects signs: in one dimension, momenta in the negative direction subtract.",
        "Kinetic energy obeys no such general rule in collisions. An elastic collision is one in which total kinetic energy is also conserved — colliding billiard balls and gas molecules come close. In an inelastic collision some kinetic energy converts to other forms: sound, permanent deformation, and above all thermal energy. The extreme case is a perfectly inelastic collision, where the bodies lock together and move off as one; this destroys the largest possible fraction of kinetic energy consistent with momentum conservation. Momentum is conserved in every collision; kinetic energy only in elastic ones.",
      ],
      callout: "Isolated system: total p before = total p after. Kinetic energy is conserved only if the collision is elastic.",
    },
    {
      id: "momentum-collision-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Analyse a perfectly inelastic collision",
      scenario:
        "A 1200 kg car travelling at 20 m s⁻¹ runs into the back of a stationary 800 kg car. The bumpers lock and the two move off together. Find their common velocity and the kinetic energy converted to other forms.",
      steps: [
        {
          label: "Write the total momentum before the collision",
          decision:
            "During the brief collision, external horizontal forces are negligible, so total momentum is conserved. Take the direction of travel as positive.",
          working: "p = 1200 × 20 + 800 × 0 = 24 000 kg m s⁻¹",
        },
        {
          label: "Apply conservation to the locked pair",
          decision:
            "After a perfectly inelastic collision the bodies share one velocity, so the combined mass carries the same total momentum.",
          working: "v = 24 000 / (1200 + 800) = 24 000 / 2000 = 12 m s⁻¹",
        },
        {
          label: "Compare kinetic energies before and after",
          decision:
            "Momentum conservation does not guarantee kinetic energy conservation, so calculate both totals explicitly.",
          working:
            "before: ½ × 1200 × 20² = 240 000 J; after: ½ × 2000 × 12² = 144 000 J",
        },
        {
          label: "Account for the difference",
          decision:
            "The shortfall must have been converted, chiefly into deformation of the bodywork and thermal energy.",
          working: "ΔEₖ = 240 000 − 144 000 = 96 000 J = 96 kJ converted",
        },
      ],
      answer:
        "The wreckage moves off at 12 m s⁻¹, and 96 kJ — 40% of the original kinetic energy — is converted to deformation, sound, and heat.",
      plausibility:
        "The final speed must lie between 0 and 20 m s⁻¹ and closer to the heavier, faster car's speed; 12 m s⁻¹ fits. Momentum checks exactly: 2000 × 12 = 24 000 kg m s⁻¹, while kinetic energy properly decreases.",
    },
    {
      id: "momentum-recoil-check",
      type: "check",
      eyebrow: "Apply conservation",
      title: "Balance the recoil",
      prompt:
        "Two skaters, of masses 60 kg and 40 kg, stand at rest facing each other on smooth ice, then push apart. The 40 kg skater moves off at 3.0 m s⁻¹. What does the 60 kg skater do?",
      options: [
        "Moves at 2.0 m s⁻¹ in the opposite direction",
        "Moves at 3.0 m s⁻¹ in the opposite direction",
        "Moves at 4.5 m s⁻¹ in the opposite direction",
        "Stays at rest, because they are the heavier skater",
      ],
      correctIndex: 0,
      explanation:
        "The system starts with zero total momentum and no external horizontal force acts, so the momenta after the push must cancel: 60 × v = 40 × 3.0, giving v = 2.0 m s⁻¹ opposite to the lighter skater.",
      misconception:
        "Equal pushes do not produce equal speeds — they produce equal and opposite momenta, so the heavier body moves more slowly in inverse proportion to its mass.",
    },
    {
      id: "momentum-circular-concept",
      type: "concept",
      eyebrow: "Turning is accelerating",
      title: "Centripetal force is a role played by a real force, not a new force",
      paragraphs: [
        "A body moving in a circle at constant speed is nevertheless accelerating, because its velocity — a vector — is continuously changing direction. The acceleration points toward the centre of the circle and has magnitude a = v²/r, where v is the speed and r the radius. By Newton's second law, a net inward force of magnitude F = mv²/r must act to sustain the motion. If the speed is set by a rotation period T — the time for one revolution — then v = 2πr/T links the two descriptions.",
        "The phrase centripetal force names a role, not a new kind of force. Something real must point toward the centre and supply the mv²/r: for a conker on a string it is tension, for a car cornering on a flat road it is friction from the tyres, for the Moon it is gravity, for a banking aircraft it is a component of aerodynamic lift. A correct free-body diagram of circling motion shows only these real forces, with their inward components adding to mv²/r. If the supplier fails — the string snaps, the road ices over — no outward force flings the body away; it simply continues in a straight line along its tangent, exactly as Newton's first law requires.",
      ],
      callout: "a = v²/r toward the centre; F = mv²/r; v = 2πr/T.",
    },
    {
      id: "momentum-circular-visual",
      type: "visual",
      eyebrow: "Watch the vectors",
      title: "Velocity runs along the tangent while acceleration points inward",
      introduction:
        "At every instant of uniform circular motion the two key vectors are perpendicular: velocity along the circle, acceleration toward its centre.",
      visual: "circular",
      caption:
        "The speed never changes because the inward force stays perpendicular to the velocity and so does no work. Remove the inward force and the body leaves along the tangent — not outward along a radius.",
    },
    {
      id: "momentum-banked-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the design speed of a banked bend",
      scenario:
        "A road bend of radius 60 m is banked at 30° so that a car can round it with no reliance on friction. At what speed does the banking alone provide the required centripetal force? Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Draw the free-body diagram of the car",
          decision:
            "With no friction, only two forces act: the weight mg vertically down and the normal force N perpendicular to the banked surface — which therefore tilts inward.",
          working: "forces: N at 30° from the vertical, and mg downward",
        },
        {
          label: "Balance the vertical axis",
          decision:
            "The car does not accelerate vertically, so the vertical component of N must support the weight.",
          working: "N cos 30° = mg",
        },
        {
          label: "Apply ΣF = ma toward the centre",
          decision:
            "The horizontal component of N is the only inward force, so it must equal mv²/r — this is the centripetal role being filled.",
          working: "N sin 30° = mv² / r",
        },
        {
          label: "Divide the equations and solve for v",
          decision:
            "Dividing eliminates both N and the mass, showing the design speed is the same for every vehicle.",
          working:
            "tan 30° = v² / (rg), so v = √(rg tan 30°) = √(60 × 9.81 × 0.577) = √340 = 18.4 m s⁻¹",
        },
      ],
      answer:
        "The bend is designed for about 18 m s⁻¹ (roughly 66 km h⁻¹); at that speed the tilted normal force alone supplies the centripetal force, with no friction needed.",
      plausibility:
        "The mass cancelled, as it must for a road designed for all vehicles, and 66 km h⁻¹ is a sensible posted speed for an open bend of 60 m radius.",
    },
    {
      id: "momentum-period-check",
      type: "check",
      eyebrow: "Shift the representation",
      title: "Convert a period into a speed",
      prompt:
        "A child on a roundabout sits 0.50 m from the axis and completes one revolution every 2.0 s. What is the child's speed?",
      options: ["0.25 m s⁻¹", "0.79 m s⁻¹", "1.6 m s⁻¹", "3.1 m s⁻¹"],
      correctIndex: 2,
      explanation:
        "In one period the child travels one circumference: v = 2πr/T = (2π × 0.50) / 2.0 = 3.14 / 2.0 ≈ 1.6 m s⁻¹.",
      misconception:
        "0.25 m s⁻¹ divides radius by period, forgetting that the path is the circumference 2πr; 3.1 m s⁻¹ computes the circumference but forgets to divide by the period.",
    },
    {
      id: "momentum-banked-transfer-check",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Turn a banking aircraft",
      prompt:
        "An aircraft flies a horizontal circle at 70 m s⁻¹ with its wings banked at 45°, so the horizontal component of lift supplies the centripetal force while the vertical component supports the weight. Using tanθ = v²/(rg) and g = 9.81 m s⁻², what is the turn radius?",
      options: [
        "About 500 m",
        "About 710 m",
        "About 4900 m",
        "It cannot be found without knowing the aircraft's mass",
      ],
      correctIndex: 0,
      explanation:
        "Rearranging, r = v²/(g tanθ) = 70² / (9.81 × tan 45°) = 4900 / 9.81 ≈ 500 m. The mass cancelled when the lift components were divided, exactly as on the banked road.",
      misconception:
        "4900 m comes from dropping g altogether, and the mass is a red herring: it appears in both the vertical and horizontal equations and divides out, so heavier aircraft at the same bank and speed fly the same circle.",
    },
    {
      id: "momentum-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Conserve the vector, then identify who supplies the inward force",
      points: [
        "Momentum p = mv is a vector, and ΣF = Δp/Δt restates Newton's second law.",
        "Impulse FΔt equals the momentum change, so extending the stopping time reduces the force.",
        "Total momentum is conserved in every isolated collision; kinetic energy only in elastic ones.",
        "A perfectly inelastic collision leaves the bodies locked together, with kinetic energy converted to deformation and heat.",
        "Uniform circular motion has inward acceleration v²/r, demanding a net inward force mv²/r.",
        "Centripetal force is a role filled by a real force — tension, friction, gravity, or lift — and in banked motion tanθ = v²/(rg).",
      ],
      transferRule:
        "In any collision, write total momentum before equals after and only then ask about energy; in any circling problem, find the real force whose inward component equals mv²/r.",
      nextLessonId: "lesson.physics.fluids",
    },
  ],
};

const fluids: Lesson = {
  id: "lesson.physics.fluids",
  slug: "fluids-pressure-and-flow",
  number: "8.4",
  stageId: "stage.physics_mechanics",
  discipline: "physics",
  title: "Density, pressure, buoyancy, and flow",
  summary:
    "Relate density, pressure, buoyancy, and flow so that hydraulic machines, floating objects, and narrowing blood vessels all follow from a small set of fluid principles.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Calculate density, pressure, and hydrostatic pressure P = ρgh, distinguishing gauge from absolute pressure.",
    "Apply Pascal's principle to explain force multiplication in a hydraulic lift.",
    "Use Archimedes' principle to find buoyant forces and predict whether and how a body floats.",
    "Apply the continuity equation and Bernoulli's principle to flow through changing cross-sections.",
    "Explain why laminar flow through a tube scales with the fourth power of its radius, and apply this to blood vessels.",
  ],
  prerequisiteLessonIds: ["lesson.physics.forces_newton"],
  blocks: [
    {
      id: "fluids-purpose",
      type: "concept",
      eyebrow: "Two ratios",
      title: "Density and pressure turn bulk matter into calculable quantities",
      paragraphs: [
        "A fluid — a liquid or gas — flows and takes the shape of its container, so describing it force-by-force is hopeless. Two ratios do the work instead. Density, ρ = m/V, measures how much mass occupies each unit of volume, in kg m⁻³: water is about 1000 kg m⁻³, air about 1.2 kg m⁻³, and the ratio is intrinsic to the material rather than to the sample size. Pressure, P = F/A, measures how much force acts on each unit of area, perpendicular to a surface. Its unit is the pascal: 1 Pa = 1 N m⁻².",
        "Because pressure divides force by area, the same force produces wildly different pressures depending on how it is spread. A drawing pin driven by a modest thumb push exerts an enormous pressure at its point, because the area there is a fraction of a square millimetre; snowshoes reverse the trick, spreading body weight over a large area so the pressure stays below what snow can support. A hypodermic needle, a knife edge, and a stiletto heel that dents a wooden floor all exploit the same arithmetic. In a fluid at rest, pressure acts equally in all directions at a given point — it is a property of the location, not of any particular surface.",
      ],
      callout: "ρ = m/V in kg m⁻³; P = F/A in pascals, 1 Pa = 1 N m⁻².",
    },
    {
      id: "fluids-visual",
      type: "visual",
      eyebrow: "Feel the depth",
      title: "Pressure in a fluid at rest grows with depth, not with container shape",
      introduction:
        "Each layer of fluid must carry the weight of every layer above it, so pressure rises steadily with depth in a connected fluid.",
      visual: "fluid",
      caption:
        "At equal depths the pressure is equal, whether the vessel is wide, narrow, or slanted — only the vertical height of fluid above the point matters. This is why liquid in connected open tubes settles at one level.",
    },
    {
      id: "fluids-hydrostatic-concept",
      type: "concept",
      eyebrow: "Weight of the column",
      title: "Hydrostatic pressure depends only on depth, density, and g",
      paragraphs: [
        "Consider a horizontal patch of area A at depth h in a fluid of density ρ. The column of fluid directly above it has volume Ah, mass ρAh, and weight ρAhg. Dividing that weight by the area gives the extra pressure the column contributes: P = ρgh. The area cancels, so the result is independent of the container's shape or width — a fact that surprises intuition. A narrow tube of water 10 m tall produces the same pressure at its base as a lake 10 m deep, because pressure comes from the height of fluid above, not the amount.",
        "Two conventions matter when quoting pressures. Absolute pressure counts everything, including the atmosphere pressing on the fluid's surface — about 1.01 × 10⁵ Pa at sea level. Gauge pressure is the excess over atmospheric, which is what most instruments actually measure: a tyre gauge reading zero means the tyre holds air at atmospheric pressure, not vacuum. Clinical blood pressure works the same way — a systolic reading of 120 mmHg is a gauge pressure, roughly 16 kPa above atmospheric. Converting between the two is a single addition or subtraction of atmospheric pressure, but confusing them changes answers by a full atmosphere.",
      ],
      callout: "P = ρgh (gauge); absolute pressure = gauge pressure + atmospheric pressure.",
    },
    {
      id: "fluids-diver-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the pressure on a diver",
      scenario:
        "A diver descends to a depth of 10.0 m in fresh water of density 1000 kg m⁻³. Atmospheric pressure at the surface is 101 kPa. Find the gauge and absolute pressures at that depth. Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Identify what ρgh gives",
          decision:
            "The hydrostatic formula counts only the water column, so it yields the pressure in excess of the surface value — the gauge pressure.",
          working: "P_gauge = ρgh = 1000 × 9.81 × 10.0 = 98 100 Pa",
        },
        {
          label: "Express it in convenient units",
          decision: "Kilopascals keep the numbers comparable with atmospheric pressure.",
          working: "P_gauge = 98.1 kPa",
        },
        {
          label: "Add the atmospheric pressure",
          decision:
            "The atmosphere pushes on the water surface and that push is transmitted to depth, so absolute pressure includes it.",
          working: "P_absolute = 101 + 98.1 = 199 kPa",
        },
        {
          label: "Interpret the result",
          decision:
            "Comparing with surface pressure shows what the diver's body and air spaces must withstand.",
          working: "199 kPa ≈ 2 × 101 kPa — the pressure has roughly doubled in 10 m",
        },
      ],
      answer:
        "At 10.0 m the gauge pressure is 98.1 kPa and the absolute pressure is about 199 kPa — nearly twice atmospheric.",
      plausibility:
        "Every 10 m of water adds roughly one atmosphere (ρgh ≈ 10⁵ Pa), a standard rule in diving; the calculation reproduces it, so the arithmetic is trustworthy.",
    },
    {
      id: "fluids-shape-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Ignore the container's shape",
      prompt:
        "Three open vessels — one narrow cylinder, one wide cylinder, and one cone — are filled with water to the same depth. How do the pressures at their bases compare?",
      options: [
        "The wide cylinder has the greatest pressure, because it holds the most water",
        "The narrow cylinder has the greatest pressure, because the water is more confined",
        "All three pressures are equal, because pressure depends only on depth and density",
        "The cone has the greatest pressure, because its walls squeeze the water inward",
      ],
      correctIndex: 2,
      explanation:
        "Hydrostatic pressure is P = ρgh: the area cancelled in its derivation, so only the vertical depth of water and its density matter. Equal depths give equal base pressures in all three vessels.",
      misconception:
        "Pressure is not weight. The wide vessel holds more water and its base carries more total force, but spread over a larger area — the force per unit area is identical.",
    },
    {
      id: "fluids-pascal-concept",
      type: "concept",
      eyebrow: "Transmit the squeeze",
      title: "An enclosed fluid transmits pressure changes everywhere at once",
      paragraphs: [
        "Pascal's principle states that a pressure change applied to an enclosed, incompressible fluid is transmitted undiminished to every point of the fluid and to the walls of its container. Squeeze one end of a sealed water-filled tube and the pressure rises by the same amount at the far end immediately — the fluid cannot compress to absorb the change, so it passes it on. This is the working principle of hydraulic machinery: car braking systems, excavator arms, dentists' chairs, and workshop lifts all route force through trapped fluid.",
        "The power of the idea is that pressure, not force, is what the fluid transmits. Connect a small piston and a large piston to the same enclosed fluid: the pressure P is common to both, but force is pressure multiplied by area, so the large piston pushes with a force scaled up by the ratio of the areas. This is genuine force multiplication, but not energy multiplication — the small piston must travel proportionally farther to displace the same volume of fluid, so the work input matches the work output, just as a lever's does. A hydraulic system is a lever made of liquid.",
      ],
      callout: "Pascal's principle: ΔP is transmitted undiminished; F₂ = F₁ × (A₂/A₁).",
    },
    {
      id: "fluids-hydraulic-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Multiply force with a hydraulic lift",
      scenario:
        "In a hydraulic lift, the operator pushes the small piston, of area 5.0 cm² (5.0 × 10⁻⁴ m²), with a force of 60 N. The load sits on a large piston of area 250 cm² (2.5 × 10⁻² m²). Find the output force, and how far the small piston moves when the load rises 2.0 cm.",
      steps: [
        {
          label: "Calculate the pressure created at the small piston",
          decision: "Pressure is the applied force divided by the small piston's area.",
          working: "P = F₁ / A₁ = 60 / (5.0 × 10⁻⁴) = 1.2 × 10⁵ Pa",
        },
        {
          label: "Transmit the pressure to the large piston",
          decision:
            "By Pascal's principle the same pressure acts on the large piston, and force is pressure times area.",
          working: "F₂ = P × A₂ = 1.2 × 10⁵ × 2.5 × 10⁻² = 3.0 × 10³ N",
        },
        {
          label: "Check the multiplication factor",
          decision: "The force ratio should equal the area ratio.",
          working: "A₂ / A₁ = 250 / 5.0 = 50, and 3000 / 60 = 50 — they agree",
        },
        {
          label: "Apply volume conservation to the distances",
          decision:
            "The incompressible fluid displaced from one cylinder must appear in the other, so A₁d₁ = A₂d₂.",
          working: "d₁ = d₂ × (A₂/A₁) = 2.0 cm × 50 = 100 cm = 1.0 m",
        },
      ],
      answer:
        "A 60 N push lifts a 3.0 kN load — enough for a 300 kg engine block — but the operator's piston must travel 1.0 m to raise the load 2.0 cm.",
      plausibility:
        "Work in ≈ 60 N × 1.0 m = 60 J and work out ≈ 3000 N × 0.020 m = 60 J: energy balances exactly, confirming the machine multiplies force but never energy.",
    },
    {
      id: "fluids-buoyancy-concept",
      type: "concept",
      eyebrow: "The upward push",
      title: "Buoyancy equals the weight of the displaced fluid",
      paragraphs: [
        "A body immersed in a fluid feels greater pressure on its lower surface than on its upper surface, because pressure grows with depth. The net result of all these pressure forces is a single upward force, the buoyant force. Archimedes' principle gives its size with no need to sum pressures: the buoyant force equals the weight of the fluid the body displaces, F_b = ρ_fluid × g × V_displaced. Note whose density appears — the fluid's, not the body's. A steel cube and a wooden cube of equal volume, fully submerged in water, receive exactly the same buoyant force.",
        "Whether a body floats is then a comparison of two forces. If a fully submerged body's weight exceeds the buoyant force — that is, if its average density exceeds the fluid's — it sinks. If its average density is lower, it rises to the surface and settles floating, submerged just deeply enough that the weight of displaced fluid equals its own weight. Average density is the loophole that lets steel ships float: the hull encloses so much air that the ship's mass divided by its total enclosed volume comes out well below the density of water, even though solid steel is nearly eight times denser.",
      ],
      callout: "F_b = ρ_fluid g V_displaced; floating requires F_b = weight.",
    },
    {
      id: "fluids-float-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find how deep a block floats",
      scenario:
        "A solid block of pine, density 600 kg m⁻³ and volume 0.020 m³, floats in fresh water of density 1000 kg m⁻³. Find the fraction of its volume below the waterline and the volume displaced. Take g = 9.81 m s⁻².",
      steps: [
        {
          label: "Write the floating condition",
          decision:
            "A floating body is in equilibrium, so the buoyant force must equal the weight exactly.",
          working: "ρ_water g V_sub = ρ_block g V_block",
        },
        {
          label: "Cancel and solve for the submerged fraction",
          decision:
            "Both g values cancel, leaving a pure ratio of densities — no forces need computing.",
          working: "V_sub / V_block = ρ_block / ρ_water = 600 / 1000 = 0.60",
        },
        {
          label: "Calculate the displaced volume",
          decision: "Apply the fraction to the block's actual volume.",
          working: "V_sub = 0.60 × 0.020 = 0.012 m³",
        },
        {
          label: "Verify with forces",
          decision:
            "The buoyant force from that displacement should equal the block's weight.",
          working:
            "F_b = 1000 × 9.81 × 0.012 = 117.7 N; weight = 600 × 0.020 × 9.81 = 117.7 N — they match",
        },
      ],
      answer:
        "The block floats with 60% of its volume submerged, displacing 0.012 m³ of water; the submerged fraction equals the density ratio.",
      plausibility:
        "A body just under water's density should float almost fully submerged, and one far less dense should ride high; 600/1000 sitting 60% under is consistent with that trend, and the force check balances to the newton.",
    },
    {
      id: "fluids-float-check",
      type: "check",
      eyebrow: "Transfer the principle",
      title: "Explain the easy float in salt water",
      prompt:
        "A swimmer floats noticeably higher in the Dead Sea (water density about 1240 kg m⁻³) than in a freshwater lake. Why?",
      options: [
        "The buoyant force on the floating swimmer is larger in the denser water",
        "Denser water needs a smaller displaced volume to match the swimmer's weight",
        "The swimmer's weight is smaller in salt water",
        "Salt water is harder to push aside, which holds the swimmer up mechanically",
      ],
      correctIndex: 1,
      explanation:
        "Any floating body displaces exactly its own weight of fluid. In denser fluid that weight corresponds to a smaller volume, so less of the swimmer needs to be underwater. The buoyant force itself is the same in both cases — it equals the swimmer's weight.",
      misconception:
        "For a floating body the buoyant force cannot exceed the weight; equilibrium fixes it. What the density changes is the volume that must be displaced to reach that equilibrium.",
    },
    {
      id: "fluids-flow-concept",
      type: "concept",
      eyebrow: "Set the fluid moving",
      title: "Continuity forces fluid to speed up where the tube narrows",
      paragraphs: [
        "For an incompressible fluid flowing steadily through a tube, the volume passing any cross-section each second must be the same everywhere — fluid cannot pile up or vanish. The volume flow rate is the cross-sectional area multiplied by the flow speed, so A₁v₁ = A₂v₂: the continuity equation. Where a tube narrows, the fluid must speed up in exact inverse proportion to the area. A river quickens through a gorge, a syringe drives fluid fastest through its needle, and a garden hose sprays farther when a thumb halves its opening.",
        "Bernoulli's principle adds the pressure story: along a streamline of steady, non-viscous flow, where the speed is higher the pressure is lower. The energy argument is direct — a fluid element entering a narrow section accelerates, and something must do net work on it; that something is the pressure difference, so the pressure behind must exceed the pressure in the fast region. This trade-off explains lift on an aircraft wing, the drawing of perfume up an atomiser tube, and why a fast jet of air can hold a light ball hovering in place. It applies only while friction within the fluid is negligible.",
      ],
      callout: "A₁v₁ = A₂v₂; along a streamline, faster flow means lower pressure.",
    },
    {
      id: "fluids-viscous-concept",
      type: "concept",
      eyebrow: "Real fluids resist",
      title: "In viscous flow through a tube, radius rules by its fourth power",
      paragraphs: [
        "Real fluids have viscosity — internal friction between layers sliding past one another. Honey's viscosity is high, water's low. At modest speeds a viscous fluid moves through a tube in smooth layers, fastest at the axis and stationary at the wall: laminar flow. At higher speeds the layers break into churning eddies: turbulent flow, which wastes energy and, in the body, becomes audible as the murmurs and Korotkoff sounds a stethoscope detects. Driving any viscous flow requires a pressure difference between the ends of the tube; without it, friction brings the fluid to rest.",
        "For laminar flow, Poiseuille's relationship states that the volume flow rate through a tube is proportional to the fourth power of its radius, for a fixed pressure difference, length, and viscosity: flow ∝ r⁴. Two powers come from the area, two more because a wider tube also weakens the drag of the wall on the core of the flow. The consequences for circulation are dramatic. Halving a vessel's radius cuts flow to one sixteenth; narrowing it by just 20% — radius 0.8 of the original — cuts flow to 0.8⁴ ≈ 0.41, a 59% loss. Conversely the body steers blood by tiny adjustments of arteriolar radius, and the heart must raise pressure sharply to push flow through narrowed arteries — one mechanical root of hypertension. Breathing runs on the same pressure logic: the diaphragm contracts and enlarges the chest, lung pressure falls a fraction below atmospheric, and air flows down the pressure gradient into the lungs.",
      ],
      callout: "Laminar flow through a tube: flow rate ∝ r⁴ at fixed pressure difference.",
    },
    {
      id: "fluids-continuity-check",
      type: "check",
      eyebrow: "Shift the representation",
      title: "Read the speeds from the areas",
      prompt:
        "Blood flows at 0.20 m s⁻¹ through a vessel of cross-sectional area 2.0 cm². The vessel narrows to 0.50 cm² with the same volume flow. What is the speed in the narrow section?",
      options: ["0.05 m s⁻¹", "0.20 m s⁻¹", "0.40 m s⁻¹", "0.80 m s⁻¹"],
      correctIndex: 3,
      explanation:
        "Continuity gives v₂ = v₁ × (A₁/A₂) = 0.20 × (2.0 / 0.50) = 0.20 × 4 = 0.80 m s⁻¹. The area fell to a quarter, so the speed quadruples.",
      misconception:
        "0.05 m s⁻¹ scales the speed with the area instead of against it. The same volume must pass every section each second, so a smaller area forces a proportionally higher speed.",
    },
    {
      id: "fluids-radius-check",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Weigh the cost of a narrowed vessel",
      prompt:
        "Atherosclerosis reduces the radius of an artery to half its healthy value. For laminar flow at the same pressure difference, what fraction of the original blood flow remains?",
      options: ["One half", "One quarter", "One eighth", "One sixteenth"],
      correctIndex: 3,
      explanation:
        "Poiseuille's relationship makes flow proportional to r⁴, so halving the radius multiplies the flow by (½)⁴ = 1/16. To restore flow, the pressure difference would have to rise sixteen-fold — which is why modest narrowings carry such a large physiological cost.",
      misconception:
        "Scaling flow with r² accounts only for the smaller cross-sectional area; it misses that the wall's viscous drag also bites harder in a narrow tube, giving two further powers of r.",
    },
    {
      id: "fluids-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Follow the pressure, and the fluid's behaviour follows",
      points: [
        "Density is m/V and pressure is F/A; a small area turns a modest force into a large pressure.",
        "Hydrostatic pressure P = ρgh depends on depth alone, and gauge pressure omits the atmosphere's contribution.",
        "Pascal's principle transmits pressure undiminished, so pistons multiply force by their area ratio at the cost of distance.",
        "The buoyant force equals the weight of displaced fluid, and a floating body displaces exactly its own weight.",
        "Continuity, A₁v₁ = A₂v₂, forces fluid to speed up in narrow sections, where Bernoulli says pressure is lower.",
        "Laminar flow through a tube scales as r⁴, so small changes of vessel radius produce large changes in blood flow.",
      ],
      transferRule:
        "In any fluid problem, locate the pressure differences first — depth, an applied force, or a speed change — and let force, buoyancy, and flow follow from them.",
      nextLessonId: "lesson.physics.thermal",
    },
  ],
};

export const physicsMechanicsLessons: Lesson[] = [
  forcesNewton,
  workEnergy,
  momentumCircular,
  fluids,
];
