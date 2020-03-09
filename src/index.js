import * as languagePack from './messages'
import { isFunction } from './helpers'

const defaultLanguage = 'enUS'

export default class Main {
  constructor(options) {
    this.options = options

    this.fields = this._fields()

    const language = this._language()

    this.messages = Object.keys(languagePack).includes(language)
      ? languagePack[language]
      : languagePack[defaultLanguage]

    Object.assign(this.messages, this.options.messages)
  }

  run (validation) {
    let errors = []

    if (validation.hasOwnProperty('$params')) {
      let params = validation.$params

      Object.keys(params).map(type => {
        if (validation.$error && !validation[type]) {
          if (this.messages.hasOwnProperty(type)) {
            let scopeField = this._scopeFields(params[type])

            if (!isFunction(scopeField)) {

              if (isFunction(this.messages[type])) {
                errors.push(this.messages[type](scopeField))
                return
              }

              errors.push(this.messages[type])
              return
            }
          }

          errors.push(this.messages['invalidField'])
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

  _scopeFields (data) {
    if (data) {
      delete data.type

      if (Object.keys(data).length === 1) {

        let parameter = Object.values(data)[0]

        if (!isFunction(parameter) && this.fields.hasOwnProperty(parameter)) {
          return this.fields[parameter]
        }

        return parameter
      }
    }

    return data
  }
}
