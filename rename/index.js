var gulp = require('gulp');
var rename = require('gulp-rename');
var shared = require('../shared');

function explain() {
  var log = shared.logger();

  log('What if we want to change the name?');
  log('Since files flowing through gulp are virtual, we can\'t just mv them.');
  log('Gulp is all about plugins. In this case, we\'ll use gulp-rename. [1]');
  log('gulp-rename will edit file\'s metadata as it passes through to reflect your new name.');
  log();

  log('[1] gulp-rename - https://github.com/hparra/gulp-rename');
  log();

  log(shared.highlight(arguments.callee.caller.toString()));

  log('Next task: condensed');
}

gulp.task('rename', function renameTask() {
  explain();

  var source = gulp.src('rename/src/input.js');

  // All gulp plugins take this format. They export a factory function which takes an opts hash.
  // The function returns a new function that transforms each file in the stream as it passes through.
  // Interestingly, they can push extra virtual files (splitting) or fewer (filtering / concatenating).
  var pipeline = source.pipe(rename('output.js'));

  // We need to keep piping from the end or else we'll create a split (which is useful in advanced cases, but not here).
  pipeline = pipeline.pipe(gulp.dest('rename/dst'));

  return pipeline;
});

module.exports = {name: 'rename', description: 'learn about piping through plugins'};
