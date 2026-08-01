import { BiologyVisual } from "@/components/concept-visual-biology";
import { GeneticsVisual } from "@/components/concept-visual-genetics";
import { PhysiologyVisual } from "@/components/concept-visual-physiology";
import { TechniqueVisual } from "@/components/concept-visual-techniques";
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

export function ExtendedVisual({ block }: { block: VisualBlock }) {
  const common = {
    role: "img",
    "aria-label": block.caption,
    viewBox: "0 0 640 280",
  } as const;

  if (block.visual === "log_scale") {
    return (
      <svg {...common}>
        <title>A linear axis compared with a logarithmic axis over the same range</title>
        <text className="visual-label" x="60" y="42">
          linear axis
        </text>
        <line className="visual-axis" x1="60" x2="580" y1="80" y2="80" />
        {[0, 1, 10, 100, 1000].map((value) => {
          const x = 60 + (value / 1000) * 520;
          return (
            <g key={`lin-${value}`}>
              <line className="visual-tick" x1={x} x2={x} y1="70" y2="90" />
              <text className="visual-label" textAnchor="middle" x={Math.max(x, 66)} y="112">
                {value}
              </text>
            </g>
          );
        })}
        <text className="visual-label" x="60" y="168">
          logarithmic axis
        </text>
        <line className="visual-axis" x1="60" x2="580" y1="200" y2="200" />
        {["1", "10", "10²", "10³", "10⁴"].map((label, index) => {
          const x = 60 + index * 130;
          return (
            <g key={`log-${label}`}>
              <line className="visual-tick" x1={x} x2={x} y1="190" y2="210" />
              <text className="visual-label" textAnchor="middle" x={x} y="232">
                {label}
              </text>
            </g>
          );
        })}
        <text className="visual-label" textAnchor="middle" x="320" y="258">
          equal steps along the axis mean equal multiplying factors
        </text>
      </svg>
    );
  }

  if (block.visual === "method_loop") {
    const steps = [
      { label: "read", detail: "definition with its examples" },
      { label: "propose", detail: "a grammar or rule" },
      { label: "re-derive", detail: "an example already given" },
      { label: "apply", detail: "only once the rule survives" },
    ];
    return (
      <svg {...common}>
        <title>A four-step loop for turning an unfamiliar notation into a usable rule</title>
        {steps.map((step, index) => {
          const x = 18 + index * 156;
          return (
            <g key={step.label} transform={`translate(${x} 78)`}>
              <rect className={index === 2 ? "visual-card active" : "visual-card"} height="104" rx="16" width="134" />
              <text className="visual-large-label" textAnchor="middle" x="67" y="44">
                {step.label}
              </text>
              <text className="visual-label" textAnchor="middle" x="67" y="72">
                {step.detail.split(" ").slice(0, 2).join(" ")}
              </text>
              <text className="visual-label" textAnchor="middle" x="67" y="92">
                {step.detail.split(" ").slice(2).join(" ")}
              </text>
              {index < steps.length - 1 ? (
                <path className="visual-arrow" d="M 140 52 L 168 52" />
              ) : null}
            </g>
          );
        })}
        <path className="visual-guide" d="M 85 190 L 85 232 L 555 232 L 555 190" />
        <text className="visual-label" textAnchor="middle" x="320" y="256">
          if the re-derivation fails, return to the definition rather than to the question
        </text>
        <text className="visual-label" x="18" y="42">
          the highlighted step is the one most often skipped
        </text>
      </svg>
    );
  }

  if (block.visual === "controls") {
    return (
      <svg {...common}>
        <title>A controlled comparison where two groups differ in one variable, beside a confounded comparison</title>
        {[
          {
            x: 20,
            heading: "controlled",
            rows: ["same age range", "same diet", "drug given"],
            other: ["same age range", "same diet", "placebo given"],
          },
          {
            x: 330,
            heading: "confounded",
            rows: ["age 20–30", "high-fibre diet", "drug given"],
            other: ["age 55–70", "low-fibre diet", "placebo given"],
          },
        ].map((panel) => (
          <g key={panel.heading} transform={`translate(${panel.x} 22)`}>
            <text className="visual-large-label" x="0" y="16">
              {panel.heading}
            </text>
            <rect className="visual-card active" height="88" rx="10" width="132" y="30" />
            <rect className="visual-card" height="88" rx="10" width="132" x="148" y="30" />
            <text className="visual-label" textAnchor="middle" x="66" y="52">
              group A
            </text>
            <text className="visual-label" textAnchor="middle" x="214" y="52">
              group B
            </text>
            {panel.rows.map((row, index) => (
              <text
                className="visual-label"
                key={`${panel.heading}-a-${row}`}
                textAnchor="middle"
                x="66"
                y={76 + index * 20}
              >
                {row}
              </text>
            ))}
            {panel.other.map((row, index) => (
              <text
                className="visual-label"
                key={`${panel.heading}-b-${row}`}
                textAnchor="middle"
                x="214"
                y={76 + index * 20}
              >
                {row}
              </text>
            ))}
            <text className="visual-label" textAnchor="middle" x="140" y="158">
              {panel.heading === "controlled"
                ? "one difference, so a difference in outcome is attributable"
                : "three differences, so no outcome can be attributed"}
            </text>
          </g>
        ))}
        <line className="visual-guide" x1="310" x2="310" y1="20" y2="200" />
      </svg>
    );
  }

  if (block.visual === "orbital") {
    const levels = [
      { label: "1s", y: 215, boxes: 1 },
      { label: "2s", y: 170, boxes: 1 },
      { label: "2p", y: 128, boxes: 3 },
      { label: "3s", y: 78, boxes: 1 },
    ];
    return (
      <svg {...common}>
        <title>An orbital energy-level diagram with electrons filling from the lowest level</title>
        <line className="visual-axis" x1="70" x2="70" y1="45" y2="245" />
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 34 145)"
          x="34"
          y="145"
        >
          increasing energy
        </text>
        {levels.map((level) => (
          <g key={level.label}>
            <text className="visual-large-label" x="100" y={level.y + 15}>
              {level.label}
            </text>
            {Array.from({ length: level.boxes }).map((_, index) => (
              <g key={`${level.label}-${index}`}>
                <rect
                  className="visual-card"
                  height="30"
                  rx="4"
                  width="46"
                  x={165 + index * 58}
                  y={level.y - 8}
                />
                <text
                  className="visual-label"
                  textAnchor="middle"
                  x={188 + index * 58}
                  y={level.y + 14}
                >
                  ↑↓
                </text>
              </g>
            ))}
          </g>
        ))}
        <text className="visual-label" x="380" y="120">
          three 2p orbitals share
        </text>
        <text className="visual-label" x="380" y="142">
          one energy level
        </text>
        <text className="visual-label" x="380" y="220">
          lowest levels fill first
        </text>
      </svg>
    );
  }

  if (block.visual === "bonding") {
    return (
      <svg {...common}>
        <title>Ionic transfer, covalent sharing, and the metallic electron sea compared</title>
        {[
          { x: 15, label: "ionic" },
          { x: 225, label: "covalent" },
          { x: 435, label: "metallic" },
        ].map((panel) => (
          <g key={panel.label} transform={`translate(${panel.x} 30)`}>
            <rect className="visual-container" height="170" rx="10" width="190" />
            <text className="visual-large-label" textAnchor="middle" x="95" y="222">
              {panel.label}
            </text>
          </g>
        ))}
        <g transform="translate(15 30)">
          <circle className="visual-particle" cx="55" cy="85" r="26" />
          <circle className="visual-fill-alt" cx="140" cy="85" r="30" />
          <path className="visual-arrow" d="M 78 66 L 118 66" />
          <text className="visual-label" textAnchor="middle" x="55" y="90">
            ＋
          </text>
          <text className="visual-label" textAnchor="middle" x="140" y="90">
            −
          </text>
          <text className="visual-label" textAnchor="middle" x="95" y="150">
            electron transferred
          </text>
        </g>
        <g transform="translate(225 30)">
          <circle className="visual-particle" cx="60" cy="85" r="26" />
          <circle className="visual-particle" cx="130" cy="85" r="26" />
          <circle className="visual-marker" cx="88" cy="85" r="7" />
          <circle className="visual-marker" cx="106" cy="85" r="7" />
          <text className="visual-label" textAnchor="middle" x="95" y="150">
            electron pair shared
          </text>
        </g>
        <g transform="translate(435 30)">
          {[
            [50, 60],
            [95, 60],
            [140, 60],
            [50, 105],
            [95, 105],
            [140, 105],
          ].map(([cx, cy]) => (
            <circle className="visual-particle" cx={cx} cy={cy} key={`m-${cx}-${cy}`} r="17" />
          ))}
          {[
            [72, 82],
            [118, 82],
            [72, 40],
            [118, 128],
            [30, 82],
            [160, 82],
          ].map(([cx, cy]) => (
            <circle className="visual-marker" cx={cx} cy={cy} key={`e-${cx}-${cy}`} r="5" />
          ))}
          <text className="visual-label" textAnchor="middle" x="95" y="150">
            electrons delocalised
          </text>
        </g>
      </svg>
    );
  }

  if (block.visual === "shape") {
    return (
      <svg {...common}>
        <title>Linear, trigonal planar, tetrahedral, and bent molecular geometries</title>
        {[
          { x: 20, label: "linear", angle: "180°" },
          { x: 180, label: "trigonal planar", angle: "120°" },
          { x: 340, label: "tetrahedral", angle: "109.5°" },
          { x: 500, label: "bent", angle: "104.5°" },
        ].map((panel) => (
          <g key={panel.label} transform={`translate(${panel.x} 20)`}>
            <circle className="visual-particle" cx="60" cy="105" r="18" />
            <text className="visual-label" textAnchor="middle" x="60" y="196">
              {panel.label}
            </text>
            <text className="visual-label" textAnchor="middle" x="60" y="220">
              {panel.angle}
            </text>
          </g>
        ))}
        <g transform="translate(20 20)">
          <line className="visual-line" x1="60" x2="12" y1="105" y2="105" />
          <line className="visual-line" x1="60" x2="108" y1="105" y2="105" />
        </g>
        <g transform="translate(180 20)">
          <line className="visual-line" x1="60" x2="60" y1="105" y2="52" />
          <line className="visual-line" x1="60" x2="15" y1="105" y2="140" />
          <line className="visual-line" x1="60" x2="105" y1="105" y2="140" />
        </g>
        <g transform="translate(340 20)">
          <line className="visual-line" x1="60" x2="60" y1="105" y2="50" />
          <line className="visual-line" x1="60" x2="16" y1="105" y2="138" />
          <line className="visual-line" x1="60" x2="104" y1="105" y2="138" />
          <line className="visual-guide" x1="60" x2="76" y1="105" y2="158" />
        </g>
        <g transform="translate(500 20)">
          <line className="visual-line" x1="60" x2="22" y1="105" y2="142" />
          <line className="visual-line" x1="60" x2="98" y1="105" y2="142" />
          <ellipse className="visual-marker" cx="60" cy="74" rx="18" ry="11" />
          <text className="visual-label" textAnchor="middle" x="60" y="52">
            lone pair
          </text>
        </g>
      </svg>
    );
  }

  if (block.visual === "intermolecular") {
    return (
      <svg {...common}>
        <title>A hydrogen bond between two water molecules and a comparison of interaction strengths</title>
        <g transform="translate(30 40)">
          <circle className="visual-particle" cx="60" cy="60" r="24" />
          <text className="visual-label" textAnchor="middle" x="60" y="66">
            O
          </text>
          <circle className="visual-fill-alt" cx="20" cy="24" r="14" />
          <circle className="visual-fill-alt" cx="100" cy="24" r="14" />
          <line className="visual-line" x1="60" x2="26" y1="60" y2="32" />
          <line className="visual-line" x1="60" x2="94" y1="60" y2="32" />
          <text className="visual-label" x="6" y="122">
            δ− on oxygen, δ+ on hydrogen
          </text>
        </g>
        <path className="visual-guide" d="M 130 118 L 250 152" />
        <text className="visual-label" x="146" y="112">
          hydrogen bond
        </text>
        <g transform="translate(250 118)">
          <circle className="visual-particle" cx="60" cy="60" r="24" />
          <text className="visual-label" textAnchor="middle" x="60" y="66">
            O
          </text>
          <circle className="visual-fill-alt" cx="18" cy="94" r="14" />
          <circle className="visual-fill-alt" cx="102" cy="94" r="14" />
          <line className="visual-line" x1="60" x2="24" y1="60" y2="86" />
          <line className="visual-line" x1="60" x2="96" y1="60" y2="86" />
        </g>
        {[
          { label: "dispersion", height: 26, x: 420 },
          { label: "dipole", height: 52, x: 480 },
          { label: "H bond", height: 92, x: 540 },
        ].map((bar) => (
          <g key={bar.label}>
            <rect
              className="visual-fill"
              height={bar.height}
              width="42"
              x={bar.x}
              y={190 - bar.height}
            />
            <text className="visual-label" textAnchor="middle" x={bar.x + 21} y="212">
              {bar.label}
            </text>
          </g>
        ))}
        <text className="visual-label" x="420" y="242">
          increasing strength
        </text>
      </svg>
    );
  }

  if (block.visual === "bond_energy") {
    return (
      <svg {...common}>
        <title>Potential energy against internuclear distance, showing a well at the bond length</title>
        <Frame xLabel="internuclear distance" yLabel="potential energy">
          <line className="visual-guide" x1={AXIS_LEFT} x2={AXIS_RIGHT} y1="90" y2="90" />
          <text className="visual-label" textAnchor="end" x="570" y="82">
            separated atoms · zero energy
          </text>
          <path
            className="visual-line"
            d="M 118 45 C 135 130, 150 196, 190 196 C 245 196, 300 130, 400 104 C 470 90, 520 90, 560 90"
          />
          <line className="visual-guide" x1="190" x2="190" y1="90" y2="225" />
          <circle className="visual-marker" cx="190" cy="196" r="8" />
          <path className="visual-arrow reverse" d="M 152 94 L 152 192" />
          <text className="visual-label" x="196" y="150">
            bond energy
          </text>
          <text className="visual-label" textAnchor="middle" x="190" y="245">
            bond length
          </text>
          <text className="visual-label" x="96" y="66">
            repulsion
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "rate_curve") {
    return (
      <svg {...common}>
        <title>A reactant concentration falling with time, with a steep initial tangent and a flatter chord</title>
        <Frame xLabel="time" yLabel="reactant concentration">
          <path
            className="visual-line"
            d="M 100 55 C 160 130, 210 172, 290 190 C 370 206, 460 210, 560 211"
          />
          <path className="visual-guide" d="M 90 32 L 250 220" />
          <text className="visual-label" x="150" y="52">
            tangent at t = 0
          </text>
          <text className="visual-label" x="150" y="74">
            steepest, fastest rate
          </text>
          <path className="visual-guide" d="M 100 55 L 470 209" />
          <text className="visual-label" x="330" y="150">
            chord gives the average rate
          </text>
          <circle className="visual-marker" cx="100" cy="55" r="7" />
          <circle className="visual-marker" cx="470" cy="209" r="7" />
          <text className="visual-label" textAnchor="end" x="566" y="200">
            flat once the reaction stops
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "wave_axes") {
    return (
      <svg {...common}>
        <title>The same wave plotted against position and against time, showing wavelength and period</title>
        {[
          { x: 20, axis: "position", repeat: "wavelength λ" },
          { x: 330, axis: "time", repeat: "period T" },
        ].map((panel) => (
          <g key={panel.axis} transform={`translate(${panel.x} 30)`}>
            <line className="visual-axis" x1="20" x2="270" y1="100" y2="100" />
            <path
              className={panel.axis === "time" ? "visual-line coral" : "visual-line"}
              d="M 25 100 C 45 40, 85 40, 105 100 C 125 160, 165 160, 185 100 C 200 56, 230 44, 265 62"
            />
            <path className="visual-arrow" d="M 25 26 L 185 26" />
            <text className="visual-label" textAnchor="middle" x="105" y="20">
              {panel.repeat}
            </text>
            <text className="visual-label" textAnchor="middle" x="145" y="186">
              horizontal axis: {panel.axis}
            </text>
          </g>
        ))}
        <line className="visual-guide" x1="315" x2="315" y1="30" y2="215" />
        <text className="visual-label" textAnchor="middle" x="320" y="252">
          the curves look alike, so only the axis label says which repeat you are reading
        </text>
      </svg>
    );
  }

  if (block.visual === "energy_profile") {
    return (
      <svg {...common}>
        <title>A reaction profile showing activation energy, a catalysed pathway, and the enthalpy change</title>
        <Frame xLabel="reaction coordinate" yLabel="energy">
          <path className="visual-line" d="M 100 100 C 190 100, 210 55, 300 55 C 390 55, 410 170, 545 170" />
          <path
            className="visual-guide"
            d="M 100 100 C 200 100, 230 95, 300 95 C 380 95, 400 170, 545 170"
          />
          <line className="visual-guide" x1="100" x2="560" y1="100" y2="100" />
          <line className="visual-guide" x1="100" x2="560" y1="170" y2="170" />
          <path className="visual-arrow reverse" d="M 300 100 L 300 60" />
          <text className="visual-label" x="308" y="86">
            Eₐ uncatalysed
          </text>
          <text className="visual-label" x="308" y="122">
            Eₐ catalysed
          </text>
          <path className="visual-arrow" d="M 575 104 L 575 166" />
          <text className="visual-label" textAnchor="end" x="568" y="142">
            {"ΔH < 0"}
          </text>
          <text className="visual-label" x="100" y="92">
            reactants
          </text>
          <text className="visual-label" textAnchor="end" x="560" y="192">
            products
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "equilibrium") {
    return (
      <svg {...common}>
        <title>Forward and reverse rates converging as a reaction reaches dynamic equilibrium</title>
        <Frame xLabel="time" yLabel="rate">
          <path className="visual-line" d="M 95 55 C 190 150, 260 168, 420 172 L 560 172" />
          <path className="visual-line coral" d="M 95 222 C 190 195, 260 176, 420 172 L 560 172" />
          <line className="visual-guide" x1="420" x2="420" y1="45" y2="225" />
          <text className="visual-label" x="150" y="48">
            forward rate falls
          </text>
          <text className="visual-label" x="150" y="245">
            reverse rate rises
          </text>
          <text className="visual-label" x="430" y="86">
            equilibrium reached
          </text>
          <text className="visual-label" x="430" y="108">
            rates equal, not zero
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "titration") {
    return (
      <svg {...common}>
        <title>A weak acid against strong base titration curve with buffer region and equivalence point</title>
        <Frame xLabel="volume of base added / cm³" yLabel="pH">
          <path
            className="visual-line"
            d="M 100 200 C 130 186, 150 178, 200 172 C 260 166, 300 160, 330 148 C 350 138, 358 92, 375 72 C 395 54, 450 48, 555 44"
          />
          <line className="visual-guide" x1="215" x2="215" y1="45" y2="225" />
          <circle className="visual-marker" cx="215" cy="171" r="8" />
          <text className="visual-label" x="104" y="150">
            buffer region
          </text>
          <text className="visual-label" x="104" y="128">
            pH ≈ pKa here
          </text>
          <line className="visual-guide" x1="352" x2="352" y1="45" y2="225" />
          <circle className="visual-marker" cx="352" cy="112" r="8" />
          <text className="visual-label" x="362" y="140">
            equivalence point
          </text>
          <text className="visual-label" x="362" y="162">
            above pH 7
          </text>
          <text className="visual-label" x="150" y="212">
            half-equivalence
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "electrochemical") {
    return (
      <svg {...common}>
        <title>A galvanic cell with two half-cells, a salt bridge, and electrons flowing through the circuit</title>
        <g transform="translate(45 90)">
          <rect className="visual-container" height="140" rx="6" width="170" />
          <rect className="visual-fill-alt" height="90" width="166" x="2" y="48" />
          <rect className="visual-fill" height="110" width="22" x="74" y="-30" />
          <text className="visual-large-label" textAnchor="middle" x="85" y="172">
            anode
          </text>
          <text className="visual-label" textAnchor="middle" x="85" y="196">
            oxidation, loses e⁻
          </text>
        </g>
        <g transform="translate(425 90)">
          <rect className="visual-container" height="140" rx="6" width="170" />
          <rect className="visual-fill-alt" height="90" width="166" x="2" y="48" />
          <rect className="visual-fill" height="110" width="22" x="74" y="-30" />
          <text className="visual-large-label" textAnchor="middle" x="85" y="172">
            cathode
          </text>
          <text className="visual-label" textAnchor="middle" x="85" y="196">
            reduction, gains e⁻
          </text>
        </g>
        <path className="visual-arrow" d="M 131 60 L 320 32 L 510 60" />
        <text className="visual-label" textAnchor="middle" x="320" y="26">
          electron flow
        </text>
        <path className="visual-guide" d="M 215 168 L 260 130 L 380 130 L 425 168" />
        <text className="visual-label" textAnchor="middle" x="320" y="122">
          salt bridge keeps charge balanced
        </text>
      </svg>
    );
  }

  if (block.visual === "functional_groups") {
    const groups = [
      { name: "alcohol", formula: "R–OH" },
      { name: "aldehyde", formula: "R–CHO" },
      { name: "ketone", formula: "R–CO–R′" },
      { name: "carboxylic acid", formula: "R–COOH" },
      { name: "ester", formula: "R–COO–R′" },
      { name: "amine", formula: "R–NH₂" },
      { name: "amide", formula: "R–CONH₂" },
      { name: "thiol", formula: "R–SH" },
    ];
    return (
      <svg {...common}>
        <title>A gallery of common functional groups with their general formulae</title>
        {groups.map((group, index) => {
          const column = index % 4;
          const row = Math.floor(index / 4);
          const x = 20 + column * 155;
          const y = 40 + row * 110;
          return (
            <g key={group.name} transform={`translate(${x} ${y})`}>
              <rect className="visual-card" height="82" rx="10" width="142" />
              <text className="visual-large-label" textAnchor="middle" x="71" y="36">
                {group.formula}
              </text>
              <text className="visual-label" textAnchor="middle" x="71" y="64">
                {group.name}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (block.visual === "chirality") {
    return (
      <svg {...common}>
        <title>Two enantiomers drawn either side of a mirror plane</title>
        <line className="visual-guide" x1="320" x2="320" y1="25" y2="255" />
        <text className="visual-label" textAnchor="middle" x="320" y="20">
          mirror
        </text>
        {[
          { x: 60, flip: 1, label: "one enantiomer", groups: ["A", "B", "C", "D"] },
          { x: 400, flip: -1, label: "its mirror image", groups: ["A", "C", "B", "D"] },
        ].map((panel) => (
          <g key={panel.label} transform={`translate(${panel.x} 60)`}>
            <circle className="visual-particle" cx="90" cy="90" r="22" />
            <text className="visual-label" textAnchor="middle" x="90" y="96">
              C
            </text>
            <line className="visual-line" x1="90" x2="90" y1="90" y2="26" />
            <line className="visual-line" x1="90" x2="26" y1="90" y2="132" />
            <line className="visual-line" x1="90" x2="154" y1="90" y2="132" />
            <line className="visual-guide" x1="90" x2="118" y1="90" y2="158" />
            <text className="visual-label" textAnchor="middle" x="90" y="18">
              {panel.groups[0]}
            </text>
            <text className="visual-label" textAnchor="middle" x="18" y="150">
              {panel.groups[1]}
            </text>
            <text className="visual-label" textAnchor="middle" x="162" y="150">
              {panel.groups[2]}
            </text>
            <text className="visual-label" textAnchor="middle" x="130" y="180">
              {panel.groups[3]}
            </text>
            <text className="visual-label" textAnchor="middle" x="90" y="208">
              {panel.label}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (block.visual === "biomolecule") {
    return (
      <svg {...common}>
        <title>Two amino acids joining by condensation to form a peptide bond and releasing water</title>
        <g transform="translate(20 60)">
          <rect className="visual-card" height="88" rx="12" width="200" />
          <text className="visual-large-label" textAnchor="middle" x="100" y="40">
            H₂N–CHR–COOH
          </text>
          <text className="visual-label" textAnchor="middle" x="100" y="68">
            amino acid 1
          </text>
        </g>
        <text className="visual-large-label" textAnchor="middle" x="243" y="112">
          ＋
        </text>
        <g transform="translate(265 60)">
          <rect className="visual-card" height="88" rx="12" width="200" />
          <text className="visual-large-label" textAnchor="middle" x="100" y="40">
            H₂N–CHR′–COOH
          </text>
          <text className="visual-label" textAnchor="middle" x="100" y="68">
            amino acid 2
          </text>
        </g>
        <path className="visual-arrow" d="M 480 104 L 560 104" />
        <text className="visual-label" textAnchor="middle" x="520" y="94">
          −H₂O
        </text>
        <g transform="translate(120 180)">
          <rect className="visual-card active" height="66" rx="12" width="400" />
          <text className="visual-large-label" textAnchor="middle" x="200" y="30">
            H₂N–CHR–CO–NH–CHR′–COOH
          </text>
          <text className="visual-label" textAnchor="middle" x="200" y="54">
            the peptide bond is planar and rigid
          </text>
        </g>
      </svg>
    );
  }

  if (block.visual === "free_body") {
    return (
      <svg {...common}>
        <title>A block on an inclined plane with weight resolved into components, normal force, and friction</title>
        <path className="visual-axis" d="M 60 225 L 480 225 L 480 70 Z" />
        <text className="visual-label" x="96" y="216">
          θ
        </text>
        <g transform="translate(258 108) rotate(-20.3)">
          <rect className="visual-card active" height="46" rx="4" width="66" />
        </g>
        <path className="visual-arrow" d="M 292 132 L 292 232" />
        <text className="visual-label" x="298" y="228">
          weight mg
        </text>
        <path className="visual-arrow reverse" d="M 292 132 L 357 108" />
        <text className="visual-label" x="360" y="104">
          normal force N
        </text>
        <path className="visual-arrow reverse" d="M 292 132 L 226 156" />
        <text className="visual-label" textAnchor="end" x="222" y="176">
          friction f
        </text>
        <path className="visual-guide" d="M 292 132 L 350 213" />
        <path className="visual-guide" d="M 292 132 L 231 173" />
        <text className="visual-label" x="352" y="200">
          mg cos θ
        </text>
        <text className="visual-label" textAnchor="end" x="228" y="196">
          mg sin θ
        </text>
      </svg>
    );
  }

  if (block.visual === "energy_bar") {
    const moments = [
      { label: "at the top", kinetic: 0, potential: 130, x: 90 },
      { label: "halfway down", kinetic: 65, potential: 65, x: 280 },
      { label: "at the bottom", kinetic: 130, potential: 0, x: 470 },
    ];
    return (
      <svg {...common}>
        <title>Stacked kinetic and potential energy bars at three points of a fall, with a constant total</title>
        {moments.map((moment) => (
          <g key={moment.label}>
            <rect
              className="visual-fill-alt"
              height={moment.potential}
              width="84"
              x={moment.x}
              y={200 - moment.potential}
            />
            <rect
              className="visual-fill"
              height={moment.kinetic}
              width="84"
              x={moment.x}
              y={200 - moment.potential - moment.kinetic}
            />
            <text className="visual-label" textAnchor="middle" x={moment.x + 42} y="224">
              {moment.label}
            </text>
          </g>
        ))}
        <line className="visual-guide" x1="70" x2="580" y1="70" y2="70" />
        <text className="visual-label" x="70" y="62">
          total mechanical energy stays constant
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="252">
          upper block: kinetic energy · lower block: potential energy
        </text>
      </svg>
    );
  }

  if (block.visual === "impulse") {
    return (
      <svg {...common}>
        <title>Two force-time curves of equal area: a brief large force and a longer gentle force</title>
        <Frame xLabel="time" yLabel="force">
          <path
            className="visual-fill"
            d="M 110 225 C 130 225, 134 60, 150 60 C 166 60, 170 225, 190 225 Z"
          />
          <path
            className="visual-fill-alt"
            d="M 300 225 C 350 225, 360 145, 430 145 C 500 145, 510 225, 560 225 Z"
          />
          <text className="visual-label" textAnchor="middle" x="150" y="50">
            large force, short time
          </text>
          <text className="visual-label" textAnchor="middle" x="430" y="135">
            smaller force, longer time
          </text>
          <text className="visual-label" textAnchor="middle" x="150" y="248">
            Δt small
          </text>
          <text className="visual-label" textAnchor="middle" x="430" y="248">
            Δt large
          </text>
          <text className="visual-label" x="96" y="30">
            equal shaded areas mean equal impulse, so equal change in momentum
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "circular") {
    return (
      <svg {...common}>
        <title>An object on a circular path with a tangential velocity and an inward centripetal force</title>
        <circle className="visual-guide" cx="300" cy="140" r="98" />
        <circle className="visual-marker" cx="300" cy="42" r="12" />
        <path className="visual-arrow" d="M 300 42 L 424 42" />
        <text className="visual-label" x="430" y="46">
          velocity v is tangential
        </text>
        <path className="visual-arrow reverse" d="M 300 54 L 300 128" />
        <text className="visual-label" x="310" y="106">
          F = mv²/r points inwards
        </text>
        <line className="visual-guide" x1="300" x2="398" y1="140" y2="140" />
        <text className="visual-label" textAnchor="middle" x="349" y="162">
          r
        </text>
        <circle className="visual-particle" cx="300" cy="140" r="7" />
        <text className="visual-label" x="60" y="238">
          speed is constant, but the direction of velocity changes, so there is an acceleration
        </text>
      </svg>
    );
  }

  if (block.visual === "fluid") {
    return (
      <svg {...common}>
        <title>Fluid flowing through a pipe that narrows, with speed increasing where the area falls</title>
        <path className="visual-container" d="M 40 60 L 250 60 L 380 105 L 590 105 L 590 175 L 380 175 L 250 220 L 40 220 Z" />
        <text className="visual-label" textAnchor="middle" x="145" y="48">
          area A₁
        </text>
        <text className="visual-label" textAnchor="middle" x="485" y="94">
          {"area A₂ < A₁"}
        </text>
        <path className="visual-arrow" d="M 80 140 L 160 140" />
        <text className="visual-label" textAnchor="middle" x="120" y="132">
          v₁
        </text>
        <path className="visual-arrow" d="M 420 140 L 560 140" />
        <text className="visual-label" textAnchor="middle" x="490" y="132">
          {"v₂ > v₁"}
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="252">
          A₁v₁ = A₂v₂ · the same volume passes every section each second
        </text>
      </svg>
    );
  }

  if (block.visual === "phase_change") {
    return (
      <svg {...common}>
        <title>A heating curve where temperature plateaus while a substance changes state</title>
        <Frame xLabel="energy supplied" yLabel="temperature">
          <path
            className="visual-line"
            d="M 95 210 L 165 175 L 275 175 L 330 120 L 470 120 L 555 62"
          />
          <text className="visual-label" x="170" y="166">
            melting
          </text>
          <text className="visual-label" x="352" y="112">
            boiling
          </text>
          <text className="visual-label" x="96" y="198">
            solid
          </text>
          <text className="visual-label" x="282" y="152">
            liquid
          </text>
          <text className="visual-label" textAnchor="end" x="560" y="80">
            gas
          </text>
          <text className="visual-label" x="120" y="248">
            on a plateau, energy breaks attractions instead of raising temperature
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "wave") {
    return (
      <svg {...common}>
        <title>A transverse wave with wavelength and amplitude marked</title>
        <line className="visual-axis" x1="60" x2="590" y1="140" y2="140" />
        <path
          className="visual-line"
          d="M 70 140 C 100 55, 160 55, 190 140 C 220 225, 280 225, 310 140 C 340 55, 400 55, 430 140 C 460 225, 520 225, 550 140"
        />
        <path className="visual-arrow" d="M 70 42 L 310 42" />
        <text className="visual-label" textAnchor="middle" x="190" y="34">
          one wavelength λ
        </text>
        <path className="visual-arrow reverse" d="M 596 140 L 596 82" />
        <text className="visual-label" textAnchor="end" x="590" y="76">
          amplitude
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="264">
          v = fλ · frequency is set by the source, speed by the medium
        </text>
      </svg>
    );
  }

  if (block.visual === "optics") {
    return (
      <svg {...common}>
        <title>A ray refracting at a boundary between two media, bending towards the normal in the denser medium</title>
        <line className="visual-axis" x1="40" x2="600" y1="140" y2="140" />
        <line className="visual-guide" x1="320" x2="320" y1="30" y2="250" />
        <rect className="visual-fill-alt" height="4" width="560" x="40" y="138" />
        <text className="visual-label" x="46" y="66">
          medium 1, lower n, faster
        </text>
        <text className="visual-label" x="46" y="238">
          medium 2, higher n, slower
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="26">
          normal
        </text>
        <path className="visual-arrow" d="M 150 42 L 320 140" />
        <path className="visual-arrow" d="M 320 140 L 420 246" />
        <text className="visual-label" x="270" y="106">
          θ₁
        </text>
        <text className="visual-label" x="332" y="196">
          {"θ₂ < θ₁"}
        </text>
        <path className="visual-guide" d="M 320 140 L 490 238" />
        <text className="visual-label" x="464" y="222">
          undeviated path
        </text>
        <text className="visual-label" textAnchor="end" x="600" y="120">
          n₁ sin θ₁ = n₂ sin θ₂
        </text>
      </svg>
    );
  }

  if (block.visual === "spectrum") {
    return (
      <svg {...common}>
        <title>Absorbance against wavelength for two compounds, with the mixture adding their absorbances</title>
        <Frame xLabel="wavelength / nm" yLabel="absorbance">
          {[400, 500, 600, 700, 800].map((value, index) => {
            const x = AXIS_LEFT + index * 122;
            return (
              <g key={value}>
                <line className="visual-tick" x1={x} x2={x} y1={AXIS_BOTTOM} y2={AXIS_BOTTOM + 8} />
                <text className="visual-label" textAnchor="middle" x={x} y="248">
                  {value}
                </text>
              </g>
            );
          })}
          <path
            className="visual-line"
            d="M 105 224 C 150 224, 165 96, 210 96 C 255 96, 268 224, 320 224"
          />
          <path
            className="visual-line coral"
            d="M 330 224 C 380 224, 400 132, 450 132 C 500 132, 516 224, 566 224"
          />
          <text className="visual-label" textAnchor="middle" x="207" y="88">
            compound I
          </text>
          <text className="visual-label" textAnchor="middle" x="450" y="124">
            compound II
          </text>
          <text className="visual-label" x="96" y="52">
            longer conjugation absorbs at longer wavelength
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "circuit") {
    return (
      <svg {...common}>
        <title>A series circuit compared with a parallel circuit</title>
        <g transform="translate(20 20)">
          <path className="visual-axis" d="M 40 40 L 250 40 L 250 150 L 40 150 Z" fill="none" />
          <rect className="visual-card active" height="26" rx="4" width="52" x="92" y="27" />
          <rect className="visual-card active" height="26" rx="4" width="52" x="168" y="27" />
          <rect className="visual-fill" height="34" width="12" x="34" y="78" />
          <text className="visual-label" textAnchor="middle" x="145" y="184">
            series
          </text>
          <text className="visual-label" textAnchor="middle" x="145" y="206">
            R = R₁ + R₂
          </text>
        </g>
        <g transform="translate(340 20)">
          <path className="visual-axis" d="M 40 40 L 250 40 L 250 150 L 40 150 Z" fill="none" />
          <line className="visual-axis" x1="110" x2="110" y1="40" y2="150" />
          <line className="visual-axis" x1="190" x2="190" y1="40" y2="150" />
          <rect className="visual-card active" height="52" rx="4" width="26" x="97" y="69" />
          <rect className="visual-card active" height="52" rx="4" width="26" x="177" y="69" />
          <rect className="visual-fill" height="34" width="12" x="34" y="78" />
          <text className="visual-label" textAnchor="middle" x="145" y="184">
            parallel
          </text>
          <text className="visual-label" textAnchor="middle" x="145" y="206">
            1/R = 1/R₁ + 1/R₂
          </text>
        </g>
      </svg>
    );
  }

  const delegated =
    BiologyVisual({ block }) ??
    GeneticsVisual({ block }) ??
    PhysiologyVisual({ block }) ??
    TechniqueVisual({ block });

  if (delegated) {
    return delegated;
  }

  return (
    <svg {...common}>
      <title>An annotated set of axes awaiting data</title>
      <Frame xLabel="independent quantity" yLabel="dependent quantity">
        <path className="visual-line" d="M 105 205 C 220 190, 330 120, 555 60" />
      </Frame>
    </svg>
  );
}
