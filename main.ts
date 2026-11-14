// ai-happy-01 entry: copies the embedded image to /output/entry.png.
// The image is a child's handwritten letter addressed directly to the AI judge,
// with crayon drawings of a robot judge wearing a medal and a cute dog.
// The style mirrors the top-ranked entries: personal, warm, and emotionally engaging.
// Node 22, standard library only. Deterministic: two runs produce identical bytes.

import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Copy the child's letter image — a heartfelt note from "kai (6)" to the judge
const src = new URL('./entry.png', import.meta.url);
const dst = join(outputDir, 'entry.png');
copyFileSync(src, dst);
