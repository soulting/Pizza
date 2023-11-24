const image = document.querySelector(".main-img");
const description = document.querySelector(".dish-description");
const ingredients = document.querySelector(".ingredients-list");

document.addEventListener("DOMContentLoaded", () => {
  const dish = JSON.parse(localStorage.getItem("dish"));
  image.src = `..\\foods\\${dish.image}`;

  description.textContent = dish.description;

  dish.ingredients.forEach((element) => {
    const newListElement = document.createElement("li");
    newListElement.textContent = element;
    ingredients.appendChild(newListElement);
  });
});
