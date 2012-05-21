============
 dns-stress
============

With dns-stress you can guess domains and stress your current DNS server. It's sound a bit useless but is a good way for me to learn about JavaScript, NodeJS and networking.

Usage
^^^^^

Download or clone source, uncompress and edit with a text editor (yes, since I'm new to this stuff no command line arguments can be passed: sorry!) and modify the `// Config` section. Then run the script::

	$ node dns-stress.js

A sample output with ".com.ar" TLD can be like this::

db.com.ar : ["205.251.152.178"]
bcda.com.ar : ["50.28.1.112"]
bcd.com.ar : ["208.76.83.152"]
d.com.ar : ["107.22.168.59"]
db.com.ar : ["201.212.0.94"]
cd.com.ar : ["173.230.128.100"]
bdc.com.ar : ["201.212.0.94"]
dcb.com.ar : ["200.58.115.152"]
dab.com.ar : ["200.51.197.79"]
cda.com.ar : ["190.228.29.81"]
bd.com.ar : ["82.98.86.167"]

Author
^^^^^^

Andres I. Tarantini (atarantini@gmail.com)

License
^^^^^^^

This code is free software and that stuff. The complete license will be included in this software some day.
