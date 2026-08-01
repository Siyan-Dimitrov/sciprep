import type { Lesson } from "@/lib/lesson-types";

const stoichiometry: Lesson = {
  id: "lesson.chemistry.stoichiometry",
  slug: "stoichiometry-and-yield",
  number: "4.1",
  stageId: "stage.chemistry_reactions",
  discipline: "chemistry",
  title: "Chemical equations, stoichiometry, and yield",
  summary:
    "Read a balanced equation as a fixed ratio of chemical amounts, then use it to predict masses, identify the limiting reagent, and judge yield.",
  estimatedMinutes: 32,
  reviewStatus: "unreviewed",
  objectives: [
    "Balance a chemical equation by inspection and justify why atoms must be conserved.",
    "Convert between mass and chemical amount and cross a reaction using its mole ratio.",
    "Identify the limiting reagent by dividing each amount by its stoichiometric coefficient.",
    "Calculate theoretical yield, percentage yield, and percentage atom economy.",
    "Apply concentration c = n / V and the dilution relation c₁V₁ = c₂V₂ to solution problems.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.mole",
    "lesson.chemistry.intermolecular_forces",
  ],
  blocks: [
    {
      id: "stoi-purpose",
      type: "concept",
      eyebrow: "Start with meaning",
      title: "A balanced equation is a recipe written in moles",
      paragraphs: [
        "A chemical reaction rearranges atoms; it never creates or destroys them. Every atom present in the reactants must appear somewhere in the products, and the total charge must also balance. A balanced chemical equation is the bookkeeping that makes this conservation explicit, which is why the coefficients in front of each formula are not decoration but the central quantitative content of the equation.",
        "Those coefficients can be read at two scales. At the particle scale, 2H₂ + O₂ → 2H₂O says that two hydrogen molecules react with one oxygen molecule. At the laboratory scale it says that two moles of hydrogen react with one mole of oxygen to give two moles of water. Because a mole is just a fixed count, the two readings are the same statement.",
        "The coefficients therefore give a fixed ratio of chemical amounts, called the stoichiometric ratio or mole ratio. They do not give a ratio of masses, and they do not give a ratio of volumes for liquids or solids. Almost every error in this topic comes from applying a mole ratio to a quantity that is not an amount in moles.",
      ],
      callout:
        "coefficients give a ratio of amounts in moles, never a ratio of masses",
    },
    {
      id: "stoi-visual",
      type: "visual",
      eyebrow: "See the conservation",
      title: "Balancing is atom counting, not formula editing",
      introduction:
        "Picture the reactant particles on one side and the product particles on the other. Balancing means adjusting how many whole particles take part, never altering what a particle is.",
      visual: "particles",
      caption:
        "Subscripts inside a formula define the substance and are fixed; coefficients in front of a formula count particles and are what you adjust. Changing H₂O to H₂O₂ to balance oxygen would silently replace water with hydrogen peroxide.",
    },
    {
      id: "stoi-bridge",
      type: "concept",
      eyebrow: "The formal method",
      title: "Balance by inspection, then cross the equation in moles",
      paragraphs: [
        "To balance by inspection, work in a deliberate order. Start with the element that appears in the fewest formulae, leave elements that appear alone as an element until last, treat a polyatomic ion that survives the reaction as a single unit, and if a fraction appears, multiply the whole equation through to clear it. For C₃H₈ + O₂ → CO₂ + H₂O, fix carbon first (3CO₂), then hydrogen (4H₂O), then count the oxygen atoms needed on the right, ten, giving 5O₂.",
        "Once balanced, the equation supports a four-step bridge. Convert the measured mass of a known substance to an amount using n = m / M. Cross the equation using the mole ratio taken directly from the coefficients. Convert the resulting amount of the target substance back to a mass using m = nM. The middle step is the only one that involves the chemistry; the outer steps are unit conversions.",
        "Keep the substance labelled at every stage. Writing n(Mg) = 0.200 mol rather than a bare n = 0.200 mol makes the mole-ratio step self-checking, because you can see which substance each number belongs to before you multiply. It also makes the direction of the ratio obvious: if you are moving from magnesium towards magnesium oxide, the coefficient of the target goes on top. A useful discipline is to write the ratio as a fraction with both substances named, then confirm that the substance you started with cancels, exactly as a unit would.",
      ],
      callout: "mass → n = m / M → mole ratio → m = nM → mass",
    },
    {
      id: "stoi-worked-mass",
      type: "worked",
      eyebrow: "Worked example",
      title: "Cross an equation from mass to mass",
      scenario:
        "A ribbon containing 4.86 g of magnesium is burned completely in excess oxygen: 2Mg(s) + O₂(g) → 2MgO(s). Find the mass of magnesium oxide formed. Use M(Mg) = 24.3 g mol⁻¹ and M(O) = 16.0 g mol⁻¹.",
      steps: [
        {
          label: "Convert the known mass to an amount",
          decision:
            "The mole ratio only applies to amounts, so the mass of magnesium must be converted first.",
          working: "n(Mg) = 4.86 g ÷ 24.3 g mol⁻¹ = 0.200 mol",
        },
        {
          label: "Cross the equation using the coefficients",
          decision:
            "The equation shows 2Mg producing 2MgO, so the ratio of amounts is 2 : 2, which is 1 : 1.",
          working: "n(MgO) = 0.200 mol × (2 ÷ 2) = 0.200 mol",
        },
        {
          label: "Build the molar mass of the product",
          decision:
            "Converting the product amount back to a mass needs M(MgO), which is the sum of its atomic contributions.",
          working: "M(MgO) = 24.3 + 16.0 = 40.3 g mol⁻¹",
        },
        {
          label: "Convert the amount back to a mass",
          decision:
            "Multiplying amount by molar mass returns grams, the quantity a balance would read.",
          working: "m(MgO) = 0.200 mol × 40.3 g mol⁻¹ = 8.06 g",
        },
      ],
      answer: "The reaction produces 8.06 g of magnesium oxide.",
      plausibility:
        "The product must be heavier than the metal because oxygen has been added. Forming 0.200 mol of MgO consumes 0.100 mol of O₂, which is 3.20 g, and 4.86 + 3.20 = 8.06 g, so mass is conserved exactly.",
    },
    {
      id: "stoi-check-ratio",
      type: "check",
      eyebrow: "Your turn",
      title: "Use the coefficients as a ratio of amounts",
      prompt:
        "For the synthesis N₂(g) + 3H₂(g) → 2NH₃(g), what amount of hydrogen is needed to react completely with 0.40 mol of nitrogen?",
      options: ["0.13 mol", "0.40 mol", "0.80 mol", "1.2 mol"],
      correctIndex: 3,
      explanation:
        "The coefficients give n(H₂) : n(N₂) = 3 : 1, so n(H₂) = 3 × 0.40 mol = 1.2 mol.",
      misconception:
        "Dividing by the coefficient instead of multiplying, or assuming a one-to-one correspondence because there is one nitrogen formula and one hydrogen formula in the equation, both ignore that the coefficient counts particles.",
    },
    {
      id: "stoi-limiting",
      type: "concept",
      eyebrow: "A second layer",
      title: "One reagent runs out first, and it sets the ceiling",
      paragraphs: [
        "Reagents are rarely mixed in exactly the stoichiometric ratio. The limiting reagent is the one that is consumed completely and therefore fixes how much product can form; any other reagent is in excess and some of it survives untouched. Comparing raw masses cannot identify the limiting reagent, and comparing raw amounts is also unreliable, because a reagent with a large coefficient is used up faster per mole supplied.",
        "The reliable test is to divide each reagent’s amount by its own stoichiometric coefficient. The reagent giving the smallest quotient is limiting, because that quotient is the number of times the reaction as written can proceed. Once the limiting reagent is identified, every product amount is calculated from it alone, and the excess reagent is ignored except when you are asked how much of it remains.",
        "The mass calculated this way is the theoretical yield, the maximum obtainable if the reaction went to completion with no losses. The actual yield is what is recovered, and percentage yield is their ratio. A separate measure, percentage atom economy, compares the formula mass of the desired product with the total formula mass of the reactants; it is a property of the equation itself and is unaffected by laboratory technique.",
      ],
      callout:
        "limiting reagent: smallest value of (amount ÷ coefficient); percentage yield = (actual ÷ theoretical) × 100",
    },
    {
      id: "stoi-worked-limiting",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the limiting reagent, then the percentage yield",
      scenario:
        "5.40 g of aluminium is heated with 40.0 g of chlorine gas: 2Al(s) + 3Cl₂(g) → 2AlCl₃(s). The reaction recovers 24.0 g of aluminium chloride. Use M(Al) = 27.0 g mol⁻¹, M(Cl₂) = 70.9 g mol⁻¹, M(AlCl₃) = 133.3 g mol⁻¹. Find the percentage yield.",
      steps: [
        {
          label: "Convert both masses to amounts",
          decision:
            "Neither reagent is stated to be in excess, so both must be quantified before any comparison.",
          working:
            "n(Al) = 5.40 ÷ 27.0 = 0.200 mol; n(Cl₂) = 40.0 ÷ 70.9 = 0.564 mol",
        },
        {
          label: "Divide each amount by its coefficient",
          decision:
            "This scales both reagents to the same footing: how many times the equation as written can run.",
          working:
            "Al: 0.200 ÷ 2 = 0.100; Cl₂: 0.564 ÷ 3 = 0.188. The smaller value belongs to aluminium.",
        },
        {
          label: "Calculate the theoretical yield from the limiting reagent",
          decision:
            "Aluminium is limiting, so the product amount follows the 2 : 2 ratio with aluminium and the chlorine amount is not used.",
          working:
            "n(AlCl₃) = 0.200 mol; m = 0.200 mol × 133.3 g mol⁻¹ = 26.7 g",
        },
        {
          label: "Compare the actual mass with the theoretical mass",
          decision:
            "Percentage yield measures recovery against the ceiling set by the limiting reagent, not against the total mass of reactants.",
          working: "(24.0 g ÷ 26.7 g) × 100 = 89.9 %",
        },
      ],
      answer:
        "Aluminium is the limiting reagent, the theoretical yield is 26.7 g of AlCl₃, and the percentage yield is 89.9 %.",
      plausibility:
        "Complete reaction of 0.200 mol of Al needs 0.300 mol of Cl₂, but 0.564 mol was supplied, so chlorine is comfortably in excess and 0.264 mol of it, about 18.7 g, is left over. A yield below 100 % is expected; a value above 100 % would signal a weighing error or a product still wet with solvent.",
    },
    {
      id: "stoi-check-limiting",
      type: "check",
      eyebrow: "Apply the ceiling",
      title: "Let the coefficient decide which reagent runs out",
      prompt:
        "A sealed vessel contains 2.0 mol of N₂ and 3.0 mol of H₂ and the reaction N₂(g) + 3H₂(g) → 2NH₃(g) goes to completion. What is the maximum amount of ammonia that can form?",
      options: ["1.0 mol", "2.0 mol", "3.0 mol", "4.0 mol"],
      correctIndex: 1,
      explanation:
        "Dividing by coefficients gives N₂: 2.0 ÷ 1 = 2.0 and H₂: 3.0 ÷ 3 = 1.0, so hydrogen is limiting. Then n(NH₃) = 3.0 mol × (2 ÷ 3) = 2.0 mol, and 1.0 mol of N₂ remains unreacted.",
      misconception:
        "Choosing 4.0 mol treats nitrogen as limiting because there is numerically less of it; choosing 3.0 mol applies a one-to-one ratio to hydrogen. The coefficient must be divided out before amounts can be compared.",
    },
    {
      id: "stoi-solution",
      type: "concept",
      eyebrow: "Reactions in solution",
      title: "Concentration is the bridge when reagents are dissolved",
      paragraphs: [
        "A solution is measured by volume, not by mass, so a third bridge is needed. Concentration c is the amount of solute per unit volume of solution, c = n / V, with n in moles and V in cubic decimetres. One dm³ is 1000 cm³ and is identical to one litre, so a volume delivered by a burette in cm³ must be divided by 1000 before use. Concentration is an intensive property: taking a larger sample of the same solution does not change it.",
        "With this bridge the four-step chain becomes volume and concentration → amount → mole ratio → amount → whatever is asked for. A titration is exactly this chain run once, using a known concentration to determine an unknown one at the point where the reagents have been mixed in the stoichiometric ratio. The end point is only a signal that this ratio has been reached; the chemistry lives entirely in the mole-ratio step, and the indicator merely tells you when to stop the burette.",
        "Diluting a solution adds solvent but no solute, so the amount of solute is unchanged. Setting the amount before dilution equal to the amount after gives c₁V₁ = c₂V₂, and because the volumes appear as a ratio, any consistent volume unit may be used on both sides. Taking 25.0 cm³ of a 1.00 mol dm⁻³ stock and making it up to 500 cm³ multiplies the volume by 20, so it divides the concentration by 20 and gives 0.0500 mol dm⁻³.",
      ],
      callout: "c = n / V with V in dm³;  dilution: c₁V₁ = c₂V₂",
    },
    {
      id: "stoi-worked-solution",
      type: "worked",
      eyebrow: "Worked example",
      title: "Titrate an alkali, then dilute the stock",
      scenario:
        "A 25.0 cm³ sample of sodium hydroxide solution of unknown concentration is exactly neutralised by 22.4 cm³ of 0.100 mol dm⁻³ sulfuric acid: 2NaOH(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + 2H₂O(l). Find the concentration of the alkali, then find the concentration obtained when 20.0 cm³ of that alkali is made up to 250.0 cm³ with water.",
      steps: [
        {
          label: "Find the amount of the reagent that is fully known",
          decision:
            "Both concentration and volume are given for the acid, so it is the only species whose amount can be calculated directly.",
          working:
            "n(H₂SO₄) = 0.100 mol dm⁻³ × 0.0224 dm³ = 2.24 × 10⁻³ mol",
        },
        {
          label: "Cross the equation to the alkali",
          decision:
            "The equation shows 2NaOH per H₂SO₄ because sulfuric acid is diprotic, so the alkali amount is doubled.",
          working: "n(NaOH) = 2 × 2.24 × 10⁻³ mol = 4.48 × 10⁻³ mol",
        },
        {
          label: "Divide by the volume of the alkali sample",
          decision:
            "Concentration is amount per dm³, and the relevant volume is the 25.0 cm³ pipetted, not the titre.",
          working:
            "c(NaOH) = 4.48 × 10⁻³ mol ÷ 0.0250 dm³ = 0.179 mol dm⁻³",
        },
        {
          label: "Apply the dilution relation",
          decision:
            "Adding water changes the volume but not the amount of solute, so c₁V₁ = c₂V₂ applies with volumes in any consistent unit.",
          working:
            "c₂ = 0.179 mol dm⁻³ × (20.0 cm³ ÷ 250.0 cm³) = 0.0143 mol dm⁻³",
        },
      ],
      answer:
        "The sodium hydroxide solution is 0.179 mol dm⁻³, and diluting 20.0 cm³ of it to 250.0 cm³ gives 0.0143 mol dm⁻³.",
      plausibility:
        "A slightly smaller volume of acid neutralised the alkali, but each mole of acid supplies two moles of protons, so the alkali should be roughly twice as concentrated as the 0.100 mol dm⁻³ acid, and 0.179 is close to that. The dilution multiplies the volume by 12.5, so the concentration must fall by the same factor.",
    },
    {
      id: "stoi-check-dilution",
      type: "check",
      eyebrow: "Change the representation",
      title: "Work backwards through a dilution",
      prompt:
        "You need 250 cm³ of 0.0200 mol dm⁻³ copper(II) sulfate solution and have a 0.500 mol dm⁻³ stock. What volume of stock should be pipetted before making up to the mark?",
      options: ["5.00 cm³", "10.0 cm³", "25.0 cm³", "6250 cm³"],
      correctIndex: 1,
      explanation:
        "Rearranging c₁V₁ = c₂V₂ gives V₁ = c₂V₂ ÷ c₁ = (0.0200 × 250) ÷ 0.500 = 10.0 cm³. Equivalently, the required amount is 0.0200 × 0.250 = 5.00 × 10⁻³ mol, and 5.00 × 10⁻³ ÷ 0.500 = 0.0100 dm³.",
      misconception:
        "Answering 6250 cm³ inverts the concentration ratio, which would mean concentrating the solution rather than diluting it. The stock is more concentrated, so the volume taken from it must be smaller than the final volume.",
    },
    {
      id: "stoi-check-economy",
      type: "check",
      eyebrow: "Judge the equation itself",
      title: "Atom economy is decided before the experiment starts",
      prompt:
        "Iron is extracted by Fe₂O₃(s) + 3CO(g) → 2Fe(s) + 3CO₂(g). Using M(Fe₂O₃) = 159.7, M(CO) = 28.0 and M(Fe) = 55.85 g mol⁻¹, what is the percentage atom economy for iron?",
      options: ["22.9 %", "45.8 %", "59.5 %", "69.9 %"],
      correctIndex: 1,
      explanation:
        "Atom economy uses the coefficients on both sides. Desired product mass is 2 × 55.85 = 111.7; total reactant mass is 159.7 + 3 × 28.0 = 243.7. So 111.7 ÷ 243.7 × 100 = 45.8 %.",
      misconception:
        "Answering 59.5 % omits the coefficient 3 on carbon monoxide, and 22.9 % omits the coefficient 2 on iron. Atom economy is not the same as percentage yield: a reaction can have a 100 % yield and still waste more than half its reactant mass as by-product.",
    },
    {
      id: "stoi-check-transfer",
      type: "check",
      eyebrow: "New context",
      title: "Decide what is left in the beaker",
      prompt:
        "An antacid tablet containing 0.500 g of calcium carbonate (M = 100.1 g mol⁻¹) is dropped into 50.0 cm³ of 0.100 mol dm⁻³ hydrochloric acid, which reacts as CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g). Which description of the final mixture is correct?",
      options: [
        "The acid is in excess, so all the calcium carbonate dissolves and 5.00 × 10⁻³ mol of CO₂ is released.",
        "The two reagents are exactly consumed, because each amounts to 5.00 × 10⁻³ mol.",
        "Calcium carbonate is in excess, so about 0.25 g of solid remains and 2.50 × 10⁻³ mol of CO₂ is released.",
        "Calcium carbonate is in excess, and 5.00 × 10⁻³ mol of CO₂ is released before the solid stops reacting.",
      ],
      correctIndex: 2,
      explanation:
        "n(CaCO₃) = 0.500 ÷ 100.1 = 5.00 × 10⁻³ mol and n(HCl) = 0.100 × 0.0500 = 5.00 × 10⁻³ mol. Dividing by coefficients gives 5.00 × 10⁻³ for the carbonate but 2.50 × 10⁻³ for the acid, so the acid is limiting. It can dissolve only 2.50 × 10⁻³ mol of carbonate, releasing 2.50 × 10⁻³ mol of CO₂ and leaving 2.50 × 10⁻³ mol, about 0.25 g, of solid.",
      misconception:
        "Equal amounts in moles do not mean an exact match. Because two moles of acid are consumed per mole of carbonate, equal starting amounts guarantee that the acid runs out first.",
    },
    {
      id: "stoi-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Every stoichiometry problem is the same chain",
      points: [
        "Balancing conserves atoms and charge; coefficients are adjusted, subscripts never are.",
        "Coefficients give a ratio of amounts in moles, so masses, volumes, and concentrations must be converted to moles before the ratio is used.",
        "The limiting reagent is the one with the smallest value of amount divided by coefficient, and it alone fixes the product amount.",
        "Theoretical yield comes from the limiting reagent; percentage yield is actual divided by theoretical, times one hundred.",
        "Percentage atom economy is fixed by the balanced equation and is independent of how well the experiment is performed.",
        "In solution, c = n / V with V in dm³ supplies the missing bridge, and dilution obeys c₁V₁ = c₂V₂ because solute amount is unchanged.",
      ],
      transferRule:
        "Before using any ratio, ask whether every quantity involved is an amount in moles; if one is not, convert it first.",
      nextLessonId: "lesson.chemistry.thermochemistry",
    },
  ],
};

