export default [{
  path: '$data',
  name: '$data',
  component: () => import(/* webpackChunkName: "$Data" */ './components/$data.vue'),
}, {
  path: '$props',
  name: '$props',
  component: () => import(/* webpackChunkName: "$Props" */ './components/$props.vue'),
}]
