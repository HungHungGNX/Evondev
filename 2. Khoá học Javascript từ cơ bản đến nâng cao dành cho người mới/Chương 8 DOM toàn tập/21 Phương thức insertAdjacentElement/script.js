//2. element.insertAdjacentElement(position, node)
const h3 = document.querySelector("h3");
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);
