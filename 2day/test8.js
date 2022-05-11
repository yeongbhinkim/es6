// 1씩 감소하는 함수

function outer(){
    let num = 0;
    
    //고차함수
    return function increase(){
            return num--;
    }
}
const minus = outer();

console.log(minus());
console.log(minus());
console.log(minus());
console.log(minus());
console.log(minus());