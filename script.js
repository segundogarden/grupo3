document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".produtos-scroll");
  const btnEsquerda = document.querySelector(".seta.esquerda");
  const btnDireita = document.querySelector(".seta.direita");

  const scrollAmount = 250; // pixels que vai rolar por clique

  btnDireita.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  btnEsquerda.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
