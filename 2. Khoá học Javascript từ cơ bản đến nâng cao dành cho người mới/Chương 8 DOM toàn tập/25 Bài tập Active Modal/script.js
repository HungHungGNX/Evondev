// Cách 1
// const modal = document.querySelector(".modal");
// const btn_close = document.querySelector(".btn-close");
// const modal_content = document.querySelector(".modal-content");

// if (modal) {
//     setTimeout(function () {
//         modal.classList.add("is-show");
//     }, 2000);
// }

// btn_close.addEventListener("click", () => {
//     modal.classList.remove("is-show");
// });

// modal.addEventListener("click", () => {
//     modal.classList.remove("is-show");
// });

// modal_content.addEventListener("click", (e) => {
//     e.stopImmediatePropagation();
// });

// Cách 2
// const template_modal = `<div class="modal">
// <div class="modal-content">
//     <div class="btn-close">
//         <i class="bx bx-message-square-x"></i>
//     </div>
//     <p class="modal-desc">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Vel incidunt hic in fugit delectus nemo quaerat
//         cupiditate repudiandae. Tempore iure deserunt
//         exercitationem magni ipsam. Delectus atque labore sunt
//         voluptate porro?
//     </p>
//     <div class="modal-action">
//         <button class="modal-submit">Confirm</button>
//         <button class="modal-cancel">Cancel</button>
//     </div>
// </div>
// </div>`;
// document.querySelector(".app").insertAdjacentHTML("beforeend", template_modal);

// Cách 3
const modal = document.createElement("div");
modal.classList.add("modal");
const modal_content = document.createElement("div");
modal_content.classList.add("modal-content");
modal.appendChild(modal_content);
const btn_close = document.createElement("div");
btn_close.classList.add("btn-close");
const icon_close = document.createElement("i");
icon_close.className = "bx bx-message-square-x";
btn_close.appendChild(icon_close);
modal_content.appendChild(btn_close);
const modal_desc = document.createElement("div");
modal_desc.classList.add("modal-desc");
modal_desc.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Vel incidunt hic in fugit delectus nemo quaerat
cupiditate repudiandae. Tempore iure deserunt
exercitationem magni ipsam. Delectus atque labore sunt
voluptate porro?`;
modal_content.appendChild(modal_desc);

document.querySelector(".app").appendChild(modal);

const modalApp = document.querySelector(".modal");

if (modalApp) {
    setTimeout(function () {
        modalApp.classList.add("is-show");
    }, 2000);
}
