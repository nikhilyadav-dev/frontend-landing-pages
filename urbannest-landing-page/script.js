const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector(".navbar");
console.log(navbar);

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("active");
  navbar.classList.toggle("active");
});
