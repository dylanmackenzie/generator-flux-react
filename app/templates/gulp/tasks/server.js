let gulp = require('gulp')
let connect = require('gulp-connect')
let config = require('../config').server

gulp.task('server', () => {
  connect.server(config.settings)
})
