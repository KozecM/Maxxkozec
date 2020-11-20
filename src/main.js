import Vue from 'vue'
import App from './App.vue'
import bulma from './../node_modules/bulma/css/bulma.css';
import router from "./routes";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  bulma,
  router,
  render: h => h(App),
}).$mount('#app')
