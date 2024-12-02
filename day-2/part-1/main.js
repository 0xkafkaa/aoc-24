const fs = require("fs");
const content = fs.readFileSync("./input.txt", "utf-8");
const mainArr = [];
content
  .trim()
  .split("\n")
  .map((e) => {
    mainArr.push(e.split(" ").map((e) => Number(e)));
  });

const ascArr = [];
mainArr.forEach((element) => {
  for (let i = 0; i < element.length - 1; i++) {
    state = true;
    if (element[i] >= element[i + 1]) {
      state = false;
      break;
    }
  }
  if (state) {
    ascArr.push(element);
  }
});
const descArr = [];
mainArr.forEach((element) => {
  for (let i = 0; i < element.length - 1; i++) {
    state = true;
    if (element[i] <= element[i + 1]) {
      state = false;
      break;
    }
  }
  if (state) {
    descArr.push(element);
  }
});
let safe = 0;
ascArr.forEach((element) => {
  for (let i = 0; i < element.length - 1; i++) {
    state = true;
    if (element[i + 1] - element[i] > 3) {
      state = false;
      break;
    }
  }
  if (state) safe++;
});
descArr.forEach((element) => {
  for (let i = 0; i < element.length - 1; i++) {
    state = true;
    if (element[i] - element[i + 1] > 3) {
      state = false;
      break;
    }
  }
  if (state) safe++;
});

console.log(safe);
