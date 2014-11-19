/*jslint node: true, maxerr: 50, maxlen: 80 */

/*global define */

'use strict';

var assert = require('assert'),
    interpolatingPolynomial = require('./node_main.js'),
    util = require('util'),
    assertNumEqual,
    f;

assertNumEqual = function (actual, expected, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.00001; // small but arbitrary
    }
    return assert(Math.abs(actual - expected) < epsilon,
                  util.format('|%d - %d| < epsilon', actual, expected));
};

// No points:
f = interpolatingPolynomial([]);
[1.5, 0, -0.7].forEach(function (x) {
    assertNumEqual(f(x), 0);
});

// One point:
f = interpolatingPolynomial([[0, 0]]);
[1500, 0, -0.72342].forEach(function (x) {
    assertNumEqual(f(x), 0);
});

f = interpolatingPolynomial([[0, 1.7]]);
[234, 0, -7234.43].forEach(function (x) {
    assertNumEqual(f(x), 1.7);
});

f = interpolatingPolynomial([[0, -23432.4]]);
[234, 0, -7234.43].forEach(function (x) {
    assertNumEqual(f(x), -23432.4);
});

// Two points with the same y value:
f = interpolatingPolynomial([[-3.4, 1.5], [1, 1.5]]);
[234, 0, -7234.43].forEach(function (x) {
    assertNumEqual(f(x), 1.5);
});

// Two points, describing a slope:
f = interpolatingPolynomial([[4, 2], [5, 2.5]]);
[-2.5, 0, 4.5].forEach(function (x) {
    assertNumEqual(f(x), x / 2);
});

// Curvy:
f = interpolatingPolynomial([[-1, 4], [0, 2], [1, 6]]);
assertNumEqual(f(0), 2);
assertNumEqual(f(1.5), 10.25);
assertNumEqual(f(-70.54), 14859.1, 0.1);

f = interpolatingPolynomial([[-0.5, 3.5], [-70, 2], [2.5, 6], [-8, -4.3]]);
assertNumEqual(f(0), 3.94625);
assertNumEqual(f(-3.543), 0.561408);
assertNumEqual(f(17.243), 9.84846);
assertNumEqual(f(2343.2), -6.53009 * Math.pow(10, 6), 1);

console.log('Passed');
