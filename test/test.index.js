'use strict'

const Pr = require('../index')

// Require Mocha
const mocha = require('mocha');
const assert = require('chai').assert;
const should = require('chai').should()


describe('isPrime', () => {
  it('it sould return true when the given number is prime', () => {
    assert.equal(true, Pr.isPrime(2))
  });
  it('it should return false when the given number is not prime', () => {
    assert.equal(false, Pr.isPrime(4))
  });
  it('it should return 7 when given index is 4', () => {
    assert.equal(7, Pr.primeIndex(4))
  });
  it('it should return `undefined` when given index is 0', () => {
    assert.equal(undefined, Pr.primeIndex(0))
  });
  it('it should return `undefined` when given index is less than 0', () => {
    assert.equal(undefined, Pr.primeIndex(0))
  });
});
