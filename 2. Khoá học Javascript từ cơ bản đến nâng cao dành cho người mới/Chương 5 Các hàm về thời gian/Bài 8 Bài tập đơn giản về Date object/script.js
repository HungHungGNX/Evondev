const myTime = new Date();
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth() + 1;
const myDate = myTime.getDate();
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);
