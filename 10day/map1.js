//map객체 생성
const map1 = new Map();
console.log(map1);

const map2 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
console.log(map2);

//요소갯수
const { size } = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
console.log(size);

//map객체에 동적으로 요소추가 set()
const map3 = new Map();
map3.set('key1', 'value1')
    .set('key2', 'value2')
    .set('key3', 'value3');
console.log(map3);

//map객체에 킬호 객체를 사용하는 예
const lee = { name: 'lee' };
const kim = { name: 'kim' };
const map4 = new Map();
map4.set(lee, 'developer')
    .set(kim, 'designer');
console.log(map4);

const map5 = new Map([[lee, 'developer'], [kim, 'designer']]);
console.log(map5);

//map객체 요소 삭제
// const map6 = new Map([[lee, 'developer'], [kim, 'designer']]);
// console.log(map6.delete(lee));
// console.log(map6);

const map6 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);
map6.delete('key1');
console.log(map6);

//map객체 전체요소 삭제 clear()
map6.clear();
console.log(map6);

console.log('======================');

//map객체 요소 순환
map5.forEach((value, key, map) => console.log(value, key, map));

console.log('======================');
for (const entry of map5) {
    console.log(entry);
}

//이터러블 객체인 map은 스프레드 문법대상이 될 수 있다.
console.log([...map5]);
console.log('======================');
//이터러블 객체인 map은 배열 디스터럭처링 문법대상이 될 수 있다.
const [a, b] = [...map5];
console.log(a, b)

//map객체에서 키만 추출
for (const key of map5.keys()) {
    console.log(key);
}

//map객체에서 값만 추출
for (const value of map5.values()) {
    console.log(value);
}

//map객체에서 엔트리로 출력
for (const entry of map5.entries()) {
    console.log(entry);
}

