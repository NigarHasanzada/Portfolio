function WordFunction(letter, ...numbers) {
    let count = 0;
    let word;

    for (let i = 0; i < numbers.length; i++) {
        word = numbers[i]; 

        for (let j = 0; j < word.length; j++) {
            if (word[j] === letter) {
                count++;  
            }
        }
    }

    console.log(`Oxşar hərf sayı: ${count}`);
}

WordFunction("s", "salam");  