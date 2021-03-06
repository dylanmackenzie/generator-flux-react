'use strict'
let gulp = require('gulp')
let gutil = require('gulp-util')
let sass = require('gulp-sass')
let connect = require('gulp-connect')
let prefix = require('gulp-autoprefixer')
let config = require('../config.js').sass

gulp.task('styles', done => {
  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .on('error', err => {
      // Swallow error if we're building for development
      if (gutil.env.type === 'production') {
        throw err
      } else {
        gutil.log(gutil.colors.red('Error'), 'in sass file', err.messageFormatted, '\n')
        done()
      }
    })
    .pipe(prefix())
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload())
})
