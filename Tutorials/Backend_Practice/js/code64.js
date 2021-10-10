console.log(`Code 64: Backend Tutorial: Node.Js Modules with Examples`);

const fs = require("fs");
let text = fs.readFileSync("test.txt", "utf-8");
console.log(`The content of the file is`, text);
text = text.replace("sample", "Hamza")
console.log(`creating a new file`)
fs.writeFileSync("test2.txt", text)