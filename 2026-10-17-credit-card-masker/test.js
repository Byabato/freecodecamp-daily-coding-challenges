'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const mask = require('./solution');

// Examples and ordinary supported inputs.
test('masks all but the final four digits in a hyphen-separated number', () => {
    assert.equal(mask('4012-8888-8888-1881'), '****-****-****-1881');
});

test('masks all but the final four digits in a space-separated number', () => {
    assert.equal(mask('4012 8888 8888 1881'), '**** **** **** 1881');
});

test('preserves the original hyphen separators', () => {
    assert.equal(mask('1234-5678-9012-3456'), '****-****-****-3456');
});

test('preserves the original space separators', () => {
    assert.equal(mask('1234 5678 9012 3456'), '**** **** **** 3456');
});

// Important digit-handling cases.
test('preserves zeros in the final four digits', () => {
    assert.equal(mask('2223-0000-4845-0010'), '****-****-****-0010');
});

test('preserves a final suffix containing zeros', () => {
    assert.equal(mask('1234-5678-9012-0000'), '****-****-****-0000');
});

test('does not mask a number with exactly four digits', () => {
    assert.equal(mask('1234'), '1234');
});

test('does not mask a string with fewer than four digits', () => {
    assert.equal(mask('12-3'), '12-3');
});

test('masks all digits when there are more than four, regardless of separators', () => {
    assert.equal(mask('12-34 56'), '**-34 56');
});

test('preserves non-digit characters unchanged', () => {
    assert.equal(mask('1234-5678-9012-3456'), '****-****-****-3456');
});

test('returns an empty string for empty input', () => {
    assert.equal(mask(''), '');
});

// Contract / defensive behavior.
test('throws TypeError for null', () => {
    assert.throws(() => mask(null), TypeError);
});

test('throws TypeError for undefined', () => {
    assert.throws(() => mask(undefined), TypeError);
});

test('throws TypeError for a number instead of a string', () => {
    assert.throws(() => mask(4012888888881881), TypeError);
});

test('throws TypeError for an object instead of a string', () => {
    assert.throws(() => mask({ card: '4012-8888-8888-1881' }), TypeError);
});
