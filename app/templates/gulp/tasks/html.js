'use strict'
let gulp = require('gulp')
let connect = require('gulp-connect')
let config = require('../config').html

gulp.task('html', () => {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload())
})
