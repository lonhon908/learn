import Modal from '../com/Modal.vue';

export default {
  install(Vue) {
    const ModalConstructor = Vue.extend(Modal);
    let modal = null;
    function info(options) {
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
    function confirm(options = {}) {
      if (modal) return;
      const div = document.createElement('div');
      const propsData = Object.assign({}, options, {
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: options.confirmButtonText || '确定',
        cancelButtonText: options.cancelButtonText || '取消',
      })
      modal = new ModalConstructor({
        el: div,
        propsData: propsData,
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
      info,
      confirm,
      hide,
    }
  }
}
