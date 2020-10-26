let s = process.argv[2];

validS(s);

function validS (s) {
    const stack = []
    const parentheses = {
        ")":"(",
        "]":"[",
        "}":"{"
    }
    
    for(p of s){
        console.log(Object.values(parentheses).includes(p));
           console.log(Object.keys(parentheses).includes(p));
		}   
    
}