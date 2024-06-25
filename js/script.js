let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci chilometri da percorrere");

let prezzoBiglietto = 0.21 * chilometri
let sconto =  0
let prezzoScontato
let prezzoFinale

if (eta < 18) {
    sconto = 20;
} 

else if (eta > 65) {
    sconto = 40;
}

if (sconto != 0 ) {
    prezzoScontato = prezzoBiglietto * sconto / 100;
    prezzoFinale = prezzoBiglietto - prezzoScontato
}

