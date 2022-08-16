import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ClickOutside from "vue-click-outside";
import VCalendar from "v-calendar";
import("./helpers/rightClick");
import("./assets/css/transition.css");

Vue.config.productionTip = false;
Vue.directive("ClickOutside", ClickOutside);

Vue.component("VCalendar", VCalendar);

Vue.use(VCalendar);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
