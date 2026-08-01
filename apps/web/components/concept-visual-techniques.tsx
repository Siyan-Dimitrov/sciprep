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

// Ladder positions come from distance = 70 px per decade of size, measured from
// a 10⁴ bp band 10 px below the wells: y = 70 + 70 × (4 − log₁₀ size).
const LADDER = [
  { size: "10 000", y: 70 },
  { size: "3 000", y: 107 },
  { size: "1 000", y: 140 },
  { size: "300", y: 177 },
  { size: "100", y: 210 },
];

const GEL_LANES = [
  { label: "ladder", x: 150, bands: LADDER.map((band) => band.y) },
  { label: "sample 1", x: 235, bands: [107, 177] },
  { label: "sample 2", x: 320, bands: [140] },
  { label: "sample 3", x: 405, bands: [70, 140] },
];

// Equilateral triangle: side 200 px, so the height is 173.2 px.
const TRI_APEX = { x: 250, y: 48.8 };
const TRI_LEFT = { x: 150, y: 222 };
const TRI_RIGHT = { x: 350, y: 222 };

function mix(a: number, b: number, c: number) {
  return {
    x: a * TRI_APEX.x + b * TRI_LEFT.x + c * TRI_RIGHT.x,
    y: a * TRI_APEX.y + b * TRI_LEFT.y + c * TRI_RIGHT.y,
  };
}

function triLine(from: { x: number; y: number }, to: { x: number; y: number }) {
  return { x1: from.x.toFixed(1), y1: from.y.toFixed(1), x2: to.x.toFixed(1), y2: to.y.toFixed(1) };
}

// Contours of f(x, y) = exp(−r₁²/2·36²) + 0.85 exp(−r₂²/2·72²), peaks at
// (200, 106) and (390, 160), traced by marching squares on a 2 px grid.
const CONTOURS = [
  {
    level: "0.2",
    closed: false,
    d: "M 493.8 225 L 501.8 210 L 507.4 195 L 511 179 L 512.5 163 L 511.7 146 L 508.8 130 L 503.9 115 L 496.8 100 L 487.6 86 L 477.2 74 L 465 63.2 L 451 53.8 L 437 46.9 L 421 41.5 L 405 38.4 L 389 37.5 L 367 39.7 L 345 46.1 L 325 56 L 297 74.4 L 287 78.1 L 281 78 L 273 74.6 L 247.9 56 L 233 47.6 L 219 42.8 L 203 40.7 L 185 42.8 L 169 49.1 L 154.4 60 L 143.7 74 L 139.5 83 L 136.4 94 L 135.8 114 L 137.8 124 L 141.6 134 L 146.7 143 L 153.1 151 L 161 158.2 L 169.8 164 L 179 168.3 L 191 171.9 L 211 173.8 L 247 171.1 L 257 173.8 L 265.3 183 L 286.1 225",
  },
  {
    level: "0.4 peak",
    closed: true,
    d: "M 195 57 L 185 59.2 L 175 63.9 L 167 69.8 L 160.6 77 L 155.8 85 L 152.3 95 L 151.1 105 L 151.9 115 L 154.5 124 L 159.1 133 L 165.5 141 L 173 147.3 L 181 151.8 L 191 155.2 L 201 156.6 L 213 155.9 L 223 153.4 L 233 149 L 241 143.6 L 247.9 137 L 253.3 129 L 256.4 121 L 257.6 112 L 256.7 103 L 253.7 93 L 248.4 83 L 242.1 75 L 234.3 68 L 225 62.3 L 215 58.5 L 205 56.8 L 195 57 Z",
  },
  {
    level: "0.4 broad",
    closed: false,
    d: "M 449.9 225 L 459.2 215 L 466.7 204 L 472.4 192 L 476.3 179 L 478.2 166 L 478.1 153 L 476.1 140 L 472 127 L 466.1 115 L 458.4 104 L 449 94.2 L 439 86.4 L 427 79.7 L 415 75.2 L 403 72.6 L 389 71.6 L 375 72.9 L 363 75.8 L 351 80.6 L 339 87.7 L 328.7 96 L 319.2 106 L 311.4 117 L 305.4 129 L 302 141 L 300.6 153 L 301.2 167 L 303.6 180 L 307.9 193 L 313.9 205 L 321 215.3 L 330.1 225",
  },
  {
    level: "0.6 peak",
    closed: true,
    d: "M 199 69 L 185 72.4 L 173 81.2 L 165.4 94 L 163.5 109 L 167.4 123 L 177 135 L 189.9 142 L 205 143.9 L 219.8 140 L 232 131 L 239.1 119 L 240.8 105 L 236.8 91 L 227 78.6 L 213.6 71 L 199 69 Z",
  },
  {
    level: "0.6 broad",
    closed: true,
    d: "M 387 100 L 375 101.8 L 363.6 106 L 353.8 112 L 345.1 120 L 338.4 129 L 333.2 140 L 330.5 151 L 329.9 163 L 331.5 174 L 335.3 185 L 341.1 195 L 349.1 204 L 359 211.5 L 369 216.3 L 381 219.4 L 393 220 L 405 218.2 L 416.4 214 L 426.1 208 L 434.8 200 L 441.5 191 L 446.7 180 L 449.4 169 L 450 157 L 448.4 146 L 444.6 135 L 438.8 125 L 430.9 116 L 421 108.5 L 411 103.7 L 399 100.6 L 387 100 Z",
  },
  {
    level: "0.8 peak",
    closed: true,
    d: "M 201 81 L 191 82.9 L 183 88.2 L 177.2 97 L 175.5 107 L 177.9 117 L 183.9 125 L 193 130.3 L 203 131.7 L 213 129.1 L 221 123.2 L 225.9 115 L 227.3 106 L 225 96.4 L 219 88.1 L 211 83 L 201 81 Z",
  },
  {
    level: "0.8 broad",
    closed: true,
    d: "M 389 134.9 L 379 137.5 L 371.6 143 L 366.6 151 L 364.9 161 L 367 170 L 373 178.4 L 381 183.4 L 391 185.1 L 401 182.5 L 408.4 177 L 413.4 169 L 415 159 L 413 150 L 407 141.6 L 399 136.6 L 389 134.9 Z",
  },
];

