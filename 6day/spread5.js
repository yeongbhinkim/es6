const obj = { x: 1, y: 1 };
const obj2 = { k: 3, j: 4 };

//리터럴객체 병합
const obj3 = { ...obj, ...obj2 };
console.log(obj3);

//특정 프로퍼티 변경
const obj4 = { ...{ x: 1, y: 2 }, y: 100 };
console.log(obj4);

//리터럴객체 복사
const obj5 = { ...obj4 };
console.log(obj5);