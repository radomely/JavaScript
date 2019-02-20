const gulp = require("gulp");
var rigger = require('gulp-rigger');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('html', function () {
    return gulp.src('./src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
});

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
});

gulp.task('img', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'))
);

gulp.task('fonts', () =>
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./build/fonts/'))
);

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch("src/html/*.html", ['html']);
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['js']);
});



 gulp.task('build', function(callback) {
    runSequence('html',
                'sass',
                'img',
                'fonts',
                'browser-sync',
                'watch',
                callback);
  });