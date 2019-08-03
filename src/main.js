import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";
import VModal from "vue-js-modal";
import Modal from "../src/components/Modal";
import Vuelidate from "vuelidate";

Vue.use(VModal);
Vue.use(Modal);
Vue.component("NavTop", require("./components/NavTop.vue").default);
Vue.component("NavBottom", require("./components/NavBottom.vue").default);
Vue.component("Modal", Modal);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  methods: {
    confirm(message) {
      this.$modal.dialog(message).then(confirmed => {
        confirmed ? alert("Proceed") : alert("cancel");
      });
    }
  },
  router: router,
  render: h => h(App)
}).$mount("#app");
