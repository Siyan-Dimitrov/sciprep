import type { Lesson } from "@/lib/lesson-types";

const dnaExpression: Lesson = {
  id: "lesson.biology.dna_expression",
  slug: "dna-replication-and-gene-expression",
  number: "11.1",
  stageId: "stage.biology_genetics",
  discipline: "biology",
  title: "DNA, replication, and gene expression",
  summary:
    "Treat DNA as a molecule built to be copied, follow the evidence that established semi-conservative replication, and read a sequence through to a peptide so that the consequence of a mutation can be reasoned out rather than recalled.",
  estimatedMinutes: 38,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain how the sugar-phosphate backbone and specific base pairing give DNA both stability and copyability.",
    "Write the complementary antiparallel strand for a given sequence using the 5′ → 3′ convention.",
    "Account for the Meselson-Stahl density-gradient result in terms of competing replication models.",
    "Explain leading and lagging strand synthesis as a consequence of polymerase directionality.",
    "Transcribe and translate a short coding sequence using a supplied extract of the genetic code.",
    "Predict and justify the consequence of a substitution, insertion, or deletion in a coding sequence.",
  ],
  prerequisiteLessonIds: [
    "lesson.biology.cell_structure",
    "lesson.chemistry.biomolecules",
  ],
  blocks: [
    {
      id: "dna-purpose",
      type: "concept",
      eyebrow: "Information in matter",
      title: "A molecule that stores instructions must also be copyable",
      paragraphs: [
        "A cell about to divide has to hand each daughter a complete set of instructions, which places two demands on whatever molecule carries them. It must be chemically stable enough to survive decades of ordinary cellular chemistry, and it must have a structure from which an exact copy can be made without anything having to understand what the instructions mean. Proteins meet the first demand and fail the second: there is no way to build a copy of a folded protein using the folded protein as a guide. DNA meets both, and the chemistry that lets it do so — a nucleotide of base, sugar, and phosphate, joined into a chain by phosphodiester links — is already in place from the treatment of biological molecules.",
        "The information is carried entirely in the order of the four bases along the chain. The backbone is chemically uniform: the same sugar and the same phosphate repeat regardless of what the molecule says. That uniformity is not a wasted opportunity, it is the design. Because the backbone is identical whatever the sequence, the physical properties of the molecule — its charge, its solubility, its stiffness — do not depend on the message, so one set of machinery can store, copy, and move any message at all. A code whose physical behaviour changed with its content could not be handled by general-purpose enzymes.",
        "Copyability comes from pairing. Each base has exactly one partner it can meet across the axis of the helix, so one strand specifies the other completely. A DNA molecule is therefore not one copy of the message but two complementary copies held together, either of which can regenerate the other. That redundancy is what makes replication a matter of separating and filling in, and it is also what makes accurate repair possible: when one strand is damaged, the intact partner still holds the answer.",
      ],
      callout:
        "the backbone carries no information · the sequence of bases carries all of it",
    },
    {
      id: "dna-visual-helix",
      type: "visual",
      eyebrow: "See the two rails",
      title: "Backbones face the water while the information hides in the core",
      introduction:
        "Two features of DNA resist being stated in a sentence: that the strands run in opposite directions, and that the informative part of the molecule is buried on the inside while the chemically uniform part faces the solvent. A diagram states both at once.",
      visual: "dna_structure",
      caption:
        "The sugar-phosphate backbones spiral on the outside, negatively charged and hydrated; the bases stack in the core and pair across the axis. Follow either backbone and its 5′ and 3′ ends lie at opposite ends of the molecule, which is exactly what antiparallel means.",
    },
    {
      id: "dna-pairing",
      type: "concept",
      eyebrow: "Pairing and direction",
      title: "Base pairing is specific because donors and acceptors must line up",
      paragraphs: [
        "The five carbons of the sugar are numbered 1′ to 5′ to keep them distinct from the numbered atoms of the base. A phosphate sits on the 5′ carbon and a hydroxyl on the 3′ carbon, and the phosphodiester link joins the 5′ phosphate of one nucleotide to the 3′ hydroxyl of the next. A finished strand therefore has chemically different ends: a free 5′ phosphate at one and a free 3′ hydroxyl at the other. A strand has direction in the way a sentence does, and by universal convention a sequence is written 5′ to 3′ unless the ends are labelled otherwise. Reading a sequence in the wrong direction is the single most common error in this material.",
        "Pairing is constrained twice over. Geometrically, a two-ring purine always faces a one-ring pyrimidine, so every rung of the ladder is the same width and the helix does not bulge or pinch. Chemically, the two partners must present hydrogen-bond donors opposite acceptors along the whole contact. Adenine and thymine line up two such positions; guanine and cytosine line up three. That is the origin of the two-bond and three-bond counts already met, and it has a measurable consequence: a guanine-cytosine-rich stretch takes more energy to pull apart, so it melts at a higher temperature. Individual hydrogen bonds are weak, of the order of 5 to 20 kJ mol⁻¹, and duplex DNA is stable only because thousands of them act in series alongside the stacking of the flat bases.",
        "The two strands must run in opposite directions for the donor and acceptor positions to meet, so antiparallel arrangement is forced by the pairing rather than chosen for convenience. This matters whenever a complement has to be written down. Building the partner base by base gives a strand running 3′ to 5′ under the original; to state it in the usual 5′ to 3′ form it must then be reversed. Complement, then reverse — two operations, and skipping the second is what turns a correct chemical answer into a wrong written one.",
      ],
      callout:
        "A pairs with T through two hydrogen bonds · G pairs with C through three",
    },
    {
      id: "dna-worked-strand",
      type: "worked",
      eyebrow: "Worked example",
      title: "Count the hydrogen bonds holding a fragment together",
      scenario:
        "A double-stranded DNA fragment is 240 base pairs long. Analysis shows that 35 per cent of all the bases it contains are adenine. Find the number of each base, and the total number of hydrogen bonds joining the two strands.",
      steps: [
        {
          label: "Convert base pairs into bases",
          decision:
            "The stated percentage refers to all bases in the duplex, not to one strand, so the total must be counted across both strands before any percentage is applied.",
          working: "240 base pairs × 2 bases per pair = 480 bases in total",
        },
        {
          label: "Use pairing to fix the other three percentages",
          decision:
            "Every adenine is paired with a thymine, so their percentages are equal; the remainder is shared equally between guanine and cytosine for the same reason.",
          working:
            "%T = %A = 35, so %G + %C = 100 − 70 = 30, and %G = %C = 15",
        },
        {
          label: "Turn percentages into counts",
          decision:
            "Multiply each percentage by the total number of bases, then check that the four counts recover that total.",
          working:
            "A = T = 0.35 × 480 = 168; G = C = 0.15 × 480 = 72; 168 + 168 + 72 + 72 = 480",
        },
        {
          label: "Count the pairs of each kind",
          decision:
            "A hydrogen-bond count is per pair, not per base, so convert to pairs before assigning bond numbers.",
          working:
            "168 A–T pairs and 72 G–C pairs, and 168 + 72 = 240 pairs as required",
        },
        {
          label: "Assign two bonds or three to each pair",
          decision:
            "Only the pair type sets the bond count, so the two classes can be totalled separately and added.",
          working:
            "(168 × 2) + (72 × 3) = 336 + 216 = 552 hydrogen bonds",
        },
      ],
      answer:
        "The fragment contains 168 adenine, 168 thymine, 72 guanine and 72 cytosine bases, held together by 552 hydrogen bonds, of which 216 — about 39 per cent — come from the 30 per cent of pairs that are G–C.",
      plausibility:
        "The answer must lie between the two extremes: 240 pairs all A–T would give 480 bonds and all G–C would give 720. A value of 552 sits between them and nearer the lower end, as an adenine-rich fragment should. The mean is 552 ÷ 240 = 2.30 bonds per pair, which matches 0.70 × 2 + 0.30 × 3 = 2.30 computed independently.",
    },
    {
      id: "dna-check-pairing",
      type: "check",
      eyebrow: "Your turn",
      title: "Write a complement the right way round",
      prompt:
        "One strand of a short DNA duplex reads 5′-TACGGATC-3′. Written in the conventional 5′ to 3′ direction, what is the sequence of the complementary strand?",
      options: [
        "5′-GATCCGTA-3′",
        "5′-ATGCCTAG-3′",
        "5′-CTAGGCAT-3′",
        "5′-TACGGATC-3′",
      ],
      correctIndex: 0,
      explanation:
        "Pair each base in turn: T with A, A with T, C with G, G with C, G with C, A with T, T with A, C with G. That gives 3′-ATGCCTAG-5′ lying under the original. Because the partner strand runs the other way, reversing it into the conventional direction gives 5′-GATCCGTA-3′.",
      misconception:
        "Complementing correctly and then writing the answer down in the same left-to-right order as the original, which produces ATGCCTAG. That string is the right set of bases in the wrong direction, and it describes a different molecule. Reversing without complementing gives CTAGGCAT, the other half of the same error.",
    },
    {
      id: "dna-replication",
      type: "concept",
      eyebrow: "Copying the message",
      title: "Each strand is a template, so every copy keeps one old strand",
      paragraphs: [
        "Once pairing is understood, a copying scheme almost suggests itself: separate the strands and let each specify its missing partner. But three schemes were logically available and none could be ruled out by inspection. Conservative replication would keep the parental duplex intact and build an entirely new one alongside it. Semi-conservative replication would give each daughter duplex one parental strand and one new one. Dispersive replication would break and rejoin, leaving old and new material interspersed along both strands of both products. The choice between them was settled by measurement, not by which sounded most elegant.",
        "The experiment of Meselson and Stahl worked by making old and new material physically distinguishable. Bacteria were grown for many generations in a medium whose only nitrogen source was the heavy isotope ¹⁵N, so every base in their DNA carried it, then transferred to ordinary ¹⁴N medium. From that point, all new nucleotides were light and old ones heavy, so the density of a duplex reports how much parental material it retains. Caesium chloride density-gradient centrifugation separates duplexes that differ by that small amount. The design is the part worth carrying away: the three models make identical predictions about most things, so the useful measurement is the one on which they disagree.",
        "Directionality then forces an asymmetry into the process. DNA polymerase can add a nucleotide only to a free 3′ hydroxyl, so a new strand grows exclusively 5′ to 3′ and reads its template 3′ to 5′. At a replication fork the two templates are antiparallel, so only one of them runs in the direction that lets synthesis chase the opening fork. That new strand — the leading strand — is built continuously. On the other template synthesis must run away from the fork, so it stops, waits for more template to be exposed, and restarts, producing short fragments that a ligase later joins. The lagging strand is not a flaw in the machinery; it is the unavoidable consequence of one chemical restriction.",
      ],
      callout:
        "polymerase extends only a free 3′ hydroxyl, so every new strand grows 5′ → 3′",
    },
    {
      id: "dna-worked-meselson",
      type: "worked",
      eyebrow: "Worked example",
      title: "Predict the bands each replication model would produce",
      scenario:
        "A bacterial culture is grown for many generations in medium whose only nitrogen source is ¹⁵N, then transferred at time zero to ordinary ¹⁴N medium. Samples are taken after exactly one and after exactly two rounds of replication and spun to equilibrium in a caesium chloride density gradient. State what each of the three models predicts, decide which survives, and extend the surviving model to the third round.",
      steps: [
        {
          label: "State what the gradient actually measures",
          decision:
            "The gradient sorts by density, and density depends only on how much ¹⁵N a duplex contains, so exactly three band positions are available whatever the mechanism.",
          working:
            "heavy = both strands ¹⁵N; hybrid = one strand of each; light = both strands ¹⁴N",
        },
        {
          label: "Predict the first round under each model",
          decision:
            "Apply each model literally to a single parental duplex, then scale up; the culture is large enough that the proportions are what appear as band intensities.",
          working:
            "conservative → half heavy and half light, two bands; semi-conservative → all duplexes hybrid, one band; dispersive → every strand half old, one band at hybrid density",
        },
        {
          label: "Predict the second round",
          decision:
            "Generation one cannot separate semi-conservative from dispersive, since both predict a single intermediate band, so the discriminating measurement has to come later.",
          working:
            "semi-conservative → 4 duplexes, 2 hybrid and 2 light, two bands of equal intensity; dispersive → still one band, now one quarter ¹⁵N; conservative → 1 heavy and 3 light",
        },
        {
          label: "Match the predictions to the observation",
          decision:
            "Accept only the model consistent with both samples; a model that fits one time point and not the other is refuted, not partially supported.",
          working:
            "observed: a single hybrid band after one round, then equal hybrid and light bands after two — predicted by semi-conservative replication alone",
        },
        {
          label: "Extend to the third round",
          decision:
            "Track the parental strands rather than the duplexes, because the number of ¹⁵N strands is fixed for ever while the number of duplexes doubles each round.",
          working:
            "8 duplexes exist, the 2 original heavy strands sit one to a duplex, so 2 are hybrid and 6 are light",
        },
      ],
      answer:
        "Replication is semi-conservative. After a third round the gradient shows one quarter of the DNA as a hybrid band and three quarters as a light band, with no heavy band at any point after the first round.",
      plausibility:
        "After n rounds there are 2ⁿ duplexes but still exactly 2 parental strands, so the hybrid fraction is 2 ÷ 2ⁿ. That gives 1 at n = 1, one half at n = 2, and one quarter at n = 3, matching the worked result and confirming that the hybrid band never disappears, it only becomes fainter.",
    },
    {
      id: "dna-visual-dogma",
      type: "visual",
      eyebrow: "Three steps, one axis",
      title: "Only one of the three steps changes the language",
      introduction:
        "Information moves along a standard route: DNA is copied to DNA, transcribed into RNA, and translated into protein. Laying the three steps on a single axis makes visible what each one preserves and what it converts.",
      visual: "central_dogma",
      caption:
        "Replication and transcription both work in the language of bases and both read a template by pairing. Translation is the only step that changes language, from an ordered sequence of bases to an ordered sequence of amino acids, and it is the only step for which no cell has machinery to run the conversion backwards.",
    },
    {
      id: "dna-expression",
      type: "concept",
      eyebrow: "From gene to protein",
      title: "Transcription makes a working copy that translation then reads",
      paragraphs: [
        "The archive and the working copy are different objects. In a eukaryotic cell the DNA stays in the nucleus while proteins are made in the cytoplasm, so a transcript carries the message out. RNA differs from DNA in three respects: its sugar is ribose, which carries a hydroxyl at the 2′ position and makes the molecule more reactive and shorter-lived; it uses uracil where DNA uses thymine; and it is normally single-stranded. RNA polymerase reads the template strand 3′ to 5′ and builds the transcript 5′ to 3′, so the transcript reproduces the sequence of the other strand — the coding strand — with U substituted for T. Only one strand of any given gene is transcribed, and which one depends on that gene's orientation, so both DNA strands act as templates somewhere along a chromosome.",
        "In eukaryotes the primary transcript is then edited. Introns are excised and the remaining exons joined, a modified cap is added at the 5′ end and a tail of adenines at the 3′ end, and only then is the mature messenger exported. Splicing is not merely tidying: the same primary transcript can be spliced in more than one way, so one gene can specify several related proteins, which is why the number of genes in a genome is a poor estimate of the number of proteins. Bacteria have essentially no introns and begin translating a transcript while it is still being made.",
        "Translation happens at the ribosome, which holds the messenger and two transfer RNAs at once. Each transfer RNA carries an anticodon at one end and a specific amino acid at the other; pairing between codon and anticodon selects which one may enter, a peptide bond forms between the growing chain and the incoming amino acid, and the ribosome advances by exactly three bases. The messenger is read 5′ to 3′ and the protein is built from its amino end towards its carboxyl end. The correspondence between codon and amino acid is enforced not at the ribosome but earlier, by the enzymes that charge each transfer RNA with its proper amino acid; the ribosome checks the pairing and nothing else.",
      ],
      callout:
        "mRNA is read 5′ → 3′ and the polypeptide is built from its N-terminus outwards",
    },
    {
      id: "dna-code",
      type: "concept",
      eyebrow: "A triplet code",
      title: "Three bases per amino acid is the smallest arrangement that works",
      paragraphs: [
        "The width of the code can be settled by counting. There are four bases and about twenty amino acids to specify. One base per amino acid offers four possibilities and two bases offer sixteen, both short of what is needed; three bases offer sixty-four, comfortably enough. The code is therefore a triplet code, a conclusion reachable from arithmetic before any experiment. Sixty-four codons for twenty amino acids plus a stop signal means the code is degenerate: most amino acids are specified by more than one codon, and the alternatives usually differ only at the third base. A substitution at the second position always changes the amino acid specified; one at the third position frequently does not.",
        "The message carries no punctuation between codons, so the reading frame is set by the first AUG and then maintained only by counting in threes. AUG specifies methionine and doubles as the start signal, while UAA, UAG and UGA specify no amino acid and end translation. Because there is nothing in the sequence marking where one codon ends and the next begins, the same stretch of bases read from a different starting point yields a completely different and usually meaningless message. The code is close to universal across life, with small documented variations in mitochondria and a few organisms; that near-universality is a fact about shared ancestry rather than a rule to apply.",
        "The consequences of mutation follow from these two properties without anything being memorised. A substitution alters one codon only. It is silent if the new codon is a synonym, which most often means a change at the third base; missense if it names a different amino acid, with an effect that depends on how chemically similar the replacement is and where in the protein it sits; and nonsense if it creates a premature stop, truncating the chain. An insertion or deletion of one or two bases is different in kind: it moves every triplet boundary downstream of it, so every subsequent codon is read differently and the original stop codon is no longer in frame. Since three of the sixty-four codons are stops, a shifted frame usually runs into a premature stop within a few dozen codons. Adding or removing a multiple of three preserves the frame and changes the protein only locally.",
      ],
      callout:
        "a substitution alters one codon · an insertion or deletion of one or two bases alters every codon after it",
    },
    {
      id: "dna-worked-translate",
      type: "worked",
      eyebrow: "Worked example",
      title: "Translate a fragment and then break its reading frame",
      scenario:
        "The coding strand of a short gene fragment reads 5′-ATGACCGAATGTTGGAAGTAA-3′. Use this extract of the genetic code: AUG methionine and start; ACC threonine; GAA glutamate; UGU cysteine; UGG tryptophan; AAG lysine; CCG proline; AAU asparagine; GUU valine; GGA glycine; AGU serine; UAA, UAG and UGA stop. Write the template strand, the messenger, and the peptide, then find the consequence of deleting the adenine at position 4.",
      steps: [
        {
          label: "Write the template strand",
          decision:
            "The template must be complementary and antiparallel, so build it base by base beneath the coding strand and label its ends rather than trying to write it directly in the conventional direction.",
          working:
            "coding 5′-ATGACCGAATGTTGGAAGTAA-3′ pairs with template 3′-TACTGGCTTACAACCTTCATT-5′",
        },
        {
          label: "Transcribe the messenger",
          decision:
            "Because the polymerase copies the template, the transcript necessarily reproduces the coding strand with uracil for thymine; working through the template a second time would only introduce a chance of error.",
          working: "mRNA 5′-AUGACCGAAUGUUGGAAGUAA-3′, 21 bases",
        },
        {
          label: "Read the frame in triplets",
          decision:
            "The frame is fixed by the first AUG and then held by counting in threes; reading by eye for familiar-looking groups is what loses the frame.",
          working:
            "AUG ACC GAA UGU UGG AAG UAA → Met-Thr-Glu-Cys-Trp-Lys, then stop",
        },
        {
          label: "Apply the deletion and re-divide the message",
          decision:
            "A deletion moves every boundary after it, so the sequence must be re-divided from the start codon; patching the affected codon alone would misrepresent the damage entirely.",
          working:
            "coding strand becomes ATGCCGAATGTTGGAAGTAA, so mRNA reads AUG CCG AAU GUU GGA AGU AA → Met-Pro-Asn-Val-Gly-Ser with two bases left over",
        },
        {
          label: "Classify what the mutation did",
          decision:
            "Name the class from what actually changed rather than from the size of the change in the DNA, since a one-base event here has an unbounded effect.",
          working:
            "5 of the 6 residues after methionine differ, and the UAA stop is no longer in frame — a frameshift",
        },
      ],
      answer:
        "The fragment encodes Met-Thr-Glu-Cys-Trp-Lys followed by a stop. Deleting the adenine at position 4 shifts the reading frame, giving Met-Pro-Asn-Val-Gly-Ser and destroying the stop codon, so translation continues into whatever sequence follows the fragment.",
      plausibility:
        "The original 21 bases divide exactly into seven triplets, six coding plus a stop, which is what a coding sequence should do. After the deletion 20 bases give six triplets and two bases left over, and that remainder is itself the signature of a lost frame. A substitution at the same position could have altered at most one residue.",
    },
    {
      id: "dna-check-lagging",
      type: "check",
      eyebrow: "Reason from a constraint",
      title: "Explain why one new strand is built in pieces",
      prompt:
        "DNA polymerase can add a nucleotide only to a free 3′ hydroxyl, so every new strand grows 5′ to 3′. At a replication fork opening in one direction, why must one of the two new strands be assembled as a series of short fragments?",
      options: [
        "The two templates are antiparallel, so only one runs in a direction that lets synthesis chase the fork; on the other, synthesis must run away from the fork and restart each time more template is exposed",
        "The polymerase reverses its chemistry on that strand and adds nucleotides to the 5′ end, which it can only sustain over short stretches",
        "The double helix can be unwound only a few base pairs at a time, so both new strands are necessarily built as short fragments",
        "The short fragments are made by a separate enzyme that copies RNA rather than DNA, and they are discarded once the leading strand is complete",
      ],
      correctIndex: 0,
      explanation:
        "One constraint does all the work. If synthesis is always 5′ to 3′, the template must always be read 3′ to 5′. The two templates at a fork point in opposite directions, so on one of them reading 3′ to 5′ means moving towards the fork and on the other it means moving away from it. Only the second case requires repeated restarts, and the fragments produced are joined afterwards by a ligase.",
      misconception:
        "Assuming the polymerase works the other way round on the lagging strand. Nothing in the process reverses: both new strands are made by the same chemistry in the same direction, and the fragmentation exists precisely because that direction cannot be reversed. The unwinding explanation fails because it would predict fragments on both strands, which is not what is seen.",
    },
    {
      id: "dna-check-mutation",
      type: "check",
      eyebrow: "Compare two changes",
      title: "Weigh a substitution against a deletion",
      prompt:
        "A gene's coding region is 900 bases long including its stop codon. Mutation P substitutes a different base at position 150. Mutation Q deletes the base at position 150. Neither position lies in a splice site. Which statement is best supported by reasoning about the reading frame?",
      options: [
        "P and Q are equally damaging, since each alters a single base at the same position",
        "Q is the milder change, because deleting one base removes only one amino acid from the finished protein",
        "P changes at most one amino acid and, falling on the third base of codon 50, may well be silent; Q shifts the frame, so all 250 codons downstream are read differently and the original stop is no longer in frame",
        "P is the more damaging change, because a substitution always creates a premature stop codon",
      ],
      correctIndex: 2,
      explanation:
        "Position 150 is 3 × 50, so it is the third base of the fiftieth codon — the position at which the code is most degenerate, and therefore the position at which a substitution is most often silent. A deletion at the same place removes a base, so every triplet boundary beyond it moves by one. The 750 bases downstream, some 250 codons, are all re-divided, and the stop codon is no longer read as a triplet. Since three of the sixty-four codons are stops, a shifted frame typically meets a premature stop within a few dozen codons anyway.",
      misconception:
        "Treating damage as proportional to the number of bases altered. One base is changed in both cases, but a substitution is a local event and a frameshift is not; the deletion also does not merely shorten the protein by one residue, because the residues it specifies afterwards are drawn from a different frame entirely.",
    },
    {
      id: "dna-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar context",
      title: "Apply frame reasoning to overlapping genes",
      prompt:
        "A small virus packs two genes into one stretch of sequence by reading the same bases in two frames: gene A is read in codons beginning at base 1, and gene B in codons beginning at base 2. A single base substitution occurs at base 18. Which outcome is possible?",
      options: [
        "The substitution must have the same effect in both genes, because it alters the same base in both",
        "Gene B cannot be affected at all, because bases already used by gene A are unavailable to a second reading frame",
        "The substitution shifts the reading frame of gene B but leaves gene A unaffected",
        "The substitution can be silent in gene A while certainly changing an amino acid in gene B, because base 18 occupies a different position within its codon in each frame",
      ],
      correctIndex: 3,
      explanation:
        "In gene A the codons run 1 to 3, 4 to 6, and so on, so base 18 is the third base of the sixth codon — the degenerate position, where a substitution is often silent. In gene B the codons run 2 to 4, 5 to 7, and so on, so the sixth codon spans bases 17 to 19 and base 18 is its second base. No amino acid in the standard code is specified by two codons differing only at the second position, so a change there always alters the amino acid. One event, two different consequences.",
      misconception:
        "Assuming that a substitution has a fixed severity attached to it. Severity is a property of where the base sits inside its codon, and a base sits in a different place in every frame that reads it. Note also that a substitution never shifts a frame in either gene; only an insertion or deletion does that.",
    },
    {
      id: "dna-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "A sequence that specifies its own copy, then specifies a protein",
      points: [
        "The base sequence carries the information and the sugar-phosphate backbone carries none, which is what lets one set of machinery handle any message.",
        "Adenine pairs with thymine through two hydrogen bonds and guanine with cytosine through three, so a guanine-cytosine-rich duplex takes more energy to separate.",
        "Strands are antiparallel and are written 5′ to 3′, so writing a complement means pairing base by base and then reversing.",
        "Replication is semi-conservative: a single hybrid band after one round and equal hybrid and light bands after two are predicted by that model and by no other.",
        "Polymerase extends only a free 3′ hydroxyl, which forces one new strand to be built continuously and the other in fragments that are later joined.",
        "A substitution alters one codon and may be silent, missense or nonsense, whereas an insertion or deletion of one or two bases shifts the frame and alters every codon after it.",
      ],
      transferRule:
        "When a code carries no punctuation, the first question about any change to it is whether the frame survives: local damage and frame damage differ in kind, not in degree.",
      nextLessonId: "lesson.biology.mendelian_genetics",
    },
  ],
};

