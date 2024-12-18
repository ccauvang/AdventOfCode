const fs = require('fs');
const inputData = fs.readFileSync('2024/Day 3/input.txt', 'utf8');

function solve() {
    const rawDontFunc = inputData.split(`don't()`);
    const rawDoFunc = [];
    rawDoFunc.push(rawDontFunc.shift());
    for (let i = 0; i < rawDontFunc.length; ++i) {
        const splitDontFunc = rawDontFunc[i].split('do()');
        if (splitDontFunc.length != 1) {
            splitDontFunc.shift();
            splitDontFunc.forEach(ele => {
                rawDoFunc.push(ele);
            });
        };
    };
    const rawMulFunc = rawDoFunc.toString().match(/mul\([0-9]{1,3},[0-9]{1,3}\)/gi);
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