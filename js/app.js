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

// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Replace 'aboutthing.json' with the path to your Lottie JSON file
  const animationPath = "aboutthing.json";

  // Replace 'lottie-container' with the ID of your container element
  const container = document.getElementById("lottie-container");

  // Load and play the Lottie animation
  lottie.loadAnimation({
    container: container,
    renderer: "svg", // Use 'svg' or 'canvas' depending on your preference
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to start playing the animation immediately
    path: animationPath,
  });
});