const mendelianGenetics: Lesson = {
  id: "lesson.biology.mendelian_genetics",
  slug: "mendelian-genetics-and-pedigrees",
  number: "11.2",
  stageId: "stage.biology_genetics",
  discipline: "biology",
  title: "Mendelian genetics and pedigree reasoning",
  summary:
    "Separate genotype from phenotype, treat dominance as a relationship rather than a rank, apply the probability rules to crosses, and read a pedigree by asking which modes of inheritance it forbids.",
  estimatedMinutes: 35,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish gene, allele, and locus, and genotype from phenotype.",
    "Explain dominance as a property of a heterozygote's appearance, not of an allele in isolation.",
    "Predict monohybrid and dihybrid outcomes using Punnett squares and the multiplication rule.",
    "Apply the addition rule and explain why an expected ratio is not a guaranteed count.",
    "Interpret incomplete dominance, codominance, allelic series, penetrance, and expressivity.",
    "Exclude modes of inheritance from the pattern of affected individuals in a pedigree.",
  ],
  prerequisiteLessonIds: ["lesson.biology.dna_expression"],
  blocks: [
    {
      id: "mend-purpose",
      type: "concept",
      eyebrow: "Particles, not paint",
      title: "Inheritance shuffles discrete units rather than blending fluids",
      paragraphs: [
        "Before inheritance was understood, the natural assumption was that offspring were a blend of their parents, as two paints mix. That model makes a prediction it cannot survive: if every generation averaged its parents, the variation in a population would halve each generation and within a few dozen generations everyone would be alike. Populations are not like that, and the resolution is that what is transmitted is not a blended substance but a set of discrete units, passed on intact and reassembled in new combinations. A tall parent and a short parent may produce an intermediate child, but the units themselves are unchanged and can reappear undiluted in a grandchild.",
        "Three terms keep the units straight. A gene is a stretch of DNA specifying a product. Its locus is the fixed position it occupies on a particular chromosome. An allele is one of the alternative sequences that can sit at that locus. A diploid organism carries two alleles at every autosomal locus, one inherited from each parent, and transmits exactly one of them to each gamete. The words are often used loosely in conversation, but the reasoning in this lesson breaks down the moment they are confused, because each answers a different question: which instruction, where it sits, and which version.",
        "Genotype and phenotype are two levels of description and must be held apart. The genotype is the pair of alleles an individual carries; the phenotype is the characteristic that can be observed. The map between them runs in neither direction cleanly. Several genotypes can give the same phenotype, which is what dominance means. One genotype can give several phenotypes, because environment, chance during development, and other loci all intervene. Almost every persistent difficulty in this subject comes from treating a statement about one level as though it were a statement about the other.",
      ],
      callout:
        "gene = which instruction · locus = where it sits · allele = which version",
    },
    {
      id: "mend-visual-punnett",
      type: "visual",
      eyebrow: "Enumerate the meetings",
      title: "A Punnett square is a table of gamete meetings, not a picture of a cell",
      introduction:
        "The square lists one parent's gamete types along the top and the other's down the side, and fills each cell with the genotype produced when those two gametes meet. Nothing about a cell or a chromosome is being drawn.",
      visual: "punnett",
      caption:
        "Every cell is equally likely only because each parent makes its gamete types in equal proportions, so the answer is read by counting cells. Four cells give the 1:2:1 genotype ratio of a heterozygous cross and, where one allele is dominant, the 3:1 phenotype ratio that sits on top of it.",
    },
    {
      id: "mend-dominance",
      type: "concept",
      eyebrow: "Relationship, not rank",
      title: "Dominance describes what a heterozygote looks like and nothing more",
      paragraphs: [
        "State the definition carefully, because everything else depends on it. Allele A is dominant to allele a with respect to a stated phenotype when the heterozygote Aa cannot be distinguished from the homozygote AA for that phenotype. That is a three-part statement involving two alleles and one named characteristic, so dominance is a property of a relationship, never of an allele on its own. The same pair of alleles can be fully dominant and recessive for a characteristic observed at the level of the whole organism and codominant for the same characteristic observed at the level of the protein, which is not a contradiction but a consequence of the definition specifying which phenotype is meant.",
        "There is usually a mechanism behind recessiveness. Many recessive alleles produce no functional product at all, and for many enzymes a single working copy makes enough product for normal function, so a heterozygote is indistinguishable from a homozygote with two working copies. Recessiveness in those cases is a statement about a dose being sufficient rather than about one allele overpowering another. Nothing overpowers anything: the two alleles sit at the same locus on different chromosomes and are transcribed independently. Dominance also says nothing about how common an allele is, whether it is advantageous, or how likely it is to be transmitted. A dominant allele can be vanishingly rare and a recessive one nearly universal, because frequency is set by history and selection.",
        "The machinery for predicting a cross follows from one fact: a heterozygote produces its two gamete types in equal numbers. Cross Aa with Aa and the four equally likely combinations give 1 AA : 2 Aa : 1 aa, which appears as 3 dominant : 1 recessive if A is dominant. A test cross exploits the same arithmetic in reverse: cross an individual of unknown genotype with a homozygous recessive, and a heterozygote gives half recessive offspring while a homozygous dominant gives none. The square is a bookkeeping device for the multiplication rule, and once that rule is trusted the square can be dropped, which becomes necessary quickly: a cross tracking three loci would need sixty-four cells.",
      ],
      callout:
        "A is dominant to a when Aa and AA cannot be told apart for the phenotype in question",
    },
    {
      id: "mend-worked-dihybrid",
      type: "worked",
      eyebrow: "Worked example",
      title: "Predict a two-gene cross by multiplying two one-gene crosses",
      scenario:
        "A glasshouse herb kept as a teaching stock has two independently assorting loci. Leaf margin is smooth with allele M and notched with allele m, M being dominant. Seed coat is speckled with allele K and plain with allele k, K being dominant. A plant of genotype MmKk is crossed with one of genotype Mmkk, and 240 seedlings are raised. Predict the numbers in each phenotype class, and find the probability that a seedling shows at least one of the two recessive characteristics.",
      steps: [
        {
          label: "Split the cross into two single-gene crosses",
          decision:
            "Independent assortment means the outcome at one locus carries no information about the other, which is precisely the condition under which probabilities may be multiplied. This replaces a sixteen-cell square with two four-cell ones.",
          working: "margin: Mm × Mm; seed coat: Kk × kk",
        },
        {
          label: "Work out each single-gene expectation",
          decision:
            "Take each cross to its phenotype ratio rather than stopping at genotypes, since the question asks about appearance.",
          working:
            "Mm × Mm → 1 MM : 2 Mm : 1 mm, so 3/4 smooth and 1/4 notched. Kk × kk → 1 Kk : 1 kk, so 1/2 speckled and 1/2 plain",
        },
        {
          label: "Multiply for the joint classes",
          decision:
            "Each seedling has one margin outcome and one seed-coat outcome, drawn independently, so the probability of a named combination is the product of the two separate probabilities.",
          working:
            "smooth speckled 3/4 × 1/2 = 3/8; smooth plain 3/8; notched speckled 1/4 × 1/2 = 1/8; notched plain 1/8, a ratio of 3:3:1:1",
        },
        {
          label: "Scale the probabilities to the seedlings raised",
          decision:
            "Convert to counts only at the end, and use the total of the ratio parts as the divisor so that rounding cannot make the classes fail to sum correctly.",
          working:
            "3 + 3 + 1 + 1 = 8 parts, and 240 ÷ 8 = 30 per part, giving 90, 90, 30 and 30",
        },
        {
          label: "Apply the addition rule where the classes overlap",
          decision:
            "Notched and plain are not mutually exclusive, so adding their separate probabilities would count the notched-and-plain seedlings twice; the overlap must be subtracted once.",
          working:
            "P(notched or plain) = 1/4 + 1/2 − 1/8 = 5/8, that is 150 of the 240 seedlings",
        },
      ],
      answer:
        "The 240 seedlings are expected to divide as 90 smooth speckled, 90 smooth plain, 30 notched speckled and 30 notched plain, and 150 of them — five eighths — should show at least one recessive characteristic.",
      plausibility:
        "The four counts sum to 240 as they must. Each single-locus margin also has to hold independently: smooth seedlings total 90 + 90 = 180, which is three quarters of 240, and speckled seedlings total 90 + 30 = 120, which is one half. The addition-rule answer can be checked a second way, since 1 − 3/8 = 5/8 and 240 − 90 = 150.",
    },
    {
      id: "mend-check-probability",
      type: "check",
      eyebrow: "Expectation and outcome",
      title: "Test what a 3:1 ratio actually promises",
      prompt:
        "Two heterozygous plants of the same stock, Mm × Mm, are crossed and produce exactly four seedlings. What is the probability that exactly three are smooth-margined and one is notched?",
      options: [
        "1, because a 3:1 expectation applied to four offspring must give three smooth and one notched",
        "27/256, about 11 per cent",
        "27/64, about 42 per cent",
        "3/4, about 75 per cent",
      ],
      correctIndex: 2,
      explanation:
        "Each seedling independently has probability 3/4 of being smooth and 1/4 of being notched. One particular arrangement of three smooth and one notched has probability (3/4)³ × (1/4) = 27/256, and there are four arrangements according to which seedling is the notched one. The total is 4 × 27/256 = 27/64, about 42 per cent — the most likely single outcome, but far from certain.",
      misconception:
        "Reading a ratio as a promise about a small sample. A 3:1 expectation is a statement about long-run proportions, and with only four offspring even the expected split occurs less than half the time. Answering 27/256 counts one arrangement and forgets that there are four; answering 3/4 gives the probability for a single seedling rather than for the set.",
    },
    {
      id: "mend-variations",
      type: "concept",
      eyebrow: "Beyond two outcomes",
      title: "Complete dominance is one special case among several",
      paragraphs: [
        "Two departures from complete dominance are often confused. Under incomplete dominance the heterozygote is intermediate between the two homozygotes, so three genotypes give three phenotypes and the cross of two heterozygotes shows a 1:2:1 phenotype ratio rather than 3:1. Under codominance both allelic products are made and both are detectable in the heterozygote, side by side rather than averaged: not an intermediate but both at once. The distinction is worth holding because it predicts different things. An incompletely dominant heterozygote may be indistinguishable from a homozygote of a third, intermediate line; a codominant one carries a signature of both alleles that no homozygote can imitate.",
        "A locus can also carry more than two alleles. An individual still holds at most two, but a population may hold many, and their pairwise dominance relations can be arranged in a series. In laboratory colonies of a desert rodent, coat colour is governed by one locus with four alleles: D giving dark, B giving banded, S giving sandy, and w giving white, with the dominance series D above B above S above w. An animal of genotype Bw is banded, one of genotype SD is dark, and only ww is white. The series is a compact way of writing a set of pairwise statements, and it must be checked pairwise: nothing requires a series to be a strict ranking, and some pairs within one may be codominant with each other.",
        "Two further ideas keep genotype and phenotype apart. Penetrance is the proportion of individuals carrying a genotype who show the associated characteristic at all — a population-level, all-or-nothing number. Expressivity is how strongly the characteristic is shown among those who show it — a matter of degree within an individual. A condition can be highly penetrant and variably expressive, or the reverse. Both are estimates drawn from particular studied populations and vary between studies, so a quoted penetrance figure should be read as a measurement rather than a constant. The practical consequence is severe: an unaffected individual is not evidence that an allele is absent.",
      ],
      callout:
        "penetrance asks whether the characteristic appears at all · expressivity asks how strongly",
    },
    {
      id: "mend-worked-alleles",
      type: "worked",
      eyebrow: "Worked example",
      title: "Deduce parental genotypes from an allelic series",
      scenario:
        "In the desert rodent described above, coat colour is set by one locus with alleles D, B, S and w in the dominance series D above B above S above w, giving dark, banded, sandy and white coats. A dark female is mated repeatedly with a sandy male. Across 64 pups the colours recorded are 32 dark, 16 sandy and 16 white. Deduce the genotype of each parent.",
      steps: [
        {
          label: "Read each parent's top allele from its coat",
          decision:
            "A phenotype reveals only the highest-ranking allele present, so each parent's first allele is fixed by observation and the second is unknown at this stage.",
          working:
            "dark female carries D and one unknown; sandy male carries S and one unknown that cannot outrank S",
        },
        {
          label: "Use the white pups to fix the hidden alleles",
          decision:
            "White is the bottom of the series, so a white animal can only be ww, and each parent must have supplied one w. This is the one phenotype in the series that names a genotype outright.",
          working:
            "white pups are ww, so the female is Dw and the male is Sw",
        },
        {
          label: "Enumerate the cross",
          decision:
            "Each parent transmits one of its two alleles with equal probability, so four equally likely combinations arise; assign a phenotype to each using the series rather than by memory.",
          working:
            "Dw × Sw gives DS, Dw, Sw and ww in equal proportions",
        },
        {
          label: "Convert genotypes to expected numbers",
          decision:
            "Collapse the genotypes into phenotype classes first, because two different genotypes here give the same coat.",
          working:
            "DS and Dw are both dark, so 2 dark : 1 sandy : 1 white, and 64 pups give 32 : 16 : 16",
        },
        {
          label: "Check what is absent as well as what is present",
          decision:
            "An expected class that does not appear is evidence, so the absence of banded pups must be accounted for rather than passed over.",
          working:
            "neither Dw nor Sw carries B, so no pup can be banded, and none was recorded",
        },
      ],
      answer:
        "The female is Dw and the male is Sw. That cross predicts 2 dark : 1 sandy : 1 white, or 32 : 16 : 16 in a total of 64, exactly the recorded counts, and predicts no banded pups at all.",
      plausibility:
        "Half the pups are dark, which is what a single heterozygous dark parent should give, and the sandy and white classes are equal, which is what the male's two alleles should give once the female has contributed D or w with equal frequency. Reversing the reasoning is a further check: the white pups could not exist unless both parents carried w, so no other pair of genotypes fits the data.",
    },
    {
      id: "mend-linkage-to-sex",
      type: "concept",
      eyebrow: "Unequal copies",
      title: "A single X in males makes X-linked inheritance asymmetric",
      paragraphs: [
        "Autosomes come in matched pairs, but the sex chromosomes do not in the heterogametic sex. In mammals a female carries two X chromosomes and a male an X and a Y, and the Y carries very few genes. For most loci on the X, a male therefore has one copy rather than two. He is hemizygous, which is neither homozygous nor heterozygous, and the distinction matters: a single recessive allele on his one X has nothing to mask it and is expressed, while the same allele in a heterozygous female is not. This is the whole of sex linkage, and every pattern below follows from it.",
        "The consequences show up as asymmetries in a family record. An X-linked recessive characteristic appears far more often in males than in females. A male passes his X to every daughter and his Y to every son, so all his daughters inherit his X-linked alleles and none of his sons do. That produces the criss-cross pattern in which an affected man's characteristic reappears in his grandsons through his unaffected daughters. An affected female must have received the allele from both parents, so her father must be affected and her mother at least a carrier. For an X-linked dominant characteristic the same transmission rule gives the mirror image: an affected man transmits to all his daughters and to none of his sons.",
        "The method for using a pedigree follows from all this, and it is not what most people first attempt. A pedigree rarely proves a mode of inheritance; what it does well is exclude one. Take each candidate mode in turn and look for a single individual whose existence that mode forbids. Two exclusions do most of the work. Affected offspring of two unaffected parents rule out dominance, provided the characteristic is fully penetrant. An unaffected son of an affected mother rules out X-linked recessive inheritance outright, because she would have to be homozygous and every son takes his only X from her. Small pedigrees exclude little and are usually consistent with several modes at once, which is a finding rather than a failure.",
      ],
      callout: "a pedigree excludes modes of inheritance; it seldom proves one",
    },
    {
      id: "mend-visual-pedigree",
      type: "visual",
      eyebrow: "Read for impossibility",
      title: "The informative individual is the one a mode of inheritance forbids",
      introduction:
        "A pedigree records who is related to whom and who shows the characteristic, drawing males as squares and females as circles, filling the symbol when the individual is affected, and placing each generation on its own row.",
      visual: "pedigree",
      caption:
        "Scan for individuals that a candidate mode cannot allow rather than for a pattern that looks right. One unaffected son of an affected mother excludes X-linked recessive inheritance completely, whereas a suggestive run of affected males across three generations excludes nothing at all.",
    },
    {
      id: "mend-check-testcross",
      type: "check",
      eyebrow: "Your turn",
      title: "Read a genotype off a test cross",
      prompt:
        "A smooth-margined plant of unknown genotype is crossed with a notched-margin plant, which must be mm. Among 60 offspring, 31 are smooth and 29 are notched. What does this establish about the unknown parent?",
      options: [
        "It is MM, since smooth offspring outnumber notched ones",
        "It is Mm, because a homozygote MM could produce no notched offspring at all, while Mm predicts equal numbers and 31 to 29 is consistent with that",
        "It is mm, since notched offspring appeared",
        "Nothing, because a test cross cannot distinguish MM from Mm",
      ],
      correctIndex: 1,
      explanation:
        "The notched parent can contribute only m, so every offspring's phenotype reports which allele the unknown parent contributed. An MM parent would give only M, so every offspring would be smooth and a single notched offspring would refute it. An Mm parent gives M and m equally, predicting a 1:1 split, and 31 to 29 out of 60 is an ordinary sampling deviation from 30 to 30.",
      misconception:
        "Treating the small excess of smooth offspring as meaningful. The information here lies in the existence of the notched class, not in the exact numbers, and one notched offspring would have settled the question as firmly as twenty-nine.",
    },
    {
      id: "mend-check-penetrance",
      type: "check",
      eyebrow: "Two probabilities",
      title: "Combine transmission with penetrance",
      prompt:
        "A characteristic is caused by a dominant allele R with 70 per cent penetrance, so 70 per cent of people carrying R display it. A man of genotype Rr has children with a woman of genotype rr. What proportion of their children is expected to display the characteristic?",
      options: [
        "50 per cent, since half the children inherit R",
        "30 per cent, since 30 per cent of carriers fail to display it",
        "70 per cent, since penetrance sets the proportion affected",
        "35 per cent, since half inherit R and 70 per cent of those display it",
      ],
      correctIndex: 3,
      explanation:
        "Two independent steps must both succeed. Inheriting R has probability 1/2, and displaying the characteristic given R has probability 0.70, so the joint probability is 0.5 × 0.70 = 0.35. Of 100 such children, about 50 would carry R, of whom about 35 would display the characteristic and about 15 would not.",
      misconception:
        "Using one of the two probabilities and ignoring the other. Reporting 50 per cent treats the genotype as though it always showed; reporting 70 per cent applies penetrance to all the children rather than to the carriers among them. Penetrance operates only on individuals who already carry the allele.",
    },
    {
      id: "mend-check-pedigree",
      type: "check",
      eyebrow: "Exclude a mode",
      title: "Find the individual one mode of inheritance forbids",
      prompt:
        "A woman who displays a characteristic has children with a man who does not. They have three children: a daughter who displays it, a son who displays it, and a son who does not. Assuming full penetrance, which mode of inheritance does the unaffected son alone definitively exclude?",
      options: [
        "Autosomal dominant",
        "Autosomal recessive",
        "X-linked recessive",
        "X-linked dominant",
      ],
      correctIndex: 2,
      explanation:
        "A woman displaying an X-linked recessive characteristic must carry the allele on both her X chromosomes. Every son receives his single X from his mother and his Y from his father, so every son would receive the allele and, having no second X to mask it, would display the characteristic. An unaffected son is impossible. The other three modes all tolerate him: under autosomal dominant the mother may be heterozygous and pass the normal allele, under autosomal recessive the unaffected father may be a carrier and pass his normal allele, and under X-linked dominant the mother may again be heterozygous.",
      misconception:
        "Scanning a pedigree for the mode that fits best rather than for individuals that a mode forbids. Here two of the three children display the characteristic, which looks dominant and looks X-linked, but only one individual carries a decisive exclusion and it is the child who displays nothing.",
    },
    {
      id: "mend-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar context",
      title: "Apply sex-linkage reasoning where the sexes are reversed",
      prompt:
        "In birds the female carries a Z and a W chromosome and the male carries two Z chromosomes, and the W carries almost no genes. A breeder mates a cock with unusually pale plumage to a normally coloured hen from a line in which the pale plumage has never appeared. Every daughter is pale and every son is normally coloured. Which mode of inheritance does this pattern support?",
      options: [
        "Autosomal recessive, since the pale plumage reappeared without skipping a generation",
        "W-linked, since only the female offspring are pale",
        "Autosomal dominant, since the affected parent passed the characteristic to half his offspring",
        "Z-linked recessive, because each daughter's only Z comes from her father while each son also receives a Z from his mother",
      ],
      correctIndex: 3,
      explanation:
        "Work out where each chromosome came from. A daughter is ZW, taking her Z from her father and her W from her mother, so her single Z carries whatever her father carried. A son is ZZ, taking one Z from each parent, so his father's allele is accompanied by a normal allele from the hen and is masked. A pale cock must carry the recessive allele on both his Z chromosomes, which gives pale daughters and carrier, normally coloured sons — exactly the observation. The perfect split by sex is what rules out both autosomal options, since either would spread affected offspring across both sexes. W-linked inheritance is impossible because a father has no W to transmit and the mother is not pale.",
      misconception:
        "Carrying the mammalian pattern across unchanged and expecting the affected males. The reasoning transfers but the labels do not: in birds the female is the one with a single copy of the sex-linked genes, so the criss-cross runs from father to daughter rather than from mother to son.",
    },
    {
      id: "mend-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Two levels of description, joined by probability",
      points: [
        "A gene occupies a locus, an allele is a version of it, and a diploid individual carries two and transmits one.",
        "Genotype and phenotype are separate levels of description, and the map between them is one-to-one in neither direction.",
        "Dominance is a statement about how a heterozygote looks for a named characteristic, not a property of an allele or a measure of how common it is.",
        "Independent loci allow probabilities to be multiplied, and outcomes that overlap require the addition rule with the overlap subtracted once.",
        "A 3:1 expectation describes long-run proportions; among four offspring the exact three-to-one split has probability 27/64.",
        "Penetrance, expressivity, and the single X of a male are the usual reasons a real family does not show the textbook pattern.",
      ],
      transferRule:
        "To identify a mode of inheritance, do not ask which candidate fits best; ask, for each candidate in turn, whether any single individual in the record is impossible under it.",
      nextLessonId: "lesson.biology.meiosis_linkage",
    },
  ],
};

