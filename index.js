import messages from './messages/pt-br'

export default validation => {
  let errors = []

  if (validation.hasOwnProperty('$params')) {
    let params = validation.$params

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

        errors.push('Campo incorreto')
      }
    })
  }

  return errors
}
