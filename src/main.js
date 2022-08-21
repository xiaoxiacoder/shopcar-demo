import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//引入axios
import axios from 'axios'
//设置基础地址
axios.defaults.baseURL = 'https://www.escook.cn'
//axios添加到vue的原型上
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
