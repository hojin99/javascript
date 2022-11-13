console.log(`
# enum`);

enum Color {
    Red,
    Black,
    Brown,
    Blue
}

let color:Color = Color.Black;
// color = 'Blue'; //Type '"Blue"' is not assignable to type 'Color'.
color = Color.Blue;

console.log(color);

enum Sports {
    Baseball = 101,
    Soccer = 201,
    Golf = 301
}

console.log(Sports.Baseball);
console.log(Sports[101]);






