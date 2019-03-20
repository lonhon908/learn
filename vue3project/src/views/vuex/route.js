export default [
  {
    path: 'state',
    name: 'state',
    component: () => import(/* webpackChunkName: "State" */ './components/State.vue')
  },
  {
    path: 'getter',
    name: 'getter',
    component: () => import(/* webpackChunkName: "Getter" */ './components/Getter.vue')
  },
  {
    path: 'mutations',
    name: 'mutations',
    component: () => import(/* webpackChunkName: "Mutations" */ './components/Mutations.vue')
  },
  {
    path: 'actions',
    name: 'actions',
    component: () => import(/* webpackChunkName: "Actions" */ './components/Action.vue')
  },
  {
    path: 'modules',
    name: 'modules',
    component: () => import(/* webpackChunkName: "Modules" */ './components/Modules.vue')
  },
  {
    path: 'createNamespacedHelpers',
    name: 'createNamespacedHelpers',
    component: () => import(/* webpackChunkName: "CreateNamespacedHelpers" */ './components/CreateNamespacedHelpers.vue')
  }
]