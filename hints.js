/* Podstawowe typy danych: */
let calkowita = 1;
let ulamek = 1.0;
let wykladnicza = 1e2;
let napis = '1';
let boolowska = true;
let array = [1,2,3, '4', '5', true];
let obj = { 1: 1, '2': 2, '3': wykladnicza };
let u = undefined;
let n = null;

const niezmienialnaZmienna = '';
// niezmienialnaZmienna = 1; // - błąd

function funkcja(argument1, argument2) {
    return argument1 + argument2;
};

var arrowFunction = (argument1, argument2) => {
    return argument1 + argument2;
}

/* Przepływ danych */

if (true) {
    console.log(true);
} else if (false) {
    console.log('Nigdy sie nie wykona');
} else {
    console.log('');
}

for (let i = 0; i < 10; i++) {
    console.log('liczba: ' + i);
}

let i = 0;
while (i < 10) {
    i++;
}

/* DOM API */
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// tworzenie elementu
const newDiv = document.createElement('div');
newDiv.classList = ['nazwa-klasy'];

// pobieranie elementu
const body = document.getElementsByTagName('body');
const id = document.getElementById('id');

// API może zwrócić undefined - wywołanie funkcji na obiekcie undefiend zwróci błąd
// if (id) {
//     id.append(document.createElement('p'));
// }


/* Wykonywanie żądań HTTP */
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Examples

function logData(data) {
    console.log(data);
}

const url = 'https://api.coinpaprika.com/globals';
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(logData)
    .catch(function catchError() { console.log('Error')});
