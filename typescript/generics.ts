
console.log(`
# type (generics)`);


type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectArray = Array<{name:string}>

let strArr:StringArray = ["a","b"];
// strArr = [1,2,3]; //typescript/generics.ts(11,11): error TS2322: Type 'number' is not assignable to type 'string'
console.log(typeof strArr);
console.log(strArr);

class User<T> {
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

let user1 = new User<string>('Tom');

user1.tell();
user1.changeName('Jane');
user1.tell();

//user1 = new User<number>(10); //typescript/generics.ts(37,1): error TS2322: Type 'User<number>' is not assignable to type 'User<string>'.
