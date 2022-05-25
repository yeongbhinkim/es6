'use strict';

// 배열의 경우
const arr = [1, 2, 3];

// es5
const x = arr[0];
const y = arr[1];
const z = arr[2];
console.log(x, y, z);

console.log('================================');
// es6
const [o, p, q] = [1, 2, 3];
console.log(o, p, q);

console.log('================================');
// 객체의 경우
// es5
const user = { name: '홍길동', age: 20 };

// const name = user.name;
// const age = user.age;
// console.log(name, age);

// es6
// const { name, age } = user; // 프로퍼티 Key에 해당하는 값을 변수 이름으로 해서 값을 넣을 수 있다.
const { name, age } =  { name: '홍길동', age: 20 };
console.log(name, age);
