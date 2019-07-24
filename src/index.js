import * as languagePack from './messages'
import isFunction from './helpers/IsFunction'

const defaultLanguage = 'enUS'

export default class Main {
  constructor(options) {
    this.options = options

    this.fields = this._fields()

    this.language = this._language()
  }

  run(validation) {
    let errors = []

    let messages = Object.keys(languagePack).includes(this.language)
      ? languagePack[this.language]
      : languagePack[defaultLanguage]

    if (validation.hasOwnProperty('$params')) {
      let params = validation.$params

      Object.assign(messages, this.options.messages)

      Object.keys(params).map(type => {
        if (!validation[type]) {
          if (Object.keys(messages).includes(type)) {
            console.log(params, type)

            let scopeField = this._scopeFields(params[type])

            if (!isFunction(scopeField)) {
              if (typeof messages[type] === 'function') {
                errors.push(messages[type](scopeField))
                return
              }

              errors.push(messages[type])
              return
            }
          }

          errors.push(messages['invalidField'])
        }
      })
    }

    return errors
  }

  _language () {
    const { language } = this.options

    return language ? language : defaultLanguage
  }

  _fields () {
    const { fields } = this.options

    return fields
  }

  _scopeFields (params) {
    if (params) {
      delete params.type

      if (Object.keys(params).length === 1) {
        let parameter = Object.values(params)[0]

        switch (true) {
          case typeof parameter === 'string' && Object.keys(this.fields).includes(parameter):
            if (this.fields.hasOwnProperty(parameter)) {
              return this.fields[parameter]
            }

            break

          case typeof parameter === 'function':
            return parameter
        }
      }
    }

    return params
  }
}
