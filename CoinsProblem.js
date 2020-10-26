//Question 1: Given coins of value 1, 3, and 6 and a sum, what is the minimum number of coins needed to reach the sum? 1 , 3 ,6 , sum 

//let sum;
let sum = process.argv[2];

let numberofCoins = 0 ;
do
{
	if (sum-6>=0)
	{
	//sum = sum-6;
	sum -= 6;
	numberofCoins++;
	}
	else if (sum-3>=0)
	{
	//sum = sum-3;
	sum -= 3;
	numberofCoins++;

	}
	else if (sum-1>=0)
	{
	//sum = sum -1 ;
	sum -= 1;
	numberofCoins++;
	}
	else
		break;
}while (sum>0);
console.log(numberofCoins);
