const menuToggle = document.querySelector(".menu");
const nav = document.querySelector("#navList");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
