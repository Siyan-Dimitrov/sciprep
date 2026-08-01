import type { Lesson } from "@/lib/lesson-types";

const atomicStructure: Lesson = {
  id: "lesson.chemistry.atomic_structure",
  slug: "atomic-structure-and-periodic-trends",
  number: "3.1",
  stageId: "stage.chemistry_structure",
  discipline: "chemistry",
  title: "Atomic structure and periodic trends",
  summary:
    "Explain how nuclear charge, shielding, and electron configuration determine atomic properties, and use them to predict periodic trends in radius, ionisation energy, and electronegativity.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "Describe atoms in terms of protons, neutrons, and electrons, using atomic and mass numbers.",
    "Calculate relative atomic mass as an abundance-weighted mean of isotopic masses.",
    "Write electron configurations using s, p, and d subshells and link them to periodic table blocks.",
    "Explain shielding and effective nuclear charge, and use them to account for periodic trends.",
    "Predict trends in atomic radius, ionisation energy, electron affinity, and electronegativity.",
    "Infer the group of an element from a pattern of successive ionisation energies.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.particle_models",
    "lesson.toolkit.scientific_notation",
  ],
  blocks: [
    {
      id: "atom-inside",
      type: "concept",
      eyebrow: "Inside the atom",
      title: "Three particles account for every element",
      paragraphs: [
        "An atom has a tiny, dense nucleus surrounded by electrons. The nucleus contains protons, each with charge +1 and a relative mass of 1, and neutrons, which are uncharged and have almost the same mass as protons. Electrons carry charge −1 and are far lighter—about 1/1836 of a proton’s mass—so nearly all of an atom’s mass sits in the nucleus, while nearly all of its volume is the space the electrons occupy. The atomic number Z is the number of protons, and it alone defines the element: every atom with six protons is carbon, whatever else varies. A neutral atom has exactly Z electrons.",
        "The mass number A is the total count of protons plus neutrons. Atoms of the same element can have different neutron counts; these variants are called isotopes. Chlorine, for example, occurs naturally as ³⁵Cl (17 protons, 18 neutrons) and ³⁷Cl (17 protons, 20 neutrons). Because isotopes of an element carry identical electron arrangements, they undergo the same chemical reactions; they differ in mass and in nuclear properties such as stability. Changing the proton count, by contrast, produces a different element entirely.",
      ],
      callout:
        "atomic number Z = protons, and defines the element · mass number A = protons + neutrons",
    },
    {
      id: "atom-visual",
      type: "visual",
      eyebrow: "Where electrons sit",
      title: "Electrons occupy shells, subshells, and orbitals",
      introduction:
        "Electrons are arranged in energy levels, or shells, numbered n = 1, 2, 3 outward from the nucleus. Each shell divides into subshells labelled s, p, and d, and each subshell is built from orbitals—regions where an electron is most likely to be found—holding at most two electrons each.",
      visual: "orbital",
      caption:
        "Orbitals are probability regions, not planetary orbits. Within one shell the subshells differ slightly in energy, s below p below d, and that ordering decides how the electrons fill in.",
    },
    {
      id: "atom-ram",
      type: "concept",
      eyebrow: "A weighted mean",
      title: "Relative atomic mass averages the isotopes by abundance",
      paragraphs: [
        "Because a natural sample of an element is a mixture of isotopes in nearly fixed proportions, the mass value printed on a periodic table is an average. The relative atomic mass Aᵣ is defined as the weighted mean of the isotopic masses, measured on a scale where one atom of ¹²C is exactly 12. It is dimensionless, and its numerical value gives the molar mass in g mol⁻¹.",
        "A weighted mean multiplies each isotopic mass by its fractional abundance and adds the results, so the common isotope pulls the average toward itself. Chlorine’s Aᵣ of 35.45 does not mean any chlorine atom has that mass—no atom does. It means that roughly three atoms in four are ³⁵Cl, so the average sits much closer to 35 than to 37. A simple, unweighted average of the two isotopic masses would land halfway between and would describe no real sample.",
      ],
      callout: "Aᵣ = Σ (fractional abundance × isotopic mass)",
    },
    {
      id: "atom-worked-chlorine",
      type: "worked",
      eyebrow: "Worked example",
      title: "Calculate the relative atomic mass of chlorine",
      scenario:
        "Natural chlorine is 75.77% ³⁵Cl, with isotopic mass 34.97, and 24.23% ³⁷Cl, with isotopic mass 36.97. Calculate the relative atomic mass of chlorine.",
      steps: [
        {
          label: "Convert percentages to fractions",
          decision:
            "A weighted mean needs fractional abundances that sum to exactly one; percentages are those fractions multiplied by 100.",
          working: "0.7577 + 0.2423 = 1.0000 ✓",
        },
        {
          label: "Weight each isotopic mass",
          decision:
            "Each isotope contributes to the average in proportion to how much of the sample it makes up.",
          working: "0.7577 × 34.97 = 26.4968 and 0.2423 × 36.97 = 8.9578",
        },
        {
          label: "Add the contributions",
          decision:
            "The weighted mean is the sum of the weighted contributions; round only at the end.",
          working: "26.4968 + 8.9578 = 35.4546",
        },
        {
          label: "Round and interpret",
          decision:
            "Four significant figures match the data supplied, and the result should lean toward the majority isotope.",
          working: "Aᵣ(Cl) = 35.45",
        },
      ],
      answer:
        "The relative atomic mass of chlorine is 35.45. It is a weighted mean, so it sits much nearer the mass of the more abundant isotope, ³⁵Cl.",
      plausibility:
        "The answer must lie between 34.97 and 36.97, and since about 76% of atoms are the lighter isotope, it should fall in the lower quarter of that range—which it does.",
    },
    {
      id: "atom-check-boron",
      type: "check",
      eyebrow: "Your turn",
      title: "Weight the average correctly",
      prompt:
        "Natural boron is 19.9% ¹⁰B (isotopic mass 10.01) and 80.1% ¹¹B (isotopic mass 11.01). What is the relative atomic mass of boron?",
      options: ["10.21", "10.51", "10.81", "21.02"],
      correctIndex: 2,
      explanation:
        "Aᵣ = (0.199 × 10.01) + (0.801 × 11.01) = 1.992 + 8.819 = 10.81. Four atoms in five are the heavier isotope, so the mean sits close to 11.",
      misconception:
        "Averaging the two isotopic masses without weighting, giving 10.51, treats a roughly 4 : 1 mixture as if it were 1 : 1; swapping the two abundances gives 10.21 and pulls the mean toward the minority isotope.",
    },
    {
      id: "atom-config",
      type: "concept",
      eyebrow: "Filling the subshells",
      title: "Electron configurations follow capacity and energy order",
      paragraphs: [
        "Each shell contains a fixed set of subshells: shell 1 has only 1s; shell 2 has 2s and 2p; shell 3 has 3s, 3p, and 3d. An s subshell is a single orbital holding up to 2 electrons; a p subshell is three orbitals holding up to 6; a d subshell is five orbitals holding up to 10. Electrons occupy the lowest-energy subshell available, filling upward—the building-up principle.",
        "An electron configuration records this filling: the number names the shell, the letter the subshell, and the superscript counts the electrons. Oxygen, with Z = 8, is 1s² 2s² 2p⁴. The filling order runs 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p—the 4s subshell fills before 3d because, for potassium and calcium, 4s lies slightly lower in energy than the well-shielded 3d.",
        "The periodic table is this pattern drawn as a map. Elements filling an s subshell form the s block (groups 1 and 2), a p subshell the p block (groups 13 to 18), and a d subshell the d block. The period number equals the outermost occupied shell. The electrons in that outermost shell are the valence electrons, and they govern bonding—which is why elements in one group, sharing a valence configuration, share chemical behaviour.",
      ],
      callout: "capacities: s holds 2 · p holds 6 · d holds 10",
    },
    {
      id: "atom-worked-potassium",
      type: "worked",
      eyebrow: "Worked example",
      title: "Write the configuration of potassium and read its chemistry",
      scenario:
        "Potassium has atomic number 19. Write its full electron configuration, then identify its block, its group, and the ion it forms.",
      steps: [
        {
          label: "Count the electrons",
          decision:
            "A neutral atom has as many electrons as protons, so there are 19 electrons to place.",
          working: "Z = 19 → 19 electrons",
        },
        {
          label: "Fill shells 1 to 3 in energy order",
          decision:
            "Each subshell fills to capacity before the next begins: 1s, 2s, 2p, 3s, 3p.",
          working: "1s² 2s² 2p⁶ 3s² 3p⁶ accounts for 2 + 2 + 6 + 2 + 6 = 18 electrons",
        },
        {
          label: "Place the final electron",
          decision:
            "After 3p, the next subshell up in energy is 4s, not 3d, because 3d is strongly shielded at this point in the table.",
          working: "final electron → 4s¹",
        },
        {
          label: "Interpret the configuration",
          decision:
            "The single outermost 4s electron is the only valence electron, which fixes the block, the group, and the likely ion.",
          working: "s block, group 1; losing 4s¹ gives K⁺ with the argon configuration",
        },
      ],
      answer:
        "Potassium is 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹: an s-block, group 1 element whose single valence electron explains why it forms the K⁺ ion.",
      plausibility:
        "The superscripts sum to 19, matching Z, and group 1 metals are indeed observed to form 1+ ions in all their common compounds.",
    },
    {
      id: "atom-check-config",
      type: "check",
      eyebrow: "Configuration to chemistry",
      title: "Read reactivity from a configuration",
      prompt:
        "A neutral atom has the configuration 1s² 2s² 2p⁶ 3s². Which statement best describes its chemistry?",
      options: [
        "It readily forms a 2+ ion, because losing its two 3s electrons exposes a stable inner configuration",
        "It readily forms a 2− ion, because gaining electrons would complete the 3p subshell",
        "It is unreactive, because every occupied subshell is completely full",
        "It readily forms a 1+ ion, because outer electrons can only ever be removed one at a time",
      ],
      correctIndex: 0,
      explanation:
        "The atom has 12 electrons, so it is magnesium. Its two valence electrons sit in shell 3; removing both gives Mg²⁺ with the neon configuration, and the energy cost of the second removal is far below the huge cost of breaking into shell 2.",
      misconception:
        "A filled subshell is not a filled outer shell. Reactivity is set by the outermost shell as a whole: 3s² is full as a subshell, yet shell 3 is nearly empty, and those two electrons are cheaply removed.",
    },
    {
      id: "atom-trends",
      type: "concept",
      eyebrow: "One cause, many trends",
      title: "Effective nuclear charge and shielding explain the periodic trends",
      paragraphs: [
        "A valence electron does not feel the full nuclear charge. Inner-shell electrons sit between it and the nucleus and cancel, or shield, part of the attraction; electrons in the same shell shield one another only weakly. The pull that remains is the effective nuclear charge, Z_eff, roughly the proton count minus the shielding. Moving across a period adds protons while the inner shells stay the same, so Z_eff on the valence electrons climbs steadily. Moving down a group adds whole new shells, so the valence electrons sit farther out behind more shielding, and distance becomes the dominant factor.",
        "The trends follow from those two facts. Across a period, atoms shrink—same shell, stronger pull—so atomic radius decreases; the first ionisation energy, the energy needed to remove one mole of electrons from one mole of gaseous atoms, increases; electron affinity, the energy change when a gaseous atom gains an electron, generally becomes more exothermic; and electronegativity, an atom’s attraction for shared bonding electrons, increases. Down a group each trend reverses: radius grows with the extra shells, and ionisation energy and electronegativity fall, because greater distance and shielding outweigh the added protons.",
        "Removing electrons one after another probes the shell structure directly. Within one shell, each successive ionisation energy rises modestly, because the remaining electrons are held by an undiminished nucleus. But once the valence shell is emptied, the next electron must come from an inner shell—much closer to the nucleus and barely shielded—and the ionisation energy jumps several-fold. The position of that jump therefore counts the valence electrons and identifies the group.",
      ],
      callout: "across a period Z_eff rises · down a group distance and shielding rise",
    },
    {
      id: "atom-check-ie-table",
      type: "check",
      eyebrow: "Read the data",
      title: "Locate the shell boundary in ionisation data",
      prompt:
        "An element in period 3 has successive molar ionisation energies of 738, 1451, 7733, and 10 540 kJ mol⁻¹. In which group does it belong?",
      options: ["Group 1", "Group 2", "Group 13", "Group 15"],
      correctIndex: 1,
      explanation:
        "The first two removals cost a similar order of energy, but the third costs over five times the second: the jump lies between the second and third ionisations. Two electrons are therefore easily removed valence electrons, so the element is in group 2—these are the data for magnesium.",
      misconception:
        "Reading the jump as marking three removed electrons miscounts: the jump comes after the second removal, so exactly two electrons occupied the valence shell, not three.",
    },
    {
      id: "atom-check-ion-radius",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Explain an ionic radius that defies nuclear charge",
      prompt:
        "Nerve-cell channels discriminate between Na⁺ (radius 102 pm) and the larger K⁺ (radius 138 pm). Potassium has 19 protons to sodium’s 11, yet K⁺ is the bigger ion. Why?",
      options: [
        "K⁺ has the higher nuclear charge, and a greater positive charge always enlarges an ion",
        "K⁺ is larger because it has lost fewer electrons from its outer shell than Na⁺ has",
        "K⁺ contains more neutrons, and the additional neutrons take up space inside the electron cloud",
        "The outermost electrons of K⁺ occupy the third shell while those of Na⁺ occupy the second, and the extra occupied shell outweighs the extra nuclear charge",
      ],
      correctIndex: 3,
      explanation:
        "Na⁺ is 1s² 2s² 2p⁶, with shell 2 outermost; K⁺ is 1s² 2s² 2p⁶ 3s² 3p⁶, with shell 3 outermost. An ion’s size is set chiefly by its outermost occupied shell, and shell 3 lies farther out behind more shielding, so K⁺ is larger despite its stronger nucleus.",
      misconception:
        "Comparing nuclear charges settles size only when the outermost shell is the same, as in an isoelectronic series. Once the shell counts differ, the number of occupied shells dominates; neutrons, being in the nucleus, contribute mass but essentially no size.",
    },
    {
      id: "atom-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Structure inside the atom predicts behaviour across the table",
      points: [
        "The proton count defines the element; isotopes of an element differ only in neutrons and therefore in mass, not chemistry.",
        "Relative atomic mass is the abundance-weighted mean of isotopic masses, pulled toward the common isotope.",
        "Electrons fill subshells in energy order—s holds 2, p holds 6, d holds 10—and the configuration maps onto the periodic table’s blocks.",
        "Valence electrons, the outermost-shell electrons, govern bonding; a shared valence configuration is why a group shares chemistry.",
        "Across a period Z_eff rises, so radius falls while ionisation energy and electronegativity rise; down a group added shells reverse every trend.",
        "A sharp jump in successive ionisation energies marks the boundary between valence and inner shells, and its position gives the group.",
      ],
      transferRule:
        "For any periodic comparison, ask two questions: how many shells are occupied, and what effective nuclear charge acts on the outermost electrons?",
      nextLessonId: "lesson.chemistry.bonding",
    },
  ],
};

