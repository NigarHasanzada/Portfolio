const numbers = [203, 19, 2, 13, 196, 86, 35, 77];

let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log("Ən böyük ədəd:", maxNumber);
