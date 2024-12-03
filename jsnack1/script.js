let number1 = parseInt(prompt("inserisci il numero 1"))
while(isNaN(number1)) {
number1 = parseInt(prompt("inserisci il numero 1"))
}

let number2 = parseInt(prompt("inserisci il numero 2"))
while(isNaN(number2)) {
number1 = parseInt(prompt("inserisci il numero 1"))
}
 
if (number1 > number2) {
    alert("Il numero maggiore è " + number1)
} else if (number2 > number1) {
    alert("Il numero maggiore è " + number2)
} else {
    alert("I numeri sono uguali")
}
console.log(number1, number2)
