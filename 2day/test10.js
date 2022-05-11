const arr = [1, 2, 3];
const result = [];

//arr배열 요소를 2배수하는 함수
function f1() {

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i] * 2;
    }
}
f1();
console.log(result);

//arr배열 요소를 3배수하는 함수
function f2() {

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i] * 3;
    }
}
f2();
console.log(result);