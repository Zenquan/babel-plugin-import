const
  path = require('path');

exports.resolve = function(pathname) {
  return path.join(__dirname, '../', pathname);
}