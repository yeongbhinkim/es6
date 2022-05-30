function Person(name){
    this.name = name;
    this.study = function(){
        console.log('공부하다');
    }
}

const p1 = new Person('홍길동');
const p2 = new Person('홍길순');

p1.study();
p2.study();
