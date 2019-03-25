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
      toast.destroyElement = function() {
        document.body.removeChild(toast.$el);
        toast = null; // 释放内存
      }
    }
    Vue.prototype.$Toast = {
      show
    }
  }
}

/**
 * @param message
 * @param duration 存活时间 默认2500ms
 * @param backgroundColor 背景颜色 默认 #000
 * @param color 字体颜色 默认 #fff
 */
// this.$Toast.show({
//   message: 'O(∩_∩)O哈哈~',
//   duration: 30000,
//   position: '50%',
//   backgroundColor: 'red',
//   color: '#fff'
// })