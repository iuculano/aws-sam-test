const pwgPassword = require('./pwg-password');
const clamp       = require('/opt/nodejs/clamp');


exports.handler = async (event) => 
{
    const count = clamp(event.queryStringParameters?.count ?? 1, 5, 20);


    let buffer = [];
    for (let i = 0; i < count; i++)
    {
        buffer.push(pwgPassword(event.queryStringParameters?.length, event.queryStringParameters?.characterSet));
    }

    return {
        "statusCode": "200",
        "headers"   : { "Content-Type": "application/json" },
        "body"      : JSON.stringify(buffer)
    };
};
