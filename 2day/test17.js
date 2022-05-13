//Array.prototype.every
//모든 요소가 조건에 맞으면 true 그렇지않으면 false
//반환타입 : boolean
//체크박스 확인용으로 사용가능
const arr = [2, 4, 7, 8];

const result = arr.every(ele => ele % 2 == 0);

console.log(result);