const thermochemistry: Lesson = {
  id: "lesson.chemistry.thermochemistry",
  slug: "enthalpy-and-reaction-profiles",
  number: "4.2",
  stageId: "stage.chemistry_reactions",
  discipline: "chemistry",
  title: "Enthalpy, reaction profiles, and Hess’s law",
  summary:
    "Track energy as it moves between a reacting system and its surroundings, and calculate enthalpy changes from bond enthalpies, calorimetry, and enthalpy cycles.",
  estimatedMinutes: 35,
  reviewStatus: "unreviewed",
  objectives: [
    "Distinguish system from surroundings and apply the sign convention for ΔH.",
    "Read a reaction profile for reactants, products, activation energy, and ΔH.",
    "Estimate ΔH from mean bond enthalpies using bonds broken minus bonds formed.",
    "Calculate an enthalpy change from calorimetry data using q = mcΔT and convert to kJ mol⁻¹.",
    "Apply Hess’s law and standard enthalpies of formation to find an enthalpy change indirectly.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.stoichiometry"],
  blocks: [
    {
      id: "therm-purpose",
      type: "concept",
      eyebrow: "Start with meaning",
      title: "Draw the boundary before you count the energy",
      paragraphs: [
        "Any energy calculation begins by choosing a system: the collection of chemicals under study. Everything else, including the solvent, the vessel, the thermometer, and the room, is the surroundings. Energy transferred out of the system must appear in the surroundings, and the total is conserved. This is the first law of thermodynamics, and the whole sign convention of thermochemistry follows from deciding to keep the books from the system’s point of view.",
        "The internal energy U of a system is the total kinetic and potential energy of its particles. Most chemistry happens in open vessels at constant atmospheric pressure, where a reaction that produces gas must push the atmosphere back and spends some energy doing that work. Enthalpy, H = U + pV, is defined precisely so that the energy transferred as heat at constant pressure equals the change in H, with the expansion work already accounted for.",
        "We can never measure H itself, only changes in it, because there is no experiment that reveals the absolute enthalpy of a substance. The enthalpy change of reaction, ΔH, is the enthalpy of the products minus the enthalpy of the reactants, and it is quoted for the balanced equation exactly as written, per mole of that reaction. Doubling every coefficient doubles ΔH, and reversing the equation reverses the sign, so a thermochemical value is meaningless unless the equation it belongs to is stated alongside it.",
      ],
      callout: "at constant pressure, heat transferred q_p = ΔH = H(products) − H(reactants)",
    },
    {
      id: "therm-visual",
      type: "visual",
      eyebrow: "See the model",
      title: "The reaction profile shows both the barrier and the drop",
      introduction:
        "Plot enthalpy on the vertical axis against the progress of the reaction on the horizontal axis. Two independent features appear, and confusing them is the commonest error in this topic.",
      visual: "energy_profile",
      caption:
        "The height from reactants to the peak is the activation energy Eₐ, the barrier that must be climbed for any reaction to occur. The vertical gap from reactants to products is ΔH: downhill means exothermic and negative, uphill means endothermic and positive. A large barrier does not make a reaction endothermic.",
    },
    {
      id: "therm-sign",
      type: "concept",
      eyebrow: "The formal treatment",
      title: "Exothermic means the surroundings warm up and ΔH is negative",
      paragraphs: [
        "In an exothermic reaction the products hold less enthalpy than the reactants, so ΔH is negative and the difference is released to the surroundings. Because the surroundings receive that energy, a thermometer in the reaction mixture reads a temperature rise. In an endothermic reaction ΔH is positive, the system draws energy in, and the mixture cools. The sign refers to the system; the temperature you feel refers to the surroundings, so the two always appear to point in opposite directions.",
        "To measure ΔH we measure the temperature change of a known mass of surroundings, usually water, and use q = mcΔT. Here m is the mass in grams, c the specific heat capacity in J g⁻¹ K⁻¹, and ΔT the temperature change in kelvin, which is numerically identical to a change in degrees Celsius. For water c = 4.18 J g⁻¹ K⁻¹. The result is an energy in joules for the sample used, so it must be divided by the amount in moles and converted to kilojoules to give a molar enthalpy change.",
        "Standard conditions are quoted as 100 kPa and a stated temperature, conventionally 298 K, with all solutions at 1 mol dm⁻³; a standard value carries the superscript symbol, as in ΔH°. Calorimetry in an open beaker systematically underestimates the magnitude of an exothermic ΔH, because some energy escapes to the air and the apparatus rather than warming the water.",
      ],
      callout: "q = mcΔT;  ΔH = −q ÷ n, negative when the surroundings warm",
    },
    {
      id: "therm-worked-calorimetry",
      type: "worked",
      eyebrow: "Worked example",
      title: "Turn a temperature rise into kilojoules per mole",
      scenario:
        "A spirit burner loses 1.00 g of ethanol, C₂H₅OH (M = 46.0 g mol⁻¹), while heating 200.0 g of water from 21.0 °C to 55.0 °C. Take c(water) = 4.18 J g⁻¹ K⁻¹ and assume all the energy released warms the water. Find the enthalpy of combustion of ethanol.",
      steps: [
        {
          label: "Find the energy gained by the surroundings",
          decision:
            "The water is the surroundings, and q = mcΔT converts its measured temperature rise into an energy.",
          working:
            "ΔT = 55.0 − 21.0 = 34.0 K; q = 200.0 g × 4.18 J g⁻¹ K⁻¹ × 34.0 K = 28 424 J = 28.4 kJ",
        },
        {
          label: "Find the amount of fuel that supplied it",
          decision:
            "Enthalpy of combustion is quoted per mole of fuel burned, so the mass lost must become an amount.",
          working: "n(C₂H₅OH) = 1.00 g ÷ 46.0 g mol⁻¹ = 0.0217 mol",
        },
        {
          label: "Scale to one mole",
          decision:
            "Dividing the energy by the amount converts a result for this particular sample into a molar quantity.",
          working: "28.424 kJ ÷ 0.021739 mol = 1.31 × 10³ kJ mol⁻¹",
        },
        {
          label: "Attach the sign from the system’s viewpoint",
          decision:
            "The surroundings warmed, so energy left the system and the enthalpy change of the system is negative.",
          working: "ΔH_c = −1.31 × 10³ kJ mol⁻¹",
        },
      ],
      answer:
        "The measured enthalpy of combustion of ethanol is about −1.31 × 10³ kJ mol⁻¹.",
      plausibility:
        "The accepted value is −1367 kJ mol⁻¹, and the experiment falls short by roughly 4 %, exactly the direction expected when some energy heats the beaker and the air rather than the water. A result larger in magnitude than the accepted value would indicate a mistake, since losses can only reduce the measured heating.",
    },
    {
      id: "therm-check-sign",
      type: "check",
      eyebrow: "Your turn",
      title: "Predict the sign and size of a temperature change",
      prompt:
        "50.0 cm³ of 1.00 mol dm⁻³ hydrochloric acid is mixed with 50.0 cm³ of 1.00 mol dm⁻³ sodium hydroxide in a polystyrene cup. The enthalpy of neutralisation is −57.0 kJ per mole of water formed. Taking the mixture as 100.0 g with c = 4.18 J g⁻¹ K⁻¹, what temperature change is expected?",
      options: [
        "a fall of 6.8 °C",
        "a rise of 6.8 °C",
        "a rise of 13.6 °C",
        "a rise of 0.68 °C",
      ],
      correctIndex: 1,
      explanation:
        "Each solution supplies 1.00 × 0.0500 = 0.0500 mol, and they react one to one, so 0.0500 mol of water forms. q = 0.0500 × 57 000 = 2850 J. Then ΔT = q ÷ (mc) = 2850 ÷ (100.0 × 4.18) = 6.82 K, and because ΔH is negative the surroundings warm.",
      misconception:
        "Answering 13.6 °C adds the acid and alkali amounts to get 0.100 mol, but they react together to form only 0.0500 mol of water. Choosing a fall confuses the negative sign of ΔH, which describes the system, with the direction the thermometer moves, which describes the surroundings.",
    },
    {
      id: "therm-bonds",
      type: "concept",
      eyebrow: "A second layer",
      title: "Breaking bonds costs energy, making bonds returns it",
      paragraphs: [
        "A covalent bond is a potential energy well, so pulling two bonded atoms apart always requires an input of energy: bond breaking is endothermic without exception. Forming a bond releases energy and is always exothermic. A reaction is therefore a competition between the cost of breaking the reactant bonds and the return from forming the product bonds, and its overall sign depends only on which is larger.",
        "This gives a useful estimate, ΔH ≈ Σ(bond enthalpies broken) − Σ(bond enthalpies formed). The values used are mean bond enthalpies, averaged over many different molecules containing that bond, because the strength of a C–H bond depends slightly on what surrounds it. The estimate is therefore approximate, and it strictly applies to gaseous species, since it takes no account of the energy released when a gas condenses to a liquid.",
        "The relation also explains why exothermic reactions still need a spark. Bonds must break before new ones form, so the system must first climb the activation barrier, paying an energy cost that is later repaid with interest. Activation energy and enthalpy change answer different questions: one is about how easily the reaction starts, the other about how much energy it delivers.",
      ],
      callout: "ΔH ≈ Σ(bonds broken) − Σ(bonds formed)",
    },
    {
      id: "therm-worked-bonds",
      type: "worked",
      eyebrow: "Worked example",
      title: "Estimate a combustion enthalpy from bond enthalpies",
      scenario:
        "Estimate ΔH for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) using mean bond enthalpies in kJ mol⁻¹: C–H 413, O=O 498, C=O in carbon dioxide 805, O–H 464.",
      steps: [
        {
          label: "Count the bonds in the reactants",
          decision:
            "Every bond in the reactant molecules must be broken, and the stoichiometric coefficients multiply the counts.",
          working:
            "4 × C–H = 4 × 413 = 1652; 2 × O=O = 2 × 498 = 996; total broken = 2648 kJ",
        },
        {
          label: "Count the bonds in the products",
          decision:
            "Each CO₂ contains two C=O bonds and each water molecule two O–H bonds, and two waters are formed.",
          working:
            "2 × C=O = 2 × 805 = 1610; 4 × O–H = 4 × 464 = 1856; total formed = 3466 kJ",
        },
        {
          label: "Subtract in the correct order",
          decision:
            "Breaking is the cost and forming is the return, so the cost is written first and the return subtracted.",
          working: "ΔH ≈ 2648 − 3466 = −818 kJ mol⁻¹",
        },
      ],
      answer:
        "The estimated enthalpy of combustion of methane is about −818 kJ mol⁻¹, and the negative sign confirms it is exothermic.",
      plausibility:
        "The accepted value with gaseous water is −802 kJ mol⁻¹, so the estimate is within about 2 %, which is the accuracy mean bond enthalpies can deliver. Reversing the subtraction would give +818 kJ mol⁻¹, which would imply that burning methane cools a room.",
    },
    {
      id: "therm-check-bonds",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Balance the cost against the return",
      prompt:
        "Estimate ΔH for H₂(g) + Cl₂(g) → 2HCl(g) using H–H 436, Cl–Cl 243, and H–Cl 432 kJ mol⁻¹.",
      options: [
        "−185 kJ mol⁻¹",
        "+185 kJ mol⁻¹",
        "+247 kJ mol⁻¹",
        "−1543 kJ mol⁻¹",
      ],
      correctIndex: 0,
      explanation:
        "Bonds broken: 436 + 243 = 679 kJ. Bonds formed: 2 × 432 = 864 kJ. ΔH ≈ 679 − 864 = −185 kJ mol⁻¹, matching the accepted value of about −184.6 kJ mol⁻¹ for forming two moles of HCl.",
      misconception:
        "Answering +185 reverses the subtraction, +247 forgets that two moles of HCl are formed, and −1543 adds the two totals instead of subtracting, which would count bond breaking as an energy release.",
    },
    {
      id: "therm-hess",
      type: "concept",
      eyebrow: "Route independence",
      title: "Enthalpy is a state function, so the path does not matter",
      paragraphs: [
        "Enthalpy depends only on the current state of a system, not on how that state was reached, so ΔH for a change depends only on the initial and final states. This is Hess’s law: the enthalpy change of a reaction is the same whether it happens in one step or in several. If it were not true, one could run a reaction one way and reverse it another and generate energy from nothing, which the first law forbids.",
        "Hess’s law lets us find enthalpy changes that cannot be measured directly. Carbon and hydrogen cannot be made to form methane cleanly in a calorimeter, but all three substances burn, so an enthalpy cycle built from combustion data supplies the answer. Draw the direct route as one arrow and an indirect route through a common set of substances as a chain of arrows; going against an arrow reverses the sign of its ΔH.",
        "The most systematic version uses standard enthalpies of formation, ΔH°f, defined as the enthalpy change when one mole of a substance forms from its elements in their standard states. By definition ΔH°f of an element in its standard state is zero, which is why O₂(g) and C(graphite) contribute nothing. Every formation value shares the same elemental reference point, so the products-minus-reactants expression follows directly.",
      ],
      callout: "ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants), each multiplied by its coefficient",
    },
    {
      id: "therm-worked-hess",
      type: "worked",
      eyebrow: "Worked example",
      title: "Use formation enthalpies for a combustion",
      scenario:
        "Find the standard enthalpy of combustion of propane, C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l). Standard enthalpies of formation in kJ mol⁻¹: C₃H₈(g) −104, CO₂(g) −394, H₂O(l) −286, O₂(g) 0.",
      steps: [
        {
          label: "Identify which terms are zero",
          decision:
            "Oxygen gas is an element in its standard state, so its formation enthalpy is defined as zero and it drops out.",
          working: "ΔH°f[O₂(g)] = 0, so the 5O₂ term contributes nothing",
        },
        {
          label: "Total the products, weighted by coefficients",
          decision:
            "Each product’s formation enthalpy must be multiplied by how many moles the equation produces.",
          working:
            "3 × (−394) + 4 × (−286) = −1182 + (−1144) = −2326 kJ mol⁻¹",
        },
        {
          label: "Total the reactants and subtract",
          decision:
            "The products-minus-reactants form comes from going down to the elements and back up, so the reactant total is subtracted.",
          working: "ΔH° = −2326 − (−104) = −2326 + 104 = −2222 kJ mol⁻¹",
        },
      ],
      answer:
        "The standard enthalpy of combustion of propane is −2222 kJ mol⁻¹.",
      plausibility:
        "The accepted value is about −2220 kJ mol⁻¹. Propane releases far more per mole than methane at −890 kJ mol⁻¹, which is expected because it has three carbon and eight hydrogen atoms to oxidise rather than one and four. Forgetting the minus sign on the reactant term would give −2430 kJ mol⁻¹, an error of nearly 10 %.",
    },
    {
      id: "therm-check-hess",
      type: "check",
      eyebrow: "Change the representation",
      title: "Read an enthalpy cycle backwards",
      prompt:
        "Standard enthalpies of combustion in kJ mol⁻¹ are C(graphite) −394, H₂(g) −286 and CH₄(g) −890. What is the standard enthalpy of formation of methane, for C(graphite) + 2H₂(g) → CH₄(g)?",
      options: [
        "−1856 kJ mol⁻¹",
        "−76 kJ mol⁻¹",
        "+76 kJ mol⁻¹",
        "+210 kJ mol⁻¹",
      ],
      correctIndex: 1,
      explanation:
        "Burn the reactants down to CO₂ and H₂O, then climb back up by reversing the combustion of methane: ΔH°f = [−394 + 2 × (−286)] − (−890) = −966 + 890 = −76 kJ mol⁻¹, close to the accepted −74.8 kJ mol⁻¹.",
      misconception:
        "Answering +210 forgets that two moles of hydrogen are burned, and −1856 adds all three values instead of reversing the methane arrow. When a cycle is traversed against an arrow, that ΔH must change sign.",
    },
    {
      id: "therm-check-transfer",
      type: "check",
      eyebrow: "New context",
      title: "Compare fuels on the basis that matters",
      prompt:
        "Complete oxidation of glucose, C₆H₁₂O₆ (M = 180 g mol⁻¹), releases about 2800 kJ mol⁻¹, while complete oxidation of palmitic acid, C₁₆H₃₂O₂ (M = 256 g mol⁻¹), releases about 10 000 kJ mol⁻¹. Which statement best explains why fat is the body’s long-term energy store?",
      options: [
        "Palmitic acid gives about 39 kJ g⁻¹ against about 16 kJ g⁻¹ for glucose, roughly 2.5 times as much energy per gram of tissue carried.",
        "Glucose, at about 2.5 times the energy per gram, is the better store, but fat is easier to package.",
        "Palmitic acid is about 3.6 times better because 10 000 kJ mol⁻¹ is 3.6 times 2800 kJ mol⁻¹.",
        "Both release the same energy per gram, since both are oxidised completely to CO₂ and H₂O.",
      ],
      correctIndex: 0,
      explanation:
        "Mass, not amount, is what an organism must carry, so divide by molar mass: 2800 ÷ 180 = 15.6 kJ g⁻¹ for glucose and 10 000 ÷ 256 = 39.1 kJ g⁻¹ for palmitic acid, a ratio of about 2.5. The fatty acid chain is far less oxidised to begin with, so more energy is available per gram.",
      misconception:
        "Comparing molar values directly, as in the 3.6 times answer, ignores that a mole of palmitic acid weighs far more than a mole of glucose. Per-mole and per-gram comparisons can give different rankings and must not be interchanged.",
    },
    {
      id: "therm-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Enthalpy accounting has three independent routes",
      points: [
        "ΔH is defined from the system’s viewpoint: negative and exothermic when energy leaves and the surroundings warm.",
        "On a reaction profile, activation energy is the height of the barrier and ΔH is the difference in level between reactants and products.",
        "Bond breaking is always endothermic and bond making always exothermic, giving ΔH ≈ Σ(bonds broken) − Σ(bonds formed).",
        "Calorimetry measures the surroundings: q = mcΔT, then divide by the amount in moles and change the sign.",
        "Enthalpy is a state function, so Hess’s law lets any convenient route be used to reach an unmeasurable value.",
        "Standard formation enthalpies give ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants), with elements in their standard states set to zero.",
      ],
      transferRule:
        "Decide what is the system and what is the surroundings first; every sign in a thermochemical problem follows from that choice.",
      nextLessonId: "lesson.chemistry.entropy_gibbs",
    },
  ],
};

