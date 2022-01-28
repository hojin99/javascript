
function greeter(person:string) {
    return "Hello, " + person;
}

// console.log(greeter(123));  // typescript/hello.ts(9,21): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// console.log(greeter()); //typescript/hello.ts(12,13): error TS2554: Expected 1 arguments, but got 0.

console.log(greeter('hojin1'));