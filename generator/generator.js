
function* generateSeq() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = generateSeq();

//
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// loop
for(let value of generateSeq()) {
    console.log(value);
}

// 전개 문법 가능
let seq = [0, ...generateSeq()];
console.log(seq);

