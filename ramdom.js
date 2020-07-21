// Random number in javascript // Lodo khela r moto
var randomNumber = Math.random() * 6;
//random ke integer korar process
var outPut = Math.round(randomNumber);
console.log(outPut);

// random round number in iterative way
for (i = 1; i <= 10; i++) {
    var randomNumber = Math.random() * 6;
    var result = Math.round(randomNumber);
    console.log(result);
}