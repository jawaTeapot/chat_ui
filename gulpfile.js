const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

exports.default = buildStyles;
exports.watch = function () {
  return gulp.watch('./scss/**/*.scss', buildStyles);
};