export default [{
  path: 'overlay',
  name: 'overlay',
  component: () => import(/* webpackChunkName: "Overlay" */ './components/Overlay.vue')
}, {
  path: 'toast',
  name: 'toast',
  component: () => import(/* webpackChunkName: "Toast" */ './components/Toast.vue')
}, {
  path: 'modal',
  name: 'modal',
  component: () => import(/* webpackChunkName: "Modal" */ './components/Modal.vue')
}, {
  path: 'autotextarea',
  name: 'autotextarea',
  component: () => import(/* webpackChunkName: "AutoTextarea" */ './components/TextareaAuto.vue')
}]
