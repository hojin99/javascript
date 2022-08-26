'use strict';

const text = '이름 화이팅';
const rx = /([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+/i;
const message = rx.test(rx) ? text.replace(rx, '자바스크립트') : undefined;

console.log(message);

const regexp = new RegExp("([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+","i");
const message2 = rx.test(rx) ? text.replace(rx, '자바스크립트2') : undefined;

console.log(message2);