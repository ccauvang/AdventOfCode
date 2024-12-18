
const fs = require('fs');

const inputData = fs.readFileSync('2024/Day 2/input.txt', 'utf8');

function increasing(arr) {
    const arrLen = arr.length - 1;
    let statusSafe = true;
    for (let childElement = 0; childElement < arrLen; ++childElement) {
        if (arr[childElement] >= arr[childElement + 1]) {
            statusSafe = false;
            break;
        };
        if ((arr[childElement + 1] - arr[childElement] > 3) || (arr[childElement + 1] - arr[childElement] < 1)) {
            statusSafe = false;
            break;
        };
    };
    return statusSafe;
};

function decreasing(arr) {
    const arrLen = arr.length - 1;
    let statusSafe = true;
    for (let childElement = 0; childElement < arrLen; ++childElement) {
        if (arr[childElement] <= arr[childElement + 1]) {
            statusSafe = false;
            break;
        };
        if ((arr[childElement] - arr[childElement + 1] > 3) || (arr[childElement] - arr[childElement + 1] < 1)) {
            statusSafe = false;
            break;
        };
    };
    return statusSafe;
};

function solve() {
    let res = 0;
    const rawData = inputData.trim().split('\n');
    for (let i = rawData.length - 1; i > -1; --i) {
        const childArr = rawData[i].split(' ').map(x => Number.parseInt(x));
        if (childArr[0] < childArr[2]) {
            if (increasing(childArr)) {
                res++;
            };
        };
        if (childArr[0] > childArr[2]) {
            if (decreasing(childArr)) {
                res++;
            };
        };
    };
    return res;
};

console.time('part 1:');
console.log(solve());
console.timeEnd('part 1:');