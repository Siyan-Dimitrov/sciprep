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

function Arrow({
  from,
  to,
  variant = "forward",
}: {
  from: readonly [number, number];
  to: readonly [number, number];
  variant?: "forward" | "reverse";
}) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const className = variant === "reverse" ? "visual-arrow reverse" : "visual-arrow";
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const barb = (offset: number) =>
    `${(x2 - 11 * Math.cos(angle + offset)).toFixed(1)} ${(y2 - 11 * Math.sin(angle + offset)).toFixed(1)}`;
  return (
    <>
      <line className={className} x1={x1} x2={x2} y1={y1} y2={y2} />
      <path className={className} d={`M ${barb(-0.42)} L ${x2} ${y2} L ${barb(0.42)}`} />
    </>
  );
}

function pathThrough(points: Array<[number, number]>) {
  return points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
}

const DOSE_MIN = -10.5;
const DOSE_MAX = -4;
const RESPONSE_TOP = 55;

function doseX(logDose: number) {
  return AXIS_LEFT + ((logDose - DOSE_MIN) / (DOSE_MAX - DOSE_MIN)) * (AXIS_RIGHT - AXIS_LEFT);
}

function responseY(response: number) {
  return AXIS_BOTTOM - (response / 100) * (AXIS_BOTTOM - RESPONSE_TOP);
}

function doseCurve(logEc50: number, maximum: number) {
  const points: Array<[number, number]> = [];
  for (let step = 0; step <= 64; step += 1) {
    const logDose = DOSE_MIN + (step / 64) * (DOSE_MAX - DOSE_MIN);
    points.push([doseX(logDose), responseY(maximum / (1 + 10 ** (logEc50 - logDose)))]);
  }
  return pathThrough(points);
}

function dayX(day: number) {
  return AXIS_LEFT + (day / 56) * (AXIS_RIGHT - AXIS_LEFT);
}

function titreY(logTitre: number) {
  return AXIS_BOTTOM - logTitre * 40;
}

function responsePulse(
  day: number,
  start: number,
  rise: number,
  decay: number,
  amplitude: number,
) {
  if (day <= start) {
    return 0;
  }
  const timeToPeak = Math.log(rise / decay) / (rise - decay);
  const peakValue = Math.exp(-decay * timeToPeak) - Math.exp(-rise * timeToPeak);
  const elapsed = day - start;
  return (amplitude * (Math.exp(-decay * elapsed) - Math.exp(-rise * elapsed))) / peakValue;
}

function titreCurve() {
  const points: Array<[number, number]> = [];
  for (let day = 0; day <= 56; day += 0.5) {
    const logTitre =
      0.08 + responsePulse(day, 9, 0.35, 0.055, 2) + responsePulse(day, 34, 0.9, 0.02, 3.3);
    points.push([dayX(day), titreY(logTitre)]);
  }
  return pathThrough(points);
}

function homeostasisWave() {
  const points: Array<[number, number]> = [[375, 130]];
  for (let step = 0; step <= 35; step += 1) {
    const x = 445 + step * 5;
    points.push([x, 130 + 20 * Math.sin((2 * Math.PI * (x - 445)) / 70)]);
  }
  return pathThrough(points);
}

function bridge(ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax;
  const dy = by - ay;
  const length = Math.hypot(dx, dy);
  const vertexX = (ax + bx) / 2 - (dy / length) * 16;
  const vertexY = (ay + by) / 2 + (dx / length) * 16;
  return `M ${ax} ${ay} L ${vertexX.toFixed(1)} ${vertexY.toFixed(1)} L ${bx} ${by}`;
}

