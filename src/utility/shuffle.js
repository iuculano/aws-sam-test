/*
    Shuffles an array.

    Implements the Fisher-Yates algorithm.
    https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm


    shuffle.js
    Alex Iuculano, 2019
*/

const randomInt = require('./random-int');


module.exports = (data) =>
{
    if (!Array.isArray(data))
    {
        throw 'Data is not an array - nothing to shuffle.';
    }


    let buffer = data;
    for (let i = (data.length - 1); i > 0; i--)
    {
        // Basically just a random swap...
        let index     = randomInt(0, data.length);
        
        let temp      = data[i];
        buffer[i]     = data[index];
        buffer[index] = temp;
    }
    
    return buffer;
}
