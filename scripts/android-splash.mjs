// Regenerates the Android splash logo into android/app/src/main/res/.
//
//   node scripts/android-splash.mjs
//
// Outputs, per density (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi):
//   drawable-*/splash_logo.png   transparent, the mark above the wordmark
//
// WHY A LOGO AND NOT A FULL-SCREEN IMAGE: the launch theme sets the splash as
// the window background (values/styles.xml, AppTheme.NoActionBarLaunch). A
// bitmap window background is stretched to the window, so a full-screen splash
// bitmap turns the circular mark into an ellipse on any device whose aspect
// ratio differs from the asset's. drawable/splash.xml is therefore a layer-list
// -- flat brand ground, plus this logo centred at its natural size -- which
// cannot distort at any screen size or orientation. That also replaces the ten
// per-orientation, per-density full-screen bitmaps this used to need.
//
// The mark is the one in apps/web/public/icon.svg, the same one the launcher
// icon and the Play listing use.

import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resDir = path.join(repoRoot, "android", "app", "src", "main", "res");

// --- palette: apps/web/app/globals.css :root -------------------------------
const MOSS_DARK = "#15372c";
const PAPER = "#f4f1e8";
const LIME = "#d6f55f";
const CORAL = "#ef785f";

const SERIF = "Georgia, 'Times New Roman', serif";

// --- layout, in density-independent pixels ---------------------------------
// The logo is 200x150dp: a 96dp disc over the wordmark. A typical phone is
// 360dp wide, so this occupies about 56% of the width -- large enough to read
// as branding, short of the overbearing full-width splash. On the narrowest
// screen Android still supports (320dp) it still leaves a 60dp margin each side.
const W = 200;
const H = 150;

// The mark is authored on the original 512 grid, so place it the same way
// scripts/android-icons.mjs does: centre point and disc radius in dp.
function markGroup(cx, cy, r) {
  const scale = r / 170;
  return `
  <g transform="translate(${cx} ${cy}) scale(${scale}) translate(-256 -256)">
    <circle cx="256" cy="256" r="170" fill="${LIME}"/>
    <path d="M156 305c31 31 70 47 115 47 48 0 83-17 105-50-26 12-54 18-84 18-57 0-103-20-136-60v45Z" fill="${CORAL}"/>
    <text x="256" y="300" text-anchor="middle" font-family="${SERIF}" font-size="170" font-weight="700" fill="${MOSS_DARK}">SP</text>
  </g>`;
}

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  ${markGroup(W / 2, 55, 48)}
  <text x="${W / 2}" y="138" text-anchor="middle" font-family="${SERIF}" font-size="34"
        font-weight="700" letter-spacing="-1" fill="${PAPER}">SciPrep</text>
</svg>`;

const DENSITIES = [
  { dir: "drawable-mdpi", scale: 1 },
  { dir: "drawable-hdpi", scale: 1.5 },
  { dir: "drawable-xhdpi", scale: 2 },
  { dir: "drawable-xxhdpi", scale: 3 },
  { dir: "drawable-xxxhdpi", scale: 4 },
];

async function main() {
  const written = [];

  for (const d of DENSITIES) {
    const width = Math.round(W * d.scale);
    const height = Math.round(H * d.scale);
    const file = path.join(resDir, d.dir, "splash_logo.png");
    // Render the vector straight to the target size rather than resampling.
    const png = await sharp(Buffer.from(logoSvg), { density: 72 * d.scale * 4 })
      .resize(width, height, { fit: "fill" })
      .png({ compressionLevel: 9, palette: false })
      .toBuffer();
    await writeFile(file, png);

    const m = await sharp(file).metadata();
    written.push({
      file: `${d.dir}/splash_logo.png`,
      size: `${m.width}x${m.height}`,
      expected: `${width}x${height}`,
      channels: m.channels,
      alpha: m.hasAlpha,
    });
  }

  const problems = written
    .filter((w) => w.size !== w.expected || w.channels !== 4 || !w.alpha)
    .map((w) => `${w.file}: ${w.size} (${w.channels}ch, alpha=${w.alpha})`);

  console.table(written);
  if (problems.length) {
    console.error("FAILED:\n  " + problems.join("\n  "));
    process.exitCode = 1;
  } else {
    console.log(`OK: ${written.length} splash logos written.`);
  }
}

main();
