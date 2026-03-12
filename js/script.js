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
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("message").value.trim();

  if (name === "" || email === "" || text === "") {

    event.preventDefault();

    message.textContent = "Please fill in all fields.";
    message.style.color = "red";

  } else {

    message.textContent = "Message sent successfully!";
    message.style.color = "green";

  }

});