const entropyGibbs: Lesson = {
  id: "lesson.chemistry.entropy_gibbs",
  slug: "entropy-and-free-energy",
  number: "4.3",
  stageId: "stage.chemistry_reactions",
  discipline: "chemistry",
  title: "Entropy, free energy, and chemical direction",
  summary:
    "Explain why some endothermic reactions happen anyway, using entropy as a count of accessible microstates and Gibbs free energy as the criterion for spontaneous change.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Define entropy in terms of accessible microstates rather than loose notions of disorder.",
    "Predict the sign of ΔS for a reaction from changes in gas amount, phase, and dissolution.",
    "Apply ΔG = ΔH − TΔS and interpret the four combinations of ΔH and ΔS signs.",
    "Calculate the crossover temperature at which a reaction becomes spontaneous.",
    "Distinguish thermodynamic spontaneity from kinetic feasibility, and explain reaction coupling.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.thermochemistry"],
  blocks: [
    {
      id: "gibbs-purpose",
      type: "concept",
      eyebrow: "Start with meaning",
      title: "Enthalpy alone cannot predict direction",
      paragraphs: [
        "If reactions simply ran downhill in enthalpy, no endothermic process would ever occur unaided. Yet ice melts in a warm room, ammonium nitrate dissolves in water and chills the beaker, and solid hydrated barium hydroxide reacts with ammonium chloride vigorously enough to freeze a film of water beneath the flask. All of these absorb energy from their surroundings. Something other than enthalpy is driving them.",
        "That something is a counting argument. Energy and particles distribute themselves among the arrangements available to them, and if one outcome corresponds to overwhelmingly more arrangements than another, the system will be found there simply because there are more ways to be there. Nothing pushes the system; the imbalance in the number of possibilities is the whole explanation.",
        "Thermodynamics turns this counting into a measurable quantity called entropy, and then combines it with enthalpy into a single criterion for the direction of change. That criterion, the Gibbs free energy, tells us whether a reaction can proceed on its own, and it says nothing whatever about how fast. Keeping those two questions separate is the single most useful habit in this topic, because a reaction that is strongly favoured may still take geological time, and one that is barely favoured may be over in microseconds.",
      ],
      callout: "direction of change is decided by enthalpy and entropy together, never by enthalpy alone",
    },
    {
      id: "gibbs-visual",
      type: "visual",
      eyebrow: "See the model",
      title: "Spreading out is a matter of counting, not of tidiness",
      introduction:
        "Imagine gas particles in a container divided into two halves, with the partition removed. Watch how many distinct arrangements correspond to each overall outcome.",
      visual: "particles",
      caption:
        "There are vastly more arrangements with particles spread over both halves than with all of them on one side, so the spread state is the one observed. For a realistic number of particles the imbalance is so extreme that the reverse is never seen, which is why entropy increase looks like a law rather than a tendency.",
    },
    {
      id: "gibbs-entropy",
      type: "concept",
      eyebrow: "The formal treatment",
      title: "Entropy counts the microstates a system can occupy",
      paragraphs: [
        "A microstate is one complete specification of where every particle is and how the total energy is shared among them. Entropy S is defined from the number of microstates W that are consistent with the observed macroscopic state, through Boltzmann’s relation S = k_B ln W. Because the logarithm converts multiplication into addition, entropies of separate parts add, and the unit is J K⁻¹ mol⁻¹. Calling entropy disorder is a rough analogy that fails often; counting accessible microstates does not.",
        "For a chemical reaction, the sign of ΔS can usually be predicted from the balanced equation. Gases have far more accessible microstates than liquids, which in turn have more than solids, so the change in the total amount of gas dominates. If the moles of gas increase, ΔS is positive; if they decrease, ΔS is negative. Melting, boiling and dissolving a solid usually raise entropy, though dissolving a small highly charged ion can lower it by locking water molecules into an ordered hydration shell.",
        "The second law states that the total entropy of the system plus its surroundings never decreases for a spontaneous change. A system’s entropy may fall, as it does when water freezes, provided the energy released warms the surroundings enough to raise their entropy by more. The surroundings' contribution is ΔS_surr = −ΔH/T, which is why an exothermic reaction helps its own cause and why low temperature makes that help more effective.",
      ],
      callout: "S = k_B ln W;  ΔS_total = ΔS_system + ΔS_surroundings ≥ 0 for spontaneous change",
    },
    {
      id: "gibbs-worked-entropy",
      type: "worked",
      eyebrow: "Worked example",
      title: "Calculate an entropy change and check its sign",
      scenario:
        "Find ΔS° for N₂(g) + 3H₂(g) → 2NH₃(g) using standard molar entropies in J K⁻¹ mol⁻¹: N₂ 191.6, H₂ 130.7, NH₃ 192.8. Then predict the sign before checking it.",
      steps: [
        {
          label: "Predict from the gas count",
          decision:
            "Gas amount dominates entropy changes, so count moles of gas on each side before doing any arithmetic.",
          working:
            "reactants: 1 + 3 = 4 mol of gas; products: 2 mol of gas; the gas amount falls, so expect ΔS° < 0",
        },
        {
          label: "Total the products",
          decision:
            "Standard molar entropies are absolute values per mole, so each is multiplied by its coefficient.",
          working: "2 × 192.8 = 385.6 J K⁻¹ mol⁻¹",
        },
        {
          label: "Total the reactants",
          decision:
            "The same weighting applies; note that elements have non-zero entropies, unlike their formation enthalpies.",
          working: "191.6 + 3 × 130.7 = 191.6 + 392.1 = 583.7 J K⁻¹ mol⁻¹",
        },
        {
          label: "Subtract products minus reactants",
          decision:
            "Entropy is a state function, so the same products-minus-reactants form used for enthalpy applies.",
          working: "ΔS° = 385.6 − 583.7 = −198.1 J K⁻¹ mol⁻¹",
        },
      ],
      answer:
        "ΔS° is −198.1 J K⁻¹ mol⁻¹, a large decrease, as predicted from four moles of gas becoming two.",
      plausibility:
        "The magnitude is of the order of 100 J K⁻¹ mol⁻¹ per mole of gas removed, which is typical. Note the unit: entropies are quoted in joules while enthalpies are quoted in kilojoules, so one of them must always be converted before the two are combined.",
    },
    {
      id: "gibbs-check-entropy",
      type: "check",
      eyebrow: "Your turn",
      title: "Rank entropy changes by gas production",
      prompt:
        "Which of these processes has the largest positive entropy change for the system?",
      options: [
        "2NO₂(g) → N₂O₄(g)",
        "H₂O(l) → H₂O(s) at −10 °C",
        "NaCl(s) → Na⁺(aq) + Cl⁻(aq)",
        "2H₂O₂(l) → 2H₂O(l) + O₂(g)",
      ],
      correctIndex: 3,
      explanation:
        "Decomposing hydrogen peroxide creates a mole of gas where there was none, and gases have by far the greatest number of accessible microstates, giving ΔS° of about +126 J K⁻¹ mol⁻¹. Dissolving sodium chloride is positive but only about +43 J K⁻¹ mol⁻¹, because the freed ions organise surrounding water molecules.",
      misconception:
        "The first two options are negative, since two moles of gas become one and a liquid becomes a solid. Assuming that dissolving always produces the biggest entropy rise ignores the ordering of solvent around the dissolved ions.",
    },
    {
      id: "gibbs-free-energy",
      type: "concept",
      eyebrow: "A single criterion",
      title: "Gibbs free energy folds the surroundings into one number",
      paragraphs: [
        "Applying the second law requires the entropy change of the universe, but chemists want a test that uses only properties of the system. Substituting ΔS_surr = −ΔH/T into ΔS_total = ΔS − ΔH/T and multiplying through by −T gives −TΔS_total = ΔH − TΔS. The right-hand side is defined as the Gibbs free energy change, ΔG = ΔH − TΔS. Because of the multiplication by a negative quantity, the second law’s requirement that ΔS_total be positive becomes the requirement that ΔG be negative.",
        "So ΔG < 0 identifies a spontaneous, or thermodynamically feasible, process at that temperature; ΔG > 0 means the reverse direction is spontaneous instead; and ΔG = 0 is equilibrium. The word spontaneous is a technical term meaning only that the change can proceed without a continuous input of work. It carries no promise of speed.",
        "Four combinations arise. Exothermic with an entropy increase gives ΔG < 0 at every temperature. Endothermic with an entropy decrease gives ΔG > 0 at every temperature. The two mixed cases are temperature-dependent: exothermic with an entropy decrease is favourable only below a crossover temperature, and endothermic with an entropy increase only above one. Setting ΔG = 0 locates that crossover at T = ΔH/ΔS.",
      ],
      callout: "ΔG = ΔH − TΔS;  spontaneous when ΔG < 0;  crossover at T = ΔH ÷ ΔS",
    },
    {
      id: "gibbs-worked-crossover",
      type: "worked",
      eyebrow: "Worked example",
      title: "Find the temperature at which limestone decomposes",
      scenario:
        "For CaCO₃(s) → CaO(s) + CO₂(g), ΔH° = +178 kJ mol⁻¹ and ΔS° = +161 J K⁻¹ mol⁻¹. Show that the reaction is not feasible at 298 K, and find the temperature above which it becomes feasible. Assume ΔH° and ΔS° are roughly independent of temperature.",
      steps: [
        {
          label: "Make the units consistent",
          decision:
            "ΔH is in kilojoules and ΔS in joules, so one must be converted before they can be combined.",
          working: "ΔS° = 161 J K⁻¹ mol⁻¹ = 0.161 kJ K⁻¹ mol⁻¹",
        },
        {
          label: "Evaluate ΔG° at room temperature",
          decision:
            "Substituting T = 298 K tests feasibility under ordinary conditions before any general conclusion is drawn.",
          working:
            "ΔG° = 178 − (298 × 0.161) = 178 − 48.0 = +130 kJ mol⁻¹, so not feasible",
        },
        {
          label: "Set ΔG° to zero to locate the crossover",
          decision:
            "ΔG changes sign where it passes through zero, and at that point ΔH = TΔS exactly.",
          working: "T = ΔH° ÷ ΔS° = 178 ÷ 0.161 = 1106 K",
        },
        {
          label: "Decide which side of the crossover is favourable",
          decision:
            "Both ΔH and ΔS are positive, so the −TΔS term grows more negative as T rises and eventually wins.",
          working:
            "above 1106 K (about 833 °C), ΔG° < 0 and decomposition is feasible",
        },
      ],
      answer:
        "Limestone is stable at room temperature and decomposes above about 1106 K, roughly 833 °C.",
      plausibility:
        "Industrial lime kilns operate near 900 °C, comfortably above this figure, which is a strong external check. Note also that at 298 K, ΔG° = +130 kJ mol⁻¹ is only a little below ΔH° = +178 kJ mol⁻¹, showing how small the TΔS contribution is at ordinary temperatures.",
    },
    {
      id: "gibbs-check-combinations",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Read feasibility from the two signs",
      prompt:
        "A reaction has ΔH = +25 kJ mol⁻¹ and ΔS = +80 J K⁻¹ mol⁻¹, both roughly constant with temperature. Which statement is correct?",
      options: [
        "It is spontaneous at all temperatures, because ΔS is positive.",
        "It is never spontaneous, because ΔH is positive.",
        "It is spontaneous only above about 313 K.",
        "It is spontaneous only below about 313 K.",
      ],
      correctIndex: 2,
      explanation:
        "Converting, ΔS = 0.080 kJ K⁻¹ mol⁻¹, so ΔG = 25 − 0.080T. This is zero at T = 25 ÷ 0.080 = 312.5 K, and because the coefficient of T is negative, ΔG falls as T rises. So ΔG < 0 above about 313 K.",
      misconception:
        "Judging feasibility from ΔH alone, or from ΔS alone, ignores that the two compete and that temperature sets the weight given to the entropy term. Only the two same-sign cases are temperature-independent.",
    },
    {
      id: "gibbs-kinetics",
      type: "concept",
      eyebrow: "A crucial boundary",
      title: "Feasible is not the same as fast",
      paragraphs: [
        "Gibbs free energy answers one question only: given enough time, in which direction will the change proceed? It says nothing about the height of the activation barrier, and therefore nothing about the rate. Diamond converting to graphite has ΔG° of about −2.9 kJ mol⁻¹ at room temperature and is thermodynamically spontaneous, but the rearrangement demands that strong covalent bonds break, so the rate is unmeasurably slow. Glucose in air is spontaneous by about −2880 kJ mol⁻¹ yet a sugar cube sits on a bench indefinitely.",
        "Such systems are described as kinetically stable, or kinetically inert, even though they are thermodynamically unstable. The distinction matters whenever an argument seems to prove that something ought to happen and observation says otherwise: check whether the objection is to feasibility or to rate, because the two have entirely different remedies. Heating or catalysis addresses rate; only changing ΔH, ΔS or T addresses feasibility.",
        "The link between free energy and the eventual position of a reaction is ΔG° = −RT ln K, where K is the equilibrium constant and R = 8.31 J K⁻¹ mol⁻¹. Read qualitatively, a large negative ΔG° corresponds to K much greater than one and an equilibrium mixture rich in products; ΔG° near zero corresponds to K near one and comparable amounts of both; a positive ΔG° corresponds to K less than one. The relation is logarithmic, so a modest change in ΔG° alters K enormously.",
      ],
      callout: "ΔG° = −RT ln K;  ΔG° sets the destination, activation energy sets the journey time",
    },
    {
      id: "gibbs-check-kinetics",
      type: "check",
      eyebrow: "Test the boundary",
      title: "Explain a spontaneous reaction that never happens",
      prompt:
        "For C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l), ΔG° is about −2880 kJ mol⁻¹ at 298 K, yet a sugar cube left in air does not burn. Which explanation is correct?",
      options: [
        "The reaction is not really spontaneous, because energy must be supplied to start it.",
        "The positive entropy change cancels the negative enthalpy change, leaving no net driving force.",
        "ΔG° predicts direction but not rate, and the activation energy is so large that the rate at 298 K is negligible.",
        "The concentration of oxygen in air is too low for the reaction to be thermodynamically favourable.",
      ],
      correctIndex: 2,
      explanation:
        "Spontaneity is a statement about the sign of ΔG, which compares the initial and final states. The path between them still runs over an activation barrier, and at 298 K almost no collisions carry enough energy to cross it. A flame or an enzyme lowers the effective barrier without changing ΔG°.",
      misconception:
        "Treating the need for ignition as evidence against spontaneity conflates thermodynamics with kinetics. The two are independent: a reaction may be feasible and slow, or infeasible and intrinsically fast in the reverse direction.",
    },
    {
      id: "gibbs-check-graph",
      type: "check",
      eyebrow: "Change the representation",
      title: "Extract ΔH and ΔS from a straight line",
      prompt:
        "For a certain reaction, a plot of ΔG against absolute temperature T is a straight line with a negative gradient and a positive intercept on the ΔG axis. What are the signs of ΔH and ΔS?",
      options: [
        "ΔH positive and ΔS positive",
        "ΔH positive and ΔS negative",
        "ΔH negative and ΔS positive",
        "ΔH negative and ΔS negative",
      ],
      correctIndex: 0,
      explanation:
        "Written as ΔG = (−ΔS)T + ΔH, the equation is a straight line in T with gradient −ΔS and intercept ΔH. A positive intercept means ΔH > 0, and a negative gradient means −ΔS < 0, so ΔS > 0. The line crosses zero at the crossover temperature, above which the reaction is feasible.",
      misconception:
        "Reading the gradient directly as ΔS drops the minus sign in ΔG = ΔH − TΔS and reverses the entropy conclusion. Always rearrange an expression into y = mx + c form before identifying gradient and intercept.",
    },
    {
      id: "gibbs-coupling",
      type: "concept",
      eyebrow: "Biological consequence",
      title: "Unfavourable steps are paid for by favourable ones",
      paragraphs: [
        "Free energy changes add for consecutive steps, exactly as enthalpy changes do, because G is a state function. This makes it possible to drive an unfavourable reaction by coupling it to a strongly favourable one, provided the two share a common chemical intermediate. Merely running a favourable reaction in the same beaker achieves nothing; the two must be genuinely linked, usually by an enzyme that transfers a group from one to the other.",
        "The universal currency for this in living cells is adenosine triphosphate. Hydrolysis of ATP to ADP and inorganic phosphate has a standard free energy change of about −30.5 kJ mol⁻¹ under biochemical standard conditions. Such values are written ΔG°′, and the prime marks exactly that convention: it holds pH at 7 and treats water as the pure solvent, everything else staying at 1 mol dm⁻³ and a stated temperature, where the chemists’ standard state would instead put hydrogen ions at 1 mol dm⁻³, which is pH 0. Biochemistry needs its own reference because any reaction that releases or consumes protons has a quite different free energy change at pH 0 from the one it has in a cell. Under real cellular concentrations the available free energy is nearer −50 kJ mol⁻¹, because the cell holds ATP far above and ADP far below their equilibrium values.",
        "The first step of glycolysis illustrates the principle. Phosphorylating glucose with free phosphate has ΔG°′ of about +13.8 kJ mol⁻¹ and would not proceed. Hexokinase instead transfers the terminal phosphate directly from ATP, and the coupled reaction has ΔG°′ of about −16.7 kJ mol⁻¹, which is strongly favourable. The unfavourable step has not been abolished; it has been paid for.",
      ],
      callout: "coupled steps add: ΔG°(overall) = ΔG°(unfavourable) + ΔG°(favourable)",
    },
    {
      id: "gibbs-check-transfer",
      type: "check",
      eyebrow: "New context",
      title: "Judge whether coupling can pay for a step",
      prompt:
        "Glutamine synthetase joins ammonia to glutamate: glutamate + NH₃ → glutamine + H₂O, with ΔG°′ = +14.2 kJ mol⁻¹. In the cell the enzyme couples this to ATP hydrolysis, ΔG°′ = −30.5 kJ mol⁻¹, through a shared phosphorylated intermediate. Which statement is correct?",
      options: [
        "Coupling changes the bond enthalpies of the synthesis step, making its own ΔG°′ negative.",
        "The coupled process has ΔG°′ = +44.7 kJ mol⁻¹ and therefore cannot occur.",
        "Coupling works by speeding the synthesis up; free energy changes for separate steps cannot be added.",
        "The coupled overall process has ΔG°′ = −16.3 kJ mol⁻¹, so it is feasible even though the synthesis alone is not.",
      ],
      correctIndex: 3,
      explanation:
        "Free energy is a state function, so the changes for linked steps add: +14.2 + (−30.5) = −16.3 kJ mol⁻¹. The overall process is feasible, while the isolated synthesis remains unfavourable with its own ΔG°′ unchanged at +14.2 kJ mol⁻¹.",
      misconception:
        "Subtracting instead of adding gives +44.7 kJ mol⁻¹ and reverses the conclusion. It is also wrong to imagine that coupling alters the thermodynamics of the individual step; it changes which overall reaction is actually taking place.",
    },
    {
      id: "gibbs-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Direction is a competition; rate is a separate question",
      points: [
        "Entropy measures the number of microstates accessible to a system, through S = k_B ln W, not vagueness about tidiness.",
        "Predict the sign of ΔS from the change in moles of gas first, then from phase changes and dissolution.",
        "The second law applies to system plus surroundings, and ΔS_surr = −ΔH/T is how an exothermic reaction assists itself.",
        "ΔG = ΔH − TΔS repackages the second law in system properties alone, with ΔG < 0 meaning thermodynamically feasible.",
        "The two mixed sign combinations change feasibility at the crossover temperature T = ΔH ÷ ΔS.",
        "ΔG° = −RT ln K links free energy to the equilibrium position, while activation energy alone governs how quickly that position is reached.",
      ],
      transferRule:
        "When a prediction and an observation disagree, first ask whether the disagreement is about direction or about rate; they need different explanations.",
      nextLessonId: "lesson.chemistry.kinetics",
    },
  ],
};

