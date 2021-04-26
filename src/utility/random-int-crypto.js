/*
    Generate a more random integer.
    Hopefully a bit more random than the more naive random-int().

    Exclusive by default.
    0 min, 5 max has a range of 6 total numbers.


    random-int-crypto.js
    Alex Iuculano, 2019
*/

const crypto = require('crypto');


module.exports = (min = 0, max = 1, inclusive = false) =>
{
    const uint32Max    = Math.pow(2, 32) - 1;
    const randomBuffer = crypto.randomBytes(4);
    const randomNumber = randomBuffer.readUInt32LE(0, 4) / uint32Max;


    min       = Math.ceil(min);
    max       = Math.floor(max);
    inclusive = (inclusive) ? 1 : 0;
    
    return Math.floor(randomNumber * ((max - min) + inclusive)) + min;
}
