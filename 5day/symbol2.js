
//객체의 포로퍼티키로 올 수 있는 값은?
//문자열("",'',``),빈문자열,심볼

// const x = 'name';
// const y = 'age';

let x = 'name';
let y = 'age';

const obj = {
    'name 1': '홍길동', //프로퍼티(프로퍼티키: 프로퍼티 값)
    age: 20
}

const obj2 = {
    x: '홍길동', //프로퍼티(프로퍼티키: 프로퍼티 값)
    y: 20
}

const obj3 = {
    [x]: '홍길동', //프로퍼티(프로퍼티키: 프로퍼티 값)
    [y]: 20
}

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj3[x]);