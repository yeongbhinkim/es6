//map : 요소하나씩 순차적으로 접근해서 다른값으로 매핀한 결과를 배열로
//      반환받고자할때 사용.

const arr = [1, 2, 3];

const result = arr.map(ele => ele * 2);
console.log(result);