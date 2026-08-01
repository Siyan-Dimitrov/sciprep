import type { Lesson } from "@/lib/lesson-types";

const cellSignalling: Lesson = {
  id: "lesson.biology.cell_signalling",
  slug: "cell-signalling-and-regulation",
  number: "12.1",
  stageId: "stage.biology_physiology",
  discipline: "biology",
  title: "Cell signalling and regulation",
  summary:
    "Follow a message from outside the membrane to a change inside the cell: how a receptor reads a ligand it never admits, how a cascade multiplies one binding event into millions, and why switching a signal off is engineered as carefully as switching it on.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain why an extracellular message must be transduced rather than admitted to the cytoplasm.",
    "Predict from a signal's solubility whether its receptor sits at the surface or inside the cell.",
    "Distinguish the four receptor classes by what each does once the ligand is bound.",
    "Calculate the overall amplification of a multi-stage cascade from its stage factors.",
    "Explain why termination sets the duration of a response, and predict the effect of blocking it.",
    "Classify an antagonist as competitive or non-competitive from a dose-response data set.",
  ],
  prerequisiteLessonIds: [
    "lesson.biology.membranes_transport",
    "lesson.biology.enzymes",
  ],
  blocks: [
    {
      id: "sig-purpose",
      type: "concept",
      eyebrow: "Information at a barrier",
      title: "A cell must act on messages it cannot let inside",
      paragraphs: [
        "The plasma membrane keeps the cell's chemistry separate from everything around it. That separation is what makes a cell a cell, and it is also a problem, because nearly every useful instruction arrives on the wrong side of it: a hormone in the blood, a growth factor from a neighbour, a neurotransmitter emptied into a gap a few tens of nanometres wide. A hydrophobic bilayer blocks charged and polar species. Signal transduction is how the information crosses when the molecule cannot.",
        "Two components are needed. The ligand is the message; the receptor is the protein that reads it. Their pairing is a specificity relationship of the same kind as enzyme and substrate, a binding site complementary to one molecule and few others. That specificity is what makes an endocrine system possible: adrenaline reaches every cell through the circulation, and only cells carrying an adrenergic receptor respond. What the response consists of is decided by the receiving cell, not the message — the same adrenaline triggers glycogen breakdown in a liver cell and relaxation of smooth muscle in an airway.",
        "Solubility decides where the reading happens. A hydrophobic signal — a steroid, thyroid hormone, or a gas such as nitric oxide — dissolves through the bilayer and binds a receptor waiting in the cytoplasm or nucleus. A hydrophilic signal — a peptide, a catecholamine, a charged neurotransmitter — cannot cross, and must be read by a receptor whose site faces outwards while the rest of the protein reaches through. Timescale follows: intracellular receptors act by changing transcription, over hours, while surface receptors change a cell's behaviour within milliseconds.",
      ],
      callout:
        "ligand binds receptor · receptor converts an extracellular message into an intracellular one · the ligand itself need not enter",
    },
    {
      id: "sig-visual-cascade",
      type: "visual",
      eyebrow: "One event, many products",
      title: "A cascade widens at every tier, which is why one molecule can change a cell",
      introduction:
        "Set the pathway out as tiers: a single occupied receptor at the top, the transducer it switches on below it, then the enzyme that transducer activates, then the molecules that enzyme makes.",
      visual: "signal_cascade",
      caption:
        "Every tier is wider than the one above, because an activated molecule keeps working until something switches it off. The total gain is the product of the widening factors, not their sum, so a chain of modest steps delivers an enormous overall factor.",
    },
    {
      id: "sig-receptors",
      type: "concept",
      eyebrow: "Four ways to read",
      title: "Receptor classes differ in what they do once the ligand is bound",
      paragraphs: [
        "A ligand-gated ion channel is receptor and pore in one protein. Binding opens the pore, ions move down their electrochemical gradient, and the event is complete in well under a millisecond — the fastest arrangement available, and the basis of synaptic transmission. At the neuromuscular junction, two acetylcholine molecules open a channel permeable to Na⁺ and K⁺, and the current depolarises the muscle fibre. Because ion movement is itself the response, no further machinery is needed; for the same reason the message cannot easily be routed elsewhere in the cell.",
        "The other three classes separate reading from responding. A G-protein-coupled receptor threads the membrane seven times; binding at the outer face reshapes the inner face, which catalyses exchange of GDP for GTP on an associated G protein, and that G protein regulates an effector enzyme such as adenylyl cyclase or phospholipase C. A receptor tyrosine kinase pairs with a second copy of itself, each partner phosphorylating tyrosines on the other; the phosphorylated tails become docking sites for cytoplasmic proteins, which is how insulin and most growth factors are read. An intracellular receptor, having bound its hydrophobic ligand, exposes a DNA-binding region and acts as a transcription factor.",
        "The enzyme-linked surface classes generate second messengers: small diffusing molecules made in quantity inside the cell. Adenylyl cyclase converts ATP into cyclic AMP; phospholipase C cleaves a membrane phospholipid into IP₃ and diacylglycerol, and IP₃ opens calcium channels on internal stores. A diffusible messenger buys three things: it uncouples the site of reception from the site of response, it is produced in bulk by one activated enzyme, and it can be destroyed by a separate enzyme so the message ends without touching the receptor. Cytosolic free Ca²⁺ rests near 1 × 10⁻⁷ mol dm⁻³, about ten thousand times below the extracellular level, so opening a channel briefly gives an enormous fractional rise for almost no cost.",
      ],
      callout:
        "second messenger = a small diffusible molecule made in bulk by one activated enzyme and removed by a different one",
    },
    {
      id: "sig-check-location",
      type: "check",
      eyebrow: "Read the solubility",
      title: "Place two receptors from the properties of their ligands",
      prompt:
        "Molecule A is a steroid: a fused four-ring hydrocarbon skeleton carrying two hydroxyl groups, and it partitions strongly into octanol rather than water. Molecule B is a 51-residue peptide carrying several charged side chains at physiological pH. Where does each bind its receptor?",
      options: [
        "A binds a receptor inside the cell after crossing the bilayer; B binds a receptor whose binding site faces outwards from the plasma membrane",
        "Both bind receptors on the outer face of the plasma membrane, because all receptors are membrane proteins",
        "B binds an intracellular receptor, because peptides are taken up by active transport; A binds a surface receptor",
        "Both bind intracellular receptors, since a signal can only have an effect once it reaches the cytoplasm",
      ],
      correctIndex: 0,
      explanation:
        "The bilayer interior is hydrophobic, so a molecule preferring octanol to water dissolves through it unaided and typically binds a nuclear receptor acting as a transcription factor. A 51-residue peptide with charged side chains has no route across, so its receptor must present a site to the outside and transmit the news inwards by changing shape.",
      misconception:
        "Assuming a signal must physically enter the cell to have an effect, which gives the last option. Transduction exists so the message crosses without the messenger: what travels inwards is a conformational change.",
    },
    {
      id: "sig-cascade",
      type: "concept",
      eyebrow: "Switch, hold, release",
      title: "Phosphorylation is the standard switch, and removing it is a separate job",
      paragraphs: [
        "Most intracellular steps are carried by phosphorylation. A protein kinase transfers the terminal phosphate of ATP onto a serine, threonine, or tyrosine side chain. The added group carries two negative charges and a tightly held shell of water, enough to flip the target between an inactive and an active conformation. A protein phosphatase removes it again. Because addition and removal are catalysed by different enzymes, the cell sets the fraction of a protein in the active state by adjusting either, and the pair forms a cycle consuming ATP even at rest. That running cost is the price of changing state in a fraction of a second.",
        "Amplification is the quantitative point of a cascade. An activated enzyme is not consumed by the reaction it catalyses, so it keeps producing output until switched off. Express each stage as a factor — outputs per input — and the overall gain is their product. Not every stage need amplify: a step requiring four second-messenger molecules to activate one kinase contributes a factor of one quarter, and the cascade can still deliver a gain of a thousand million overall. That is why a hormone present at 10⁻¹⁰ mol dm⁻³ can restructure a cell's metabolism.",
        "Termination is engineered with the same care as initiation, because a pathway that can only say yes carries no information. Every tier has its own off switch: the ligand dissociates, the G protein hydrolyses its bound GTP back to GDP, phosphodiesterase hydrolyses cAMP, pumps return Ca²⁺ to stores, phosphatases strip phosphates off. The size and duration of a response therefore depend on the balance between on rate and off rate at every tier, not on the on rate alone. Inhibiting a termination step raises a response exactly as effectively as increasing the stimulus, which is how caffeine and related methylxanthines work: they inhibit the phosphodiesterase that destroys cAMP.",
      ],
      callout:
        "overall gain = product of the stage factors · response size depends on the on rate divided by the off rate",
    },
    {
      id: "sig-worked-amplify",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compute the gain of a six-stage cascade",
      scenario:
        "One hormone molecule binds one receptor on a liver cell and stays bound long enough for the following. The occupied receptor activates 10 G protein molecules. Each activated G protein switches on one adenylyl cyclase, and each cyclase makes 1.0 × 10³ molecules of cAMP before it is switched off. Four cAMP molecules are needed to activate one protein kinase A. Each active protein kinase A activates 20 molecules of a second kinase; each of those activates 20 molecules of glycogen phosphorylase; and each phosphorylase releases 1.0 × 10³ molecules of glucose 1-phosphate. Find the overall amplification factor and the chemical amount of product.",
      steps: [
        {
          label: "Express every stage as a multiplying factor",
          decision:
            "Amplification asks how many outputs each input generates, so a stage consuming several molecules to make one is a factor below 1 and must be included, not ignored.",
          working:
            "×10, ×1.0 × 10³, ×0.25 for the four-cAMP requirement, ×20, ×20, ×1.0 × 10³",
        },
        {
          label: "Multiply through the second-messenger stages",
          decision:
            "Work left to right in scientific notation so the size of the running total stays visible.",
          working: "10 × (1.0 × 10³) × 0.25 = 2.5 × 10³",
        },
        {
          label: "Carry the two kinase stages through",
          decision:
            "Each kinase tier multiplies independently, because every activated molecule of one tier activates a full complement of the next.",
          working: "(2.5 × 10³) × 20 × 20 = 1.0 × 10⁶",
        },
        {
          label: "Apply the final catalytic stage",
          decision:
            "The last enzyme acts on a substrate rather than a protein, but the arithmetic is identical.",
          working: "(1.0 × 10⁶) × (1.0 × 10³) = 1.0 × 10⁹",
        },
        {
          label: "Convert the count into a chemical amount",
          decision:
            "A raw molecule count cannot be compared with any measured quantity until divided by the Avogadro constant.",
          working:
            "n = (1.0 × 10⁹) / (6.02 × 10²³ mol⁻¹) = 1.7 × 10⁻¹⁵ mol, about 1.7 fmol",
        },
      ],
      answer:
        "One bound hormone molecule accounts for 1.0 × 10⁹ molecules of glucose 1-phosphate — an amplification factor of one thousand million, or roughly 1.7 fmol of product.",
      plausibility:
        "Check by adding logarithms rather than multiplying factors: 1 + 3 − 0.60 + 1.30 + 1.30 + 3 = 9.0, so the gain is 10⁹ exactly, by a route sharing no arithmetic with the first. Note that one stage divided rather than multiplied; a cascade need not amplify at every tier, only overall.",
    },
    {
      id: "sig-check-amplify",
      type: "check",
      eyebrow: "Your turn",
      title: "Scale a cascade up to many receptors",
      prompt:
        "Each activated receptor in a pathway activates 5 molecules of enzyme E1, each E1 activates 40 molecules of enzyme E2, and each E2 converts 2.0 × 10³ molecules of substrate into product. If 250 receptors are activated at once, how many product molecules are formed?",
      options: [
        "4.0 × 10⁵ product molecules",
        "1.0 × 10⁵ product molecules",
        "5.1 × 10⁵ product molecules",
        "1.0 × 10⁸ product molecules",
      ],
      correctIndex: 3,
      explanation:
        "The gain per receptor is the product of the stage factors: 5 × 40 × (2.0 × 10³) = 4.0 × 10⁵. Receptors act independently, so their number is one further multiplying factor: (4.0 × 10⁵) × 250 = 1.0 × 10⁸.",
      misconception:
        "Stopping at 4.0 × 10⁵ answers the yield from a single receptor and forgets that 250 were occupied. Adding the stage factors gives 5 + 40 + 2000 = 2045 and hence 5.1 × 10⁵; reading 2.0 × 10³ as 2 gives 1.0 × 10⁵.",
    },
    {
      id: "sig-worked-decay",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find a steady-state signal and the speed of its collapse",
      scenario:
        "While a ligand occupies its receptor, adenylyl cyclase in a cell of volume 1.0 × 10⁻¹² dm³ produces cAMP at a steady 3.0 × 10⁵ molecules per second. Phosphodiesterase destroys cAMP by a first-order process with rate constant k = 2.5 s⁻¹. Find the steady-state number of cAMP molecules and the concentration it represents, the time for the signal to fall to a tenth once the ligand leaves, and the effect of a drug that halves k.",
      steps: [
        {
          label: "Set production equal to removal",
          decision:
            "At a steady state the two rates are equal by definition, which replaces a differential equation with a one-line balance.",
          working:
            "3.0 × 10⁵ s⁻¹ = k × N = 2.5 s⁻¹ × N, so N = 1.2 × 10⁵ molecules",
        },
        {
          label: "Convert the count into a concentration",
          decision:
            "A number of molecules becomes comparable with published figures only after division by the Avogadro constant and the cell volume.",
          working:
            "n = (1.2 × 10⁵) / (6.02 × 10²³ mol⁻¹) = 1.99 × 10⁻¹⁹ mol; c = (1.99 × 10⁻¹⁹ mol) / (1.0 × 10⁻¹² dm³) = 2.0 × 10⁻⁷ mol dm⁻³",
        },
        {
          label: "Find the half-life of the decay",
          decision:
            "Once the ligand leaves, removal alone remains, so the fall is first-order with a half-life fixed by k and independent of the starting level.",
          working: "t½ = ln 2 / k = 0.693 / 2.5 s⁻¹ = 0.28 s",
        },
        {
          label: "Find the time to fall to a tenth",
          decision:
            "The same exponential applies with a factor of ten in place of two.",
          working: "t = ln 10 / k = 2.303 / 2.5 s⁻¹ = 0.92 s",
        },
        {
          label: "Halve the removal rate constant",
          decision:
            "The drug acts only on the off switch, so recompute the balance with production untouched; this isolates the contribution of termination.",
          working:
            "N = (3.0 × 10⁵ s⁻¹) / (1.25 s⁻¹) = 2.4 × 10⁵ molecules, which is 4.0 × 10⁻⁷ mol dm⁻³",
        },
      ],
      answer:
        "The steady state is 1.2 × 10⁵ molecules, about 0.20 μmol dm⁻³; the signal collapses to a tenth within about 0.9 s of the ligand leaving; and halving the phosphodiesterase rate constant doubles the steady signal to 0.40 μmol dm⁻³ without altering the receptor.",
      plausibility:
        "The steady level is a production rate divided by a rate constant, so molecules per second divided by per second leaves a pure count, as it should. A messenger with a sub-second half-life can follow a stimulus changing on the timescale of a heartbeat, which is what a second messenger is for.",
    },
    {
      id: "sig-regulation",
      type: "concept",
      eyebrow: "Regulating the regulator",
      title: "A pathway is tuned by its receptor number, its blockers, and its commitment point",
      paragraphs: [
        "Cells adjust their own sensitivity. Desensitisation is the fast route: within minutes of continuous stimulation, kinases phosphorylate the intracellular face of an occupied receptor, arrestin proteins bind that tail, and the receptor is uncoupled from its G protein while staying in the membrane. Downregulation is the slow route: over hours, receptors are internalised and degraded rather than recycled, so the cell has fewer of them. Both mean a constant ligand concentration produces a shrinking response, which is why tolerance develops to a continuously administered drug and why abrupt withdrawal can produce a rebound.",
        "Pharmacology reads the same system from outside. An agonist binds and activates; an antagonist binds without activating, and its only effect is to prevent something else binding. Plot response against the logarithm of concentration and a sigmoid appears, giving the maximum response and the EC₅₀, the concentration producing half of it. A competitive antagonist occupies the same site, so more agonist displaces it: the curve shifts right, the EC₅₀ rises, and the maximum is eventually still reached. A non-competitive antagonist binds elsewhere and reduces what the receptor can do, so the maximum falls and no amount of agonist restores it. This is the logic already met in enzyme inhibition, where a competitive inhibitor raises apparent Km at constant Vmax and a non-competitive one lowers Vmax at constant Km.",
        "Apoptosis shows regulated signalling whose output cannot be undone. A cell continuously makes both pro-apoptotic proteins, which permeabilise the outer mitochondrial membrane, and anti-apoptotic proteins, which bind and neutralise them; the ratio decides the outcome, not the amount of either. When pro-apoptotic activity wins, cytochrome c escapes to the cytosol, initiator proteases assemble and activate, and those activate executioner proteases that cleave hundreds of targets. That protease step is itself a cascade, with the same multiplying structure and the added feature that proteolysis is irreversible. Tumour cells commonly overproduce an anti-apoptotic protein and survive damage that should have killed them, and drugs mimicking the pro-apoptotic partner work by restoring the ratio rather than adding a new signal.",
      ],
      callout:
        "competitive antagonist: EC₅₀ rises, maximum unchanged · non-competitive antagonist: maximum falls, EC₅₀ unchanged",
    },
    {
      id: "sig-visual-dose",
      type: "visual",
      eyebrow: "Three readable numbers",
      title: "A dose-response curve puts potency and efficacy on separate axes",
      introduction:
        "Plotted against concentration directly, almost all of the interesting behaviour is crushed against the left-hand edge. Plotted against the logarithm of concentration, the same measurements straighten into a sigmoid.",
      visual: "dose_response",
      caption:
        "The height of the plateau is the maximum response, or efficacy; the concentration at half that height is the EC₅₀, or potency. A rightward shift with the plateau intact means competition for the same site; a lowered plateau means something else.",
    },
    {
      id: "sig-worked-dose",
      type: "worked",
      eyebrow: "Worked example",
      title: "Classify an antagonist from two dose-response series",
      scenario:
        "A strip of smooth muscle is exposed to rising concentrations of the agonist BX-7 and the contraction recorded as a percentage of the largest response the tissue can give. Agonist alone, in nmol dm⁻³ with the response in per cent: 1 and 5; 3 and 13; 10 and 33; 30 and 60; 100 and 83; 300 and 95; 1000 and 99. The series is repeated in the continuous presence of 100 nmol dm⁻³ of a second compound, QN-3: 1 and 1; 3 and 2; 10 and 5; 30 and 13; 100 and 33; 300 and 60; 1000 and 83; 3000 and 95. Find the EC₅₀ in each case and classify QN-3.",
      steps: [
        {
          label: "Compare the two maxima before anything else",
          decision:
            "The ceiling decides the classification and needs no calculation. Taking it first stops a rise in EC₅₀ being mistaken for the whole story.",
          working:
            "both series reach 95 per cent and are still rising at the top concentration tested, so the maximum response is unchanged",
        },
        {
          label: "Bracket the EC₅₀ of the agonist alone",
          decision:
            "The half-maximal point rarely falls on a tested concentration, so first find the pair of measurements it lies between.",
          working:
            "50 per cent lies between 10 nmol dm⁻³ (33 per cent) and 30 nmol dm⁻³ (60 per cent)",
        },
        {
          label: "Interpolate along the logarithmic axis",
          decision:
            "Dose-response data are close to linear only in log concentration, so interpolate between logarithms, never between the concentrations themselves.",
          working:
            "(50 − 33) / (60 − 33) = 0.63; log₁₀EC₅₀ = 1.00 + 0.63 × (1.48 − 1.00) = 1.30, so EC₅₀ ≈ 20 nmol dm⁻³",
        },
        {
          label: "Repeat the interpolation with QN-3 present",
          decision:
            "The identical procedure must be used on both series, or the two EC₅₀ values are not comparable.",
          working:
            "50 per cent lies between 100 (33 per cent) and 300 (60 per cent); log₁₀EC₅₀ = 2.00 + 0.63 × 0.48 = 2.30, so EC₅₀ ≈ 200 nmol dm⁻³",
        },
        {
          label: "Take the dose ratio and classify",
          decision:
            "The ratio of the two EC₅₀ values, read with the unchanged maximum, is what separates the two kinds of antagonism.",
          working:
            "200 / 20 = 10, a tenfold parallel shift to the right with the plateau preserved",
        },
      ],
      answer:
        "BX-7 has an EC₅₀ of about 20 nmol dm⁻³ alone and about 200 nmol dm⁻³ with QN-3 present, a dose ratio of 10 and no loss of maximum response, so QN-3 is a competitive antagonist whose block is surmountable by more agonist.",
      plausibility:
        "The second data set is the first displaced by exactly one decade: every response value reappears at ten times the concentration. That is what competition for a shared site predicts, and it is the pattern of competitive enzyme inhibition, where apparent Km rises tenfold and Vmax is untouched.",
    },
    {
      id: "sig-check-antagonist",
      type: "check",
      eyebrow: "Read the representation",
      title: "Separate a shift in potency from a loss of efficacy",
      prompt:
        "An agonist alone has an EC₅₀ of 8 nmol dm⁻³ and a maximum response of 100 units. With a fixed concentration of drug M present, the EC₅₀ is still 8 nmol dm⁻³ but the maximum is 45 units. With a fixed concentration of drug N present, the maximum is still 100 units but the EC₅₀ is 64 nmol dm⁻³. How should M and N be classified?",
      options: [
        "M is competitive and N is non-competitive",
        "M is non-competitive and N is competitive, with N producing an eightfold dose ratio",
        "Both are competitive, since both reduce the response at low agonist concentrations",
        "M is a partial agonist and N is an inverse agonist",
      ],
      correctIndex: 1,
      explanation:
        "M lowers the ceiling without changing the concentration needed for half of it, the signature of a blocker at a separate site whose effect cannot be surmounted. N leaves the ceiling intact and moves the curve right by 64 / 8 = 8, which is what competition at the shared site produces.",
      misconception:
        "Judging from a single low agonist concentration, where both drugs look alike, and calling both competitive. The discriminating measurement is at saturating agonist: only there does a competitive block disappear while a non-competitive one persists.",
    },
    {
      id: "sig-check-apoptosis",
      type: "check",
      eyebrow: "A regulated pathway",
      title: "Reason about a cell death decision as a ratio",
      prompt:
        "Whether a cell undergoes apoptosis depends on the balance at the outer mitochondrial membrane between pro-apoptotic proteins, which permeabilise it, and anti-apoptotic proteins, which bind and neutralise them. Once permeabilisation occurs, cytochrome c is released, initiator proteases activate, and these activate executioner proteases. A tumour cell makes ten times the normal amount of the anti-apoptotic protein. What follows, and what would a drug mimicking the pro-apoptotic protein achieve?",
      options: [
        "The cell dies more readily, because more protein at the mitochondrion means more signalling of every kind",
        "Nothing changes, because apoptosis is triggered by DNA damage alone rather than by the ratio of two proteins",
        "The cell resists apoptosis and survives damage that should kill it; a drug mimicking the pro-apoptotic protein would occupy the excess anti-apoptotic protein and lower the threshold for cytochrome c release",
        "The executioner proteases fire continuously, because the anti-apoptotic protein activates them directly",
      ],
      correctIndex: 2,
      explanation:
        "The decision is set by the ratio of two opposing activities, so a tenfold excess of the neutralising partner raises the pro-apoptotic signal needed to tip it, and the cell survives insults that should commit it to death. A mimetic drug binds up that excess and restores the ratio.",
      misconception:
        "Treating more of any pathway protein as more signalling overall, which gives the first option. In an opposed pair the sign of a contribution matters as much as its size, and only the ratio predicts the outcome.",
    },
    {
      id: "sig-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar pathway",
      title: "Predict the effect of removing a terminator",
      prompt:
        "In a soil amoeba, a surface receptor binds the peptide daxin. The occupied receptor activates a G protein, which activates the enzyme cyclase C. Cyclase C makes the second messenger m-GMP, which activates kinase K1; K1 phosphorylates and activates kinase K2; K2 phosphorylates the transcription factor T, which switches on the genes for cell aggregation. A separate enzyme, esterase E, hydrolyses m-GMP. A mutant strain lacks functional esterase E. A brief pulse of daxin is applied. What is seen in the mutant?",
      options: [
        "No response at all, because esterase E is required to convert m-GMP into its active form",
        "A normal, brief response, because esterase E acts downstream of the transcription factor and cannot affect timing",
        "A response that begins normally but persists long after the daxin pulse has ended, because the second messenger is produced and never removed",
        "A smaller response, because m-GMP is diverted away from kinase K1 in the absence of the esterase",
      ],
      correctIndex: 2,
      explanation:
        "Esterase E is the off switch for the second messenger. Removing it leaves production untouched, so the response starts as usual, but the steady level is production divided by removal, and with removal near zero the messenger accumulates and does not decay when the pulse ends. K1, K2, and T stay active: the mutant has turned a pulse into a switch.",
      misconception:
        "Assuming any enzyme acting on a messenger must be part of making it, which gives the first option. A hydrolase acting on the messenger removes it, and losing a removal step lengthens a response rather than abolishing it.",
    },
    {
      id: "sig-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Read the message at the surface, multiply it inside, and be able to stop",
      points: [
        "Signal transduction converts an extracellular message into an intracellular one, so the ligand itself usually never enters the cell.",
        "A hydrophobic signal crosses the bilayer to an intracellular receptor acting on transcription; a hydrophilic one binds a surface receptor and acts far faster.",
        "The four receptor classes differ in what follows binding: an ion flux, a G protein, a pair of self-phosphorylating kinases, or a transcription factor.",
        "Second messengers such as cAMP, Ca²⁺, and IP₃ are made in bulk by one enzyme and destroyed by another, which makes a signal both large and brief.",
        "Overall amplification is the product of the stage factors, so a chain of modest steps turns one binding event into 10⁹ product molecules.",
        "Termination, desensitisation, and downregulation set response duration, and blocking an off switch raises a signal as effectively as adding stimulus.",
        "A competitive antagonist shifts the dose-response curve right at constant maximum; a non-competitive one lowers the maximum at constant EC₅₀.",
      ],
      transferRule:
        "Whenever a small cause produces a large effect, look for a chain of stages and multiply their gains; and whenever a response outlasts its cause, look for a missing off switch rather than a stronger on switch.",
      nextLessonId: "lesson.biology.immunology",
    },
  ],
};

