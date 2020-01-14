import Vue from 'vue'
import App from './App.vue'
import router from './router'

 import store1 from './store1'; 

Vue.config.productionTip = false

new Vue({
  router,
 
  store1, 
  render: h => h(App)
}).$mount('#app')
