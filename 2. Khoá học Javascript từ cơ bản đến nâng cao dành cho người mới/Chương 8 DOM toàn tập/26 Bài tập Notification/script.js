const createNotification = function (title = "Welcome my friend") {
    const template_noti = `<div class="notification">
    <img
        src="https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        alt=""
        class="noti-img"
    />
    <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Amet, recusandae corrupti error.
        </p>
    </div>
</div>`;

    document
        .querySelector(".app")
        .insertAdjacentHTML("beforeend", template_noti);
};

const random_data = [
    "Welcome to javascript course",
    "Welcome to this tutorial",
    "Today is a good day",
];

let last_data;

const timer = setInterval(() => {
    const noti = document.querySelector(".notification");
    if (noti) {
        noti.parentElement.removeChild(noti);
    }

    const title_random =
        random_data[Math.floor(Math.random() * random_data.length)];
    if (last_data != title_random) {
        createNotification(title_random);
        last_data = title_random;
    }
}, 4000);
