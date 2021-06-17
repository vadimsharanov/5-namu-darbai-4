// 1. Sukurkite funkciją, 
// kurią iškvietus masyvą galima papildyti norimu elementu.
// Informacija paimama iš input laukelio. 
// Funkcija iškviečiama paspaudus mygtuką.

"use strict"

function papildymas (elementas=0) {
    let masyvas
    masyvas = [];

    masyvas[0] = elementas;
    return masyvas;
}

document.getElementById("duomenys").addEventListener("click", function(){
   let a = document.getElementById("ivestis").value
   let rezultatas1 = papildymas(a);
   console.log(rezultatas1);
   document.getElementById("rezultatas").value = rezultatas1
})

