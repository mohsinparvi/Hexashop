const hambuger = document.getElementById("hamburger");
const navUl = document.getElementById(".nav-ul");
hambuger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
