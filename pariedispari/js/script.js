// creare il gioco pari e dispari
// utente sceglie pari o dispari
userChoice = prompt('scegli se vuoi essere pari o dispari');

console.log(userChoice);
// verificare la scelta?


// utente sceglie un numero
userNumber = parseInt(prompt('scegli un numero fra 1 e 5 (inclusi)'))
console.log(userNumber);


// funzione
function evenOrOdd(number){
    let result
    let pcNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    resultNumber = pcNumber + number ;
    if (resultNumber % 2 === 0){
        result = 'pari'
    }else {
        result = 'dispari'
    }
    return result
}
// test

test = evenOrOdd(userNumber)
if(userChoice === test){
    alert('congratulazioni hai vinto')
}else {
    alert('peccato hai perso')
}


// sommare il numero dell'utente ad un numero generato casualmente dal computer
// verificare se il numero è pari o dispari
// mandare il relativo messaggio all'utente