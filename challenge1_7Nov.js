'use strict';
let pattern = /[^aeiou]/im;
function disemvowel(str) {
	let toret = '';
	for (let index in str)
	{
		if ( str[index].match(pattern) != null){
			toret += str[index].match(pattern)[0];
		}
	}
	return toret;
}
//console.log(disemvowel("Osama Bin Junaid , \n Sadia Raja"));


let disemVowelRefactored = (str) => {
	return str.replace(/[aeiou]/gi,'');
}

console.log(disemVowelRefactored("OsamaBinJUnaid,"));
