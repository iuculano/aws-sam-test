/*
    Clamp a number to a given range.


    clamp.js
    Alex Iuculano, 2019
*/


module.exports = (number, min, max) =>
{
    if (number < min) return min;
    if (number > max) return max;
    
    return number;
}
