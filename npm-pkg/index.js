'use strict'

let isEven = function(value) {
    if (typeof(value) != "number") {
        return false
    } else if (value % 2 == 0) {
        return true
    } else {
        return false
    }
}

let isOdd = function(value) {
    if (typeof(value) != "number") {
        return false
    } else if (value % 2 == 1) {
        return true
    } else {
        return false
    }
}

module.exports = {
    isEven: isEven,
    isOdd: isOdd
}
