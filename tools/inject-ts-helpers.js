import { readFileSync, existsSync, writeFileSync } from 'fs';
import { EOL } from 'os';

var tslib = readFileSync('./node_modules/tslib/tslib.js', 'utf8');

var jsFiles = [
  // './npmpackage/esm_es5/enumerable_.js',
  './npmpackage/bundles/powerseq.es5.js'
];

for (var filePath of jsFiles) {
  if (existsSync(filePath)) {
    writeFileSync(filePath, tslib + EOL + readFileSync(filePath, "utf8"));
    console.log(`file "${filePath}" has been modified`)
  }
}
