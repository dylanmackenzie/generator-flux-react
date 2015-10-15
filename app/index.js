'use strict'
let path = require('path')
let yeoman = require('yeoman-generator')
let yosay = require('yosay')
let slug = require('slug')

let FluxGenerator = yeoman.generators.Base.extend({
  askFor: function () {
    let done = this.async()

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Flux/React generator!'))

    let prompts = [{
      type: 'string',
      name: 'appName',
      message: 'What\'s the name of your application?',
      default: path.basename(process.env.PWD),
    }, {
      type: 'string',
      name: 'appDesc',
      message: 'Describe your application in one sentence:',
      default: '...',
    }, {
      type: 'list',
      name: 'ui',
      message: 'UI Frameworks',
      choices: [{
        value: 'naked',
        name: 'None (Vanilla JS/HTML/CSS)',
      }, {
        value: 'react-bootstrap',
        name:'React Bootstrap',
      }, {
        value: 'material-ui',
        name: 'Material UI (experimental beta)',
      }],
    }]

    this.defaultStore = 'default'
    this.defaultActionCreator = 'default'

    this.prompt(prompts, props => {
      this.appName = props.appName
      this.appSlug = slug(props.appName).toLowerCase()
      this.appDesc = props.appDesc
      this.uiChoice = props.ui
      done()
    })
  },

  app: function () {
    this.mkdir('js')
    this.mkdir('js/components')
    this.mkdir('js/stores')
    this.mkdir('js/actions')
    this.mkdir('js/utils')
    this.copy('js/index.jsx', 'js/index.jsx')
    this.copy('js/dispatcher.js', 'js/utils/dispatcher.js')
    this.copy('_index.html', 'index.html')
    this.copy('js/constants.js', 'js/utils/constants.js')
    this.copy('js/components/app.jsx', 'js/components/app.jsx')

    this.template('_package.json', 'package.json')
    this.template('_README.md', 'README.md')
    this.copy('_bower.json', 'bower.json')
  },

  npm: function () {
    let deps = ['react', 'react-dom', 'flux']
    let devDeps = [
      'eslint', 'babel-eslint', 'eslint-plugin-react', 'gulp-eslint',
      'gulp', 'gulp-connect', 'require-dir', 'vinyl-source-stream',
      'browserify', 'watchify', 'gulp-util', 'vinyl-buffer', 'reactify',
      'babelify', 'gulp-sass', 'gulp-autoprefixer',
    ]

    switch (this.uiChoice) {
    case 'naked':
      break
    case 'material-ui':
      deps.push('material-ui', 'material-ui-sass')
      // fallthrough
    default:
      deps.push(this.uiChoice)
      break
    }

    this.npmInstall(deps, { save: true }, () => {
      this.npmInstall(devDeps, { saveDev: true })
    })
  },

  gulp: function () {
    this.copy('Gulpfile.js', 'Gulpfile.js')
    this.mkdir('gulp')
    this.copy('gulp/config.js', 'gulp/config.js')
    this.mkdir('gulp/tasks')
    this.directory('gulp/tasks', 'gulp/tasks')
  },

  ui: function () {
    this.mkdir('styles/')
    this.directory(`styles/${this.uiChoice}`, 'styles/')
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig')
    this.copy('gitignore', '.gitignore')
    this.copy('eslintrc', '.eslintrc')
    this.copy('js/base-store.js', 'js/utils/base-store.js')
    this.composeWith('flux:store', { args: [this.defaultStore] })
    this.composeWith('flux:action', { args: [this.defaultActionCreator] })
  },
})

module.exports = FluxGenerator
