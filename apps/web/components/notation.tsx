import { Fragment, type ReactNode } from "react";

import { isPlain, OFFSET, tokenizeNotation } from "@/lib/notation";

/**
 * React adapters over the notation tokenizer. The tokenizer decides what is a
 * superscript or subscript run; these turn those runs into markup so rendering
 * depends only on ASCII glyphs that every font carries.
 */

/**
 * Render text for HTML, converting superscript and subscript runs to <sup> and
 * <sub>. Returns the original string untouched when there is nothing to do, so
 * the overwhelmingly common case allocates nothing.
 */
export function notation(input: string): ReactNode {
  if (isPlain(input)) {
    return input;
  }

  return tokenizeNotation(input).map((token, index) => {
    const key = `${token.kind}-${index}`;
    if (token.kind === "sup") {
      return <sup key={key}>{token.value}</sup>;
    }
    if (token.kind === "sub") {
      return <sub key={key}>{token.value}</sub>;
    }
    return <Fragment key={key}>{token.value}</Fragment>;
  });
}

/** Font size of a shifted run, relative to the surrounding text. */
const RUN_SCALE = 0.72;

/**
 * The SVG equivalent. SVG has no <sup>, and `baseline-shift` is unreliable, so
 * each run becomes a <tspan> with a smaller font size and a relative `dy`.
 * Two things make this fiddly, and getting either wrong leaves the rest of the
 * label sitting off the baseline:
 *
 * 1. `dy` accumulates along a text element, so each run emits the *delta* from
 *    the previous run's baseline rather than an absolute shift. Otherwise a
 *    subscript immediately after a superscript lands at the wrong height.
 * 2. `dy` in `em` resolves against the tspan's *own* font-size. A shifted run
 *    is set at 0.72em, so a delta written on it is scaled by 0.72 while the
 *    returning delta on a full-size run is not, and the pair never cancels —
 *    every run leaves the remainder of the label slightly displaced. Dividing
 *    each delta by the scale of the run that carries it makes a shift and its
 *    return equal and opposite in absolute terms.
 */
export function svgNotation(input: string): ReactNode {
  if (isPlain(input)) {
    return input;
  }

  let current = 0;
  return tokenizeNotation(input).map((token, index) => {
    const plain = token.kind === "text";
    const target = OFFSET[token.kind];
    const delta = (target - current) / (plain ? 1 : RUN_SCALE);
    current = target;

    return (
      <tspan
        dy={delta === 0 ? undefined : `${delta.toFixed(3)}em`}
        fontSize={plain ? undefined : `${RUN_SCALE}em`}
        key={`${token.kind}-${index}`}
      >
        {token.value}
      </tspan>
    );
  });
}
