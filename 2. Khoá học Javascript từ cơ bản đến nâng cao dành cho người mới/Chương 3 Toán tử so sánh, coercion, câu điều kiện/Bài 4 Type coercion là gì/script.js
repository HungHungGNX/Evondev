// type coercion
// + - * /
console.log(10 + "10"); // 1010
console.log(10 - "10"); // 0
console.log(null + ""); // "null"
console.log(null + undefined); // NaN
console.log("" - 1); // - 1
console.log(false - true); // -1
console.log(false + true); // 1
console.log(null + 10); //10
