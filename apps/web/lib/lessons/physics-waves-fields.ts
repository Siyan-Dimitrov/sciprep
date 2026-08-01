import type { Lesson } from "@/lib/lesson-types";

const thermalPhysics: Lesson = {
  id: "lesson.physics.thermal",
  slug: "thermal-physics-and-gases",
  number: "9.1",
  stageId: "stage.physics_waves_fields",
  discipline: "physics",
  title: "Temperature, heat, phase change, and gases",
  summary:
    "Separate temperature from heat, calculate energy transfers with specific and latent heat, and use the ideal gas law to predict how pressure, volume and temperature respond.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish temperature as a measure of mean molecular kinetic energy from heat as energy in transit.",
    "Convert between the Celsius and kelvin scales and explain what absolute zero means.",
    "Calculate energy transfers using Q = mcΔT and Q = mL, including across a heating curve.",
    "Explain a phase-change plateau at the level of intermolecular attractions.",
    "Apply the ideal gas law PV = nRT and recover the individual gas laws as special cases.",
    "Use Dalton's law of partial pressures to interpret a gas mixture such as alveolar air.",
  ],
  prerequisiteLessonIds: [
    "lesson.physics.work_energy",
    "lesson.chemistry.particle_models",
  ],
  blocks: [
    {
      id: "heat-purpose",
      type: "concept",
      eyebrow: "Separate two ideas",
      title: "Temperature and heat are different quantities",
      paragraphs: [
        "Temperature is a measure of the mean kinetic energy of the random motion of the particles in a sample. It is an intensive quantity, meaning it does not depend on how much material is present. One drop of boiling water and a full pan of boiling water are both at 100 °C, because temperature reports an average per particle and takes no account of how many particles there are. Two objects are at the same temperature precisely when no net energy flows between them on contact.",
        "Heat is not something a body contains. Heat is energy in transit from a hotter region to a cooler one, driven purely by the temperature difference between them, and once the energy has arrived it is simply part of the internal energy of the receiving body. Saying “this cup holds a lot of heat” confuses the process with the store; the accurate statement is that the cup has a large internal energy, the total of the kinetic and potential energies of all its particles.",
        "The distinction matters because internal energy is extensive, scaling with the amount of material, while temperature is not. A bath at 40 °C contains far more internal energy than a cup of tea at 80 °C, since it holds vastly more molecules. Yet energy still flows from the tea to the bath if the two are placed in contact, because the direction of flow is decided by the temperature difference and never by which body stores more energy in total. That one-way flow, from hot to cold, is the practical content of the second law of thermodynamics.",
      ],
      callout:
        "Temperature is energy per particle on average; heat is energy crossing a boundary because of a temperature difference.",
    },
    {
      id: "heat-visual-curve",
      type: "visual",
      eyebrow: "Watch the plateaus",
      title: "Steady heating does not mean steadily rising temperature",
      introduction:
        "Follow a sample of ice heated by a constant-power source and plot its temperature against the energy supplied.",
      visual: "phase_change",
      caption:
        "Sloping sections show a single phase warming, where the gradient is set by the specific heat capacity. Flat sections show melting and boiling, where energy still enters but the temperature does not change.",
    },
    {
      id: "heat-capacity",
      type: "concept",
      eyebrow: "Put it in symbols",
      title: "Specific heat capacity fixes how much energy one degree costs",
      paragraphs: [
        "The kelvin scale places zero at absolute zero, the temperature at which the random particle motion carries the least energy physically possible. A kelvin is the same size as a degree Celsius, so T/K = θ/°C + 273.15, usually rounded to 273. Temperature differences are therefore numerically identical in the two scales, which is why ΔT can be quoted in K or °C without conversion.",
        "The specific heat capacity c of a substance is the energy needed to raise the temperature of one kilogram of it by one kelvin, in J kg⁻¹ K⁻¹. The energy required is then Q = mcΔT, where m is the mass in kilograms and ΔT the temperature change in kelvin. A large c means the substance resists temperature change: the same energy input produces a smaller rise.",
        "Water has an unusually large specific heat capacity, about 4180 J kg⁻¹ K⁻¹, roughly five times that of most rock and eleven times that of copper. Hydrogen bonding gives water many ways to absorb energy without speeding up its molecular translation. Because bodies and oceans are largely water, both buffer temperature: coastal climates swing less than continental ones, and human core temperature drifts slowly even when metabolic power output changes sharply.",
      ],
      callout: "Q = mcΔT, with c in J kg⁻¹ K⁻¹ and ΔT in K",
    },
    {
      id: "heat-worked-heating",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the energy and the time to heat water",
      scenario:
        "A kettle element delivers 2.00 kW to 0.500 kg of water, warming it from 20.0 °C to 80.0 °C. Take c = 4180 J kg⁻¹ K⁻¹ and assume no losses to the surroundings.",
      steps: [
        {
          label: "Find the temperature change",
          decision:
            "Only the difference matters, and a difference has the same value in °C and K.",
          working: "ΔT = 80.0 − 20.0 = 60.0 K",
        },
        {
          label: "Apply the specific heat relationship",
          decision:
            "No phase change occurs between 20 °C and 80 °C, so all the energy raises temperature.",
          working: "Q = mcΔT = 0.500 × 4180 × 60.0 = 1.254 × 10⁵ J",
        },
        {
          label: "Convert energy into time using power",
          decision:
            "Power is energy per second, so dividing energy by power gives the duration.",
          working: "t = Q / P = 1.254 × 10⁵ J ÷ 2.00 × 10³ W = 62.7 s",
        },
        {
          label: "State the idealisation",
          decision:
            "Real kettles lose energy to the air and the vessel, so the model gives a lower bound.",
          working:
            "Losses would raise the required energy, so the true time exceeds 62.7 s.",
        },
      ],
      answer:
        "About 1.25 × 10⁵ J is required, taking 62.7 s with a perfectly efficient 2.00 kW element.",
      plausibility:
        "Half a litre in a domestic kettle takes roughly a minute to become hot but not boiling, which matches the calculated time.",
    },
    {
      id: "heat-check-capacity",
      type: "check",
      eyebrow: "Your turn",
      title: "Compare two substances with the same energy input",
      prompt:
        "0.250 kg of water (c = 4180 J kg⁻¹ K⁻¹) and 0.250 kg of olive oil (c = 1970 J kg⁻¹ K⁻¹) each absorb 5.00 kJ. Which statement is correct?",
      options: [
        "Both rise by the same amount, because the masses and the energy inputs are equal",
        "The water rises about 10.2 K and the oil about 4.8 K, because a larger c stores more energy per kelvin",
        "The oil rises about 10.2 K and the water about 4.8 K, because a smaller c means a larger rise",
        "The oil rises about 4.8 K and the water about 2.1 K, because oil is denser than water",
      ],
      correctIndex: 2,
      explanation:
        "Rearranging gives ΔT = Q / (mc). For the oil, ΔT = 5000 ÷ (0.250 × 1970) = 10.2 K. For the water, ΔT = 5000 ÷ (0.250 × 4180) = 4.78 K. The substance with the smaller specific heat capacity heats up more for the same energy.",
      misconception:
        "A large specific heat capacity does not mean a substance heats faster. It means each kelvin of rise costs more energy, so the temperature rise is smaller for a fixed input.",
    },
    {
      id: "heat-latent",
      type: "concept",
      eyebrow: "Add the second layer",
      title: "During a phase change energy goes into separation, not speed",
      paragraphs: [
        "At a melting or boiling point, continued heating produces no temperature rise. The energy supplied does work against the intermolecular attractions that hold the particles together, converting it into potential energy of separation rather than kinetic energy of motion. Since temperature reports mean kinetic energy, the thermometer holds steady while energy pours in. The energy per kilogram required is the specific latent heat L, so Q = mL, with L in J kg⁻¹.",
        "Latent heat of vaporisation is much larger than latent heat of fusion, because melting only loosens a rigid arrangement while boiling separates the particles completely. For water, L_fusion ≈ 3.34 × 10⁵ J kg⁻¹ but L_vaporisation ≈ 2.26 × 10⁶ J kg⁻¹. Evaporation exploits this: the fastest molecules escape a liquid surface, so the mean kinetic energy of those left behind falls and the liquid cools. Sweating removes roughly 2.4 × 10⁶ J for every kilogram of water evaporated from skin, which is why humid air, by suppressing evaporation, makes heat far harder to tolerate.",
        "Energy reaches or leaves a body by three routes. Conduction passes vibrational and electronic energy along a material without bulk movement, and is fast in metals and slow in fat, air and clothing. Convection carries energy in a moving fluid, since warm fluid expands, becomes less dense and rises. Radiation transfers energy as electromagnetic waves and needs no medium at all, which is how the Sun heats the Earth and how a warm body loses energy to a cold wall across a room.",
      ],
      callout: "Q = mL during a phase change; ΔT = 0 while the change proceeds",
    },
    {
      id: "heat-worked-melt",
      type: "worked",
      eyebrow: "Worked example",
      title: "Cross a phase boundary in stages",
      scenario:
        "Calculate the energy needed to take 0.200 kg of ice at −15.0 °C to water at 25.0 °C. Use c_ice = 2100 J kg⁻¹ K⁻¹, L_fusion = 3.34 × 10⁵ J kg⁻¹ and c_water = 4180 J kg⁻¹ K⁻¹.",
      steps: [
        {
          label: "Break the journey at the phase change",
          decision:
            "Q = mcΔT is valid only within one phase, so the melting point at 0 °C must split the calculation.",
          working:
            "Stage 1: ice from −15.0 °C to 0 °C. Stage 2: melt at 0 °C. Stage 3: water from 0 °C to 25.0 °C.",
        },
        {
          label: "Warm the solid",
          decision: "Use the specific heat capacity of ice, not of water.",
          working: "Q₁ = 0.200 × 2100 × 15.0 = 6.30 × 10³ J",
        },
        {
          label: "Melt the solid at constant temperature",
          decision:
            "No ΔT appears here, because the energy breaks the lattice attractions instead of raising temperature.",
          working: "Q₂ = mL = 0.200 × 3.34 × 10⁵ = 6.68 × 10⁴ J",
        },
        {
          label: "Warm the liquid",
          decision: "Now the specific heat capacity of liquid water applies.",
          working: "Q₃ = 0.200 × 4180 × 25.0 = 2.09 × 10⁴ J",
        },
        {
          label: "Add the three contributions",
          decision:
            "Energy is additive, so the total is the sum of the stages.",
          working: "Q = 6.30 × 10³ + 6.68 × 10⁴ + 2.09 × 10⁴ = 9.40 × 10⁴ J",
        },
      ],
      answer: "The total energy required is 9.40 × 10⁴ J, or 94.0 kJ.",
      plausibility:
        "Melting alone accounts for about 71 % of the total even though it produces no temperature change at all, which is exactly what a large latent heat predicts.",
    },
    {
      id: "heat-check-plateau",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Read the flat section of a heating curve",
      prompt:
        "A beaker of water at 100 °C is heated by a constant-power immersion heater. For several minutes the thermometer reads 100 °C and does not move, while the water level falls. What is happening?",
      options: [
        "The energy is passing straight to the surroundings and has no effect on the water at all",
        "No energy is entering the water while the reading is constant, because a temperature change is the only sign of energy transfer",
        "Energy is raising the mean molecular kinetic energy, but a thermometer cannot register a change during boiling",
        "Energy is still entering and is stored as potential energy as intermolecular attractions are broken, so the mean molecular kinetic energy is unchanged",
      ],
      correctIndex: 3,
      explanation:
        "The falling water level shows liquid is becoming vapour. The supplied energy is doing work against the attractions between water molecules, increasing potential energy rather than kinetic energy. Temperature tracks mean kinetic energy, so it stays at the boiling point until the last of the liquid has gone.",
      misconception:
        "A constant temperature is read as “no energy transfer”. In fact the transfer continues at full rate; it is simply going into separating particles rather than speeding them up.",
    },
    {
      id: "heat-visual-particles",
      type: "visual",
      eyebrow: "Zoom to the particles",
      title: "Pressure is a rate of momentum delivery to the walls",
      introduction:
        "Picture a sealed box of gas molecules moving randomly at a wide range of speeds and rebounding from the walls.",
      visual: "particles",
      caption:
        "Each rebound reverses a molecule's momentum, and the wall must supply that change. Pressure is the total force from all such collisions divided by the wall area, so it rises with the number of molecules, their mean speed and how often they strike.",
    },
    {
      id: "heat-gas",
      type: "concept",
      eyebrow: "One equation, four laws",
      title: "The ideal gas law links pressure, volume, amount and temperature",
      paragraphs: [
        "An ideal gas is a model: point-like particles in continual random motion, with negligible volume of their own, no forces between them except during perfectly elastic collisions, and a mean kinetic energy proportional to absolute temperature. Real gases obey it well at moderate pressures and temperatures well above their boiling points. Under those assumptions PV = nRT, with P in pascals, V in cubic metres, n in moles, T in kelvin and R = 8.31 J K⁻¹ mol⁻¹. Every temperature in this equation must be absolute, because doubling 20 °C does not double the mean kinetic energy but doubling 293 K does.",
        "The older gas laws are special cases obtained by holding quantities fixed. With n and T fixed, PV is constant, so pressure and volume are inversely related. With n and P fixed, V/T is constant, so volume rises in proportion to absolute temperature. With n and V fixed, P/T is constant. With P and T fixed, V is proportional to n, which is why one mole of any ideal gas occupies about 22.4 dm³ at 273 K and 101.3 kPa, and about 24.4 dm³ at 298 K.",
        "In a mixture, each gas exerts the pressure it would exert alone in the same container, and Dalton's law states that the total pressure is the sum of these partial pressures. The partial pressure of a component equals its mole fraction times the total pressure. Alveolar gas at a total 101.3 kPa is roughly 76.4 kPa nitrogen, 13.3 kPa oxygen, 5.3 kPa carbon dioxide and 6.3 kPa water vapour. Diffusion across the alveolar membrane is driven by each gas's own partial-pressure difference, not by the total pressure, which is why oxygen still enters the blood while carbon dioxide simultaneously leaves it.",
      ],
      callout: "PV = nRT, with R = 8.31 J K⁻¹ mol⁻¹ and T in kelvin",
    },
    {
      id: "heat-worked-gas",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the amount and mass of a confined gas",
      scenario:
        "A rigid cylinder of internal volume 2.50 × 10⁻³ m³ holds oxygen at a pressure of 1.20 × 10⁵ Pa and a temperature of 300 K. The molar mass of O₂ is 32.0 g mol⁻¹.",
      steps: [
        {
          label: "Check every unit against R",
          decision:
            "R = 8.31 J K⁻¹ mol⁻¹ requires pascals, cubic metres and kelvin, so the given data are already consistent.",
          working: "P = 1.20 × 10⁵ Pa, V = 2.50 × 10⁻³ m³, T = 300 K",
        },
        {
          label: "Rearrange for the amount of gas",
          decision:
            "Only n is unknown, so isolate it before substituting numbers.",
          working: "n = PV / RT",
        },
        {
          label: "Substitute and evaluate",
          decision:
            "Work out numerator and denominator separately to keep the powers of ten under control.",
          working:
            "n = (1.20 × 10⁵ × 2.50 × 10⁻³) ÷ (8.31 × 300) = 300 ÷ 2493 = 0.120 mol",
        },
        {
          label: "Convert the amount to a mass",
          decision:
            "Mass is amount multiplied by molar mass. Carry the unrounded amount into this step: rounding to 0.120 mol first would give 3.84 g and move the final digit.",
          working: "m = 0.1203 mol × 32.0 g mol⁻¹ = 3.85 g",
        },
      ],
      answer:
        "The cylinder contains 0.120 mol of oxygen, a mass of 3.85 g.",
      plausibility:
        "The molar volume at 300 K and 1.20 × 10⁵ Pa is RT/P ≈ 0.0208 m³, so 2.50 × 10⁻³ m³ should hold roughly an eighth of a mole. It does.",
    },
    {
      id: "heat-check-rigid",
      type: "check",
      eyebrow: "Hold two things fixed",
      title: "Predict a pressure change in a sealed rigid vessel",
      prompt:
        "A fixed mass of an ideal gas is sealed inside a rigid steel cylinder and warmed from 27 °C to 327 °C. What happens to the pressure?",
      options: [
        "It rises by a factor of about 12.1, because the Celsius temperature rises from 27 to 327",
        "It doubles, because with n and V fixed P is proportional to absolute temperature, and 300 K becomes 600 K",
        "It halves, because a hotter gas expands and expansion lowers pressure",
        "It is unchanged, because a rigid container prevents the volume from changing",
      ],
      correctIndex: 1,
      explanation:
        "With n and V held constant, PV = nRT reduces to P/T = constant. Converting to kelvin, 27 °C is 300 K and 327 °C is 600 K, so the absolute temperature doubles and so does the pressure. Faster molecules strike the walls both harder and more often.",
      misconception:
        "Using Celsius temperatures in a ratio. Only the kelvin scale has its zero at zero mean kinetic energy, so only kelvin ratios are meaningful.",
    },
    {
      id: "heat-check-alveolar",
      type: "check",
      eyebrow: "Read the table",
      title: "Split a mixture into partial pressures",
      prompt:
        "Alveolar gas at a total pressure of 101.3 kPa is measured as nitrogen 76.4 kPa, oxygen 13.3 kPa, carbon dioxide 5.3 kPa, with the remainder water vapour. What is the partial pressure of water vapour, and what is the mole fraction of oxygen in the alveolar gas?",
      options: [
        "6.3 kPa and 0.21",
        "6.3 kPa and 0.131",
        "6.3 kPa and 0.140",
        "5.0 kPa and 0.131",
      ],
      correctIndex: 1,
      explanation:
        "Dalton's law makes the partial pressures add to the total, so the water vapour contributes 101.3 − (76.4 + 13.3 + 5.3) = 6.3 kPa. The mole fraction of a component is its partial pressure divided by the total pressure: 13.3 ÷ 101.3 = 0.131.",
      misconception:
        "Assuming alveolar gas keeps the 0.21 oxygen fraction of dry atmospheric air, or dividing by the dry-gas pressure of 95.0 kPa to get 0.140. Humidification and gas exchange both dilute alveolar oxygen below the atmospheric value.",
    },
    {
      id: "heat-check-sweat",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Cost the cooling done by sweating",
      prompt:
        "During an hour of exercise a person evaporates 60 g of sweat from the skin. Taking the specific latent heat of vaporisation of sweat as 2.4 × 10⁶ J kg⁻¹, roughly how much energy does this remove from the body?",
      options: [
        "4.0 × 10⁷ J",
        "1.4 × 10⁸ J",
        "1.4 × 10⁵ J",
        "2.4 × 10⁶ J",
      ],
      correctIndex: 2,
      explanation:
        "Q = mL with the mass converted to kilograms: 60 g = 0.060 kg, so Q = 0.060 × 2.4 × 10⁶ = 1.44 × 10⁵ J. The energy leaves the body with the escaping molecules, which is why evaporation cools even though the sweat never gets hotter than the skin.",
      misconception:
        "Substituting the mass in grams gives 1.4 × 10⁸ J, a thousand times too large. Specific latent heat is defined per kilogram, so mass must be in kilograms before it is used.",
    },
    {
      id: "heat-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Temperature reports energy per particle; heat reports a flow",
      points: [
        "Temperature is intensive and measures mean molecular kinetic energy; heat is energy in transit down a temperature difference.",
        "Kelvin temperatures are compulsory in any ratio or gas-law calculation, since T/K = θ/°C + 273.",
        "Q = mcΔT applies within a single phase; a large specific heat capacity means a small temperature rise per joule.",
        "Q = mL applies at a phase change, where energy breaks intermolecular attractions and the temperature plateaus.",
        "PV = nRT contains Boyle's, Charles's and the pressure law as special cases obtained by fixing two variables.",
        "In a mixture, each gas contributes a partial pressure equal to its mole fraction times the total pressure.",
      ],
      transferRule:
        "Before choosing a thermal equation, ask whether the substance changes phase during the process; if it does, split the calculation at each phase boundary and use mL for the flat parts and mcΔT for the sloping parts.",
      nextLessonId: "lesson.physics.waves",
    },
  ],
};

