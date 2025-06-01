import compiler from "./compiler.js";

const input = "(add 3 4)";
const output = compiler(input);
console.log("Input:", input);
console.log("Output:", output);
