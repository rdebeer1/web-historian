var archive = require('../helpers/archive-helpers');


archive.readListOfUrls( (dataArray) => {
  console.log('dataArray', dataArray);
});

// archive.downloadUrls);
console.log('here', archive.downloadUrls);

// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
