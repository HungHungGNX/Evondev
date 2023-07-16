// Đảo ngược một chuỗi bao gồm các kí tự
const reverseStr = function (str) {
    if (!str) return null;
    return str
        .split(" ")
        .map((item) => item.split("").reverse().join(""))
        .reverse()
        .join(" ");
};

const str = "I love";
console.log(reverseStr(str));
