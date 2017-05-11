var gulp = require('gulp'),
    rimraf = require('rimraf'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename");
var colors = require('colors');
var paths = {
    src: './src/'
};

paths.ts = paths.src + '**/*.ts';
paths.sass = paths.src + './**/*.scss';
paths.css = paths.src + './**/*.css';
paths.js = paths.src + '**/*.js';
paths.jsMap = paths.src + '**/*.map';

function log(message) {
    console.log(message.bgWhite.red);
}

gulp.task('clean-js', function (cb) {
    log('Start: clean js');
    rimraf(paths.js, cb);
    log('End: clean js');
});

gulp.task('clean-js-map', function (cb) {
    log('Start: clean js.map');
    rimraf(paths.jsMap, cb);
    log('End: clean js.map');
});

gulp.task('clean-css', function (cb) {
    log('Start: clean css');
    rimraf(paths.css, cb);
    log('End: clean css');
});

gulp.task('compile-sass', function () {
    log('Start: compile sass');
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.src))
        .on('end', function () { log('End: compile sass') });
});

gulp.task('copy-jit-index', function () {
    log('Start: copy jit index.html');
    gulp.src('./src/index-jit.html')
        .pipe(rename("index.html"))
        .pipe(gulp.dest('./'))
        .on('end', function () { log('End: copy jit index.html ') });
});

gulp.task('clean-jit-index', function (cb) {
    log('Start: clean jit index.html');
    rimraf('index.html', cb);
    log('End: clean jit index.html');
});

gulp.task('watch', function () {
    log('Start: wchating files');
    gulp.watch([paths.sass], ['compile-sass']);
    gulp.watch(["index-jit.html"], ['copy-jit-index']);
    log('End: wchating files');
});

gulp.task('clean', ['clean-js', 'clean-css', 'clean-js-map', 'clean-jit-index', 'clean-aot']);

gulp.task('copy-aot-libraries', function () {
    log('Start: copy aot libraries');
    return gulp.src([
        'node_modules/zone.js/dist/zone.min.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]).pipe(gulp.dest('./production/'))
        .on('end', function () { log('End: copy aot libraries')});
});

gulp.task('copy-aot-index', function () {
    log('Start: copy aot index');
    return gulp.src('./src/index-aot.html')
        .pipe(rename("index.html"))
        .pipe(gulp.dest('./production/'))
        .on('end', function () { log('End: copy aot index') });
});

gulp.task('clean-aot', function (cb) {
    log('Start: clean aot');
    rimraf('./aot', cb);
    rimraf('./production', cb);
    log('Start: clean aot');
});
