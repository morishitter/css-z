
var z_index = require('../');
var test = require('colored-tape');

var css = ".z1{z-index:10;}.z2{z-index:20;}.z3{z-index:-3;}.z4{z-index:0;}.z5{z-index:9999;}.z6{z-index:auto;}"

test('z_index.num', function(t) {
  var result = 6;
  var expected = z_index.num(css);

  t.equal(result, expected);

  t.end();
});

test('z_index.max', function(t) {
  var result = 9999;
  var expected = z_index.max(css);

  t.equal(result, expected);

  t.end();
});

test('z_index.min', function(t) {
  var result = -3;
  var expected = z_index.min(css);

  t.equal(result, expected);

  t.end();
})

test('z_index.stats', function(t) {
  var result = [
    { selector: '.z1',
      z_value: '10'},
    { selector: '.z2',
      z_value: '20'},
    { selector: '.z3',
      z_value: '-3'},
    { selector: '.z4',
      z_value: '0'},
    { selector: '.z5',
      z_value: '9999'},
    { selector: '.z6',
      z_value: 'auto'}
  ];
  var expected = z_index.stats(css);

  t.same(result, expected);

  t.end();
});
