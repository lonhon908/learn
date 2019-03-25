import Modal from '../com/Modal.vue';

export default {
  install(Vue) {
    const ModalConstructor = Vue.extend(Modal);
    let modal = null;
    function show(options) {
      // 防重复弹窗
      if (modal) return;
      const div = document.createElement('div');
      modal = new ModalConstructor({
        el: div,
        propsData: options
      });
      document.body.appendChild(modal.$el);
      modal.show();
      modal.destroyElement = function() {
        hide()
      }
    }
    function hide() {
      // 移除节点
      modal && document.body.removeChild(modal.$el);
      // 释放内存
      modal = null;
    }
    Vue.prototype.$Modal = {
      show,
      hide,
    }
  }
}
