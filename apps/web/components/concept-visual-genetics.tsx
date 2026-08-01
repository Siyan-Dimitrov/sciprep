import type { VisualBlock } from "@/lib/lesson-types";
import { svgNotation } from "@/components/notation";

const AXIS_LEFT = 85;
const AXIS_RIGHT = 575;
const AXIS_BOTTOM = 225;
const AXIS_TOP = 35;

function Frame({
  xLabel,
  yLabel,
  children,
}: {
  xLabel: string;
  yLabel: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <line className="visual-axis" x1={AXIS_LEFT} x2={AXIS_RIGHT} y1={AXIS_BOTTOM} y2={AXIS_BOTTOM} />
      <line className="visual-axis" x1={AXIS_LEFT} x2={AXIS_LEFT} y1={AXIS_TOP} y2={AXIS_BOTTOM} />
      <text className="visual-label" textAnchor="middle" x="330" y="262">
        {svgNotation(xLabel)}
      </text>
      <text
        className="visual-label"
        textAnchor="middle"
        transform="rotate(-90 30 130)"
        x="30"
        y="130"
      >
        {svgNotation(yLabel)}
      </text>
      {children}
    </>
  );
}

function pairAlleles(first: string, second: string) {
  return first === first.toUpperCase() ? first + second : second + first;
}

