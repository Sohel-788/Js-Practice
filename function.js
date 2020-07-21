//Function function এ একাধীক console কল করা যায় , একটা রেডিমেড একটা প্যাকেট।
function sayLoveMe() {
    console.log("I am a simple boy");
    console.log("I am becoming a web developer, if Allah wants");
    console.log("I hate those who are lier");
    console.log("I love him who is honest");
}
sayLoveMe();
var hi = 10;
console.log(hi);
sayLoveMe();


// funtion paramiter , এর মাধ্যমে funtion এর আওউটপুট কে দিগুন বা মাল্টিপ্লাই করা যায়।
function multiply1(x) {
    var result = x * 3;
    console.log(result);
}
multiply1(100);
multiply1(200);

// funtion paramiter , এর মাধ্যমে funtion এর আওউটপুট কে দিগুন বা মাল্টিপ্লাই করা যায়।
function multiply2(y) {
    var outPut = y * 3;
    // console.log(outPut);
    return outPut;
}
var sum1 = multiply2(100);
var sum2 = multiply2(200);
var sum3 = multiply2(400);
var total = sum1 * sum2 + sum3;
console.log(total);

// double or multiple function paramiter
function add(xx, yy) {
    var xy = xx * yy;
    return xy;
}
var resultOut = add(10, 20);
console.log(resultOut)