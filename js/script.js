/* ===========================
   Project Details Toggle
=========================== */

const buttons = document.querySelectorAll(".details-btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const details = button.nextElementSibling;

    details.classList.toggle("show");

    if(details.classList.contains("show")){
      button.textContent = "Hide Details";
    } else {
      button.textContent = "Show Details";
    }

  });

});



/* ===========================
   Contact Form Validation
=========================== */

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event){

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === ""){

    event.preventDefault();

    formMessage.textContent = "Please complete all fields.";
    formMessage.style.color = "red";

  } else {

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

  }

});



/* ===========================
   Typed.js Animation
=========================== */

new Typed("#typing", {

  strings:[
    "Web Developer",
    "Programming Student",
    "Learning JavaScript",
    "Building Modern Websites"
  ],

  typeSpeed:60,
  backSpeed:40,
  loop:true

});
