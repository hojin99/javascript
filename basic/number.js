'use strict';

console.log(`
# number`);

let myInt = 5;
let myFloat = 16.6678;

console.log(myInt);
console.log(myFloat);

console.log(typeof myInt);  // number 
console.log(typeof myFloat);  // number

console.log(myFloat.toFixed(0)); // 7, 반올림
console.log(myFloat.toFixed(2)); // 6.67, 반올림

console.log(typeof myFloat.toFixed(0)); // 7, 반올림
console.log(typeof myFloat.toFixed(2)); // 6.67, 반올림

console.log(parseInt(myFloat.toFixed(0))); // number로 변경 
console.log(parseFloat(myFloat.toFixed(2))); // number로 변경


console.log(`
# 비교`);

let a = 123;
let b = "123";
let c = 123.1234;

console.log(a==b); // true, 값 비교
console.log(a===b); // false, 값+데이터타입 비교
console.log(a!=b); // false, 값 비교
console.log(a!==b); // true, 값+데이터타입 비교


console.log(`
# 변환`);

console.log(a.toString());
console.log(a.toString(2)); // 1111011,  2진수 문자로
console.log(a.toString(16)); // 7b, 16진수 문자로

console.log(parseInt(a.toString(2),2)); // 123, 2진수를 10진수 숫자로
console.log(parseInt(a.toString(16),16)); // 123, 16진수를 10진수 숫자로

console.log(`
# Math`);

// 많은 수의 Math 함수 정확도는 구현에 따라 다를 수 있습니다. 즉, 각 브라우저의 결과가 다를 수 있으며, 
// 서로 같은 JS 엔진이라도 운영체제나 아키텍쳐에 따라서 불일치하는 값을 반환할 수 있습니다.

let value1 = 1234.456;
let value2 = 1234.789;
let value3 = -1234.456;

console.log(Math.abs(value1)); // 123.456
console.log(Math.abs(value3)); // 123.456

console.log(Math.ceil(value1)); // 124
console.log(Math.floor(value1)); // 123
console.log(Math.round(value1)); // 123
console.log(Math.round(value2)); // 124

console.log(Math.min(value1,value2,value3)); // -123.456
console.log(Math.max(value1,value2,value3)); // 123.789

// 1부터 10에서 랜덤으로 숫자 정하기
for(let i =0;i<5;i++) {
    console.log(1+ Math.floor(Math.random() * 10));
}

console.log(`
# 국제화`);

// 숫자
console.log(new Intl.NumberFormat('de-DE').format(value1));
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(value1));
console.log(new Intl.NumberFormat('ar-EG').format(value1));
console.log(new Intl.NumberFormat('en-IN').format(value1));

// 통화
console.log(new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'JPY'}).format(value1));
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec', {style: 'currency', currency: 'JPY'}).format(value1));
console.log(new Intl.NumberFormat('ar-EG', {style: 'currency', currency: 'JPY'}).format(value1));
console.log(new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'JPY'}).format(value1));