const bonding: Lesson = {
  id: "lesson.chemistry.bonding",
  slug: "ionic-covalent-and-metallic-bonding",
  number: "3.2",
  stageId: "stage.chemistry_structure",
  discipline: "chemistry",
  title: "Ionic, covalent, and metallic bonding",
  summary:
    "Treat every chemical bond as an electrostatic balance between nuclei and electrons, and use that single model to explain ionic lattices, covalent molecules, and metallic solids.",
  estimatedMinutes: 38,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain all chemical bonding as electrostatic energy lowering between nuclei and electrons.",
    "Predict relative lattice energies from ionic charges and radii.",
    "Interpret the potential-energy curve of a covalent bond in terms of bond length and bond energy.",
    "Draw Lewis structures by a stepwise procedure and evaluate them using formal charge.",
    "Use resonance to describe delocalised bonding in ions such as carbonate.",
    "Explain the conductivity and malleability of metals with the delocalised-electron model.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.atomic_structure"],
  blocks: [
    {
      id: "bond-electrostatics",
      type: "concept",
      eyebrow: "One force only",
      title: "Bonds form because electrons between nuclei lower the energy",
      paragraphs: [
        "At the scale of atoms, one force does all the work: electrostatic attraction between positive nuclei and negative electrons, opposed by nucleus–nucleus and electron–electron repulsion. A chemical bond exists wherever an arrangement of nuclei and electrons has lower potential energy than the separated atoms. Energy is released when the bond forms and must be supplied to break it—that energy difference is the bond’s strength.",
        "It is tempting to say atoms bond because they “want a full outer shell”. Atoms want nothing. The octet is bookkeeping that often coincides with a low-energy arrangement, and it has well-known exceptions: SF₆ holds twelve electrons around sulfur, and NO is stable with an odd electron. The reliable currency is energy, not electron counts.",
        "What varies between bond types is where the shared electron density ends up. Transfer it almost entirely to one partner and the result is ionic bonding; concentrate it between two particular nuclei and the bond is covalent; spread it over an entire lattice of nuclei and the bonding is metallic. These are three limits of one electrostatic phenomenon, not three different forces.",
      ],
      callout: "every bond is an electrostatic energy lowering; the octet is bookkeeping, not a motive",
    },
    {
      id: "bond-visual-modes",
      type: "visual",
      eyebrow: "Three limits",
      title: "Where the electrons sit distinguishes the bond types",
      introduction:
        "Compare the electron distribution in the three limiting cases: fully transferred to form ions, shared locally between two nuclei, and delocalised across a whole lattice of cations.",
      visual: "bonding",
      caption:
        "Real substances fall along a continuum between these limits; a polar covalent bond, with unequally shared density, sits between the pure covalent and ionic extremes.",
    },
    {
      id: "bond-ionic",
      type: "concept",
      eyebrow: "Ions in a lattice",
      title: "Lattice energy grows with charge and shrinks with distance",
      paragraphs: [
        "When an atom with a low ionisation energy meets one that binds an extra electron strongly—sodium meeting chlorine—electron transfer produces a cation and an anion. Each ion then attracts every oppositely charged neighbour in all directions, so the ions stack into a three-dimensional lattice rather than pairing into molecules. NaCl names a ratio in that lattice, not a molecule.",
        "The strength of the lattice is measured by the lattice energy: the energy required to separate one mole of the solid into gaseous ions. Coulomb’s law fixes what matters: the attraction is proportional to the product of the ionic charges and inversely proportional to the distance between ion centres, the sum of the two ionic radii. Charges enter as a product, so doubling both—from 1+/1− to 2+/2−—roughly quadruples the electrostatic term, while radius changes merely tune it. High lattice energies show up macroscopically as high melting points, hardness, and low volatility.",
      ],
      callout: "lattice energy ∝ |q₊ × q₋| ÷ (r₊ + r₋)",
    },
    {
      id: "bond-worked-lattice",
      type: "worked",
      eyebrow: "Worked example",
      title: "Rank three lattice energies from charges and radii",
      scenario:
        "Rank NaCl, KBr, and MgO by lattice energy. Ionic radii: Na⁺ 102 pm, K⁺ 138 pm, Mg²⁺ 72 pm, Cl⁻ 181 pm, Br⁻ 196 pm, O²⁻ 140 pm.",
      steps: [
        {
          label: "Compare the charge products first",
          decision:
            "Charges enter the Coulomb expression as a product, so they outweigh modest radius differences and should be checked before anything else.",
          working: "NaCl: 1 × 1 = 1; KBr: 1 × 1 = 1; MgO: 2 × 2 = 4",
        },
        {
          label: "Separate the equal-charge pair by distance",
          decision:
            "NaCl and KBr tie on charge, so the smaller ion-centre separation wins.",
          working: "NaCl: 102 + 181 = 283 pm; KBr: 138 + 196 = 334 pm → NaCl > KBr",
        },
        {
          label: "Confirm MgO on both counts",
          decision:
            "MgO has four times the charge product and also the shortest separation, so both factors point the same way.",
          working: "MgO separation: 72 + 140 = 212 pm, with charge product 4",
        },
        {
          label: "State the ranking and check against data",
          decision:
            "Measured values should reproduce the predicted order and show the charge effect dwarfing the radius effect.",
          working: "MgO ≈ 3800 > NaCl ≈ 790 > KBr ≈ 670 kJ mol⁻¹",
        },
      ],
      answer:
        "MgO ≫ NaCl > KBr. Doubling both charges roughly quadruples the electrostatic attraction, which matters far more than the differences in ionic radii.",
      plausibility:
        "Melting points track the ranking: MgO melts near 2850 °C, NaCl at 801 °C, and KBr at 734 °C—the doubly charged lattice is in a different league.",
    },
    {
      id: "bond-check-lattice",
      type: "check",
      eyebrow: "Your turn",
      title: "Pick the strongest lattice",
      prompt:
        "NaF and KF are built from 1+ and 1− ions; CaS and MgO are built from 2+ and 2− ions, with Mg²⁺ and O²⁻ smaller than Ca²⁺ and S²⁻. Which solid has the largest lattice energy?",
      options: ["NaF", "KF", "CaS", "MgO"],
      correctIndex: 3,
      explanation:
        "CaS and MgO share a charge product of 4, four times that of the fluorides, so one of them must win. Between the two, MgO has the smaller ions and hence the shorter ion-centre separation, giving it the largest lattice energy.",
      misconception:
        "Choosing NaF because its ions are small ignores that charge enters the Coulomb expression as a product and normally dominates: a compact 1+/1− lattice cannot match a 2+/2− one.",
    },
    {
      id: "bond-covalent",
      type: "concept",
      eyebrow: "Sharing instead",
      title: "A covalent bond sits at the minimum of a potential-energy curve",
      paragraphs: [
        "Between two non-metal atoms, neither partner gives up electrons cheaply, so transfer is unaffordable. Instead a pair of electrons occupies the region between the two nuclei, where it attracts both at once. That shared density is a covalent bond, and it lowers the energy just as surely as ion formation does.",
        "Plot the potential energy of two hydrogen atoms against the distance between their nuclei. Far apart, the energy is defined as zero. As they approach, attraction between each nucleus and the shared density lowers the energy. Push closer still and nucleus–nucleus repulsion rises steeply. Between the two regimes lies a minimum: its position is the bond length, 74 pm for H₂, and its depth is the bond energy, 436 kJ mol⁻¹—the energy needed to climb back out to separated atoms.",
        "More shared density means a deeper, closer minimum. Carbon–carbon bonds illustrate the pattern: a single bond has energy near 348 kJ mol⁻¹ and length 154 pm, a double bond about 614 kJ mol⁻¹ and 134 pm, and a triple bond about 839 kJ mol⁻¹ and 120 pm. Multiple bonds are stronger and shorter, though not in simple proportion.",
      ],
      callout: "bond length = position of the energy minimum · bond energy = its depth",
    },
    {
      id: "bond-visual-curve",
      type: "visual",
      eyebrow: "Energy against distance",
      title: "The potential-energy well of a covalent bond",
      introduction:
        "Follow the curve of potential energy against internuclear distance for two hydrogen atoms, from zero at large separation, down into the well, and up the steep repulsive wall at short range.",
      visual: "bond_energy",
      caption:
        "The minimum lies at 74 pm and 436 kJ mol⁻¹ below the separated atoms. Breaking the bond means climbing the full depth of the well; the molecule at room temperature merely vibrates near the bottom.",
    },
    {
      id: "bond-lewis",
      type: "concept",
      eyebrow: "Drawing the electrons",
      title: "Lewis structures follow a procedure and are judged by formal charge",
      paragraphs: [
        "A Lewis structure maps a molecule’s valence electrons as bonding pairs and lone pairs. Draw it by procedure, not intuition. First, sum the valence electrons of every atom, adding one per negative charge and subtracting one per positive charge. Second, join the atoms with single bonds, placing the least electronegative atom centrally—hydrogen is always terminal. Third, distribute the remaining electrons as lone pairs, outer atoms first, until each atom reaches an octet (two for hydrogen). Fourth, if the central atom still lacks an octet, convert a lone pair from an outer atom into an additional bond.",
        "When more than one structure obeys the rules, formal charge decides between them. An atom’s formal charge is its valence electron count minus its nonbonding electrons minus half its bonding electrons—the charge it would carry if every bond were split evenly. The formal charges must sum to the overall charge of the species. Prefer structures whose formal charges are closest to zero, and place any unavoidable negative formal charge on the most electronegative atom.",
      ],
      callout: "formal charge = valence e⁻ − nonbonding e⁻ − ½ bonding e⁻",
    },
    {
      id: "bond-worked-carbonate",
      type: "worked",
      eyebrow: "Worked example",
      title: "Build the carbonate ion and discover resonance",
      scenario:
        "Draw the Lewis structure of the carbonate ion, CO₃²⁻, assign formal charges, and interpret what the structure implies about the three carbon–oxygen bonds.",
      steps: [
        {
          label: "Count the valence electrons",
          decision:
            "Carbon contributes 4, each oxygen 6, and the 2− charge adds two more electrons to place.",
          working: "4 + (3 × 6) + 2 = 24 electrons",
        },
        {
          label: "Build the skeleton and complete outer octets",
          decision:
            "Carbon, the less electronegative atom, is central; three C–O single bonds use 6 electrons and the remaining 18 become three lone pairs on each oxygen.",
          working: "6 bonding + 18 nonbonding = 24 ✓, but carbon holds only 6 electrons",
        },
        {
          label: "Convert a lone pair into a double bond",
          decision:
            "The electron-deficient central atom gains its octet by sharing an existing oxygen lone pair, which adds no new electrons.",
          working: "one O lone pair → C=O; carbon now has 8 electrons",
        },
        {
          label: "Assign the formal charges",
          decision:
            "Formal charges test the structure: they must sum to the 2− overall charge.",
          working:
            "C: 4 − 0 − 4 = 0; double-bonded O: 6 − 4 − 2 = 0; each single-bonded O: 6 − 6 − 1 = −1; total = −2 ✓",
        },
        {
          label: "Recognise the resonance",
          decision:
            "Nothing selects which oxygen takes the double bond, so three equivalent structures exist and the real ion must be their symmetric blend.",
          working: "3 equivalent structures → each C–O bond order = 4/3",
        },
      ],
      answer:
        "Carbonate is the superposition of three equivalent structures: all three carbon–oxygen bonds are identical, each with bond order 4/3, and the 2− charge is shared equally across the three oxygens.",
      plausibility:
        "Experiment agrees: all three bonds measure 129 pm, between a typical C–O single bond (143 pm) and a C=O double bond (122 pm).",
    },
    {
      id: "bond-check-contributor",
      type: "check",
      eyebrow: "Judge by formal charge",
      title: "Choose the major resonance contributor",
      prompt:
        "Dinitrogen monoxide, N₂O, is linear with the atom order N–N–O. Three structures obey the octet rule: (i) N≡N–O with formal charges 0, +1, −1; (ii) N=N=O with formal charges −1, +1, 0; (iii) N–N≡O with formal charges −2, +1, +1. Which contributes most to the real molecule?",
      options: [
        "Structure (i), because its formal charges are small and the −1 rests on oxygen, the most electronegative atom",
        "Structure (ii), because a symmetrical pattern of two double bonds is always the most stable arrangement",
        "Structure (iii), because oxygen forms the greatest number of bonds in it",
        "All three contribute equally, because the molecule flips rapidly from one structure to the next",
      ],
      correctIndex: 0,
      explanation:
        "Both selection rules favour structure (i): its formal charges are no larger than ±1, and the negative charge sits on oxygen rather than on the less electronegative nitrogen, as it does in (ii). Structure (iii) fails badly, with a −2 concentration and a positive charge on oxygen.",
      misconception:
        "Resonance is not flipping. The molecule has one real, unchanging electron distribution—a weighted blend of the contributors—and structures that are not equivalent contribute unequally to it.",
    },
    {
      id: "bond-resonance-polarity",
      type: "concept",
      eyebrow: "Between the boxes",
      title: "Delocalisation and polarity blur the ionic–covalent divide",
      paragraphs: [
        "Whenever several valid Lewis structures differ only in where the electrons sit, the real species is a single blended structure with those electrons delocalised—spread over three or more atoms rather than confined to one bond. Nitrate, NO₃⁻, repeats the carbonate pattern exactly: 24 electrons, three equivalent structures, three identical bonds of order 4/3. Delocalisation lowers the energy, which is why these ions are so stable, and the separate drawn structures are tools of notation, not states the ion visits.",
        "Even a single shared pair is rarely shared evenly. When the two atoms differ in electronegativity, the density shifts toward the stronger attractor, leaving partial charges δ− and δ+ and giving the bond a dipole moment, measured in debye—1.08 D for HCl. As the electronegativity difference grows, the bond passes smoothly from nonpolar covalent through polar covalent toward ionic. Courses usually draw the dividing line somewhere between ΔEN 1.7 and 2.0, and the spread of that figure is the point: the line is a labelling convention chosen for convenience, not a physical discontinuity that anything measurable crosses. Bond character is a continuum, and “ionic” and “covalent” name its ends, not two separate boxes.",
      ],
      callout: "ΔEN ≈ 0 → nonpolar covalent · intermediate → polar covalent · large → ionic",
    },
    {
      id: "bond-metallic",
      type: "concept",
      eyebrow: "The third limit",
      title: "Metals are cation lattices in a sea of delocalised electrons",
      paragraphs: [
        "Metal atoms hold their valence electrons loosely—their ionisation energies are low—and in the solid those electrons detach from individual atoms altogether. The result is a lattice of cations immersed in a sea of delocalised electrons belonging to the whole crystal. Every cation is attracted to the sea around it, and because the sea has no preferred direction, metallic bonding is non-directional.",
        "This one model explains the signature metallic properties. Electrical conduction: the delocalised electrons are mobile, so a potential difference sets them drifting through the solid—no ions need move, which is why metals conduct as solids while ionic compounds do not. Malleability: when planes of cations slide under stress, the electron sea readjusts and bonding survives, so the metal deforms instead of shattering; in an ionic crystal the same slide forces like charges together and the crystal cleaves. Strength rises with the number of electrons each atom donates to the sea: sodium, giving one, is soft and melts at 98 °C, while magnesium, giving two into a smaller cation lattice, melts at 650 °C.",
      ],
      callout: "mobile delocalised electrons → conduction · non-directional bonding → malleability",
    },
    {
      id: "bond-check-lengths",
      type: "check",
      eyebrow: "Read the measurements",
      title: "Interpret three identical bond lengths",
      prompt:
        "Typical carbon–oxygen bonds measure about 143 pm for C–O and 122 pm for C=O. In the carbonate ion, all three carbon–oxygen bonds measure 129 pm. What does this show?",
      options: [
        "The ion alternates rapidly between one double and two single bonds, and the instrument records a blur",
        "The measurement must be in error, because bond orders can only take whole-number values",
        "All three are ordinary single bonds, compressed below their normal length by the 2− charge",
        "All three bonds are identical, with an order between one and two, because the bonding electrons are delocalised over the ion",
      ],
      correctIndex: 3,
      explanation:
        "A length between the single-bond and double-bond values, shared identically by all three bonds, is exactly what delocalisation predicts: each bond has order 4/3, more than a single bond and less than a double. The ion has one fixed, symmetric structure.",
      misconception:
        "The “rapid alternation” picture treats resonance structures as real states the ion switches between. They are drawings; the delocalised ion never possesses one localised double bond, even briefly.",
    },
    {
      id: "bond-check-conductivity",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Classify three unknown solids from conduction data",
      prompt:
        "Three unlabelled solids are tested. X melts at 776 °C and conducts electricity only when molten or dissolved in water. Y conducts well as a solid, and flattens under a hammer. Z melts at 44 °C and conducts in no state. What are they?",
      options: [
        "X is metallic, Y is ionic, Z is a covalent molecular solid",
        "X is a covalent molecular solid, Y is metallic, Z is ionic",
        "X is ionic, Y is metallic, Z is a covalent molecular solid",
        "X is ionic, Y is a covalent network solid, Z is metallic",
      ],
      correctIndex: 2,
      explanation:
        "Conduction requires mobile charge carriers. X conducts only when its ions are freed by melting or dissolving—an ionic solid. Y conducts as a solid through its delocalised electrons and deforms rather than cleaving—a metal. Z has no charged carriers in any state and its weak intermolecular forces give a low melting point—a molecular solid.",
      misconception:
        "“It conducts, so it is a metal” confuses the two carrier types: molten X conducts through mobile ions, not electrons. The conditions under which conduction appears, not conduction alone, identify the bonding.",
    },
    {
      id: "bond-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "One electrostatic principle, three limiting structures",
      points: [
        "A bond is any arrangement of nuclei and electrons with lower energy than the separated atoms; energy, not the octet, is the driving currency.",
        "Lattice energy rises with the product of the ionic charges and falls with the sum of the radii; charges dominate.",
        "Bond length and bond energy are the position and depth of the minimum in a bond’s potential-energy curve.",
        "Draw Lewis structures by procedure—count, connect, complete, then form multiple bonds—and judge rivals by formal charge.",
        "Resonance means delocalisation: identical fractional-order bonds, as the carbonate ion’s three 129 pm bonds confirm.",
        "The metallic electron sea explains solid-state conduction and malleability, and electronegativity difference places any bond on the ionic–covalent continuum.",
      ],
      transferRule:
        "Classify any unfamiliar substance by asking where its electrons are: held on ions, shared in local pairs, delocalised over a lattice, or somewhere in between.",
      nextLessonId: "lesson.chemistry.molecular_shape",
    },
  ],
};

