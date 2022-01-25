'use strict';

function add(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.round(Math.random()*10);

            if(num > 8)
                reject('over 8');
            else
                resolve(val+num);
        }, 500);
    });
}

add(0)
.then((value) => {
    console.log(value);
    return add(value);
})
.then(value => {
    console.log(value);
    return add(value);
}).then(value=>console.log(value))
.catch(err=>console.log(`Error : ${err}`));




