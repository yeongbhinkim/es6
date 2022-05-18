// 임의의 값을 입력받아 2배수하는 함수 정의

// 1) 함수 선언문 
function multi2_1(x) {
    return x * 2;
}

// 2) 함수 표현식
const multi2_2 = function (x) {
    return x * 2;
}

// 3) 화살표함수
// 1. 매개값이 1개 인경우만 () 생략이 가능 (매개값이 없거나,2개 이상인경우 생략 불가능)
// const multi2_3 = x => {
//     return x * 2;
// }

// 2. 본문에 실행문이 1개 이면서 반환문(return)인 경우 중괄호{}, return은 생략가능
// const multi2_3 = x => x * 2;

const multi2_3 = (x) => {
    return x * 2;
}

const f1 = (x) => { const z = z + 1; }

console.log(multi2_1(2));
console.log(multi2_2(2));
console.log(multi2_3(2));
