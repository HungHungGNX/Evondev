// 1. Viết function so sánh 2 số a, b tìm số lớn hơn

function findMax(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Please enter valid number";
    }

    return Math.max(a, b);
}

let a = 10,
    b = 20;

console.log(findMax(a, b));
