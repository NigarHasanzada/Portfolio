const array = [25, 2, 5, 19, 333, 64, 235, 1];
let oneNumber=0;
let twoNumber=0;
let threeNumber=0;
for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num >= 0 && num <= 9) {
        console.log(`${num} → Təkrəqəmli`);
        oneNumber++
    } 
    else if (num >= 10 && num <= 99) {
        console.log(`${num} → İkirəqəmli`);
        twoNumber++
    } 
    else if (num >= 100 && num <= 999) {
        console.log(`${num} → Üçrəqəmli`);
        threeNumber++
    } 
}

console.log(`Təkrəqəmli ədədlərin sayı: ${oneNumber}`);
console.log(`İkirəqəmli ədədlərin sayı: ${twoNumber}`);
console.log(`Üçrəqəmli ədədlərin sayı: ${threeNumber}`);
