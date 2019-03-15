import Vue from 'vue';

import Drag from './drag';

Vue.directive('drag', {
  bind(el, binding) {
    new Drag(el, binding);
  }
})
