/*jslint node: true, maxerr: 50, maxlen: 80 */

/*global define */

'use strict';

var product = function (x, i, points, n) {
    var j, a = 1;

    for (j = 0; j <= n; j += 1) {
        if (j !== i) {
            a *= (x - points[j][0]) / (points[i][0] - points[j][0]);
        }
    }

    return a * points[i][1];
};

module.exports = function (points) {
    return function (x) {
        var sum = 0, i, n = points.length - 1;

        for (i = 0; i <= n; i += 1) {
            sum += product(x, i, points, n);
        }

        return sum;
    };
};
