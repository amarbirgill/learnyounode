 var fs = require('fs')

 var buf = fs.readFileSync(process.argv[2]);
 var bufString = buf.toString();
 var splitString = bufString.split('\n')
 console.log(splitString.length - 1);