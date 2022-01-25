'use strict';

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.round(Math.random()*10)%2===0)
            resolve('ok');
        else 
            reject('oops');
    }, 500);
});

myPromise
.then(value => { console.log(`ret : ${value}`)})
.catch(err => { console.log(`err : ${err}`)});


function add(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num++);
        }, 500);
    });
}

add(1)
.then((value) => {console.log(value)});




