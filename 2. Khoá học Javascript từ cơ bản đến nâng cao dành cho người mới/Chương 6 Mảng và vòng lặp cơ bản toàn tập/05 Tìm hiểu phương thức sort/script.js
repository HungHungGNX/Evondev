// Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 9999, 100000, 5, 09];
console.log(random.sort()); //[ 1, 100000, 5, 9, 9999 ]
// custom lại sort sort(function)
console.log(random.sort((a, b) => (a > b ? 1 : -1))); //[]
