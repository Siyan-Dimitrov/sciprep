import type { Lesson } from "@/lib/lesson-types";

const acidsBases: Lesson = {
  id: "lesson.chemistry.acids_bases",
  slug: "acids-bases-and-ph",
  number: "5.1",
  stageId: "stage.chemistry_aqueous",
  discipline: "chemistry",
  title: "Acids, bases, and the pH scale",
  summary:
    "Treat acids and bases as proton donors and acceptors, then quantify their solutions with Kw, Ka, and the logarithmic pH scale that compresses ten orders of magnitude into one readable number.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "Identify conjugate acid-base pairs in a proton-transfer equation.",
    "Relate hydronium and hydroxide concentrations through the ionic product of water.",
    "Calculate pH and pOH from concentration, and concentration from pH.",
    "Estimate the pH of a weak acid solution from its Ka and state when the approximation holds.",
    "Compare acid strengths using pKa and explain why conjugate base strength runs the other way.",
    "Interpret a difference in pH as a ratio of hydronium ion concentrations.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.equilibrium",
    "lesson.toolkit.logarithms",
  ],
  blocks: [
    {
      id: "aab-purpose",
      type: "concept",
      eyebrow: "Proton bookkeeping",
      title: "An acid is defined by what it gives away, not by what it is",
      paragraphs: [
        "Early definitions tied acidity to the substance itself: something sour, something that dissolved metals. The Brønsted-Lowry definition is sharper and far more useful. An acid is a proton donor and a base is a proton acceptor, where “proton” means a hydrogen nucleus, H⁺, stripped of its electron. Acidity is therefore not a property a molecule owns in isolation; it is something a molecule does in the presence of a partner willing to accept what it offers. Every acid-base reaction is a single transfer of H⁺ from a donor to an acceptor.",
        "A bare proton never floats free in water. When hydrogen chloride dissolves, the proton is handed to a water molecule: HCl + H₂O → H₃O⁺ + Cl⁻. The product H₃O⁺ is the hydronium ion, and it is what is meant whenever anyone writes H⁺(aq). Water accepted the proton, so here water acts as the base. With ammonia, water does the opposite: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, in which water donates. A substance able to do either is amphiprotic, and water is the standard example.",
        "Read any proton-transfer equation and two conjugate acid-base pairs will be there — species differing by exactly one H⁺. In the ammonia equation, NH₃ and NH₄⁺ form one pair and H₂O and OH⁻ form the other. Naming the pairs is the quickest way to confirm that an equation really is a proton transfer: remove one H⁺ and one unit of positive charge from a species and its partner should appear.",
      ],
      callout: "acid + base ⇌ conjugate base + conjugate acid",
    },
    {
      id: "aab-visual",
      type: "visual",
      eyebrow: "See the compression",
      title: "The pH scale folds a hundred-trillion-fold range into fourteen units",
      introduction:
        "Hydronium concentrations in ordinary solutions run from about 1 mol dm⁻³ down to 10⁻¹⁴ mol dm⁻³. Plotted on a linear axis, everything weaker than stomach acid would collapse onto the baseline and become unreadable.",
      visual: "log_scale",
      caption:
        "Each step of one pH unit is a factor of ten in [H₃O⁺], so equal spacings represent equal multiplying factors, never equal differences. Lemon juice near pH 2.4 carries 100 000 times the hydronium concentration of blood at pH 7.4.",
    },
    {
      id: "aab-formal",
      type: "concept",
      eyebrow: "The formal treatment",
      title: "Water sets the reference, and Kw fixes what neutral means",
      paragraphs: [
        "Water is not inert. In any sample a small fraction of molecules transfers a proton to a neighbour: 2H₂O ⇌ H₃O⁺ + OH⁻. This autoionisation lies far to the left, but it is always present, and at equilibrium the product of the two ion concentrations is fixed. That product is the ionic product of water, Kw = [H₃O⁺][OH⁻], equal to 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 25 °C. In pure water the two ions are produced in equal numbers, so each is the square root of 1.0 × 10⁻¹⁴, that is 1.0 × 10⁻⁷ mol dm⁻³, and the pH is 7.00.",
        "Because the product is fixed, the two concentrations are locked together: raise one and the other must fall. Add acid until [H₃O⁺] = 1.0 × 10⁻³ mol dm⁻³ and [OH⁻] must be 1.0 × 10⁻¹¹ mol dm⁻³. Hydroxide never vanishes from an acidic solution; it is merely suppressed. Numbers this small are awkward, so we take negative logarithms: pH = −log₁₀[H₃O⁺] and pOH = −log₁₀[OH⁻]. Each concentration is divided by the standard value of 1 mol dm⁻³ first, which is why pH is a pure number. Taking −log₁₀ of the Kw expression turns the product into a sum: pH + pOH = 14.00 at 25 °C.",
        "Two cautions. First, Kw is an equilibrium constant, so it varies with temperature: at 37 °C it is about 2.4 × 10⁻¹⁴ mol² dm⁻⁶, neutral water has pH 6.81, and blood at pH 7.40 is genuinely alkaline relative to neutral at body temperature. Second, the scale is not confined between 0 and 14. A 2 mol dm⁻³ strong acid has a pH of about −0.30, and concentrated sodium hydroxide exceeds 14. The familiar range simply covers the dilute solutions ordinarily encountered.",
      ],
      callout:
        "Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 25 °C; pH = −log₁₀[H₃O⁺]",
    },
    {
      id: "aab-worked-strong",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find pH, pOH, and hydroxide for a strong acid",
      scenario:
        "Nitric acid, HNO₃, is a strong acid: in water it dissociates essentially completely. Calculate the pH, the pOH, and the hydroxide ion concentration of a 0.025 mol dm⁻³ solution of nitric acid at 25 °C.",
      steps: [
        {
          label: "Decide how much of the acid dissociates",
          decision:
            "Strong means the equilibrium lies so far to the right that dissociation is treated as complete, so every HNO₃ formula unit delivers one hydronium ion. No equilibrium constant is needed.",
          working:
            "HNO₃ + H₂O → H₃O⁺ + NO₃⁻, so [H₃O⁺] = 0.025 mol dm⁻³",
        },
        {
          label: "Take the negative logarithm",
          decision:
            "pH is defined directly from the hydronium concentration, and 0.025 is more usefully written as 2.5 × 10⁻².",
          working:
            "pH = −log₁₀(2.5 × 10⁻²) = −(0.398 − 2) = 1.60",
        },
        {
          label: "Use the sum rule to get pOH",
          decision:
            "At 25 °C the two logarithmic quantities must add to 14.00, which is quicker and less error-prone than a second logarithm.",
          working: "pOH = 14.00 − 1.60 = 12.40",
        },
        {
          label: "Recover the hydroxide concentration",
          decision:
            "Kw relates the two concentrations, so divide rather than assume hydroxide has been eliminated.",
          working:
            "[OH⁻] = (1.0 × 10⁻¹⁴) / 0.025 = 4.0 × 10⁻¹³ mol dm⁻³",
        },
      ],
      answer:
        "The solution has pH 1.60 and pOH 12.40, with [OH⁻] = 4.0 × 10⁻¹³ mol dm⁻³ — small, but not zero.",
      plausibility:
        "A concentration of 0.025 mol dm⁻³ lies between 10⁻² and 10⁻¹ mol dm⁻³, so the pH must fall between 1 and 2. As a cross-check, −log₁₀(4.0 × 10⁻¹³) = 12.40, matching the pOH found from the sum rule.",
    },
    {
      id: "aab-check-strong",
      type: "check",
      eyebrow: "Your turn",
      title: "Work from a strong base to a pH",
      prompt:
        "Sodium hydroxide is a strong base and dissociates completely. What is the pH of a 5.0 × 10⁻³ mol dm⁻³ solution of NaOH at 25 °C?",
      options: ["2.30", "3.00", "11.70", "12.30"],
      correctIndex: 2,
      explanation:
        "Complete dissociation gives [OH⁻] = 5.0 × 10⁻³ mol dm⁻³, so pOH = −log₁₀(5.0 × 10⁻³) = 2.30. Then pH = 14.00 − 2.30 = 11.70.",
      misconception:
        "Calculating pOH correctly and then reporting it as the pH. A hydroxide solution must be alkaline, so any answer below 7 has skipped the final subtraction; 3.00 comes from rounding 5.0 × 10⁻³ down to 10⁻³ and ignoring the sum rule as well.",
    },
    {
      id: "aab-weak",
      type: "concept",
      eyebrow: "Partial donation",
      title: "A weak acid reaches equilibrium long before it runs out of protons",
      paragraphs: [
        "Most acids do not dissociate completely. Ethanoic acid in water settles at a genuine equilibrium, CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻, with the great majority of molecules still intact. The position of that equilibrium is described by the acid dissociation constant, Ka = [H₃O⁺][A⁻] / [HA], where HA is the acid and A⁻ its conjugate base. Water is the solvent and present in vast excess, so its concentration is effectively constant and is absorbed into Ka rather than written. A larger Ka means the equilibrium sits further towards the ions, which means a stronger acid.",
        "To find the pH of a weak acid of formal concentration c, let x be the amount of hydronium formed per cubic decimetre. Each dissociation produces one H₃O⁺ and one A⁻, so [A⁻] = x and [HA] = c − x, giving Ka = x² / (c − x). If dissociation is slight then c − x ≈ c, and the expression collapses to x = √(Ka × c). The approximation is safe when x is below about 5 per cent of c, which holds whenever Ka is small and c is not tiny. Compute x first, then check that percentage — never the other way round.",
        "Comparing constants such as 1.8 × 10⁻⁵ and 6.3 × 10⁻⁵ mol dm⁻³ is unpleasant, so logarithms are taken again: pKa = −log₁₀Ka. Ethanoic acid has Ka = 1.8 × 10⁻⁵ mol dm⁻³ and therefore pKa 4.74. Because of the minus sign the ordering inverts, so the lower the pKa the stronger the acid, and a difference of one pKa unit is a factor of ten in Ka. Hydrochloric acid, fully dissociated in water, sits at a pKa around −7, far off the scale used for weak acids.",
      ],
      callout:
        "Ka = [H₃O⁺][A⁻] / [HA]; [H₃O⁺] ≈ √(Ka × c) when dissociation is under about 5 per cent",
    },
    {
      id: "aab-worked-weak",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the pH of a weak acid from its Ka",
      scenario:
        "Ethanoic acid has Ka = 1.8 × 10⁻⁵ mol dm⁻³ at 25 °C. Calculate the pH of a 0.10 mol dm⁻³ solution, and confirm that the usual approximation is justified.",
      steps: [
        {
          label: "Set out the equilibrium and name the unknown",
          decision:
            "Only one process generates hydronium here, and it produces the conjugate base in step with it, so a single unknown suffices.",
          working:
            "CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻; [H₃O⁺] = [CH₃COO⁻] = x and [CH₃COOH] = 0.10 − x",
        },
        {
          label: "Apply the small-x approximation",
          decision:
            "A Ka of order 10⁻⁵ against a concentration of 0.10 mol dm⁻³ suggests very little dissociation, so subtracting x from 0.10 will change almost nothing.",
          working:
            "1.8 × 10⁻⁵ = x² / (0.10 − x) ≈ x² / 0.10, so x² = 1.8 × 10⁻⁶",
        },
        {
          label: "Solve for the hydronium concentration",
          decision:
            "Take the positive root, since a concentration cannot be negative.",
          working:
            "x = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ mol dm⁻³",
        },
        {
          label: "Convert the concentration to a pH",
          decision:
            "The definition of pH applies unchanged; weakness has already been accounted for inside x.",
          working: "pH = −log₁₀(1.34 × 10⁻³) = 2.87",
        },
        {
          label: "Test whether the approximation was allowed",
          decision:
            "Only now, with x in hand, can the assumption that x is negligible against c be verified.",
          working:
            "(1.34 × 10⁻³) / 0.10 = 0.013, that is 1.3 per cent, comfortably under 5 per cent",
        },
      ],
      answer:
        "The solution has pH 2.87, and only about 1.3 per cent of the ethanoic acid has dissociated.",
      plausibility:
        "A 0.10 mol dm⁻³ strong acid would have pH 1.00. A weak acid at the same concentration must be less acidic than that but far more acidic than water, so a value between 1 and 7, and nearer the acidic end, is exactly right.",
    },
    {
      id: "aab-check-pka",
      type: "check",
      eyebrow: "Compare strengths",
      title: "Put pKa and Ka into the same currency",
      prompt:
        "Acid X has pKa 3.20. Acid Y has Ka = 6.3 × 10⁻⁵ mol dm⁻³. Which is the stronger acid, and by roughly what factor in Ka?",
      options: [
        "X, whose Ka of about 6.3 × 10⁻⁴ mol dm⁻³ is ten times that of Y",
        "Y, whose Ka of 6.3 × 10⁻⁵ mol dm⁻³ is ten times that of X",
        "X, whose Ka is about a thousand times that of Y",
        "Y, because a constant written as a power of ten always indicates more dissociation than one written as a pKa",
      ],
      correctIndex: 0,
      explanation:
        "Convert to a common currency: pKa(Y) = −log₁₀(6.3 × 10⁻⁵) = 4.20. X, at pKa 3.20, is one unit lower and therefore stronger. One pKa unit is a factor of ten in Ka, and indeed Ka(X) = 6.3 × 10⁻⁴ mol dm⁻³.",
      misconception:
        "Reading pKa as though a larger value meant a stronger acid. The negative logarithm inverts the ordering, so lower pKa means stronger acid and a one-unit gap is tenfold, not thousandfold.",
    },
    {
      id: "aab-conjugate",
      type: "concept",
      eyebrow: "The other side",
      title: "Strong acid, feeble conjugate base — and one proton at a time",
      paragraphs: [
        "If an acid surrenders its proton eagerly, its conjugate base has little appetite to take one back. The relationship is exact: for any conjugate pair, Ka × Kb = Kw, so pKa + pKb = 14.00 at 25 °C. Hydrochloric acid is fully dissociated, and its conjugate base Cl⁻ is correspondingly feeble, with a Kb of order 10⁻²¹ mol dm⁻³, so a chloride solution is neutral. Ethanoic acid is weak, so ethanoate is a base of measurable strength: Kb = (1.0 × 10⁻¹⁴) / (1.8 × 10⁻⁵) = 5.6 × 10⁻¹⁰ mol dm⁻³.",
        "The same reasoning explains the levelling effect. Any acid stronger than H₃O⁺ transfers its proton to water completely, so in aqueous solution all such acids appear equally strong; water levels them, and telling them apart requires a less basic solvent. The practical consequence is the one used in calculations: for a strong acid the pH follows directly from the concentration with no equilibrium constant involved, whereas for a weak acid the concentration alone is never enough and Ka must be supplied.",
        "Some acids carry more than one removable proton. Phosphoric acid loses them in sequence, with pKa₁ = 2.15, pKa₂ = 7.20 and pKa₃ = 12.35, and carbonic acid has pKa₁ = 6.35 and pKa₂ = 10.33. Each successive proton is harder to remove because it must leave behind an anion that is already more negatively charged, so each Ka is several orders of magnitude smaller than the one before. Where the steps are well separated, only one equilibrium matters at any given pH, and the acid can be treated as a series of independent monoprotic ones.",
      ],
      callout:
        "Ka × Kb = Kw for a conjugate pair, so pKa + pKb = 14.00 at 25 °C",
    },
    {
      id: "aab-check-conjugate",
      type: "check",
      eyebrow: "Salt solutions",
      title: "Explain why one salt is neutral and another is not",
      prompt:
        "Equimolar solutions of sodium chloride and sodium ethanoate are prepared at 25 °C. The chloride solution has pH 7.0; the ethanoate solution has pH 8.9. What accounts for the difference?",
      options: [
        "Sodium ethanoate supplies more sodium ions, and sodium ions are basic",
        "Chloride reacts with water to form hydrochloric acid, which happens to cancel the hydroxide produced",
        "Ethanoate is the conjugate base of a strong acid, which makes it a strong base",
        "Ethanoate is the conjugate base of a weak acid, so it accepts protons from water and generates OH⁻, whereas chloride, the conjugate base of a strong acid, has negligible affinity for protons",
      ],
      correctIndex: 3,
      explanation:
        "CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ has Kb = 5.6 × 10⁻¹⁰ mol dm⁻³ — small but non-zero — so hydroxide accumulates and the pH rises above 7. For Cl⁻ the corresponding Kb is around 10⁻²¹ mol dm⁻³, so no measurable reaction occurs and the solution stays neutral.",
      misconception:
        "Assuming strength carries across to the conjugate. It runs the other way: the stronger the acid, the weaker its conjugate base, because Ka × Kb is pinned at Kw.",
    },
    {
      id: "aab-check-ratio",
      type: "check",
      eyebrow: "Read the scale",
      title: "Turn a pH difference into a concentration ratio",
      prompt:
        "Solution P has pH 2.4 and solution Q has pH 5.4. How does the hydronium ion concentration in P compare with that in Q?",
      options: [
        "It is 3 times larger",
        "It is 30 times larger",
        "It is 1000 times larger",
        "It is 1000 times smaller",
      ],
      correctIndex: 2,
      explanation:
        "The gap is 3.0 pH units and each unit is a factor of ten, so the ratio is 10³ = 1000. The lower pH belongs to the higher concentration: P holds about 4.0 × 10⁻³ mol dm⁻³ of H₃O⁺ against about 4.0 × 10⁻⁶ mol dm⁻³ in Q.",
      misconception:
        "Subtracting the pH values and quoting the difference as the answer, as though the scale were linear. A three-unit gap is a thousandfold ratio, not a threefold one.",
    },
    {
      id: "aab-check-blood",
      type: "check",
      eyebrow: "Apply it",
      title: "Judge how large a small pH change really is",
      prompt:
        "In a patient with severe respiratory failure, arterial blood pH falls from 7.40 to 7.10. What happens to the hydronium ion concentration?",
      options: [
        "It falls to about half its previous value",
        "It rises by about 4 per cent",
        "It rises by a factor of about 2",
        "It rises by a factor of about 300",
      ],
      correctIndex: 2,
      explanation:
        "A fall in pH is a rise in [H₃O⁺]. The change is 0.30 pH units, and ten raised to the power 0.30 is 2.0, so the concentration doubles — from about 4.0 × 10⁻⁸ mol dm⁻³ to about 7.9 × 10⁻⁸ mol dm⁻³.",
      misconception:
        "Treating a pH change as a percentage change in concentration: 0.30 out of 7.40 looks like a 4 per cent shift, which badly understates a doubling. This is exactly why a clinically narrow pH range is a physiologically enormous one.",
    },
    {
      id: "aab-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Proton transfer, made quantitative by logarithms",
      points: [
        "An acid donates a proton and a base accepts one, and every proton transfer contains two conjugate pairs.",
        "Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 25 °C, so the two ion concentrations are permanently locked together.",
        "pH = −log₁₀[H₃O⁺] and pOH = −log₁₀[OH⁻], and the two add to 14.00 at 25 °C.",
        "For a strong acid the hydronium concentration equals the acid concentration; for a weak acid use [H₃O⁺] ≈ √(Ka × c) and then verify that dissociation is under about 5 per cent.",
        "A lower pKa marks a stronger acid, and the stronger the acid the weaker its conjugate base, since Ka × Kb = Kw.",
        "One pH unit is a factor of ten in concentration, so pH differences must be read as ratios.",
      ],
      transferRule:
        "Whenever a quantity arrives on a logarithmic scale, convert differences into ratios before reasoning about them.",
      nextLessonId: "lesson.chemistry.buffers_titration",
    },
  ],
};

