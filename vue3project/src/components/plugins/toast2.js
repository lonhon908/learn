import ToastConfig from '../com/Toast2.vue'

export default {
  install(Vue) {
    // 生成构造器
    const ToastConstructor = Vue.extends(ToastConfig);
    let instance = null;
    let timer = null;
    /**
     * 
     * @param {*} options { message, duration }
     */
    function show(options = {}) {
      if (instance) {
        instance.visible = true;
        instance.message = options.message;
        if (timer) {
          clearTimeout(timer);
        }
        instance.$el.removeEventListener('transitionend')
        instance.$el.addEventListener('transitionend', )
      } else {
        instance = new ToastConstructor({
          propsData: {
            ...options,
            visible: false
          }
        }).$mount(document.createElement('div'))

        document.body.appendChild(instance.$el, destroyeInstance)
      }
      Vue.nextTick(() => {
        instance.visible = true;
        timer = setTimeout(() => {
          instance.close();
        }, options.duration || 2500);
      })
    }

    function destroyeInstance() {
      instance.$destroy(true);
      instance.$el.parentNode.removeChild(instance.$el);
      instance.$el.removeEventListener('transitionend', destroyeInstance)
      instance = null;
    }

    function hide() {
      if (instance) instance.visible = false;
      instance.$el.addEventListener('transitionend', destroyeInstance.bind(instance))
    }

    Vue.prototype.$Toast = {
      show,
      hide
    }
  }
}