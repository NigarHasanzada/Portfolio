function AbundantOrDeficient(number) {
    let Divisorssum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            Divisorssum += i; 
        }
    }

    if (Divisorssum > number) {
        return "Abundant";
    } else {
        return "Deficient"; 
    }
}


console.log(AbundantOrDeficient(12)); 
console.log(AbundantOrDeficient(13));  
