import type { Lesson } from "@/lib/lesson-types";

const toolkitUnits: Lesson = {
  id: "lesson.toolkit.measurement_units",
  slug: "measurement-and-units",
  number: "0.1",
  stageId: "stage.science_toolkit",
  discipline: "toolkit",
  title: "Measurement, quantities, and units",
  summary:
    "Learn why a number needs a scientific meaning and how units reveal the kind of quantity being measured.",
  estimatedMinutes: 12,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish a physical quantity from its numerical value and unit.",
    "Convert between common metric prefixes without changing the quantity.",
    "Use units to check whether a calculation can be physically meaningful.",
    "Explain how derived units describe relationships between quantities.",
    "Report a measurement without implying unsupported precision.",
  ],
  prerequisiteLessonIds: [],
  blocks: [
    {
      id: "units-purpose",
      type: "concept",
      eyebrow: "Start with meaning",
      title: "A number alone is not a measurement",
      paragraphs: [
        "Imagine being told that a table is “2 long.” The number sounds definite, but the statement is incomplete. Two metres, two centimetres, and two miles describe radically different objects.",
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
      id: "units-derived",
      type: "concept",
      eyebrow: "Build relationships",
      title: "Derived units tell a scientific story",
      paragraphs: [
        "Some quantities are measured directly, while others describe a relationship. Speed compares distance with time, so its unit is metres per second. Density compares mass with volume, so it might be grams per cubic centimetre. The unit is not an afterthought: it records how the quantities were combined.",
        "Units can be multiplied, divided, and cancelled using the same rules as algebraic symbols. This gives a powerful error check. Adding a mass to a time is meaningless, and an expression intended to calculate an area must finish with a squared length unit.",
      ],
      callout: "density = mass / volume → g cm⁻³",
    },
    {
      id: "units-density-worked",
      type: "worked",
      eyebrow: "Second worked example",
      title: "Let the units define density",
      scenario:
        "A mineral sample has a mass of 120.0 g and occupies 50.0 cm³. Calculate its density and interpret the result.",
      steps: [
        {
          label: "Name the relationship",
          decision: "Density compares how much mass is contained in each unit of volume.",
          working: "density = mass / volume",
        },
        {
          label: "Substitute values with units",
          decision: "Keeping the units visible makes the required compound unit explicit.",
          working: "density = 120.0 g / 50.0 cm³",
        },
        {
          label: "Calculate and interpret",
          decision: "Divide the mass by the number of cubic centimetres.",
          working: "density = 2.40 g cm⁻³",
        },
      ],
      answer:
        "The density is 2.40 g cm⁻³: every cubic centimetre has a mass of 2.40 g.",
      plausibility:
        "Fifty cubic centimetres at 2.40 g per cubic centimetre reconstructs the original 120.0 g mass.",
    },
    {
      id: "units-area-check",
      type: "check",
      eyebrow: "Scale in more than one dimension",
      title: "Convert an area rather than a length",
      prompt: "A square measures 1 m by 1 m. What is its area in cm²?",
      options: ["100 cm²", "1,000 cm²", "10,000 cm²", "100,000 cm²"],
      correctIndex: 2,
      explanation:
        "Each side is 100 cm, so the area is 100 cm × 100 cm = 10,000 cm². The length conversion factor is applied in both dimensions.",
      misconception:
        "Multiplying 1 m² by 100 only converts one dimension. Area contains two length dimensions, so the factor is squared.",
    },
    {
      id: "units-precision",
      type: "concept",
      eyebrow: "Respect the instrument",
      title: "Measurements are estimates, not exact declarations",
      paragraphs: [
        "Every measuring instrument has limited resolution. A ruler marked in millimetres cannot justify a length reported to six decimal places. Extra digits produced by a calculator do not create extra information.",
        "Repeated measurements help reveal random variation. A useful report gives a central value, an appropriate unit, and an indication of spread or uncertainty. Precision describes how closely repeated values agree; accuracy describes how closely they approach the accepted value. A set can be precise but systematically inaccurate.",
      ],
      callout: "reported value = best estimate ± uncertainty",
    },
    {
      id: "units-uncertainty-worked",
      type: "worked",
      eyebrow: "Reason with repeated measurements",
      title: "Summarise variation without hiding it",
      scenario:
        "Three measurements of a leaf are 12.3 cm, 12.5 cm, and 12.4 cm. Report the mean and use half the range as a simple uncertainty estimate.",
      steps: [
        {
          label: "Find the central value",
          decision: "The mean uses all three measurements.",
          working: "mean = (12.3 + 12.5 + 12.4) cm / 3 = 12.4 cm",
        },
        {
          label: "Find the observed range",
          decision: "Subtract the smallest reading from the largest.",
          working: "range = 12.5 cm − 12.3 cm = 0.2 cm",
        },
        {
          label: "Estimate uncertainty",
          decision: "Half the range describes the spread on either side of the mean.",
          working: "half-range = 0.2 cm / 2 = 0.1 cm",
        },
      ],
      answer: "Using this simple method, report the leaf length as 12.4 ± 0.1 cm.",
      plausibility:
        "All three readings lie inside the reported interval from 12.3 cm to 12.5 cm.",
    },
    {
      id: "units-dimensions-check",
      type: "check",
      eyebrow: "Dimensional check",
      title: "Reject an impossible setup",
      prompt:
        "Which calculation has units that could represent a speed for an object travelling 180 m in 12 s?",
      options: [
        "180 m × 12 s",
        "180 m + 12 s",
        "12 s / 180 m",
        "180 m / 12 s",
      ],
      correctIndex: 3,
      explanation:
        "Speed is distance per time, so metres must be divided by seconds. The result is 15 m s⁻¹.",
      misconception:
        "A familiar-looking arithmetic operation is not sufficient; the compound unit must match the requested quantity.",
    },
    {
      id: "units-reporting-check",
      type: "check",
      eyebrow: "Report only supported precision",
      title: "Match the result to the measurement",
      prompt:
        "A ruler with millimetre divisions gives a length of 12.4 cm. Which report is most defensible before a separate uncertainty analysis?",
      options: ["12 cm", "12.4 cm", "12.400000 cm", "Exactly 12.4 cm"],
      correctIndex: 1,
      explanation:
        "The reading supports the nearest millimetre, which is 0.1 cm. Writing extra zeroes would imply finer resolution, while calling it exact would hide measurement uncertainty.",
      misconception:
        "Calculator digits and written zeroes do not create precision that the measuring instrument did not supply.",
    },
    {
      id: "units-transfer-check",
      type: "check",
      eyebrow: "Transfer the unit logic",
      title: "Use a compound unit in context",
      prompt:
        "A liquid medicine contains 5 mg of drug per mL. How much drug is present in 4 mL?",
      options: ["1.25 mg", "9 mg", "20 mg", "25 mg"],
      correctIndex: 2,
      explanation:
        "Multiplying 5 mg mL⁻¹ by 4 mL cancels millilitres and leaves 20 mg.",
      misconception:
        "Dividing would leave an unwanted per-millilitre factor. Let the required final unit determine the operation.",
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
        "Derived units record how quantities such as mass, volume, distance, and time were related.",
        "Reported precision must reflect the instrument and observed variation.",
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
  estimatedMinutes: 12,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret positive and negative powers of ten.",
    "Write values in standard scientific notation.",
    "Estimate the scale of a calculation before computing it.",
    "Calculate with powers of ten while keeping coefficients in standard form.",
    "Use orders of magnitude to compare scientific quantities.",
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
      id: "powers-standard-form",
      type: "concept",
      eyebrow: "Keep one shared convention",
      title: "Standard form makes quantities immediately comparable",
      paragraphs: [
        "In standard scientific notation the coefficient is at least 1 but less than 10. The notation 1 ≤ coefficient < 10 means “greater than or equal to 1, and strictly less than 10.” Both 0.42 × 10⁶ and 42 × 10⁴ describe 420,000, but neither is in standard form. Writing 4.2 × 10⁵ exposes the scale consistently.",
        "The exponent gives an order-of-magnitude guide, while the coefficient locates the value within that scale. Two quantities with the same exponent can be compared using their coefficients. If their exponents differ, first express them using a common power of ten or reason from the exponent gap.",
      ],
      callout: "standard form: 1 ≤ coefficient < 10",
    },
    {
      id: "powers-multiply-worked",
      type: "worked",
      eyebrow: "Calculate in parts",
      title: "Multiply coefficients and powers separately",
      scenario:
        "A rectangular microscopic feature has side lengths 3.0 × 10⁻⁴ m and 2.0 × 10⁻³ m. Calculate its area.",
      steps: [
        {
          label: "Multiply coefficients",
          decision: "Treat the ordinary numerical factors first.",
          working: "3.0 × 2.0 = 6.0",
        },
        {
          label: "Combine powers",
          decision: "Multiplying equal bases means adding exponents.",
          working: "10⁻⁴ × 10⁻³ = 10⁻⁷",
        },
        {
          label: "Attach the area unit",
          decision: "Metres multiplied by metres becomes square metres.",
          working: "area = 6.0 × 10⁻⁷ m²",
        },
      ],
      answer: "The area is 6.0 × 10⁻⁷ m².",
      plausibility:
        "Both sides are much smaller than one metre, so their product should be a very small fraction of a square metre.",
    },
    {
      id: "powers-order-check",
      type: "check",
      eyebrow: "Compare scale",
      title: "Estimate before calculating",
      prompt:
        "Quantity A is 8 × 10⁻⁵ and quantity B is 2 × 10⁻⁷. Approximately how many times larger is A?",
      options: ["4 times", "40 times", "400 times", "4,000 times"],
      correctIndex: 2,
      explanation:
        "(8 / 2) × 10⁽⁻⁵−⁽⁻⁷⁾⁾ = 4 × 10² = 400. The two-exponent gap contributes a factor of 100.",
      misconception:
        "Comparing only the coefficients misses the much larger effect of the exponent difference.",
    },
    {
      id: "powers-estimation",
      type: "concept",
      eyebrow: "Use scale as an error detector",
      title: "An estimate protects you from calculator mistakes",
      paragraphs: [
        "Before entering exact values, round each coefficient to one convenient digit and predict the exponent. If 2.9 × 10⁶ is divided by roughly 6 × 10², the result should be near 0.5 × 10⁴, or 5 × 10³. A calculator answer near 500,000 would signal an exponent-entry error.",
        "Order-of-magnitude reasoning is deliberately approximate. It helps decide whether a result is physically plausible, compare options quickly, and identify which quantities dominate a relationship. It does not replace a precise calculation when precision matters.",
      ],
      callout: "estimate scale first → calculate → compare",
    },
    {
      id: "powers-division-worked",
      type: "worked",
      eyebrow: "Divide across scales",
      title: "Normalise the result at the end",
      scenario:
        "A culture contains 7.2 × 10⁸ cells distributed evenly through 3.0 × 10² mL. Find the number of cells per millilitre.",
      steps: [
        {
          label: "Divide coefficients",
          decision: "The cell count is divided by the volume.",
          working: "7.2 / 3.0 = 2.4",
        },
        {
          label: "Subtract exponents",
          decision: "Dividing powers of ten means subtracting the denominator exponent.",
          working: "10⁸ / 10² = 10⁶",
        },
        {
          label: "Interpret the compound unit",
          decision: "Cells divided by millilitres gives cells per millilitre.",
          working: "2.4 × 10⁶ cells mL⁻¹",
        },
      ],
      answer: "The concentration is 2.4 × 10⁶ cells per millilitre.",
      plausibility:
        "A few hundred millilitres dividing several hundred million cells should leave a few million cells in each millilitre.",
    },
    {
      id: "powers-operation-check",
      type: "check",
      eyebrow: "Exponent rules",
      title: "Combine a product",
      prompt: "What is (4 × 10³)(5 × 10⁻⁶) in standard form?",
      options: ["2 × 10⁻³", "2 × 10⁻²", "20 × 10⁻⁹", "9 × 10⁻³"],
      correctIndex: 1,
      explanation:
        "The coefficients give 20 and the powers give 10⁻³. Normalising 20 × 10⁻³ produces 2 × 10⁻².",
      misconception:
        "After combining coefficients and exponents, the coefficient may need to be shifted back into the standard range.",
    },
    {
      id: "powers-transfer-check",
      type: "check",
      eyebrow: "Transfer to a physical chain",
      title: "Accumulate a microscopic length",
      prompt:
        "Each cell is approximately 4 × 10⁻⁶ m wide. What length would 250 cells span if placed edge to edge?",
      options: ["1 × 10⁻⁸ m", "1 × 10⁻⁶ m", "1 × 10⁻³ m", "1 × 10⁻¹ m"],
      correctIndex: 2,
      explanation:
        "250 = 2.5 × 10², so the total is (2.5 × 10²)(4 × 10⁻⁶ m) = 10 × 10⁻⁴ m = 1 × 10⁻³ m.",
      misconception:
        "Adding exponents is appropriate after expressing both factors as powers of ten; the coefficient must still be normalised.",
    },
    {
      id: "powers-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Exponents carry scale",
      points: [
        "Scientific notation uses a coefficient that is at least 1 and less than 10, together with a power of ten.",
        "Positive exponents describe large scales; negative exponents describe small positive scales.",
        "When multiplying powers of ten, add exponents; when dividing, subtract them.",
        "Standard form keeps the coefficient at least 1 and less than 10 so scales can be compared consistently.",
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
  estimatedMinutes: 15,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret a ratio as a comparison using a defined denominator.",
    "Recognise direct and inverse proportional relationships.",
    "Build and use a rate with meaningful units.",
    "Distinguish a ratio, a fraction, a percentage, and a percentage change.",
    "Use proportional reasoning only when its assumptions are justified.",
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
      options: ["It doubles", "It becomes zero", "It stays constant", "It halves"],
      correctIndex: 3,
      explanation:
        "Concentration is amount divided by volume. With amount fixed, doubling the denominator halves the concentration.",
      misconception:
        "The total amount of medicine stays constant, but concentration describes amount per unit volume.",
    },
    {
      id: "ratios-unit-rate",
      type: "concept",
      eyebrow: "Choose a useful comparison",
      title: "A unit rate answers the question for one unit",
      paragraphs: [
        "A ratio such as 300 km in 5 h can be simplified to 60 km in 1 h. This unit rate is often easier to interpret and compare. The denominator must remain visible: 60 km h⁻¹ describes motion, while the bare number 60 does not.",
        "Some ratios are dimensionless because identical units cancel, such as 2 g divided by 10 g. Others retain compound units, such as mass per volume. Before calculating, say what one unit of the denominator represents. That sentence often reveals whether the comparison has been set up in the right order.",
      ],
      callout: "unit rate = amount corresponding to 1 denominator unit",
    },
    {
      id: "ratios-dilution-worked",
      type: "worked",
      eyebrow: "Follow what stays fixed",
      title: "Dilution changes concentration, not solute amount",
      scenario:
        "A solution contains 6.0 g of solute in 200 mL. Water is added until the total volume is 500 mL. Find the final concentration in g mL⁻¹.",
      steps: [
        {
          label: "Identify the conserved quantity",
          decision: "Adding water changes volume but does not add or remove solute.",
          working: "solute mass remains 6.0 g",
        },
        {
          label: "Use the final denominator",
          decision: "Final concentration uses the final total volume.",
          working: "concentration = 6.0 g / 500 mL",
        },
        {
          label: "Calculate and compare",
          decision: "A larger volume with fixed solute must give a smaller concentration.",
          working: "concentration = 0.012 g mL⁻¹",
        },
      ],
      answer: "The final concentration is 0.012 g mL⁻¹.",
      plausibility:
        "The original concentration was 0.030 g mL⁻¹, so increasing volume by a factor of 2.5 reduces concentration by the same factor.",
    },
    {
      id: "ratios-direct-check",
      type: "check",
      eyebrow: "Test direct proportion",
      title: "Keep the unit rate constant",
      prompt:
        "A pump transfers 18 L in 3 min at a constant rate. How much does it transfer in 8 min?",
      options: ["23 L", "42 L", "48 L", "144 L"],
      correctIndex: 2,
      explanation:
        "The unit rate is 18 L / 3 min = 6 L min⁻¹. At the same rate, 8 min gives 6 × 8 = 48 L.",
      misconception:
        "Adding the same numerical difference to both quantities does not preserve a proportional relationship; their ratio must remain constant.",
    },
    {
      id: "ratios-percentages",
      type: "concept",
      eyebrow: "Name the reference value",
      title: "A percentage is always relative to a chosen whole",
      paragraphs: [
        "A fraction can compare a part with a whole or express a more general ratio. When it represents part divided by the chosen whole, multiplying by 100 expresses the same relationship as a percentage. The denominator defines the reference. Twenty is 20% of 100 but 40% of 50.",
        "Percentage change uses the original value as its denominator: change divided by original, multiplied by 100%. A rise from 40 to 50 is a 25% increase because the increase of 10 is one quarter of the original 40. Reversing from 50 to 40 is a 20% decrease, so percentage increases and decreases are not automatically symmetric.",
      ],
      callout: "percentage change = (new − original) / original × 100%",
    },
    {
      id: "ratios-dose-worked",
      type: "worked",
      eyebrow: "Scale a rate to an individual",
      title: "Use the denominator as an instruction",
      scenario:
        "A worked training example specifies 8.00 mg of a substance per kilogram of body mass. What amount corresponds to a body mass of 62.0 kg?",
      steps: [
        {
          label: "Interpret the rate",
          decision: "Each kilogram corresponds to 8 mg.",
          working: "rate = 8.00 mg kg⁻¹",
        },
        {
          label: "Multiply by the known denominator quantity",
          decision: "Kilograms cancel when the rate is multiplied by body mass.",
          working: "amount = 8.00 mg kg⁻¹ × 62.0 kg",
        },
        {
          label: "Calculate with the surviving unit",
          decision: "The result is an amount measured in milligrams.",
          working: "amount = 496 mg",
        },
      ],
      answer: "The proportional amount is 496 mg.",
      plausibility:
        "Sixty kilograms at 8 mg per kilogram would give 480 mg, so 496 mg for 62 kg is consistent.",
    },
    {
      id: "ratios-percent-check",
      type: "check",
      eyebrow: "Track the reference",
      title: "Calculate a percentage change",
      prompt: "A measured value rises from 80 units to 92 units. What is the percentage increase?",
      options: ["12%", "15%", "20%", "92%"],
      correctIndex: 1,
      explanation:
        "The increase is 12 units. Relative to the original 80, 12 / 80 × 100% = 15%.",
      misconception:
        "The numerical increase is 12, but a percentage change divides that change by the original reference value.",
    },
    {
      id: "ratios-model-limits",
      type: "concept",
      eyebrow: "Check the assumption",
      title: "Not every relationship remains proportional",
      paragraphs: [
        "A direct proportion must pass through zero and preserve a constant output-to-input ratio. A taxi fare with a fixed starting charge is not directly proportional to distance, even if part of the fare increases at a constant rate. Doubling distance does not double the fixed charge.",
        "Scientific relationships also have domains where a simple model works. A spring may stretch proportionally to force only before it is permanently deformed. A biological response may level off because another resource becomes limiting. Proportional reasoning is a model to test, not a rule to apply automatically.",
      ],
      callout: "predict → test whether the ratio is constant → state the valid range",
    },
    {
      id: "ratios-inverse-check",
      type: "check",
      eyebrow: "Recognise inverse structure",
      title: "Share a fixed total",
      prompt:
        "A fixed 24-hour task is divided equally among workers who operate at the same rate. In the ideal model, what happens to completion time when the workforce doubles?",
      options: ["It doubles", "It stays constant", "It falls by two hours", "It halves"],
      correctIndex: 3,
      explanation:
        "With a fixed total amount of work, workers × time is constant in the ideal model. Doubling workers therefore halves time.",
      misconception:
        "Inverse proportion produces a multiplicative change, not a fixed subtraction. Real teams may depart from the ideal because coordination also takes time.",
    },
    {
      id: "ratios-transfer-check",
      type: "check",
      eyebrow: "Transfer the comparison",
      title: "Reason from density",
      prompt:
        "Two solid samples have the same volume. Sample X has twice the density of sample Y. How do their masses compare?",
      options: [
        "X has half the mass",
        "They have equal mass",
        "X has twice the mass",
        "There is not enough information",
      ],
      correctIndex: 2,
      explanation:
        "Mass = density × volume. With volume fixed, mass is directly proportional to density, so doubling density doubles mass.",
      misconception:
        "Density is mass per volume. Equal volumes make the density ratio equal to the mass ratio.",
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
        "Percentages and percentage changes only make sense after naming the reference value.",
        "A proportional model must be checked over the range where it is being used.",
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
  estimatedMinutes: 15,
  reviewStatus: "unreviewed",
  objectives: [
    "Read graph axes, scales, units, and plotted values accurately.",
    "Interpret slope as change in vertical quantity per change in horizontal quantity.",
    "Distinguish interpolation from unsupported extrapolation.",
    "Compare average and local rates of change on linear and curved graphs.",
    "Judge whether a graph presentation supports the conclusion drawn from it.",
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
        "The concentration is not changing with time",
        "Time has stopped",
        "The concentration is decreasing rapidly",
      ],
      correctIndex: 1,
      explanation:
        "A horizontal line has zero slope, so concentration has a constant value over that time interval. The value need not be zero.",
      misconception:
        "Zero slope means zero rate of change, not necessarily zero vertical value.",
    },
    {
      id: "graphs-scales",
      type: "concept",
      eyebrow: "Interrogate the axes",
      title: "Scale choices can clarify a pattern or distort its appearance",
      paragraphs: [
        "Axis intervals must be read rather than assumed. Ten small grid spaces might represent ten units or one unit, depending on the labels. A vertical axis that starts far above zero can make a modest difference look dramatic, while a very wide range can hide meaningful variation.",
        "Neither choice is automatically dishonest. A truncated axis may be useful for showing small changes, provided its starting value is visible and the interpretation concerns change rather than absolute size. Responsible reading separates the numerical evidence from the visual impression.",
      ],
      callout: "title → axes → units → intervals → data → interpretation",
    },
    {
      id: "graphs-piecewise-worked",
      type: "worked",
      eyebrow: "Compare intervals",
      title: "One graph can contain different rates",
      scenario:
        "A product concentration rises from 0 to 30 mmol L⁻¹ during the first 5 min, then from 30 to 40 mmol L⁻¹ during the next 5 min. Compare the average rates.",
      steps: [
        {
          label: "Calculate the first slope",
          decision: "Use the change over the first five-minute interval.",
          working: "rate₁ = (30 − 0) mmol L⁻¹ / 5 min = 6 mmol L⁻¹ min⁻¹",
        },
        {
          label: "Calculate the second slope",
          decision: "Use the change from 5 to 10 minutes.",
          working: "rate₂ = (40 − 30) mmol L⁻¹ / 5 min = 2 mmol L⁻¹ min⁻¹",
        },
        {
          label: "Describe the pattern",
          decision: "The concentration still rises, but it rises more slowly.",
          working: "rate₂ is one third of rate₁",
        },
      ],
      answer:
        "The average rate falls from 6 to 2 mmol L⁻¹ min⁻¹, so the graph becomes less steep.",
      plausibility:
        "The same five-minute duration produces a much smaller vertical change in the second interval.",
    },
    {
      id: "graphs-slope-check",
      type: "check",
      eyebrow: "Read steepness",
      title: "Compare slopes without confusing height",
      prompt:
        "Two straight lines use the same axes. Line A rises by 12 units over 3 s; line B rises by 15 units over 5 s. Which has the greater slope?",
      options: ["Line A", "Line B", "They are equal", "Only their final heights matter"],
      correctIndex: 0,
      explanation:
        "Line A has slope 12 / 3 = 4 units s⁻¹, while line B has slope 15 / 5 = 3 units s⁻¹.",
      misconception:
        "A larger total rise does not guarantee a larger rate; the horizontal interval must also be considered.",
    },
    {
      id: "graphs-curves",
      type: "concept",
      eyebrow: "Move beyond straight lines",
      title: "A curve means the rate itself is changing",
      paragraphs: [
        "A straight line has constant slope. On a curve, the average slope between two points can hide how the rate changes inside the interval. A tangent line estimates the local slope at one point; a secant line between two points gives an average slope.",
        "The direction of curvature also carries information. If a rising graph becomes progressively steeper, its rate is increasing. If it continues to rise but flattens, its rate remains positive while decreasing toward zero. Describe value and rate separately.",
      ],
      callout: "average slope: two points · local slope: tangent at one point",
    },
    {
      id: "graphs-table-worked",
      type: "worked",
      eyebrow: "Turn a table into a graph story",
      title: "Calculate successive rates before naming a trend",
      scenario:
        "A gas volume is 0, 18, 30, and 38 mL at 0, 10, 20, and 30 s. Determine how the average production rate changes.",
      steps: [
        {
          label: "Use equal time intervals",
          decision: "Each interval lasts 10 s, so their vertical changes can be compared directly.",
          working: "volume changes: 18 mL, 12 mL, then 8 mL",
        },
        {
          label: "Calculate interval rates",
          decision: "Divide each change by 10 s.",
          working: "rates: 1.8, 1.2, and 0.8 mL s⁻¹",
        },
        {
          label: "Translate into graph shape",
          decision: "The volume rises while successive slopes decrease.",
          working: "an increasing curve that gradually flattens",
        },
      ],
      answer:
        "The gas-production rate decreases from 1.8 to 1.2 to 0.8 mL s⁻¹.",
      plausibility:
        "Every interval adds gas, but each adds less than the interval before it.",
    },
    {
      id: "graphs-interpolation-check",
      type: "check",
      eyebrow: "Stay within the evidence",
      title: "Separate interpolation from extrapolation",
      prompt:
        "Measurements were collected from 10 °C to 50 °C. Which estimate is an interpolation?",
      options: [
        "The value at 0 °C",
        "The value at 35 °C",
        "The value at 75 °C",
        "The value after changing the apparatus",
      ],
      correctIndex: 1,
      explanation:
        "Thirty-five degrees lies inside the measured range. Estimates at 0 °C or 75 °C extend beyond the observed data.",
      misconception:
        "A smooth trend within the measured region does not guarantee that the same model remains valid outside it.",
    },
    {
      id: "graphs-presentation-check",
      type: "check",
      eyebrow: "Read critically",
      title: "Interpret a truncated axis",
      prompt:
        "A bar chart compares values 98 and 100 using a vertical axis from 97 to 101. Which conclusion is most defensible?",
      options: [
        "The second value is several times the first",
        "The chart proves the difference is scientifically important",
        "The first value is almost zero",
        "The values differ by 2 units, and the narrow axis visually magnifies that difference",
      ],
      correctIndex: 3,
      explanation:
        "The numerical difference is 2 units. Starting near 97 makes it look large, but importance requires context such as uncertainty and practical effect.",
      misconception:
        "Bar height on the page is not itself a ratio when the axis does not begin at zero.",
    },
    {
      id: "graphs-transfer-check",
      type: "check",
      eyebrow: "Transfer the graph language",
      title: "Describe value and rate together",
      prompt:
        "A temperature–time curve is still rising but becomes progressively flatter. What does this show?",
      options: [
        "Temperature is rising, but its rate of rise is decreasing",
        "Temperature is constant",
        "Temperature is falling at an increasing rate",
        "Time is slowing down",
      ],
      correctIndex: 0,
      explanation:
        "The positive slope means temperature is increasing; the decreasing steepness means the warming rate is becoming smaller.",
      misconception:
        "A flattening curve does not mean the value is already constant. It means the slope is approaching zero.",
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
        "Curved graphs have changing slope, so average and local rates answer different questions.",
        "Interpolation stays within observed data; extrapolation extends beyond it and needs caution.",
        "Axis choices affect visual emphasis but do not change the underlying numerical differences.",
      ],
      transferRule:
        "State the axis quantities and units aloud before interpreting any trend, slope, plateau, or area.",
      nextLessonId: "lesson.toolkit.logarithms",
    },
  ],
};

