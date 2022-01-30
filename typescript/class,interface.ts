console.log(`
# interface`);

interface User {
    name: string;
    id : number;
}

// const user: User = 'hojin'; // compile Error
const user: User = {
    name:'hojin',
    id:1
};

console.log(user);

console.log(`
# class`);

class UserAccount {
    name: string;
    id : number;    

    constructor(name:string, id:number) {
        this.name = name;
        this.id = id;
    }
}

function deleteUser(user:User) {
    console.log(`delete ${user.name}...`);
}

function getUser():User {
    return user1;
}

let user1:User = new UserAccount('hojin',12);

console.log(getUser());
deleteUser(user1);

