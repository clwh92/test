import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.sass'
import limitNum from './assets/directive/inputValid.js'
Vue.config.productionTip = false
Vue.use(elementui)
Vue.directive('limitNum', limitNum)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
