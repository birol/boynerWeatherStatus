/*
 *
 * Component'leri url yönlendirmelerinde kullanabilmek için import etmek gerekiyor.
 *
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import City from './views/City'
import Info from './views/Info'

Vue.use(Router)

/*
 *
 * Routing için 3 url tanımlaması yapmayı yeterli gördüm.
 * Şehirler için tek bir component oluşturup,
 * component içeriğini url içerisinden aldığım parametre ile doldurmayı tercih ettim.
 *
 */

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city/:city',
      name: 'about',
      component: City
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
