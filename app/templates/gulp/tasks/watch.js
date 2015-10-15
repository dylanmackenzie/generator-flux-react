let gulp = require('gulp')
let config = require('../config')

gulp.task('watch', ['build'], () => {
  gulp.watch(config.sass.src, null, ['styles'])
  gulp.watch(config.html.src, null, ['html'])
})
