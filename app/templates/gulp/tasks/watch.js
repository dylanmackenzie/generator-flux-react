'use strict'
let gulp = require('gulp')
let config = require('../config')

gulp.task('watch', ['build:assets'], () => {
  gulp.watch(config.sass.src, null, ['styles'])
  gulp.watch(config.html.src, null, ['html'])
  gulp.watch(config.svg.src, null, ['svg'])
})
