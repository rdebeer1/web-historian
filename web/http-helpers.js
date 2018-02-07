var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  // if (req.url === '/' || req.ulr === '/index.html') {
    // console.log('res ', res);
    console.log();
    fs.readFile(asset);
    // , function(err, data) {
    //   if (err) {
    //     console.log('done fucked up');
    //     // callback ? callback() : this.send404(res);
    //   } else {
    //     this.respond(res, data);
    //   }
    // }); 
    
      //path.basename())
  
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  
  //look in public and serve those files
    //file does not exist in public - look in archive and serve 
      //file does not exist in archive - alternate response or 404
      //serve archived files
    //serve public files
};

exports.respond = (res, data, status) => {
  status = status || 200;
  res.writeHead(status, this.headers);
  res.end(data);
};

exports.send404 = (res) => {
  exports.respond(res, 'Not Found', 404);
};
 

// As you progress, keep thinking about what helper functions you can put here!
