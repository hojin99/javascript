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
// 전개 연산자는 함수의 인자값을 배열로도 사용할 수 있도록 해줌
// func.apply(null,array)는 함수에 인자값을 배열로 사용할 수 있도록 해줌
function add(...num) {
    let ret = 0;
    num.forEach((item)=>{
        ret += item;
    });
    console.log(ret);
}
add(1,2,3,4);
add(1,2,3,4,5,6,7,8,9);
add(...[1,2,3]);
add.apply(null,[1,2,3]);

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('John',12,'java','c++');
const user2 = new User('Tom', 22, 'react', 'vuejs', 'jsp');
const user3 = new User('Jack', 53, ...['react', 'vuejs', 'jsp']); 
const user4 = new User('Jack', 53, ['react', 'vuejs', 'jsp']); // 배열은 첫번째 인자값으로 인식하여 배열 내 배열이 됨
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

console.log(`
# 화살표 함수`);

function Person(name) {
    this.name = name;
    this.sayHi = () => {
        console.log(`Hi ${this.name}`);
    };
    this.sayHello = function() {
        console.log(`Hello ${this.name}`);
    }
}

const p1 = new Person('hojin');
p1.sayHi();
p1.sayHello();

console.log(Person.hasOwnProperty('prototype')); // true

const APerson = (name) => {
    this.name = name;
    this.sayHi = () => {
        console.log(`Hi ${this.name}`);
    };
    this.sayHello = function() {
        console.log(`Hello ${this.name}`);
    }
}

// 화살표 함수로 생성자 함수를 만들 수 없음 (prototype이 없음)
// TypeError: APerson is not a constructor
// const p2 = new APerson('hojin');
// p2.sayHi();
// p2.sayHello();

console.log(APerson.hasOwnProperty('prototype')); // false


const p3 = {
    name: 'jane',
    sayHi: () => console.log(`Hi ${this.name}`), // 화살표 함수는 객체 내에 할당 되면, 객체를 this 인식 못함  
    sayHello: function() {
        console.log(`Hello ${this.name}`);
    }
};

p3.sayHi(); // Hi undefined
p3.sayHello(); // Hello Jane


