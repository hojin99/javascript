'use strict';

function makeCounter() {
    let num = 0; // 외부함수의 환경을 기억함

    return function() { 
        return num++; // 외부함수 변수를 참조하는 내부함수 리턴
    };
}

let counter = makeCounter(); // 클로저각 생성됨 (외부함수의 변수를 기억하는 내부 함수)

console.log(counter());
console.log(counter());
console.log(counter());