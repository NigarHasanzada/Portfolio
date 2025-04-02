let numbers = []; 
let sum = 0;
let count = 0;

while (count < 10) {
    let number = +prompt("Ədəd daxil edin:"); 
    
    if (number) {  
        numbers.push(number);  
        sum += number;
        count++; 
    } else {
        alert("Xahiş olunur düzgün ədəd daxil edin!");
    }
}

let average = sum / numbers.length;

console.log("Daxil edilən ədədlər:", numbers);
console.log("Ədədi orta:", average); 
