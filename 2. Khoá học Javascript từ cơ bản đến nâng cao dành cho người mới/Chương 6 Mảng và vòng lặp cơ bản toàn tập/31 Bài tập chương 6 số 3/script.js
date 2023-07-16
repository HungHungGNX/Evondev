// Đảo ngược số

function checkNumber(number) {
    if (isNaN(number)) return false;
    return typeof number === "number";
}

function reverseNumber(number) {
    if (!checkNumber(number)) return "Not Number";
    return (
        parseInt(number.toString().split("").reverse().join("")) *
        Math.sign(number)
    );
}

console.log(reverseNumber(456));
