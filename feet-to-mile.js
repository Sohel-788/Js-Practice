//feet to mile converter function
//feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(52800);
console.log("This is feet to mile output:", result, "miles."); //You can input any of your desired values.

//woodCalculator
function woodCalculator(chair, table, cot) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var cotCount = cot * 5;
    var woodCount = chair + table + cot;
    return woodCount;
}
var totalWood = woodCalculator(2, 3, 4); //You can input any of your desired values.
console.log("Your wood is:", totalWood, "", "Cubic feet");