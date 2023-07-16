// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 chio tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"

function fizzBuzz(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            console.log("FizzBuzz");
        } else if (i % 2 === 0) {
            console.log("Fizz");
        } else if (i % 3 == 0) {
            console.log("Buzz");
        }
    }
}

fizzBuzz(33);
