'use strict';

const arr = [1, 2, 3];

console.log(arr); // 배열을 출력 [1, 2, 3]
console.log('================================');
console.log(...arr); // 배열의 요소를 목록으로 출력 1 2 3
console.log('================================');
// const arr2 = ...arr; : 값으로써 변수에 대입할 수 없다.

console.log([...arr]); // 이터러블 객체를 대괄호로 감싸면 그 값을 이용한 배열을 만들 수 있다.

const arr2 = [...arr];
console.log(arr, arr2);

const arr5 = [1, 2, 3];
const arr6 = [6, 7, 8];
const arr7 = [...arr5, ...arr6]; //arr5, arr6 병합

console.log(arr7);