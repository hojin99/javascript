'use strict';

console.log(`
# 비동기 실행 old`);

// 단일 비동기 실행
console.log('ready');
setTimeout(()=>{
    console.log('start1');
},3000);

const sid1 = setTimeout(()=>{
    console.log('start2');
},3000);

clearTimeout(sid1);

// 반복 비동기 실행
console.log('ready');
let cnt = 0;
const sid2 = setInterval(()=>{
    cnt++;
    console.log('do1');
    if(cnt > 10) clearInterval(sid2);
},1000);

const sid3 = setTimeout(()=>{
    console.log('do2');
},1000);

clearInterval(sid3);



