import Vue from 'vue'
import App from './App.vue'
import "./assets/reset.css"
import "./assets/liveCallerLayouts.css"
import router from './router'
// import Icon from "./components/Icon.vue"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.component('Icon', Icon)

