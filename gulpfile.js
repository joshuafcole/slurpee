var chalk = require('chalk');
var gulp = require('gulp');
var shared = require('./shared');

gulp.task('default', function() {
  var log = shared.logger('default');

  var slurpee = chalk.green('slurpee');
  var hello = chalk.green('gulp') + ' ' + chalk.gray('hello');
  var task =  chalk.green('gulp') + ' <' + chalk.gray('task') + '>';
  var tasks =  chalk.green('gulp') + ' ' + chalk.gray('tasks');

  log('Welcome to slurpee!         ,____                 ');
  log('-------------------         `¯¯¯\\\\              ');
  log('                          _______' + chalk.underline('\\\\') + '_______      ');
  log('Slurpee will help you    |----------------|       ');
  log('learn about gulp, the     |    '+slurpee+'   |    ');
  log('streaming task runner.    |              |        ');
  log('                          \\              /       ');
  log('If you are new, type:      |____________|         ');
  log('  '+ hello+'               (____________)         ');
  log('                           (____________)         ');
  log('If you are returning:      (____________)         ');
  log('  '+ task + '              |____________|         ');
  log('                                                  ');
  log('To see a list of tasks:                           ');
  log('  '+ tasks+ '                                     ');
});

var tasks = [
  require('./hello'),
  require('./rename'),
  require('./condensed'),
  require('./glob'),
  require('./dependencies')
];


gulp.task('tasks', function() {
  var log = shared.logger();
  tasks.forEach(function(task) {
    log(task.name, ' - ', task.description);
  });
});
