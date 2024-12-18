const fs = require('fs');
const inputData = fs.readFileSync('2024/Day 2/input.txt', 'utf8');


function isSafe(arr, type) {
    const arrLen = arr.length;
    let statusSafe = true;
    if (type === 'in') {
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
    };

    if (type === 'de') {
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
    };

    return statusSafe;
};

function isUnsafe(arrRaw, type) {
    const arrLen = arrRaw.length;
    let statusSafe = false;
    if (type === 'in' || type === 'both') {
        for (let i = 0; i < arrLen; ++i) {
            const arr1 = [...arrRaw];
            arr1.splice(i, 1);
            if (isSafe(arr1, 'in')) {
                statusSafe = true;
                return statusSafe;
            };
        };
    };

    if (type === 'de' || type === 'both') {
        for (let i = 0; i < arrLen; ++i) {
            const arr2 = [...arrRaw];
            arr2.splice(i, 1)

            if (isSafe(arr2, 'de')) {
                statusSafe = true;
                return statusSafe;
            };
        };
    };
    return statusSafe;
};

function solve() {
    let res = 0;
    const rawData = inputData.trim().split('\n');
    for (let i = rawData.length - 1; i > -1; --i) {
        const childArr = rawData[i].split(' ').map(x => Number.parseInt(x));
        if (childArr[0] < childArr[1]) {
            if (isSafe(childArr, 'in')) {
                res++;
            } else if (isUnsafe(childArr, 'both')) {
                res++;
            };
        };
        if (childArr[0] > childArr[1]) {
            if (isSafe(childArr, 'de')) {
                res++;
            } else if (isUnsafe(childArr, 'both')) {
                res++;
            };
        };
        if (childArr[0] == childArr[1]) {
            if (isUnsafe(childArr, 'both')) {
                res++
            };
        };
    };
    return res;
};

console.time('part 2: ');
console.log(solve());
console.timeEnd('part 2: ');