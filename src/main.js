import Vue from "vue";
import Axios from "axios";
import App from "./App";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
// Axios.defaults.baseURL = process.env.API_PATH;
Axios.defaults.baseURL = (process.env.API_PATH !== 'production') ? 'http://localhost:8000/' : '';

const token = localStorage.getItem("token");
if (token) {
  // Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
