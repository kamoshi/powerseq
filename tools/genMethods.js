import { sync } from "glob";
import { writeFileSync } from "fs";
import { EOL } from "os";

var operators = sync("./src/operators/*.ts");
var enumerable = sync("./src/enumerable/*.ts");
var files = operators
    .concat(enumerable)
    .map(p => p.replace("src", '.').replace(".ts", ""));

var indexContent = files
    .map(p => `export { ${p.split("/")[2]} } from "${p}";`)
    .join(EOL);
saveFile("./src/index.ts",
    `export { pipe } from "./pipe";
export { concatp } from "./operators/concat";
export { defaultifemptyp } from "./operators/defaultifempty";
export { includesp } from "./operators/includes";
export { sequenceequalp } from "./operators/sequenceequal";
export { zipp } from "./operators/zip";

export { IterableGroup, EnumerableGroup, KeySelectorFunc, ElementSelectorFunc, ResultSelectorFunc } from "./operators/groupby";

${indexContent}`);

var imports = files
    .map(p => `import "${p}"; `)
    .join(EOL);

saveFile("./src/enumerable.ts",
    `export * from "./enumerable_";
export * from "./orderedEnumerable";        
export * from "./index";
${imports}
`);


function saveFile(filePath, fileContent) {
    fileContent = "// file has been generated automatically" + EOL + fileContent;
    writeFileSync(filePath, fileContent);
    console.log(filePath, " file has been generated");
}


