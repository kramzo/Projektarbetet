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

/*const cafeMenu = document.querySelector(".cafe-menu") /*Prislista för bakverk och dryck*/

/*-----------------------------*/

/*FORMULÄRHANTERING*/

if (contactForm) {

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



/*PRISLISTA, CAFE*/
function renderMenu(items) { //skapar funktion och sätter in alla 'items' i den
const cafeMenu = document.querySelector(".cafe-menu tbody");


//Skapar rader med celler: rader. textContent ger oss innehållet som är ett item i arrayen (namn) och pris
   if (cafeMenu) {
    for (let i = 0; i < items.length; i++) {
      const rad = cafeMenu.insertRow();
      rad.insertCell().textContent = items[i].namn;
      rad.insertCell().textContent = items[i].pris + " kr";
    }
  }
}

const items = [
  {
    namn: "Bryggkaffe, påtår ingår",
    pris: 35,
    kategori: "Dryck"
  },
  {
    namn: "Te",
    pris: 35,
    kategori: "Dryck"
  },
  {
    namn: "Varm choklad med vispgrädde",
    pris: 49,
    kategori: "Dryck"
  },
  {
    namn: "Kardemummabulle",
    pris: 39,
    kategori: "Bakverk"
  },
  {
    namn: "Chokladboll",
    pris: 29,
    kategori: "Bakverk"
  },
  {
    namn: "Blåbärspaj med vaniljsås",
    pris: 59,
    kategori: "Bakverk"
  },
  {
    namn: "Kaffe eller te + kardemummabulle",
    pris: 65,
    kategori: "Erbjudande"
  }
]


renderMenu(items);


