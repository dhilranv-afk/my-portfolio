// Project details toggle
const buttons = document.querySelectorAll(".details-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const details = button.nextElementSibling;

    details.classList.toggle("show");

    if (details.classList.contains("show")) {
      button.textContent = "Hide Details";
    } else {
      button.textContent = "Show Details";
    }

  });
});
