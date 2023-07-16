// Phương thức reduce ( .reduce((prev,next) => {},init value)  )
const listNumber = [1, 2, 4, 5, 6, 7, 8, 9];
const totalNumber = listNumber.reduce((prev, next) => prev + next, 0);
console.log(totalNumber);
