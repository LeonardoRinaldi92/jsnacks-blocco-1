let parola1 = prompt("dicci una parola");
let parola2 = prompt("dicci una parola");

console.log(parola1.length)

if (parola1.length > parola2.length) {
    document.writeln (parola1) 
}else if (parola1.length < parola2.length) {
    document.writeln (parola2)
} else {
    document.writeln ("che palle!")
}