function toggleListVisibility(list, button) {
  list.forEach((element) => {
    if (element.style.display === "flex") {
      element.style.display = "none";
      button.style.backgroundColor = "white";
      button.style.color = "rgb(247, 131, 7)";
    } else {
      element.style.display = "flex";
      button.style.backgroundColor = "rgb(247, 131, 7)";
      button.style.color = "white";
    }
  });
}

const pizzaButton = document.querySelector("[data-pizzaButton]");
const pizzaList = document.querySelectorAll("[data-pizza]");

const setButton = document.querySelector("[data-setButton]");
const setList = document.querySelectorAll("[data-set]");

const ffButton = document.querySelector("[data-ffButton]");
const ffList = document.querySelectorAll("[data-ff]");

const spButton = document.querySelector("[data-spButton]");
const spList = document.querySelectorAll("[data-sp]");

const salButton = document.querySelector("[data-salButton]");
const salList = document.querySelectorAll("[data-sal]");

pizzaButton.addEventListener("click", () =>
  toggleListVisibility(pizzaList, pizzaButton)
);

setButton.addEventListener("click", () =>
  toggleListVisibility(setList, setButton)
);

ffButton.addEventListener("click", () =>
  toggleListVisibility(ffList, ffButton)
);

spButton.addEventListener("click", () =>
  toggleListVisibility(spList, spButton)
);

salButton.addEventListener("click", () =>
  toggleListVisibility(salList, salButton)
);
