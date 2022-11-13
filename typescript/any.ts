console.log(`
# type (any)`);

let productId : any = 111;

productId = '제품';

// 암시적으로 any type으로 지정됨
// Typescript를 사용하는 취지에 맞지 않음
let noType;

noType = 111;
noType = 'abc';
