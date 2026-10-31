"use strict";

/* Hämta första fältgruppen */

/*FORMULÄR*/
const nameInput = document.querySelector("#name"); /*Formulär: Namn*/
const emailInput = document.querySelector("#email"); /*Formulär: Email*/
const messageInput = document.querySelector("#message"); /*Formulär: Meddelandefält*/
const contactForm = document.querySelector("#contact-form"); /*Formulärets form-element*/

/*Hämta fältet och spara texten i en variabel*/
contactForm.addEventListener ("submit", function(event) {
    event.preventDefault();
    const message = messageInput.value;
});