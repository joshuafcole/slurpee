var gulp = require('gulp');
var rename = require('gulp-rename');
var shared = require('../shared');

function explain() {
  var log = shared.logger();

  log('How do we specify dependencies?');
  log('In the simplest case, we can just specify an array of tasks to run before the current task.');
  log('  ', shared.highlight('function gulp.task(name, deps, task)'));
  log('Specified dependencies will be run in parallel before the task itself is run.');
  log();

  log(shared.highlight(arguments.callee.caller.toString()));

  log('Next task: series');
}

// Runs the glob task, then renames base.scss to dependencies/dst/output.css
gulp.task('dependencies', ['glob'], function renameTask() {
  explain();

  return gulp.src('glob/src/dst/base.css')
  .pipe(rename('output.css'))
  .pipe(gulp.dest('dependencies/dst'));
});

module.exports = {name: 'dependencies', description: 'learn about simple dependencies in gulp'};
