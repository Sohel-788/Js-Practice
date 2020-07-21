//brickCalculator
function brickCalculator(numberofFloor) {
    var firstTenFloor = 10;
    var tenToTwentyFloor;
    var moreThanTwentyFloor;
    if (numberofFloor <= 0) {
        return 'Number of floor must have be greater than zero'
    } else {
        if (numberofFloor <= 10) {
            firstTenFloor = numberofFloor;
            var result1 = firstTenFloor * 15 * 1000;
            return result1;
        } else if ((numberofFloor > 10) && (numberofFloor <= 20)) {
            tenToTwentyFloor = numberofFloor - firstTenFloor;
            var result2 = ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000));
            return result2;
        } else if (numberofFloor > 20) {
            var tenToTwentyFloor = 10;
            var moreThanTwentyFloor = numberofFloor - firstTenFloor - tenToTwentyFloor;
            var result3 = ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000) + (moreThanTwentyFloor * 10 * 1000));
            return result3;
        }
    }
}
var totalBricks = brickCalculator(10); // You can input any of values here() except 0; 
console.log("You need total:", totalBricks, "bricks")