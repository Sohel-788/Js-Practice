//Array declaration
var friendsName = ["Korim", "Rohim", "Ratna", "Shanto", "Sopna"];
console.log(friendsName);
var friendsPosition = [11, 22, 33, 44, 55, 66, 77];
console.log(friendsPosition);
//spicific position
var specifiPostion = [22, 43, 34, 23, 45];
var position = specifiPostion[3];
console.log(position);
// Replacing element in array
var replacing = ["Anis", "Altaf", "Kiron", "Sadik", "korim"];
replacing[2] = "SOHEL";
console.log(replacing);
// pushing a element int last side of array
replacing.push("Sohag");
console.log(replacing);
// Deduct a  element from the last side of arrey
replacing.pop();
console.log(replacing)
    // adding a element in the begginig of the array
replacing.unshift("Jahangir");
console.log(replacing);
// Removine a element in the begginig of the array
replacing.shift();
console.log(replacing);
// Slice a portion from the array
var xx = ['Shanto', 'kanto', 'Susanto', 'Rikanto', 'Ekanto', 'Pikanto', 'Kikanto'];
var slicePortion = xx.slice(2);
console.log(slicePortion);
//Slice middle portion from the array
var middleSlice = xx.slice(3, 4);
console.log(middleSlice)
    // Define the total number in array
console.log(replacing.length)