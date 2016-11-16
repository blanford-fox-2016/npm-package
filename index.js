module.exports = {
  // from given number, check wheter it's prime or not
  isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  },

  // checking the primeIndex of given number

  primeIndex(num) {
    var listPrime = [];
    while (listPrime.length < num) {
      for (var i = 2; i < num * num; i += 1) {
        if (checkPrime(i)) {
          listPrime.push(i);
        }
      }
    }
    return listPrime[num - 1];
  }

}
