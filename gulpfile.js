var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyHTML = require('gulp-minify-html');

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

gulp.task('htmlmin', function() {
    var htmlSrc = './src/index.html',
        htmlDst = './public/';

    gulp.src(htmlSrc)
        .pipe(minifyHTML({empty: true}))
        .pipe(gulp.dest(htmlDst));
});

gulp.task('default', ['js', 'htmlmin']);