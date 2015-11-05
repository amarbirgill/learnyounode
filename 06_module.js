var fs = require('fs')

module.exports = function(dirName, fileType, callback){
  fs.readdir(dirName, function(err, data){
    if(err){
      return callback(err);
    }
    var files = data.filter(matchesExt(fileType))
    callback(null, files);
  })
}

var matchesExt = function(fileType){
  return function(value){
    return value.split('.')[1] == fileType;
  }
}