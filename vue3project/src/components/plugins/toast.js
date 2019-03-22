import Toast from '../com/Toast';

export default {
  install(Vue) {
    // 创建构造器，类似Vue
    const vueToastController = Vue.extend(Toast);
    let toast = null;
    function show(options = {}) {
      let div = document.createElement('div');
      // 创建实例，与new Vue({el: '#app'}) 一模一样
      toast = new vueToastController({
        el: div,
        propsData: options,
      });
      document.body.appendChild(toast.$el);
      // 调用组件内部的方法
      toast.show();
      // 组件卸载时，移除插入的节点，将实例变量释放
      toast.$destroy = function() {
        document.body.removeChild(toast.$el);
        toast = null; // 释放内存
      }
    }
    Vue.prototype.$Toast = {
      show
    }
  }
}