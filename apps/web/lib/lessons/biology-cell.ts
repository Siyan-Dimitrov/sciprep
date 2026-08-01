import type { Lesson } from "@/lib/lesson-types";

const cellStructure: Lesson = {
  id: "lesson.biology.cell_structure",
  slug: "cell-structure-and-the-secretory-pathway",
  number: "10.1",
  stageId: "stage.biology_cell",
  discipline: "biology",
  title: "Cell structure and the secretory pathway",
  summary:
    "Treat a eukaryotic cell as a set of compartments, each holding conditions the cytosol cannot, then follow a secreted protein along a directed route and learn how competing models of that route are tested.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain why a cell keeps incompatible processes in separate membrane-bounded compartments.",
    "Match each major organelle to the condition it maintains and the work it does there.",
    "Contrast prokaryotic and eukaryotic organisation as a difference in compartmentalisation.",
    "Trace a secreted protein from signal sequence to plasma membrane and name what happens at each stage.",
    "Use post-translational modification as evidence of the route a protein has taken.",
    "Interpret a pulse-chase or fractionation result that discriminates cisternal maturation from vesicular transport.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.biomolecules"],
  blocks: [
    {
      id: "cell-purpose",
      type: "concept",
      eyebrow: "Why compartments",
      title: "A cell must run chemistries that cannot share a room",
      paragraphs: [
        "A single cell carries out thousands of reactions at once, and some of them are flatly incompatible. Digestive hydrolases that cut proteins and nucleic acids into fragments must coexist with the proteins and nucleic acids the cell depends on. Newly made secreted proteins need an oxidising environment so that pairs of cysteine side chains can be joined into disulfide bridges, while the cytosol must be kept reducing so that cytosolic proteins do not crosslink at random. Calcium must be stored in bulk for signalling and yet held vanishingly low in the cytosol, because it is the rise itself that carries the message. No amount of clever regulation lets one well-mixed solution satisfy all of these at the same time.",
        "The eukaryotic answer is to build walls. A membrane-bounded compartment can hold its own pH, its own redox state, its own ion concentrations, and its own set of enzymes. The lysosomal lumen sits near pH 4.8 while the cytosol around it is near pH 7.2, a difference of about 250-fold in hydronium concentration. Free calcium in the cytosol is of the order of 10⁻⁷ mol dm⁻³ while the endoplasmic reticulum lumen holds roughly 10⁻³ mol dm⁻³, four orders of magnitude higher. Compartments also concentrate: putting an enzyme and its substrate in a small volume raises the rate without raising the total amount of either.",
        "The price is transport. Every compartment created is a compartment that must be supplied, addressed, and emptied, and none of that happens by accident. Prokaryotes decline the bargain: with essentially one compartment they cannot separate incompatible conditions, and they compensate with tight regulation and with being small. Size is the hidden term. A small molecule diffuses across 1 μm in a few milliseconds but needs of the order of a second to cross 20 μm, so as a cell grows, relying on diffusion to deliver everything everywhere stops working — which is exactly when internal membranes, and directed traffic along them, start to pay.",
      ],
      callout:
        "A compartment is a set of conditions the surrounding cytosol is not allowed to have.",
    },
    {
      id: "cell-visual-organelle",
      type: "visual",
      eyebrow: "See the divisions",
      title: "The interior is partitioned, and each partition has a job",
      introduction:
        "A cell drawn as a bag of enzymes explains nothing. Drawn as a partitioned space, with each boundary labelled by the condition it maintains, the layout starts to predict where a given reaction must happen.",
      visual: "organelle",
      caption:
        "Read each compartment twice: once for what it contains and once for what it excludes. The lysosome is defined as much by keeping its hydrolases away from the cytosol as by holding them at pH 4.8.",
    },
    {
      id: "cell-inventory",
      type: "concept",
      eyebrow: "The working inventory",
      title: "Each organelle is a condition plus a resident enzyme set",
      paragraphs: [
        "Information is handled in the nucleus, which a double membrane separates from the cytosol. Nuclear pores let ions and small molecules through freely and admit larger cargo only when it carries the right targeting sequence, so transcription happens in one room and translation in another. That separation is what allows a primary transcript to be edited before any ribosome sees it. Ribosomes themselves are not membrane-bounded and are chemically identical whether they float free or sit on a membrane; what differs is the protein they happen to be making, since the destination is written into the polypeptide rather than into the machine that builds it.",
        "The membrane systems divide the synthetic work. Rough endoplasmic reticulum, studded with ribosomes, receives polypeptides destined for secretion or for membranes and provides an oxidising lumen with folding chaperones and a quality-control step that retains anything misfolded. Smooth endoplasmic reticulum has no ribosomes and instead makes lipids and steroids, modifies foreign compounds, and serves as the calcium store. The Golgi apparatus is a stack of flattened cisternae that modifies and sorts what the reticulum sends. Lysosomes hold some fifty acid hydrolases at low pH. Peroxisomes run oxidations that generate hydrogen peroxide and keep catalase alongside to destroy it. Mitochondria have two membranes, their own small genome, and the inner membrane on which a proton gradient is built.",
        "The cytoskeleton is the part most often left out of the diagram and the part that makes the rest work. Actin filaments, microtubules, and intermediate filaments give the cell shape and mechanical strength, and the first two also serve as tracks. Motor proteins walk along them carrying vesicles and whole organelles, which is why compartments sit where they sit rather than drifting. Without those tracks the traffic described in the rest of this lesson would be undirected diffusion, and a vesicle would be as likely to move away from its target as towards it.",
      ],
      callout:
        "Ribosomes are identical everywhere; the destination is encoded in the protein, not in the ribosome.",
    },
    {
      id: "cell-worked-lysosome",
      type: "worked",
      eyebrow: "Worked example",
      title: "Price the acidity of a lysosome",
      scenario:
        "A lysosome of radius 0.25 μm holds its lumen at pH 4.8 while the surrounding cytosol is at pH 7.2, at 310 K. Estimate the free energy needed to move one mole of protons from cytosol to lumen, compare it with what ATP hydrolysis supplies in a cell, and count how many free protons the lumen actually contains. Take R = 8.314 J mol⁻¹ K⁻¹ and the Avogadro constant as 6.022 × 10²³ mol⁻¹.",
      steps: [
        {
          label: "Convert the pH gap into a concentration ratio",
          decision:
            "pH is a logarithmic quantity, so a difference on that scale is a ratio of concentrations, never a difference of them.",
          working:
            "ΔpH = 7.2 − 4.8 = 2.4, so [H⁺]lumen / [H⁺]cytosol = 10²·⁴ = 251",
        },
        {
          label: "Price the ratio as free energy per mole",
          decision:
            "Concentrating a solute against its own gradient costs RT ln(ratio); this is the chemical term of the electrochemical gradient, with the electrical term deliberately set aside for now.",
          working:
            "ΔG = 2.303 × 8.314 × 310 × 2.4 = 5935 × 2.4 = 1.42 × 10⁴ J mol⁻¹, that is 14.2 kJ mol⁻¹",
        },
        {
          label: "Compare with the currency available",
          decision:
            "A cost only means something against a budget. In a living cell ATP hydrolysis delivers roughly 50 kJ mol⁻¹, well above the standard value because cellular ATP and ADP are far from standard concentrations.",
          working: "50 / 14.2 = 3.5 protons per ATP as an upper bound",
        },
        {
          label: "Count the free protons in the lumen",
          decision:
            "A concentration is not a quantity. Multiplying by the volume converts one to the other and reveals how small the actual stock is.",
          working:
            "V = (4/3)π(2.5 × 10⁻⁷ m)³ = 6.55 × 10⁻²⁰ m³ = 6.55 × 10⁻¹⁷ dm³; n = 10⁻⁴·⁸ × 6.55 × 10⁻¹⁷ = 1.04 × 10⁻²¹ mol; N = 1.04 × 10⁻²¹ × 6.022 × 10²³ = 6.2 × 10²",
        },
        {
          label: "State what has been left out",
          decision:
            "An estimate is only usable if its omissions are named. The lysosomal membrane also carries a potential difference, and moving a positive charge against it costs extra.",
          working:
            "true cost = 14.2 kJ mol⁻¹ + zFΔΨ, so 14.2 kJ mol⁻¹ is a floor rather than the full price",
        },
      ],
      answer:
        "Holding the lumen 2.4 pH units below the cytosol costs at least 14.2 kJ per mole of protons, comfortably affordable at a few protons per ATP, and the compartment contains only about 600 free protons at any instant.",
      plausibility:
        "Two independent checks agree. At 25 °C the cost per tenfold concentration difference is RT ln10 = 5.7 kJ mol⁻¹; scaling to 310 K and multiplying by 2.4 units gives 14.2 kJ mol⁻¹ again. And a stock of only 600 free protons against tens of thousands of buffering side chains explains an observation from the bench: lysosomal pH collapses within minutes when the proton pump is inhibited, because almost nothing is stored and the gradient is held only by continuous pumping.",
    },
    {
      id: "cell-check-compartment",
      type: "check",
      eyebrow: "Your turn",
      title: "Say what an acid compartment buys",
      prompt:
        "Lysosomal hydrolases have their maximum activity near pH 4.8 and retain only a few per cent of it near pH 7.2. A single lysosome ruptures and releases its contents into the cytosol. What follows, and what does the pH optimum achieve?",
      options: [
        "The enzymes digest the cell immediately, since they are the most powerful hydrolases it contains",
        "The enzymes are largely inactivated by the neutral cytosol and are further diluted into a far larger volume, so the acidic optimum is simultaneously a condition for activity and a containment device",
        "The enzymes work faster in the cytosol, because far more substrate is available there",
        "Nothing changes, because the pH optimum of an enzyme describes only its rate and not whether it functions",
      ],
      correctIndex: 1,
      explanation:
        "Two effects act together. Activity is tied to a pH that exists only inside the compartment, so hydrolases that escape are working at a small fraction of their maximum. The contents of one organelle of radius 0.25 μm are also diluted into a cytosol many thousand times larger. The acidic optimum is therefore not an incidental property of the enzymes; it is the mechanism by which the cell makes the danger conditional on location.",
      misconception:
        "Treating containment by a membrane as the only safeguard, as the first option does. A membrane can fail. Tying activity to a condition that exists nowhere else is a second, independent safeguard, and it is the one that keeps a single rupture from being fatal.",
    },
    {
      id: "cell-secretory",
      type: "concept",
      eyebrow: "A directed route",
      title: "A secreted protein is addressed before it is finished",
      paragraphs: [
        "Translation begins on a free ribosome in every case. If the growing chain starts with a short stretch of hydrophobic residues — a signal sequence — that stretch is recognised as it emerges, translation pauses, and the whole complex is delivered to the endoplasmic reticulum membrane. Synthesis then resumes with the chain threaded through a channel directly into the lumen, and the signal sequence is cut off. A polypeptide with no such sequence is finished in the cytosol and stays there. The choice of destination is therefore made by the protein's own first few residues, which is what allows one population of ribosomes to serve every destination.",
        "From the lumen the route is fixed: rough endoplasmic reticulum, then vesicles to the cis face of the Golgi, then across the stack from cis through medial to trans, then into secretory vesicles, then fusion with the plasma membrane. None of this is diffusion. Coat proteins assemble on the donor membrane and select which cargo is loaded; small GTP-binding proteins mark each membrane with an identity; motor proteins carry the vesicle along cytoskeletal tracks; and paired SNARE proteins on the vesicle and its target decide which membrane is allowed to fuse with which. Every one of those steps consumes GTP or ATP, so directionality in this system is bought, not given.",
        "Along the way the protein is altered in a fixed order. Disulfide bridges form in the oxidising lumen of the reticulum. A core sugar chain is attached to particular asparagine residues while the chain is still being threaded across the membrane. In the Golgi that core is trimmed and extended by enzymes that reside in particular cisternae, so a mannose-rich pattern marks a protein that has not yet passed the medial cisternae while a complex, sialylated pattern marks one that has. Later still come sulfation and proteolytic maturation. The result is that a secreted protein carries a record of how far along the route it travelled, and that record is what makes the pathway experimentally readable.",
      ],
      callout:
        "signal sequence · rough ER · vesicle · Golgi cis to trans · secretory vesicle · plasma membrane",
    },
    {
      id: "cell-visual-traffic",
      type: "visual",
      eyebrow: "Follow the vesicles",
      title: "Traffic is a cycle, not a one-way street",
      introduction:
        "Drawing only the forward arrows makes the pathway look like a conveyor belt. Drawing the returning vesicles as well shows the problem the cell actually solves: membrane and resident enzymes must come back, or the donor compartment would be consumed.",
      visual: "vesicle_traffic",
      caption:
        "Forward and backward traffic run at the same time on the same tracks. What distinguishes the two directions is not the vesicle but its cargo and its coat, and that distinction is the variable on which the competing models of Golgi transport disagree.",
    },
    {
      id: "cell-check-route",
      type: "check",
      eyebrow: "Read the record",
      title: "Predict the effect of blocking one step",
      prompt:
        "A secreted glycoprotein receives a core sugar chain while it is still being threaded into the endoplasmic reticulum, and receives further sugars in the Golgi. A drug blocks the fusion of reticulum-derived vesicles with the Golgi. What is observed for that protein?",
      options: [
        "It accumulates inside the reticulum, carries the core sugar chain, and lacks every modification normally added in the Golgi",
        "It is secreted at the normal rate but carries no sugars at all",
        "It accumulates in the Golgi carrying its complete set of sugars, since the block prevents it from leaving",
        "It is made in the cytosol instead and is degraded there",
      ],
      correctIndex: 0,
      explanation:
        "The core addition happens upstream of the block and while translation is still in progress, so it still occurs. Everything downstream of the block is absent, and the protein has no route out of the compartment it is in. Modification is a sequence of stages tied to particular compartments, so a block partitions the modifications into those that survive it and those that do not.",
      misconception:
        "Treating glycosylation as one event that either happens or does not. It is a sequence, each stage carried out by enzymes resident in a specific compartment, which is precisely why the sugar pattern reports how far the protein travelled before it stopped.",
    },
    {
      id: "cell-models",
      type: "concept",
      eyebrow: "Two rival accounts",
      title: "The same stack of cisternae supports two different mechanisms",
      paragraphs: [
        "Under the microscope the Golgi is a stack of flattened cisternae whose enzyme content differs from the cis face to the trans face. Two mechanisms explain that picture equally well. In vesicular transport the cisternae are stable compartments with fixed identities, and cargo is packaged into vesicles that bud from one cisterna and fuse with the next, moving forward across a structure that itself does not move. In cisternal maturation the cisternae are transient: a new one forms at the cis face from incoming material, carries its cargo forward as a unit, and matures by exporting its cis-type enzymes backwards to the cisterna behind it while receiving trans-type enzymes from the one ahead. Both accounts predict a stack, a gradient of enzymes, and cargo emerging at the trans face.",
        "A steady-state photograph therefore cannot decide between them, and that is the general lesson. Two models are only distinguishable through a variable on which they disagree, and here there are three. They disagree about what the vesicles carry: cargo moving forwards, or resident enzymes moving backwards. They disagree about whether the enzyme composition of one cisterna changes over the minutes after it forms: constant under vesicular transport, changing under maturation. And they disagree about cargo too large to fit inside a transport vesicle, which vesicular transport cannot move forward at all while maturation moves it at the same speed as everything else.",
        "The third disagreement is the sharpest, because some real cargo is enormous. Procollagen assembles into rigid rods of the order of 300 nm, and transport vesicles are 60 to 80 nm across. Two techniques make the comparison quantitative. A pulse-chase labels one cohort of protein briefly and then follows only that cohort, converting a static picture into a trajectory. Density-gradient fractionation separates broken cells into compartments so that the position of the labelled cohort becomes a set of numbers. The field's settled position is not that one model won outright: maturation accounts for large cargo and for the observed change in cisternal composition, while vesicular traffic demonstrably occurs, and the two operate together. Models in biology are more often narrowed by successive experiments than eliminated by one.",
      ],
      callout:
        "Two models that explain the same steady state are separated only by a variable on which their predictions differ.",
    },
    {
      id: "cell-worked-pulsechase",
      type: "worked",
      eyebrow: "Worked example",
      title: "Use a pulse-chase to compare a small and a very large cargo",
      scenario:
        "Cultured cells secrete two proteins: S, a compact 45 kDa monomer, and L, which assembles into rigid particles about 250 nm long, far larger than the 60 to 80 nm transport vesicles. Cells are pulsed for four minutes with a labelled amino acid and then chased. Density-gradient fractionation gives the percentage of each label found in the endoplasmic reticulum fraction. At the start of the chase both stand at 92 per cent. After 15 minutes, S stands at 20 per cent and L at 22 per cent. Assuming exit from the reticulum is first order, find the half-time for each cargo and say which model the result supports.",
      steps: [
        {
          label: "Write down what each model predicts",
          decision:
            "An experiment discriminates only if the two models forecast different observations, so state both forecasts before touching the data.",
          working:
            "vesicular transport: L cannot enter a 60 to 80 nm vesicle, so it should stall; cisternal maturation: the cisterna is the container, so L should keep pace with S",
        },
        {
          label: "Convert the readings into a fraction remaining",
          decision:
            "Both cargoes started at 92 per cent rather than 100, so the raw percentages must be normalised to their own starting values before they can be compared.",
          working:
            "S: 20 / 92 = 0.217; L: 22 / 92 = 0.239",
        },
        {
          label: "Extract a first-order rate constant",
          decision:
            "First-order exit means the fraction remaining is e⁻ᵏᵗ, so taking a natural logarithm turns each single measurement into a rate constant.",
          working:
            "S: k = −ln(0.217) / 15 = 1.526 / 15 = 0.1017 min⁻¹; L: k = −ln(0.239) / 15 = 1.431 / 15 = 0.0954 min⁻¹",
        },
        {
          label: "Convert each rate constant to a half-time",
          decision:
            "A half-time is easier to compare and to quote against experimental scatter than a rate constant.",
          working:
            "S: t½ = 0.693 / 0.1017 = 6.8 min; L: t½ = 0.693 / 0.0954 = 7.3 min",
        },
        {
          label: "Say what does and does not follow",
          decision:
            "A difference smaller than the scatter of the method is not a difference, and a single cargo type is not the whole Golgi.",
          working:
            "6.8 min against 7.3 min is a gap of about 7 per cent, within the reproducibility of gradient fractionation",
        },
      ],
      answer:
        "Both cargoes leave the reticulum with a half-time near 7 minutes. A particle far too large to fit inside a transport vesicle keeps pace with a small one, which cisternal maturation predicts and vesicular transport does not.",
      plausibility:
        "Check the arithmetic a second way. A half-time of 7 minutes means 15 minutes is a little over two half-times, leaving about 0.23 of the starting label, and 0.23 × 92 = 21 per cent — bracketing the measured 20 and 22 per cent. A second, qualitative check: if L were genuinely stalled, the cis-Golgi fraction would grow steadily with chase time instead of rising and then falling as a wave.",
    },
    {
      id: "cell-check-model",
      type: "check",
      eyebrow: "Discriminate the models",
      title: "Find the observation that favours vesicular transport",
      prompt:
        "Cisternal maturation holds that cisternae move forward and mature while vesicles carry resident enzymes backwards. Vesicular transport holds that cisternae are stable and vesicles carry cargo forwards. Which single observation would count as evidence for vesicular transport over maturation?",
      options: [
        "A cargo particle 250 nm across crosses the stack as quickly as a 5 nm cargo does",
        "Enzymes characteristic of the cis face are found inside vesicles budding from more distal cisternae and travelling towards the cis face",
        "Labelled cargo is found predominantly inside forward-moving vesicles while the enzyme content of each cisterna stays constant over the following minutes",
        "The set of resident enzymes in a given cisterna changes measurably in the minutes after that cisterna forms",
      ],
      correctIndex: 2,
      explanation:
        "Vesicular transport requires two things at once: cargo travelling in anterograde vesicles, and cisternae whose identity does not change because they are permanent compartments. Only the third option asserts both. Large cargo keeping pace and cisternal composition changing with time are both maturation signatures, and retrograde traffic of cis enzymes is exactly what maturation needs in order to work.",
      misconception:
        "Taking the sight of a vesicle as evidence for vesicular transport. Maturation requires vesicles too — running backwards and carrying enzymes rather than cargo. The discriminating variables are what the vesicles carry and which way they go, not whether vesicles exist at all.",
    },
    {
      id: "cell-check-fraction",
      type: "check",
      eyebrow: "Read the representation",
      title: "Interpret a moving peak on a gradient",
      prompt:
        "After a four-minute pulse of a labelled amino acid, cells are broken open at intervals and separated on a density gradient into reticulum, cis-Golgi, trans-Golgi, and secretory-vesicle fractions. The peak of label sits in the reticulum fraction at 5 minutes, the cis fraction at 15 minutes, the trans fraction at 25 minutes, and the vesicle fraction at 40 minutes; radioactivity in the culture medium begins to rise at about 45 minutes. Which conclusion is supported?",
      options: [
        "The labelled protein is synthesised independently in all four compartments, since label appears in each of them at some point",
        "The reticulum holds the label longest, so the reticulum must be the last compartment before secretion",
        "One cohort of protein passes through the compartments in the order reticulum, cis-Golgi, trans-Golgi, secretory vesicle, taking roughly 45 minutes to reach the cell surface",
        "The compartments exchange contents freely, and the order of the peaks reflects only their densities on the gradient",
      ],
      correctIndex: 2,
      explanation:
        "The pulse was short, so only one cohort of molecules carries label. A peak that moves through fractions in a fixed order is that cohort travelling, and the fixed order fixes the route while the timings fix the transit. Appearance in the medium at 45 minutes closes the sequence at the plasma membrane.",
      misconception:
        "Reading a fractionation profile as a map of where a protein is made rather than where a labelled cohort has reached. Without the brief pulse the profile would be a steady-state snapshot in which every compartment holds label permanently and no order could be recovered.",
    },
    {
      id: "cell-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar system",
      title: "Predict what a bacterium can and cannot do to a human protein",
      prompt:
        "A human hormone that human cells secrete as a 34 kDa glycoprotein is expressed from its gene in a bacterium. The bacterium transcribes and translates it at the expected rate, and the product runs on a gel at 28 kDa. What is the most economical explanation?",
      options: [
        "The gene was transcribed incorrectly, so a shorter polypeptide was made",
        "The hormone was secreted and then partly digested outside the cell, leaving a 28 kDa fragment",
        "Bacteria cannot translate a human coding sequence, so the 28 kDa band must be an unrelated bacterial protein",
        "The bacterium has no endoplasmic reticulum or Golgi and none of the resident glycosyl transferases that live in them, so the correct polypeptide is made but carries none of the sugar chains that account for the extra 6 kDa",
      ],
      correctIndex: 3,
      explanation:
        "A shortfall of 6 kDa is about the mass of two or three N-linked glycans, each of the order of 2 to 3 kDa. Glycosylation is not a property of the polypeptide; it is work done by enzymes that reside in specific compartments. A host with no such compartments produces the right chain at the wrong mass. The genetic code itself is shared, so translation of the coding sequence is not the obstacle.",
      misconception:
        "Assuming a mass discrepancy means the wrong polypeptide was made. Post-translational modification is added by machinery with an address, so the same gene expressed in a host lacking that address yields a correct but unmodified product — which is why glycoprotein drugs are made in mammalian cell culture rather than in bacteria.",
    },
    {
      id: "cell-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Compartments buy specialisation and charge for transport",
      points: [
        "A eukaryotic cell is a set of membrane-bounded compartments, each holding a pH, redox state, ion concentration, and enzyme set that the cytosol is not allowed to have.",
        "Prokaryotes run comparable chemistry in one compartment, so they cannot separate incompatible conditions and depend on regulation and on being small.",
        "A signal sequence in the growing polypeptide, not the ribosome, decides whether a protein enters the secretory route.",
        "The route runs rough endoplasmic reticulum, vesicle, Golgi from cis to trans, secretory vesicle, plasma membrane, and every step is selected, targeted, and paid for with GTP or ATP.",
        "Modifications added at fixed stages turn a protein into a record of where it has been, which is what makes pulse-chase and fractionation readable at all.",
        "Cisternal maturation and vesicular transport differ testably in what the vesicles carry, whether cisternal composition changes with time, and whether cargo larger than a vesicle can cross.",
      ],
      transferRule:
        "When two mechanisms account equally well for the same steady picture, find the variable on which their predictions differ, then label one cohort and follow it through time rather than photographing the whole population at once.",
      nextLessonId: "lesson.biology.membranes_transport",
    },
  ],
};

