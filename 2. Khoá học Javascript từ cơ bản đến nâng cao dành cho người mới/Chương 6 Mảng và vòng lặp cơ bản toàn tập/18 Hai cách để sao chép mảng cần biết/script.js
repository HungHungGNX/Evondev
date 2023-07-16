// Hai cách để clone mảng
let numbers = [1, 2, 3, 4, 5, 6];
// Cách 1: Sử dụng slice
let number_clone_1 = numbers.slice();
console.log(number_clone_1);
// Cách 2: Sử dụng spread operator
let number_clone_2 = [...numbers];
console.log(number_clone_2);
