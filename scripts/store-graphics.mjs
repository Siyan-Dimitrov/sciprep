// Regenerates the Google Play listing graphics into docs/store/.
//
//   node scripts/store-graphics.mjs
//
// Outputs:
//   docs/store/icon-512.png                  512x500, RGBA (32-bit), fully opaque
//   docs/store/feature-graphic-1024x500.png  1024x500, RGB, no alpha channel
//
// Palette is taken verbatim from apps/web/app/globals.css (:root custom
// properties). The mark is the one in apps/web/public/icon.svg.
//
// NOTE ON SHARP: within a single pipeline sharp applies .flatten() BEFORE
// .composite(), so flattening and compositing in one pass leaves the composited
// layer's alpha intact. Everything here is therefore rendered first and
// flattened in a separate second pass, then measured.

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(repoRoot, "docs", "store");

// --- palette: apps/web/app/globals.css :root -------------------------------
const INK = "#17201d";
const PAPER = "#f4f1e8";
const WHITE = "#fffdf8";
const MOSS = "#285744";
const MOSS_DARK = "#15372c";
const LIME = "#d6f55f";
const CORAL = "#ef785f";

// Georgia is the serif the brand mark in apps/web/public/icon.svg already
// names, and it is present on Windows, so librsvg resolves it.
const SERIF = "Georgia, 'Times New Roman', serif";

// --- the brand mark, lifted from apps/web/public/icon.svg ------------------
// Same geometry, scaled about the centre so it reads on a full-bleed square
// (Play masks the corners itself, so the rx=120 rounding is dropped).
function markGroup(scale = 1, tx = 0, ty = 0) {
  return `
  <g transform="translate(${tx} ${ty}) translate(256 256) scale(${scale}) translate(-256 -256)">
    <circle cx="256" cy="256" r="170" fill="${LIME}"/>
    <path d="M156 305c31 31 70 47 115 47 48 0 83-17 105-50-26 12-54 18-84 18-57 0-103-20-136-60v45Z" fill="${CORAL}"/>
    <text x="256" y="300" text-anchor="middle" font-family="${SERIF}" font-size="170" font-weight="700" fill="${MOSS_DARK}">SP</text>
  </g>`;
}

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${MOSS_DARK}"/>
  <circle cx="256" cy="256" r="212" fill="${MOSS}" opacity="0.55"/>
  ${markGroup(1.06)}
</svg>`;

// --- feature graphic -------------------------------------------------------
// 1024x500. Two text elements only, both large, so nothing turns to mush when
// Play scales the graphic down in a carousel.
const featureSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="500" viewBox="0 0 1024 500">
  <defs>
    <radialGradient id="glow" cx="0.86" cy="0.1" r="0.75">
      <stop offset="0" stop-color="${LIME}" stop-opacity="0.26"/>
      <stop offset="1" stop-color="${LIME}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.1" cy="0.95" r="0.6">
      <stop offset="0" stop-color="${MOSS}" stop-opacity="0.85"/>
      <stop offset="1" stop-color="${MOSS}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1024" height="500" fill="${MOSS_DARK}"/>
  <rect width="1024" height="500" fill="url(#glow2)"/>
  <rect width="1024" height="500" fill="url(#glow)"/>

  <!-- brand mark, 268px across, on the left and vertically centred -->
  ${markGroup(268 / 512, 186 - 256, 250 - 256)}

  <text x="372" y="208" font-family="${SERIF}" font-size="100" font-weight="700"
        letter-spacing="-3" fill="${WHITE}">SciPrep</text>

  <!-- coral rule, echoing the .eyebrow / .kicker accents in globals.css -->
  <rect x="374" y="240" width="88" height="8" rx="4" fill="${CORAL}"/>

  <text x="372" y="316" font-family="${SERIF}" font-size="46" font-weight="400"
        fill="${LIME}">Foundation science, offline</text>
  <text x="372" y="378" font-family="${SERIF}" font-size="40" font-weight="400"
        fill="${PAPER}" opacity="0.82">Chemistry &#183; Physics &#183; Biology</text>
</svg>`;

// --- render ----------------------------------------------------------------
async function measure(file) {
  const m = await sharp(file).metadata();
  return {
    file: path.relative(repoRoot, file).replace(/\\/g, "/"),
    width: m.width,
    height: m.height,
    channels: m.channels,
    hasAlpha: m.hasAlpha,
    format: m.format,
    depth: m.depth,
  };
}

async function main() {
  await mkdir(outDir, { recursive: true });

  // ---- icon: 512x512, keep a real alpha channel (32-bit) but fully opaque.
  const iconPath = path.join(outDir, "icon-512.png");
  const iconRendered = await sharp(Buffer.from(iconSvg), { density: 384 })
    .resize(512, 512, { fit: "fill" })
    .png()
    .toBuffer();
  // Second pass: force 4 opaque channels. ensureAlpha(1) makes every pixel
  // opaque without dropping the channel, so the file stays 32-bit RGBA.
  const iconFinal = await sharp(iconRendered)
    .ensureAlpha(1)
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();
  await writeFile(iconPath, iconFinal);

  // ---- feature graphic: 1024x500, NO alpha. Flatten in its own pass.
  const featurePath = path.join(outDir, "feature-graphic-1024x500.png");
  const featureRendered = await sharp(Buffer.from(featureSvg), { density: 192 })
    .resize(1024, 500, { fit: "fill" })
    .png()
    .toBuffer();
  // Separate pipeline, so flatten cannot be reordered ahead of the render.
  const featureFinal = await sharp(featureRendered)
    .flatten({ background: MOSS_DARK })
    .removeAlpha()
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();
  await writeFile(featurePath, featureFinal);

  // ---- verify against real metadata -------------------------------------
  const results = [await measure(iconPath), await measure(featurePath)];
  const problems = [];

  const icon = results[0];
  if (icon.width !== 512 || icon.height !== 512) problems.push("icon is not 512x512");
  if (icon.channels !== 4 || !icon.hasAlpha) problems.push("icon is not 32-bit RGBA");

  const feature = results[1];
  if (feature.width !== 1024 || feature.height !== 500) problems.push("feature graphic is not 1024x500");
  if (feature.hasAlpha || feature.channels !== 3) problems.push("feature graphic still has an alpha channel");

  console.table(results);
  if (problems.length) {
    console.error("FAILED:\n  " + problems.join("\n  "));
    process.exitCode = 1;
  } else {
    console.log("OK: both graphics meet the Play requirements.");
  }
}

main();
