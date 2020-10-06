// pegar os elementos do DOM.
const sliderItems = document.querySelector(".slider-items");
const sliderImages = document.querySelectorAll(".slider-items img");
const sliderButtons = document.querySelectorAll(".slider-buttons button");

let counter = 0;

// função para mudar de imagens.
const change = (index = 1, heightSize = sliderItems.clientHeight) =>
  (sliderItems.style.transform = `translateY(${-heightSize * index}px)`);

// adicionamos os eventos.
sliderButtons.forEach((_button, index) => {
  _button.addEventListener("click", () =>
    change(index, sliderItems.clientHeight)
  );
});

// const finish = () => counter == sliderButtons.length;

// setInterval(
//   () => change(finish() ? (counter = 0) : counter++, sliderItems.clientHeight),
//   1000
// );