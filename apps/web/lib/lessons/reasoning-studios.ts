import type { Lesson } from "@/lib/lesson-types";

const novelNotationStudio: Lesson = {
  id: "lesson.integration.novel_notation_studio",
  slug: "novel-notation-studio",
  number: "14.1",
  stageId: "stage.reasoning_studios",
  discipline: "integrated",
  title: "Novel notation and unfamiliar formalisms",
  summary:
    "Practise a disciplined method for decoding a notation you have never seen: read the definition with the examples, infer the grammar, re-derive a given case, then apply it.",
  estimatedMinutes: 38,
  reviewStatus: "unreviewed",
  objectives: [
    "Infer the grammar of an invented notation from its worked examples rather than from prose alone.",
    "Test an inferred rule by re-deriving an example the passage has already decoded.",
    "Encode and decode structures in a defined notation, including counting atoms and hydrogens.",
    "Recognise when one object has more than one valid representation in a notation.",
    "Distinguish a definition given in a passage from an assumption stated in it.",
    "Refuse outside knowledge that contradicts what the passage defines.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.organic_structure",
    "lesson.toolkit.logarithms",
  ],
  blocks: [
    {
      id: "nns-purpose",
      type: "concept",
      eyebrow: "Reasoning studio",
      title: "An unfamiliar notation is a reading problem, not a knowledge gap",
      paragraphs: [
        "Unfamiliar scientific material often opens with a symbol system invented for that passage alone. A string of letters, brackets and digits stands for a molecule; arrows and subscripts stand for a metabolic route; a single reported number combines two measurements through a formula defined three lines earlier. Nothing about these systems is remembered, because none of them existed before the passage was written. The candidate who tries to recall them fails; the candidate who reads them succeeds.",
        "That reframing matters. If the notation is defined in front of you, then every question about it is answerable from the page, and confidence should be high rather than low. What is genuinely required is a procedure: a reliable order of operations for turning a definition plus two or three examples into a rule you can apply to a case the passage never shows you. This studio builds that procedure on three invented formalisms and then tests it.",
      ],
      callout:
        "If the passage defines it, the answer is on the page. Decode first, reason second.",
    },
    {
      id: "nns-visual",
      type: "visual",
      eyebrow: "The decode loop",
      title: "Four moves turn a symbol system into a usable rule",
      introduction:
        "The loop below is the whole method: read the definition together with its examples, propose a grammar, re-derive an example the passage already decoded, and only then apply the rule to the new case.",
      visual: "method_loop",
      caption:
        "The re-derivation step, highlighted here, is the one most readers skip. It is the only step that can tell you your inferred grammar is wrong before you have spent the question on it.",
    },
    {
      id: "nns-method",
      type: "concept",
      eyebrow: "Build the grammar",
      title: "The examples define the notation more completely than the prose does",
      paragraphs: [
        "Prose definitions are almost always under-specified. A passage may say “branches are listed in square brackets after the chain length”, which leaves open whether an entry reads position then size or size then position, whether entries may repeat, and whether numbering runs from either end. The worked examples settle these questions, because each example is a complete statement of the form “this string means this object”. Treat the prose as the headline and the examples as the specification.",
        "The reliable technique is to enumerate the readings a string permits and then use an example to eliminate all but one. If a rule admits two readings and the two readings predict different objects, the example that the passage has already decoded discriminates between them. If both readings predict the same object for every example given, the ambiguity is real and you should expect the question to turn on it.",
        "Then re-derive. Take an example the passage supplied, apply the grammar you have just inferred, and check that you reproduce exactly what the passage says that example means. This costs perhaps fifteen seconds and catches almost every misreading, because a grammar that is wrong will usually produce a different object for at least one of the cases already decoded. Choose the most complicated example available, since a simple one may be reproduced correctly by several competing grammars and therefore discriminates between none of them. Only after the re-derivation succeeds should you decode the unfamiliar string that the question actually asks about.",
      ],
      callout:
        "Define → infer the grammar from the examples → re-derive a given case → apply.",
    },
    {
      id: "nns-worked-decode",
      type: "worked",
      eyebrow: "Formalism one",
      title: "Decode a skeleton string for a branched hydrocarbon",
      scenario:
        "A passage introduces skeleton strings for acyclic saturated hydrocarbons. It states only: “A skeleton string is written C followed by the length of the main chain, then a bracketed list of branches separated by commas.” Three examples are given. C4[2:1] is drawn as CH₃—CH(CH₃)—CH₂—CH₃. C6[3:2] is drawn as CH₃—CH₂—CH(CH₂CH₃)—CH₂—CH₂—CH₃. C5[2:1,3:1] is drawn as CH₃—CH(CH₃)—CH(CH₃)—CH₂—CH₃. Decode C5[2:1,4:1] and give its molecular formula.",
      steps: [
        {
          label: "Enumerate the readings a bracket entry permits",
          decision:
            "The prose does not say what the two numbers in an entry mean. Each entry could be position:size or size:position, so list both readings and find an example that separates them.",
          working:
            "For C6[3:2], reading A (position:size) gives a hexane chain with a two-carbon branch at C3, total 8 carbons. Reading B (size:position) gives a hexane chain with a three-carbon branch at C2, total 9 carbons.",
        },
        {
          label: "Use a supplied example to eliminate one reading",
          decision:
            "The passage has already drawn C6[3:2]. Count the carbons in the drawing and keep only the reading that matches.",
          working:
            "CH₃—CH₂—CH(CH₂CH₃)—CH₂—CH₂—CH₃ has 6 chain carbons plus a 2-carbon branch, 8 carbons in total. Reading A survives; reading B is eliminated. Each entry is position:size.",
        },
        {
          label: "Re-derive a second example as a test",
          decision:
            "One example could be a coincidence. Apply the inferred grammar to C5[2:1,3:1] and check it reproduces the structure the passage drew.",
          working:
            "Pentane with a one-carbon branch at C2 and at C3 gives CH₃—CH(CH₃)—CH(CH₃)—CH₂—CH₃. This matches the passage exactly, so the grammar is confirmed.",
        },
        {
          label: "Apply the grammar to the new string",
          decision:
            "Build the main chain first, then hang each branch on the numbered carbon.",
          working:
            "C5[2:1,4:1] is a pentane chain carrying a methyl group on C2 and a methyl group on C4: CH₃—CH(CH₃)—CH₂—CH(CH₃)—CH₃.",
        },
        {
          label: "Count the atoms",
          decision:
            "Total carbons are the main chain plus every branch. For an acyclic saturated skeleton the hydrogens then follow from CₙH₂ₙ₊₂.",
          working:
            "n(C) = 5 + 1 + 1 = 7, so H = 2(7) + 2 = 16. Counting directly: chain hydrogens 3 + 1 + 2 + 1 + 3 = 10, plus 3 + 3 = 6 on the two methyl branches, giving 16.",
        },
      ],
      answer:
        "C5[2:1,4:1] is 2,4-dimethylpentane, CH₃—CH(CH₃)—CH₂—CH(CH₃)—CH₃, with molecular formula C₇H₁₆.",
      plausibility:
        "Two independent hydrogen counts agree, and CₙH₂ₙ₊₂ must hold for any acyclic saturated skeleton however it is branched, so branching changed the structure without changing the formula class.",
    },
    {
      id: "nns-check-encode",
      type: "check",
      eyebrow: "Encode, do not just decode",
      title: "Write a structure back into the notation",
      prompt:
        "Using the same skeleton strings, which string represents CH₃—CH₂—CH₂—CH(CH₃)—CH₂—CH₂—CH₃?",
      options: [
        "C8[4:1]",
        "C7[3:1]",
        "C7[1:4]",
        "C7[4:1]",
      ],
      correctIndex: 3,
      explanation:
        "The unbranched backbone runs through seven carbons, so the string opens C7. The single methyl group sits on the fourth carbon of that chain, counted from either end, so the bracket entry is 4:1. Total carbons are 7 + 1 = 8, giving C₈H₁₈.",
      misconception:
        "C8[4:1] counts the branch carbon into the main chain, which double-counts it; C7[1:4] reverses the position:size order that the passage examples fixed.",
    },
    {
      id: "nns-layer-ambiguity",
      type: "concept",
      eyebrow: "Second layer",
      title: "Examples carry rules the prose never states, and definitions are not assumptions",
      paragraphs: [
        "Suppose the passage adds a fourth example: C5[3:1,3:1] drawn as a pentane chain whose third carbon bears two methyl groups. Nothing in the prose said a position could appear twice, yet the example licenses it, and it also tells you how to read valence. That third carbon holds two chain bonds and two branch bonds, so it carries no hydrogen at all. A single example has silently extended the grammar and settled a chemical consequence of it.",
        "The same notation also shows that one molecule can have several legal strings. C4[2:2] is a butane chain carrying an ethyl group on its second carbon. Trace the longest continuous chain through that structure and it runs to five carbons with a methyl on the middle one, which is C5[3:1]. Both strings have six carbons and describe the identical molecule. A notation is ambiguous unless the passage adds a rule forbidding the alternatives, and whether it does so is a fact about the passage, not about chemistry.",
        "Keep two kinds of statement apart. A definition is true by fiat: if the passage says the number after C is the main chain length, there is nothing to argue with and no experiment could contradict it. An assumption is a modelling choice with a scope, such as “all skeletons in this study are acyclic and fully saturated”. Assumptions can be relaxed, and outside their scope the notation may simply not apply, so a ring or a double bond is not something the notation gets wrong but something it was never defined for.",
      ],
      callout:
        "A definition cannot be false. An assumption has a scope. An example can add a rule the prose omitted.",
    },
    {
      id: "nns-worked-formula",
      type: "worked",
      eyebrow: "Formalism one, harder",
      title: "Count carbons and hydrogens from the string alone",
      scenario:
        "Using skeleton strings, and given the additional example C5[3:1,3:1] for a carbon bearing two methyl groups, determine the molecular formula of C6[2:1,2:1,5:2]. No structure is drawn for you.",
      steps: [
        {
          label: "Parse the string into its parts",
          decision:
            "Separate the main chain length from the bracket list before doing any chemistry, so that a parsing error cannot masquerade as a chemical one.",
          working:
            "Main chain: 6 carbons. Branches: 2:1 and 2:1 (two one-carbon branches on C2) and 5:2 (a two-carbon branch on C5).",
        },
        {
          label: "Check the repeated position is chemically possible",
          decision:
            "A repeated position means two branches on the same carbon. Carbon forms four bonds, so test whether that carbon can accommodate them before proceeding.",
          working:
            "C2 uses two bonds to its chain neighbours C1 and C3, plus two bonds to the methyl branches. That is four bonds, so C2 carries no hydrogen. The reading is consistent.",
        },
        {
          label: "Total the carbons",
          decision: "Every branch carbon is additional to the main chain.",
          working: "n(C) = 6 + 1 + 1 + 2 = 10.",
        },
        {
          label: "Total the hydrogens two independent ways",
          decision:
            "Use the general formula for an acyclic saturated skeleton, then confirm by counting carbon by carbon. Agreement between two methods is the check.",
          working:
            "By formula: H = 2(10) + 2 = 22. By direct count, the chain gives C1 3H, C2 0H, C3 2H, C4 2H, C5 1H, C6 3H, a total of 11; the branches give 3 + 3 on the methyls and 2 + 3 on the ethyl, a total of 11. Together 11 + 11 = 22.",
        },
      ],
      answer:
        "C6[2:1,2:1,5:2] has ten carbons and twenty-two hydrogens, molecular formula C₁₀H₂₂.",
      plausibility:
        "Both hydrogen counts give 22, and any acyclic saturated hydrocarbon with ten carbons must be C₁₀H₂₂ regardless of how it branches, so the answer is forced once the carbon count is right.",
    },
    {
      id: "nns-check-same-molecule",
      type: "check",
      eyebrow: "One object, several strings",
      title: "Spot the pair that describes a single molecule",
      prompt:
        "In the skeleton-string notation as defined so far, which pair of strings denotes the same molecule?",
      options: [
        "C4[2:2] and C5[3:1]",
        "C4[2:1] and C5[2:1]",
        "C6[3:1] and C6[3:2]",
        "C5[2:1,4:1] and C5[3:1,3:1]",
      ],
      correctIndex: 0,
      explanation:
        "C4[2:2] is a butane chain with an ethyl group on C2. The longest continuous chain in that structure passes from the ethyl terminus through C2 to C4, giving five carbons with a methyl on the middle carbon, which is exactly C5[3:1]. Both have 4 + 2 = 6 and 5 + 1 = 6 carbons, C₆H₁₄.",
      misconception:
        "C5[2:1,4:1] and C5[3:1,3:1] are both C₇H₁₆, which tempts the answer that they are the same. Sharing a molecular formula makes two structures isomers, not identical; 2,4-dimethylpentane and 3,3-dimethylpentane differ in connectivity.",
    },
    {
      id: "nns-check-stem-rule",
      type: "check",
      eyebrow: "Rules from the stem",
      title: "When the passage constrains more tightly than chemistry does",
      prompt:
        "The passage now adds two rules: a string must use the longest possible carbon chain as its main chain, and positions must be numbered from the end that gives the lowest first position number. Under these rules, which is the only legal string for CH₃—CH₂—CH(CH₃)—CH₂—CH₂—CH₃?",
      options: [
        "C5[2:2], since it describes exactly the same connectivity",
        "C6[4:1], since the direction of numbering is arbitrary",
        "C6[3:1]",
        "C7[3:1]",
      ],
      correctIndex: 2,
      explanation:
        "The molecule has seven carbons and its longest chain is six, so the main chain is C6. The methyl group is on the third carbon counting from the left and the fourth counting from the right; the lowest-number rule selects 3. C5[2:2] describes the same molecule but breaks the longest-chain rule, C6[4:1] breaks the numbering rule, and C7[3:1] would have eight carbons in total.",
      misconception:
        "Treating every chemically faithful string as acceptable. A rule stated in the stem can rule out representations that chemistry itself permits, and the question is asking what the passage allows, not what is chemically true.",
    },
    {
      id: "nns-pathway",
      type: "concept",
      eyebrow: "Formalism two",
      title: "The same method decodes a symbolic pathway shorthand",
      paragraphs: [
        "A second passage describes a bacterial biosynthetic route using a shorthand of its own. It defines three marks. Writing X →ₙ Y means that X is converted to Y in a single step catalysed by enzyme n. Writing Z —| n means that Z inhibits enzyme n. Writing Δn denotes a strain in which enzyme n is absent. The route studied is written A →₁ B →₂ C →₃ D, together with the separate statement D —| 1.",
        "Apply the loop. The grammar is fixed by the marks themselves: subscripts label enzymes, the plain arrow carries flux forwards, and the bar-headed arrow carries a signal backwards. Re-derive a case the passage implies: in a strain Δ2, no C and therefore no D can be made, so B should accumulate and growth should fail unless C or D is supplied. That prediction follows from the shorthand alone and gives you confidence the reading is right.",
        "Notice what the second mark buys. Without D —| 1, deleting an enzyme would only stop flux downstream. With it, deleting a late enzyme also removes the signal that throttles the first step, so upstream flux rises at the same time as downstream consumption stops. A notation that encodes feedback lets you predict a consequence that is invisible in a linear arrow diagram, and the question will usually be built on exactly that consequence.",
      ],
      callout: "A →ₙ B: flux forwards. Z —| n: control backwards. Δn: enzyme absent.",
    },
    {
      id: "nns-check-pathway",
      type: "check",
      eyebrow: "Reason inside the shorthand",
      title: "Predict what accumulates",
      prompt:
        "The route is A →₁ B →₂ C →₃ D with D —| 1. Precursor A is supplied continuously. In a Δ3 strain, which metabolite accumulates, and why?",
      options: [
        "B, because enzyme 2 has no substrate to work on",
        "A, because losing enzyme 3 shuts down the whole route from the start",
        "D, because a block always causes the final product to build up behind it",
        "C, and it accumulates faster than it would if the feedback on enzyme 1 were still operating",
      ],
      correctIndex: 3,
      explanation:
        "Δ3 removes the step C →₃ D, so C cannot be consumed and accumulates. Because D is no longer made, the inhibition D —| 1 is relieved, enzyme 1 runs uninhibited, and flux from A through B into C is higher than normal, so C builds up faster than the loss of enzyme 3 alone would predict.",
      misconception:
        "Reading a pathway diagram as though a block stops everything upstream. Flux upstream of a block continues, and the intermediate immediately before the block is the one that accumulates. Feedback inhibition, when present, accelerates that accumulation rather than preventing it.",
    },
    {
      id: "nns-worked-index",
      type: "worked",
      eyebrow: "Formalism three",
      title: "Evaluate an index defined only in the passage",
      scenario:
        "A third passage reports tissue perfusion using an index Φ that it defines as Φ = log₁₀(F/F₀) + 2 log₁₀(ρ/ρ₀), where F is measured blood flow per gram of tissue, ρ is measured capillary density, and the reference values are F₀ = 0.10 mL min⁻¹ g⁻¹ and ρ₀ = 50 mm⁻². A sample of cardiac muscle gives F = 1.0 mL min⁻¹ g⁻¹ and ρ = 500 mm⁻². Report Φ.",
      steps: [
        {
          label: "Separate the definition from the data",
          decision:
            "Φ is not a quantity with independent physical meaning that could be checked against intuition. It is defined by this formula, so the only task is substitution.",
          working:
            "Φ = log₁₀(F/F₀) + 2 log₁₀(ρ/ρ₀), with F₀ = 0.10 mL min⁻¹ g⁻¹ and ρ₀ = 50 mm⁻².",
        },
        {
          label: "Form each ratio and confirm it is dimensionless",
          decision:
            "A logarithm can only be taken of a pure number, so each measured quantity must be divided by its stated reference before the logarithm is applied.",
          working:
            "F/F₀ = 1.0 / 0.10 = 10; ρ/ρ₀ = 500 / 50 = 10. Both are dimensionless.",
        },
        {
          label: "Take the logarithms and apply the stated weights",
          decision:
            "The definition weights the density term by 2. The weight is part of the definition and must not be dropped because it looks unusual.",
          working: "log₁₀ 10 = 1, so the flow term is 1 and the density term is 2 × 1 = 2.",
        },
        {
          label: "Add and report",
          decision: "Φ is a sum of dimensionless terms, so it carries no unit.",
          working: "Φ = 1 + 2 = 3.0",
        },
      ],
      answer:
        "The cardiac muscle sample has Φ = 3.0, a dimensionless index value.",
      plausibility:
        "Both terms are logarithms of ratios, so the index is correctly dimensionless. As a sensitivity check, doubling ρ alone would add 2 log₁₀ 2 = 0.60 while doubling F alone would add only log₁₀ 2 = 0.30, so the index responds twice as strongly to density, exactly as the weight of 2 requires.",
    },
    {
      id: "nns-check-index",
      type: "check",
      eyebrow: "Work the definition",
      title: "Change one input and track the index",
      prompt:
        "A second sample has the same blood flow F but half the capillary density ρ of the cardiac sample above. Using the passage definition of Φ, and taking log₁₀ 2 = 0.30, how does Φ change?",
      options: [
        "It falls by 0.30",
        "It is unchanged, because F did not change",
        "It is halved, from 3.0 to 1.5",
        "It falls by 0.60",
      ],
      correctIndex: 3,
      explanation:
        "Only the density term changes. Halving ρ changes that term by 2 log₁₀(0.5) = 2 × (−0.30) = −0.60, so Φ falls from 3.0 to 2.40. The flow term is untouched.",
      misconception:
        "Dropping the weight of 2 gives a fall of 0.30; treating Φ as if it were proportional to ρ rather than logarithmic in it gives a halving. A logarithmic index responds to ratios by addition and subtraction, never by scaling.",
    },
    {
      id: "nns-check-outside-knowledge",
      type: "check",
      eyebrow: "Transfer",
      title: "Let the passage overrule what you already believe",
      prompt:
        "The same passage reports Φ = 3.0 for tissue X and Φ = 2.0 for tissue Y. A reader recalls from other reading that in humans tissue Y receives more blood flow per gram than tissue X. Which conclusion is best supported?",
      options: [
        "Tissue X receives ten times the blood flow per gram of tissue Y",
        "The reported values must be in error, since outside evidence shows Y has the higher flow",
        "Tissue X has the higher Φ, but a difference of 1.0 could arise from flow, from capillary density, or from both, so flow alone cannot be inferred",
        "Φ is proportional to flow, so tissue X receives twice the flow of tissue Y",
      ],
      correctIndex: 2,
      explanation:
        "Φ combines two measurements, so a single Φ value cannot be decomposed. A difference of 1.0 would follow from a tenfold difference in flow alone, or from a density ratio of about 3.2 alone (since 2 log₁₀ 3.2 ≈ 1.0), or from any combination. The passage supports a statement about Φ, not about either input separately.",
      misconception:
        "Two opposite errors are on offer. One imports outside knowledge to contradict the passage, when the passage defines its own index and cannot be refuted by a fact about a different quantity. The other reads a composite index as though it measured only its first input.",
    },
    {
      id: "nns-summary",
      type: "summary",
      eyebrow: "Studio complete",
      title: "A defined notation is answerable material, not recalled material",
      points: [
        "Read the definition and its examples together; the examples are the real specification.",
        "Enumerate the readings a string permits, then use a decoded example to eliminate all but one.",
        "Re-derive an example the passage has already worked before applying the rule to a new case.",
        "Expect one object to have several legal representations unless the passage adds a rule that forbids them.",
        "A definition is true by fiat; an assumption has a scope; an example can add a rule the prose omitted.",
        "A composite index tells you about the index, not about either quantity that went into it.",
      ],
      transferRule:
        "When a passage defines a symbol system, decode it as a self-contained language: never import an outside fact that contradicts the definition, and never assume a rule the passage did not state.",
      nextLessonId: "lesson.integration.data_inference_studio",
    },
  ],
};

