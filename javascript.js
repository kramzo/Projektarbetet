"use strict";

console.log("JavaScript är laddat");

/*-----------------------------*/

/*HÄMTAT FORMULÄRINNEHÅLL*/
const contactForm = document.querySelector("#contact-form"); /*Hela formuläret*/

const nameInput = document.querySelector("#name"); /*Formulär: Namn, inmatningsfält*/
const emailInput = document.querySelector("#email"); /*Formulär: Email, inmatningsfält*/
const messageInput = document.querySelector("#message"); /*Formulär: Meddelandefält, inmatningsfält*/

const errorList = document.querySelector(".error-list"); /*Formulär: Visa felmeddelande*/

/*HÄMTAT NAVIGERINGENS KNAPPMENY*/
const menuToggle = document.querySelector(".menu-toggle"); /*Navigering, knappmeny*/
const menu = document.querySelector(".menu"); /*Navigering*/

/*-----------------------------*/

/*FORMULÄRHANTERING*/

if (contactForm) {

contactForm.addEventListener("submit", function() {
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

    errors.push("Fyll i giltig e-mailadress.");
  
  }

  if (message === "") { //Det här görs om meddelandefältet är tomt.
    errors.push("Meddelandefältet tomt. Vänligen fyll i meddelande.");
  }


  errorList.textContent = errors.join(" "); //join(" ") sätter ihop meddelandena till en text med mellanslag mellan dem = "”Sätt felrutans text till felmeddelandena, ihopkopplade med mellanslag.”"

});

  /*Återställer felmeddelandena*/
contactForm.addEventListener("reset", function() {
  errorList.textContent = "";

});

}

/*-----------------------------*/

/*NAVIGERINGMENY*/

menuToggle.addEventListener("click", function(event) {
 menuToggle.classList.toggle("change"); // Knappens streck blir ett X.
menu.classList.toggle("open");         // Navigeringen visas eller döljs.
});