const membranesTransport: Lesson = {
  id: "lesson.biology.membranes_transport",
  slug: "membranes-and-transport",
  number: "10.2",
  stageId: "stage.biology_cell",
  discipline: "biology",
  title: "Membranes and transport",
  summary:
    "Derive the bilayer from the hydrophobic effect, decide what crosses it unaided, and price movement against an electrochemical gradient in kilojoules per mole.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain the bilayer as a consequence of amphipathic lipids and the hydrophobic effect.",
    "Predict which solutes cross a protein-free bilayer unaided from their charge, polarity, and size.",
    "State Fick's law qualitatively and use it to explain why diffusion can erase a gradient but never build one.",
    "Determine the direction of osmotic water movement and calculate an osmotic pressure difference.",
    "Distinguish osmolarity from tonicity and explain why tonicity is meaningful only relative to a named membrane.",
    "Calculate the free energy cost of moving an ion against an electrochemical gradient, including the charge term.",
  ],
  prerequisiteLessonIds: [
    "lesson.biology.cell_structure",
    "lesson.chemistry.intermolecular_forces",
    "lesson.physics.electricity",
  ],
  blocks: [
    {
      id: "memb-purpose",
      type: "concept",
      eyebrow: "Why a bilayer",
      title: "The membrane is held together by the water outside it",
      paragraphs: [
        "A phospholipid is amphipathic: a phosphate-bearing head group that hydrogen bonds readily with water, and two hydrocarbon tails that cannot. Drop such a molecule into water and the tails present the network of hydrogen-bonded water molecules with a surface it cannot bond to. Water responds by ordering itself around each tail, which costs entropy. The hydrophobic effect is that entropy cost being minimised: the system reduces the ordered water by reducing the exposed hydrocarbon area, and the arrangement that hides the most tail area per lipid while leaving every head group in contact with water is a bilayer. Note what this argument does not contain. There is no attraction between the tails doing the work; the driving term is what happens to the water.",
        "Two properties follow from that origin. First, the structure assembles itself and reseals itself, because a hole exposes hydrocarbon and closing the hole is favourable for the same reason the sheet formed. Second, the sheet is a two-dimensional fluid rather than a solid. A lipid exchanges places with its neighbours millions of times a second and travels micrometres in a second, yet crosses from one leaflet to the other only rarely without a dedicated enzyme, because flipping requires dragging a polar head through the hydrocarbon core. Membrane proteins float in this fluid and are held in it by the same effect, their transmembrane segments being hydrophobic.",
        "Fluidity is adjustable, and cells adjust it. Shorter tails have less surface to associate with and give a more fluid membrane; a cis double bond puts a permanent kink in a tail so neighbours pack less tightly, which is why unsaturated lipids raise fluidity and why organisms living at low temperature carry more of them. Cholesterol acts in both directions: it restricts the movement of tails at high temperature and prevents tight packing at low temperature, broadening the transition rather than shifting it. What all of this delivers to the rest of the lesson is a slab of liquid hydrocarbon roughly 3 nm thick, and anything crossing it unaided must be willing to dissolve in oil.",
      ],
      callout:
        "The bilayer forms because water excludes hydrocarbon, not because lipids attract one another.",
    },
    {
      id: "memb-visual-transport",
      type: "visual",
      eyebrow: "Routes across",
      title: "Every crossing is either through the lipid or through a protein",
      introduction:
        "Set the four routes side by side on one diagram — straight through the bilayer, through a channel, on a carrier, and on a pump — and the classification stops being vocabulary and becomes a decision procedure.",
      visual: "membrane_transport",
      caption:
        "Ask two questions of any crossing. Does it need a protein, which is settled by whether the solute dissolves in hydrocarbon? And does it need energy, which is settled by whether it runs down its electrochemical gradient or up it? The two questions are independent, and the four answers are the four routes.",
    },
    {
      id: "memb-permeability",
      type: "concept",
      eyebrow: "What gets through",
      title: "Permeability tracks solubility in oil, not molecular size",
      paragraphs: [
        "Rank four solutes by how fast they cross a bilayer with no proteins in it. Oxygen is small and non-polar, dissolves freely in hydrocarbon, and crosses fastest. Ethanol is small and only moderately polar, and crosses well. Glucose is uncharged but carries five hydroxyl groups, each hydrogen bonded to water, and crosses about ten million times more slowly than the picture from size alone would suggest. A sodium ion is by far the smallest of the four and is the slowest of all, by an enormous margin — measured permeability coefficients across pure bilayers are of order 10⁻¹² cm s⁻¹ for sodium against roughly 10⁻⁷ cm s⁻¹ for glucose, both order-of-magnitude literature figures. The reason is that a bare ion never enters the hydrocarbon; it would first have to strip off the shell of water molecules bound to it, which costs hundreds of kilojoules per mole.",
        "Water itself is the interesting exception. It is polar, so it should cross slowly, and through a plain bilayer it does. Many cells nonetheless equilibrate water in seconds, and the discrepancy is what led to the discovery of aquaporins, channels that pass water and exclude ions. That is the general use of this rule: the correlation between permeability and solubility in a non-polar solvent, known as Overton's rule, holds well enough that the cases where it fails are exactly the cases where a transport protein is waiting to be found.",
        "For anything that does cross by simple diffusion, the net flux follows Fick's law: it is proportional to the surface area available, to the permeability of the membrane to that solute, and to the difference in concentration across it, and inversely proportional to the thickness. Every term is worth a moment. Because flux depends on the difference, it falls to zero when the concentrations are equal and reverses when they reverse. Diffusion can therefore erase a gradient but can never build one, and any cell holding a solute away from equilibrium is spending energy to do it.",
      ],
      callout:
        "Net diffusive flux ∝ area × permeability × (concentration difference) ÷ thickness",
    },
    {
      id: "memb-check-permeability",
      type: "check",
      eyebrow: "Your turn",
      title: "Rank two solutes across a protein-free bilayer",
      prompt:
        "A pure phospholipid bilayer containing no proteins separates two compartments. Which statement about unaided crossing is correct?",
      options: [
        "Sodium ions cross readily, because a sodium ion is much smaller than a glucose molecule",
        "Oxygen crosses only through a channel protein, because a gas cannot dissolve in lipid",
        "Glucose crosses as freely as oxygen, because glucose carries no charge",
        "Sodium ions cross far more slowly than glucose, because an ion must shed its hydration shell to enter the hydrocarbon interior and that costs hundreds of kilojoules per mole",
      ],
      correctIndex: 3,
      explanation:
        "Permeability follows how readily the solute dissolves in hydrocarbon. Oxygen is small and non-polar and crosses fastest. Glucose is uncharged but its five hydroxyl groups hold it in water, so it crosses slowly and in real cells needs a transporter. Sodium is the smallest of the three and the slowest by many orders of magnitude, because entering the hydrocarbon means leaving the hydration shell behind.",
      misconception:
        "Ranking permeability by molecular size. Size separates solutes only when their polarity is comparable; charge dominates everything else, which is why the smallest species in the list is the one that essentially never crosses.",
    },
    {
      id: "memb-osmosis",
      type: "concept",
      eyebrow: "Water moves too",
      title: "Osmosis is water obeying the same rule as every other solute",
      paragraphs: [
        "Nothing new is needed to explain osmosis. Water diffuses down its own concentration gradient like anything else; what makes the phenomenon look distinctive is that the membrane stops the solute, so the only species free to move is the one usually treated as the background. Adding solute to water lowers the concentration of water and therefore its tendency to leave. The tidy way to write this is water potential: pure water at atmospheric pressure is assigned zero, dissolved solute makes the potential more negative, and applied pressure makes it more positive. Water moves from higher water potential to lower, which is the same statement as moving towards the more concentrated solution.",
        "The size of the effect is set by the number of dissolved particles and not by what they are. Osmolarity counts particles: 0.10 mol dm⁻³ sodium chloride supplies about 0.20 osmol dm⁻³ because it dissociates into two ions, whereas 0.10 mol dm⁻³ glucose supplies 0.10 osmol dm⁻³. Real electrolyte solutions fall a few per cent short of complete dissociation behaviour, so treating the factor as exactly two is a useful approximation rather than an exact law. The osmotic pressure that would just prevent flow follows the van 't Hoff relation, Π = CRT with C in mol m⁻³, and a difference in osmolarity across a membrane gives a difference in Π by the same expression.",
        "Tonicity is a different quantity and is routinely confused with osmolarity. Osmolarity is a property of a solution measured on its own; tonicity is a statement about a solution and a particular membrane together, and it counts only the solutes that membrane will not let through. A 300 mmol dm⁻³ urea solution is iso-osmotic with a red cell, yet urea crosses the red-cell membrane, so once it has equilibrated it contributes nothing net and the cell's own impermeant solutes draw water in until the cell bursts. That solution is iso-osmotic and hypotonic at the same time. Hypotonic and hypertonic are therefore never absolute descriptions; they require a named cell or compartment to be relative to.",
      ],
      callout:
        "Osmolarity counts every dissolved particle; tonicity counts only the ones that cannot cross.",
    },
    {
      id: "memb-visual-osmosis",
      type: "visual",
      eyebrow: "Two sides, one variable",
      title: "Water flows until pressure or wall tension cancels the imbalance",
      introduction:
        "Draw the two compartments with the solute particles shown as counts rather than as chemical species, and the direction of water movement becomes a matter of comparing two numbers.",
      visual: "osmosis",
      caption:
        "Flow does not continue until the concentrations are equal. It continues until the hydrostatic pressure or wall tension that has built up exactly offsets the osmotic difference — which is why a plant cell reaches a stable turgor and an animal cell, having no wall, lyses instead.",
    },
    {
      id: "memb-worked-osmosis",
      type: "worked",
      eyebrow: "Worked example",
      title: "Predict the direction and size of an osmotic imbalance",
      scenario:
        "A dialysis sac contains 0.10 mol dm⁻³ sodium chloride together with 0.050 mol dm⁻³ glucose. It is placed in a bath of 0.070 mol dm⁻³ calcium chloride at 310 K. The membrane passes water freely and none of the solutes. Determine which way water moves and calculate the osmotic pressure difference. Take R = 8.314 J mol⁻¹ K⁻¹.",
      steps: [
        {
          label: "Count particles rather than formula units",
          decision:
            "Osmotic effects depend on the number of dissolved particles, so each electrolyte must first be resolved into the ions it produces. Complete dissociation is assumed here; real solutions fall a few per cent short of it.",
          working:
            "NaCl → 2 particles; CaCl₂ → 3 particles; glucose → 1 particle",
        },
        {
          label: "Total the osmolarity on each side",
          decision:
            "Every particle counts equally, so contributions are simply added regardless of chemical identity.",
          working:
            "inside: (0.10 × 2) + 0.050 = 0.250 osmol dm⁻³; outside: 0.070 × 3 = 0.210 osmol dm⁻³",
        },
        {
          label: "Decide the direction of flow",
          decision:
            "Water moves towards the lower water potential, which is the side with more dissolved particles.",
          working:
            "0.250 > 0.210, so water enters the sac and the sac swells",
        },
        {
          label: "Convert the imbalance into a pressure",
          decision:
            "The van 't Hoff relation needs concentration in mol m⁻³, so the osmolarity difference expressed per cubic decimetre must be multiplied by 1000.",
          working:
            "ΔC = 0.040 osmol dm⁻³ = 40 mol m⁻³; ΔΠ = 40 × 8.314 × 310 = 1.03 × 10⁵ Pa = 103 kPa",
        },
        {
          label: "Say what finally stops the flow",
          decision:
            "Flow ends when the opposing pressure matches the osmotic difference, not when the concentrations equalise, since the solutes cannot move.",
          working:
            "the sac swells until wall tension supplies 103 kPa, about 1.0 atmosphere",
        },
      ],
      answer:
        "Water moves into the sac, driven by an osmotic pressure difference of about 103 kPa, and swelling continues until the sac wall can supply that pressure in return.",
      plausibility:
        "Scale it against a familiar case. Blood plasma has a total osmolarity near 290 mosmol dm⁻³, which by the same relation gives an osmotic pressure of 290 × 2.58 = 747 kPa, about 7.4 atmospheres, and that is the standard quoted figure. Our imbalance of 40 mosmol dm⁻³ is one seventh of 290, and 747 ÷ 7.25 = 103 kPa — the two calculations agree, and the comparison shows why a mismatch of 40 mosmol dm⁻³ is a serious one clinically.",
    },
    {
      id: "memb-check-tonicity",
      type: "check",
      eyebrow: "Separate two ideas",
      title: "Judge a solution that is iso-osmotic and hypotonic at once",
      prompt:
        "Red cells with an internal osmolarity of about 290 mosmol dm⁻³ are suspended in a 300 mmol dm⁻³ urea solution. Urea crosses the red-cell membrane readily. What happens, and how should the solution be described?",
      options: [
        "Nothing happens: the solution is iso-osmotic and therefore isotonic, so cell volume is unchanged",
        "The cells shrink and stay shrunken, because 300 mosmol dm⁻³ outside exceeds 290 mosmol dm⁻³ inside",
        "Urea equilibrates across the membrane and then contributes nothing net, after which the impermeant solutes inside draw water in, so the cells swell and may lyse: the solution is iso-osmotic but hypotonic",
        "The cells swell because urea is actively pumped inwards, which makes the solution hypertonic to them",
      ],
      correctIndex: 2,
      explanation:
        "There is a brief shrinkage while 300 mosmol dm⁻³ outside faces 290 inside, but urea then enters until its concentration is equal on both sides and cancels from the balance. What remains is about 290 mosmol dm⁻³ of impermeant solute inside against essentially none outside, so water enters until the cell fails. Tonicity is defined by the effect on cell volume and counts only impermeant solutes.",
      misconception:
        "Equating osmolarity with tonicity, which is the first option. Osmolarity can be measured on a solution sitting alone in a beaker; tonicity cannot, because it depends on which solutes the membrane in question happens to stop.",
    },
    {
      id: "memb-active",
      type: "concept",
      eyebrow: "Proteins and pumps",
      title: "A finite number of transporters gives transport a ceiling",
      paragraphs: [
        "Protein-mediated crossing comes in two mechanical styles. A channel is a hydrophilic pore with a selectivity filter, usually gated open and shut, and it passes ions at rates up to 10⁸ per second because nothing has to change shape for each ion. A carrier binds its solute, changes conformation, and releases it on the other side, which limits it to something between 10² and 10⁴ per second. Both styles share a consequence that simple diffusion does not have: there is a countable number of proteins, so as solute concentration rises the flux stops rising and approaches a plateau. Saturation is the signature of protein mediation. It says nothing about whether energy is being spent, since a carrier running strictly downhill saturates just as clearly, and the same hyperbolic shape returns in the next lesson as enzyme kinetics.",
        "Primary active transport spends ATP directly at the transporter. The sodium-potassium ATPase is the standard case: for each ATP hydrolysed it exports three sodium ions and imports two potassium ions. Because three positive charges leave and only two enter, the pump is electrogenic and makes a small direct contribution to the membrane potential; its larger contribution is indirect, through the ion gradients it maintains. It is expensive, and estimates that it accounts for something like a fifth to a third of resting energy consumption in neural tissue are widely quoted approximations rather than fixed values. What the cell buys is a sodium gradient held far from equilibrium, which is a charged battery.",
        "Secondary active transport spends that battery. A sodium-glucose cotransporter carries two sodium ions inwards along with one glucose molecule, and glucose can be dragged uphill because the sodium entering downhill releases more free energy than the glucose movement consumes. No ATP is hydrolysed at that protein; the ATP was spent earlier, by the pump. Cotransport in the same direction is symport and in opposite directions is antiport, as in the exchanger that imports three sodium ions for each calcium ion expelled. Pricing any of this requires both terms of the electrochemical gradient, since an ion is a chemical species and a charge at the same time, and the membrane is the charged capacitor met in the electricity lesson.",
      ],
      callout:
        "Moving one mole of an ion of charge z from side 1 to side 2: ΔG = RT ln(c₂ / c₁) + zF(Ψ₂ − Ψ₁)",
    },
    {
      id: "memb-worked-atp",
      type: "worked",
      eyebrow: "Worked example",
      title: "Price one cycle of the sodium-potassium pump",
      scenario:
        "A neuron at 310 K holds sodium at 12 mmol dm⁻³ inside and 145 mmol dm⁻³ outside, potassium at 140 mmol dm⁻³ inside and 4 mmol dm⁻³ outside, and a membrane potential of −70 mV, inside negative. The pump exports three sodium ions and imports two potassium ions per ATP hydrolysed. Find the free energy cost of one cycle per mole of ATP and compare it with what ATP supplies. Take R = 8.314 J mol⁻¹ K⁻¹ and F = 96 485 C mol⁻¹.",
      steps: [
        {
          label: "Split the driving force into two terms",
          decision:
            "An ion responds to its concentration gradient and to the electric field, and the two can act together or against each other, so they must be evaluated separately before being added.",
          working:
            "ΔG = RT ln(c₂ / c₁) + zF(Ψ₂ − Ψ₁), with RT = 8.314 × 310 = 2577 J mol⁻¹",
        },
        {
          label: "Cost of exporting one mole of sodium",
          decision:
            "Sodium is more concentrated outside and the interior is negative, so both terms oppose export and both must therefore be positive.",
          working:
            "chemical: 2577 × ln(145 / 12) = 2577 × 2.492 = 6422 J; electrical: (+1)(96 485)(0 − (−0.070)) = 6754 J; total 13 176 J, that is 13.2 kJ mol⁻¹",
        },
        {
          label: "Cost of importing one mole of potassium",
          decision:
            "Here the two terms oppose each other: potassium must be concentrated further, which costs, but it is a cation moving into a negative interior, which pays.",
          working:
            "chemical: 2577 × ln(140 / 4) = 2577 × 3.555 = 9163 J; electrical: (+1)(96 485)(−0.070 − 0) = −6754 J; total 2409 J, that is 2.41 kJ mol⁻¹",
        },
        {
          label: "Apply the stoichiometry of one cycle",
          decision:
            "The pump moves three sodium ions and two potassium ions per ATP, so each per-mole cost is weighted by its own count.",
          working:
            "(3 × 13.18) + (2 × 2.41) = 39.53 + 4.82 = 44.35 kJ per mole of ATP",
        },
        {
          label: "Compare the cost with the budget",
          decision:
            "Feasibility is a comparison, not a magnitude. Cellular ATP delivers close to 50 kJ mol⁻¹ because the ATP to ADP ratio is far from standard.",
          working:
            "44.35 / 50 = 0.89, so about 89 per cent of the available free energy is consumed",
        },
      ],
      answer:
        "One pump cycle costs about 44.4 kJ per mole of ATP against roughly 50 kJ mol⁻¹ available, so the pump runs at close to 90 per cent of its thermodynamic limit and has little margin in reserve.",
      plausibility:
        "Check the potassium term independently. The Nernst equilibrium potential for potassium here is (RT / F)ln(4 / 140) = 0.0267 × (−3.555) = −0.095 V, so potassium is only 25 mV away from equilibrium at a membrane potential of −70 mV. Moving one mole across a 25 mV gap costs 96 485 × 0.025 = 2.4 kJ, matching the 2.41 kJ found by adding two terms. The narrow margin also predicts a real observation: when ATP falls, the pump stalls and the gradients collapse within minutes.",
    },
    {
      id: "memb-check-saturation",
      type: "check",
      eyebrow: "Read the curve",
      title: "Say what a plateau does and does not prove",
      prompt:
        "The rate at which a solute enters a cell is measured against its external concentration. Solute P gives a straight line through the origin across the whole range tested. Solute Q rises steeply at first and then flattens onto a plateau. What does the difference establish?",
      options: [
        "P is carried by a transport protein and Q crosses the bilayer directly, since only proteins give a linear response",
        "Q's plateau shows that the membrane has become impermeable to Q at high concentration",
        "Q is being actively transported and P is not, because only active transport saturates",
        "Q crosses through a finite number of transport proteins that become saturated, while P crosses the bilayer directly, so its flux stays proportional to the gradient with no ceiling",
      ],
      correctIndex: 3,
      explanation:
        "Fick's law makes simple diffusion proportional to the concentration difference with no upper limit, so a straight line through the origin is what an unmediated crossing looks like. A plateau requires a countable number of binding sites, all of them occupied. Saturation therefore identifies protein mediation.",
      misconception:
        "Reading saturation as proof of active transport. Saturation follows from there being a finite number of transporters, not from energy being spent, and facilitated diffusion through a carrier saturates while running strictly downhill.",
    },
    {
      id: "memb-check-secondary",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Explain why blocking a pump stops a different transporter",
      prompt:
        "Intestinal cells absorb glucose from the gut lumen even when luminal glucose is below cytosolic glucose, using a carrier that moves two sodium ions inwards for each glucose molecule. A drug that inhibits the sodium-potassium ATPase abolishes this uptake within minutes, although the drug does not bind the glucose carrier at all. Why?",
      options: [
        "The drug must be changing membrane fluidity, which indirectly disables the glucose carrier",
        "The carrier hydrolyses ATP at its own binding site, and the drug lowers cellular ATP",
        "The pump transports glucose itself, so inhibiting it removes the only route glucose has",
        "The pump supplies the sodium gradient that the carrier spends, so once that gradient collapses the inward sodium movement no longer releases enough free energy to carry glucose uphill",
      ],
      correctIndex: 3,
      explanation:
        "Secondary active transport is uphill movement of one solute paid for by downhill movement of another. With sodium at 145 mmol dm⁻³ outside and 12 mmol dm⁻³ inside at −70 mV, each mole entering releases about 13 kJ, so two moles release about 26 kJ — enough in principle to hold glucose against a concentration ratio of order 10⁴. Remove the gradient and that budget disappears, even though the drug never touches the carrier.",
      misconception:
        "Assuming a transporter that does uphill work must hydrolyse ATP itself. The energy can be borrowed from a gradient some other pump built, which is why an inhibitor acting several steps upstream stops the process completely.",
    },
    {
      id: "memb-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar system",
      title: "Price a proton gradient in a bacterium",
      prompt:
        "A bacterium holds its cytoplasm at pH 7.6 while the medium outside is at pH 6.6, and its membrane potential is −140 mV, inside negative. It imports an amino acid by symport with one proton. How much free energy does each mole of protons release on entering, at 310 K? Take R = 8.314 J mol⁻¹ K⁻¹ and F = 96 485 C mol⁻¹.",
      options: [
        "About −5.9 kJ mol⁻¹, since only the pH difference can do chemical work",
        "About −13.5 kJ mol⁻¹, since a membrane potential acts on an ion and a pH difference does not",
        "About −19.4 kJ mol⁻¹, being a chemical term of −5.9 kJ mol⁻¹ added to an electrical term of −13.5 kJ mol⁻¹",
        "Zero, because a symporter moves the proton and the amino acid in the same direction so the two contributions cancel",
      ],
      correctIndex: 2,
      explanation:
        "A proton entering moves from 10⁻⁶·⁶ to 10⁻⁷·⁶ mol dm⁻³, a tenfold fall in concentration, giving RT ln(0.1) = 2577 × (−2.303) = −5934 J. It also moves from 0 to −140 mV, giving (+1)(96 485)(−0.140) = −13 508 J. The two add to about −19.4 kJ mol⁻¹, which is the same figure obtained by multiplying the proton-motive force of −201 mV by the Faraday constant.",
      misconception:
        "Keeping only one of the two terms. A proton is a chemical species and a unit of charge at once, so its electrochemical gradient always has both parts; here the electrical term is more than twice the chemical one, and dropping it underestimates the available energy threefold.",
    },
    {
      id: "memb-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Direction comes from the gradient, rate comes from the route",
      points: [
        "A bilayer forms because water excludes hydrocarbon; it self-assembles, reseals, and behaves as a two-dimensional fluid whose fluidity is tuned by tail length, unsaturation, and cholesterol.",
        "What crosses unaided is decided by solubility in hydrocarbon rather than by size, and ions essentially never cross because they would have to abandon their hydration shells.",
        "Diffusive flux is proportional to area and to the concentration difference and inversely to thickness, so diffusion erases gradients and never builds them.",
        "Water moves down its own potential gradient until an opposing pressure cancels the imbalance; osmolarity counts all particles but tonicity counts only impermeant ones and is meaningful only relative to a named membrane.",
        "Channels and carriers saturate because they are countable, which marks protein mediation without saying anything about whether energy is spent.",
        "Primary active transport stores free energy in an electrochemical gradient with a concentration term and a charge term, and secondary active transport draws on that store without touching ATP.",
      ],
      transferRule:
        "Before predicting any movement across a membrane, write both terms of the electrochemical gradient to fix the direction, then ask which protein provides the route to fix the rate; the two questions have separate answers.",
      nextLessonId: "lesson.biology.enzymes",
    },
  ],
};

