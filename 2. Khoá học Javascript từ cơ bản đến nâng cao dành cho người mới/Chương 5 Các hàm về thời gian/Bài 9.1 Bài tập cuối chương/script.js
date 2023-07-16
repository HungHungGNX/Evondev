// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi

// function checkNumber(number) {
//     if (isNaN(number)) {
//         return false;
//     }

//     return typeof Number(number) === "number";
// }

// let year_of_you = prompt("Enter year of you: ");

// let date = new Date();

// if (!checkNumber(year_of_you)) {
//     let age = date.getFullYear() - Number(year_of_you);
//     alert("Age: " + age);
// } else {
//     alert("Input error");
// }

// 2. Viết chương trình đếm ngược thời gian theo từng giây dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian - trung bình

function checkNumber(number) {
    if (isNaN(number)) {
        return false;
    }

    return typeof Number(number) === "number";
}

let input = prompt("Enter number: ");

if (checkNumber(input)) {
    setTimeout(() => {
        alert("Time out");
    }, Number(input));
} else {
    alert("input error");
}
