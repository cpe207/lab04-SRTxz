function primeNumber(a) {
    var n = 0;
    for (var i = 0; i <= a; i++) {
        if (a > 1 && a % i == 0) {
            n++;
        }
        if (n > 2) {
            return "NO";
        }
    }
    return "YES";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
