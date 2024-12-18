const fs = require('fs');

const inputData = fs.readFileSync('2024/Day 3/input.txt', 'utf8');

const rawMulFunc = inputData.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/gi);

function solve() {
    let res = 0;
    for (let rawFunc = rawMulFunc.length - 1; rawFunc > -1; --rawFunc) {
        const leftNum = Number.parseInt(rawMulFunc[rawFunc].match(/[0-9]{1,3}/gi)[0]);
        const rightNum = Number.parseInt(rawMulFunc[rawFunc].match(/[0-9]{1,3}/gi)[1]);
        res += (leftNum * rightNum);
    };
    return res;
};

console.time('part 1: ');
console.log(solve());
console.timeEnd('part 1: ');