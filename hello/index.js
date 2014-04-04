var gulp = require('gulp');
var shared = require('../shared');

function explainHello() {
  var log = shared.logger();

  log('Gulp is a streaming task runner.');
  log('You provide a source:');
  log('  ', shared.highlight('function gulp.src(globs, opts)'),  '[1]');
  log('   -', shared.prm('globs'), '- a single glob or array of globs to match.');
  log('   - Returns a stream of each file that matches your glob(s).');
  log();

  log('You provide a destination:');
  log('  ', shared.highlight('function gulp.dest(path)'),  '[2]');
  log('   -', shared.prm('path'), '- the root into which the virtual files will be written.');
  log('   - Returns a pass through of the stream.');
  log();

  log('And maybe some transformations in between.');
  log();

  log('While processing, files are _not_ transitionally stored on your hard drive.');
  log('Instead, they are streamed into the vinyl-fs virtual file system. [3]');
  log('This improves performance and helps improve build determinism, but can lead to some strange situations.');
  log('It will help to be familiar with node streams!');
  log();

  log('[1] gulp.src - https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options');
  log('[2] gulp.dest - https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath');
  log('[3] vinyl-fs - https://github.com/wearefractal/vinyl-fs');
  log();

  log(shared.highlight(arguments.callee.caller.toString()));

  log('Next task: rename');
}

gulp.task('hello', function helloTask() {
  explainHello();

  // We create our source, as previously mentioned. this variable will always point to the head of the pipeline.
  var source = gulp.src('hello/src/input.js');

  // We add our first pipe, in this case to gulp.dest.
  // This variable will track the tail of our current pipeline.
  var pipeline = source.pipe(gulp.dest('hello/dst'));

  // We return the END of the pipeline to let gulp register event handlers on it.
  // By doing this, we let gulp listen for the stream to close to determine when an async task has completed.
  return pipeline;
});

module.exports = {name: 'hello', description: 'learn about sources and destinations'};
