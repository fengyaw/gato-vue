const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ])
      .then(answers => {
        this.answers = answers
      })
  }

  writing() {
    // 把每一个文件都通过模板转换到目标路径

    const templates = [
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.postcssrc.js',
      'build/build.js',
      'build/check-versions.js',
      'build/logo.png',
      'build/utils.js',
      'build/vue-loader.conf.js',
      'build/webpack.base.conf.js',
      'build/webpack.dev.conf.js',
      'build/webpack.prod.conf.js',
      'config/dev.env.js',
      'config/index.js',
      'config/prod.env.js',
      'index.html',
      'package.json',
      'README.md',
      'src/App.vue',
      'src/assets/logo.png',
      'src/main.js',
      'src/pages/demo/Demo.vue',
      'src/pages/demo/utils/DemoHttp.js',
      'src/permission.js',
      'src/restApi/index.js',
      'src/restApi/modules/DemoApi.js',
      'src/router/index.js',
      'src/router/modules/DemoRouter.js',
      'src/store/index.js',
      'src/store/modules/DemoStore.js',
      'src/style/index.scss',
      'src/style/variables.scss',
      'src/utils/Common.js',
      'src/utils/EventBus.js',
      'src/utils/Request.js',
      'src/utils/Storage.js',
      'static/.gitkeep'
    ]

    templates.forEach(item => {
      // item => 每个文件路径
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}