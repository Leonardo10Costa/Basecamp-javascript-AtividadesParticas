function saldo (precos){
	return	precos.reduce(function(prev, current){
		console.log({prev});
		console.log({current});
		return prev - current;
	},500);
}

const precos = [10, 20, 55, 100];


console.log(saldo(precos));
