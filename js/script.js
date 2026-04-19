// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Dark Mode
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// Typing Effect
const words = ["Web Developer", "Frontend Developer", "JavaScript Enthusiast"];
let i = 0, j = 0, deleting = false;
const typing = document.getElementById("typing");

function type() {
  const word = words[i];

  typing.textContent = word.substring(0, j);

  if (!deleting) {
    j++;
    if (j > word.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

window.addEventListener("load", type);

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width = (scrollTop / height) * 100 + "%";
});

// Project Filter
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      card.style.display =
        filter === "all" || card.dataset.category === filter
          ? "block"
          : "none";
    });
  });
});

// Form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent!");
});
