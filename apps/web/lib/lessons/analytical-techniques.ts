import type { Lesson } from "@/lib/lesson-types";

const separationTechniques: Lesson = {
  id: "lesson.chemistry.separation_techniques",
  slug: "separation-and-analytical-techniques",
  number: "6.6",
  stageId: "stage.organic_chemistry",
  discipline: "chemistry",
  title: "Separation and analytical techniques",
  summary:
    "Treat every separation as one physical property difference converted into distance: partition between two phases in chromatography, mobility in a field in electrophoresis, and sedimentation rate or density in centrifugation.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "State the property a separation technique exploits, and the consequence when two components share it.",
    "Explain retention in chromatography as a competition between a stationary and a mobile phase.",
    "Calculate an Rf value and state everything it depends on besides the compound.",
    "Predict elution order on normal-phase and reversed-phase systems, and interpret a two-dimensional plate.",
    "Estimate a fragment length from migration distance against a size ladder using the logarithmic relationship.",
    "Place cellular components in the fractions produced by a described centrifugation scheme, and distinguish rate-zonal from isopycnic banding.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.intermolecular_forces",
    "lesson.chemistry.biomolecules",
  ],
  blocks: [
    {
      id: "sep-purpose",
      type: "concept",
      eyebrow: "Difference into distance",
      title: "No technique separates two species that share the property it exploits",
      paragraphs: [
        "Almost nothing arrives pure. A plant extract, a cell homogenate, a reaction flask stopped part way through a synthesis — each holds dozens of species at once, and nearly every measurement worth making needs them apart first. The apparatus looks unrelated from one method to the next: a coated plate standing in solvent, a slab of gel wired to a power supply, a rotor turning at forty thousand revolutions per minute. The logic is identical. Each takes a physical property, arranges conditions so that the property controls how fast something moves, and lets time turn a difference in speed into a difference in position.",
        "Three families of property cover most of what is done. In chromatography the property is relative affinity for two phases, one held still and one flowing past it, so a molecule that clings to the stationary phase falls behind one that does not. In electrophoresis it is net charge, or more exactly the ratio of electrical driving force to frictional drag. In centrifugation it is size and density together, which fix how fast a particle sediments under an effective gravitational field. Partition, mobility, sedimentation: the hardware differs entirely, the underlying move does not.",
        "The corollary is the part worth carrying. If two components are identical in the property a technique reads, that technique will never separate them, however long the run or however costly the instrument. Two proteins of the same mass form one band on a denaturing gel even when their sequences are unrelated. Two DNA fragments of the same buoyant density band together in caesium chloride whatever their lengths. So the first move with an unfamiliar mixture is not to choose apparatus but to ask what genuinely differs between the components, and only then to pick a method that reads that difference.",
      ],
      callout:
        "a separation converts a difference in one physical property into a difference in position",
    },
    {
      id: "sep-visual-plate",
      type: "visual",
      eyebrow: "See the competition",
      title: "One plate turns a difference in affinity into a difference in height",
      introduction:
        "A developed thin-layer plate holds the whole idea in one image: a pencil baseline where every component started together, spots at different heights, and a marked solvent front. A diagram suits it because the reported quantity is not a distance but a ratio of two distances measured on the same plate.",
      visual: "chromatography",
      caption:
        "Each spot has risen a distance set by the fraction of the run its molecules spent dissolved in the moving solvent rather than held on the stationary phase. Dividing that by the distance the front travelled gives the Rf, which is why the front must be marked before the plate dries and the evidence is lost.",
    },
    {
      id: "sep-retention",
      type: "concept",
      eyebrow: "Held or moving",
      title: "A solute advances only during the fraction of time it spends in the mobile phase",
      paragraphs: [
        "Thin-layer chromatography sets the pattern for the family. A sheet is coated with a thin layer of silica gel, whose surface carries Si–OH groups and is therefore strongly polar; this is the stationary phase. The sheet stands in a closed tank holding a few millimetres of organic solvent, which climbs the layer by capillary action; this is the mobile phase. A spot of the mixture is applied on a pencil baseline above the solvent level. Where the stationary phase is a liquid film the solute partitions between two solvents; where it is a bare solid it adsorbs onto the surface. On silica both occur, and the consequence matters more than the distinction: at any instant a molecule is either held or moving.",
        "A molecule in the mobile phase travels at the solvent's speed and one held on the silica does not travel at all, so its average speed is the solvent speed multiplied by the fraction of time it spends free. That fraction is set by the intermolecular forces already covered. Hexanoic acid both donates and accepts hydrogen bonds to surface silanol groups, so it is held for most of the run; hexan-1-ol donates one and is held less; hexyl ethanoate accepts but cannot donate, and moves further still. Reversing the polarities inverts all of it. A reversed-phase system pairs a non-polar stationary phase, usually silica carrying bonded C₁₈ chains, with a polar mobile phase such as methanol and water, so the most hydrophobic component is held back and the elution order runs the other way.",
        "A spot's position is reported as a retardation factor, Rf: the distance its centre has moved from the baseline divided by the distance the solvent front has moved from that same baseline. Both are measured on one plate, so Rf lies strictly between 0 and 1, since a solute cannot outrun the solvent carrying it. Rf is not a property of the compound. It depends on the stationary phase, the solvent composition, the temperature and how far the tank is saturated with vapour, so a value quoted without its solvent system says nothing. The same competition packed into a tube gives column chromatography, where the least retained component leaves first; gas and high-performance liquid chromatography report retention time, the interval between injection and detection, in place of a distance.",
      ],
      callout:
        "Rf = distance moved by the spot / distance moved by the solvent front, both from the baseline",
    },
    {
      id: "sep-worked-rf",
      type: "worked",
      eyebrow: "Worked example",
      title: "Read three Rf values and predict two elution orders",
      scenario:
        "A mixture from an incomplete esterification is spotted on a silica plate and developed in 30 per cent ethyl ethanoate in hexane by volume. Measured from the pencil baseline, the solvent front has risen 8.0 cm and the three spot centres sit at 6.0 cm, 3.6 cm and 1.2 cm. The mixture contains hexyl ethanoate, hexan-1-ol and hexanoic acid. Assign the spots, calculate the Rf values, and predict the elution order on a silica column run with this solvent and on a C₁₈ column run with methanol and water.",
      steps: [
        {
          label: "Measure every distance from the same baseline",
          decision:
            "Rf compares two distances travelled, so both must be counted from where the sample started. Measuring the front from the plate's bottom edge depresses every Rf together.",
          working:
            "solvent front 8.0 cm; spot centres at 6.0 cm, 3.6 cm and 1.2 cm",
        },
        {
          label: "Divide each spot distance by the front distance",
          decision:
            "The ratio removes the length of the run, which is what lets plates developed to different heights be compared within one solvent system.",
          working: "6.0 / 8.0 = 0.75; 3.6 / 8.0 = 0.45; 1.2 / 8.0 = 0.15",
        },
        {
          label: "Rank the compounds by how strongly each holds to silica",
          decision:
            "Silica is polar and hydroxyl-covered, so retention tracks hydrogen bonding to that surface: a species that both donates and accepts is held hardest, one that can only accept least.",
          working:
            "hexanoic acid (donates and accepts) > hexan-1-ol (donates once) > hexyl ethanoate (accepts only)",
        },
        {
          label: "Match the structural ranking to the measured positions",
          decision:
            "The most strongly held compound spends least of the run moving, so it is the spot that travelled least. The ranking came from structure, before the distances were consulted.",
          working:
            "Rf 0.75 is hexyl ethanoate; Rf 0.45 is hexan-1-ol; Rf 0.15 is hexanoic acid",
        },
        {
          label: "Convert the plate into two predicted elution orders",
          decision:
            "A column is the same competition in another geometry, so the least retained leaves first. A C₁₈ column reverses which phase is polar, so as a rule of thumb the order inverts.",
          working:
            "silica: ester, then alcohol, then acid. C₁₈ with methanol and water: acid, then alcohol, then ester",
        },
      ],
      answer:
        "The spots are hexyl ethanoate at Rf 0.75, hexan-1-ol at Rf 0.45 and hexanoic acid at Rf 0.15; a silica column elutes them in that order and a C₁₈ column in the reverse order.",
      plausibility:
        "All three values fall strictly between 0 and 1, as they must, and the distances 6.0, 3.6 and 1.2 cm stand in the ratio 5 : 3 : 1, matching 0.75 : 0.45 : 0.15 exactly. The structural ranking was fixed before the measurements were used, so its agreement with the observed order is a real check and not a restatement.",
    },
    {
      id: "sep-check-solvent",
      type: "check",
      eyebrow: "Your turn",
      title: "Decide what a change of solvent does to an Rf",
      prompt:
        "On silica developed in 20 per cent ethyl ethanoate in hexane, a compound gives Rf 0.28. The same compound is spotted on an identical plate and developed in 50 per cent ethyl ethanoate in hexane. What is observed?",
      options: [
        "Rf remains 0.28, because Rf is a constant of the compound in the way a melting point is",
        "Rf rises past 1.00, because the compound now travels faster than the solvent front",
        "Rf falls, because a more polar solvent binds the compound more tightly to the polar stationary phase",
        "Rf rises, because the more polar mobile phase competes for the polar sites on the silica and leaves the compound moving for a greater fraction of the run",
      ],
      correctIndex: 3,
      explanation:
        "Solvent and solute compete for the same silanol groups. Raising the proportion of ethyl ethanoate strengthens that competition, so the solute is displaced from the surface more often, spends more of the run moving, and finishes higher up the plate — typically somewhere near 0.6 for a change of this size. The value can never exceed 1.00, since the front is what carries the solute.",
      misconception:
        "Treating Rf as an intrinsic property and quoting it without its solvent system. Rf belongs to a whole system — stationary phase, solvent composition, temperature, tank saturation — so values from different systems cannot be compared at all.",
    },
    {
      id: "sep-check-twodimensional",
      type: "check",
      eyebrow: "Read the plate",
      title: "Account for a spot count that grows on a second run",
      prompt:
        "A mixture is applied to one corner of a square silica plate and developed upwards in solvent system 1, giving three spots in a vertical line. The plate is dried, rotated by 90°, and developed again in solvent system 2, which has a different composition. Four spots are now visible, and they do not lie on one straight line. What is the best interpretation?",
      options: [
        "Two components had identical partition behaviour in system 1 and shared a spot; system 2 retains them differently and draws them apart",
        "The second solvent has chemically converted one component into two products",
        "The fourth spot is an artefact, since a plate cannot display more components than the mixture contains",
        "The second development is invalid, because a plate may only be run in the solvent used for the first dimension",
      ],
      correctIndex: 0,
      explanation:
        "A spot on a one-dimensional plate is a position, not a compound: anything with the same Rf in that solvent lands in the same place. Developing at right angles in a solvent of different selectivity gives those co-migrants different distances in the new direction, so they resolve, and each component is now identified by a pair of values, one per dimension. Had the second solvent matched the first, every spot would have fallen on the diagonal and nothing new would have appeared.",
      misconception:
        "Reading a change in spot count as chemistry rather than as resolution. Development does not react with the sample; the second run reveals a component the first had hidden underneath another.",
    },
    {
      id: "sep-visual-gel",
      type: "visual",
      eyebrow: "Read a lane",
      title: "A ladder converts a migration distance into a length",
      introduction:
        "A gel is read by comparison, never in absolute terms. Beside the sample runs a ladder lane of fragments of known length, and the position of an unknown band means something only against those reference bands on the same gel, run in the same field for the same time.",
      visual: "electrophoresis",
      caption:
        "Distance from the well runs approximately with the logarithm of fragment length, so evenly spaced ladder bands differ by a constant factor in size rather than by a constant number of bases. Large fragments stay near the well, small ones run ahead, and the relationship flattens at both ends of the gel's working range.",
    },
    {
      id: "sep-field",
      type: "concept",
      eyebrow: "Charge against drag",
      title: "A gel turns a constant charge-to-mass ratio into a measurement of size",
      paragraphs: [
        "Place a charged species in a uniform electric field E and it feels a force qE, where q is its net charge. It accelerates, but only briefly: viscous drag grows with speed, and within nanoseconds the two balance. From then on it travels at a steady velocity v = qE/f, where f is its frictional coefficient. Dividing out the field leaves the electrophoretic mobility, μ = v/E = q/f, and that ratio is what the technique sorts by. Charge alone does not fix mobility and neither does size: a small doubly charged species and a large quadruply charged one can travel at the same speed and never separate.",
        "Nucleic acids look like a hopeless case. Every nucleotide added to a chain brings one phosphate carrying one negative charge together with roughly the same increment of mass, so the charge-to-mass ratio of DNA is almost independent of length, and in free solution a twenty-base fragment and a twenty-thousand-base fragment move at nearly the same speed. The gel rescues the method. A cross-linked matrix of agarose or polyacrylamide presents a mesh of pores, and a longer molecule must thread through more of them, so the matrix supplies a length-dependent drag that free solution cannot. Over the working range of a gel, migration distance is approximately linear in log₁₀ of fragment length — an empirical relationship, not a law, and one that flattens at both extremes.",
        "Proteins vary in charge and in shape at once, so a native gel reports an uninterpretable blend of the two. Denaturing conditions remove the ambiguity. Sodium dodecyl sulfate unfolds the chain and binds along it at a roughly constant ratio near 1.4 g of detergent per gram of protein, coating every polypeptide with a negative charge nearly proportional to its mass and swamping whatever charge it carried. Charge-to-mass ratio becomes near-constant, the sieving argument applies again, and the gel reads mass. Intrinsic charge still matters elsewhere: the pH at which a protein's ionisable groups sum to zero is its isoelectric point, pI, and at pH = pI the driving force qE is zero, so the protein does not move whatever the field. Isoelectric focusing sets up a pH gradient so each protein migrates until it reaches its own pI and halts.",
      ],
      callout:
        "v = qE/f, so mobility is charge divided by drag; at pH = pI the net charge is zero and nothing moves",
    },
    {
      id: "sep-worked-ladder",
      type: "worked",
      eyebrow: "Worked example",
      title: "Size an unknown band against two ladder bands",
      scenario:
        "A restriction digest is run beside a size ladder on a 1.0 per cent agarose gel. Measured from the well, the 3000 base-pair ladder band has migrated 18.0 mm and the 300 base-pair band 46.0 mm. A single band in the sample lane sits at 32.0 mm. Estimate its length.",
      steps: [
        {
          label: "Choose the relationship that applies",
          decision:
            "Sieving makes migration distance approximately linear in the logarithm of length, not in length itself, so the calibration has to be built on a logarithmic axis or every later step is wrong.",
          working:
            "d = a − b log₁₀N across the working range, with d the distance and N the length in base pairs",
        },
        {
          label: "Calibrate the gradient from the ladder",
          decision:
            "Two bands of known length fix b, and choosing bands exactly one decade apart makes the arithmetic exact rather than approximate.",
          working:
            "log₁₀3000 − log₁₀300 = 1.000, so b = (46.0 − 18.0) mm / 1.000 = 28.0 mm per tenfold change in length",
        },
        {
          label: "Express the unknown position as a fraction of a decade",
          decision:
            "Once the gradient is known, a distance measured below a reference band converts straight into a multiplying factor in length.",
          working:
            "32.0 − 18.0 = 14.0 mm below the 3000 bp band, and 14.0 / 28.0 = 0.500 of a decade",
        },
        {
          label: "Undo the logarithm",
          decision:
            "Half a decade is ten raised to the power 0.500, which is 3.16 — not a factor of five, and not half of ten.",
          working: "N = 3000 / 3.16 = 949 base pairs",
        },
        {
          label: "Repeat the estimate from the other reference band",
          decision:
            "A two-point calibration must give the same answer from either end; disagreement means a distance has been misread or the band lies outside the linear range.",
          working:
            "32.0 mm is 14.0 mm above the 300 bp band, so N = 300 × 3.16 = 949 base pairs",
        },
      ],
      answer:
        "The unknown fragment is about 950 base pairs long, quoted to two significant figures because millimetre measurements on a gel support no more.",
      plausibility:
        "The band lies exactly halfway in distance between the two ladder bands, so on a logarithmic scale its length must be the geometric mean of theirs: √(3000 × 300) = √900000 = 949 base pairs. Reading the gel as though distance were linear in length would give the arithmetic mean, 1650 base pairs, an overestimate of 74 per cent.",
    },
    {
      id: "sep-check-isoelectric",
      type: "check",
      eyebrow: "Charge decides",
      title: "Predict three directions of travel from three isoelectric points",
      prompt:
        "Three purified proteins, with isoelectric points of 4.8, 6.9 and 9.2, are loaded into a well cut in the middle of a native gel. The buffer is held at pH 6.9 and no detergent is present, with the anode at one end of the gel and the cathode at the other. What happens when the field is applied?",
      options: [
        "All three travel towards the anode, because proteins carry a net negative charge",
        "The protein of pI 4.8 travels towards the anode, the protein of pI 9.2 travels towards the cathode, and the protein of pI 6.9 stays in the well",
        "The protein of pI 9.2 travels towards the anode and the other two remain in the well",
        "All three travel towards the cathode, because the buffer pH matches one of the isoelectric points",
      ],
      correctIndex: 1,
      explanation:
        "Above its pI a protein has surrendered more protons than it has gained and carries net negative charge, so it is drawn to the positive electrode; below its pI the reverse holds. At pH 6.9 the protein of pI 4.8 runs to the anode, the protein of pI 9.2 runs to the cathode, and the protein of pI 6.9 has zero net charge, so qE is zero and no force acts on it.",
      misconception:
        "Carrying the behaviour of a denaturing gel across to native conditions. Sodium dodecyl sulfate gives every protein the same sign of charge and sends them all one way; without it the protein's own ionisable groups decide, and the direction depends on the buffer pH relative to the pI.",
    },
    {
      id: "sep-visual-gradient",
      type: "visual",
      eyebrow: "Where a band stops",
      title: "In a density gradient each species halts where the medium matches it",
      introduction:
        "A gradient tube is worth drawing because the outcome is spatial: a column of medium whose density rises with depth, the sample layered on top, and discrete bands at depths that mean something specific. The two ways of running such a tube look alike and answer different questions.",
      visual: "centrifuge_gradient",
      caption:
        "In a rate-zonal run every band is still travelling and the rotor is stopped at a chosen time, so depth reports sedimentation rate. In an isopycnic run each band has reached the depth where the medium's density equals its own, the buoyant term has vanished, and it will go no further however long the rotor spins.",
    },
    {
      id: "sep-spin",
      type: "concept",
      eyebrow: "Sediment and band",
      title: "Spinning supplies a field strong enough to make small particles settle",
      paragraphs: [
        "A particle denser than the fluid around it settles at a terminal velocity where its buoyant weight is balanced by drag. For a sphere of diameter d and density ρp in a medium of density ρm and viscosity η, that velocity is v = d²(ρp − ρm)g / (18η). The d² term does most of the work: halving a diameter cuts the rate to a quarter. Under ordinary gravity a mitochondrion of about 1 μm would take days to fall a few centimetres and a ribosome would never usefully arrive. A centrifuge replaces g by the centripetal acceleration ω²r, quoted as a multiple of g — benchtop work reaches 10⁴ × g and an ultracentrifuge 10⁶ × g. The rate itself is reported as a sedimentation coefficient, s = v / (ω²r), in svedbergs, where 1 S = 10⁻¹³ s.",
        "Differential centrifugation exploits the rate ordering directly. Spin the homogenate gently, collect the pellet, spin the supernatant harder, and repeat. Each step pellets everything sedimenting fast enough to reach the tube wall in the time allowed, so a scheme of rising field and duration peels off nuclei and unbroken cells first, then mitochondria, lysosomes and peroxisomes together, then the vesicle fragments of endoplasmic reticulum and plasma membrane collectively called microsomes, leaving soluble cytosol in the last supernatant. The fractions are enriched, not pure: slower particles caught in the sweeping front come down at every step, and pelleting is never quite complete, which is why a marker enzyme is assayed to establish what a fraction actually contains.",
        "A density gradient does better. The sample is layered on a medium whose density rises with depth, prepared from sucrose or from caesium chloride. In a rate-zonal run the gradient stays less dense than every particle, so everything keeps sedimenting and each species forms a band moving at its own rate; the rotor is stopped before the fastest band reaches the bottom, so the separation is by rate and therefore mostly by size. In an isopycnic run the gradient spans the particles' own densities. A particle descends only until the local density equals its own, at which point (ρp − ρm) becomes zero, the driving force disappears, and the band stops permanently — separation by density alone, whatever the size and however long the run continues. Subcellular fractionation depends on this, and so did the Meselson-Stahl experiment, where caesium chloride banding told DNA built from heavy ¹⁵N apart from DNA built from ordinary ¹⁴N on nothing but the density the label conferred.",
      ],
      callout:
        "rate-zonal separates by how fast a band travels; isopycnic separates by where the band stops",
    },
    {
      id: "sep-worked-fraction",
      type: "worked",
      eyebrow: "Worked example",
      title: "Track four markers through a fractionation scheme",
      scenario:
        "A homogenate of cultured cells is fractionated in three steps: 800 × g for 10 minutes, giving pellet P1; the supernatant respun in a rotor of radius 8.0 cm at 12 000 revolutions per minute for 20 minutes, giving pellet P2; that supernatant respun at 1.0 × 10⁵ × g for 60 minutes, giving pellet P3 and supernatant S3. Four markers are assayed: DNA, succinate dehydrogenase of the inner mitochondrial membrane, glucose-6-phosphatase of the endoplasmic reticulum, and cytosolic lactate dehydrogenase. State the field applied at the second step and place each marker.",
      steps: [
        {
          label: "Convert the dial setting into a field",
          decision:
            "A rotor speed is not a separation condition; the field is, and it depends on radius as well as speed, so two instruments at the same revolutions per minute do not apply the same field.",
          working:
            "ω = 2π × 12 000 / 60 = 1.257 × 10³ rad s⁻¹; ω²r = (1.257 × 10³)² × 0.080 m = 1.263 × 10⁵ m s⁻²; dividing by 9.81 m s⁻² gives 1.29 × 10⁴ × g",
        },
        {
          label: "Rank the particle classes by sedimentation rate",
          decision:
            "Rate goes as the square of diameter but only as the first power of the density excess, which varies by less than a factor of two here, so as a rule of thumb size settles the order.",
          working:
            "nuclei ≈ 6 μm, mitochondria ≈ 1 μm, microsomal vesicles ≈ 0.2 μm, giving relative rates near 900 : 25 : 1",
        },
        {
          label: "Assign the two lower-field pellets",
          decision:
            "Each step removes everything sedimenting fast enough in the time given, so the fastest class is taken out first and cannot reappear later.",
          working:
            "800 × g for 10 minutes brings down nuclei, so DNA is in P1; 1.29 × 10⁴ × g for 20 minutes brings down mitochondria, so succinate dehydrogenase is in P2",
        },
        {
          label: "Assign the high-field pellet and the final supernatant",
          decision:
            "Microsomal vesicles need roughly a hundredfold more exposure than mitochondria, while a genuinely soluble protein sediments negligibly at any field used here.",
          working:
            "glucose-6-phosphatase travels with the microsomes into P3; lactate dehydrogenase stays in S3",
        },
        {
          label: "State what the scheme cannot achieve",
          decision:
            "Lysosomes sediment close enough to mitochondria to come down with them, so P2 is a mixed fraction. Resolving it needs a property in which the two differ more.",
          working:
            "their densities differ, near 1.21 against 1.19 g cm⁻³ in sucrose, so an isopycnic gradient run on P2 separates them",
        },
      ],
      answer:
        "The second step applies about 1.29 × 10⁴ × g. DNA appears in P1, succinate dehydrogenase in P2, glucose-6-phosphatase in P3 and lactate dehydrogenase in S3, with P2 also carrying the lysosomes.",
      plausibility:
        "Accumulated exposure rises through the scheme as 8.0 × 10³, then 2.6 × 10⁵, then 6.0 × 10⁶ g minutes, factors of about 32 and 23 between consecutive steps. The falls in d² across the three size classes are 36-fold and 25-fold, so the escalation matches the particles each step is meant to catch.",
    },
    {
      id: "sep-check-svedberg",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Explain why 50 and 30 do not make 80",
      prompt:
        "A bacterial ribosome sediments at 70S and dissociates into two subunits that sediment at 50S and 30S. Why is the coefficient of the assembled particle not the sum of the two?",
      options: [
        "Because sedimentation coefficients cannot be measured to better than about 10S, so the shortfall is experimental scatter",
        "Because a svedberg is a unit of mass, and mass is lost when the two subunits associate",
        "Because the svedberg measures a sedimentation rate, which depends on frictional drag as well as on mass; drag rises as a particle grows, so an assembly sediments at less than the sum of its parts",
        "Because the two subunits sediment in opposite directions, so their coefficients partly cancel",
      ],
      correctIndex: 2,
      explanation:
        "The coefficient is a rate per unit field, set by mass and buoyancy divided by the frictional coefficient. Mass adds when subunits join, but drag rises too, so the coefficient grows more slowly than the mass. Treating both particles as compact spheres, for which the coefficient varies as mass to the power two thirds, predicts about 65S for the assembly — well below 80, and close to the 70S observed.",
      misconception:
        "Reading S as a mass. It is a rate coefficient with the dimensions of time, 1 S = 10⁻¹³ s, and it reflects shape as much as size: an elongated particle sediments more slowly than a compact one of the same mass because it drags more.",
    },
    {
      id: "sep-check-transfer",
      type: "check",
      eyebrow: "Unfamiliar mixture",
      title: "Choose the method that reads the property that differs",
      prompt:
        "A synthetic preparation contains two peptides of 24 residues each. Their sequences are identical except at position 11, where one carries glutamate and the other glutamine. Their molar masses differ by about 1 g mol⁻¹ out of roughly 2600 g mol⁻¹, and their densities are indistinguishable. Which method separates them, and on what property?",
      options: [
        "Denaturing polyacrylamide gel electrophoresis, because the two peptides differ in mass",
        "Isopycnic caesium chloride centrifugation, because the two peptides differ in buoyant density",
        "Native electrophoresis in a buffer at pH 7.4, because the glutamate side chain is deprotonated and negatively charged there while the glutamine side chain is neutral, so the two differ by one unit of net charge",
        "Differential centrifugation at successively higher fields, because the two peptides differ in sedimentation rate",
      ],
      correctIndex: 2,
      explanation:
        "Work through the properties in turn. The mass difference is about 0.04 per cent, far below the resolution of any gel, and a denaturing gel makes matters worse by coating both peptides so that only mass is read. The densities are stated to be indistinguishable, which disposes of the isopycnic option, and sedimentation rate depends on the same mass and density that barely differ. Charge is the one property that genuinely differs: the glutamate carboxyl group has a pKa near 4.2 and is ionised at pH 7.4, while the amide side chain of glutamine carries no charge at any accessible pH.",
      misconception:
        "Reaching for the most powerful instrument rather than the discriminating one. Denaturing electrophoresis resolves size superbly, but its detergent coat deliberately destroys the charge difference, which in this mixture is the only difference there is.",
    },
    {
      id: "sep-summary",
      type: "summary",
      eyebrow: "Carry this forward",
      title: "Name the property first, then choose the apparatus",
      points: [
        "Every separation converts a difference in one physical property into a difference in position, so components alike in that property cannot be resolved by that method.",
        "Chromatography partitions solutes between a stationary and a mobile phase, and retention is set by the fraction of the run a molecule spends held rather than moving.",
        "Rf is the spot distance divided by the solvent-front distance, and it belongs to the whole system — plate, solvent, temperature — never to the compound alone.",
        "Swapping to a reversed phase inverts the elution order, and a second development at right angles in a different solvent resolves species that co-migrated in the first.",
        "Electrophoretic velocity is qE/f, so a sieving gel turns the near-constant charge-to-mass ratio of DNA, or of an SDS-coated protein, into a reading of size, with distance running as the logarithm of length.",
        "Centrifugation separates by sedimentation rate in differential and rate-zonal runs and by density in isopycnic runs; the svedberg is a rate coefficient, so S values do not add.",
      ],
      transferRule:
        "Before selecting any separation, name the single physical property in which the components genuinely differ; the only technique that can work is the one that reads that property.",
      nextLessonId: "lesson.physics.describing_motion",
    },
  ],
};

export const analyticalTechniquesLessons: Lesson[] = [separationTechniques];
