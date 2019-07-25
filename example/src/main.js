// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VuelidateErrorsCatch from 'vuelidate-errors-catch'
import App from './App'
import router from './router'

Vue.use(Vuelidate)
Vue.use(VuelidateErrorsCatch, {
  language: 'ptBR',
  messages: {
    document: 'CPF inválido',
    maxMoney: field => `Valor máximo de ${field.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol', minimumFractionDigits: 2 })} atingido`
  },
  fields: {
    document: 'CPF',
    name: 'nome',
    lastname: 'sobrenome',
    email: 'e-mail'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
