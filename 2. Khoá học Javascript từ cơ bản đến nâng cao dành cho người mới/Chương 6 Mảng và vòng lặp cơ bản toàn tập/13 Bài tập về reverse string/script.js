// 1. Đảo ngược một chuỗi. Ví dụ: "My name is evondev" -> "evondev is name My"
const reverseString = function (str) {
    if (!str) return false;
    return str.split(" ").reverse(" ").join(" ");
};

const str = "My name is Nam";
console.log(reverseString(str));
