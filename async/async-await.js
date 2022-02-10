'use strict';

function fetchItems() {
    return new Promise((resolve,reject) => {
        let items = [1,2,3];
        setTimeout(()=>{resolve(items)},1000);
    });
}

async function logItems() {
    try {
        // await - 비동기 호출을 기다렸다가 처리 (async함수 내에서만 사용 가능)
        let items = await fetchItems();
        console.log(items);
    } catch (error) {
        console.log(error);
    }
}

const ret = logItems();

// async 함수의 리턴 값은 promise
console.log(ret);

