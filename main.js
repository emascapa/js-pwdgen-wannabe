// Chiedo nome
const userName = prompt('Ciao, come ti chiami?');


// chiedo cognome
const userLastName = prompt('Ok, invece qual è il tuo cognome?');


// chiedo colore
const userColor = prompt('Perfetto! Un\'ultima domanda: Qual è il tuo colore preferito?');


// genero password
const passwordGenerated = userName + userLastName + userColor + '22';


// la password comparirà nell' html
document.getElementById('password').innerHTML = passwordGenerated;


// la password comparirà nella console
console.log(passwordGenerated);