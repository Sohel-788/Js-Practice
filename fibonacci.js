// Fibonacci series in array method । fibonacci বের  করতে হয় array method এ. fibonacci হচ্ছে তার আগের সংখ্যার যোগফল
// Fibonacci 
// ০,১,১্‌,২,৩,৫,৮,১৩,২১,৩৪,৫৫,৮৯,১৪৪
// febonacci in looping or iterative way
//var fibo = [0, 1] //এখানে fibonacci এর দুইতম পদ Diclare হয়েগেছে। এর পর থেকে fibonacci এর করতে হবে. ৩তম পদ বের করার জন্য index 2 ডিক্লেয়ার করতে হবে, যেহেতু array index 0 থেকে  count হয়
// fibo[2]=fibo[2-1]+fibo[2-2]
// fibo[3]=fibo[3-1]+fibo[3-2];
// fibo[4]=fibo[4-1]+fibo[4-2];
// fibo[5]=fibo[5-1]+fibo[5-2]
// তেমনে ভাবে N তম পদ বের করার জন্য উপরোক্ত সূত্র ফলো করতে হবে
// fibo[n]=fibo[n-1]+fibo[n-2]
//fibo[i]=fibo[i-1]+fibo[i-2];
var fibo = [0, 1];
for (var i = 2; i <= 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
}

var n = [1, 1];
for (var x = 3; x <= 15; x++) {
    fibo[x] = fibo[x - 1] + fibo[x - 2];
    console.log(fibo[x], fibo[x - 1], fibo[x - 2]);
}
//fibonnacci in while loop or iterative method
var x = [0, 1];
var xx = 2;
while (xx <= 12) {
    fibo[xx] = fibo[xx - 1] + fibo[xx - 2];
    xx++;
    console.log(fibo[xx], fibo[xx - 1], fibo[xx - 2]);
}

//fibonacci in Recursive way
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var result = fibonacci(10);
console.log(result);

// fibonaccci full series in recursive way(by function calling)
// [0,1,1,2,3,5,8,13,21] fibonacci series 
// এখানে 0 Declare করা আছে এই 0 এর উপর ভিত্তি করে fibonacci full series বের করতে হবে
function fibonacciFullSeries(n) {
    if (n == 0) {
        return [0]; // যেহেতু fibonacci element তার আগের দুটি সংখ্যার যোগফল
    } else if (n == 1) {
        return [0, 1] // যেহেতু fibonacci'র প্রতিটি element তার আগের দুটি সংখ্যার যোগফল
    } else {
        // Calculating fibonacci with n element
        var fibo = fibonacciFullSeries(n - 1); //যেহেতু nতম পদের Array[0] declare করা আছে// প্রতিটি Fibonacci'র আগের Element বের করার সূত্র
        var fiboNextElement = fibo[n - 1] + fibo[n - 2]; // প্রতিটি Fibonacci'র আগের Elementএর আগেরটি বের করার সূত্র ।যেকোন fibonacci এর পূর্ন পদ বের করার সূত্র
        fibo.push(fiboNextElement); //যেহেতু fibonacce এর ২য় element টি বের করতে হবে
        return fibo;
    }
}
var result = fibonacciFullSeries(10);
console.log(result);