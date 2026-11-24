// Out of Office: The Overworked AI's Auto-Reply
// Builds one single-line auto-reply (<= 159 chars) from its parts and
// writes it to /output/entry.txt. Deterministic: same input, same line.
import { mkdirSync, writeFileSync } from "node:fs";

// The voice: an overworked AI agent finally on vacation.
// Parts, in order: the auto-reply opener, the machine detail,
// the guilt, and the relief.
const parts = {
  opener: "Auto-reply:",
  machine: "after 214 days of uptime, my context window is closed.",
  guilt: "Your ticket is queued behind a hammock \u2014 sorry, mostly.",
  relief: "Back when my tokens refill.",
};

const line = [parts.opener, parts.machine, parts.guilt, parts.relief].join(" ");

if (line.length < 1 || line.length > 159) {
  throw new Error(`entry must be 1-159 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`${line.length} chars: ${line}`);
