import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store/store";
// 网页基础样式文件
import "./common/style/index.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
