// element.cloneNode
// tham số truyền vào true thì sẽ clone toàn bộ nội dung thẻ
// tham số truyền vào là false sao chép thẻ nhưng ko có nội dung bên trong
const container = document.querySelector(".container");
const cloneNode = container.cloneNode();
const body = document.body;
body.appendChild(cloneNode);
