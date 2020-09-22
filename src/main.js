import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "view-design/dist/styles/iview.css";
import {
  Modal,
  Spin
} from "view-design";
import animated from "animate.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(animated);
Vue.component("Modal", Modal);
Vue.component('Spin', Spin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");