var assert = require('../assert');

exports.run = () => {
  var html = document.body.innerHTML;
  assert(!!html.match(/Samar\ Panda/), "found Samar Panda.");
};