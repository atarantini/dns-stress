var dns = require('dns');

/* Function taken from http://scriptar.com/JavaScript/permute.html */
var wordlist = [], usedChars = [];
function permute(input) {
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length == 0) wordlist[wordlist.length] = usedChars.join("");
    permute(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
}

permute('abcd');
//console.log(wordlist);

wordlist.forEach(function(word) {
	dns.resolve4(word+'.com.ar', function(err, addresses) {
		if (err) {
			//throw err;
		} else {
			console.log(word+'.com.ar : '+JSON.stringify(addresses));
		}
	});
});
