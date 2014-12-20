var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate');

var jsPath = [
    './src/vendor/angular/angular.js',
    './src/vendor/angular-route/angular-route.js',
    './src/app.js'
];

gulp.task('js', function() {
    gulp.src(jsPath)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/dist/'))
});

gulp.task('default', ['js']);