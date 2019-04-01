export default [{
  path: 'baseRender',
  name: 'baseRender',
  component: () => import(/* webpackChunkName: "BaseRender" */ './components/baseRender.vue')
}, {
  path: 'jsx',
  name: 'jsx',
  component: () => import(/* webpackChunkName: "Jsx" */ './components/jsx.vue')
}, {
  path: 'functional2',
  name: 'functional2',
  component: () => import(/* webpackChunkName: "Functional2" */ './components/functional2.vue')
}]