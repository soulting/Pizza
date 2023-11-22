const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const offersButton = document.querySelector("#offers");
const contactButton = document.querySelector("#contact");

const firstPanel = document.querySelector(".first-panel");
const secondPanel = document.querySelector(".second-panel");
const thirdPanel = document.querySelector(".third-panel");
const fourthPanel = document.querySelector(".fourth-panel");

homeButton.addEventListener("click", function () {
  firstPanel.scrollIntoView({ behavior: "smooth" });
});

menuButton.addEventListener("click", function () {
  secondPanel.scrollIntoView({ behavior: "smooth" });
});

offersButton.addEventListener("click", function () {
  thirdPanel.scrollIntoView({ behavior: "smooth" });
});

contactButton.addEventListener("click", function () {
  fourthPanel.scrollIntoView({ behavior: "smooth" });
});
