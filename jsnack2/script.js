const guests = [
    'Alfonso',
    'Aldo',
    'Eugenia',
    'Gino',
    'Franco',
    'Marco',
    'Pippo'
  ];

const urName = prompt("Inserisci il tuo nome")

// if (guests.indexOf(urName) === 0) {
//     alert("Sei invitato alla festa")
// } else {
//     alert("NON SEI INVITATO")
// }

thereIs = false

for (let i = 0; i < guests.length; i++) {
    if (guests[i] === urName) {
    thereIs = true
    }
}
if (thereIs) {
    alert("SEI STATO INVITATO YEEEEEE");
} else {
    alert("NON SEI STATO INVITATO")
}