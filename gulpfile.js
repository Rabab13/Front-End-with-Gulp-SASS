var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    vinylFs = require('vinyl-fs')


// HTML TASK
gulp.task('html', function () {
    return gulp.src('stage/html/*.pug')
        .pipe(pug({pretty: true})) // this will make html file as it without compressed.
        .pipe(gulp.dest('dist'))
        .pipe(livereload()) //live reload for the website
});

// CSS TASK 
gulp.task('css', function () {
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss']) //css & sass files
    .pipe(sourcemaps.init()) //To load existing source maps,
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(autoprefixer()) //load CSS3 properties --webkit/--moz
    .pipe(concat('main.css')) //compressed all scss files and css files in one file
    .pipe(sourcemaps.write('.')) //To write external source map files, pass a path relative to the destination to
    .pipe(gulp.dest('dist/css'))//move all files to disruption folder
    .pipe(livereload())
})
//JS TASK
gulp.task('js', function (){
    return gulp.src('stage/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
})

//WATCH TASK
gulp.task('watch', function () {
    require('./server.js')
    livereload.listen();
    gulp.watch("stage/html/**/*.pug", ['html']);
    gulp.watch(['stage/css/**/*.css', 'stage/css/**/*.scss'], ['css']);
    gulp.watch('stage/js/*.js', ['js']);
});
