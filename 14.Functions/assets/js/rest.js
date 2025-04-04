function Oprators(...numbers) {
    let positiveArr = [];
    let negativeArr = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { 
            positiveArr.push(numbers[i]);
        } else { 
            negativeArr.push(numbers[i]);
        }
    }

    console.log(`Cüt ədədlər: ${positiveArr}`);
    console.log(`Tək ədədlər: ${negativeArr}`);

}

Oprators(14, 20, 35, 40, 57, 60, 100);
