function Person(name, age) {
    this.name = name;
    this.age = age;
}

//인스턴스 메소드
Person.prototype.smile = function () {
    console.log('웃다');
}
Person.prototype.eat = function () {
    console.log('먹다');
}

//정적 데이터 프로퍼티
Person.national = '한국인';

//정적 메소드 프로퍼티
Person.study = function () {
    console.log('공부하다');
}
// const p1 = new Person('홍길동', 30);
// const p2 = new Person('홍길순', 20);

// console.log(p1.name, p1.age);
// console.log(p2.name, p2.age);

// console.log(Person.national);
Person.study();
// Person.smile();
const p1 = new Person('홍길동', 30);
p1.smile();