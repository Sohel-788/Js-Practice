//Factorial method
//10 != 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10; This is called factorial pattern এই factorial method গানিতিক হারি multiplae output পাস করে
// factorial by for loop and how to get output in function ||এটা কে বলে Iterative way
var factorial = 1;
for (var i = 1; i <= 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial)
}
var fa = 1;
for (var i = 1; i <= 10; i++) {
    fa = fa * i;
    console.log(i, fa)
}
var ami = 1;
for (var i = 1; i <= 20; i++) {

    ami = ami * i;
    console.log(i, ami)
}
//factorial এর variable name and factorial store name will be same

// factorial by function in for loop
function factorialFunct(n) {
    var factorialFunct = 1;
    for (var i = 1; i <= n; i++) {
        factorialFunct = factorialFunct * i;
    }
    return factorialFunct;
}
var result = factorialFunct(15);
console.log(result)


//factorial in while loop ||এটা কে বলে Iterative way
var x = 1;
var factorial = 1;
while (x <= 16) {
    var factorial = factorial * x;
    console.log(x, factorial);
    x++;
}


var x = 1;
var factorial = 1;
while (x <= 6) {
    var factorial = factorial * x;
    x++;
}
console.log(factorial);

//factorial by function in while loop
function factorialFunction(n) {
    var x = 1;
    var fact = 1;
    while (x <= n) {
        var fact = fact * n;
        x++;
    }
    return fact;
}
var result = factorialFunction(9);
console.log(result)

// factorial 
// 0!=1
// 1!=1
// 2!=1*2
// 3!=1*2*3
// 4!=1*2*3*4
// 5!=1*2*3*4*5*
// 6!=1*2*3*4*5*6
// 7!=1*2*3*4*5*6*7
// short method of factorial
// 7!=6!*7
// 7!=(7-1)!*7
// 10!=(10-1)!*10
// n!=(n-1)!*n

//factorial in Recursive way
function recursiveFact(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * recursiveFact(n - 1);
    }
}
var result = recursiveFact(10);
console.log(result);


// another factiorial in recursive way
function addFactorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * addFactorial(n - 1);
    }
}
var result = addFactorial(8);
console.log(result);