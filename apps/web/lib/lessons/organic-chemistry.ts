import type { Lesson } from "@/lib/lesson-types";

const organicStructure: Lesson = {
  id: "lesson.chemistry.organic_structure",
  slug: "carbon-frameworks-and-functional-groups",
  number: "6.1",
  stageId: "stage.organic_chemistry",
  discipline: "chemistry",
  title: "Carbon frameworks and functional groups",
  summary:
    "Read skeletal structures fluently, convert between organic representations, and recognise the functional groups that decide how a carbon compound behaves.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain why carbon forms four bonds and links into extended chains and rings.",
    "Read a skeletal structure, supplying the implied carbon and hydrogen atoms.",
    "Convert between molecular, condensed, and skeletal representations of one compound.",
    "Calculate degrees of unsaturation from a molecular formula and account for them structurally.",
    "Identify the major functional groups from their general formula and defining feature.",
    "Name simple straight-chain and branched compounds using systematic rules.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.molecular_shape"],
  blocks: [
    {
      id: "carbon-purpose",
      type: "concept",
      eyebrow: "Why carbon",
      title: "Carbon builds the frameworks that every other group hangs from",
      paragraphs: [
        "Carbon sits in group 14 with four valence electrons and a small atomic radius. Sharing all four electrons gives it four covalent bonds and a filled outer shell, and because carbon is small those bonds are short and strong. A C–C bond has a mean bond enthalpy near 348 kJ mol⁻¹ and a C–H bond near 413 kJ mol⁻¹. Nothing else in the periodic table combines four bonding positions with bonds this strong, so carbon can join to itself repeatedly — a property called catenation — building chains, branches, and rings of essentially unlimited length without falling apart.",
        "That same versatility creates a problem. Millions of stable carbon compounds exist, so no chemist could learn them individually. Organic chemistry solves this by splitting every molecule into two parts: an unreactive hydrocarbon framework of C–C and C–H bonds, and one or more functional groups — small arrangements of atoms, usually containing an element other than carbon or a multiple bond, where the chemistry happens.",
        "The framework mostly stores and shapes; the functional group mostly reacts. Ethanol and octanol have very different sizes, boiling points, and solubilities in water, but both are alcohols, and both react in the same way with the same reagents. Octanoic acid and ethanoic acid likewise differ in every physical property that depends on chain length while sharing the chemistry of the carboxyl group entirely. Learning around fifteen functional groups therefore replaces learning millions of individual compounds, and it is the single highest-value move available in this subject.",
      ],
      callout: "framework holds the molecule together · functional group decides what it does",
    },
    {
      id: "carbon-visual",
      type: "visual",
      eyebrow: "See the groups",
      title: "A functional group is a recognisable pattern, not a whole molecule",
      introduction:
        "Look past the carbon chains and find the small clusters of atoms: an –OH, a C=O, an –NH₂, a benzene ring. Each cluster carries its own chemistry wherever it appears.",
      visual: "functional_groups",
      caption:
        "The same group behaves in the same broad way on a two-carbon molecule or a two-hundred-carbon one, which is why chemists sort compounds by group rather than by size.",
    },
    {
      id: "carbon-skeletal",
      type: "concept",
      eyebrow: "Learn to read the shorthand",
      title: "In a skeletal structure the carbons and hydrogens are silent",
      paragraphs: [
        "Organic chemists almost never draw every atom. In a skeletal, or line-angle, structure a line represents a covalent bond, and there are exactly three rules. First, every vertex where two lines meet is a carbon atom, and every free end of a line is also a carbon atom. Second, hydrogen atoms bonded to carbon are not drawn at all; each carbon is silently given as many hydrogens as it needs to reach four bonds in total. Third, every atom that is not carbon or a hydrogen on carbon is written out explicitly, together with its own hydrogens.",
        "Those rules make the same molecule appear in three different costumes. Butane is C₄H₁₀ as a molecular formula, which gives composition but no connectivity. It is CH₃CH₂CH₂CH₃ as a condensed formula, which gives the order of the atoms in a single line of text. It is a zigzag of three lines as a skeletal structure, which gives connectivity and shape at a glance and takes a second to draw.",
        "Learners new to organic chemistry often stall here, because a skeletal drawing looks like it is missing information. It is not. The information is recoverable from the rules, and it is worth practising the recovery deliberately: pick any drawing, mark each vertex and each line end with a small C, then count the bonds already at that carbon and write in the missing hydrogens. After a dozen structures the counting becomes automatic and the drawing simply reads as a molecule.",
      ],
      callout: "every vertex and every line end is a carbon · hydrogens fill each carbon up to four bonds",
    },
    {
      id: "carbon-worked-skeletal",
      type: "worked",
      eyebrow: "Worked example",
      title: "Recover a molecular formula from a skeletal drawing",
      scenario:
        "A skeletal structure shows a benzene ring drawn as a six-membered ring with three alternating double bonds. From one ring vertex a line runs out to a new vertex, a second line runs from that vertex to a further vertex, and from that further vertex a short line ends at a written OH. Find the molecular formula.",
      steps: [
        {
          label: "Mark every carbon",
          decision:
            "Apply the first rule: each ring vertex is a carbon, and each vertex on the side chain is a carbon. The written OH is oxygen, so it is not a vertex carbon.",
          working: "6 ring carbons + 2 chain carbons = 8 C, plus 1 O",
        },
        {
          label: "Fill hydrogens on the ring",
          decision:
            "Each ring carbon already has two bonds to ring neighbours plus a share of one double bond, giving three bonds. Five ring carbons therefore take one hydrogen each; the sixth carries the side chain instead.",
          working: "5 ring carbons × 1 H = 5 H",
        },
        {
          label: "Fill hydrogens on the chain",
          decision:
            "The first chain carbon is bonded to the ring and to the second chain carbon — two bonds — so it takes two hydrogens. The second chain carbon is bonded to the first and to oxygen, so it also takes two hydrogens.",
          working: "2 H + 2 H = 4 H",
        },
        {
          label: "Add the written heteroatom hydrogens",
          decision:
            "Hydrogens attached to atoms other than carbon are always drawn, so the OH contributes one more hydrogen that must not be forgotten.",
          working: "5 + 4 + 1 = 10 H in total",
        },
      ],
      answer:
        "The compound is 2-phenylethanol, molecular formula C₈H₁₀O, with a molar mass of about 122 g mol⁻¹.",
      plausibility:
        "A benzene ring alone is C₆H₆; replacing one ring hydrogen with a –CH₂CH₂OH group adds two carbons, four hydrogens on those carbons, and the OH, which is exactly what C₈H₁₀O records.",
    },
    {
      id: "carbon-check-hydrogens",
      type: "check",
      eyebrow: "Supply what is not drawn",
      title: "Count the silent hydrogens",
      prompt:
        "Cyclohexene is drawn as a plain six-membered ring of lines with one of the six bonds doubled. No letters appear anywhere on the drawing. How many hydrogen atoms does the molecule contain?",
      options: [
        "6 hydrogen atoms, one for each ring carbon",
        "8 hydrogen atoms",
        "10 hydrogen atoms",
        "12 hydrogen atoms",
      ],
      correctIndex: 2,
      explanation:
        "The two carbons joined by the double bond already have three bonds each — one to the other double-bonded carbon counted twice, and one to a ring neighbour — so they take one hydrogen each. The remaining four carbons have only two ring bonds each, so they take two hydrogens each. That gives (2 × 1) + (4 × 2) = 10 hydrogens, and the molecular formula C₆H₁₀.",
      misconception:
        "Answering 12 treats every ring carbon as a CH₂, which is cyclohexane. A double bond uses up a bonding position on each of the two carbons it joins, so each of them loses one hydrogen.",
    },
    {
      id: "carbon-unsaturation",
      type: "concept",
      eyebrow: "Counting what is missing",
      title: "Every ring and every π bond costs the molecule two hydrogens",
      paragraphs: [
        "A saturated open-chain hydrocarbon with n carbons holds the maximum possible number of hydrogens, CₙH₂ₙ₊₂. Hexane is C₆H₁₄, which fits with n = 6. Now close that chain into a ring: two hydrogens must be removed to free the bonding positions that form the closing bond, giving cyclohexane, C₆H₁₂. Introduce a carbon–carbon double bond instead, and again two hydrogens are lost, giving hexene, C₆H₁₂. Each ring and each π bond costs exactly two hydrogens, and the count of these features is called the degrees of unsaturation.",
        "This gives a formula that can be applied to any molecular formula before a structure is known. For a compound containing C carbons, H hydrogens, N nitrogens, and X halogen atoms, the degrees of unsaturation are (2C + 2 + N − H − X) ÷ 2. Oxygen and sulfur are simply ignored, because inserting a divalent atom into a chain does not change the hydrogen count. Halogens count like hydrogens because they are monovalent; nitrogen adds one because it is trivalent.",
        "The number that comes out is a structural constraint, not a structure. Four degrees of unsaturation are the fingerprint of a benzene ring — three π bonds plus the ring itself — so seeing four in an unfamiliar formula is a strong hint. Zero means saturated: no rings, no multiple bonds. A hydrocarbon can never have a negative or fractional result, so a fraction is a reliable sign that the formula has been copied down wrongly.",
      ],
      callout: "degrees of unsaturation = (2C + 2 + N − H − X) ÷ 2",
    },
    {
      id: "carbon-worked-dou",
      type: "worked",
      eyebrow: "Worked example",
      title: "Account for the unsaturation in aspirin",
      scenario:
        "Aspirin has the molecular formula C₉H₈O₄. Calculate its degrees of unsaturation and show that they are consistent with a structure containing a benzene ring, a carboxylic acid group, and an ester group.",
      steps: [
        {
          label: "Insert the values",
          decision:
            "There are 9 carbons and 8 hydrogens. There is no nitrogen and no halogen, and the four oxygen atoms are ignored because divalent atoms do not change the hydrogen count.",
          working: "DoU = (2 × 9 + 2 + 0 − 8 − 0) ÷ 2",
        },
        {
          label: "Evaluate the arithmetic",
          decision:
            "Complete the bracket before dividing, so that the subtraction of hydrogens is applied to the full saturated maximum.",
          working: "DoU = (18 + 2 − 8) ÷ 2 = 12 ÷ 2 = 6",
        },
        {
          label: "Spend the six on real features",
          decision:
            "Assign the count to the structural features named in the question, remembering that a benzene ring is worth four on its own: three carbon–carbon π bonds and one ring closure.",
          working: "benzene ring 4 + acid C=O 1 + ester C=O 1 = 6",
        },
        {
          label: "Confirm nothing is left over",
          decision:
            "The predicted total and the accounted total must match exactly. A shortfall would mean a missing ring or π bond; an excess would mean a feature has been counted twice.",
          working: "6 predicted = 6 accounted, so the structure is consistent",
        },
      ],
      answer:
        "Aspirin has six degrees of unsaturation, fully accounted for by one benzene ring and the two carbonyl π bonds of its carboxylic acid and ester groups.",
      plausibility:
        "The saturated maximum for nine carbons is C₉H₂₀, and aspirin has only 8 hydrogens. The gap of 12 hydrogens divided by two hydrogens per feature gives 6, which matches.",
    },
    {
      id: "carbon-check-dou",
      type: "check",
      eyebrow: "Constrain the structure",
      title: "Use unsaturation to rule structures in and out",
      prompt:
        "A compound has the molecular formula C₆H₁₀. Which description is consistent with its degrees of unsaturation?",
      options: [
        "A fully saturated open-chain alkane with no rings or multiple bonds",
        "An open-chain molecule containing exactly one carbon–carbon double bond and no ring",
        "A benzene ring carrying two methyl groups",
        "A single ring containing one carbon–carbon double bond",
      ],
      correctIndex: 3,
      explanation:
        "DoU = (2 × 6 + 2 − 10) ÷ 2 = (14 − 10) ÷ 2 = 2, so the molecule must contain exactly two rings or π bonds in some combination. One ring plus one double bond is exactly two, and cyclohexene is C₆H₁₀. A saturated alkane would be zero and a single double bond with no ring would be one, so both fall short. A dimethylbenzene has four degrees of unsaturation and the formula C₈H₁₀.",
      misconception:
        "Degrees of unsaturation are a total budget, not a single feature. Learners often assume the number counts double bonds only and forget that closing a ring costs two hydrogens just as a π bond does.",
    },
    {
      id: "carbon-groups",
      type: "concept",
      eyebrow: "The working vocabulary",
      title: "Fifteen groups cover almost everything you will meet",
      paragraphs: [
        "The hydrocarbon groups differ only in bonding. An alkane, CₙH₂ₙ₊₂, has single bonds throughout and is saturated. An alkene contains C=C and an alkyne contains C≡C; both are unsaturated and can add reagents across the multiple bond. An arene contains a benzene ring, in which six π electrons are delocalised over the ring, giving unusual stability and reactions quite unlike those of an alkene. A haloalkane, R–X where X is F, Cl, Br, or I, has a polarised C–X bond that can be displaced.",
        "The oxygen-containing groups split into two families. In the first, oxygen is singly bonded: an alcohol is R–OH, an ether is R–O–R′, and a phenol is an –OH bonded directly to an aromatic ring, which behaves differently enough to earn its own name. In the second, oxygen is doubly bonded as a carbonyl, C=O. An aldehyde, R–CHO, has the carbonyl at the end of a chain with a hydrogen on it; a ketone, R–CO–R′, has it between two carbons; a carboxylic acid is R–COOH; an ester is R–COO–R′; and an amide is R–CO–N, where the carbonyl carries nitrogen.",
        "The remaining groups introduce nitrogen and sulfur. An amine, R–NH₂, R₂NH, or R₃N, has a nitrogen with a lone pair and is classified as primary, secondary, or tertiary by how many carbons are attached to that nitrogen. A nitrile is R–C≡N. A thiol is R–SH, the sulfur analogue of an alcohol, and two thiols can be oxidised together into a disulfide bridge. Because amide combines a carbonyl and a nitrogen, it is very often misread as a separate ketone plus a separate amine; it is neither, and its chemistry is unlike both.",
      ],
      callout: "carbonyl family: aldehyde · ketone · carboxylic acid · ester · amide",
    },
    {
      id: "carbon-naming",
      type: "concept",
      eyebrow: "Systematic names",
      title: "A name is a set of instructions for rebuilding the structure",
      paragraphs: [
        "A systematic name is assembled in four moves. First find the parent: the longest continuous carbon chain that contains the principal functional group, and take its root from the carbon count — meth, eth, prop, but, pent, hex, hept, oct for one to eight carbons. Second, add the suffix belonging to the principal group: -oic acid, -oate, -amide, -nitrile, -al, -one, -ol, and -amine, listed here in the order of decreasing seniority, so that when two groups are present the more senior takes the suffix and the other becomes a prefix.",
        "Third, number the chain. Counting starts from whichever end gives the principal group the lowest possible locant, and that rule outranks the substituents entirely. Only when the principal group leaves the choice open do substituents decide. Fourth, name the substituents as prefixes — methyl, ethyl, chloro, bromo, hydroxy, amino — give each its locant, list them in alphabetical order, and use di, tri, and tetra for repeats. Hyphens separate numbers from letters and commas separate numbers.",
        "Read a name backwards to rebuild the molecule. In 3-methylpentan-1-ol, pent means five carbons in a row, -ol means an alcohol, the 1 places the OH on the first carbon, and 3-methyl hangs a CH₃ from the third. Nothing is left ambiguous, which is the point: a systematic name and a structure carry exactly the same information in two different notations.",
      ],
      callout: "root from the longest chain · suffix from the senior group · lowest locant to that group · prefixes alphabetically",
    },
    {
      id: "carbon-worked-naming",
      type: "worked",
      eyebrow: "Worked example",
      title: "Name a branched alcohol",
      scenario:
        "Name the compound with the condensed formula HOCH₂CH₂CH(CH₃)CH₂CH₃ systematically.",
      steps: [
        {
          label: "Find the parent chain",
          decision:
            "The principal group is the alcohol, so the parent chain must contain the carbon bearing the OH. Reading the condensed formula left to right, that continuous chain runs through five carbons; the CH₃ in brackets branches off it.",
          working: "5 carbons in the parent chain → root pent",
        },
        {
          label: "Attach the suffix",
          decision:
            "The senior group present is –OH, which takes the suffix -ol. There is no acid, ester, amide, or carbonyl to outrank it.",
          working: "pent + an + ol → pentanol",
        },
        {
          label: "Number for the lowest locant",
          decision:
            "The alcohol carbon must get the lowest number available. Counting from the HO end places it at position 1; counting from the other end would place it at position 5.",
          working: "OH at C1, not C5 → pentan-1-ol",
        },
        {
          label: "Place the substituent",
          decision:
            "With the numbering now fixed by the alcohol, the branch takes whatever locant that numbering gives it. Walking from C1, the CH₃ branch sits on the third carbon.",
          working: "methyl at C3 → 3-methylpentan-1-ol",
        },
      ],
      answer:
        "The compound is 3-methylpentan-1-ol, molecular formula C₆H₁₄O.",
      plausibility:
        "Rebuilding from the name gives HO–CH₂–CH₂–CH(CH₃)–CH₂–CH₃, which is the formula supplied. Six carbons and one oxygen in a saturated molecule should give 2 × 6 + 2 = 14 hydrogens, and C₆H₁₄O has 14.",
    },
    {
      id: "carbon-check-naming",
      type: "check",
      eyebrow: "Translate the notation",
      title: "Go from condensed formula to systematic name",
      prompt:
        "What is the systematic name of the compound CH₃CH₂CH₂CH(CH₃)COOH?",
      options: [
        "2-methylpentanoic acid",
        "3-methylpentanoic acid",
        "4-methylpentanoic acid",
        "2-methylbutanoic acid",
      ],
      correctIndex: 0,
      explanation:
        "The longest chain containing the acid carbon has five carbons, so the root is pent and the suffix is -oic acid, giving pentanoic acid. The carboxyl carbon is C1 by definition, which fixes the numbering with no choice available. Walking from that carbon: C1 is the acid carbon, C2 carries the methyl branch, C3 and C4 are CH₂ groups, and C5 is CH₃. The name is therefore 2-methylpentanoic acid.",
      misconception:
        "Choosing 4-methylpentanoic acid comes from numbering the chain from whichever end the condensed formula is read from first. The principal characteristic group is numbered first, and for a carboxylic acid that carbon is always C1, so the substituent takes whatever locant follows.",
    },
    {
      id: "carbon-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar molecule",
      title: "Find the groups in a compound you have never seen",
      prompt:
        "A research paper describes a compound as follows: a benzene ring carries, at one position, a nitrogen atom that is bonded to one hydrogen and to a carbonyl carbon; that carbonyl carbon also carries a methyl group. Directly opposite on the ring, an oxygen bonded to one hydrogen is attached to a ring carbon. Which set of functional groups is present?",
      options: [
        "Arene, amide, and phenol",
        "Arene, ester, and alcohol",
        "Arene, ketone, and amine",
        "Arene, carboxylic acid, and amine",
      ],
      correctIndex: 0,
      explanation:
        "The ring itself is an arene. A carbonyl carbon bonded directly to nitrogen is the defining feature of an amide, here a secondary amide because the nitrogen carries one hydrogen and one carbon from the ring. An –OH attached directly to an aromatic ring carbon is a phenol. There is no C–O–C linkage, so no ester, and no –COOH, so no carboxylic acid.",
      misconception:
        "Splitting the –NH–C(=O)– unit into a separate ketone and a separate amine is the most common error in group recognition. The carbonyl and the nitrogen are conjugated, and the resulting amide behaves like neither parent group.",
    },
    {
      id: "carbon-summary",
      type: "summary",
      eyebrow: "Carry this forward",
      title: "Framework plus functional group is the whole filing system",
      points: [
        "Carbon forms four strong bonds and catenates, so an unlimited set of frameworks is available.",
        "In a skeletal structure every vertex and line end is a carbon, and hydrogens on carbon are implied up to four bonds.",
        "Molecular, condensed, and skeletal formulae are three notations for the same molecule, carrying different amounts of connectivity.",
        "Degrees of unsaturation, (2C + 2 + N − H − X) ÷ 2, count rings plus π bonds; four is the signature of a benzene ring.",
        "Each functional group is a small recognisable pattern whose reactions barely depend on the size of the framework.",
        "A systematic name is built from parent chain, senior suffix, lowest locant to the principal group, then alphabetical prefixes.",
      ],
      transferRule:
        "Faced with an unfamiliar organic structure, first count the degrees of unsaturation from the formula, then circle each non-carbon atom and each multiple bond; the circled regions are where the chemistry will happen.",
      nextLessonId: "lesson.chemistry.isomerism",
    },
  ],
};

