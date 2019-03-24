import Overlay from '../com/Overlay';

export default {
  install(Vue) {
    const OverLayConstructor = Vue.extend(Overlay);
    let lay = null;
    function show(options) {
      if (lay) return;
      let div = document.createElement('div');
      lay = new OverLayConstructor({
        el: div,
        propsData: options
      })
      document.body.appendChild(lay.$el);
    }
    function hide() {
      lay && document.body.removeChild(lay.$el);
      lay = null
    }
    Vue.prototype.$OverLay = {
      show,
      hide,
    }
  }
}