const numbers = [1, 2, 3, 4, 5, 6];


let sum = 0;
let iloczyn = 1;

for (var i = 0; i < numbers.length; i++) {

    sum = sum + numbers[i];

    iloczyn = iloczyn * numbers[i];
}

console.log(sum);
console.log(iloczyn);



// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - użyj pętli for lub forEach w zadaniu