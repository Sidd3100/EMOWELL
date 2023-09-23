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

// for (let i = 0; i < lines.length; i++) {
//   setTimeout(() => {
//     typewriter(lines[i], `line${i + 1}`, 100);
//   }, i * 2000); // Adjust the delay as needed
// }
