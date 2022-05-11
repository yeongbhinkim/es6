//리터럴 객체
const p1 = {
    name: '홍길동',
    age: 10,
    smile() { //es6
        console.log('웃다1');
    },

    study: function () {
        console.log('공부하다');
    }
}
const p2 = {
    name: '홍길순',
    age: 20,
    smile() {
        console.log('웃다2');
    }
}
p1.study();
p1.smile();
p2.smile();

//생성자 함수를 사용해서 객체만들기
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.smile = function () {
        console.log('웃다3');
    }
    // console.log('일반함수로 호출됨');
}

// Person('홍길남',40);// 생성자함수를 일반함수처럼 호출도 가능

const p3 = new Person('홍길동', 30);
const p4 = new Person('홍길순', 20);

p3.smile();
p4.smile();


//생성자 함수를 사용해서 객체만들기
function Person2(name, age) {
    this.name = name;
    this.age = age;
}

Person2.prototype.smile = function () {
    console.log('웃다4');
}
Person2.prototype.eat = function () {
    console.log('먹다');
}

const p5 = new Person2('홍길동', 30);
const p6 = new Person2('홍길순', 20);

p5.smile();
p6.smile();

p5.eat();
p6.eat();

console.log('===========================================');
//ES6 클래스 문법을 사용하여객체 만들기
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    smile() {
        console.log('웃다');
    }
    eat() {
        console.log('먹다');
    }
}

const p7 = new Person3('홍길남', 40);
const p8 = new Person3('홍길북', 50);
p7.smile(); p7.eat();
p8.smile(); p8.eat();