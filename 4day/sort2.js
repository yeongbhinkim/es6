const arr = [10, 2, 5, 22]; //2, 5, 10, 22

//sort()는 유니코드 값을 기준으로 정렬한다.
console.log(arr.sort()); //[ 10, 2, 22, 5 ]

//숫자를 정렬하고자할때는 콜백함수를 사용해야한다.

arr.sort((a, b) => a - b);//오름차순
console.log(arr);

arr.sort((a, b) => b - a);//내림차순
console.log(arr); 