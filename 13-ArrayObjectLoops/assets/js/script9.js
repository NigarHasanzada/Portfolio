const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let number = +prompt("Ədəd daxil edin:"); 

let found = false; 

for (let i = 0; i < array.length; i++) {
    if (number == array[i]) { 
        console.log(`Daxil etdiyiniz ${number} ədədi siyahıda var.`);
        found = true; 
        break; 
    }
}

if (!found) {
    console.log(`Daxil etdiyiniz ${number} ədədi siyahıda yoxdur.`);
}
