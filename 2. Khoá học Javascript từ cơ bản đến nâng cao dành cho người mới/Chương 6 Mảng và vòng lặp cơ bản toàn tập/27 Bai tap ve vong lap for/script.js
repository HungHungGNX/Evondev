const numbers = [1, 2, 3, 4, 5, 6];

// Copy mang su dung vong lap for
copyArr = [];
for (let i = 0; i < numbers.length; i++) {
    copyArr.push(numbers[i]);
}

console.log(copyArr);
// Đảo ngược từ "i love" -> "evol I"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
}

console.log(result);
