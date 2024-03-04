const about = document.querySelector(".about");
const work = document.querySelector(".work");
const contact = document.querySelector(".contact");

about.addEventListener("mouseenter", function () {
  this.textContent = "About";
});
about.addEventListener("mouseleave", function () {
  this.textContent = "Hello";
});
work.addEventListener("mouseenter", function () {
  this.textContent = "Work";
});
work.addEventListener("mouseleave", function () {
  this.textContent = "I am";
});
contact.addEventListener("mouseenter", function () {
  this.textContent = "Contact";
});
contact.addEventListener("mouseleave", function () {
  this.textContent = "Taras";
});
