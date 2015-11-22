'use strict'
let gulp = require('gulp')
gulp.task('default', ['watchify', 'build:assets', 'watch', 'server'])
