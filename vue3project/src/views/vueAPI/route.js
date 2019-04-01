export default [{
  path: '$data',
  name: '$data',
  component: () => import(/* webpackChunkName: "$Data" */ './components/$data.vue'),
}, {
  path: '$props',
  name: '$props',
  component: () => import(/* webpackChunkName: "$Props" */ './components/$props.vue'),
}, {
  path: 'extend',
  name: 'extend',
  component: () => import(/* webpackChunkName: "Extend" */ './components/extend.vue'),
}, {
  path: 'observable',
  name: 'observable',
  component: () => import(/* webpackChunkName: "Observable" */ './components/Observable.vue'),
}, {
  path: 'props',
  name: 'props',
  component: () => import(/* webpackChunkName: "Props" */ './components/Props.vue'),
}, {
  path: 'propsData',
  name: 'propsData',
  component: () => import(/* webpackChunkName: "PropsData" */ './components/propsData.vue'),
}, {
  path: 'lifecyclehooks',
  name: 'lifecyclehooks',
  component: () => import(/* webpackChunkName: "LifecycleHooks" */ './components/LifecycleHooks.vue'),
}, {
  path: 'functional',
  name: 'functional',
  component: () => import(/* webpackChunkName: "Functional" */ './components/functional.vue'),
}]
