const toys = ["ball", "sword", "magic", "water", "fire"];
const [ball, ...rest] = toys;
console.log(rest);

function demo(a, ...rest) {
    console.log(a, rest);
}

demo(1, 2, 3, 4, 5);
