function changeSlide(index) {
  const curSlide = document.querySelector(`[data-activ="acv"]`);
  const curImg = document.querySelector(`[data-point="acv"]`);

  curSlide.dataset.activ = "nacv";
  curImg.dataset.point = "nacv";
  curImg.src = "images\\period.png";
  sliders.children[index].dataset.activ = "acv";
  points.children[index].querySelector("img").dataset.point = "acv";
  points.children[index].querySelector("img").src =
    "images\\period-selected.png";
}

function startSlides() {
  const slideChange = setInterval(() => {
    const curSlide = document.querySelector(`[data-activ="acv"]`);
    let index = [...sliders.children].indexOf(curSlide);
    let newIndex = index;
    if (index === 0) {
      newIndex = sliders.children.length - 1;
    } else {
      newIndex = newIndex - 1;
    }
    changeSlide(newIndex);
  }, 10000);
  return slideChange;
}

const prevButton = document.querySelector(".left-news");
const nextButton = document.querySelector(".right-news");
const sliders = document.querySelector(".slides");
const points = document.querySelector(".points");

let slideChange = startSlides();

prevButton.addEventListener("click", () => {
  const curSlide = document.querySelector(`[data-activ="acv"]`);
  let index = [...sliders.children].indexOf(curSlide);
  let newIndex = index;
  if (index === 0) {
    newIndex = sliders.children.length - 1;
  } else {
    newIndex = newIndex - 1;
  }

  changeSlide(newIndex);
});

nextButton.addEventListener("click", () => {
  const curSlide = document.querySelector(`[data-activ="acv"]`);
  let index = [...sliders.children].indexOf(curSlide);
  let newIndex = index;
  if (index === sliders.children.length - 1) {
    newIndex = 0;
  } else {
    newIndex = newIndex + 1;
  }

  changeSlide(newIndex);
});