const enzymes: Lesson = {
  id: "lesson.biology.enzymes",
  slug: "enzymes-and-inhibition",
  number: "10.3",
  stageId: "stage.biology_cell",
  discipline: "biology",
  title: "Enzymes and inhibition",
  summary:
    "Separate what a catalyst changes from what it cannot, read Vmax and Km off a saturation curve, and identify a mode of inhibition from rate data rather than from a description.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "State precisely what a catalyst alters and what it leaves untouched.",
    "Explain catalysis as stabilisation of the transition state, and induced fit as how a flexible site achieves it.",
    "Interpret Vmax and Km from a Michaelis-Menten rate curve.",
    "Extract Vmax and Km from rate data using a double-reciprocal plot.",
    "Distinguish competitive, non-competitive, and uncompetitive inhibition from rate measurements.",
    "Explain a temperature optimum as the crossing point of two opposing effects.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.kinetics",
    "lesson.biology.cell_structure",
  ],
  blocks: [
    {
      id: "enz-purpose",
      type: "concept",
      eyebrow: "What a catalyst does",
      title: "An enzyme changes when equilibrium arrives, not where it lies",
      paragraphs: [
        "Almost every reaction a cell depends on is thermodynamically favourable and kinetically hopeless. The hydrolysis of a peptide bond releases free energy, yet a peptide left in neutral water at body temperature survives for years, because the path from reactant to product runs over a high activation barrier and only a minute fraction of molecules carry enough energy to cross it at any moment. An enzyme lowers that barrier. Rate enhancements of 10⁶ to 10¹⁷ are ordinary, so a reaction that would take a century is completed in milliseconds, and the cell gains control over which of the many favourable reactions available actually happen.",
        "What an enzyme does not do is at least as important, and it is the point learners most often get wrong. The free energy change of the reaction is fixed by the free energies of substrate and product. An enzyme is neither: it emerges from the reaction chemically unchanged, so it cannot appear in the balance. Therefore ΔG is unchanged, and since the equilibrium constant is related to it by K = e^(−ΔG°′ / RT), the equilibrium constant is unchanged too. The composition finally reached is the same with the enzyme as without it.",
        "The reason is worth holding onto, because it also explains why the claim could not be otherwise. Forward and reverse reactions pass through the same transition state. Lowering the energy of that state lowers the barrier seen from both sides by the same amount, so the forward and reverse rate constants are multiplied by the same factor and their ratio, which is the equilibrium constant, is untouched. An enzyme that accelerated only one direction would be manufacturing free energy out of nothing. Catalysts change how quickly a system arrives at equilibrium; nothing else.",
      ],
      callout:
        "A catalyst multiplies the forward and reverse rate constants equally, so ΔG and K are both unchanged.",
    },
    {
      id: "enz-visual-curve",
      type: "visual",
      eyebrow: "See the ceiling",
      title: "Rate rises with substrate and then refuses to rise further",
      introduction:
        "Plot initial rate against substrate concentration and the curve does something that simple chemical kinetics does not: it bends over to a horizontal asymptote. That shape is the whole of Michaelis-Menten kinetics made visible.",
      visual: "enzyme_kinetics",
      caption:
        "Two numbers describe the curve. The height of the asymptote is Vmax, set by how much enzyme is present and how fast each molecule can turn over. The substrate concentration at half that height is Km, set by how readily substrate engages the enzyme. Read them in that order, because Km is defined in terms of Vmax.",
    },
    {
      id: "enz-active-site",
      type: "concept",
      eyebrow: "How the barrier falls",
      title: "Catalysis is holding the transition state more tightly than the substrate",
      paragraphs: [
        "The active site is a small pocket, typically a few per cent of the protein's volume, lined by side chains brought together from distant parts of the folded chain. That is why the rest of the protein is not surplus: the fold is the scaffold that positions the catalytic residues. Inside the pocket the enzyme does several things at once. It binds two substrates in the correct relative orientation, so that a collision which would otherwise be improbable becomes certain. It excludes bulk water, changing the local environment. And its side chains donate and accept protons, stabilise developing charge, or form transient covalent bonds with the substrate.",
        "All of these mechanisms serve one end. The barrier is the free energy of the transition state relative to the substrate, so the barrier falls if the transition state is stabilised more than the substrate is. An enzyme that bound its substrate too well would deepen the starting well and raise the barrier rather than lower it, which is a real design constraint and not a curiosity. The strongest evidence for this account is that stable molecules shaped like the transition state — transition-state analogues — bind many orders of magnitude more tightly than the substrate does, and several important drugs are built on that principle.",
        "The older lock-and-key picture, with a rigid site exactly complementary to the substrate, captures specificity but misses this point. Induced fit is the correction: the site is flexible, and substrate binding drives a conformational change that closes the site around it and completes the catalytic arrangement. Flexibility also explains how specificity can be tuned. Some enzymes accept one substrate and nothing else; others accept a family related by one structural feature, which is why a single liver enzyme can oxidise many different alcohols. Specificity is a property that evolution sets at whatever level the organism needs, not an absolute.",
      ],
      callout:
        "The barrier falls only insofar as the transition state is bound more tightly than the substrate.",
    },
    {
      id: "enz-check-equilibrium",
      type: "check",
      eyebrow: "Fix the boundary",
      title: "Decide what the enzyme moved",
      prompt:
        "An uncatalysed reaction A ⇌ B has ΔG°′ = −12 kJ mol⁻¹ at 310 K and takes several days to reach equilibrium. An enzyme is added and equilibrium is reached in under a second. What is true of the final position of equilibrium and of ΔG°′?",
      options: [
        "The equilibrium lies further towards B and ΔG°′ is more negative, because the enzyme has lowered the energy barrier",
        "Both the equilibrium position and ΔG°′ are unchanged, because the enzyme lowered the barrier equally in both directions and only accelerated the approach to the same end point",
        "The equilibrium position is unchanged but ΔG°′ becomes less negative, because some free energy was consumed in catalysis",
        "The equilibrium lies further towards B while ΔG°′ stays the same, since the enzyme favours product formation without altering the thermodynamics",
      ],
      correctIndex: 1,
      explanation:
        "ΔG°′ is fixed by the free energies of A and B, and the enzyme is neither, since it leaves the reaction unchanged. An unchanged ΔG°′ means an unchanged equilibrium constant: K = e^(12000 / (8.314 × 310)) = e⁴·⁶⁶ ≈ 105, both before and after. The transition state is common to both directions, so lowering it multiplies both rate constants by the same factor and leaves their ratio alone.",
      misconception:
        "Believing a catalyst pushes a reaction towards products, which the last option states in its most tempting form by keeping ΔG°′ fixed while still moving the equilibrium. The two cannot be separated: K and ΔG°′ are two ways of writing the same fact.",
    },
    {
      id: "enz-mm",
      type: "concept",
      eyebrow: "Two numbers",
      title: "Saturation is what happens when the enzyme runs out of itself",
      paragraphs: [
        "Add substrate to a fixed quantity of enzyme and measure the initial rate. At low substrate concentration most active sites are empty, so doubling the substrate roughly doubles the rate and the response is nearly proportional. At high substrate concentration nearly every site is occupied at every moment, and adding more substrate changes nothing because there is nothing free for it to bind. The rate therefore approaches a ceiling. That ceiling is Vmax, and it is a property of the amount of enzyme present multiplied by how fast a single enzyme molecule can process a bound substrate. Double the enzyme and Vmax doubles; Vmax is not an intrinsic constant of the protein.",
        "The whole curve is captured by v = Vmax[S] / (Km + [S]). Put [S] = Km into it and the fraction becomes Km / 2Km = 1/2, so v = Vmax / 2. That is the definition of Km: the substrate concentration at which the enzyme runs at half its maximum rate. Its units are those of concentration, never of rate, and confusing the two is the most common error with this expression. Substituting a few values shows what the number means in practice: at [S] = 4Km the enzyme is at 80 per cent of Vmax, and at [S] = 10Km it is at 91 per cent, so saturation is approached slowly and is never quite reached.",
        "Because Km is the concentration needed to get halfway, a small Km means the enzyme is already working near capacity at low substrate concentration, and a large Km means it needs a great deal of substrate before it does much. Km is therefore an inverse index of how readily the enzyme engages its substrate, and it is often described loosely as an inverse measure of affinity. That reading is a good approximation and not an identity: Km equals the dissociation constant only when the chemical step is much slower than the release of substrate, which is not always so. The physiological point survives either way. Two enzymes acting on glucose, one with a Km well below normal blood glucose and one with a Km above it, will respond quite differently to a meal, and that difference is the design.",
      ],
      callout: "v = Vmax[S] / (Km + [S]), and v = Vmax / 2 exactly when [S] = Km",
    },
    {
      id: "enz-worked-km",
      type: "worked",
      eyebrow: "Worked example",
      title: "Extract Vmax and Km from a table of rates",
      scenario:
        "An enzyme assay gives these initial rates in μmol min⁻¹ at the substrate concentrations shown in mmol dm⁻³: 0.50 gives 12.0; 1.0 gives 20.0; 2.0 gives 30.0; 4.0 gives 40.0; 8.0 gives 48.0; 20.0 gives 54.5. Determine Vmax and Km.",
      steps: [
        {
          label: "Test whether the data have reached saturation",
          decision:
            "Reading Vmax off the highest measured rate is the standard trap, so check first whether the curve has actually flattened.",
          working:
            "raising substrate from 8.0 to 20.0 mmol dm⁻³, a factor of 2.5, still raises the rate from 48.0 to 54.5, so the plateau has not been reached and 54.5 would be an underestimate",
        },
        {
          label: "Linearise by taking reciprocals",
          decision:
            "A hyperbola cannot be extrapolated reliably by eye, but a straight line can. Inverting both axes turns v = Vmax[S] / (Km + [S]) into 1/v = (Km / Vmax)(1 / [S]) + 1 / Vmax.",
          working:
            "at 1/[S] = 2.00, 1/v = 0.0833; at 1/[S] = 0.050, 1/v = 0.0183",
        },
        {
          label: "Take the gradient from two well-separated points",
          decision:
            "Widely spaced points minimise the effect of reading error on the gradient, and the lowest substrate concentrations give the largest reciprocals and so the widest spread.",
          working:
            "gradient = (0.0833 − 0.0183) / (2.00 − 0.050) = 0.0650 / 1.950 = 0.0333",
        },
        {
          label: "Read Vmax from the vertical intercept",
          decision:
            "The intercept is the value at 1/[S] = 0, which is infinite substrate, so this step is exactly the extrapolation that could not be done on the hyperbola.",
          working:
            "intercept = 0.0183 − (0.0333 × 0.050) = 0.0167, so Vmax = 1 / 0.0167 = 60.0 μmol min⁻¹",
        },
        {
          label: "Recover Km from the gradient",
          decision:
            "The gradient is Km / Vmax, so Km follows once Vmax is known and cannot be obtained from the gradient alone.",
          working: "Km = 0.0333 × 60.0 = 2.00 mmol dm⁻³",
        },
      ],
      answer:
        "The enzyme has Vmax = 60.0 μmol min⁻¹ and Km = 2.0 mmol dm⁻³, so the highest measured rate of 54.5 was already 91 per cent of the maximum but still short of it.",
      plausibility:
        "Test the fitted parameters on two measurements that were not used to obtain them. The model predicts half of Vmax, that is 30.0 μmol min⁻¹, at [S] = Km = 2.0 mmol dm⁻³, and the table gives exactly 30.0. It predicts 0.80 × 60.0 = 48.0 μmol min⁻¹ at [S] = 4Km = 8.0 mmol dm⁻³, and the table gives exactly 48.0.",
    },
    {
      id: "enz-visual-lineweaver",
      type: "visual",
      eyebrow: "Straighten it out",
      title: "Reciprocals put the answer where it can be read off an axis",
      introduction:
        "The information wanted from a saturation curve sits at infinite substrate concentration, which is the one place on the graph that cannot be plotted. Plotting 1/v against 1/[S] moves that point to the vertical axis.",
      visual: "lineweaver",
      caption:
        "Vertical intercept 1 / Vmax, gradient Km / Vmax, horizontal intercept −1 / Km. The transformation compresses the high-substrate data into a cluster near the origin and stretches the low-substrate data, so the least reliable measurements carry the most weight on the line — which is why the plot is used for reading mechanism rather than for precise fitting.",
    },
    {
      id: "enz-check-km",
      type: "check",
      eyebrow: "Your turn",
      title: "Compare two enzymes at one substrate concentration",
      prompt:
        "Two enzymes catalyse the same reaction on the same substrate and have identical Vmax. Enzyme M has Km = 0.050 mmol dm⁻³ and enzyme N has Km = 8.0 mmol dm⁻³. At a substrate concentration of 0.50 mmol dm⁻³, which runs closer to its maximum rate, and what does the difference in Km indicate?",
      options: [
        "N, because a larger Km means the enzyme can handle more substrate",
        "M, because a low Km means a high maximum rate",
        "Neither, because Km does not affect the rate at a given substrate concentration; only Vmax does",
        "M, because it reaches half its maximum rate at a far lower substrate concentration, putting it at about 91 per cent of Vmax here against about 6 per cent for N",
      ],
      correctIndex: 3,
      explanation:
        "The fraction of Vmax reached is [S] / (Km + [S]). For M that is 0.50 / 0.55 = 0.91, and for N it is 0.50 / 8.5 = 0.059. A low Km means the enzyme saturates at low substrate concentration. This is the difference between the two glucose-phosphorylating enzymes in the body: one works flat out at ordinary tissue glucose concentrations, the other only when glucose is high.",
      misconception:
        "Reading Km as a rate. Km has units of concentration, so it cannot be a maximum rate; Vmax sets how fast the enzyme can go and Km sets how much substrate it needs before it gets there.",
    },
    {
      id: "enz-inhibition",
      type: "concept",
      eyebrow: "Turning it down",
      title: "Where an inhibitor binds determines which constant it changes",
      paragraphs: [
        "A competitive inhibitor resembles the substrate closely enough to occupy the active site, so substrate and inhibitor compete for the same place. More substrate wins back a greater share of the sites, and at sufficiently high substrate concentration the inhibitor is displaced almost entirely. Vmax is therefore unchanged, because the ceiling is defined at infinite substrate, while the apparent Km rises: more substrate is needed to reach half of that unchanged maximum. The relation is Km(apparent) = Km(1 + [I] / Ki), where Ki is the dissociation constant of the enzyme-inhibitor complex, so a small Ki marks a tightly bound inhibitor.",
        "A non-competitive inhibitor binds elsewhere on the enzyme and distorts the active site indirectly. Substrate cannot displace it, because they are not competing for the same place, so the effect is a fixed fractional loss of activity at every substrate concentration: Vmax falls and Km is unchanged. An uncompetitive inhibitor binds only to the enzyme-substrate complex, which produces the initially surprising result that Vmax and Km fall by the same factor — the inhibitor removes complex from the pool, and removing product-forming complex also pulls more substrate into binding. In one sentence: raising substrate defeats a competitive inhibitor, leaves a non-competitive one untouched, and makes an uncompetitive one worse.",
        "Cells use the non-active-site route deliberately. An allosteric enzyme has a regulatory site at which a small molecule binds and shifts the protein between a more active and a less active conformation, so an unrelated metabolite can control the enzyme without resembling its substrate at all. Feedback inhibition is the standard arrangement: the end product of a pathway inhibits the enzyme catalysing the first committed step, so the pathway measures its own output and throttles its own input. That is why the first step of a pathway is usually the regulated one — there is no advantage in making intermediates that will not be used.",
      ],
      callout:
        "Competitive: Km up, Vmax unchanged. Non-competitive: Vmax down, Km unchanged. Uncompetitive: both down.",
    },
    {
      id: "enz-worked-inhibition",
      type: "worked",
      eyebrow: "Worked example",
      title: "Name a mechanism and extract Ki from two data sets",
      scenario:
        "The enzyme from the earlier assay, with Vmax = 60.0 μmol min⁻¹ and Km = 2.0 mmol dm⁻³, is reassayed in the presence of inhibitor J at 5.0 μmol dm⁻³. The rates with J present, in μmol min⁻¹, are 4.6 at 0.50 mmol dm⁻³ substrate, 8.6 at 1.0, 15.0 at 2.0, 24.0 at 4.0, 34.3 at 8.0, and 46.2 at 20.0. Identify the mode of inhibition and calculate Ki.",
      steps: [
        {
          label: "Refuse to judge from raw rates",
          decision:
            "Every mode of inhibition lowers the rate at ordinary substrate concentrations, so the raw numbers cannot distinguish them; the parameters must be extracted first.",
          working:
            "at 2.0 mmol dm⁻³ the rate falls from 30.0 to 15.0, which is consistent with any mechanism",
        },
        {
          label: "Linearise the inhibited data",
          decision:
            "The same double-reciprocal treatment applied to the inhibited set puts both data sets on axes where the two constants are read separately rather than mixed together.",
          working:
            "at 1/[S] = 2.00, 1/v = 1 / 4.6 = 0.217; at 1/[S] = 0.050, 1/v = 1 / 46.2 = 0.0217",
        },
        {
          label: "Compare the two intercepts",
          decision:
            "The vertical intercept is 1 / Vmax, so an unchanged intercept settles at once whether the ceiling has moved.",
          working:
            "gradient = (0.217 − 0.0217) / 1.950 = 0.100; intercept = 0.0217 − (0.100 × 0.050) = 0.0167, identical to the uninhibited value, so Vmax is still 60.0 μmol min⁻¹",
        },
        {
          label: "Obtain the apparent Km and name the mechanism",
          decision:
            "With Vmax fixed, the gradient gives the apparent Km, and the pattern of one constant moving while the other holds still identifies the mode.",
          working:
            "Km(apparent) = 0.100 × 60.0 = 6.0 mmol dm⁻³, a threefold rise with Vmax unchanged, which is competitive inhibition",
        },
        {
          label: "Solve for the inhibition constant",
          decision:
            "Ki is the only unknown left in the competitive relation, and it is what makes the result transferable to other inhibitor concentrations.",
          working:
            "6.0 = 2.0(1 + 5.0 / Ki), so 3.0 = 1 + 5.0 / Ki, giving 5.0 / Ki = 2.0 and Ki = 2.5 μmol dm⁻³",
        },
      ],
      answer:
        "J is a competitive inhibitor with Ki = 2.5 μmol dm⁻³, meaning that 2.5 μmol dm⁻³ of it is enough to double the apparent Km — a concentration about 800 times smaller than the Km of 2.0 mmol dm⁻³, so J occupies the site far more readily than the substrate does.",
      plausibility:
        "Check the defining behaviour directly in the data. At 2.0 mmol dm⁻³ substrate the inhibited rate is 15.0 against 30.0, a shortfall of 50 per cent; at 20.0 mmol dm⁻³ it is 46.2 against 54.5, a shortfall of only 15 per cent. The deficit shrinks as substrate rises, which is what surmountable competition looks like. A non-competitive inhibitor would impose the same percentage shortfall at every substrate concentration.",
    },
    {
      id: "enz-check-inhibition",
      type: "check",
      eyebrow: "Read the data",
      title: "Classify an inhibitor from a rate table",
      prompt:
        "An enzyme is assayed with and without inhibitor Z. Without Z, the rates in μmol min⁻¹ at substrate concentrations of 1, 2, 5, and 50 mmol dm⁻³ are 20, 30, 43, and 58. With Z at a fixed concentration they are 10, 15, 21, and 29. What kind of inhibitor is Z?",
      options: [
        "Non-competitive, because the rate is halved at every substrate concentration, so Vmax has fallen while the substrate concentration giving half-maximal rate is unchanged",
        "Competitive, because the rate is lower at every substrate concentration tested",
        "Competitive, because the absolute difference between the two sets grows as substrate rises",
        "Uncompetitive, because both Vmax and Km have been reduced by the same factor",
      ],
      correctIndex: 0,
      explanation:
        "Form the ratios: 10/20, 15/30, 21/43, and 29/58 are all one half within rounding. A constant fractional reduction that substrate cannot overcome is the signature of non-competitive inhibition. Vmax falls from about 60 to about 30 μmol min⁻¹, and half of the new Vmax, 15 μmol min⁻¹, still occurs at 2 mmol dm⁻³, so Km is unchanged at 2 mmol dm⁻³. An uncompetitive inhibitor halving Vmax would also halve Km to 1 mmol dm⁻³ and would give roughly 15, 20, 25, and 29 instead.",
      misconception:
        "Calling any inhibitor competitive because it lowers the rate, or reading the growing absolute gap as evidence of competition. The discriminating question is what happens to the fractional deficit as substrate rises: it shrinks towards zero for a competitive inhibitor and stays constant for a non-competitive one.",
    },
    {
      id: "enz-conditions",
      type: "concept",
      eyebrow: "Conditions matter",
      title: "An optimum is where two opposing effects cross",
      paragraphs: [
        "Enzyme activity depends steeply on pH, for two reasons that operate on different scales. Locally, catalysis usually requires particular side chains in particular protonation states — a histidine that must be able to accept a proton, a carboxylate that must be ionised — and each of those is governed by its own pKa, so activity peaks over a narrow band. Globally, extremes of pH alter the charge on many side chains at once and unfold the protein. The band that results matches where the enzyme works: near pH 7.4 for most cytosolic enzymes, near 4.8 for lysosomal hydrolases, near 2 for pepsin in the stomach. An optimum is an adaptation to a compartment, not a universal constant.",
        "Temperature is the more instructive case, because the familiar curve is the product of two effects pulling in opposite directions. Raising the temperature increases the fraction of collisions carrying enough energy to cross the activation barrier, so the rate constant climbs steadily — the Arrhenius behaviour already met in kinetics. Raising the temperature also increases the fraction of enzyme molecules that have lost their folded structure, and that fraction rises very steeply once the unfolding transition is entered. A rising function multiplied by a falling one has a maximum, and the position of that maximum is what is called the optimum temperature.",
        "The two effects are distinguished experimentally by cooling. A rate that fell because molecules were moving more slowly recovers when the temperature is restored. A rate that fell because the protein unfolded does not, because an unfolded chain in a crowded solution aggregates rather than refolding. That test also shows why the optimum is an operational figure rather than a fixed property: denaturation takes time, so an assay run for ten minutes reports a lower optimum than the same assay run for ten seconds. Quoted optimum temperatures should always be read as belonging to a particular assay, not to the enzyme alone.",
      ],
      callout:
        "Rate climbs with temperature while folded enzyme falls with it; the optimum is where the product of the two peaks.",
    },
    {
      id: "enz-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar system",
      title: "Diagnose a descending limb",
      prompt:
        "An enzyme's rate is measured every 5 °C from 10 °C to 70 °C. It rises steadily to a maximum at 45 °C and then falls sharply, reaching zero by 60 °C. A second sample held at 55 °C for ten minutes and then returned to 37 °C shows almost no activity. What do the two observations together establish?",
      options: [
        "The rising limb reflects more frequent and more energetic collisions, the falling limb reflects irreversible loss of the folded structure, and the peak is where the two cross; the failure to recover on cooling shows the fall is denaturation rather than a reversible slowing",
        "The enzyme has a temperature at which its chemistry is intrinsically fastest, and above that temperature the reaction becomes thermodynamically unfavourable",
        "Both limbs are explained by collision frequency, which itself peaks at 45 °C",
        "The enzyme is denatured at every temperature above 10 °C, and the peak marks the point at which substrate ran out",
      ],
      correctIndex: 0,
      explanation:
        "Two processes with opposite temperature dependence are being multiplied. The cooling experiment is the discriminating one: a reversible effect would recover on returning to 37 °C, and denaturation does not, because the unfolded chain aggregates instead of refolding. Since denaturation is time-dependent, the position of the peak also depends on how long the assay ran.",
      misconception:
        "Treating the optimum as a property of the chemistry. Collision frequency does not fall as temperature rises, so it cannot produce a descending limb, and temperature does not reverse the sign of ΔG for the reaction being catalysed.",
    },
    {
      id: "enz-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Two constants describe the enzyme, and an inhibitor moves one of them",
      points: [
        "An enzyme lowers the activation barrier equally in both directions, so it changes how quickly equilibrium is reached and leaves ΔG, the equilibrium constant, and the final composition untouched.",
        "Catalysis works by binding the transition state more tightly than the substrate, and induced fit is how a flexible active site completes that arrangement.",
        "The rate obeys v = Vmax[S] / (Km + [S]): Vmax is the asymptote at saturating substrate and depends on how much enzyme is present, while Km is the substrate concentration giving half of it.",
        "A low Km means the enzyme saturates at low substrate concentration, so Km is an inverse index of how readily the substrate engages, measured in units of concentration and never of rate.",
        "A double-reciprocal plot has vertical intercept 1 / Vmax and gradient Km / Vmax, which is why the mode of inhibition can be read from which of the two moves.",
        "Competitive inhibition raises apparent Km and is surmountable by substrate; non-competitive and uncompetitive inhibition lower apparent Vmax and are not; and physiological control is usually allosteric, with an end product inhibiting the first committed step.",
      ],
      transferRule:
        "When a response saturates, look for a countable resource: the asymptote measures how much of it exists and the half-saturation point measures how hard it is to engage, and any agent that interferes must move one of those two numbers rather than both.",
      nextLessonId: "lesson.biology.metabolism",
    },
  ],
};

