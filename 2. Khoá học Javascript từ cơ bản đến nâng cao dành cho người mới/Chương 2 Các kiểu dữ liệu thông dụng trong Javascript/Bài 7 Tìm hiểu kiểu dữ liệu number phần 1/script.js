// Số nguyên: 1 2 3 999 33 444
// Số thập phân: 3,4 5,8 -> 3.4, 5.8
/**
 * parseInt
 * parseFloat
 * toFixed
 * isInteger
 * Math.floor
 * Math.round
 * Math.ceil
 * Math.random
 * Math.abs
 * Math.pow
 * Math.max
 * Math.min
 * isNaN
 * Number.isNaN
 * */
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5";
const number2 = "4.8";
// Convert string to number
console.log(parseInt(number1)); //5
console.log(parseInt(number2)); // 4.8

// Math
const number3 = -10;
// Trị tuyệt đối
console.log(Math.abs(number3));
// Làm tròn lên
console.log(Math.ceil(number3));
// Làm tròn xuống
console.log(Math.floor(number3));
// Làm tròn gần nhất
console.log(Math.round(number3));
// toFixed(number) ví dụ 0.33333 -> 0.33
// toFixed(2)
console.log(parseFloat((1 / 3).toFixed(2)));
// Random
console.log(Math.random());
// Tìm max
console.log("Max:", Math.max(1, 2, 3, 4, -1));
// Tìm min
console.log("Min:", Math.min(1, 2, 3, 4, -1));
// Math.pow
console.log("Pow: ", Math.pow(2, 3));
