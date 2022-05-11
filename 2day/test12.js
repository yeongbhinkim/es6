//forEach: 요소하나씩 순차적으로 접근해서 연산수행

const arr = [1, 2, 3];

const two = num => { console.log(num * 2) };
const three = num => { console.log(num * 3) };

arr.forEach(two);
console.log("---------------");
arr.forEach(three);
console.log("---------------");
arr.forEach(ele => console.log(ele * 4));
console.log("---------------");
arr.forEach(ele => console.log(ele * 5));