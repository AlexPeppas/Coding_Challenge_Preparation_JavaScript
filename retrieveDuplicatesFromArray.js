let x = [1,2,5,1,2,3,5,7,8,9,0,1,4,6,11,464,234,642]; 

Array.prototype.getDuplicates = function () {
    var duplicates = {};
    for (var i = 0; i < this.length; i++) {
        if(duplicates.hasOwnProperty(this[i])) {
            duplicates[this[i]].push(i);
        } else if (this.lastIndexOf(this[i]) !== i) {
            duplicates[this[i]] = [i];
        }
    }

    return duplicates;
};


function stringAnagram(dictionary, query) {
    let temp = "";
    let flg=true;
    let output = [];

    let obj = query.getDuplicates()
	for (const [key , value] of Object.entries(obj))
	{
		console.log(`${key} : ${value}`);

}

    
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