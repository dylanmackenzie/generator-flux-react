'use strict'
let gulp = require('gulp')
let gutil = require('gulp-util')
let source = require('vinyl-source-stream')
let browserify = require('browserify')
let watchify = require('watchify')
let connect = require('gulp-connect')
let config = require('../config').browserify

Object.assign(watchify.args, config.options)
watchify.args.debug = config.debug
let bundler = watchify(browserify(config.src, watchify.args))
config.transforms.forEach(t => {
  bundler.transform(t.name, t.opts)
})

bundler.on('update', () => {
  gutil.log(gutil.colors.green('Changes detected, running Watchify'))
})
bundler.on('update', bundle)

gulp.task('watchify', bundle)

gulp.task('browserify', ['watchify'], () => {
  return bundler.close()
})

function bundle() {
  return bundler.bundle()
  // log errors if they happen
  .on('end', gutil.log.bind(gutil, gutil.colors.green('Watchify Complete')))
  .on('error', err => {
    // Swallow error if we're building for development
    if (gutil.env.type === 'production') {
      throw err
    } else {
      gutil.log(gutil.colors.red('Browserify Error:'), err.toString())
    }
  })
  .pipe(source(config.outputName))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload())
}
