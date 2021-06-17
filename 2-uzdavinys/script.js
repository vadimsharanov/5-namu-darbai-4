// 2. Pasinaudodami ciklu, sukurkite funkciją,
//  kuri traukia kvadratinę šaknį iš skaičiaus.

"use strict"
function saknis(elementas) {
    let masyvas, saknis;
    masyvas = [];
    saknis = Math.sqrt(elementas);
    masyvas[0] = saknis;
    return masyvas;
}

document.getElementById("duomenys").addEventListener("click", function(){
    let a = parseFloat(document.getElementById("ivestis").value);
    let rezultatas1 = saknis(a);
    console.log(rezultatas1);
    document.getElementById("rezultatas").value = (rezultatas1)
})

