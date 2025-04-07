//1.string-de sait herflewrin tapilmasi
let string = "I am frontend DEVELOPER I LEARN Javascript";
function Saitler(str) {
    let saitherfler = ["a", "e", "i", "o", "ı", "ə", "u", "ü", "ö"];
    let saitler = [];

    for (let i of str.toLowerCase()) {
        if (saitherfler.includes(i)) {
            saitler.push(i);
        }
    }
    console.log(`saitler sayi = ${saitler}`);
}
Saitler(string);


//2.Verilmish string-de sozlerin bosluga gore sayi.
function Bosluq(str) {
    return str.split(" ").length;

}
console.log("---------------------------------");
console.log("Verilmish string-de sozlerin bosluga gore sayi.");

console.log(Bosluq(string));

//3.Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın


function MaximumWord(str) {
    let newword;
    let longestword = string[0];
    newword = str.split(" ")
    for (let i of newword) {
        if (i.length > longestword.length) {
            longestword = i


        }
    }
    return longestword
}
console.log("---------------------------------");
console.log("Stringdeki en uzun sozu ekrana cixar");
console.log(MaximumWord(string));



//4.string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
function ToUppercaseWord(str) {
    let arrayuppercase = [];
    let newWord = str.split(" ");

    for (let i = 0; i < newWord.length; i++) {
        if (newWord[i] === newWord[i].toUpperCase()) {
            arrayuppercase.push(`soz: ${newWord[i]} indeks:${i}`);
        }
    }

    return arrayuppercase.length > 0
        ? arrayuppercase
        : "Böyük hərflərlə yazılmış söz tapılmadı.";
}
console.log("---------------------------------");
console.log(" bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxar");
console.log(ToUppercaseWord(string));


//5.string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// function ToUppercaseNumber(str) {
//     let numbers=str.split(" ")
//     let say= numbers.filter(word=>word.split("").toUpperCase().length>=2)
//    return say
// }

// console.log(ToUppercaseNumber(string));




//6.Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.Məsələn:  My name is Jhon - MniJ

function MNIJ(str) {
    return str.split(' ').map(word => word[0]).join('');

}
console.log("---------------------------------");
console.log("Cumledeki butun sozlerin bas herflerini birlesdir ");
console.log(MNIJ(string));




//7. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t

function MinLength(str) {
    let words = str.split(" ");
    let result = words.map(word => {
        if (word.length > 4) {
            return word[0] + (word.length - 2) + word[word.length - 1];
        } else {
            return word;
        }
    });

    return result.join(" ");
}
console.log("---------------------------------");
console.log("Cumledeki butun sozlerin ixtisar olunmasi");
console.log(MinLength(string));