const buffersTitration: Lesson = {
  id: "lesson.chemistry.buffers_titration",
  slug: "buffers-and-titration-curves",
  number: "5.2",
  stageId: "stage.chemistry_aqueous",
  discipline: "chemistry",
  title: "Buffers and titration curves",
  summary:
    "Explain how a weak acid and its conjugate base hold pH almost constant, quantify the effect with the Henderson-Hasselbalch equation, and read the whole story off a titration curve.",
  estimatedMinutes: 34,
  reviewStatus: "unreviewed",
  objectives: [
    "Explain the mechanism by which a conjugate pair absorbs added acid or base.",
    "Derive the Henderson-Hasselbalch equation from the acid dissociation constant.",
    "Calculate the composition needed to prepare a buffer at a stated pH.",
    "Predict the pH change when a strong acid is added to a buffered solution.",
    "Distinguish strong-acid and weak-acid titration curves and locate pKa and the equivalence point on them.",
    "Select an indicator by matching its transition range to the equivalence pH.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.acids_bases"],
  blocks: [
    {
      id: "buf-purpose",
      type: "concept",
      eyebrow: "Why pH holds still",
      title: "A buffer keeps both a proton sink and a proton source in stock",
      paragraphs: [
        "Add a drop of strong acid to pure water and the pH plunges. Add the same drop to blood, to seawater, or to a bacterial growth medium and almost nothing happens. The difference is a buffer: a solution containing appreciable amounts of a weak acid HA and its conjugate base A⁻ at the same time. Neither component alone would do. A weak acid on its own has almost no A⁻ to mop up added acid; its salt on its own has almost no HA to mop up added base. Holding both in reserve is the whole trick.",
        "The mechanism is two ordinary neutralisation reactions, each essentially complete. Added hydronium meets the conjugate base and is converted into the weak acid: A⁻ + H₃O⁺ → HA + H₂O. Added hydroxide meets the weak acid and is converted into the conjugate base: HA + OH⁻ → A⁻ + H₂O. In both cases a strong acid or strong base — something that would change the pH violently — is exchanged for a weak one that barely does. The insult is not removed from the solution; it is converted into a milder form.",
        "Resisting change is not the same as preventing it. Every addition does shift the pH, but by hundredths of a unit rather than whole units, and only while stocks last. Once nearly all the A⁻ has been consumed there is nothing left to convert the next portion of acid, and the pH falls away sharply. A buffer therefore has both a working pH and a finite capacity, and the two are set by different things.",
      ],
      callout:
        "A⁻ + H₃O⁺ → HA + H₂O and HA + OH⁻ → A⁻ + H₂O",
    },
    {
      id: "buf-visual-reservoir",
      type: "visual",
      eyebrow: "Two connected stores",
      title: "The pH is set by the level in one reservoir relative to the other",
      introduction:
        "Picture two connected reservoirs — undissociated acid HA on one side, conjugate base A⁻ on the other — with the dissociation equilibrium as the channel between them.",
      visual: "equilibrium",
      caption:
        "Adding H₃O⁺ transfers material from the A⁻ store to the HA store, and adding OH⁻ moves it back. Because the pH depends on the ratio of the two levels rather than on either alone, a small transfer between two well-stocked reservoirs barely moves it.",
    },
    {
      id: "buf-hh",
      type: "concept",
      eyebrow: "Derive, do not memorise",
      title: "The Henderson-Hasselbalch equation is Ka rearranged and logged",
      paragraphs: [
        "This is not a new law. Start from the acid dissociation constant, Ka = [H₃O⁺][A⁻] / [HA], and make the hydronium concentration the subject by multiplying both sides by [HA] / [A⁻]. That gives [H₃O⁺] = Ka × [HA] / [A⁻]. Read the result as it stands, before any logarithms: the hydronium concentration equals the acid's intrinsic constant multiplied by the ratio of the two members of the conjugate pair. No absolute concentration appears anywhere in it — only their ratio.",
        "Now take −log₁₀ of both sides. A product becomes a sum, and inverting a ratio flips the sign of its logarithm, so −log₁₀[H₃O⁺] = −log₁₀Ka − log₁₀([HA] / [A⁻]) becomes pH = pKa + log₁₀([A⁻] / [HA]). Strictly the concentrations in Ka are equilibrium values, but in a buffer the added conjugate base suppresses dissociation so heavily that the prepared, formal concentrations are excellent substitutes. That substitution fails only when the buffer is very dilute or the ratio is extreme.",
        "Three consequences follow at once. When [A⁻] = [HA] the logarithm is zero and pH = pKa exactly. A tenfold excess of conjugate base raises the pH by one unit; a tenfold excess of acid lowers it by one. And because only the ratio matters, diluting a buffer with pure water changes its pH hardly at all, even though both concentrations fall — a result that startles most people the first time they meet it.",
      ],
      callout: "pH = pKa + log₁₀([A⁻] / [HA])",
    },
    {
      id: "buf-worked-prep",
      type: "worked",
      eyebrow: "Worked example",
      title: "Prepare a buffer at a specified pH",
      scenario:
        "You need 1.00 dm³ of buffer at pH 4.90. You have 1.00 dm³ of 0.100 mol dm⁻³ ethanoic acid, pKa 4.74, and solid sodium ethanoate of molar mass 82.03 g mol⁻¹. What mass of the salt should be dissolved in it? Assume the solid does not change the volume.",
      steps: [
        {
          label: "Confirm the acid is a sensible choice",
          decision:
            "A conjugate pair only buffers usefully within about one unit of its pKa, so check the target before calculating anything.",
          working:
            "|4.90 − 4.74| = 0.16, well inside the ±1 working range",
        },
        {
          label: "Solve the Henderson-Hasselbalch equation for the ratio",
          decision:
            "The unknown amount of conjugate base enters the equation only through the ratio, so isolate that first.",
          working:
            "4.90 = 4.74 + log₁₀([A⁻] / [HA]), so log₁₀([A⁻] / [HA]) = 0.16",
        },
        {
          label: "Undo the logarithm and find the concentration",
          decision:
            "Raising ten to the power of each side converts the logarithmic statement back into a ratio of concentrations.",
          working:
            "[A⁻] / [HA] = 1.45, so [A⁻] = 1.45 × 0.100 = 0.145 mol dm⁻³",
        },
        {
          label: "Convert amount to a weighable mass",
          decision:
            "The balance measures grams, so multiply the required chemical amount by the molar mass.",
          working:
            "n = 0.145 mol dm⁻³ × 1.00 dm³ = 0.145 mol; m = 0.145 mol × 82.03 g mol⁻¹ = 11.9 g",
        },
      ],
      answer:
        "Dissolving 11.9 g of sodium ethanoate in the litre of 0.100 mol dm⁻³ ethanoic acid gives a buffer at pH 4.90.",
      plausibility:
        "The target pH sits slightly above the pKa, so the conjugate base must slightly exceed the acid — a ratio near 1.45, not 10 or 0.1. Had the target been 4.74 exactly, the required amount would have been 0.100 mol, that is 8.2 g, and 11.9 g is sensibly a little more.",
    },
    {
      id: "buf-check-ratio",
      type: "check",
      eyebrow: "Your turn",
      title: "Get the ratio the right way up",
      prompt:
        "A buffer contains 0.20 mol dm⁻³ propanoic acid (pKa 4.87) and 0.020 mol dm⁻³ sodium propanoate. What is its pH?",
      options: ["3.87", "4.87", "5.87", "6.87"],
      correctIndex: 0,
      explanation:
        "[A⁻] / [HA] = 0.020 / 0.20 = 0.10, and log₁₀(0.10) = −1.00, so pH = 4.87 − 1.00 = 3.87. There is ten times as much acid as conjugate base, so the pH lies one unit below the pKa.",
      misconception:
        "Writing the ratio upside down. The conjugate base belongs in the numerator; putting the acid there returns 5.87 and predicts that an acid-rich buffer is less acidic than an equimolar one, which cannot be right.",
    },
    {
      id: "buf-range",
      type: "concept",
      eyebrow: "Where and how much",
      title: "The pKa sets where a buffer works; concentration sets how hard",
      paragraphs: [
        "Buffering is strongest when [A⁻] = [HA], that is at pH = pKa. The reason is geometric. Transferring a fixed amount from one store to the other changes their ratio least when the two stores are equal: moving 0.010 mol between two 0.100 mol pools takes the ratio from 1.00 to 0.82, but moving the same 0.010 mol when the base pool holds only 0.015 mol nearly wipes it out. Push the ratio beyond 10:1 in either direction and the minor component is too depleted to absorb much, which is why the useful working range is taken as pKa ± 1.",
        "Capacity is a separate question from position. Buffer capacity is usually defined as the amount of strong acid or base, per cubic decimetre, needed to shift the pH by one unit, and it is proportional to the total concentration of the conjugate pair. Two buffers made at the same ratio have the same pH however dilute they are, but the concentrated one will absorb a hundred times the insult before failing. Position depends on the ratio; capacity depends on the absolute stock.",
        "Choosing a buffer is therefore a two-part decision: pick a conjugate pair whose pKa lies near the pH you must hold, then make it concentrated enough for the load you expect. To hold pH 7.20 in a laboratory experiment, dihydrogenphosphate and hydrogenphosphate are the obvious pair, since the second dissociation of phosphoric acid has pKa 7.20; ethanoic acid, at pKa 4.74, would be almost entirely in its basic form there and would have essentially no acid reserve left.",
      ],
      callout:
        "Useful buffer range ≈ pKa ± 1, corresponding to ratios from 1:10 to 10:1",
    },
    {
      id: "buf-worked-addacid",
      type: "worked",
      eyebrow: "Worked example",
      title: "Compare a buffered and an unbuffered insult",
      scenario:
        "One cubic decimetre of buffer contains 0.100 mol of ethanoic acid and 0.100 mol of sodium ethanoate, pKa 4.74. Then 0.010 mol of hydrogen chloride is dissolved in it, with no change in volume. Find the pH before and after, and compare with adding the same amount of acid to 1.00 dm³ of pure water at pH 7.00.",
      steps: [
        {
          label: "Find the starting pH",
          decision:
            "The pair is equimolar, so the logarithmic term vanishes and the pH is the pKa itself.",
          working: "pH = 4.74 + log₁₀(0.100 / 0.100) = 4.74 + 0 = 4.74",
        },
        {
          label: "Let the added strong acid react to completion",
          decision:
            "H₃O⁺ is a far stronger acid than ethanoic acid, so the ethanoate present takes it up essentially quantitatively. This step is stoichiometry, not equilibrium.",
          working:
            "CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O; n(A⁻) = 0.100 − 0.010 = 0.090 mol and n(HA) = 0.100 + 0.010 = 0.110 mol",
        },
        {
          label: "Recompute the pH from the new ratio",
          decision:
            "Both species share one volume, so their amounts can be substituted directly in place of concentrations — the volume cancels inside the ratio.",
          working:
            "pH = 4.74 + log₁₀(0.090 / 0.110) = 4.74 − 0.09 = 4.65",
        },
        {
          label: "Repeat the addition without a buffer",
          decision:
            "In pure water the strong acid dissociates completely and nothing converts it to a weaker form.",
          working:
            "[H₃O⁺] = 0.010 mol dm⁻³, so pH = −log₁₀(0.010) = 2.00",
        },
      ],
      answer:
        "The buffered solution moves from pH 4.74 to pH 4.65, a change of 0.09 units, while unbuffered water crashes from 7.00 to 2.00, a change of five units.",
      plausibility:
        "The addition consumed one tenth of the ethanoate reserve and added the same amount to the acid, so the ratio changed only from 1.00 to 0.82 — under 20 per cent — and taking a logarithm shrinks even that into hundredths of a pH unit.",
    },
    {
      id: "buf-check-capacity",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Separate the pH a buffer holds from the load it can take",
      prompt:
        "Buffer A contains 0.0050 mol dm⁻³ ethanoic acid and 0.0050 mol dm⁻³ sodium ethanoate. Buffer B contains 0.50 mol dm⁻³ of each. Both have pH 4.74. Which resists a given addition of strong acid better, and why?",
      options: [
        "Buffer A, because a more dilute equilibrium responds more readily and absorbs the disturbance",
        "Buffer B, because its higher concentration raises its pH further above the pKa",
        "Neither, because they have the same pH and therefore the same resistance to change",
        "Buffer B, because it holds a hundred times more of both species, so the same added amount alters the ratio far less",
      ],
      correctIndex: 3,
      explanation:
        "Both start at a 1:1 ratio, so both start at pH 4.74 — the ratio sets the pH. Capacity, however, depends on absolute amounts. Adding 0.0010 mol dm⁻³ of strong acid takes A to a ratio of 0.0040/0.0060 and a pH of 4.56, but takes B only to 0.499/0.501, still pH 4.74 to two decimal places.",
      misconception:
        "Confusing the pH a buffer holds with the amount of insult it can absorb. Concentration does not set the pH at all, but it sets the capacity almost entirely.",
    },
    {
      id: "buf-curve",
      type: "concept",
      eyebrow: "Anatomy of a curve",
      title: "A titration curve is a map of which species is in charge",
      paragraphs: [
        "Titrate a strong acid with a strong base and the curve is nearly flat, then almost vertical, then flat again. The flat regions are logarithmic compression: while plenty of unreacted acid remains, neutralising a further portion changes [H₃O⁺] by a factor too small to see. Near the equivalence point — where the added base exactly matches the acid originally present — the remaining acid is nearly exhausted, so each further drop changes the concentration by a large factor and the pH leaps several units. For a strong acid with a strong base the resulting solution is a solution of a neutral salt, so the equivalence point sits at pH 7.00.",
        "Titrate a weak acid instead and three features change. The curve starts higher, because a weak acid is only partly dissociated. It then develops a genuine plateau, because the base being added is converting HA into A⁻ and manufacturing a buffer in the flask. Exactly halfway to equivalence, half the acid has been converted, so [HA] = [A⁻] and the Henderson-Hasselbalch logarithm is zero: the pH at half-equivalence is the pKa, read straight off the vertical axis. The vertical jump at equivalence is also shorter, because the buffer region has eaten into it from below.",
        "The equivalence point of a weak acid with a strong base is not at pH 7. At that moment the flask contains a solution of A⁻ and nothing else of consequence, and A⁻ is a base. For 0.100 mol dm⁻³ ethanoic acid neutralised by 0.100 mol dm⁻³ sodium hydroxide, the ethanoate is diluted to 0.0500 mol dm⁻³ and its Kb of 5.6 × 10⁻¹⁰ mol dm⁻³ gives [OH⁻] = 5.3 × 10⁻⁶ mol dm⁻³, pOH 5.28, pH 8.72. An indicator must therefore be chosen to change colour inside the steep section that actually occurs, not at the pH 7 people expect.",
      ],
      callout: "At half-equivalence [HA] = [A⁻], so pH = pKa",
    },
    {
      id: "buf-visual-titration",
      type: "visual",
      eyebrow: "Two curves, one axis",
      title: "The buffer plateau is visible as a flat stretch before the jump",
      introduction:
        "Put both titrations on the same axes: pH on the vertical axis against the volume of 0.100 mol dm⁻³ sodium hydroxide added to 25.0 cm³ of 0.100 mol dm⁻³ acid, strong in one case and weak in the other.",
      visual: "titration",
      caption:
        "Both reach equivalence at 25.0 cm³, because equivalence depends on amounts, not on strength. Only the weak acid shows a flat buffer plateau centred on the half-equivalence point at 12.5 cm³, where the pH equals the pKa, and only the weak acid has its equivalence point above pH 7.",
    },
    {
      id: "buf-check-indicator",
      type: "check",
      eyebrow: "Read the representation",
      title: "Match an indicator to the equivalence pH",
      prompt:
        "The titration of 0.100 mol dm⁻³ ethanoic acid with 0.100 mol dm⁻³ sodium hydroxide has its equivalence point at pH 8.7. Four indicators are available: methyl orange (transition 3.1 to 4.4), bromocresol green (3.8 to 5.4), methyl red (4.4 to 6.2) and phenolphthalein (8.3 to 10.0). Which should be used?",
      options: [
        "Methyl orange",
        "Bromocresol green",
        "Methyl red",
        "Phenolphthalein",
      ],
      correctIndex: 3,
      explanation:
        "The indicator must change colour within the near-vertical section of the curve, which brackets the equivalence pH of 8.7. Only phenolphthalein, changing between 8.3 and 10.0, does so. Each of the others would change colour partway up the buffer plateau, signalling an end point long before the acid had been neutralised.",
      misconception:
        "Assuming every titration finishes at pH 7 and choosing an indicator centred there. With a weak acid and a strong base the equivalence point is alkaline, so an indicator chosen for neutrality reports the end point too early and the titre comes out low.",
    },
    {
      id: "buf-check-blood",
      type: "check",
      eyebrow: "Apply it",
      title: "Predict a blood pH from a carbon dioxide load",
      prompt:
        "Blood is buffered by CO₂ + 2H₂O ⇌ H₃O⁺ + HCO₃⁻, and its pH follows pH = 6.10 + log₁₀([HCO₃⁻] / (0.0301 × pCO₂)), with [HCO₃⁻] in mmol dm⁻³ and pCO₂ in mmHg. Normally [HCO₃⁻] = 24 mmol dm⁻³ and pCO₂ = 40 mmHg, giving pH 7.40. A patient hypoventilates and pCO₂ rises to 60 mmHg before the kidneys can respond, so [HCO₃⁻] is still 24 mmol dm⁻³. What is the pH?",
      options: ["5.70", "7.22", "7.40", "7.58"],
      correctIndex: 1,
      explanation:
        "The denominator becomes 0.0301 × 60 = 1.81 mmol dm⁻³, so the ratio falls from 19.9 to 13.3. Since log₁₀(13.3) = 1.12, the pH is 6.10 + 1.12 = 7.22 — a respiratory acidosis. Note that the buffer did not hold the pH fixed; it limited how far it fell.",
      misconception:
        "Believing a buffer pins pH at its set point regardless of the load, which gives the unchanged 7.40. Multiplying the ratio by 60/40 instead of dividing gives 7.58 and has the pH moving the wrong way; dropping the solubility factor 0.0301 gives 5.70.",
    },
    {
      id: "buf-check-halfeq",
      type: "check",
      eyebrow: "Extract a constant",
      title: "Read a pKa off a described titration curve",
      prompt:
        "A 25.0 cm³ sample of an unknown weak monoprotic acid is titrated with 0.100 mol dm⁻³ sodium hydroxide. The pH rises gently at first and the steep rise is centred on 20.0 cm³ of added base. The pH recorded after 10.0 cm³ had been added was 4.20. What is the pKa of the acid?",
      options: ["2.10", "4.20", "7.00", "8.40"],
      correctIndex: 1,
      explanation:
        "10.0 cm³ is exactly half the equivalence volume of 20.0 cm³, so half the acid has been converted and [HA] = [A⁻]. The logarithmic term in pH = pKa + log₁₀([A⁻] / [HA]) is then zero, so the measured pH is the pKa directly: 4.20.",
      misconception:
        "Looking for the pKa at the equivalence point instead of the half-equivalence point. The equivalence pH depends on the concentration and on Kb as well as on the acid's strength; only the half-equivalence pH equals the pKa outright.",
    },
    {
      id: "buf-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Ratio sets the pH, stock sets the staying power",
      points: [
        "A buffer is a weak acid together with its conjugate base, holding a proton acceptor and a proton donor in reserve simultaneously.",
        "pH = pKa + log₁₀([A⁻] / [HA]) is the Ka expression rearranged and logged, not a separate law to memorise.",
        "Buffering is strongest at pH = pKa and useful over roughly pKa ± 1, where the ratio runs between 1:10 and 10:1.",
        "The pH of a buffer is set by the ratio of the pair; its capacity is set by their absolute concentrations.",
        "At half-equivalence in a titration the pH equals the pKa, and the equivalence point of a weak acid with a strong base lies above pH 7.",
        "An indicator is chosen so its transition range falls inside the steep section around the equivalence point.",
      ],
      transferRule:
        "When a system resists change, look for a pair of interconvertible stores and ask what ratio, rather than what quantity, fixes the observed variable.",
      nextLessonId: "lesson.chemistry.redox",
    },
  ],
};

