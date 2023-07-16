// splice xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "pig", "chicken"];
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xóa hoặc thay thế
const pets2 = splice(0, 4); // [] emty array
console.log(pets2);
// splice(start, deleteCount, item1, item2, item3, itemN):là số lượng phần tử muốn xóa hoặc thay thế
const pets3 = pets.splice(0, 2, "dinasour", false, 100);
console.log(pets3);
