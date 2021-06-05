import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ClickOutside from "vue-click-outside";
import('./assets/js/rightClick')

Vue.config.productionTip = false;
Vue.directive('ClickOutside', ClickOutside)

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

