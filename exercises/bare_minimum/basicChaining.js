/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pc = require('./promiseConstructor.js');
var p = require('./promisification.js');


var writeFileAsync = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pc.pluckFirstLineFromFileAsync(readFilePath)
  .then(function(currUser) {
    return p.getGitHubProfileAsync(currUser);
  })
  .then(function(body) {
    return writeFileAsync(writeFilePath, JSON.stringify(body))
  })
};




// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
