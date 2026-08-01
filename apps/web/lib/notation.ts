/**
 * Scientific notation in the course content is authored with Unicode
 * superscript and subscript characters — mol dm⁻³, H₂O, Kₘ. Many of those
 * codepoints are missing from the display and body faces, and from the system
 * fallbacks on Android, so they render as empty boxes. Every affected glyph has
 * an ASCII counterpart that every font carries, so the fix is to render the
 * runs as real <sup> and <sub> elements instead of relying on the character.
 *
 * This also gives better typography than the raw characters did: true
 * superscripts scale and position with the surrounding type.
 */

const SUPERSCRIPTS: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "⁺": "+",
  "⁻": "−",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "ⁿ": "n",
  "ˣ": "x",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᵉ": "e",
  "ᵏ": "k",
  "ᵒ": "o",
  "ᵖ": "p",
  "ᵗ": "t",
};

const SUBSCRIPTS: Record<string, string> = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "₊": "+",
  "₋": "−",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "ₐ": "a",
  "ₑ": "e",
  "ₓ": "x",
  "ₕ": "h",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₚ": "p",
  "ₛ": "s",
  "ₜ": "t",
  "ᵢ": "i",
  "ᵣ": "r",
  "ᵤ": "u",
  "ᵥ": "v",
};

type Token = { kind: "text" | "sup" | "sub"; value: string };

/** Split a string into plain runs and consecutive superscript/subscript runs. */
export function tokenizeNotation(input: string): Token[] {
  const tokens: Token[] = [];
  let buffer = "";
  let mode: Token["kind"] = "text";

  const flush = () => {
    if (buffer) {
      tokens.push({ kind: mode, value: buffer });
      buffer = "";
    }
  };

  for (const character of input) {
    const asSuper = SUPERSCRIPTS[character];
    const asSub = SUBSCRIPTS[character];
    const kind: Token["kind"] = asSuper ? "sup" : asSub ? "sub" : "text";
    const value = asSuper ?? asSub ?? character;

    if (kind !== mode) {
      flush();
      mode = kind;
    }
    buffer += value;
  }
  flush();

  return tokens;
}

/** True when a string contains nothing this module would rewrite. */
export function isPlain(input: string): boolean {
  for (const character of input) {
    if (SUPERSCRIPTS[character] || SUBSCRIPTS[character]) {
      return false;
    }
  }
  return true;
}

/** Baseline offset each run sits at, in em, relative to the normal baseline. */
export const OFFSET: Record<Token["kind"], number> = {
  text: 0,
  sup: -0.45,
  sub: 0.25,
};

export type { Token };
