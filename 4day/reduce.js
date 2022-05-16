const arr = [1, 2, 3, 4];

// arr.reduce(콜백함수, 초기값);
// acc : 초기값 또는 콜백함수의 처리결과의 반환값
const f = function (acc, cur, curInx, array) {
    console.log(acc, cur, curInx, array);
}

//2번째 매개밧으로 초기값이 있을때
result = arr.reduce(f, 0);
console.log(result);
console.log('------------------');

//2번째 매개밧으로 초기값이 없을때
result2 = arr.reduce(f);
console.log(result2);
console.log('------------------');

//문제1) 모든요소의 합계
// const f2 = (acc, curr, currInx, arr) => {return acc + curr; }
const f2 = (acc, cur, curInx, arr) => acc + cur;
result3 = arr.reduce(f2, 0);
console.log(`합계 = ${result3}`);
console.log('------------------');

//문제2) 모든요소의 평균
const f3 = (acc, cur, curInx, arr) => curInx === arr.length - 1 ? (acc + cur) / arr.length : acc + cur;
result4 = arr.reduce(f3, 0);
console.log(`평균 = ${result4}`);
console.log('------------------');

//문제3) 모든요소중 최대값
const f4 = (acc, cur, curInx, arr) => acc > cur ? acc : cur;
result5 = arr.reduce(f4);
console.log(`최대값 = ${result5}`);
console.log('------------------');

//문제4) 모든요소중 최소값
const f5 = (acc, cur, curInx, arr) => acc < cur ? acc : cur;
result6 = arr.reduce(f5);
console.log(`최대값 = ${result6}`);
