import Simple from './components/Simple';
import State from './components/State';

export default [
  {
    path: 'simple',
    name: 'simple',
    component: Simple,
  },
  {
    path: 'state',
    name: 'state',
    component: State
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
  }
]