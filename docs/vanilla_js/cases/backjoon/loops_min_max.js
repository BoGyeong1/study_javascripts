const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let count = parseInt(inputs[0]);
let numbers = inputs[1].split(" ").map(Number);

let statistics_obj = { min: numbers[0], max: numbers[0] };
for (let i = 0; i < count; i++) {
  if (statistics_obj["max"] < numbers[i]) {
    statistics_obj["max"] = numbers[i];
  }
  if (statistics_obj["min"] > numbers[i]) {
    statistics_obj["min"] = numbers[i];
  }
}

console.log(`${statistics_obj["min"]}`, `${statistics_obj["max"]}`);
