// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let readFileSync = fs.readFileSync("/dev/stdin");
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");
// let inputs = splits.maps(Number);
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

console.log();

console.log();
