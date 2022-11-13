console.log(`
# type (null,undefined)`);

// null이나 undefined가 다른 Type에 할달이 될 수 없음
// let nullString:string = null; // Type 'null' is not assignable to type 'string'.

// null을 허용하고 싶은 변수에 아래와 같이 항상 사용하거나
// strictNullChecks를 false로 설정하면 됨
let nullString:string | null = null;

