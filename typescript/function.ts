console.log(`
# function`);

// noImplicitAny를 false로 하면 에러가 안 나고 허용됨
// Parameter 'name' implicitly has an 'any' type.
// function hi(name) {
//     console.log('Hello ' + name);
// }

// 반환값에 대해서 Type을 지정하지 않아도 에러가 안남 (자동 추론)
// Typescript를 사용하는 취지에 맞지 않음
function hi1(name:string) {
    console.log('Hello ' + name);
}
// 반환값에 대해서 명시적으로 Type을 지정할 수 있음
function hi2(name:string) : void {
    console.log('Hello ' + name);
}

// 변수에 함수 지정 시는 명시적은 Type을 지정하지 않아도 됨
let MyFunc = (name:string) => {
    console.log('Hi ' + name);
}
// 명시 적으로 지정할 수도 있음
let MyFunc2 : (name:string) => void;
MyFunc2 = (name:string) => {
    console.log('Hi ' + name);
};

// ?는 옵션 변수로 입력이 안 되어도 TSError가 안 남
function greet(name: string, age?: number) : number {

    if(age !== undefined)
        console.log(`hello!! ${name.toUpperCase()}.. your age is ${age}!`);
    else
        console.log(`hello!! ${name.toUpperCase()}..`);

    return name.split('').length;
}

// greet(1); //error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(`cnt : ${greet('hojin', 49)}`);
console.log(`cnt : ${greet('hojin')}`);





