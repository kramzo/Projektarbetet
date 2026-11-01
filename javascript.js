"use strict";

console.log("JavaScript är laddat");

/* Hämta första fältgruppen */

/*HÄMTAT FORMULÄR*/
const contactForm = document.querySelector("#contact-form"); /*Formulärets form-element*/


const nameInput = document.querySelector("#name"); /*Formulär: Namn*/
const emailInput = document.querySelector("#email"); /*Formulär: Email*/
const messageInput = document.querySelector("#message"); /*Formulär: Meddelandefält*/




// Array som används för felmeddelanden
let errors = [];

// Array som innehåller sparad historik
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
  errors = [];

  
// Kontrollera formulärets obligatoriska fält
const name = nameInput.value.trim();
const email = emailInput.value.trim();
const message = messageInput.value.trim();


  if (name === "") {
    errors.push("Namn saknas.");
  }

  if (email === "") {
    errors.push("E-mail saknas.");
  }

  if (message === "") {
    errors.push("Meddelandefält tomt. Vänligen fyll i fältet.");
  }

//Visa eventuella felmeddelanden
  displayErrors();

//Returnera resultatet (true eller false) av valideringen
return error

const filledForm = {
  name: name,
  email: email,
  message: message,
};



































/*-------------------------------------------------------------------*/





/*Hämta fältet och spara texten i en variabel*/
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = messageInput.value;
  });
}


/*Animerad navigation*/

menuClick.addEventListener("click", function(){
  menu.classList.toggle("change");
  menu.classList("open");
})



/*PYSSELSTUND*/
const meetingButton = document.querySelector(".meeting-link"); /*Läs mer-knapp*/





/*
menuButton.addEventListener("click", function(){
   menu.classList.toggle("open");
  */

const menuButton = document.querySelector(".menu-toggle"); /*Navigeringens menyknapp*/
const menu =document.querySelector(".menu"); /*Navigeringsmenyn*/