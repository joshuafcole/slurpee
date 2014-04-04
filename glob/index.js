var gulp = require('gulp');
var sass = require('gulp-sass');
var shared = require('../shared');

function explainGlob() {
  var log = shared.logger();

  log('What if we want to process multiple files?');
  log('That\'s where globbing comes in. A glob is a regexp typically used for file matching.');
  log('gulp.src can take a single glob string  or an array of multiple glob strings.');
  log('We\'ll use globbing to process multiple sass files in one go with gulp-sass. [1]');
  log();

  log('[1] gulp-sass - https://github.com/dlmanning/gulp-sass');
  log();

  log(shared.highlight(arguments.callee.caller.toString()));

  log('Next task: dependencies');
}

gulp.task('glob', function renameTask() {
  explainGlob();

  // /**/ - At any depth (including depth 0) under the prefix directories.
  // *.scss - Any scss files under the prefix directories.
  return gulp.src('glob/src/**/*.scss')
  .pipe(sass({
    sourceComments: 'map'
  }))
  .pipe(gulp.dest('glob/dst'));
});

module.exports = {name: 'glob', description: 'learn about selecting files as sources'};
