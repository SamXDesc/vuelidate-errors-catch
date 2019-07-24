// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VuelidateErrorsCatch from 'vuelidate-errors-catch'
import App from './App'
import router from './router'

Vue.use(Vuelidate)
Vue.use(VuelidateErrorsCatch, {
  language: 'fr',
  messages: {
    required: 'Ce champ est obligatoire',
    invalidField: 'Champ invalide'
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