const wavesAndSound: Lesson = {
  id: "lesson.physics.waves",
  slug: "waves-sound-and-resonance",
  number: "9.2",
  stageId: "stage.physics_waves_fields",
  discipline: "physics",
  title: "Oscillations, waves, sound, and resonance",
  summary:
    "Model oscillations and travelling waves, relate speed, frequency and wavelength, and explain interference, standing waves, resonance and the inverse-square fall of intensity from a point source.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Define simple harmonic motion by its restoring force and explain why its period is independent of amplitude.",
    "Relate amplitude, wavelength, frequency, period and speed using v = fλ.",
    "Distinguish a displacement–position graph from a displacement–time graph.",
    "Predict what changes and what is preserved when a wave crosses into a new medium.",
    "Apply superposition to interference, beats and standing waves on strings and in pipes.",
    "Use the inverse-square law and the decibel scale to describe how intensity falls with distance.",
  ],
  prerequisiteLessonIds: ["lesson.physics.motion_graphs"],
  blocks: [
    {
      id: "wav-purpose",
      type: "concept",
      eyebrow: "Start with the oscillator",
      title: "A wave is an oscillation that travels without carrying matter with it",
      paragraphs: [
        "Simple harmonic motion arises whenever a system displaced from equilibrium experiences a restoring force proportional to that displacement and directed back toward equilibrium: F = −kx, where k measures the stiffness of the system. The minus sign carries the whole physics of it, because it says the force always opposes the displacement. Pull the mass further out and the force pulling it back grows in exact proportion, so the system accelerates inward, overshoots equilibrium, decelerates on the far side, and returns. A mass on a spring, a pendulum at small angles and a molecule vibrating in a bond all behave this way.",
        "That proportionality has a remarkable consequence. A larger amplitude means a longer path to travel, but it also means a larger restoring force and therefore a larger acceleration, and the two effects cancel exactly. The period of a mass on a spring, T = 2π√(m/k), depends only on the mass and the stiffness, not on how far it was pulled. This is why a pendulum clock keeps time as its swing decays.",
        "A wave appears when many such oscillators are coupled. Each one is set into oscillation by its neighbour and passes the disturbance on. The pattern moves across the medium, but each particle only oscillates about its own fixed position. Waves therefore transport energy and information without transporting material, which is why a cork on a pond bobs but does not drift toward the shore.",
      ],
      callout:
        "Simple harmonic motion: F = −kx, so the period does not depend on the amplitude.",
    },
    {
      id: "wav-visual-wave",
      type: "visual",
      eyebrow: "Name the parts",
      title: "Every wave is described by the same five quantities",
      introduction:
        "Look at a snapshot of a travelling wave and identify what each measurement on it is called.",
      visual: "wave",
      caption:
        "Amplitude is the maximum displacement from equilibrium and sets the energy carried. Wavelength λ is the distance between successive identical points. Frequency f counts cycles per second past a fixed point, period T = 1/f is the time for one cycle, and the speed v is how fast the pattern advances.",
    },
    {
      id: "wav-anatomy",
      type: "concept",
      eyebrow: "Put it in symbols",
      title: "Speed belongs to the medium; frequency belongs to the source",
      paragraphs: [
        "In one period the wave advances exactly one wavelength, so speed is wavelength divided by period: v = λ/T. Since frequency is the reciprocal of period, this is usually written v = fλ, with v in m s⁻¹, f in hertz and λ in metres. The relationship is a definition of how the three quantities fit together, not a causal claim, so it must be read carefully in any particular situation.",
        "Waves come in two geometries. In a transverse wave the particle oscillation is perpendicular to the direction of travel, as on a string or in light. In a longitudinal wave the oscillation is along the direction of travel, producing alternating compressions and rarefactions. Sound is longitudinal: a loudspeaker cone pushes and pulls the air, and what travels outward is a pressure variation, which is why sound needs a medium and cannot cross a vacuum.",
        "The speed of a wave is set by the properties of the medium, not by the source. On a string v = √(T/μ), rising with tension and falling with mass per unit length; in air the speed of sound rises with temperature, from about 331 m s⁻¹ at 0 °C to 343 m s⁻¹ at 20 °C. When a wave crosses into a new medium the source continues to shake at the same rate, so the frequency is preserved. Speed changes, and therefore wavelength must change with it.",
      ],
      callout: "v = fλ; crossing a boundary preserves f and alters v and λ together.",
    },
    {
      id: "wav-worked-ultrasound",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the wavelength of a diagnostic ultrasound beam",
      scenario:
        "A transducer emits ultrasound at 2.5 MHz into soft tissue, in which the speed of sound is 1540 m s⁻¹. Find the wavelength, and comment on the finest detail the beam could resolve.",
      steps: [
        {
          label: "Convert the frequency to hertz",
          decision:
            "The relationship v = fλ needs base SI units, and mega means 10⁶.",
          working: "f = 2.5 MHz = 2.5 × 10⁶ Hz",
        },
        {
          label: "Rearrange for wavelength",
          decision:
            "Speed and frequency are known, so isolate λ before substituting.",
          working: "λ = v / f",
        },
        {
          label: "Substitute the values",
          decision:
            "Keep the powers of ten explicit so the small result is not mis-stated.",
          working:
            "λ = 1540 ÷ (2.5 × 10⁶) = 6.16 × 10⁻⁴ m = 0.616 mm",
        },
        {
          label: "Interpret the size",
          decision:
            "Imaging cannot resolve structures much smaller than about a wavelength.",
          working:
            "Detail finer than roughly 0.6 mm is beyond the reach of this frequency.",
        },
      ],
      answer:
        "The wavelength in soft tissue is 6.16 × 10⁻⁴ m, or about 0.6 mm, which sets the resolution limit of the scan.",
      plausibility:
        "Raising the frequency shortens the wavelength and sharpens the image, which is exactly why higher-frequency probes are chosen for shallow, fine structures and lower frequencies for deep imaging.",
    },
    {
      id: "wav-check-boundary",
      type: "check",
      eyebrow: "Your turn",
      title: "Decide what survives a change of medium",
      prompt:
        "The same 2.5 MHz ultrasound pulse passes from soft tissue, where the speed is 1540 m s⁻¹, into bone, where the speed is 4080 m s⁻¹. What happens to the pulse?",
      options: [
        "The frequency stays at 2.5 MHz and the wavelength decreases to about 0.23 mm",
        "The wavelength stays at 0.6 mm and the frequency increases to about 6.6 MHz",
        "Both the frequency and the wavelength increase, since the wave now travels faster",
        "The frequency stays at 2.5 MHz and the wavelength increases to about 1.6 mm",
      ],
      correctIndex: 3,
      explanation:
        "The source sets the rate of oscillation, and the first layer of bone is driven at exactly that rate, so the frequency is unchanged. The speed is a property of bone and is higher, so from λ = v/f the wavelength becomes 4080 ÷ (2.5 × 10⁶) = 1.63 × 10⁻³ m.",
      misconception:
        "Assuming wavelength is the fixed property of a wave. It is frequency that is conserved across a boundary; wavelength stretches or compresses in proportion to the new speed.",
    },
    {
      id: "wav-visual-graphs",
      type: "visual",
      eyebrow: "Check the axis",
      title: "Two graphs of the same wave answer different questions",
      introduction:
        "Compare a photograph of the whole wave taken at one instant with a record of one particle's motion over time.",
      visual: "wave_axes",
      caption:
        "With position on the horizontal axis, the repeat distance is the wavelength. With time on the horizontal axis, the repeat interval is the period. The two curves can look identical, so the axis label is the only reliable way to tell which quantity a repeat represents.",
    },
    {
      id: "wav-check-graphs",
      type: "check",
      eyebrow: "Shift representation",
      title: "Extract the right quantity from the right graph",
      prompt:
        "Two sinusoidal graphs are drawn for one travelling wave. Graph A plots displacement against position along the medium at a fixed instant. Graph B plots displacement against time at one fixed point in the medium. What can be read from each?",
      options: [
        "The repeat distance on A is the period; the repeat interval on B is the wavelength",
        "The repeat distance on A is the wavelength; the repeat interval on B is the period",
        "Both graphs give the wavelength, since both show the same repeating shape",
        "Only graph A carries useful information, because graph B tracks a particle that is not moving",
      ],
      correctIndex: 1,
      explanation:
        "Graph A is a snapshot of the whole medium, so its horizontal repeat is a distance: the wavelength. Graph B follows one particle, so its horizontal repeat is a time: the period. Frequency then follows as f = 1/T, and combining the two graphs gives the speed as v = λ/T.",
      misconception:
        "Reading a sinusoid without checking the horizontal axis. The two graphs can be drawn with identical shapes while carrying entirely different physical information.",
    },
    {
      id: "wav-superposition",
      type: "concept",
      eyebrow: "Add the second layer",
      title: "Overlapping waves add displacement by displacement",
      paragraphs: [
        "The principle of superposition states that where two waves meet, the resultant displacement is the vector sum of the individual displacements. Where crests coincide with crests the waves are in phase and reinforce, giving constructive interference and a large amplitude. Where a crest meets a trough the waves are in antiphase and cancel, giving destructive interference. Crucially, the waves pass through one another unchanged and carry on afterwards as though nothing had happened.",
        "Two notes of slightly different frequency sounded together drift in and out of phase, so the combined amplitude rises and falls at a rate equal to the frequency difference. These beats are heard as a throbbing, at f_beat = |f₁ − f₂|, and a piano tuner listens for the beats to vanish. When instead a wave reflects from a boundary and superposes on the incoming wave of the same frequency, the interference pattern stops moving: a standing wave forms, with fixed nodes of permanent cancellation and antinodes of maximum oscillation.",
        "Boundaries fix which standing waves survive. A string fixed at both ends must have a node at each end, so only wavelengths satisfying L = nλ/2 fit and the fundamental has λ₁ = 2L, giving f₁ = v/2L. All whole-number multiples of that fundamental are permitted. A pipe open at both ends behaves the same way with antinodes at the ends. A pipe closed at one end needs a node at the closed end and an antinode at the open end, so λ₁ = 4L and f₁ = v/4L, and only the odd harmonics f₁, 3f₁, 5f₁ are possible.",
      ],
      callout:
        "String or open pipe: f_n = nv/2L for n = 1, 2, 3, … Closed pipe: f_n = nv/4L for odd n only.",
    },
    {
      id: "wav-worked-string",
      type: "worked",
      eyebrow: "Worked example",
      title: "Work from a fundamental to a higher harmonic",
      scenario:
        "A guitar string of vibrating length 0.640 m sounds a fundamental note of 330 Hz. Find the speed of transverse waves on the string, then the frequency and wavelength of its third harmonic.",
      steps: [
        {
          label: "Fit the fundamental to the string",
          decision:
            "Both ends are fixed nodes, and the simplest pattern has a single antinode, which is half a wavelength.",
          working: "λ₁ = 2L = 2 × 0.640 = 1.280 m",
        },
        {
          label: "Find the wave speed",
          decision:
            "Speed is a property of this string under this tension and applies to every harmonic on it.",
          working: "v = f₁λ₁ = 330 × 1.280 = 422.4 m s⁻¹",
        },
        {
          label: "Identify the third harmonic frequency",
          decision:
            "A string fixed at both ends supports every whole-number multiple of the fundamental.",
          working: "f₃ = 3f₁ = 3 × 330 = 990 Hz",
        },
        {
          label: "Find the corresponding wavelength",
          decision:
            "The speed is unchanged, so a tripled frequency means a wavelength one third as long.",
          working:
            "λ₃ = v / f₃ = 422.4 ÷ 990 = 0.427 m, which equals 2L/3 as expected",
        },
      ],
      answer:
        "Waves travel along the string at about 422 m s⁻¹; the third harmonic is 990 Hz with a wavelength of 0.427 m.",
      plausibility:
        "The third harmonic fits three half-wavelengths into the same 0.640 m, and 3 × 0.427 ÷ 2 = 0.64 m, so the pattern closes on the fixed ends as it must.",
    },
    {
      id: "wav-check-pipe",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Predict the resonances of a stopped pipe",
      prompt:
        "An organ pipe closed at one end and open at the other sounds a fundamental of 128 Hz. Which other frequencies will resonate strongly in this pipe?",
      options: [
        "256 Hz and 512 Hz",
        "256 Hz and 384 Hz",
        "384 Hz and 640 Hz",
        "64 Hz and 32 Hz",
      ],
      correctIndex: 2,
      explanation:
        "A closed end must be a displacement node and an open end an antinode, so only patterns with an odd number of quarter-wavelengths fit. The permitted frequencies are therefore the odd multiples of the fundamental: 3 × 128 = 384 Hz and 5 × 128 = 640 Hz.",
      misconception:
        "Assuming every harmonic series contains all whole-number multiples. That holds for a string fixed at both ends and for an open pipe, but a pipe closed at one end suppresses the even harmonics, which is why it sounds distinctly hollow.",
    },
    {
      id: "wav-intensity",
      type: "concept",
      eyebrow: "Follow the energy",
      title: "Intensity thins out with distance and is heard logarithmically",
      paragraphs: [
        "Every oscillating system has one or more natural frequencies at which it prefers to vibrate. Driving it at one of those frequencies means each push arrives in step with the existing motion, so energy accumulates cycle after cycle and the amplitude grows dramatically. This is resonance, and it explains why a wine glass shatters at one particular note, why an air column selects the pipe frequency from the broadband noise of the mouthpiece, and why bridges are designed with their natural frequencies away from likely driving rhythms.",
        "Intensity is the power carried per unit area perpendicular to the wave, measured in W m⁻². A point source radiating power P spreads that energy over a sphere, whose area is 4πr², so I = P/4πr². Doubling the distance therefore quarters the intensity and tripling it reduces the intensity to one ninth. Nothing is absorbed in this argument; the same energy is simply spread over a larger surface.",
        "Human hearing spans about twelve orders of magnitude of intensity, so a logarithmic scale is used. The sound intensity level in decibels is L = 10 log₁₀(I/I₀), with the reference I₀ = 1.0 × 10⁻¹² W m⁻². A tenfold intensity increase adds 10 dB and a doubling adds about 3 dB, so decibel values must never be added arithmetically. Finally, relative motion between source and observer compresses or stretches the arriving wavefronts, raising the received frequency on approach and lowering it on recession. This Doppler shift is used clinically to measure the speed and direction of blood flow from the frequency change of reflected ultrasound.",
      ],
      callout:
        "I = P/4πr² for a point source; L = 10 log₁₀(I/I₀) with I₀ = 1.0 × 10⁻¹² W m⁻²",
    },
    {
      id: "wav-worked-intensity",
      type: "worked",
      eyebrow: "Worked example",
      title: "Convert an intensity change into a decibel change",
      scenario:
        "A small loudspeaker radiates uniformly in all directions. At 2.0 m the sound intensity is 8.0 × 10⁻⁴ W m⁻². Find the intensity and the sound intensity level at 2.0 m and at 6.0 m, taking I₀ = 1.0 × 10⁻¹² W m⁻². Ignore absorption by the air.",
      steps: [
        {
          label: "Scale the intensity by the distance ratio",
          decision:
            "For a point source the intensity falls as the inverse square of distance, so only the ratio of radii is needed.",
          working:
            "I₂ = 8.0 × 10⁻⁴ × (2.0/6.0)² = 8.0 × 10⁻⁴ × (1/9) = 8.9 × 10⁻⁵ W m⁻²",
        },
        {
          label: "Find the level at the near position",
          decision:
            "The decibel definition compares the intensity with the fixed reference I₀.",
          working:
            "L₁ = 10 log₁₀(8.0 × 10⁻⁴ ÷ 1.0 × 10⁻¹²) = 10 log₁₀(8.0 × 10⁸) = 89.0 dB",
        },
        {
          label: "Find the level at the far position",
          decision:
            "The same definition applies, using the reduced intensity found above.",
          working:
            "L₂ = 10 log₁₀(8.9 × 10⁻⁵ ÷ 1.0 × 10⁻¹²) = 10 log₁₀(8.9 × 10⁷) = 79.5 dB",
        },
        {
          label: "Express the drop directly",
          decision:
            "A difference of levels depends only on the intensity ratio, so the reference cancels.",
          working: "ΔL = 10 log₁₀(1/9) = −9.5 dB",
        },
      ],
      answer:
        "Moving from 2.0 m to 6.0 m cuts the intensity to one ninth, 8.9 × 10⁻⁵ W m⁻², and lowers the level from 89.0 dB to 79.5 dB, a fall of 9.5 dB.",
      plausibility:
        "One ninth is a little more than one eighth, which is three successive halvings and about 9 dB, so a drop just under 10 dB is exactly what should be expected.",
    },
    {
      id: "wav-check-inverse-square",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Scale an intensity with distance",
      prompt:
        "A small isotropic source of ultraviolet light is used to sterilise a bench. A sensor is moved from 1.5 m to 4.5 m from the source, with nothing absorbing in between. What happens to the intensity it records?",
      options: [
        "It falls to one twenty-seventh of its previous value",
        "It falls to one third of its previous value",
        "It falls to one sixth of its previous value",
        "It falls to one ninth of its previous value",
      ],
      correctIndex: 3,
      explanation:
        "The distance ratio is 4.5 ÷ 1.5 = 3. Because a point source spreads its power over a sphere of area 4πr², intensity varies as 1/r², so tripling the distance divides the intensity by 3² = 9.",
      misconception:
        "Treating the fall as proportional to distance, which gives one third, or as an inverse cube, which gives one twenty-seventh. Energy spreads over an area, so the exponent is 2.",
    },
    {
      id: "wav-check-shm",
      type: "check",
      eyebrow: "Test the definition",
      title: "Change the amplitude and see what happens",
      prompt:
        "A mass hanging on a spring oscillates vertically with a period of 0.80 s. It is stopped, pulled down twice as far from equilibrium as before, and released. What is the new period?",
      options: [
        "0.40 s, because the larger restoring force makes the mass move faster",
        "1.60 s, because the mass now has twice as far to travel each cycle",
        "0.80 s, because the period of simple harmonic motion does not depend on amplitude",
        "1.13 s, because the period scales with the square root of the amplitude",
      ],
      correctIndex: 2,
      explanation:
        "Doubling the amplitude doubles the path length but also doubles the restoring force and hence the acceleration at every corresponding point. The two effects cancel exactly, leaving T = 2π√(m/k) unchanged at 0.80 s. Only the mass and the spring stiffness can alter the period.",
      misconception:
        "Reasoning from distance alone, or from force alone. Simple harmonic motion is defined by the proportionality between force and displacement, and it is that proportionality that makes the period amplitude-independent.",
    },
    {
      id: "wav-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Ask what the medium fixes and what the source fixes",
      points: [
        "Simple harmonic motion has a restoring force proportional to displacement, so its period is independent of amplitude.",
        "v = fλ ties the three wave quantities together; the medium sets v and the source sets f.",
        "A displacement–position graph shows wavelength; a displacement–time graph shows period.",
        "Superposition produces constructive and destructive interference, beats at |f₁ − f₂|, and standing waves between boundaries.",
        "A string or open pipe gives f_n = nv/2L for all n; a closed pipe gives f_n = nv/4L for odd n only.",
        "Intensity from a point source falls as 1/r², and the decibel level is 10 log₁₀(I/I₀).",
      ],
      transferRule:
        "For any wave problem, first decide what is being held constant: frequency is fixed by the source and survives a change of medium, while speed is fixed by the medium and forces the wavelength to follow it.",
      nextLessonId: "lesson.physics.optics",
    },
  ],
};

