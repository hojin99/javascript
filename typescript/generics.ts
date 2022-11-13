
console.log(`
# generics`);

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectArray = Array<{name:string}>

let strArr:StringArray = ["a","b"];
// strArr = [1,2,3]; //typescript/generics.ts(11,11): error TS2322: Type 'number' is not assignable to type 'string'
console.log(typeof strArr);
console.log(strArr);

class Animal<T> {
    name:T;

    constructor(name:T) {
        this.name = name;
    }

    tell() {
        console.log(this.name);
    };

    changeName(name:T) {
        this.name = name;
    }
}

let animal1 = new Animal<string>('Tom');

animal1.tell();
animal1.changeName('Jane');
animal1.tell();

//animal1 = new Animal<number>(10); //typescript/generics.ts(37,1): error TS2322: Type 'User<number>' is not assignable to type 'User<string>'.

let animal2 = new Animal<number>(10);

animal2.tell();
animal2.changeName(20);
animal2.tell();
// animal2.changeName('Jane'); // Argument of type 'string' is not assignable to parameter of type 'number'.