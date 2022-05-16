const arr = [1, 2, 3, 3, 4];

console.log(arr.indexOf(1));

//문제) 중복요소를 제거해서 배열로 반환하기

const result = arr.reduce((acc, cur, curInx, app) => {
    if (arr.indexOf(cur) === curInx) {
        acc.push(cur);
    }
    return acc;
}, []);

console.log(result);