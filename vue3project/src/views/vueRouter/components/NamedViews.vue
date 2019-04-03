<template>
  <div>
    <h2>1、命名视图</h2>
    <p>有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了。</p>
    <router-link class="btn" to="/vueRouter/namedViews/more">多视图</router-link>
    <div>
      <!-- 如果 router-view 没有设置名字，那么默认为 default -->
      <router-view></router-view>
      <router-view name="a"></router-view>
      <router-view name="b"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
