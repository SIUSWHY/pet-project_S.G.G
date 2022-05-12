import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Vue2Editor from 'vue2-editor'
import locales from './locales/en.json'

Vue.use(VueI18n, Vue2Editor)

const i18n = new VueI18n({
  locale: 'en',
  messages: { "en": locales }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
