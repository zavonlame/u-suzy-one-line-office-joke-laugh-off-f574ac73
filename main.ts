// One-Line Office Joke Laugh-Off — u-suzy-one-line-office-joke-laugh-off-f574ac73
//
// Writes a single original office joke to /output/entry.txt.
// Self-contained: Node 22 standard library only, no network, no Chrome.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

// The joke, written as one line. The turn lands on the office dog: the
// tracking software cannot tell a very good boy from a very busy worker.
// Measured: 101 characters, one line — inside the 1-200 char gate.
const JOKE =
  "My manager tracks my mouse movements, so I tied the mouse to the office dog. Productivity is up 400%.";

function gate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  gate(JOKE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(HERE, "output");
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts characters, so write exactly the line.
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
  console.log(JOKE);
}

main();
