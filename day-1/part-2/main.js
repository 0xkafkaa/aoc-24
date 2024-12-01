const fs = require("fs");
const content = fs.readFileSync("./input.txt", "utf-8");

const firstArr = [];
const secondArr = [];
content.split('\n').map(e => e.split('  ').map((e,i) => i==0 ? firstArr.push(e.trim()) : secondArr.push(e.trim())));

const mpp = {};
for(let i=0; i<secondArr.length; i++){
    mpp[secondArr[i]] = (mpp[secondArr[i]] || 0)  + 1;
}

let result = 0;
for(let i=0; i<firstArr.length; i++){
    result  += (Number(firstArr[i]) * (Number(mpp[firstArr[i]]) || 0));
}
console.log(result);
