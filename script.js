const hamBtn = document.getElementById("hamburger-btn");
const links = document.querySelector(".links");
const menu = document.querySelector(".menu")

hamBtn.onclick = () => {
  links.classList.toggle("links__open");
  links.classList.toggle("links__close");
  hamBtn.classList.toggle("ham-btn-open");
}