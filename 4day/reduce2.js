const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];


//문제1) 요소의 중복된 갯수 구하기{'banana' : 1, 'apple' : 2, 'orange' : 2}
//       fruits['banana']

const result = fruits.reduce((acc, cur, curInx, arr) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {} );

console.log(result);
console.log(result['apple']);