const lightAndSpectroscopy: Lesson = {
  id: "lesson.physics.optics",
  slug: "light-refraction-and-spectroscopy",
  number: "9.3",
  stageId: "stage.physics_waves_fields",
  discipline: "physics",
  title: "Light, refraction, lenses, and spectroscopy",
  summary:
    "Treat light as an electromagnetic wave and as photons, predict refraction and image formation with lenses, and read absorption spectra using the Beer–Lambert law.",
  estimatedMinutes: 38,
  reviewStatus: "unreviewed",
  objectives: [
    "Order the electromagnetic spectrum by wavelength and photon energy.",
    "Calculate photon energy from E = hf = hc/λ and explain the inverse relationship with wavelength.",
    "Apply Snell's law and the refractive index to predict the path of a refracted ray.",
    "Determine a critical angle and explain total internal reflection in fibres and endoscopes.",
    "Locate and describe an image using 1/f = 1/u + 1/v and account for short and long sight.",
    "Use the Beer–Lambert law, including its additivity for mixtures, to interpret absorbance data.",
  ],
  prerequisiteLessonIds: ["lesson.physics.waves"],
  blocks: [
    {
      id: "opt-purpose",
      type: "concept",
      eyebrow: "Two descriptions, one thing",
      title: "Light is a wave that delivers its energy in discrete packets",
      paragraphs: [
        "Light is an electromagnetic wave: coupled oscillating electric and magnetic fields, each perpendicular to the other and both perpendicular to the direction of travel, so it is a transverse wave. Because a changing electric field generates a magnetic one and a changing magnetic field generates an electric one, the two sustain each other and no medium is required. In a vacuum every electromagnetic wave, from a radio transmission to a gamma ray, travels at the same speed c = 3.00 × 10⁸ m s⁻¹. The whole spectrum is a single phenomenon distinguished only by frequency and wavelength.",
        "Ordered from the longest wavelength to the shortest, the spectrum runs radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. The visible band is a narrow slice from roughly 400 nm at the violet end to about 700 nm at the red end. Since v = fλ and the speed is fixed in a vacuum, a shorter wavelength always means a higher frequency, and the sequence above is simultaneously a sequence of increasing frequency.",
        "Wave language cannot explain everything. Energy is absorbed and emitted in indivisible quanta called photons, each carrying E = hf, where h = 6.63 × 10⁻³⁴ J s is the Planck constant. Substituting f = c/λ gives E = hc/λ, so photon energy is inversely proportional to wavelength. This is why ultraviolet light damages DNA while brighter infrared light does not: damage depends on the energy delivered per photon, not on the number of photons arriving.",
      ],
      callout: "E = hf = hc/λ, with h = 6.63 × 10⁻³⁴ J s and c = 3.00 × 10⁸ m s⁻¹",
    },
    {
      id: "opt-visual-spectrum",
      type: "visual",
      eyebrow: "Lay it out",
      title: "One axis carries wavelength, frequency and energy at once",
      introduction:
        "Read the electromagnetic spectrum as a single scale and notice that three quantities vary together along it.",
      visual: "spectrum",
      caption:
        "Moving left to right from radio to gamma, wavelength falls while frequency and photon energy both rise. Visible light occupies only a narrow band near 400–700 nm, with violet at the short, high-energy end and red at the long, low-energy end.",
    },
    {
      id: "opt-worked-photon",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compare the energy of a visible and an ultraviolet photon",
      scenario:
        "Find the energy of a photon of green light at λ = 500 nm, then of an ultraviolet photon at λ = 250 nm. Take h = 6.63 × 10⁻³⁴ J s and c = 3.00 × 10⁸ m s⁻¹.",
      steps: [
        {
          label: "Convert the wavelength to metres",
          decision:
            "The constants are in SI units, so nanometres must be converted before substitution.",
          working: "λ = 500 nm = 500 × 10⁻⁹ m = 5.00 × 10⁻⁷ m",
        },
        {
          label: "Evaluate the numerator once",
          decision:
            "hc recurs in every photon calculation, so it is worth computing separately.",
          working: "hc = 6.63 × 10⁻³⁴ × 3.00 × 10⁸ = 1.989 × 10⁻²⁵ J m",
        },
        {
          label: "Divide by the wavelength",
          decision: "E = hc/λ gives the energy of one photon.",
          working:
            "E = 1.989 × 10⁻²⁵ ÷ 5.00 × 10⁻⁷ = 3.98 × 10⁻¹⁹ J, or about 2.5 eV",
        },
        {
          label: "Scale to the shorter wavelength",
          decision:
            "Because E is inversely proportional to λ, halving λ doubles E without a fresh calculation.",
          working: "E(250 nm) = 2 × 3.98 × 10⁻¹⁹ = 7.96 × 10⁻¹⁹ J, about 5.0 eV",
        },
      ],
      answer:
        "A 500 nm green photon carries 3.98 × 10⁻¹⁹ J; a 250 nm ultraviolet photon carries twice as much, 7.96 × 10⁻¹⁹ J.",
      plausibility:
        "Typical covalent bond energies correspond to a few electronvolts per bond, so a 5 eV ultraviolet photon can break bonds while a 2.5 eV visible photon usually cannot. That matches the biological behaviour of the two bands.",
    },
    {
      id: "opt-check-energy",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Rank two photons by energy",
      prompt:
        "A sample is illuminated in turn by ultraviolet light of wavelength 300 nm and infrared light of wavelength 900 nm. How do the energies of the individual photons compare?",
      options: [
        "Each ultraviolet photon carries nine times the energy of each infrared photon",
        "Each ultraviolet photon carries one third the energy of each infrared photon",
        "The two photons carry equal energy, because both are electromagnetic radiation travelling at c",
        "Each ultraviolet photon carries three times the energy of each infrared photon",
      ],
      correctIndex: 3,
      explanation:
        "E = hc/λ makes photon energy inversely proportional to wavelength. The infrared wavelength is three times the ultraviolet one, so the ultraviolet photon energy is three times larger. The relationship is a simple reciprocal, not a squared one.",
      misconception:
        "Confusing intensity with photon energy. A bright infrared lamp delivers many more photons per second than a dim ultraviolet lamp, but each of its photons is still individually weaker, and only photon energy determines whether a given transition or bond rupture is possible.",
    },
    {
      id: "opt-refraction",
      type: "concept",
      eyebrow: "Change the speed",
      title: "Light bends because it slows in a denser medium",
      paragraphs: [
        "When light meets a smooth surface it may reflect, and the law of reflection states that the angle of incidence equals the angle of reflection, both measured from the normal, with the incident ray, reflected ray and normal all in one plane. A smooth surface reflects a parallel beam as a parallel beam and forms an image; a rough surface scatters it, which is why most objects are visible from every direction rather than mirror-like.",
        "Light entering a transparent medium slows down. The refractive index is defined as n = c/v, the ratio of the vacuum speed to the speed in the medium, so n is always at least 1 and has no unit: about 1.00 for air, 1.33 for water, 1.50 for typical glass. The frequency is unchanged, so the wavelength shortens inside the medium in the same proportion as the speed. Because one edge of a wavefront enters the new medium before the other, the wavefront pivots and the ray changes direction.",
        "Snell's law quantifies the pivot: n₁sinθ₁ = n₂sinθ₂, with angles measured from the normal. Going into a slower, higher-index medium bends the ray toward the normal; coming out into a faster, lower-index medium bends it away. In the second case the refracted angle can reach 90° at a particular incident angle, the critical angle θ_c, given by sinθ_c = n₂/n₁. Beyond that angle no refraction is possible and all the light reflects internally. Optical fibres and endoscopes exploit this total internal reflection to guide light around bends with almost no loss.",
      ],
      callout: "n = c/v; n₁sinθ₁ = n₂sinθ₂; sinθ_c = n₂/n₁ for n₁ > n₂",
    },
    {
      id: "opt-worked-snell",
      type: "worked",
      eyebrow: "Worked example",
      title: "Refract a ray into water, then find the critical angle back out",
      scenario:
        "A ray of light in air strikes a flat water surface at 40.0° to the normal. Take n_air = 1.00 and n_water = 1.33. Find the refracted angle in the water, the speed of light in water, and the critical angle for a ray travelling from water toward air.",
      steps: [
        {
          label: "Apply Snell's law across the surface",
          decision:
            "Both refractive indices and the incident angle are known, so the refracted angle is the only unknown.",
          working:
            "1.00 × sin 40.0° = 1.33 × sinθ₂, so sinθ₂ = 0.643 ÷ 1.33 = 0.483",
        },
        {
          label: "Take the inverse sine",
          decision:
            "Water has the higher index, so the ray must bend toward the normal and θ₂ must be less than 40.0°.",
          working: "θ₂ = sin⁻¹(0.483) = 28.9°",
        },
        {
          label: "Convert the index into a speed",
          decision:
            "The definition n = c/v rearranges directly to give the speed in the medium.",
          working:
            "v = c/n = 3.00 × 10⁸ ÷ 1.33 = 2.26 × 10⁸ m s⁻¹",
        },
        {
          label: "Reverse the direction for the critical angle",
          decision:
            "Total internal reflection is only possible going from the denser to the less dense medium, so water is now medium 1.",
          working:
            "sinθ_c = 1.00 ÷ 1.33 = 0.752, so θ_c = sin⁻¹(0.752) = 48.8°",
        },
      ],
      answer:
        "The ray refracts to 28.9° from the normal inside the water, where light travels at 2.26 × 10⁸ m s⁻¹; a ray heading the other way is totally internally reflected once it exceeds 48.8°.",
      plausibility:
        "The refracted angle is smaller than the incident angle, as required for entry into a higher-index medium, and the critical angle lies between 0° and 90°, which it must for any pair of media with n₁ > n₂.",
    },
    {
      id: "opt-check-tir",
      type: "check",
      eyebrow: "Your turn",
      title: "Decide the fate of a ray inside a fibre",
      prompt:
        "A ray travelling inside a glass fibre of refractive index 1.50 meets the boundary with air (n = 1.00) at 45° to the normal. What happens?",
      options: [
        "It refracts away from the normal and leaves the fibre at about 70°",
        "It is totally internally reflected, because 45° exceeds the critical angle of 41.8°",
        "It refracts toward the normal and leaves the fibre at about 28°",
        "It passes straight on without deviation, since glass and air are both transparent",
      ],
      correctIndex: 1,
      explanation:
        "The critical angle is given by sinθ_c = 1.00 ÷ 1.50 = 0.667, so θ_c = 41.8°. The ray strikes at 45°, which is larger, so Snell's law has no solution for a refracted ray and all the light reflects back into the glass. This is precisely how a fibre confines light along its length.",
      misconception:
        "Assuming refraction always occurs at a boundary. Above the critical angle refraction is geometrically impossible, and reflection is total rather than partial.",
    },
    {
      id: "opt-visual-lens",
      type: "visual",
      eyebrow: "Trace three rays",
      title: "A lens is refraction applied twice with a curved surface",
      introduction:
        "Follow parallel rays through a converging lens and then through a diverging lens, and see where each set appears to come from.",
      visual: "optics",
      caption:
        "A converging lens brings parallel rays to a real focus that light actually passes through. A diverging lens spreads them so they only appear to come from a virtual focus behind the lens, which is why its focal length is taken as negative.",
    },
    {
      id: "opt-lenses",
      type: "concept",
      eyebrow: "Locate the image",
      title: "One equation places every image a thin lens can form",
      paragraphs: [
        "For a thin lens, the object distance u, image distance v and focal length f are linked by 1/f = 1/u + 1/v. Using the real-is-positive convention, u and v are positive for real objects and real images, and f is positive for a converging lens and negative for a diverging one. A real image is formed where light rays actually converge and can be caught on a screen; a virtual image is formed where rays only appear to originate, as in a magnifying glass or a plane mirror, and cannot be projected.",
        "The linear magnification is m = v/u, the ratio of image height to object height. A real image formed by a single converging lens is inverted, and it is enlarged when the object lies between f and 2f, the same size at 2f, and diminished beyond 2f. Bring the object inside the focal length and the image becomes virtual, upright and magnified, which is the magnifying glass.",
        "The eye is a converging system whose cornea does most of the refracting and whose lens fine-tunes the focal length by changing shape. Short sight arises when the eyeball is too long or the system too powerful, so distant light focuses in front of the retina; a diverging lens spreads the light first and moves the focus back. Long sight is the opposite, with near objects focusing behind the retina, and is corrected with a converging lens. A related effect is dispersion: refractive index varies slightly with wavelength, so violet is deviated more than red, which splits white light in a prism and produces a rainbow from water droplets.",
      ],
      callout: "1/f = 1/u + 1/v, with magnification m = v/u",
    },
    {
      id: "opt-worked-lens",
      type: "worked",
      eyebrow: "Worked example",
      title: "Locate and describe an image from a converging lens",
      scenario:
        "An object 4.0 mm tall is placed 18.0 cm from a thin converging lens of focal length 12.0 cm. Find the image distance, the magnification, the image height, and the nature of the image.",
      steps: [
        {
          label: "Rearrange the lens equation",
          decision:
            "Only the image distance is unknown, so isolate 1/v before evaluating.",
          working: "1/v = 1/f − 1/u = 1/12.0 − 1/18.0",
        },
        {
          label: "Use a common denominator",
          decision:
            "Working with fractions rather than decimals avoids rounding at the reciprocal stage.",
          working: "1/v = 3/36 − 2/36 = 1/36 cm⁻¹, so v = 36.0 cm",
        },
        {
          label: "Find the magnification",
          decision:
            "Magnification is the ratio of image distance to object distance.",
          working: "m = v/u = 36.0 ÷ 18.0 = 2.0",
        },
        {
          label: "Scale the object height and classify the image",
          decision:
            "A positive image distance means the rays truly converge on the far side, so the image is real and therefore inverted.",
          working: "image height = 2.0 × 4.0 mm = 8.0 mm, inverted",
        },
      ],
      answer:
        "The image forms 36.0 cm beyond the lens; it is real, inverted, and 8.0 mm tall, twice the size of the object.",
      plausibility:
        "The object sits between f = 12.0 cm and 2f = 24.0 cm, which is exactly the range that should give a real, inverted, magnified image beyond 2f on the far side. The predicted 36.0 cm is indeed beyond 24.0 cm.",
    },
    {
      id: "opt-check-eye",
      type: "check",
      eyebrow: "Apply to the eye",
      title: "Choose the correcting lens",
      prompt:
        "A person can see nearby objects clearly but distant objects are blurred, because parallel light from a distant object is brought to a focus in front of the retina. Which correction is appropriate, and why?",
      options: [
        "No lens can help, since the fault lies in the retina rather than in the focusing system",
        "A converging lens, which adds power and brings the focus further forward onto the retina",
        "A converging lens of very short focal length, which compensates for the eyeball being too short",
        "A diverging lens, which spreads the light before it enters the eye so the focus moves back onto the retina",
      ],
      correctIndex: 3,
      explanation:
        "This is short sight: the eye's optical system is too powerful for its length, so the image forms before the retina. Placing a diverging lens in front makes the incoming rays divergent rather than parallel, which effectively reduces the total power and pushes the focus backward until it lands on the retina.",
      misconception:
        "Reaching for a converging lens because the aim is to “focus better”. Adding converging power would move the focus even further in front of the retina and make the blur worse; the correction must oppose the existing error.",
    },
    {
      id: "opt-spectroscopy",
      type: "concept",
      eyebrow: "Measure with light",
      title: "A coloured solution announces which photons it removed",
      paragraphs: [
        "A molecule absorbs a photon only when the photon energy matches the gap between two of its electronic energy levels. The transmitted light is therefore what remains after certain wavelengths have been removed, and the solution appears the complementary colour to the band it absorbs. A solution absorbing around 450 nm in the blue looks orange; one absorbing in the red near 650 nm looks blue-green. The colour we see is a statement about what is missing.",
        "The Beer–Lambert law makes this quantitative. Absorbance A = εcl, where c is the concentration in mol dm⁻³, l the path length through the sample in cm, and ε the molar absorption coefficient in dm³ mol⁻¹ cm⁻¹, a property of the substance at one specific wavelength. Absorbance is defined as log₁₀(I₀/I) and so has no unit. Two features make it powerful: it is linear in concentration, so a calibration line through the origin converts absorbance directly into concentration, and it is additive, so for a mixture the total absorbance at any wavelength is the sum of the separate contributions. The law assumes dilute, non-scattering solutions; at high concentration the linearity fails.",
        "Which wavelength a molecule absorbs is set by the size of its electronic energy gap, and that gap shrinks as the conjugated system lengthens. Delocalising electrons over more alternating double bonds gives them more room, lowers the energy of the transition and therefore pushes absorption to a longer wavelength. Ethene absorbs deep in the ultraviolet and is colourless, whereas β-carotene with eleven conjugated double bonds absorbs blue light near 450 nm and consequently looks orange. The same principle explains the colours of synthetic dyes and of the retinal pigment that begins vision.",
      ],
      callout: "A = εcl, additive across species: A_total = ε₁c₁l + ε₂c₂l + …",
    },
    {
      id: "opt-worked-beer",
      type: "worked",
      eyebrow: "Worked example",
      title: "Predict the absorbance of a two-component mixture",
      scenario:
        "At 540 nm, species X has ε = 8.0 × 10³ dm³ mol⁻¹ cm⁻¹ and species Y has ε = 2.0 × 10³ dm³ mol⁻¹ cm⁻¹. A solution containing X at 4.0 × 10⁻⁵ mol dm⁻³ and Y at 6.0 × 10⁻⁵ mol dm⁻³ is measured in a 1.00 cm cell. Find the absorbance at 540 nm.",
      steps: [
        {
          label: "Confirm the units are compatible",
          decision:
            "ε in dm³ mol⁻¹ cm⁻¹ multiplied by mol dm⁻³ and cm leaves a dimensionless absorbance, so no conversion is needed.",
          working: "(dm³ mol⁻¹ cm⁻¹) × (mol dm⁻³) × (cm) = 1",
        },
        {
          label: "Find the contribution from X",
          decision:
            "Each species obeys A = εcl independently at this wavelength.",
          working: "A_X = 8.0 × 10³ × 4.0 × 10⁻⁵ × 1.00 = 0.32",
        },
        {
          label: "Find the contribution from Y",
          decision:
            "Y absorbs less strongly here but is present at a higher concentration, so its contribution is not negligible.",
          working: "A_Y = 2.0 × 10³ × 6.0 × 10⁻⁵ × 1.00 = 0.12",
        },
        {
          label: "Add the contributions",
          decision:
            "Absorbance is additive because it is a logarithm of a product of transmittances.",
          working: "A_total = 0.32 + 0.12 = 0.44",
        },
      ],
      answer:
        "The mixture has an absorbance of 0.44 at 540 nm in a 1.00 cm cell.",
      plausibility:
        "X supplies about three quarters of the absorbance despite being the less concentrated species, which is consistent with an ε four times larger. Note also that transmittances, unlike absorbances, would have to be multiplied rather than added.",
    },
    {
      id: "opt-check-spectrum",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Read one component out of a mixed spectrum",
      prompt:
        "An absorbance spectrum is recorded for a mixture of dyes P and Q in a 1.00 cm cell. Inspection of the pure spectra shows that at 620 nm dye Q does not absorb at all, while dye P has ε = 2.0 × 10⁴ dm³ mol⁻¹ cm⁻¹. The mixture gives A = 0.60 at 620 nm. What is the concentration of P?",
      options: [
        "3.0 × 10⁻⁴ mol dm⁻³",
        "1.2 × 10⁴ mol dm⁻³",
        "3.0 × 10⁻⁵ mol dm⁻³",
        "It cannot be found, because the absorbance of a mixture always contains both dyes",
      ],
      correctIndex: 2,
      explanation:
        "Because Q contributes nothing at 620 nm, the additivity of absorbance means the whole 0.60 belongs to P. Rearranging A = εcl gives c = A/(εl) = 0.60 ÷ (2.0 × 10⁴ × 1.00) = 3.0 × 10⁻⁵ mol dm⁻³. Choosing a wavelength where only one component absorbs is the standard way to analyse a mixture without separating it.",
      misconception:
        "Multiplying rather than dividing by ε, which gives 1.2 × 10⁴ and an absurd concentration. A dimensional check settles it at once: absorbance is dimensionless, so dividing by dm³ mol⁻¹ cm⁻¹ and cm must leave mol dm⁻³.",
    },
    {
      id: "opt-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Wavelength sets the energy; the boundary sets the path",
      points: [
        "Photon energy follows E = hf = hc/λ, so shorter wavelength always means higher energy.",
        "The refractive index n = c/v measures the slowing of light, and Snell's law n₁sinθ₁ = n₂sinθ₂ fixes the bending.",
        "Total internal reflection occurs above sinθ_c = n₂/n₁ and only when travelling toward a lower-index medium.",
        "The thin-lens equation 1/f = 1/u + 1/v locates the image, and m = v/u gives its size.",
        "Short sight is corrected by a diverging lens and long sight by a converging lens.",
        "A = εcl is linear in concentration and additive across the species present in a mixture.",
      ],
      transferRule:
        "When light meets a change of material, ask what happens to its speed; when light meets a molecule, ask whether the photon energy matches an available energy gap. Almost every optical or spectroscopic question is one of those two questions in disguise.",
      nextLessonId: "lesson.physics.electricity",
    },
  ],
};

