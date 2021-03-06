
var parse = require('css-parse');
var _ = require('underscore');

module.exports.num = function(css) {
  var ast = parse(css);
  var retNum = 0;

  ast.stylesheet.rules.forEach(function visit(rule) {
    if (rule.rules) rule.rules.forEach(visit);

    rule.declarations.forEach(function(declaration) {
      if (declaration.property === 'z-index') {
        retNum++;
      }
    });
  });

  return retNum;
};

module.exports.max = function(css) {
  var ast = parse(css);
  var z_values = [];

  ast.stylesheet.rules.forEach(function visit(rule) {
    if (rule.rules) rule.rules.forEach(visit);

    rule.declarations.forEach(function(declaration) {
      if (declaration.property === 'z-index') {
        if (declaration.value === 'auto') return

        z_values.push(+declaration.value);
      }
    });
  });

  return _.max(z_values);
};

module.exports.min = function(css) {
  var ast = parse(css);
  var z_values = [];

  ast.stylesheet.rules.forEach(function visit(rule) {
    if (rule.rules) rule.rules.forEach(visit);

    rule.declarations.forEach(function(declaration) {
      if (declaration.property === 'z-index') {
        if (declaration.value === 'auto') return

        z_values.push(+declaration.value);
      }
    });
  });

  return _.min(z_values);
};

module.exports.stats = function(css) {
  var ast = parse(css);
  var z_stats = [];

  ast.stylesheet.rules.forEach(function visit(rule) {
    if (rule.rules) rule.rules.forEach(visit);

    rule.declarations.forEach(function(declaration) {
      if (declaration.property === 'z-index') {
        var that = {};
        that.selector = rule.selectors.pop();
        that.z_value = declaration.value;

        z_stats.push(that);
      }
    });
  });

  return z_stats;
};
