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

enum Role {
    SuperAdmin,
    GroupAdmin,
    BackupAdmin
};

interface Admin extends User {
    role: Role
};

const admin: Admin = {
    name: 'admin',
    id: 10,
    role: Role.BackupAdmin
};

console.log(admin);


console.log(`
# class`);

abstract class AbstractUser implements User {
    name: string;
    id : number;    
    protected age: number;

    constructor(name:string, id:number, age:number) {
        this.name = name;
        this.id = id;
        this.age = age;
    }

    describe():void {
        console.log(`user's name is ${this.name}. user's id is ${this.id}. age is ${this.age}.`);
    }

    abstract delete():void;
}

class UserAccount extends AbstractUser {

    delete() {
        console.log(`${this.name} is deleted!`);
    }
}

function deleteUser1(user:User) {
    console.log(`delete ${user.name}...`);
}

function deleteUser2(user:AbstractUser) {
    user.delete();
}

let user1:UserAccount = new UserAccount('hojin',12, 40);

deleteUser1(user1);
deleteUser2(user1);
user1.describe();

// console.log(user1.age); // Property 'age' is protected and only accessible within class 'AbstractUser' and its subclasses.