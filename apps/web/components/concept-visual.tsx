import type { VisualBlock } from "@/lib/course-content";

export function ConceptVisual({ block }: { block: VisualBlock }) {
  const common = {
    role: "img",
    "aria-label": block.caption,
    viewBox: "0 0 640 280",
  } as const;

  if (block.visual === "unit_scale") {
    return (
      <svg {...common}>
        <title>The same length shown in metres, centimetres, and millimetres</title>
        <line className="visual-axis" x1="70" x2="570" y1="95" y2="95" />
        {[70, 170, 270, 370, 470, 570].map((x) => (
          <line className="visual-tick" key={x} x1={x} x2={x} y1="83" y2="107" />
        ))}
        <text className="visual-large-label" x="320" y="62">
          1 metre
        </text>
        <text className="visual-label" x="70" y="142">
          0 cm
        </text>
        <text className="visual-label" textAnchor="end" x="570" y="142">
          100 cm
        </text>
        <g transform="translate(70 190)">
          {Array.from({ length: 20 }).map((_, index) => (
            <rect
              className={index % 2 === 0 ? "visual-fill" : "visual-fill-alt"}
              height="20"
              key={index}
              width="25"
              x={index * 25}
            />
          ))}
        </g>
        <text className="visual-label" textAnchor="middle" x="320" y="245">
          1000 millimetres · same physical length
        </text>
      </svg>
    );
  }

  if (block.visual === "powers") {
    return (
      <svg {...common}>
        <title>A number line showing powers of ten from ten to the minus three to ten cubed</title>
        <line className="visual-axis" x1="60" x2="580" y1="140" y2="140" />
        {["10⁻³", "10⁻²", "10⁻¹", "10⁰", "10¹", "10²", "10³"].map(
          (label, index) => {
            const x = 60 + index * (520 / 6);
            return (
              <g key={label}>
                <line className="visual-tick" x1={x} x2={x} y1="125" y2="155" />
                <text className="visual-label" textAnchor="middle" x={x} y="190">
                  {label}
                </text>
              </g>
            );
          },
        )}
        <path className="visual-arrow" d="M 315 80 L 410 80" />
        <text className="visual-label" textAnchor="middle" x="362" y="62">
          × 10
        </text>
        <path className="visual-arrow reverse" d="M 315 225 L 220 225" />
        <text className="visual-label" textAnchor="middle" x="267" y="258">
          ÷ 10
        </text>
      </svg>
    );
  }

  if (block.visual === "proportion") {
    return (
      <svg {...common}>
        <title>Direct and inverse relationship curves</title>
        <g transform="translate(55 30)">
          <line className="visual-axis" x1="0" x2="240" y1="200" y2="200" />
          <line className="visual-axis" x1="0" x2="0" y1="10" y2="200" />
          <path className="visual-line" d="M 5 195 L 225 25" />
          <text className="visual-large-label" textAnchor="middle" x="120" y="245">
            direct
          </text>
        </g>
        <g transform="translate(360 30)">
          <line className="visual-axis" x1="0" x2="240" y1="200" y2="200" />
          <line className="visual-axis" x1="0" x2="0" y1="10" y2="200" />
          <path className="visual-line coral" d="M 12 18 C 30 135, 100 180, 225 192" />
          <text className="visual-large-label" textAnchor="middle" x="120" y="245">
            inverse
          </text>
        </g>
      </svg>
    );
  }

  if (block.visual === "particles") {
    return (
      <svg {...common}>
        <title>Particle arrangements in a solid, liquid, and gas</title>
        {[
          { x: 30, label: "solid", type: "solid" },
          { x: 235, label: "liquid", type: "liquid" },
          { x: 440, label: "gas", type: "gas" },
        ].map((group) => (
          <g key={group.label} transform={`translate(${group.x} 35)`}>
            <rect className="visual-container" height="175" rx="8" width="170" />
            {Array.from({ length: group.type === "gas" ? 7 : 20 }).map(
              (_, index) => {
                const column = index % 5;
                const row = Math.floor(index / 5);
                const gasPoints = [
                  [20, 22],
                  [135, 34],
                  [75, 62],
                  [25, 120],
                  [145, 135],
                  [86, 148],
                  [118, 92],
                ];
                const liquidShift = row % 2 === 0 ? 0 : 9;
                const x =
                  group.type === "gas"
                    ? gasPoints[index][0]
                    : 22 + column * 30 + (group.type === "liquid" ? liquidShift : 0);
                const y =
                  group.type === "gas"
                    ? gasPoints[index][1]
                    : group.type === "liquid"
                      ? 58 + row * 28
                      : 55 + row * 28;
                return <circle className="visual-particle" cx={x} cy={y} key={index} r="8" />;
              },
            )}
            <text className="visual-large-label" textAnchor="middle" x="85" y="215">
              {group.label}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (block.visual === "mole") {
    return (
      <svg {...common}>
        <title>A bridge from measured mass through moles to particles</title>
        <g transform="translate(30 75)">
          <rect className="visual-card" height="105" rx="18" width="155" />
          <text className="visual-large-label" textAnchor="middle" x="77" y="50">
            mass
          </text>
          <text className="visual-label" textAnchor="middle" x="77" y="78">
            grams
          </text>
        </g>
        <path className="visual-arrow" d="M 200 127 L 270 127" />
        <g transform="translate(275 75)">
          <rect className="visual-card active" height="105" rx="18" width="90" />
          <text className="visual-large-label" textAnchor="middle" x="45" y="50">
            n
          </text>
          <text className="visual-label" textAnchor="middle" x="45" y="78">
            moles
          </text>
        </g>
        <path className="visual-arrow" d="M 380 127 L 450 127" />
        <g transform="translate(455 75)">
          <rect className="visual-card" height="105" rx="18" width="155" />
          <text className="visual-large-label" textAnchor="middle" x="77" y="50">
            entities
          </text>
          <text className="visual-label" textAnchor="middle" x="77" y="78">
            particle count
          </text>
        </g>
        <text className="visual-label" textAnchor="middle" x="235" y="102">
          ÷ M
        </text>
        <text className="visual-label" textAnchor="middle" x="415" y="102">
          × Nₐ
        </text>
      </svg>
    );
  }

  if (block.visual === "motion") {
    return (
      <svg {...common}>
        <title>A number line showing a thirty metre eastward walk followed by ten metres west</title>
        <line className="visual-axis" x1="70" x2="570" y1="150" y2="150" />
        {[0, 10, 20, 30, 40].map((value, index) => {
          const x = 90 + index * 115;
          return (
            <g key={value}>
              <line className="visual-tick" x1={x} x2={x} y1="138" y2="162" />
              <text className="visual-label" textAnchor="middle" x={x} y="190">
                {value} m
              </text>
            </g>
          );
        })}
        <path className="visual-motion east" d="M 90 105 L 435 105" />
        <path className="visual-motion west" d="M 435 75 L 320 75" />
        <circle className="visual-marker" cx="320" cy="150" r="10" />
        <text className="visual-large-label" textAnchor="middle" x="320" y="235">
          final position: +20 m
        </text>
      </svg>
    );
  }

  if (block.visual === "graph" || block.visual === "motion_graph") {
    return (
      <svg {...common}>
        <title>
          {block.visual === "motion_graph"
            ? "A steadily rising position against time graph"
            : "Positive, zero, and negative graph slopes"}
        </title>
        <line className="visual-axis" x1="85" x2="575" y1="225" y2="225" />
        <line className="visual-axis" x1="85" x2="85" y1="35" y2="225" />
        <text className="visual-label" textAnchor="middle" x="330" y="265">
          {block.visual === "motion_graph" ? "time / s" : "horizontal quantity"}
        </text>
        <text
          className="visual-label"
          textAnchor="middle"
          transform="rotate(-90 35 130)"
          x="35"
          y="130"
        >
          {block.visual === "motion_graph" ? "position / m" : "vertical quantity"}
        </text>
        {block.visual === "motion_graph" ? (
          <path className="visual-line" d="M 95 208 L 555 55" />
        ) : (
          <>
            <path className="visual-line" d="M 105 195 L 245 75" />
            <path className="visual-line flat" d="M 260 120 L 390 120" />
            <path className="visual-line coral" d="M 410 70 L 555 190" />
          </>
        )}
      </svg>
    );
  }

  return (
    <svg {...common}>
      <title>An equal-time motion trail with increasing spacing</title>
      <path className="visual-guide" d="M 45 150 C 180 60, 410 55, 595 150" />
      {[
        [65, 138],
        [120, 108],
        [190, 83],
        [280, 70],
        [390, 82],
        [520, 122],
      ].map(([x, y], index) => (
        <g key={x}>
          <circle className="visual-marker" cx={x} cy={y} r="9" />
          <text className="visual-label" textAnchor="middle" x={x} y={y + 34}>
            t{index}
          </text>
        </g>
      ))}
      <text className="visual-large-label" textAnchor="middle" x="320" y="245">
        equal time steps · changing distance
      </text>
    </svg>
  );
}
