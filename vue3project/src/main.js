import Vue from 'vue';
import App from './App.vue';
import router from './route';
// 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
import store from './store';
import './common/style/index.less';
import './common/directive';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
