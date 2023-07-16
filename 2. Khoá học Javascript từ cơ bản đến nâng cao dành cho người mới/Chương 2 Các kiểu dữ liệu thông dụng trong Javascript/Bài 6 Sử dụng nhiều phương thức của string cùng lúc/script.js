// Loại bỏ khoảng trống 2 bên, đưa tất cả về in hoa, thay chữ `Developer D` thành chữ `Developer and Designer`, sau đó repeat 2 lần
let str = "    Frontend Developer D     ";
str = str
    .trim()
    .replace("Developer D", "Developer and Designer")
    .toLocaleUpperCase()
    .repeat(2);
console.log(str);
