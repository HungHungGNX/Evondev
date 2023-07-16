const birthday = new Date(2000, 5, 15);
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2001);
birthday.getMonth(10);
birthday.setDate(23);
birthday.setHours(23);
birthday.getMinutes(12);
birthday.getSeconds(34);
console.log(`My birthday after update: ${birthday}`);
