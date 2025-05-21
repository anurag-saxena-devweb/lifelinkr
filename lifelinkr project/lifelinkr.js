window.addEventListener("scroll", function () {
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.classList.add("active");
    }
  });
});
/* FAQs Section */
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
  card.querySelector(".faq-question").addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (navbar) {
    navbar.classList.toggle("sticky", window.scrollY > 50);
  }
});
