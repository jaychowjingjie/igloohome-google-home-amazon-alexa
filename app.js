// main module
// note: order matters here
var fs = require('fs');
var path = require('path');
require('./emily');
require('./jay');

var homeWebsite = "Desktop/Igloohome/test.html";
console.log(path.normalize(homeWebsite));
console.log(path.basename(homeWebsite));
//
// setInterval(function () {
//     console.log("hi");
//
// }, 200);

console.log(__dirname);
