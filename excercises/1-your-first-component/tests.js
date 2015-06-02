var assert = require('../assert');

exports.run = () => {
  var html = document.body.innerHTML;
  var items = document.getElementsByTagName('li');
  assert(!!html.match(/one/), "found one");
  assert(!!html.match(/two/), "found two");
  assert(!!html.match(/three/), "found three");
  assert(items.length === 3, "No. of li items to be 3");
};