const molecularShape: Lesson = {
  id: "lesson.chemistry.molecular_shape",
  slug: "molecular-shape-and-polarity",
  number: "3.3",
  stageId: "stage.chemistry_structure",
  discipline: "chemistry",
  title: "Molecular shape, hybridisation, and polarity",
  summary:
    "Predict three-dimensional molecular geometry from electron-domain repulsion, connect it to hybridisation and to σ and π bonding, and decide whether a molecule is polar by summing its bond dipoles.",
  estimatedMinutes: 30,
  reviewStatus: "unreviewed",
  objectives: [
    "Predict electron-domain and molecular geometries for two to six domains using VSEPR.",
    "Account for bond-angle compression by the stronger repulsion of lone pairs.",
    "Assign sp, sp², and sp³ hybridisation from the number of electron domains.",
    "Distinguish σ and π bonds and explain restricted rotation about double bonds.",
    "Decide whether a molecule is polar by adding its bond dipoles as vectors.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.bonding"],
  blocks: [
    {
      id: "shape-vsepr",
      type: "concept",
      eyebrow: "From flat to solid",
      title: "Electron domains repel, and molecular shape follows",
      paragraphs: [
        "A Lewis structure is flat, but molecules are three-dimensional, and their shapes decide their polarity, their reactivity, and whether an enzyme’s active site will accept them. Shape is predicted by valence-shell electron-pair repulsion, VSEPR: the electron domains around a central atom—where a domain is one lone pair or one bond, whether that bond is single, double, or triple—repel one another electrostatically and settle into the arrangement that keeps them as far apart as possible.",
        "Lone pairs and bonding pairs do not repel equally. A bonding pair is stretched between two nuclei, but a lone pair is held by one nucleus only, so it sits closer in and spreads wider, repelling its neighbours more strongly. Lone pairs therefore compress the angles between the remaining bonds: methane’s angle is the ideal 109.5°, ammonia’s is 107°, and water’s is 104.5°, as zero, one, then two lone pairs push in. Note the naming rule: the electron-domain geometry counts every domain, but the molecular shape is named from atom positions alone.",
      ],
      callout: "count the domains → arrange the domains → name the shape by atoms only",
    },
    {
      id: "shape-visual",
      type: "visual",
      eyebrow: "Five parents",
      title: "Two to six domains give five parent geometries",
      introduction:
        "Look at the arrangements that maximise separation: 2 domains linear at 180°, 3 trigonal planar at 120°, 4 tetrahedral at 109.5°, 5 trigonal bipyramidal with distinct 90° and 120° positions, and 6 octahedral at 90°.",
      visual: "shape",
      caption:
        "Every real molecular shape is one of these parents with zero or more corners occupied by invisible lone pairs; the lone pairs set the geometry but are omitted from the shape’s name.",
    },
    {
      id: "shape-geometries",
      type: "concept",
      eyebrow: "The full catalogue",
      title: "Lone pairs turn five parents into the named molecular shapes",
      paragraphs: [
        "For two, three, and four domains the derivations are short. Two bonding domains give a linear molecule at 180°, like CO₂. Three domains give trigonal planar at 120°, like BF₃; replace one bond with a lone pair and the molecule is bent, with an angle squeezed just below 120°, like SO₂. Four domains give tetrahedral at 109.5°, like CH₄; one lone pair gives trigonal pyramidal at about 107°, like NH₃; two lone pairs give bent at about 104.5°, like H₂O.",
        "Five and six domains admit expanded octets, possible for elements from period 3 onward. The trigonal bipyramid has two kinds of position—axial, with three neighbours at 90°, and equatorial, with only two—so lone pairs always take the roomier equatorial sites: one lone pair gives the see-saw shape, two give T-shaped, three give linear. The octahedron’s six positions are equivalent; one lone pair gives square pyramidal, and two lone pairs sit opposite each other to give square planar, as in XeF₄.",
      ],
      callout: "lone pairs repel hardest: they compress angles and claim the roomiest positions",
    },
    {
      id: "shape-worked-ammonia",
      type: "worked",
      eyebrow: "Worked example",
      title: "Predict the shape of ammonia from its formula",
      scenario:
        "Predict the electron-domain geometry, the molecular shape, and the approximate bond angle of ammonia, NH₃. Nitrogen is in group 15 and contributes five valence electrons.",
      steps: [
        {
          label: "Count the valence electrons",
          decision:
            "The Lewis structure needs the total electron count before anything can be placed.",
          working: "5 + (3 × 1) = 8 electrons",
        },
        {
          label: "Draw the Lewis structure",
          decision:
            "Three N–H bonds use six electrons, and the remaining two form a lone pair on nitrogen.",
          working: "3 bonding pairs + 1 lone pair on N",
        },
        {
          label: "Count domains and select the parent geometry",
          decision:
            "Four domains—three bonds and one lone pair—spread out as far as possible, which is the tetrahedral arrangement.",
          working: "4 domains → tetrahedral electron-domain geometry",
        },
        {
          label: "Name the shape and adjust the angle",
          decision:
            "The shape is named from the three atom positions only, and the lone pair’s stronger repulsion squeezes the bonds together.",
          working: "trigonal pyramidal; H–N–H angle just below 109.5°, measured at 107°",
        },
      ],
      answer:
        "Ammonia is trigonal pyramidal with bond angles of about 107°: a tetrahedral arrangement of four domains, one corner of which is an invisible lone pair.",
      plausibility:
        "The angle should sit between methane’s 109.5° (no lone pairs) and water’s 104.5° (two lone pairs), and one lone pair’s single compression puts it exactly there.",
    },
    {
      id: "shape-check-h2s",
      type: "check",
      eyebrow: "Your turn",
      title: "Predict a shape from a formula",
      prompt:
        "Sulfur is in group 16 with six valence electrons. What is the molecular shape of hydrogen sulfide, H₂S?",
      options: [
        "Linear, with a 180° angle",
        "Tetrahedral, with a 109.5° angle",
        "Trigonal planar, with a 120° angle",
        "Bent, with an angle below 109.5°",
      ],
      correctIndex: 3,
      explanation:
        "The eight electrons form two S–H bonds and two lone pairs: four domains in a tetrahedral arrangement. Only the two atom positions name the shape—bent—and the two lone pairs compress the angle below the tetrahedral ideal.",
      misconception:
        "Calling it tetrahedral names the electron-domain geometry instead of the molecular shape; calling it linear like CO₂ forgets that CO₂ is linear only because its carbon carries no lone pairs.",
    },
    {
      id: "shape-hybrid",
      type: "concept",
      eyebrow: "Orbitals to match",
      title: "Hybridisation and σ/π bonding put orbitals where the domains point",
      paragraphs: [
        "The s and p orbitals of an isolated atom do not point where VSEPR says the domains sit, so bonding is described using hybrid orbitals: mathematical mixtures of one s orbital with one, two, or three p orbitals. Two domains call for two sp hybrids at 180°; three domains for three sp² hybrids at 120°; four domains for four sp³ hybrids at 109.5°. Hybridisation is a description fitted to the known geometry, not an event the atom performs, and for five or six domains the simple s-and-p mixing scheme is no longer adequate—those molecules need a fuller treatment than this course provides.",
        "Bonds themselves come in two kinds. A σ bond is end-on orbital overlap along the internuclear axis; its density is cylindrically symmetric about that axis, so the two ends can spin relative to each other without loss of overlap—single bonds rotate freely. A π bond is side-on overlap of two unhybridised p orbitals, with density above and below the axis. A double bond is one σ plus one π; a triple bond is one σ plus two π. Twisting a double bond by 90° would destroy the π overlap, at a cost of roughly 260 kJ mol⁻¹—far beyond thermal energies—so double bonds cannot rotate, and groups fixed on either side stay fixed.",
      ],
      callout: "single bond = σ · double bond = σ + π · triple bond = σ + 2π",
    },
    {
      id: "shape-worked-sf4",
      type: "worked",
      eyebrow: "Worked example",
      title: "Predict the shape of sulfur tetrafluoride",
      scenario:
        "Predict the molecular shape of SF₄ and describe how its bond angles deviate from the ideal. Sulfur contributes six valence electrons and each fluorine seven.",
      steps: [
        {
          label: "Count the valence electrons",
          decision:
            "Every electron must be placed before domains can be counted.",
          working: "6 + (4 × 7) = 34 electrons",
        },
        {
          label: "Distribute the electrons",
          decision:
            "Four S–F bonds use 8 electrons and each fluorine takes three lone pairs, using 24 more; the last two electrons must sit on sulfur as a lone pair, giving it an expanded octet—allowed from period 3 onward.",
          working: "8 + 24 + 2 = 34 ✓ → 4 bonds + 1 lone pair on S",
        },
        {
          label: "Count domains and pick the parent",
          decision:
            "Five domains adopt the trigonal bipyramidal arrangement, the only parent with two distinct kinds of position.",
          working: "5 domains → trigonal bipyramid: 2 axial sites, 3 equatorial sites",
        },
        {
          label: "Place the lone pair",
          decision:
            "The lone pair, the strongest repeller, takes the site with fewer 90° neighbours: an equatorial position touches two domains at 90°, an axial position three.",
          working: "lone pair equatorial → the four F atoms form a see-saw",
        },
        {
          label: "Predict the angle distortions",
          decision:
            "The lone pair pushes every bonding domain away from itself, closing the ideal angles down.",
          working: "axial F–S–F bends below 180° (measured 173°); equatorial F–S–F closes below 120° (measured 102°)",
        },
      ],
      answer:
        "SF₄ is see-saw shaped: a trigonal bipyramid with its lone pair in an equatorial site, its axial fluorines bent to about 173° and its equatorial pair closed to about 102°.",
      plausibility:
        "All 34 electrons are accounted for, and both measured angles fall short of the ideals in exactly the direction a strongly repelling lone pair predicts.",
    },
    {
      id: "shape-check-co2",
      type: "check",
      eyebrow: "Apply the framework",
      title: "Hybridisation and π count in carbon dioxide",
      prompt:
        "In carbon dioxide, O=C=O, what is the hybridisation of the carbon atom, and how many π bonds does the molecule contain?",
      options: [
        "sp, with two π bonds",
        "sp², with one π bond",
        "sp³, with no π bonds",
        "sp², with two π bonds",
      ],
      correctIndex: 0,
      explanation:
        "Each double bond is one domain, so carbon has two domains: linear geometry and sp hybridisation, with two p orbitals left unhybridised. Each C=O contributes one σ and one π bond, so the molecule holds two π bonds in perpendicular planes.",
      misconception:
        "Counting four bonding pairs and concluding sp³ counts bonds instead of domains: a double bond is a single electron domain, however many electron pairs it contains.",
    },
    {
      id: "shape-check-rotation",
      type: "check",
      eyebrow: "Why bonds lock",
      title: "Explain cis and trans isomers",
      prompt:
        "But-2-ene exists as separable cis and trans compounds that do not interconvert at room temperature, yet butane rotates freely about its central C–C bond. What explains the difference?",
      options: [
        "The σ framework of a double bond is stronger, and rotation would have to break a σ bond",
        "The methyl groups on but-2-ene are too heavy to swing around the double bond",
        "Rotation about C=C would destroy the π overlap, which costs far more energy than is thermally available",
        "The cis and trans forms are really the same compound drawn from different angles",
      ],
      correctIndex: 2,
      explanation:
        "A σ bond is cylindrically symmetric, so rotation about a single bond costs almost nothing. The π bond’s side-on overlap exists only while the two p orbitals stay parallel; twisting 90° breaks it, a barrier of roughly 260 kJ mol⁻¹, so each isomer is trapped as a distinct compound.",
      misconception:
        "Rotation about a double bond leaves the σ bond intact—it is the π component, not the σ, that the twist destroys, which is why single bonds with only σ character rotate freely.",
    },
    {
      id: "shape-polarity",
      type: "concept",
      eyebrow: "Adding the arrows",
      title: "Molecular polarity is the vector sum of the bond dipoles",
      paragraphs: [
        "Every polar bond is a small arrow: a dipole with magnitude set by the electronegativity difference and direction pointing toward the more electronegative atom. Whether the molecule as a whole is polar depends on the vector sum of those arrows, and the vector sum depends on geometry. Polar bonds are necessary for a polar molecule, but they are not sufficient—symmetry can cancel them completely.",
        "Three canonical cases settle most questions. CO₂ has two strongly polar C=O bonds, but its linear geometry points them in exactly opposite directions, so they cancel and the molecule is nonpolar. H₂O is bent, so its two O–H dipoles add instead of cancelling, giving one of chemistry’s most polar small molecules at 1.85 D. CCl₄ has four polar C–Cl bonds, yet perfect tetrahedral symmetry makes the four vectors sum to zero—nonpolar despite its polar bonds. The working rule: identical bonds arranged with full symmetry cancel; lone-pair-distorted shapes or mixed substituents usually leave a net dipole.",
      ],
      callout: "polar molecule = polar bonds + a geometry that fails to cancel them",
    },
    {
      id: "shape-check-angle",
      type: "check",
      eyebrow: "Read the angle",
      title: "Infer domains from a measured angle",
      prompt:
        "Spectroscopy shows that a molecule AB₂ has a bond angle of 117°. Which description of the central atom A fits this measurement?",
      options: [
        "Two electron domains and no lone pairs, giving a linear molecule",
        "Three electron domains including one lone pair, giving a bent molecule with an angle slightly below 120°",
        "Four electron domains including two lone pairs, giving a bent molecule with an angle below 109.5°",
        "Three bonding domains and no lone pairs, giving a trigonal planar molecule",
      ],
      correctIndex: 1,
      explanation:
        "An angle of 117° sits just under the trigonal planar ideal of 120°—the signature of a three-domain parent with one lone pair pressing the two bonds together, as in SO₂ and ozone. Two lone pairs on a four-domain parent would push the angle down near or below 104.5°.",
      misconception:
        "“Bent means four domains like water” reads the shape name and ignores the angle. Both parents give bent molecules; the size of the angle—just below 120° versus well below 109.5°—tells you which parent you have.",
    },
    {
      id: "shape-check-chcl3",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Predict the polarity of an unfamiliar molecule",
      prompt:
        "Tetrachloromethane, CCl₄, is nonpolar. Replacing one chlorine with hydrogen gives trichloromethane, CHCl₃, once used as an anaesthetic. Is CHCl₃ polar?",
      options: [
        "Nonpolar, because the molecule is still tetrahedral and tetrahedral molecules are always nonpolar",
        "Polar, because the bond dipoles no longer cancel, leaving a net dipole along the H–C axis",
        "Nonpolar, because the three remaining C–Cl dipoles cancel one another completely",
        "Polar, because every molecule that contains chlorine atoms is polar",
      ],
      correctIndex: 1,
      explanation:
        "Cancellation in CCl₄ requires four identical dipoles at perfect tetrahedral symmetry. Three C–Cl dipoles at tetrahedral angles leave a nonzero resultant along the fourth direction, and the nearly nonpolar C–H bond cannot balance it, so CHCl₃ carries a net dipole—measured at 1.04 D.",
      misconception:
        "It is the symmetry of identical substituents, not the tetrahedral shape itself, that cancels dipoles: keep the shape but break the symmetry and the polarity returns.",
    },
    {
      id: "shape-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Repulsion sets the geometry, and geometry sets the polarity",
      points: [
        "Electron domains—each bond of any order, each lone pair—repel into five parent geometries: linear, trigonal planar, tetrahedral, trigonal bipyramidal, octahedral.",
        "Lone pairs repel more strongly than bonding pairs: they compress bond angles and take equatorial or opposite positions in the larger parents.",
        "Molecular shapes are named from atom positions only: bent, trigonal pyramidal, see-saw, T-shaped, square pyramidal, square planar.",
        "Hybridisation labels match the domain count—sp for two, sp² for three, sp³ for four—and fit orbitals to the VSEPR geometry.",
        "σ bonds rotate freely; a π bond’s side-on overlap locks rotation, which is why double bonds support cis and trans isomers.",
        "Molecular polarity is the vector sum of bond dipoles: full symmetry of identical bonds cancels them, and anything less usually does not.",
      ],
      transferRule:
        "For any formula: count the electron domains, place lone pairs in the roomiest positions, name the shape from the atoms, then add the bond dipoles as vectors.",
      nextLessonId: "lesson.chemistry.intermolecular_forces",
    },
  ],
};

