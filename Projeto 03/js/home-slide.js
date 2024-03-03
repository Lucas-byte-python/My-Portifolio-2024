const changeSlideButtons = document.querySelectorAll("[data-change-slide-button]");
const slides = document.querySelector(".slides");

let indexActiveSlide = 0;

function showSlide(index) {
  const activeSlide = slides.querySelector("[data-active]");
  activeSlide.removeAttribute("data-active");

  slides.children[index].dataset.active = true;
}

function nextSlide() {
  indexActiveSlide = (indexActiveSlide + 1) % slides.children.length;
  showSlide(indexActiveSlide);
}

function prevSlide() {
  indexActiveSlide = (indexActiveSlide - 1 + slides.children.length) % slides.children.length;
  showSlide(indexActiveSlide);
}

changeSlideButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.changeSlideButton === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
  });
});

// Adicionando funcionalidade de troca automática a cada 3000 milissegundos (3 segundos)
const autoChangeSlideInterval = setInterval(nextSlide, 3000);

// Se desejar parar a troca automática quando um botão for clicado, você pode adicionar o seguinte código:
changeSlideButtons.forEach(button => {
  button.addEventListener("click", () => {
    clearInterval(autoChangeSlideInterval);
  });
});
