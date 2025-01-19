const {add,subs,divi,multi} = require("./mathfun");
const path = require("path");
console.log(add(5,6));
console.log(subs(90,6));
console.log(divi(90,6));
console.log(multi(5,6));

const arth = require("./mathfun");
console.log();
console.log(arth.multi(4,6));
console.log(__filename);
console.log(__dirname);

const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);
const parse = path.parse(filePath);
console.log(path.sep);