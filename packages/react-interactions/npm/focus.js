'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-interactions-events/focus.production.min.js');
} else {
  module.exports = require('./cjs/react-interactions-events/focus.development.js');
}
console.log("here")
