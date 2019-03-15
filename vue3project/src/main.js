import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import './common/style/reset.less';
import './common/style/rem.less';
import './common/directive';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
