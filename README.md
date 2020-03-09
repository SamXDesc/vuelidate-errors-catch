# Vuelidate Errors Catch

> Simple error message extrator for Vuelidate.

## Features & characteristics

* Ready to use
* Support custom messages
* Support other languages
* Support custom attribute names
* No vue component for message bag, it's an array of messages


### Prerequisites

Works with Vuelidate.

### Installing and usage

Install the package:
```
yarn add vuelidate-errors-catch or npm install vuelidate-errors-catch
```

Import into your main.js application file:
```
import VuelidateErrorsCatch from 'vuelidate-errors-catch'
```

Binds to the Vue app instance:
```
Vue.use(VuelidateErrorsCatch, {
  language: 'ptBR',
  messages: {
    // custom messages [key: value]
  },
  fields: {
    // custom fields [key: value]
  }
})
```

## API Referencce

**language**: The default message language. This version has only english (en-US) and portuguese (pt-BR) language files. *Want to see your language here, please, send a PR.*

**messages**: You can add your own custom messages, can be a String or a Function.
```
messages: {
    document: 'Invalid document.',
    maxMoney: field => `Maximum value of ${field.toLocaleString('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'symbol', minimumFractionDigits: 2 })} reached.`
}
```

**fields**: The form attribute name, or form fields. The package will use for change a raw name for a user-friendly name.
```
fields: {
    ssn: 'social security number',
    user_email: 'email'
}
```

## Contributing

You found a bug? Wish to contribute with the project? Send a PR.