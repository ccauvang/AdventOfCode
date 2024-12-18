const { time } = require('console');
const fs = require('fs');
const data = fs.readFileSync('2024/Day 1/input.txt', 'utf8');

function solve() {
  let sum = null;
  let arrL = [];
  let arrR = [];

  const rawData = data.trim().split(/\s+/).map((x) => Number.parseInt(x));
  for (let i = rawData.length - 1; i > -1; --i) {
    if (i % 2 == 0) {
      arrR.push(rawData[i]);
    } else {
      arrL.push(rawData[i]);
    };
    //  console.log(i);
  };

  arrL.sort((a, b) => a - b)
  arrR.sort((a, b) => a - b)

  for (let i = arrL.length - 1; i > -1; --i) {
    if (arrL[i] > arrR[i]) {
      sum += (arrL[i] - arrR[i])
    } else {
      sum += (arrR[i] - arrL[i])
    };
  };
  return sum;
};

console.time('part 1: ');
console.log(solve());
console.timeEnd('part 1: ');