const meiosisLinkage: Lesson = {
  id: "lesson.biology.meiosis_linkage",
  slug: "meiosis-linkage-and-recombination",
  number: "11.3",
  stageId: "stage.biology_genetics",
  discipline: "biology",
  title: "Meiosis, linkage, and recombination",
  summary:
    "Treat meiosis as a partition that must deliver one complete chromosome set while deliberately generating variation, then use the failure of independent assortment to measure distances along a chromosome.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain why a sexual life cycle requires exactly one reduction division.",
    "Distinguish chromosome, chromatid, homologue, and bivalent, and count each correctly at a named stage.",
    "Contrast mitosis and meiosis by the genetic outcome of their products rather than by their steps.",
    "Quantify the variation contributed by independent assortment and by crossing over separately.",
    "Convert recombination frequencies into map distances and explain the 50 per cent ceiling.",
    "Deduce gene order, map distances, and interference from a three-point test cross.",
  ],
  prerequisiteLessonIds: ["lesson.biology.mendelian_genetics"],
  blocks: [
    {
      id: "meio-purpose",
      type: "concept",
      eyebrow: "Halve, then restore",
      title: "Fusing two cells requires a division that halves the count first",
      paragraphs: [
        "Fertilisation joins two cells and adds their chromosomes together. If nothing compensated, a lineage would double its chromosome number every generation — 46, then 92, then 184 — which does not happen. A sexual life cycle therefore requires exactly one halving somewhere in it, and meiosis is where it occurs. Stating the requirement this way makes the real constraint visible: the halving cannot be approximate. A gamete needs one complete set, meaning one member of every homologous pair, not merely half the total number of chromosomes. A cell that received two copies of one chromosome and none of another would have the right count and the wrong contents, and such errors are a major cause of failed development.",
        "The vocabulary of ploidy describes sets rather than quantities of DNA. A diploid cell carries two complete sets, one from each parent; a haploid cell carries one. Homologous chromosomes are the two members of a pair: they carry the same loci in the same order, but not necessarily the same alleles, so they are matching without being identical. Ploidy is unaffected by replication, since a replicated haploid cell has doubled its DNA but still holds one set of loci. Keeping ploidy and DNA quantity separate removes most of the confusion that meiosis generates.",
        "Meiosis does a second thing that has nothing to do with the arithmetic: it generates variation deliberately. Two independent mechanisms contribute. Homologous pairs orient relative to one another at random, so which parental chromosome goes to which product is decided independently for every pair. And homologues physically exchange segments before they separate, so a single chromosome handed to a gamete can be part maternal and part paternal. A cell could halve its chromosome number accurately with neither mechanism. That it does both, and does them in a controlled way at a specific stage, indicates that variation is a function of the process rather than an accident of it.",
      ],
      callout:
        "meiosis must deliver one complete set of loci, not merely half the chromosomes",
    },
    {
      id: "meio-visual-division",
      type: "visual",
      eyebrow: "Follow the centromeres",
      title: "Chromosome number and chromatid number change at different moments",
      introduction:
        "The two counts that matter — chromosomes and chromatids — do not change together, and a purely verbal account of meiosis is easy to lose track of for exactly that reason. Watching the centromeres through the two divisions keeps both counts honest.",
      visual: "meiosis",
      caption:
        "Centromere number stays at 2n from replication until the end of meiosis I, then halves to n in each product while every chromosome still consists of two chromatids. Only at anaphase II do sister chromatids separate, at which point each becomes a chromosome in its own right and the count of chromosomes per cell stays at n.",
    },
    {
      id: "meio-terms",
      type: "concept",
      eyebrow: "Four words, precisely",
      title: "A replicated chromosome is one chromosome made of two chromatids",
      paragraphs: [
        "Four terms have to be kept apart, and the confusion between the first two is the most persistent difficulty in this material. A chromosome is counted by its centromere: one centromere, one chromosome. After replication a chromosome consists of two identical DNA molecules held at that single centromere, and it is still one chromosome, because the count has not changed. Each of those two molecules is a chromatid, and while they remain attached they are called sister chromatids. A homologue is the matching chromosome inherited from the other parent, carrying the same loci in the same order but not necessarily the same alleles. A bivalent is the structure formed when two homologues pair in meiosis I: two chromosomes, four chromatids, one unit. A human cell entering meiosis I therefore contains 46 chromosomes, 92 chromatids, and 23 bivalents.",
        "The two divisions separate different things, and that is the entire mechanistic difference between meiosis and mitosis. Meiosis I is reductional: it separates homologues, so each product receives one member of every pair and the chromosome number halves, even though each chromosome still consists of two chromatids. Crossing over occurs at this stage, between non-sister chromatids within a bivalent, at contact points called chiasmata. Meiosis II is equational: it separates sister chromatids, exactly as mitosis does, so the chromosome number does not change again. Two divisions from one replication is what converts a diploid cell into four haploid products.",
        "Compared on outcome rather than on steps, the two processes differ in three ways at once. Mitosis takes one diploid cell to two diploid cells that are genetically identical, barring error. Meiosis takes one diploid cell to four haploid cells, no two of which need be genetically identical. The reason the four differ is worth stating explicitly: once a crossover has occurred, the two chromatids of a chromosome are no longer identical, so the two products of a single meiosis II division can carry different alleles. Sister chromatids are identical only until the moment they are not.",
      ],
      callout:
        "count chromosomes by centromeres · a bivalent is two chromosomes and four chromatids",
    },
    {
      id: "meio-worked-variation",
      type: "worked",
      eyebrow: "Worked example",
      title: "Count the variation each mechanism contributes",
      scenario:
        "An organism has a diploid chromosome number of 12. Find how many genetically distinct gametes independent assortment alone can produce, how many distinct chromosome combinations a zygote can then have, and how much crossing over multiplies the gamete figure if exactly one exchange occurs in every bivalent. Then compare with a species having 23 pairs.",
      steps: [
        {
          label: "Count the bivalents",
          decision:
            "Assortment operates on pairs, not on individual chromosomes, so the diploid number must be halved before anything is raised to a power.",
          working: "2n = 12, so there are 6 homologous pairs and 6 bivalents",
        },
        {
          label: "Count the orientations",
          decision:
            "Each bivalent can face either pole and does so independently of every other bivalent, with the two options equally likely, which is a choice of 2 repeated 6 times.",
          working: "2⁶ = 64 distinct chromosome combinations among the gametes",
        },
        {
          label: "Combine two gametes into a zygote",
          decision:
            "The two gametes are produced by separate meioses in separate individuals, so their combinations multiply rather than add.",
          working: "64 × 64 = 4096 distinct chromosome combinations in a zygote",
        },
        {
          label: "Add one crossover per bivalent",
          decision:
            "A single exchange makes all four chromatids of a bivalent different from one another, so each bivalent now offers four outcomes instead of two. This counts only whether an exchange happened, which is an idealisation, since crossovers fall at variable positions and the true number of products is far larger.",
          working:
            "4⁶ = 4096 gamete types, which is 64 times the 64 available from assortment alone",
        },
        {
          label: "Scale to a larger genome",
          decision:
            "The same exponent applies, so only the number of pairs changes; this shows how quickly the count grows without any new principle.",
          working: "23 pairs give 2²³ = 8 388 608 gamete types from assortment alone",
        },
      ],
      answer:
        "Independent assortment alone gives 64 gamete types and 4096 zygote combinations. Adding a single crossover per bivalent raises the gamete count to 4096, a 64-fold increase, and a genome of 23 pairs yields over 8.3 million gamete types before crossing over is considered at all.",
      plausibility:
        "The two mechanisms should multiply, not add, and the arithmetic confirms it: 4⁶ = (2²)⁶ = 2¹² = 4096, which is exactly 2⁶ times the assortment figure of 2⁶. A result that came out as a sum rather than a product would indicate the two mechanisms had been treated as alternatives instead of as independent contributions.",
    },
    {
      id: "meio-check-terms",
      type: "check",
      eyebrow: "Count carefully",
      title: "Separate chromosome count from chromatid count",
      prompt:
        "A cell of an organism with a diploid number of 12 completes DNA replication and proceeds into meiosis I. At metaphase I, what does the cell contain?",
      options: [
        "12 chromosomes and 12 chromatids",
        "6 chromosomes and 12 chromatids, arranged as 6 bivalents",
        "24 chromosomes and 24 chromatids, arranged as 12 bivalents",
        "12 chromosomes and 24 chromatids, arranged as 6 bivalents",
      ],
      correctIndex: 3,
      explanation:
        "Replication doubles the DNA but not the chromosome count, because each chromosome still has one centromere holding its two new chromatids together. The cell therefore holds 12 chromosomes and 24 chromatids. Homologues have paired, and 12 chromosomes in 6 pairs give 6 bivalents, each consisting of 2 chromosomes and 4 chromatids.",
      misconception:
        "Counting each chromatid as a chromosome, which doubles the chromosome number to 24 and the bivalent count to 12. Nothing about replication creates a new chromosome; a chromosome becomes two chromosomes only when its centromere divides, which happens at anaphase II.",
    },
    {
      id: "meio-check-mitosis",
      type: "check",
      eyebrow: "Contrast the outcomes",
      title: "Compare the two divisions by what they produce",
      prompt:
        "One diploid cell with 2n = 8 undergoes mitosis. An identical cell instead undergoes meiosis. How do the sets of products compare?",
      options: [
        "Mitosis gives two genetically identical cells of 8 chromosomes each; meiosis gives four cells of 4 chromosomes each, and no two of them need be genetically identical",
        "Mitosis gives two cells of 8 chromosomes each and meiosis gives two cells of 4 chromosomes each",
        "Both give four cells, but the products of mitosis are identical and those of meiosis are not",
        "Mitosis gives two cells of 4 chromosomes each and meiosis gives four cells of 8 chromosomes each",
      ],
      correctIndex: 0,
      explanation:
        "One replication followed by one division gives two products at the parental chromosome number, and because sister chromatids are identical those products are genetically identical. One replication followed by two divisions gives four products at half the parental number. Independent assortment makes the products differ in which parental chromosomes they carry, and crossing over makes even the two products of a single meiosis II division differ.",
      misconception:
        "Remembering that meiosis halves the chromosome number but forgetting that it also doubles the number of products, or the reverse. The two facts are linked: the second division is what makes four products, and the first is what makes them haploid.",
    },
    {
      id: "meio-linkage",
      type: "concept",
      eyebrow: "When assortment fails",
      title: "Genes on one chromosome travel together unless a crossover parts them",
      paragraphs: [
        "Independent assortment is a statement about bivalents, so it applies to loci on different chromosomes. Two loci on the same chromosome are physically attached and are transmitted together unless a crossover falls between them. They are said to be linked, and the signature is a test cross that departs from equal numbers in the four classes: the combinations present in the heterozygous parent, called parental, appear in excess, and the two rearranged classes, called recombinant, are correspondingly scarce. Recombination frequency is defined as the number of recombinant offspring divided by the total, and unlinked loci give a value of 0.5 because all four classes are then equally likely.",
        "Recombination frequency serves as a proxy for distance. Crossovers occur along a chromosome at positions that are close to random, so the chance that at least one falls between two loci rises as the separation between them rises. One per cent recombination is defined as one centimorgan, which turns breeding data into a map without any measurement of the chromosome itself. Two caveats belong in the same sentence as the definition. The map is a proxy rather than a physical scale, because the crossover rate is not uniform along a chromosome and varies with sex and with temperature in some species. And it saturates, so it is reliable only over short intervals.",
        "The ceiling is the point most often mishandled. Each crossover involves only two of the four chromatids of a bivalent, so a meiosis containing one exchange between two loci produces two parental and two recombinant chromatids — 50 per cent from that meiosis, not 100. Where several crossovers fall between two loci, an odd number leaves the chromatid recombinant and an even number restores it, and averaged over the possibilities the recombinant fraction approaches one half from below and never exceeds it. A measured frequency of 0.5 therefore carries an ambiguity that no larger sample can remove: it means the loci are unlinked as far as the data can tell, which covers both loci on different chromosomes and loci far apart on the same one. The escape is to build a map additively from many short intervals, each measured against a locus in between.",
      ],
      callout:
        "1 per cent recombination = 1 centimorgan · 50 per cent means undetectable linkage, not 50 centimorgans",
    },
    {
      id: "meio-visual-map",
      type: "visual",
      eyebrow: "Distance from data",
      title: "A map built from breeding results, not from a measurement of the chromosome",
      introduction:
        "A genetic map places loci on a line at separations set by how often meiosis puts them into new combinations. Every number on it comes from counting offspring, and nothing on the chromosome itself has been measured.",
      visual: "linkage_map",
      caption:
        "Short intervals add: a locus 12 units from one marker and 7 from another on the far side sets the outer pair 19 apart. Measured directly, that outer pair returns less than 19, because a double crossover between them restores the parental arrangement and is never counted as recombinant. Maps are therefore assembled from short intervals rather than long ones.",
    },
    {
      id: "meio-worked-threepoint",
      type: "worked",
      eyebrow: "Worked example",
      title: "Extract gene order and two distances from one cross",
      scenario:
        "A laboratory midge stock carries three recessive markers on one chromosome: bald in place of bristled thorax, clear in place of amber eye, and broken in place of complete wing vein. A female heterozygous at all three loci, having received all three dominant alleles from one parent and all three recessives from the other, is crossed to a male that is bald, clear and broken. Among 1000 offspring: 408 bristled amber complete; 408 bald clear broken; 57 bristled clear broken; 57 bald amber complete; 32 bristled amber broken; 32 bald clear complete; 3 bristled clear complete; 3 bald amber broken. Find the gene order, both map distances, and the interference.",
      steps: [
        {
          label: "Sort the classes by frequency alone",
          decision:
            "Frequency identifies the classes before any order is assumed: the parental combinations require no crossover and must be commonest, while double crossovers require two independent events and must be rarest.",
          working:
            "parental 408 + 408 = 816; double crossover 3 + 3 = 6; the remaining classes are single crossovers",
        },
        {
          label: "Find the middle gene",
          decision:
            "A double crossover flanking the middle locus moves only that locus relative to the outer two, so comparing a double-crossover class with the parental class it resembles names the middle gene directly.",
          working:
            "parental bristled amber complete against double-crossover bristled clear complete: only the eye marker has swapped, so the order is bristle – eye – vein",
        },
        {
          label: "Compute the recombination frequency for each interval",
          decision:
            "Double crossovers are recombinant for both intervals separately, so they must be added into each count; omitting them is the standard error here.",
          working:
            "bristle–eye: (57 + 57 + 3 + 3) ÷ 1000 = 0.120, that is 12.0 cM. eye–vein: (32 + 32 + 3 + 3) ÷ 1000 = 0.070, that is 7.0 cM",
        },
        {
          label: "Measure the outer interval directly and compare",
          decision:
            "Measuring the outer pair as a two-point cross tests the additivity of the map and exposes exactly what a long interval loses.",
          working:
            "bristle–vein recombinants are (57 + 57 + 32 + 32) ÷ 1000 = 0.178, that is 17.8 cM, against 12.0 + 7.0 = 19.0 cM, a shortfall of 1.2 = 2 × 0.6",
        },
        {
          label: "Quantify interference",
          decision:
            "If the two crossovers were independent their frequencies would multiply, so the ratio of observed to expected doubles measures how far that independence fails.",
          working:
            "expected double crossovers 0.120 × 0.070 = 0.0084, that is 8.4 per 1000; coefficient of coincidence = 6 ÷ 8.4 = 0.71, so interference = 1 − 0.71 = 0.29",
        },
      ],
      answer:
        "The order is bristle – eye – vein, with 12.0 centimorgans between bristle and eye and 7.0 between eye and vein, giving a map 19.0 centimorgans across. Interference is 0.29, so about 29 per cent of the double crossovers expected under independence did not occur.",
      plausibility:
        "The eight classes must fall into four reciprocal pairs of equal size, and they do: 408 and 408, 57 and 57, 32 and 32, 3 and 3. The counts sum to 1000, and the rank order runs from parental down to double crossover as any linked arrangement requires. The 1.2 centimorgan shortfall in the direct outer measurement is exactly twice the double-crossover frequency of 0.6 per cent, which is the expected relationship and confirms the interval assignments.",
    },
    {
      id: "meio-check-rf",
      type: "check",
      eyebrow: "Read a frequency",
      title: "Convert a recombinant count into a conclusion",
      prompt:
        "In a test cross yielding 800 progeny, 96 individuals carry recombinant combinations of two markers. What is the map distance, and what would you conclude had the recombinant count instead been 400?",
      options: [
        "12 cM; and 400 recombinants would be 50 per cent recombination, the value unlinked loci give, so linkage could not be demonstrated, although loci far apart on one chromosome give the same result",
        "12 cM; and 400 recombinants would place the loci 50 cM apart while still showing detectable linkage",
        "88 cM, since 704 of the 800 progeny carry parental combinations; 400 recombinants would give 50 cM",
        "12 cM; and 400 recombinants would prove that the two loci lie on different chromosomes",
      ],
      correctIndex: 0,
      explanation:
        "The recombination frequency is 96 ÷ 800 = 0.12, and one per cent recombination is one centimorgan, so the distance is 12 cM. A count of 400 out of 800 is 0.50, which is what independent assortment produces, so no linkage can be detected. The result cannot distinguish between loci on different chromosomes and loci separated far enough on the same chromosome that crossovers between them are effectively certain.",
      misconception:
        "Treating 50 per cent recombination as a distance of 50 centimorgans. It is a ceiling, not a reading: recombination frequency stops rising there while physical distance carries on, so the value marks the limit of what the method can measure rather than a location on the map.",
    },
    {
      id: "meio-check-linkage",
      type: "check",
      eyebrow: "Detect the departure",
      title: "Judge whether two loci are linked",
      prompt:
        "An individual heterozygous at two loci, carrying A with B on one chromosome and a with b on the other, is test-crossed. Independent assortment predicts the four phenotype classes in equal numbers. Among 400 progeny the observed counts are 172, 168, 31 and 29. What do these numbers show?",
      options: [
        "The two loci are linked about 15 cM apart, since only 60 of the 400 progeny carry recombinant combinations",
        "The two loci assort independently, and the departure from equal classes is sampling noise",
        "The two loci are linked about 85 cM apart, since 340 of the 400 progeny carry parental combinations",
        "One locus shows incomplete penetrance, which suppresses two of the four classes",
      ],
      correctIndex: 0,
      explanation:
        "Independent assortment would put 100 progeny in each class. The two large classes, 172 and 168, are the parental combinations and the two small ones, 31 and 29, are the recombinants. Recombination frequency is (31 + 29) ÷ 400 = 0.15, so the loci lie about 15 centimorgans apart. The departure is far too large and too structured to be noise: the classes fall into two matched pairs, which is the signature of linkage rather than of chance.",
      misconception:
        "Using the parental count instead of the recombinant count, which gives 85 rather than 15 and would place two clearly linked loci beyond the 50 per cent ceiling. Map distance is measured by how often the parental arrangement is broken, not by how often it survives.",
    },
    {
      id: "meio-tetrad",
      type: "concept",
      eyebrow: "Spores in order",
      title: "When the products stay in line, the order records when alleles separated",
      paragraphs: [
        "Some fungi keep the products of a single meiosis in a narrow tube, in the order they were made. The four meiotic products divide once more by mitosis, giving eight spores in four adjacent pairs, and the tube is too narrow for them to slip past one another. The spore order is therefore a physical record of which division separated what. Nothing like this is available in an animal or a plant, where the products of one meiosis are scattered, and it makes a question answerable that is otherwise out of reach: how far a locus lies from its own centromere.",
        "The reasoning has two cases. If no crossover falls between the locus and its centromere, the two alleles remain on the two different homologues throughout, and homologues are separated at meiosis I. The two alleles are therefore segregated at the first division, and the ascus shows four spores of one allele followed by four of the other — first-division segregation. If a crossover does fall between the locus and the centromere, each homologue now carries one chromatid of each allele, so meiosis I cannot separate the alleles and the job falls to meiosis II. The result is second-division segregation, in which the spores appear in alternating blocks of two rather than in two blocks of four.",
        "The frequency of second-division asci rises with the distance from locus to centromere, but it cannot be used as the distance directly. A single crossover involves only two of the four chromatids, so in every second-division ascus only half the products are recombinant with respect to the centromere. The distance in map units is therefore half the percentage of asci showing second-division segregation. This is the same factor of one half that produces the 50 per cent ceiling on recombination frequency, arriving in a different guise, and recognising it as the same fact is the point of the technique.",
      ],
      callout:
        "map units from the centromere = ½ × the percentage of second-division asci",
    },
    {
      id: "meio-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar context",
      title: "Map a locus against its centromere from spore order",
      prompt:
        "A fungus produces eight spores in a linear tube, in the order they were made. A cross between strains carrying alleles G and g is examined. Among 500 asci, 340 show all four G spores followed by all four g spores, or the reverse, and 160 show G and g spores alternating in blocks of two. How far is the locus from its centromere?",
      options: [
        "32 map units, the percentage of asci showing second-division segregation",
        "16 map units, half the second-division frequency, because only two of the four chromatids in a bivalent take part in a single crossover",
        "68 map units, taken from the asci showing first-division segregation",
        "Nothing can be concluded, because spore order records only which division separated the alleles and carries no information about distance",
      ],
      correctIndex: 1,
      explanation:
        "Alternating blocks of two mean the alleles were not separated until meiosis II, which requires a crossover between the locus and its centromere. The second-division frequency is 160 ÷ 500 = 0.32, or 32 per cent. Only two of the four chromatids take part in any single crossover, so half the spores in each such ascus are non-recombinant with respect to the centromere, and the map distance is 32 ÷ 2 = 16 map units.",
      misconception:
        "Reporting the second-division frequency itself as the distance, which doubles the answer. The same factor of one half is what stops recombination frequency from exceeding 50 per cent, and forgetting it here is the same error in a new setting. Using the first-division asci instead reverses the logic entirely, since those are the meioses in which no crossover occurred.",
    },
    {
      id: "meio-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "One accurate partition that deliberately reshuffles what it partitions",
      points: [
        "A sexual cycle requires exactly one halving, and meiosis must deliver one complete set of loci rather than any half of the chromosomes.",
        "Chromosomes are counted by centromeres, so a replicated chromosome is one chromosome of two chromatids and a bivalent is two chromosomes of four chromatids.",
        "Meiosis I separates homologues and is reductional; meiosis II separates sister chromatids and is equational.",
        "Independent assortment gives 2ⁿ gamete types for n pairs, and crossing over multiplies that further by making all four chromatids of a bivalent distinct.",
        "Recombination frequency measures map distance in centimorgans up to a ceiling of 50 per cent, at which point linkage cannot be detected at all.",
        "In a three-point cross the rarest class is the double crossover, and the marker that has swapped relative to the parental class is the middle one.",
      ],
      transferRule:
        "When two things are inherited together more often than chance allows, ask what physical structure holds them together and how often that structure is broken; the rate of breakage is the measure of distance.",
      nextLessonId: "lesson.biology.population_genetics",
    },
  ],
};

