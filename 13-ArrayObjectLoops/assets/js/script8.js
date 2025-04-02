const numbers = [203, 19, 2, 13, 196, 86, 35, 77];

let maxNumber = numbers[0];
let minNumber = numbers[0];
let sum=0;


for (let i = 1; i < numbers.length; i++) {
    sum  +=numbers[i]
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}
console.log(` Siranin cemi = ${sum}`);
let average=sum-(maxNumber+minNumber)
console.log(`Maks ve min ededi cixdiqda alinan cem = ${average}`);



