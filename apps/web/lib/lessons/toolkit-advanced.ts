import type { Lesson } from "@/lib/lesson-types";

const logarithms: Lesson = {
  id: "lesson.toolkit.logarithms",
  slug: "logarithms-and-log-scales",
  number: "1.1",
  stageId: "stage.toolkit_advanced",
  discipline: "toolkit",
  title: "Logarithms, exponentials, and log scales",
  summary:
    "Read logarithms as questions about exponents, use the log laws, interpret semi-log and log-log axes, and handle exponential growth and decay through rate constants and half-lives.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "State what a logarithm asks and convert between logarithmic form and index form.",
    "Derive and apply the product, quotient, and power laws for logarithms.",
    "Explain why a logarithmic axis compresses a wide range and straightens a power law.",
    "Read a value from a described logarithmic axis and from a semi-log or log-log plot.",
    "Relate an exponential rate constant to a half-life and use repeated halving.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.scientific_notation",
    "lesson.toolkit.graphs_change",
  ],
  blocks: [
    {
      id: "log-purpose",
      type: "concept",
      eyebrow: "Ask the exponent question",
      title: "A logarithm is a question about an exponent",
      paragraphs: [
        "Hydrogen ion concentrations in living systems run from about 10⁻¹ to 10⁻¹⁴ mol L⁻¹, and the sound intensities an ear handles comfortably span twelve powers of ten. Writing such quantities as ordinary decimals is unmanageable, and plotting them on a linear axis crushes everything small against zero. A logarithm solves this by recording the exponent instead of the number itself. Asking for log₁₀ 1000 is asking “ten raised to what power gives one thousand?” The answer is 3. A logarithm is an exponent, and nothing more mysterious than that.",
        "Because it stores an exponent, a logarithm converts a multiplicative world into an additive one. Multiplying a quantity by ten adds exactly 1 to its base-ten logarithm, whatever the starting value happened to be. Moving from 10⁻⁷ to 10⁻⁶ mol L⁻¹ and moving from 10⁻³ to 10⁻² mol L⁻¹ are both a single step on a log scale, even though the second change is ten thousand times larger in absolute terms. That is the point of the tool: a log scale asks how many times bigger, not how much bigger.",
        "Two bases matter. Base ten, written log₁₀ or simply log, suits anything naturally measured in powers of ten — acidity, absorbance, sound level, orders of magnitude. The natural base e ≈ 2.718, written ln, appears wherever a quantity changes at a rate proportional to its own size, which covers radioactive decay, drug clearance, and unrestricted population growth. The two are simply proportional, since ln x = 2.303 log₁₀ x because ln 10 = 2.303. Choosing a base changes the numbers, never the relationship being described.",
      ],
      callout: "log₁₀ x = y means the same thing as 10^y = x",
    },
    {
      id: "log-visual",
      type: "visual",
      eyebrow: "See the compression",
      title: "Equal distances stand for equal multiplying factors",
      introduction:
        "On a linear axis, equal distances represent equal differences. On a logarithmic axis, equal distances represent equal ratios.",
      visual: "log_scale",
      caption:
        "Each decade — 1 to 10, 10 to 100, 100 to 1000 — occupies the same width, so a range of a million fits comfortably on one page. Spacing inside a decade is uneven: 2 sits about 30% of the way across, and the halfway point of a decade is 10^0.5 ≈ 3.16, not 5.5. A logarithmic axis can never reach zero, because no power of ten equals zero.",
    },
    {
      id: "log-laws",
      type: "concept",
      eyebrow: "Turn indices into logs",
      title: "The log laws are the index laws, rewritten",
      paragraphs: [
        "Write two positive numbers in index form: a = 10^p and b = 10^q. By the definition of a logarithm, p = log a and q = log b. Multiplying them gives ab = 10^p × 10^q = 10^(p+q), because multiplying powers of the same base adds the indices. Reading that result back as a logarithm gives log(ab) = p + q = log a + log b. The product law is not a separate rule to memorise; it is the index law for multiplication, seen from the other side.",
        "The same substitution produces the other two laws. Dividing gives a/b = 10^p ÷ 10^q = 10^(p−q), so log(a/b) = log a − log b. Raising to a power gives aⁿ = (10^p)ⁿ = 10^(np), so log(aⁿ) = n log a. Two consequences follow at once. First, log 1 = 0, because 10⁰ = 1. Second, the logarithm of any number smaller than 1 is negative, because ten raised to a negative power is a fraction: a concentration of 10⁻⁵ mol L⁻¹ has a base-ten logarithm of −5.",
        "Two cautions are worth fixing now. There is no law for log(a + b): logarithms convert products into sums, not sums into sums, so log(3 + 4) is not log 3 + log 4. And a logarithm is defined only for a positive argument, because no real power of ten gives zero or a negative number. The laws also make scientific notation trivial to handle. For a number written as m × 10^e with 1 ≤ m < 10, the logarithm is log₁₀ m + e: the integer part records the order of magnitude and the decimal part records the leading digits.",
      ],
      callout:
        "log(ab) = log a + log b · log(a/b) = log a − log b · log(aⁿ) = n log a",
    },
    {
      id: "log-worked-laws",
      type: "worked",
      eyebrow: "Worked example",
      title: "Build a logarithm from the laws alone",
      scenario:
        "Given only that log₁₀ 2 = 0.301, find log₁₀ 8000 without a calculator, and then state the value of 10^3.903.",
      steps: [
        {
          label: "Rewrite the number using the parts you know",
          decision:
            "The only logarithm supplied is that of 2, so 8000 must be expressed entirely in terms of 2 and powers of ten.",
          working: "8000 = 8 × 1000 = 2³ × 10³",
        },
        {
          label: "Split the product into a sum",
          decision:
            "The product law converts a multiplication inside the logarithm into an addition outside it.",
          working: "log₁₀(2³ × 10³) = log₁₀ 2³ + log₁₀ 10³",
        },
        {
          label: "Bring the indices down",
          decision:
            "The power law turns each exponent into a multiplier, and log₁₀ 10³ = 3 straight from the definition.",
          working: "= 3 log₁₀ 2 + 3 = 3 × 0.301 + 3",
        },
        {
          label: "Add the two contributions",
          decision:
            "The integer part fixes the order of magnitude and the decimal part fixes the leading digits.",
          working: "= 0.903 + 3 = 3.903",
        },
        {
          label: "Read the statement backwards",
          decision:
            "Taking a base-ten logarithm and raising ten to a power are inverse operations, so the final line can be inverted directly.",
          working: "10^3.903 = 8000",
        },
      ],
      answer:
        "log₁₀ 8000 = 3.903, and equivalently 10^3.903 = 8000.",
      plausibility:
        "8000 lies between 10³ = 1000 and 10⁴ = 10 000, so its logarithm must lie between 3 and 4. It should also sit much nearer 4 than 3, because 8000 is most of the way across that decade, and 3.903 does.",
    },
    {
      id: "log-check-laws",
      type: "check",
      eyebrow: "Your turn",
      title: "Undo a difference of logarithms",
      prompt:
        "Two positive quantities satisfy log₁₀ x = 6.7 and log₁₀ y = 4.7. What is the value of x / y?",
      options: [
        "2.0",
        "1.43, obtained from 6.7 ÷ 4.7",
        "100",
        "10^11.4",
      ],
      correctIndex: 2,
      explanation:
        "The quotient law used in reverse gives log₁₀(x/y) = log₁₀ x − log₁₀ y = 6.7 − 4.7 = 2.0, so x/y = 10² = 100.",
      misconception:
        "Dividing two numbers means subtracting their logarithms, not dividing them. The difference of 2.0 is itself a logarithm and must be undone by raising ten to that power before it becomes a ratio; stopping at 2.0 leaves the answer a hundred times too small.",
    },
    {
      id: "log-axes",
      type: "concept",
      eyebrow: "Read a log axis",
      title: "A logarithmic axis straightens curves a linear axis hides",
      paragraphs: [
        "On a logarithmic axis, the distance along the axis is proportional to the logarithm of the value rather than to the value. Every decade therefore occupies the same width, so data spanning six orders of magnitude fit on one page and small values remain readable instead of collapsing onto the origin. The cost is that visual distance now means ratio: two points the same distance apart anywhere on the axis differ by the same factor, not by the same amount.",
        "A semi-log plot uses a logarithmic vertical axis and a linear horizontal one, and it is the natural test for exponential change. Taking natural logarithms of N = N₀e^(−kt) gives ln N = ln N₀ − kt, which is the equation of a straight line in t with gradient −k and intercept ln N₀. So an exponential process, curved and hard to judge on linear axes, becomes a straight line whose gradient is the rate constant. If base-ten logarithms are used instead, the gradient is −k / 2.303.",
        "A log-log plot uses logarithmic scales on both axes, and it is the natural test for a power law. Taking logarithms of y = Ax^n gives log y = log A + n log x, again a straight line, this time with gradient n and vertical intercept log A. The gradient of a log-log plot is therefore the exponent of the underlying relationship, which is how exponents are measured experimentally. The shape of a plot is evidence about the form of a law only once you know which axes are logarithmic.",
      ],
      callout:
        "straight on semi-log ⇒ exponential · straight on log-log ⇒ power law, gradient = exponent",
    },
    {
      id: "log-check-axis",
      type: "check",
      eyebrow: "Read the representation",
      title: "Take a value off a logarithmic axis",
      prompt:
        "A vertical axis is logarithmic, with labelled gridlines at 10², 10³ and 10⁴ arbitrary units. A plotted point sits exactly halfway between the 10³ and 10⁴ gridlines. What value does it represent?",
      options: [
        "5.5 × 10³, the arithmetic midpoint of 1000 and 10 000",
        "3.5 × 10³, reading the exponent 3.5 as the leading digits",
        "3.2 × 10³",
        "2.0 × 10³, since halfway between the lines must mean twice the lower one",
      ],
      correctIndex: 2,
      explanation:
        "Halfway along a decade means halfway in the exponent, so the point represents 10^3.5. Since 10^0.5 = 3.16, the value is 3.16 × 10³, which rounds to 3.2 × 10³.",
      misconception:
        "Midpoints on a logarithmic axis are averages of exponents, not averages of values. The point halfway between 10³ and 10⁴ is their geometric mean, √(10³ × 10⁴) = 10^3.5 ≈ 3160, which is far below the arithmetic mean of 5500.",
    },
    {
      id: "log-exponential",
      type: "concept",
      eyebrow: "Change proportional to size",
      title: "Exponential change means a constant fractional rate",
      paragraphs: [
        "A quantity decays exponentially when the amount lost per unit time is proportional to how much is present at that instant. Nuclei do not agree among themselves how many will decay; each has a fixed probability per second, so the total loss rate is simply proportional to the number remaining. In symbols the rate of change is −kN, and the quantity that satisfies this is N = N₀e^(−kt), where N₀ is the amount at t = 0 and k is the rate constant with units of reciprocal time such as s⁻¹, h⁻¹ or day⁻¹. Growth follows the same form with a positive exponent.",
        "The half-life follows from the equation rather than being a separate fact. Set N = N₀/2, so that e^(−k t½) = 1/2. Taking natural logarithms of both sides gives −k t½ = ln(1/2) = −ln 2, and therefore t½ = ln 2 / k ≈ 0.693 / k. The starting amount N₀ has cancelled, which is the defining signature of exponential behaviour: the time to fall by half is the same whether you begin with a gram or a microgram. For exponential growth the identical algebra gives a doubling time of ln 2 / k.",
        "That independence makes repeated halving a fast shortcut. After n half-lives the fraction remaining is (1/2)ⁿ, so one half-life leaves 50%, two leave 25%, three leave 12.5%, four leave 6.25% and five leave 3.125%. Ten half-lives leave 1/1024, or roughly one thousandth. The amount approaches zero without ever reaching it in the model, so a statement that a substance has completely gone after some number of half-lives is a statement about detection limits, not about the mathematics.",
      ],
      callout:
        "N = N₀e^(−kt) · t½ = ln 2 / k ≈ 0.693 / k · after n half-lives, N = N₀ × (1/2)ⁿ",
    },
    {
      id: "log-worked-decay",
      type: "worked",
      eyebrow: "Two routes, one answer",
      title: "Turn a rate constant into a clinical prediction",
      scenario:
        "A drug is eliminated with first-order kinetics and a rate constant k = 0.1386 h⁻¹. Immediately after a dose, the plasma concentration is 12.0 mg L⁻¹. Find the elimination half-life, and the plasma concentration 20.0 h later.",
      steps: [
        {
          label: "Convert the rate constant into a half-life",
          decision:
            "The half-life follows directly from k alone and does not depend on the starting concentration, so it can be found first.",
          working: "t½ = ln 2 / k = 0.693 / 0.1386 h⁻¹ = 5.00 h",
        },
        {
          label: "Count how many half-lives have elapsed",
          decision:
            "Because 20.0 h is an exact multiple of the half-life, repeated halving is quicker and less error-prone than exponentiating.",
          working: "n = 20.0 h ÷ 5.00 h = 4.00 half-lives",
        },
        {
          label: "Halve the concentration four times",
          decision:
            "Each half-life multiplies the remaining concentration by one half, so four of them multiply it by (1/2)⁴ = 1/16.",
          working: "C = 12.0 mg L⁻¹ × 1/16 = 0.750 mg L⁻¹",
        },
        {
          label: "Confirm using the exponential form",
          decision:
            "The two routes are the same statement, so agreement checks both the arithmetic and the value taken for k.",
          working:
            "kt = 0.1386 h⁻¹ × 20.0 h = 2.772; e^(−2.772) = 0.0625; 12.0 mg L⁻¹ × 0.0625 = 0.750 mg L⁻¹",
        },
      ],
      answer:
        "The elimination half-life is 5.00 h, and 20.0 h after the dose the plasma concentration has fallen to 0.750 mg L⁻¹, one sixteenth of its initial value.",
      plausibility:
        "Four half-lives should leave a little over 6% of the starting amount, and 0.750 ÷ 12.0 = 0.0625, which is exactly 6.25%. The useful general result is that about 94% of a first-order drug has been cleared after four half-lives, whatever the size of the dose.",
    },
    {
      id: "log-check-halving",
      type: "check",
      eyebrow: "Count the halvings",
      title: "Track activity through several half-lives",
      prompt:
        "A radioactive tracer with a half-life of 3.0 hours is injected at 08:00. What fraction of the injected activity remains at 20:00 on the same day?",
      options: [
        "50%, because only one half-life applies to a single injection",
        "25%",
        "12.5%",
        "6.25%",
      ],
      correctIndex: 3,
      explanation:
        "The interval from 08:00 to 20:00 is 12.0 h, which contains 12.0 ÷ 3.0 = 4 half-lives. Each one halves the activity, so the fraction remaining is (1/2)⁴ = 1/16 = 6.25%.",
      misconception:
        "Half-lives compound multiplicatively rather than subtracting, and it is easy to lose one by counting the gaps between halvings instead of the halvings themselves. Four successive halvings give 50%, then 25%, then 12.5%, and only then 6.25%.",
    },
    {
      id: "log-check-loglog",
      type: "check",
      eyebrow: "Interpret a gradient",
      title: "Recover a law from a log-log line",
      prompt:
        "Measurements of two positive variables are plotted as log₁₀ y against log₁₀ x. The points fall on a straight line of gradient 3.0 with a vertical intercept of 0.60. Which relationship do the data support?",
      options: [
        "y = 4.0x³",
        "y = 3.0x + 4.0",
        "y = 0.60x³",
        "y = 3.0x^0.60",
      ],
      correctIndex: 0,
      explanation:
        "A straight log-log line means log₁₀ y = n log₁₀ x + log₁₀ A, so the gradient is the exponent and the intercept is the logarithm of the coefficient. Here n = 3.0 and log₁₀ A = 0.60, giving A = 10^0.60 = 4.0 and therefore y = 4.0x³.",
      misconception:
        "A straight line on log-log axes does not describe a linear relationship between x and y; it describes a power law. The intercept is a logarithm and must be undone before it becomes the coefficient, and the gradient belongs in the exponent rather than in front of x.",
    },
    {
      id: "log-transfer-check",
      type: "check",
      eyebrow: "Transfer the reasoning",
      title: "Convert a logarithmic scale back to a ratio",
      prompt:
        "Sound intensity level is defined as L = 10 log₁₀(I / I₀) decibels, where I₀ is a fixed reference intensity. A machine is measured at 95 dB and the background in the same room at 65 dB. By what factor is the machine’s sound intensity greater than the background?",
      options: [
        "About 1.5 times",
        "30 times",
        "1000 times",
        "10 000 times",
      ],
      correctIndex: 2,
      explanation:
        "Subtracting the two definitions removes the reference: 95 − 65 = 10 log₁₀(I_machine / I_background), so log₁₀ of the ratio is 3.0 and the ratio is 10³ = 1000.",
      misconception:
        "A decibel figure is ten times the logarithm of a ratio, so a difference of 30 units is neither a ratio of 30 nor the ratio 95/65 ≈ 1.5. Every 10 dB is one further factor of ten, and 30 dB is three of them; the 10 000 answer counts the labels 65, 75, 85 and 95 as four factors of ten instead of the three ten-decibel steps that separate them.",
    },
    {
      id: "log-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "A logarithm records an exponent, so ratios become distances",
      points: [
        "A logarithm is an exponent: log₁₀ x = y states that ten raised to the power y equals x.",
        "The log laws restate the index laws — products become sums, quotients become differences, and powers become multipliers.",
        "Equal distances on a logarithmic axis represent equal multiplying factors, so the midpoint of a decade is about 3.16, never 5.5.",
        "A straight line on semi-log axes indicates exponential change, and a straight line on log-log axes indicates a power law whose exponent is the gradient.",
        "Exponential decay N = N₀e^(−kt) has half-life t½ = ln 2 / k, which is independent of the starting amount.",
        "After n half-lives a fraction (1/2)ⁿ remains, giving 50%, 25%, 12.5% and 6.25%, approaching zero without reaching it.",
      ],
      transferRule:
        "If a quantity spans many orders of magnitude, or changes by a constant factor per unit of something else, take logarithms first and then read the gradient.",
      nextLessonId: "lesson.toolkit.proportional_reasoning",
    },
  ],
};

