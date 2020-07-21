// Duplicate array element remove method মানে কোন element যদি array এর ভিতর একাধীকবার হয়, তাহলে  শুধু একবার কাউন্ট করা হবে ।
var name = [1, 5, 8, 4, 2, 1, 1, 2, 5, 6, 4, 6, 9];
var uniqueName = [];
for (i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);