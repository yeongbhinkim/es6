// 동기처리 예제
// foo()함수에서 x+y처리 결과를 변수에 저장해 보기
// foo()함수에서 x+y처리 결과를 반환해 보기
let result;
function sleep(func, delay){
    const delayUtil = Date.now() + delay;
    while(Date.now() < delayUtil);
    result = func();
}
function foo(){
    console.log('foo');
    const x = 10;
    const y = 20;    
    return x + y;
}
function bar(){
    console.log('bar');
}
sleep(foo, 3*1000);
bar();
console.log(result);