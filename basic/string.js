'use strict';

console.log(`
# 문자열 할당`);

let str1 = 'abc"d';
let str2 = "abc'd";
let str3 = `${str1}--
--${str2}`; // 변수, 줄바꿈 포함 가능

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str1 + '--\r--' + str2);

console.log(`
# 문자열 다루기`);

let a = 'abcdefg';

console.log(a.length); // 7
console.log(a[2]); // b
console.log(a.slice(1,3)); // bc
console.log(a.slice(1)); // bcdefg
console.log(a.toUpperCase()); // ABCDEFG

if(a.indexOf('abc') > -1) {
    console.log(a.replace('abc','ABC')); // ABCdefg
}
if(a.includes('abc')) {
    console.log(a.replace('abc','ABC')); // ABCdefg
}

console.log(`
# 문자열 <-> 배열`);

const csv = '200,123,123,123';

const arr = csv.split(',');
console.log(arr);
const str = arr.join('-');
console.log(str);
