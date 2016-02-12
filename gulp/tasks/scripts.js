var concat, errorHandler, gulp, gulpif, gutil, paths, plumber, uglify;

gulp = require('gulp');
plumber = require('gulp-plumber');
gutil = require('gulp-util');
gulpif = require('gulp-if');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
errorHandler = require('../utils/errorHandler');
paths = require('../paths');

gulp.task('scripts', function() {
	return gulp.src([
		// Jquery
		'bower_components/jquery/dist/jquery.min.js',
		// 'bower_components/svg4everybody/dist/svg4everybody.min.js',
		// Jquery-ui
		'bower_components/jquery-ui-1.9.2.custom/jquery-ui-1.9.2.custom/js/jquery-ui.min.js',
		// Jquery plugins
		'bower_components/jquery-cookie/jquery.cookie.js',
		'bower_components/owl.carousel/dist/owl.carousel.min.js',
		'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
		//  checkbox
		'bower_components/iCheck/icheck.min.js',

		'app/scripts/app.js'
	])
  	.pipe(plumber({
		errorHandler: errorHandler
	}))
	.pipe(concat('app.min.js'))
	.pipe(gulpif(!gutil.env.debug, uglify()))
	.pipe(gulp.dest(paths.scripts));
});



