<template>
  <div>
    <h2>1、动态路由匹配</h2>
    <div>
      <!-- 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params -->
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child1/ex-longkui001/111111111">child1</router-link>
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child2/ex-longkui002/222222222">child2</router-link>
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child3/ex-longkui003/333333333">child3</router-link>
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child4/ex-longkui004/444444444">child4</router-link>
    </div>
    <router-view></router-view>
    <!-- 同一个路由，参数不一样 -->
    <!-- 响应路由参数的变化 -->
    <h2>2、同一个路由,响应路由参数的变化</h2>
    <p>当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，<b>这也意味着组件的生命周期钩子不会再被调用</b></p>
    <div>
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child1/ex-longkui001/111111111">111111111</router-link>
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child1/ex-longkui002/222222222">222222222</router-link>
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child1/ex-longkui003/333333333">333333333</router-link>
      <router-link class="btn" to="/vueRouter/dynamicRouteMatching/child1/ex-longkui004/444444444">444444444</router-link>
    </div>
    <p><b>可以简单地 watch (监测变化) $route 对象</b></p>
    <p><b>或者使用导航守卫beforeRouteUpdate</b></p>
  </div>
</template>

<script>
export default {
  
}
</script>

