'use strict'
var util = require('util')
var yeoman = require('yeoman-generator')

var FluxGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the Flux Action subgenerator with the argument ' + this.name + '.')
  },

  writing: function () {
    var parts = this.name.split('-')
    parts.forEach(function(part, i) {
      parts[i][0] = part[0].toUpperCase()
    })
    var name = parts.join('')

    this.template(
      '_action.js',
      'js/actions/'+ this.name +'.js',
      { name: name }
    )
  }
})

module.exports = FluxGenerator
