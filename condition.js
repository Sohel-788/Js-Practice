// "IF else" condition keyword
// (!=) নট সমান  
var x = 10;
if (x != 1) {

    console.log("I am Sohel Mahmud");


} else {
    console.log("You are my love");
}

// Two conditions in "if" kerword at a time
//(&&) এটা কে বলে and , এটা দ্বারা দুইটা শর্ত ই পূরন করতে হয়
var jobAse = true;
var savings = 500000;
if (jobAse == true && savings <= 500000) {
    console.log("Ok, I will seek your bride")
} else {
    console.log("Tor kopale biya nai")
}

// Minimum one of two conditions will be filled
var jobPaiso = true;
var savingsAse = 10;
if (jobPaiso == false || savingsAse <= 10) {
    console.log("You are eligible to marry");
} else {
    console.log("You don't have to marry");
}

// minimum one of three conditions have to full fill, that is declared "if' else if' else" keyword
// (||) এটাকে বলে অথবা এটা দ্বারা দুইটা শর্তের যেকোন একটা পূরন করতে বলা হয়
var jobHoise = true;
var amount = 20;
if (jobHoise == false || amount > 20) {
    console.log("You are ok")
} else if (jobHoise = true) {
    console.log("Achcha bow dekha hobe")
} else {
    console.log("Biya hobe na")
}