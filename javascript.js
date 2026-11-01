"use strict";

console.log("JavaScript är laddat");

/* Hämta första fältgruppen */

/*HÄMTAT FORMULÄRINNEHÅLL*/
const contactForm = document.querySelector("#contact-form"); /*Hela formuläret*/

const nameInput = document.querySelector("#name"); /*Formulär: Namn, inmatningsfält*/
const emailInput = document.querySelector("#email"); /*Formulär: Email, inmatningsfält*/
const messageInput = document.querySelector("#message"); /*Formulär: Meddelandefält, inmatningsfält*/

const errorList = document.querySelector(".error-list"); /*Formulär: Visa felmeddelande*/

const submitForm = document.querySelector("#submit"); /*Formulär: Submit-knapp*/

/*En funktion som visar felmeddelanden*/

// errorList.textContent ="Här kommer felmeddelande att visas."



// Kontrollera formulärets obligatoriska fält
const name = nameInput.value.trim();
const email = emailInput.value.trim();
const message = messageInput.value.trim();



/*En funktion som samlar det som blivit fel och körs om fälten är tomma*/

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();


  errorList.textContent = "";

  if (name === "") {
    errorList.textContent = "Namn saknas. Vänligen fyll i namn.";


  if (email === "") {
    errorList.textContent = "E-mail saknas. Vänligen fyll i e-postadress.";


  if (message === "") {
    errorList.textContent = "Meddelandefältet tomt. Vänligen fyll i meddelande.";
  
  }}}}
);


/*
  if (email === "") {
    errorList.textContent("E-mail saknas.");
  }

  if (message === "") {
    errorList.textContent("Meddelandefält tomt. Vänligen fyll i fältet.");
  }
*/

































/*-------------------------------------------------------------------*/





/*Hämta fältet och spara texten i en variabel*
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = messageInput.value;
  });
}


/*Animerad navigation*

menuClick.addEventListener("click", function(){
  menu.classList.toggle("change");
  menu.classList("open");
})



/*PYSSELSTUND*
const meetingButton = document.querySelector(".meeting-link"); /*Läs mer-knapp*





/*
menuButton.addEventListener("click", function(){
   menu.classList.toggle("open");
  *

const menuButton = document.querySelector(".menu-toggle"); /*Navigeringens menyknapp
const menu =document.querySelector(".menu"); /*Navigeringsmenyn */