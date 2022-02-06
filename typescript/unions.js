"use strict";
console.log("\n# type (Unions)");
function getLength(obj) {
    console.log(typeof obj);
    return obj.length;
}
var b = true;
// b = "hello"; // typescript/unions.ts(14,1): error TS2322: Type 'string' is not assignable to type 'MyBool'.
console.log(typeof b);
// const win1:WindowStates = true; //typescript/unions.ts(14,7): error TS2322: Type 'true' is not assignable to type 'WindowStates'.
console.log(getLength("hello")); // 5
console.log(getLength(["hello", "world"])); // 2
