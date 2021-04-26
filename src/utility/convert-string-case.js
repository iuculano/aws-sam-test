/*
    const CaseTypeEnum = 
    {
        "CAMEL":          0,
        "INVERTED_CAMEL": 1,
        "UPPER":          2,
        "LOWER":          3,
        "RANDOM":         4,    
    };

    exports.CaseTypeEnum = Object.freeze(CaseTypeEnum);
*/


const randomInt = require('./random-int-crypto');


module.exports = (string, caseType = 'Camel', separator = ' ') =>
{
    let buffer = [];
    caseType   = caseType.toUpperCase();

    for(let s of string.split(separator))
    {
        switch(caseType)
        {
            case 'CAMEL':
            {
                buffer.push(s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase());
                break;
            }
    
            case 'INVERTED_CAMEL':
            {
                buffer.push(s.substring(0, 1).toLowerCase() + s.substring(1).toUpperCase());
                break;
            }
    
            case 'UPPER':
            {
                buffer.push(s.toUpperCase());
                break;
            }
       
            case 'LOWER':
            {
                buffer.push(s.toLowerCase());
                break;
            }
    
            case 'RANDOM':
            {
                let charBuffer = '';
                for (let c of s)
                {
                    // Just flip a coin
                    if (randomInt(0, 1, true) == 0)
                    {
                        charBuffer += c.toLowerCase();
                    }
    
                    else
                    {
                        charBuffer += c.toUpperCase();
                    }
                }
    
                buffer.push(charBuffer);
                break;
            }
    
            default:
            {
                console.log(`Invalid case type (string -> ${caseType}).`);
            }
        } // switch


        // buffer.push(temp);
    } // for

    
    return buffer.join(separator);
};
