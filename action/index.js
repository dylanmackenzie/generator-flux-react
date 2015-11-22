'use strict'
let yeoman = require('yeoman-generator')

let FluxGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log(`You called the Flux Action subgenerator with the argument ${this.name}.`)
  },

  writing: function () {
    let parts = this.name.split('-')
    parts = parts.map(part => part[0].toUpperCase() + part.slice(1))
    let name = parts.join('')

    this.template(
      '_action.js',
      `js/actions/${this.name}.js`,
      { name: name }
    )
  },
})

module.exports = FluxGenerator
