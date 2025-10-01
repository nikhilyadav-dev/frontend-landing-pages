const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const favBtns = document.querySelectorAll(".fav-btn");
console.log(favBtns);

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("active");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", (e) => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

for (let btn of favBtns) {
  btn.addEventListener("click", () => {
    console.log(btn);
    btn.classList.toggle("active");
    console.log("clicked");
  });
}

// favBtns.forEach(($toggleBtn) => {
//   $toggleBtn.addEventListener("click", () => {
//     $toggleBtn.classList.toggle("active");
//   });
// });
