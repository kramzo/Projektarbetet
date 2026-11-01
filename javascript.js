"use strict";

/* Hämta första fältgruppen */

/*FORMULÄR*/
const nameInput = document.querySelector("#name"); /*Formulär: Namn*/
const emailInput = document.querySelector("#email"); /*Formulär: Email*/
const messageInput = document.querySelector("#message"); /*Formulär: Meddelandefält*/
const contactForm = document.querySelector("#contact-form"); /*Formulärets form-element*/
const menuButton = document.querySelector(".menu-toggle"); /*Navigeringens menyknapp*/
const menu =document.querySelector(".menu"); /*Navigeringsmenyn*/

/*Hämta fältet och spara texten i en variabel*/
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = messageInput.value;
  });
}


/*Animerad navigation*/

menuButton.addEventListener("click", function(){
  event.preventDefault;
  menu.classList.toggle("change");

})

"use strict";

/* Hämta första fältgruppen */

/*FORMULÄR*/
const nameInput = document.querySelector("#name"); /*Formulär: Namn*/
const emailInput = document.querySelector("#email"); /*Formulär: Email*/
const messageInput = document.querySelector("#message"); /*Formulär: Meddelandefält*/
const contactForm = document.querySelector("#contact-form"); /*Formulärets form-element*/
const menuButton = document.querySelector(".menu-toggle"); /*Navigeringens menyknapp*/
const menu =document.querySelector(".menu"); /*Navigeringsmenyn*/

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

})

console.log();

/*
menuButton.addEventListener("click", function(){
   menu.classList.toggle("open");
  */




/*
menuButton.addEventListener("click", function(){
   menu.classList.toggle("open");
  */