const particleModels: Lesson = {
  id: "lesson.chemistry.particle_models",
  slug: "particle-models",
  number: "2.1",
  stageId: "stage.chemistry_foundations",
  discipline: "chemistry",
  title: "Matter and particle models",
  summary:
    "Use particles, spacing, motion, and attraction to explain observable properties of matter.",
  estimatedMinutes: 15,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish macroscopic observations from particle-level explanations.",
    "Use particle arrangement, motion, and attraction to compare solids, liquids, and gases.",
    "Explain diffusion, compression, and gas pressure using a particle model.",
    "Explain changes of state as energy transfers that do not change chemical identity.",
    "Read simple chemical formulas as counts and types of chemical entities.",
    "Recognise the limits of a simple particle diagram.",
  ],
  prerequisiteLessonIds: ["lesson.toolkit.measurement_units"],
  blocks: [
    {
      id: "particles-purpose",
      type: "concept",
      eyebrow: "Two levels of description",
      title: "Chemistry explains what we see using what we cannot see",
      paragraphs: [
        "At the macroscopic level—the scale of balances and thermometers—we observe shape, volume, pressure, colour, or temperature. At the particle level, we explain those observations using atoms, molecules, or ions too small to see directly. “The liquid spreads” is an observation; “its particles move past one another” is a model-based explanation.",
        "A model is deliberately simpler than reality. Diagram circles stand for particles, but real particles are three-dimensional and interact through electrical forces. The model should explain observations and make testable predictions without giving particles bulk properties: one water molecule is not wet, and particles do not expand when a substance expands.",
      ],
      callout: "observation → particle model → testable prediction",
    },
    {
      id: "particles-entity-language",
      type: "concept",
      eyebrow: "Name what is being modelled",
      title: "Atoms, molecules, ions, and formula units are not interchangeable",
      paragraphs: [
        "An element contains one type of atom, represented by a chemical symbol such as C for carbon or O for oxygen. Atoms can join into molecules. A formula such as H₂O describes a water molecule containing two hydrogen atoms and one oxygen atom; the small subscript applies to the symbol immediately before it.",
        "An ion is an atom or bonded group with an electrical charge, such as Na⁺ or Cl⁻. In a solid ionic substance, oppositely charged ions form a repeating structure rather than separate molecules. NaCl therefore describes the simplest ratio—one sodium ion for each chloride ion—and we call that ratio a formula unit.",
        "A coefficient counts complete entities, while a subscript describes composition inside each entity. Two H₂O molecules contain four hydrogen atoms and two oxygen atoms. Keeping those levels separate becomes essential when the course introduces the mole.",
      ],
      callout: "coefficient counts entities · subscript counts parts within each entity",
    },
    {
      id: "particles-formula-check",
      type: "check",
      eyebrow: "Read the symbolic model",
      title: "Count atoms without changing the formula",
      prompt: "How many oxygen atoms are represented by three CO₂ molecules?",
      options: ["2 oxygen atoms", "3 oxygen atoms", "5 oxygen atoms", "6 oxygen atoms"],
      correctIndex: 3,
      explanation:
        "Each CO₂ molecule contains two oxygen atoms. Three complete molecules therefore contain 3 × 2 = 6 oxygen atoms.",
      misconception:
        "The coefficient counts whole molecules and multiplies every atom count inside the formula.",
    },
    {
      id: "particles-visual",
      type: "visual",
      eyebrow: "See the states",
      title: "Spacing and freedom of motion shape behaviour",
      introduction:
        "In a solid, particles vibrate around stable mean positions. Liquid particles remain close but continually exchange neighbours. Gas particles are usually far apart and travel between collisions, spreading through the available container.",
      visual: "particles",
      caption:
        "This is a model, not a magnified photograph; particle sizes and gaps are not usually drawn to the same scale.",
    },
    {
      id: "particles-states",
      type: "concept",
      eyebrow: "From motion to properties",
      title: "The familiar states emerge from competing effects",
      paragraphs: [
        "Particle attractions tend to keep particles close, while microscopic motion disrupts stable arrangements. Whether an ordered structure forms depends on the interactions, particle shapes, and thermal motion. In a solid, particles remain near stable positions: the solid keeps its shape and volume, although particles vibrate. Liquid particles can rearrange, so a liquid flows and takes its container's shape while keeping an almost fixed volume.",
        "Gas particles are far apart for much of the time, so a gas fills its container and can be compressed. Pressure results from particles colliding with container walls, not from something stored in the gaps. This three-state picture is a starting point; glasses, liquid crystals, and plasmas need richer models.",
      ],
      callout:
        "bulk behaviour depends on arrangement + motion + interactions",
    },
    {
      id: "particles-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Explain gas compression",
      scenario: "Air is trapped in a sealed syringe. When the plunger is pushed inward slowly, the air occupies less volume and pushes back more strongly.",
      steps: [
        {
          label: "Define the system",
          decision: "The sealed syringe keeps the amount and identity of the gas unchanged.",
          working: "same number and type of particles",
        },
        {
          label: "Connect volume to spacing",
          decision: "Gas particles have large empty spaces between them.",
          working: "smaller volume → smaller average separation",
        },
        {
          label: "Preserve particle identity",
          decision: "Compression changes spacing, not particle size. In less volume, particles reach the walls more frequently.",
          working: "more wall collisions each second → greater pressure",
        },
      ],
      answer:
        "Widely separated gas particles can move closer together. In less space, wall collisions become more frequent, so pressure rises.",
      plausibility:
        "Solids and liquids are much harder to compress because their particles are already close together; there is far less spacing to reduce.",
    },
    {
      id: "particles-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Use the particle model",
      prompt: "When liquid water evaporates, which statement is best?",
      options: [
        "Water particles separate and move more freely",
        "Water particles grow larger",
        "Water particles become air particles",
        "Water particles disappear",
      ],
      correctIndex: 0,
      explanation:
        "Evaporation is a physical change. Some surface molecules gain enough energy to escape the liquid and become much more widely separated, but they remain H₂O molecules.",
      misconception:
        "A change of state does not create a new chemical substance.",
    },
    {
      id: "particles-diffusion-worked",
      type: "worked",
      eyebrow: "Worked explanation",
      title: "Follow particles during diffusion",
      scenario:
        "A drop of food colouring is placed gently into still water. Its colour slowly spreads even though nobody stirs the glass.",
      steps: [
        {
          label: "Start from the observation",
          decision:
            "The coloured region becomes less concentrated while colour appears farther away.",
          working: "colour spreads from a concentrated region into the surrounding water",
        },
        {
          label: "Apply the model",
          decision:
            "Water molecules and dissolved colouring particles move continually and collide.",
          working: "many random movements mix the two kinds of particle",
        },
        {
          label: "Describe the net change",
          decision:
            "Paths are random, but initially more colouring particles leave the concentrated region than return.",
          working: "net movement down a concentration gradient until more evenly distributed",
        },
      ],
      answer:
        "Random particle motion produces net spreading from higher to lower concentration.",
      plausibility:
        "Diffusion persists in a motionless fluid; in a real glass, convection can also help spread the colour.",
    },
    {
      id: "particles-diffusion-check",
      type: "check",
      eyebrow: "Pause and predict",
      title: "Do particles stop at equilibrium?",
      prompt:
        "After a gas has become evenly mixed throughout a closed room, what are its particles doing?",
      options: [
        "They have stopped moving because diffusion is complete",
        "They settle into separate layers according to their colour",
        "They move only when the room is heated again",
        "They continue moving randomly, with no lasting net flow in one direction",
      ],
      correctIndex: 3,
      explanation:
        "Even distribution is dynamic. Particles keep moving, but on average equal numbers cross an imaginary boundary in each direction.",
      misconception:
        "Equilibrium means no net macroscopic change, not an end to microscopic motion.",
    },
    {
      id: "particles-energy",
      type: "concept",
      eyebrow: "Changing state",
      title: "Energy changes motion and separation, not molecular identity",
      paragraphs: [
        "Heating transfers energy into a sample. Away from a phase change, this usually raises temperature and shifts the distribution of microscopic energies. During melting or boiling at constant pressure, temperature can remain approximately constant while energy enters. That energy helps overcome attractions and produce a less constrained arrangement.",
        "State changes preserve the chemical entities. Boiling water separates H₂O molecules; it does not split them into hydrogen and oxygen. Attractions between molecules are overcome, not the strong bonds within each molecule. Reversing the energy transfer can reverse the change.",
      ],
      callout:
        "during a phase change: same entities, different arrangement and energy",
    },
    {
      id: "particles-state-change-worked",
      type: "worked",
      eyebrow: "Worked explanation",
      title: "Interpret a melting plateau",
      scenario:
        "A pure solid is heated. Its temperature reaches the melting point, stays nearly constant while solid and liquid coexist, then rises after melting finishes.",
      steps: [
        {
          label: "Before melting",
          decision:
            "Transferred energy increases microscopic motion within the solid structure.",
          working: "temperature rises; particles vibrate more energetically",
        },
        {
          label: "During melting",
          decision:
            "Energy enables particles to leave stable positions and rearrange while remaining close.",
          working: "energy enters while temperature remains nearly constant",
        },
        {
          label: "After melting",
          decision:
            "Once no solid remains, further transfer changes the liquid's energy distribution.",
          working: "temperature of the liquid rises",
        },
      ],
      answer:
        "Heating continues during the plateau while the material changes from solid to liquid at nearly constant temperature.",
      plausibility:
        "If energy were no longer entering, the steadily powered heater could not complete the melting process.",
    },
    {
      id: "particles-boiling-check",
      type: "check",
      eyebrow: "Check the explanation",
      title: "Identify the bubbles",
      prompt:
        "Once pure water is boiling steadily, what is inside the bubbles forming throughout the liquid?",
      options: [
        "Mostly gaseous H₂O",
        "Hydrogen and oxygen produced by broken water molecules",
        "Empty space with no particles",
        "Liquid water particles that have expanded into balloons",
      ],
      correctIndex: 0,
      explanation:
        "A stable boiling bubble contains gaseous H₂O. Small early bubbles before boiling may include gases previously dissolved in the water.",
      misconception:
        "Boiling is not chemical decomposition. Separating molecules from one another is different from breaking the bonds within each molecule.",
    },
    {
      id: "particles-pressure-check",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Predict pressure in a rigid container",
      prompt:
        "A sealed, rigid container of gas is warmed. Its volume and particle number stay constant. Why does its pressure usually rise?",
      options: [
        "Each particle becomes physically larger",
        "New gas particles are created by heat",
        "The spaces between particles fill with heat",
        "Particles strike the walls more frequently and with greater momentum changes",
      ],
      correctIndex: 3,
      explanation:
        "Warming shifts the particles toward higher speeds. They strike the walls more often and harder, transferring a greater push overall. In more formal language, each collision produces a larger average momentum change, increasing pressure.",
      misconception:
        "Heat is energy transferred because of a temperature difference; it is not a material that occupies gaps between particles.",
    },
    {
      id: "particles-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Explain observations with particles and interactions",
      points: [
        "Macroscopic properties and microscopic models are different levels of description.",
        "State and bulk properties emerge from particle arrangement, motion, spacing, and interactions.",
        "Gas compression reduces separation; gas pressure arises from wall collisions.",
        "Diffusion is continual random motion producing net spreading down a concentration gradient.",
        "Physical state changes transfer energy and rearrange particles while preserving chemical identity.",
        "Models are useful when they generate testable predictions.",
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
  number: "2.2",
  stageId: "stage.chemistry_foundations",
  discipline: "chemistry",
  title: "The mole as a counting unit",
  summary:
    "Connect invisible particle counts to measurable laboratory masses using chemical amount.",
  estimatedMinutes: 15,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret the mole as a fixed count of explicitly named entities.",
    "Build a substance's molar mass from its chemical formula.",
    "Convert between mass and chemical amount using units as a guide.",
    "Convert between chemical amount and numbers of particles.",
    "Use formula subscripts to relate molecules or formula units to their constituent atoms or ions.",
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
        "Atoms, molecules, and ions are too small and numerous to count individually. Chemists measure chemical amount in moles (mol). One mole contains exactly 6.02214076 × 10²³ specified entities: the Avogadro constant, Nₐ, expressed per mole.",
        "Like “dozen”, mole gives a count but not what was counted. One mole of carbon atoms and one mole of water molecules contain equal entity counts but have different masses. Naming the entity—atom, molecule, ion, electron, or formula unit—is part of a complete statement.",
        "This enormous counting unit bridges molecular-scale entities and masses a laboratory balance can measure.",
      ],
      callout: "1 mol contains exactly 6.02214076 × 10²³ specified entities",
    },
    {
      id: "mole-visual",
      type: "visual",
      eyebrow: "Bridge scales",
      title: "Molar mass links the balance to particles",
      introduction:
        "A laboratory balance measures mass in grams. Molar mass connects mass to chemical amount; the Avogadro constant then connects amount to a number of specified entities.",
      visual: "mole",
      caption:
        "Always specify the entity: one mole of oxygen atoms is not the same collection as one mole of O₂ molecules.",
    },
    {
      id: "mole-molar-mass",
      type: "concept",
      eyebrow: "Reading a formula",
      title: "Molar mass adds the contributions in one chemical formula",
      paragraphs: [
        "Periodic tables usually show relative atomic masses or standard atomic weights, which are dimensionless. Their numerical values are used to obtain atomic molar masses in grams per mole: carbon is about 12.01 g mol⁻¹ and oxygen 16.00 g mol⁻¹. For a molecular substance, multiply each value by that atom's subscript, then add. H₂O gives 2 × 1.008 + 16.00 ≈ 18.02 g mol⁻¹.",
        "For ionic substances such as NaCl, we speak of formula units rather than molecules, but still follow the formula. Brackets matter: Ca(OH)₂ contains two oxygen and two hydrogen atoms per formula unit. Molar mass belongs to the specified substance, not one particle.",
      ],
      callout:
        "molar mass M = sum of (subscript × atomic molar mass)",
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
      id: "mole-formula-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Build molar mass from a molecular formula",
      scenario:
        "Find the molar mass of glucose, C₆H₁₂O₆, using C = 12.01, H = 1.008, and O = 16.00 g mol⁻¹.",
      steps: [
        {
          label: "Read every subscript",
          decision:
            "One glucose molecule contains 6 carbon, 12 hydrogen, and 6 oxygen atoms.",
          working: "C₆H₁₂O₆ → 6 C + 12 H + 6 O",
        },
        {
          label: "Find each contribution",
          decision:
            "Multiply each atomic molar mass by its count in the formula.",
          working:
            "C: 6 × 12.01 = 72.06; H: 12 × 1.008 = 12.096; O: 6 × 16.00 = 96.00",
        },
        {
          label: "Add and state the unit",
          decision:
            "The molar mass is the sum for one mole of glucose molecules.",
          working: "M = 72.06 + 12.096 + 96.00 = 180.156 g mol⁻¹",
        },
      ],
      answer:
        "The molar mass of glucose is 180.16 g mol⁻¹ to a sensible precision.",
      plausibility:
        "Six oxygen atoms alone contribute 96 g mol⁻¹, so a total near 180 g mol⁻¹ is reasonable.",
    },
    {
      id: "mole-formula-check",
      type: "check",
      eyebrow: "Read the brackets",
      title: "Count atoms before adding masses",
      prompt:
        "Using Ca = 40.1, O = 16.0, and H = 1.0 g mol⁻¹, what is the approximate molar mass of Ca(OH)₂?",
      options: [
        "57.1 g mol⁻¹",
        "58.1 g mol⁻¹",
        "74.1 g mol⁻¹",
        "114.2 g mol⁻¹",
      ],
      correctIndex: 2,
      explanation:
        "The 2 outside the brackets applies to both O and H: 40.1 + (2 × 16.0) + (2 × 1.0) = 74.1 g mol⁻¹.",
      misconception:
        "Treating (OH)₂ as one oxygen but two hydrogens ignores that the bracket multiplies the entire enclosed group.",
    },
    {
      id: "mole-particle-count",
      type: "concept",
      eyebrow: "From amount to entities",
      title: "The Avogadro constant converts moles into a particle count",
      paragraphs: [
        "If n is amount and N is the specified entity count, then N = nNₐ. Multiplying by entities per mole leaves entities; dividing a count by Nₐ gives moles. Scientific notation is essential because samples contain huge particle counts.",
        "Each CO₂ molecule contains two oxygen atoms, so there are twice as many oxygen atoms as CO₂ molecules. Equally, one mole of CO₂ contains two moles of oxygen atoms. Subscripts describe composition within each entity; they do not change how many molecules one mole represents.",
      ],
      callout: "entity count N = amount n × Avogadro constant Nₐ",
    },
    {
      id: "mole-particles-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Move from moles to molecules and atoms",
      scenario:
        "A sample contains 0.250 mol of CO₂. Find the number of CO₂ molecules and the number of oxygen atoms. Use Nₐ = 6.022 × 10²³ mol⁻¹.",
      steps: [
        {
          label: "Count the specified molecules",
          decision:
            "Multiply chemical amount by the number of molecules per mole.",
          working:
            "N(CO₂) = 0.250 mol × 6.022 × 10²³ molecules mol⁻¹ = 1.5055 × 10²³ molecules",
        },
        {
          label: "Read the formula",
          decision:
            "Every CO₂ molecule contains two oxygen atoms.",
          working: "N(O atoms) = 2 × N(CO₂)",
        },
        {
          label: "Calculate and round",
          decision:
            "Use three significant figures to match the given amount.",
          working: "N(CO₂) = 1.51 × 10²³; N(O atoms) = 3.01 × 10²³",
        },
      ],
      answer:
        "The sample contains 1.51 × 10²³ CO₂ molecules and 3.01 × 10²³ oxygen atoms.",
      plausibility:
        "A quarter mole should contain one quarter of 6.022 × 10²³ molecules, and twice as many oxygen atoms as molecules.",
    },
    {
      id: "mole-count-check",
      type: "check",
      eyebrow: "Reverse the bridge",
      title: "Convert a particle count to amount",
      prompt:
        "A sample contains 3.011 × 10²³ nitrogen molecules, N₂. What chemical amount of N₂ is this?",
      options: ["0.250 mol", "0.500 mol", "2.00 mol", "6.022 mol"],
      correctIndex: 1,
      explanation:
        "n = N / Nₐ = (3.011 × 10²³) / (6.022 × 10²³ mol⁻¹) = 0.500 mol of N₂ molecules.",
      misconception:
        "The subscript 2 tells us that each molecule has two nitrogen atoms; it does not double the number of N₂ molecules or their chemical amount.",
    },
    {
      id: "mole-entity-check",
      type: "check",
      eyebrow: "Track the entity",
      title: "Use a formula-unit ratio",
      prompt:
        "In the simple ionic model, 0.20 mol of CaCl₂ formula units corresponds to what amount of chloride ions?",
      options: ["0.10 mol", "0.20 mol", "0.40 mol", "1.20 mol"],
      correctIndex: 2,
      explanation:
        "Each CaCl₂ formula unit contains two chloride ions, so 0.20 mol × 2 = 0.40 mol of chloride ions.",
      misconception:
        "One mole does not always mean one mole of every constituent. Formula subscripts set the ratio between the specified entities.",
    },
    {
      id: "mole-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "The mole connects count, amount, and mass",
      points: [
        "One mole is an exact fixed number of specified entities.",
        "Molar mass adds the atomic contributions shown by a chemical formula.",
        "Mass and amount are connected by n = m / M and m = nM.",
        "Amount and entity count are connected by N = nNₐ.",
        "Formula subscripts connect molecules or formula units to their constituent atoms or ions.",
        "Units and explicit entity labels prevent many mole-calculation errors.",
      ],
      transferRule:
        "Ask which bridge connects the given measurement to the requested quantity, then make its units cancel.",
      nextLessonId: "lesson.chemistry.atomic_structure",
    },
  ],
};

