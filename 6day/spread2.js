'use strict';

// 유사배열 객체 : 1) 숫자형식의 문자열을 프로퍼티 키로 가지고 있고, 2) length 프로퍼티를 가지고 있다.
const arrayLike = {
  0: '홍길동',
  1: '홍길순',
  2: '홍길서',
  3: '홍길남',
  4: '홍길북',
  length: 5,
};

console.log(arrayLike);
console.log('================================');
// 프로퍼티 value를 불러오는 방식의 생김새가 배열과 유사하다.
console.log(arrayLike[0]);
console.log('================================');
console.log(arrayLike[1]);
console.log('================================');
console.log(arrayLike['0']);
console.log('================================');
console.log(arrayLike['1']);
console.log('================================');
// 유사배열 객체를 배열로 만드는 방법
// 유사배열 객체를 배열로 만드는 이유 : 고차함수 활용을 위해.
// 1) Array의 정적메소드 from을 이용
console.log(Array.from(arrayLike));
console.log('================================');
// 2) 스프레드 문법을 이용
console.log([...arrayLike]);
