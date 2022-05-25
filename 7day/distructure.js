//디스트럭처링(구조분해)
//배열의 요소 or 객체의 프로퍼티를 편수에 개별 할당하고자 할때 유용

const arr = ['apple', 'banana', 'orange'];

const [x, y, z] = arr;
console.log(x, y, z);

const [, k,] = arr;
console.log(k);

//개체
const obj = { name: '홍길동', age: 30 };

const { age } = obj;
console.log(age);

const { name: nickname } = obj;
console.log(nickname);