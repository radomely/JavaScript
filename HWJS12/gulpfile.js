'use strict';
const gulp = require("gulp");// Подключаем Gulp
var rigger = require('gulp-rigger');// Подключаем плагин Rigger
var sass = require('gulp-sass');//Подключаем Sass пакет
const autoprefixer = require('gulp-autoprefixer');// Подключаем плагин Autoprefixer
var cssnano = require('gulp-cssnano');// Подключаем пакет для минификации CSS
const imagemin = require('gulp-imagemin');// Подключаем пакет gulp-imagemin для сжатия картинок
const browserSync = require('browser-sync');// Подключаем Browser Sync
var runSequence = require('run-sequence');// Подключаем плагин run-sequence
var rename = require('gulp-rename'); // Подключаем библиотеку для переименования файлов
const babel = require('gulp-babel');

gulp.task('html', function () {// Создаем таск "html"
    return gulp.src('./src/index.html')// Берем источник
        .pipe(rigger())//Импортируем один файл в другой простой конструкцией "//= footer.html" эта строка при компиляции будет заменена на содержимое файла footer.html
        .pipe(gulp.dest('./build/'))// Выгружаем результат в папку build/
        .pipe(browserSync.reload({stream: true})); // Обновляем HTML на странице при изменении
});

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {// Создаем таск "sass"
  return gulp.src('./src/scss/style.scss')// Берем источник
    .pipe(sass().on('error', sass.logError))// Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer({//автоматически добавляет вендорные префиксы к CSS свойствам
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())// Сжимаем
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest('./build/css/'))// Выгружаем результат в папку build/css
    .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task('js', () =>
    gulp.src('./src/js/*.js')
        // .pipe(babel())
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.reload({stream: true})) // Обновляем JS на странице при изменении
);

gulp.task('img', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())//Он умеет сжимать картинки форматов PNG, JPEG, GIF и SVG
        .pipe(gulp.dest('./build/images/'))
);

gulp.task('fonts', () =>
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./build/fonts/'))
);

gulp.task('browser-sync', function(){// Создаем таск browser-sync
    browserSync({// Выполняем browser Sync
        server: {// Определяем параметры сервера
            baseDir: "build"// Директория для сервера - build
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function(){
    gulp.watch("src/html/*.html", ['html']);// Наблюдение за html файлами и при сохранении выполняет таск html.
    gulp.watch("src/scss/*.scss", ['sass']);// Наблюдение за sass файлами и при сохранении выполняет таск sass, который автоматически компилирует их в css файлы.
    gulp.watch("src/js/*.js", ['js']);// Наблюдение за js файлами и при сохранении выполняет таск js.
});

// //Для Gulp 4 код будет выглядеть так:
//     gulp.task('watch', function() {
//         gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
//     });

 gulp.task('build', function(callback) {//последовательно запускать задачи Gulp один за другим
    runSequence('html',//запустить таск html перед тем, как запустится sass
                'sass',//запустить таск sass перед тем, как запустится browser-sync
                'js',
                'img',
                'fonts',
                'browser-sync',//запустить таск browser-sync перед тем, как запустится gulp watch
                'watch',
                callback);
  });

  gulp.task('gulp', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);