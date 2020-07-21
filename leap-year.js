//Leap year js
const year = 2000
const LeapYear = year % 4;

if (LeapYear == 0) {
    console.log("This is Leap Year");
} else {
    console.log("This is not leap year");
}

// Leap year by function
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}

const check2000 = isLeapYear(2000);
console.log(check2000);
const check1717 = isLeapYear(1717);
console.log(check1717)