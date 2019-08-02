import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/dashboard.vue";
import components from "./views/components";
import Features from "./views/Features.vue";
import apps_page from "./views/apps_page";
import Data from "./views/Data.vue";
import Forms from "./views/Forms.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import modal from "../src/views/modal.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/components",
      name: "components",
      component: components
    },
    {
      path: "/features",
      name: "features",
      component: Features
    },
    {
      path: "/apps",
      name: "apps",
      component: apps_page
    },
    {
      path: "/data",
      name: "data",
      component: Data
    },
    {
      path: "/forms",
      name: "forms",
      component: Forms
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/modal",
      name: "modal",
      component: modal
    }
  ]
});
