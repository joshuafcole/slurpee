var gulp = require('gulp');
var rename = require('gulp-rename');
var shared = require('../shared');

function explainCondensed() {
  var log = shared.logger();

  log('Doesn\'t that seem kind of verbose?');
  log('I wrote out each step discretely to comment on them better.');
  log('For the most part you\'ll instead see tasks written as a single method chain.');
  log();

  log(shared.highlight(arguments.callee.caller.toString()));

  log('Next task: glob');
}

gulp.task('condensed', function renameTask() {
  explainCondensed();

  // Little cleaner, right?
  return gulp.src('rename/src/input.js')
  .pipe(rename('output.js'))
  .pipe(gulp.dest('rename/dst'));
});

module.exports = {name: 'condensed', description: 'learn about writing tasks idiomatically'};
