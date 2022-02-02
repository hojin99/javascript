'use strict';

let _ = require('lodash');

let arr = ["a", "b", "c", "a", "b", "c"];

let userList = [
    {name: "Tom", age: 10},
    {name: "Mike", age: 20},
    {name: "Ann", age: 30},
    {name: "Bill", age: 40},
];

console.log(Array.isArray(arr));

console.log(`
# 배열 탐색`);

// loop 돌기
arr.forEach(
    (value, index) => {
        console.log(`${value}, ${index}`);
    }
)

console.log(arr.indexOf('a')); // 0
console.log(arr.lastIndexOf('a')); // 3, 뒤에서 부터 찾기
console.log(arr.indexOf('a',2)); // 3, index 2부터 찾기

// 첫번째 일치되는 거 찾기
let ret = arr.find((item, index) => {
    return index % 2 === 0;
})
console.log(ret);

// 일치 되는 거 모두 찾기
ret = arr.filter((item, index) => {
    return index % 2 === 0;
})
console.log(ret);

console.log(`
# 배열 변환`);

// 순서 반대로
console.log(arr.reverse());

arr.push('d'); // 뒤로 넣기
console.log(arr);

ret = arr.pop(); // 뒤에서 빼기
console.log(ret);
console.log(arr);

arr.shift(); // 앞에서 빼기
console.log(arr);

arr.unshift('a'); // 앞에서 넣기
console.log(arr);


// 기존 배열로 새로운 배열 생성
ret = userList.map((item, index) => {
    return Object.assign({}, item, {
        isAdult : item.age > 19
    })
});
console.log(ret);

// 문자열로 합치기
console.log(arr.join(','));

// 배열로 나누기
console.log(arr.join(',').split(','));

console.log(`
# 정렬`);

// 정렬
console.log(arr.sort());

let arr2 = [12, 1, 24, 43, 9, 14];

console.log(arr2.sort()); // [ 1, 12, 14, 24, 43, 9 ], 문자열로 변환 되어 정렬됨

arr2.sort((a,b) => { 
    return a - b;
});
console.log(arr2); // [ 1, 9, 12, 14, 24, 43 ]
console.log(_.sortBy(arr2)); // [ 1, 9, 12, 14, 24, 43 ]

console.log(`
# 계산`);

ret = arr2.reduce((prev, cur)=>{
    console.log(prev, cur)
    return prev + cur; // prev - 누적값, cur - 현재값
}, 0); // 초기값 0

console.log(ret);


console.log(`
# 구조분해 할당`);

let [n1, n2, n3="3"] = ["1", "2"];
console.log(n1); // "1"
console.log(n2); // "2"
console.log(n3); // "3"

[n1, n2] = ["5", "6"];


console.log(`
# 전개 구문`);

let arr3 = [1,2,3];
let arr4 = [4,5,6];
let result = [0, ...arr3, ...arr4, 7];

console.log(result);

console.log(`
# 복사 - reference copy, shadow copy, deep copy`);

// 참조 복사
let array = [1,2,3,4,5];
let array_copy = array;

array.splice(0,1);
console.log('reference copy:', array, array_copy); //[ 2, 3, 4, 5 ] [ 2, 3, 4, 5 ]

// Shadow 복사 (spread)
array = [1,[2,3]];
array_copy = [...array];

array.push(4); 
console.log('reference copy1:', array, array_copy);

array[1].push(5); 
console.log('reference copy2:', array, array_copy);

// Deep 복사
array = [1,[2,3]];
array_copy = JSON.parse(JSON.stringify(array));

array.push(4); 
console.log('deep copy1:', array, array_copy);

array[1].push(5); 
console.log('deep copy2:', array, array_copy);

