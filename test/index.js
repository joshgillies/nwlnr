var test = require('tap').test
  , nwlnr = require('../');

test('line detection', function(t) {
  t.equal(nwlnr('').length, 1, 'One line here');
  t.equal(nwlnr('\n').length, 2, 'Two lines here');
  t.equal("TODO", "TODO", "Add additional tests for OS's other than *nix", { todo: true });
  t.end();
});