const proportionalReasoning: Lesson = {
  id: "lesson.toolkit.proportional_reasoning",
  slug: "proportional-reasoning-and-limits",
  number: "1.2",
  stageId: "stage.toolkit_advanced",
  discipline: "toolkit",
  title: "Proportional reasoning and limiting cases",
  summary:
    "Predict how one quantity answers a change in another using scaling exponents, inverse-square spreading, and surface-to-volume geometry, then test candidate relationships against limits and units.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "Predict the factor change in y from a factor change in x whenever y is proportional to xⁿ.",
    "Explain why a quantity spreading uniformly from a point source falls as the inverse square of distance.",
    "Apply the square-cube law to surface area, volume, and surface-area-to-volume ratio.",
    "Answer a question of the form “what happens to Y if X doubles” without computing any value.",
    "Reject a candidate relationship using limiting cases and dimensional reasoning.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.ratios_rates",
    "lesson.toolkit.graphs_change",
  ],
  blocks: [
    {
      id: "prop-purpose",
      type: "concept",
      eyebrow: "Change without numbers",
      title: "Most scaling questions need no values at all",
      paragraphs: [
        "Asked what happens to the kinetic energy of a car when its speed triples, most people reach for numbers: invent a mass, invent a speed, compute twice, divide. None of that is necessary. Kinetic energy is proportional to the square of speed, so tripling the speed multiplies the energy by 3² = 9. The mass, the factor of one half, and the choice of units all cancel the moment a ratio is taken. A scaling argument strips a relationship down to the only part that governs how it responds to change.",
        "This matters because unfamiliar scientific material usually supplies a relationship and then asks about a change rather than a value. A passage may give an expression for drag, or state that the electrical resistance of a wire is inversely proportional to its cross-sectional area, and then ask what happens if a dimension doubles. Working in factors instead of values is faster, needs no calculator, and cannot fail through a unit-conversion slip. It also keeps attention on the structure of the relationship rather than on arithmetic.",
        "The discipline is to state the relationship in words before touching it: y is proportional to x squared; intensity is inversely proportional to the square of distance; flow is proportional to the fourth power of radius. Then apply the change as a single multiplying factor. Everything that follows is multiplication and division of small whole numbers, which is exactly the kind of work that can be done reliably under pressure.",
      ],
      callout: "if y ∝ xⁿ, then multiplying x by k multiplies y by kⁿ",
    },
    {
      id: "prop-visual",
      type: "visual",
      eyebrow: "Compare the responses",
      title: "The exponent decides how sharply a quantity answers",
      introduction:
        "Direct, inverse, and inverse-square relationships connect the same pair of variables, but they answer a doubling of the input in three quite different ways.",
      visual: "proportion",
      caption:
        "Doubling x doubles y when y ∝ x, halves y when y ∝ 1/x, and quarters y when y ∝ 1/x². The larger the magnitude of the exponent, the steeper the response; a negative exponent produces a curve that falls towards zero without ever touching it, so no finite input drives the output to nothing.",
    },
    {
      id: "prop-power-law",
      type: "concept",
      eyebrow: "Take the ratio",
      title: "Taking a ratio deletes the constant and leaves the exponent",
      paragraphs: [
        "Write the relationship with its constant included: y = Axⁿ, where A absorbs every fixed quantity — masses, densities, π, unit conversions. Now feed in a new input x′ = kx. Then y′ = A(kx)ⁿ = Akⁿxⁿ = kⁿ(Axⁿ) = kⁿy, so dividing gives y′/y = kⁿ. The constant A has vanished, which is precisely why its value never needs to be known, or even stated in the question. That single line is the whole content of a scaling argument, and it holds for any real exponent, positive, negative, or fractional.",
        "A negative exponent describes an inverse relationship. If y ∝ x⁻¹, doubling x multiplies y by 2⁻¹ = 1/2. If y ∝ x⁻², tripling x multiplies y by 3⁻² = 1/9. A fractional exponent describes a muted response: the period of a simple pendulum is proportional to the square root of its length, so quadrupling the length multiplies the period by 4^(1/2) = 2, not by 4. Read the exponent as an instruction about how strongly the output answers the input.",
        "The inverse-square law is not an arbitrary rule but a piece of geometry. A small source radiating power P uniformly in all directions sends that power outwards through imaginary spheres centred on it. If nothing is absorbed in transit, the whole of P must cross every one of those spheres. The surface area of a sphere is 4πr², so the power crossing unit area — the intensity — is I = P/(4πr²). With P fixed, I ∝ 1/r². Anything that spreads uniformly from a point into three dimensions obeys the same law.",
      ],
      callout: "I = P / (4πr²), so I ∝ 1/r² and doubling r quarters the intensity",
    },
    {
      id: "prop-worked-inverse-square",
      type: "worked",
      eyebrow: "Worked example",
      title: "Move a detector without recalculating anything",
      scenario:
        "A small light source radiates equally in all directions. A detector 2.0 m away records an irradiance of 45 μW m⁻². Absorption by the air is negligible. What will the same detector record at 6.0 m from the source?",
      steps: [
        {
          label: "Name the relationship in words",
          decision:
            "The source is small and radiates in every direction, so its output spreads over the surface of a sphere and the intensity follows the inverse square of distance.",
          working: "I ∝ 1/r², that is I = A r⁻² for some fixed constant A",
        },
        {
          label: "Find the factor by which the distance changes",
          decision:
            "Only the ratio of the two distances enters a scaling argument, so no absolute distance needs to be carried through the working.",
          working: "k = 6.0 m ÷ 2.0 m = 3.0",
        },
        {
          label: "Raise that factor to the exponent",
          decision:
            "The exponent is −2, so the intensity is multiplied by k⁻²; it is not simply divided by k.",
          working: "I′ / I = k⁻² = 3.0⁻² = 1/9",
        },
        {
          label: "Apply the factor to the measured reading",
          decision:
            "Only a dimensionless factor has been applied, so the unit of the answer is unchanged.",
          working: "I′ = 45 μW m⁻² × 1/9 = 5.0 μW m⁻²",
        },
      ],
      answer:
        "The detector will record an irradiance of 5.0 μW m⁻² at 6.0 m from the source.",
      plausibility:
        "Tripling the distance spreads the same power over a sphere with 3² = 9 times the area, so the reading must fall by a factor of nine rather than three. Checking the direction first is worthwhile: moving further from a source can only ever reduce the reading.",
    },
    {
      id: "prop-check-scaling",
      type: "check",
      eyebrow: "Your turn",
      title: "Apply a fourth-power dependence",
      prompt:
        "For steady laminar flow along a rigid tube at a fixed pressure difference, the volumetric flow rate Q is proportional to the fourth power of the tube radius. A vessel narrows so that its radius falls to half its original value. What happens to the flow rate?",
      options: [
        "It falls to one half",
        "It falls to one quarter",
        "It falls to one eighth",
        "It falls to one sixteenth",
      ],
      correctIndex: 3,
      explanation:
        "Q ∝ r⁴, so multiplying r by k = 1/2 multiplies Q by k⁴ = (1/2)⁴ = 1/16. The flow falls to 6.25% of its original value.",
      misconception:
        "The exponent applies to the whole scaling factor, not to part of it, so halving the radius neither halves nor quarters the flow. A fourth-power dependence makes flow extraordinarily sensitive to radius, which is why a modest narrowing of a vessel has consequences out of all proportion to its size.",
    },
    {
      id: "prop-square-cube",
      type: "concept",
      eyebrow: "Length, area, volume",
      title: "Volume outruns surface area whenever an object grows",
      paragraphs: [
        "Scale every linear dimension of an object by the same factor k while keeping its shape unchanged. Each face keeps its shape but every length across it is multiplied by k, so every area is multiplied by k². Every volume is built from three independent lengths, so it is multiplied by k³. For a cube of side L the surface area is 6L² and the volume is L³; for a sphere of radius r the surface area is 4πr² and the volume is (4/3)πr³. The constants differ between shapes, but the exponents 2 and 3 never do.",
        "The consequence is that the ratio of surface area to volume falls as an object gets larger. For the cube, SA/V = 6L² ÷ L³ = 6/L. For the sphere, SA/V = 4πr² ÷ (4/3)πr³ = 3/r. In both cases the ratio is inversely proportional to the linear size, so doubling the size halves the surface area available per unit of volume. Nothing biological has been assumed here; this is pure geometry, and it holds for any shape that is scaled without being distorted.",
        "Living systems run into this constantly. Exchange with the surroundings — of oxygen, nutrients, waste, and heat — happens across surfaces, whereas demand and heat production track the volume of tissue. A cell that grows too large therefore cannot supply its interior by diffusion across its membrane, which sets an upper limit on cell size and explains flattened, elongated, and microvillus-covered shapes that raise surface area without raising volume. The same argument explains why a small mammal loses heat faster per gram of body mass than a large one.",
      ],
      callout: "SA ∝ L², V ∝ L³, therefore SA/V ∝ 1/L",
    },
    {
      id: "prop-worked-cell",
      type: "worked",
      eyebrow: "Scale a whole object",
      title: "Follow area, volume, and their ratio through growth",
      scenario:
        "A spherical cell of radius 5.0 μm grows into a spherical cell of radius 20.0 μm. Find the factor change in its surface area, in its volume, and in its surface-area-to-volume ratio, and state what this means for diffusive supply.",
      steps: [
        {
          label: "Find the linear scale factor",
          decision:
            "Both cells are spheres, so the shape is unchanged and a single factor describes the whole transformation.",
          working: "k = 20.0 μm ÷ 5.0 μm = 4.0",
        },
        {
          label: "Scale the area and the volume separately",
          decision:
            "Area carries an exponent of 2 and volume an exponent of 3, whatever values the constants 4π and 4π/3 happen to take.",
          working:
            "surface area × k² = 4.0² = 16; volume × k³ = 4.0³ = 64",
        },
        {
          label: "Combine the two factors into the ratio",
          decision:
            "Surface-area-to-volume is an area divided by a volume, so its scaling factor is k² ÷ k³ = k⁻¹.",
          working: "SA/V × 4.0⁻¹ = 0.25",
        },
        {
          label: "Check against the explicit formula",
          decision:
            "For a sphere SA/V = 3/r, so both ratios can be computed directly and compared with the scaling prediction.",
          working:
            "3 ÷ 5.0 μm = 0.60 μm⁻¹; 3 ÷ 20.0 μm = 0.15 μm⁻¹; 0.15 ÷ 0.60 = 0.25",
        },
      ],
      answer:
        "Surface area increases 16-fold and volume 64-fold, so the surface-area-to-volume ratio falls to one quarter, from 0.60 μm⁻¹ to 0.15 μm⁻¹. Since diffusive supply is limited by membrane area while demand tracks cytoplasmic volume, the larger cell is four times worse supplied per unit of cytoplasm.",
      plausibility:
        "Volume must grow faster than surface area because it carries the higher exponent, so the ratio can only fall — a sphere can never improve its surface-to-volume ratio by growing. The direct check, 64 ÷ 16 = 4, confirms a fall by a factor of four.",
    },
    {
      id: "prop-check-sav",
      type: "check",
      eyebrow: "Transfer to a cell",
      title: "Set supply against demand",
      prompt:
        "A spherical single-celled organism doubles its radius. Its oxygen demand is proportional to the volume of its cytoplasm, and its oxygen uptake is proportional to its membrane surface area. The membrane’s properties are unchanged. How does uptake per unit demand change?",
      options: [
        "It doubles, because the surface area has grown",
        "It is unchanged, because area and volume both increased",
        "It halves",
        "It falls to one quarter",
      ],
      correctIndex: 2,
      explanation:
        "Uptake scales as k² = 2² = 4 while demand scales as k³ = 2³ = 8, so uptake per unit demand scales as 4/8 = 1/2. The same result follows from SA/V = 3/r, which halves when r doubles.",
      misconception:
        "Both quantities really do increase, so it is tempting to conclude that they cancel — but they increase at different rates, and a ratio of two growing quantities need not stay fixed. The volume exponent exceeds the area exponent by exactly one, so the ratio always changes by k⁻¹, giving one half here rather than one quarter.",
    },
    {
      id: "prop-limits",
      type: "concept",
      eyebrow: "Interrogate the formula",
      title: "A wrong relationship usually breaks at an extreme or in its units",
      paragraphs: [
        "Before trusting a relationship, push its variable to the ends of its range and ask whether the prediction remains physically sensible. What should happen as x → 0? What should happen as x → ∞? A model for the response of a tissue to a drug ought to give zero response at zero concentration, and ought to level off at a finite ceiling at high concentration, because receptors are finite in number. A candidate that predicts an infinite response at zero dose, or unlimited response at high dose, has failed regardless of how neatly it fits the middle of the data.",
        "Take the saturating relationship v = Vₘₐₓ C / (K + C), which describes enzyme rates and carrier-mediated transport. At C = 0 the numerator is zero, so v = 0, as required. When C is very large, K becomes negligible beside C and the expression tends to Vₘₐₓ C / C = Vₘₐₓ, a finite ceiling. Setting C = K gives v = Vₘₐₓ K / 2K = Vₘₐₓ / 2, which hands K a physical meaning: it is the concentration producing half the maximum rate. Limiting cases do not only reject wrong relationships; they explain the parts of right ones.",
        "Dimensional reasoning is a second filter and an even faster one. Every term that is added or equated must carry the same units, and the argument of a logarithm or an exponential must be dimensionless. A proposed expression for a time therefore cannot be h/g, because metres divided by metres per second squared gives seconds squared rather than seconds. It could be √(h/g), which does give seconds. Units can never confirm a relationship, since they cannot detect a missing factor of 2, but they reject wrong ones reliably and at almost no cost.",
      ],
      callout: "test x → 0, then test x → ∞, then test the units",
    },
    {
      id: "prop-check-units",
      type: "check",
      eyebrow: "Check the units",
      title: "Reject candidates on dimensions alone",
      prompt:
        "An object falls from rest through a height h in a gravitational field of strength g. A student cannot recall the expression for the time taken and offers four candidates. Which one at least has the correct units for a time?",
      options: [
        "t = h / g",
        "t = √(h / g)",
        "t = √(g / h)",
        "t = h g",
      ],
      correctIndex: 1,
      explanation:
        "With h in metres and g in m s⁻², the quantity h/g has units m ÷ m s⁻² = s². Its square root therefore has units of seconds, which is what a time requires. The correct expression is t = √(2h/g), and the dimensionless factor of 2 is exactly what a unit check cannot detect.",
      misconception:
        "Units must be worked through term by term rather than judged by the look of the symbols. The first candidate gives s², the fourth gives m² s⁻² which is a speed squared, and the third gives s⁻¹ — a reciprocal time, the tell-tale result of writing a ratio the wrong way up.",
    },
    {
      id: "prop-check-limiting",
      type: "check",
      eyebrow: "Test the extremes",
      title: "Choose the relationship that survives both limits",
      prompt:
        "A carrier-mediated transport process must move no solute at all when the external concentration C is zero, and must approach a fixed maximum rate at very high C because the number of carrier proteins is finite. Which candidate expression satisfies both requirements? Vₘₐₓ and K are positive constants.",
      options: [
        "v = Vₘₐₓ C / (K + C)",
        "v = Vₘₐₓ C",
        "v = Vₘₐₓ K / C",
        "v = Vₘₐₓ (K + C) / C",
      ],
      correctIndex: 0,
      explanation:
        "Substituting C = 0 into the first expression gives v = 0, and as C grows without bound K becomes negligible beside C, so v tends to Vₘₐₓ. The second grows without any ceiling; the third and fourth both become infinite as C approaches zero, and the third additionally falls to zero at high C.",
      misconception:
        "A relationship that fits observed data over a narrow range can still be impossible outside it, so goodness of fit is not the first thing to test. Evaluating the two ends of the range eliminates three of these four candidates in a single line of reasoning, before any data are consulted.",
    },
    {
      id: "prop-transfer-check",
      type: "check",
      eyebrow: "Transfer the exponent",
      title: "Extract a power law from two readings",
      prompt:
        "A small fluorescent bead is viewed by a detector. At 3.0 cm from the bead the detector records 8.0 arbitrary units; moved to 12.0 cm it records 0.50 units. Absorption by the intervening medium is negligible. Which conclusion is best supported?",
      options: [
        "The readings are consistent with intensity falling as the inverse square of distance",
        "The readings are consistent with intensity falling in inverse proportion to distance",
        "The readings show intensity falling as the inverse cube of distance",
        "The readings fit no simple power law, so the bead must be absorbing its own light",
      ],
      correctIndex: 0,
      explanation:
        "The distance is multiplied by 12.0 ÷ 3.0 = 4.0 while the reading is multiplied by 0.50 ÷ 8.0 = 1/16. Since 4.0⁻² = 1/16, the exponent is −2, which is the inverse-square behaviour expected of a small source radiating into three dimensions.",
      misconception:
        "The distance factor must be raised to the exponent before it is compared with the intensity factor. A 1/r dependence would have given 8.0 ÷ 4 = 2.0 units and a 1/r³ dependence 8.0 ÷ 64 = 0.125 units, so neither matches the measurement of 0.50 units.",
    },
    {
      id: "prop-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Work in factors, then check the ends of the range",
      points: [
        "If y ∝ xⁿ, multiplying x by k multiplies y by kⁿ, and every constant in the relationship cancels.",
        "A negative exponent signals an inverse relationship, and a fractional exponent signals a muted response.",
        "Uniform spreading from a point source into three dimensions gives I = P/(4πr²), so intensity falls as 1/r².",
        "Scaling a shape by k multiplies its area by k² and its volume by k³, so surface-area-to-volume falls by a factor of k.",
        "Exchange across surfaces set against demand governed by volume is why cells and organisms cannot simply be scaled up.",
        "Reject candidate relationships by testing x → 0, testing x → ∞, and checking the units, before testing any data.",
      ],
      transferRule:
        "Ask what factor the input has been multiplied by, raise that factor to the exponent, and only then decide whether any number is needed at all.",
      nextLessonId: "lesson.toolkit.experimental_design",
    },
  ],
};

