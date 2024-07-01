function primeNumber(a) {
  let n=0;
  for(let i = 0; i <= a; i++) {
    if(a>1 && a%i == 0) {
      n++;
    }
    if(n>2){ 
      return "NO";
    }
  }
  return "YES";
}
const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
// ศรัณย์ ไม้หอม 660610796