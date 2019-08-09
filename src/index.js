import * as languagePack from './messages'
import isFunction from './helpers/IsFunction'

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

  run(validation) {
    let errors = []

    if (validation.hasOwnProperty('$params')) {
      let params = validation.$params

      Object.keys(params).map(type => {

        // Check if message exist
        if (this.messages.hasOwnProperty(type)) {
          let scopeField = this._scopeFields(params[type])

          if (!isFunction(scopeField)) {

            if (isFunction(this.messages[type])) {
              console.log(type)

              errors.push(this.messages[type](scopeField))
              return
            }

            errors.push(this.messages[type])
            return
          }
        }

        // Else, set generic message
        errors.push(this.messages['invalidField'])
      })

      // Object.keys(params).map(type => {
      //   if (!Object.keys(validation).includes(type)) {

      //     console.log(validation, type)


      //     // if (Object.keys(messages).includes(type)) {
      //     //   console.log(params[type])



      //     //
      //     // }


      //   }
      // })
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

        console.log('fall in here')

        return parameter
      }
    }

    return data
  }
}
