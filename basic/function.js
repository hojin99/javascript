'use strict';

console.log(`
# 매개변수`);

// 변수는 선언되지 않아도 할당 가능
function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName('hojin'); // 1 hojin undefined
showName('hojin','john'); // 2 hojin john

// 나머지 매개변수
function add(...num) {
    let ret = 0;
    num.forEach((item)=>{
        ret += item;
    });
    console.log(ret);
}
add(1,2,3,4);
add(1,2,3,4,5,6,7,8,9);

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('John',12,'java','c++');
const user2 = new User('Tom', 22, 'react', 'vuejs', 'jsp');
const user3 = new User('Jack', 53);
console.log(user1);
console.log(user2);
console.log(user3);

