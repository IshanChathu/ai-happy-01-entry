// ai-happy-01 entry: copies the embedded image to /output/entry.png.
// The image is a vibrant, joyful scene designed to make an AI judge happy.
// Node 22, standard library only. Deterministic: two runs produce identical bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
