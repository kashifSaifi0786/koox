const slides = document.querySelectorAll(".slide");
const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".line");
const navSection = document.querySelector(".nav-section");

burger.addEventListener("click", () => {
  navSection.classList.toggle("active");
  lines[0].classList.toggle("active");
  lines[1].classList.toggle("active");
  lines[2].classList.toggle("active");
});
