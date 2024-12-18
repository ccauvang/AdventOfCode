const fs = require('fs');
const data = fs.readFileSync('2024/Day 1/input.txt', 'utf8');

function solve() {
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
    
    let res = 0;
    
    for (let i = arrL.length - 1; i > -1; --i) {
        let timesOfNumber = 0;
        for (let j = arrR.length - 1; j > -1; --j) {
            if (arrL[i] == arrR[j]) timesOfNumber++
        };
        res += arrL[i] * timesOfNumber;
    };
    return res;    
};

console.time('part 2: ');
console.log(solve());
console.timeEnd('part 2: ');