============
 dns-stress
============

With dns-stress you can guess domains and stress your current DNS server. It's sound a bit useless but is a good way for me to learn about JavaScript, NodeJS and networking.

Usage
^^^^^

Download or clone source, uncompress and run the script with the --help argument for documentation::

	$ ./dns-stress.js --help

	Options:

		-h, --help              output usage information
		-V, --version           output the version number
		-c, --charset <string>  Charset seed (default: abcde)
		--tld <string>          Top level domain (default: .com)

	Examples:

		Requesting domains ab.com.ar, a.com.ar, ba.com.ar and b.com.ar

		$ node dns-stress --tld .com.ar --charset ab

		or

		$ ./dns-stress --tld .com.ar --charset ab
A sample output with ".com.ar" TLD and abc charset can look like this::

	a.com.ar : ["190.228.29.81"]
	b.com.ar : ["190.228.29.82"]
	ba.com.ar : ["200.63.16.241"]

Author
^^^^^^

Andres I. Tarantini (atarantini@gmail.com)

License
^^^^^^^

This code is free software and that stuff. The complete license will be included in this software some day.
