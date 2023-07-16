/**
 * isNaN
 * Number.isNaN
 * */

// NaN -> Not a Number
console.log(isNaN("this is a string")); // true
console.log(isNaN("12345")); // false
console.log(isNaN(NaN)); // true

// Number.isNaN
console.log(Number.isNaN("12344")); // false
console.log(Number.isNaN(NaN)); // true