const isomerism: Lesson = {
  id: "lesson.chemistry.isomerism",
  slug: "isomerism-and-chirality",
  number: "6.2",
  stageId: "stage.organic_chemistry",
  discipline: "chemistry",
  title: "Isomerism, stereochemistry, and chirality",
  summary:
    "Sort isomers into constitutional and stereoisomeric families, assign E/Z and R/S, and explain why mirror-image molecules can behave completely differently in a living body.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Classify a pair of isomers as constitutional, configurational, or conformational.",
    "Assign E or Z to an alkene using Cahn-Ingold-Prelog priorities.",
    "Distinguish conformations, which interconvert freely, from configurations, which do not.",
    "Identify stereocentres in a structure and assign R or S to one.",
    "Apply the 2ⁿ rule and explain why meso compounds reduce the count.",
    "Explain why enantiomers are indistinguishable in an achiral environment but not in a chiral one.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.organic_structure"],
  blocks: [
    {
      id: "iso-purpose",
      type: "concept",
      eyebrow: "Same formula, different molecule",
      title: "A molecular formula does not determine a compound",
      paragraphs: [
        "Two compounds with the same molecular formula but different structures are isomers. C₂H₆O describes both ethanol, a liquid that boils at 78 °C and mixes with water in all proportions, and methoxymethane, a gas at room temperature that boils at −24 °C. The atoms are identical in number and kind; only their arrangement differs, and yet one is a solvent and disinfectant while the other is a refrigerant gas. Composition alone therefore tells you almost nothing about how a substance will behave, whereas arrangement tells you almost everything.",
        "Isomers divide into two branches. Constitutional isomers differ in which atoms are bonded to which — the connectivity itself is different. They subdivide into chain isomers, where the carbon skeleton is arranged differently, as in butane and methylpropane; positional isomers, where the same group sits at a different place on the same skeleton, as in propan-1-ol and propan-2-ol; and functional group isomers, where the atoms are assembled into an entirely different group, as in ethanol and methoxymethane.",
        "Stereoisomers have identical connectivity — the same atoms bonded to the same partners — and differ only in arrangement in three-dimensional space. They divide again. Conformational stereoisomers interconvert by rotation about single bonds, so at room temperature they are not separable and are not different compounds. Configurational stereoisomers can be interconverted only by breaking a bond, so they are genuinely distinct, isolable substances. Almost every difficulty in this topic dissolves once that last distinction is held firmly.",
      ],
      callout: "isomers → constitutional (different connectivity) · stereoisomers (same connectivity, different arrangement)",
    },
    {
      id: "iso-visual",
      type: "visual",
      eyebrow: "See the handedness",
      title: "Mirror images that cannot be laid on top of one another",
      introduction:
        "Hold your hands palm to palm: they match perfectly as reflections. Now lay one on the back of the other and they do not match at all. Some molecules have exactly this property.",
      visual: "chirality",
      caption:
        "A carbon carrying four different groups produces two arrangements related as object and mirror image. No amount of rotation superimposes one on the other, so they are different compounds.",
    },
    {
      id: "iso-geometry",
      type: "concept",
      eyebrow: "Locked by a π bond",
      title: "A double bond cannot rotate, so its two faces become permanent",
      paragraphs: [
        "A carbon–carbon single bond is a σ bond, with electron density concentrated along the axis joining the nuclei. Rotating about that axis leaves the overlap unchanged, so rotation is essentially free. A double bond adds a π bond formed by sideways overlap of two p orbitals above and below the axis. Rotating one carbon relative to the other would tear that sideways overlap apart, and the barrier is well over 200 kJ mol⁻¹ — far more than thermal energy supplies at room temperature. The two ends of a C=C are therefore locked.",
        "When each of the doubly bonded carbons carries two different groups, locking creates two distinct compounds. In but-2-ene, CH₃–CH=CH–CH₃, the two methyl groups sit either on the same side of the double bond or on opposite sides. These cis and trans isomers are separable substances with different properties: cis-but-2-ene boils at 4 °C and trans-but-2-ene at 1 °C, and the trans isomer, being more symmetrical and better packed, melts far higher, at −106 °C against −139 °C for the cis form.",
        "The cis and trans labels fail as soon as a carbon carries two groups that are neither identical nor obviously comparable. The general system is E/Z, which uses Cahn-Ingold-Prelog priority rules. On each doubly bonded carbon separately, rank its two attached groups by the atomic number of the first atom; if those tie, move outward to the next set of atoms and compare at the first point of difference. If the two higher-priority groups lie on the same side, the isomer is Z, from the German zusammen, together. On opposite sides it is E, entgegen, opposite.",
      ],
      callout: "higher priorities on the same side → Z · on opposite sides → E",
    },
    {
      id: "iso-worked-ez",
      type: "worked",
      eyebrow: "Worked example",
      title: "Assign E or Z where cis and trans are ambiguous",
      scenario:
        "2-Chlorobut-2-ene has the skeleton CH₃–CCl=CH–CH₃. In the isomer under consideration, the chlorine atom on C2 and the methyl group on C3 lie on the same side of the double bond. Assign E or Z.",
      steps: [
        {
          label: "Rank the two groups on C2",
          decision:
            "Priorities are decided independently at each end of the double bond. C2 carries a chlorine and a methyl group, so compare the first atoms directly attached.",
          working: "Cl (Z = 17) outranks C of CH₃ (Z = 6) → Cl is higher on C2",
        },
        {
          label: "Rank the two groups on C3",
          decision:
            "C3 carries a methyl group and a hydrogen. Again compare the first attached atoms only; no tie-break is needed.",
          working: "C of CH₃ (Z = 6) outranks H (Z = 1) → methyl is higher on C3",
        },
        {
          label: "Compare the two winners geometrically",
          decision:
            "The descriptor depends only on where the two higher-priority groups sit relative to one another, not on the lower-priority groups.",
          working: "Cl and the C3 methyl are stated to be on the same side → zusammen",
        },
        {
          label: "Test the cis/trans label for comparison",
          decision:
            "Check what the older nomenclature would say, to see why it is unsafe here.",
          working: "the two methyl groups lie on opposite sides, so cis/trans would suggest trans",
        },
      ],
      answer:
        "This is (Z)-2-chlorobut-2-ene, even though the two methyl groups are on opposite sides of the double bond.",
      plausibility:
        "The E/Z system and the cis/trans system disagree here precisely because C2 carries three different kinds of group. Whenever a doubly bonded carbon has no pair of identical substituents, only E/Z is defined, and it is decided by priority, not by which groups look alike.",
    },
    {
      id: "iso-check-ez",
      type: "check",
      eyebrow: "Consolidate",
      title: "Assign a descriptor from a described geometry",
      prompt:
        "In 3-methylpent-2-ene, CH₃–CH=C(CH₃)–CH₂CH₃, the hydrogen on C2 and the ethyl group on C3 lie on the same side of the double bond. Which descriptor applies?",
      options: [
        "Z, because the two methyl groups lie on the same side of the double bond",
        "Neither, because a carbon carrying three different groups has no defined descriptor",
        "Z, because ethyl outranks methyl and sits alongside the hydrogen",
        "E, because the higher-priority groups — methyl on C2 and ethyl on C3 — lie on opposite sides",
      ],
      correctIndex: 3,
      explanation:
        "On C2 the choice is methyl against hydrogen, so methyl wins. On C3 the choice is ethyl against methyl: both start with carbon, so compare the next shell. The ethyl carbon carries (C, H, H) and the methyl carbon carries (H, H, H), so ethyl wins at the first point of difference. The C2 hydrogen sits with the ethyl, which means the C2 methyl sits opposite the ethyl. Two higher priorities on opposite sides gives E.",
      misconception:
        "Assigning Z because the two methyl groups lie on the same side is geometrically true — they really are on the same side — but it applies cis/trans reasoning by picking out the pair of groups that happen to look alike. E/Z ignores similarity entirely and compares only ranked priorities.",
    },
    {
      id: "iso-conformation",
      type: "concept",
      eyebrow: "Rotation is not isomerism",
      title: "Conformations are shapes of one compound, not different compounds",
      paragraphs: [
        "Ethane, CH₃–CH₃, can rotate freely about its single C–C bond. Viewed along that bond, the two sets of hydrogens are either staggered, with each front hydrogen bisecting a gap between rear hydrogens, or eclipsed, with front and rear hydrogens aligned. Staggered is the lower-energy arrangement by about 12 kJ mol⁻¹, because eclipsing forces bonding electron pairs closer together. That barrier is small compared with thermal energy at 298 K, so ethane spins through millions of rotations per second and cannot be separated into staggered and eclipsed samples.",
        "Cyclohexane makes the same point in a more useful form. Rather than sitting as a flat hexagon, which would force bond angles of 120° and eclipse every neighbouring pair of hydrogens, the ring puckers into a chair, restoring angles close to the tetrahedral 109.5°. In the chair, each carbon carries one axial hydrogen pointing roughly perpendicular to the mean plane of the ring and one equatorial hydrogen pointing outwards. A ring flip, achieved purely by rotations about C–C single bonds, converts every axial position into an equatorial one and vice versa.",
        "Nothing in either case breaks a bond, so nothing produces a new compound. This is the practical test worth memorising: if two drawings can be interconverted by rotating about single bonds, they are conformations of one substance; if interconversion requires breaking and remaking a bond, they are genuinely different compounds. When a substituent is present, the ring flip stops being purely cosmetic — a methylcyclohexane sits predominantly with the methyl equatorial, because the axial position crowds it against the axial hydrogens across the ring — but both forms are still the same compound.",
      ],
      callout: "interconvertible by rotation → one compound · interconvertible only by bond breaking → different compounds",
    },
    {
      id: "iso-check-conformation",
      type: "check",
      eyebrow: "Test the distinction",
      title: "Decide whether a ring flip makes something new",
      prompt:
        "A chair cyclohexane undergoes a ring flip, so that every hydrogen that was axial becomes equatorial and every hydrogen that was equatorial becomes axial. What is the relationship between the two chair forms?",
      options: [
        "They are different compounds that could in principle be separated by fractional distillation",
        "They are constitutional isomers, because the bonds now point in different directions",
        "They are conformations of a single compound, interconverting rapidly by rotation about C–C single bonds with no bond broken",
        "They are enantiomers, because axial and equatorial are mirror-image positions",
      ],
      correctIndex: 2,
      explanation:
        "A ring flip is achieved entirely by rotations about the six C–C single bonds. No bond is broken and no atom changes its bonding partners, so connectivity is unchanged and the two drawings describe the same substance in two shapes. At room temperature the interconversion happens roughly a hundred thousand times per second, so the forms cannot be isolated separately.",
      misconception:
        "Treating any two distinguishable three-dimensional drawings as different compounds ignores the crucial question of whether a bond must break. Constitutional isomerism requires different connectivity, and cyclohexane's connectivity never changes during a flip.",
    },
    {
      id: "iso-chirality",
      type: "concept",
      eyebrow: "Handedness",
      title: "Four different groups on one carbon create left and right versions",
      paragraphs: [
        "An object is chiral if it cannot be superimposed on its mirror image. Hands, screws, and helices are chiral; spheres, cubes, and most cutlery are not. In organic molecules the commonest source of chirality is a stereocentre: a tetrahedral carbon bonded to four different groups. Swap any two of those groups and you produce the mirror image, which cannot be rotated back into the original. The two forms are called enantiomers, and they are separate compounds with the same connectivity.",
        "To test a carbon, list its four attachments and ask whether all four differ. In butan-2-ol the second carbon carries –OH, –H, –CH₃, and –CH₂CH₃: four different groups, so it is a stereocentre. In propan-2-ol the second carbon carries –OH, –H, and two –CH₃ groups, so it is not. A carbon in a double bond or a triple bond has fewer than four attachments and can never be a stereocentre, and a CH₂ or CH₃ group has repeated hydrogens and never qualifies either.",
        "Naming the two enantiomers uses Cahn-Ingold-Prelog priorities again. Rank the four groups from highest to lowest by atomic number, breaking ties at the first point of difference working outwards. Then orient the molecule so the lowest-priority group points directly away from you, and trace the path from highest to second to third. Clockwise is R, from rectus; anticlockwise is S, from sinister. The two enantiomers rotate the plane of plane-polarised light by equal angles in opposite directions, a property called optical activity; an equimolar mixture, called a racemate, rotates it not at all.",
      ],
      callout: "lowest priority pointing away · 1 → 2 → 3 clockwise is R, anticlockwise is S",
    },
    {
      id: "iso-worked-rs",
      type: "worked",
      eyebrow: "Worked example",
      title: "Assign R or S to a stereocentre",
      scenario:
        "2-Bromobutane is CH₃–CHBr–CH₂–CH₃. In one enantiomer, when the molecule is held so that the hydrogen on C2 points directly away from the viewer, the sequence bromine, then ethyl, then methyl runs clockwise. Assign R or S.",
      steps: [
        {
          label: "Confirm the carbon is a stereocentre",
          decision:
            "R/S is defined only where four different groups meet. List the attachments on C2 before doing anything else.",
          working: "C2 carries –Br, –H, –CH₃, –CH₂CH₃: four different groups, so it qualifies",
        },
        {
          label: "Rank by first atom",
          decision:
            "Compare the atomic numbers of the atoms directly bonded to the stereocentre. Bromine is far heavier than carbon, and hydrogen is the lightest possible.",
          working: "Br (Z = 35) highest; H (Z = 1) lowest; the two carbons are tied and must be resolved",
        },
        {
          label: "Break the carbon tie at the first point of difference",
          decision:
            "When first atoms tie, move one bond further out and compare the sets of atoms attached to each, in decreasing order.",
          working: "ethyl carbon carries (C, H, H); methyl carbon carries (H, H, H); C beats H, so ethyl outranks methyl",
        },
        {
          label: "Read the rotation with the lowest priority behind",
          decision:
            "The hydrogen is already pointing away from the viewer, so the observed rotation can be read directly without re-orienting the model.",
          working: "Br → CH₂CH₃ → CH₃ traced clockwise → rectus",
        },
      ],
      answer:
        "This enantiomer is (R)-2-bromobutane; its mirror image is (S)-2-bromobutane, and the two rotate plane-polarised light by equal and opposite amounts.",
      plausibility:
        "Priorities followed atomic number first and were resolved only where necessary, and the lowest priority was genuinely at the back — the two conditions on which the descriptor depends. Had the hydrogen been pointing towards the viewer, the observed rotation would have had to be reversed before reading.",
    },
    {
      id: "iso-check-cip",
      type: "check",
      eyebrow: "Apply the priority rules",
      title: "Rank four groups on a stereocentre",
      prompt:
        "Alanine is H₂N–CH(CH₃)–COOH. Ranking the four groups attached to the central carbon from highest to lowest Cahn-Ingold-Prelog priority gives which order?",
      options: [
        "–NH₂ > –COOH > –CH₃ > –H",
        "–COOH > –NH₂ > –CH₃ > –H",
        "–COOH > –CH₃ > –NH₂ > –H",
        "–CH₃ > –COOH > –NH₂ > –H",
      ],
      correctIndex: 0,
      explanation:
        "The first comparison is always between the atoms directly bonded to the stereocentre: nitrogen (Z = 7), the acid carbon (Z = 6), the methyl carbon (Z = 6), and hydrogen (Z = 1). Nitrogen therefore outranks both carbons immediately, and hydrogen is last. Only the two tied carbons need a second look: the acid carbon carries (O, O, O) once the double bond is counted as two duplicated oxygens, while the methyl carbon carries (H, H, H), so –COOH beats –CH₃.",
      misconception:
        "Placing –COOH first assumes that the group containing the most electronegative atoms wins overall. Priority is decided at the first point of difference working outwards from the stereocentre, so a nitrogen bonded directly to it beats a carbon that merely leads to oxygens.",
    },
    {
      id: "iso-diastereomer",
      type: "concept",
      eyebrow: "More than one centre",
      title: "Two stereocentres give up to four stereoisomers — sometimes only three",
      paragraphs: [
        "A molecule with n stereocentres has at most 2ⁿ stereoisomers, because each centre can independently be R or S. With two centres the four possibilities are (R,R), (S,S), (R,S), and (S,R). Within that set, (R,R) and (S,S) are mirror images of each other and so are enantiomers, as are (R,S) and (S,R). But (R,R) compared with (R,S) is not a mirror image at all: such a pair is called diastereomers. This matters practically, because enantiomers share every physical property in an achiral environment, whereas diastereomers have genuinely different melting points, solubilities, and reactivities, and can be separated by ordinary means.",
        "The 2ⁿ figure is a maximum, not a count. Tartaric acid, HOOC–CH(OH)–CH(OH)–COOH, has two stereocentres carrying identical sets of groups. Its (R,S) form contains an internal mirror plane running between the two central carbons, so the molecule is superimposable on its own mirror image and is achiral despite having stereocentres. Such a compound is called meso. Tartaric acid therefore exists as only three distinct substances: the (R,R) and (S,S) enantiomer pair, and the single meso form, which is optically inactive.",
        "The biological consequence is the reason any of this is taught. Enantiomers are identical in every achiral setting: same boiling point, same infrared spectrum, same reaction with an achiral reagent. Put one into a chiral environment, however, and the symmetry breaks. Proteins are built from single-handed amino acids and fold into chiral binding sites, so a receptor that fits one enantiomer snugly may bind the other weakly or not at all — the same reason a right hand fits only a right glove. Thalidomide is the notorious illustration: one enantiomer sedates while the other is teratogenic. The honest version of that story adds that thalidomide interconverts between its enantiomers in the body, so administering a single pure enantiomer would not have prevented the harm.",
      ],
      callout: "maximum stereoisomers = 2ⁿ · internal mirror plane → meso, achiral, and the count falls",
    },
    {
      id: "iso-check-meso",
      type: "check",
      eyebrow: "Reconcile a count",
      title: "Explain a shortfall against the 2ⁿ prediction",
      prompt:
        "Tartaric acid, HOOC–CH(OH)–CH(OH)–COOH, has two stereocentres, so the 2ⁿ rule predicts a maximum of four stereoisomers. In fact only three distinct compounds exist. Which explanation is correct?",
      options: [
        "One of the two carbons is not really a stereocentre, so n is actually 1 and the maximum is 2",
        "The 2ⁿ rule applies only to molecules with three or more stereocentres",
        "Two of the four are conformations of each other and interconvert by rotation about the central C–C bond",
        "One of the four structures has an internal mirror plane, making it identical to its own mirror image; this meso form is counted once rather than twice",
      ],
      correctIndex: 3,
      explanation:
        "Both central carbons carry four different groups (–OH, –H, –COOH, and the rest of the molecule), so n = 2 and the maximum really is four. However, the two centres bear identical substituent sets, so the (R,S) arrangement has a mirror plane between them. Its mirror image is the (S,R) arrangement, which is the same molecule rotated. That leaves the (R,R)/(S,S) enantiomer pair plus one achiral meso compound: three substances.",
      misconception:
        "Reaching for conformational interconversion confuses rotation, which cannot change a configuration, with the internal symmetry that makes a molecule its own mirror image. Rotating about a single bond never converts R into S at a stereocentre.",
    },
    {
      id: "iso-check-glucose",
      type: "check",
      eyebrow: "Unfamiliar molecule",
      title: "Count stereocentres in a sugar",
      prompt:
        "Open-chain glucose is described as a six-carbon chain in which C1 is an aldehyde group, C2, C3, C4, and C5 each carry one hydrogen atom and one hydroxyl group with the rest of the chain making up their other two bonds, and C6 is a –CH₂OH group. How many stereocentres does this molecule contain?",
      options: [
        "2 stereocentres",
        "3 stereocentres",
        "4 stereocentres",
        "6 stereocentres, one at every carbon",
      ],
      correctIndex: 2,
      explanation:
        "C1 is part of a C=O double bond, so it has only three attached groups and cannot be a stereocentre. C6 carries two hydrogens, so two of its four attachments are identical. Each of C2, C3, C4, and C5 carries –H, –OH, and two different chain fragments, since the chain above and below any of those carbons differs in length or in end group. That gives four stereocentres, and a maximum of 2⁴ = 16 stereoisomers — which is exactly the number of aldohexoses that exist.",
      misconception:
        "Assuming that every carbon bearing an –OH must be a stereocentre ignores the requirement for all four attachments to differ. C6 fails on its two hydrogens and C1 fails because a doubly bonded carbon has only three substituents.",
    },
    {
      id: "iso-summary",
      type: "summary",
      eyebrow: "Carry this forward",
      title: "Ask what would have to break before calling something a new compound",
      points: [
        "Constitutional isomers differ in connectivity; stereoisomers share connectivity and differ in spatial arrangement.",
        "The π bond of a C=C blocks rotation, so alkene geometry is fixed and labelled E or Z by Cahn-Ingold-Prelog priority.",
        "Conformations such as staggered ethane or the two chairs of cyclohexane interconvert by rotation and are one compound.",
        "A stereocentre is a tetrahedral carbon carrying four different groups; its two arrangements are non-superimposable enantiomers.",
        "R or S is read by pointing the lowest priority away and tracing highest to third: clockwise R, anticlockwise S.",
        "The maximum stereoisomer count is 2ⁿ, reduced whenever an internal mirror plane produces an achiral meso form.",
      ],
      transferRule:
        "Before deciding whether two structures are the same substance, ask whether a bond must break to get from one to the other; if only rotation is needed, they are one compound in two shapes.",
      nextLessonId: "lesson.chemistry.organic_acidity",
    },
  ],
};

