// Sumation of an array
// one process
var numbers = [33, 44, 55, 66, 77, 88, 99, 22, ];
var sum = 0; //ধরি 0 মোট যোগফল
for (i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    var sum = sum + element;
}
console.log("Total sumation of this array is:", sum)
    // second sumation process by function
var numbers = [33, 44, 55, 66, 77, 88, 99, 22, 55, 55, 44];

function sumationArray(n) {
    var sum = 0; //ধরি 0 মোট যোগফল
    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        var sum = sum + element;
    }
    return sum;
}
var total = sumationArray(numbers);
console.log("Total sumtion of numbers array is :", total)
    // third sumation process by function
var add = sumationArray([11, 22, 55, 44, 55, 44]);
console.log("Total sumation of arry:", add)