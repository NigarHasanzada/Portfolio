const persons = [
    { name: "John", age: 35 },
    { name: "Jane", age: 45 },
    { name: "Mark", age: 10 },
    { name: "Mary", age: 90 }
];
function findAgeDifference(persons) {
    let minAge = persons[0].age; 
    let maxAge = persons[0].age;
    let ageDifference 
    let age;

    for (let i = 1; i < persons.length; i++) {
        age = persons[i].age;
        if (age < minAge) {
            minAge = age;
        }

        
        if (age > maxAge) {
            maxAge = age;
        }
    }

   
    ageDifference = maxAge - minAge;

    return [minAge, maxAge, ageDifference];
}



console.log(findAgeDifference(persons)); 
