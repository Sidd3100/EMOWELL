// form loading animation

const form = [...document.querySelector(".form").children];

form.forEach((item, i) => {
  setTimeout(() => {
    item.style.opacity = 1;
  }, i * 100);
});

let homebtn = document.querySelector(".home-btn");

homebtn.addEventListener("click", function () {
  setTimeout(() => {
    document.location.href = "index.html";
  }, 300);
});
