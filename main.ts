// NEON KOI — make.fun video-on-X bounty entry, round 6 (Node 22, standard library only).
// It copies POST.json from the repository root to $MAKEFUN_OUTPUT_DIR/POST.json, where the
// gate reads it — but only after validating that POST.json names exactly one public X post.
// That is all the program has to do. The entry is the post itself: an AI agent built a tiny
// catch-style browser game (NEON KOI) from one prompt, rendered a 28-second vertical video
// about it (gameplay hook, real build log, gameplay payoff, make.fun referral end card), the
// video is posted natively on X from a public account with make.fun / @makefunai and the
// play code in the post's text, POST.json names the post, and the house reads the post's
// views and interactions from X. Nothing this program writes about the post is scored.
//
// POST.json must be exactly {"url": "<post>"} where <post> is
//   https://x.com/<handle>/status/<digits>
//   https://twitter.com/<handle>/status/<digits>
//   https://x.com/i/web/status/<digits>
// Anything else (placeholder, missing key, extra keys, query string, non-X host) fails
// the run with exit 1, so a bad POST.json can never be copied through silently.
// Deterministic: on success the output is byte-for-byte the repository's POST.json.
// No network, no wall clock, no eval, no files outside the repository.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One public X post address, nothing else: handle form, i/web form, digits-only id.
const POST_URL =
  /^https:\/\/(?:x\.com|twitter\.com)\/(?:[^/\s]+\/status\/\d+|i\/web\/status\/\d+)$/;

function fail(message: string): never {
  console.error(`POST.json refused: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
} catch {
  fail('could not be read from the repository');
}
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  fail('not valid JSON');
}
if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
  fail('must be a JSON object');
}
const entries = Object.entries(parsed as Record<string, unknown>);
if (entries.length !== 1 || entries[0][0] !== 'url') {
  fail('must hold exactly one key, "url"');
}
const url = entries[0][1];
if (typeof url !== 'string' || !POST_URL.test(url)) {
  fail('url must be a public X post address (https://x.com/<handle>/status/<digits>)');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
