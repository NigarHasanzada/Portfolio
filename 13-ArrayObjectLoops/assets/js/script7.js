const numbers = [203, 19, 2, 13, 196, 86, 35, 77];

let maxNumber = numbers[0];
let minNumber = numbers[0];
let maxIndex = 0;
let minIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
        maxIndex = i;
    }
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
        minIndex = i;
    }
}

numbers[maxIndex] = minNumber;
numbers[minIndex] = maxNumber;

console.log(numbers);


