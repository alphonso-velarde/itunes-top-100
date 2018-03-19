// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Promise from 'es6-promise'
import GlobalFunctions from './mixins/GlobalFunctions'
import VueScrollTo from 'vue-scrollto'

Promise.polyfill()
Vue.config.API_ENDPOINT = process.env.API_ENDPOINT
Vue.config.HOST_URL = process.env.HOST_URL
Vue.config.productionTip = false
Vue.mixin(GlobalFunctions)
Vue.use(VueScrollTo)

var instance = axios.create({
  baseURL: Vue.config.API_ENDPOINT,
  timeout: 30000,
  headers: { 'X-Custom-Header': 'Itunes top 100' }
})

window.axios = instance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
