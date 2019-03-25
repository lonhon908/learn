import OverLayer from '../com/OverLayer';

export default {
  install(Vue) {
    const OverLayConstructor = Vue.extend(OverLayer);
    let layer = null;
    function show(options) {
      if (layer) return;
      let div = document.createElement('div');
      layer = new OverLayConstructor({
        el: div,
        propsData: options,
      })
      document.body.appendChild(layer.$el);
      layer.show();
    }
    function hide() {
      if (layer) {
        layer.hide().then(() => {
          document.body.removeChild(layer.$el);
          layer = null;
        })
      }
    }
    Vue.prototype.$OverLay = {
      show,
      hide,
    }
  }
}