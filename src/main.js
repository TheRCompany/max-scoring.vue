import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";
import axios from "axios";

axios.defaults.baseURL = process.env.ROOT_API || "http://localhost:3030";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
