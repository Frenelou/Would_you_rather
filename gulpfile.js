// Gulpfile to autocompile css changes
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./src/sass/*').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/sass/*', gulp.series('sass'));
});
gulp.task('default', gulp.series('sass', 'watch'));
