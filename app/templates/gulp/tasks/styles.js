let gulp = require('gulp')
let sass = require('gulp-sass')
let connect = require('gulp-connect')
let prefix = require('gulp-autoprefixer')
let config = require('../config.js').sass

gulp.task('styles', () => {
  gulp.src(config.src)
    .pipe(sass(config.settings))
    .pipe(prefix())
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload())
})
