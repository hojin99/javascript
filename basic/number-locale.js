'use strict';

console.log(`
# 국제화 숫자`);

let value1 = 1234.123456;
let value2 = -1234.12;

// 숫자
console.log(new Intl.NumberFormat('de-DE').format(value1));
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(value1));
console.log(new Intl.NumberFormat('ar-EG').format(value1));
console.log(new Intl.NumberFormat('en-IN').format(value1));

console.log(new Intl.NumberFormat('de').format(value1));
console.log(new Intl.NumberFormat('zh').format(value1));
console.log(new Intl.NumberFormat('ar').format(value1));
console.log(new Intl.NumberFormat('en').format(value1));

console.log(`
# 국제화 숫자 소수점`);
// 숫자 소수점
console.log(new Intl.NumberFormat('de-DE',{ maximumFractionDigits : 6 }).format(value1));
console.log(new Intl.NumberFormat('de-DE',{ maximumFractionDigits : 3 }).format(value1));
console.log(new Intl.NumberFormat('de-DE',{ maximumFractionDigits : 3, minimumFractionDigits : 3 }).format(value2));

console.log(`
# 국제화 통화`);

// 통화
console.log(new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'JPY'}).format(value1));
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec', {style: 'currency', currency: 'JPY'}).format(value1));
console.log(new Intl.NumberFormat('ar-EG', {style: 'currency', currency: 'JPY'}).format(value1));
console.log(new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'JPY'}).format(value1));

console.log(new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(value1));
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec', {style: 'currency', currency: 'EUR'}).format(value1));
console.log(new Intl.NumberFormat('ar-EG', {style: 'currency', currency: 'EUR'}).format(value1));
console.log(new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'EUR'}).format(value1));