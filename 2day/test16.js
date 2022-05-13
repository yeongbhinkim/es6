//Array.prototype.some
//배열요소중에 조건에 맞는 요소가 하나라도 있으면 true 그렇지 않으면 false 
//반환타입 : boolean
const arr = [1,3,2,7]

const result = arr.some(ele=>ele%2==0);
console.log(result);