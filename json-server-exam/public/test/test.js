//비동기처리 예제
// foo()함수에서 x+y처리 결과를 변수에 저장해 보기
// foo()함수에서 x+y처리 결과를 반환해 보기

let result;

function foo() {
    console.log('foo');
    const x = 10;
    const y = 20;

    result = x + y;
}
function bar() {
    console.log('bar');
}

setTimeout(foo, 3 * 1000);
bar();
console.log(result);