const dataInferenceStudio: Lesson = {
  id: "lesson.integration.data_inference_studio",
  slug: "data-and-experimental-inference-studio",
  number: "14.2",
  stageId: "stage.reasoning_studios",
  discipline: "integrated",
  title: "Data, graphs, and experimental inference",
  summary:
    "Read an unfamiliar figure in a fixed order — axes, variables, control, then values — and separate what a data set shows from what it merely suggests.",
  estimatedMinutes: 40,
  reviewStatus: "unreviewed",
  objectives: [
    "Read axes, units and controls before extracting any value from a figure.",
    "Infer the order of steps in a pathway from a table of rescue experiments.",
    "Distinguish a change in rate from a change in final extent in a time course.",
    "Interpret a plateau, a curve shifted along one axis, and a curve rescaled along the other.",
    "Identify when two variables were changed at once and name the comparison that would isolate the claim.",
    "Separate no effect observed from no effect when a control is missing.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.experimental_design",
    "lesson.chemistry.kinetics",
  ],
  blocks: [
    {
      id: "dis-purpose",
      type: "concept",
      eyebrow: "Reasoning studio",
      title: "Read the figure before you read the question",
      paragraphs: [
        "The most expensive mistake in front of an unfamiliar table or graph is to read the question first and then hunt the figure for a number that answers it. Hunting finds numbers, but it does not find meaning, and a figure is a set of claims about what was varied, what was held fixed, and what was measured. A value extracted without that structure is a digit without a referent, and it can be made to support almost any conclusion.",
        "The alternative is a fixed reading order, applied before the question is even considered. Axes and their units. What each curve, column or row varies. Which condition is the control. Only then a value. The order costs perhaps twenty seconds and converts a figure from a lookup table into an argument you can evaluate. This studio applies that order to three invented data sets and then attacks the inferences people draw from them.",
      ],
      callout:
        "Axes and units → what varies → which is the control → only then read a value.",
    },
    {
      id: "dis-visual-axes",
      type: "visual",
      eyebrow: "Structure first",
      title: "Every figure encodes what was varied and what was held fixed",
      introduction:
        "Look at the frame of the figure rather than the data in it: what quantity each axis carries, in what unit, over what range, and what distinguishes one curve from the next.",
      visual: "graph",
      caption:
        "Two curves differ in exactly one respect if the experiment was well designed. Finding that one respect is the whole reading, because it is the only thing the comparison can be evidence about.",
    },
    {
      id: "dis-method",
      type: "concept",
      eyebrow: "The reading order",
      title: "Four questions convert a figure into an argument",
      paragraphs: [
        "Start with the axes and their units. A quantity per unit time is a rate and behaves differently from a total; a concentration axis in μmol L⁻¹ and one in mmol L⁻¹ differ by a factor of a thousand; a logarithmic axis compresses a range of a million into six divisions. Read the unit, then read the range, because a range that spans four decades is telling you the author expects multiplicative rather than additive differences.",
        "Then ask what each curve or row varies. In a well-built figure the curves differ in exactly one respect, and that respect is named in the legend. In a table, one dimension is usually the thing that was manipulated and the other is the thing that was measured, and identifying which is which prevents the commonest table error of reading the design backwards.",
        "Third, find the control. A control is the condition that shows what happens when the intervention is absent but everything else is the same, and it is the only reference against which a treated condition means anything. If no such condition exists, no comparison in the figure isolates the intervention, and that is a conclusion about the experiment rather than a reason to guess. Only after these three questions should a number be read off.",
      ],
      callout:
        "A difference between two conditions is evidence only about the thing that differs between them.",
    },
    {
      id: "dis-worked-pathway",
      type: "worked",
      eyebrow: "Data set one",
      title: "Infer a pathway order from rescue experiments",
      scenario:
        "A soil bacterium requires the metabolite helvine for growth and makes it from a precursor present in minimal medium. Three mutant strains and the wild type were grown on minimal medium alone and on minimal medium supplemented with one of brenol, cydine, arvin or helvine. Growth after 48 h is recorded as + or −. Wild type: minimal +, brenol +, cydine +, arvin +, helvine +. Strain 1: minimal −, brenol −, cydine −, arvin +, helvine +. Strain 2: minimal −, brenol −, cydine +, arvin +, helvine +. Strain 3: minimal −, brenol −, cydine −, arvin −, helvine +. Deduce the order of the intermediates and the step blocked in each strain.",
      steps: [
        {
          label: "Read the design before any single cell",
          decision:
            "Rows are strains and columns are media, so the manipulated variables are strain and supplement, and the measurement is growth. The wild-type row is the control that validates the media.",
          working:
            "Wild type grows on every medium, including minimal. So none of the four supplements is toxic and minimal medium supports growth whenever the pathway is intact. Any − in a mutant row is therefore about the mutation.",
        },
        {
          label: "State the logic that connects rescue to position",
          decision:
            "Supplying a compound bypasses every step upstream of it. A mutant is rescued by a compound only if that compound lies at or after the blocked step, so later compounds rescue more strains.",
          working:
            "Rescue count is a ranking device: the compound that rescues the most strains is furthest downstream.",
        },
        {
          label: "Rank the supplements by how many mutants they rescue",
          decision:
            "Count down each supplement column across the three mutant rows and order the compounds by that count.",
          working:
            "Helvine rescues 3 of 3. Arvin rescues 2 (strains 1 and 2). Cydine rescues 1 (strain 2). Brenol rescues 0. Order, earliest first: brenol → cydine → arvin → helvine.",
        },
        {
          label: "Locate each block",
          decision:
            "A strain is blocked in the step that produces the earliest compound able to rescue it, because everything before that compound is inaccessible to it.",
          working:
            "Strain 2 is first rescued by cydine, so it is blocked in brenol → cydine. Strain 1 is first rescued by arvin, so it is blocked in cydine → arvin. Strain 3 is rescued only by helvine, so it is blocked in arvin → helvine.",
        },
      ],
      answer:
        "The pathway runs precursor → brenol → cydine → arvin → helvine. Strain 2 is blocked converting brenol to cydine, strain 1 converting cydine to arvin, and strain 3 converting arvin to helvine.",
      plausibility:
        "Test the deduction against every cell rather than the ones that suggested it. Each strain should grow on exactly those compounds at or after its block: strain 2 on cydine, arvin and helvine; strain 1 on arvin and helvine; strain 3 on helvine only. All twenty cells of the table are reproduced, and no strain grows on minimal because every one of them is blocked somewhere in the route.",
    },
    {
      id: "dis-check-pathway",
      type: "check",
      eyebrow: "Extend the inference",
      title: "Place a fourth strain",
      prompt:
        "A fourth mutant of the same organism fails to grow on minimal medium but grows when supplied with brenol, and also when supplied with cydine, arvin or helvine. Where is strain 4 blocked?",
      options: [
        "In the conversion of cydine to arvin",
        "In a step before brenol is formed",
        "In the conversion of arvin to helvine",
        "Nowhere in this pathway, since it grows whenever brenol is supplied",
      ],
      correctIndex: 1,
      explanation:
        "Brenol is the earliest intermediate in the route, and strain 4 is rescued by it. A compound rescues only what lies downstream of the block, so the block must be upstream of brenol, in the step that makes brenol from the precursor supplied by minimal medium.",
      misconception:
        "Concluding that a strain rescued by everything has no defect. Failure to grow on minimal medium is itself the defect; the rescue pattern locates it rather than excusing it.",
    },
    {
      id: "dis-layer-curves",
      type: "concept",
      eyebrow: "Second layer",
      title: "A curve carries two independent facts: how fast and how far",
      paragraphs: [
        "A time course of product against time contains two things that are routinely confused. The initial slope is a rate, measured in concentration per unit time, and it reports how quickly the system converts. The plateau is an extent, measured in concentration, and it reports how much conversion was available. A plateau means the reaction has stopped changing, either because a reactant has run out or because equilibrium has been reached, and its height is set by what was supplied and by the position of that equilibrium, not by how good the catalyst was.",
        "Because the two facts are independent, four outcomes are possible relative to a control: same rate and same extent, lower rate and same extent, same rate and lower extent, and lower in both. A treatment that lowers the rate but not the extent has slowed the route without changing what is achievable, which is the signature of an effect on catalysis. A treatment that lowers the extent but not the initial rate has changed what is achievable without touching catalysis, which is the signature of less starting material when the catalyst is already saturated, or of a shifted equilibrium.",
        "This maps onto two geometric operations. A curve stretched along the time axis while reaching the same plateau is shifted: every value is reached later, but every value is eventually reached. A curve of the same shape scaled down along the concentration axis is rescaled: every value is reached at the same time in relative terms, but the ceiling itself is lower. Deciding which of the two you are looking at is usually the whole question, and it is decided by looking at the plateau, not at the middle of the curve.",
      ],
      callout:
        "Initial slope = rate. Plateau height = extent. A curve can change one without the other.",
    },
    {
      id: "dis-worked-timecourse",
      type: "worked",
      eyebrow: "Data set two",
      title: "Separate a rate effect from an extent effect",
      scenario:
        "An enzyme converts a substrate to a product. Product concentration in μmol L⁻¹ is recorded at 0, 2, 5, 10, 20 and 40 min. Control: 0, 30, 60, 88, 100, 100. Treatment R: 0, 10, 24, 45, 76, 100. Treatment S: 0, 29, 47, 50, 50, 50. The enzyme is substrate-saturated at the start of every run. Classify each treatment.",
      steps: [
        {
          label: "Read the columns and units before comparing",
          decision:
            "Time is in minutes and product is in μmol L⁻¹, so a slope will be in μmol L⁻¹ min⁻¹. The control is the untreated run and every comparison is made against it.",
          working:
            "Two quantities are extractable from each run: the slope over the first interval, and the value the run settles at.",
        },
        {
          label: "Compare initial rates over the same first interval",
          decision:
            "Initial rate must be taken over the same early window in every run, because later slopes are contaminated by depletion.",
          working:
            "Control: (30 − 0)/(2 − 0) = 15 μmol L⁻¹ min⁻¹. R: 10/2 = 5 μmol L⁻¹ min⁻¹. S: 29/2 = 14.5 μmol L⁻¹ min⁻¹.",
        },
        {
          label: "Compare final extents",
          decision:
            "The plateau is the value at which successive readings stop changing, so check that at least two consecutive readings agree before calling it a plateau.",
          working:
            "Control: 100 at both 20 and 40 min. R: 76 at 20 min but 100 at 40 min, so R has reached 100. S: 50 at 10, 20 and 40 min.",
        },
        {
          label: "Classify each treatment against the control",
          decision:
            "Assign each treatment to one of the four rate-and-extent outcomes rather than describing the curves loosely as lower.",
          working:
            "R: rate 5 against 15, one third of the control, with the same extent of 100. S: rate 14.5 against 15, effectively unchanged, with extent halved to 50.",
        },
      ],
      answer:
        "Treatment R reduces the rate to about one third without changing the final extent, which points to an effect on catalysis. Treatment S leaves the initial rate essentially unchanged but halves the final extent, which points to half as much convertible substrate rather than an effect on the enzyme.",
      plausibility:
        "The classification is consistent with the stated saturation. If the enzyme is saturated, the initial rate is independent of substrate concentration, so halving the substrate should leave the initial rate alone and halve the plateau, which is exactly the S pattern. R lies below the control at every intermediate time yet catches it up by 40 min, which is only possible if the ceiling is unchanged.",
    },
    {
      id: "dis-check-rate-extent",
      type: "check",
      eyebrow: "Apply the distinction",
      title: "Match a manipulation to a curve",
      prompt:
        "In a fourth run, the experimenters supplied half as much substrate as in the control and nothing else was altered. The enzyme is saturated at both substrate concentrations. Which of the recorded curves does this run reproduce?",
      options: [
        "Treatment R, because the curve rises more slowly than the control",
        "Treatment S, because the plateau is halved while the initial rate is unchanged",
        "Both R and S, because both lie below the control at 10 min",
        "Neither, because halving the substrate must halve the initial rate as well",
      ],
      correctIndex: 1,
      explanation:
        "A saturated enzyme is working at its maximum rate, so the initial rate does not depend on how much substrate is present; halving the substrate therefore leaves the initial slope at about 15 μmol L⁻¹ min⁻¹ and halves the amount available for conversion, giving a plateau of 50. That is the S pattern exactly.",
      misconception:
        "Reading any curve that lies lower than the control as showing a slower reaction. Lying below the control at one time point is ambiguous between a rate effect and an extent effect; only the plateau separates them.",
    },
    {
      id: "dis-check-shift",
      type: "check",
      eyebrow: "Representation shift",
      title: "Shifted along one axis or rescaled along the other",
      prompt:
        "Two hypothetical curves are compared with the same control. Curve U has the identical shape but reaches every value at exactly twice the time, ending at the same plateau. Curve V reaches its plateau after the same time as the control, but every value on it is 0.6 of the corresponding control value. What does each curve indicate?",
      options: [
        "U indicates a change in rate only; V indicates a change in extent only",
        "U indicates a change in extent only; V indicates a change in rate only",
        "Both indicate a change in the position of the equilibrium",
        "Both indicate a change in the amount of catalyst present",
      ],
      correctIndex: 0,
      explanation:
        "Stretching a curve along the time axis while preserving the plateau means everything still happens, just more slowly, which is a pure rate change. Scaling a curve down along the concentration axis while preserving the timing means the process runs on the same schedule towards a lower ceiling, which is a pure extent change.",
      misconception:
        "Treating a stretched curve and a squashed curve as the same observation because both sit below the control. Which axis the transformation acts on is precisely what distinguishes a kinetic effect from a thermodynamic or stoichiometric one.",
    },
    {
      id: "dis-controls",
      type: "concept",
      eyebrow: "Third layer",
      title: "Absence of evidence is not evidence of absence",
      paragraphs: [
        "Two variables changed together can never be separated afterwards. If the control tubes were run in one buffer at one temperature and the test tubes in a different buffer at a different temperature, then any difference observed is attributable to the buffer, to the temperature, or to their interaction, and no amount of statistical treatment recovers which. The fix is never analytical; it is a further condition that holds one of the two fixed. Whenever a result is reported, ask what single comparison isolates the claim being made, and check that the figure actually contains it.",
        "The mirror-image error is over-correction. Noticing that a confound exists shows that the claimed effect is unsupported, not that it is absent. Similarly, a treatment that produced no measurable difference has shown no effect observed, which is compatible with a real effect that is smaller than the resolution of the method, shorter-lived than the sampling interval, or masked by a saturating condition. A null result licenses the statement that the experiment did not detect an effect of at least a certain size; it does not license the statement that there is none.",
        "The practical habit is to name the missing condition out loud. If an extract dissolved in ethanol reduces activity, the missing condition is ethanol without the extract. If a drug given with food changes absorption, the missing condition is the drug without food. Once the missing condition has a name, the strength of the reported claim becomes obvious, and the tempting answer that treats the reported comparison as though it were the isolating one becomes visible as a guess.",
      ],
      callout:
        "No effect observed ≠ no effect. Confounded ≠ refuted. Name the condition that is missing.",
    },
    {
      id: "dis-check-confound",
      type: "check",
      eyebrow: "Two variables at once",
      title: "Find the comparison that was never made",
      prompt:
        "A group reports that a new buffer increases the activity of an enzyme. Their control tubes contained phosphate buffer and were incubated at 25 °C; their test tubes contained the new buffer and were incubated at 37 °C. Activity was higher in the test tubes. What is the correct assessment?",
      options: [
        "The claim stands, because activity was measured to be higher in the new buffer",
        "Nothing can be said until the experiment is repeated with more replicates",
        "The claim is refuted, because the higher temperature alone accounts for the difference",
        "Buffer and temperature were changed together, so the missing condition is the new buffer at 25 °C or phosphate buffer at 37 °C",
      ],
      correctIndex: 3,
      explanation:
        "The two conditions differ in two respects, so the observed difference is evidence about the combination and not about either factor. Adding a tube that changes only one factor at a time restores a comparison in which a single variable differs, and that comparison is the one the claim requires.",
      misconception:
        "Over-correcting from confounded to refuted. Temperature could account for the whole difference, part of it, or none of it; the design cannot say. Replication is also the wrong remedy, since repeating a confounded comparison many times produces a precise confounded result.",
    },
    {
      id: "dis-visual-log",
      type: "visual",
      eyebrow: "Data set three",
      title: "A logarithmic axis turns constant proportional change into a straight line",
      introduction:
        "Plot a quantity that falls by a fixed fraction in every equal time interval on a linear axis and you get a curve; plot its logarithm and you get a straight line whose slope carries the rate constant.",
      visual: "log_scale",
      caption:
        "On a semi-logarithmic plot, equal vertical distances represent equal ratios rather than equal differences, so a straight line is a direct test of first-order behaviour and a decade of fall is a fixed horizontal distance.",
    },
    {
      id: "dis-worked-halflife",
      type: "worked",
      eyebrow: "Read a logarithmic data set",
      title: "Extract a half-life and project beyond the data",
      scenario:
        "Plasma concentration of a drug after a single intravenous dose, in mg L⁻¹, is measured at 0, 2, 4, 6, 8 and 12 h as 64, 32, 16, 8, 4 and 1. The therapeutic threshold is 0.25 mg L⁻¹. Determine the half-life and the rate constant, and find when the concentration reaches the threshold.",
      steps: [
        {
          label: "Test for a constant fractional fall",
          decision:
            "First-order decay is defined by a constant ratio over equal intervals, not a constant difference, so form ratios rather than subtracting.",
          working:
            "32/64 = 0.5 over 2 h; 16/32 = 0.5 over 2 h; 8/16 = 0.5; 4/8 = 0.5. From 8 h to 12 h the fall is 4 → 1, a factor of 4 in 4 h, again two halvings. The behaviour is first order with t½ = 2.0 h.",
        },
        {
          label: "Convert the half-life to a rate constant",
          decision:
            "For first-order decay k = ln 2 / t½, and the same information appears as the slope of log₁₀ c against t.",
          working:
            "k = 0.693 / 2.0 h = 0.35 h⁻¹. On the semi-logarithmic plot the slope is −k/2.303 = −0.15 h⁻¹, which matches the data: log₁₀ 64 = 1.81 falls to log₁₀ 1 = 0 over 12 h, and 1.81/12 = 0.15.",
        },
        {
          label: "Count the halvings needed to reach the threshold",
          decision:
            "Working in half-lives avoids exponentials entirely, because the required factor is a power of two.",
          working: "64 / 0.25 = 256, and 256 = 2⁸, so eight half-lives are needed.",
        },
        {
          label: "Convert halvings to a time",
          decision: "Multiply the number of half-lives by the half-life.",
          working: "t = 8 × 2.0 h = 16 h.",
        },
      ],
      answer:
        "The drug shows first-order elimination with a half-life of 2.0 h and a rate constant of about 0.35 h⁻¹, and the plasma concentration falls to 0.25 mg L⁻¹ about 16 h after the dose.",
      plausibility:
        "Read the answer a second way off the logarithmic axis. The line falls by one decade every 1/0.15 = 6.7 h, and 64 mg L⁻¹ down to 0.25 mg L⁻¹ is log₁₀ 256 = 2.41 decades, giving 2.41 × 6.7 ≈ 16 h. The two routes agree, and 16 h lies beyond the last measurement, so the value depends on the first-order model continuing to hold.",
    },
    {
      id: "dis-check-missing-control",
      type: "check",
      eyebrow: "Transfer",
      title: "Judge a claim whose control was never run",
      prompt:
        "A team reports that a plant extract inhibits the same enzyme. The extract was dissolved in 20 per cent ethanol before addition. Tubes receiving the extract in 20 per cent ethanol formed 60 per cent less product than tubes containing enzyme and substrate in buffer alone. What does the experiment support?",
      options: [
        "Nothing about the extract, until a tube containing 20 per cent ethanol without the extract has been run",
        "The extract inhibits the enzyme by 60 per cent",
        "The extract has no effect, because ethanol at 20 per cent would denature the enzyme anyway",
        "The extract inhibits the enzyme, and the result should be confirmed at a higher extract concentration",
      ],
      correctIndex: 0,
      explanation:
        "The treated and untreated tubes differ in two respects: the extract and the ethanol. A solvent control containing 20 per cent ethanol and no extract holds the solvent fixed and isolates the extract, and it is the only comparison that can support the claim being made.",
      misconception:
        "Concluding that the extract has no effect because ethanol alone would denature the enzyme is the over-correction: recognising the confound and then asserting the opposite conclusion with equal confidence. Without the solvent control the data are silent about the extract in both directions, and increasing the dose of a confounded treatment does not remove the confound.",
    },
    {
      id: "dis-summary",
      type: "summary",
      eyebrow: "Studio complete",
      title: "A figure is an argument with a structure you can read off it",
      points: [
        "Read axes, units and ranges first; a logarithmic axis signals that ratios rather than differences matter.",
        "In a rescue table, the compound that rescues the most mutants lies furthest downstream and a mutant is blocked just before the earliest compound that rescues it.",
        "Initial slope reports rate; plateau height reports extent; a treatment can change either one alone.",
        "A curve stretched along the time axis is a rate change; a curve scaled down along the measured axis is an extent change.",
        "If two conditions differ in two respects, the difference is evidence about neither one alone.",
        "A null result supports no effect observed at the resolution used, never no effect.",
      ],
      transferRule:
        "Before answering, name the single comparison in the figure in which exactly one thing differs; if the figure does not contain it, the strongest defensible answer is that the claim is not yet supported.",
      nextLessonId: "lesson.integration.estimation_studio",
    },
  ],
};

