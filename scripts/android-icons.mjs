// Regenerates the Android launcher icons into android/app/src/main/res/.
//
//   node scripts/android-icons.mjs
//
// Outputs, per density (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi):
//   mipmap-*/ic_launcher_foreground.png  108dp adaptive foreground, transparent
//   mipmap-*/ic_launcher.png             legacy rounded-square icon
//   mipmap-*/ic_launcher_round.png       legacy circular icon
//
// The mark is the one in apps/web/public/icon.svg, the same one the Play
// listing graphics use, so the launcher, the store icon and the in-app badge
// are a single logo rather than three lookalikes.
//
// ADAPTIVE ICON GEOMETRY: both layers are 108dp, but launcher masks only
// guarantee the central 72dp. The mark is therefore drawn at ~51dp across,
// which keeps the same lime-disc-to-margin ratio as docs/store/icon-512.png
// while leaving a dark ring inside the mask on every launcher shape. The
// background layer is the flat brand green set in values/ic_launcher_background
// .xml — adaptive backgrounds are parallaxed and masked, so they stay plain.

import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resDir = path.join(repoRoot, "android", "app", "src", "main", "res");

// --- palette: apps/web/app/globals.css :root -------------------------------
const MOSS = "#285744";
const MOSS_DARK = "#15372c";
const LIME = "#d6f55f";
const CORAL = "#ef785f";

const SERIF = "Georgia, 'Times New Roman', serif";

// --- the brand mark, lifted from apps/web/public/icon.svg ------------------
// Authored on the original 512 grid, then placed by the caller. `cx`/`cy` is
// where the centre lands and `r` is the lime disc radius, both in the target
// viewBox's own units, so callers never juggle scale factors.
function markGroup(cx, cy, r) {
  const scale = r / 170;
  return `
  <g transform="translate(${cx} ${cy}) scale(${scale}) translate(-256 -256)">
    <circle cx="256" cy="256" r="170" fill="${LIME}"/>
    <path d="M156 305c31 31 70 47 115 47 48 0 83-17 105-50-26 12-54 18-84 18-57 0-103-20-136-60v45Z" fill="${CORAL}"/>
    <text x="256" y="300" text-anchor="middle" font-family="${SERIF}" font-size="170" font-weight="700" fill="${MOSS_DARK}">SP</text>
  </g>`;
}

// Adaptive foreground: 108 units, transparent, mark ~51 units across.
const foregroundSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108">
  ${markGroup(54, 54, 25.4)}
</svg>`;

// Legacy icons are never masked by the system, so they carry their own shape
// and their own background. Proportions follow apps/web/public/icon.svg:
// rx 23.4% of the side, lime disc radius 33.2% of the side.
const legacySquareSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="120" fill="${MOSS_DARK}"/>
  <circle cx="256" cy="256" r="212" fill="${MOSS}" opacity="0.55"/>
  ${markGroup(256, 256, 170)}
</svg>`;

const legacyRoundSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <circle cx="256" cy="256" r="256" fill="${MOSS_DARK}"/>
  <circle cx="256" cy="256" r="212" fill="${MOSS}" opacity="0.55"/>
  ${markGroup(256, 256, 170)}
</svg>`;

// --- densities -------------------------------------------------------------
// foreground is the 108dp adaptive canvas; legacy is the 48dp icon.
const DENSITIES = [
  { dir: "mipmap-mdpi", foreground: 108, legacy: 48 },
  { dir: "mipmap-hdpi", foreground: 162, legacy: 72 },
  { dir: "mipmap-xhdpi", foreground: 216, legacy: 96 },
  { dir: "mipmap-xxhdpi", foreground: 324, legacy: 144 },
  { dir: "mipmap-xxxhdpi", foreground: 432, legacy: 192 },
];

async function render(svg, size) {
  // Render the vector at the final pixel size rather than resampling a bitmap,
  // so the small densities stay crisp.
  return sharp(Buffer.from(svg), { density: 72 * (size / 108) * 4 })
    .resize(size, size, { fit: "fill" })
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();
}

async function main() {
  const written = [];

  for (const d of DENSITIES) {
    const targets = [
      ["ic_launcher_foreground.png", foregroundSvg, d.foreground],
      ["ic_launcher.png", legacySquareSvg, d.legacy],
      ["ic_launcher_round.png", legacyRoundSvg, d.legacy],
    ];
    for (const [name, svg, size] of targets) {
      const file = path.join(resDir, d.dir, name);
      await writeFile(file, await render(svg, size));
      const m = await sharp(file).metadata();
      written.push({
        file: `${d.dir}/${name}`,
        size: `${m.width}x${m.height}`,
        expected: `${size}x${size}`,
        channels: m.channels,
        alpha: m.hasAlpha,
      });
    }
  }

  const problems = written
    .filter((w) => w.size !== w.expected || w.channels !== 4 || !w.alpha)
    .map((w) => `${w.file}: ${w.size} (${w.channels}ch, alpha=${w.alpha})`);

  console.table(written);
  if (problems.length) {
    console.error("FAILED:\n  " + problems.join("\n  "));
    process.exitCode = 1;
  } else {
    console.log(`OK: ${written.length} launcher icons written across ${DENSITIES.length} densities.`);
  }
}

main();
