var gulp = require('gulp');
var rename = require('gulp-rename');
var shared = require('../shared');

function explain() {
  var log = shared.logger();

  log('How about dependencies in series?');
  log('At this point, we start to get into the woods. Gulp is still relatively new, so');
  log('the options here aren\'t as mature as we might like. The simplest way is to make');
  log('a chain of tasks which each depends on the previous task in the series.');
  log();

  log(shared.highlight(arguments.callee.caller.toString()));

  log('Great work! If you know more that I haven\'t yet covered, make a pull request!');
}

// Runs the dependencies task, which first runs the glob task, and then run our series task.
gulp.task('series', ['dependencies'], function renameTask() {
  explain();

  return gulp.src('dependencies/src/dst/base.css')
  .pipe(rename('processed-in-series.css'))
  .pipe(gulp.dest('series/dst'));
});

module.exports = {name: 'series', description: 'learn about defining task dependencies in series'};
