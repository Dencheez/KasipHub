
const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

