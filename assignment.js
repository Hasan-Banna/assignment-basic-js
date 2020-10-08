//feet to mile confert
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var feet = 1000;
var result = feetToMile(feet);
if(feet>=0) {
    console.log("The converting value is:",result.toFixed(4), "Mile")
}
else {
    console.log("Negative value cann't count");
}

//Wood calculator
function woodCalculator(chair, table, khat){
    var chairCubicFeet = chair*1;
    var tableCubicFeet = table*3;
    var khatCubicFeet = khat*5;
    totalWood = chairCubicFeet + tableCubicFeet + khatCubicFeet;
    return totalWood;
}
var result = woodCalculator(12, 10, 1);
console.log("Total wood neede",result);

//brick calculator
function brickCalculator(floor){
    var sumFirstPart = 0, sumSecondPart = 0, sumThirdPart = 0;
    for (var i = 0; i <= floor; i++){
        if(i <= 10){
            var firstPart = 15 * 1000;
            sumFirstPart = sumFirstPart + firstPart;
        }
        else if(i >= 11 && i <= 20){
            var secondPart = 12 * 1000;
            var sumSecondPart = sumSecondPart + secondPart;
        }
        else if(i >= 21){
            var thirdPart = 10*1000;
            var sumThirdPart = sumThirdPart + thirdPart;
        }
    }
    var total = sumFirstPart + sumSecondPart + sumThirdPart;
    return total;
}
var totalBrick = brickCalculator(25);
console.log("Total Brick nedded :",totalBrick);

//Tiny friends
function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}
var friend = ['sami', 'Shakil', 'Sharif']
var result = tinyFriend(friend);
console.log(result);