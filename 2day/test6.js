// 1씩 증가하는 함수

let num = 0;

function increase() {
    return num++;
}

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

num = 10;

console.log(increase());