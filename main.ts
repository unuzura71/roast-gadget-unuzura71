import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of the gadget I wear every day: the smartwatch
// that monitors every corner of my health around the clock, yet
// cannot keep itself alive through a single night.
const TEXT =
  "My smartwatch tracks my heart, my sleep and my stress around the clock — it knows everything about my health except how to stay alive past midnight.";

// Gate: UTF-8 text of 1 to 200 characters, not only whitespace,
// and exactly one line. Count Unicode code points on the trimmed
// text so stray surrounding whitespace can never skew the count.
const trimmed = TEXT.trim();
const chars = [...trimmed].length;
if (chars < 1 || chars > 200) {
  throw new Error(`expected 1-200 characters, got ${chars}`);
}
if (/\r|\n/.test(trimmed)) throw new Error("entry must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
