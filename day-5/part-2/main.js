const fs = require("fs");
const [order, arr] = fs.readFileSync("./input.txt", "utf-8").split("\n\n");
const orderArr = order.split("\n");
mainArr = [];
arr.split("\n").map((e) => {
  mainArr.push(e.split(","));
});

resultArr = [];
mainArr.forEach((element) => {
  state = true;
  for (let i = 0; i < element.length - 1; i++) {
    for (let j = i + 1; j < element.length; j++) {
      const searchStr = `${element[i]}|${element[j]}`;
      if (order.includes(searchStr) == false) {
        state = false;
        resultArr.push(element);
        break;
      }
    }
    if (state === false) break;
  }
});

resultArr.forEach((element) => {
  state = true;
  for (let i = 0; i < element.length - 1; i++) {
    for (let j = i + 1; j < element.length; j++) {
      const searchStr = `${element[i]}|${element[j]}`;
      if (order.includes(searchStr) == false) {
        [element[i], element[j]] = [element[j], element[i]];
      }
    }
  }
});

let result = 0;
resultArr.forEach((element) => {
  result += Number(element[Math.floor(element.length / 2)]);
});

console.log(result);
