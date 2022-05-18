//===============================================
//코드평가
//1. var로 선언된 변수, 함수선언문 
//  전역객체의 프로퍼티 식별자(변수명, 함수명, 클래스명) 이름이 등록된다. x=undefined; //초기화
//  window.x = undefined;
//  window.f1 = f(){};
//  window.f2 = f(){};
//===============================================
console.log(x);

var x;               //전역변수(가장 외부에 선언된 변수)
const y = 0; //전역변수로 한번 초기화되면 수정되지 않는 변수선언
let z;               //전역변수로 초기화후 재할당 가능한 변수선언.
console.log(x);
console.log(y);
console.log(z);
console.log(f1);
function f1(i, j) {   //매개변수(함수 외부로부터 값을 입력받기위해 사용되는 변수)
    //지역면수(메소드 내부에 선언된 변수)
    var a;
    const b = 0;
    let c;
}
f2();
function f2() {
    console.log('f2 호출됨!');
    //중첩된 함수 선언이 가능
    function f3() { };
}
// f3();
console.log(f3);
//함수 표현식
// let f3 = function(){};
var f3 = function(){
    console.log('f3 호출됨!');
};

/**
 * 자바스크립트가 코드 실행절차
 * 
 * 1. 코드평가
 *           호이스팅(변수,함수,클래스)
 *           선언문 평가: 변수선언, 함수정의, 클래스정의
 *           var로 선언한 전역 변수는 undefined값으로 초기화한다.
 * 2. 코드실행
 */