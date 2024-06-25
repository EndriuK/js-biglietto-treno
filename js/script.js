let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci chilometri da percorrere");


let prezzoBiglietto = 0.21 * chilometri;
let sconto = 0;
let prezzoScontato;
let prezzoFinale;

// Calcolo sconto in base all'età
if (eta < 18) {
    sconto = 20;
} else if (eta > 65) {
    sconto = 40;
}

// Applico lo sconto se presente
if (sconto != 0) {
    prezzoScontato = prezzoBiglietto * sconto / 100;
    prezzoFinale = prezzoBiglietto - prezzoScontato;
} else {
    prezzoFinale = prezzoBiglietto;
}

// Visualizzo il prezzo finale
console.log("Prezzo del biglietto senza sconto: " + prezzoBiglietto.toFixed(2) + " €");
console.log("Prezzo del biglietto con sconto: " + prezzoFinale.toFixed(2) + " €");
