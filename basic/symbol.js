'use strict';

// 유일한 식별자
let s1 = Symbol();
let s2 = Symbol('1');
let s3 = Symbol('1');

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s1.description);
console.log(s3.description);
console.log(s3 === s2);

let people = {
    'name' : 'hojin',
    'age' : 49
}

// symbol은 기존 객체에 영향을 주지 않으면서, 프로퍼티 추가하고 싶을 때 사용
people["job"] = "developer";
people[s2] = "test"; 
console.log(Object.entries(people)); // symbol key는 출력되지 않음
console.log(Object.values(people)); // symbol key는 출력되지 않음