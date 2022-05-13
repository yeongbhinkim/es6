const arr = [1, 2, 3];

const result = arr.reduce((per, curr, currInx, arr) => {
    // console.log(per, curr, currInx, arr);
    // console.log(arr.length);
    return currInx === arr.length - 1 ? (per + curr) / arr.length : per + curr;
}, 0);

console.log(result);