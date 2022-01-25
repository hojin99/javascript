'use strict';

function fetchItems() {
    return new Promise((resolve,reject) => {
        let items = [1,2,3];
        setTimeout(()=>{resolve(items)},1000);
    });
}

async function logItems() {
    try {
        let items = await fetchItems();
        console.log(items);
    } catch (error) {
        console.log(error);
    }
}

logItems();

