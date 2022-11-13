console.log(`
# type (object)`);

let Dom = {
    version: '0.0.1',
    el() {},
    css() {}
}

// object의 경우 초기 설정 된 값을 암시적으로 할당 가능한 타입으로 설정하기 때문에 추후 다른 형태로 할당 시 에러
// Type '{ append(): void; }' is not assignable to type '{ version: string; el(): void; css(): void; }'.
// Dom = {
//     append() {}
// }

// 아래와 같이 지정하는 방법도 있지만, typescript를 사용하는 취지에 맞지 않음
let Dom2 : {
    version: string,
    el: () => void,
    css: () => void,
    [propName: string]: any 
};

Dom2 = {
    version: '0.0.1',
    el(){},
    css(){}
};

Dom2.each   = function(){};