const experimentalDesign: Lesson = {
  id: "lesson.toolkit.experimental_design",
  slug: "variables-controls-and-causal-claims",
  number: "1.3",
  stageId: "stage.toolkit_advanced",
  discipline: "toolkit",
  title: "Variables, controls, and causal claims",
  summary:
    "Separate independent, dependent, and controlled variables, use negative and positive controls, recognise confounding, and match the strength of a claim to what the design can actually support.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Identify the independent, dependent, and controlled variables in a described investigation.",
    "State what a negative control and a positive control each rule out.",
    "Explain why a correlation underdetermines a causal claim, and how randomisation and blinding help.",
    "Distinguish replication from repetition, and systematic error from random error.",
    "Decide which comparison in a results table is genuinely informative.",
    "Match the wording of a conclusion to the strength of evidence a design provides.",
  ],
  prerequisiteLessonIds: ["lesson.toolkit.graphs_change"],
  blocks: [
    {
      id: "exp-purpose",
      type: "concept",
      eyebrow: "Isolate one cause",
      title: "A design earns a conclusion; data alone cannot",
      paragraphs: [
        "Every experiment is an argument, and the data are only its middle. The design decides what the data are permitted to mean. If two things were changed at once, no measurement, however precise, can say which of them mattered. If there was nothing to compare against, a change observed over time cannot be separated from the treatment that happened to be given during that time. Reading unfamiliar scientific material well therefore means reading the design first and the numbers second, and asking which rival explanations the design has actually excluded.",
        "The central move is isolation. Choose one thing to change deliberately, measure one thing in response, and hold constant everything else that could plausibly affect the outcome. Anything not held constant becomes a rival explanation for whatever is observed. This is why a well-written method reads mostly as a list of things that were kept the same, punctuated by the single thing that was not — the item on that list which the investigator chose to vary.",
        "Isolation is far easier in a beaker than in a person. Where variables cannot be held constant — age, genotype, diet, motivation, occupation — they are instead balanced across groups by random allocation, or removed from the comparison during analysis. The underlying logic is unchanged: the aim is always to arrive at groups that differ in exactly one respect, and that one respect must be the one the investigator controls.",
      ],
      callout:
        "change one thing · measure one thing · hold the rest constant · compare against a control",
    },
    {
      id: "exp-visual",
      type: "visual",
      eyebrow: "Inspect the setup",
      title: "The comparison, not the measurement, carries the argument",
      introduction:
        "Two conditions that differ in exactly one respect answer a question. Two conditions that differ in three respects answer nothing, however carefully each is measured.",
      visual: "controls",
      caption:
        "On the left the two groups are matched in every respect but one, so a difference in outcome can be attributed to that one variable. On the right three features differ at once, so no outcome can be attributed to any of them, no matter how large the difference in the readings turns out to be.",
    },
    {
      id: "exp-variables",
      type: "concept",
      eyebrow: "Name the three roles",
      title: "Every quantity in an investigation plays one of three roles",
      paragraphs: [
        "The independent variable is the one the investigator sets or selects: the temperature of a water bath, the dose administered, the concentration of substrate supplied. By convention it occupies the horizontal axis. The dependent variable is the one measured in response, and is expected to depend on the first: the volume of gas produced, the time to a colour change, the systolic blood pressure. It occupies the vertical axis. Controlled variables are everything else that could affect the dependent variable and are therefore held constant across all conditions.",
        "These labels describe roles, not the quantities themselves. Temperature is the independent variable in a study of how heat affects enzyme activity, and a controlled variable in a study of how pH affects the same enzyme. Assigning each quantity its role is the first step in reading any method, and doing so often exposes immediately whether the investigation is capable of answering the question it claims to answer.",
        "Controlled variables should be identified by thinking about mechanism rather than by listing everything conceivable. In an enzyme experiment, temperature, pH, enzyme concentration, substrate concentration, and the total volume of the reaction mixture all act on the rate by routes that are understood, so all of them must be fixed. The colour of the bench does not. A variable is worth naming as controlled when there is a plausible mechanism by which it could change the dependent variable.",
      ],
      callout:
        "independent: deliberately set · dependent: measured in response · controlled: held constant",
    },
    {
      id: "exp-worked-table",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the one comparison a table can support",
      scenario:
        "Four tubes each contain the same volume of hydrogen peroxide solution, and the volume of oxygen released in 60 s is recorded. Tube 1: catalase, 25 °C, pH 7, 24 cm³. Tube 2: catalase, 35 °C, pH 7, 39 cm³. Tube 3: catalase, 35 °C, pH 5, 14 cm³. Tube 4: catalase boiled for 5 min, 35 °C, pH 7, 0 cm³. Which comparison isolates the effect of temperature, and by how much does the rate differ?",
      steps: [
        {
          label: "List what differs within each pair",
          decision:
            "A comparison is informative only if the two conditions differ in exactly one respect, so the differences must be catalogued before any arithmetic.",
          working:
            "1 against 2: temperature only. 2 against 3: pH only. 1 against 3: temperature and pH together. 2 against 4: active or denatured enzyme.",
        },
        {
          label: "Select the single-difference pair for temperature",
          decision:
            "Tubes 1 and 3 differ in two variables at once, so any difference between them cannot be attributed to either variable alone and must be set aside.",
          working:
            "use tubes 1 and 2; discard the 1-against-3 comparison as uninformative about temperature",
        },
        {
          label: "Convert both readings into rates",
          decision:
            "Both measurements share the same 60 s window, so dividing by time gives directly comparable rates with a meaningful unit.",
          working:
            "24 cm³ ÷ 60 s = 0.40 cm³ s⁻¹; 39 cm³ ÷ 60 s = 0.65 cm³ s⁻¹",
        },
        {
          label: "Interpret the fourth tube",
          decision:
            "Boiling denatures the enzyme while leaving everything else in place, so tube 4 is a negative control rather than a fifth data point.",
          working:
            "0 cm³ in 60 s, so no oxygen arises from spontaneous decomposition or from the apparatus",
        },
      ],
      answer:
        "Tubes 1 and 2 isolate temperature: raising it from 25 °C to 35 °C raises the rate from 0.40 to 0.65 cm³ s⁻¹, an increase of 0.25 cm³ s⁻¹, or a factor of about 1.6.",
      plausibility:
        "The negative control returning exactly zero confirms that the apparatus was not admitting gas and that the hydrogen peroxide did not decompose appreciably by itself over 60 s, so the whole of the measured signal is attributable to enzyme activity.",
    },
    {
      id: "exp-check-variables",
      type: "check",
      eyebrow: "Your turn",
      title: "Assign the roles correctly",
      prompt:
        "An investigator prepares six tubes with different substrate concentrations and records the initial rate of reaction in each, holding temperature, pH, and enzyme concentration the same throughout. Which statement assigns the roles correctly?",
      options: [
        "Substrate concentration is independent, initial rate is dependent, and temperature, pH and enzyme concentration are controlled",
        "Initial rate is the independent variable, because it is the quantity of interest",
        "Temperature is a dependent variable, because the reaction rate depends on it",
        "Enzyme concentration is the independent variable, because the enzyme causes the reaction",
      ],
      correctIndex: 0,
      explanation:
        "The investigator sets substrate concentration, which makes it independent. Initial rate is measured in response, which makes it dependent. Everything held the same in order to protect that comparison is a controlled variable.",
      misconception:
        "A quantity that influences the outcome is not thereby a dependent variable. Temperature certainly affects rate, but here it is deliberately fixed and never measured as an outcome, so its role is controlled; the dependent variable is whichever quantity is read off at the end.",
    },
    {
      id: "exp-controls",
      type: "concept",
      eyebrow: "Two kinds of control",
      title: "A control shows what would have happened anyway",
      paragraphs: [
        "Comparison requires a baseline. A control group receives everything the treatment group receives except the factor under test, so that any difference between them can be attributed to that factor. Without one, a change observed over the study period could be caused by the treatment, by the passage of time, by the act of being observed, or by the tendency of unusually extreme measurements to drift back towards typical values when repeated — an effect known as regression to the mean, and a frequent source of apparent improvements.",
        "A negative control is a condition in which no effect is expected: the boiled enzyme, the tube containing buffer instead of sample, the injection containing only the carrier solution and no drug, which is a placebo. It rules out effects produced by the procedure rather than by the agent — contamination, apparatus artefacts, spontaneous reaction, and the psychological and physiological response to being treated at all. If a negative control produces a signal, the signal seen in the test conditions cannot be trusted.",
        "A positive control is a condition in which an effect is already known to occur: a sample containing a confirmed active substance, or a treatment of established efficacy. It rules out the opposite failure. When every test sample returns a negative result, a positive control distinguishes “the samples genuinely contain nothing” from “the method was not working on the day”. A negative finding reported without a positive control is close to uninterpretable, because a broken procedure produces negative results extremely reliably.",
      ],
      callout:
        "negative control: is the signal real? · positive control: would a real signal have been detected?",
    },
    {
      id: "exp-check-controls",
      type: "check",
      eyebrow: "Diagnose a null result",
      title: "Decide which control answers the question",
      prompt:
        "A laboratory tests twenty water samples for a bacterial enzyme using a colour-change assay, and every sample gives no colour change at all. Which additional condition would establish whether the assay was capable of detecting the enzyme?",
      options: [
        "A tube containing buffer alone, with no sample added",
        "A tube containing a preparation of the enzyme known to be active",
        "A second tube of each sample, processed in exactly the same way",
        "A tube of one sample incubated for twice as long",
      ],
      correctIndex: 1,
      explanation:
        "A preparation known to be active is a positive control. If it produces the colour change, the assay works and the twenty negative results are informative; if it does not, the method has failed and nothing whatever can be concluded about the samples.",
      misconception:
        "The first option is a negative control, which checks that a positive result would have been genuine and so cannot diagnose a run of negatives. The third repeats the same possibly faulty procedure, which reproduces the failure rather than detecting it, and repetition is not a substitute for a control.",
    },
    {
      id: "exp-confounding",
      type: "concept",
      eyebrow: "Rival explanations",
      title: "A correlation is consistent with several causal stories",
      paragraphs: [
        "When two variables move together, at least four explanations remain open: the first causes the second, the second causes the first, some third variable causes both, or the association arose by chance in this particular sample. A confounder is that third variable — something associated with the supposed cause and also affecting the outcome by an independent route. Coffee consumption and lung disease are associated largely because smoking is associated with both. No quantity of further data on coffee and lungs alone will resolve it; the confounder must be measured, controlled, or balanced away.",
        "Randomisation allocates participants to groups by chance rather than by choice or convenience, which balances confounders across the groups on average — including confounders nobody has thought of, which is its real power. Blinding withholds knowledge of the allocation: in a single-blind study the participant does not know which group they are in, and in a double-blind study neither the participant nor the person assessing the outcome knows. Blinding removes expectation effects in the participant and unconscious bias in whoever grades the result, and matters most when the outcome involves any judgement.",
        "Repetition and replication are also distinct. Repetition means measuring the same sample again on the same apparatus; it estimates the precision of the measurement and reduces random error in the mean. Replication means running independent instances of the whole experiment — separate cultures, separate participants, separate preparations — and it estimates the variability of the system itself. Five readings from one tube are not five results. Treating repeats as though they were independent replicates makes a finding appear far more secure than the evidence allows.",
      ],
      callout:
        "association ≠ causation until confounding, reverse causation, and chance are excluded",
    },
    {
      id: "exp-worked-trial",
      type: "worked",
      eyebrow: "Quantify a comparison",
      title: "Convert trial counts into a defensible claim",
      scenario:
        "In a randomised, double-blind trial, 200 patients are allocated equally to a new treatment or to a placebo. Over one year, 30 of the 100 treated patients experience the target event, compared with 45 of the 100 placebo patients. Quantify the effect and state what the design can support.",
      steps: [
        {
          label: "Convert counts into risks within each group",
          decision:
            "Raw counts cannot be compared unless the group sizes are known, so each count is expressed as events per patient in its own group.",
          working: "treated: 30 ÷ 100 = 0.30; placebo: 45 ÷ 100 = 0.45",
        },
        {
          label: "Subtract for the absolute effect",
          decision:
            "The difference in risk states how much event risk the treatment removes in a population like this one.",
          working:
            "absolute risk reduction = 0.45 − 0.30 = 0.15, that is 15 percentage points",
        },
        {
          label: "Divide for the relative effect",
          decision:
            "The ratio re-expresses the same result as a proportion of the untreated risk, which is the form usually quoted in summaries.",
          working:
            "relative risk = 0.30 ÷ 0.45 = 0.67, so the relative risk reduction is 1 − 0.67 = 0.33, or 33%",
        },
        {
          label: "Turn the absolute effect back into patients",
          decision:
            "The reciprocal of the absolute risk reduction gives the number of patients who must be treated for one to benefit, which is the clinically meaningful form.",
          working: "number needed to treat = 1 ÷ 0.15 = 6.7, so about 7 patients",
        },
        {
          label: "State the claim the design will bear",
          decision:
            "Random allocation balances confounders and double blinding removes expectation and assessment bias, so a causal claim is defensible — but only for what was actually studied.",
          working:
            "supported: this treatment reduces this event in this population over one year. Not supported: other populations, other outcomes, or longer periods.",
        },
      ],
      answer:
        "The treatment reduces absolute event risk by 15 percentage points, a relative reduction of 33%, corresponding to about 7 patients treated for each event prevented; the randomised, double-blind design supports a causal reading of that reduction within the trial population.",
      plausibility:
        "A relative reduction of 33% sounds far more impressive than an absolute reduction of 15 percentage points, yet both describe the same 200 patients — always locate the baseline risk before judging the size of a relative effect. As a check on the arithmetic, 1 ÷ 0.15 must lie between 6 and 7, and 6.7 does.",
    },
    {
      id: "exp-check-confound",
      type: "check",
      eyebrow: "Find the rival explanation",
      title: "Name the weakness in an observational finding",
      prompt:
        "A survey of 5000 adults finds that those taking daily vitamin supplements are admitted to hospital less often than those who do not. The authors conclude that supplements reduce hospital admissions. What is the strongest objection to that conclusion?",
      options: [
        "The sample was far too small for any real association to be detected",
        "Hospital admission is not a valid outcome to measure",
        "An association in a survey of this size is bound to have arisen purely by chance",
        "Supplement users may also differ in income, diet, and exercise, any of which could reduce admissions independently",
      ],
      correctIndex: 3,
      explanation:
        "The two groups were self-selected rather than randomly allocated, so they may differ systematically in ways that affect admission risk. Any such variable is a confounder and supplies a complete alternative explanation for the observed association.",
      misconception:
        "The problem is not the size of the study. A larger observational sample simply estimates the same confounded association more precisely, because precision and freedom from bias are separate properties. Only the method of allocation, not the number of participants, addresses confounding.",
    },
    {
      id: "exp-error",
      type: "concept",
      eyebrow: "Two ways to be wrong",
      title: "Random error scatters results; systematic error moves them",
      paragraphs: [
        "Random error varies unpredictably in size and direction from one measurement to the next: judging a scale between gradations, small fluctuations in temperature, genuine biological variation between individuals. It appears as scatter around a central value, and averaging many measurements reduces its effect on the mean, because departures above and below tend to cancel. Random error limits precision, which is how closely repeated measurements agree with one another, and it is the kind of error that more measurements can genuinely help with.",
        "Systematic error shifts every measurement in the same direction by a similar amount: a balance reading 0.42 g high, a burette read consistently from above the meniscus, a stopwatch always started late. It does not appear as scatter, and averaging does not touch it — a hundred readings from a miscalibrated balance yield a very precise wrong answer. Systematic error limits accuracy, which is how close the measurements lie to the true value. Close agreement between repeats is therefore no evidence of accuracy at all, only of precision.",
        "The wording of a conclusion should track what the design can bear. “Consistent with” means only that the data do not contradict the hypothesis, which is weak because many rival hypotheses may be equally consistent with the same data. “Supports” means the data are more probable under this hypothesis than under the obvious alternatives, which requires the design to have addressed those alternatives. “Proves” is essentially never available in an empirical science: further observation can always overturn a generalisation, and one study establishes a result in one population, under one set of conditions, for one outcome.",
      ],
      callout:
        "precise ≠ accurate · averaging removes random error but never systematic error",
    },
    {
      id: "exp-check-error",
      type: "check",
      eyebrow: "Read the numbers",
      title: "Diagnose the error from repeated readings",
      prompt:
        "A calibrated standard mass of 100.00 g is weighed five times on the same balance, giving 100.42, 100.41, 100.43, 100.42 and 100.41 g. What do these readings show?",
      options: [
        "A large random error, which further readings would average away",
        "High precision combined with a systematic error of about +0.42 g",
        "High accuracy, since the readings agree so closely with one another",
        "A random error of exactly +0.42 g present in every reading",
      ],
      correctIndex: 1,
      explanation:
        "The readings span only 0.02 g, so the scatter is very small and the precision is high. But their mean is 100.418 g, which is 0.42 g above the known true value of 100.00 g, and the offset lies in the same direction every time — the signature of a systematic error such as a zero or calibration fault.",
      misconception:
        "Close agreement between repeats measures precision, not accuracy, and the two are independent. A systematic offset survives averaging untouched, so taking more readings would make the wrong answer more precise rather than more correct; the remedy is recalibration, not repetition. An error that is identical every time is by definition not random.",
    },
    {
      id: "exp-transfer-check",
      type: "check",
      eyebrow: "Transfer the critique",
      title: "Spot a conclusion the design cannot carry",
      prompt:
        "Forty volunteers with mildly raised blood pressure take a new dietary supplement for six weeks. Mean systolic pressure falls from 148 to 139 mmHg, and the investigators conclude that the supplement lowers blood pressure. Which criticism most undermines that conclusion?",
      options: [
        "A fall of 9 mmHg is too small to be measured reliably",
        "There was no comparison group, so the passage of time, changed behaviour, and regression to the mean were not excluded",
        "Blood pressure should have been reported in kilopascals rather than millimetres of mercury",
        "No conclusion can ever be drawn from a study of only forty people",
      ],
      correctIndex: 1,
      explanation:
        "Every participant received the supplement, so the study measures change over six weeks rather than the effect of the supplement. Volunteers recruited on the basis of raised readings tend to record lower values on remeasurement whatever is done, and enrolling in a study often changes diet and activity; an untreated or placebo group would separate those effects from any action of the supplement.",
      misconception:
        "The weakness lies in the design, not in the measurement or the sample size. A fall of 9 mmHg is well within the resolution of routine blood-pressure measurement, and forty participants can support a conclusion — but only when there is something legitimate to compare them against.",
    },
    {
      id: "exp-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Read the comparison before you read the result",
      points: [
        "The independent variable is set, the dependent variable is measured, and controlled variables are held constant to protect the comparison.",
        "A negative control shows what happens when the agent is absent; a positive control shows that a real effect would have been detected.",
        "A confounder is associated with the supposed cause and affects the outcome independently, so it offers a complete alternative explanation for a correlation.",
        "Randomisation balances confounders across groups, including unknown ones, and blinding removes expectation and assessment bias.",
        "Repeating a measurement estimates precision; replicating the whole experiment estimates the variability of the system.",
        "Averaging reduces random error but never removes systematic error, so a set of precise results can still be inaccurate.",
      ],
      transferRule:
        "Before judging any result, state what the two compared conditions differ in, then name one alternative explanation the design has not excluded.",
      nextLessonId: "lesson.chemistry.particle_models",
    },
  ],
};

export const toolkitAdvancedLessons: Lesson[] = [
  logarithms,
  proportionalReasoning,
  experimentalDesign,
];
