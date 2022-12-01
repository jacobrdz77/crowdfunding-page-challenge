// *** NAV

const closeBtn = document.querySelector(".nav__menu-close");
closeBtn.addEventListener("click", handleCloseNav);
const navBackDrop = document.querySelector(".nav--mobile__backdrop");
navBackDrop.addEventListener("click", handleCloseNav);

const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", handleOpenNav);

function handleCloseNav() {
  const navMobile = document.querySelector(".nav");

  navMobile.classList.remove("nav--mobile--state-open");
  navBackDrop.classList.remove("nav--mobile__backdrop--state-open");
}

function handleOpenNav() {
  const navMobile = document.querySelector(".nav");

  navMobile.classList.add("nav--mobile--state-open");
  navBackDrop.classList.add("nav--mobile__backdrop--state-open");
}
