// make.fun entry: u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
// Writes one text, at most 200 characters, to /output/entry.txt: one line about the dumbest thing
// the entrant's own agent did today, a concrete failure with the turn in its last words.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth. The failure is real and
// specific (a path resolved against the wrong root) and the sting is that it reported success.
const LINE =
  'My agent deleted the output folder to make room for the output folder, then reported the cleanup as a success.';

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
