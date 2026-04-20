// ===== Dark Mode =====
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// ===== Typing Effect =====
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
      return setTimeout(type, 1200);
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
type();

// ===== Scroll Progress =====
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      document.getElementById("progress-bar").style.width =
        (scrollTop / height) * 100 + "%";
      ticking = false;
    });
    ticking = true;
  }
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// ===== Intersection Observer (Reveal) =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ===== Project Filter =====
document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll(".card").forEach(card => {
      card.style.display =
        filter === "all" || card.dataset.category === filter
          ? "block"
          : "none";
    });
  });
});

// ===== Form =====
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent!");
});
