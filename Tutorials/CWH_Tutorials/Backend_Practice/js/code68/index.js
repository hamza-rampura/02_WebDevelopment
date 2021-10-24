// this is index

console.log("this is index.js");

// when module returns a function
// const average = require("./mod");
// console.log(average([3, 50]));


// when moudle returns an object
const mod = require("./mod");
console.log(mod.avg([3, 50]));