const populationGenetics: Lesson = {
  id: "lesson.biology.population_genetics",
  slug: "population-genetics-and-hardy-weinberg",
  number: "11.4",
  stageId: "stage.biology_genetics",
  discipline: "biology",
  title: "Population genetics and the Hardy-Weinberg model",
  summary:
    "Move the unit of analysis from the individual to the gene pool, derive the equilibrium that follows from random union of gametes, and use the departure from that null model as the measurement.",
  estimatedMinutes: 37,
  reviewStatus: "unreviewed",
  objectives: [
    "Compute allele frequencies and genotype frequencies from genotype counts.",
    "Derive p² + 2pq + q² = 1 from the random union of gametes rather than quoting it.",
    "Estimate carrier frequency from the incidence of a recessive condition.",
    "Test whether an observed genotype distribution is consistent with equilibrium.",
    "State the five assumptions and predict the signature left by each one failing.",
    "Explain why selection against recessive homozygotes removes a rare allele so slowly.",
  ],
  prerequisiteLessonIds: [
    "lesson.biology.mendelian_genetics",
    "lesson.toolkit.proportional_reasoning",
  ],
  blocks: [
    {
      id: "popg-purpose",
      type: "concept",
      eyebrow: "Change the unit",
      title: "Asking about the gene pool makes population questions answerable",
      paragraphs: [
        "A pedigree follows named individuals and their particular children, and that style of reasoning does not scale. No one can draw a pedigree for a population of a million, and the questions that matter at that scale are different anyway: not which child inherited what, but how common an allele is and whether it is becoming more so. The move that makes those questions tractable is a change in the unit of analysis. Stop tracking individuals and treat the population as a pool of allele copies, described by the proportion of the pool each allele occupies. Individuals become transient samples drawn from the pool and returned to it; the pool is what persists across generations.",
        "The change of unit also gives evolution a definition precise enough to measure. Evolution, at this level of description, is a change in allele frequencies in a population over time. That is a statement about a number that can be counted twice, decades apart, and compared. It says nothing about progress, complexity, or improvement, and deliberately so: those are separate questions requiring separate evidence. What it provides is a quantity to which the processes named later — selection, drift, migration, mutation — can each be attached as causes.",
        "Two quantities must be kept apart from the outset because they are proportions of different things. An allele frequency is the proportion of all the gene copies at a locus that are a given allele, so its denominator counts copies. A genotype frequency is the proportion of individuals carrying a given pair, so its denominator counts individuals. In a diploid population the copy count is twice the individual count, and mixing the two denominators is the single most common arithmetic error in this material. Allele frequencies can always be computed from genotype frequencies by counting; the reverse requires an assumption about how copies pair up, and supplying that assumption is exactly what the Hardy-Weinberg model does.",
      ],
      callout:
        "allele frequencies are proportions of gene copies · genotype frequencies are proportions of individuals",
    },
    {
      id: "popg-visual-frequencies",
      type: "visual",
      eyebrow: "Two curves",
      title: "Heterozygote frequency is not proportional to the rare allele's frequency",
      introduction:
        "Plot the three genotype frequencies against the frequency of one allele as it runs from 0 to 1. The shape of the result carries the practical content of the whole model, because the three curves behave quite differently as an allele becomes rare.",
      visual: "allele_frequency",
      caption:
        "The homozygote curves are quadratic and the heterozygote curve is a hump peaking at p = q = 0.5, where 2pq reaches 0.5 and no higher. As q falls, q² falls far faster than 2pq, so the rarer an allele becomes the more overwhelmingly its copies are held by heterozygotes rather than by homozygotes.",
    },
    {
      id: "popg-frequencies",
      type: "concept",
      eyebrow: "From counts to proportions",
      title: "Every homozygote contributes two copies and every heterozygote one",
      paragraphs: [
        "The counting method needs no model at all. Take a locus with alleles A and a, and let the numbers of individuals of each genotype be counted directly. With N individuals in total there are 2N gene copies. Copies of A come from two sources: two from each AA individual and one from each Aa individual. So the frequency of A is (2 × the AA count + the Aa count) ÷ 2N. Written in frequencies rather than counts the same statement becomes p = f(AA) + ½f(Aa), which is often quicker. The two expressions are the same arithmetic, and confirming that they agree is a useful check on any calculation.",
        "This method requires that each individual's genotype can be read from its phenotype, which is why population work prefers codominant markers. Where dominance is complete, individuals of genotypes AA and Aa are indistinguishable, and only the recessive class is genotypically unambiguous. The counting route is then unavailable, and getting from an observed incidence back to an allele frequency requires assuming something about how alleles pair. That is a real cost, and it is worth noticing where it is being paid: an allele frequency obtained by counting is a measurement, while one obtained from a recessive incidence is a model-dependent estimate.",
        "Both sets of quantities are proportions, so both are dimensionless and each set sums to 1. Verifying those sums is the fastest way to catch a slip, and it costs one line. The method also extends without modification to more than two alleles: each allele's frequency is its number of copies divided by 2N, and the frequencies still sum to 1. What changes with more alleles is only the number of genotype classes, which grows as the number of unordered pairs.",
      ],
      callout:
        "p = (2 × homozygote count + heterozygote count) ÷ (2 × number of individuals)",
    },
    {
      id: "popg-worked-counts",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compute both kinds of frequency from one set of counts",
      scenario:
        "A survey of a beetle population scores 700 individuals at a locus with two codominant alleles, R and W, which give dark, mottled and pale wing cases in the three genotypes. The counts are 300 dark (RR), 240 mottled (RW) and 160 pale (WW). Find the allele frequencies and the genotype frequencies.",
      steps: [
        {
          label: "Total the individuals and the gene copies",
          decision:
            "The two kinds of frequency use different denominators, so both totals must be established before any division is done.",
          working:
            "300 + 240 + 160 = 700 individuals, and 2 × 700 = 1400 gene copies",
        },
        {
          label: "Count the copies of each allele",
          decision:
            "Each homozygote contributes two copies of its allele and each heterozygote one of each, so the heterozygote class is counted once on each side.",
          working:
            "R: (2 × 300) + 240 = 840. W: (2 × 160) + 240 = 560. Check: 840 + 560 = 1400",
        },
        {
          label: "Divide by the number of copies",
          decision:
            "Allele frequencies are proportions of the copy pool, so the divisor is 1400 rather than 700.",
          working:
            "p(R) = 840 ÷ 1400 = 0.600; q(W) = 560 ÷ 1400 = 0.400; p + q = 1.000",
        },
        {
          label: "Divide the same counts by the number of individuals",
          decision:
            "Genotype frequencies are proportions of individuals, so the divisor changes even though the counts do not.",
          working:
            "RR 300 ÷ 700 = 0.429; RW 240 ÷ 700 = 0.343; WW 160 ÷ 700 = 0.229, summing to 1.000 before rounding",
        },
        {
          label: "Confirm the two descriptions agree",
          decision:
            "The shortcut expression for an allele frequency uses the genotype frequencies, so it provides an independent route to the same number.",
          working:
            "p = f(RR) + ½f(RW) = 0.4286 + 0.1714 = 0.600, matching the copy count",
        },
      ],
      answer:
        "The allele frequencies are p(R) = 0.600 and q(W) = 0.400, and the genotype frequencies are 0.429 for RR, 0.343 for RW and 0.229 for WW. No model or assumption was needed at any point; every number came from counting.",
      plausibility:
        "A population with these same allele frequencies but with alleles paired at random would show genotype frequencies of 0.36, 0.48 and 0.16, that is counts of 252, 336 and 112. The observed counts differ substantially from those, which is a useful reminder that allele frequencies alone do not determine genotype frequencies — the point the next section takes up.",
    },
    {
      id: "popg-check-counts",
      type: "check",
      eyebrow: "Your turn",
      title: "Choose the right denominator",
      prompt:
        "In a sample of 500 individuals scored at a locus with two codominant alleles, 45 are homozygous for allele F, 210 are heterozygous, and 245 are homozygous for allele f. What is the frequency of allele F?",
      options: [
        "0.09, the proportion of individuals homozygous for F",
        "0.30",
        "0.51, the proportion of individuals carrying at least one copy of F",
        "0.60, from the copy count of F divided by the number of individuals",
      ],
      correctIndex: 1,
      explanation:
        "Copies of F number (2 × 45) + 210 = 300, and the sample contains 2 × 500 = 1000 gene copies, so the frequency of F is 300 ÷ 1000 = 0.30. As a check, f accounts for (2 × 245) + 210 = 700 copies, and 0.30 + 0.70 = 1.00. Incidentally these counts match p², 2pq and q² exactly for p = 0.30, so this sample sits precisely at Hardy-Weinberg proportions.",
      misconception:
        "Dividing a copy count by an individual count, which doubles the answer to 0.60 and would let the two allele frequencies sum to 2. The other errors substitute an individual-level proportion for an allele-level one: 0.09 counts homozygotes and 0.51 counts everyone carrying the allele, neither of which is a proportion of gene copies.",
    },
    {
      id: "popg-hwe",
      type: "concept",
      eyebrow: "Derive it",
      title: "If gametes meet at random, genotype frequencies are the terms of a square",
      paragraphs: [
        "Model the population's gametes as one large pool in which allele A occupies proportion p and allele a proportion q, with p + q = 1. Random mating, for a single locus, is exactly the statement that a zygote is formed by drawing two gametes at random from that pool. The probability of drawing A twice is p × p = p². The probability of drawing a twice is q². A heterozygote can be formed in two ways, A then a or a then A, each of probability pq, so its total is 2pq. Those three outcomes exhaust the possibilities, so p² + 2pq + q² = 1. That expression is not a separate law; it is (p + q)² written out, and the only biological content in the derivation is the word random.",
        "The result also reproduces itself. Compute the allele frequency in the next generation from those genotype frequencies: p′ = p² + ½(2pq) = p² + pq = p(p + q) = p. Allele frequencies are unchanged, so the same genotype proportions arise again, and again after that. Two consequences follow and both are worth stating plainly. Equilibrium is reached after a single generation of random mating, whatever genotype frequencies the population started from, so a population out of equilibrium in one generation can be in it by the next. And once reached, nothing further happens: this is a model of a population in which no process of interest is operating.",
        "That last sentence is the reason the model earns its place. It is a null model, and its value lies precisely in describing the uninteresting case exactly. It makes no claim that real populations satisfy it, and a population that departs from it has not failed a test — the departure is the measurement, in the same way that the difference between a treatment and its control is the result of an experiment. The model applies locus by locus, so a population can sit at equilibrium at one locus and depart at another, and comparing loci is itself informative.",
      ],
      callout:
        "p + q = 1 and p² + 2pq + q² = 1, with the factor 2 counting the two ways a heterozygote can form",
    },
    {
      id: "popg-worked-carrier",
      type: "worked",
      eyebrow: "Worked example",
      title: "Estimate carrier frequency from a disease incidence",
      scenario:
        "A recessive condition affects 1 person in 3600 in a large population that mates at random with respect to this locus. Estimate the allele frequency, the proportion of the population who are unaffected carriers, and how many carriers and affected individuals a town of 90 000 would contain.",
      steps: [
        {
          label: "Decide which quantity the incidence supplies",
          decision:
            "Only the recessive phenotype identifies a genotype unambiguously, since affected people must carry two copies while unaffected people may carry one or none. The incidence is therefore the homozygote frequency, and using it this way is where the equilibrium assumption enters.",
          working: "q² = 1 ÷ 3600",
        },
        {
          label: "Take the square root",
          decision:
            "The allele frequency is what every later expression needs, so recover it before computing anything else.",
          working: "q = √(1 ÷ 3600) = 1 ÷ 60 = 0.0167",
        },
        {
          label: "Obtain the other allele frequency",
          decision:
            "With two alleles the frequencies must sum to 1, so subtraction is exact and no second measurement is required.",
          working: "p = 1 − 0.0167 = 0.9833",
        },
        {
          label: "Compute the heterozygote frequency",
          decision:
            "Carriers are the heterozygote class, so the middle term of the expansion is the one required; the factor of 2 must not be dropped.",
          working:
            "2pq = 2 × 0.9833 × 0.0167 = 0.0328, roughly one person in thirty",
        },
        {
          label: "Convert to people and compare the two classes",
          decision:
            "Expressing both classes as counts in the same town makes the ratio concrete and provides a check on the proportions.",
          working:
            "affected: 90 000 ÷ 3600 = 25. Carriers: 0.0328 × 90 000 = 2950. Ratio 2950 ÷ 25 = 118, which is 2p ÷ q",
        },
      ],
      answer:
        "The allele frequency is about 0.0167, roughly 3.3 per cent of the population are carriers, and in a town of 90 000 about 2950 people would carry one copy while about 25 would be affected — carriers outnumbering affected individuals by 118 to 1.",
      plausibility:
        "When q is small, p is close to 1 and 2pq is therefore close to 2q. Here 2q = 2 ÷ 60 = 0.0333, and the exact value 0.0328 sits a little below it, as it must since p is under 1. The ratio can be checked the same way: 2p ÷ q is close to 2 ÷ q = 120, against the exact 118.",
    },
    {
      id: "popg-check-carrier",
      type: "check",
      eyebrow: "Apply the estimate",
      title: "Get from an incidence to a carrier frequency",
      prompt:
        "A recessive condition affects 1 person in 10 000 in a population at Hardy-Weinberg equilibrium for the locus. Approximately what proportion of the population are unaffected carriers?",
      options: [
        "About 1 in 10 000, the same as the frequency of affected individuals",
        "About 1 in 100, since the allele frequency is 0.01",
        "About 1 in 50",
        "About 1 in 200",
      ],
      correctIndex: 2,
      explanation:
        "The incidence is q², so q = √(0.0001) = 0.01 and p = 0.99. Carriers are 2pq = 2 × 0.99 × 0.01 = 0.0198, which is about 1 in 50. Carriers therefore outnumber affected individuals by roughly 2p ÷ q = 198 to 1, which is the general shape of the result: rare recessive alleles are overwhelmingly held by people who show nothing.",
      misconception:
        "Reporting the allele frequency as though it were the carrier frequency, which gives 1 in 100 and halves the answer by dropping the factor of 2. The allele frequency counts gene copies; the carrier frequency counts people, and each carrier holds one copy out of two.",
    },
    {
      id: "popg-assumptions",
      type: "concept",
      eyebrow: "Five ways to break",
      title: "Each assumption leaves a different signature when it fails",
      paragraphs: [
        "The derivation used random union of gametes and nothing else, but keeping a population at those proportions generation after generation requires five conditions. Mating must be random with respect to the locus. There must be no selection, meaning that all genotypes are equally likely to survive and reproduce. Mutation at the locus must be absent or rare enough to ignore. There must be no migration into or out of the population. And the population must be large enough that sampling error between generations is negligible. Real populations violate all five to some degree, which is the point: the model is a baseline against which the size of each violation is measured.",
        "The signatures differ, and that is what makes a departure informative rather than merely disappointing. Non-random mating — assortative mating, self-fertilisation, or a sample that unknowingly pools separate populations — changes how alleles are packaged into genotypes without changing the allele frequencies themselves, producing a deficit of heterozygotes with p unchanged. Selection shifts allele frequencies in a consistent direction, and consistently in the same direction across replicate populations. Mutation shifts them far too slowly to see over a few generations, since rates are typically of the order of 10⁻⁵ to 10⁻⁶ per locus per generation. Migration pulls a population's frequencies towards those of its source. Drift shifts them at random, by an amount that scales roughly as 1 ÷ (2N), so it matters in small populations and has no preferred direction.",
        "The pooling case deserves its own name because it is so easily mistaken for biology. Combining two populations that have different allele frequencies always produces an apparent deficit of heterozygotes in the pooled sample, even when each population separately sits exactly at equilibrium. The arithmetic is unforgiving: the pooled allele frequency is an average, but the pooled homozygote frequency is an average of squares, and an average of squares exceeds the square of the average. So the first question to ask after finding a departure is not which evolutionary process caused it but whether the sample is really one population at all.",
      ],
      callout:
        "a heterozygote deficit with allele frequencies unchanged points at mating or sampling, not at selection",
    },
    {
      id: "popg-check-assumption",
      type: "check",
      eyebrow: "Name the departure",
      title: "Match an observation to the assumption it breaks",
      prompt:
        "An island population of about 40 birds was founded by individuals taken at random from a mainland population in which allele frequency p was 0.5. Twenty generations later the island frequency is 0.85 while the mainland remains at 0.5. There is no evidence that the allele affects survival or reproduction, and no birds move between the two. Which departure best accounts for this?",
      options: [
        "Mutation, which has generated additional copies of the allele on the island",
        "Genetic drift, since in a population of about 40 the sampling of alleles from one generation to the next is imprecise, so frequencies wander in a direction that is not predictable in advance",
        "Natural selection, since a rise from 0.5 to 0.85 can only be produced by a fitness advantage",
        "Gene flow from the mainland, which has drawn the island frequency away from its starting value",
      ],
      correctIndex: 1,
      explanation:
        "Drift is the sampling error inherent in forming each generation from a finite number of parents, and its magnitude scales as 1 ÷ (2N), so with N near 40 it is substantial. It requires no fitness difference and has no preferred direction, which fits a case where the mainland has not moved and no advantage has been shown. Mutation is several orders of magnitude too slow to shift a frequency by 0.35 in twenty generations. Gene flow is excluded by the stated absence of movement, and in any case would pull the island towards 0.5, not away from it.",
      misconception:
        "Assuming that any directional change in allele frequency must be selection. Drift produces changes that look directional in hindsight precisely because a random walk in a small population wanders far; the test is whether replicate populations move the same way, not whether one of them moved.",
    },
    {
      id: "popg-worked-test",
      type: "worked",
      eyebrow: "Worked example",
      title: "Test an observed distribution against the equilibrium prediction",
      scenario:
        "Return to the beetle survey: 700 individuals scored as 300 dark (RR), 240 mottled (RW) and 160 pale (WW), with allele frequencies p(R) = 0.600 and q(W) = 0.400 computed from those counts. Decide whether the genotype distribution is consistent with Hardy-Weinberg equilibrium, and interpret any departure.",
      steps: [
        {
          label: "Fix the expected proportions",
          decision:
            "The expected proportions follow from the allele frequencies alone, so they must be computed from p and q rather than adjusted to resemble the data.",
          working:
            "p² = 0.360, 2pq = 2 × 0.600 × 0.400 = 0.480, q² = 0.160, summing to 1.000",
        },
        {
          label: "Convert proportions into expected counts",
          decision:
            "Discrepancies are only interpretable against the number of individuals they are drawn from, so the comparison must be made in counts and not in proportions.",
          working:
            "700 × 0.360 = 252; 700 × 0.480 = 336; 700 × 0.160 = 112; total 700",
        },
        {
          label: "Set observed against expected",
          decision:
            "Record the direction of each deviation as well as its size, since the pattern across the three classes is what identifies the cause.",
          working:
            "dark 300 against 252, a surplus of 48; mottled 240 against 336, a shortfall of 96; pale 160 against 112, a surplus of 48",
        },
        {
          label: "Judge the discrepancy against sampling variation",
          decision:
            "A deviation means nothing until compared with the scatter expected by chance. As a rule of thumb the sampling spread of a count around an expected value E is of order √E, which is enough to settle a case this clear without a formal test.",
          working:
            "√336 ≈ 18, and the shortfall of 96 is more than five times that",
        },
        {
          label: "Identify which assumption is in trouble",
          decision:
            "Ask which quantity has moved. The allele frequencies were derived from these very counts and so are not themselves in question; what differs is how the alleles are packaged into genotypes.",
          working:
            "heterozygotes are depleted and both homozygote classes enriched, with p unchanged — the signature of non-random mating or of a sample pooling more than one population",
        },
      ],
      answer:
        "The distribution departs clearly from Hardy-Weinberg proportions, with about 29 per cent fewer heterozygotes than expected — 240 observed against 336 predicted. The allele frequencies are unremarkable; the packaging is not, which points to assortative mating, self-fertilisation, or a sample drawn from more than one population rather than to selection.",
      plausibility:
        "The three deviations sum to zero, since +48 − 96 + 48 = 0, which is a necessary consequence of having derived p from the same counts; a non-zero sum would indicate an arithmetic error. As a further check, computing the allele frequency from the expected counts returns the same value: (2 × 252 + 336) ÷ 1400 = 840 ÷ 1400 = 0.600.",
    },
    {
      id: "popg-departures",
      type: "concept",
      eyebrow: "Why recessives linger",
      title: "Selection cannot see an allele that is hidden in a heterozygote",
      paragraphs: [
        "Work out where the copies of a rare allele actually are. In an equilibrium population, per individual, heterozygotes hold 2pq copies and recessive homozygotes hold 2q², and the total is 2q. The fraction of all copies sitting in heterozygotes is therefore 2pq ÷ 2q = p. That is a remarkably clean result: the proportion of a recessive allele hidden from view is simply the frequency of the other allele. With q = 0.01, ninety-nine per cent of the copies are in unaffected carriers, and carriers outnumber affected individuals by 2p ÷ q = 198 to 1. The rarer the allele, the more completely it is concealed.",
        "The consequence for selection is severe and counter-intuitive. Even if every recessive homozygote failed to reproduce, only the fraction q of the allele copies would be removed each generation, because the rest are in carriers who are unaffected and reproduce normally. For a fully recessive lethal the frequency falls according to q′ = q ÷ (1 + q), which means 1 ÷ q increases by exactly 1 each generation. Starting from q = 0.02, halving the frequency to 0.01 takes fifty generations, and halving it again to 0.005 takes a further hundred. Selection against a recessive is self-limiting: the more successful it has been, the less of the allele it can reach.",
        "The other named departures give the contrasting cases. Directional selection changes frequencies steadily and reproducibly, and against a dominant allele it acts on every copy, so it is far quicker. Drift changes them at random, most strongly in small populations. Gene flow homogenises populations that exchange migrants. Two further mechanisms explain persistence that the arithmetic above alone would not: heterozygote advantage, in which selection actively maintains both alleles, and mutation-selection balance, in which new copies arise as fast as old ones are removed. For a recessive lethal the balance sits near q = √(μ ÷ s); with a mutation rate μ of 10⁻⁶ and complete selection this gives q ≈ 10⁻³ and an incidence of about one in a million, which is the right order for many such conditions.",
      ],
      callout:
        "the fraction of copies of an allele held by heterozygotes is p, so a rare recessive is almost entirely hidden",
    },
    {
      id: "popg-check-persistence",
      type: "check",
      eyebrow: "Where the copies are",
      title: "Locate a rare allele in the population",
      prompt:
        "A recessive allele has frequency q = 0.02 in a population at Hardy-Weinberg equilibrium. What fraction of all copies of that allele is carried by heterozygotes rather than by homozygotes?",
      options: [
        "About 2 per cent",
        "About 4 per cent",
        "About 50 per cent",
        "About 98 per cent",
      ],
      correctIndex: 3,
      explanation:
        "Per individual there are 2q = 0.04 copies of the allele in total, of which 2pq = 2 × 0.98 × 0.02 = 0.0392 are held by heterozygotes. The fraction is 0.0392 ÷ 0.04 = 0.98, which is p itself. Heterozygotes make up 3.92 per cent of the population and affected homozygotes only q² = 0.04 per cent, a ratio of 98 to 1, so removing every affected individual each generation would remove only about 2 per cent of the allele copies.",
      misconception:
        "Reading the small frequency of the allele as though it described how the allele is distributed. The two questions are separate: q says how common the allele is, while p says what proportion of it is masked, and for a rare recessive those numbers sit at opposite ends of the scale.",
    },
    {
      id: "popg-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar context",
      title: "Apply the model where one sex has a single copy",
      prompt:
        "An X-linked recessive condition affects 1 man in 400 in a large population mating at random with respect to the locus. Approximately what proportion of women are affected, and what proportion are carriers?",
      options: [
        "1 in 400 women affected and 1 in 200 carriers, since the allele frequency is the same in both sexes",
        "1 in 160 000 women affected and about 1 in 200 carriers",
        "1 in 800 women affected and 1 in 400 carriers",
        "1 in 160 000 women affected and about 1 in 400 carriers",
      ],
      correctIndex: 1,
      explanation:
        "A man has one X, so his phenotype reports his single allele directly and the frequency of affected men equals the allele frequency itself: q = 1 ÷ 400 = 0.0025. A woman has two X chromosomes, so affected women are q² = 0.0025² = 6.25 × 10⁻⁶, about 1 in 160 000. Carrier women are 2pq = 2 × 0.9975 × 0.0025 = 0.00499, about 1 in 200 — as common as affected men, and roughly 800 times as common as affected women.",
      misconception:
        "Squaring the frequency for both sexes. Squaring counts the chance of drawing the allele twice, and a hemizygous male draws only once, so his risk is q rather than q². Applying q² to men here would predict 1 affected man in 160 000 against the 1 in 400 actually observed.",
    },
    {
      id: "popg-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "A model in which nothing happens, used to measure what does",
      points: [
        "Shifting the unit of analysis from the individual to the gene pool turns inheritance into arithmetic on proportions and gives evolution a measurable definition.",
        "Allele frequency follows from counts with no assumptions: two copies from each homozygote and one from each heterozygote, divided by twice the number of individuals.",
        "Random union of gametes gives p² + 2pq + q² = 1, reached after a single generation of random mating and stable thereafter.",
        "The model earns its place as a null hypothesis, so a measured departure from it is the finding rather than a failure of the model.",
        "From a recessive incidence q², the carrier frequency 2pq is close to 2q when q is small, so carriers outnumber affected individuals by roughly 2 ÷ q.",
        "The fraction of copies of an allele hidden in heterozygotes equals p, which is why selection against recessive homozygotes removes a rare allele so slowly.",
      ],
      transferRule:
        "Build the model in which nothing interesting happens, work out precisely what it predicts, and then treat the size and direction of the discrepancy as the measurement.",
      nextLessonId: "lesson.biology.cell_signalling",
    },
  ],
};

export const biologyGeneticsLessons: Lesson[] = [
  dnaExpression,
  mendelianGenetics,
  meiosisLinkage,
  populationGenetics,
];
