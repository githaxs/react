'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-server-dom-webpack.production.min.js');
} else {
  module.exports = require('./cjs/react-server-dom-webpack.development.js');
}
console.log("here")
