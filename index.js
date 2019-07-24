import * as messages from './messages'

const ValidationExtractor = {
  install: (Vue, options) => {
    console.log(messages['enUS'])

    Vue.prototype.$extractor = validation => {
      let errors = []

      let language = options.language ? options.language : 'ptBR'

      if (validation.hasOwnProperty('$params')) {
        let params = validation.$params

        Object.assign(messages[language], options.messages)

        Object.keys(params).map(type => {
          if (!validation[type]) {
            if (Object.keys(messages[language]).includes(type)) {
              if (typeof messages[language][type] === 'function') {
                errors.push(messages[language][type](params[type], options.fields))
                return
              }

              errors.push(messages[language][type])
              return
            }

            errors.push(messages[language]['invalidField'])
          }
        })
      }

      return errors
    }
  }
}

export default ValidationExtractor
