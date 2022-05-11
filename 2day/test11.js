const arr = [1, 2, 3];
const result = [];

const two = (num) => num * 2;
const three = (num) => num * 3;

// 함수의 매개값으로 함수가 전달될때 이함수를 콜백함수 또는 보조함수라한다.
// 고차함수 : 매개값이 함수인 함수, 반환값이 함수
function outer(f) {
    for (let i = 0; i < arr.length; i++) {
        result[i] = f(arr[i]);
    }
}

outer(two);
console.log(result);

outer(three);
console.log(result);

outer(num => num * 4);
console.log(result);
