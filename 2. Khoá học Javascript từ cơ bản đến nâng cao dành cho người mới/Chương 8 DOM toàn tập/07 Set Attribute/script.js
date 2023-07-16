const link = document.querySelector(".action-link");
link.setAttribute("target", "_blank");

const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => {
    item.setAttribute("target", "_blank");
});
