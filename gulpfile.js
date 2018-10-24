var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});