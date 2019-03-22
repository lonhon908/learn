import Modal from '../com/Modal.vue';

export default {
  // vue插件必须有一个公开的install方法。
  // 这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
  install(Vue) {
    // Vue会在Vue.use()时传递进来，options是全局options
    let opts = { // 默认选项
      value: true,
    }
    opts.onCancel = (function() {
      if (typeof this.onCancel === 'function') {
        this.onCancel()
      }
      this.value = false;
      hide();
    }).bind(opts)
    opts.onOk = (function() {
      if (typeof this.onOk === 'function') {
        this.onOk()
      }
      this.value = false;
      hide();
    }).bind(opts);
    opts.hide = (function() {
      if (typeof this.hide === 'function') {
        this.hide()
      }
      this.value = false;
      // hide();
    }).bind(opts)
    let instance = null;
    function hide() {
      setTimeout(() => {
        document.body.removeChild(instance.$el);
      }, 500);
    }
    function show(option) {
      for(let props in option) {
        if (option.hasOwnProperty(props)) {
          opts[props] = option[props];
        }
      }
      console.log(opts,option)
      // 创建构造器，Vue.extend就是继承一个vue组件，vueModalController跟Vue({})返回的对象一样
      const vueModalController = Vue.extend(Modal);
      // 创建完组件实例后，进行挂载到el上
      // 也可以通过new vueModalController({el: document.createElement('div')})进行挂载。
      // 这种写法跟let vueApp = new Vue({...})完全一样
      instance = new vueModalController({
        propsData: opts,
      }).$mount(document.createElement('div'));
      // 创建完实例之后，要把el添加到body中
      document.body.appendChild(instance.$el);
    }
    Vue.prototype.$Modal = {
      show
    }
  }
}
