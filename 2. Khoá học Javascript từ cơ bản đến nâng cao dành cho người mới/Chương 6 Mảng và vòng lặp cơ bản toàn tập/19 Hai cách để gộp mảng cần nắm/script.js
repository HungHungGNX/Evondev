// Có 2 cách để gộp mảng
// 1. array1.concat(array2, array3, array4)
const array1 = [1, 2];
const array2 = [2, 3];
const array3 = [4, 5];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// 2. spread operator
// [..array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray3);
