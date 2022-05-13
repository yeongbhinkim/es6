const person = [
    { name: "홍길동", age: 10, sex: "남" },
    { name: "홍길순", age: 20, sex: "여" },
    { name: "홍길서", age: 30, sex: "남" },
    { name: "홍길북", age: 40, sex: "남" }
];

//1. 나이의 총합? reduce
const result = person.reduce((pre, curr) => pre + curr.age, 0);
// const result = person.reduce((pre, curr) => {
//     // console.log(pre, curr.age);
//     return pre+curr.age;
// },0);

console.log(result);

//2. 남자만 추출? filter
person.filter(person => person.sex === "남")
    .forEach(person => console.log(person));

//3. 남자 나이의 총합? filter,reduce
const sumOfAge = person.filter(person => person.sex === "남")
    .reduce((p1, p2) => p1 + p2.age, 0);
console.log(sumOfAge);

//4. 여자가 있는지 체크 some
console.log(person.some(person => person.sex === "여"));

//5. 모두 남자인지 체크 every
console.log(person.every(person => person.sex === "남"));

//6. 첫번째 여성의 나이?  find
const woman = person.find(person => person.sex === "여");
console.log(woman.age);

//7. 남자 중 나이가 30이상인 사람중 북으로 끝나는 이름을 가진 사람은?? filter, filter
// const men = person.filter(person => person.sex === "남")
//     .filter(person => person.age >= 30);
// console.log(men);

person.filter(person => person.sex === "남")
    .filter(person => person.age >= 30)
    .filter(person => person.name[person.name.length-1] === "서")
    .forEach(person => console.log(person));

// console.log(person.filter(person => person.sex === "남")
//                   .filter(person => person.age >= 30));

//8. 남자 이름을 모두 추출하시오 filter
person.filter(person => person.sex === "남") 
    .forEach(person => console.log(person.name));
