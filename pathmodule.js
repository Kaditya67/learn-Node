const path=require("path");

console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname("e:/Node/second.js"));
console.log(path.extname("e:/Node/second.js"));
console.log(path.basename("e:/Node/second.js"));
console.log(path.parse("e:/Node/second.js"));       // json format
console.log(path.join(__dirname,"second.js"));
console.log(path.join(__dirname,"../","second.js"));
console.log(path.resolve("e:/Node/second.js"));