const describingMotion: Lesson = {
  id: "lesson.physics.describing_motion",
  slug: "describing-motion",
  number: "7.1",
  stageId: "stage.physics_foundations",
  discipline: "physics",
  title: "Describing motion",
  summary:
    "Describe where an object is, how its position changes, and why direction matters.",
  estimatedMinutes: 15,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish distance from displacement.",
    "Distinguish speed from velocity.",
    "Use a sign convention to represent one-dimensional direction.",
    "Calculate average speed and average velocity over a multi-part journey.",
    "Interpret the signs of velocity and acceleration without confusing negative acceleration with slowing down.",
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
      id: "motion-reference-frame",
      type: "concept",
      eyebrow: "Separate place from movement",
      title: "A negative position does not imply negative velocity",
      paragraphs: [
        "Position, displacement, and velocity answer different questions. Position locates an object relative to the chosen origin. Displacement describes a change in position over an interval. Velocity describes how rapidly, and in which direction, position is changing. Their signs therefore need not match.",
        "For example, take east as positive. A person at x = −20 m is west of the origin. If they walk east, their position is negative while their velocity is positive. They may later pass the origin without any sudden change in velocity; only the sign of their position changes.",
        "Distance and speed are scalars: they have magnitude but no direction, so they are normally reported as non-negative. Displacement and velocity are one-dimensional vectors in this course. Their plus or minus signs encode direction according to the convention you state.",
      ],
      callout:
        "Position says where; displacement says the net change; velocity says how position is changing.",
    },
    {
      id: "motion-average-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compare average speed with average velocity",
      scenario:
        "A hiker walks 100 m north in 60 s, then 40 m south in 20 s. Take north as positive and use the whole 80 s journey.",
      steps: [
        {
          label: "Find total distance",
          decision: "Average speed uses every part of the path, regardless of direction.",
          working: "distance = 100 m + 40 m = 140 m",
        },
        {
          label: "Find displacement",
          decision: "Average velocity uses the signed net change in position.",
          working: "displacement = +100 m + (−40 m) = +60 m",
        },
        {
          label: "Divide each quantity by total time",
          decision: "Both averages must use the duration of the complete journey.",
          working:
            "average speed = 140 m / 80 s = 1.75 m s⁻¹; average velocity = +60 m / 80 s = +0.75 m s⁻¹",
        },
      ],
      answer:
        "Average speed is 1.75 m s⁻¹; average velocity is 0.75 m s⁻¹ north.",
      plausibility:
        "Retracing part of the route makes displacement smaller than distance, so the magnitude of average velocity is smaller than average speed.",
    },
    {
      id: "motion-position-check",
      type: "check",
      eyebrow: "Check the signs",
      title: "Do not infer motion from position alone",
      prompt:
        "East is positive. At one instant a cyclist has position −12 m and velocity +3 m s⁻¹. Which statement is correct?",
      options: [
        "The cyclist is west of the origin and moving east",
        "The cyclist is east of the origin and moving west",
        "The cyclist must be slowing down",
        "The cyclist is 12 m from where the journey began",
      ],
      correctIndex: 0,
      explanation:
        "The negative position places the cyclist 12 m west of the chosen origin. The positive velocity means position is increasing, so the cyclist is moving east.",
      misconception:
        "A position sign locates an object; it does not reveal the direction of motion or identify the journey's starting point.",
    },
    {
      id: "motion-average-check",
      type: "check",
      eyebrow: "Apply both averages",
      title: "Use the complete journey",
      prompt:
        "A walker travels 60 m east and then 20 m west in a total time of 40 s. What are the average speed and average velocity?",
      options: [
        "1.0 m s⁻¹ and 2.0 m s⁻¹ east",
        "1.5 m s⁻¹ and zero",
        "2.0 m s⁻¹ and 1.0 m s⁻¹ west",
        "2.0 m s⁻¹ and 1.0 m s⁻¹ east",
      ],
      correctIndex: 3,
      explanation:
        "Distance is 80 m, giving average speed 80/40 = 2.0 m s⁻¹. Displacement is 40 m east, giving average velocity 40/40 = 1.0 m s⁻¹ east.",
      misconception:
        "Average speed uses the total path, while average velocity uses the signed net displacement. Both use the full elapsed time.",
    },
    {
      id: "motion-acceleration-concept",
      type: "concept",
      eyebrow: "Describe changing velocity",
      title: "Acceleration measures a change in velocity, not simply a gain in speed",
      paragraphs: [
        "Average acceleration is the change in velocity divided by the elapsed time: a = (final velocity − initial velocity) / time. Its unit, m s⁻², means that velocity changes by so many metres per second during each second.",
        "Because velocity includes direction, it can change when an object speeds up, slows down, or turns around. Negative acceleration means the velocity is changing toward the negative direction. It does not automatically mean the object is slowing.",
        "Compare the signs. When velocity and acceleration have the same sign, the magnitude of velocity increases and the object speeds up. When their signs differ, the magnitude decreases and the object slows down. At the instant an object turns around, velocity passes through zero while acceleration can remain non-zero.",
      ],
      callout:
        "Same signs for velocity and acceleration → speeding up; opposite signs → slowing down.",
    },
    {
      id: "motion-acceleration-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Interpret a negative acceleration",
      scenario:
        "Take right as positive. A trolley's velocity changes uniformly from −2 m s⁻¹ to −8 m s⁻¹ in 3 s.",
      steps: [
        {
          label: "Calculate the velocity change",
          decision: "Always use final minus initial, including both signs.",
          working: "Δv = −8 − (−2) = −6 m s⁻¹",
        },
        {
          label: "Divide by elapsed time",
          decision: "Acceleration is the rate of change of velocity.",
          working: "a = Δv / Δt = −6 / 3 = −2 m s⁻²",
        },
        {
          label: "Interpret the two signs",
          decision: "Velocity and acceleration are both negative.",
          working:
            "The trolley moves left and its speed rises from 2 m s⁻¹ to 8 m s⁻¹.",
        },
      ],
      answer:
        "The acceleration is −2 m s⁻²; the trolley is moving left and speeding up.",
      plausibility:
        "A change of −2 m s⁻¹ each second for 3 s changes −2 m s⁻¹ into −8 m s⁻¹.",
    },
    {
      id: "motion-acceleration-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Decide whether speed rises or falls",
      prompt:
        "An object has velocity +10 m s⁻¹ and acceleration −2 m s⁻². What happens initially?",
      options: [
        "It moves in the positive direction and slows down",
        "It moves in the negative direction and speeds up",
        "It moves in the positive direction and speeds up",
        "It is stationary because the signs cancel",
      ],
      correctIndex: 0,
      explanation:
        "Positive velocity sets the current direction. The oppositely signed acceleration reduces that positive velocity, so its magnitude—and therefore speed—initially falls.",
      misconception:
        "Velocity and acceleration do not add as simultaneous quantities. Acceleration tells how velocity will change with time.",
    },
    {
      id: "motion-transfer-check",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Find the acceleration direction while braking",
      prompt:
        "West is negative. A westbound car brakes without turning. Which sign combination describes the car before it stops?",
      options: [
        "Negative velocity and negative acceleration",
        "Negative velocity and positive acceleration",
        "Positive velocity and negative acceleration",
        "Positive velocity and positive acceleration",
      ],
      correctIndex: 1,
      explanation:
        "Westward motion gives negative velocity. Braking reduces the magnitude of that velocity, so velocity changes from a negative value toward zero: the change and acceleration are positive.",
      misconception:
        "Braking acceleration points opposite to the current velocity. It is not always negative; its sign depends on the chosen positive direction.",
    },
    {
      id: "motion-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Define the reference frame before the motion",
      points: [
        "Position is measured relative to an origin and sign convention.",
        "Distance is total path length; displacement is net position change.",
        "Average speed uses total distance; average velocity uses displacement.",
        "Velocity gives direction of motion; acceleration gives the direction in which velocity changes.",
        "An object speeds up when velocity and acceleration share a sign, and slows when their signs differ.",
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
  number: "7.2",
  stageId: "stage.physics_foundations",
  discipline: "physics",
  title: "Motion graphs",
  summary:
    "Translate motion stories into position–time and velocity–time graphs.",
  estimatedMinutes: 15,
  reviewStatus: "unreviewed",
  objectives: [
    "Interpret slope on a position–time graph as velocity.",
    "Interpret area under a velocity–time graph as displacement.",
    "Interpret slope on a velocity–time graph as acceleration.",
    "Analyse piecewise motion using signed slopes and signed areas.",
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
        "The object is at position zero",
        "Constant acceleration",
        "The object is stationary",
      ],
      correctIndex: 3,
      explanation:
        "Horizontal position means the position is not changing as time passes, so velocity—the slope—is zero.",
      misconception:
        "The line may be above position zero; horizontal refers to zero change, not necessarily zero position.",
    },
    {
      id: "motion-graphs-slope-concept",
      type: "concept",
      eyebrow: "Read a changing slope",
      title: "Slope gives a rate over an interval or at an instant",
      paragraphs: [
        "For a straight segment on a position–time graph, velocity is constant and any two points on that segment give the same slope. Use changes in the axis values, not the visual angle of the line: changing the graph's scale can alter its apparent steepness without altering the motion.",
        "A curved position–time graph has a changing slope and therefore a changing velocity. The slope of a chord between two points gives average velocity over that interval. The slope of a tangent at one point gives instantaneous velocity—the velocity at that moment.",
        "A positive slope means motion in the positive direction; a negative slope means motion in the negative direction. During smooth motion, a turning point occurs when the slope reaches zero and changes sign. An idealised abrupt reversal can instead appear as a sharp corner. The graph's height at the reversal is position, not speed.",
      ],
      callout:
        "On position–time graphs: slope magnitude is speed; slope sign is direction.",
    },
    {
      id: "motion-graphs-area-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Accumulate displacement from velocity",
      scenario:
        "A velocity–time graph shows velocity rising uniformly from +2 m s⁻¹ to +8 m s⁻¹ during 3 s, then remaining at +8 m s⁻¹ for 2 s.",
      steps: [
        {
          label: "Find the first area",
          decision: "A changing velocity forms a trapezium under the line.",
          working:
            "displacement₁ = average height × width = ((2 + 8) / 2) × 3 = 15 m",
        },
        {
          label: "Find the second area",
          decision: "Constant velocity forms a rectangle.",
          working: "displacement₂ = 8 × 2 = 16 m",
        },
        {
          label: "Combine signed areas",
          decision: "Both regions lie above the time axis, so both are positive.",
          working: "total displacement = 15 m + 16 m = +31 m",
        },
      ],
      answer: "The displacement during the full 5 s interval is +31 m.",
      plausibility:
        "Velocity stays between 2 and 8 m s⁻¹ for 5 s, so a result between 10 m and 40 m is reasonable.",
    },
    {
      id: "motion-graphs-velocity-check",
      type: "check",
      eyebrow: "Compare graph types",
      title: "Read a horizontal velocity line",
      prompt:
        "A velocity–time graph is a horizontal line at −4 m s⁻¹ for 5 s. What does it describe?",
      options: [
        "A stationary object at position −4 m",
        "An object with constant negative acceleration",
        "An object slowing uniformly to rest",
        "An object moving in the negative direction at constant speed",
      ],
      correctIndex: 3,
      explanation:
        "Height on this graph is velocity. A constant value of −4 m s⁻¹ means constant motion in the negative direction; the horizontal line has zero slope and therefore zero acceleration.",
      misconception:
        "A horizontal line means stationary only on a position–time graph. On a velocity–time graph it means constant velocity.",
    },
    {
      id: "motion-graphs-acceleration-concept",
      type: "concept",
      eyebrow: "Connect velocity and acceleration",
      title: "Velocity–time slope and area answer different questions",
      paragraphs: [
        "The slope of a velocity–time graph is acceleration: a = Δv / Δt. An upward slope means positive acceleration and a downward slope means negative acceleration. A horizontal segment has zero acceleration even when its velocity is non-zero.",
        "The area between the velocity line and the time axis is displacement because velocity multiplied by time has units (m s⁻¹) × s = m. Area above the axis is positive; area below it is negative. Adding those signed areas gives net displacement.",
        "If a question asks for distance travelled, add the magnitudes of the areas instead. Opposite-direction sections can cancel in displacement but never cancel in distance. Crossing the time axis marks a reversal of direction because velocity changes sign.",
      ],
      callout:
        "Velocity–time slope → acceleration; signed area → displacement; total absolute area → distance.",
    },
    {
      id: "motion-graphs-piecewise-worked",
      type: "worked",
      eyebrow: "Worked example",
      title: "Separate displacement from distance on a velocity graph",
      scenario:
        "An object travels at +3 m s⁻¹ for 4 s, then at −2 m s⁻¹ for 3 s. Its velocity changes abruptly at the join.",
      steps: [
        {
          label: "Calculate the positive area",
          decision: "The first rectangle is above the axis.",
          working: "area₁ = (+3) × 4 = +12 m",
        },
        {
          label: "Calculate the negative area",
          decision: "The second rectangle is below the axis.",
          working: "area₂ = (−2) × 3 = −6 m",
        },
        {
          label: "Answer both possible questions",
          decision:
            "Add signed areas for displacement, but magnitudes for distance.",
          working:
            "displacement = +12 + (−6) = +6 m; distance = 12 + 6 = 18 m",
        },
      ],
      answer:
        "Net displacement is +6 m, while total distance travelled is 18 m.",
      plausibility:
        "The object covers 12 m forward and retraces 6 m, so it finishes 6 m forward after travelling 18 m in total.",
    },
    {
      id: "motion-graphs-area-check",
      type: "check",
      eyebrow: "Your turn",
      title: "Use signed area",
      prompt:
        "A velocity–time graph encloses +20 m of area above the axis and −8 m below it. What are the displacement and distance?",
      options: [
        "Displacement 12 m; distance 28 m",
        "Displacement 28 m; distance 12 m",
        "Displacement 12 m; distance 12 m",
        "Displacement 28 m; distance 28 m",
      ],
      correctIndex: 0,
      explanation:
        "Net displacement is the signed sum, +20 + (−8) = +12 m. Distance adds the magnitudes, 20 + 8 = 28 m.",
      misconception:
        "Negative area represents displacement in the negative direction, not negative distance travelled.",
    },
    {
      id: "motion-graphs-acceleration-check",
      type: "check",
      eyebrow: "Transfer the graph",
      title: "Interpret a downward velocity slope",
      prompt:
        "Velocity falls uniformly from +6 m s⁻¹ at 0 s to −2 m s⁻¹ at 4 s. Which statement is correct?",
      options: [
        "Acceleration is −2 m s⁻² and the object reverses direction",
        "Acceleration is +2 m s⁻² and the object never stops",
        "Acceleration is −8 m s⁻² and velocity remains positive",
        "Acceleration is zero because the line is straight",
      ],
      correctIndex: 0,
      explanation:
        "The slope is (−2 − 6) / 4 = −2 m s⁻². Since velocity changes from positive to negative, the line crosses zero and the object momentarily stops before reversing direction.",
      misconception:
        "A straight velocity–time line means constant acceleration, not zero acceleration. Only a horizontal velocity line has zero slope.",
    },
    {
      id: "motion-graphs-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Graph meaning comes from the axes",
      points: [
        "Position–time height is position; its slope is velocity.",
        "Velocity–time height is velocity; its slope is acceleration.",
        "Signed velocity–time area is displacement; the sum of the magnitudes of all velocity–time areas is distance.",
        "Horizontal has different meanings on different graph types.",
        "A graph line represents quantities, not the shape of the physical route.",
      ],
      transferRule:
        "Name the axes, then translate height, slope, and area separately before answering a motion question.",
      nextLessonId: "lesson.physics.forces_newton",
    },
  ],
};

