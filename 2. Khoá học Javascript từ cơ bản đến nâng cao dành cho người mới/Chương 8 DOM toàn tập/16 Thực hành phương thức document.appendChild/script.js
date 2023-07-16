const body = document.body;
const div = document.createElement("div");
body.appendChild(div);
div.classList.add("container");
div.className = "container app";
div.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolores doloremque. Quaerat enim ut odit delectus quia cumque similique accusantium laudantium adipisci unde. Debitis quae quam eligendi est ipsam aliquam.";
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "evondev");
// Bài tập tạo ra HTML như đã minh họa ở file HTML
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
cardImage.setAttribute("src", "http//");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
body.appendChild(card);
