'use strict'

let to_roman_old = (num) => {
  var roman = ["M", "D", "C", "L", "X", "V", "I"],
  arabic = [1000, 500, 100, 50, 10, 5, 1], result = [];

  for (var i = 0; i < arabic.length; i += 1) {
    while (num % arabic[i] < num) {
      result.push(roman[i]);
      num -= arabic[i];
    }
  }
  return result.join("");
}

let to_roman_new = (num) => {
  var roman = ["M","CM", "D", "CD", "C","XC", "L", "X","IX", "V", "IV", "I"],
  arabic = [1000,900, 500, 400, 100, 90, 50, 10, 9, 5,4, 1], result = [];

  for (var i = 0; i < arabic.length; i += 1) {
    while (num % arabic[i] < num) {
      result.push(roman[i]);
      num -= arabic[i];
    }
  }
  return result.join("");
}

module.exports ={
  to_roman_old,
  to_roman_new
}
