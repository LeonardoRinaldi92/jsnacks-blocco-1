let arraynumeri = [];

for (x=1; x<=6; x++) {
   let numero = parseInt(prompt("sceglinumero "));

    if (numero %2 != 0) {
    arraynumeri.push( numero )
    }
}

console.log(arraynumeri)
