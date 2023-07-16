// date string
const now = new Date();
console.log(now.toDateString()); //Sun Mar 05 2023
console.log(now.toTimeString()); //13:46:05 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString()); // m/dd/yyyy -> 5/3/2023
console.log(now.toLocaleDateString("vi-VI")); // 5/3/2023
console.log(now.toISOString()); //2023-03-05T06:46:05.364Z
