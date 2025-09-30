const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("active");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", (e) => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});
