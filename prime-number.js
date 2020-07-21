//Prime number অথবা মৌলিক সংখ্যা বের করার পদ্ধতি। prime number হচ্ছে যে সংখ্যা  সমান ভাবেভাগ করা যায় না,অর্থাৎ প্রতিবার ই ভাগ শেষ থাকবে
function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % 2 == 0) {
            return "Not a prime number";
        }
        return "It is a prime number";
    }
}
var result = isPrime(13);
console.log(result)