// 3. Sukurkite funkciją, kuri mygtuko paspaudimu,
//  sukuria div elementą su klase "elementas-{​​​​​​​index}​​​​​​​". {​​​​​​​index}​​​​​​​ = elemento numeris.

function elementuKurimas(elementas){
    let zingsniai = 0;
    let index = 1;
    let divElementas = document.createElement("div");
    divElementas.classList.add("elementas-{index}");
    document.querySelector(".container").append(divElementas);
    return document.querySelector(".container").classList

}

document.getElementById("duomenys").addEventListener("click", function(){
    let index = 1;
    let division = document.createElement("div")
    division.classList.add("elementas" + index)
    document.querySelector(".container").append(division);
    division.innerText = ("naujas-divas")
    
})

// let zingsniai = 0;

// for (let i=0; i<40; i++) {
    
//     let divElementas = document.createElement("div"); // div sukurtas, bet neatvaizduojamas
//     divElementas.classList.add("div-dydis");
//     divElementas.innerText = i + 1; //pElementas

//     if( (i+1) % 2 == 0 ) {
//         divElementas.classList.add("zalias");
//     }

//     document.querySelector(".container").append(divElementas);

//     console.log(i);
//     zingsniai++;
    
// }