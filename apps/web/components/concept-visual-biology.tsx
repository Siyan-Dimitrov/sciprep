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

export function BiologyVisual({ block }: { block: VisualBlock }): React.ReactElement | null {
  const common = {
    role: "img",
    "aria-label": block.caption,
    viewBox: "0 0 640 280",
  } as const;

  if (block.visual === "organelle") {
    return (
      <svg {...common}>
        <title>A eukaryotic cell in cross-section with its main compartments labelled</title>
        <rect className="visual-card" height="218" rx="60" width="590" x="25" y="26" />
        <circle className="visual-fill-alt" cx="140" cy="132" r="56" />
        <circle className="visual-card" cx="140" cy="132" r="46" />
        <text className="visual-label" textAnchor="middle" x="140" y="138">
          nucleus
        </text>
        <line className="visual-guide" x1="112" x2="102" y1="72" y2="90" />
        <text className="visual-label" x="46" y="66">
          nuclear envelope
        </text>
        <path
          className="visual-line"
          d="M 182 108 C 226 88, 236 128, 274 112 C 306 98, 316 134, 288 148"
        />
        {[
          [212, 101],
          [231, 108],
          [250, 115],
          [274, 112],
          [294, 110],
          [304, 120],
          [302, 134],
        ].map(([cx, cy]) => (
          <circle className="visual-marker" cx={cx} cy={cy} key={`ribosome-${cx}-${cy}`} r="5" />
        ))}
        <text className="visual-label" textAnchor="middle" x="234" y="84">
          rough ER
        </text>
        <path
          className="visual-line"
          d="M 206 178 C 244 162, 254 202, 292 186 C 320 174, 330 206, 304 218"
        />
        <text className="visual-label" textAnchor="middle" x="240" y="236">
          smooth ER
        </text>
        <path className="visual-line" d="M 372 66 C 396 54, 444 54, 468 66" />
        <path className="visual-line" d="M 376 84 C 398 73, 442 73, 464 84" />
        <path className="visual-line" d="M 380 102 C 400 92, 440 92, 460 102" />
        <path className="visual-line" d="M 384 120 C 402 111, 438 111, 456 120" />
        <text className="visual-label" textAnchor="middle" x="420" y="46">
          Golgi
        </text>
        <circle className="visual-fill-alt" cx="556" cy="116" r="26" />
        <text className="visual-label" textAnchor="middle" x="556" y="158">
          lysosome
        </text>
        <ellipse className="visual-card" cx="452" cy="190" rx="64" ry="32" />
        <path
          className="visual-line"
          d="M 400 190 C 414 164, 428 216, 444 190 C 460 164, 474 216, 490 190 C 496 178, 500 184, 504 190"
        />
        <text className="visual-label" textAnchor="middle" x="452" y="238">
          mitochondrion
        </text>
        <line className="visual-guide" x1="52" x2="32" y1="220" y2="188" />
        <text className="visual-label" x="40" y="232">
          plasma membrane
        </text>
        <text className="visual-label" x="25" y="266">
          the rough ER is continuous with the nuclear envelope
        </text>
      </svg>
    );
  }

  if (block.visual === "vesicle_traffic") {
    return (
      <svg {...common}>
        <title>
          The vesicular transport and cisternal maturation models of the Golgi drawn side by side
        </title>
        <line className="visual-guide" x1="320" x2="320" y1="18" y2="248" />
        {[
          {
            x: 16,
            heading: "vesicular transport",
            notes: ["cisternae stay in place", "vesicles carry cargo cis → trans"],
          },
          {
            x: 332,
            heading: "cisternal maturation",
            notes: ["whole cisternae move cis → trans", "vesicles run trans → cis"],
          },
        ].map((panel) => (
          <g key={panel.heading} transform={`translate(${panel.x} 0)`}>
            <text className="visual-large-label" textAnchor="middle" x="130" y="32">
              {panel.heading}
            </text>
            <text className="visual-label" textAnchor="middle" x="130" y="60">
              trans face
            </text>
            {[72, 108, 144, 180].map((y) => (
              <rect
                className="visual-card"
                height="14"
                key={`cisterna-${panel.x}-${y}`}
                rx="7"
                width="170"
                x="45"
                y={y}
              />
            ))}
            <text className="visual-label" textAnchor="middle" x="130" y="212">
              cis face
            </text>
            {panel.notes.map((note, index) => (
              <text
                className="visual-label"
                key={note}
                textAnchor="middle"
                x="130"
                y={238 + index * 20}
              >
                {note}
              </text>
            ))}
            {[97, 133, 169].map((cy) => (
              <circle className="visual-marker" cx="244" cy={cy} key={`vesicle-${panel.x}-${cy}`} r="8" />
            ))}
          </g>
        ))}
        <Arrow from={[260, 192]} to={[260, 70]} />
        <Arrow from={[576, 70]} to={[576, 192]} variant="reverse" />
        <Arrow from={[360, 192]} to={[360, 70]} />
      </svg>
    );
  }

  if (block.visual === "membrane_transport") {
    const lipids = Array.from({ length: 31 }, (_, index) => 56 + index * 18).filter(
      (x) => Math.abs(x - 275) > 36 && Math.abs(x - 415) > 45 && Math.abs(x - 545) > 38,
    );
    const routes = [
      { x: 130, name: "simple diffusion", species: "O₂", gradient: "down gradient", extra: "" },
      { x: 275, name: "channel protein", species: "K⁺", gradient: "down gradient", extra: "" },
      {
        x: 415,
        name: "carrier protein",
        species: "glucose",
        gradient: "down gradient",
        extra: "shape change",
      },
      {
        x: 545,
        name: "ATP-driven pump",
        species: "Na⁺",
        gradient: "against gradient",
        extra: "hydrolyses ATP",
      },
    ];
    return (
      <svg {...common}>
        <title>
          Four transport routes across a phospholipid bilayer, three down the gradient and one
          against it
        </title>
        <text className="visual-label" x="20" y="26">
          outside · high concentration
        </text>
        {lipids.map((x) => (
          <g key={`lipid-${x}`}>
            <circle className="visual-particle" cx={x} cy="114" r="6" />
            <line className="visual-tick" x1={x - 3} x2={x - 4} y1="120" y2="140" />
            <line className="visual-tick" x1={x + 3} x2={x + 4} y1="120" y2="140" />
            <circle className="visual-particle" cx={x} cy="166" r="6" />
            <line className="visual-tick" x1={x - 3} x2={x - 4} y1="160" y2="140" />
            <line className="visual-tick" x1={x + 3} x2={x + 4} y1="160" y2="140" />
          </g>
        ))}
        <rect className="visual-card" height="76" rx="6" width="16" x="249" y="102" />
        <rect className="visual-card" height="76" rx="6" width="16" x="285" y="102" />
        <path className="visual-card" d="M 386 178 L 402 178 L 409 102 L 393 102 Z" />
        <path className="visual-card" d="M 444 178 L 428 178 L 421 102 L 437 102 Z" />
        <path className="visual-arrow" d="M 450 114 C 464 128, 464 152, 450 166" />
        <rect className="visual-card" height="76" rx="6" width="16" x="521" y="102" />
        <rect className="visual-card" height="76" rx="6" width="16" x="553" y="102" />
        <circle className="visual-marker" cx="582" cy="176" r="8" />
        <text className="visual-label" textAnchor="end" x="604" y="196">
          ATP
        </text>
        <Arrow from={[34, 88]} to={[34, 192]} />
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 16 140)"
          x="16"
          y="140"
        >
          gradient
        </text>
        <Arrow from={[130, 88]} to={[130, 192]} />
        <Arrow from={[275, 88]} to={[275, 192]} />
        <Arrow from={[415, 88]} to={[415, 192]} />
        <Arrow from={[545, 192]} to={[545, 88]} variant="reverse" />
        {routes.map((route) => (
          <g key={route.name}>
            <text className="visual-label" textAnchor="middle" x={route.x} y="52">
              {route.name}
            </text>
            <text className="visual-label" textAnchor="middle" x={route.x} y="76">
              {route.species}
            </text>
            <text className="visual-label" textAnchor="middle" x={route.x} y="214">
              {route.gradient}
            </text>
            <text className="visual-label" textAnchor="middle" x={route.x} y="234">
              {route.extra}
            </text>
          </g>
        ))}
        <text className="visual-label" x="20" y="258">
          inside · low concentration
        </text>
      </svg>
    );
  }

  if (block.visual === "osmosis") {
    const cells = [
      {
        cx: 108,
        heading: "hypotonic",
        sub: "dilute surroundings",
        radius: 54,
        flux: "net water in",
        state: "cell swells",
        arrows: [
          { from: [12, 142], to: [46, 142], variant: "forward" },
          { from: [204, 142], to: [170, 142], variant: "forward" },
        ],
      },
      {
        cx: 320,
        heading: "isotonic",
        sub: "equal concentrations",
        radius: 40,
        flux: "no net flux",
        state: "cell unchanged",
        arrows: [
          { from: [222, 126], to: [272, 126], variant: "forward" },
          { from: [272, 158], to: [222, 158], variant: "reverse" },
          { from: [418, 126], to: [368, 126], variant: "forward" },
          { from: [368, 158], to: [418, 158], variant: "reverse" },
        ],
      },
      {
        cx: 532,
        heading: "hypertonic",
        sub: "concentrated surroundings",
        radius: 28,
        flux: "net water out",
        state: "cell shrinks",
        arrows: [
          { from: [500, 142], to: [462, 142], variant: "reverse" },
          { from: [564, 142], to: [602, 142], variant: "reverse" },
        ],
      },
    ] as const;
    return (
      <svg {...common}>
        <title>
          Cells in hypotonic, isotonic, and hypertonic surroundings with the net water movement in
          each
        </title>
        {cells.map((cell) => (
          <g key={cell.heading}>
            <text className="visual-large-label" textAnchor="middle" x={cell.cx} y="40">
              {cell.heading}
            </text>
            <text className="visual-label" textAnchor="middle" x={cell.cx} y="62">
              {cell.sub}
            </text>
            <circle className="visual-card" cx={cell.cx} cy="142" r={cell.radius} />
            <circle className="visual-guide" cx={cell.cx} cy="142" r="40" />
            {cell.arrows.map((arrow, index) => (
              <Arrow
                from={arrow.from}
                key={`${cell.heading}-${index}`}
                to={arrow.to}
                variant={arrow.variant}
              />
            ))}
            <text className="visual-label" textAnchor="middle" x={cell.cx} y="212">
              {cell.flux}
            </text>
            <text className="visual-label" textAnchor="middle" x={cell.cx} y="234">
              {cell.state}
            </text>
          </g>
        ))}
        <text className="visual-label" textAnchor="middle" x="320" y="264">
          hypotonic and hypertonic describe the surrounding solution, not the cell
        </text>
      </svg>
    );
  }

  if (block.visual === "enzyme_kinetics") {
    return (
      <svg {...common}>
        <title>
          A Michaelis–Menten curve saturating towards Vmax, with half of Vmax marked at Km
        </title>
        <Frame xLabel="[S] / mol dm⁻³" yLabel="initial rate v">
          <line className="visual-guide" x1={AXIS_LEFT} x2={AXIS_RIGHT} y1="70" y2="70" />
          <text className="visual-label" textAnchor="end" x="570" y="62">
            Vmax asymptote
          </text>
          <text className="visual-label" x="150" y="52">
            rate saturates as active sites fill
          </text>
          <path
            className="visual-line"
            d="M 85 225 C 104 180, 117 162, 130 147 C 162 118, 205 105, 268 100 C 362 92, 470 86, 566 83"
          />
          <line className="visual-guide" x1={AXIS_LEFT} x2="130" y1="147" y2="147" />
          <text className="visual-label" x="90" y="138">
            ½Vmax
          </text>
          <line className="visual-guide" x1="130" x2="130" y1="147" y2={AXIS_BOTTOM} />
          <circle className="visual-marker" cx="130" cy="147" r="7" />
          <text className="visual-label" textAnchor="middle" x="130" y="245">
            Km
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "lineweaver") {
    return (
      <svg {...common}>
        <title>
          A double-reciprocal plot with control, competitive, and non-competitive lines and their
          intercepts
        </title>
        <line className="visual-axis" x1="90" x2="600" y1="220" y2="220" />
        <line className="visual-axis" x1="200" x2="200" y1="46" y2="240" />
        <text className="visual-label" textAnchor="end" x="194" y="52">
          1/v
        </text>
        <text className="visual-label" textAnchor="end" x="596" y="242">
          1/[S]
        </text>
        <line className="visual-line" x1="100" x2="430" y1="220" y2="121" />
        <line className="visual-line coral" x1="133" x2="420" y1="220" y2="91" />
        <line className="visual-line flat" x1="100" x2="390" y1="220" y2="60" />
        <text className="visual-label" x="398" y="58">
          non-competitive
        </text>
        <text className="visual-label" x="428" y="90">
          competitive
        </text>
        <text className="visual-label" x="438" y="124">
          no inhibitor
        </text>
        <circle className="visual-marker" cx="200" cy="190" r="7" />
        <circle className="visual-marker" cx="100" cy="220" r="7" />
        <text className="visual-label" x="210" y="208">
          1/Vmax
        </text>
        <text className="visual-label" textAnchor="middle" x="100" y="242">
          −1/Km
        </text>
        <text className="visual-label" textAnchor="middle" x="320" y="264">
          competitive raises Km · non-competitive lowers Vmax
        </text>
      </svg>
    );
  }

  if (block.visual === "metabolic_map") {
    const stages = [
      {
        titleLines: ["glycolysis"],
        location: "cytosol",
        atp: "net 2 ATP",
        coenzyme: "2 NADH",
      },
      {
        titleLines: ["link reaction"],
        location: "matrix",
        atp: "no ATP",
        coenzyme: "2 NADH",
      },
      {
        titleLines: ["TCA cycle"],
        location: "matrix",
        atp: "2 ATP",
        coenzyme: "6 NADH · 2 FADH₂",
      },
      {
        titleLines: ["oxidative", "phosphorylation"],
        location: "inner membrane",
        atp: "≈26 ATP",
        coenzyme: "NADH reoxidised",
      },
    ];
    return (
      <svg {...common}>
        <title>
          The four stages of aerobic respiration in sequence, with a fermentation branch off
          glycolysis
        </title>
        <rect className="visual-card" height="54" rx="12" width="124" x="20" y="26" />
        <text className="visual-label" textAnchor="middle" x="82" y="50">
          fermentation
        </text>
        <text className="visual-label" textAnchor="middle" x="82" y="70">
          2 ATP only
        </text>
        <Arrow from={[82, 102]} to={[82, 84]} variant="reverse" />
        <text className="visual-label" x="98" y="96">
          regenerates NAD⁺
        </text>
        {stages.map((stage, index) => {
          const x = 20 + index * 156;
          const cx = x + 62;
          return (
            <g key={stage.titleLines.join(" ")}>
              <rect className="visual-card" height="72" rx="12" width="124" x={x} y="104" />
              {stage.titleLines.map((line, lineIndex) => (
                <text
                  className="visual-label"
                  key={line}
                  textAnchor="middle"
                  x={cx}
                  y={stage.titleLines.length === 1 ? 146 : 136 + lineIndex * 22}
                >
                  {line}
                </text>
              ))}
              <text className="visual-label" textAnchor="middle" x={cx} y="196">
                {stage.location}
              </text>
              <text className="visual-label" textAnchor="middle" x={cx} y="216">
                {stage.atp}
              </text>
              <text className="visual-label" textAnchor="middle" x={cx} y="234">
                {stage.coenzyme}
              </text>
              {index < stages.length - 1 ? (
                <Arrow from={[x + 128, 140]} to={[x + 152, 140]} />
              ) : null}
            </g>
          );
        })}
        <text className="visual-label" textAnchor="middle" x="320" y="262">
          aerobic total ≈ 30 ATP per glucose · fermentation gives 2
        </text>
      </svg>
    );
  }

  if (block.visual === "chemiosmosis") {
    return (
      <svg {...common}>
        <title>
          Proton pumping across the inner mitochondrial membrane driving ATP synthase
        </title>
        <text className="visual-label" x="28" y="28">
          intermembrane space · high H⁺
        </text>
        <text className="visual-label" textAnchor="end" x="612" y="28">
          the H⁺ gradient stores free energy
        </text>
        {[
          [46, 58],
          [80, 46],
          [116, 62],
          [150, 50],
          [186, 66],
          [222, 52],
          [258, 60],
          [292, 46],
          [324, 64],
          [360, 52],
          [396, 62],
          [432, 48],
          [468, 64],
          [540, 56],
          [576, 46],
          [608, 60],
        ].map(([cx, cy]) => (
          <circle className="visual-particle" cx={cx} cy={cy} key={`out-${cx}-${cy}`} r="5" />
        ))}
        <rect className="visual-card" height="38" width="592" x="24" y="120" />
        {[
          { x: 99, label: "I", labelX: 130, arrowX: 152 },
          { x: 219, label: "III", labelX: 250, arrowX: 272 },
          { x: 339, label: "IV", labelX: 370, arrowX: 392 },
        ].map((complex) => (
          <g key={complex.label}>
            <rect className="visual-card active" height="54" rx="6" width="62" x={complex.x} y="112" />
            <text className="visual-large-label" textAnchor="middle" x={complex.labelX} y="140">
              {complex.label}
            </text>
            <Arrow from={[complex.arrowX, 186]} to={[complex.arrowX, 96]} />
          </g>
        ))}
        <text className="visual-label" x="60" y="88">
          H⁺ pumped out
        </text>
        <Arrow from={[56, 152]} to={[412, 152]} />
        <text className="visual-label" textAnchor="end" x="50" y="157">
          e⁻
        </text>
        <text className="visual-label" textAnchor="middle" x="370" y="204">
          O₂ + 4e⁻ + 4H⁺ → 2H₂O
        </text>
        <text className="visual-label" textAnchor="middle" x="370" y="226">
          final acceptor
        </text>
        <rect className="visual-card active" height="54" rx="6" width="14" x="478" y="112" />
        <rect className="visual-card active" height="54" rx="6" width="14" x="508" y="112" />
        <circle className="visual-card active" cx="500" cy="196" r="28" />
        <Arrow from={[500, 92]} to={[500, 166]} variant="reverse" />
        <text className="visual-label" x="520" y="104">
          H⁺ flows back
        </text>
        <text className="visual-label" x="534" y="188">
          ADP + Pᵢ
        </text>
        <text className="visual-label" x="534" y="210">
          → ATP
        </text>
        <text className="visual-label" textAnchor="middle" x="500" y="246">
          ATP synthase
        </text>
        <text className="visual-label" x="20" y="182">
          inner membrane
        </text>
        <text className="visual-label" x="20" y="206">
          matrix · low H⁺
        </text>
        {[
          [52, 232],
          [96, 248],
          [140, 232],
        ].map(([cx, cy]) => (
          <circle className="visual-particle" cx={cx} cy={cy} key={`in-${cx}-${cy}`} r="5" />
        ))}
      </svg>
    );
  }

  return null;
}
