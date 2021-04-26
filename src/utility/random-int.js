/*
    Generate a simple random integer.

    Exclusive by default.
    0 min, 5 max has a range of 5 total numbers, 0 - 4.


    random-int.js
    Alex Iuculano, 2019
*/


module.exports = (min = 0, max = 1, inclusive = false) =>
{
    min       = Math.ceil(min);
    max       = Math.floor(max);
    inclusive = (inclusive) ? 1 : 0;
    
    return Math.floor(Math.random() * ((max - min) + inclusive)) + min;
}
