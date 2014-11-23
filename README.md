[![Build Status](https://travis-ci.org/feklee/interpolating-polynomial.svg?branch=master)](https://travis-ci.org/feklee/interpolating-polynomial)

Introduction
============

This package provides an implementation of Lagrange interpolating polynomials.

The focus of this package is simplicity: It’s small, and there is no dependency
on complex 3rd party packages. Computation happens according to
[Neville’s algorithm][5].


Example
=======

Code (`plotPoint` function not included):

    var interpolatingPolynomial = require('interpolating-polynomial'),
        f = interpolatingPolynomial([[-2, 2],
                                     [-1, -0.5],
                                     [0, 0.5],
                                     [1.5, -1.5]]);

    for (x = -2; x < 2; x += 0.000001) {
        plotPoint(x, f(x));
    }

Result:

![Plot][4]

For bad input, behavior is undefined.


Reading
=======

  * [Polynomial interpolation on Wikipedia][1]

  * [Lagrange polynomial on Wikipedia][2]

  * [Lagrange Interpolating Polynomial on MathWorld][3]


Coding conventions
==================

  * Code needs to validate with JSLint.

  * Comments are in Markdown.

  * Avoid constructors (JS is classless), don’t throw exceptions (not necessary
    in JS).

  * Versioning: major.minor.bug-fix

    Incompatible changes to the API mandate an update of the major version.

    Keep version up to date in:

      + Git tags

      + `package.json`


License
=======

Except where noted otherwise, files are licensed under the MIT License.


The MIT License (MIT)
---------------------

Copyright (c) 2014 [Felix E. Klee](mailto:felix.klee@inka.de)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: http://en.wikipedia.org/wiki/Polynomial_interpolation
[2]: http://en.wikipedia.org/wiki/Lagrange_polynomial
[3]: http://mathworld.wolfram.com/LagrangeInterpolatingPolynomial.html
[4]: plot.png
[5]: http://en.wikipedia.org/wiki/Neville's_algorithm
