/*jslint node: true, maxerr: 50, maxlen: 80 */

'use strict';

// Neville's algorithm
module.exports = function (points) {
    var n = points.length - 1, p;

    p = function (i, j, x) {
        if (i === j) {
            return points[i][1];
        }

        return ((points[j][0] - x) * p(i, j - 1, x) +
                (x - points[i][0]) * p(i + 1, j, x)) /
            (points[j][0] - points[i][0]);
    };

    return function (x) {
        if (points.length === 0) {
            return 0;
        }
        return p(0, n, x);
    };
};