export function PhysiologyVisual({ block }: { block: VisualBlock }): React.ReactElement | null {
  const common = {
    role: "img",
    "aria-label": block.caption,
    viewBox: "0 0 640 280",
  } as const;

  if (block.visual === "signal_cascade") {
    const rows = [
      { count: 3, gap: 44, radius: 8, y: 118 },
      { count: 7, gap: 34, radius: 7, y: 170 },
      { count: 15, gap: 22, radius: 6, y: 222 },
    ];
    const stages = [
      { count: "1", label: "receptor", y: 68 },
      { count: "10²", label: "second messenger", y: 123 },
      { count: "10⁴", label: "kinase cascade", y: 175 },
      { count: "10⁶", label: "cellular response", y: 227 },
    ];
    return (
      <svg {...common}>
        <title>
          A ligand binding one membrane receptor, fanning out through a second messenger and a
          kinase cascade into a millionfold cellular response
        </title>
        <text className="visual-label" x="15" y="32">
          outside the cell
        </text>
        <text className="visual-label" x="150" y="32">
          ligand
        </text>
        <circle className="visual-marker" cx="212" cy="28" r="9" />
        <Arrow from={[222, 32]} to={[243, 41]} />
        <rect className="visual-fill-alt" height="7" width="410" x="15" y="47" />
        <rect className="visual-fill-alt" height="7" width="410" x="15" y="65" />
        <rect className="visual-card active" height="44" rx="6" width="36" x="232" y="38" />
        <ellipse className="visual-fill" cx="298" cy="84" rx="19" ry="10" />
        <text className="visual-label" x="322" y="88">
          G protein
        </text>
        <text className="visual-label" x="15" y="104">
          inside the cell
        </text>
        <path className="visual-guide" d="M 250 86 L 85 234" />
        <path className="visual-guide" d="M 250 86 L 415 234" />
        <Arrow from={[250, 88]} to={[250, 108]} />
        <Arrow from={[250, 128]} to={[250, 160]} />
        <Arrow from={[250, 180]} to={[250, 212]} />
        {rows.map((row) => (
          <g key={row.y}>
            {Array.from({ length: row.count }).map((_, index) => (
              <circle
                className="visual-particle"
                cx={250 + (index - (row.count - 1) / 2) * row.gap}
                cy={row.y}
                key={`${row.y}-${index}`}
                r={row.radius}
              />
            ))}
          </g>
        ))}
        <text className="visual-label" x="440" y="36">
          stage
        </text>
        <text className="visual-label" textAnchor="end" x="628" y="36">
          molecules activated
        </text>
        {stages.map((stage) => (
          <g key={stage.label}>
            <text className="visual-label" x="440" y={stage.y}>
              {stage.label}
            </text>
            <text className="visual-label" textAnchor="end" x="628" y={stage.y}>
              {stage.count}
            </text>
          </g>
        ))}
        <text className="visual-label" x="15" y="246">
          dots are schematic · the counts are as labelled
        </text>
        <text className="visual-label" x="15" y="264">
          one bound receptor drives about a million product molecules
        </text>
      </svg>
    );
  }

  if (block.visual === "dose_response") {
    const decades = [
      { label: "10⁻¹⁰", value: -10 },
      { label: "10⁻⁹", value: -9 },
      { label: "10⁻⁸", value: -8 },
      { label: "10⁻⁷", value: -7 },
      { label: "10⁻⁶", value: -6 },
      { label: "10⁻⁵", value: -5 },
      { label: "10⁻⁴", value: -4 },
    ];
    const controlEc50X = doseX(-8);
    const shiftedEc50X = doseX(-7);
    const halfY = responseY(50);
    return (
      <svg {...common}>
        <title>
          Three semi-logarithmic dose–response curves: agonist alone, agonist with a competitive
          antagonist shifted to the right, and agonist with a non-competitive antagonist at a lower
          maximum
        </title>
        <Frame xLabel="log [agonist] / mol dm⁻³" yLabel="response / % of maximum">
          {decades.map((decade) => (
            <g key={decade.label}>
              <line
                className="visual-tick"
                x1={doseX(decade.value)}
                x2={doseX(decade.value)}
                y1={AXIS_BOTTOM}
                y2={AXIS_BOTTOM + 8}
              />
              <text className="visual-label" textAnchor="middle" x={doseX(decade.value)} y="243">
                {decade.label}
              </text>
            </g>
          ))}
          {[0, 50, 100].map((value) => (
            <g key={value}>
              <line
                className="visual-tick"
                x1={AXIS_LEFT - 8}
                x2={AXIS_LEFT}
                y1={responseY(value)}
                y2={responseY(value)}
              />
              <text className="visual-label" textAnchor="end" x="72" y={responseY(value) + 5}>
                {value}
              </text>
            </g>
          ))}
          <line className="visual-guide" x1={AXIS_LEFT} x2={controlEc50X} y1={halfY} y2={halfY} />
          <line className="visual-guide" x1={controlEc50X} x2={controlEc50X} y1={halfY} y2={AXIS_BOTTOM} />
          <line className="visual-guide" x1={shiftedEc50X} x2={shiftedEc50X} y1={halfY} y2={AXIS_BOTTOM} />
          <path className="visual-line" d={doseCurve(-8, 100)} />
          <path className="visual-line coral" d={doseCurve(-7, 100)} />
          <path className="visual-line flat" d={doseCurve(-8, 55)} />
          <circle className="visual-marker" cx={controlEc50X} cy={halfY} r="7" />
          <circle className="visual-marker" cx={shiftedEc50X} cy={halfY} r="7" />
          <Arrow from={[276, 218]} to={[346, 218]} />
          <text className="visual-label" x="92" y="132">
            50% of maximum
          </text>
          <text className="visual-label" textAnchor="end" x="268" y="112">
            agonist alone
          </text>
          <text className="visual-label" textAnchor="end" x="268" y="134">
            EC₅₀
          </text>
          <text className="visual-label" textAnchor="end" x="570" y="104">
            ＋ non-competitive
          </text>
          <text className="visual-label" textAnchor="end" x="570" y="122">
            lower maximum
          </text>
          <text className="visual-label" x="355" y="176">
            ＋ competitive antagonist
          </text>
          <text className="visual-label" x="355" y="196">
            same maximum, shifted right
          </text>
          <text className="visual-label" x="355" y="216">
            ×10 more agonist needed
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "immune_response") {
    const firstExposureX = dayX(3);
    const secondExposureX = dayX(32);
    return (
      <svg {...common}>
        <title>
          Antibody titre on a logarithmic scale after a first and a second exposure to the same
          antigen, the second response faster and about a hundred times larger
        </title>
        <Frame xLabel="time / days" yLabel="antibody titre / log scale">
          {[0, 14, 28, 42, 56].map((day) => (
            <g key={day}>
              <line
                className="visual-tick"
                x1={dayX(day)}
                x2={dayX(day)}
                y1={AXIS_BOTTOM}
                y2={AXIS_BOTTOM + 8}
              />
              <text className="visual-label" textAnchor="middle" x={dayX(day)} y="243">
                {day}
              </text>
            </g>
          ))}
          {[
            { label: "10⁰", value: 0 },
            { label: "10¹", value: 1 },
            { label: "10²", value: 2 },
            { label: "10³", value: 3 },
            { label: "10⁴", value: 4 },
          ].map((tick) => (
            <g key={tick.label}>
              <line
                className="visual-tick"
                x1={AXIS_LEFT - 8}
                x2={AXIS_LEFT}
                y1={titreY(tick.value)}
                y2={titreY(tick.value)}
              />
              <text className="visual-label" textAnchor="end" x="72" y={titreY(tick.value) + 5}>
                {tick.label}
              </text>
            </g>
          ))}
          <line className="visual-guide" x1={AXIS_LEFT} x2="219" y1="142" y2="142" />
          <line className="visual-guide" x1={AXIS_LEFT} x2="420" y1="63" y2="63" />
          <line
            className="visual-guide"
            x1={firstExposureX}
            x2={firstExposureX}
            y1="126"
            y2={AXIS_BOTTOM}
          />
          <line
            className="visual-guide"
            x1={secondExposureX}
            x2={secondExposureX}
            y1="130"
            y2={AXIS_BOTTOM}
          />
          <path className="visual-line" d={titreCurve()} />
          <circle className="visual-marker" cx="219" cy="142" r="7" />
          <circle className="visual-marker" cx="420" cy="63" r="7" />
          <polygon
            className="visual-marker"
            points={`${firstExposureX - 8},239 ${firstExposureX + 8},239 ${firstExposureX},227`}
          />
          <polygon
            className="visual-marker"
            points={`${secondExposureX - 8},239 ${secondExposureX + 8},239 ${secondExposureX},227`}
          />
          <text className="visual-label" x="95" y="100">
            ≈ 100× higher peak
          </text>
          <text className="visual-label" x="118" y="120">
            first exposure
          </text>
          <text className="visual-label" textAnchor="end" x="358" y="120">
            same antigen
          </text>
          <text className="visual-label" textAnchor="end" x="358" y="138">
            second exposure
          </text>
          <Arrow from={[111, 210]} to={[163, 210]} />
          <Arrow from={[365, 210]} to={[384, 210]} />
          <text className="visual-label" x="113" y="190">
            long lag
          </text>
          <text className="visual-label" textAnchor="middle" x="250" y="209">
            primary response
          </text>
          <text className="visual-label" x="390" y="190">
            short lag
          </text>
          <text className="visual-label" x="450" y="150">
            secondary response
          </text>
          <text className="visual-label" x="450" y="168">
            high and sustained
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "antibody") {
    const links: Array<[number, number, number, number]> = [
      [330, 196, 420, 196],
      [420, 196, 510, 196],
      [330, 196, 375, 248],
      [420, 196, 465, 248],
      [510, 196, 555, 248],
      [465, 248, 375, 248],
    ];
    return (
      <svg {...common}>
        <title>
          The Y-shaped antibody with its heavy and light chains and two binding sites, one antibody
          bridging two antigens, and antibodies cross-linking antigens into an agglutinated lattice
        </title>
        <line className="visual-guide" x1="277" x2="277" y1="20" y2="262" />
        <line className="visual-guide" x1="285" x2="630" y1="140" y2="140" />
        <text className="visual-label" textAnchor="middle" x="120" y="28">
          two antigen-binding sites
        </text>
        <text className="visual-label" textAnchor="middle" x="120" y="46">
          variable tips fit the epitope
        </text>
        <polygon className="visual-marker" points="44,60 66,60 55,83" />
        <polygon className="visual-marker" points="174,60 196,60 185,83" />
        <path className="visual-line" d="M 60 80 L 114 158 L 114 218" />
        <path className="visual-line" d="M 180 80 L 126 158 L 126 218" />
        <path className="visual-line" d="M 50 87 L 82 134" />
        <path className="visual-line" d="M 190 87 L 158 134" />
        <line className="visual-tick" x1="110" x2="130" y1="172" y2="172" />
        <line className="visual-tick" x1="110" x2="130" y1="186" y2="186" />
        <line className="visual-tick" x1="66" x2="77" y1="110" y2="103" />
        <line className="visual-tick" x1="174" x2="163" y1="110" y2="103" />
        <text className="visual-label" x="140" y="190">
          disulfide bonds
        </text>
        <text className="visual-label" textAnchor="middle" x="120" y="238">
          2 heavy chains ＋ 2 light chains
        </text>
        <text className="visual-label" textAnchor="middle" x="120" y="258">
          constant regions form the stem
        </text>
        <path className="visual-line" d="M 350 122 L 350 96 L 322 66" />
        <path className="visual-line" d="M 350 96 L 378 66" />
        <circle className="visual-marker" cx="316" cy="56" r="11" />
        <circle className="visual-marker" cx="384" cy="56" r="11" />
        <text className="visual-label" x="400" y="64">
          one antibody bridges
        </text>
        <text className="visual-label" x="400" y="82">
          two antigens
        </text>
        <text className="visual-label" x="285" y="162">
          agglutination · antibodies cross-link antigens
        </text>
        {links.map(([ax, ay, bx, by]) => (
          <path className="visual-line" d={bridge(ax, ay, bx, by)} key={`${ax}-${ay}-${bx}-${by}`} />
        ))}
        {[
          [330, 196],
          [420, 196],
          [510, 196],
          [375, 248],
          [465, 248],
          [555, 248],
        ].map(([cx, cy]) => (
          <circle className="visual-marker" cx={cx} cy={cy} key={`antigen-${cx}-${cy}`} r="12" />
        ))}
      </svg>
    );
  }

  if (block.visual === "feedback_loop") {
    const nodes = [
      { detail: "detects change", label: "receptor", x: 10, y: 78 },
      { detail: "sets the response", label: "control centre", x: 210, y: 78 },
      { detail: "muscle or gland", label: "effector", x: 210, y: 156 },
      { detail: "opposes change", label: "response", x: 10, y: 156 },
    ];
    return (
      <svg {...common}>
        <title>
          The negative feedback loop of set point, receptor, control centre, effector and response,
          beside the regulated variable oscillating within bounds about its set point
        </title>
        <rect className="visual-card active" height="34" rx="10" width="140" x="105" y="18" />
        <text className="visual-label" textAnchor="middle" x="175" y="40">
          set point
        </text>
        <path className="visual-guide" d="M 175 52 L 175 66 L 75 66 L 75 76" />
        {nodes.map((node) => (
          <g key={node.label}>
            <rect
              className="visual-card"
              height="42"
              rx="10"
              width="130"
              x={node.x}
              y={node.y}
            />
            <text className="visual-label" textAnchor="middle" x={node.x + 65} y={node.y + 18}>
              {node.label}
            </text>
            <text className="visual-label" textAnchor="middle" x={node.x + 65} y={node.y + 35}>
              {node.detail}
            </text>
          </g>
        ))}
        <Arrow from={[144, 99]} to={[206, 99]} />
        <Arrow from={[275, 122]} to={[275, 154]} />
        <Arrow from={[206, 177]} to={[144, 177]} />
        <Arrow from={[75, 154]} to={[75, 122]} variant="reverse" />
        <text className="visual-label" textAnchor="middle" x="175" y="132">
          negative
        </text>
        <text className="visual-label" textAnchor="middle" x="175" y="150">
          feedback
        </text>
        <text className="visual-label" textAnchor="middle" x="175" y="222">
          the response returns the variable
        </text>
        <text className="visual-label" textAnchor="middle" x="175" y="240">
          towards the set point
        </text>
        <line className="visual-guide" x1="352" x2="352" y1="20" y2="260" />
        <line className="visual-axis" x1="375" x2="620" y1="200" y2="200" />
        <line className="visual-axis" x1="375" x2="375" y1="60" y2="200" />
        <line className="visual-guide" x1="375" x2="620" y1="130" y2="130" />
        <path className="visual-line" d={homeostasisWave()} />
        <text className="visual-label" x="375" y="44">
          regulated variable
        </text>
        <text className="visual-label" x="380" y="146">
          set point
        </text>
        <text className="visual-label" textAnchor="end" x="620" y="220">
          time
        </text>
        <text className="visual-label" textAnchor="middle" x="497" y="244">
          bounded oscillation, not constancy
        </text>
      </svg>
    );
  }

  if (block.visual === "nephron") {
    return (
      <svg {...common}>
        <title>
          A nephron from afferent arteriole and glomerulus through the proximal tubule, loop of
          Henle and distal tubule to the collecting duct, with what each segment does
        </title>
        <path className="visual-line" d="M 12 58 L 74 68" />
        <path className="visual-line" d="M 74 96 L 12 124" />
        <circle className="visual-container" cx="100" cy="82" r="30" />
        <circle className="visual-particle" cx="100" cy="82" r="9" />
        <circle className="visual-particle" cx="86" cy="74" r="7" />
        <circle className="visual-particle" cx="114" cy="74" r="7" />
        <circle className="visual-particle" cx="89" cy="93" r="6" />
        <circle className="visual-particle" cx="112" cy="92" r="6" />
        <path
          className="visual-line"
          d="M 130 84 C 152 58, 174 114, 196 86 C 216 60, 240 114, 262 92 L 270 108"
        />
        <path className="visual-line" d="M 270 108 L 270 208 A 26 18 0 0 0 322 208 L 322 108" />
        <path
          className="visual-line"
          d="M 322 108 L 330 98 C 350 74, 372 118, 392 94 C 410 74, 428 106, 440 100"
        />
        <path className="visual-line" d="M 440 100 L 440 248" />
        <Arrow from={[270, 148]} to={[270, 174]} variant="reverse" />
        <Arrow from={[322, 174]} to={[322, 148]} variant="reverse" />
        <Arrow from={[440, 188]} to={[440, 214]} variant="reverse" />
        <text className="visual-label" x="12" y="32">
          afferent
        </text>
        <text className="visual-label" x="12" y="48">
          arteriole
        </text>
        <text className="visual-label" x="12" y="140">
          efferent
        </text>
        <text className="visual-label" x="12" y="156">
          arteriole
        </text>
        <text className="visual-label" x="90" y="132">
          glomerulus
        </text>
        <text className="visual-label" x="90" y="150">
          filtration
        </text>
        <text className="visual-label" x="140" y="30">
          proximal tubule
        </text>
        <text className="visual-label" x="140" y="48">
          bulk reabsorption
        </text>
        <text className="visual-label" x="338" y="30">
          distal tubule
        </text>
        <text className="visual-label" x="338" y="48">
          fine tuning
        </text>
        <text className="visual-label" textAnchor="end" x="256" y="162">
          descending
        </text>
        <text className="visual-label" textAnchor="end" x="256" y="180">
          water out
        </text>
        <text className="visual-label" x="336" y="162">
          ascending
        </text>
        <text className="visual-label" x="336" y="180">
          salts out
        </text>
        <text className="visual-label" textAnchor="middle" x="296" y="252">
          loop of Henle
        </text>
        <text className="visual-label" x="460" y="140">
          collecting duct
        </text>
        <text className="visual-label" x="460" y="158">
          ADH controls
        </text>
        <text className="visual-label" x="460" y="176">
          water reabsorption
        </text>
        <text className="visual-label" textAnchor="middle" x="440" y="268">
          to bladder
        </text>
        <Arrow from={[14, 257]} to={[36, 257]} variant="reverse" />
        <text className="visual-label" x="44" y="262">
          direction of filtrate flow
        </text>
      </svg>
    );
  }

  return null;
}
