
const x = Symbol();
const y = Symbol();

const obj = {
    [x]: '홍길동',
    [y]: 20
}

console.log(obj[x]);
console.log(obj[y]);

console.log(x);
console.log(y);
console.log(x === y);