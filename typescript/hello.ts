
function greeter(person:string) {
    return "Hello, " + person;
}

// hello:string으로 자동 변환됨 (noImplicitAny가 false인 경우)
let hello:string = "hello";
// hello = 123; // error TS2322: Type 'number' is not assignable to type 'string'
// console.log(greeter(123));  // typescript/hello.ts(9,21): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(greeter()); //typescript/hello.ts(12,13): error TS2554: Expected 1 arguments, but got 0.

console.log(hello);
console.log(greeter('Tom')); 
// console.log(greeter(undefined));  // strict 설정 시만 에러