/**
 * @param {string} s
 * @return {boolean}
 */
// []{}()()[]{}
/*var isValid = function(s) {
let len = s.length;
        let i = 0;
        let flg = true;
        do
        {
            if ((s[i]=="(") && (s[i+1]==")")||(s[i]=="[") && (s[i+1]=="]") || (s[i]=="{") && (s[i+1]=="}"))  
            {
                i+=2;
            }
            else
            {flg = false;
            break;}
        }while (i<len);
    return (flg);
       
};*/

//[[[()]]]{}{}{[([[]])]}

/**
 * @param {string} s
 * @return {boolean}
 */
// []{}()()[]{}
process.argv.splice(0,2);
console.log(process.argv.join(' '));
let x = process.argv.join(' ');
console.log("Parenthesis validation status : " + isValid(x));

function isValid (s) {
    //let len = s.length;
    let stack = [];
    let flg = true ;
    let top=-1;
    for (let i=0;i<s.length;i++)
    {
        
         if (s[i]=="[" || s[i]=="{" || s[i]=="(")
         {
            stack.push(s[i]);
            top++;
            console.log ("Top is " + top);
            console.log("Stack's top is " + stack[top]);
         }
        else if ((s[i]=="]"&&stack[top]=="[")|| (s[i]=="}"&&stack[top]=="{")||(s[i]==")"&&stack[top]=="("))
        {
            stack.pop();
            top--;
        }
        else
        {
            flg = false;
            break;
        }
            
        
    }
    if (!flg)
        return false;
    else
        return stack.length>0?false:true;
       
};


