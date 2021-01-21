//https://github.com/NkRaFI/assignment-3

//1) kilometerToMeter start
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "invalid input";
    }
    else {
        let meter = kilometer * 1000;
        return meter;
    }
}
let myInput = kilometerToMeter(8); //input here
console.log("Result:", myInput, "meter");



//2) budgetCalculator
//watch = 50, phone = 100, laptop = 500
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    let totalWatchPrice = watchQuantity * 50;
    let totalPhonePrice = phoneQuantity * 100;
    let totalLaptopPrice = laptopQuantity * 500;
    let budgetYouNeed = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return budgetYouNeed;
}
let myQuantity = budgetCalculator(4, 3, 2);//input here
console.log("Budget You Need:", myQuantity, "dollar");



//3) hotelCost
//1st 10 days cost = $100,
//after day-11 to day-20 cost = $80,
//after day-21 to the following days = $50,
function hotelCost(daysYouWantToStay) {
    if (daysYouWantToStay <= 10) {
        let firstPeriod = daysYouWantToStay * 100;
        return firstPeriod;
    }
    else if (daysYouWantToStay <= 20) {
        let firstPeriod = 10 * 100;
        let remainingDays = daysYouWantToStay - 10;
        let secondPeriod = remainingDays * 80;
        return firstPeriod + secondPeriod;
    }
    else {
        let firstPeriod = 10 * 100;
        let secondPeriod = 10 * 80;
        let remainingDays = daysYouWantToStay - 20;
        let thirdPeriod = remainingDays * 50;
        return firstPeriod + secondPeriod + thirdPeriod;
    }
}
let iWantToStay = hotelCost(22);//input here
console.log("Total Hotel Cost:", iWantToStay, "dollar");




//4) megaFriend
//finding largest string inside an array.
function megaFriend(friendsName) {
    let largestName = "";
    for (i = 0; i < friendsName.length; i++) {
        let storeNames = friendsName[i];
        if (typeof (storeNames) === "string" && storeNames.length > largestName.length) {
            largestName = storeNames;
        }
    }
    return largestName;
}
let myFriendsNames = ["Arman", "Anis", "Shimanta", "Raihan", "Rakib",]
let result = megaFriend(myFriendsNames);
console.log("Largest Name Is: ", result);


/*------------------End------------------*/