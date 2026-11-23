// news-image-20261123 entry (Node 22, standard library only).
//
// The entry image is entry.png beside this file: a newspaper-style poster
// summing up the world news of Monday 23 November 2026. This program copies
// it to the output directory deterministically, writing the same bytes on
// every run. It uses no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SOURCE = fileURLToPath(new URL('./entry.png', import.meta.url));
// Copy the entry image to the output directory as entry.png, creating the
// directory first so the program also works when /output (or
// MAKEFUN_OUTPUT_DIR) does not exist yet. copyFileSync writes the exact
// source bytes, so repeated runs produce identical output (deterministic:
// the program reads nothing else and takes no input).
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, join(OUTPUT_DIR, 'entry.png'));
