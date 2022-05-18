const x = Symbol.for('mySymbol'); //전역 심벌레지스트리에 mySymbol이라는 키로 저장된 심볼이 없으면 값을 새로 생성
const y = Symbol.for('mySymbol');

console.log(x === y);

const obj = {
   [Symbol.for('mySymbol')] : '홍길동',
   [Symbol.for('mySymbol2')] : 20
}

console.log(obj[Symbol.for('mySymbol')]);
console.log(obj[Symbol.for('mySymbol2')]);

const a = Symbol('mySymbol'); //Symbol()로 호출하여 생성된 심벌값은 전역 심벌 레지스트리에서 관리하지 않는다.
const b = Symbol('mySymbol');

console.log(a === b);

const obj2 = {
    [Symbol.for('mySymbol')] : '홍길동',
    [Symbol.for('mySymbol2')] : 20
 }
 
 console.log(obj2[Symbol('mySymbol')]);
 console.log(obj2[Symbol('mySymbol2')]);