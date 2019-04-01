<template>
  <div class="observable">
    <h2>Vue.observable( object )</h2>
    <p>让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。</p>
    <add-header></add-header>
  </div>
</template>

<script>
import Vue from 'vue';
// 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。
const state = Vue.observable({ count: 0 });
// 返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新。也可以作为最小化的跨组件状态存储器
export default {
  components: {
    'add-header': {
      render(h) {
        return h('button', {
          on: { click: () => { state.count++ }},
          attrs: { class: 'btn' }
        }, `count is: ${state.count}`)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