const kinetics: Lesson = {
  id: "lesson.chemistry.kinetics",
  slug: "reaction-rate-and-catalysis",
  number: "4.4",
  stageId: "stage.chemistry_reactions",
  discipline: "chemistry",
  title: "Reaction rate, collision models, and catalysis",
  summary:
    "Measure how fast a reaction proceeds, explain each rate-changing factor through collisions and energy distributions, and determine rate laws from experimental data.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Define reaction rate as a change in concentration per unit time and scale it by stoichiometric coefficients.",
    "Extract initial and average rates from a concentration-time graph.",
    "Explain the effects of concentration, pressure, surface area, and temperature using collision theory and the Maxwell-Boltzmann distribution.",
    "Determine reaction orders and the rate constant from an initial-rates table.",
    "Explain how catalysts and enzymes increase rate without altering the enthalpy change.",
  ],
  prerequisiteLessonIds: ["lesson.chemistry.thermochemistry"],
  blocks: [
    {
      id: "kin-purpose",
      type: "concept",
      eyebrow: "Start with meaning",
      title: "Rate is a gradient, not an amount",
      paragraphs: [
        "Whether a reaction is feasible and how quickly it happens are separate questions with separate answers. Kinetics asks the second one. The rate of a reaction is defined as the change in concentration of a named species divided by the time taken, with units of mol dm⁻³ s⁻¹. Because a reactant concentration falls, a minus sign is inserted for reactants so that the reported rate is positive.",
        "Different species change at different speeds in the same reaction. In 2N₂O₅ → 4NO₂ + O₂, nitrogen dioxide appears four times faster than oxygen. To give the reaction a single unambiguous rate, each species rate is divided by its stoichiometric coefficient. Always state which species a quoted rate refers to; a rate without a named species is incomplete.",
        "Rate is almost never constant. As reactants are consumed their concentrations fall, collisions become less frequent, and the reaction slows. That is why a single number for the whole experiment is usually less useful than a rate quoted at a stated moment, and why the initial rate, measured before any appreciable consumption, is the standard basis for comparison.",
      ],
      callout: "rate = −(1/a) d[A]/dt = +(1/c) d[C]/dt, in mol dm⁻³ s⁻¹",
    },
    {
      id: "kin-visual",
      type: "visual",
      eyebrow: "See the model",
      title: "A concentration-time curve carries the rate in its gradient",
      introduction:
        "Plot the concentration of a reactant against time and follow the curve. The rate at any instant is not the height of the curve but its steepness.",
      visual: "rate_curve",
      caption:
        "The gradient of a tangent gives the instantaneous rate: steepest at t = 0, flattening as reactant is consumed, and horizontal once the reaction stops. Drawing a chord between two points instead gives the average rate over that interval, which is always smaller in magnitude than the initial rate for a decaying curve.",
    },
    {
      id: "kin-collision",
      type: "concept",
      eyebrow: "The formal treatment",
      title: "Only a small fraction of collisions can react",
      paragraphs: [
        "Collision theory begins with a simple requirement: particles cannot react unless they meet. But the great majority of meetings achieve nothing. A collision leads to reaction only if it satisfies two conditions. First, the combined kinetic energy along the line of approach must at least equal the activation energy Eₐ, the minimum needed to begin breaking the existing bonds. Second, the particles must be correctly oriented, so that the reacting parts of each molecule actually meet.",
        "The orientation requirement matters more as molecules become larger and more complicated, and it is why reaction rates in organic chemistry are often far lower than collision frequencies alone would suggest. Together the two conditions mean that only a tiny proportion of collisions in a typical mixture is successful; in many gas reactions at room temperature the figure is smaller than one in a billion.",
        "This framework explains the standard rate-changing factors without any new ideas. Raising the concentration of a solution, or the pressure of a gas, packs the particles closer together and raises the collision frequency. Grinding a solid into powder increases the surface area exposed and so increases the number of collision sites available at the interface. In each case the proportion of successful collisions is unchanged; only the number of attempts per second rises.",
      ],
      callout: "rate depends on collision frequency × fraction with E ≥ Eₐ × fraction correctly oriented",
    },
    {
      id: "kin-worked-rate",
      type: "worked",
      eyebrow: "Worked example",
      title: "Convert a concentration change into rates for each species",
      scenario:
        "Hydrogen peroxide decomposes as 2H₂O₂(aq) → 2H₂O(l) + O₂(g). Its concentration falls from 0.800 to 0.560 mol dm⁻³ over the first 120 s. Find the average rate of consumption of H₂O₂, the average rate of the reaction, and the average rate of formation of O₂.",
      steps: [
        {
          label: "Find the change and divide by the time",
          decision:
            "An average rate over an interval is the total change divided by the interval, which is the gradient of the chord.",
          working:
            "Δ[H₂O₂] = 0.560 − 0.800 = −0.240 mol dm⁻³ over 120 s; rate of consumption = 0.240 ÷ 120 = 2.00 × 10⁻³ mol dm⁻³ s⁻¹",
        },
        {
          label: "Divide by the stoichiometric coefficient",
          decision:
            "The single rate of reaction is defined so that it is the same whichever species is monitored, which requires dividing by the coefficient.",
          working:
            "rate of reaction = 2.00 × 10⁻³ ÷ 2 = 1.00 × 10⁻³ mol dm⁻³ s⁻¹",
        },
        {
          label: "Scale up to the chosen product",
          decision:
            "Oxygen has coefficient 1, so its rate of formation equals the rate of reaction multiplied by 1.",
          working:
            "rate of formation of O₂ = 1 × 1.00 × 10⁻³ = 1.00 × 10⁻³ mol dm⁻³ s⁻¹",
        },
        {
          label: "Compare with the initial rate",
          decision:
            "The curve is steepest at the start, so the average over the interval must underestimate the instantaneous rate at t = 0.",
          working:
            "the tangent at t = 0 is steeper than the chord, so the true initial rate exceeds 2.00 × 10⁻³ mol dm⁻³ s⁻¹ for H₂O₂",
        },
      ],
      answer:
        "Hydrogen peroxide is consumed at an average 2.00 × 10⁻³ mol dm⁻³ s⁻¹, the rate of reaction is 1.00 × 10⁻³ mol dm⁻³ s⁻¹, and oxygen forms at 1.00 × 10⁻³ mol dm⁻³ s⁻¹.",
      plausibility:
        "Oxygen must appear at half the rate at which peroxide disappears, since two molecules of peroxide are needed for each molecule of oxygen, and the numbers agree. About 30 % of the peroxide has reacted in two minutes, so a rate of this order is reasonable for a decomposition that takes several minutes overall.",
    },
    {
      id: "kin-check-rate",
      type: "check",
      eyebrow: "Your turn",
      title: "Scale a rate between species",
      prompt:
        "In the gas-phase decomposition 2N₂O₅(g) → 4NO₂(g) + O₂(g), nitrogen dioxide is formed at 4.0 × 10⁻³ mol dm⁻³ s⁻¹ at a particular moment. At what rate is N₂O₅ being consumed at that moment?",
      options: [
        "1.0 × 10⁻³ mol dm⁻³ s⁻¹",
        "2.0 × 10⁻³ mol dm⁻³ s⁻¹",
        "4.0 × 10⁻³ mol dm⁻³ s⁻¹",
        "8.0 × 10⁻³ mol dm⁻³ s⁻¹",
      ],
      correctIndex: 1,
      explanation:
        "The coefficients give four NO₂ formed per two N₂O₅ consumed, a ratio of 2 : 1. So N₂O₅ disappears at half the rate at which NO₂ appears: 4.0 × 10⁻³ ÷ 2 = 2.0 × 10⁻³ mol dm⁻³ s⁻¹.",
      misconception:
        "Choosing 8.0 × 10⁻³ inverts the ratio, and choosing 4.0 × 10⁻³ assumes every species in a reaction changes at the same rate. Species rates are in the ratio of the coefficients, not equal.",
    },
    {
      id: "kin-boltzmann",
      type: "concept",
      eyebrow: "A second layer",
      title: "Temperature works through the tail of the energy distribution",
      paragraphs: [
        "At any temperature the particles in a sample do not share a single energy. Their molecular energies follow the Maxwell-Boltzmann distribution: a curve that starts at zero, rises to a peak at a typical energy, and then falls away in a long tail towards high energies without ever reaching the axis. The area under the whole curve is the total number of particles, and the area beyond Eₐ is the number able to react on collision.",
        "Raising the temperature moves the peak to a higher energy and flattens it, since the total area is fixed. The important consequence is at the far right: the tail beyond Eₐ lifts sharply, and because that region was a very small fraction to begin with, a modest proportional change in the typical energy produces a very large proportional change in the reacting fraction. This is why a rise of 10 K near room temperature often roughly doubles a rate, while the collision frequency itself rises by under 2 %.",
        "Temperature is therefore qualitatively different from the other factors. Concentration, pressure and surface area change how often particles meet; temperature changes both that and, far more importantly, what fraction of those meetings carries enough energy. Only temperature and catalysis alter the fraction of collisions that succeed, which is why they can change a rate by orders of magnitude while doubling a concentration merely doubles it. When an unfamiliar account reports a dramatic change in rate, temperature or a catalyst is almost always involved somewhere in the description.",
      ],
      callout: "a 10 K rise near 298 K changes collision frequency by about 2 % but can double the successful fraction",
    },
    {
      id: "kin-check-temperature",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Say why a small heating makes a big difference",
      prompt:
        "Warming a reaction mixture from 25 °C to 35 °C roughly doubles its rate. Which explanation is best supported by the Maxwell-Boltzmann distribution?",
      options: [
        "The mean kinetic energy roughly doubles, so each collision is about twice as energetic.",
        "The collision frequency roughly doubles, because the particles move about twice as fast.",
        "The fraction of collisions with energy at or above Eₐ rises steeply, because that fraction lies in the exponential tail of the distribution.",
        "The activation energy falls as the temperature rises, so more collisions clear the barrier.",
      ],
      correctIndex: 2,
      explanation:
        "Mean molecular kinetic energy is proportional to absolute temperature, so it rises only from 298 K to 308 K, about 3 %, and mean speed rises by about half of that. The reason the rate doubles is that the number of particles beyond Eₐ is governed by an exponential factor, so a small shift in the distribution multiplies that small fraction several-fold.",
      misconception:
        "Attributing the effect mainly to collision frequency is the classic error; the frequency change is a few per cent at most. Activation energy is a property of the reaction pathway and is not changed by heating.",
    },
    {
      id: "kin-ratelaw",
      type: "concept",
      eyebrow: "Quantifying the dependence",
      title: "Orders are measured, never read off the equation",
      paragraphs: [
        "For many reactions the rate can be written as rate = k[A]^m[B]^n, where k is the rate constant and m and n are the orders with respect to A and B. Their sum is the overall order. Crucially, m and n must be found by experiment; they are not the stoichiometric coefficients. The balanced equation describes the overall change, while the rate law reflects only the slowest step of the mechanism, so a species with a large coefficient may not appear in the rate law at all.",
        "The standard experimental method is the initial-rates approach. Run the reaction several times, changing one reactant concentration at a time while holding the others fixed, and measure the initial rate of each run. If doubling a concentration leaves the rate unchanged the order is zero; if it doubles the rate the order is one; if it quadruples the rate the order is two. Once all orders are known, substituting any single run into the rate law gives k, whose units depend on the overall order and must be worked out each time.",
        "A first-order reaction has the distinctive property of a constant half-life: the time for the concentration to halve is the same wherever you start, since t½ = ln 2 ÷ k. Checking successive half-lives on a concentration-time curve is therefore a quick test for first-order behaviour, and it is the reason radioactive decay and many drug-elimination processes are described by a single half-life figure.",
      ],
      callout: "rate = k[A]^m[B]^n, orders determined experimentally;  first order: t½ = ln 2 ÷ k, independent of starting concentration",
    },
    {
      id: "kin-worked-order",
      type: "worked",
      eyebrow: "Worked example",
      title: "Determine orders and the rate constant from a table",
      scenario:
        "For A + B → products, initial rates were measured at constant temperature. Run 1: [A] = 0.10, [B] = 0.10 mol dm⁻³, rate = 2.0 × 10⁻⁴ mol dm⁻³ s⁻¹. Run 2: [A] = 0.20, [B] = 0.10, rate = 8.0 × 10⁻⁴. Run 3: [A] = 0.10, [B] = 0.20, rate = 4.0 × 10⁻⁴. Find the rate law and the rate constant.",
      steps: [
        {
          label: "Find the order with respect to A",
          decision:
            "Compare runs 1 and 2, which differ only in [A], so any rate change must be caused by A alone.",
          working:
            "[A] × 2 gives rate × 4; since 2^m = 4, m = 2, so the reaction is second order in A",
        },
        {
          label: "Find the order with respect to B",
          decision:
            "Compare runs 1 and 3, which differ only in [B], isolating the effect of B in the same way.",
          working:
            "[B] × 2 gives rate × 2; since 2^n = 2, n = 1, so the reaction is first order in B",
        },
        {
          label: "Write the rate law and find k",
          decision:
            "With both orders known, any single run can be substituted, and run 1 has the simplest numbers.",
          working:
            "rate = k[A]²[B]; k = 2.0 × 10⁻⁴ ÷ (0.10² × 0.10) = 2.0 × 10⁻⁴ ÷ 1.0 × 10⁻³ = 0.20",
        },
        {
          label: "Derive the units of k",
          decision:
            "The units of k must make the right-hand side come out in mol dm⁻³ s⁻¹, and they change with overall order.",
          working:
            "mol dm⁻³ s⁻¹ ÷ (mol dm⁻³)³ = mol⁻² dm⁶ s⁻¹, so k = 0.20 mol⁻² dm⁶ s⁻¹",
        },
      ],
      answer:
        "The rate law is rate = k[A]²[B], the overall order is three, and k = 0.20 mol⁻² dm⁶ s⁻¹.",
      plausibility:
        "Test the law on a fresh combination: at [A] = 0.30 and [B] = 0.20 it predicts 0.20 × 0.0900 × 0.20 = 3.6 × 10⁻³ mol dm⁻³ s⁻¹, eighteen times run 1, which matches 3² × 2 for tripling A and doubling B. Note that these orders could not have been guessed from the equation A + B → products, which suggests one and one.",
    },
    {
      id: "kin-check-halflife",
      type: "check",
      eyebrow: "Change the representation",
      title: "Read a first-order decay from successive halvings",
      prompt:
        "A reaction is first order in A. The concentration of A falls from 0.80 to 0.40 mol dm⁻³ in the first 50 s. What is [A] after 150 s in total?",
      options: [
        "0.00 mol dm⁻³",
        "0.10 mol dm⁻³",
        "0.20 mol dm⁻³",
        "0.27 mol dm⁻³",
      ],
      correctIndex: 1,
      explanation:
        "The half-life of a first-order reaction is constant, so 50 s is one half-life whatever the starting concentration. In 150 s three half-lives elapse: 0.80 → 0.40 → 0.20 → 0.10 mol dm⁻³.",
      misconception:
        "Answering 0.00 assumes the concentration keeps falling by 0.40 mol dm⁻³ every 50 s, which is zero-order behaviour and would give a straight-line graph. A first-order decay approaches zero without ever reaching it. The value 0.27 mol dm⁻³ comes from dividing by three rather than halving three times, and 0.20 mol dm⁻³ from stopping after two half-lives at 100 s.",
    },
    {
      id: "kin-catalysis",
      type: "concept",
      eyebrow: "Lowering the barrier",
      title: "A catalyst offers a different route, not a push",
      paragraphs: [
        "A catalyst increases the rate of a reaction by providing an alternative pathway with a lower activation energy, and is not consumed overall, although it is genuinely involved and regenerated. Because the reactants and products are unchanged, ΔH and ΔG are unchanged; only the barrier between them is lower. On a reaction profile the catalysed route shows a lower peak, often split into several smaller peaks, while the start and end levels stay exactly where they were.",
        "Since the barrier is lower, a much larger fraction of the Maxwell-Boltzmann distribution lies above it, and the rate rises sharply. A catalyst lowers the barrier equally in both directions, so it accelerates the forward and reverse reactions by the same factor. It therefore brings a system to equilibrium sooner without changing where that equilibrium lies.",
        "Enzymes are protein catalysts that achieve extraordinary rate enhancements by binding the reactant, called the substrate, in an active site shaped to stabilise the transition state. Because the number of active sites is finite, an enzyme shows behaviour no simple catalyst shows: at low substrate concentration the rate rises nearly in proportion to it, but as the sites fill the rate approaches a maximum, V_max, and becomes effectively zero order in substrate. The system is then saturated, and further substrate has almost no effect.",
      ],
      callout: "a catalyst lowers Eₐ for both directions equally, so it changes the rate but never the position of equilibrium or ΔH",
    },
    {
      id: "kin-visual-catalyst",
      type: "visual",
      eyebrow: "See the difference",
      title: "The catalysed route starts and ends in the same places",
      introduction:
        "Compare two reaction profiles drawn on the same axes: one uncatalysed, one catalysed. Look at what changes and, more importantly, at what does not.",
      visual: "energy_profile",
      caption:
        "The catalysed curve has a lower maximum, so a far larger fraction of collisions can cross it. The reactant and product levels are identical on both curves, which is the visual proof that a catalyst cannot alter ΔH, ΔG, or the yield at equilibrium.",
    },
    {
      id: "kin-check-transfer",
      type: "check",
      eyebrow: "New context",
      title: "Interpret an enzyme rate curve",
      prompt:
        "The initial rate of an enzyme-catalysed reaction is measured against substrate concentration at fixed enzyme concentration. Below about 2 mmol dm⁻³ the rate is nearly proportional to substrate concentration, but above about 10 mmol dm⁻³ it levels off at 12 μmol dm⁻³ s⁻¹, and raising the substrate from 20 to 40 mmol dm⁻³ changes it hardly at all. What is the best explanation of the plateau?",
      options: [
        "The excess substrate is denaturing the enzyme, so the rate can rise no further.",
        "The activation energy increases as substrate accumulates, cancelling the effect of the higher concentration.",
        "The reaction has reached equilibrium, so no further net change in rate is possible.",
        "Essentially every active site is occupied, so the rate is limited by how fast enzyme-substrate complexes turn over rather than by how often substrate is encountered.",
      ],
      correctIndex: 3,
      explanation:
        "At high substrate concentration the enzyme is saturated: the sites are all busy, so the rate depends only on the number of enzyme molecules and their turnover rate, making the reaction zero order in substrate. Doubling the enzyme concentration would double the plateau, which is the standard test of this explanation.",
      misconception:
        "Confusing a plateau in rate with reaching equilibrium mixes up how fast a reaction goes with how far it goes; these are initial rates, measured before any appreciable product has accumulated. Substrate does not raise the activation energy.",
    },
    {
      id: "kin-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "Every rate factor acts through collisions or through energy",
      points: [
        "Rate is the gradient of a concentration-time curve, quoted per named species and divided by that species' coefficient to give one rate for the reaction.",
        "Initial rate comes from the tangent at t = 0 and always exceeds the average rate over a later interval.",
        "A collision succeeds only if it exceeds the activation energy and has the correct orientation.",
        "Concentration, pressure and surface area raise the number of collisions; temperature and catalysis raise the fraction that succeed.",
        "Orders in rate = k[A]^m[B]^n come from experiment, not from the balanced equation, and the units of k follow from the overall order.",
        "A catalyst lowers the activation energy for both directions equally, so it speeds attainment of equilibrium without moving it, and enzymes add saturation behaviour at high substrate concentration.",
      ],
      transferRule:
        "When a factor changes a rate, ask whether it changed the number of collisions or the fraction of them that can react; the two mechanisms predict very different sizes of effect.",
      nextLessonId: "lesson.chemistry.equilibrium",
    },
  ],
};

