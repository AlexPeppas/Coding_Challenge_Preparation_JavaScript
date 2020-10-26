let x = [1,2,5,1,2,3,5,7,8,9,0,1,4,6,11,464,234,642]; 





x.sort(function(a,b){return a-b});

x = [...new Set(x)];
x.forEach(item =>console.log(item));



/*console.log (Set.prototype.size(x));*/