// Level values read along the row through the broad peak, where the field is shallow.
const CONTOUR_LABELS = [
  { value: "0.8", x: 419 },
  { value: "0.6", x: 454 },
  { value: "0.4", x: 482 },
  { value: "0.2", x: 516 },
];

const RADAR_CX = 215;
const RADAR_CY = 140;
const RADAR_R = 88;

const RADAR_AXES = [
  { label: "recall", x: 215, y: 36, anchor: "middle" as const },
  { label: "algebra", x: 309, y: 92, anchor: "start" as const },
  { label: "graphs", x: 309, y: 196, anchor: "start" as const },
  { label: "timing", x: 215, y: 248, anchor: "middle" as const },
  { label: "units", x: 121, y: 196, anchor: "end" as const },
  { label: "logic", x: 121, y: 92, anchor: "end" as const },
];

const RADAR_A = [80, 55, 70, 40, 60, 75];
const RADAR_B = [45, 85, 50, 75, 35, 60];

function radarPoint(index: number, value: number) {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  const radius = (value / 100) * RADAR_R;
  return {
    x: RADAR_CX + radius * Math.cos(angle),
    y: RADAR_CY + radius * Math.sin(angle),
  };
}

function radarPath(values: number[]) {
  return `${values
    .map((value, index) => {
      const point = radarPoint(index, value);
      return `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    })
    .join(" ")} Z`;
}

// Log–log frame: one decade is 130 px across and 60 px up.
const LOG_X = [
  { label: "10⁰", x: 105 },
  { label: "10¹", x: 235 },
  { label: "10²", x: 365 },
  { label: "10³", x: 495 },
];

const LOG_Y = [
  { label: "10⁰", y: 215 },
  { label: "10¹", y: 155 },
  { label: "10²", y: 95 },
  { label: "10³", y: 35 },
];

export function TechniqueVisual({ block }: { block: VisualBlock }): React.ReactElement | null {
  const common = {
    role: "img",
    "aria-label": block.caption,
    viewBox: "0 0 640 280",
  } as const;

  if (block.visual === "chromatography") {
    return (
      <svg {...common}>
        <title>
          A thin-layer plate with the retardation factor measured off it, beside a two-dimensional
          plate on which a co-migrating pair separates in a second solvent
        </title>
        <text className="visual-label" x="16" y="24">
          one run, one solvent
        </text>
        <rect className="visual-card" height="160" rx="4" width="110" x="45" y="60" />
        <line className="visual-guide" x1="45" x2="155" y1="70" y2="70" />
        <line className="visual-guide" x1="45" x2="155" y1="200" y2="200" />
        <text className="visual-label" textAnchor="middle" x="100" y="54">
          solvent front
        </text>
        <text className="visual-label" x="50" y="216">
          baseline
        </text>
        {[
          { label: "A", y: 96 },
          { label: "B", y: 122 },
          { label: "C", y: 148 },
        ].map((spot) => (
          <g key={spot.label}>
            <ellipse className="visual-marker" cx="100" cy={spot.y} rx="11" ry="7" />
            <text className="visual-label" x="52" y={spot.y + 5}>
              {spot.label}
            </text>
          </g>
        ))}
        <line className="visual-guide" x1="155" x2="240" y1="200" y2="200" />
        <line className="visual-guide" x1="155" x2="182" y1="122" y2="122" />
        <line className="visual-guide" x1="155" x2="240" y1="70" y2="70" />
        <line className="visual-arrow" x1="175" x2="175" y1="122" y2="200" />
        <line className="visual-tick" x1="169" x2="181" y1="122" y2="122" />
        <line className="visual-tick" x1="169" x2="181" y1="200" y2="200" />
        <text className="visual-label" x="185" y="166">
          39 mm
        </text>
        <line className="visual-arrow" x1="235" x2="235" y1="70" y2="200" />
        <line className="visual-tick" x1="229" x2="241" y1="70" y2="70" />
        <line className="visual-tick" x1="229" x2="241" y1="200" y2="200" />
        <text className="visual-label" x="245" y="140">
          65 mm
        </text>
        <text className="visual-label" x="20" y="242">
          B moved 39 mm of 65 mm
        </text>
        <text className="visual-label" x="20" y="262">
          Rf = 39 ÷ 65 = 0.60
        </text>
        <line className="visual-guide" x1="300" x2="300" y1="30" y2="252" />
        <text className="visual-label" x="330" y="24">
          two runs, two solvents
        </text>
        <rect className="visual-card" height="165" rx="4" width="180" x="350" y="58" />
        <line className="visual-arrow" x1="338" x2="338" y1="205" y2="82" />
        <path className="visual-arrow" d="M 332 92 L 338 80 L 344 92" />
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 322 142)"
          x="322"
          y="142"
        >
          run 1 · solvent A
        </text>
        <line className="visual-arrow" x1="360" x2="514" y1="240" y2="240" />
        <path className="visual-arrow" d="M 504 234 L 516 240 L 504 246" />
        <text className="visual-label" textAnchor="middle" x="438" y="262">
          run 2 · solvent B
        </text>
        <ellipse className="visual-particle" cx="370" cy="205" rx="10" ry="6" />
        <line className="visual-guide" x1="370" x2="370" y1="199" y2="128" />
        <ellipse className="visual-particle" cx="370" cy="120" rx="11" ry="7" />
        <line className="visual-guide" x1="381" x2="489" y1="120" y2="120" />
        <ellipse className="visual-marker" cx="445" cy="120" rx="11" ry="7" />
        <ellipse className="visual-marker" cx="500" cy="120" rx="11" ry="7" />
        <text className="visual-label" x="358" y="100">
          one spot after run 1
        </text>
        <text className="visual-label" textAnchor="middle" x="452" y="154">
          two spots after run 2
        </text>
      </svg>
    );
  }

  if (block.visual === "electrophoresis") {
    return (
      <svg {...common}>
        <title>
          A gel with a size ladder and three sample lanes, showing fragments migrating towards the
          positive electrode a distance set by the logarithm of their size
        </title>
        <rect className="visual-fill" height="6" width="410" x="60" y="22" />
        <text className="visual-label" textAnchor="middle" x="265" y="16">
          − cathode
        </text>
        <rect className="visual-fill" height="6" width="410" x="60" y="243" />
        <text className="visual-label" textAnchor="middle" x="265" y="262">
          ＋ anode
        </text>
        <rect className="visual-card" height="185" rx="4" width="410" x="60" y="48" />
        <line className="visual-arrow" x1="40" x2="40" y1="70" y2="204" />
        <path className="visual-arrow" d="M 34 200 L 40 212 L 46 200" />
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 22 140)"
          x="22"
          y="140"
        >
          migration
        </text>
        {GEL_LANES.map((lane) => (
          <g key={lane.label}>
            <text className="visual-label" textAnchor="middle" x={lane.x} y="44">
              {lane.label}
            </text>
            <rect className="visual-card" height="10" rx="2" width="44" x={lane.x - 22} y="52" />
            {lane.bands.map((band) => (
              <rect
                className="visual-fill"
                height="7"
                key={`${lane.label}-${band}`}
                width="44"
                x={lane.x - 22}
                y={band - 3.5}
              />
            ))}
          </g>
        ))}
        {LADDER.map((band) => (
          <text className="visual-label" key={band.size} textAnchor="end" x="122" y={band.y + 5}>
            {band.size}
          </text>
        ))}
        <line className="visual-axis" x1="500" x2="500" y1="60" y2="220" />
        {[
          { label: "10⁴ bp", y: 70 },
          { label: "10³ bp", y: 140 },
          { label: "10² bp", y: 210 },
        ].map((tick) => (
          <g key={tick.label}>
            <line className="visual-tick" x1="494" x2="506" y1={tick.y} y2={tick.y} />
            <text className="visual-label" x="512" y={tick.y + 5}>
              {tick.label}
            </text>
          </g>
        ))}
        <text className="visual-label" x="512" y="54">
          large
        </text>
        <text className="visual-label" x="512" y="232">
          small
        </text>
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 596 140)"
          x="596"
          y="140"
        >
          equal step per tenfold
        </text>
      </svg>
    );
  }

  if (block.visual === "centrifuge_gradient") {
    // Hatching that closes up towards the bottom stands for the rising density.
    const gradientRows = [64, 79, 93, 106, 118, 129, 139, 148, 156, 163, 169, 174, 179, 184].filter(
      (y) => ![95, 130, 165].some((band) => Math.abs(y - band) < 8),
    );
    return (
      <svg {...common}>
        <title>
          Differential centrifugation pelleting successively smaller structures, beside a density
          gradient in which bands rest at their own density
        </title>
        <text className="visual-label" x="14" y="30">
          differential centrifugation
        </text>
        {[
          { x: 60, speed: "600 × g", pellet: "nuclei" },
          { x: 150, speed: "10 000 × g", pellet: "mitochondria" },
          { x: 240, speed: "100 000 × g", pellet: "ribosomes" },
        ].map((tube) => (
          <g key={tube.pellet}>
            <text className="visual-label" textAnchor="middle" x={tube.x} y="60">
              {tube.speed}
            </text>
            <path
              className="visual-card"
              d={`M ${tube.x - 23} 70 L ${tube.x - 23} 150 Q ${tube.x - 23} 172 ${tube.x} 172 Q ${
                tube.x + 23
              } 172 ${tube.x + 23} 150 L ${tube.x + 23} 70 Z`}
            />
            <rect className="visual-fill-alt" height="62" width="42" x={tube.x - 21} y="96" />
            <ellipse className="visual-fill" cx={tube.x} cy="162" rx="17" ry="8" />
            <text className="visual-label" textAnchor="middle" x={tube.x} y="196">
              {tube.pellet}
            </text>
          </g>
        ))}
        {[85, 175].map((x) => (
          <g key={x}>
            <line className="visual-arrow" x1={x} x2={x + 34} y1="120" y2="120" />
            <path className="visual-arrow" d={`M ${x + 28} 114 L ${x + 40} 120 L ${x + 28} 126`} />
          </g>
        ))}
        <text className="visual-label" x="14" y="222">
          supernatant goes on to the next tube
        </text>
        <line className="visual-guide" x1="307" x2="307" y1="24" y2="252" />
        <text className="visual-label" x="330" y="30">
          density-gradient tube
        </text>
        <path
          className="visual-card"
          d="M 392 55 L 392 182 Q 392 205 430 205 Q 468 205 468 182 L 468 55 Z"
        />
        {gradientRows.map((y) => (
          <line className="visual-tick" key={y} x1="394" x2="466" y1={y} y2={y} />
        ))}
        {[
          { y: 95, density: "1.10 g cm⁻³" },
          { y: 130, density: "1.16 g cm⁻³" },
          { y: 165, density: "1.22 g cm⁻³" },
        ].map((band) => (
          <g key={band.density}>
            <rect className="visual-fill" height="8" width="72" x="394" y={band.y - 4} />
            <text className="visual-label" x="478" y={band.y + 5}>
              {band.density}
            </text>
          </g>
        ))}
        <line className="visual-arrow" x1="378" x2="378" y1="66" y2="188" />
        <path className="visual-arrow" d="M 372 184 L 378 196 L 384 184" />
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 362 130)"
          x="362"
          y="130"
        >
          increasing density
        </text>
        <text className="visual-label" textAnchor="middle" x="430" y="222">
          dense end
        </text>
        <text className="visual-label" textAnchor="middle" x="470" y="242">
          each band rests where its density
        </text>
        <text className="visual-label" textAnchor="middle" x="470" y="262">
          matches the medium · isopycnic
        </text>
      </svg>
    );
  }

  if (block.visual === "ternary") {
    const point = mix(0.5, 0.3, 0.2);
    const grid = [
      ...[0.25, 0.5, 0.75].map((value) => ({
        key: `a-${value}`,
        ...triLine(mix(value, 1 - value, 0), mix(value, 0, 1 - value)),
      })),
      ...[0.25, 0.5, 0.75].map((value) => ({
        key: `b-${value}`,
        ...triLine(mix(1 - value, value, 0), mix(0, value, 1 - value)),
      })),
      ...[0.25, 0.5, 0.75].map((value) => ({
        key: `c-${value}`,
        ...triLine(mix(1 - value, 0, value), mix(0, 1 - value, value)),
      })),
    ];
    const readings = [
      { key: "a", ...triLine(mix(0.5, 0.5, 0), mix(0.5, 0, 0.5)) },
      { key: "b", ...triLine(mix(0.7, 0.3, 0), mix(0, 0.3, 0.7)) },
      { key: "c", ...triLine(mix(0.8, 0, 0.2), mix(0, 0.8, 0.2)) },
    ];
    return (
      <svg {...common}>
        <title>
          A ternary diagram whose three readings at one plotted point add to one hundred per cent
        </title>
        <text className="visual-label" x="16" y="22">
          each point fixes all three
        </text>
        {grid.map((line) => (
          <line className="visual-tick" key={line.key} x1={line.x1} x2={line.x2} y1={line.y1} y2={line.y2} />
        ))}
        <path
          className="visual-axis"
          d={`M ${TRI_APEX.x} ${TRI_APEX.y} L ${TRI_LEFT.x} ${TRI_LEFT.y} L ${TRI_RIGHT.x} ${TRI_RIGHT.y} Z`}
          fill="none"
        />
        {readings.map((line) => (
          <line className="visual-guide" key={line.key} x1={line.x1} x2={line.x2} y1={line.y1} y2={line.y2} />
        ))}
        <circle className="visual-marker" cx={point.x.toFixed(1)} cy={point.y.toFixed(1)} r="8" />
        <text className="visual-label" x="251" y="122">
          P
        </text>
        <text className="visual-large-label" textAnchor="middle" x="250" y="40">
          A
        </text>
        <text className="visual-large-label" textAnchor="middle" x="138" y="242">
          B
        </text>
        <text className="visual-large-label" textAnchor="middle" x="362" y="242">
          C
        </text>
        <line className="visual-arrow" x1="173" x2="196" y1="149" y2="109" />
        <path className="visual-arrow" d="M 197 116 L 199 103 L 189 111" />
        <text className="visual-label" textAnchor="end" x="168" y="122">
          A increases
        </text>
        <line className="visual-arrow" x1="320" x2="184" y1="240" y2="240" />
        <path className="visual-arrow" d="M 192 235 L 180 240 L 192 245" />
        <text className="visual-label" textAnchor="middle" x="252" y="260">
          B increases
        </text>
        <line className="visual-arrow" x1="303" x2="326" y1="109" y2="149" />
        <path className="visual-arrow" d="M 319 144 L 329 152 L 327 139" />
        <text className="visual-label" x="334" y="140">
          C increases
        </text>
        <text className="visual-large-label" x="430" y="88">
          point P
        </text>
        <text className="visual-label" x="430" y="118">
          A = 50%
        </text>
        <text className="visual-label" x="430" y="144">
          B = 30%
        </text>
        <text className="visual-label" x="430" y="170">
          C = 20%
        </text>
        <text className="visual-label" x="430" y="200">
          50 + 30 + 20 = 100
        </text>
      </svg>
    );
  }

  if (block.visual === "contour") {
    return (
      <svg {...common}>
        <title>
          A contour map of yield over two conditions, with crowded contours on the steep flank and
          widely spaced contours where the surface is shallow
        </title>
        <Frame xLabel="temperature" yLabel="concentration">
          <text className="visual-label" x="85" y="24">
            each curve joins points of equal yield
          </text>
          {CONTOURS.map((contour) => (
            <path className="visual-line" d={contour.d} key={contour.level} />
          ))}
          {CONTOUR_LABELS.map((label) => (
            <text className="visual-label" key={label.value} x={label.x} y="165">
              {label.value}
            </text>
          ))}
          <circle className="visual-marker" cx="200" cy="106" r="8" />
          <line className="visual-guide" x1="140" x2="192" y1="68" y2="100" />
          <text className="visual-label" x="88" y="44">
            local
          </text>
          <text className="visual-label" x="88" y="62">
            maximum
          </text>
          <text className="visual-label" x="96" y="200">
            contours crowded
          </text>
          <text className="visual-label" x="96" y="218">
            steep gradient
          </text>
          <line className="visual-guide" x1="520" x2="500" y1="54" y2="148" />
          <text className="visual-label" textAnchor="end" x="574" y="46">
            shallow gradient
          </text>
        </Frame>
      </svg>
    );
  }

  if (block.visual === "radar") {
    return (
      <svg {...common}>
        <title>
          A six-axis radar chart carrying two profiles, with a warning that the enclosed area
          depends on the order of the axes
        </title>
        {[33, 67, 100].map((ring) => (
          <path className="visual-tick" d={radarPath([ring, ring, ring, ring, ring, ring])} fill="none" key={ring} />
        ))}
        {RADAR_AXES.map((axis, index) => {
          const end = radarPoint(index, 100);
          return (
            <line
              className="visual-tick"
              key={axis.label}
              x1={RADAR_CX}
              x2={end.x.toFixed(1)}
              y1={RADAR_CY}
              y2={end.y.toFixed(1)}
            />
          );
        })}
        <path className="visual-line coral" d={radarPath(RADAR_B)} />
        <path className="visual-line" d={radarPath(RADAR_A)} />
        {RADAR_AXES.map((axis) => (
          <text className="visual-label" key={axis.label} textAnchor={axis.anchor} x={axis.x} y={axis.y}>
            {axis.label}
          </text>
        ))}
        <text className="visual-label" x="392" y="64">
          the enclosed area depends on
        </text>
        <text className="visual-label" x="392" y="86">
          the arbitrary order of the axes,
        </text>
        <text className="visual-label" x="392" y="108">
          so the area is not a quantity
        </text>
        <line className="visual-line coral" x1="394" x2="412" y1="156" y2="156" />
        <text className="visual-label" x="424" y="161">
          profile B
        </text>
        <line className="visual-line" x1="394" x2="412" y1="190" y2="190" />
        <text className="visual-label" x="424" y="195">
          profile A
        </text>
      </svg>
    );
  }

  if (block.visual === "log_log") {
    return (
      <svg {...common}>
        <title>
          Two power laws on logarithmic axes, with a rise over run triangle measured in decades to
          recover the exponent
        </title>
        <Frame xLabel="x, logarithmic" yLabel="y, logarithmic">
          {LOG_X.map((tick) => (
            <g key={`x-${tick.label}`}>
              <line className="visual-tick" x1={tick.x} x2={tick.x} y1="225" y2="233" />
              <text className="visual-label" textAnchor="middle" x={tick.x} y="246">
                {tick.label}
              </text>
            </g>
          ))}
          {LOG_Y.map((tick) => (
            <g key={`y-${tick.label}`}>
              <line className="visual-tick" x1="77" x2="85" y1={tick.y} y2={tick.y} />
              <text className="visual-label" textAnchor="end" x="72" y={tick.y + 5}>
                {tick.label}
              </text>
            </g>
          ))}
          <line className="visual-line" x1="105" x2="300" y1="215" y2="35" />
          <line className="visual-line" x1="105" x2="560" y1="215" y2="110" />
          <text className="visual-label" x="306" y="46">
            n = 2
          </text>
          <text className="visual-label" textAnchor="end" x="566" y="102">
            n = ½
          </text>
          <line className="visual-guide" x1="235" x2="495" y1="185" y2="185" />
          <line className="visual-guide" x1="495" x2="495" y1="185" y2="125" />
          <text className="visual-label" textAnchor="middle" x="365" y="204">
            run = 2 decades
          </text>
          <text className="visual-label" x="503" y="158">
            rise = 1 decade
          </text>
          <text className="visual-label" x="503" y="178">
            gradient = 1 ÷ 2
          </text>
          <text className="visual-label" x="330" y="66">
            on log–log axes the gradient
          </text>
          <text className="visual-label" x="330" y="84">
            is the exponent n of y = k xⁿ
          </text>
        </Frame>
      </svg>
    );
  }

  return null;
}
