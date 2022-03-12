const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});

// reset cards
function removeActiveClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });

  return;
}
