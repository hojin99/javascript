'use strict';

console.log(`
# 객체 생성`);

// 객체 리터럴
let people = {
    'name' : 'hojin',
    'age' : 49
}

console.log(people.name);
console.log(people.age);

// 생성자 함수
function User(name, age) {
    this.name = name;
    this.age = age;
    this.show = () => {
        console.log(this.name, this.age);
    };
}

let a = new User('홍길동',20);
let b = new User('이순신',30);

a.show();
b.show();

// computed property
let myKey = "name";
let myObj = {
    [myKey]:"Tom",
    age : 49
}
console.log(myObj);

console.log(`
# 객체 복제`);

let c = a;
a.age = 10;
console.log(c.age); // 10, 참조가 되어서 c의 age도 함께 변경됨

let d = Object.assign({}, a);
a.age = 30;
console.log(d.age); // 10, 복제가 되어서 d의 age는 변경 안됨

// 전개 구문 할당
let e = {...a};
a.age = 40;
console.log(e.age); // 30, 복제가 되어서 e의 age는 변경 안됨

// 구조분해 할당
const {name:usrName, age} = a;
console.log(usrName); // 홍길동, 변수명 변경 
console.log(age); // 40

console.log(`
# 객체 다루기`);

// key 목록 조회
Object.keys(a).forEach(
    (value, index) => {
        console.log(value);
    }
)

// value 목록 조회
Object.values(a).forEach(
    (value, index) => {
        console.log(value);
    }
)

// entry 목록 조회
console.log(Object.entries(a));


