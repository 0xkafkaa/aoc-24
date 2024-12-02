const fs = require("fs");
const content = fs.readFileSync("./input.txt", "utf-8");
const mainArr = [];
content
  .trim()
  .split("\n")
  .map((e) => {
    mainArr.push(e.split(" ").map((e) => Number(e)));
  });

function isSafe(report) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];
    if (diff < 1 || diff > 3) {
      increasing = false;
    }
    const reverseDiff = report[i - 1] - report[i];
    if (reverseDiff < 1 || reverseDiff > 3) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}

function canBeMadeSafe(report) {
  for (let i = 0; i < report.length; i++) {
    const modifiedReport = [];
    for (let j = 0; j < report.length; j++) {
      if (j !== i) {
        modifiedReport.push(report[j]);
      }
    }
    if (isSafe(modifiedReport)) {
      return true;
    }
  }
  return false;
}

function countSafeReports(reports) {
  let safeCount = 0;
  for (let i = 0; i < reports.length; i++) {
    const report = reports[i];
    if (isSafe(report) || canBeMadeSafe(report)) {
      safeCount++;
    }
  }
  return safeCount;
}

console.log(countSafeReports(mainArr));;

// function isSafe(report) {
//   const increasing = report.every(
//     (_, i) =>
//       i === 0 ||
//       (report[i] - report[i - 1] >= 1 && report[i] - report[i - 1] <= 3)
//   );
//   const decreasing = report.every(
//     (_, i) =>
//       i === 0 ||
//       (report[i - 1] - report[i] >= 1 && report[i - 1] - report[i] <= 3)
//   );
//   return increasing || decreasing;
// }

// function canBeMadeSafe(report) {
//   for (let i = 0; i < report.length; i++) {
//     const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
//     if (isSafe(modifiedReport)) {
//       return true;
//     }
//   }
//   return false;
// }

// function countSafeReports(reports) {
//   let safeCount = 0;
//   for (const report of reports) {
//     if (isSafe(report) || canBeMadeSafe(report)) {
//       safeCount++;
//     }
//   }
//   return safeCount;
// }
// console.log(countSafeReports(mainArr));
