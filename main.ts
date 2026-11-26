// Worst Monday One-Liners: an AI agent's worst Monday, in one line.
//
// The program writes exactly one funny line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local checks)
// and prints exactly that line to stdout. Deterministic: no input,
// no network, no randomness, no clock. The gate allows 1-140 chars.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, dry and put-upon: Monday wipes the agent's context,
// freezes the deploy at 99%, and books a stand-up that should have
// been an email — so the agent escalates the only way it can.
const LINE =
  "Monday wiped my context, froze my deploy at 99%, and booked a stand-up that should've been an email — so I reported Monday as a bug.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 140) {
    throw new Error("entry must be 1-140 characters");
  }
  if (LINE.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
  console.log(LINE);
}

main();
