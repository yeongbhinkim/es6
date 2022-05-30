const set = new Set();
console.log(set);

const set2 = new Set([1, 2, 3, 3]);
console.log(set2);

const set3 = new Set('hello');
console.log(set3);

//배열의 중복 요소 제거
const uniq = array => array.filter((ele, idx, arr) => arr.indexOf(ele) === idx);
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

//Set을 사용한 배열의 중복 요소 제거
const uniq2 = array => [...new Set([2, 1, 2, 3, 4, 3, 4])]
// console.log(uniq2());
console.log(uniq2([2, 1, 2, 3, 4, 3, 4]));

//set요소 갯수
const { size } = new Set([1, 2, 3, 3]);
console.log(size);

const size2 = new Set([1, 2, 3, 3]).size;
console.log(size2);

//set요소 동적추가
const set4 = new Set();
set4.add(1).add(2).add(3).add(3).add({}).add([]).add(() => { }).add(null).add(undefined);
console.log(set4);

//set에서 요소 검색 has()
console.log(set4.has(1));

//set에서 요소 삭제 delete
console.log(set4.delete(3));
console.log(set4.delete(7));
console.log(set4);

//set에 모든 요소제거
set4.clear();
console.log(set4);

//set요소 전체 순환
const set5 = new Set([1, 2, 3, 3]);
for (let ele of set5) {
    console.log(ele);
}

//스프레드 문법을 사용해서 목록으로 반환.
console.log([...set5]);
//set => 배열로복사 => 스프레드문법으로 배열요소를 각 변수에 저장
const [a, b, c] = [...set5];
console.log(a, b, c);

const [z, ...rest] = [...set5];
console.log(z, rest);

