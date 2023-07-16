// Phương thức find nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa mãn điều kiện nào đó
const numbers = [1, 9999, 1000000, 5, 09];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
// Nếu không tìm thấy thì nó sẽ trả về kết quả là underfined
console.log(findYourNumber);