const organicAcidity: Lesson = {
  id: "lesson.chemistry.organic_acidity",
  slug: "organic-acidity-and-basicity",
  number: "6.3",
  stageId: "stage.organic_chemistry",
  discipline: "chemistry",
  title: "Acidity and basicity in organic molecules",
  summary:
    "Predict acid and base strength in organic molecules from the stability of the conjugate base, then use pKa against pH to decide which ionic form dominates.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "State why acid strength is governed by conjugate base stability rather than by the acid itself.",
    "Rank the four stabilising factors — atom, resonance, induction, and hybridisation — and apply them in order.",
    "Explain the pKa gap between carboxylic acids, phenols, and alcohols using delocalisation.",
    "Predict how substituent identity and position change acid strength through induction.",
    "Explain why amide nitrogen is barely basic while amine nitrogen is a good base.",
    "Determine the dominant ionic form of a functional group from pH and pKa.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.organic_structure",
    "lesson.chemistry.acids_bases",
  ],
  blocks: [
    {
      id: "acid-purpose",
      type: "concept",
      eyebrow: "Look at what is left behind",
      title: "An acid is strong because of the anion it becomes",
      paragraphs: [
        "A Brønsted acid HA donates a proton to water, giving H₃O⁺ and the conjugate base A⁻. The position of that equilibrium is measured by Ka, and reported as pKa = −log₁₀Ka, so that a smaller pKa means a stronger acid. Nothing about that definition mentions how easily the H–A bond breaks in isolation. What decides the equilibrium is thermodynamic: how much the products are stabilised relative to the reactants.",
        "Since H₃O⁺ is common to every comparison in water, the only thing that varies between acids is A⁻. So the whole subject reduces to one question: how well does this particular molecule cope with a negative charge once the proton has gone? A conjugate base that spreads or stabilises that charge sits at low energy, the equilibrium lies further to the right, Ka is larger, and pKa is smaller. A conjugate base that must localise the charge on a single reluctant atom sits at high energy and the acid is weak.",
        "The payoff is enormous, because organic pKa values span more than fifty orders of magnitude. Ethanoic acid has pKa 4.76 and ethanol has pKa about 16, a difference of over eleven powers of ten in Ka, yet both simply hand a proton off an oxygen atom. Only the fate of the resulting anion is different. Learning to look at the anion rather than the acid converts memorisation into prediction.",
      ],
      callout: "pKa = −log₁₀Ka · lower pKa = stronger acid = more stable conjugate base",
    },
    {
      id: "acid-visual",
      type: "visual",
      eyebrow: "Spread the charge",
      title: "Delocalisation is the most powerful stabiliser available",
      introduction:
        "Compare a negative charge stranded on a single oxygen atom with the same charge shared equally between two equivalent oxygen atoms. The second arrangement is far lower in energy.",
      visual: "bonding",
      caption:
        "In a carboxylate ion the two carbon–oxygen bonds are identical in length, because the charge is genuinely delocalised over both oxygens rather than jumping between two fixed structures.",
    },
    {
      id: "acid-factors",
      type: "concept",
      eyebrow: "A ranked toolkit",
      title: "Four factors decide anion stability, and they are not equal",
      paragraphs: [
        "The first factor is the atom carrying the charge, and it is usually the largest effect. Across a period, electronegativity rises and the charge is better tolerated: pKa falls from about 50 for methane, through 38 for ammonia and 15.7 for water, to 3.2 for hydrogen fluoride. Down a group, size takes over from electronegativity because a charge spread over a larger volume is more stable: ethanethiol, R–SH, has pKa about 10.6 while ethanol has pKa about 16, so a thiol is some hundreds of thousands of times the stronger acid despite sulfur being less electronegative than oxygen.",
        "The second factor is resonance, and it is the second most powerful. If the charge can be delocalised over two or more atoms by π overlap, the anion drops sharply in energy. The third is induction: an electronegative atom elsewhere in the molecule pulls electron density towards itself through the σ bonds, easing the burden on the charged atom. This works through space and through bonds, and it weakens rapidly with distance.",
        "The fourth factor is the hybridisation of the orbital holding the lone pair. An sp orbital has 50 per cent s character, an sp² orbital 33 per cent, and an sp³ orbital 25 per cent. Because s orbitals hold electron density closer to the nucleus, a lone pair in an orbital with more s character is held more tightly and the anion is more stable. This is why a terminal alkyne, pKa about 25, is roughly 10¹⁹ times more acidic than an alkene at 44 and 10²⁵ times more acidic than an alkane at about 50. Work through the factors in this order and disagreements usually resolve in favour of the earlier one.",
      ],
      callout: "atom, then resonance, then induction, then hybridisation",
    },
    {
      id: "acid-worked-rank",
      type: "worked",
      eyebrow: "Worked example",
      title: "Explain the ranking of ethanol, phenol, and ethanoic acid",
      scenario:
        "Ethanol has pKa 16.0, phenol has pKa 10.0, and ethanoic acid has pKa 4.8, all in water at 25 °C. Each loses a proton from an oxygen atom. Account for the ordering and quantify the extreme.",
      steps: [
        {
          label: "Eliminate the atom factor",
          decision:
            "All three acids deprotonate an O–H bond, so the atom bearing the charge is oxygen in every case. The first and strongest factor is therefore constant and cannot explain any of the difference.",
          working: "same atom → look to resonance next",
        },
        {
          label: "Examine the ethoxide anion",
          decision:
            "Ethanol's conjugate base has the negative charge on one oxygen with only saturated carbons attached. There is no π system to delocalise into and no electronegative substituent to withdraw density.",
          working: "charge fully localised on one O → highest-energy anion → weakest acid, pKa 16.0",
        },
        {
          label: "Examine the phenoxide anion",
          decision:
            "Phenol's oxygen is attached to a benzene ring, so the lone pair can delocalise into the aromatic π system. That helps, but the charge is shared onto ring carbon atoms, which are far less electronegative than oxygen, and delocalisation disrupts the ring's aromatic stability.",
          working: "partial delocalisation onto carbon → intermediate stability → pKa 10.0",
        },
        {
          label: "Examine the ethanoate anion and compute the extreme",
          decision:
            "The carboxylate charge is shared equally between two oxygen atoms of identical energy, the best case for resonance. Convert the pKa gap against ethanol into a ratio of Ka values.",
          working: "ΔpKa = 16.0 − 4.8 = 11.2, so Ka ratio = 10¹¹·² ≈ 1.6 × 10¹¹",
        },
      ],
      answer:
        "Acidity increases ethanol < phenol < ethanoic acid, and ethanoic acid is roughly 1.6 × 10¹¹ times stronger an acid than ethanol, entirely because of how well each conjugate base disperses the negative charge.",
      plausibility:
        "The ordering tracks the quality of delocalisation exactly: none, then partial onto carbon, then complete between two equivalent oxygens. A supporting measurement is that both C–O bonds in ethanoate have the same length, intermediate between a single and a double bond, which localised structures cannot explain.",
    },
    {
      id: "acid-check-table",
      type: "check",
      eyebrow: "Read the data",
      title: "Interpret a table of pKa values",
      prompt:
        "A table lists pKa in water at 25 °C: ethanol 16.0, phenol 10.0, ethanoic acid 4.8, trifluoroethanoic acid 0.5. Which statement is best supported by the data?",
      options: [
        "Phenol beats ethanol because its phenoxide charge is delocalised into the ring, but loses to ethanoate because a carboxylate shares the charge between two equivalent oxygen atoms",
        "Phenol beats ethanol because the O–H bond in phenol is longer and therefore intrinsically weaker",
        "Phenol loses to ethanoic acid because phenol has fewer hydrogen atoms available to donate",
        "Trifluoroethanoic acid is the strongest because fluorine atoms increase the molecule's molar mass",
      ],
      correctIndex: 0,
      explanation:
        "All four acids lose a proton from oxygen, so the differences must come from what stabilises the resulting anion. Phenoxide gains partial delocalisation into the aromatic ring, worth six pKa units against ethanol. Ethanoate does better still because its charge is shared equally between two oxygens. Trifluoroethanoate adds strong induction from three fluorines on top of that resonance, dropping the pKa a further 4.3 units.",
      misconception:
        "Explaining acid strength by the number of ionisable hydrogens confuses how many protons an acid can release with how readily it releases the first one. Ethanol has six hydrogens in total and is still the weakest acid in the table.",
    },
    {
      id: "acid-induction",
      type: "concept",
      eyebrow: "Pull through the bonds",
      title: "Induction is real but it dies away within about three bonds",
      paragraphs: [
        "An electronegative substituent draws σ electron density towards itself, and that withdrawal is felt, progressively weakened, along the chain. Placed near a carboxylate, it removes some of the electron density that the negative charge would otherwise have to carry, stabilising the anion and strengthening the acid. Ethanoic acid has pKa 4.76; chloroethanoic acid, with one chlorine on the neighbouring carbon, has pKa 2.86; dichloroethanoic acid 1.29; and trichloroethanoic acid 0.66. The effect is additive and substantial, spanning four orders of magnitude in Ka.",
        "What matters more for prediction is that induction falls away sharply with distance. Each intervening σ bond attenuates the transmitted effect, and by three or four bonds it has almost vanished. In the butanoic acid series the pattern is unmistakable: butanoic acid itself has pKa 4.82, 4-chlorobutanoic acid 4.52, 3-chlorobutanoic acid 4.05, and 2-chlorobutanoic acid 2.86. Moving a single chlorine atom two carbons closer to the acid group changes the acid strength by nearly two pKa units.",
        "Two further points make induction usable. First, direction depends on the substituent: electronegative groups such as –F, –Cl, –NO₂, and –C≡N withdraw and strengthen acids, whereas alkyl groups donate weakly and slightly weaken them. Second, induction is smaller than resonance. If one candidate is stabilised by full delocalisation and another only by an inductive pull, the delocalised one nearly always wins, which is why no amount of chlorination makes an alcohol as acidic as an unsubstituted carboxylic acid.",
      ],
      callout: "induction strengthens acids · closer substituent → larger effect · effect nearly gone after three bonds",
    },
    {
      id: "acid-worked-chloro",
      type: "worked",
      eyebrow: "Worked example",
      title: "Turn a substituent position into a quantitative trend",
      scenario:
        "Butanoic acid has pKa 4.82. Its monochlorinated derivatives have these values: 2-chlorobutanoic acid 2.86, 3-chlorobutanoic acid 4.05, 4-chlorobutanoic acid 4.52. Rank them, and calculate how many times stronger than butanoic acid each one is.",
      steps: [
        {
          label: "Order by pKa",
          decision:
            "A smaller pKa means a larger Ka and a stronger acid, so ranking is simply reading the numbers upwards.",
          working: "2-chloro (2.86) > 3-chloro (4.05) > 4-chloro (4.52) > butanoic (4.82)",
        },
        {
          label: "Relate position to distance from the charge",
          decision:
            "Number the chain from the acid carbon, which is C1. The lower the locant, the fewer σ bonds separate the chlorine from the carboxylate oxygen, and the more inductive withdrawal reaches it.",
          working: "C2 is adjacent to the acid carbon; C4 is three carbons away",
        },
        {
          label: "Convert each pKa gap into a Ka ratio",
          decision:
            "Because pKa is a logarithm, a difference in pKa becomes a power of ten in Ka: Ka ratio = 10^(ΔpKa).",
          working:
            "2-chloro: 10^(4.82 − 2.86) = 10¹·⁹⁶ ≈ 91; 3-chloro: 10^(0.77) ≈ 5.9; 4-chloro: 10^(0.30) ≈ 2.0",
        },
        {
          label: "Describe the fall-off",
          decision:
            "Compare successive ratios rather than successive pKa values, because the ratios show the physical size of the effect.",
          working: "ΔpKa falls 1.96 → 0.77 → 0.30, shrinking by a factor of about 2.5 for each extra bond",
        },
      ],
      answer:
        "Acid strength falls steeply as the chlorine moves away from the carboxyl group: 2-chlorobutanoic acid is about 91 times stronger than butanoic acid, 3-chloro about 6 times, and 4-chloro only about twice.",
      plausibility:
        "All three chlorinated acids are stronger than the parent, as an electron-withdrawing substituent must make them, and the effect decays monotonically with distance rather than switching sign. A chlorine ten carbons away would be expected to make no measurable difference at all.",
    },
    {
      id: "acid-check-distance",
      type: "check",
      eyebrow: "Predict from position",
      title: "Compare two isomers you have not seen measured",
      prompt:
        "Pentanoic acid has pKa 4.84. Consider 2-chloropentanoic acid and 5-chloropentanoic acid, which have the same molecular formula and differ only in where the chlorine sits. Which statement is correct?",
      options: [
        "Both have the same pKa, since each molecule contains exactly one chlorine atom",
        "Both are weaker acids than pentanoic acid, because adding a heavy chlorine atom makes the molecule harder to ionise",
        "5-Chloropentanoic acid is the stronger acid, because a chlorine far from the acidic proton leaves it less obstructed",
        "2-Chloropentanoic acid is the stronger acid, because the chlorine is closer to the carboxylate and withdraws electron density from it more effectively",
      ],
      correctIndex: 3,
      explanation:
        "Inductive withdrawal is transmitted through σ bonds and is attenuated by each one it crosses. In the 2-chloro isomer the chlorine is on the carbon next to the carboxyl group, so it removes substantial electron density from the carboxylate and stabilises it strongly. In the 5-chloro isomer three further bonds intervene and almost nothing reaches the anion, so its pKa lies close to that of pentanoic acid itself.",
      misconception:
        "Assuming the substituent acts only by physically blocking the acidic hydrogen treats acidity as a steric matter. Acid strength is set by how well the conjugate base tolerates its charge, and the substituent's job is to help carry that charge electronically.",
    },
    {
      id: "acid-bases",
      type: "concept",
      eyebrow: "The other direction",
      title: "A base is strong when its lone pair is available",
      paragraphs: [
        "A Brønsted base accepts a proton, which requires an accessible lone pair. Amines have exactly that: a nitrogen with one lone pair not involved in bonding. Base strength is conventionally reported as the pKa of the conjugate acid, so a larger value means a stronger base. Ammonium has pKa 9.25, methylammonium 10.6, and dimethylammonium 10.7. Alkyl groups donate electron density inductively, enriching the nitrogen and stabilising the resulting cation, so a small alkyl substituent raises basicity.",
        "Attach the nitrogen to an aromatic ring and the picture reverses. In phenylamine the nitrogen lone pair is delocalised into the ring, so it is no longer fully available to bond a proton, and the anilinium conjugate acid has pKa only 4.6 — around a million times less basic than methylamine. Availability, not the mere presence of a lone pair, is what counts.",
        "Amides take that logic to its conclusion. In R–CO–NH₂ the nitrogen lone pair is delocalised into the adjacent carbonyl π system, giving the C–N bond substantial double-bond character. The lone pair is committed, so the nitrogen is essentially non-basic in water; what little protonation occurs happens at the carbonyl oxygen instead. This one fact explains why a peptide backbone does not pick up protons at physiological pH, and why proteins carry charge only on their side chains and their two chain ends.",
      ],
      callout: "amine lone pair available → basic · amide lone pair delocalised into C=O → not basic",
    },
    {
      id: "acid-check-amine",
      type: "check",
      eyebrow: "Compare two nitrogens",
      title: "Explain why one nitrogen accepts a proton and another does not",
      prompt:
        "Ethylamine, CH₃CH₂NH₂, is a reasonable base: its conjugate acid has pKa about 10.7. Ethanamide, CH₃CONH₂, is effectively non-basic at nitrogen. What is the reason?",
      options: [
        "The nitrogen in ethanamide has no lone pair, because it is already bonded to three atoms",
        "Ethanamide's nitrogen already carries a formal positive charge, so it cannot accept another proton",
        "Ethanamide is a larger molecule, and larger molecules are always weaker bases",
        "The nitrogen lone pair in ethanamide is delocalised into the carbonyl π system, so it is far less available to accept a proton",
      ],
      correctIndex: 3,
      explanation:
        "Nitrogen has five valence electrons; three go into bonds and two remain as a lone pair in both molecules. In ethanamide that lone pair overlaps with the π system of the neighbouring C=O, spreading electron density onto the carbonyl oxygen. The evidence is structural: the amide C–N bond is shorter than a normal C–N single bond and rotation about it is restricted. A committed lone pair cannot also bond a proton.",
      misconception:
        "Judging basicity by counting lone pairs rather than assessing their availability predicts that all nitrogens behave alike. Delocalisation removes basicity without removing the lone pair, which is why phenylamine, amides, and pyrrole are all far weaker bases than a simple alkylamine.",
    },
    {
      id: "acid-ph-pka",
      type: "concept",
      eyebrow: "Which form is present",
      title: "Compare pH with pKa and the dominant species falls out",
      paragraphs: [
        "The Henderson–Hasselbalch relation, pH = pKa + log₁₀([A⁻]/[HA]), rearranges into the single most useful tool in this lesson. When pH equals pKa the two forms are present in equal amounts. Each unit of pH above the pKa multiplies the ratio of deprotonated to protonated form by ten, and each unit below divides it by ten. Two units either side already gives a 99 to 1 split, so a group is effectively fully in one form once pH and pKa differ by about two.",
        "The rule of thumb is worth stating plainly: at a pH above its pKa a group is predominantly deprotonated; below its pKa it is predominantly protonated. For a carboxylic acid with pKa 4.5 in blood plasma at pH 7.4, the ratio is 10²·⁹, so about 99.9 per cent exists as –COO⁻. For an alkylamine whose conjugate acid has pKa 10.5, the same plasma is three units below that value, so about 99.9 per cent exists as –NH₃⁺.",
        "Apply both at once and the behaviour of amino acids follows immediately. A molecule carrying a carboxylic acid and an amine has one group deprotonated and the other protonated across a wide middle range of pH, giving a zwitterion with a positive and a negative site but zero net charge. The same reasoning governs how drugs move: only uncharged species cross a lipid membrane appreciably by simple diffusion, so knowing pKa and local pH predicts where a compound will be absorbed and where it will be trapped.",
      ],
      callout: "pH > pKa → deprotonated form dominates · pH < pKa → protonated form dominates",
    },
    {
      id: "acid-worked-hh",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the ionised fraction of a weak acid in two compartments",
      scenario:
        "A weak acid drug has pKa 3.5. Calculate the percentage present as the uncharged form HA in gastric fluid at pH 2.0 and in the small intestine at pH 6.5, and comment on membrane crossing.",
      steps: [
        {
          label: "Set up the ratio",
          decision:
            "Rearranging pH = pKa + log₁₀([A⁻]/[HA]) isolates the ratio of the two forms, which is what determines the percentages.",
          working: "[A⁻]/[HA] = 10^(pH − pKa)",
        },
        {
          label: "Evaluate at gastric pH",
          decision:
            "The stomach pH is below the pKa, so the protonated form should dominate; the arithmetic quantifies by how much.",
          working: "10^(2.0 − 3.5) = 10⁻¹·⁵ = 0.032, so HA fraction = 1/(1 + 0.032) = 0.969",
        },
        {
          label: "Evaluate at intestinal pH",
          decision:
            "The intestinal pH is three units above the pKa, so the deprotonated form should dominate overwhelmingly.",
          working: "10^(6.5 − 3.5) = 10³ = 1000, so HA fraction = 1/(1 + 1000) = 0.000999",
        },
        {
          label: "Interpret for permeability",
          decision:
            "Only the uncharged species partitions into a hydrocarbon membrane interior at any appreciable rate, so compare the uncharged fractions rather than the total concentrations.",
          working: "96.9 per cent uncharged in the stomach against 0.1 per cent in the intestine",
        },
      ],
      answer:
        "About 96.9 per cent of the drug is uncharged at pH 2.0 and only about 0.1 per cent at pH 6.5, so on the pH-partition argument each stomach molecule is roughly a thousand times more likely to be in a membrane-permeable form.",
      plausibility:
        "The pH is 1.5 units below the pKa in the stomach and 3.0 units above it in the intestine, so a large majority uncharged in one and a vanishing minority in the other is exactly what the rule of thumb predicts. In practice the intestine still absorbs most of such a drug, because its surface area and residence time are vastly greater — a reminder that the uncharged fraction is one factor among several.",
    },
    {
      id: "acid-check-charge",
      type: "check",
      eyebrow: "Physiological conditions",
      title: "Predict the net charge in blood plasma",
      prompt:
        "A candidate drug carries one carboxylic acid group with pKa 3.5 and one aliphatic tertiary amine whose conjugate acid has pKa 9.5. What is its dominant form in blood plasma at pH 7.4?",
      options: [
        "Net −1, because the acid is ionised and the amine remains uncharged",
        "Net +1, because the amine is protonated and the acid remains un-ionised",
        "Net 0 overall, existing mainly as a zwitterion carrying both –COO⁻ and a protonated nitrogen",
        "Net −2, because both groups lose a proton at a pH well above 7",
      ],
      correctIndex: 2,
      explanation:
        "Treat each group separately against the plasma pH. The pH of 7.4 is 3.9 units above the acid's pKa of 3.5, so the carboxyl group is more than 99.9 per cent deprotonated and carries −1. The same pH is 2.1 units below the amine's conjugate acid pKa of 9.5, so the nitrogen is more than 99 per cent protonated and carries +1. The two cancel, giving a zwitterion with no net charge but two charged sites.",
      misconception:
        "Answering −2 assumes that a pH above 7 deprotonates everything. A protonated amine is an acid with pKa 9.5, and at pH 7.4 it sits below that value, so it keeps its proton and its positive charge.",
    },
    {
      id: "acid-summary",
      type: "summary",
      eyebrow: "Carry this forward",
      title: "Judge the anion, then compare pH with pKa",
      points: [
        "Acid strength is decided by conjugate base stability, because H₃O⁺ is common to every aqueous comparison.",
        "Work the factors in order: atom first, then resonance, then induction, then orbital hybridisation.",
        "A carboxylic acid near pKa 4 to 5 beats a phenol near 10 and an alcohol near 16 because of how completely each anion shares its charge.",
        "Induction strengthens an acid, adds up with multiple substituents, and decays sharply with each intervening σ bond.",
        "Basicity depends on lone pair availability, so alkylamines are basic and amides, whose lone pair is delocalised into a carbonyl, are not.",
        "Above its pKa a group is mainly deprotonated and below it mainly protonated, with a factor of ten per pH unit.",
      ],
      transferRule:
        "For any acidic or basic group in an unfamiliar molecule, draw the species left after the proton moves, ask what stabilises its charge, and then compare the surrounding pH with the pKa to decide which form is actually present.",
      nextLessonId: "lesson.chemistry.reaction_mechanisms",
    },
  ],
};

