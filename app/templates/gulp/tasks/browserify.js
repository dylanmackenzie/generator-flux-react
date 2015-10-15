var gulp = require('gulp')
var gutil = require('gulp-util')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var watchify = require('watchify')
var connect = require('gulp-connect')
var config = require('../config').browserify

Object.assign(watchify.args, config.options)
watchify.args.debug = config.debug
var bundler = watchify(browserify(config.src, watchify.args))
config.transforms.forEach(function(t) {
  bundler.transform(t.name, t.opts)
})

bundler.on('update', function () {
  gutil.log(gutil.colors.green('Changes detected, running Watchify'))
})
bundler.on('update', bundle)
gulp.task('browserify', bundle)

function bundle() {
  return bundler.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, gutil.colors.red('Browserify Error')))
  .on('end', gutil.log.bind(gutil, gutil.colors.green('Watchify Complete')))
  .pipe(source(config.outputName))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload())
}
