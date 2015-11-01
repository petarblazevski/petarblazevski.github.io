var gulp = require('gulp');
var config = require('./assets/config');
var util = require('gulp-util');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  	gulp.src(config.css.sass.folder + '/**/*.scss')
  		.pipe(sourcemaps.init())
	    .pipe(sass())
	    .on('error', function(e) {
	    	notify.onError({
	    		title: 'SASS',
	        	message: 'Compiling Faild!!',
	        	onLast: true
	    	})(e);

	    	console.log(e);

	    	this.emit('end');
	    })
	    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest(config.css.outputFolder))
	    .pipe(notify({
	    	title: 'SASS',
	        message: 'Successfully compiled',
	        onLast: true
	    }))
	    .pipe(browserSync.stream());
});

gulp.task('test', function() {
	console.log(config);
})

// Default action when gulp is called
gulp.task('default', ['watch']);

gulp.task('watch', function() {

	browserSync.init(config.browserSync.options);
	
	gulp.watch(config.css.sass.folder + '/**/*.scss', ['sass']);
	gulp.watch("*.html").on("change", browserSync.reload);
})