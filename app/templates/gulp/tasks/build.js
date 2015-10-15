let gulp = require('gulp')
let connect = require('gulp-connect')
let config = require('../config').watch

gulp.task('build', ['browserify', 'styles', 'html'], () => {
  gulp.src(config.src).pipe(connect.reload())
})
