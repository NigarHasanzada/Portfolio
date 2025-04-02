const numbers = [10, 25, 3, 99, 48, 57];

let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log("Ən böyük ədəd:", maxNumber);