const redox: Lesson = {
  id: "lesson.chemistry.redox",
  slug: "redox-and-electrochemical-cells",
  number: "5.3",
  stageId: "stage.chemistry_aqueous",
  discipline: "chemistry",
  title: "Oxidation, reduction, and electrochemical cells",
  summary:
    "Track electrons through oxidation numbers and half-equations, then separate the transfer into two electrodes so that a measured potential difference reports the reaction's tendency to proceed.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Assign oxidation numbers using a fixed set of rules.",
    "Identify the oxidising and reducing agents in a redox equation.",
    "Balance a redox equation in acidic solution using half-equations.",
    "Describe a galvanic cell in terms of anode, cathode, salt bridge, and cell notation.",
    "Calculate a standard cell potential and relate its sign to spontaneity through ΔG° = −nFE°.",
    "Apply the potential ladder to predict the direction of biological electron transfer.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.acids_bases"],
  blocks: [
    {
      id: "rdx-purpose",
      type: "concept",
      eyebrow: "One transfer, two halves",
      title: "Oxidation and reduction are two views of a single electron transfer",
      paragraphs: [
        "The oldest meaning of oxidation was combination with oxygen, and of reduction the removal of oxygen from an ore. Both turned out to be special cases of something more general. Oxidation is loss of electrons and reduction is gain of electrons. Defined this way the two are inseparable: electrons do not evaporate, so if one species loses them another must be gaining them in the same act. Any equation showing one without the other is incomplete, which is why these processes are always described together as redox.",
        "Drop a strip of zinc metal into copper(II) sulfate solution and the zinc dissolves while a rust-coloured film of copper appears on it: Zn + Cu²⁺ → Zn²⁺ + Cu. Zinc atoms have lost two electrons each and copper ions have gained two each, at the point of contact, and the released energy simply warms the beaker. Nothing about that reaction requires the two halves to happen in the same place — only that the electrons get from one to the other. That single observation is the basis of every battery.",
        "The naming trips people up, so fix it now by asking what the species does to its partner. The oxidising agent oxidises something else, which it can only do by taking electrons, so the oxidising agent is itself reduced. The reducing agent gives electrons away and is itself oxidised. In the zinc and copper reaction, Cu²⁺ is the oxidising agent and zinc metal is the reducing agent.",
      ],
      callout:
        "Oxidation is loss of electrons; reduction is gain; the two always occur together",
    },
    {
      id: "rdx-visual-cell",
      type: "visual",
      eyebrow: "Make the electrons travel",
      title: "Separating the halves forces the electrons through a wire",
      introduction:
        "In the beaker, electrons jump straight from zinc atom to copper ion at the metal surface and nothing useful is captured. Now put the two half-reactions in separate compartments joined by a wire and a salt bridge.",
      visual: "electrochemical",
      caption:
        "The same electron transfer must now travel the external circuit, where it can be measured as a current or made to do work. The salt bridge carries ions, never electrons, and exists solely to keep each compartment electrically neutral as charge builds up.",
    },
    {
      id: "rdx-oxnum",
      type: "concept",
      eyebrow: "Bookkeeping device",
      title: "Oxidation numbers make electron movement visible in a formula",
      paragraphs: [
        "In Zn + Cu²⁺ the electron transfer is obvious because ions carry visible charges. In most reactions it is not: nothing in CH₄ becoming CO₂ shouts that carbon has been oxidised. The oxidation number solves this. It is the charge an atom would carry if every bond in the species were fully ionic, with each shared pair awarded outright to the more electronegative partner. It is a bookkeeping fiction, not a real charge, and it is useful precisely because a change in it identifies the atom whose electron density has shifted.",
        "The rules are applied in order of priority. An atom of an uncombined element is 0. A monatomic ion takes its own charge. Fluorine is always −1. Oxygen is −2, except in peroxides where it is −1 and in compounds with fluorine where it is positive. Hydrogen is +1 when bonded to non-metals and −1 in metal hydrides. Group 1 metals are +1 and group 2 metals are +2 in their compounds. Finally, and this is the rule that does the real work, the oxidation numbers in a species sum to its overall charge — zero for a neutral formula, and the ionic charge for a polyatomic ion.",
        "With numbers assigned, an equation can be read at a glance. Any element whose oxidation number rises has been oxidised, and so belongs to the reducing agent; any element whose number falls has been reduced, and belongs to the oxidising agent. The size of the change also tells you how many electrons each atom transferred, which is exactly what is needed to balance the equation later.",
      ],
      callout: "The oxidation numbers in a species sum to its overall charge",
    },
    {
      id: "rdx-worked-oxnum",
      type: "worked",
      eyebrow: "Worked example",
      title: "Assign oxidation numbers to real species",
      scenario:
        "Find the oxidation number of manganese in MnO₄⁻, of sulfur in SO₄²⁻, of oxygen in H₂O₂, and the average for carbon in glucose, C₆H₁₂O₆.",
      steps: [
        {
          label: "Manganese in the permanganate ion",
          decision:
            "Oxygen takes its usual value of −2, and the four oxygens together with manganese must sum to the ion's charge of −1.",
          working: "x + 4(−2) = −1, so x = −1 + 8 = +7",
        },
        {
          label: "Sulfur in the sulfate ion",
          decision:
            "The same rule applies, but the total is now the ion's charge of −2 rather than −1.",
          working: "y + 4(−2) = −2, so y = −2 + 8 = +6",
        },
        {
          label: "Oxygen in hydrogen peroxide",
          decision:
            "Hydrogen bonded to a non-metal is +1 and the molecule is neutral. Since the two rules cannot both hold with oxygen at −2, this must be the peroxide exception.",
          working: "2(+1) + 2z = 0, so z = −1",
        },
        {
          label: "Average carbon in glucose",
          decision:
            "Hydrogen is +1, oxygen is −2, and the molecule is neutral. The result is an average, because the six carbons are not in identical environments.",
          working: "6w + 12(+1) + 6(−2) = 0, so 6w = 0 and w = 0",
        },
      ],
      answer:
        "Manganese is +7 in MnO₄⁻, sulfur is +6 in SO₄²⁻, oxygen is −1 in H₂O₂, and the average oxidation number of carbon in glucose is 0.",
      plausibility:
        "Manganese at +7 is the highest it can reach, matching permanganate's reputation as a powerful oxidising agent. Glucose carbon at an average of 0 sits neatly between methane at −4 and carbon dioxide at +4, which is why oxidising glucose to CO₂ releases so much energy.",
    },
    {
      id: "rdx-check-oxnum",
      type: "check",
      eyebrow: "Your turn",
      title: "Apply the summing rule to an anion",
      prompt:
        "What is the oxidation number of nitrogen in the nitrate ion, NO₃⁻?",
      options: ["−3", "+3", "+5", "+6"],
      correctIndex: 2,
      explanation:
        "Each oxygen is −2, contributing −6 in total. The oxidation numbers must sum to the ion's charge of −1, so nitrogen is −1 − (−6) = +5.",
      misconception:
        "Setting the sum to zero rather than to the ion's charge, which returns +6. The sum equals the overall charge, and for a polyatomic anion that is not zero. The value −3 is nitrogen in ammonia, at the opposite end of its range.",
    },
    {
      id: "rdx-halfeq",
      type: "concept",
      eyebrow: "Balance in halves",
      title: "Half-equations let you balance atoms, charge, and electrons separately",
      paragraphs: [
        "A redox equation with water and acid in it is nearly impossible to balance by inspection. Splitting it into two half-equations makes it routine, because each half is small and each has an explicit electron count. Write the reduction half and the oxidation half separately, from the oxidation numbers you have already assigned, then balance each one and recombine them so the electrons cancel exactly.",
        "In acidic aqueous solution the procedure has a fixed order. Balance the element being oxidised or reduced first. Then balance oxygen by adding H₂O to the side that needs it, which is legitimate because water is the solvent and is present in unlimited supply. Then balance hydrogen by adding H⁺, which the acidic conditions likewise supply. Only then balance the charge by adding electrons to the more positive side. Finally, multiply the two halves so that the electrons lost equal the electrons gained, and add. In alkaline solution the same recipe is used and OH⁻ is added at the end to neutralise the H⁺.",
        "Two checks must both pass before an answer is accepted. Every element must appear in equal numbers on the two sides, and the total charge must be identical on the two sides — not zero, simply equal. The charge check is the one most often skipped and the one that catches most errors, because a miscounted electron changes the charge without disturbing any atom count.",
      ],
      callout:
        "Balance the key element, then oxygen with H₂O, then hydrogen with H⁺, then charge with electrons",
    },
    {
      id: "rdx-worked-balance",
      type: "worked",
      eyebrow: "Worked example",
      title: "Balance permanganate and iron(II) in acidic solution",
      scenario:
        "Acidified potassium permanganate oxidises iron(II) to iron(III), and the manganese ends up as Mn²⁺. Construct the fully balanced ionic equation for the reaction in acidic solution.",
      steps: [
        {
          label: "Write the two unbalanced halves",
          decision:
            "Isolating the species whose oxidation numbers change lets each half be balanced independently.",
          working:
            "MnO₄⁻ → Mn²⁺ is reduction, with Mn falling from +7 to +2; Fe²⁺ → Fe³⁺ is oxidation",
        },
        {
          label: "Balance the reduction half completely",
          decision:
            "Four oxygens leave as four water molecules, the hydrogen for that water comes from the acid, and electrons then settle the charge.",
          working:
            "MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O gives charge −1 + 8 = +7 on the left against +2 on the right, so add 5e⁻ to the left: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
        },
        {
          label: "Balance the oxidation half",
          decision:
            "Each iron rises by one in oxidation number, so each releases exactly one electron.",
          working: "Fe²⁺ → Fe³⁺ + e⁻",
        },
        {
          label: "Scale the halves so the electrons cancel",
          decision:
            "Five electrons are consumed per permanganate but only one is released per iron, so the iron half must be taken five times.",
          working:
            "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
        },
        {
          label: "Verify both mass and charge",
          decision:
            "A balanced redox equation must satisfy both conditions, and charge is the check most often omitted.",
          working:
            "Charge: (−1) + 8 + 10 = +17 on the left and (+2) + 15 = +17 on the right. Atoms: Mn 1, O 4, H 8, Fe 5 on each side",
        },
      ],
      answer:
        "The balanced equation is MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺, in which permanganate is the oxidising agent and iron(II) the reducing agent.",
      plausibility:
        "Manganese falls five units in oxidation number while each iron rises by one, so five iron ions per permanganate ion is precisely what conservation of electrons demands. The 1:5 ratio is also what makes this titration so convenient in practice.",
    },
    {
      id: "rdx-check-balance",
      type: "check",
      eyebrow: "Your turn",
      title: "Complete a reduction half-equation",
      prompt:
        "In acidic solution, dichromate is reduced according to Cr₂O₇²⁻ + a H⁺ + b e⁻ → 2Cr³⁺ + c H₂O. What are a, b and c?",
      options: [
        "a = 7, b = 6, c = 7",
        "a = 14, b = 3, c = 7",
        "a = 8, b = 5, c = 4",
        "a = 14, b = 6, c = 7",
      ],
      correctIndex: 3,
      explanation:
        "Seven oxygens leave as seven water molecules, which requires 14 H⁺. Chromium falls from +6 to +3, a drop of three per atom and six for the two atoms present, so six electrons are needed. The charge check confirms it: −2 + 14 − 6 = +6 on the left and 2 × (+3) = +6 on the right.",
      misconception:
        "Counting the electrons for a single chromium atom and forgetting that the formula contains two, which gives b = 3 and breaks the charge balance. The set a = 8, b = 5, c = 4 simply transplants the permanganate pattern, which has a different oxygen count entirely.",
    },
    {
      id: "rdx-cells",
      type: "concept",
      eyebrow: "Measure the tendency",
      title: "A cell potential is the driving force for electron transfer, in volts",
      paragraphs: [
        "In a galvanic cell the two half-reactions occupy separate compartments. Oxidation happens at the anode, reduction at the cathode, and electrons travel from anode to cathode through the external wire, which makes the anode the negative terminal of a galvanic cell. The salt bridge completes the circuit by letting ions migrate: anions towards the anode compartment, which is accumulating positive charge, and cations towards the cathode compartment, which is losing it. Without it, charge separation would halt the reaction within moments.",
        "Cell notation records this compactly. The anode goes on the left and the cathode on the right, a single vertical bar marks a boundary between phases and a double bar marks the salt bridge, so the zinc and copper cell is written Zn(s) | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu(s). Only potential differences can be measured, never the potential of a single electrode, so one half-cell is defined as the zero point: the standard hydrogen electrode, in which H⁺ at 1 mol dm⁻³ is in equilibrium with H₂ at 100 kPa over inert platinum, is assigned E° = 0.00 V exactly.",
        "Every other half-cell is then quoted as a standard reduction potential measured against that reference at 298 K with all solutes at 1 mol dm⁻³. A more positive E° means a greater tendency to be reduced, that is, a stronger pull on electrons. For a complete cell, E°cell = E°cathode − E°anode. Note that the potential is not multiplied by the number of electrons: doubling a half-equation doubles the charge transferred and the energy released together, leaving the energy per unit charge, which is what a volt measures, unchanged.",
      ],
      callout: "E°cell = E°cathode − E°anode",
    },
    {
      id: "rdx-worked-ecell",
      type: "worked",
      eyebrow: "Worked example",
      title: "From a table of potentials to a free energy change",
      scenario:
        "Use these standard reduction potentials at 298 K: Zn²⁺ + 2e⁻ → Zn, E° = −0.76 V; Ni²⁺ + 2e⁻ → Ni, E° = −0.25 V; 2H⁺ + 2e⁻ → H₂, E° = 0.00 V; Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V; Fe³⁺ + e⁻ → Fe²⁺, E° = +0.77 V; Ag⁺ + e⁻ → Ag, E° = +0.80 V. A cell is built from the zinc and copper half-cells. Identify the electrodes, write the cell notation, find E°cell, and calculate ΔG°. Take F = 96 485 C mol⁻¹.",
      steps: [
        {
          label: "Decide which half-cell is reduced",
          decision:
            "The half-cell with the more positive reduction potential wins the competition for electrons, so it becomes the cathode and the other is forced to run in reverse.",
          working:
            "E°(Cu²⁺/Cu) = +0.34 V exceeds E°(Zn²⁺/Zn) = −0.76 V, so copper is the cathode and zinc the anode",
        },
        {
          label: "Write the cell in standard notation",
          decision:
            "Convention places the anode on the left, with a single bar for each phase boundary and a double bar for the salt bridge.",
          working: "Zn(s) | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu(s)",
        },
        {
          label: "Combine the two potentials",
          decision:
            "Subtract the anode potential from the cathode potential; do not scale either by the electron count, since potential is an intensive quantity.",
          working: "E°cell = (+0.34 V) − (−0.76 V) = +1.10 V",
        },
        {
          label: "Convert the potential into a free energy change",
          decision:
            "Two electrons pass per zinc atom oxidised, so n = 2, and ΔG° = −nFE° converts energy per unit charge into energy per mole of reaction.",
          working:
            "ΔG° = −2 × 96 485 C mol⁻¹ × 1.10 V = −2.12 × 10⁵ J mol⁻¹",
        },
      ],
      answer:
        "The cell is Zn(s) | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu(s), with E°cell = +1.10 V and ΔG° = −212 kJ mol⁻¹, so the reaction is spontaneous under standard conditions.",
      plausibility:
        "A positive cell potential and a negative ΔG° must always appear together; a positive ΔG° alongside a positive E°cell means a sign has been dropped. A magnitude of roughly 200 kJ mol⁻¹ is typical of a vigorous metal displacement, and comparable to the energy released by burning a few grams of fuel.",
    },
    {
      id: "rdx-check-notation",
      type: "check",
      eyebrow: "Read the representation",
      title: "Interpret a line of cell notation",
      prompt:
        "Using the same table, consider the cell Ni(s) | Ni²⁺(aq) ‖ Ag⁺(aq) | Ag(s). Which statement is correct?",
      options: [
        "Nickel is the anode, electrons flow through the external circuit from nickel to silver, and E°cell = +1.05 V",
        "Nickel is the cathode, and electrons flow through the external circuit towards it",
        "Silver is oxidised, and E°cell = −1.05 V",
        "Electrons pass from nickel to silver through the salt bridge, and E°cell = +0.55 V",
      ],
      correctIndex: 0,
      explanation:
        "The left-hand electrode in cell notation is the anode, and the potentials agree: E°(Ag⁺/Ag) = +0.80 V is more positive than E°(Ni²⁺/Ni) = −0.25 V, so silver is reduced and nickel oxidised. E°cell = 0.80 − (−0.25) = +1.05 V, and the electrons released at the nickel electrode travel the wire to the silver one.",
      misconception:
        "Believing electrons cross the salt bridge. The bridge conducts only by ion migration; electrons take the external wire. That option also adds the two potentials instead of subtracting them, which is where +0.55 V comes from.",
    },
    {
      id: "rdx-cascade",
      type: "concept",
      eyebrow: "Uphill and downhill",
      title: "The same ladder explains batteries, electrolysis, and respiration",
      paragraphs: [
        "The sign of E°cell decides direction. Because ΔG° = −nFE°cell and F is positive, a positive cell potential guarantees a negative standard free energy change and a spontaneous reaction, while a negative potential means the reverse reaction is the favoured one. This is a thermodynamic statement only: it says which way the reaction tends, not how fast it gets there. Many strongly favourable redox reactions are imperceptibly slow without a catalyst, and a catalyst can never change the sign of E°cell.",
        "Electrolysis is the same cell driven backwards. Connect an external supply whose voltage exceeds E°cell and impose the opposite polarity, and electrons are pushed uphill against their preference: copper is deposited from solution, water is split into hydrogen and oxygen, aluminium is won from molten ore. The vocabulary survives the reversal, since oxidation still defines the anode and reduction the cathode, but the anode is now the positive terminal because the external source, not the chemistry, sets the polarity.",
        "Mitochondrial respiration is the same physics in a far smaller cell. Electrons enter from NADH, whose NAD⁺/NADH couple has a standard biochemical potential of about −0.32 V, and leave at oxygen, whose O₂/H₂O couple sits at about +0.82 V. The carriers in between have potentials that increase in sequence, so electrons descend a ladder in several steps rather than one drop. The total is ΔE°′ ≈ 1.14 V, and with n = 2 that is ΔG°′ = −2 × 96 485 × 1.14 ≈ −2.2 × 10⁵ J mol⁻¹, released in instalments small enough to be captured as a proton gradient rather than wasted as heat.",
      ],
      callout:
        "ΔG° = −nFE°cell, so a positive cell potential is a negative free energy change",
    },
    {
      id: "rdx-check-spontaneity",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Decide a direction from two negative potentials",
      prompt:
        "From the table, E°(Ni²⁺/Ni) = −0.25 V and E°(Zn²⁺/Zn) = −0.76 V. A strip of nickel is placed in 1 mol dm⁻³ zinc sulfate solution at 298 K. What happens?",
      options: [
        "No reaction: E°cell for the proposed reaction is −0.51 V, so the reverse process, zinc displacing nickel, is the spontaneous one",
        "Zinc metal is deposited, because E°cell for the reaction is +0.51 V",
        "Zinc metal is deposited, because both potentials are negative and negative potentials favour deposition",
        "No reaction, because one metal can never react with the ions of another metal",
      ],
      correctIndex: 0,
      explanation:
        "In the proposed reaction Zn²⁺ would be reduced, making it the cathode at −0.76 V, and nickel would be oxidised, making it the anode at −0.25 V. So E°cell = −0.76 − (−0.25) = −0.51 V, giving ΔG° = −nFE° = +2 × 96 485 × 0.51 = +9.8 × 10⁴ J mol⁻¹. A positive free energy change means the reaction does not proceed; zinc placed in nickel(II) solution would react instead.",
      misconception:
        "Judging spontaneity from the sign of a single electrode potential rather than from the difference between two. Both couples here are negative against the hydrogen electrode, yet the pair still has a definite preferred direction.",
    },
    {
      id: "rdx-check-transport",
      type: "check",
      eyebrow: "Apply it",
      title: "Predict a biological electron transfer",
      prompt:
        "In an electron transport chain, carrier X has a standard biochemical reduction potential E°′ = −0.18 V and carrier Y has E°′ = +0.03 V. Will reduced X pass two electrons to Y under standard biochemical conditions, and what is ΔG°′? Take F = 96 485 C mol⁻¹.",
      options: [
        "No, because electrons always travel towards the more negative potential, so Y would reduce X instead",
        "Yes, with ΔG°′ of about −41 kJ mol⁻¹",
        "Yes, with ΔG°′ of about +41 kJ mol⁻¹",
        "Yes, but only if an enzyme first raises E°′ for the pair above zero",
      ],
      correctIndex: 1,
      explanation:
        "Y has the more positive potential, so Y is the acceptor and ΔE°′ = (+0.03) − (−0.18) = +0.21 V. With n = 2, ΔG°′ = −nFΔE°′ = −2 × 96 485 × 0.21 = −4.1 × 10⁴ J mol⁻¹, about −41 kJ mol⁻¹. Positive potential difference and negative free energy change together mean the transfer is spontaneous.",
      misconception:
        "Carrying a positive potential through to a positive ΔG°. The minus sign in ΔG° = −nFE° is the entire point: favourable transfers release free energy. Enzymes alter the rate of such a step, never its thermodynamic direction.",
    },
    {
      id: "rdx-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Follow the electrons, then price the transfer in volts",
      points: [
        "Oxidation is loss of electrons and reduction is gain; the oxidising agent is the species that is itself reduced.",
        "Oxidation numbers are a bookkeeping device that sums to the charge on the species and reveals which element changed.",
        "In acidic solution, balance a half-equation with H₂O for oxygen, H⁺ for hydrogen and electrons for charge, then scale the halves so the electrons cancel.",
        "A galvanic cell separates the halves so electrons must cross an external circuit; the salt bridge carries only ions.",
        "E°cell = E°cathode − E°anode, and ΔG° = −nFE°cell, so a positive cell potential marks a spontaneous reaction.",
        "Electrolysis and respiration are the same idea in opposite directions: one drives electrons uphill, the other lets them fall down a potential ladder in stages.",
      ],
      transferRule:
        "Given any two redox couples, place them on a potential ladder: electrons flow from the more negative couple to the more positive one, and the gap between them sets the free energy available.",
      nextLessonId: "lesson.chemistry.organic_structure",
    },
  ],
};

export const chemistryAqueousLessons: Lesson[] = [
  acidsBases,
  buffersTitration,
  redox,
];
