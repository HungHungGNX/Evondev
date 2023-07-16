// innerHTML -> lấy ta một nội dùng selector bao gồm cả HTML
const spinner = document.querySelector("#spinner");
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">hello html</div>`;
