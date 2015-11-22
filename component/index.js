'use strict'
let NamedBase = require('yeoman-generator').generators.NamedBase

module.exports = NamedBase.extend({
  constructor: function () {
    NamedBase.apply(this, arguments)
  },

  writing: function () {
    let parts = this.name.split('-')
    parts = parts.map(part => part[0].toUpperCase() + part.slice(1))
    let name = parts.join('')

    this.template(
      '_component.jsx',
      `js/components/${this.name}.jsx`,
      { name: name }
    )
  },
})
