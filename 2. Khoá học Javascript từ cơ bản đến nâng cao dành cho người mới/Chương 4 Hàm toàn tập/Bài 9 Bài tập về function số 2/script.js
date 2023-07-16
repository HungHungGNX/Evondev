// 2. In chữ cái đầu tiên trong chữ ví dụ: tuan -> Tuan, NAM -> nam

// Cách 1
function upperFirstLetter(str) {
    str = str.toLocaleLowerCase();
    return str.replace(str.charAt(0), str[0].toLocaleUpperCase());
}

let str = "NAM";
console.log(upperFirstLetter(str));
// Cách 2
function capitalize(word = "") {
    if (word.length === 0) return null;

    let new_word = word.charAt(0).toLocaleUpperCase();

    let other_word = word.toLocaleLowerCase().slice(1);

    return `${new_word}${other_word}`;
}

console.log(capitalize("TUAN"));
