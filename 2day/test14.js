//filter : 요소를 하나식 순차적으로 접근해서 
//         콜백함수가 참인경우만 걸러서 배열로 반환해준다

const arr = [1, 2, 3,4,5,6,7,8,9,10];

const result = arr.filter(ele => ele%2==0);
console.log(result);

const result2 = arr.filter(ele => ele%2==1);
console.log(result2);
