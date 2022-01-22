'use strict';

console.log(`
# var`);

// undefined(에러 안남) ,var는 hoisting을 통해서 변수 선언이 코드 가장 상단으로 옮겨지는 효과, 초기화는 안됨
console.log(var1);
var var1; 
var var1 = 'var'; // 두번 선언해도 에러 안함
console.log(var1);

function func1() {
    var var1 = 'in func';
    console.log(var1); 
}
func1(); // var는 함수 범위로 in func 출력
console.log(var1); // var은 함수 범위로 var 출력
if(1 === 1) {
    var var1 = 'in if';
}
console.log(var1); // var은 함수 범위로 in if 출력


console.log(`
# let`);

//console.log(var2); // let은 변수 선언이 코드 상단으로 옮겨지지 않기 때문에 에러
let var2;  
//let var2 = 'let'; // 두번 선언 시 에러
var2 = 'let';
console.log(var2);
function func2() {
    let var2 = 'in func';
    console.log(var2); 
}
func2(); // var는 함수 범위로 in func 출력
console.log(var2); // var은 함수 범위로 let 출력
if(1 === 1) {
    let var2 = 'in if';
    console.log(var2); // in if
}
console.log(var2); // let은 블록 범위로 let 출력


console.log(`
# const`);
//console.log(var3); // let은 변수 선언이 코드 상단으로 옮겨지지 않기 때문에 에러
// const var3; // const는 초기화 없이 변수 선언 시 에러
const var3 = 'const';
console.log(var3);
//var3 = 'changed'; // 에러 발생, const는 변경 불가