const equilibrium: Lesson = {
  id: "lesson.chemistry.equilibrium",
  slug: "dynamic-equilibrium",
  number: "4.5",
  stageId: "stage.chemistry_reactions",
  discipline: "chemistry",
  title: "Dynamic equilibrium and Le Chatelier’s principle",
  summary:
    "Treat a reversible reaction as two opposing processes running at equal rates, quantify its position with an equilibrium constant, and predict how it responds to a disturbance.",
  estimatedMinutes: 36,
  reviewStatus: "unreviewed",
  objectives: [
    "Describe dynamic equilibrium as equal forward and reverse rates with constant, non-zero concentrations.",
    "Write the equilibrium constant expression Kc from a balanced equation and justify the omission of pure solids and liquids.",
    "Calculate Kc from equilibrium concentrations and solve an equilibrium problem using an ICE table.",
    "Compare the reaction quotient Q with Kc to predict the direction of change.",
    "Apply Le Chatelier’s principle to concentration, pressure, and temperature, recognising that only temperature changes Kc.",
  ],
  prerequisiteLessonIds: [
    "lesson.chemistry.kinetics",
    "lesson.chemistry.entropy_gibbs",
  ],
  blocks: [
    {
      id: "eqm-purpose",
      type: "concept",
      eyebrow: "Start with meaning",
      title: "Nothing changes, and yet everything is still happening",
      paragraphs: [
        "Many reactions do not run to completion. Instead the products begin converting back to reactants, and eventually the two opposing processes reach the same rate. From that moment the concentration of every species stays constant, and the mixture looks finished. It is not: molecules continue to react in both directions, but each conversion is matched by its reverse. This is dynamic equilibrium, and the word dynamic is the important half.",
        "Two conditions are essential. The system must be closed, so that no substance escapes, and the temperature must be constant. If carbon dioxide is allowed to leave an open flask, the reverse reaction is starved and the system never settles. Experiments with isotopic labelling confirm the dynamic picture directly: label the reactants and the label soon appears in the products even after the concentrations have stopped changing.",
        "Equilibrium is not the same as equal amounts. The forward and reverse rates are equal, but the concentrations that make those rates equal can be wildly different, so an equilibrium mixture may be almost entirely products, almost entirely reactants, or anything between. Describing where a system settles therefore requires a number rather than a word, and that number is the equilibrium constant. It is also worth separating two ideas that are easily merged: how far a reaction goes is a question about equilibrium, while how quickly it gets there is a question about rate.",
      ],
      callout: "at equilibrium: rate(forward) = rate(reverse), concentrations constant but not equal",
    },
    {
      id: "eqm-visual",
      type: "visual",
      eyebrow: "See the model",
      title: "Two rates converge while concentrations level off",
      introduction:
        "Follow the forward and reverse rates on one axis and the concentrations on another, from mixing until the system settles.",
      visual: "equilibrium",
      caption:
        "The forward rate falls as reactants are consumed and the reverse rate rises from zero as products accumulate; where the two curves meet, the concentration curves become horizontal. Both rates remain non-zero, which is why the state is dynamic rather than finished.",
    },
    {
      id: "eqm-kc",
      type: "concept",
      eyebrow: "The formal treatment",
      title: "The equilibrium constant fixes the destination",
      paragraphs: [
        "For a general reaction aA + bB ⇌ cC + dD, the equilibrium constant in terms of concentration is Kc = ([C]^c [D]^d) ÷ ([A]^a [B]^b), with every concentration measured at equilibrium in mol dm⁻³ and raised to the power of its stoichiometric coefficient. Products go on top by convention. Kc depends only on the temperature; it is unaffected by starting concentrations, by pressure, by the presence of a catalyst, or by how the equilibrium was approached.",
        "Pure solids and pure liquids are omitted from the expression. Their concentration, in the sense of amount per unit volume of that substance, is fixed by their density and does not change as the reaction proceeds, so adding more solid calcium carbonate to a decomposition adds no new information. For CaCO₃(s) ⇌ CaO(s) + CO₂(g), the expression reduces to Kc = [CO₂]. Water is omitted for the same reason when it is the solvent in a dilute aqueous system.",
        "The magnitude of Kc says where the equilibrium lies. A value much greater than one means the top of the fraction dominates, so products are heavily favoured and the reaction goes nearly to completion. A value much less than one means reactants are favoured and little product forms. A value near one means comparable amounts of both. Kc carries units that depend on the difference in the powers, so quote them unless the powers cancel.",
      ],
      callout: "Kc = ([C]^c [D]^d) ÷ ([A]^a [B]^b), equilibrium concentrations only, pure solids and liquids omitted",
    },
    {
      id: "eqm-worked-kc",
      type: "worked",
      eyebrow: "Worked example",
      title: "Calculate Kc from an equilibrium mixture",
      scenario:
        "A 2.00 dm³ vessel at a fixed temperature contains, at equilibrium, 0.400 mol of N₂, 0.600 mol of H₂ and 0.200 mol of NH₃ for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Find Kc with its units.",
      steps: [
        {
          label: "Convert amounts to concentrations",
          decision:
            "The expression uses concentrations, not amounts, so every value must be divided by the vessel volume first.",
          working:
            "[N₂] = 0.400 ÷ 2.00 = 0.200; [H₂] = 0.600 ÷ 2.00 = 0.300; [NH₃] = 0.200 ÷ 2.00 = 0.100 mol dm⁻³",
        },
        {
          label: "Write the expression from the coefficients",
          decision:
            "Each concentration is raised to the power of its coefficient, with products in the numerator.",
          working: "Kc = [NH₃]² ÷ ([N₂] × [H₂]³)",
        },
        {
          label: "Substitute and evaluate",
          decision:
            "Work out the powers before dividing, since cubing a number below one changes it substantially.",
          working:
            "Kc = (0.100)² ÷ (0.200 × (0.300)³) = 0.0100 ÷ (0.200 × 0.0270) = 0.0100 ÷ 0.00540 = 1.85",
        },
        {
          label: "Work out the units",
          decision:
            "Units follow from the powers: two on top and four on the bottom leaves a net power of minus two.",
          working:
            "(mol dm⁻³)² ÷ (mol dm⁻³)⁴ = (mol dm⁻³)⁻² = mol⁻² dm⁶",
        },
      ],
      answer:
        "Kc = 1.85 mol⁻² dm⁶ at this temperature, a value near one, so neither side overwhelmingly dominates.",
      plausibility:
        "Skipping the volume conversion and using amounts directly would give 0.0400 ÷ (0.400 × 0.216) = 0.463, a different number with no physical meaning. The check that the concentrations are all a factor of two below the amounts confirms the conversion was applied to every species.",
    },
    {
      id: "eqm-check-expression",
      type: "check",
      eyebrow: "Your turn",
      title: "Decide what belongs in the expression",
      prompt:
        "Which is the correct equilibrium constant expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?",
      options: [
        "Kc = [CO₂]",
        "Kc = [CaO][CO₂] ÷ [CaCO₃]",
        "Kc = [CaO][CO₂]",
        "Kc = [CO₂] ÷ [CaCO₃]",
      ],
      correctIndex: 0,
      explanation:
        "Both solids are pure phases whose concentrations are fixed by their densities and cannot change as the reaction proceeds, so they are omitted. Only the gas remains, giving Kc = [CO₂]. A consequence is that at a given temperature the equilibrium pressure of carbon dioxide over the solids is fixed, regardless of how much of either solid is present.",
      misconception:
        "Including solids implies that adding more limestone would shift the position of equilibrium. It does not, because the concentration of a pure solid is unchangeable; only the amount of it changes.",
    },
    {
      id: "eqm-quotient",
      type: "concept",
      eyebrow: "A second layer",
      title: "The reaction quotient tells you which way a mixture must move",
      paragraphs: [
        "The same expression can be evaluated for a mixture that is not at equilibrium. The result is called the reaction quotient, Q. It uses the current concentrations rather than the equilibrium ones, and comparing it with Kc gives the direction of change immediately. If Q is less than Kc there is too little product, so the net reaction proceeds forwards. If Q exceeds Kc there is too much product, so the net reaction proceeds backwards. If Q equals Kc the mixture is already at equilibrium.",
        "This comparison is more reliable than intuition, because it takes the stoichiometric powers into account. A mixture with equal concentrations of every species is not usually at equilibrium, and whether it moves forwards or backwards depends entirely on the value of Kc for that reaction at that temperature. Q also has a useful interpretive role: it changes continuously as a reaction proceeds, starting at zero when only reactants are present and rising until it meets Kc, at which point net change stops even though molecular events do not.",
        "When starting concentrations are known and Kc is known, the unknown equilibrium composition is found with an ICE table: one row for initial concentrations, one for the change, and one for the equilibrium values. Every entry in the change row is a multiple of a single unknown x, weighted by the stoichiometric coefficient and negative for reactants. Substituting the equilibrium row into the Kc expression gives one equation in x.",
      ],
      callout: "Q < Kc, net forward change;  Q > Kc, net reverse change;  Q = Kc, equilibrium",
    },
    {
      id: "eqm-worked-ice",
      type: "worked",
      eyebrow: "Worked example",
      title: "Solve for an equilibrium composition with an ICE table",
      scenario:
        "At 720 K, Kc = 50.0 for H₂(g) + I₂(g) ⇌ 2HI(g). A 1.00 dm³ vessel is charged with 1.00 mol of H₂ and 1.00 mol of I₂ and nothing else. Find the equilibrium concentration of hydrogen iodide.",
      steps: [
        {
          label: "Set out initial, change, and equilibrium rows",
          decision:
            "Only one unknown is needed because the coefficients fix how much of each species changes relative to the others.",
          working:
            "initial: [H₂] = [I₂] = 1.00, [HI] = 0; change: −x, −x, +2x; equilibrium: (1.00 − x), (1.00 − x), 2x",
        },
        {
          label: "Substitute the equilibrium row into the expression",
          decision:
            "Kc is written from the coefficients, with HI squared because two moles are formed.",
          working: "50.0 = (2x)² ÷ [(1.00 − x)(1.00 − x)]",
        },
        {
          label: "Take the square root of both sides",
          decision:
            "Both numerator and denominator are perfect squares here, so a root avoids solving a quadratic.",
          working: "√50.0 = 2x ÷ (1.00 − x), so 7.071 = 2x ÷ (1.00 − x)",
        },
        {
          label: "Solve for x and build the answer",
          decision:
            "x is the amount of each reactant consumed, and the hydrogen iodide concentration is twice it.",
          working:
            "7.071 − 7.071x = 2x; 9.071x = 7.071; x = 0.780; [HI] = 2x = 1.56 mol dm⁻³",
        },
      ],
      answer:
        "At equilibrium [HI] = 1.56 mol dm⁻³, with [H₂] = [I₂] = 0.220 mol dm⁻³ remaining.",
      plausibility:
        "Substituting back gives 1.56² ÷ 0.220² = 2.43 ÷ 0.0484 = 50.2, which recovers Kc within rounding. A value of Kc well above one predicts a mixture rich in product, and 78 % conversion fits that. Taking the negative square root instead gives x = 1.39, which is rejected because it would make the reactant concentrations negative.",
    },
    {
      id: "eqm-check-quotient",
      type: "check",
      eyebrow: "Apply the second layer",
      title: "Compare Q with Kc before predicting",
      prompt:
        "For N₂O₄(g) ⇌ 2NO₂(g), Kc = 0.210 mol dm⁻³ at a certain temperature. A vessel is found to contain [N₂O₄] = 0.100 mol dm⁻³ and [NO₂] = 0.100 mol dm⁻³. What happens next?",
      options: [
        "Net forward reaction, forming more NO₂, because Q = 0.100 mol dm⁻³ is less than Kc.",
        "Net reverse reaction, forming more N₂O₄, because Q = 0.100 mol dm⁻³ is less than Kc.",
        "Nothing, because the two concentrations are already equal.",
        "Net forward reaction, because Q = 1.00 exceeds Kc.",
      ],
      correctIndex: 0,
      explanation:
        "Q = [NO₂]² ÷ [N₂O₄] = (0.100)² ÷ 0.100 = 0.100 mol dm⁻³, which is smaller than Kc = 0.210 mol dm⁻³. Too little product is present, so the net change is forwards until Q rises to meet Kc.",
      misconception:
        "Option 4 forgets to square the NO₂ concentration, and option 3 assumes equal concentrations mean equilibrium. Equilibrium is defined by Q matching Kc, not by any species being equal to another.",
    },
    {
      id: "eqm-lechatelier",
      type: "concept",
      eyebrow: "Responding to disturbance",
      title: "The system opposes the change imposed on it",
      paragraphs: [
        "Le Chatelier’s principle states that when a system at equilibrium is disturbed, the position of equilibrium shifts in the direction that partly opposes the disturbance. Adding a reactant lowers Q below Kc, so the system consumes some of what was added and moves forwards; removing a product does the same. Continuously removing a product is how an industrial process drives a reaction with an unfavourable Kc towards completion.",
        "Changing the volume of a gaseous system changes all concentrations at once. Compressing the mixture raises every concentration, but because the powers on the two sides differ, Q moves away from Kc unless the total gas amount is the same on both sides. The system responds by shifting towards the side with fewer moles of gas, which partly relieves the increase in pressure. Adding an inert gas at constant volume changes nothing, because no concentration in the expression is altered.",
        "Temperature is the exception, and the distinction is essential. Concentration and pressure changes move the position of equilibrium while leaving Kc untouched; a temperature change alters Kc itself. Raising the temperature favours the endothermic direction, so for an exothermic forward reaction Kc falls as temperature rises. A catalyst changes neither: it lowers the activation energy for both directions equally, so equilibrium arrives sooner but at exactly the same place.",
      ],
      callout: "concentration and pressure move the position only; temperature is the one variable that changes Kc",
    },
    {
      id: "eqm-check-pressure",
      type: "check",
      eyebrow: "Change the representation",
      title: "Separate the position of equilibrium from the constant",
      prompt:
        "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹. The mixture is compressed into half its original volume at constant temperature. Which statement is correct?",
      options: [
        "The equilibrium amount of NH₃ increases and Kc increases with it.",
        "Nothing shifts, because only a catalyst can change the position of an equilibrium.",
        "The equilibrium amount of NH₃ decreases, because the forward reaction is exothermic.",
        "The equilibrium amount of NH₃ increases while Kc is unchanged.",
      ],
      correctIndex: 3,
      explanation:
        "Halving the volume doubles every concentration. In Q = [NH₃]² ÷ ([N₂][H₂]³) the numerator is multiplied by 4 and the denominator by 16, so Q falls to a quarter of Kc and the system shifts forwards, towards the side with fewer moles of gas, four becoming two. Kc itself depends only on temperature, which has not changed.",
      misconception:
        "Assuming that anything which increases yield must increase Kc conflates the position of equilibrium with the constant. The exothermic sign of ΔH is relevant only to a temperature change, and a catalyst affects rate alone.",
    },
    {
      id: "eqm-application",
      type: "concept",
      eyebrow: "Equilibrium at work",
      title: "Physiology runs on shifted equilibria",
      paragraphs: [
        "Haemoglobin binds oxygen reversibly, which can be summarised as Hb + 4O₂ ⇌ Hb(O₂)₄. In the lungs the partial pressure of oxygen is high, so the position lies far to the right and the protein loads. In respiring tissue the oxygen partial pressure is low, Q falls below K, and the equilibrium shifts left, unloading oxygen exactly where it is needed. No control system is required; the shift is an automatic consequence of the local concentration.",
        "Carbon dioxide from respiration adds a second layer through the equilibrium CO₂(aq) + H₂O(l) ⇌ H⁺(aq) + HCO₃⁻(aq). Active tissue generates carbon dioxide, which raises the local hydrogen ion concentration. Those protons bind to haemoglobin and lower its affinity for oxygen, shifting the oxygen equilibrium further to the left. This is the Bohr effect: the tissue that is working hardest triggers the largest release of oxygen.",
        "The same carbonic acid equilibrium is the body’s principal blood buffer. Because it connects a dissolved gas to a hydrogen ion concentration, breathing rate provides direct control over blood pH. Exhaling carbon dioxide faster than it is produced removes a species on the left-hand side and pulls the equilibrium that way, consuming hydrogen ions; retaining carbon dioxide does the reverse.",
      ],
      callout: "CO₂(aq) + H₂O(l) ⇌ H⁺(aq) + HCO₃⁻(aq): breathing rate controls a chemical equilibrium",
    },
    {
      id: "eqm-check-transfer",
      type: "check",
      eyebrow: "New context",
      title: "Shift a physiological equilibrium",
      prompt:
        "A frightened patient hyperventilates, expelling carbon dioxide from the lungs faster than metabolism produces it, so dissolved CO₂ in the blood falls. Using CO₂(aq) + H₂O(l) ⇌ H⁺(aq) + HCO₃⁻(aq), what happens to blood pH and why?",
      options: [
        "pH falls, because removing CO₂ drives the equilibrium to the right and releases hydrogen ions.",
        "pH is unchanged, because Le Chatelier’s principle applies only to reactions between gases.",
        "pH rises, because the equilibrium shifts to the left and hydrogen ions are consumed.",
        "pH rises, because removing CO₂ increases the value of the equilibrium constant.",
      ],
      correctIndex: 2,
      explanation:
        "The rule is that a mixture with Q below K reacts forwards and one with Q above K reacts backwards, in each case until Q returns to K. Here Q = [H⁺][HCO₃⁻] ÷ [CO₂(aq)], so losing dissolved CO₂ shrinks the denominator and raises Q above K. The net reaction therefore runs backwards, from right to left, regenerating CO₂ and consuming H⁺ and HCO₃⁻ as it goes. A lower hydrogen ion concentration means a higher pH, the condition known as respiratory alkalosis. Rebreathing exhaled air restores dissolved CO₂ and reverses the shift.",
      misconception:
        "Attributing the rise to an increase in the equilibrium constant reaches the right answer by the wrong route: only a change in temperature alters an equilibrium constant, and a concentration change moves the position while K stays fixed. Predicting a fall in pH shifts the equilibrium in the direction that reinforces the disturbance rather than opposing it.",
    },
    {
      id: "eqm-summary",
      type: "summary",
      eyebrow: "Keep this model",
      title: "A number for the destination, a principle for the response",
      points: [
        "Dynamic equilibrium means equal forward and reverse rates in a closed system at constant temperature, with concentrations constant but generally unequal.",
        "Kc puts products over reactants, each raised to its coefficient, and omits pure solids and pure liquids whose concentrations cannot change.",
        "A large Kc means a product-rich equilibrium mixture and a small Kc a reactant-rich one; Kc depends only on temperature.",
        "Comparing the reaction quotient Q with Kc predicts the direction of net change without any guesswork.",
        "An ICE table reduces an equilibrium problem to one unknown, which the Kc expression then determines.",
        "Concentration and pressure changes move the position of equilibrium, a catalyst changes only how fast it is reached, and temperature alone changes Kc.",
      ],
      transferRule:
        "Faced with any disturbance, evaluate what it does to Q; the system will move in whichever direction restores Q to Kc, and only a temperature change moves Kc itself.",
      nextLessonId: "lesson.chemistry.acids_bases",
    },
  ],
};

export const chemistryReactionsLessons: Lesson[] = [
  stoichiometry,
  thermochemistry,
  entropyGibbs,
  kinetics,
  equilibrium,
];
