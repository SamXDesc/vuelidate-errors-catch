import Main from './src'

console.log('SSTART');

export default {
  install: (Vue, options) => {
    Vue.prototype.$extractor = validation => new Main(options).run(validation)
  }
}
