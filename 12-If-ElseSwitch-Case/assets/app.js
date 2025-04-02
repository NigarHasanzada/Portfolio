
const dizelPrice = 0.9;
const benzinPrice = 1.0;
const premiumPrice = 1.5;

let fuelType = prompt("Yanacaq növünü seçin:\n1 - Dizel\n2 - Adi Benzin\n3 - Premium Benzin");
let fuelPrice;

switch (fuelType) {
    case "1":
        fuelPrice = dizelPrice;
        fuelType = "Dizel";
        break;
    case "2":
        fuelPrice = benzinPrice;
        fuelType = "Adi Benzin";
        break;
    case "3":
        fuelPrice = premiumPrice;
        fuelType = "Premium Benzin";
        break;
    default:
        alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
}


let fuelAmount = +prompt("Neçə litr yanacaq almaq istəyirsiniz?");
let budget = +prompt("Mövcud büdcənizi daxil edin:");

if ( fuelAmount && budget <= 0) {
    alert("Düzgün miqdar və büdcə daxil edin!.");
}
let totalCost = fuelAmount * fuelPrice;

if (budget >= totalCost) {
    let remainingBalance = budget - totalCost;
    alert(`Siz ${fuelAmount} litr ${fuelType} aldınız.\nÜmumi məbləğ: ${totalCost} AZN\nQalan balansınız: ${remainingBalance} AZN`);
} else {
    let shortage = totalCost - budget;
    alert(`Büdcəniz kifayət deyil!\nSizin balansınız: ${budget} AZN\nÜmumi qiymət: ${totalCost} AZN\nSizə ${shortage} AZN çatmır.`);
}



let movsum= prompt("Movsum seçin:\n 1-Yaz\n 2-Yay\n 3-Payiz \n 4-Qis");
let SelectedMovsum;

switch (movsum) {
    case "1":
        SelectedMovsum="Mart, Aprel, May  "
       alert(`Secdiyiniz movsume uygun olan aylar ${SelectedMovsum} aylaridir`)
        
        break;
        case "2":
            SelectedMovsum="Iyun, Iyul, Avqust"
           alert(`Secdiyiniz movsume uygun olan aylar ${SelectedMovsum} aylaridir`)
            
            break;
            case "3":
                SelectedMovsum="Sentyabr, Oktyabr, Noyabr"
               alert(`Secdiyiniz movsume uygun olan aylar ${SelectedMovsum} aylaridir`)
                
                break;
                case "4":
                    SelectedMovsum="Dekabr, Yanvar, Fevral"
                   alert(`Secdiyiniz movsume uygun olan aylar ${SelectedMovsum} aylaridir`)
                    
                    break;
                


    default:
        break;
}