// 1. selector.classList.add("a,b,c")
const container = document.querySelector(".container");
container.classList.add("container");
// 2. selector.classList.remove("")
container.classList.remove("container");
// 3 selector.classList.container("is-active")
console.log(container.classList.contains("container"));
console.log(container.classList.contains("is-active"));
// 4 selector.classList.toggle("is-active")
container.classList.toggle("is-active");
// 5 selector.className -> trả ra chuỗi các class của selector
const title = document.querySelector(".title");
console.log(title.className);
title.className = "title";
