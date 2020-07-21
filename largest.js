// largest number of an array
var marks = [33, 44, 55, 66, 77, 88, 99, 22, ];
var max = [0]; //ধরি 33 বড়
for (i = 0; i < marks.length; i++) {
    var element = marks[i]; //i দ্বারা array এর প্রতিটা element কে loop korbe
    if (element > max) {
        var max = element;
    }

}
console.log("The highest score of this array is:", max);