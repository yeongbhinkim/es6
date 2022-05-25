'use strict';

const arr = [1, 2, 3];

function f1(x, y, z) {
  console.log(x + y + z);
}
f1(arr[0], arr[1], arr[2]);

// 스프레드 문법을 활용하여 배열의 요소를 함수의 매개값으로 전달
// const arr2 = [1, 2, 3];

function f1(x, y, z) {
  console.log(x + y + z);
}
f1(...arr);

