// Phương thức some duyệt qua tất cả các phần tử trong mảng nếu bất kỳ phần tử nào trong mảng thỏa mãn điều kiện đặt ra thì trả về true hoặc trả về false
let numbers = [1, 2, 3, 5, 6, 7, 8, 6];
let result1 = numbers.some((item) => item > 1);

// Phương thức every duyệt qua tất cả các phần tử, nó trả về true khi tất cả các phần tử trong mảng thỏa mãn điều kiện đặt ra
let result2 = numbers.some((item) => item > 190);
