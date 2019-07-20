import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";
import "hchs-vue-charts";
import ProgressBar from 'vuejs-progress-bar';
Vue.use(ProgressBar)
Vue.use(window.VueCharts);

Vue.component('NavBar1', require('./components/NavBar1.vue').default);
Vue.component('NavBar', require('./components/NavBar.vue').default);
Vue.component('navbar', require('./components/navbar2.vue').default);
Vue.component('bansari', require('./components/bansari.vue').default);


Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
