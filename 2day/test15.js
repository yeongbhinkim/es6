// find : 요소하나씩 순차적으로 접근해서 조건식이 처음으로 참인 요소 하나를 반환

const arr = [1, 2, 3];

const result = arr.find(ele => ele>5);

console.log(result);
console.log(typeof result);

const result2 = arr.map(ele =>ele*2).find(ele => ele>5);

console.log(result2);
console.log(typeof result2);