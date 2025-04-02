const user=[{name:"Akif", age:28}, 
{name:"Nuray", age:20},
{name:"Aydin", age:38}, 
{name:"Azer", age:32}, 
{name:"Aydin", age:30}, 
]


console.log("Bu userlerin yasi 30 dan coxdur");
for (let i = 0; i < user.length; i++) {
    if (user[i].age >30){
        console.log(`${user[i].name} - ${user[i].age} yaş`);
    }
}

console.log("Bu userlerin yasi 30 dan azdir");
for (let i = 0; i < user.length; i++) {
    if (user[i].age < 30){
        console.log(`${user[i].name} - ${user[i].age} yaş`);
    } 
    
}

console.log("Bu userlerin 30 yasi var");
for (let i = 0; i < user.length; i++) {
    if (user[i].age == 30){
        console.log(`${user[i].name} - ${user[i].age} yaş`);
    } 
    
}