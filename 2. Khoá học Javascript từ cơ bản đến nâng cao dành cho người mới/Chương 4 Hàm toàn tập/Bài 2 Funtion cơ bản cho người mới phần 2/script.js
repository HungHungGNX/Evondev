function add(a, b) {
    return a + b;
}

let sum = add;
// gán function add cho biến sum nhưng chưa được gọi

function average(a, b, fn) {
    const total = fn(a, b);
    return total / 2;
}

let result = average(200, 300, sum);
