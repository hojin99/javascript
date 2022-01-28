
console.log(`
# type (Unions)`);

type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type MyNumbers = 1| 5| 6| 10;

function getLength(obj : string | string[]) {
    console.log(typeof obj);
    return obj.length;
}

let b:MyBool = true;
// b = "hello"; // typescript/unions.ts(14,1): error TS2322: Type 'string' is not assignable to type 'MyBool'.
console.log(typeof b);


// const win1:WindowStates = true; //typescript/unions.ts(14,7): error TS2322: Type 'true' is not assignable to type 'WindowStates'.

console.log(getLength("hello")); // 5

console.log(getLength(["hello","world"])); // 2