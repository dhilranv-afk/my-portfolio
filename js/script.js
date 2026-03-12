/* Typing Animation */

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


/* Project Modal */

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const buttons = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-modal");

const projects = {

portfolio:{
title:"Portfolio Website",
description:"Responsive portfolio built with HTML, CSS and JavaScript."
},

calculator:{
title:"JavaScript Calculator",
description:"A calculator app demonstrating DOM manipulation and event handling."
},

future:{
title:"Future Project",
description:"More projects will be added here as I continue learning."
}

};


buttons.forEach(button => {

button.addEventListener("click",()=>{

const project = button.dataset.project;

modalTitle.textContent = projects[project].title;
modalDescription.textContent = projects[project].description;

modal.style.display = "flex";

});

});


closeModal.addEventListener("click",()=>{
modal.style.display="none";
});


window.addEventListener("click",e=>{
if(e.target === modal){
modal.style.display="none";
}
});


/* Contact Form Validation */

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit",(e)=>{

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const text=document.getElementById("message").value.trim();

if(name==="" || email==="" || text===""){

e.preventDefault();

message.textContent="Please complete all fields.";
message.style.color="red";

}else{

message.textContent="Message sent successfully!";
message.style.color="green";

}

});
