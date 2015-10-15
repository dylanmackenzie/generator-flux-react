'use strict'
let yeoman = require('yeoman-generator')

let FluxGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log(`You called the Flux Action subgenerator with the argument ${this.name}.`)
  },

  writing: function () {
    let parts = this.name.split('-')
    parts.forEach((part, i) => {
      parts[i][0] = part[0].toUpperCase()
    })
    let name = parts.join('')

    this.template(
      '_action.js',
      `js/actions/${this.name}.js`,
      { name: name }
    )
  },
})

module.exports = FluxGenerator
