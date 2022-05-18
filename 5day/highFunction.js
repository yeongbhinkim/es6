//임의의 배수를 계산하는 함수를 반환하는 함수.

// 1) 함수 선언문 
function f(x) {
    return function g(y) {
        return y * x;
    }
}

console.log(f(2)(3));

const f2 = f(2); //2배수 함수
const f3 = f(3); //3배수 함수
const f4 = f(4); //4배수 함수

console.log(f2(3)); //6
console.log(f3(3)); //9
console.log(f4(3)); //12

console.log('================================');
// 2) 함수 표현식
const k = function (x) {
    const l = function (y) {
        return y * x;
    }
    return l;
}

console.log(k(2)(3));

console.log('================================');
// 3) 화살표함수
const m = x => y => y * x;

console.log(m(2)(3));