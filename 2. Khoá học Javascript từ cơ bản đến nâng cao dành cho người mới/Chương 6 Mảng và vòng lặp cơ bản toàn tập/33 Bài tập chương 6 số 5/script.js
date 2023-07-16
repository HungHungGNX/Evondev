// Cho một chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi

// function countCharacters(str) {
//     let count = 0;
//     for (let item of str) {
//         if (["u", "e", "o", "a", "i"].some((element) => item === element))
//             count++;
//     }
//     return count;
// }

// countCharacters("evondev");

function countVowels(str) {
    let count = 0;
    const characters = "ueoai";
    for (let c of str.toLowerCase()) {
        if (characters.includes(c)) count += 1;
    }
    return count;
}

console.log(countVowels("evondev"));
