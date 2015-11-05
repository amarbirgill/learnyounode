var fs = require('fs')


function listFiles(){
  fs.readdir(process.argv[2], callback)
}

var callback = function(err, files){
  lnth = files.length;
    for (i=0;i<lnth;i++){
      extName = files[i].split('.')[1];
      if(extName == process.argv[3]){
        console.log(files[i]);
      };
    }
}

listFiles();