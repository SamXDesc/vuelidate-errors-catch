import Main from './src'

export default {
  install: (Vue, options) => {
    Vue.prototype.$extractor = validation => new Main(options).run(validation)
  }
}