const immunology: Lesson = {
  id: "lesson.biology.immunology",
  slug: "immunology-and-antigenic-variation",
  number: "12.2",
  stageId: "stage.biology_physiology",
  discipline: "biology",
  title: "Immunology and antigenic variation",
  summary:
    "Work out how a body defends itself against threats it has never met: a randomly generated repertoire narrowed by selection, memory that makes the second encounter unrecognisable from the first, and the evasion strategies that defeat memory.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Contrast innate and adaptive defence on speed, specificity, and memory.",
    "Distinguish antigen from epitope and explain why an antiserum is polyclonal.",
    "Relate antibody structure to specificity at one end and effector function at the other.",
    "Estimate a combinatorial antibody repertoire and explain why recombination is needed at all.",
    "Calculate a titre from a serial dilution and interpret a paired-sera result.",
    "Read lag, magnitude, and persistence off primary and secondary responses, and explain why antigenic variation defeats both.",
  ],
  prerequisiteLessonIds: [
    "lesson.biology.cell_signalling",
    "lesson.biology.dna_expression",
  ],
  blocks: [
    {
      id: "immu-purpose",
      type: "concept",
      eyebrow: "Defending against the unknown",
      title: "The hard part is recognising something never encountered before",
      paragraphs: [
        "An immune system faces two requirements that pull against each other. It must attack anything that does not belong, including organisms that have never existed before and molecules no ancestor ever met. It must also leave alone the tens of thousands of proteins, sugars, and lipids that make up the body itself. A system tuned to miss nothing will attack its owner; a system tuned never to attack its owner will miss real threats. Almost every feature worth understanding — the layers, the randomness, the selection step, the tolerance mechanisms — exists to hold those two requirements together.",
        "The first answer is layering. Skin is a barrier of dead, keratinised cells; mucus traps particles and cilia sweep them out; stomach acid near pH 2 destroys most swallowed organisms; tears and saliva carry lysozyme, which cuts the bacterial cell wall. Behind the barriers sits the innate response: fast, fixed, and non-specific. Phagocytes engulf anything carrying molecular patterns common to microbes and absent from host cells. Damaged tissue releases signals such as histamine that dilate local vessels and make them leaky, producing the heat, redness, swelling, and pain of inflammation — not a malfunction but a delivery mechanism, bringing plasma proteins and phagocytes to the site within minutes.",
        "The innate response is identical on the thousandth exposure as on the first. It buys time rather than solving the problem, and against an organism that divides every twenty minutes, hours matter. The adaptive response is the second answer: slow to start, extremely specific, and remembered. It takes days to mount on first encounter and hours on the second. The rest of this lesson concerns how a specific response to an unforeseen threat can be produced at all, and how the record of it is kept.",
      ],
      callout:
        "innate: fast, fixed, non-specific, no memory · adaptive: slow first time, highly specific, remembered",
    },
    {
      id: "immu-visual-layers",
      type: "visual",
      eyebrow: "Defences in sequence",
      title: "The layers engage in order, and only the last improves with experience",
      introduction:
        "Put time on the horizontal axis, starting when a pathogen breaches the skin, and stack the defences in the order they take effect: barriers at once, phagocytes and inflammation within hours, the adaptive response over days.",
      visual: "immune_response",
      caption:
        "The innate curves are the same height and shape at every exposure. The adaptive curve is late and modest on first encounter and early and enormous on the second, and the gap between those two curves is the entire practical value of memory.",
    },
    {
      id: "immu-adaptive",
      type: "concept",
      eyebrow: "Selection, not instruction",
      title: "The specific response is chosen from a repertoire that already existed",
      paragraphs: [
        "Two terms must be kept apart. An antigen is any molecule the adaptive system can recognise and respond to, typically a protein or polysaccharide on a pathogen surface. An epitope is the small patch of that molecule which one antibody actually contacts, perhaps fifteen to twenty amino acids of surface. A single protein antigen therefore carries several epitopes and recruits several antibody-producing lineages at once, which is why serum raised against a whole protein is polyclonal. Two unrelated proteins sharing a patch will cross-react, a nuisance in diagnosis and occasionally a cause of autoimmune disease.",
        "The mechanism producing specificity is selection, not instruction. It is tempting to imagine the antigen teaching the immune system what shape to make, but that is not what happens. Every B cell, while maturing and before meeting any antigen, commits to one specificity and displays that single antibody on its surface as a receptor. The body carries an enormous library of specificities generated blindly, in advance, mostly for pathogens that will never arrive. When an antigen appears it binds whichever cells happen to fit, and only those are stimulated to divide. This is clonal selection: the antigen chooses from what exists rather than creating anything.",
        "Selection explains the timing precisely. The delay in a primary response is the time needed for a handful of matching cells to divide repeatedly and build a clone large enough to secrete useful quantities of antibody. Part of that clone becomes plasma cells, short-lived antibody factories; the rest becomes memory cells, which persist. Because the expansion has already happened, a second encounter starts from a base thousands of times larger, so the second response is faster as well as bigger. Selection also explains tolerance: lymphocytes whose receptors bind the body's own molecules strongly are deleted or inactivated during development, so the surviving repertoire is the random library minus its self-reactive members.",
      ],
      callout:
        "antigen = the whole recognised molecule · epitope = the patch one antibody binds · clonal selection = the antigen expands cells that already matched",
    },
    {
      id: "immu-check-epitope",
      type: "check",
      eyebrow: "Get the terms right",
      title: "Separate the antigen from the patch that is bound",
      prompt:
        "A globular protein of 280 amino acids is injected into a rabbit. The serum collected afterwards contains antibodies binding the protein at four different surface patches, and one of those antibodies also binds an unrelated, much shorter protein that happens to present a similar patch. Which statement describes this correctly?",
      options: [
        "The whole protein is a single epitope, and each antibody recognises the entire molecule",
        "Antigen and epitope are alternative words for the same thing, so the serum is monoclonal",
        "Each antibody recognises the complete amino acid sequence, so binding to a shorter, unrelated protein is impossible",
        "The protein is the antigen; each distinct surface patch is an epitope, and a serum containing antibodies against several of them is polyclonal",
      ],
      correctIndex: 3,
      explanation:
        "The antigen is the molecule the system responds to; the epitope is the limited surface one antibody contacts. A protein of 280 residues presents many possible patches, four of which were productive, so four lineages were selected and the serum is polyclonal. Cross-reaction follows directly: an antibody sees a patch, not a sequence.",
      misconception:
        "Treating antigen and epitope as synonyms, which makes cross-reaction inexplicable and every antiserum look monoclonal. The distinction is why one vaccine antigen raises a broad response, and why two unrelated organisms can be confused by one assay.",
    },
    {
      id: "immu-antibody",
      type: "concept",
      eyebrow: "One molecule, two jobs",
      title: "An antibody keeps specificity at its tips and function in its stem",
      paragraphs: [
        "An antibody is built from four chains: two identical heavy chains running its length and two identical light chains along the arms, held by disulfide bridges between cysteine residues. The resulting Y has two identical binding sites, one at each arm tip. Each chain divides into a constant region, shared by every antibody of a class, and a variable region, which differs between lineages. A binding site is formed jointly by the variable domains of one heavy and one light chain, and within those domains three short hypervariable loops from each fold together into the surface contacting the epitope. Specificity is a property of six loops, and nothing else need change for a new specificity to exist.",
        "The stem decides what happens after binding. Class switching swaps the constant region while keeping the variable region, changing the antibody's job without changing what it recognises. IgM is made first and secreted as a pentamer with ten binding sites; IgG dominates later, crosses the placenta, and is the class memory delivers; IgA is secreted across mucosal surfaces; IgE drives responses to parasites and allergy. The effects available are neutralisation, in which binding blocks a toxin or viral attachment protein; opsonisation, in which a coated particle is more readily engulfed; complement activation; and agglutination, in which a multivalent antibody cross-links particles into visible clumps. Agglutination is the basis of a simple assay, and IgM with ten sites is a far better agglutinator than IgG with two.",
        "The repertoire problem is arithmetical. If each specificity needed its own gene, a library of a million would need a million genes, roughly fifty times the number of protein-coding genes in the human genome. Recombination solves it. The variable region is encoded not as one stretch of DNA but as separate pools of interchangeable segments — V, D, and J for the heavy chain, V and J for the light. As each B cell matures it cuts out and permanently joins one segment from each pool, chosen at random, so its genome carries one assembled variable-region gene and it makes one specificity for life. The joins are deliberately imprecise, with nucleotides lost or added at each junction, multiplying the diversity again.",
      ],
      callout:
        "variable regions of one heavy and one light chain form each binding site · the constant region decides the effector function",
    },
    {
      id: "immu-visual-antibody",
      type: "visual",
      eyebrow: "Where specificity lives",
      title: "The molecule is a Y with interchangeable tips and a standard stem",
      introduction:
        "Draw two identical heavy chains running the full length and two identical light chains lying along the arms, linked by disulfide bridges, and shade the variable domains at the tips differently from the constant domains elsewhere.",
      visual: "antibody",
      caption:
        "Only the shaded tips differ between lineages, and each binding site is built from one heavy and one light variable domain together. The unshaded stem is identical across a class and decides what the immune system does with whatever the tips have caught.",
    },
    {
      id: "immu-worked-repertoire",
      type: "worked",
      eyebrow: "Worked example",
      title: "Build a million specificities out of a hundred parts",
      scenario:
        "In a simplified account of the human antibody loci, the heavy chain is assembled from 40 V segments, 25 D segments, and 6 J segments, one of each joined at random. The kappa light chain is assembled from 40 V segments and 5 J segments, again one of each. A finished antibody pairs one heavy with one light chain, and imprecise joining multiplies the diversity by roughly a further factor of 1 × 10³. Estimate the number of distinct specificities available and compare it with the number of gene segments consumed and with the roughly 2.0 × 10⁴ protein-coding genes in the genome.",
      steps: [
        {
          label: "Count the heavy-chain combinations",
          decision:
            "The three pools are drawn from independently, so the counts multiply rather than add.",
          working: "40 × 25 × 6 = 6.0 × 10³ heavy-chain variable regions",
        },
        {
          label: "Count the light-chain combinations",
          decision:
            "The light-chain locus has no D pool, so only two choices are made, but the reasoning is unchanged.",
          working: "40 × 5 = 2.0 × 10² light-chain variable regions",
        },
        {
          label: "Pair the two chains",
          decision:
            "The chains are assembled independently and the binding site is built from both, so a different light chain on the same heavy chain is a different specificity.",
          working: "(6.0 × 10³) × (2.0 × 10²) = 1.2 × 10⁶ combinations",
        },
        {
          label: "Include imprecise joining",
          decision:
            "Junctional variation is not a separate library but an extra factor applied to every combination already counted.",
          working: "(1.2 × 10⁶) × (1 × 10³) = 1.2 × 10⁹ specificities",
        },
        {
          label: "Compare the output with the parts list",
          decision:
            "The point of the calculation is the ratio between what is stored and what is generated.",
          working:
            "segments stored: 40 + 25 + 6 + 40 + 5 = 116; and (1.2 × 10⁹) / (2.0 × 10⁴) = 6.0 × 10⁴ specificities per protein-coding gene in the whole genome",
        },
      ],
      answer:
        "Combination alone yields about 1.2 × 10⁶ specificities, and with imprecise joining the figure reaches of order 1 × 10⁹ — generated from 116 stored gene segments, under 1 per cent of the genome's protein-coding genes.",
      plausibility:
        "The number is a maximum available, not a stock held: an adult carries of order 10¹¹ B cells altogether, so most possible specificities are absent at any moment. What matters is that the library is dense enough for some cell to bind any given epitope well enough to be selected. The rival model of one gene per antibody is ruled out by this arithmetic alone.",
    },
    {
      id: "immu-check-clonal",
      type: "check",
      eyebrow: "Choose the mechanism",
      title: "Decide whether the antigen created or chose the specificity",
      prompt:
        "A mouse that has never encountered a particular bacterial toxin is nonetheless found to carry, in its lymph nodes, a small number of B cells whose surface receptors bind that toxin. On first exposure those cells divide rapidly and their descendants secrete antibody against it. Which account fits the observation?",
      options: [
        "The repertoire of specificities existed before exposure, and the toxin selected and expanded the cells that already matched it",
        "The toxin instructed the B cells to fold their antibody around it, so the specificity was created by the antigen",
        "The B cells mutated their receptor genes in direct response to the toxin, generating a match where none had existed",
        "All B cells share one universal receptor, and the toxin was recognised by that receptor in the usual way",
      ],
      correctIndex: 0,
      explanation:
        "The matching cells were present before the toxin arrived, which no instructive model can explain. Each B cell commits to one specificity during maturation, by randomly joining gene segments and independently of any antigen; the antigen then binds whichever cells fit and drives them to divide. Somatic hypermutation refines a match that selection has already found rather than creating one.",
      misconception:
        "Reaching for a mechanism in which the antigen shapes the antibody, a serious historical hypothesis ruled out by exactly this observation: a pre-existing matching cell in an unexposed animal only fits generation first, selection second.",
    },
    {
      id: "immu-worked-titre",
      type: "worked",
      eyebrow: "Worked example",
      title: "Read a titre off a doubling dilution series",
      scenario:
        "A serum sample is tested for antibody by agglutination. Well 1 contains serum already diluted 1 in 10. Then 0.100 cm³ is transferred from well 1 into 0.100 cm³ of saline in well 2 and mixed, 0.100 cm³ of that is carried into well 3, and so on along a row of ten wells. Antigen-coated red cells are added to every well. Wells 1 to 6 show an even carpet of agglutinated cells; wells 7 to 10 show a compact button of settled, unagglutinated cells. Two weeks later a second sample from the same patient agglutinates through to well 10. Find the titre of each sample and the fold change.",
      steps: [
        {
          label: "Establish the dilution factor per transfer",
          decision:
            "Equal volumes mixed halve the concentration, so the series is geometric with ratio 2. Reading it as an arithmetic series is the commonest error in this assay.",
          working:
            "0.100 cm³ carried into 0.100 cm³ doubles the volume, so each well holds half the concentration of the one before",
        },
        {
          label: "Write the dilution of the nth well",
          decision:
            "A general expression is safer than counting along the row, because a miscount of one well is a factor of two in the answer.",
          working:
            "dilution in well n = 10 × 2ⁿ⁻¹, giving 1 in 10, 20, 40, 80, 160, 320, 640, 1280, 2560, and 5120",
        },
        {
          label: "Identify the endpoint of the first sample",
          decision:
            "The titre is the reciprocal of the greatest dilution still giving a visible reaction, so it is read from the last positive well, not the first negative one.",
          working:
            "last agglutinating well is 6, dilution 10 × 2⁵ = 320, so the titre is 320",
        },
        {
          label: "Identify the endpoint of the second sample",
          decision:
            "The same rule applies, but the endpoint has reached the end of the row, so the true titre is at least this value.",
          working:
            "last agglutinating well is 10, dilution 10 × 2⁹ = 5120, so the titre is 5120",
        },
        {
          label: "Express the change as a ratio and in wells",
          decision:
            "Because the series doubles, a ratio is more usefully quoted as a number of wells, which shows whether the change exceeds the reading error.",
          working: "5120 / 320 = 16 = 2⁴, that is four wells along the row",
        },
      ],
      answer:
        "The acute serum has a titre of 320 and the convalescent serum a titre of at least 5120, a sixteenfold rise over four doubling dilutions. A fourfold rise between paired samples is the conventional threshold for a recent response, so this clears it comfortably.",
      plausibility:
        "A titre is a dilution, so a larger number means more antibody: the second serum still reacts after sixteen times more dilution than the first. Because neighbouring wells differ by only a factor of two, a one-well difference lies within the reading error, which is why the conventional criterion is set at two wells.",
    },
    {
      id: "immu-memory",
      type: "concept",
      eyebrow: "The second encounter",
      title: "Memory changes the response, and variation is the counter to memory",
      paragraphs: [
        "The difference between a primary and a secondary response is read from three features of a titre curve, all from one cause. The lag is the interval before antibody is detectable: about a week in a primary response, under three days in a secondary one, because the memory clone is already large. The magnitude is the peak reached, typically tens of times higher on second exposure, because expansion starts from a larger base and the cells have already class-switched from IgM to IgG. The persistence is how slowly the titre falls afterwards: secondary responses generate long-lived plasma cells in the bone marrow, so the decay half-life is months rather than weeks.",
        "Immunity acquired by making your own response is active; immunity acquired by receiving someone else's antibody is passive. Each arises naturally or artificially. Natural active immunity follows infection and artificial active immunity follows vaccination; natural passive immunity is maternal IgG across the placenta and IgA in breast milk, while artificial passive immunity is an injection of prepared antibody such as antivenom. Passive immunity works within minutes but confers no memory and fades as the transferred protein is catabolised; active immunity takes days but lasts years. Vaccination is the deliberate creation of a memory clone against an antigen stripped of its ability to cause disease, so that the first genuine encounter is met by a secondary response.",
        "Antigenic variation defeats all of this. Memory is specific to an epitope, so a pathogen that changes its exposed epitopes is met as though it were new. Influenza accumulates point mutations in its surface proteins year on year, which is why vaccines are reformulated, and occasionally reassorts whole genome segments, producing a variant against which almost nobody has memory. Trypanosomes carry hundreds of alternative surface glycoprotein genes and express one at a time, switching stochastically, so infection proceeds as successive waves. A durable vaccine therefore needs a target the pathogen cannot afford to vary, usually a region essential to its own function, and finding one is the central difficulty for the pathogens that still have no vaccine.",
      ],
      callout:
        "read a titre curve as lag, magnitude, and persistence · memory is specific to an epitope, so changing the epitope evades it",
    },
    {
      id: "immu-worked-secondary",
      type: "worked",
      eyebrow: "Worked example",
      title: "Quantify what memory changes about a response",
      scenario:
        "Anti-H antibody is measured in arbitrary units per cubic centimetre after a first dose of an experimental vaccine on day 0. Day 0: not detected. Day 5: not detected. Day 7: 2. Day 10: 12. Day 14: 40. Day 21: 55. Day 28: 42. Day 60: 15. Day 120: 5. A second dose is given on day 120 and measurement continues. Day 123: 60. Day 127: 900. Day 130: 2200. Day 141: 1900. Day 240: 800. Compare the two responses on lag, magnitude, and persistence.",
      steps: [
        {
          label: "Compare the lag before antibody appears",
          decision:
            "Lag is measured from the dose, not from day 0 of the experiment, so the second response must be timed from day 120.",
          working:
            "primary: nothing at day 5, first detected at day 7; secondary: 5 rises to 60 within 3 days, already a twelvefold rise",
        },
        {
          label: "Compare the time taken to reach the peak",
          decision:
            "Peak timing is a separate reading from the lag and the two can move independently.",
          working:
            "primary peaks at day 21, that is 21 days after its dose; secondary peaks at day 130, that is 10 days after its dose",
        },
        {
          label: "Compare the peak magnitudes as a ratio",
          decision:
            "Antibody concentrations span orders of magnitude, so a ratio transfers between assays while a difference does not.",
          working: "2200 / 55 = 40, a fortyfold higher peak",
        },
        {
          label: "Compare persistence using a half-life",
          decision:
            "The decline is roughly exponential, so the honest comparison is a half-life, obtained by counting halvings with a logarithm to base 2.",
          working:
            "primary 55 to 5 over 99 days: log₂11 = 3.46 halvings, t½ = 99 / 3.46 ≈ 29 days. Secondary 2200 to 800 over 110 days: log₂2.75 = 1.46 halvings, t½ = 110 / 1.46 ≈ 75 days",
        },
        {
          label: "Attribute all three readings to one cause",
          decision:
            "A single mechanism should account for every difference observed, or the explanation is doing less work than it appears to.",
          working:
            "memory cells specific for H outnumber the original naive precursors, are already class-switched, and carry higher-affinity receptors, so expansion starts sooner, from a larger base, and yields longer-lived plasma cells",
        },
      ],
      answer:
        "The secondary response is detectable within 3 days rather than 7, peaks in 10 days rather than 21, reaches 40 times the concentration, and decays with a half-life of about 75 days against about 29 days.",
      plausibility:
        "All three readings point the same way, which is the check worth making: had the secondary response been faster but no larger, memory would be doing only part of the job attributed to it. The absolute figures are arbitrary units; the ratios are what carry across.",
    },
    {
      id: "immu-check-titre",
      type: "check",
      eyebrow: "Interpret paired sera",
      title: "Decide which patient has evidence of a recent infection",
      prompt:
        "Four patients each give an acute serum sample and a convalescent sample fourteen days later. Titres against the same antigen, measured by doubling dilution in the same laboratory, are: patient P, 40 then 160; patient Q, 320 then 320; patient R, 80 then 160; patient S, 640 then 160. Which result gives the best evidence of a recent infection?",
      options: [
        "P, because a fourfold rise — two whole doubling dilutions — is the conventional evidence of a recent response",
        "Q, because its titre is high in both samples",
        "R, because any rise at all between paired samples indicates infection",
        "S, because the change in titre is the largest in absolute terms",
      ],
      correctIndex: 0,
      explanation:
        "P rises by 160 / 40 = 4, two wells along a doubling series and the conventional threshold. R rises by a factor of 2, one well, which is within the reading error. Q is unchanged, and a single high titre shows past exposure rather than recent infection. S falls by a factor of 4, consistent with an infection resolving.",
      misconception:
        "Judging by absolute change, which picks S because 640 minus 160 is the largest number on the page. Titres are dilutions, so they must be compared as ratios and counted in wells; the largest absolute change here is in fact a fall.",
    },
    {
      id: "immu-check-immunity",
      type: "check",
      eyebrow: "Classify the immunity",
      title: "Explain why two preparations are given on the same day",
      prompt:
        "A traveller with a possible rabies exposure receives, on the same day, an injection of prepared human rabies immunoglobulin and the first dose of rabies vaccine. How should each be classified, and why are both given?",
      options: [
        "Both are artificial active immunity; the immunoglobulin merely accelerates the vaccine's effect",
        "The immunoglobulin is natural passive immunity and the vaccine is natural active immunity, since both use the body's own mechanisms",
        "The immunoglobulin is artificial passive immunity, protective at once but conferring no memory; the vaccine is artificial active immunity, protective only after a lag but conferring lasting memory",
        "The vaccine is passive because it supplies antigen rather than antibody, and the immunoglobulin is active because it supplies antibody",
      ],
      correctIndex: 2,
      explanation:
        "Receiving antibody made by someone else is passive, and receiving it as a manufactured preparation makes it artificial: it neutralises virus within hours but creates no memory clone. The vaccine supplies antigen, so the recipient mounts an active response, slower to become useful but generating memory. Giving both covers the gap until the recipient's own antibody arrives.",
      misconception:
        "Inverting the definitions by attaching passive to the antigen preparation, which gives the last option. Active and passive describe who made the antibody, not what is in the syringe; natural and artificial describe how it was acquired.",
    },
    {
      id: "immu-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar pathogen",
      title: "Predict the course of an infection that varies its coat",
      prompt:
        "A blood-borne parasite coats itself in a single surface glycoprotein selected from 60 alternative genes, and switches which gene it expresses at a rate of about 1 in 10³ per cell division. A patient carries about 1 × 10⁸ parasites at the point where the antibody response against the dominant coat becomes effective. What is the most likely consequence?",
      options: [
        "The infection is cleared, because antibody raised against the dominant coat binds all 1 × 10⁸ parasites",
        "About 1 × 10⁵ parasites are already expressing a different coat, so antibody clears the dominant population while a new variant expands, producing successive waves of parasitaemia",
        "About 60 parasites escape, which is too few to sustain the infection, so it resolves within days",
        "The parasites stop dividing, because switching the expressed coat gene is incompatible with replication",
      ],
      correctIndex: 1,
      explanation:
        "The number already expressing an alternative coat is the population times the switching rate: (1 × 10⁸) × (1 × 10⁻³) = 1 × 10⁵. Antibody is specific to the epitopes of the dominant coat, so those parasites are untouched and expand into the space cleared. The result is a relapsing parasitaemia, and immunity acquired against one wave does not protect against the next.",
      misconception:
        "Reading 60 as the number of escapers, which confuses the size of the gene library with the number of cells currently using an alternative from it. The relevant quantity is a rate applied to a population.",
    },
    {
      id: "immu-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Generate blindly, select specifically, remember, and expect evasion",
      points: [
        "Barriers and the innate response are fast, fixed, and identical at every exposure; they buy time rather than solving the problem.",
        "An antigen is the recognised molecule and an epitope is the patch one antibody contacts, which is why an antiserum is polyclonal and why cross-reaction happens.",
        "Antibody specificity lives in the variable domains at the two tips; the constant stem decides neutralisation, opsonisation, complement activation, or agglutination.",
        "Random recombination of about a hundred gene segments, plus imprecise joining, generates of order 10⁹ specificities before any antigen is met.",
        "Clonal selection expands the cells that already matched, which accounts for the lag of a primary response and for its disappearance on second exposure.",
        "A titre is the reciprocal of the last dilution giving a reaction, so paired sera are compared as ratios and a fourfold rise is two wells of a doubling series.",
        "Antigenic variation defeats memory by changing the epitope, so durable vaccines must target a region the pathogen cannot afford to alter.",
      ],
      transferRule:
        "When a system must answer a question it could not have anticipated, expect a large repertoire generated at random followed by a selection step, rather than a correct answer designed on demand.",
      nextLessonId: "lesson.biology.physiology_systems",
    },
  ],
};

