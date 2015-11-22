'use strict'
let dest = './dist'
let src = '.'
let gutil = require('gulp-util')
let http = require('http')

const apiPort = 3000
const apiHost = 'localhost'
const apiRoot = '/api'

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      fallback: `${src}/index.html`,
      livereload: {
        port: 35929,
      },
    },
  },
  sass: {
    src: `${src}/styles/**/*.{sass,scss,css}`,
    dest: `${dest}/static/styles`,
    settings: {
      includePaths: [`${src}/node_modules/`],
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images', // Used by the image-url helper
    },
  },
  browserify: {
    transforms: [
        { name: 'babelify', opts: { optional: 'es7.decorators' } },
    ],
    options: {
      paths: ['js/'],
      extensions: ['.jsx', '.js'],
    },
    src: `${src}/js/index.jsx`,
    dest: `${dest}/static/js`,
    outputName: 'index.js',
    debug: gutil.env.type === 'dev',
  },
  html: {
    src: `${src}/index.html`,
    dest: dest,
  },
  svg: {
    src: `${src}/static/icons/*.svg`,
    dest: `${dest}/static/icons`,
    options: {
      mode: {
        symbol: true,
      },
    },
  },
  watch: {
    src: [`${src}/js/**`, `${src}/styles/**/*.{sass,scss,css}`],
    tasks: ['build'],
  },
}
