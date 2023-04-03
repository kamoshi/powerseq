import { sync } from "glob";
import { writeFileSync } from "fs";
import { sep } from "path";
import { EOL } from "os";

var operators = sync("./src/operators/*.ts");
var enumerable = sync("./src/enumerable/*.ts");


var src = operators
    .concat(enumerable)
    .map(p => p.replace("src"+sep,"").replace(".ts",""))
    .map(p =>`export * from "${p}";`)
    .join(EOL);

//console.log(src);
var filePath = "./src/methods.generated.ts";
writeFileSync(filePath, src);
console.log(filePath," file generated");

