var gulp = require('gulp')
var config = require('../config')

gulp.task('watch', ['build'], function () {
  gulp.watch(config.sass.src, null, ['styles'])
  gulp.watch(config.html.src, null, ['html'])
})
