/*
    Generate a psuedo-random password based on a chracter set.


    pwg-password.js
    Alex Iuculano, 2019
*/

const randomInt    = require('/opt/nodejs/random-int-crypto');

const Length       = process.env.API_DEFAULT_LENGTH;
const CharacterSet = process.env.API_DEFAULT_CHARACTER_SET;


module.exports = (length = Length, characterSet = CharacterSet) =>
{
    let buffer = [];
    for (let i = 0; i < length; i++)
    {
        const index = randomInt(0, characterSet.length);
        buffer     += characterSet[index];
    }
    
    return buffer;
}
