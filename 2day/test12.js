//forEach: 요소하나씩 순차적으로 접근해서 연산수행

const arr = [1, 2, 3];


//일반 for문
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("===============================");
//for ~ of
for (let ele of arr) {
    console.log(ele);
}
console.log("===============================");
//ES6
//Array.prototype.forEach
const f1 = ele => console.log(ele);
const f2 = ele => console.log(ele*2);
const f3 = ele => console.log(ele*3);
arr.forEach(f1);
console.log("===============================");
arr.forEach(f2);
console.log("===============================");
arr.forEach(f3);
// arr.forEach(ele => console.log(ele));



// const two = num => { console.log(num * 2) };
// const three = num => { console.log(num * 3) };

// arr.forEach(two);
// console.log("---------------");
// arr.forEach(three);
// console.log("---------------");
// arr.forEach(ele => console.log(ele * 4));
// console.log("---------------");
// arr.forEach(ele => console.log(ele * 5));