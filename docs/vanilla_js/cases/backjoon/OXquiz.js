const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let number = parseInt(inputs[0]);

for (let i = 1; i <= number; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < inputs[i].length; j++) {
    if (inputs[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}
