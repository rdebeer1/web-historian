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
  fs.readFile(archive.paths.siteAssets + asset, function (err, data) {
    if (err) {
      fs.readFile(archive.paths.archivedSites + asset, function (err, data) {
        if (err) {
          callback ? callback() : exports.send404(res);
        } else {
          exports.respond(res, data);
        }
      });
    } else {
      exports.respond(res, data);
    }
  });
};


exports.respond = (res, data, status) => {
  status = status || 200;
  res.writeHead(status, exports.headers);
  res.end(data);
};

exports.send404 = (res) => {
  exports.respond(res, 'Not Found', 404);
};
 

// As you progress, keep thinking about what helper functions you can put here!
