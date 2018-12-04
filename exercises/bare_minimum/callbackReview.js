/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      var firstLine = data.split('\r\n')[0]
      callback(err, firstLine)
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  // TODO
  request(url, (error, response, body) => {
    if (error) {
      cb(error)
    } else {
      cb(error, response.statusCode)
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
