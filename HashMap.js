
/*
hashmap.size() returns the # of elements in the hashmap
hashmap.get(<key>) returns the value of the element of the given key
hashmap.has(<key>) checks to see if the hashmap contains the key that is passed as an argument
hashmap.set(<key>, <value>) accepts 2 arguments and creates a new element to the hashmap
hashmap.delete(<key>) deletes the key/value pair that matches the key that is passed in as an argument
hashmap.clear() clears all elements from the hashmap
*/
let secondHashMap =  new Map ([
	[1,"Alex"],
	[2,"Ermion"],
	["Spyros","Peppas"],
	[3,"Katerina"]
	])




let x = secondHashMap.get(2);
console.log(x);

secondHashMap.set(4,57.45);
console.log(secondHashMap);

secondHashMap.clear();

console.log(secondHashMap);

let Hash = new Map ();

let key = "x";

Hash.set(key,5);

console.log(Hash);


//=============================================================================
let a = {
 
	1 : 45,
	2 : 1,
	3 : 0
};
let count = 0 ;
for (sum of Object.values(a))
{
	console.log (sum +"--");
	count += sum; 
}
console.log ("count " + count);
console.log ("a's Keys " + Object.keys(a));
console.log ("a's Values " + Object.values(a));

console.log ("a's Entries " + Object.entries(a));