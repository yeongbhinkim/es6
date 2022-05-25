// function foo() {console.log('foo'); result = 'me';}
function bar() { console.log('bar'); }

let result;

// setTimeout(foo, 3*1000);
setTimeout(function foo() {
    console.log('foo');
    result = 'me';
}, 0);

bar();

console.log(result);