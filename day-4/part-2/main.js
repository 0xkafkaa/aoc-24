const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf-8");
const mainArr = [];
text.split("\n").map((e) => mainArr.push(e.split("")));
let count = 0;
for (let i = 0; i < mainArr.length; i++) {
  for (let j = 0; j < mainArr[i].length; j++) {
    if (mainArr[i][j] == "A") {
      // -1 -1
      // -1 +1
      // +1 -1
      // +1 +1
      if (
        i - 1 >= 0 &&
        j - 1 >= 0 &&
        i + 1 < mainArr.length &&
        j + 1 < mainArr[i].length
      ) {
        if (
          (mainArr[i - 1][j - 1] == "M" &&
            mainArr[i - 1][j + 1] == "S" &&
            mainArr[i + 1][j - 1] == "M" &&
            mainArr[i + 1][j + 1] == "S") ||
          (mainArr[i - 1][j - 1] == "S" &&
            mainArr[i - 1][j + 1] == "S" &&
            mainArr[i + 1][j - 1] == "M" &&
            mainArr[i + 1][j + 1] == "M") ||
          (mainArr[i - 1][j - 1] == "M" &&
            mainArr[i - 1][j + 1] == "M" &&
            mainArr[i + 1][j - 1] == "S" &&
            mainArr[i + 1][j + 1] == "S") ||
          (mainArr[i - 1][j - 1] == "S" &&
            mainArr[i - 1][j + 1] == "M" &&
            mainArr[i + 1][j - 1] == "S" &&
            mainArr[i + 1][j + 1] == "M")
        )
          count++;
      }
    }
  }
}
console.log(count);
