// 1씩 증가하는 함수

function outer() {
    let num = 0;

    //고차함수
    return function increase() {
        return num++;
    }
}
const add = outer();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());