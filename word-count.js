// Word count in string
var speech = "I am a good   boy. I don't snore   at night."
var count = 0;
for (i = 0; i < speech.length; i++) {
    var charecter = speech[i];
    if (charecter == " " && speech[i - 1] != " ") { // এখানে দুই টা শর্ত ইনডেক্স অনুযায়ী কেরেক্টারের পরের স্পেস গননা করা, আরেকটা হচ্ছে আগের টা বাদ দেওয়া
        count++;
    }
}
count++;
console.log(count);