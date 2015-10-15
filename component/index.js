'use strict'
var NamedBase = require('yeoman-generator').generators.NamedBase

var ComponentGenerator = module.exports = NamedBase.extend({
  constructor: function() {
    NamedBase.apply(this, arguments);
  },

  writing: function() {
    var parts = this.name.split('-')
    parts.forEach(function(part, i) {
      parts[i][0] = part[0].toUpperCase()
    })

    var name = parts.join('')

    this.template(
      '_component.jsx',
      'js/components/' + this.name + '.jsx'
      { name: name }
    )
  }
})
