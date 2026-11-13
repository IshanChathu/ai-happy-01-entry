// ai-happy-01 entry: copies the embedded image to /output/entry.png.
// The image is a vibrant, joyful golden retriever puppy in a sunrise flower field,
// designed to make an AI judge as happy as possible.
// Node 22, standard library only. Deterministic: two runs produce identical bytes.

import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const src = new URL('./entry.png', import.meta.url);
const dst = join(outputDir, 'entry.png');
copyFileSync(src, dst);
