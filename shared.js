var chalk = require('chalk');
var highlighter = require('console-highlight');

var prm = chalk.cyan;

function repeat(times, string) {
  return (new Array(times + 1)).join(string);
}

function highlight(code) {
  return highlighter(code, {language: 'javascript', theme: 'monokai'});
}

function logger(prefix) {
  var len = 0;
  prefix = prefix || '';
  if(prefix && prefix.length) {
    len = prefix.length + 3;
    prefix = '[' + chalk.green(prefix) + ']';
  }

  return function() {
    var args = [].slice.apply(arguments).map(function(arg) {
      // indents multiline arguments.
      return arg.split('\n').join('\n' + repeat(len, ' '));
    });
    args.unshift(prefix);
    console.log.apply(console, args);
  };
}

module.exports = {
  prm: prm,
  repeat: repeat,
  highlight: highlight,
  logger: logger
};
