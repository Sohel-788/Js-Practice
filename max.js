// Maximum declare process
// one process
var businessman = 450;
var minister = 350;
var sochib = 550;
if (businessman > minister) {
    if (businessman > sochib) {
        console.log("Businessman is bigger");
    } else {
        console.log("Sochib is bigger");
    }
} else {
    if (minister > sochib) {
        console.log("Minister is bigger");
    } else {
        console.log("Sochib is bigger");
    }
}
// another process | Math.max method
var primeMinister = 10;
var speaker = 5;
var president = 20;
var power = Math.max(primeMinister, speaker, president);
console.log(power)