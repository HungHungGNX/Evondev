// Phương thức map duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];

const listNumberAfterChange = listNumber.map((item, index, array) => item * 2);
console.log(listNumberAfterChange);
