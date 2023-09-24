// JavaScript to hide and show navbar on scroll
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.transform = "translateY(0)";
  } else {
    navbar.style.transform = "translateY(-100%)";
  }
  prevScrollPos = currentScrollPos;
};

// for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});


