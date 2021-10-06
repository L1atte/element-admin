/*
 * @Author: Latte
 * @Date: 2021-10-06 19:40:14
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 03:12:57
 * @FilePath: \element-admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:30001/api',
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
