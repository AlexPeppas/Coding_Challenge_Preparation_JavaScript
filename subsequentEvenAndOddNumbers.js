//a string is provided consisted of integers . Insert * if subsequent numbers are even and insert - if subsequent numbers are odd.

let x = "21462675756"
//let x = "98676555533";
let y = [];
for (let i = 0 ;  i < x.length ; i ++)
{
		y.push(x[i]);
	if (i!=(x.length-1))
	{		
		if ((parseInt(x[i])%2==0) && (parseInt(x[i+1])%2==0))
			y.push("*");	
		else if ((parseInt(x[i])%2!=0) && (parseInt(x[i+1])%2!=0))
			y.push("-");
		else
			continue;
	}
	else 	
		break;
}

console.log(...y);