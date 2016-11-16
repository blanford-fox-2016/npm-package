'use strict'

const roman = require('../index')

// Require Mocha
const mocha = require('mocha');
const assert = require('chai').assert;
const should = require('chai').should()


describe('to_roman_old', () => {
  it('it should return "M" when given index is 1000', () => {
    assert.equal("M", roman.to_roman_old(1000))
  });
  it('it should return "D" when given index is 500', () => {
    assert.equal("D", roman.to_roman_old(500))
  });
  it('it should return "C" when given index is 100', () => {
    assert.equal("C", roman.to_roman_old(100))
  });
  it('it should return "L" when given index is 50', () => {
    assert.equal("L", roman.to_roman_old(50))
  });
  it('it should return "X" when given index is 10', () => {
    assert.equal("X", roman.to_roman_old(10))
  });
  it('it should return "V" when given index is 5', () => {
    assert.equal("V", roman.to_roman_old(5))
  });
  it('it should return "I" when given index is 1', () => {
    assert.equal("I", roman.to_roman_old(1))
  });
})

describe('to_roman_new', () => {
  it('it should return 1000 when given index is "M"', () => {
    assert.equal("M", roman.to_roman_new(1000))
  });
  it('it should return 900 when given index is "CM"', () => {
    assert.equal("CM", roman.to_roman_new(900))
  });
  it('it should return 500 when given index is "D"', () => {
    assert.equal("D", roman.to_roman_new(500))
  });
  it('it should return 400 when given index is "CD"', () => {
    assert.equal("CD", roman.to_roman_new(400))
  });
  it('it should return 100 when given index is "C"', () => {
    assert.equal("C", roman.to_roman_new(100))
  });
  it('it should return 90 when given index is "XC"', () => {
    assert.equal("XC", roman.to_roman_new(90))
  });
  it('it should return 50 when given index is "L"', () => {
    assert.equal("L", roman.to_roman_new(50))
  });
  it('it should return 10 when given index is "X"', () => {
    assert.equal("X", roman.to_roman_new(10))
  });
  it('it should return 9 when given index is "IX"', () => {
    assert.equal("IX", roman.to_roman_new(9))
  });
  it('it should return 5 when given index is "V"', () => {
    assert.equal("V", roman.to_roman_new(5))
  });
  it('it should return 4 when given index is "IX"', () => {
    assert.equal("IV", roman.to_roman_new(4))
  });
  it('it should return 1 when given index is "I"', () => {
    assert.equal("I", roman.to_roman_new(1))
  });
})
