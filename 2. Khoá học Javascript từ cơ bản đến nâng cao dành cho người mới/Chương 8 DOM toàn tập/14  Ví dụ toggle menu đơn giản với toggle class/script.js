const btn_active = document.querySelector(".btn-active");
const menu_item = document.querySelector(".menu-item");

btn_active.addEventListener("click", () => {
    menu_item.classList.toggle("active");
});
