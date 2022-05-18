//심볼에대한 설명을 Symbol() 호출시 매개값으로 전달될 수 있다.
//          설명이 같다하더라도 생성되는 값은 다르다.

const x = Symbol('name');
const y = Symbol('name');
const z = Symbol('age');

console.log(x === y);
console.log(z.description);//Symbol()함수의 설명 접근하는 프로퍼티
console.log(z.toString());
