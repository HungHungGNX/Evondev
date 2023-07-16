// Bài 1: Nhập vào số tuổi và kiểm tra nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp ngược lại thì không được vô coi

let age = prompt("Enter your age: ");
if (Number(age) >= 18) {
    console.log("You can watch movie");
} else {
    console.log("You cann't watch movie");
}

// Bài 2: Cho 2 số a và b, tìm ra số lớn hơn
const a = 5;
const b = 10;
if (a > b) {
    alert(`Max a and b is ${a}`);
} else if (a < b) {
    alert(`Max a and b is ${b}`);
} else {
    alert(`a = b`);
}
