function Newarray(...numbers) {
    let doublearray = [];
    let newnumber;
    
    
    for (let i = 0; i < numbers.length; i++) {
        newnumber = numbers[i] ** 2; 
        doublearray.push(newnumber);  
    }

    return doublearray; 
}

console.log(Newarray(3, 4, 5, 6));  
