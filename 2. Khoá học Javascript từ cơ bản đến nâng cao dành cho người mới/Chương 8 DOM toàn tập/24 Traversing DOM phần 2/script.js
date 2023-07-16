// 2. nextElementSibling: tìm tới phần tử kế tiếp và previousElementSibling: tìm tới phần tử đứng trước nó
const span = document.querySelector("span");
const previousLink = span.previousElementSibling;
console.log(span.nextElementSibling);
// 3 childNodes: trả về 1 mảng hết các node bên trong bao gồm textNodes vs children: trả về các node không bao gồm textNodes
console.log(span.childNodes); // text <strong> text
console.log(span.children);
// 4. firstChild vs firstElementChild
console.log(span.firstChild); // text
console.log(span.firstElementChild); // <strong>
// 5. lastChild vs lastElementChild
console.log(span.lastChild); // text
console.log(span.lastElementChild); // <strong>
// 6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