export function GeneticsVisual({ block }: { block: VisualBlock }): React.ReactElement | null {
  const common = {
    role: "img",
    "aria-label": block.caption,
    viewBox: "0 0 640 280",
  } as const;

  if (block.visual === "dna_structure") {
    const basePairs = [
      { top: "A", bottom: "T", bonds: 2 },
      { top: "G", bottom: "C", bonds: 3 },
      { top: "T", bottom: "A", bonds: 2 },
      { top: "C", bottom: "G", bonds: 3 },
    ];
    return (
      <svg {...common}>
        <title>
          A short ladder of double-stranded DNA with four base pairs held by two or three hydrogen
          bonds
        </title>
        <text className="visual-label" x="18" y="44">
          sugar–phosphate backbone
        </text>
        <line className="visual-guide" x1="150" x2="150" y1="52" y2="76" />
        <rect className="visual-fill" height="10" rx="5" width="360" x="150" y="78" />
        <rect className="visual-fill" height="10" rx="5" width="360" x="150" y="192" />
        <text className="visual-large-label" textAnchor="end" x="142" y="92">
          5′
        </text>
        <text className="visual-large-label" x="518" y="92">
          3′
        </text>
        <text className="visual-large-label" textAnchor="end" x="142" y="206">
          3′
        </text>
        <text className="visual-large-label" x="518" y="206">
          5′
        </text>
        {basePairs.map((pair, index) => {
          const x = 195 + index * 90;
          const offsets = pair.bonds === 2 ? [-7, 7] : [-12, 0, 12];
          return (
            <g key={`${pair.top}${pair.bottom}`}>
              <text className="visual-large-label" textAnchor="middle" x={x} y="116">
                {pair.top}
              </text>
              {offsets.map((offset) => (
                <line
                  className="visual-tick"
                  key={`${pair.top}${pair.bottom}-${offset}`}
                  x1={x + offset}
                  x2={x + offset}
                  y1="124"
                  y2="156"
                />
              ))}
              <text className="visual-large-label" textAnchor="middle" x={x} y="180">
                {pair.bottom}
              </text>
              <text className="visual-label" textAnchor="middle" x={x} y="228">
                {pair.bonds} bonds
              </text>
            </g>
          );
        })}
        <line className="visual-guide" x1="484" x2="526" y1="141" y2="141" />
        <text className="visual-label" x="530" y="146">
          base pair
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="258">
          the strands run in opposite directions · A–T takes two bonds, G–C takes three
        </text>
      </svg>
    );
  }

  if (block.visual === "central_dogma") {
    const codons = [
      { codon: "AUG", acid: "Met" },
      { codon: "UUC", acid: "Phe" },
      { codon: "GGA", acid: "Gly" },
      { codon: "AAG", acid: "Lys" },
      { codon: "UAA", acid: "stop" },
    ];
    return (
      <svg {...common}>
        <title>
          DNA transcribed to RNA and translated to protein, with a codon strip read in triplets
        </title>
        <path className="visual-arrow" d="M 52 60 C 44 26, 136 26, 128 60" />
        <text className="visual-label" textAnchor="middle" x="90" y="26">
          replication
        </text>
        {[
          { label: "DNA", x: 30 },
          { label: "RNA", x: 260 },
          { label: "protein", x: 490 },
        ].map((stage) => (
          <g key={stage.label}>
            <rect className="visual-card" height="50" rx="10" width="120" x={stage.x} y="60" />
            <text className="visual-large-label" textAnchor="middle" x={stage.x + 60} y="93">
              {stage.label}
            </text>
          </g>
        ))}
        <path className="visual-arrow" d="M 155 85 L 255 85" />
        <text className="visual-label" textAnchor="middle" x="205" y="76">
          transcription
        </text>
        <path className="visual-arrow" d="M 385 85 L 485 85" />
        <text className="visual-label" textAnchor="middle" x="435" y="76">
          translation
        </text>
        <text className="visual-label" x="98" y="126">
          reading frame
        </text>
        <text className="visual-label" textAnchor="end" x="542" y="126">
          5′ → 3′
        </text>
        {[96, 185, 275, 365, 455, 544].map((x) => (
          <line className="visual-tick" key={`frame-${x}`} x1={x} x2={x} y1="132" y2="142" />
        ))}
        <text className="visual-label" textAnchor="end" x="92" y="167">
          codons
        </text>
        <text className="visual-label" textAnchor="end" x="92" y="217">
          amino acids
        </text>
        {codons.map((entry, index) => {
          const x = 98 + index * 90;
          const centre = x + 42;
          const edge = index === 0 || index === codons.length - 1;
          return (
            <g key={entry.codon}>
              <rect
                className={edge ? "visual-card active" : "visual-card"}
                height="32"
                rx="6"
                width="84"
                x={x}
                y="146"
              />
              <text className="visual-large-label" textAnchor="middle" x={centre} y="170">
                {entry.codon}
              </text>
              <path className="visual-arrow" d={`M ${centre} 180 L ${centre} 193`} />
              <rect className="visual-card" height="32" rx="6" width="84" x={x} y="196" />
              <text className="visual-label" textAnchor="middle" x={centre} y="217">
                {entry.acid}
              </text>
            </g>
          );
        })}
        <text className="visual-label" textAnchor="middle" x="140" y="250">
          start codon
        </text>
        <text className="visual-label" textAnchor="middle" x="500" y="250">
          stop codon
        </text>
      </svg>
    );
  }

  if (block.visual === "punnett") {
    const gametes = ["AB", "Ab", "aB", "ab"];
    const tally = [
      { genotype: "A_ B_", count: 9 },
      { genotype: "A_ bb", count: 3 },
      { genotype: "aa B_", count: 3 },
      { genotype: "aa bb", count: 1 },
    ];
    return (
      <svg {...common}>
        <title>
          A four by four dihybrid Punnett square with its nine to three to three to one phenotype
          tally
        </title>
        <text className="visual-large-label" x="54" y="34">
          AaBb × AaBb
        </text>
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 30 150)"
          x="30"
          y="150"
        >
          gametes
        </text>
        {gametes.map((gamete, column) => (
          <text
            className="visual-large-label"
            key={`top-${gamete}`}
            textAnchor="middle"
            x={138 + column * 56}
            y="64"
          >
            {gamete}
          </text>
        ))}
        {gametes.map((rowGamete, row) => (
          <g key={`row-${rowGamete}`}>
            <text className="visual-large-label" textAnchor="end" x="102" y={98 + row * 40}>
              {rowGamete}
            </text>
            {gametes.map((columnGamete, column) => {
              const genotype =
                pairAlleles(rowGamete[0], columnGamete[0]) +
                pairAlleles(rowGamete[1], columnGamete[1]);
              const recessive = genotype === "aabb";
              return (
                <g key={`${rowGamete}-${columnGamete}`}>
                  <rect
                    className={recessive ? "visual-card active" : "visual-card"}
                    height="40"
                    width="56"
                    x={110 + column * 56}
                    y={70 + row * 40}
                  />
                  <text
                    className="visual-label"
                    textAnchor="middle"
                    x={138 + column * 56}
                    y={95 + row * 40}
                  >
                    {genotype}
                  </text>
                </g>
              );
            })}
          </g>
        ))}
        <text className="visual-label" x="54" y="252">
          16 equally likely combinations
        </text>
        <text className="visual-large-label" x="370" y="36">
          phenotypes
        </text>
        {tally.map((row, index) => {
          const baseline = 86 + index * 34;
          return (
            <g key={row.genotype}>
              <text className="visual-label" x="370" y={baseline}>
                {row.genotype}
              </text>
              <rect
                className={row.count === 1 ? "visual-fill-alt" : "visual-fill"}
                height="18"
                width={row.count * 15}
                x="436"
                y={baseline - 15}
              />
              <text className="visual-label" x="580" y={baseline}>
                {row.count}
              </text>
            </g>
          );
        })}
        <text className="visual-label" x="370" y="210">
          phenotype ratio
        </text>
        <text className="visual-large-label" x="370" y="238">
          9 : 3 : 3 : 1
        </text>
      </svg>
    );
  }

  if (block.visual === "pedigree") {
    return (
      <svg {...common}>
        <title>
          A three-generation pedigree for a recessive condition, with one individual of unknown
          carrier status
        </title>
        {["I", "II", "III"].map((generation, index) => (
          <text className="visual-large-label" key={generation} x="26" y={70 + index * 78}>
            {generation}
          </text>
        ))}
        <line className="visual-axis" x1="126" x2="174" y1="62" y2="62" />
        <line className="visual-axis" x1="150" x2="150" y1="62" y2="112" />
        <line className="visual-axis" x1="70" x2="230" y1="112" y2="112" />
        {[70, 150, 230].map((x) => (
          <line className="visual-axis" key={`drop-two-${x}`} x1={x} x2={x} y1="112" y2="124" />
        ))}
        <line className="visual-axis" x1="246" x2="304" y1="140" y2="140" />
        <line className="visual-axis" x1="275" x2="275" y1="156" y2="190" />
        <line className="visual-axis" x1="250" x2="330" y1="190" y2="190" />
        {[250, 330].map((x) => (
          <line className="visual-axis" key={`drop-three-${x}`} x1={x} x2={x} y1="190" y2="204" />
        ))}
        <rect className="visual-card" height="32" width="32" x="94" y="46" />
        <circle className="visual-card" cx="190" cy="62" r="16" />
        <rect className="visual-fill" height="32" width="32" x="54" y="124" />
        <circle className="visual-card" cx="150" cy="140" r="16" />
        <text className="visual-large-label" textAnchor="middle" x="150" y="148">
          ?
        </text>
        <rect className="visual-card" height="32" width="32" x="214" y="124" />
        <circle className="visual-card" cx="320" cy="140" r="16" />
        <rect className="visual-card" height="32" width="32" x="234" y="204" />
        <circle className="visual-fill" cx="330" cy="220" r="16" />
        <text className="visual-label" x="430" y="40">
          key
        </text>
        <rect className="visual-card" height="26" width="26" x="430" y="50" />
        <text className="visual-label" x="468" y="70">
          male
        </text>
        <circle className="visual-card" cx="443" cy="102" r="13" />
        <text className="visual-label" x="468" y="108">
          female
        </text>
        <rect className="visual-fill" height="26" width="26" x="430" y="128" />
        <text className="visual-label" x="468" y="148">
          affected
        </text>
        <text className="visual-label" x="430" y="186">
          unfilled means unaffected
        </text>
        <text className="visual-label" x="430" y="210">
          ? carrier status unknown
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="264">
          an affected child of unaffected parents means both parents carry the allele
        </text>
      </svg>
    );
  }

  if (block.visual === "meiosis") {
    const crossing = (start: number, end: number) =>
      `M ${start} 64 L ${start + 12} 64 L ${start + 12} 106 L ${end + 12} 118 L ${end + 12} 158 L ${end} 158 L ${end} 118 L ${start} 106 Z`;
    const products = [
      { x: 492, y: 84, top: "visual-fill", bottom: "visual-fill" },
      { x: 578, y: 84, top: "visual-fill", bottom: "visual-fill-alt" },
      { x: 492, y: 150, top: "visual-fill-alt", bottom: "visual-fill-alt" },
      { x: 578, y: 150, top: "visual-fill-alt", bottom: "visual-fill" },
    ];
    return (
      <svg {...common}>
        <title>
          One homologous pair followed from a bivalent with a chiasma to four haploid products, two
          of them recombinant
        </title>
        <text className="visual-label" textAnchor="middle" x="109" y="40">
          bivalent
        </text>
        <rect className="visual-fill" height="94" rx="6" width="12" x="76" y="64" />
        <rect className="visual-fill-alt" height="94" rx="6" width="12" x="130" y="64" />
        <path className="visual-fill" d={crossing(94, 112)} />
        <path className="visual-fill-alt" d={crossing(112, 94)} />
        <circle className="visual-marker" cx="91" cy="84" r="5" />
        <circle className="visual-marker" cx="127" cy="84" r="5" />
        <line className="visual-guide" x1="66" x2="98" y1="118" y2="113" />
        <text className="visual-label" textAnchor="end" x="62" y="122">
          chiasma
        </text>
        <path className="visual-arrow" d="M 188 112 L 226 112" />
        <text className="visual-label" textAnchor="middle" x="318" y="40">
          after meiosis I
        </text>
        <ellipse className="visual-card" cx="273" cy="112" rx="38" ry="50" />
        <rect className="visual-fill" height="68" rx="6" width="12" x="259" y="78" />
        <rect className="visual-fill" height="34" width="12" x="277" y="78" />
        <rect className="visual-fill-alt" height="34" width="12" x="277" y="112" />
        <circle className="visual-marker" cx="274" cy="96" r="5" />
        <ellipse className="visual-card" cx="363" cy="112" rx="38" ry="50" />
        <rect className="visual-fill-alt" height="68" rx="6" width="12" x="349" y="78" />
        <rect className="visual-fill-alt" height="34" width="12" x="367" y="78" />
        <rect className="visual-fill" height="34" width="12" x="367" y="112" />
        <circle className="visual-marker" cx="364" cy="96" r="5" />
        <path className="visual-arrow" d="M 408 112 L 444 112" />
        <text className="visual-label" textAnchor="middle" x="535" y="40">
          after meiosis II
        </text>
        {products.map((product) => (
          <g key={`${product.x}-${product.y}`}>
            <circle className="visual-card" cx={product.x} cy={product.y} r="30" />
            <rect
              className={product.top}
              height="18"
              width="12"
              x={product.x - 6}
              y={product.y - 18}
            />
            <rect className={product.bottom} height="18" width="12" x={product.x - 6} y={product.y} />
          </g>
        ))}
        <text className="visual-label" textAnchor="middle" x="492" y="196">
          parental
        </text>
        <text className="visual-label" textAnchor="middle" x="578" y="196">
          recombinant
        </text>
        <line className="visual-guide" x1="207" x2="207" y1="124" y2="196" />
        <text className="visual-large-label" textAnchor="middle" x="207" y="214">
          meiosis I
        </text>
        <text className="visual-label" textAnchor="middle" x="207" y="236">
          reductional
        </text>
        <line className="visual-guide" x1="425" x2="425" y1="124" y2="196" />
        <text className="visual-large-label" textAnchor="middle" x="425" y="214">
          meiosis II
        </text>
        <text className="visual-label" textAnchor="middle" x="425" y="236">
          equational
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="264">
          meiosis I halves the number of chromosomes · meiosis II splits the chromatids
        </text>
      </svg>
    );
  }

  if (block.visual === "linkage_map") {
    const firstDivision = [true, true, true, true, false, false, false, false];
    const secondDivision = [true, true, false, false, true, true, false, false];
    return (
      <svg {...common}>
        <title>
          A three-locus linkage map in centimorgans beside first-division and second-division
          segregation in an ordered ascus
        </title>
        <line className="visual-guide" x1="314" x2="314" y1="30" y2="250" />
        <text className="visual-large-label" textAnchor="middle" x="160" y="40">
          linkage map
        </text>
        <rect className="visual-card" height="18" rx="9" width="240" x="40" y="96" />
        {[
          { label: "A", x: 70 },
          { label: "B", x: 178 },
          { label: "C", x: 250 },
        ].map((locus) => (
          <g key={locus.label}>
            <circle className="visual-marker" cx={locus.x} cy="105" r="8" />
            <text className="visual-large-label" textAnchor="middle" x={locus.x} y="88">
              {locus.label}
            </text>
          </g>
        ))}
        <path className="visual-arrow" d="M 70 134 L 250 134" />
        {[70, 178, 250].map((x) => (
          <line className="visual-tick" key={`gap-${x}`} x1={x} x2={x} y1="126" y2="142" />
        ))}
        <text className="visual-label" textAnchor="middle" x="124" y="158">
          12 cM
        </text>
        <text className="visual-label" textAnchor="middle" x="214" y="158">
          8 cM
        </text>
        <path className="visual-arrow reverse" d="M 70 182 L 250 182" />
        {[70, 250].map((x) => (
          <line className="visual-tick" key={`span-${x}`} x1={x} x2={x} y1="174" y2="190" />
        ))}
        <text className="visual-label" textAnchor="middle" x="160" y="206">
          A–C = 20 cM
        </text>
        <text className="visual-label" textAnchor="middle" x="160" y="232">
          12 + 8 = 20, so the distances add
        </text>
        <text className="visual-large-label" textAnchor="middle" x="474" y="40">
          ordered ascus
        </text>
        <text className="visual-label" x="342" y="62">
          first-division segregation
        </text>
        <rect className="visual-card" height="34" rx="17" width="264" x="342" y="70" />
        {firstDivision.map((dark, index) => (
          <circle
            className={dark ? "visual-fill" : "visual-fill-alt"}
            cx={369 + index * 30}
            cy="87"
            key={`first-${index}`}
            r="13"
          />
        ))}
        <text className="visual-label" x="342" y="132">
          second-division segregation
        </text>
        <rect className="visual-card" height="34" rx="17" width="264" x="342" y="140" />
        {secondDivision.map((dark, index) => (
          <circle
            className={dark ? "visual-fill" : "visual-fill-alt"}
            cx={369 + index * 30}
            cy="157"
            key={`second-${index}`}
            r="13"
          />
        ))}
        <line className="visual-axis" x1="350" x2="398" y1="192" y2="232" />
        <line className="visual-axis" x1="398" x2="350" y1="192" y2="232" />
        <circle className="visual-marker" cx="374" cy="212" r="6" />
        <text className="visual-label" x="412" y="206">
          a crossover between
        </text>
        <text className="visual-label" x="412" y="226">
          locus and centromere
        </text>
      </svg>
    );
  }

  if (block.visual === "allele_frequency") {
    const samples = Array.from({ length: 51 }, (_, index) => index / 50);
    const px = (p: number) => AXIS_LEFT + p * 490;
    const py = (frequency: number) => AXIS_BOTTOM - frequency * 180;
    const curve = (frequency: (p: number) => number) =>
      samples
        .map(
          (p, index) =>
            `${index === 0 ? "M" : "L"} ${px(p).toFixed(1)} ${py(frequency(p)).toFixed(1)}`,
        )
        .join(" ");
    return (
      <svg {...common}>
        <title>
          Hardy–Weinberg genotype frequencies against allele frequency, with heterozygotes peaking at
          one half
        </title>
        <Frame xLabel="allele frequency p" yLabel="genotype frequency">
          {[
            { label: "0", p: 0 },
            { label: "0.5", p: 0.5 },
            { label: "1", p: 1 },
          ].map((tick) => (
            <g key={`x-${tick.label}`}>
              <line
                className="visual-tick"
                x1={px(tick.p)}
                x2={px(tick.p)}
                y1={AXIS_BOTTOM}
                y2={AXIS_BOTTOM + 8}
              />
              <text className="visual-label" textAnchor="middle" x={px(tick.p)} y="246">
                {tick.label}
              </text>
            </g>
          ))}
          {[
            { label: "0", frequency: 0 },
            { label: "0.5", frequency: 0.5 },
            { label: "1", frequency: 1 },
          ].map((tick) => (
            <g key={`y-${tick.label}`}>
              <line
                className="visual-tick"
                x1={AXIS_LEFT - 8}
                x2={AXIS_LEFT}
                y1={py(tick.frequency)}
                y2={py(tick.frequency)}
              />
              <text
                className="visual-label"
                textAnchor="end"
                x={AXIS_LEFT - 12}
                y={py(tick.frequency) + 5}
              >
                {tick.label}
              </text>
            </g>
          ))}
          <line className="visual-guide" x1={px(0.5)} x2={px(0.5)} y1={py(1)} y2={AXIS_BOTTOM} />
          <line className="visual-guide" x1={AXIS_LEFT} x2={px(0.5)} y1={py(0.5)} y2={py(0.5)} />
          <path className="visual-line coral" d={curve((p) => p * p)} />
          <path className="visual-line flat" d={curve((p) => (1 - p) * (1 - p))} />
          <path className="visual-line" d={curve((p) => 2 * p * (1 - p))} />
          <circle className="visual-marker" cx={px(0.5)} cy={py(0.5)} r="7" />
          <text className="visual-label" textAnchor="middle" x="505" y="126">
            p² · AA
          </text>
          <text className="visual-label" textAnchor="middle" x="155" y="126">
            q² · aa
          </text>
          <text className="visual-label" textAnchor="middle" x="272" y="112">
            2pq · Aa
          </text>
          <text className="visual-label" x="338" y="60">
            heterozygotes peak at 0.5
          </text>
          <text className="visual-label" x="338" y="84">
            p² + 2pq + q² = 1
          </text>
        </Frame>
      </svg>
    );
  }

  return null;
}
