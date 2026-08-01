import type { Lesson } from "@/lib/lesson-types";

const chartLiteracyStudio: Lesson = {
  id: "lesson.integration.chart_literacy_studio",
  slug: "unfamiliar-chart-types-studio",
  number: "14.4",
  stageId: "stage.reasoning_studios",
  discipline: "integrated",
  title: "Reading unfamiliar chart types",
  summary:
    "Treat a chart you have never seen as a new encoding rather than a new subject: name every visual channel and the quantity it carries before reading any value, then work through ternary, contour, radar, and log-log plots.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Name the visual channels a figure uses and the quantity each one carries before extracting any value.",
    "Establish whether a scale is linear, logarithmic, or normalised, and locate the origin or establish there is none.",
    "Read a composition off a ternary diagram and test it against the closure constraint.",
    "Convert contour spacing into a gradient and read closed contours as local extrema.",
    "State what the enclosed area of a radar chart does and does not support.",
    "Extract a power-law exponent from the gradient of a log-log line, and distinguish it from exponential behaviour on a semi-log plot.",
  ],
  prerequisiteLessonIds: [
    "lesson.integration.data_inference_studio",
    "lesson.toolkit.logarithms",
    "lesson.toolkit.graphs_change",
  ],
  blocks: [
    {
      id: "chart-purpose",
      type: "concept",
      eyebrow: "Reasoning studio",
      title: "An unfamiliar chart is a new encoding, not a new subject",
      paragraphs: [
        "An earlier studio gave a reading order for figures: axes and units, then what varies, then the control, then a value. Every figure it used carried position on two perpendicular axes. A triangle with three labelled corners, a map of closed curves, a six-armed star — none of these has an obvious origin or pair of axes, and the first reaction is that the subject is unfamiliar. It rarely is. The encoding is.",
        "An encoding is a set of decisions about which visual property of the ink stands for which quantity. Position along a line is what an ordinary graph uses, but length, angle, area, shade, hue and texture can each carry a number instead. None of this has to be remembered: a figure using an unusual channel must label it, and one that does not has told you how much weight its values bear.",
        "Reading a value before the encoding is understood costs more than it looks. A number taken from the wrong channel is not a blank; it is a plausible figure with a unit attached, carrying the authority of a measurement into everything that follows. Twenty seconds naming the channels protects the rest of the reading. That procedure is the transferable content here, and the four chart types below illustrate it.",
      ],
      callout:
        "A chart is a mapping from quantities onto visual channels. Recover the mapping first, and read a value second.",
    },
    {
      id: "chart-visual-ternary",
      type: "visual",
      eyebrow: "Three components, two freedoms",
      title: "A ternary diagram plots quantities that cannot vary independently",
      introduction:
        "Three components summing to 100 per cent carry only two independent numbers, so they fit inside a triangle. Each vertex is 100 per cent of one component, and a component is read along gridlines parallel to the edge opposite its own vertex.",
      visual: "ternary",
      caption:
        "There is no origin and no perpendicular pair of axes. Position carries two free numbers and the third follows from closure, so every reading can be tested against a sum of 100 per cent.",
    },
    {
      id: "chart-channels",
      type: "concept",
      eyebrow: "The orientation procedure",
      title: "Name every channel and its mapping before reading a single value",
      paragraphs: [
        "Begin by listing what varies in the ink. Position along an axis, distance from a centre, length of a bar, angle of a wedge, area of a patch, shade of a fill and density of a hatching are the channels in common use. They are not equally trustworthy: as a rule of thumb readers judge position accurately and angle, area and shade poorly, so a quantity encoded as area is good for about one significant figure.",
        "Then find what each channel carries, and on what scale. Linear, logarithmic and normalised are the three worth separating. A logarithmic scale sets equal ratios at equal distances, so a decade is a fixed length. A normalised scale runs from the smallest to the largest value in this data set alone, which makes a position on it meaningless outside the figure. Then locate the origin, or establish there is none: a logarithmic axis never reaches zero.",
        "Only now read a value, in the units the mapping specifies rather than the ones the question hoped for. What makes this reliable is writing the encoding out as one sentence first — horizontal position is dose in gray on a linear scale, closed curves are temperature levels ten degrees apart. A figure whose encoding fits in a sentence is answerable whether or not its chart type has a name you know.",
      ],
      callout:
        "Channels → what each carries → linear, logarithmic, or normalised → origin or no origin → only then a value.",
    },
    {
      id: "chart-worked-ternary",
      type: "worked",
      eyebrow: "Encoding one",
      title: "Read a formulation off a ternary diagram and follow it as one component is added",
      scenario:
        "A ternary diagram gives a tablet coating by mass per cent of polymer P at the top vertex, plasticiser Q at the lower left and drug D at the lower right. Batch M sits on the gridline labelled 30 per cent P and on the gridline labelled 50 per cent Q, and the gridline through it parallel to the PQ edge reads 20 per cent D. Drug is then blended into 100 g of M, leaving the masses of P and Q unchanged. Give the composition of M, the path the point takes, and the composition after 60 g of D.",
      steps: [
        {
          label: "State the encoding before reading anything",
          decision:
            "Two position channels carry three percentages only because the three are constrained. Establishing that constraint turns the third reading into a check.",
          working:
            "Each component runs from 0 per cent on the edge opposite its vertex to 100 per cent at that vertex, and P + Q + D = 100 per cent throughout.",
        },
        {
          label: "Read the two components the gridlines give directly",
          decision:
            "Take the readings from the labelled gridlines, not from how near the point sits to each corner, since distance to a vertex is not the encoded quantity.",
          working: "P = 30 per cent and Q = 50 per cent.",
        },
        {
          label: "Obtain the third component twice",
          decision:
            "Closure supplies the third percentage and the diagram supplies it independently, so agreement is the cheapest error check available.",
          working:
            "By closure D = 100 − 30 − 50 = 20 per cent, the third gridline reads 20 per cent D, and 30 + 50 + 20 = 100.",
        },
        {
          label: "Work out the direction of travel when D alone is added",
          decision:
            "Adding one component raises the total mass, so the other two percentages fall although their masses are fixed. Their ratio cannot change, and that fixes the path.",
          working:
            "P:Q holds at 30:50, that is 3:5. Points of constant P:Q lie on the straight line from the D vertex through M, so the composition slides along it towards that vertex.",
        },
        {
          label: "Compute the composition after the addition",
          decision:
            "Convert percentages to masses, add the new material, then convert back, since percentages of a changing total cannot be added together.",
          working:
            "100 g of M holds 30 g P, 50 g Q and 20 g D. After 60 g of D the total is 160 g: 30/160 = 18.75 per cent P, 50/160 = 31.25 per cent Q, 80/160 = 50.00 per cent D.",
        },
      ],
      answer:
        "Batch M is 30 per cent P, 50 per cent Q and 20 per cent D. Adding drug moves the point along the straight line from M towards the D vertex, reaching 18.75 per cent P, 31.25 per cent Q and 50.00 per cent D after 60 g.",
      plausibility:
        "The new percentages sum to 100.00, as closure requires, and P:Q is 18.75:31.25 = 3:5, unchanged from 30:50 because neither mass was altered. Further addition drives P and Q towards zero and the point towards the D vertex.",
    },
    {
      id: "chart-check-ternary",
      type: "check",
      eyebrow: "Move inside the triangle",
      title: "Predict where a point travels when one component is removed",
      prompt:
        "A ternary diagram shows mass per cent of solvent A, solvent B and solute C, with C at the top vertex. A mixture at 30 per cent A, 55 per cent B and 15 per cent C is warmed so that solvent A alone evaporates, leaving the masses of B and C unchanged. How does the point move?",
      options: [
        "Along the straight line joining the A vertex to the point, moving away from the A vertex towards the BC edge",
        "Towards the C vertex along the gridline of constant B, because C is the only component whose percentage rises",
        "Parallel to the constant-A gridline it sits on, because only the amount of A was altered",
        "Directly towards the B vertex, because B is the largest remaining component by mass",
      ],
      correctIndex: 0,
      explanation:
        "Removing A lowers the total mass, so the percentages of B and of C both rise while their ratio stays pinned at 55:15. Points sharing a fixed B:C ratio lie on a straight line through the A vertex, and the point runs outwards along it, reaching the BC edge at 78.6 per cent B and 21.4 per cent C.",
      misconception:
        "Moving parallel to the constant-A gridline treats the percentage of A as though it were the mass of A; on a closed scale removing A changes every percentage in the figure. Heading towards the C vertex sees that C rises and forgets that B rises by the same factor.",
    },
    {
      id: "chart-visual-contour",
      type: "visual",
      eyebrow: "Encoding two",
      title: "Contour lines encode a third quantity over a two-dimensional field",
      introduction:
        "Two position channels carry location and a family of curves carries a third quantity, each curve joining points of equal value at a stated interval. Nothing is plotted between the curves, so intermediate values are interpolated, and the spacing is itself encoded.",
      visual: "contour",
      caption:
        "Level and gradient are carried by different features. The label gives the level, the distance to the next curve gives the rate of change, and a closed curve with nothing inside it encloses a local maximum or minimum.",
    },
    {
      id: "chart-worked-contour",
      type: "worked",
      eyebrow: "Isodose reading",
      title: "Turn contour spacing into a dose gradient",
      scenario:
        "A radiotherapy plan is drawn as an isodose plot over a plane through a tumour, position in centimetres, with curves of equal absorbed dose every 10 Gy. Along the transect at y = 0 the curves cross at 60 Gy at x = 2.0 cm, 50 Gy at 3.0 cm, 40 Gy at 4.4 cm, 30 Gy at 6.4 cm and 20 Gy at 9.4 cm. Estimate the dose at x = 5.0 cm, compare the steepness between 3.0 and 4.4 cm with that between 6.4 and 9.4 cm, and locate the 25 Gy limit set for an adjacent organ.",
      steps: [
        {
          label: "Write down what each feature carries",
          decision:
            "Two channels carry position and the curve label carries dose. The interval is fixed at 10 Gy, which is what lets a spacing in centimetres become a gradient.",
          working:
            "Position x is in cm on a linear scale, each curve is a locus of constant dose in Gy, and consecutive curves differ by 10 Gy.",
        },
        {
          label: "Interpolate the value at the requested position",
          decision:
            "A point between two curves has no plotted value, so it is interpolated on the assumption that the dose falls uniformly across the gap. That assumption sets the precision.",
          working:
            "x = 5.0 cm lies between the 40 Gy curve at 4.4 cm and the 30 Gy curve at 6.4 cm. The fraction across the gap is (5.0 − 4.4)/(6.4 − 4.4) = 0.30, so the dose is 40 − 0.30 × 10 = 37 Gy.",
        },
        {
          label: "Convert each spacing into a gradient",
          decision:
            "Dividing the fixed interval by the distance between two curves gives a rate of change per centimetre, which is comparable between regions in a way a spacing is not.",
          working:
            "Between 3.0 and 4.4 cm: 10 Gy ÷ 1.4 cm = 7.1 Gy cm⁻¹. Between 6.4 and 9.4 cm: 10 Gy ÷ 3.0 cm = 3.3 Gy cm⁻¹.",
        },
        {
          label: "Compare the two regions",
          decision:
            "Quote a ratio of gradients rather than an impression of crowding, since the same crowding at a different contour interval would mean something else.",
          working:
            "The gradients stand in the inverse ratio of the spacings, 3.0 cm ÷ 1.4 cm = 2.1, so the dose falls a little over twice as fast per centimetre near the treated volume as further out.",
        },
        {
          label: "Locate the level the constraint refers to",
          decision:
            "The 25 Gy limit is not a drawn curve, so it is interpolated the other way round, from a value to a position.",
          working:
            "25 Gy is halfway between 30 Gy at 6.4 cm and 20 Gy at 9.4 cm, so x = 6.4 + 0.5 × 3.0 = 7.9 cm.",
        },
      ],
      answer:
        "The dose at x = 5.0 cm is about 37 Gy, the fall is about 7.1 Gy cm⁻¹ inside against 3.3 Gy cm⁻¹ further out, and the 25 Gy level lies at about x = 7.9 cm.",
      plausibility:
        "From 2.0 to 9.4 cm the dose falls 40 Gy over 7.4 cm, an average of 5.4 Gy cm⁻¹, which sits between the steepest local value of 10 Gy cm⁻¹ across the first gap and the shallowest of 3.3 Gy cm⁻¹ across the last. Both interpolated figures assume uniform change within a gap, so they are estimates rather than readings.",
    },
    {
      id: "chart-check-contour",
      type: "check",
      eyebrow: "Spacing against level",
      title: "Separate how high from how fast",
      prompt:
        "A contour map shows a tracer concentration over a tissue section, with curves every 5 μmol dm⁻³. In region I the 25 and 30 μmol dm⁻³ curves lie 0.5 mm apart; in region II the same two curves lie 4.0 mm apart. Elsewhere a small closed curve labelled 45 μmol dm⁻³ lies inside the 40 μmol dm⁻³ curve and contains no further curve. Which statement is supported?",
      options: [
        "The concentration is higher in region I than in region II, because the curves are packed more closely there",
        "The gradient in region I is eight times that in region II, and the closed curve encloses a local maximum between 45 and 50 μmol dm⁻³",
        "The gradient in region I is five times that in region II, since the contour interval is 5 μmol dm⁻³",
        "The closed curve marks a patch held at a constant 45 μmol dm⁻³ throughout",
      ],
      correctIndex: 1,
      explanation:
        "The gradients are 5 ÷ 0.5 = 10 μmol dm⁻³ mm⁻¹ and 5 ÷ 4.0 = 1.25 μmol dm⁻³ mm⁻¹, a ratio of 8. Both regions span the same 25 to 30 μmol dm⁻³ band, so they differ only in how fast the level changes. Values rise inwards past the 40 μmol dm⁻³ curve, and the absence of a 50 μmol dm⁻³ curve inside puts the peak between 45 and 50.",
      misconception:
        "The first option reads crowding as height, the commonest contour error: spacing carries gradient and only the label carries level. The last treats a level curve as a filled region, when the interior exceeds the value on the curve.",
    },
    {
      id: "chart-visual-radar",
      type: "visual",
      eyebrow: "Encoding three",
      title: "A radar chart uses distance from a centre on several axes at once",
      introduction:
        "Several variables are each given an axis radiating from a common centre, a point is marked on each, and the points are joined into a closed polygon. Two features are artefacts: the axes are usually normalised separately, each from its own minimum to its own maximum, and their order around the circle is the author's choice.",
      visual: "radar",
      caption:
        "Distance along one named axis is a genuine encoding and can be compared between profiles. The enclosed area is a sum of triangles formed by whichever values happen to be adjacent, so reordering the axes changes it without changing a datum.",
    },
    {
      id: "chart-check-radar",
      type: "check",
      eyebrow: "What the shape will not support",
      title: "Judge a comparison of two enclosed areas",
      prompt:
        "Two enzyme preparations are compared on a radar chart with six axes from a common centre: thermal stability in °C, specific activity in μmol min⁻¹ mg⁻¹, cost in pounds per gram, optimum pH, storage half-life in days, and purity in per cent. Each axis runs from the lower to the higher of the two measured values. Preparation A encloses about 1.4 times the area of preparation B. What may legitimately be concluded?",
      options: [
        "Preparation A is about 1.4 times better than preparation B overall",
        "Preparation A exceeds preparation B on every one of the six axes, since it encloses the larger area",
        "The area becomes meaningful once the axes are reordered so that related properties sit next to one another",
        "Only the axis-by-axis comparisons carry information, since the area combines quantities with different units in an order chosen by the author",
      ],
      correctIndex: 3,
      explanation:
        "The area is a sum of triangles between neighbouring axes, so it depends on which variables were placed side by side, and it adds a temperature to a price to a pH, which share no scale. One axis runs the wrong way for a quality score in any case, since a larger radius on the cost axis is worse. Comparison on a single named axis remains sound.",
      misconception:
        "The second option assumes a larger total implies a larger part everywhere, which a sum never guarantees. The third spots the ordering problem and supposes it can be repaired, when no ordering makes a sum of incommensurable quantities interpretable.",
    },
    {
      id: "chart-visual-loglog",
      type: "visual",
      eyebrow: "Encoding four",
      title: "Two logarithmic axes turn a power law into a straight line",
      introduction:
        "Taking logarithms of y = kxⁿ gives log y = log k + n log x, a straight line in log x and log y with gradient n. Making both axes logarithmic therefore straightens any power law and reads its exponent off as decades risen per decade travelled, while compressing a ten-thousandfold spread into four equal steps.",
      visual: "log_log",
      caption:
        "Gradient carries the exponent and the height of the line at x = 1 carries the coefficient. A straight line here means a power law; a straight line on a semi-logarithmic plot, with only the vertical axis logarithmic, means an exponential.",
    },
    {
      id: "chart-worked-loglog",
      type: "worked",
      eyebrow: "Extract the exponent",
      title: "Recover a power law from two points on a log-log line",
      scenario:
        "Volumetric flow rate is measured for water driven through rigid tubes of identical length under the same pressure difference, and plotted with flow rate in mL min⁻¹ on a logarithmic vertical axis against internal radius in mm on a logarithmic horizontal axis. The points fall on a straight line, two of them at radius 0.25 mm with flow 0.12 mL min⁻¹ and at radius 2.5 mm with flow 1200 mL min⁻¹. Find the exponent and the coefficient, check them against the physics, and predict the flow through a tube of radius 1.25 mm.",
      steps: [
        {
          label: "Confirm what a straight line means on these axes",
          decision:
            "Both axes are logarithmic, so equal distances are equal ratios and the relation between log Q and log r is linear. That is the signature of a power law and of nothing else.",
          working: "Q = k rⁿ gives log₁₀Q = log₁₀k + n log₁₀r, a straight line of gradient n.",
        },
        {
          label: "Convert the two points into decades",
          decision:
            "A gradient on logarithmic axes is a ratio of decades, so form ratios of the coordinates rather than differences and avoid taking a logarithm by hand.",
          working:
            "Radius ratio 2.5/0.25 = 10, one decade across. Flow ratio 1200/0.12 = 10 000, four decades up.",
        },
        {
          label: "Read the gradient as the exponent",
          decision:
            "The gradient in log-log coordinates is the exponent itself, with no further conversion, which is the reason for choosing these axes.",
          working: "n = 4 decades ÷ 1 decade = 4, so Q ∝ r⁴.",
        },
        {
          label: "Take the coefficient from the intercept",
          decision:
            "At r = 1 mm the term n log₁₀r vanishes, so the height of the line there is log₁₀k. The coefficient carries units and must be quoted with them.",
          working:
            "k = 1200 ÷ 2.5⁴ = 1200 ÷ 39.06 = 30.7 mL min⁻¹ mm⁻⁴, so the line passes through 30.7 mL min⁻¹ at r = 1.00 mm. The other point agrees: 30.7 × 0.25⁴ = 30.7 × 0.003906 = 0.12 mL min⁻¹.",
        },
        {
          label: "Test the exponent against the physics and predict",
          decision:
            "An exponent taken from a graph is worth more when an independent relationship predicts the same value, since agreement between measurement and theory is stronger than either alone.",
          working:
            "Laminar flow through a rigid tube gives Q = πΔPr⁴/(8ηL), which at fixed ΔP, η and L is Q ∝ r⁴, the same exponent. At r = 1.25 mm, Q = 30.7 × 1.25⁴ = 30.7 × 2.4414 = 75.0 mL min⁻¹.",
        },
      ],
      answer:
        "The line has gradient 4, so the data follow Q = 30.7 r⁴ with Q in mL min⁻¹ and r in mm, matching the fourth-power dependence laminar flow requires, and a tube of radius 1.25 mm should carry about 75 mL min⁻¹.",
      plausibility:
        "Reach the prediction a second way, by ratio from a measured point: 1.25/0.25 = 5 and 5⁴ = 625, so Q = 0.12 × 625 = 75.0 mL min⁻¹. The steepness is a warning as well as a result, since an exponent of 4 turns a 10 per cent error in radius into 1.10⁴ = 1.46, a 46 per cent error in flow.",
    },
    {
      id: "chart-check-loglog",
      type: "check",
      eyebrow: "Which plot straightens which",
      title: "Identify a relationship from the axes that linearise it",
      prompt:
        "A quantity y is plotted against x with a logarithmic vertical axis and a linear horizontal axis, and the points fall on a straight line descending by exactly one decade for every 6.0 units of x. Replotted with both axes logarithmic, the same points curve. Starting from y = 8.0 × 10³, what relationship do the data follow and what is y once x has increased by 18.0 units?",
      options: [
        "A power law, since a straight line on any plot with a logarithmic axis indicates one; y falls to 8.0",
        "An exponential relationship; y falls to 8.0",
        "An exponential relationship; y falls to 2.7 × 10³, since three decades divide y by three",
        "An exponential relationship; y falls to 8.0 × 10², since one decade is lost over the interval",
      ],
      correctIndex: 1,
      explanation:
        "Straight on a semi-logarithmic plot and curved on a log-log plot identifies an exponential relationship, in which y changes by a fixed factor for a fixed increase in x. An increase of 18.0 units is 18.0 ÷ 6.0 = 3 decades, so y is divided by 10³, giving 8.0 × 10³ ÷ 1000 = 8.0.",
      misconception:
        "The first option has the plots the wrong way round: log-log straightens a power law and semi-log an exponential. The third reads the logarithmic axis additively, dividing by three rather than 10³; the fourth counts one decade for the whole interval instead of one for each 6.0 units.",
    },
    {
      id: "chart-check-transfer",
      type: "check",
      eyebrow: "Transfer",
      title: "Orient yourself in a chart type you have not been shown",
      prompt:
        "A figure of a kind not described here shows one large rectangle divided into five vertical columns, one per hospital ward. The width of each column is proportional to the number of patients admitted to that ward, and each column is divided from top to bottom into three shaded bands whose heights are the proportions of that ward's patients discharged, transferred, or still admitted at 30 days. What does the area of one shaded band represent?",
      options: [
        "The proportion of that ward's patients who had that outcome",
        "The number of patients admitted to that ward",
        "The proportion of all patients in the figure who were in that ward and had that outcome",
        "The proportion of all patients in the figure who had that outcome, in any ward",
      ],
      correctIndex: 2,
      explanation:
        "Three channels are in use. Width carries each ward's share of all patients, height carries the proportion within that ward, and area is their product, which is the joint proportion of patients both in that ward and with that outcome. The fifteen band areas therefore sum to the whole rectangle.",
      misconception:
        "The first two options each read one channel and ignore the other, which is what happens when a figure is scanned rather than oriented: height alone gives a within-ward proportion and width alone gives ward size. The fourth describes one shading summed across all five columns.",
    },
    {
      id: "chart-summary",
      type: "summary",
      eyebrow: "Studio complete",
      title: "Recover the encoding, then read the number",
      points: [
        "An unfamiliar chart is a new encoding rather than a new subject, and its mapping from quantity to channel is recoverable from the figure itself.",
        "Name every channel, find what each carries, establish whether its scale is linear, logarithmic or normalised, and locate the origin or establish there is none.",
        "On a ternary diagram two components are free and the third follows from closure, so every reading can be tested against a sum of 100 per cent.",
        "Contour labels carry level and contour spacing carries gradient; a closed curve with nothing inside it encloses a local maximum or minimum.",
        "On a radar chart the axis order is a choice and the scales are usually incommensurable, so comparing profiles on one named axis is sound and comparing areas is not.",
        "A power law is straight on a log-log plot with gradient equal to its exponent, whereas an exponential is straight on a semi-logarithmic plot instead.",
      ],
      transferRule:
        "Before taking any value from an unfamiliar figure, write one sentence naming each visual channel, the quantity it carries and the scale it uses; if that sentence cannot be written, no number taken from the figure can be defended.",
    },
  ],
};

export const chartLiteracyLessons: Lesson[] = [chartLiteracyStudio];
