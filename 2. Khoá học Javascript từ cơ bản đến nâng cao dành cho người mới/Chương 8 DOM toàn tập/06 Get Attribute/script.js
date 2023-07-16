// selector.getAttribute("attribute") -> lấy ra giá trị của attribute selector
// attribute -> thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");

li.forEach((item) => {
    console.log(item.getAttribute("class"));
});

console.log(li);
