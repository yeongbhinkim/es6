'use strict';

const arr = [1, 2, 3, 4, [5, 6]];
console.log(arr); // [1, 2, 3, 4, [5, 6]]
console.log([...arr]); // [1, 2, 3, 4, [5, 6]] 스프레드 문법을 사용해도 배열 속 배열이 그대로 출력됨

// 스프레드 문법을 활용한 배열 평탄화
const arr2 = [1, 2, 3, 4, ...[5, 6]];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

// 스프레드 문법을 활용한 배열 합치기
const arr3 = [1, 2];
const arr4 = [5, 6];

const arr5 = [...arr3, ...arr4];
console.log(arr5); // [1, 2, 5, 6]

// Mate.max : 목록의 최대값을 반환
console.log(Math.max(1, 2, 3));
console.log(Math.max(...arr5)); // 스프레드 문법을 활용하여 배열의 값을 목록으로 반환