const integrationStudio: Lesson = {
  id: "lesson.integration.graph_measurement_studio",
  slug: "graph-and-measurement-studio",
  number: "13.1",
  stageId: "stage.integration",
  discipline: "integrated",
  title: "Graph and measurement studio",
  summary:
    "Combine units, uncertainty, ratios, particles, motion, and graphs in a guided investigation.",
  estimatedMinutes: 18,
  reviewStatus: "unreviewed",
  objectives: [
    "Select useful quantities and units from an experimental description.",
    "Interpret a graph without being told which formula to use.",
    "Explain one pattern at both observable and model levels.",
    "Carry measurement uncertainty into a defensible range for a derived result.",
    "Connect solution concentration and drop volume to chemical amount and entity count.",
    "Reconstruct position, velocity, and acceleration from equal-time samples.",
    "Synthesize chemical amount per unit length from a changing motion pattern.",
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
      id: "studio-measurement-plan",
      type: "concept",
      eyebrow: "Plan the measurement",
      title: "Decide what the evidence can support",
      paragraphs: [
        "The trail records position at regular times, not speed directly. To estimate speed, measure the distance between the centres of neighbouring drops and divide by the timer interval. Distance is measured, time is controlled, and speed is derived. Keeping those roles separate prevents a calculation from being mistaken for an observation.",
        "Every measurement has limited precision. Suppose each gap can be judged to about ±0.1 cm and the timer interval is 0.20 ± 0.01 s. Those limits define how precisely the conclusion can be stated. Record measurements before converting units and round only the reported result.",
      ],
      callout:
        "Evidence chain: observed positions → measured gaps → calculated speeds → model of the motion",
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
      id: "studio-uncertainty-check",
      type: "check",
      eyebrow: "Measurement judgement",
      title: "Respect the precision of the evidence",
      prompt:
        "The measured gap is 6.0 ± 0.1 cm and the interval is 0.20 ± 0.01 s. Which is the most defensible report of the speed?",
      options: [
        "Exactly 0.300000 m s⁻¹",
        "About 0.30 m s⁻¹, with a plausible range near 0.28–0.32 m s⁻¹",
        "Between 0.20 and 6.0 m s⁻¹",
        "It is impossible to estimate because neither measurement is exact",
      ],
      correctIndex: 1,
      explanation:
        "The smallest gap with longest time gives 0.059/0.21 ≈ 0.28 m s⁻¹; the largest gap with shortest time gives 0.061/0.19 ≈ 0.32 m s⁻¹. Extra digits would imply false certainty.",
      misconception:
        "Uncertainty is a bounded statement about measurement quality, not evidence that every value is equally possible or that no conclusion can be drawn.",
    },
    {
      id: "studio-chemical-bridge",
      type: "concept",
      eyebrow: "Connect to chemistry",
      title: "One drop links the visible and particle scales",
      paragraphs: [
        "Suppose the cart releases 0.50 mL drops of 0.20 mol L⁻¹ sodium chloride solution. The dissolved ions are invisible. Concentration provides the bridge: concentration multiplied by volume gives moles, then moles multiplied by the Avogadro constant gives an entity count.",
        "A particle diagram shows representative ions, not all of them. Its dots are symbols, just as trail marks symbolize sampled positions. The trail shows where and when drops were released; the particle model explains what each drop contains.",
      ],
      callout:
        "Do not merge the models: a trail mark represents a whole drop; a particle-model dot represents many microscopic entities.",
    },
    {
      id: "studio-chemical-worked",
      type: "worked",
      eyebrow: "Worked investigation",
      title: "Move from drop volume to microscopic amount",
      scenario:
        "Each 0.50 mL drop contains sodium chloride at 0.20 mol L⁻¹. Estimate the amount of sodium chloride and the number of formula units represented by one drop.",
      steps: [
        {
          label: "Convert the volume",
          decision: "Concentration uses litres, so express the drop volume in litres.",
          working: "0.50 mL = 0.00050 L = 5.0 × 10⁻⁴ L",
        },
        {
          label: "Find the chemical amount",
          decision: "Use amount = concentration × volume.",
          working:
            "n = (0.20 mol L⁻¹)(5.0 × 10⁻⁴ L) = 1.0 × 10⁻⁴ mol",
        },
        {
          label: "Connect to entities",
          decision: "Multiply by 6.02 × 10²³ formula units per mole.",
          working:
            "N = (1.0 × 10⁻⁴)(6.02 × 10²³) = 6.0 × 10¹⁹ formula units",
        },
      ],
      answer:
        "One drop represents 1.0 × 10⁻⁴ mol of sodium chloride, or about 6.0 × 10¹⁹ formula-unit equivalents. Under the complete-dissociation model, that corresponds to 6.0 × 10¹⁹ Na⁺ ions plus 6.0 × 10¹⁹ Cl⁻ ions.",
      plausibility:
        "A small drop can contain an enormous entity count because a mole is an enormous counting unit. The units also cancel: mol L⁻¹ × L leaves mol.",
    },
    {
      id: "studio-chemical-check",
      type: "check",
      eyebrow: "Model the change",
      title: "Change one chemical variable",
      prompt:
        "The drop volume and release interval stay fixed, but the sodium chloride concentration is doubled. What changes?",
      options: [
        "The moles and represented ion count in each drop both double",
        "Only the physical spacing between drops doubles",
        "The moles in each drop halve because the solution is more concentrated",
        "The number of ions stays fixed because the drop volume is unchanged",
      ],
      correctIndex: 0,
      explanation:
        "For fixed volume, n = cV is proportional to concentration. Doubling c doubles the moles and each type of ion represented.",
      misconception:
        "Volume tells you how much solution is present; concentration is also needed to determine how much solute that volume contains.",
    },
    {
      id: "studio-motion-table",
      type: "concept",
      eyebrow: "Build the graph",
      title: "Turn positions into a velocity story",
      paragraphs: [
        "For four 0.20 s intervals, take gaps of 2.0, 3.0, 4.0, and 5.0 cm. Cumulative positions are 0, 2.0, 5.0, 9.0, and 14.0 cm. Their position–time graph becomes progressively steeper.",
        "Dividing each gap by 0.20 s gives velocities of 0.10, 0.15, 0.20, and 0.25 m s⁻¹. Plot each at its interval midpoint to reveal the rate of change.",
      ],
      callout:
        "Position–time slope and velocity–time height describe the same motion from different viewpoints.",
    },
    {
      id: "studio-motion-worked",
      type: "worked",
      eyebrow: "Worked investigation",
      title: "Estimate acceleration from the reconstructed graph",
      scenario:
        "The interval velocities are 0.10, 0.15, 0.20, and 0.25 m s⁻¹, with each estimate separated from the next by 0.20 s. Estimate the acceleration.",
      steps: [
        {
          label: "Identify the pattern",
          decision: "Compare successive velocities rather than their absolute values.",
          working: "Each velocity increases by 0.05 m s⁻¹",
        },
        {
          label: "Form a rate of change",
          decision: "Acceleration is change in velocity per change in time.",
          working: "a = 0.05 m s⁻¹ / 0.20 s",
        },
        {
          label: "Interpret the unit",
          decision: "Velocity changes by the same amount during every second.",
          working: "a = 0.25 m s⁻²",
        },
      ],
      answer:
        "The velocity–time graph has a slope of approximately 0.25 m s⁻², so the cart has approximately constant positive acceleration.",
      plausibility:
        "Between the first and last midpoint estimates, velocity rises by 0.15 m s⁻¹ in 0.60 s; 0.15/0.60 confirms the result.",
    },
    {
      id: "studio-graph-check",
      type: "check",
      eyebrow: "Cross-check the representation",
      title: "Match shape to physical meaning",
      prompt:
        "Which pair of graph descriptions best matches gaps that increase by the same amount every equal time interval?",
      options: [
        "A straight position–time line and a horizontal velocity–time line",
        "A position–time curve that becomes steeper and a rising straight velocity–time line",
        "A horizontal position–time line and a falling velocity–time line",
        "A falling position–time line and a vertical velocity–time line",
      ],
      correctIndex: 1,
      explanation:
        "Larger equal-time gaps mean increasing velocity and an increasing position–time slope. Equal velocity increases form a straight rising velocity–time line.",
      misconception:
        "Graph shape describes how quantities relate, not the cart's physical path.",
    },
    {
      id: "studio-synthesis-worked",
      type: "worked",
      eyebrow: "Synthesis investigation",
      title: "Explain why the chemical trail becomes more spread out",
      scenario:
        "The cart still releases one 1.0 × 10⁻⁴ mol drop every 0.20 s. Compare a region where neighbouring drops are 2.0 cm apart with one where they are 5.0 cm apart.",
      steps: [
        {
          label: "Convert spacing to release density",
          decision: "Estimate drops per metre as the reciprocal of spacing.",
          working:
            "At 0.020 m spacing: 1/0.020 = 50 drops m⁻¹; at 0.050 m: 1/0.050 = 20 drops m⁻¹",
        },
        {
          label: "Find chemical amount per length",
          decision: "Multiply drops per metre by moles per drop.",
          working:
            "50(1.0 × 10⁻⁴) = 5.0 × 10⁻³ mol m⁻¹; 20(1.0 × 10⁻⁴) = 2.0 × 10⁻³ mol m⁻¹",
        },
        {
          label: "Connect cause and pattern",
          decision:
            "The timer and drop composition are fixed; the cart's changing speed changes spatial density.",
          working:
            "Greater speed → greater distance per release interval → fewer drops and fewer moles per metre",
        },
      ],
      answer:
        "As the cart speeds up, timed releases spread over more track. The local amount falls from about 5.0 × 10⁻³ to 2.0 × 10⁻³ mol m⁻¹.",
      plausibility:
        "Five drops per second still represents 5.0 × 10⁻⁴ mol s⁻¹. Only the distribution along the track changes.",
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
        "Measurement limits constrain the precision of every derived conclusion.",
        "Concentration and volume connect visible drops to chemical amount and microscopic entities.",
        "Position–time slope and velocity–time slope connect sampled positions to velocity and acceleration.",
        "A useful model explains the pattern and predicts what another representation should show.",
      ],
      transferRule:
        "When a context is unfamiliar, inventory the quantities and representations, then look for a relationship you already understand.",
      nextLessonId: "lesson.integration.novel_notation_studio",
    },
  ],
};

export const scienceToolkitLessons: Lesson[] = [
  toolkitUnits,
  scientificNotation,
  ratiosRates,
  graphsChange,
];

export const chemistryFoundationLessons: Lesson[] = [particleModels, mole];

export const physicsFoundationLessons: Lesson[] = [describingMotion, motionGraphs];

export const integrationStudioLessons: Lesson[] = [integrationStudio];
