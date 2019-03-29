export default [{
  path: 'baseRender',
  name: 'baseRender',
  component: () => import(/* webpackChunkName: "BaseRender" */ './components/baseRender.vue')
}]