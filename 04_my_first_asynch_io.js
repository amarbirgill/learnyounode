var fs = require('fs')

function finishedReading(err, data){
  if (err) console.log(err); 
  console.log(data.toString().split('\n').length - 1);
}
fs.readFile(process.argv[2], finishedReading);