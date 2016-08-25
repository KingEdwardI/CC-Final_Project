var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var watch = require('gulp-watch');
var pug = require('gulp-pug');

gulp.task("default", ["clean", "pug", "files"]);

gulp.task("pug", ["clean"], function() {
  return gulp.src('./pug-files/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./html'));
});

gulp.task(
	'clean',
	function () {
	del('./html/*');
  return true;
	}
);

gulp.task(
	'files',
	['clean', 'pug'],
	function () {
		return gulp
			.src([
				'./pug-files/*.html',
        './html/*.html'
			])
			.pipe(gulp.dest('./html'));
	}
);


gulp.task(
	'watch',
	function () {
		gulp.start('default');
		watch([
			'./pug-files/*',
			'./*.html'
		],
		function (events) {
			gulp.start('default');
		});
	}
);
