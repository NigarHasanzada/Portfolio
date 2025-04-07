//1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.
let array = [1, 2, 3, 4, 4, 2, 5, 7, 3, 8, 9, 9, 20, 12];

function Return(arr) {
    let saylar = {}; 
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        let eded = arr[i];
        if (saylar[eded]) {
          count++
        } else {
            saylar[eded]=1
        }
    }

    let unikal = [];
    for (let eded in saylar) {
        unikal.push(eded); 
    }

    return ` yeni array:${unikal}  tekrar sayi:${count}`
}
console.log("Tekrarlanan elementlerin sayi");

console.log(Return(array));
console.log("---------------------------------");


//2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.
console.log("Polindrom sozler");

function PolindromWord(word) {
    let revers=word.split("").reverse().join("");
    if (word.toLowerCase() === revers.toLowerCase()) {
        console.log(`${ word}-polindromdur`);
        
        
    }else{
        console.log(`${ word}-polindrom deyil`);
        
    }
    
}
PolindromWord("Level")
PolindromWord("Think")
console.log("---------------------------------");



//3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.


function SmallNumber(array , number) {
    let filteredNumber=array.filter(x => x < number).length;
   return filteredNumber

    
}
console.log("Girilen ededin verilmis arreyde nece elementden kicik oldugunu yaz");

console.log(SmallNumber([5, 10, 2, 8, 1, 4, 3, 8], 6));
console.log("---------------------------------");


//4.customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.
const customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"],
      },
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"],
      },
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"],
      },
    },
  ];


  function Hobbies(person) {
    let result = person.reduce((acc, person) => {
        return acc.concat(person.personal.hobbies);
    }, []);
    
    return result;
}
console.log("hobbileri array-in reduce metodundan istifade ederek yazdirmaq.");
console.log(Hobbies(customers));
console.log("---------------------------------");



//5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)

function getRandomNumbers(count) {
  let array = [];

  for (let i = 0; i < count; i++) {
      let random = Math.floor(Math.random() * 100); 
      array.push(random);
  }


  let max = array[0];
  let min = array[0];
  let sum = 0;


  for (let i = 0; i < array.length; i++) {
      let eded = array[i];
      sum += eded;
      if (eded > max) {
          max = eded;
      }
      if (eded < min) {
          min = eded;
      }
  }


  let average = sum / array.length;


  return {
      array: array,
      maksimum: max,
      minimum: min,
      toplam: sum,
      ortalama: average,
  };
}
console.log("Random arrayde hesablamalar");

console.log(getRandomNumbers(10));