const reactionMechanisms: Lesson = {
  id: "lesson.chemistry.reaction_mechanisms",
  slug: "nucleophiles-electrophiles-and-mechanisms",
  number: "6.4",
  stageId: "stage.organic_chemistry",
  discipline: "chemistry",
  title: "Nucleophiles, electrophiles, and reaction patterns",
  summary:
    "Use the principle that electron-rich attacks electron-poor, together with curly arrows and substrate structure, to predict substitution, elimination, addition, and redox outcomes.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Identify nucleophiles and electrophiles from structure, lone pairs, and partial charges.",
    "Use curly arrows correctly to represent the movement of an electron pair.",
    "Distinguish SN1 from SN2 by rate law, stereochemical outcome, substrate, and solvent.",
    "Explain the competition between substitution and elimination.",
    "Predict Markovnikov orientation in electrophilic addition from carbocation stability.",
    "Track oxidation and reduction in organic molecules by counting bonds to oxygen and hydrogen.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.organic_acidity"],
  blocks: [
    {
      id: "mech-purpose",
      type: "concept",
      eyebrow: "One idea underneath",
      title: "Every organic reaction is electron-rich meeting electron-poor",
      paragraphs: [
        "Organic reactions look like an unmanageable list until one principle is applied to all of them: regions of high electron density attack regions of low electron density. A species that donates an electron pair is a nucleophile, from nucleus-loving; a species that accepts one is an electrophile, electron-loving. Every mechanism in this lesson is a sequence of such donations, and the arrows chemists draw on a page record nothing more than where each pair of electrons went.",
        "Nucleophiles are recognised by their electron surplus: a full negative charge, as in HO⁻, CN⁻, or Br⁻; a lone pair, as on the nitrogen of an amine or the oxygen of water; or a π bond, as in an alkene. Electrophiles are recognised by their electron deficiency: a full positive charge, as in a carbocation; a partial positive charge at the less electronegative end of a polarised bond, as at the carbon of C–Br or of C=O; or an empty orbital.",
        "This is a direct continuation of acid–base chemistry. A Brønsted base donates its electron pair to a proton; a nucleophile donates the same kind of pair to a carbon. The difference is one of destination, not of nature, which is why strong bases are usually good nucleophiles. What changes from reaction to reaction is only which atom is electron-poor and how good the group leaving the molecule is.",
      ],
      callout: "nucleophile donates an electron pair · electrophile accepts one",
    },
    {
      id: "mech-visual",
      type: "visual",
      eyebrow: "Find the partial charges",
      title: "A polarised bond marks where the attack will happen",
      introduction:
        "Look along each bond between atoms of different electronegativity and mark which end is δ+ and which is δ−. Those partial charges are the map of the reaction.",
      visual: "bonding",
      caption:
        "In C–Br and in C=O the carbon is δ+ because the other atom is more electronegative. That carbon is the electrophilic site, and it is where a nucleophile will arrive.",
    },
    {
      id: "mech-arrows",
      type: "concept",
      eyebrow: "The notation",
      title: "A curly arrow says where one pair of electrons moved",
      paragraphs: [
        "A curly arrow with a full head represents the movement of two electrons. Its tail must begin on the electrons that move — a lone pair or the centre of a bond — and its head must end where those electrons finish, either on an atom, forming a lone pair or a negative charge, or between two atoms, forming a bond. Arrows are drawn from the electron-rich source to the electron-poor destination, never the reverse, and never from a positive charge. Getting the tail right is the discipline that makes mechanisms self-checking.",
        "Two constraints keep the notation honest. Charge must balance across every step, and no second-row atom may exceed eight valence electrons. So if a nucleophile forms a new bond to a carbon that already has four bonds, a second arrow must simultaneously break one of the existing bonds and push its electrons somewhere. That somewhere is the leaving group, which departs taking the bonding pair with it and therefore leaves as an anion or a neutral molecule.",
        "Leaving group ability follows directly from the previous lesson. A good leaving group is a weak base, because a weak base is a stable anion. Iodide is excellent, since HI has pKa near −10; bromide and chloride are good; fluoride is poor. Hydroxide is a bad leaving group, since water has pKa 15.7, which is why an alcohol will not undergo substitution directly but must first be protonated so that the far more stable neutral water molecule departs instead.",
      ],
      callout: "arrow tail on the electrons · arrow head at the destination · best leaving groups are the weakest bases",
    },
    {
      id: "mech-worked-sn2",
      type: "worked",
      eyebrow: "Worked mechanism",
      title: "Walk through a bimolecular substitution step by step",
      scenario:
        "1-Bromobutane, CH₃CH₂CH₂CH₂Br, is warmed with sodium cyanide dissolved in propanone. Set out the mechanism, the product, the rate law, and the effect of doubling the cyanide concentration.",
      steps: [
        {
          label: "Locate the electrophilic carbon",
          decision:
            "Bromine is more electronegative than carbon, so the C–Br bond is polarised with δ+ on carbon. That carbon is the target, and bromide is a good leaving group because HBr is a strong acid.",
          working: "attack site is C1, bearing δ+; leaving group is Br⁻",
        },
        {
          label: "Bring in the nucleophile from behind",
          decision:
            "The carbon already has four bonds, so a new bond can only form as the old one breaks. The cyanide lone pair on carbon approaches directly opposite the C–Br bond, where the antibonding orbital is accessible and the departing bromide is furthest away.",
          working: "arrow from the C of ⁻C≡N to C1; simultaneous arrow from the C–Br bond onto Br",
        },
        {
          label: "Pass through a single transition state",
          decision:
            "Because bond making and bond breaking are concerted, there is no intermediate. At the transition state the carbon is momentarily bonded partially to five groups, with the three unchanged substituents flattened into a plane.",
          working: "one step, one energy maximum, no carbocation formed",
        },
        {
          label: "Write the rate law and apply it",
          decision:
            "Both the substrate and the nucleophile appear in the single rate-determining step, so both appear in the rate law with first order each.",
          working: "rate = k[CH₃CH₂CH₂CH₂Br][CN⁻]; doubling [CN⁻] doubles the rate",
        },
      ],
      answer:
        "The product is pentanenitrile, CH₃CH₂CH₂CH₂C≡N, formed in one concerted step; the reaction is second order overall and doubling the cyanide concentration doubles the rate.",
      plausibility:
        "A primary carbon is uncrowded, so backside approach is easy and the alternative carbocation would be primary and very unstable. The carbon count also checks out: four carbons from the butyl chain plus the nitrile carbon gives a five-carbon compound.",
    },
    {
      id: "mech-check-inversion",
      type: "check",
      eyebrow: "Consolidate",
      title: "Predict the stereochemical consequence of backside attack",
      prompt:
        "(S)-2-bromobutane reacts with hydroxide ion in propanone by an SN2 mechanism. What happens at the reacting carbon?",
      options: [
        "The configuration is retained, because the incoming group simply occupies the space the leaving group vacated",
        "The configuration is inverted, because the nucleophile must attack from the side opposite the leaving group",
        "A racemic mixture forms, because a planar carbocation intermediate is produced first",
        "The product is achiral, because replacing bromine with a hydroxyl group removes the stereocentre",
      ],
      correctIndex: 1,
      explanation:
        "In SN2 the nucleophile approaches directly opposite the C–Br bond, so as bromide leaves the other three groups flip through the plane like an umbrella in the wind. The spatial arrangement is therefore inverted at that carbon. Here the priority order maps across unchanged — Br outranks ethyl outranks methyl outranks H, and OH outranks ethyl in the same way — so the descriptor also changes, giving (R)-butan-2-ol.",
      misconception:
        "Racemisation belongs to SN1, where a planar carbocation intermediate can be attacked from either face with roughly equal probability. SN2 has no intermediate at all, so it gives a single inverted product rather than a mixture.",
    },
    {
      id: "mech-sn1-sn2",
      type: "concept",
      eyebrow: "Two routes, one outcome",
      title: "The substrate decides whether substitution goes in one step or two",
      paragraphs: [
        "SN1 takes a different route to the same kind of product. The leaving group departs first, unassisted, producing a planar carbocation intermediate; the nucleophile then adds to that cation in a fast second step. Because only the substrate is involved in the slow first step, the rate law is rate = k[substrate], first order overall and independent of nucleophile concentration. The planar intermediate can be attacked from either face, so a single enantiomer of starting material gives a substantially racemised product.",
        "Which route operates is decided mainly by carbocation stability. Alkyl groups donate electron density inductively and through hyperconjugation, so stability runs tertiary > secondary > primary > methyl. A tertiary substrate forms a workable cation and is also too crowded for backside attack, so it goes SN1. A primary substrate would give a hopelessly unstable cation but is open to attack, so it goes SN2. Secondary substrates can do either, and the conditions decide.",
        "Solvent and nucleophile settle the remaining cases. A polar protic solvent such as water or ethanol hydrogen bonds to anions, stabilising both the developing carbocation and the departing leaving group while shackling the nucleophile, so it favours SN1. A polar aprotic solvent such as propanone, dimethyl sulfoxide, or dimethylformamide dissolves the salt but cannot hydrogen bond to the anion, leaving a naked and highly reactive nucleophile, so it favours SN2. Strong, concentrated nucleophiles push towards SN2; weak nucleophiles that are also the solvent push towards SN1.",
      ],
      callout: "SN2: one step, rate = k[RX][Nu], inversion, primary · SN1: two steps, rate = k[RX], racemisation, tertiary",
    },
    {
      id: "mech-check-ratelaw",
      type: "check",
      eyebrow: "Read the kinetics",
      title: "Deduce a mechanism from a table of rate data",
      prompt:
        "A haloalkane RX is hydrolysed by hydroxide in aqueous ethanol. Run 1: [RX] = 0.10 mol dm⁻³, [OH⁻] = 0.10 mol dm⁻³, initial rate 3.0 × 10⁻⁴ mol dm⁻³ s⁻¹. Run 2: [RX] = 0.20, [OH⁻] = 0.10, rate 6.0 × 10⁻⁴. Run 3: [RX] = 0.10, [OH⁻] = 0.30, rate 3.0 × 10⁻⁴. Which conclusion follows?",
      options: [
        "SN2, because doubling the haloalkane concentration doubles the rate",
        "SN1, because the rate depends on the haloalkane concentration but not at all on hydroxide, so only the substrate appears in the rate-determining step",
        "SN2, because both reagents are present in the reaction mixture and must both be involved",
        "Neither route fits, because the data show a reaction that is second order overall",
      ],
      correctIndex: 1,
      explanation:
        "Comparing runs 1 and 2 at constant hydroxide, doubling [RX] doubles the rate, so the reaction is first order in the substrate. Comparing runs 1 and 3 at constant substrate, tripling [OH⁻] leaves the rate unchanged, so the reaction is zero order in hydroxide. The rate law is rate = k[RX], first order overall, which means the slow step involves the substrate alone — ionisation to a carbocation.",
      misconception:
        "Option one uses only half the data. First order in the substrate is consistent with both mechanisms; what discriminates between them is the response to nucleophile concentration, and here there is none.",
    },
    {
      id: "mech-elimination",
      type: "concept",
      eyebrow: "The competing path",
      title: "The same reagent can remove a proton instead of attacking carbon",
      paragraphs: [
        "A species with an available electron pair has two possible targets in a haloalkane: the electrophilic carbon, giving substitution, or a hydrogen on the adjacent carbon, giving elimination. In E2, a concerted one-step process, the base removes that β hydrogen while the C–X bond breaks and the two carbons form a π bond, producing an alkene. The rate law is rate = k[substrate][base], and the geometry matters: the departing hydrogen and leaving group must lie anti-periplanar, at 180° across the C–C bond, so that the orbitals align to make the new π bond.",
        "E1 mirrors SN1. The leaving group departs first to give a carbocation, and a base then removes a β hydrogen from the intermediate. The rate law is rate = k[substrate], and E1 and SN1 inevitably occur together because they share that intermediate. Where more than one alkene can form, the more substituted one usually predominates, because greater substitution stabilises the double bond; this is Zaitsev's rule.",
        "Three factors tip the competition. Strong bulky bases favour elimination, because bulk obstructs approach to carbon but not to a peripheral hydrogen. Higher temperature favours elimination, because elimination produces more particles and so has the larger positive entropy change, and the −TΔS term grows with temperature. More substituted substrates favour elimination, both because they offer more β hydrogens and because they are more crowded at carbon. In practice most real reactions give a mixture, and predicting the major product means weighing all three.",
      ],
      callout: "E2: rate = k[RX][base], anti-periplanar, concerted · E1: rate = k[RX], via carbocation, accompanies SN1",
    },
    {
      id: "mech-worked-markovnikov",
      type: "worked",
      eyebrow: "Worked mechanism",
      title: "Predict the orientation of an electrophilic addition",
      scenario:
        "2-Methylprop-1-ene, CH₂=C(CH₃)₂, is treated with hydrogen bromide. Two products are conceivable. Determine which forms and justify the orientation mechanistically.",
      steps: [
        {
          label: "Identify which partner is which",
          decision:
            "The alkene π bond is a region of high electron density and is the nucleophile here. The H–Br bond is polarised with δ+ on hydrogen, making that hydrogen the electrophile.",
          working: "π electrons attack H of H–Br; Br⁻ departs with the bonding pair",
        },
        {
          label: "Enumerate the two possible cations",
          decision:
            "The proton can add to either alkene carbon, and whichever carbon does not receive it becomes positively charged. Both routes must be written out before choosing.",
          working:
            "H to CH₂ → cation on the central carbon, bearing two methyls: tertiary; H to the central carbon → cation on CH₂: primary",
        },
        {
          label: "Choose by carbocation stability",
          decision:
            "Alkyl groups donate electron density inductively and by hyperconjugation, so more alkyl substitution means a lower-energy cation and a lower activation barrier for the step that forms it.",
          working: "tertiary is far more stable than primary → the tertiary route dominates",
        },
        {
          label: "Complete the addition",
          decision:
            "Bromide, now free and negatively charged, is a nucleophile and adds to the electron-deficient carbocation carbon in a fast second step.",
          working: "Br⁻ bonds to the tertiary carbon → (CH₃)₃C–Br",
        },
      ],
      answer:
        "The major product is 2-bromo-2-methylpropane, because the proton adds to the carbon already carrying more hydrogens, generating the more stable tertiary carbocation.",
      plausibility:
        "This is Markovnikov's rule, and here the mechanism supplies the reason rather than the rule being taken on trust. The prediction is testable: an alkene in which both routes give equally substituted cations, such as but-2-ene, indeed gives no strong preference.",
    },
    {
      id: "mech-check-markovnikov",
      type: "check",
      eyebrow: "Apply the reasoning",
      title: "Choose the major addition product",
      prompt:
        "But-1-ene, CH₂=CH–CH₂CH₃, is treated with hydrogen bromide. Which product predominates, and why?",
      options: [
        "1-Bromobutane, because the bromide ion always adds to the terminal carbon of the chain",
        "2-Bromobutane, because protonation at C1 generates the more stable secondary carbocation, which bromide then attacks",
        "1-Bromobutane, because a primary carbocation is stabilised by the neighbouring chain",
        "But-2-ene, because hydrogen bromide catalyses migration of the double bond along the chain",
      ],
      correctIndex: 1,
      explanation:
        "Protonation at C1 leaves the positive charge on C2, which carries a methyl group on one side and an ethyl group on the other: a secondary carbocation. Protonation at C2 would leave the charge on the terminal CH₂, a primary carbocation that is considerably higher in energy. The lower-energy route is taken, and bromide then adds to C2 to give 2-bromobutane.",
      misconception:
        "Option three inverts the stability order. Alkyl groups donate electron density towards an electron-poor centre, so more alkyl substitution stabilises a carbocation: tertiary beats secondary beats primary beats methyl.",
    },
    {
      id: "mech-carbonyl",
      type: "concept",
      eyebrow: "The carbonyl and its polymers",
      title: "Condensation builds the bond that hydrolysis takes apart",
      paragraphs: [
        "In a carbonyl group, C=O, oxygen is far more electronegative than carbon, so the π electrons sit closer to oxygen and the carbon carries a substantial partial positive charge. That carbon is one of the most important electrophiles in chemistry. A nucleophile adds to it, pushing the π electrons up onto oxygen to give a tetrahedral alkoxide intermediate. What happens next depends on the group already attached: an aldehyde or ketone has no group that can leave, so the intermediate simply picks up a proton and the product is an addition. An acid derivative can expel a leaving group and reform the C=O, giving an overall substitution.",
        "Condensation is the version that matters biologically. A carboxylic acid and an alcohol join to give an ester, and a carboxylic acid and an amine join to give an amide; in each case a molecule of water is eliminated as the new bond forms. Hydrolysis is the exact reverse, water attacking the carbonyl carbon and splitting the linkage back into its two halves. This one make-and-break pair builds and degrades esters in fats, amides in proteins, glycosidic links in carbohydrates, and phosphodiester bonds in nucleic acids.",
        "The two directions are the same equilibrium approached from opposite sides, so conditions decide which way it runs. Removing water or using excess alcohol drives esterification forwards; a large excess of water drives hydrolysis. Amides are markedly harder to hydrolyse than esters, because donation of the nitrogen lone pair into the carbonyl both reduces the electrophilicity of the carbon and makes the departing nitrogen a poorer leaving group. That kinetic stability is why peptide bonds survive in water for years without an enzyme.",
      ],
      callout: "acid + alcohol ⇌ ester + H₂O · acid + amine ⇌ amide + H₂O",
    },
    {
      id: "mech-redox",
      type: "concept",
      eyebrow: "Count the bonds",
      title: "Oxidation in organic chemistry is bookkeeping on one carbon",
      paragraphs: [
        "Definitions in terms of electron loss are awkward when nothing carries an obvious charge, so organic chemists use a practical equivalent. Oxidation of a carbon means gaining bonds to oxygen or another electronegative atom, or losing bonds to hydrogen. Reduction means the opposite: gaining bonds to hydrogen, or losing bonds to oxygen. Each swap of one C–H for one C–O is a two-electron change, and the direction follows immediately from counting.",
        "That produces a ladder of oxidation levels for a single carbon. An alkane carbon has no bonds to oxygen; an alcohol carbon has one; an aldehyde or ketone carbon has two; a carboxylic acid carbon has three; and carbon dioxide has four. Climbing the ladder is oxidation and descending it is reduction. Reagents such as acidified dichromate or permanganate push a carbon up; reagents such as sodium borohydride or catalytic hydrogen push it down.",
        "The classic sequence follows the ladder exactly. A primary alcohol, R–CH₂OH, is oxidised to an aldehyde, R–CHO, and then on to a carboxylic acid, R–COOH; each step trades one C–H bond for one bond to oxygen. A secondary alcohol oxidises to a ketone and then stops, because the carbon has no remaining hydrogen to lose without breaking the carbon skeleton. A tertiary alcohol resists oxidation altogether for the same reason. Living systems run the same ladder using enzymes and coenzymes rather than metal oxides, which is how ethanol is metabolised to ethanal and then to ethanoic acid.",
      ],
      callout: "alkane → alcohol → aldehyde → carboxylic acid → CO₂ is 0, 1, 2, 3, 4 bonds to oxygen",
    },
    {
      id: "mech-check-redox",
      type: "check",
      eyebrow: "Track the change",
      title: "Classify each step of an oxidation sequence",
      prompt:
        "Propan-1-ol is converted first to propanal and then to propanoic acid. Considering only the carbon that carries the oxygen, what changes at each step?",
      options: [
        "One C–H bond is replaced by an additional bond to oxygen at each step, so both steps are oxidations",
        "One C–C bond is replaced by a bond to oxygen at each step, so the carbon skeleton shortens",
        "Hydrogen is added to the carbon at each step, so both steps are reductions",
        "The number of bonds to oxygen is unchanged and only the molecular geometry alters",
      ],
      correctIndex: 0,
      explanation:
        "In propan-1-ol the relevant carbon has two hydrogens, one single bond to oxygen, and one bond to the chain. In propanal it has one hydrogen and a double bond counting as two bonds to oxygen. In propanoic acid it has no hydrogen and three bonds to oxygen. Each step therefore removes one C–H and adds one C–O, which is the definition of an organic oxidation.",
      misconception:
        "Assuming that adding oxygen must mean adding atoms overall misses the point of the ladder. In the first step the molecule actually loses two hydrogen atoms, and it is the change in bonds at one carbon, not the change in formula mass, that classifies the reaction.",
    },
    {
      id: "mech-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar system",
      title: "Explain a rate difference between two related substrates",
      prompt:
        "An enzyme hydrolyses an ester rapidly at pH 7.4 and 37 °C. The same enzyme hydrolyses a structurally similar amide, in which the only change is that the single-bonded oxygen is replaced by an –NH–, several thousand times more slowly. Which explanation is consistent with the mechanism of carbonyl substitution?",
      options: [
        "The amide nitrogen donates its lone pair into the carbonyl, lowering the carbon's electrophilicity, and an amine is a stronger base and hence a poorer leaving group than an alcohol",
        "The amide carbonyl carbon carries a partial negative charge, so an incoming nucleophile is repelled by it",
        "Amides contain no carbonyl group at all, so nucleophilic addition to carbon is impossible",
        "Amides diffuse more slowly to the active site because they are considerably larger molecules",
      ],
      correctIndex: 0,
      explanation:
        "Carbonyl substitution has two demanding stages: a nucleophile must add to the electrophilic carbon, and a leaving group must then depart. Nitrogen's lone pair delocalises into the carbonyl far more effectively than the ester oxygen's does, so the amide carbon is less δ+ and the addition is slower. The departing amine is also a much stronger base than an alkoxide, so it leaves far less readily. Both stages are slowed, and the effects multiply.",
      misconception:
        "Option two reverses the polarity of a carbonyl. Oxygen is more electronegative than carbon in both compounds, so the carbon is δ+ in an amide just as in an ester; the amide's carbon is simply less δ+, not oppositely charged.",
    },
    {
      id: "mech-summary",
      type: "summary",
      eyebrow: "Carry this forward",
      title: "Find the electron-rich site, find the electron-poor site, join them",
      points: [
        "Nucleophiles carry a negative charge, a lone pair, or a π bond; electrophiles carry a positive charge, a δ+, or an empty orbital.",
        "A curly arrow starts at the electrons that move and ends at their destination, and charge must balance in every step.",
        "SN2 is concerted, second order, and inverts configuration; SN1 goes through a planar carbocation, is first order, and racemises.",
        "Carbocation stability runs tertiary > secondary > primary > methyl, and it decides both SN1 and Markovnikov orientation.",
        "Elimination competes with substitution, favoured by bulky strong bases, higher temperature, and more substituted substrates.",
        "Condensation and hydrolysis are one equilibrium in two directions, building and breaking esters, amides, and biological polymers; oxidation adds bonds to oxygen or removes bonds to hydrogen at a carbon, and reduction does the reverse.",
      ],
      transferRule:
        "For any unfamiliar organic transformation, mark the partial charges, ask which site is electron-rich and which is electron-poor, and check what stabilises the intermediate or leaving group that the mechanism would have to produce.",
      nextLessonId: "lesson.chemistry.biomolecules",
    },
  ],
};

