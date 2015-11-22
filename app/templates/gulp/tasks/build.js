'use strict'
let gulp = require('gulp')
let connect = require('gulp-connect')
let config = require('../config').watch

gulp.task('build:assets', ['styles', 'html', 'svg'], () => {
  gulp.src(config.src).pipe(connect.reload())
})

gulp.task('build', ['browserify', 'build:assets'])