const physiologySystems: Lesson = {
  id: "lesson.biology.physiology_systems",
  slug: "homeostasis-and-physiological-systems",
  number: "12.3",
  stageId: "stage.biology_physiology",
  discipline: "biology",
  title: "Homeostasis and physiological systems",
  summary:
    "Learn one control architecture — sensor, comparator, effector — and then meet temperature, glucose, water, salt, and acid-base regulation as instances of it, with the kidney as the quantitative centrepiece.",
  estimatedMinutes: 37,
  reviewStatus: "unreviewed",
  objectives: [
    "Identify receptor, control centre, and effector in an unfamiliar regulated system.",
    "Distinguish negative from positive feedback and name what terminates a positive loop.",
    "Apply a heat balance to find a rate of temperature change and the evaporation rate needed to prevent it.",
    "Contrast neural and endocrine control on speed, duration, and specificity.",
    "Locate a fault in a nested endocrine axis from paired hormone measurements.",
    "Compute net filtration pressure, glomerular filtration rate, and renal clearance.",
  ],
  prerequisiteLessonIds: [
    "lesson.biology.cell_signalling",
    "lesson.physics.fluids",
    "lesson.physics.thermal",
  ],
  blocks: [
    {
      id: "phys-architecture",
      type: "concept",
      eyebrow: "Constancy is active",
      title: "Holding internal conditions steady is what makes the outside world survivable",
      paragraphs: [
        "Enzymes work over narrow ranges of temperature, pH, and ionic strength; membranes depend on particular gradients; proteins denature a few degrees outside their working range. A cell sitting directly in the external environment is at the mercy of it. Multicellular animals maintain an internal environment — the fluid immediately around the cells — at the conditions those cells require, and pay continuously to keep it there. Homeostasis is that maintenance: not passive stability but active regulation about a set point, funded by metabolism. Its payoff is independence: an animal holding its core near 37 °C can hunt at night and in winter.",
        "Every regulated variable is controlled by the same three-part architecture. A receptor measures the variable — thermoreceptors in skin and hypothalamus, osmoreceptors in the hypothalamus, chemoreceptors in the medulla and great arteries, stretch receptors in vessel walls. A control centre compares that measurement with a set point, and the difference is the error signal. An effector acts to reduce the error: a muscle, a gland, a vessel wall. The loop closes only because the effector changes the very variable the receptor is measuring; without that return path there is measurement and action but no regulation. A set point is not always fixed either: in fever the hypothalamic set point is deliberately raised, which is why the patient shivers while already hot.",
        "Every system below is an instance. Core temperature is regulated by vasomotor tone, sweating, and shivering. Plasma glucose is regulated by two opposing pancreatic hormones. Plasma osmolality and volume are regulated at the kidney. Arterial carbon dioxide is regulated by ventilation, and because dissolved CO₂ is an acid that loop also regulates blood pH through the bicarbonate buffer met in buffers and titration curves. Digestion is the partial exception: its job is throughput rather than defence of a set point, and its design problem is surface area, appropriate enzymes, and absorption. Even there the architecture reappears in the control of secretion, with stretch and acidity in the gut wall as the sensed variables.",
      ],
      callout:
        "receptor → control centre → effector → change in the very variable the receptor measures",
    },
    {
      id: "phys-visual-loop",
      type: "visual",
      eyebrow: "Close the ring",
      title: "A control loop is four elements and one return arrow",
      introduction:
        "Draw the elements as a ring: the regulated variable, the receptor that measures it, the control centre that compares that measurement with a set point, and the effector that acts. Then draw the arrow from effector back to variable, which closes the ring.",
      visual: "feedback_loop",
      caption:
        "The sign of the returning arrow decides the behaviour of the whole system. If the effector pushes the variable back towards the set point the loop is stabilising and will settle; if it pushes it further away the loop runs away, and something outside the ring must stop it.",
    },
    {
      id: "phys-feedback",
      type: "concept",
      eyebrow: "Two signs, two behaviours",
      title: "Negative feedback stabilises; positive feedback commits",
      paragraphs: [
        "In negative feedback the effector opposes the deviation, and the result is not perfect constancy but a small oscillation around the set point. Two properties govern how it looks. Gain is how strongly the effector responds per unit of error: high gain holds the variable tightly but overshoots. Lag is the delay between deviation and correction, and a long lag with a high gain produces large swings, which is why a thermostat with an oversized boiler cycles noticeably. Core temperature in a healthy adult is typically held near 37 °C with a normal daily swing of about half a degree; that swing is the signature of a real controller, not a defect in it.",
        "In positive feedback the effector amplifies the deviation, so the loop accelerates and cannot stop itself. It appears wherever physiology needs commitment rather than stability, and every genuine example has a terminating event outside the loop. Stretch of the cervix in labour triggers oxytocin release, which strengthens contractions, which increases stretch; the loop ends when delivery removes the stretch. Depolarisation of an axon opens sodium channels and sodium entry depolarises further; the loop ends because the channels inactivate within about a millisecond. Where a positive loop lacks its terminator the result is pathology: in heat stroke, a rising core temperature raises metabolic rate, which produces more heat still.",
        "Thermoregulation is a clean instance and connects directly to thermal physics. The body's thermal inertia is large because tissue is mostly water: with a specific heat capacity of about 3.5 kJ kg⁻¹ K⁻¹, a 70 kg adult needs roughly 245 kJ to warm by one degree, which buys time for slow effectors. Heat leaves by radiation, conduction, convection, and evaporation, but only evaporation still works when the surroundings are hotter than the skin, because the other three run down a temperature difference that has by then reversed. Evaporation is effective because water is expensive to vaporise: the latent heat near skin temperature is about 2.43 × 10⁶ J kg⁻¹. The effectors are skin vasomotor tone, sweating, shivering, and behaviour.",
      ],
      callout:
        "negative feedback opposes the deviation · positive feedback amplifies it and needs an event outside the loop to stop it",
    },
    {
      id: "phys-worked-thermo",
      type: "worked",
      eyebrow: "Worked example",
      title: "Balance the heat produced by exercise against the heat that must be lost",
      scenario:
        "An adult of mass 70 kg cycles steadily for 30 minutes, producing heat at 700 W. Take the mean specific heat capacity of body tissue as 3.5 kJ kg⁻¹ K⁻¹ and the latent heat of vaporisation of water near skin temperature as 2.43 × 10⁶ J kg⁻¹. Find the rate at which core temperature would rise if no heat were lost, the total rise over the ride, and the rate of sweat evaporation needed to hold temperature constant instead.",
      steps: [
        {
          label: "Find the thermal capacity of the whole body",
          decision:
            "Multiplying mass by specific heat capacity converts a per-kilogram property into the energy this body needs per degree.",
          working: "mc = 70 kg × 3500 J kg⁻¹ K⁻¹ = 2.45 × 10⁵ J K⁻¹",
        },
        {
          label: "Convert the heat production into a rate of warming",
          decision:
            "With no loss, all the heat produced goes into raising temperature, so the rate is power divided by thermal capacity.",
          working:
            "dT/dt = P / mc = 700 W / (2.45 × 10⁵ J K⁻¹) = 2.86 × 10⁻³ K s⁻¹ = 0.17 K per minute",
        },
        {
          label: "Extrapolate over the ride and judge the result",
          decision:
            "A rate becomes meaningful only when compared with the range the system tolerates.",
          working:
            "ΔT = 0.17 K min⁻¹ × 30 min = 5.1 K, taking a core temperature of 37 °C to about 42 °C",
        },
        {
          label: "Find the evaporation rate that balances production",
          decision:
            "For temperature to hold steady the rate of heat removal must equal the rate of production, so divide the power by the latent heat per kilogram.",
          working:
            "ṁ = P / L = 700 W / (2.43 × 10⁶ J kg⁻¹) = 2.88 × 10⁻⁴ kg s⁻¹ = 1.04 kg per hour",
        },
        {
          label: "State what the calculation assumes",
          decision:
            "Only sweat that evaporates removes latent heat, so the assumption hidden in the last step is the one that fails first in practice.",
          working:
            "sweat that drips off removes essentially no heat, so in humid air the required evaporation cannot be achieved and temperature rises anyway",
        },
      ],
      answer:
        "Without heat loss the core would warm at about 0.17 °C per minute, reaching roughly 42 °C after 30 minutes; balancing the load instead requires about 1.0 dm³ of sweat to evaporate every hour.",
      plausibility:
        "Measured sweat rates during hard exercise in the heat commonly reach 1 to 2 dm³ per hour, so the figure is the right size and explains why fluid replacement matters over that timescale. A rise to 42 °C within half an hour also matches the clinical reality that exertional heat illness develops in tens of minutes.",
    },
    {
      id: "phys-check-loop",
      type: "check",
      eyebrow: "Classify the loop",
      title: "Decide the sign of a loop and name what ends it",
      prompt:
        "During labour, stretch of the cervix stimulates oxytocin release, oxytocin strengthens uterine contractions, and stronger contractions push the fetus further against the cervix, increasing the stretch. How should this loop be classified, and what stops it?",
      options: [
        "Positive feedback, in which the response amplifies the original stimulus; it stops only when delivery removes the stretch that drives it",
        "Negative feedback, because the process eventually returns the uterus to its resting state",
        "Positive feedback, which is inherently unstable and therefore never occurs in healthy physiology",
        "Negative feedback with unusually high gain, which is why the contractions become so strong",
      ],
      correctIndex: 0,
      explanation:
        "Follow the sign around the ring: more stretch gives more oxytocin, more contraction, and more stretch again. The output reinforces the input, so the loop is positive and self-accelerating. Nothing inside it can halt it, and it terminates only because delivery removes the stimulus — an event outside the loop.",
      misconception:
        "Calling the loop negative because the situation eventually returns to normal. What classifies a loop is the sign of its return arrow while it is running, not the state of the system after it has finished.",
    },
    {
      id: "phys-control",
      type: "concept",
      eyebrow: "Two delivery systems",
      title: "Nerves send addressed messages quickly; hormones broadcast slowly",
      paragraphs: [
        "Neural and endocrine control use identical molecular machinery — a ligand binding a receptor — and differ almost entirely in delivery. A nerve delivers its ligand a few tens of nanometres, in milliseconds, and the effect ends in milliseconds when the transmitter is destroyed or taken back up; specificity comes from anatomy, since the message goes where the axon goes. A hormone is released into the blood, reaches every tissue in seconds to minutes, and acts for minutes to days; specificity comes from receptor distribution. Neural control suits anything fast, brief, and precisely addressed; endocrine control suits anything sustained and applied to many tissues at once.",
        "Insulin and glucagon show why a regulated variable is usually served by an opposing pair rather than one hormone. Plasma glucose in a fasted adult typically sits between 4 and 6 mmol dm⁻³. When it rises, β cells of the pancreatic islets release insulin, which promotes glucose uptake into muscle and adipose tissue, drives glycogen and fat synthesis, and suppresses hepatic glucose output. When it falls, α cells release glucagon, which drives glycogenolysis and gluconeogenesis in the liver. A single hormone that could only be switched off would correct a deviation at whatever rate the body happened to consume glucose; two hormones acting in opposite directions drive the variable actively either way, which holds the range tighter.",
        "Endocrine loops are often nested. The hypothalamus secretes a releasing hormone into short portal vessels to the anterior pituitary; the pituitary releases a trophic hormone into the general circulation; the target gland releases the final hormone; and that final hormone inhibits both tiers above it. Three consequences follow. The arrangement amplifies, since nanogram quantities of releasing hormone yield microgram quantities of product. It offers several points where other inputs — stress, temperature, the day-night cycle — can enter the loop. And it makes a fault diagnosable, because measuring the controlled hormone together with the controller's output reveals which tier has failed. Supplying the final hormone from outside suppresses the whole axis, since the pituitary cannot distinguish hormone made by the gland from hormone swallowed as a tablet.",
      ],
      callout:
        "in a nested axis the final hormone inhibits both tiers above it, so the controlled variable and the controller output normally move in opposite directions",
    },
    {
      id: "phys-worked-perturb",
      type: "worked",
      eyebrow: "Worked example",
      title: "Locate a fault in a nested axis from two measurements",
      scenario:
        "The hypothalamus releases TRH, which drives the anterior pituitary to release TSH, which drives the thyroid to release thyroid hormone; thyroid hormone inhibits both tiers. Typical adult reference intervals, which vary between laboratories, are TSH 0.4 to 4.0 mU dm⁻³ and free T₄ 9 to 25 pmol dm⁻³. Three patients are tested. Patient A: free T₄ 6 pmol dm⁻³, TSH 42 mU dm⁻³. Patient B: free T₄ 31 pmol dm⁻³, TSH 0.02 mU dm⁻³. Patient C: free T₄ 5 pmol dm⁻³, TSH 0.9 mU dm⁻³. Locate the problem in each.",
      steps: [
        {
          label: "State the expected relationship before looking at data",
          decision:
            "Predicting the sign first turns three separate results into three tests of one rule, and makes the anomalous case obvious rather than merely unusual.",
          working:
            "negative feedback means low free T₄ should give high TSH and high free T₄ should give low TSH, so the two should move in opposite directions",
        },
        {
          label: "Test patient A against the rule",
          decision:
            "A result obeying the rule places the fault below the controller, because the controller is evidently still responding.",
          working:
            "free T₄ 6 is below 9 and TSH 42 is more than ten times the upper limit of 4.0, so the pituitary is driving hard and the gland is failing to deliver",
        },
        {
          label: "Test patient B against the rule",
          decision:
            "The loop cannot distinguish hormone made internally from hormone supplied externally, so an obedient result with a raised controlled variable points to an input from outside.",
          working:
            "free T₄ 31 is above 25 and TSH 0.02 is fully suppressed, exactly as an intact loop should respond to an excess of the final hormone",
        },
        {
          label: "Test patient C against the rule",
          decision:
            "The informative case is the one breaking the expected sign; when a result cannot be explained by the effector, the fault lies in the controller.",
          working:
            "free T₄ 5 is below the interval but TSH 0.9 sits inside it, so a large deficit has produced no rise in controller output at all",
        },
        {
          label: "Generalise the diagnostic move",
          decision:
            "The value of the exercise is the rule it yields, so state it without mentioning the thyroid.",
          working:
            "measure the controlled variable and the controller output together: obedient signs implicate the effector or an external input, a broken sign implicates the controller",
        },
      ],
      answer:
        "Patient A has a failing thyroid gland with an intact pituitary; patient B has an intact axis correctly suppressed by thyroid hormone taken from outside the body; patient C has a failing pituitary or hypothalamus, because a TSH inside the reference interval is inappropriately low for a free T₄ that far below it.",
      plausibility:
        "The reasoning uses only the sign of the feedback and never the absolute numbers, so it survives a change of assay or of units. Patient C makes the point: a value inside a reference interval is not automatically a normal value, because what counts as normal depends on what the rest of the loop is doing.",
    },
    {
      id: "phys-check-digestion",
      type: "check",
      eyebrow: "Design for exchange",
      title: "Multiply the folds that build an absorptive surface",
      prompt:
        "Modelled as a smooth cylinder, the internal surface of the small intestine is about 0.60 m². Circular folds of the wall multiply that area by 3, the villi projecting from those folds multiply it by a further 10, and the microvilli on each villus cell multiply it by a further 20. What total absorptive area does the model predict, and by what factor has the smooth cylinder been amplified?",
      options: [
        "A factor of 33, giving about 20 m²",
        "A factor of 200, giving about 120 m²",
        "A factor of 60, giving about 36 m²",
        "A factor of 600, giving about 360 m²",
      ],
      correctIndex: 3,
      explanation:
        "The three levels of folding are nested, so each acts on the area produced by the one before and the factors multiply: 3 × 10 × 20 = 600, and 0.60 m² × 600 = 360 m². The same nesting is why damage confined to the microvillus border causes severe malabsorption despite a structurally intact intestine.",
      misconception:
        "Adding the factors to get 33 and about 20 m², which treats the three levels as separate contributions rather than folds upon folds. The model is also generous: direct measurements on human tissue give a figure of order 30 m², so the multiplicative logic is the durable part and the absolute number is not.",
    },
    {
      id: "phys-renal",
      type: "concept",
      eyebrow: "Discard, then reclaim",
      title: "The kidney filters almost everything and takes back what it wants",
      paragraphs: [
        "A kidney could in principle secrete unwanted molecules selectively, but it does the opposite. At the glomerulus, plasma is filtered indiscriminately by size and charge: water, ions, glucose, amino acids, and urea all pass, while cells and plasma proteins are held back. The driving force is the ordinary capillary pressure balance met in fluids. Hydrostatic pressure in the glomerular capillary pushes fluid out, typically about 55 mmHg; capsular hydrostatic pressure opposes it, about 15 mmHg; and the retained proteins exert an oncotic pressure pulling fluid back, about 30 mmHg, while the protein-free filtrate contributes nothing. The net figure is a small difference between large numbers. The strategy is expensive but flexible: a molecule the body has never encountered is discarded by default unless a transporter exists to reclaim it.",
        "Recovery happens along the tubule. The proximal tubule reabsorbs roughly two-thirds of the filtered water and sodium, and essentially all the filtered glucose and amino acids, by secondary active transport driven by the sodium gradient the basolateral sodium-potassium pump maintains. Carriers are finite, so each has a transport maximum: for glucose it is about 2 mmol per minute, and filtered glucose appears in urine only once plasma concentration is high enough for the filtered load to exceed it, which happens near 10 mmol dm⁻³ in practice. The loop of Henle then builds a standing osmotic gradient down the medulla by a counter-current multiplier: the ascending limb pumps sodium chloride out but is impermeable to water, the descending limb is permeable to water but not salt, and the two side by side turn a small transverse difference into a large longitudinal one.",
        "The last segments close the loop. Antidiuretic hormone, released when hypothalamic osmoreceptors detect a rise in plasma osmolality, inserts water channels into the collecting duct, so water leaves down the medullary gradient and urine osmolality can range from about 50 to about 1200 mosmol kg⁻¹. Aldosterone, released when volume or blood pressure falls, increases sodium reabsorption and potassium secretion in the distal nephron; water follows sodium osmotically, so aldosterone regulates volume rather than concentration. Output is quantified by clearance, the volume of plasma completely cleared of a substance per unit time, C = U × V / P. A substance freely filtered and neither reabsorbed nor secreted has a clearance equal to the glomerular filtration rate; creatinine is the convenient approximation, overestimating slightly because a little is secreted.",
      ],
      callout:
        "net filtration pressure = capillary hydrostatic − capsular hydrostatic − capillary oncotic · clearance = U × V / P",
    },
    {
      id: "phys-visual-nephron",
      type: "visual",
      eyebrow: "Follow the filtrate",
      title: "One pass of indiscriminate filtration, then a long stretch of selective recovery",
      introduction:
        "Follow a single nephron from glomerulus to collecting duct and mark, at each segment, what crosses the wall, in which direction, and whether it moves passively or is pumped.",
      visual: "nephron",
      caption:
        "Filtration happens once and is unselective; everything after it is recovery. The osmotic gradient built by the loop is a standing resource that costs energy to maintain, and the collecting duct decides under hormonal control how much of it to spend on reclaiming water.",
    },
    {
      id: "phys-worked-renal",
      type: "worked",
      eyebrow: "Worked example",
      title: "Turn a pressure balance into a filtration rate, then perturb it",
      scenario:
        "In a healthy adult, glomerular capillary hydrostatic pressure is 55 mmHg, hydrostatic pressure in Bowman's capsule is 15 mmHg, and the oncotic pressure of the plasma proteins retained in the capillary is 30 mmHg; the filtrate is protein-free. The filtration coefficient of the whole glomerular barrier is 12.5 cm³ min⁻¹ mmHg⁻¹. Find the net filtration pressure and the glomerular filtration rate, convert the rate to a daily volume, and find the effect of a fall in glomerular capillary pressure to 48 mmHg.",
      steps: [
        {
          label: "Assign a sign to each pressure",
          decision:
            "Filtration is driven by an imbalance of four pressures, so each must be entered with the direction it acts before any arithmetic.",
          working:
            "out of the capillary: 55 mmHg. Into the capillary: 15 mmHg from the capsule and 30 mmHg from plasma oncotic pressure. Filtrate oncotic pressure: 0",
        },
        {
          label: "Compute the net filtration pressure",
          decision:
            "Only the net figure drives flow, and noticing how small it is beside its components is the point of the calculation.",
          working: "NFP = 55 − 15 − 30 = 10 mmHg",
        },
        {
          label: "Convert the pressure into a flow",
          decision:
            "The filtration coefficient bundles permeability and total barrier area into one constant, so flow is that constant times the driving pressure.",
          working: "GFR = 12.5 cm³ min⁻¹ mmHg⁻¹ × 10 mmHg = 125 cm³ min⁻¹",
        },
        {
          label: "Scale the rate up to a day",
          decision:
            "Comparing the daily filtered volume with the plasma volume present makes the scale of the recovery task visible.",
          working:
            "125 cm³ min⁻¹ × 60 × 24 = 1.80 × 10⁵ cm³ = 180 dm³ per day, against a plasma volume near 3 dm³, so the plasma is filtered about 60 times over; a urine output of 1.5 dm³ means about 99 per cent of the filtrate is reabsorbed",
        },
        {
          label: "Perturb the capillary pressure",
          decision:
            "Because the net pressure is a small difference between large numbers, sensitivity can only be judged by recomputing, not by inspecting the fractional change in the input.",
          working:
            "NFP = 48 − 15 − 30 = 3 mmHg, so GFR = 12.5 × 3 = 37.5 cm³ min⁻¹",
        },
      ],
      answer:
        "The net filtration pressure is 10 mmHg, giving a filtration rate of 125 cm³ min⁻¹, or 180 dm³ of filtrate per day of which about 99 per cent is reclaimed. A fall in glomerular capillary pressure of only 13 per cent cuts the filtration rate by 70 per cent, to 37.5 cm³ min⁻¹.",
      plausibility:
        "A daily filtered volume of 180 dm³ and a rate near 125 cm³ min⁻¹ are the standard measured figures, so the pressure balance reproduces the observed rate rather than merely being consistent with it. The disproportionate sensitivity is why the kidney invests in autoregulating its own arteriolar tone.",
    },
    {
      id: "phys-check-clearance",
      type: "check",
      eyebrow: "Your turn",
      title: "Compute a clearance from a timed collection",
      prompt:
        "A patient collects urine for exactly 24 hours, producing 1.80 dm³. The urine creatinine concentration is 8.0 mmol dm⁻³ and the plasma creatinine concentration is 100 μmol dm⁻³. Using C = U × V / P, what is the creatinine clearance?",
      options: [
        "0.10 cm³ min⁻¹",
        "1.25 cm³ min⁻¹",
        "80 cm³ min⁻¹",
        "100 cm³ min⁻¹",
      ],
      correctIndex: 3,
      explanation:
        "Convert the urine flow rate first: 1800 cm³ over 1440 minutes is 1.25 cm³ min⁻¹. Then put U and P into the same units: 8.0 mmol dm⁻³ is 8000 μmol dm⁻³, so U / P = 8000 / 100 = 80, a pure number. The clearance is 80 × 1.25 = 100 cm³ min⁻¹. As a check on the collection, daily creatinine excretion is 8.0 mmol dm⁻³ × 1.80 dm³ = 14.4 mmol, within the usual adult range.",
      misconception:
        "Dividing 8.0 by 100 without converting millimoles to micromoles, which gives 0.10 cm³ min⁻¹ — a thousandfold error that passes unnoticed because the units of the answer still look right. Quoting 1.25 cm³ min⁻¹ reports the urine flow rate rather than the clearance.",
    },
    {
      id: "phys-check-respiratory",
      type: "check",
      eyebrow: "Link the systems",
      title: "Predict what voluntary hyperventilation does to blood and to breathing",
      prompt:
        "Breathing is regulated mainly by arterial carbon dioxide, detected as a pH change by central chemoreceptors, rather than by oxygen. Blood is buffered by CO₂ + 2H₂O ⇌ H₃O⁺ + HCO₃⁻, with pH = 6.10 + log₁₀([HCO₃⁻] / (0.23 × pCO₂)) for bicarbonate in mmol dm⁻³ and pCO₂ in kPa. A person voluntarily hyperventilates for a minute, taking arterial pCO₂ from 5.3 kPa to 3.0 kPa while bicarbonate stays at 24 mmol dm⁻³. What happens?",
      options: [
        "The pH falls, because removing carbon dioxide removes a base from the blood",
        "The pH rises to about 7.6, and the reduced chemoreceptor drive produces a pause in breathing until carbon dioxide accumulates again",
        "The pH is unchanged, because the bicarbonate buffer holds it exactly constant whatever the carbon dioxide does",
        "The pH rises, and breathing is stimulated further, because the chemoreceptors respond to the rise in pH by increasing ventilation",
      ],
      correctIndex: 1,
      explanation:
        "Dissolved carbon dioxide is the acid in this equilibrium, so removing it pulls the reaction left and lowers hydronium. Numerically, 24 / (0.23 × 5.3) = 19.7 and log₁₀19.7 = 1.29, giving pH 7.39 at rest; after hyperventilation 24 / (0.23 × 3.0) = 34.8 and log₁₀34.8 = 1.54, giving pH 7.64. Chemoreceptor drive comes from carbon dioxide, so that drive is now minimal and breathing pauses until it rebuilds — which is why hyperventilating before a breath-hold dive is dangerous.",
      misconception:
        "Believing a buffer pins pH regardless of the load, which gives the third option. A buffer limits how far pH moves for a given insult; it cannot hold pH fixed while one member of the conjugate pair is actively removed from the body.",
    },
    {
      id: "phys-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar system",
      title: "Predict what happens when an effector is blocked",
      prompt:
        "A freshwater fish loses sodium continuously to the water around it and replaces it using transporter proteins in specialised gill cells. An endocrine gland secretes hormone X when plasma sodium falls, and hormone X increases the activity of those gill transporters. An experimenter gives a drug that blocks the gill transporters completely, then measures plasma sodium and hormone X over several days. What should be seen?",
      options: [
        "Plasma sodium falls and hormone X also falls, because the two always move together in a control loop",
        "Plasma sodium is held constant, because negative feedback guarantees that the set point is met",
        "Plasma sodium falls, and hormone X rises and stays high, because the sensor still detects the deficit but the blocked effector cannot correct it",
        "Plasma sodium rises, because blocking a transporter prevents sodium from leaving the fish",
      ],
      correctIndex: 2,
      explanation:
        "Trace the loop with one element removed. Sodium continues to leak out and can no longer be reclaimed, so plasma sodium falls. The sensor is intact and reports the deficit, so hormone X rises; but with the effector blocked the correction never arrives and the error persists. That signature — a controlled variable far outside its range with a maximally driven controller — is the one seen when a failing gland is paired with an intact pituitary.",
      misconception:
        "Assuming negative feedback guarantees the set point, which is the claim that plasma sodium is held constant. Feedback only guarantees that the system will act to reduce an error; if the effector cannot act, the result is a large sustained controller output and no correction at all.",
    },
    {
      id: "phys-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "One architecture, then every system as an instance of it",
      points: [
        "Homeostasis is active regulation about a set point, and the set point itself can be reset, as it is during fever.",
        "Receptor, control centre, and effector recur in every system, and the loop regulates only because the effector changes the variable the receptor measures.",
        "Negative feedback opposes a deviation and settles with a small oscillation; positive feedback amplifies it and needs an event outside the loop to stop.",
        "Neural control is fast, brief, and addressed by anatomy; endocrine control is slower, sustained, and addressed by receptor distribution.",
        "An opposing hormone pair such as insulin and glucagon drives a variable actively in either direction, holding it in a tighter range than one hormone could.",
        "Glomerular filtration is driven by a net pressure of only about 10 mmHg, a small difference between large numbers, so filtration rate is acutely sensitive to arteriolar tone.",
        "Clearance, C = U × V / P, converts two concentrations and a flow rate into a volume of plasma cleared per minute, and equals the filtration rate for a substance neither reabsorbed nor secreted.",
      ],
      transferRule:
        "To understand any regulated system, name the sensed variable, the sensor, the comparator, and the effector; then disable one of them on paper and follow the sign of the change all the way round the loop.",
      nextLessonId: "lesson.integration.graph_measurement_studio",
    },
  ],
};

export const biologyPhysiologyLessons: Lesson[] = [
  cellSignalling,
  immunology,
  physiologySystems,
];
