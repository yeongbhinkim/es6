//javascript에서 false : 0 , undefined , null , '', ""
// 0이 아니면 true 0은 false 

const x = 10;
const y = 20;



console.log(0 || x + y);
console.log(1 || x + y);

console.log(0 && x + y);
console.log(1 && x + y);

console.log(undefined || x + y);
console.log(null || x + y);
console.log( '' || x + y);

if(null){
    console.log('true');
}else{
    console.log('false');
}

if(0){
    console.log('true');
}else{
    console.log('false');
}

if(undefined){
    console.log('true');
}else{
    console.log('false');
}