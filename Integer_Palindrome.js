
//Question 2: Given an integer, add it with the reverse of the value, and check if it’s a palindrome. If it isn’t a palindrome, repeat the process until the sum is a palindrome. Print out the number of iterations and the value of the final palindrome. 

//123 + 321 = 444
//215 + 512 = 727
//15 + 51 = 65
//19 + 91 = 110
let flg = true ;
let output = process.argv[2];

let len = output.length; 
let temp = ""; 
for (let i = len-1 ; len>=0;len--)
{
	temp = temp & output[i];

} 
let sum = output + parseInt(temp);

for (let j = sum.length-1;j>=0;j--)
{
	if (sum[j]!=sum[sum.length-1-j])
		{
		continue;
		}
	else
		flg = false;
}
if (!flg)
{
	console.log("input not a palindrome");
}
else
{
	console.log ("Palindrome");
}