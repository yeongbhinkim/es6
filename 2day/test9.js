const increase = function(num) {
    return ++num;
}

const decrease = function(num) {
    return --num;
}

function outer(f){
    let num = 0;

    return function(){
        num = f(num);
        return num;
    }
}

const plus = outer(increase);
console.log(plus());
console.log(plus());
console.log(plus());

const minus = outer(decrease);
console.log(minus());
console.log(minus());
console.log(minus());