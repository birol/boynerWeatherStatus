// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import storeOptions from './store'

Vue.config.productionTip = false

Vue.use(Vuex)

/*
 *
 * Vuejs'in oluşturduğu standart store.js dosyasını kullanmak yerine
 * kendi oluşturduğum store yapısını kullanabilmek için burada vuex'e
 * hazırladığım store dosyasını tanımlıyorum.
 *
 */

const store = new Vuex.Store(storeOptions)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
