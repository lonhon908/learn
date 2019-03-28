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
}, {
  path: 'multipleElementTransition',
  name: 'multipleElementTransition',
  component: () => import(/* webpackChunkName: "MultipleElementTransition" */ './components/multipleElementTransition.vue')
}, {
  path: 'multipleComponentTransition',
  name: 'multipleComponentTransition',
  component: () => import(/* webpackChunkName: "MultipleComponentTransition" */ './components/multipleComponentTransition.vue')
}, {
  path: 'listTransition',
  name: 'listTransition',
  component: () => import(/* webpackChunkName: "ListTransition" */ './components/listTransition.vue')
}]
