import messages from './messages/pt-br'

const ValidationExtractor = {
  install: (Vue, options) => {
    Vue.prototype.$extractor = validation => {
      let errors = []

      let params = validation.$params

      const defaultMessage = 'Campo incorreto'

      Object.keys(params).map(type => {
        if (!validation[type]) {
          console.log(Object.keys(messages).includes(type), Object.keys(messages), type)

          if (Object.keys(messages).includes(type)) {
            if (typeof messages[type] === 'function') {
              errors.push(messages[type](params[type]))
              return
            }

            errors.push(messages[type])
            return
          }

           errors.push(defaultMessage)
        }
      })

      return errors
    }
  }
}

export default ValidationExtractor
