console.log("javascript file has loaded")

const toggle = document.querySelector(".js-burger-toggle");
const menu = document.querySelector(".menu");
console.log(menu);

toggle.addEventListener("click", (e) => {
  let pressed = e.target.getAttribute("aria-expanded") === "true";
  e.target.setAttribute("aria-expanded", String(!pressed));
  menu.classList.toggle("show-menu");
});

