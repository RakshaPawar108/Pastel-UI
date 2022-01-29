const navbarOpenBtn = document.querySelector(".navbar-open-btn");
const navbarCloseBtn = document.querySelector(".navbar-close-btn");

const openNavbar = () => {
  document.querySelector(".navbar").classList.add("navbar-show");
};

const closeNavbar = () => {
  document.querySelector(".navbar").classList.remove("navbar-show");
};

navbarOpenBtn.addEventListener("click", openNavbar);
navbarCloseBtn.addEventListener("click", closeNavbar);