const chargeAndCircuits: Lesson = {
  id: "lesson.physics.electricity",
  slug: "charge-current-and-circuits",
  number: "9.4",
  stageId: "stage.physics_waves_fields",
  discipline: "physics",
  title: "Charge, current, resistance, and circuits",
  summary:
    "Track charge and energy around a circuit, apply Ohm's law and the series and parallel rules, and explain the cell membrane as a charged capacitor.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Define current as rate of flow of charge and state the conventional-current convention.",
    "Interpret potential difference and electromotive force as energy per unit charge.",
    "Apply Ohm's law and distinguish ohmic from non-ohmic behaviour.",
    "Use R = ρL/A to predict how geometry changes resistance.",
    "Derive and apply the series and parallel combination rules from conservation of charge and energy.",
    "Explain the resting membrane potential and depolarisation using capacitance and selective permeability.",
  ],
  prerequisiteLessonIds: ["lesson.physics.work_energy"],
  blocks: [
    {
      id: "elec-purpose",
      type: "concept",
      eyebrow: "Start with the carrier",
      title: "A current is a rate of flow of charge, not a flow of energy",
      paragraphs: [
        "Charge is a property of matter, measured in coulombs. It comes in multiples of the elementary charge e = 1.60 × 10⁻¹⁹ C, the magnitude carried by a single proton or electron. One coulomb is therefore an enormous number of elementary charges, about 6.2 × 10¹⁸ of them, which is why everyday circuits can be described with smooth continuous quantities rather than by counting particles.",
        "Current is the rate at which charge passes a point: I = Q/t, in amperes, where one ampere is one coulomb per second. In a metal the moving charges are free electrons, which drift very slowly, at fractions of a millimetre per second. The lamp lights immediately not because electrons race from the switch to the filament but because the electric field is established through the whole circuit almost instantly and sets every charge in the loop moving at once.",
        "By historical convention, current is drawn flowing from the positive terminal to the negative terminal of a supply, which is opposite to the actual direction of electron drift in a metal. This convention predates the discovery of the electron and is now universal; every circuit equation is written in terms of it. Keeping it consistently causes no error, because the physics depends on the direction of charge transport, and negative charge moving one way is equivalent to positive charge moving the other.",
      ],
      callout: "I = Q/t, with 1 A = 1 C s⁻¹ and e = 1.60 × 10⁻¹⁹ C",
    },
    {
      id: "elec-visual-circuit",
      type: "visual",
      eyebrow: "Follow the loop",
      title: "Charge is conserved around the loop; energy is spent within it",
      introduction:
        "Trace a single charge carrier once around a simple circuit containing a cell and two components.",
      visual: "circuit",
      caption:
        "The carrier gains energy passing through the cell and gives it up in the components, returning to its starting point with the same charge but no surplus energy. Nothing is used up except energy, which is why the current leaving a lamp equals the current entering it.",
    },
    {
      id: "elec-ohm",
      type: "concept",
      eyebrow: "Put it in symbols",
      title: "Potential difference is energy per coulomb, and resistance is the price of the journey",
      paragraphs: [
        "Potential difference between two points is the energy transferred from electrical form to some other form per unit charge passing between them: V = W/Q, measured in volts, where one volt is one joule per coulomb. Electromotive force is the same kind of quantity measured the other way round, the energy given to each coulomb by a source as it drives charge round the circuit. A 1.5 V cell supplies 1.5 J of energy to every coulomb it pushes through the external circuit.",
        "Resistance is defined as R = V/I, in ohms, where one ohm is one volt per ampere. A component is described as ohmic if this ratio stays constant as the current varies, which is Ohm's law and holds for a metallic conductor at constant temperature. Many components are deliberately non-ohmic: a filament lamp heats as the current rises and its resistance climbs, while a diode conducts freely in one direction and hardly at all in the other. For these, a graph of current against potential difference is a curve rather than a straight line.",
        "For a uniform conductor, resistance depends on both material and shape: R = ρL/A, where ρ is the resistivity in Ω m, L the length and A the cross-sectional area. A longer path offers more opportunity for collisions and a wider path offers more parallel routes. The parallel with fluid flow is exact in spirit: pushing liquid through a tube gets harder as the tube lengthens and dramatically easier as it widens, with potential difference playing the role of pressure difference and current the role of volume flow rate.",
      ],
      callout: "V = W/Q; R = V/I; R = ρL/A",
    },
    {
      id: "elec-worked-ohm",
      type: "worked",
      eyebrow: "Worked example",
      title: "Get resistance, power and charge from one measurement",
      scenario:
        "A torch bulb draws a steady current of 0.30 A when connected across a 3.0 V supply, and is left on for 5.0 minutes. Find its resistance, the power it dissipates, the energy it transfers, and the charge that passes through it.",
      steps: [
        {
          label: "Apply the definition of resistance",
          decision:
            "Resistance is the ratio of potential difference to current, whether or not the component is ohmic.",
          working: "R = V/I = 3.0 ÷ 0.30 = 10 Ω",
        },
        {
          label: "Find the power",
          decision:
            "Power is energy per second, and each coulomb carries V joules while I coulombs pass each second.",
          working: "P = VI = 3.0 × 0.30 = 0.90 W",
        },
        {
          label: "Convert the running time and find the energy",
          decision:
            "Seconds are needed because a watt is a joule per second.",
          working: "t = 5.0 × 60 = 300 s, so E = Pt = 0.90 × 300 = 270 J",
        },
        {
          label: "Find the charge delivered",
          decision:
            "Current is charge per second, so charge is current multiplied by time.",
          working: "Q = It = 0.30 × 300 = 90 C",
        },
      ],
      answer:
        "The bulb has a resistance of 10 Ω, dissipates 0.90 W, transfers 270 J in five minutes, and passes 90 C of charge.",
      plausibility:
        "Checking consistently, 90 C each carrying 3.0 J gives 270 J, which matches the energy found from power and time. Any two routes to the same answer should agree.",
    },
    {
      id: "elec-check-resistivity",
      type: "check",
      eyebrow: "Your turn",
      title: "Reshape a wire and predict its resistance",
      prompt:
        "A copper wire is replaced by another wire of the same copper, but twice as long and with half the diameter. By what factor does the resistance change?",
      options: [
        "It increases by a factor of 8",
        "It increases by a factor of 4",
        "It increases by a factor of 2",
        "It increases by a factor of 16",
      ],
      correctIndex: 0,
      explanation:
        "Resistance follows R = ρL/A. Doubling the length doubles R. Halving the diameter quarters the cross-sectional area, since area depends on the square of the diameter, and dividing A by 4 multiplies R by 4. The two effects combine to give 2 × 4 = 8.",
      misconception:
        "Treating the area as proportional to diameter rather than to its square, which gives a factor of 4. Cross-section is a two-dimensional quantity, so any change in a linear dimension enters squared.",
    },
    {
      id: "elec-networks",
      type: "concept",
      eyebrow: "Add the second layer",
      title: "The combination rules follow from conservation of charge and energy",
      paragraphs: [
        "In a series arrangement there is only one path, so every charge that passes through the first component must pass through the next: the current is the same everywhere. Energy is conserved, so the energy each coulomb receives from the supply equals the total it gives up along the way, and the potential differences add: V_total = V₁ + V₂ + … Dividing through by the common current gives R_total = R₁ + R₂ + …, so a series arrangement always raises the resistance. The largest resistance takes the largest share of the voltage, which is the principle of the potential divider.",
        "In a parallel arrangement the components share the same two junctions, so each experiences the same potential difference. Charge is conserved at a junction, so the current entering divides and the branch currents add back to the total: I_total = I₁ + I₂ + … Dividing through by the common voltage gives 1/R_total = 1/R₁ + 1/R₂ + … Because a new branch is another route for charge, the combined resistance of a parallel group is always smaller than the smallest single resistance in it.",
        "The two headline rules are worth committing to memory in words. Current divides in parallel, in inverse proportion to the branch resistances, so the easiest branch takes the most current. Voltage divides in series, in direct proportion to the resistances. Confusing the two is the single most common source of error in circuit analysis, and the cure is always to ask first which quantity the arrangement forces to be common.",
      ],
      callout:
        "Series: I common, R_total = R₁ + R₂. Parallel: V common, 1/R_total = 1/R₁ + 1/R₂.",
    },
    {
      id: "elec-worked-network",
      type: "worked",
      eyebrow: "Worked example",
      title: "Analyse a mixed series and parallel network",
      scenario:
        "A supply of 18.0 V with negligible internal resistance drives a 6.0 Ω resistor in series with a parallel pair made of a 4.0 Ω and a 12.0 Ω resistor. Find the total resistance, the supply current, the potential difference across each part, and the current in each parallel branch.",
      steps: [
        {
          label: "Collapse the parallel pair first",
          decision:
            "The innermost grouping must be reduced before the network can be treated as a simple series chain.",
          working:
            "1/R_p = 1/4.0 + 1/12.0 = 3/12 + 1/12 = 4/12, so R_p = 3.0 Ω",
        },
        {
          label: "Add the series resistances",
          decision:
            "The 6.0 Ω resistor and the equivalent 3.0 Ω block now carry the same current.",
          working: "R_total = 6.0 + 3.0 = 9.0 Ω",
        },
        {
          label: "Find the supply current",
          decision:
            "Ohm's law applied to the whole circuit gives the current drawn from the source.",
          working: "I = V/R_total = 18.0 ÷ 9.0 = 2.0 A",
        },
        {
          label: "Share the voltage between the series parts",
          decision:
            "Voltage divides in series in proportion to resistance, and the same 2.0 A flows through both.",
          working:
            "V across 6.0 Ω = 2.0 × 6.0 = 12.0 V; V across the parallel block = 2.0 × 3.0 = 6.0 V",
        },
        {
          label: "Split the current between the branches",
          decision:
            "Both branches share the 6.0 V across the block, so each branch obeys Ohm's law separately.",
          working:
            "I through 4.0 Ω = 6.0 ÷ 4.0 = 1.5 A; I through 12.0 Ω = 6.0 ÷ 12.0 = 0.5 A",
        },
      ],
      answer:
        "The network presents 9.0 Ω and draws 2.0 A; 12.0 V appears across the 6.0 Ω resistor and 6.0 V across the parallel block, which carries 1.5 A in the 4.0 Ω branch and 0.5 A in the 12.0 Ω branch.",
      plausibility:
        "The branch currents add back to 2.0 A as charge conservation requires, and the two potential differences add to the 18.0 V supplied, as energy conservation requires. The lower-resistance branch takes three times the current, matching the three-to-one resistance ratio inverted.",
    },
    {
      id: "elec-check-parallel",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Reduce a described parallel network",
      prompt:
        "Three resistors of 2.0 Ω, 3.0 Ω and 6.0 Ω are all connected between the same two terminals, across which a 6.0 V supply is maintained. What is the combined resistance and the total current drawn?",
      options: [
        "1.0 Ω and 6.0 A",
        "11.0 Ω and 0.55 A",
        "3.7 Ω and 1.6 A",
        "0.50 Ω and 12 A",
      ],
      correctIndex: 0,
      explanation:
        "For parallel resistors, 1/R_total = 1/2.0 + 1/3.0 + 1/6.0 = 3/6 + 2/6 + 1/6 = 1, so R_total = 1.0 Ω. Then I = V/R = 6.0 ÷ 1.0 = 6.0 A. Checking branch by branch, the currents are 3.0 A, 2.0 A and 1.0 A, which sum to 6.0 A as required.",
      misconception:
        "Adding the resistances as though they were in series, which gives 11.0 Ω. Adding a parallel branch adds another route for charge and must always lower the total resistance below the smallest branch value, here below 2.0 Ω.",
    },
    {
      id: "elec-check-graph",
      type: "check",
      eyebrow: "Shift representation",
      title: "Interpret a curved current–voltage graph",
      prompt:
        "For a filament lamp, a graph of current against potential difference starts as a straight line through the origin but becomes progressively shallower as the potential difference increases. What does this shape tell you?",
      options: [
        "The resistance of the filament increases as it heats, because V/I grows as the current rises",
        "The resistance of the filament decreases as it heats, because the gradient of the curve falls",
        "The lamp behaves as a source of electromotive force at high potential difference",
        "The measurements are unreliable, since resistance is defined only for straight-line graphs",
      ],
      correctIndex: 0,
      explanation:
        "Resistance at any point is V/I, the reciprocal of the gradient of a chord drawn from the origin on this graph. A shallower curve at high voltage means the current has grown less than proportionally, so V/I is larger and resistance has risen. Physically, the hot filament's lattice ions vibrate more strongly and impede electron flow.",
      misconception:
        "Reading the falling gradient of an I–V graph as falling resistance. On a current-against-voltage plot the gradient is 1/R, so a falling gradient means a rising resistance. The relationship inverts if the axes are swapped, which is exactly why the axes must be checked first.",
    },
    {
      id: "elec-power",
      type: "concept",
      eyebrow: "Count the joules",
      title: "Power has three forms, and each suits a different constraint",
      paragraphs: [
        "Electrical power is the rate of energy transfer. Since each coulomb delivers V joules and I coulombs pass each second, P = VI, in watts. Substituting Ohm's law gives two further forms: P = I²R when the current is the quantity held common, and P = V²/R when the voltage is common. All three are the same statement, but choosing the wrong one is a frequent mistake. In a series chain the current is shared, so P = I²R shows that the largest resistance dissipates the most power; in a parallel group the voltage is shared, so P = V²/R shows the opposite, that the smallest resistance dissipates the most.",
        "Energy transferred is simply E = Pt, so a component's total consumption depends on how long it runs as well as how hard it works. Domestic supply is billed in kilowatt-hours rather than joules, because the joule is inconveniently small for household quantities. One kilowatt-hour is the energy delivered by one kilowatt for one hour, that is 1000 W × 3600 s = 3.6 × 10⁶ J. A 2.0 kW heater run for three hours therefore consumes 6.0 kWh, which is 2.16 × 10⁷ J, while a 10 W lamp would need six hundred hours to use the same amount.",
        "Capacitance describes a system that stores charge rather than conducting it. Two conductors separated by an insulator accumulate equal and opposite charge when a potential difference is applied, and the capacitance is C = Q/V, in farads, where one farad is one coulomb per volt. A farad is very large, so practical values run from picofarads to microfarads. Capacitance grows with the area of the conductors and falls with the separation between them, so a very thin insulating layer between two large conducting surfaces gives a surprisingly large capacitance.",
      ],
      callout: "P = VI = I²R = V²/R; E = Pt; C = Q/V",
    },
    {
      id: "elec-worked-membrane",
      type: "worked",
      eyebrow: "Worked example",
      title: "Charge the capacitor formed by a cell membrane",
      scenario:
        "A cell membrane is a thin insulating lipid bilayer between two conducting salt solutions, with a capacitance of about 1.0 × 10⁻² F m⁻² of membrane. A small cell has a membrane area of 1.0 × 10⁻⁹ m² and a resting potential of 70 mV across it. Find the membrane capacitance, the stored charge, and the number of singly charged ions that corresponds to. Take e = 1.60 × 10⁻¹⁹ C.",
      steps: [
        {
          label: "Scale the capacitance to this cell",
          decision:
            "Capacitance per unit area multiplied by the area gives the capacitance of the whole membrane.",
          working:
            "C = 1.0 × 10⁻² × 1.0 × 10⁻⁹ = 1.0 × 10⁻¹¹ F, that is 10 pF",
        },
        {
          label: "Convert the potential difference",
          decision:
            "The defining relationship C = Q/V requires volts, not millivolts.",
          working: "V = 70 mV = 7.0 × 10⁻² V",
        },
        {
          label: "Find the separated charge",
          decision:
            "Rearranging C = Q/V gives the charge held on each side of the bilayer.",
          working:
            "Q = CV = 1.0 × 10⁻¹¹ × 7.0 × 10⁻² = 7.0 × 10⁻¹³ C",
        },
        {
          label: "Convert charge into a number of ions",
          decision:
            "Each singly charged ion carries one elementary charge, so divide by e.",
          working: "N = Q/e = 7.0 × 10⁻¹³ ÷ 1.60 × 10⁻¹⁹ = 4.4 × 10⁶ ions",
        },
      ],
      answer:
        "The membrane has a capacitance of about 10 pF and holds 7.0 × 10⁻¹³ C, corresponding to roughly 4.4 million singly charged ions displaced across it.",
      plausibility:
        "Four million ions sounds large, but a cell contains far more ions than that, so the bulk concentrations inside and outside barely change when the membrane charges or discharges. That is exactly why an action potential can fire repeatedly without exhausting the gradients.",
    },
    {
      id: "elec-check-power",
      type: "check",
      eyebrow: "Choose the right form",
      title: "Decide which series resistor runs hotter",
      prompt:
        "A 4.0 Ω resistor and an 8.0 Ω resistor are connected in series across a battery. Which dissipates more power, and by what factor?",
      options: [
        "The 8.0 Ω resistor, by a factor of 2, because the current is common and P = I²R",
        "The 4.0 Ω resistor, by a factor of 2, because the smaller resistance lets more current through",
        "The 4.0 Ω resistor, by a factor of 2, because P = V²/R and both share the battery voltage",
        "They dissipate equally, because they are carrying the same current",
      ],
      correctIndex: 0,
      explanation:
        "In series the current through both is identical, so the correct form is P = I²R and power is directly proportional to resistance. The 8.0 Ω resistor therefore dissipates twice the power of the 4.0 Ω one, and correspondingly takes twice the share of the battery voltage.",
      misconception:
        "Reaching for P = V²/R and assuming both resistors see the full battery voltage. That form applies when the voltage is the common quantity, which is true in parallel and false in series. Always identify the shared quantity before choosing between P = I²R and P = V²/R.",
    },
    {
      id: "elec-check-membrane",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Predict the effect of a permeability change",
      prompt:
        "A neuron at rest sits at about −70 mV inside relative to outside, maintained by ion pumps that keep sodium concentrated outside and potassium inside, together with a membrane that at rest is far more permeable to K⁺ than to Na⁺. A stimulus suddenly opens many sodium channels. What happens to the membrane potential immediately, and why?",
      options: [
        "It rises toward zero and beyond, because Na⁺ now flows down its electrochemical gradient into the cell and adds positive charge inside",
        "It becomes more negative, because opening more channels lets additional positive charge escape from the cell",
        "It is unchanged, because the pumps continue to hold the ion concentrations constant",
        "It rises toward zero only after the concentration gradients have been fully equalised by diffusion",
      ],
      correctIndex: 0,
      explanation:
        "The resting potential exists because the membrane is selectively permeable: K⁺ leaks out down its gradient, leaving the interior negative. Opening sodium channels changes which ion the membrane favours. Sodium is both more concentrated outside and attracted by the negative interior, so it rushes in and the inside becomes less negative and then positive. This is depolarisation.",
      misconception:
        "Believing the potential depends on the concentration gradients alone. The gradients are a stored resource; it is the membrane's selective permeability that decides which gradient is expressed as a voltage at any instant, and only a tiny fraction of the ions needs to move to swing the potential.",
    },
    {
      id: "elec-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Ask what is shared before you calculate",
      points: [
        "Current is charge per second, I = Q/t, and conventional current runs from positive to negative.",
        "Potential difference is energy per coulomb, V = W/Q, while electromotive force is the energy supplied per coulomb.",
        "Ohm's law V = IR holds only for ohmic components; a filament lamp and a diode are deliberately non-ohmic.",
        "R = ρL/A means resistance rises with length and falls with cross-sectional area, mirroring flow through a tube.",
        "Series arrangements share current and add resistances; parallel arrangements share voltage and add reciprocals.",
        "The cell membrane is a thin capacitor whose potential is set by selective permeability, and depolarisation is a change in which ion the membrane lets through.",
      ],
      transferRule:
        "Identify the quantity that the arrangement forces to be common — current in series, voltage in parallel — and every combination rule, voltage division and power formula follows from it without memorisation.",
      nextLessonId: "lesson.biology.cell_structure",
    },
  ],
};

export const physicsWavesFieldsLessons: Lesson[] = [
  thermalPhysics,
  wavesAndSound,
  lightAndSpectroscopy,
  chargeAndCircuits,
];
