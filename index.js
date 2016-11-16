'use strict'

// from given number, check wheter it's prime or not
let isPrime = (num) => {
  for (var i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// checking the primeIndex of given number
// giving the index, the function will give you the prime number
let primeIndex = (num) => {
  var listPrime = [];
  while (listPrime.length < num) {
    for (var i = 2; i < num * num; i += 1) {
      if (isPrime(i)) {
        listPrime.push(i);
      }
    }
  }
  return listPrime[num - 1];
}

module.exports = {
  isPrime,
  primeIndex
}