const biomolecules: Lesson = {
  id: "lesson.chemistry.biomolecules",
  slug: "biomolecules-and-macromolecules",
  number: "6.5",
  stageId: "stage.organic_chemistry",
  discipline: "chemistry",
  title: "Amino acids, proteins, carbohydrates, and lipids",
  summary:
    "Build proteins, carbohydrates, and lipids from the same functional group chemistry, and explain their structures, interactions, and behaviour in water.",
  estimatedMinutes: 38,
  reviewStatus: "unreviewed",
  objectives: [
    "Describe the general α-amino acid structure and classify side chains by polarity and charge.",
    "Explain zwitterion formation and locate the isoelectric point from pKa values.",
    "Account for peptide bond formation, planarity, and the N-to-C convention.",
    "Relate each level of protein structure to the specific interaction that maintains it.",
    "Deduce peptide fragments produced by proteases with defined cleavage specificity.",
    "Explain how linkage type and fatty acid saturation determine the properties of carbohydrates and lipids.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.reaction_mechanisms",
    "lesson.chemistry.intermolecular_forces",
  ],
  blocks: [
    {
      id: "bio-purpose",
      type: "concept",
      eyebrow: "No new chemistry",
      title: "Biological molecules obey the rules already established",
      paragraphs: [
        "Nothing in this lesson requires a new principle. Proteins are amides, fats are esters, sugars are polyalcohols with a carbonyl, and nucleic acids are esters of phosphoric acid. Every one of these linkages is made by condensation and broken by hydrolysis, and every three-dimensional structure is held together by the intermolecular forces already met: hydrogen bonding, ionic attraction, dipole interactions, and London dispersion.",
        "What is new is scale and consequence. When a condensation is repeated hundreds of times the resulting chain becomes long enough to fold, and folding creates a specific shape with a specific surface. Shape is what allows a molecule to recognise one partner out of thousands, so biological specificity is ultimately a consequence of ordinary bond chemistry repeated and folded.",
        "Water is the other constant. Almost all of this chemistry happens in dilute aqueous solution near pH 7.4 and 37 °C, so the ionisation state of every acidic and basic group is already fixed by comparing the local pH with that group's pKa, and every hydrophobic region is under continual pressure to fold away from the surrounding water. Those two facts — the charge pattern set by pH, and the segregation of polar from non-polar — between them explain most of what follows, including why a protein folds at all and why a membrane forms without anyone assembling it.",
      ],
      callout: "condensation builds · hydrolysis breaks · water and pH decide the shape",
    },
    {
      id: "bio-visual",
      type: "visual",
      eyebrow: "See the architecture",
      title: "A folded chain creates a surface that fits only certain partners",
      introduction:
        "Follow a single covalent backbone as it coils and packs, and notice how the non-covalent contacts between distant parts of that chain hold the whole arrangement together.",
      visual: "biomolecule",
      caption:
        "The covalent bonds set the sequence; the far weaker hydrogen bonds, ionic pairs, and hydrophobic contacts set the shape — which is why gentle heating can destroy function without breaking a single peptide bond.",
    },
    {
      id: "bio-amino-acids",
      type: "concept",
      eyebrow: "The monomer",
      title: "One carbon carries an acid, a base, and a variable side chain",
      paragraphs: [
        "An α-amino acid has the general structure H₂N–CHR–COOH: a central α carbon bonded to an amino group, a carboxyl group, a hydrogen, and a side chain R. Twenty side chains are used in protein synthesis, and because R differs from the other three groups in every case except glycine, where R is simply H, nineteen of the twenty amino acids are chiral. The naturally occurring form is the L configuration, which corresponds to S under the Cahn-Ingold-Prelog rules for all of them except cysteine, where the sulfur outranks the carboxyl and reverses the descriptor to R.",
        "Side chains sort into four classes that predict almost all behaviour. Non-polar side chains — those of alanine, valine, leucine, isoleucine, phenylalanine, methionine, tryptophan, and proline — are hydrocarbon-like and are driven away from water. Polar uncharged side chains, including those of serine, threonine, asparagine, glutamine, and tyrosine, carry –OH, –SH, or amide groups and hydrogen bond readily. Acidic side chains, on aspartate and glutamate, carry a carboxyl group and are negatively charged at pH 7.4. Basic side chains, on lysine, arginine, and histidine, carry nitrogen and are typically positively charged.",
        "Because the molecule contains both an acid and a base, an internal proton transfer occurs: the carboxyl group loses a proton and the amino group gains one, giving a zwitterion, ⁺H₃N–CHR–COO⁻, with two charges and zero net charge. Amino acids are therefore high-melting crystalline solids that dissolve well in water and poorly in non-polar solvents, quite unlike the covalent molecules their formulae might suggest. The pH at which the net charge is zero is called the isoelectric point, pI.",
      ],
      callout: "zwitterion ⁺H₃N–CHR–COO⁻ · pI is the pH at which net charge is zero",
    },
    {
      id: "bio-worked-pi",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the dominant form of glycine across the pH range",
      scenario:
        "Glycine, H₂N–CH₂–COOH, has pKa 2.34 for its carboxyl group and pKa 9.60 for its protonated amino group. State the dominant form at pH 1.0, at pH 7.0, and at pH 11.0, and calculate the isoelectric point.",
      steps: [
        {
          label: "Evaluate each group at pH 1.0",
          decision:
            "Compare the pH with each pKa separately. A pH below a group's pKa means that group holds its proton.",
          working:
            "1.0 < 2.34 so –COOH stays protonated; 1.0 < 9.60 so nitrogen stays as –NH₃⁺ → net +1",
        },
        {
          label: "Evaluate each group at pH 7.0",
          decision:
            "This pH lies between the two pKa values, so the more acidic group has lost its proton while the less acidic one has kept it.",
          working:
            "7.0 > 2.34 so –COO⁻; 7.0 < 9.60 so –NH₃⁺ → zwitterion, net 0",
        },
        {
          label: "Evaluate each group at pH 11.0",
          decision:
            "Above both pKa values, both acidic protons have been removed.",
          working:
            "11.0 > 2.34 and 11.0 > 9.60 → H₂N–CH₂–COO⁻, net −1",
        },
        {
          label: "Locate the isoelectric point",
          decision:
            "The zwitterion is the neutral species, and it is flanked by the cation below and the anion above. The pI is the midpoint of the two pKa values that bracket it.",
          working: "pI = (2.34 + 9.60) ÷ 2 = 11.94 ÷ 2 = 5.97",
        },
      ],
      answer:
        "Glycine is a cation at pH 1.0, a zwitterion at pH 7.0, and an anion at pH 11.0, with an isoelectric point of 5.97.",
      plausibility:
        "The pI falls between the two pKa values and well below 7, as expected when a carboxyl group with pKa 2.34 is much more strongly acidic than the ammonium group is. At its pI an amino acid carries no net charge, does not migrate in an electric field, and is at its least soluble — all of which are measurable.",
    },
    {
      id: "bio-check-zwitterion",
      type: "check",
      eyebrow: "Apply the pKa comparison",
      title: "Work out the charge on a side chain",
      prompt:
        "Lysine has three ionisable groups: the α-carboxyl with pKa 2.18, the α-amino group with pKa 8.95, and the side-chain amino group with pKa 10.53. What is the net charge on lysine at pH 7.4?",
      options: [
        "Net −1, because the pH is above the carboxyl pKa",
        "Net 0, because the carboxylate and one protonated amino group cancel",
        "Net +1, because the carboxyl is deprotonated while both amino groups remain protonated",
        "Net +2, because both amino groups are protonated and the carboxyl is unaffected at pH 7.4",
      ],
      correctIndex: 2,
      explanation:
        "Take each group against pH 7.4 in turn. The carboxyl pKa of 2.18 is well below the pH, so it is deprotonated at −1. The α-amino pKa of 8.95 is above the pH, so that nitrogen is protonated at +1. The side-chain pKa of 10.53 is further above still, so it is also protonated at +1. The sum is −1 + 1 + 1 = +1, which is why lysine residues make protein surfaces positively charged at physiological pH.",
      misconception:
        "Answering +2 forgets that the carboxyl group is ionised at pH 7.4 and contributes −1. Every ionisable group must be evaluated, not only the ones that are obviously charged.",
    },
    {
      id: "bio-peptide",
      type: "concept",
      eyebrow: "Joining the monomers",
      title: "The peptide bond is an amide with the properties of a half double bond",
      paragraphs: [
        "Two amino acids join when the carboxyl group of one condenses with the amino group of the next, eliminating water and forming a C–N bond. The resulting amide linkage is called a peptide bond, and the amino acid units within the chain are called residues, because each has lost the elements of water. Building a chain of n residues therefore requires n − 1 condensations and releases n − 1 water molecules; hydrolysis reverses each one.",
        "That bond is not a simple single bond. The nitrogen lone pair delocalises into the adjacent carbonyl, giving the C–N bond roughly forty per cent double-bond character, shortening it and blocking rotation about it. The consequence is structural: the six atoms of each peptide unit — the α carbon, carbonyl carbon, oxygen, nitrogen, hydrogen, and the next α carbon — lie in one plane, almost always with the two α carbons trans across the bond. A polypeptide is therefore a chain of rigid planar plates connected by two rotatable bonds at each α carbon, which is exactly why only a limited set of regular folds is available.",
        "Because a chain has an unreacted amino group at one end and an unreacted carboxyl group at the other, it has direction. The convention is to write and number sequences from the N-terminus to the C-terminus, so Ala–Gly and Gly–Ala are different dipeptides with different properties. Ribosomes synthesise proteins in that same direction, and the sequence written this way is the primary structure: the complete covalent specification of the chain.",
      ],
      callout: "n residues need n − 1 peptide bonds and release n − 1 molecules of water",
    },
    {
      id: "bio-levels",
      type: "concept",
      eyebrow: "Four levels",
      title: "Each level of protein structure has its own responsible interaction",
      paragraphs: [
        "Primary structure is the covalent sequence held by peptide bonds. Secondary structure is local regular folding of the backbone, held entirely by hydrogen bonds between a backbone C=O and a backbone N–H. In an α helix the chain coils with about 3.6 residues per turn and each C=O hydrogen bonds to the N–H four residues further along, with side chains projecting outwards. In a β sheet, extended strands lie alongside one another and hydrogen bond across the gap, either parallel or antiparallel. Side chains play no part in holding either motif together.",
        "Tertiary structure is the overall three-dimensional fold of one complete chain, and here side chains do all the work. Four interactions contribute: the hydrophobic effect, which drives non-polar side chains into a buried core and is usually the largest single contribution; hydrogen bonds between polar side chains; ionic pairs, or salt bridges, between oppositely charged side chains such as an aspartate carboxylate and a lysine ammonium group; and disulfide bridges, the one covalent contributor, formed by oxidising two cysteine thiols to –S–S–. Quaternary structure is the assembly of two or more separately folded subunits by the same non-covalent interactions, as in haemoglobin's four chains.",
        "Denaturation follows directly from that list. Heating supplies enough energy to disrupt hydrogen bonds, ionic pairs, and hydrophobic packing, so tertiary and quaternary structure are lost while peptide bonds, needing hydrolysis rather than warming, survive. Changing pH protonates carboxylates or deprotonates ammonium groups, destroying salt bridges and adding like-charge repulsion. Reducing agents specifically break disulfide bridges. In each case the primary structure remains intact but the shape, and therefore the function, is gone — which is why a boiled egg does not un-boil.",
      ],
      callout: "1° peptide bonds · 2° backbone hydrogen bonds · 3° side-chain interactions · 4° subunit assembly",
    },
    {
      id: "bio-enzymes",
      type: "concept",
      eyebrow: "Shape as function",
      title: "An active site is a chiral pocket that recognises one substrate",
      paragraphs: [
        "An enzyme is a protein whose fold creates a small cavity called the active site, lined by side chains positioned by the tertiary structure. Because those side chains come from single-handed amino acids, the pocket is chiral and can distinguish enantiomers, binding one snugly while the other cannot fit. Recognition is not rigid: on binding, the enzyme adjusts its conformation slightly to close around the substrate, the induced fit model, which explains why enzymes can strain a substrate towards its transition state rather than merely holding it.",
        "Increasing substrate concentration at fixed enzyme concentration produces a characteristic curve. At low concentration most active sites are empty, so the rate rises almost in proportion to concentration. As sites fill, the rise flattens, and once essentially every site is occupied at any instant the rate reaches a maximum, Vmax, and adding more substrate achieves nothing. The concentration giving half of Vmax is written Kₘ, and a small Kₘ indicates that half-saturation is reached at low concentration. Saturation is the diagnostic signature of a catalyst with a finite number of binding sites, and it is the reason enzyme kinetics look nothing like the straight-line kinetics of a simple bimolecular reaction.",
      ],
      callout: "rate rises with [substrate], then plateaus at Vmax once every active site is occupied",
    },
    {
      id: "bio-check-saturation",
      type: "check",
      eyebrow: "Read the curve",
      title: "Interpret an enzyme activity against temperature graph",
      prompt:
        "An enzyme's rate is measured against temperature. It rises steadily from 10 °C to about 40 °C, peaks, then falls steeply above 50 °C and does not recover when the sample is cooled back to 37 °C. Which explanation fits all of these observations?",
      options: [
        "Above the peak the peptide bonds are hydrolysed, so the primary structure is destroyed",
        "Rising temperature increases collision frequency and energy up to the peak; above it, the hydrogen bonds, ionic pairs, and hydrophobic packing that maintain the tertiary structure are disrupted, so the active site loses its shape",
        "The substrate is consumed more quickly at high temperature, so the measured rate falls once it runs out",
        "The activation energy of the catalysed reaction increases as the temperature rises",
      ],
      correctIndex: 1,
      explanation:
        "The rise is ordinary kinetics: more frequent collisions and a larger fraction of molecules exceeding the activation energy. The fall is structural, because the interactions holding the fold together are weak and are overcome well below the energy needed to break a covalent bond. The failure to recover on cooling is the decisive clue: a purely kinetic effect would be reversible, whereas a denatured protein does not spontaneously refold.",
      misconception:
        "Attributing the loss to peptide bond breakage confuses denaturation with hydrolysis. Amide bonds are kinetically very stable in water and are not cleaved by warming a solution to 60 °C; only the non-covalent structure is lost.",
    },
    {
      id: "bio-worked-cleavage",
      type: "worked",
      eyebrow: "Worked example",
      title: "Deduce fragments from two selective cleavages",
      scenario:
        "An octapeptide has the sequence Ala–Gly–Lys–Ser–Phe–Arg–Val–Leu, written N-terminus to C-terminus. Trypsin cleaves the peptide bond on the C-terminal side of lysine and arginine residues. Chymotrypsin cleaves on the C-terminal side of the aromatic residues phenylalanine, tyrosine, and tryptophan. Predict the fragments from each digest, and show how the two sets together confirm the order.",
      steps: [
        {
          label: "Locate the trypsin sites",
          decision:
            "Scan the sequence from the N-terminus for lysine and arginine, and mark a cut after each one. A residue at the extreme C-terminus would give no new fragment.",
          working: "Lys at position 3 and Arg at position 6 → cuts after residues 3 and 6",
        },
        {
          label: "Write the tryptic fragments",
          decision:
            "Two internal cuts divide a single chain into three pieces, each still written N to C.",
          working: "Ala–Gly–Lys, Ser–Phe–Arg, Val–Leu",
        },
        {
          label: "Repeat for chymotrypsin",
          decision:
            "Only one aromatic residue is present, phenylalanine at position 5, so this digest gives a single cut and two fragments.",
          working: "Ala–Gly–Lys–Ser–Phe and Arg–Val–Leu",
        },
        {
          label: "Overlap the two sets",
          decision:
            "A fragment from one digest that spans a cut site of the other fixes the relative order of the two pieces it bridges, which no single digest can do on its own.",
          working:
            "Ala–Gly–Lys–Ser–Phe spans the trypsin cut after Lys, proving Ala–Gly–Lys comes immediately before Ser–Phe–Arg",
        },
      ],
      answer:
        "Trypsin gives Ala–Gly–Lys, Ser–Phe–Arg, and Val–Leu; chymotrypsin gives Ala–Gly–Lys–Ser–Phe and Arg–Val–Leu; and the overlap between the two sets establishes the unique order Ala–Gly–Lys–Ser–Phe–Arg–Val–Leu.",
      plausibility:
        "Residue counts must be conserved: 3 + 3 + 2 = 8 for the tryptic digest and 5 + 3 = 8 for the chymotryptic digest, both matching the octapeptide. Each digest alone leaves the order of its fragments ambiguous, which is exactly why two enzymes of different specificity are used.",
    },
    {
      id: "bio-check-cleavage",
      type: "check",
      eyebrow: "Apply a stated rule",
      title: "Count fragments when an exception applies",
      prompt:
        "Trypsin cleaves on the C-terminal side of lysine and arginine, but not when the next residue is proline. A nonapeptide has the sequence Gly–Arg–Pro–Ser–Lys–Ala–Trp–Arg–Val, written N to C. How many fragments does complete trypsin digestion produce?",
      options: [
        "2 fragments",
        "3 fragments",
        "4 fragments",
        "5 fragments",
      ],
      correctIndex: 1,
      explanation:
        "Three residues are candidates. The arginine at position 2 is followed by proline at position 3, so the exception blocks that cut. The lysine at position 5 is followed by alanine, so it is cleaved. The arginine at position 8 is followed by valine, so it is cleaved as well. Two cuts in a single chain give three fragments: Gly–Arg–Pro–Ser–Lys, Ala–Trp–Arg, and Val, with residue counts 5 + 3 + 1 = 9 as required.",
      misconception:
        "Counting three cuts and four fragments applies the general rule without the stated exception. Reading a novel constraint and then honouring it is the whole skill being tested here; the underlying chemistry is unchanged.",
    },
    {
      id: "bio-carbs",
      type: "concept",
      eyebrow: "Sugars and their links",
      title: "One linkage geometry separates food from fibre",
      paragraphs: [
        "A monosaccharide is a polyhydroxy aldehyde or ketone, typically CₙH₂ₙOₙ; glucose is C₆H₁₂O₆ with an aldehyde at C1 and hydroxyl groups on C2 to C6. In water the open chain is a minor species, because the C5 hydroxyl adds intramolecularly to the C1 carbonyl in exactly the nucleophilic addition already met, closing a six-membered ring. That reaction creates a new stereocentre at C1, and the two resulting forms are called the α anomer, with the new hydroxyl below the ring plane, and the β anomer, with it above.",
        "Two monosaccharides condense to a disaccharide by eliminating water between two hydroxyl groups, forming a glycosidic bond. Maltose is two glucose units joined α-1,4; lactose is galactose joined β-1,4 to glucose; sucrose joins glucose and fructose through both their anomeric carbons. Repeating the condensation gives polysaccharides, and hydrolysis, whether by acid or by a specific enzyme, releases the monomers again.",
        "The consequences of anomeric geometry are striking. Starch and glycogen are α-1,4 polymers of glucose, and the α linkage puts a kink in the chain that coils it into a helix, giving a compact and readily hydrolysed store; amylopectin and glycogen add α-1,6 branch points, glycogen more frequently, so that many chain ends are available for rapid mobilisation. Cellulose is the β-1,4 polymer of the same monomer, and the β linkage produces straight ribbons that hydrogen bond extensively into rigid fibres. Human digestive enzymes hydrolyse α-1,4 links but not β-1,4, so starch is a food and cellulose is dietary fibre, purely because of the orientation of one bond.",
      ],
      callout: "α-1,4 glucose polymer coils and is digestible · β-1,4 glucose polymer forms straight fibres and is not",
    },
    {
      id: "bio-lipids",
      type: "concept",
      eyebrow: "Water-avoiding molecules",
      title: "Lipids are defined by solubility, and shape decides the rest",
      paragraphs: [
        "A fatty acid is a long unbranched hydrocarbon chain ending in a carboxyl group. A saturated chain has no double bonds and is straight, so molecules pack closely and the London dispersion forces between them are maximised; stearic acid, an eighteen-carbon saturated acid, melts at 69 °C. A single cis double bond puts a permanent kink of about 30° in the chain, spoiling that packing; oleic acid, also eighteen carbons but with one cis double bond, melts at 13 °C and is a liquid at room temperature. Melting point therefore reports packing efficiency, and unsaturation is what disrupts it.",
        "Esterifying three fatty acids to the three hydroxyl groups of glycerol gives a triglyceride, the storage form of fat, which is entirely non-polar and energy-dense because its carbons are so highly reduced. Replace one fatty acid with a charged phosphate-containing head and the result is a phospholipid: a molecule with a hydrophilic head and two hydrophobic tails. Such an amphipathic molecule cannot satisfy water in both halves, so phospholipids spontaneously assemble into a bilayer with tails inward and heads outward. No new bonds form; the hydrophobic effect alone drives it, which is why membranes self-repair. Steroids, including cholesterol, are built instead from four fused rings, three six-membered and one five-membered, and intercalate between the tails to modulate membrane fluidity.",
        "Nucleotides complete the set. Each is built from a nitrogenous base, a five-carbon sugar, and a phosphate group. Condensation between the phosphate on one nucleotide and the 3′ hydroxyl of the next builds a phosphodiester backbone that is negatively charged at physiological pH and therefore firmly hydrophilic. The bases point inward and pair by hydrogen bonding, adenine to thymine with two hydrogen bonds and guanine to cytosine with three, holding two antiparallel strands together in a double helix. Every one of these interactions has already appeared in this course; only their arrangement is new.",
      ],
      callout: "saturated chains pack well and melt high · cis unsaturation kinks the chain and lowers the melting point",
    },
    {
      id: "bio-check-membrane",
      type: "check",
      eyebrow: "Unfamiliar application",
      title: "Predict which molecule crosses a bilayer",
      prompt:
        "A cell membrane is a phospholipid bilayer whose interior is a hydrocarbon region about 3 nm thick. Four species of broadly comparable molar mass are offered to it. Which crosses most readily by simple diffusion, without any transport protein?",
      options: [
        "A sodium ion, Na⁺, surrounded by its hydration shell",
        "A glucose molecule carrying five hydroxyl groups",
        "A steroid hormone built from four fused hydrocarbon rings with a single hydroxyl group",
        "A short peptide carrying two ionised carboxylate side chains",
      ],
      correctIndex: 2,
      explanation:
        "Crossing the bilayer requires partitioning into a hydrocarbon interior, which is favourable only for species that are largely non-polar and uncharged. The steroid is almost entirely hydrocarbon, with one hydroxyl group, so it dissolves readily in the tail region. The sodium ion and the peptide both carry full charges and would have to shed extensive hydration shells at enormous energetic cost, and glucose's five hydroxyls hydrogen bond strongly to water, which is precisely why cells need dedicated glucose transporters.",
      misconception:
        "Judging permeability by molecular size alone predicts that the sodium ion, by far the smallest species listed, should cross most easily. Charge and hydrogen bonding capacity dominate over size for passage through a hydrocarbon interior.",
    },
    {
      id: "bio-summary",
      type: "summary",
      eyebrow: "Carry this forward",
      title: "Same bonds, same forces, assembled at a scale that creates function",
      points: [
        "An α-amino acid exists as a zwitterion, and its net charge at any pH follows from comparing that pH with each group's pKa.",
        "Peptide bonds form by condensation, have partial double-bond character, are planar, and fix the chain's N-to-C direction.",
        "Backbone hydrogen bonds hold secondary structure; side-chain hydrophobic packing, hydrogen bonds, salt bridges, and disulfides hold tertiary structure.",
        "Heat and pH denature a protein by disrupting non-covalent interactions while leaving the primary sequence intact, and enzyme rate plateaus at Vmax because a finite number of chiral active sites becomes saturated.",
        "Starch and cellulose share one monomer and differ only in α or β linkage, which alone determines digestibility.",
        "Amphipathic phospholipids self-assemble into bilayers, so only uncharged, largely non-polar species diffuse across unaided.",
      ],
      transferRule:
        "When a biological molecule behaves unexpectedly, identify its functional groups, decide their ionisation state at the local pH, and then ask which non-covalent interactions its shape makes possible with water and with its partner.",
      nextLessonId: "lesson.chemistry.separation_techniques",
    },
  ],
};

export const organicChemistryLessons: Lesson[] = [
  organicStructure,
  isomerism,
  organicAcidity,
  reactionMechanisms,
  biomolecules,
];
