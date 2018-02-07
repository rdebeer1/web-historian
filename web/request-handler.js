var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('../web/http-helpers');
var fs = require('fs');

var actions = {
  'Get': function (req, res) {
    helper.respond(res, data, status);
  },
  
};








exports.handleRequest = function (req, res) {
  console.log('handleRequest');
  console.log('req.url ', req.url);
  if (req.url === '/') {
    fs.readFile(archive.paths.siteAssets + '/index.html', function(error, content) {
      if (error) {
        console.log('error', error);
        res.writeHead(500);
        res.end();
      } else {
        console.log('readfile');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(content);
        res.end();
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
  // console.log(actions[req.method]);
  // helper.serveAssets(res, archive.paths.siteAssets);
  // var action = actions[req.method];
  // console.log('action ', action);
  // action ? helper.serveAssets(res, asset, callBack) : helper.send404(res);
};