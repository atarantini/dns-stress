var dns = require('dns');

// Config
var tld = ".com.ar";	// Top level domain (TLD)
var seed = 'abcd';		// Input string to iterate/permute/generate words

// Make seed permutations to generate wordlist
var wordlist = []
function permutate(permutation, seed) {
	if (seed.length == 0) {
		//console.log(permutation);
		if(wordlist.indexOf(permutation) == -1) { wordlist[wordlist.length] = permutation; }
		return;
	}
	for (var i = 0; i < seed.length; i++) {
		permutate(permutation + seed.charAt(i), seed.substring(0, i) + seed.substring(i+1, seed.length));
	}
	for (var i = permutation.length; i > 0; i--) { permutate("", permutation.substring(0, i)); }
}
permutate("", seed);

// Loop wordlist and try to resolv each domain
console.log('Requesting '+wordlist.length+' domains...');
wordlist.forEach(function(word) {
	var domain = word+tld;
	dns.resolve4(domain, function(err, addresses) {
		if (err) {
			//throw err;
		} else {
			console.log(domain+' : '+JSON.stringify(addresses));
		}
	});
});
