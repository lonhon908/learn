import Modal from '../com/Modal.vue';

export default {
  install(Vue) {
    const ModalConstructor = Vue.extend(Modal);
    let modal = null;
    function show(options) {
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
      modal && document.body.removeChild(modal.$el);
      modal = null;
    }
    Vue.prototype.$Modal = {
      show,
      hide,
    }
  }
}
