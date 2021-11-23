// verificare se una stringa dell'utente sia palindroma
const userWord = prompt('inserisci la parola da verificare');
console.log(userWord);




// funzione di verifica
function verificaPalindromi(word){
    let result;
    let drow = '';
    for (i = (word.length-1); i >= 0; i--) {
        console.log(word[i]);
        drow +=word[i];
        
    }
    console.log(drow);
    if (word === drow){
        result = 'la parola è un palindromo';
    }else {
        result = 'la parola non è un palindromo';
    }
    return result;
}


const test = verificaPalindromi(userWord);
alert(test);