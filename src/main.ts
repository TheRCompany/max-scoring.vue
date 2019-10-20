import App from './App.vue';
import Vue from 'vue';
import axios from 'axios';
// import i18n from './i18n';
// import router from './router';
// import store from './store';

axios.defaults.baseURL = process.env.ROOT_API || 'http://localhost:3030';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  // store,
  // router,
  // i18n,
  render: h => h(App),
}).$mount('#app');
