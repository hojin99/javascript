
console.log(`
# type (Unions, 새로운 타입)`);

type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type MyNumbers = 1| 5| 6| 10;
type NumOrString = number | string;

function getLength(obj : string | string[]) {
    console.log(typeof obj);
    return obj.length;
}

let b:MyBool = true;
// b = "hello"; // typescript/unions.ts(14,1): error TS2322: Type 'string' is not assignable to type 'MyBool'.
console.log(typeof b);

// const win1:WindowStates = true; //typescript/unions.ts(14,7): error TS2322: Type 'true' is not assignable to type 'WindowStates'.
const win1:WindowStates = "open"; // 

const num1:MyNumbers = 1;
// const num2:MyNumbers = 2; // error TS2322: Type '2' is not assignable to type 'MyNumbers'.

// console.log(getLength(123)); // typescript/unions.ts(22,23): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string | string[]'.
console.log(getLength("hello")); // 5
console.log(getLength(["hello","world"])); // 2

