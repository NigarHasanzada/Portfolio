function Divisions(...numbers) {
    let Bolunen = [];
    let Bolunmeyen = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] %4 === 0 && numbers[i] %5 === 0) { 
            Bolunen.push(numbers[i]);
        } else { 
            Bolunmeyen.push(numbers[i]);
        }
    }

    console.log(`Bolunen ədədlər: ${Bolunen}`);
    console.log(`Bolunmeyen ededler ədədlər: ${Bolunmeyen}`);

}

Divisions(14, 20, 35, 40, 57, 60, 100);
