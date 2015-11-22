'use strict'
let gulp = require('gulp')
let gutil = require('gulp-util')
let connect = require('gulp-connect')
let svgSprite = require('gulp-svg-sprite')
let config = require('../config').svg

gulp.task('svg', () => {
  return gulp.src(config.src)
    .pipe(svgSprite(config.options))
    .on('error', err => {
      // Swallow error if we're building for development
      if (gutil.env.type === 'production') {
        throw err
      } else {
        gutil.log(err)
      }
    })
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload())
})
