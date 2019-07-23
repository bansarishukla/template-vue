import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";

Vue.component("NavTop", require("./components/NavTop.vue").default);
Vue.component("NavBottom", require("./components/NavBottom.vue").default);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
