console.log(`
# assert`);

// assertion은 casting과 비슷한 개념임 
let assertion:any = 'test';
let assertionCount:number = (<string>assertion).length;
let assertionCount2:number = (assertion as string).length;

console.log(assertionCount);

