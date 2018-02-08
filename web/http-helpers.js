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
  var convert = 'utf8';
  fs.readFile(archive.paths.siteAssets + asset, convert, function (err, data) {
    if (err) {
      fs.readFile(archive.paths.archivedSites + asset, convert, function (err, data) {
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

// exports.

exports.respond = (res, data, status) => {
  status = status || 200;
  res.writeHead(status, exports.headers);
  res.end(data);
};

exports.send404 = (res) => {
  exports.respond(res, 'Not Found', 404);
};

exports.redirect = (res, loc, status) => {
  status = status || 302;
  res.writeHead(status, { Location: loc });
  res.end();
};
 

// As you progress, keep thinking about what helper functions you can put here!
