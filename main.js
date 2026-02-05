// Simple animation on load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
const inputs = document.querySelectorAll("input, textarea, select");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.parentElement.style.transform = "scale(1.02)";
  });

  input.addEventListener("blur", () => {
    input.parentElement.style.transform = "scale(1)";
  });
});

const form = document.querySelector(".project-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Project request sent successfully 🚀");
  });
}
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo-hero img");
  const scrollY = window.scrollY;

  logo.style.opacity = Math.max(0, 0.08 - scrollY / 1200);
});
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo-hero img");
  if (!logo) return;

  const maxScroll = 500; // بعد قد ايه يختفي
  const scrollY = window.scrollY;

  let opacity = 0.08 - scrollY / maxScroll;

  if (opacity < 0) opacity = 0;

  logo.style.opacity = opacity;
});
const filterBtns = document.querySelectorAll('.portfolio-filters button');
const cards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let budget = document.getElementById("budget").value;
  let message = document.getElementById("message").value;

  let phoneNumber = "201025910607"; // رقمك بدون +

  let whatsappMessage =
    `New Message from Website:%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Subject: ${subject}%0A` +
    `Budget: ${budget}%0A` +
    `Message: ${message}`;

  let whatsappURL =
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});