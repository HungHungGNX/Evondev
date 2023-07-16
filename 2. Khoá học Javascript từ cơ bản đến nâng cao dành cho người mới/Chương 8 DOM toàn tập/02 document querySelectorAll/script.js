// document.querySelectorAll("selector") -> trả về một NodeList chứa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dung forEach
// nó giống array là có thể loop nhưng không sử dụng được các phương thức như push, pop, shift
const multiNodes = document.querySelectorAll(".items");
console.log(multiNodes);
