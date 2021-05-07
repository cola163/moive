import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//导入axios(经过封装)
import axios from "@/api/http"
//将axios放在vue的原型上，属性$http
Vue.prototype.$http = axios;
// this.$http.get 等价于 axios.get


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
