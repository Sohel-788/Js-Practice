// variable type method
var test = 'SSC';

console.log(typeof test);

var number = 33;

console.log(typeof number);

var manMortal = true;
var manForever = false;
console.log(typeof manMortal);

// If there is used a lot of same variable name, the browser will give the last var' s result
var myName = "SOHEL";
var myName = "MAHMUD";
var myName = "SOHEL MAHMUD";
console.log(myName);

// Case definition method
var promise = "I promise, i WILL Be web DEVELOper at any cost."
console.log(promise.toLowerCase());

var promise = "I promise, i WILL Be web DEVELOper at any cost."
console.log(promise.toUpperCase());

// Position method
var promise = "I promise, i WILL Be web DEVELOper at any cost."
console.log(promise.indexOf("cost"));
// browser will be generate minus value if there is spelling mistake
var promise = "I promise, i WILL Be web DEVELOper at any cost."
console.log(promise.indexOf("promieeese"));
console.log(promise.indexOf("cost"));

// Devide method indicate by comma
var promise = "I promise, i WILL Be web DEVELOper at any cost."
console.log(promise.split("i"));
console.log(promise.split(' '));

// Converting string into number and number into string
//string to number
var num1 = "22.3";
var num2 = 33;
num1 = parseFloat(num1);
// num1 = +num1;
console.log(num1 + num2);
//number to string
var numTostring = 22.3;
var num2 = "ami";
numTostring = '' + numTostring;
// num1 = +num1;
console.log(numTostring + num2);

// deduction process after decimal portion 
var minusAfterDecimal = 33.6;
minusAfterDecimal = parseInt(minusAfterDecimal);
console.log(minusAfterDecimal);

// Fraction declare method
var add1 = 0.1;
var add2 = 0.2;
var total = add1 + add2;
console.log(total);
// fraction fixing method মানে দশমিকের পরে কয়টা সংখ্যা শো হবে
var sum1 = 0.1;
var sum2 = 0.2;
var sum = sum1 + sum2;
var sum = sum.toFixed(3);
console.log(sum);

// Remainder declaretion process মানে ভাগশেষ বের করার পদ্ধতি
var vag1 = 11;
var vag2 = 13;
var vagShesh = vag2 % vag1;
console.log(vagShesh);

// Increasing value of variable
var add = 22;
// process 1
add++;
// process 2
//var add = add + 1;
console.log(add)

// decreasing method
var minus1 = 10;
//var minus = minus1 - 1;
// console.log(minus)
minus1--;
console.log(minus1)

// "Math.round" keyword gives the full figure of fraction. when it is low of .50 ,it deducts the fraction and is heigh of .50 or .50 it increase the fraction and it will be generated as a full number.
var number = 22.49999;
var result1 = Math.round(number);
console.log(result1);
var number2 = 22.5;
var resul2 = Math.round(number2);
console.log(resul2);

// "Math.ceil" keyword increase the fraction to full number
var x = 10.00009;
var outPut = Math.ceil(x);
console.log(outPut);

// "Math.floor" keyword decrease the fraction to full number
var x = 10.00009;
var outPut = Math.floor(x);
console.log(outPut);

// "Math.random" gets the different output as fraction
var x = 1212;
var random = Math.random();
console.log(random);

// "Latare" deoyar jonno ai method ti use kora hoi
var l = Math.random() * 100;
console.log(l);