const metabolism: Lesson = {
  id: "lesson.biology.metabolism",
  slug: "metabolism-and-bioenergetics",
  number: "10.4",
  stageId: "stage.biology_cell",
  discipline: "biology",
  title: "Metabolism and bioenergetics",
  summary:
    "Treat respiration as three stages defined by their inputs, outputs, and regulation, understand the proton gradient as stored free energy, and locate a lesion in a pathway from what accumulates and what falls.",
  estimatedMinutes: 37,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish catabolism from anabolism and explain why ATP coupling works.",
    "State the location, oxygen dependence, and net yield of glycolysis.",
    "Describe the link reaction and the TCA cycle as carbon stripping and reducing-equivalent generation.",
    "Explain chemiosmosis and identify oxygen's role as terminal electron acceptor.",
    "Quote the approximate ATP yield per glucose and explain honestly why the total is a range.",
    "Localise a lesion in a pathway by predicting what accumulates and what falls.",
  ],
  prerequisiteLessonIds: [
    "lesson.biology.enzymes",
    "lesson.chemistry.entropy_gibbs",
    "lesson.chemistry.redox",
  ],
  blocks: [
    {
      id: "metab-purpose",
      type: "concept",
      eyebrow: "One currency",
      title: "Metabolism is a market with a single medium of exchange",
      paragraphs: [
        "Metabolism divides into two halves that have to be connected. Catabolism breaks fuels into smaller, more oxidised, more numerous pieces and releases free energy. Anabolism builds macromolecules from small precursors and consumes free energy. Neither could be run against the other directly, because the reactions concerned are chemically unrelated and happen in different places at different times. What links them is a shared currency: catabolism converts released free energy into ATP, and anabolism spends ATP. Because every process trades in the same molecule, no pathway needs to know anything about any other, and a cell can hold hundreds of processes in balance through one intermediary.",
        "Coupling works because free energy changes add. A reaction with ΔG°′ = +14 kJ mol⁻¹ will not proceed usefully on its own, but if it is coupled to ATP hydrolysis at about −30.5 kJ mol⁻¹ under biochemical standard conditions, the pair has ΔG°′ = −16.5 kJ mol⁻¹ and does proceed. The coupling has to be mechanical, not merely arithmetic: the two reactions must share an intermediate or an enzyme, so that the unfavourable step physically cannot occur without the favourable one. Simply carrying out both in the same beaker heats the beaker and achieves nothing.",
        "One more feature makes ATP the right choice. Its hydrolysis is favourable but not extravagantly so, which places it in the middle of the range of phosphate-transfer potentials rather than at the top, so it can accept a phosphate group from more energetic donors and pass one to less energetic acceptors. A currency at the extreme of the range could only ever move in one direction. Note also that the −30.5 kJ mol⁻¹ figure is a standard-state value; inside a cell, where ATP is held far above its equilibrium ratio with ADP, hydrolysis delivers closer to 50 kJ mol⁻¹.",
      ],
      callout:
        "Coupling requires a shared intermediate; adding two ΔG values on paper is not enough.",
    },
    {
      id: "metab-visual-map",
      type: "visual",
      eyebrow: "See the shape",
      title: "Three stages, converging on one funnel",
      introduction:
        "The intermediates of respiration are not worth memorising, and a map drawn as a list of them teaches nothing. Drawn at the level of inputs, outputs, and locations, the same pathway becomes a structure that can be reasoned about.",
      visual: "metabolic_map",
      caption:
        "Fats, sugars, and amino acids enter by different routes and converge on acetyl groups, which is why a cell can run on almost anything. Note where each stage sits: glycolysis in the cytosol, the link reaction and cycle in the mitochondrial matrix, the chain on the inner membrane. Location determines what each stage can reach.",
    },
    {
      id: "metab-stages",
      type: "concept",
      eyebrow: "Inputs and outputs",
      title: "The first two stages release little ATP and a great deal of reducing power",
      paragraphs: [
        "Glycolysis converts one glucose into two pyruvate molecules in the cytosol, in ten steps, and its accounting is worth knowing exactly. Two ATP are invested at the start and four are produced later, so the net yield is two ATP per glucose, made by substrate-level phosphorylation — a phosphate group transferred directly from a substrate to ADP, with no membrane and no gradient involved. Two NAD⁺ are reduced to two NADH. Nothing in the sequence uses molecular oxygen, so glycolysis runs unchanged in an anaerobic cell, provided only that something regenerates NAD⁺; the pool of NAD⁺ is small, and without recycling glycolysis halts within seconds.",
        "Pyruvate entering the mitochondrial matrix meets the link reaction, which removes one carbon as carbon dioxide, reduces another NAD⁺, and attaches the remaining two-carbon acetyl group to coenzyme A. The tricarboxylic acid cycle then accepts that acetyl group, and per turn releases two more carbon dioxide molecules, reduces three NAD⁺ and one FAD, and makes a single nucleoside triphosphate by substrate-level phosphorylation. Two turns are needed per glucose. The cycle is also where fat and amino acid catabolism arrive, which is why it functions as a hub rather than as a sugar pathway.",
        "Add up what the first two stages have produced and the surprise is how little of it is ATP: four ATP-equivalents per glucose from substrate-level phosphorylation, against ten NADH and two FADH₂. Almost all the free energy released so far has been stored as reducing power rather than as currency, and the glucose has been completely dismantled — all six carbons have left as carbon dioxide before the electron transport chain has done anything at all. The chain's job is not to break down glucose. It is to convert the reducing power into ATP.",
      ],
      callout:
        "Per glucose: net 2 ATP and 2 NADH from glycolysis, then 2 NADH from the link reaction and 6 NADH, 2 FADH₂, 2 ATP from two turns of the cycle.",
    },
    {
      id: "metab-check-glycolysis",
      type: "check",
      eyebrow: "Your turn",
      title: "Decide what survives the loss of oxygen",
      prompt:
        "A cell is placed under nitrogen so that no oxygen is available. Which process continues at close to its previous rate, and for what reason?",
      options: [
        "The tricarboxylic acid cycle, because no step of it has oxygen as a reactant",
        "Glycolysis, provided NAD⁺ is regenerated by fermentation, because no step of it uses oxygen and its ATP comes from substrate-level phosphorylation",
        "Oxidative phosphorylation, because ATP synthase is driven by a proton gradient rather than by oxygen directly",
        "All three, because oxygen enters metabolism only at the final step and nothing upstream of that step depends on it",
      ],
      correctIndex: 1,
      explanation:
        "Glycolysis has no oxygen-requiring step and makes its ATP by transferring phosphate directly from substrate to ADP. Its single dependence is on a supply of NAD⁺, which fermentation provides. The cycle also contains no step that consumes oxygen, yet it stops without it, because its NADH and FADH₂ have nowhere to unload. Oxidative phosphorylation stops because the chain has no terminal acceptor.",
      misconception:
        "Reasoning that a pathway with no oxygen in its equations must be oxygen-independent, which is what the last option generalises. The dependence is indirect but complete for everything downstream of glycolysis, because the carriers are a small recycled pool rather than a consumable.",
    },
    {
      id: "metab-etc",
      type: "concept",
      eyebrow: "The conversion stage",
      title: "A proton gradient is free energy stored as a difference",
      paragraphs: [
        "NADH and FADH₂ deliver electrons to a series of carriers embedded in the inner mitochondrial membrane, arranged in order of increasing reduction potential. Electrons therefore fall down a potential ladder from about −0.32 V for the NAD⁺ and NADH couple to about +0.82 V for the oxygen and water couple, a total drop of roughly 1.14 V. Released in one step that would be a violent and largely wasted release. Released in several steps it can be captured, and what captures it is the pumping of protons from the matrix into the intermembrane space at three points along the chain. Oxygen's role is precise and limited: it accepts the electrons at the end, taking four electrons and four protons to form two water molecules. It is not a substrate of any earlier step.",
        "Pumping builds a difference in proton concentration and a difference in charge across the inner membrane. That combined electrochemical gradient is a store of free energy, and this is exactly the two-term quantity priced in the membranes lesson, now built deliberately rather than defended. ATP synthase is the only substantial route back: protons returning through it turn a rotor, and the mechanical rotation drives conformational changes in the catalytic head that release ATP already formed from ADP and phosphate. This is chemiosmosis, and it makes an unusual claim — the connection between oxidation and phosphorylation is not a chemical intermediate at all, but a gradient across a membrane.",
        "Two predictions follow directly from that claim, and both hold. The membrane must be intact and impermeable to protons, since a leaky membrane would discharge the store; and the two processes need not stay in step, since anything that lets protons return by another route will uncouple them. Ordinary respiration is regulated by exactly this linkage. When ATP is not being consumed, ADP runs short, protons stop returning through the synthase, the gradient builds up, and the back-pressure slows the chain. Respiration rate is therefore set by demand for ATP, which is respiratory control.",
      ],
      callout:
        "Oxidation and phosphorylation are connected by a proton gradient, not by a chemical intermediate.",
    },
    {
      id: "metab-visual-chemiosmosis",
      type: "visual",
      eyebrow: "Two circuits",
      title: "Electrons go one way and protons come back the other",
      introduction:
        "The confusion in this topic almost always comes from tracking one flow while the other is invisible. Drawing both — electrons through the chain, protons out and then back through the synthase — makes the coupling a matter of geometry.",
      visual: "chemiosmosis",
      caption:
        "The only place the two circuits meet is the membrane itself. Anything that gives protons a second way home leaves electron flow running at full speed while ATP output collapses, which is the signature of an uncoupler and the basis of the diagnostic test used later in this lesson.",
    },
    {
      id: "metab-worked-yield",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compare aerobic respiration with ethanol fermentation",
      scenario:
        "Complete oxidation of glucose has ΔG°′ ≈ −2840 kJ mol⁻¹, and ethanol fermentation, glucose to two ethanol and two carbon dioxide, has ΔG°′ ≈ −235 kJ mol⁻¹; both are literature values that vary by one or two per cent between sources. Taking ATP synthesis as +30.5 kJ mol⁻¹ under biochemical standard conditions, compare the two routes for ATP yield and for the fraction of released free energy conserved.",
      steps: [
        {
          label: "Count the ATP each route delivers",
          decision:
            "Yields must be stated per glucose and net of investment, and the aerobic figure is a range rather than a single number for reasons taken up in the next section.",
          working:
            "aerobic: 30 to 32 ATP per glucose; ethanol fermentation: 4 produced minus 2 invested in glycolysis, a net 2 ATP",
        },
        {
          label: "Convert ATP into kilojoules conserved",
          decision:
            "A count of molecules cannot be compared with a free energy change until both are in the same units.",
          working:
            "aerobic: 30 × 30.5 = 915 kJ to 32 × 30.5 = 976 kJ; fermentation: 2 × 30.5 = 61 kJ",
        },
        {
          label: "Express each as a fraction of what was released",
          decision:
            "Efficiency and yield are different questions, and separating them is the point of the comparison.",
          working:
            "aerobic: 915 / 2840 = 0.32 up to 976 / 2840 = 0.34; fermentation: 61 / 235 = 0.26",
        },
        {
          label: "Compare the two on both measures",
          decision:
            "Reporting only the ATP ratio would hide the more interesting result, which is that the two routes conserve comparable fractions of what each releases.",
          working:
            "ATP yield ratio 30 / 2 = 15 to 32 / 2 = 16; efficiency 32 to 34 per cent against 26 per cent",
        },
        {
          label: "Account for the missing energy",
          decision:
            "A free energy that was never released cannot have been wasted, so the difference between the two overall values must still be somewhere.",
          working:
            "2840 − 235 = 2605 kJ mol⁻¹ remains locked in the two ethanol molecules",
        },
      ],
      answer:
        "Aerobic respiration yields fifteen to sixteen times as much ATP per glucose as ethanol fermentation, yet the two conserve comparable fractions of the free energy each releases — about a third against a quarter. Fermentation is not an inefficient version of respiration; it is an incomplete oxidation that stops while the carbon is still reduced.",
      plausibility:
        "The 2605 kJ mol⁻¹ said to remain in the ethanol can be checked independently. Burning ethanol releases roughly 1.3 × 10³ kJ mol⁻¹, so two moles account for roughly 2.6 × 10³ kJ mol⁻¹ — which is why ethanol is a fuel and carbon dioxide is not, and why yeast leaves so much on the table.",
    },
    {
      id: "metab-check-oxygen",
      type: "check",
      eyebrow: "Apply the model",
      title: "Predict the state of the chain when its exit is blocked",
      prompt:
        "Cyanide binds the final complex of the electron transport chain and prevents electrons from reaching oxygen. Within a minute of exposure, what is the state inside the mitochondrion?",
      options: [
        "Oxygen consumption stops, the carriers of the chain become fully reduced, the proton gradient collapses, and oxidative phosphorylation stops",
        "Oxygen consumption stops but ATP synthesis continues, because ATP synthase is driven by the proton gradient rather than by oxygen",
        "Oxygen consumption stops and the carriers become fully oxidised, because no further electrons can enter the chain",
        "Oxygen consumption rises, because the cell compensates for the falling ATP concentration by respiring faster",
      ],
      correctIndex: 0,
      explanation:
        "Blocking the exit makes electrons back up, so every carrier upstream fills with them and the chain becomes reduced rather than oxidised. With nothing pumping, protons leak back and the gradient falls within seconds. The second option is right about what drives ATP synthase and wrong about the consequence.",
      misconception:
        "Treating the proton gradient as a tank that outlives the pump. Its capacity is tiny beside the flux passing through it, so it behaves more like a pressure held up by continuous pumping than like a reservoir.",
    },
    {
      id: "metab-yields",
      type: "concept",
      eyebrow: "An honest total",
      title: "The ATP yield per glucose is a range, and the reasons are known",
      paragraphs: [
        "Older textbooks give 36 or 38 ATP per glucose; current ones give about 30 to 32. The revision is not a correction of an arithmetic slip but a change in what is being claimed. The older figures assumed that each NADH yields exactly 3 ATP and each FADH₂ exactly 2, whole numbers that were never measured. What is measured is the number of protons pumped per pair of electrons and the number of protons required per ATP by the synthase, and neither ratio is an integer — the synthase rotor has a number of subunits that varies between species, so something close to 10 protons drives 3 ATP in mammals. Dividing one non-integer by another gives about 2.5 ATP per NADH and about 1.5 per FADH₂.",
        "Three further terms keep the total from being exact. The NADH made by glycolysis is in the cytosol and cannot cross the inner membrane, so its electrons enter by one of two shuttles: one delivers them as matrix NADH and one as FADH₂, and the choice differs between tissues, which alone moves the total between 30 and 32. Some of the proton gradient is spent importing phosphate and exchanging ADP for ATP rather than on synthesis. And the membrane leaks, so a fraction of the gradient is always dissipated as heat. Quoting 30 to 32 with these reasons attached is more useful than quoting any single number.",
        "Fermentation exists for one purpose, and it is not to make ATP. Glycolysis reduces NAD⁺ to NADH and the cell holds only a small pool of the carrier, so unless NAD⁺ is regenerated the pathway stops. Reducing pyruvate to lactate, or decarboxylating it to acetaldehyde and reducing that to ethanol, oxidises NADH back to NAD⁺. No ATP is made in either step; the two ATP of anaerobic metabolism come earlier, from glycolysis itself. The organic product is waste that still carries most of the glucose's free energy, which is why yeast makes a fuel and why muscle exports lactate to the liver to be rebuilt.",
      ],
      callout:
        "About 2.5 ATP per NADH and 1.5 per FADH₂, giving roughly 30 to 32 ATP per glucose depending on shuttle, leak, and transport costs.",
    },
    {
      id: "metab-worked-lesion",
      type: "worked",
      eyebrow: "Worked example",
      title: "Locate three lesions with an oxygen electrode",
      scenario:
        "Isolated mitochondria are suspended with succinate as substrate and with ADP and phosphate present. They consume oxygen at 80 nmol O₂ min⁻¹ per mg protein and synthesise ATP at 240 nmol min⁻¹ per mg. Three compounds are then tested on separate samples. Compound A raises oxygen consumption to 220 and drops ATP synthesis to near zero. Compound B drops both to near zero, and adding an uncoupler afterwards does not restore oxygen consumption. Compound C drops oxygen consumption to 15 and ATP synthesis to near zero, but adding an uncoupler restores oxygen consumption to about 210. Identify each compound.",
      steps: [
        {
          label: "Characterise the coupled baseline",
          decision:
            "A control must be interpreted before any treatment, and the ratio of ATP made to oxygen atoms consumed is the standard summary of coupling.",
          working:
            "80 nmol O₂ is 160 nmol of oxygen atoms, so the ratio is 240 / 160 = 1.5, the expected value for an FADH₂-linked substrate that bypasses the first pumping site",
        },
        {
          label: "Classify compound A",
          decision:
            "Oxygen consumption and ATP synthesis are linked only through the proton gradient, so a treatment that moves them in opposite directions must act on the gradient itself.",
          working:
            "respiration up from 80 to 220 while ATP falls to zero: the back-pressure has been removed, so A is an uncoupler",
        },
        {
          label: "Classify compound B using the uncoupler test",
          decision:
            "Everything stopping is ambiguous on its own, since a stalled chain and a broken chain look the same. Adding an uncoupler removes the gradient as a possible cause and is therefore the discriminating step.",
          working:
            "no rescue by an uncoupler means the chain cannot run even with no gradient opposing it, so B inhibits electron transport itself",
        },
        {
          label: "Classify compound C by the same test",
          decision:
            "The same intervention applied to a different result separates a chain that is broken from a chain that is merely blocked at its outlet.",
          working:
            "respiration restored from 15 to about 210 by an uncoupler means the chain is intact and was stalled by a gradient it could not discharge, so C blocks ATP synthase or the delivery of ADP to it",
        },
        {
          label: "Predict what accumulates in each case",
          decision:
            "Naming a lesion is only half the answer; the point of localising it is to forecast the state of the system on either side.",
          working:
            "A: carriers oxidised, gradient collapsed, energy released as heat. B: carriers reduced upstream of the block, NADH accumulating, gradient collapsed. C: carriers reduced, gradient and membrane potential at maximum",
        },
      ],
      answer:
        "A is an uncoupler, B inhibits the electron transport chain, and C inhibits ATP synthase or the transport of ADP to it. The discriminating measurement in every case is whether adding an uncoupler restores oxygen consumption.",
      plausibility:
        "The numbers are internally consistent. The uncoupled rate reached with A, 220, and the rate restored in the presence of C, about 210, agree to within five per cent — as they must, if both represent the same chain running with no back-pressure at all. No treatment can push sample B to that rate, which places its lesion inside the chain rather than downstream of it.",
    },
    {
      id: "metab-check-fermentation",
      type: "check",
      eyebrow: "Purpose, not product",
      title: "Say what the last step of fermentation is for",
      prompt:
        "Yeast growing on glucose in a sealed vessel switches to ethanol fermentation once the oxygen is exhausted. What is the purpose of the final step, in which acetaldehyde is reduced to ethanol?",
      options: [
        "It stores energy in ethanol for the same cell to retrieve later",
        "It regenerates NAD⁺ so that glycolysis can continue; the reduction conserves no energy itself, and the ethanol is excreted",
        "It generates the two ATP that anaerobic metabolism yields",
        "It removes acetaldehyde, which is toxic, and that is the whole reason the step exists",
      ],
      correctIndex: 1,
      explanation:
        "Glycolysis reduces NAD⁺ to NADH, and the cell holds only a small pool of the carrier, so unless it is re-oxidised the pathway halts within seconds. Reducing acetaldehyde is a disposal reaction that returns the carrier to its oxidised form. No ATP is made in it, and the two ATP of anaerobic metabolism come earlier, from substrate-level phosphorylation in glycolysis.",
      misconception:
        "Assuming that a step producing a reduced organic product must be storing energy for the cell that made it. Energy is indeed stored, but in a form the yeast cannot retrieve without oxygen; the point of the step is the NAD⁺, not the ethanol.",
    },
    {
      id: "metab-check-uncoupler",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Predict the effect of a proton shuttle",
      prompt:
        "Dinitrophenol is a weak acid that dissolves in lipid in both its protonated and its deprotonated form, so it can pick up a proton on one side of the inner mitochondrial membrane and release it on the other. A person ingests a dose. What is observed?",
      options: [
        "Oxygen consumption falls and body temperature falls, because respiration has been inhibited",
        "Oxygen consumption rises and body temperature rises, because electron transport runs at full speed while the free energy that would have been captured as ATP is released as heat",
        "Oxygen consumption is unchanged while ATP synthesis rises, because protons now return through ATP synthase more rapidly",
        "Oxygen consumption and ATP synthesis rise together, since the two are directly coupled",
      ],
      correctIndex: 1,
      explanation:
        "With a proton shuttle present the gradient no longer builds, so nothing opposes pumping and the chain runs at its maximum rate, raising oxygen consumption. ATP synthase has no gradient to work with, so ATP output falls and the free energy appears as heat. Brown adipose tissue does the same thing deliberately using the protein thermogenin. Dinitrophenol, sold as a slimming agent in the 1930s, killed people by hyperthermia.",
      misconception:
        "Assuming that respiration rate and ATP output must move together, which the last option asserts. They are linked only through the proton gradient; break that link and they move in opposite directions.",
    },
    {
      id: "metab-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar pathway",
      title: "Predict the consequences of a block in a branched pathway",
      prompt:
        "A bacterium makes compound W from precursor P through the sequence P to Q to R to W, with a branch running from R to a different product V. Compound W inhibits the enzyme converting P to Q by binding at a site remote from its active site. A mutant is isolated in which the enzyme converting R to W is inactive. The mutant is grown in a medium containing P but no W. Which prediction follows?",
      options: [
        "Q and R accumulate, W is absent, and flux into the branch product V rises, because the end product that normally restrains the first step is no longer being made",
        "P accumulates while Q, R, and W are all absent, because the pathway is blocked at its first step",
        "W accumulates behind the block, since material always builds up on the far side of a closed step",
        "Nothing changes, because the mutant takes up the W it needs from the growth medium",
      ],
      correctIndex: 0,
      explanation:
        "Material banks up immediately before a block and everything beyond it falls, so R accumulates and Q behind it, while W is absent. Feedback inhibition adds a second consequence: with no W, the first enzyme is released from inhibition, so flux into the pathway rises and the extra R is pushed into the only outlet left, raising V. The last option is excluded by the statement that the medium contains no W.",
      misconception:
        "Predicting accumulation on the downstream side of a block, which the third option states. Material piles up before a closed valve, not after it. The second error is stopping at that direct consequence and missing that removing an end product also removes the regulation it exerted on the steps above.",
    },
    {
      id: "metab-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Strip the carbon, store the electrons, then sell the gradient",
      points: [
        "Catabolism releases free energy and anabolism spends it, and ATP couples the two because the reactions share an intermediate rather than merely sharing a beaker.",
        "Glycolysis runs in the cytosol, uses no oxygen, and yields a net 2 ATP by substrate-level phosphorylation plus 2 NADH per glucose.",
        "The link reaction and the tricarboxylic acid cycle finish stripping the carbon to carbon dioxide and store almost all of the released free energy as reduced carriers rather than as ATP.",
        "The electron transport chain converts that reducing power into a proton gradient and ATP synthase converts the gradient back into ATP; oxygen only accepts the electrons at the end.",
        "Aerobic respiration yields roughly 30 to 32 ATP per glucose, a range rather than a number because the protons per ATP is not an integer, the shuttle used for cytosolic NADH varies, and the membrane leaks.",
        "Fermentation exists to regenerate NAD⁺, not to make ATP, and it leaves most of the glucose's free energy in an organic product that is discarded.",
      ],
      transferRule:
        "To locate a lesion in any pathway, ask what accumulates and what disappears: material banks up immediately before the block, everything downstream falls, and any regulator made downstream releases its grip on the steps above.",
      nextLessonId: "lesson.biology.dna_expression",
    },
  ],
};

export const biologyCellLessons: Lesson[] = [
  cellStructure,
  membranesTransport,
  enzymes,
  metabolism,
];
