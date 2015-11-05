var readDir = require('./06_module')
var args = process.argv.slice(2);
var dir = args[0];
var filter = args[1];

readDir(dir, filter, function(err, files){
  if(err){
    console.log(err);
  }else{
    for(i=0;i<files.length;i++){
      console.log(files[i]);
    }
  }
})