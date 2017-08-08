const gulp = require('gulp');
const util  = require('gulp-util');

require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

//'default' is a default task, you always execute it.
gulp.task('default', function(){
	//this means that when you call gulp, you pass the flag --production.
	if(util.env.production){
		gulp.start('deps', 'app');
	} else {
		gulp.start('deps', 'app', 'server');
	}
})