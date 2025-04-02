let num = +prompt("Əsas ədədi daxil edin:");
let divisor = +prompt("Mod almaq istədiyiniz ədədi daxil edin:");

if (divisor === 0) {
    console.log("Sıfıra bölmək mümkün deyil!");
} else {
    let result = num % divisor;
    console.log(`${num} % ${divisor} = ${result}`);
}
