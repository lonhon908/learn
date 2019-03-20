export default [{
  path: 'baseTrans',
  name: 'baseTrans',
  component: () => import(/* webpackChunkName: "baseTrans" */ './components/baseTrans.vue')
}, {
  path: 'customClass',
  name: 'customClass',
  component: () => import(/* webpackChunkName: "customClass" */ './components/customClass.vue')
}, {
  path: 'lifeCycle',
  name: 'lifeCycle',
  component: () => import(/* webpackChunkName: "lifeCycle" */ './components/lifeCycle.vue')
}, {
  path: 'firstRenderAppear',
  name: 'firstRenderAppear',
  component: () => import(/* webpackChunkName: "firstRenderAppear" */ './components/firstRenderAppear.vue')
}]