const estimationStudio: Lesson = {
  id: "lesson.integration.estimation_studio",
  slug: "estimation-and-limiting-cases-studio",
  number: "14.3",
  stageId: "stage.reasoning_studios",
  discipline: "integrated",
  title: "Estimation, orders of magnitude, and limiting cases",
  summary:
    "Reach a defensible answer without a calculator by decomposing an estimate into quantities you can bound, tracking only the exponent, and testing candidate formulae at their limits.",
  estimatedMinutes: 38,
  reviewStatus: "unreviewed",
  objectives: [
    "Decompose an unfamiliar estimate into factors you can bound from everyday knowledge.",
    "Round to one significant figure and to convenient powers of ten while tracking the exponent.",
    "State the assumptions that carry an estimate and bracket the result between defensible limits.",
    "Test a candidate relationship by substituting an extreme value and by checking its units.",
    "Eliminate options that are the wrong order of magnitude before performing any arithmetic.",
  ],
  prerequisiteLessonIds: [
    "lesson.toolkit.proportional_reasoning",
    "lesson.physics.fluids",
  ],
  blocks: [
    {
      id: "est-purpose",
      type: "concept",
      eyebrow: "Reasoning studio",
      title: "An estimate is an argument, not a guess",
      paragraphs: [
        "Some questions cannot be computed because the data are incomplete, and some should not be computed because the arithmetic would cost more time than the answer is worth. Both are answerable. A guess produces a number with no defence; an estimate produces a number together with the chain of reasoning and assumptions that generated it, so that anyone can see where it came from and how far wrong it could be. The difference is not the precision of the result but the existence of the argument.",
        "The reason this works is that errors in a product of several rounded factors tend not to accumulate the way intuition suggests. Round one factor up by 30 per cent and another down by 40 per cent and the product is closer to correct than either factor was. Estimates built from four or five bounded quantities are routinely right to within a factor of two or three, which is more than enough to choose between options separated by powers of ten.",
      ],
      callout:
        "State the assumptions, round hard, and quote the exponent with confidence and the leading digit with caution.",
    },
    {
      id: "est-visual-scale",
      type: "visual",
      eyebrow: "Think in exponents",
      title: "Orders of magnitude are the working unit of estimation",
      introduction:
        "Place the quantities involved in an estimate on a logarithmic scale, where each step is a factor of ten, and ask which step the answer belongs on rather than what the answer is.",
      visual: "log_scale",
      caption:
        "On this scale a factor-of-three error is less than half a step. Distinguishing 10⁻⁹ from 10⁻⁶ is easy and decisive; distinguishing 1.2 × 10⁻⁹ from 1.6 × 10⁻⁹ is neither, and is almost never what is being asked.",
    },
    {
      id: "est-method",
      type: "concept",
      eyebrow: "The Fermi method",
      title: "Decompose until every factor is something you can bound",
      paragraphs: [
        "The method has one instruction: keep splitting the unknown into a product of quantities until each factor is something you could argue for within a factor of about three. Breaths in a lifetime is not estimable directly, but breaths per minute is, and so is minutes per year, and so is a lifetime in years. The skill is not knowing more facts; it is choosing a decomposition whose factors are things ordinary experience already constrains.",
        "Round each factor to one significant figure, and where possible to a convenient power of ten. A year is 3 × 10⁷ s. A day is 9 × 10⁴ s, near enough to 10⁵. A human is 7 × 10¹ kg. Carrying more digits than this is wasted work, because the uncertainty in the assumptions is far larger than the rounding. Write every factor in scientific notation before multiplying, so that the exponents can be added separately from the leading digits.",
        "Then track the exponent. Add the powers of ten, multiply the leading digits, and normalise at the end. The exponent is the part of the answer you can defend, and it is the part that distinguishes the options in a well-built question. If the leading digit comes out as 6 when a colleague gets 4, the two of you agree; if the exponent differs, one of you has dropped a conversion, and the discrepancy is worth finding.",
      ],
      callout: "10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ. Settle the exponent first; the leading digit is a detail.",
    },
    {
      id: "est-worked-nail",
      type: "worked",
      eyebrow: "Worked estimate",
      title: "How fast does a fingernail grow, in metres per second?",
      scenario:
        "Estimate the growth rate of a human fingernail in SI base units, using nothing but everyday experience and no calculator.",
      steps: [
        {
          label: "Choose a decomposition you can bound",
          decision:
            "Nail growth per second is not something anyone observes, but nail growth between trimmings is. Use length per month, then convert the month.",
          working:
            "Fingernails need trimming roughly monthly and a few millimetres are removed each time. Take 3 mm per month = 3 × 10⁻³ m per month. It is certainly not 0.3 mm and certainly not 30 mm, so the estimate is bounded within a factor of ten either way.",
        },
        {
          label: "Convert the month to seconds with round numbers",
          decision:
            "Express the time in seconds so the answer arrives in m s⁻¹ directly, and round to one significant figure.",
          working:
            "30 × 24 × 3600 = 2.592 × 10⁶ s. Call it 3 × 10⁶ s.",
        },
        {
          label: "Divide, handling the exponents separately",
          decision:
            "Divide the leading digits and subtract the exponents, rather than attempting the division as written.",
          working: "(3 × 10⁻³ m) ÷ (3 × 10⁶ s) = (3/3) × 10⁻³⁻⁶ = 1 × 10⁻⁹ m s⁻¹.",
        },
        {
          label: "Restate the result in a unit that gives it meaning",
          decision:
            "Converting to a unit matched to the scale of the answer turns a bare exponent into something checkable.",
          working: "1 × 10⁻⁹ m s⁻¹ = 1 nm s⁻¹.",
        },
      ],
      answer:
        "A fingernail grows at roughly 1 × 10⁻⁹ m s⁻¹, that is about one nanometre per second, which is a few atomic diameters of new nail every second.",
      plausibility:
        "Run the estimate backwards. At 10⁻⁹ m s⁻¹ a year of 3 × 10⁷ s gives 3 × 10⁻² m, about 3 cm of nail per year, which matches the observation that a nail takes roughly six months to grow out from base to tip. The assumption carrying the estimate is 3 mm per month; even if that is wrong by a factor of three, the exponent moves by less than one.",
    },
    {
      id: "est-check-hair",
      type: "check",
      eyebrow: "Same method, new quantity",
      title: "Estimate hair growth in metres per second",
      prompt:
        "Hair grows by roughly one centimetre per month. Taking a month as 2.6 × 10⁶ s, which is the best estimate of the growth rate in m s⁻¹?",
      options: [
        "About 4 × 10⁻⁷ m s⁻¹",
        "About 4 × 10⁻⁸ m s⁻¹",
        "About 4 × 10⁻⁹ m s⁻¹",
        "About 4 × 10⁻¹⁰ m s⁻¹",
      ],
      correctIndex: 2,
      explanation:
        "One centimetre is 1 × 10⁻² m, so the rate is (1 × 10⁻²) ÷ (2.6 × 10⁶) ≈ 0.4 × 10⁻⁸ = 4 × 10⁻⁹ m s⁻¹. That is a few times the fingernail rate, which is consistent with hair needing cutting rather more often than nails per centimetre of visible change.",
      misconception:
        "The distractors encode dropped conversions. Forgetting that a centimetre is 10⁻² rather than 10⁻³ m shifts the answer by one power of ten; using a month as 2.6 × 10⁵ s or 2.6 × 10⁷ s shifts it the other way. In estimation the conversions, not the physics, are where exponents go missing.",
    },
    {
      id: "est-layer-assumptions",
      type: "concept",
      eyebrow: "Second layer",
      title: "Bracket the answer and name the assumption that carries it",
      paragraphs: [
        "An estimate is finished when you can say what it is and how wrong it could be. The cheapest way to establish that is to run the calculation twice, once with every factor pushed to its most extreme plausible low value and once to its most extreme plausible high value. The two results bracket the answer. If the bracket spans less than a factor of ten, the exponent is settled and the question is answerable; if it spans more, the decomposition needs a better-constrained factor rather than more care with the arithmetic.",
        "It is also worth identifying which single assumption dominates. In most estimates one factor is far less certain than the others, and the uncertainty of the whole is essentially the uncertainty of that factor. Naming it converts a vague hedge into a specific one: not “this is only an estimate” but “this is right to within a factor of two provided resting cardiac output really is about 5 L min⁻¹”. That statement can be checked by someone else, which is what makes it an argument.",
        "Finally, distinguish estimates good to a factor of two from those good to a factor of ten, because they license different conclusions. An estimate good to a factor of two can decide between 3 × 10⁶ and 8 × 10⁶. An estimate good to a factor of ten can only decide between 10⁶ and 10⁸, and pretending otherwise is how a careful estimate turns into an overconfident claim.",
      ],
      callout:
        "Push every factor low, then high. The bracket is the answer; the widest factor is the assumption to quote.",
    },
    {
      id: "est-worked-breaths",
      type: "worked",
      eyebrow: "Worked estimate",
      title: "How many breaths does a person take in a lifetime?",
      scenario:
        "Estimate the total number of breaths taken by an adult over a full lifetime, and state the range within which the answer is defensible.",
      steps: [
        {
          label: "Decompose into two bounded factors",
          decision:
            "Total breaths is breathing rate multiplied by lifetime, provided both are expressed in the same time unit. Both factors are within everyday experience.",
          working: "N = (breaths per minute) × (minutes in a lifetime).",
        },
        {
          label: "Bound the breathing rate",
          decision:
            "Resting respiratory rate can be counted directly, and activity raises it only intermittently, so a resting figure is the right central value.",
          working:
            "A resting adult breathes roughly 12 to 20 times per minute. Take 15 min⁻¹.",
        },
        {
          label: "Convert a lifetime to minutes",
          decision:
            "Build the conversion from factors that are certain, and round to one significant figure at the end rather than at each stage.",
          working:
            "Minutes per year = 365 × 24 × 60 = 5.26 × 10⁵, call it 5 × 10⁵. A lifetime of 80 years gives 80 × 5 × 10⁵ = 4 × 10⁷ min.",
        },
        {
          label: "Multiply, tracking the exponent",
          decision: "Multiply leading digits and add exponents.",
          working: "N = 15 × 4 × 10⁷ = 60 × 10⁷ = 6 × 10⁸ breaths.",
        },
        {
          label: "Bracket the result",
          decision:
            "Repeat with the most extreme plausible values of both factors to see how wide the answer really is.",
          working:
            "Low: 10 min⁻¹ over 60 years gives 10 × 60 × 5 × 10⁵ = 3 × 10⁸. High: 20 min⁻¹ over 100 years gives 20 × 100 × 5 × 10⁵ = 1 × 10⁹.",
        },
      ],
      answer:
        "A person takes roughly 6 × 10⁸ breaths in a lifetime, a few hundred million, with a defensible range of about 3 × 10⁸ to 1 × 10⁹.",
      plausibility:
        "The bracket spans a factor of about three, so the answer is settled to better than one power of ten: it is of order 10⁹ and certainly not 10⁶ or 10¹². Both factors were bounded by direct experience rather than recall, which is why the range is this tight.",
    },
    {
      id: "est-check-blood",
      type: "check",
      eyebrow: "Order of magnitude",
      title: "How much blood does a heart pump in a year?",
      prompt:
        "Resting cardiac output is about 5 L min⁻¹. Estimate the volume of blood a heart pumps in one year, assuming the resting value throughout.",
      options: [
        "About 3 × 10⁴ L",
        "About 3 × 10⁵ L",
        "About 3 × 10⁶ L",
        "About 3 × 10⁷ L",
      ],
      correctIndex: 2,
      explanation:
        "There are about 5 × 10⁵ minutes in a year, so the volume is 5 L min⁻¹ × 5 × 10⁵ min = 25 × 10⁵ ≈ 3 × 10⁶ L, which is 2600 m³.",
      misconception:
        "Errors here come almost entirely from the time conversion rather than the physiology: using hours or days in a year instead of minutes moves the answer by one or two powers of ten. Convert the time factor into the unit the rate is quoted in before multiplying anything.",
    },
    {
      id: "est-worked-glucose",
      type: "worked",
      eyebrow: "Worked estimate",
      title: "How much glucose would supply a day's energy?",
      scenario:
        "An adult requires about 2000 kcal per day. Taking 1 kcal as 4.2 kJ and the enthalpy of combustion of glucose as −2.8 × 10³ kJ mol⁻¹, estimate the mass of glucose that would be oxidised in a day if glucose supplied all of that energy. The molar mass of glucose, C₆H₁₂O₆, is 180 g mol⁻¹.",
      steps: [
        {
          label: "Convert the requirement to kilojoules",
          decision:
            "The combustion enthalpy is quoted per mole in kilojoules, so the energy requirement must be in the same unit before the two can be combined.",
          working: "2000 kcal × 4.2 kJ kcal⁻¹ = 8.4 × 10³ kJ per day.",
        },
        {
          label: "Convert energy to an amount of substance",
          decision:
            "Dividing an energy by an energy per mole leaves moles, which is the check that the division is the right way round.",
          working:
            "n = (8.4 × 10³ kJ) ÷ (2.8 × 10³ kJ mol⁻¹) = 3.0 mol of glucose.",
        },
        {
          label: "Convert amount to mass",
          decision:
            "Multiply by the molar mass, which converts mol into g by cancelling mol⁻¹.",
          working: "m = 3.0 mol × 180 g mol⁻¹ = 540 g ≈ 5 × 10² g.",
        },
        {
          label: "State the assumption the answer depends on",
          decision:
            "The estimate assumed a single fuel. Say so, because the assumption is what limits how the number may be used.",
          working:
            "Real diets supply energy from fat and protein as well, and fat yields roughly twice the energy per gram, so the actual mass of carbohydrate oxidised is smaller than this.",
        },
      ],
      answer:
        "About 540 g, roughly half a kilogram of glucose per day, if glucose were the only fuel oxidised.",
      plausibility:
        "The result is the right size for a food intake: a day's dry food mass is of order hundreds of grams, so an answer of 5 × 10² g is credible while 5 g or 5 kg would not be. The units also cancel correctly at every stage, kJ ÷ kJ mol⁻¹ giving mol and mol × g mol⁻¹ giving g.",
    },
    {
      id: "est-limiting",
      type: "concept",
      eyebrow: "Third layer",
      title: "Test a formula at its extremes before you trust it in the middle",
      paragraphs: [
        "A candidate relationship can be checked without any data. Substitute an extreme value of one variable and ask whether the prediction is physically sensible. Send a length to infinity and a flow should fall to zero; send a resistance to zero and a current should diverge; set a concentration to zero and a rate must vanish. A formula that gives an infinite answer where a finite one is required, or a finite answer where zero is required, is wrong, and one substitution has established that without knowing what the correct formula is.",
        "Dimensional analysis is the second free test and is often decisive. Every term that is added or equated must carry identical units, and the argument of a logarithm, an exponential or a trigonometric function must be dimensionless. Because the units of a ratio invert when the ratio does, a formula written upside down is caught immediately: if a proposed speed comes out in s m⁻¹ rather than m s⁻¹, the numerator and denominator have been exchanged. A formula that passes a dimensional check may still be wrong by a numerical factor, but one that fails cannot be right at all.",
        "Symmetry supplies a third check. If two quantities enter a situation on an equal footing, the answer must be unchanged when they are swapped, so an expression that treats them differently is suspect. Used together with a rough order-of-magnitude bound, these tests usually eliminate two or three of four options before any arithmetic starts, and the remaining calculation is done on a smaller and better-understood field.",
      ],
      callout:
        "Every term in an equation carries the same units, and logarithms and exponentials take dimensionless arguments.",
    },
    {
      id: "est-check-limiting",
      type: "check",
      eyebrow: "Limiting case",
      title: "Reject a formula by sending a variable to its extreme",
      prompt:
        "Two candidate expressions are proposed for the volumetric flow rate Q of a liquid of viscosity η through a rigid tube of radius r and length L under a pressure difference ΔP, with k a dimensionless constant: Q = kΔPr⁴/(ηL) and Q = kΔPr⁴η/L. Which is rejected by a limiting case, and on what grounds?",
      options: [
        "Q = kΔPr⁴η/L fails, because it predicts that a fluid of vanishing viscosity would not flow at all",
        "Q = kΔPr⁴/(ηL) fails, because flow should increase as the tube is made longer",
        "Both are acceptable, since only an experiment can decide between them",
        "Q = kΔPr⁴η/L fails, because no physical quantity can depend on a radius to the fourth power",
      ],
      correctIndex: 0,
      explanation:
        "Let η tend to zero. The second expression sends Q to zero, meaning a perfectly free-flowing fluid would not move at all under a pressure difference, which is the opposite of what viscosity does. The first expression sends Q to infinity, which is the sensible limit for a fluid with no internal resistance. Viscosity belongs in the denominator because it opposes flow.",
      misconception:
        "Rejecting Q = kΔPr⁴/(ηL) inverts the role of length: a longer tube offers more resistance, so Q must fall as L rises. Rejecting a term because it looks surprising rather than because a limit misbehaves is the other trap, yet an r⁴ dependence is exactly what laminar flow through a tube produces.",
    },
    {
      id: "est-check-dimensions",
      type: "check",
      eyebrow: "Dimensional grounds",
      title: "Reject a plausible-looking formula on its units",
      prompt:
        "A student writes the speed v of a pressure wave in a liquid as v = √(ρ/K), where ρ is the density in kg m⁻³ and K is the bulk modulus in Pa. How should this be judged?",
      options: [
        "It is acceptable, since ρ/K and K/ρ differ only by a constant factor",
        "It is acceptable, because both ρ and K are properties of the liquid and a speed must depend on both",
        "It must be rejected, because the square root of a density has no physical meaning",
        "It must be rejected: ρ/K has units s² m⁻², so its square root is s m⁻¹, the reciprocal of a speed, and the ratio is inverted",
      ],
      correctIndex: 3,
      explanation:
        "One pascal is 1 N m⁻² = 1 kg m⁻¹ s⁻², so K/ρ has units (kg m⁻¹ s⁻²)/(kg m⁻³) = m² s⁻², whose square root is m s⁻¹. The proposed expression is the reciprocal of this, giving s m⁻¹. The units identify the error and also supply the correction, v = √(K/ρ).",
      misconception:
        "Treating an inverted ratio as a matter of an unknown constant. A missing dimensionless constant cannot change units, so a dimensional mismatch is never repairable by a numerical factor; it means the expression is structurally wrong.",
    },
    {
      id: "est-check-order-elimination",
      type: "check",
      eyebrow: "Eliminate before calculating",
      title: "Put an arterial pressure into pascals",
      prompt:
        "A systolic pressure is reported as 120 mmHg. Taking the density of mercury as 1.36 × 10⁴ kg m⁻³ and g as 10 m s⁻², which is the best estimate of this pressure in pascals?",
      options: [
        "About 1.6 × 10³ Pa",
        "About 1.6 × 10⁴ Pa",
        "About 1.6 × 10⁵ Pa",
        "About 1.6 × 10⁷ Pa",
      ],
      correctIndex: 1,
      explanation:
        "The pressure of a fluid column is P = ρgh with h = 120 mm = 0.12 m, giving P = 1.36 × 10⁴ × 10 × 0.12 ≈ 1.6 × 10⁴ Pa. Three options can be eliminated before any arithmetic: atmospheric pressure is about 1.0 × 10⁵ Pa and corresponds to 760 mmHg, so 120 mmHg must be roughly a sixth of an atmosphere, which fixes the exponent at 10⁴ immediately.",
      misconception:
        "Each wrong option is one slip away: 10³ follows from dropping g and evaluating ρh alone, 10⁵ from converting 120 mm to 1.2 m rather than 0.12 m, and 10⁷ from leaving the millimetres unconverted altogether. Anchoring the answer against a familiar pressure catches all three before the multiplication is attempted.",
    },
    {
      id: "est-check-transfer",
      type: "check",
      eyebrow: "Transfer",
      title: "Chain two estimates together",
      prompt:
        "Using the earlier estimate that a resting adult oxidises about 3 mol of glucose per day by C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, estimate the volume of oxygen consumed in a day at 25 °C and 1.0 × 10⁵ Pa, where the molar volume of an ideal gas is about 25 L mol⁻¹.",
      options: [
        "About 4 × 10¹ L",
        "About 4 × 10² L",
        "About 4 × 10³ L",
        "About 4 × 10⁴ L",
      ],
      correctIndex: 1,
      explanation:
        "The equation requires 6 mol of O₂ per mole of glucose, so n(O₂) = 6 × 3 = 18 mol, and V = 18 mol × 25 L mol⁻¹ = 450 L ≈ 4 × 10² L per day.",
      misconception:
        "Dropping the stoichiometric coefficient of 6 gives 75 L and lands on the 10¹ option. The result can be checked independently: resting ventilation is about 6 L min⁻¹, which is 8.6 × 10³ L of air per day, of which 21 per cent is oxygen, giving 1.8 × 10³ L inhaled; extracting roughly a quarter of that gives about 450 L, so two unrelated routes agree.",
    },
    {
      id: "est-summary",
      type: "summary",
      eyebrow: "Studio complete",
      title: "The exponent is the answer; the digits are decoration",
      points: [
        "Split an unfamiliar estimate into factors until each one can be argued for within a factor of about three.",
        "Round every factor to one significant figure and write it in scientific notation before multiplying.",
        "Add the exponents separately from the leading digits, and normalise only at the end.",
        "Run the estimate with all factors low and all factors high to bracket the result, then quote the assumption that dominates.",
        "Send a variable to zero or to infinity to test whether a candidate formula behaves sensibly.",
        "Check units before arithmetic: a dimensional mismatch cannot be repaired by a missing constant.",
      ],
      transferRule:
        "When options are separated by powers of ten, decide the exponent from bounded factors and unit checks alone, and treat any arithmetic beyond one significant figure as a sign that the question has been misread.",
      nextLessonId: "lesson.integration.chart_literacy_studio",
    },
  ],
};

export const reasoningStudiosLessons: Lesson[] = [
  novelNotationStudio,
  dataInferenceStudio,
  estimationStudio,
];
