//Array.prototype.reduce
//배열요소를 순화하면서 하나의 누적된 값을 도출하고자 할때 사용.

const arr = [1, 2, 3];

const result = arr.reduce((pre, curr) => pre + curr);
console.log(result);

const result2 = arr.reduce((pre, curr) => pre + curr, 0);
console.log(result2);

const result3 = arr.reduce((pre, curr) => pre + curr, 10);
console.log(result3);