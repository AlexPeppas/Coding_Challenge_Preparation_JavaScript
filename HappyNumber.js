/**
 * @param {number} n
 * @return {boolean}
 */

    let n=process.argv[2];
    let flg;
    let sum = 0 ;
    for (let i=0;i<30;i++)
    {
        if (n<0)
            break;
        else if (n=1)
            break;
        else
            n=Recurs(n);
    }   
    if (n=1)
        console.log("HappyNumber");
    else
        console.log("SadNumber");


function Recurs (x)
{
    let newNum=0;
    let str = x.toString();
    for (let i=0;i<str.length;i++)
        {
            newNum += parseInt(str[i])^2;
        }
    return (newNum);
}

//leetCode
/*

// * @param {number} n
// * @return {boolean}

var isHappy = function(n) {
    let flg;
    for (let i=0;i<10;i++)
    {
        if (n<0)
            break;
        else if (n=1)
            break;
        else
            n=Recurs(n);
    }   
    if (n=1)
        return true;
    else
        return false;
};

function Recurs (x)
{
    let newNum=0;
    let str = x.toString();
    for (let i=0;i<str.length;i++)
        {
            newNum += parseInt(str[i])^2;
        }
    return (newNum);
}
*/