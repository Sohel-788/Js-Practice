// problem solving
// swap=মানে দুটি variable এর মান কে পরস্পর পরিবর্তন করা
//swap in javascript
var a = 4;
var b = 6;
console.log("Before swap: a=", a, ",", "b=", b);
// one process
var a = b; //swaping one into another
var b = a; // swapping one into another
console.log("After swap: a=", a, ",", "b=", b);

//second process
var x = 10;
var y = 20;
console.log("Before swap: x=", x, ",", "y=", y);
var x = x + y;
var y = x - y;
var x = x - y;
console.log("After swap: x=", x, ",", "y=", y);
//third process
var p = 5;
var q = 10;
console.log("Before swap: p=", p, ",", "q=", q);
[p, q] = [q, p] //swapping one into another
console.log("After swap: p=", p, ",", "q=", q);