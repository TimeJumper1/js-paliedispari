// creare il gioco pari e dispari
// utente sceglie pari o dispari
const userChoice = prompt('scegli se vuoi essere pari o dispari');

console.log(userChoice);
// verificare la scelta?


// utente sceglie un numero
const userNumber = parseInt(prompt('scegli un numero fra 1 e 5 (inclusi)'))
console.log(userNumber);

// funzione
function evenOrOdd(number){
    let result
    // numero casuale dell pc
    let pcNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    // sommare il numero dell'utente ad un numero generato casualmente dal computer
    resultNumber = pcNumber + number ;
    // verificare se il numero è pari o dispari
    if (resultNumber % 2 === 0){
         result = 'pari'
    }else {
         result = 'dispari'
    }
    return result
}


 const test = evenOrOdd(userNumber)
// mandare il relativo messaggio all'utente
if(userChoice === test){
    alert('congratulazioni hai vinto')
}else {
    alert('peccato hai perso')
}



