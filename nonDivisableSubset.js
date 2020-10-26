/*
==============================DESCRIPTION===========================
Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.

For example, the array S = [19,10,12,10,24,25,22] and k=4 . One of the arrays that can be created is S'[0]=[10,12,15]. Another is S'[1]=[19,22,24]. After testing all permutations, the maximum length solution array has 3 elements.





*/




/*'use strict';

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


*/
function isNumber(n){
    return Number(n)=== n;
}

let x = 7;
let array = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436];

nonDivisibleSubset (x,array);

function nonDivisibleSubset(k, s) {
    let stack = [];
    let output = [];
      
    for (let i=0; i<s.length;i++)
    {
        for (let j=i;j<s.length;j++)
        {
            stack.push(s[j]);
            //console.log (" this has been pushed :  " + stack[stack.length-1]);
            if (stack.length>1)
            {
                for (let x=0 ; x<stack.length-1;x++)
                {
                    //console.log("iterating stack : " + stack[x]);
                    //console.log("top of stack : " + stack[stack.length-1]);
                    if ((stack[x]+stack[stack.length-1])%k==0)
                    {
                        //console.log("this has been popped : " + stack[stack.length-1]);
                        stack.pop();
                        break;
                    }
                    else
                        continue;
                }
            }
            else
                continue;   
        }
        output[i]=stack.length;
        /*for (let xx=0 ; xx<stack.length;xx++)
        {
            stack.pop();
            //stack.pop();
        }
        stack.pop();
        console.log("this is the empty stack : " + stack[0]); */
        do {stack.pop();}while ((isNumber(stack.pop())));
    }
    
    console.log(Math.max(...output));
}
/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}
*/