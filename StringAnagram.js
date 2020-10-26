'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'stringAnagram' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY dictionary
 *  2. STRING_ARRAY query
 */

function stringAnagram(dictionary, query) {
    let temp = "";
    let flg=true;
    let output = [];
    
    for ( let i = 0 ; i<query.length ; i ++)
    {
        output[i]=0;
        temp = query[i];
        for (let j = 0 ; j<dictionary.length;j++)
        {
            if (temp.length == dictionary[j].length)
            {
                for (let x = 0 ; x<temp.length; x ++ )
                {
                    //iterate over string
                    if (!(dictionary[j].indexOf(temp[x])>=0))
                    {
                        flg = false;
                        break;
                    }
                }
            }
            else 
                continue;
            if (flg)
            {
                output[i]++;
            }
            else
                flg = true;
        }
    }
    return output;
}

function main() {