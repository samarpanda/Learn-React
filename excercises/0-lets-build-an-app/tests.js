var assert = require('../assert');

exports.run = () => {
  var html = document.body.innerHTML;
  assert(!!html.match(/loading/i), 'found Loading');
};