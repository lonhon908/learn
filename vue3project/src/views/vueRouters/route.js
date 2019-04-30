import Child1 from './components/DynamicRouteMatchingComponent/child1';
import Child2 from './components/DynamicRouteMatchingComponent/child2';
import Child3 from './components/DynamicRouteMatchingComponent/child3';
import Child4 from './components/DynamicRouteMatchingComponent/child4';

import Bar from './components/NamedViewsComponent/Bar.vue';
import Baz from './components/NamedViewsComponent/Baz.vue';
import Foo from './components/NamedViewsComponent/Foo.vue';

export default [{
  path: 'dynamicRouteMatching',
  name: 'dynamicRouteMatching',
  component: () => import(/* webpackChunkName: "DynamicRouteMatching" */ './components/DynamicRouteMatching.vue'),
  children: [{
    // 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params
    path: 'child1/:username/:password',
    name: 'dynamicRouteMatchingchild1',
    component: Child1
  }, {
    path: 'child2/:username/:password',
    name: 'dynamicRouteMatchingchild2',
    component: Child2
  }, {
    path: 'child3/:username/:password',
    name: 'dynamicRouteMatchingchild3',
    component: Child3
  }, {
    path: 'child4/:username/:password',
    name: 'dynamicRouteMatchingchild4',
    component: Child4
  }]
}, {
  path: 'namedViews',
  name: 'namedViews',
  component: () => import(/* webpackChunkName: "NamedViews" */ './components/NamedViews.vue'),
  children: [{
    path: 'more',
    // 一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)
    components: {
      default: Foo,
      a: Bar,
      b: Baz
    }
  }]
}]