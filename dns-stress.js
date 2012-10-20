#!/usr/bin/env node

//
// dns-stress can guess/discovery domains and stress your current DNS server
//
// Copyright 2012 Andres Tarantini (atarantini@gmail.com)
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

var dns = require('dns');
var cli = require('commander');

// Config
var tld = ".com";	// Top level domain (TLD)
var charset = 'abcde';		// Input string to iterate/permute/generate words

// Command-line arguments parsing
cli.version('0.0.1')
	.option('-c, --charset <string>', 'Charset seed (default: '+charset+')')
	.option('--tld <string>', 'Top level domain (default: '+tld+')')
	.on('--help', function(){
		console.log('  Examples:');
		console.log('');
		console.log('    Requesting domains ab.com.ar, a.com.ar, ba.com.ar and b.com.ar');
		console.log('');
		console.log('      $ node dns-stress.js --tld .com.ar --charset abc');
		console.log('');
		console.log('      or');
		console.log('');
		console.log('      $ ./dns-stress.js --tld .com.ar --charset abc');
		console.log('');
	})
	.parse(process.argv);

if(cli.charset) { charset = cli.charset; }
if(cli.tld) { tld = cli.tld; }

// Make charset seed permutations to generate wordlist
var wordlist = []
function permutate(permutation, charset) {
	if (charset.length == 0) {
		if(wordlist.indexOf(permutation) == -1) { wordlist[wordlist.length] = permutation; }
		return;
	}
	for (var i = 0; i < charset.length; i++) {
		permutate(permutation + charset.charAt(i), charset.substring(0, i) + charset.substring(i+1, charset.length));
	}
	for (var i = permutation.length; i > 0; i--) { permutate("", permutation.substring(0, i)); }
}
console.log("Creating wordlist from charset seed...");
permutate("", charset);

// Loop wordlist and try to resolv each domain
console.log('Requesting '+wordlist.length+' domains...');
wordlist.forEach(function(word) {
	var domain = word+tld;
	dns.resolve4(domain, function(err, addresses) {
		if (err) return console.log(err)
		console.log(domain+' : '+JSON.stringify(addresses));
	});
});
