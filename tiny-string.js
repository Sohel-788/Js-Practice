//tinyFriend
var friends = ["SOHEL", "SOHAG MIA", "SADIK KAKU", "ALTAF", "HASU APA", "ANIS", "ATAUR RAHMAN", "MONIR"];

function tinyFriend(friendsList) {
    var smallest = friends[0];
    for (i = 0; i < friends.length; i++) {
        var currentFriends = friendsList[i];
        if (currentFriends.length < smallest.length) {
            smallest = currentFriends;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(friends);
console.log("The tiny friend according to the character is:", smallestName)