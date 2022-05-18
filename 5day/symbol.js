const obj = {};

obj.name = '홍길동';
obj.age = 20;

console.log(obj);
obj.age = 30;

console.log(obj);

//심볼 타입의 값은 Symbol()함수를 호출하여 생성한다.
const mySymbol = Symbol();
const mySymbol2 = Symbol();
console.log(mySymbol === mySymbol2);