const dishes = document.querySelectorAll(".dish");

dishes.forEach((dish) => {
  dish.addEventListener("click", () => {
    fetch("..\\data\\dishes.json")
      .then((response) => response.json())
      .then((data) => {
        data.dishes.forEach((element) => {
          if (Number(dish.id) === element.id) {
            console.log(element);
            localStorage.setItem("dish", JSON.stringify(element));
            window.open(`..\\details.html`, `_self`);
          }
        });
      })
      .catch((error) => console.error(error));
  });
});