const intermolecularForces: Lesson = {
  id: "lesson.chemistry.intermolecular_forces",
  slug: "intermolecular-forces-and-properties",
  number: "3.4",
  stageId: "stage.chemistry_structure",
  discipline: "chemistry",
  title: "Intermolecular forces and physical properties",
  summary:
    "Distinguish the forces between molecules from the bonds within them, and use dispersion, dipole–dipole, hydrogen bonding, and ion–dipole interactions to predict boiling points and solubility.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish intermolecular forces from covalent bonds when explaining physical changes.",
    "Explain the origin of dispersion forces and predict how they vary with molar mass and molecular shape.",
    "Apply the strict requirements for hydrogen bonding and recognise its consequences for boiling points.",
    "Rank boiling points from molecular structure and justify anomalies such as water and HF.",
    "Explain viscosity, surface tension, and vapour pressure with the same inventory of forces.",
    "Predict solubility by weighing the interactions gained against the interactions lost.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.molecular_shape"],
  blocks: [
    {
      id: "imf-distinction",
      type: "concept",
      eyebrow: "Two kinds of breaking",
      title: "Boiling breaks the forces between molecules, not the bonds within them",
      paragraphs: [
        "When water boils, every H₂O molecule leaves the liquid intact. The covalent O–H bonds inside each molecule, worth about 463 kJ mol⁻¹ apiece, are untouched; what is overcome are the attractions between neighbouring molecules, and vaporising a mole of water costs only about 41 kJ. Forces within a molecule are intramolecular—covalent bonds. Forces between molecules are intermolecular, and they are weaker by one to two orders of magnitude. Keeping the two separate is the single most important idea in this lesson.",
        "The separation explains which properties report on which forces. Melting point, boiling point, viscosity, and solubility are physical properties: molecules change neighbours but keep their identity, so these properties measure intermolecular forces. Chemical reactivity breaks covalent bonds and measures them instead. The two strengths are independent: methane’s C–H bonds are strong at about 413 kJ mol⁻¹, yet methane boils at −162 °C because the attractions between its molecules are feeble.",
      ],
      callout: "covalent bonds: hundreds of kJ mol⁻¹ · intermolecular forces: units to tens of kJ mol⁻¹",
    },
    {
      id: "imf-visual",
      type: "visual",
      eyebrow: "The force inventory",
      title: "Three attractions operate between molecules",
      introduction:
        "Compare the three attractions in order of typical strength: dispersion forces between instantaneous dipoles, dipole–dipole forces between permanent dipoles, and hydrogen bonds between an N–H, O–H, or H–F hydrogen and a lone pair.",
      visual: "intermolecular",
      caption:
        "All three are electrostatic; they differ only in whether the interacting charges are fleeting, permanent, or—adding ion–dipole forces in solutions—full ionic charges.",
    },
    {
      id: "imf-dispersion",
      type: "concept",
      eyebrow: "The universal force",
      title: "Instantaneous dipoles give every molecule a dispersion attraction",
      paragraphs: [
        "Electrons are in constant motion, so at any instant a molecule’s electron cloud is slightly lopsided: one side momentarily δ−, the other δ+. This instantaneous dipole distorts the cloud of a neighbouring molecule, inducing a matching dipole, and the two attract. The fluctuations stay correlated, so a net attraction survives the averaging: the London dispersion force. Because it needs nothing but an electron cloud, it acts between all molecules—even single noble-gas atoms and perfectly nonpolar molecules.",
        "Its strength tracks polarisability: how easily the cloud distorts. Large clouds with many loosely held electrons distort readily, so dispersion grows with electron count, and therefore broadly with molar mass. Shape matters too: long, straight molecules can lie alongside one another and interact along their whole length, while compact, branched molecules of the same formula touch only at small patches, so they attract less. On top of dispersion, molecules with permanent dipoles align δ+ to δ− and gain a further dipole–dipole attraction—a difference that shows up clearly when molar masses are comparable.",
      ],
      callout: "dispersion grows with electron count and surface contact; dipole–dipole adds on top for polar molecules",
    },
    {
      id: "imf-worked-halogens",
      type: "worked",
      eyebrow: "Worked example",
      title: "Explain the boiling points of the halogens",
      scenario:
        "The halogens boil at −188 °C (F₂), −34 °C (Cl₂), 59 °C (Br₂), and 184 °C (I₂). Explain the trend, and account for their states at room temperature.",
      steps: [
        {
          label: "Classify the forces available",
          decision:
            "Each halogen is a homonuclear diatomic, so the electronegativity difference within each bond is zero: no permanent dipole, no hydrogen bonding—dispersion is the only intermolecular force present.",
          working: "F₂, Cl₂, Br₂, I₂: nonpolar → dispersion only",
        },
        {
          label: "Compare the polarisabilities",
          decision:
            "With one force in play, its strength decides everything, and dispersion follows the size of the electron cloud.",
          working: "electrons per molecule: F₂ 18, Cl₂ 34, Br₂ 70, I₂ 106",
        },
        {
          label: "Predict and confirm the trend",
          decision:
            "More electrons mean larger instantaneous dipoles and stronger attraction, so boiling points should rise down the group.",
          working: "−188 °C < −34 °C < 59 °C < 184 °C ✓",
        },
        {
          label: "Connect to room-temperature states",
          decision:
            "A substance is a gas at 25 °C if its boiling point lies below 25 °C, a liquid if just above, a solid if its melting point is above 25 °C.",
          working: "F₂ and Cl₂ gases, Br₂ a liquid, I₂ a solid — as observed",
        },
      ],
      answer:
        "Dispersion is the only force between halogen molecules, and it strengthens with the growing electron cloud down the group, so the boiling points climb from −188 °C to 184 °C and the states run gas, gas, liquid, solid.",
      plausibility:
        "No other force is available—these molecules are nonpolar and have no N–H, O–H, or H–F hydrogens—so the trend must track cloud size, and it does, monotonically.",
    },
    {
      id: "imf-check-noble",
      type: "check",
      eyebrow: "Your turn",
      title: "Explain a noble-gas trend",
      prompt:
        "The noble gases boil at −269 °C (He), −246 °C (Ne), −186 °C (Ar), and −153 °C (Kr). Why does the boiling point rise down the group?",
      options: [
        "Heavier atoms move more slowly at a given temperature, so they escape the liquid less often",
        "Larger electron clouds are more polarisable, so instantaneous dipoles are bigger and dispersion forces stronger",
        "The heavier noble gases form covalent diatomic molecules, which are harder to separate",
        "The increasing nuclear charge attracts neighbouring atoms directly across the gap between them",
      ],
      correctIndex: 1,
      explanation:
        "Noble-gas atoms are nonpolar and form no bonds, so only dispersion holds the liquid together. Descending the group multiplies the electron count, the clouds grow more polarisable, and the instantaneous-dipole attractions strengthen—so more thermal energy is needed to boil.",
      misconception:
        "Escape is not about speed: at a given temperature all substances share the same average kinetic energy. Boiling point measures the strength of the attractions to be overcome, not how fast the particles happen to move.",
    },
    {
      id: "imf-hbond",
      type: "concept",
      eyebrow: "The strict special case",
      title: "Hydrogen bonding needs an N–H, O–H, or F–H donor and a lone-pair acceptor",
      paragraphs: [
        "When hydrogen is covalently bonded to nitrogen, oxygen, or fluorine—small, strongly electronegative atoms—the bonding electrons are pulled so far away that the hydrogen is left as an almost bare, intensely δ+ proton with no inner electrons to shield it. That exposed hydrogen attracts a lone pair on the N, O, or F of a neighbouring molecule. This is a hydrogen bond, and its requirement is strict on both sides: a donor hydrogen attached directly to N, O, or F, and an acceptor lone pair on N, O, or F. At 10 to 40 kJ mol⁻¹ it is the strongest intermolecular force, yet still roughly ten times weaker than a covalent bond.",
        "Hydrogen bonding announces itself as anomalies. Boiling points normally fall with molar mass within a family, yet H₂O boils at 100 °C against H₂S at −60 °C, HF at 20 °C against HCl at −85 °C, and NH₃ at −33 °C against PH₃ at −88 °C: in each pair the lighter hydride boils enormously higher because it hydrogen-bonds and its heavier relative cannot. Water is the extreme case—two O–H donors and two lone pairs let each molecule form up to four hydrogen bonds, building a three-dimensional network that also explains its high specific heat capacity and the open, low-density lattice of ice.",
      ],
      callout: "hydrogen bond: H bonded to N, O, or F, attracted to a lone pair on N, O, or F",
    },
    {
      id: "imf-worked-ranking",
      type: "worked",
      eyebrow: "Worked example",
      title: "Rank boiling points at matched molar mass",
      scenario:
        "Rank the boiling points of propane (CH₃CH₂CH₃, M = 44 g mol⁻¹), dimethyl ether (CH₃OCH₃, M = 46 g mol⁻¹), and ethanol (CH₃CH₂OH, M = 46 g mol⁻¹), and justify the order.",
      steps: [
        {
          label: "Control for dispersion",
          decision:
            "The three molar masses are nearly equal, so the electron counts and hence the dispersion forces are similar—any large boiling-point difference must come from other forces.",
          working: "M = 44, 46, 46 g mol⁻¹ → dispersion approximately matched",
        },
        {
          label: "Inventory each molecule's forces",
          decision:
            "Classify by polarity and by the strict hydrogen-bond requirement: a hydrogen on N, O, or F.",
          working:
            "propane: nonpolar, dispersion only · dimethyl ether: bent C–O–C, polar, dipole–dipole, but every H is on carbon → no donor · ethanol: O–H present → hydrogen bonds",
        },
        {
          label: "Rank by the strongest force present",
          decision:
            "With dispersion matched, the strongest additional force sets the order: nothing < dipole–dipole < hydrogen bonding.",
          working: "propane < dimethyl ether < ethanol",
        },
        {
          label: "Check against the data",
          decision:
            "The measured values should confirm the order and show the hydrogen-bonding step as the largest.",
          working: "−42 °C < −24 °C < 78 °C ✓",
        },
      ],
      answer:
        "Propane (−42 °C) boils lowest, dimethyl ether (−24 °C) next, and ethanol (78 °C) highest: with dispersion matched, the dipole of the ether adds a little, and ethanol’s hydrogen bonding adds over a hundred degrees.",
      plausibility:
        "Dimethyl ether and ethanol are isomers—identical formula C₂H₆O, identical molar mass—yet boil 102 °C apart, which isolates the effect of the O–H group beyond any doubt.",
    },
    {
      id: "imf-check-selfhbond",
      type: "check",
      eyebrow: "Apply the rule",
      title: "Who can hydrogen-bond with itself?",
      prompt:
        "Which of the following can form hydrogen bonds with other molecules of its own kind?",
      options: ["CH₄", "CH₃F", "CH₃OCH₃", "CH₃NH₂"],
      correctIndex: 3,
      explanation:
        "Methylamine has an N–H hydrogen as donor and a nitrogen lone pair as acceptor, so its molecules hydrogen-bond to one another. CH₃F and CH₃OCH₃ carry acceptor lone pairs but every hydrogen sits on carbon, so neither has a donor; CH₄ has neither donor nor acceptor.",
      misconception:
        "“It contains hydrogen and fluorine, so it hydrogen-bonds” misses the strict requirement: the hydrogen must be covalently bonded to the N, O, or F itself, not merely present somewhere in the same molecule.",
    },
    {
      id: "imf-bulk",
      type: "concept",
      eyebrow: "Same forces, more properties",
      title: "Viscosity, surface tension, and vapour pressure report the same forces",
      paragraphs: [
        "Viscosity is a liquid’s resistance to flow. Flowing means molecules sliding past neighbours, continually breaking and reforming attractions, so stronger intermolecular forces mean higher viscosity—glycerol, whose three O–H groups hydrogen-bond in every direction, is roughly a thousand times more viscous than water. Surface tension arises because a molecule at the surface has neighbours beside and below but none above: it is pulled inward, so the liquid behaves as if wrapped in a taut skin and minimises its area. Water’s hydrogen-bond network gives it an unusually high surface tension—high enough that the wet inner surfaces of the lung’s air sacs would resist inflation if a secreted surfactant did not lower it.",
        "Vapour pressure looks at the losing side of the same contest. In a closed container, the fraction of molecules energetic enough to escape the liquid sets an equilibrium pressure of vapour above it. Stronger attractions hold more molecules back, so vapour pressure falls as intermolecular forces rise, and a liquid boils when its vapour pressure reaches the external pressure. That is why strongly attracting liquids boil high, and why any liquid boils cooler on a mountain, where the external pressure is lower.",
      ],
      callout: "stronger forces → higher viscosity and surface tension, lower vapour pressure, higher boiling point",
    },
    {
      id: "imf-solutions",
      type: "concept",
      eyebrow: "Like dissolves like, explained",
      title: "Dissolving is a competition of interactions, not a rule of thumb",
      paragraphs: [
        "Dissolving replaces interactions: solute–solute and some solvent–solvent attractions are given up, and solute–solvent attractions are gained. Dissolution is favourable when the new interactions roughly match or beat the old ones. Ionic solids in water show the strongest case: each ion attracts the charged ends of water dipoles—δ− oxygens around cations, δ+ hydrogens around anions—forming hydration shells. This ion–dipole force is the strongest interaction a neutral molecule can offer, and the energy it releases can repay the lattice energy it must overcome; the balance of those two large terms decides whether a given salt dissolves.",
        "“Like dissolves like” is this competition restated. Polar and hydrogen-bonding solutes dissolve in water because the contacts they form replace like with like. A nonpolar solute fails in water not because it repels water—there is no repulsion, only weak attraction—but because wedging it in sacrifices strong water–water hydrogen bonds and returns only feeble dispersion. Between two nonpolar substances there is no such penalty: dispersion is exchanged for dispersion, and they mix freely.",
        "Alcohols display the competition inside one molecule. The O–H head hydrogen-bonds with water; the hydrocarbon tail offers only dispersion. Methanol through propan-1-ol are miscible with water in all proportions, but as the tail lengthens it dominates: butan-1-ol manages 7.4 g per 100 g of water, and hexan-1-ol only 0.6 g, sliding toward the near-insolubility of the alkanes.",
      ],
      callout: "dissolution is favourable when interactions gained match or beat interactions lost",
    },
    {
      id: "imf-check-alcohols",
      type: "check",
      eyebrow: "Read the table",
      title: "Explain a solubility series",
      prompt:
        "Solubility in water at 20 °C: ethanol miscible in all proportions; butan-1-ol 7.4 g per 100 g; pentan-1-ol 2.2 g; hexan-1-ol 0.6 g. Why does solubility fall along the series?",
      options: [
        "The O–H group becomes a weaker hydrogen-bond donor as the chain lengthens",
        "Alcohols beyond propan-1-ol cannot form hydrogen bonds at all",
        "The growing hydrocarbon tail offers water only weak dispersion, so an ever larger part of the molecule disrupts water’s hydrogen-bond network without compensation",
        "Heavier molecules sink to the bottom of the container instead of dissolving",
      ],
      correctIndex: 2,
      explanation:
        "Every alcohol in the series carries the same O–H group, hydrogen-bonding with water as well as ever. What changes is the tail: each added CH₂ enlarges the nonpolar portion that costs water hydrogen bonds while returning only dispersion, so the unfavourable term grows until it overwhelms the constant favourable one.",
      misconception:
        "The O–H group’s donor strength is essentially unchanged by chain length—the decline is not a weakening of the hydrogen bond but the growth of the region that cannot form one.",
    },
    {
      id: "imf-check-isomers",
      type: "check",
      eyebrow: "Transfer the model",
      title: "Rank isomers by boiling point",
      prompt:
        "Three isomers share the formula C₅H₁₂: pentane, a straight chain; 2-methylbutane, with one branch; and 2,2-dimethylpropane, a compact, nearly spherical molecule. Predict the order of their boiling points.",
      options: [
        "pentane > 2-methylbutane > 2,2-dimethylpropane",
        "2,2-dimethylpropane > 2-methylbutane > pentane",
        "All three boil at the same temperature, because they have identical molar masses",
        "The order depends on which isomer is the most polar",
      ],
      correctIndex: 0,
      explanation:
        "With identical formulae and electron counts, dispersion strength is set by surface contact. Straight chains lie alongside one another and attract along their full length; the near-spherical isomer touches its neighbours only at small patches. Measured values confirm it: 36 °C, 28 °C, and 9.5 °C.",
      misconception:
        "Equal molar mass does not mean equal dispersion: molar mass fixes the size of the electron cloud, but shape decides how much of that cloud can come close to a neighbour’s.",
    },
    {
      id: "imf-check-bilayer",
      type: "check",
      eyebrow: "Transfer to biology",
      title: "Explain why a membrane bilayer forms",
      prompt:
        "A phospholipid has a polar, charged phosphate head and two long hydrocarbon tails. In water, phospholipids spontaneously assemble into a two-layered sheet with all tails pointing inward and all heads facing the water. Why?",
      options: [
        "The tails and water repel each other through a special hydrophobic force",
        "Heads interact with water by ion–dipole forces and hydrogen bonds, while burying the tails lets water keep its hydrogen-bond network and lets the tails share dispersion contact with each other",
        "Covalent bonds form between neighbouring tails, stitching the two layers together",
        "The bilayer forms because the tails attract each other more strongly than any interaction involving water",
      ],
      correctIndex: 1,
      explanation:
        "The bilayer is the arrangement that maximises favourable interactions on every side: charged heads gain strong ion–dipole and hydrogen-bonding contacts with water, water sacrifices none of its own hydrogen bonds to the tails, and the tails, packed together, exchange the dispersion attractions they are capable of. No new bonds are needed—the same force inventory as boiling points builds a cell membrane.",
      misconception:
        "There is no repulsive “hydrophobic force”: water and hydrocarbon actually attract weakly. Tails are excluded because keeping them away preserves water’s strong hydrogen bonds—an exclusion by competition, not repulsion—and tail–tail dispersion alone is far too weak to be the driving interaction.",
    },
    {
      id: "imf-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "One inventory of forces predicts the physical world",
      points: [
        "Melting and boiling overcome intermolecular forces; the covalent bonds inside molecules, ten to a hundred times stronger, stay intact.",
        "Dispersion acts between all molecules and grows with electron count and with surface contact; permanent dipoles add a dipole–dipole attraction.",
        "A hydrogen bond needs a hydrogen on N, O, or F and a lone pair on N, O, or F—and explains why water, HF, and NH₃ boil anomalously high.",
        "Viscosity, surface tension, vapour pressure, and boiling point all rank substances by the same force inventory.",
        "Ion–dipole forces build hydration shells whose energy can repay a lattice energy—the balance decides whether a salt dissolves.",
        "Solubility is interaction matching: mixing is favourable when contacts gained compensate contacts lost, which is all “like dissolves like” means.",
      ],
      transferRule:
        "To predict a physical property, inventory the forces each substance can form—dispersion, dipole–dipole, hydrogen bond, ion–dipole—then compare the strongest ones at similar molar mass.",
      nextLessonId: "lesson.chemistry.stoichiometry",
    },
  ],
};

export const chemistryStructureLessons: Lesson[] = [
  atomicStructure,
  bonding,
  molecularShape,
  intermolecularForces,
];
