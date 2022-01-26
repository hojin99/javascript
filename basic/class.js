'use strict';

console.log(`
# Class 기본`);

class Car {
    // 변수
    name; // public
    #wheels = 4; // private

    // static method
    static repair(car) {
        console.log(`repair ${car.name}`);
    }
    // 생성자
    constructor(name) {
        this.name = name;
    }
    // getter
    get getName() {
        return this.name;
    }
    // method
    drive() {
        console.log(`${this.name} is running with ${this.#wheels} wheels...`);
    }
}

const car = new Car('ev6');
console.log(car.getName); // ev6
console.log(car.name); // ev6, public 변수이기 때문에
console.log(car.wheels); // undefined, private변수이기 때문에
car.drive(); // ev6 is running with 4 wheels...
Car.repair(car); // repair ev6

console.log(`
# Class 상속`);

class Ev6 extends Car {

    constructor() {
        super('ev6');
    }

    // method override
    drive() {
        console.log(`${this.name} is running...`);
    }    
}

const ev6 = new Ev6();
console.log(ev6.getName); // ev6
console.log(ev6.name); // ev6, public 변수이기 때문에
console.log(ev6.wheels); // undefined, private변수이기 때문에
ev6.drive(); // ev6 is running with 4 wheels...
Car.repair(ev6); // repair ev6



