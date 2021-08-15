import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import wb from "./registerServiceWorker";
import ClickOutside from "vue-click-outside";
import "./registerServiceWorker";
import("./helpers/rightClick");

Vue.config.productionTip = false;
Vue.directive("ClickOutside", ClickOutside);

Vue.prototype.$workbox = wb;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
