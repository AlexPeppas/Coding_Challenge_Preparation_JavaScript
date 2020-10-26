//searching for a specific string in a dictionary

var a = {
	"staticData":['----','Blue','Green'], 
	"inData":['Indatahere','----','----'],
	"stringData" : "Alex"
	};

function recerSearch (input , target){

	for (var key in input)
	{
		console.log(key);

		var value = input[key];

		for (var i=0; i<value.length;i++)
		{
			if (value[i] == target) console.log ("Found target '----' in object " + key + " at index " + i);
		}
	}

}

recerSearch(a,'----');
