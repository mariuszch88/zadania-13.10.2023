console.log("Funkcje - deklaracja, parametry, return");

const mnozenieLiczb = function (liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 * liczba2;

    return wynik;
}
console.log(mnozenieLiczb(2, 4));



/* 

function przedstawMnie(imie) {
    console.log(`Mam na imie ${imie}`);
    console.log(`Miło Cię poznać ${imie}`);
}

przedstawMnie("Monika");
przedstawMnie("Bartek");

const wypiszMojeImie = function () {
    console.log("Moje imie to Hans");
}

const dodajLiczby = function (liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 + liczba2;
    console.log(wynik);
}

let liczbaHansa = 108;
let liczbaPierwsza = 1;
let liczbaDruga = 10;

wypiszMojeImie();
dodajLiczby(liczbaHansa, 10);
dodajLiczby(111, 44);

 */

