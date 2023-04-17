function findPrimes(numPrimes) {
  let primes = [];
  let num = 2;
  while (primes.length < numPrimes) {
    let isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
  }
  if (isPrime) {
    primes.push(num);
  }
  num++;
}
return primes;
}

let nuPrimes = process.argv[2];
console.time("findPrimes");
let primes = findPrimes(numPrimes);
console.timeEnd("findPrimes");
console.log(primes);