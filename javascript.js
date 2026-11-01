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
  // Alla kontroller ligger här inne.
  event.preventDefault();

  const name = nameInput.value.trim(); //Hämtar värdet och tar bort blanksteg
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const errors = []; //En tom array för att samla felmeddelanden

  errorList.textContent = "";

  if (name === "") { //Det här görs om namnetfältet är tomt.
    errors.push("Namn saknas. Vänligen fyll i namn."); //'push' sätter objektet sist i arrayen.
  }

  if (email === "") { //Det här görs om emailfältet är tomt.
    errors.push("E-mail saknas. Vänligen fyll i e-postadress.");
  
   } else if (!email.includes("@")) {

    errors.push("Fyll i giltig e-mailadress.")
  
  }

  if (message === "") { //Det här görs om meddelandefältet är tomt.
    errors.push("Meddelandefältet tomt. Vänligen fyll i meddelande.");
  }

  errorList.textContent = errors.join(" "); //join(" ") säter ihop meddelandena till en text med mellanslag mellan dem
});

































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