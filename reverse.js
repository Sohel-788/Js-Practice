// Reverse মানে word এর letter কে উল্টিয়ে দেওয়া
// Reverse string
var statement = "Hello world. I am serious to be developer";

function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var reverseResult = reverseString(statement);
console.log(reverseResult);