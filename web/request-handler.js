var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('./http-helpers');
var fs = require('fs');
var urlParser = require('url');

var actions = {
  'GET': function (req, res) {
    var path = urlParser.parse(req.url).pathname;
    if (path === '/') {
      path = '/index.html';
    }
    helper.serveAssets(res, path);
  },
  'POST': function(req, res) {
    var body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      var path = body.substring(4);
      // console.log('body', body);
      // console.log('path', path);
      archive.addUrlToList(path, () => {
        
      });
      res.end('received the message');
    });
  }
};

exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  action ? action(req, res) : helper.send404(res);
};