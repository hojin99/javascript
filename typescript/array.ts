console.log(`
# type (array)`);

let members = ['a','b','c']; // 암시적으로 string[]로 인식됨

// members = [1,2,3]; //  Type 'number' is not assignable to type 'string'.

let nums:number[];
let strings:string[] = ['a','b','c'];
let bools:boolean[] = [true, false, true];
let anys:any[];

// nums = ['a','b'];  // Type 'string' is not assignable to type 'number'
nums = [1,2,3];

let ret:number = nums.reduce((before, current) => {
    return before + current;
});
console.log(ret);

let strings_out:string[] = strings.map((value,index) =>{
    return value.toUpperCase();
});
console.log(strings_out);

anys =[1,'2',true];
