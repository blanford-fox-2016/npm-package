# npm-package

[![Build Status](https://travis-ci.org/ryanandhaka/travis-ci-npm-package.svg?branch=master)](https://travis-ci.org/ryanandhaka/travis-ci-npm-package)

express-numeral is package that transform your
arabic numeral :left_right_arrow: roman numeral

Installation

```
npm install express-numeral
```

Usage

```
const numeral = require('express-numeral')

numeral.to_roman_old(1000) // this should return "M"
numeral.to_roman_old(500) // this should return "D"

numeral.to_roman_new("C") // this should return 100
numeral.to_roman_new("L") // this should return 50
```

License
MIT
