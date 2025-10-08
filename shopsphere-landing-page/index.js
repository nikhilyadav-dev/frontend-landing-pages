const tooglerBtn = document.querySelector(".toggler");
const navList = document.querySelector(".nav-ul");
tooglerBtn.addEventListener("click", () => {
  tooglerBtn.classList.toggle("active");
  navList.classList.toggle("active");
});
