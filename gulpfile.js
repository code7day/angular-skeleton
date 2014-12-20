var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyHTML = require('gulp-minify-html');

var jsPath = [
    './src/vendor/angular/angular.js',
    './src/vendor/angular-route/angular-route.js',
    './src/vendor/angular-resource/angular-resource.js',
    './src/app.js'
];

gulp.task('js', function() {
    gulp.src(jsPath)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/dist/'))
});

gulp.task('html-index-min', function() {
    var htmlSrc = './src/index.html',
        htmlDst = './public/';

    gulp.src(htmlSrc)
        .pipe(minifyHTML({empty: true}))
        .pipe(gulp.dest(htmlDst));
});

gulp.task('html-pages-min', function() {
    var htmlSrc = './src/pages/*.html',
        htmlDst = './public/pages/';

    gulp.src(htmlSrc)
        .pipe(minifyHTML({empty: true}))
        .pipe(gulp.dest(htmlDst));
});

gulp.task('default', ['js', 'html-index-min', 'html-pages-min']);